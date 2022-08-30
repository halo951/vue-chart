import type { EChartsOption, GridComponentOption, PictorialBarSeriesOption, TitleComponentOption } from 'echarts'
import { createBarChart } from '../create-bar'
import { createTitle } from './create-title'
import { createSerie } from './create-serie'
import { createYAxis } from './create-yaxis'
import { createXAxis } from './create-xaxis'
import { createTooltip } from './create-tooltip'

interface IParams {
    /** 标题 */
    title: string
    /** 图例描述 */
    legendLabel: string
    /** 单位后缀 */
    unit: string
    /** 数据源 */
    source: Array<[string, number]>
    /** grid 布局 */
    grid?: GridComponentOption
    /** y轴极值 */
    max?: number
}

const defaultFormatter = (params: any) => {
    return [`${params.marker} ${params.title}`, `${params.value[1]}人`].join('<br />')
}

/** 创建 带间隙的柱状图 */
export const createPictorialChart = (params: IParams): EChartsOption => {
    const options: EChartsOption = createBarChart({
        title: createTitle(params.title),
        x: createXAxis(),
        y: createYAxis(),
        formatter: createTooltip(params.unit, params.legendLabel),
        grid: params.grid ?? { left: 0, right: 0, bottom: 46 },
        legend: false,
        series: [{}],
        source: params.source
    })
    // 添加 自定义样式柱状图
    options.series = [createSerie()]
    return options
}
