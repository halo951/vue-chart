import { EChartsOption } from 'echarts'

type TColor = string
type TLabel = string
type TValue = number

/** 创建工单统计饼图 */
export const createWorkOrderChart = (source: Array<[TColor, TLabel, TValue]>): EChartsOption => {
    const options: EChartsOption = {}
    options.color = source.map((s) => s[0])
    options.dataset = { source: source.map((s) => [s[1], s[2]]) }
    options.tooltip = {}

    options.series = [
        {
            type: 'pie',
            width: 80,
            height: 80,
            left: 20,
            top: 'middle',
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            emphasis: {
                scaleSize: 3
            },
            showEmptyCircle: false
        }
    ]
    options.legend = [
        {
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 8,
            left: 120,
            top: 'middle',
            orient: 'vertical',
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                color: '#8D9399',
                rich: {
                    lab: {
                        padding: [0, 0, 0, 6],
                        width: 12 * 8
                    },
                    value: {}
                }
            },
            formatter: (name): string => {
                const value = source.find((d) => d[1] === name)?.[2]
                return [`{lab|${name}}`, `{value|${value}}`].join('')
            }
        }
    ]
    return options
}
