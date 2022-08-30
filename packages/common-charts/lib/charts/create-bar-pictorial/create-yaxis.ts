import { YAXisComponentOption } from 'echarts'

/** 创建y轴 */
export const createYAxis = (): YAXisComponentOption => {
    return { show: false, max: 1 }
}
