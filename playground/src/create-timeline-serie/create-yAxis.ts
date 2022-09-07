import { YAXisComponentOption } from 'echarts'

/** 创建y轴 */
export const createYAxis = (max: number): YAXisComponentOption => {
    return {
        type: 'value',
        min: 0,
        max,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
            lineStyle: {
                color: `rgba(239, 240, 241, 1)`,
                type: 'solid'
            }
        },
        splitNumber: 4,
        axisLabel: {
            interval: 0,
            fontWeight: 600,
            fontSize: 12,
            color: `#8D9399`
        }
    }
}
