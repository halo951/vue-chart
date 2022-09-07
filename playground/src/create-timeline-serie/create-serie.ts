import { graphic, SeriesOption } from 'echarts'

/** 创建图表 */
export const createSerie = (): SeriesOption => {
    return {
        // 平滑曲线
        // smooth: true,
        type: 'line',
        // 选中坐标点样式 (仅选中时, 展示)
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 11,
        itemStyle: {
            color: '#14E1C6',
            borderWidth: 3,
            borderColor: '#ffffff',
            shadowBlur: 4,
            shadowOffsetY: 2,
            shadowColor: 'rgba(192, 141, 105, 0.5)'
        },
        sampling: 'lttb',
        lineStyle: { color: '#14E1C6' },
        areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#14E1C6' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(20, 225, 198, 0.1)' // 100% 处的颜色
                }
            ])
        },
        animationDelay: (idx: number): number => idx * 60
    }
}
