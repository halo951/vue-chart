import { EChartsOption } from 'echarts'
import { setAnimation } from './set-animation'
import { setColor } from './set-color'
import { createTitle } from './create-title'
import { createTooltip } from './create-tooltip'
import { createSerie } from './create-serie'

export interface IParams {
    title: string
    current: number
    all: number
}

/** 创建进度条 */
export const createProcessLine = (params: IParams): EChartsOption => {
    const options: EChartsOption = {}
    // 设置动画属性
    setAnimation(options)
    // 设置颜色
    setColor(options)
    // 设置标题
    options.title = [createTitle(params.title)]
    // 设置容器范围
    options.grid = { top: 0, left: 0, right: 0, bottom: 0 }
    // 设置数据源 | max, min, current
    options.dataset = { source: [[params.all, 0, params.current]] }
    /** 设置极坐标系参数 */
    options.angleAxis = { show: false, min: 0, max: params.all, type: 'value' }
    options.radiusAxis = { show: false }
    /** 设置极坐标系中心点, 与 r(半径) */
    options.polar = { center: ['center', 140.87 / 2 + 32.75], radius: 140.87 / 2 + 14.4 / 2 }
    /** 设置图表配置 */
    options.series = [createSerie(params.title)]
    // 创建 悬浮提示
    options.tooltip = createTooltip()
    options.stateAnimation = { duration: 0 }
    // set
    return options
}
