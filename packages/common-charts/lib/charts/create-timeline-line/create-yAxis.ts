import { useThemeStore } from '@/store/theme'
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
                color: useThemeStore().chartBorderColor,
                type: useThemeStore().dark ? 'dashed' : 'solid'
            }
        },
        splitNumber: 4,
        axisLabel: {
            interval: 0,
            fontWeight: 600,
            fontSize: 12,
            color: useThemeStore().chartAxisColor
        }
    }
}
