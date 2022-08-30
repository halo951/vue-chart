import { EChartsOption } from 'echarts'

/** 色彩配置 */
const color = ['#0090FF', '#FFA53D']

/** 设置颜色 */
export const setColor = (options: EChartsOption) => {
    options.color = color
}
