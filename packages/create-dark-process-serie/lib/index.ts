import { EChartsOption, PolarComponentOption } from 'echarts'
import { createSerie } from './create-serie'
import { createTooltip } from './create-tooltip'
import { setAnimation } from './set-animation'
import { setColor } from './set-color'

export interface IProcessSerieOptions {
    /** 当前值 */
    val: number

    /** 最大值, 即进度环终点数值 */
    max: number

    /** (非必填) 标题 & tooltip 提示描述 */
    title?: string

    /** (非必填) 极值检查
     *
     * @description 启用状态下, 当 `val` > `max` 时, 进度条不再增加
     * @default {true} 默认启用
     */
    skipMaxCheck?: boolean

    /** 圆心位置 及 大小 */
    polar?: Pick<PolarComponentOption, 'center'> & {
        /** 圆心坐标 */
        center?: Array<string | number>
        /** @params {number} radius 由于背景图宽度固定的原因, 这里 半径(r) 只能传入 number */
        radius?: number
    }

    /** 背景图 */
    background?: HTMLImageElement
}

/** 创建圆环进度图 (custom serie)
 *
 * @description Tip: 不要禁用动画, 禁用后会导致背景图需要hover触发后才显示
 * @param {IProcessSerieOptions} options
 * @returns EChartsOption
 */
export default (options: IProcessSerieOptions): EChartsOption => {
    // @define options
    const chart: EChartsOption = {}
    // @ 定义颜色
    setColor(chart)
    // @ 定义动画
    setAnimation(chart)

    // @ 定义 serie
    chart.series = createSerie(options.title, options.background)

    // > 设置 数据源 | max, min, current
    chart.dataset = { source: [[options.max, 0, options.val]] }

    // > 设置 容器范围
    chart.grid = { top: 0, left: 0, right: 0, bottom: 0 }

    // > 设置 定位及坐标参数
    chart.angleAxis = { show: false, min: 0, max: options.max, type: 'value' }
    chart.radiusAxis = { show: false }

    // > 设置 极坐标系中心点, 与 r(半径)
    chart.polar = { center: ['center', 'center'], radius: 100, ...options.polar }

    // ? 如果指定了标题, 那么创建tooltip (如需关闭, 手工执行 delete <prop> 即可)
    // ! 由于不好确定 标题 y轴定位, 所以干脆将标题渲染到 serie 内
    if (options.title) {
        // > 设置 hover 提示
        chart.tooltip = createTooltip()
    }

    return chart
}
