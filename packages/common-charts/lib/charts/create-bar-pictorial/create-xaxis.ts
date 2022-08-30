import { XAXisComponentOption } from 'echarts'

/** 创建x轴 */
export const createXAxis = (): XAXisComponentOption => {
    return { axisLine: { show: false }, axisTick: { show: false } }
}
