import { useThemeStore } from '@/store/theme'
import { LegendComponentOption } from 'echarts'

/** 创建图例 */
export const createLegend = (): LegendComponentOption => {
    return {
        show: true,
        zlevel: 999,
        right: 0,
        top: 160,
        orient: 'vertical',
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 23,
        itemStyle: { opacity: 1 },
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: useThemeStore().chartAxisColor
        }
    }
}
