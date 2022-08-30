import { useThemeStore } from '@/store/theme'
import { XAXisComponentOption } from 'echarts'

/** 创建x轴 */
export const createXAxis = (x?: XAXisComponentOption): XAXisComponentOption => {
    return {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
            fontWeight: 600,
            fontSize: 12,
            color: useThemeStore().chartColor
        },
        ...x
    }
}
