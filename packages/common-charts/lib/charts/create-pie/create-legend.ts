import { LegendComponentOption } from 'echarts'

/** 添加图例 */
export const createLegend = (
    source: Array<any>,
    position: { r: number; x: number; y: number }
): LegendComponentOption => {
    const { r, x, y } = position
    return {
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 12,
        width: (r + x) * 2 - 20,
        height: 24 * Math.ceil(source.length / 2),
        left: 'center',
        top: r * 2 + y + 17,
        orient: 'vertical',
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 12,
            padding: [0, 0, 0, 4]
        },
        formatter: (name): string => {
            let value: string = '' + source.find((d) => d[0] === name)?.[1]
            value = name + ' ' + value
            if (value.length < 8) value += new Array(10 - value.length).fill(' ').join('')
            return value
        }
    }
}
