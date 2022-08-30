import { useThemeStore } from '@/store/theme'
import { LegendComponentOption } from 'echarts'

/** 创建图例 */
export const createLegend = (legend?: LegendComponentOption): LegendComponentOption => {
    return {
        show: true,
        zlevel: 999,
        top: 12,
        right: -5,
        itemGap: 6,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 12,
            color: useThemeStore().chartAxisColor
        },
        ...legend
    }
}
