import { BarSeriesOption } from 'echarts'

/** 创建柱状图 */
export const createSerie = (index: number, name?: string, serie?: BarSeriesOption): BarSeriesOption => {
    return {
        // 指定 y轴, 图例名
        name,
        yAxisIndex: index,
        // 覆盖样式
        ...SERIES_BAR_OPTIONS[index],
        ...serie,
        animationDelay: (idx: number): number => idx * 60
    }
}

/** 柱状图默认属性(样式) */
const SERIES_BAR_OPTIONS: Array<BarSeriesOption> = [
    {
        type: 'bar',
        barWidth: 12,
        barGap: 6,
        barMinHeight: 15,
        itemStyle: {
            borderCap: 'butt',
            borderWidth: 4,
            borderColor: 'transparent',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    { offset: 0, color: '#51B2FF' },
                    { offset: 1, color: '#0094FF' }
                ]
            },
            borderRadius: [4, 4, 0, 0]
        },
        animationDelay: (idx: number): number => idx * 10 + 100
    },
    {
        type: 'bar',
        barWidth: 12,
        barGap: 0.4,
        barMinHeight: 15,
        itemStyle: {
            borderCap: 'butt',
            borderWidth: 4,
            borderColor: 'transparent',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    { offset: 0, color: '#28F0D6' },
                    { offset: 1, color: '#14E1C6' }
                ]
            },
            borderRadius: [4, 4, 0, 0]
        },
        animationDelay: (idx: number): number => idx * 10 + 100
    }
]
