import { EChartsOption } from 'echarts'
import { createSerie } from './create-serie'
import { createTooltip } from './create-tooltip'
import { createLegend } from './create-legend'
import { setColor } from './set-color'
import { setAnimation } from './set-animation'
import { createTitle } from './create-title'

interface IParams {
    /** 标题 */
    title: string
    /** 数量单位 */
    unit: string
    /** 数据源 */
    source: Array<[string, number]>
    /** 布局/坐标 */
    position: { r: number; x: number; y: number }
}

/** 创建通用饼图 */
export const createPieChart = (params: IParams): EChartsOption => {
    const options: EChartsOption = {}
    // 设置动画
    setAnimation(options)
    // 设置 颜色区间
    setColor(options)
    // 设置 标题#0091FF
    options.title = [createTitle(params.title)]
    // 添加 图例
    options.legend = [createLegend(params.source, params.position)]
    // 添加 悬浮提示
    options.tooltip = createTooltip(params.unit)
    // 添加 图表
    options.series = [createSerie(params.position)]
    // 设置 数据源
    options.dataset = { source: params.source }

    return options
}
