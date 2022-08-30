import { EChartsOption } from 'echarts'
import { createLegend } from './create-legend'
import { createSeries } from './create-serie'
import { createTooltip } from './create-tooltip'
import { setAnimation } from './set-animation'
import { setColor } from './set-color'

interface IParams {
    all: number
    completed: number
}

/** 创建 商户培训图表 (饼图) */
export const createMerchantTrainChart = (params: IParams): EChartsOption => {
    const source: Array<[string, number, number]> = [
        ['已完成培训商户数', params.completed, params.all],
        ['未完成培训商户数', params.all - params.completed, params.all]
    ]
    const options: EChartsOption = {}
    // 设置动画属性
    setAnimation(options)
    // 设置颜色
    setColor(options)

    // 添加 数据源
    // 格式: [lab, val, all]
    options.dataset = [
        { source: [['已完成培训商户数', params.completed, params.all]] },
        { source: [['未完成培训商户数', params.all - params.completed, params.all]] }
    ]
    // 添加 图例
    options.legend = [createLegend()]
    // 添加 悬浮提示
    options.tooltip = createTooltip()
    // 添加图标集
    options.series = createSeries(source)

    // @ 定义外圈圆半径
    const r: number = 222.76 / 2
    // 设置坐标轴, 及定位
    options.angleAxis = { show: false, min: 0, max: params.all, type: 'value', startAngle: 90 }
    options.radiusAxis = { show: false }
    options.polar = { center: [72.49 + r, 74.98 + r], radius: r }
    return options
}
