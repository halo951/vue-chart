import { EChartsOption } from 'echarts'

type TColor = string
type TLabel = string
type TValue = number

/** 创建 年度专项任务统计 图表 */
export const createSpecialChart = (source: Array<[TLabel, TValue, TColor]>): EChartsOption => {
    const options: EChartsOption = {}

    // 设置颜色
    options.color = source.map((s) => s[2])
    // 设置数据源
    options.dataset = { source }

    options.tooltip = {}

    // 设置标题
    options.title = [
        {
            text: '任务总数',
            top: 93,
            left: 66,
            textAlign: 'center',
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                color: '#888888'
            }
        },
        {
            text: source.reduce((total, current) => total + current[1], 0).toString(),
            top: 68,
            left: 66,
            textAlign: 'center',
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '16px',
                color: '#000000'
            }
        }
    ]

    // 设置图例
    options.legend = [
        {
            icon: 'circle',
            itemWidth: 8,
            itemHeight: 8,
            itemGap: 12,
            left: 184 - 16,
            top: 'middle',
            orient: 'vertical',
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
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
                const value = source.find((d) => d[0] === name)?.[1]
                return [`{lab|${name}}`, `{value|${value}}`].join('')
            }
        }
    ]

    // 添加饼图
    options.series = [
        {
            type: 'pie',
            width: 112,
            height: 112,
            left: 16,
            top: 34,
            radius: [46, 56],
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
            }
        }
    ]

    return options
}
