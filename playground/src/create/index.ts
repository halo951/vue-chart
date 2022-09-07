import { EChartsOption } from 'echarts'
import { createLegend } from './create-legend'
import { createSerie } from './create-serie'
import { createTitle } from './create-title'
import { createTooltip } from './create-tooltip'
import { setAnimation } from './set-animation'

export type TLegendPosition = 'top' | 'right' | 'bottom' | 'left'

export interface IPieOptions {
    /** 饼图半径
     *
     * @default 默认情况下,根据传入el推断合适的饼图半径.
     */
    radius?: string | number

    
    /** 数据源 */
    source: Array<[any, number]>

    /** 数量单位
     *
     * @description 仅用于 tooltip 提示展示
     */
    unit?: string

    /** 饼图是否是空心圆 */
    hollow?: boolean

    /** 标题 */
    title?: string | EChartsOption['title']

    /** 图例
     *
     * @description 默认情况下, 图例组件定位是根据 el 容器面积 以及 饼图面积推断. (居底, )
     * @default {true} 默认启用, 仅当传入 false 时禁用
     */
    legend?: false | EChartsOption['legend']

    /** hover 提示
     *
     * @description 遵循 echarts 规范
     * @default {true} 默认启用, 仅当传入 false 时禁用
     */
    tooltip?: false | EChartsOption['tooltip']

    /** 饼图颜色配置
     *
     * @description 遵循 echarts 规范
     * @default > ['#0091FF', '#00D6B9', '#F58300', '#AD82F7', '#B3D600', '#F76B64', '#FFC60A', '#00AB4A']
     */
    color?: EChartsOption['color']
}

/** 默认色彩配置 */
const DEFAULT_COLOR = ['#0091FF', '#00D6B9', '#F58300', '#AD82F7', '#B3D600', '#F76B64', '#FFC60A', '#00AB4A']

/** 创建饼状图
 *
 * @description 用于创建简单饼图(空心圆, 实心圆), 建议简单场景内使用, 复杂场景仍需要手工创建 EChartsOption
 * 默认携带以下元素
 *  - 饼图 (空心圆, 实心圆), 尺寸根据所在容器推断, 也可手工指定
 *  - 标题
 *  - legend 图例 (定位默认情况下根据容器推断, 也可手工指定)
 *  - tootip hover 提示
 *
 * @use 使用时, 一般需要指定 `source (数据源)`, `unit (单位)`, `el(容器)`
 * @returns EChartsOption
 */
export default (options: IPieOptions): EChartsOption => {
    // @ define options
    const chart: EChartsOption = {}

    // > 设置 动画
    setAnimation(chart)

    // > 设置颜色
    chart.color = options.color ?? DEFAULT_COLOR

    // > 设置 数据源
    chart.dataset = { source: options.source }

    // > 设置 标题
    if (options.title) chart.title = createTitle(options.title)

    // > 设置 图表
    chart.series = createSerie(options)

    // > 设置 图例
    // if (options.legend !== false) chart.legend = options.legend ?? createLegend(options)

    // > 设置 hover 提示
    // if (options.tooltip !== false) chart.tooltip = options.tooltip ?? createTooltip(options.unit)

    return chart
}
