import { graphic, EChartsOption } from 'echarts'

/** 色彩配置 | 渐变色 */
const color = new graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: '#4EB1FD' }, // 0% 处的颜色
    { offset: 1, color: '#019CFF' } // 100% 处的颜色
])

/** 设置颜色 */
export const setColor = (options: EChartsOption) => {
    options.color = [color]
}
