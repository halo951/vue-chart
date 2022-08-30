import { EChartsOption } from 'echarts'

/** 色彩配置 */
const color = ['#0091FF', '#00D6B9', '#F58300', '#AD82F7', '#B3D600', '#F76B64', '#FFC60A', '#00AB4A']

/** 设置颜色 */
export const setColor = (options: EChartsOption) => {
    options.color = color
}
