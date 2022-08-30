import { PieSeriesOption } from 'echarts'

/** 创建饼图 */
export const createSerie = (position: { r: number; x: number; y: number }): PieSeriesOption => {
    const { r, y } = position
    return {
        type: 'pie',
        radius: [r - 10, r],
        center: ['50%', y + r],
        avoidLabelOverlap: false,
        label: { show: false, position: 'center' },
        emphasis: {
            label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold'
            }
        },
        emptyCircleStyle: {
            color: '#D1EBFF'
        }
    }
}
