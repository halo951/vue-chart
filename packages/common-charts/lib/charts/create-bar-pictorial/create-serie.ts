import { useThemeStore } from '@/store/theme'
import { PictorialBarSeriesOption } from 'echarts'

/** 创建 自定义样式柱状图 */
export const createSerie = (): PictorialBarSeriesOption => {
    return {
        barMinHeight: 5,
        type: 'pictorialBar',
        barWidth: 14,
        label: { show: true, position: 'top', color: useThemeStore().chartValueColor, shadowBlur: 0 },
        itemStyle: { color: '#0091FF' },
        symbol: 'rect',
        symbolRepeat: true,
        symbolSize: [14, 6],
        symbolPosition: 'start',
        animationDelay(_idx: number, params: any) {
            const delay: number = 80 / (params?.count || 10)
            return params?.index * delay ** 2
        }
    }
}
