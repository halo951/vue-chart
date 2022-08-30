import { useThemeStore } from '@/store/theme'
import { XAXisComponentOption } from 'echarts'

export const createXAxis = (): XAXisComponentOption => {
    return {
        axisLabel: {
            rotate: -45,
            fontFamily: 'PingFang SC',
            fontWeight: 600,
            fontSize: 12,
            color: useThemeStore().chartAxisColor,
            formatter(value: string) {
                if (value.length >= 6) {
                    return value.substring(0, 6) + '...'
                } else {
                    return value
                }
            }
        }
    }
}
