import { h, PropType, defineComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue-demi'
import { ECharts, EChartsOption, init } from 'echarts'
import { delay, qraf } from './utils'

export interface IChartData {
    chart: ECharts | null
    sleep: number
}

export interface IDefaultOptions {
    /** 首次渲染休眠时间
     *
     * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
     */
    firstRenderSleep: number
    /** 指定每次更新 options 后, 是否清除老数据
     *
     * @description 用来解决解决动画冲突问题
     */
    clear: boolean
    /** 渲染方式
     *
     * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
     * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
     */
    renderer: 'canvas' | 'svg'
}

/** 默认参数 */
export const DEFAULT_OPTIONS: IDefaultOptions = {
    firstRenderSleep: 0,
    clear: false,
    renderer: (() => {
        const ua = navigator.userAgent.toLowerCase()
        return /mobile/.test(ua) ? 'svg' : 'canvas'
    })()
}

export const Chart = defineComponent({
    /** component name */
    name: 'Chart',
    /** props definition */
    props: {
        /** 创建echarts图表参数 */
        options: {
            type: Object as PropType<EChartsOption>,
            default: () => ({})
        },
        /** 首次渲染休眠时间
         *
         * @description 针对移动端设备(尤其是android), 同一时间渲染过多的chart时, 会由于同一时间触发多个渲染导致卡顿, 所以默认情况下会给定一个用户无感知的休眠时间, 避免多次渲染造成的卡顿问题
         */
        firstRenderSleep: {
            type: Number,
            default: () => DEFAULT_OPTIONS.firstRenderSleep
        },
        /** 指定每次更新 options 后, 是否清除老数据
         *
         * @description 用来解决解决动画冲突问题
         */
        clear: {
            type: Boolean,
            default: () => DEFAULT_OPTIONS.clear
        },
        /** 渲染方式
         *
         * @description 如果遇到移动端设备卡顿, 可以尝试将渲染方式修改为 svg 渲染
         * @lib https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg
         */
        renderer: {
            type: String as PropType<'canvas' | 'svg'>,
            default: () => DEFAULT_OPTIONS.renderer
        }
    },
    setup(props, {}) {
        /** @define echart 图表对象 */
        const chart = ref<ECharts | null>(null)
        /** @define 首次渲染休眠时间 */
        const sleep = ref<number>(0)
        /** @define chart root node */
        const el = ref<HTMLDivElement>()

        /** @func 更改渲染参数 */
        const renderOptions = async (): Promise<void> => {
            if (!chart.value) return
            if (sleep.value > Date.now()) {
                await delay(sleep.value - Date.now())
            }
            qraf.push(() => chart.value?.setOption(props.options ?? {}))
        }

        /** @func 添加图例定位 */
        const appendTooltipPosition = (tooltip: echarts.TooltipComponentOption): void => {
            if (tooltip.position) return
            tooltip.confine = true
            tooltip.position = function (_a, _b, el) {
                if (el instanceof HTMLElement) {
                    if (el.getBoundingClientRect().left < 0) {
                        return 'right'
                    } else if (el.getBoundingClientRect().right > window.innerWidth - el.clientWidth) {
                        return 'left'
                    }
                }
                return 'inside'
            }
        }
        /** @func 页面尺寸变化时, 重计算 */
        const onResize = (): void => {
            chart.value?.resize()
        }

        /** @func 监听到 option 变化时, 预处理属性变更, 并触发渲染 */
        const onChangeOption = () => {
            if (!chart.value) return
            if (props.clear) chart.value.clear()
            const { tooltip } = props.options
            if (tooltip) {
                if (tooltip instanceof Array) {
                    for (const t of tooltip) appendTooltipPosition(t)
                } else {
                    appendTooltipPosition(tooltip)
                }
            }
            renderOptions() // rerender
        }

        watch(ref(props.options), () => onChangeOption())

        onMounted(() => {
            sleep.value = props.firstRenderSleep + Date.now()
            chart.value = init(el.value as HTMLDivElement, 'default', { renderer: props.renderer })
            if (props.options) renderOptions()
            window.addEventListener('resize', onResize)
        })

        onBeforeUnmount(() => {
            if (!chart.value || chart.value.isDisposed()) return
            chart.value.dispose()
            window.removeEventListener('resize', onResize)
        })
        return { el }
    },
    render() {
        return h('div', { ref: 'el', class: 'chart' })
    }
})
