import type {
    BarSeriesOption,
    EChartsOption,
    GridComponentOption,
    LegendComponentOption,
    TitleComponentOption,
    XAXisComponentOption,
    YAXisComponentOption
} from 'echarts'
import { createDataZoom } from './create-datazoom'
import { createLegend } from './create-legend'
import { createSerie } from './create-serie'
import { createTitle } from './create-title'
import { createTooltip } from './create-tooltip'
import { createXAxis } from './create-xaxis'
import { createYAxis } from './create-yaxis'

export interface IParams {
    /** 标题 */
    title?: string | TitleComponentOption
    /** 布局调整 */
    grid?: GridComponentOption
    /** x轴配置 */
    x?: XAXisComponentOption
    /** y轴配置 */
    y?: YAXisComponentOption
    /** 图例配置 */
    legend?: false | LegendComponentOption
    /** 自定义tooltip渲染 */
    formatter?: string | ((params: any) => string)
    /** 图表配置 */
    series: Array<{
        /** 图例名称 */
        name?: string
        /** y轴 (对应到列的y轴配置) */
        y?: YAXisComponentOption
        /** 表格独立样式 */
        serie?: BarSeriesOption
    }>
    /** 元数据 */
    source: Array<[any, number]> | Array<[any, number, number]>

    /** 滚动条选项 */
    dataZoom?: boolean
}

/** 创建通用柱状图 */
export const createBarChart = (params: IParams): EChartsOption => {
    const options: EChartsOption = {}
    // 设置 标题
    options.title = createTitle(params.title)
    // 添加 悬浮提示
    options.tooltip = createTooltip(params.formatter)
    // 添加 x轴
    options.xAxis = [createXAxis(params.x)]
    // ! 注: series 数组长度最大为2, 所以不再这里扣循环性能问题.
    // 添加 y轴
    options.yAxis = params.series.map((s, n) => {
        return createYAxis(n, params.source, { ...params.y, ...s.y })
    })
    // 添加 图表
    options.series = params.series.map((s, n) => createSerie(n, s.name, s.serie))
    // 设置 布局
    options.grid = params.grid
    // 添加 数据源
    options.dataset = [{ source: params.source }]
    // (可选) 添加滚动条
    if (params.dataZoom) options.dataZoom = createDataZoom()
    // (可选) 设置图例
    if (params.legend !== false) options.legend = createLegend(params.legend)
    return options
}
