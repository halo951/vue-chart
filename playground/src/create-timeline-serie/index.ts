import { EChartsOption, YAXisComponentOption } from 'echarts'
import { createTitle } from './create-title'
import { createSubTitle } from './create-sub-title'
import { createSerie } from './create-serie'
import { createXAxis } from './create-xAxis'
import { createYAxis } from './create-yAxis'
import { createTooltip } from './create-tooltip'
import { transformDatasource } from './transform-datasource'

export interface ITimelineOptions {
    /** 数据源 */
    source: Array<Array<any>>
    /** 一级标题 */
    title: string
    /** 二级标题 */
    subtitle?: { name: string; value?: number }
    /** y轴配置 */
    y?: YAXisComponentOption
    /** formatter label */
    formatter?: (params: any) => string
}
/** 创建时间线折线图 */
export const createTimelineLine = (params: ITimelineOptions): EChartsOption => {
    const options: EChartsOption = {}
    // 处理原始数据, 将 [日期, value] 转化为 [day, value, origin date]
    const { x, max, source, dimensions } = transformDatasource(params.source)
    // 初始化标题
    options.title = []
    // 添加一级标题
    options.title.push(createTitle(params.title))
    // 添加二级标题 (label: value)
    if (params.subtitle) options.title.push(createSubTitle(params.subtitle))
    // 添加数据源
    options.dataset = { source, dimensions }
    // 添加坐标定位
    options.grid = { right: 0, bottom: 46 }
    // 添加 悬浮提示
    options.tooltip = createTooltip(params.formatter)
    // 添加坐标系
    options.xAxis = [createXAxis(x)]
    options.yAxis = [createYAxis(max || 100)]
    // 添加图表
    options.series = [createSerie()]
    return options
}
