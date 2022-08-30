import { EChartsOption } from 'echarts'

/** 创建(三关一闭, 维保, 巡检) 工单echart 图表
 *
 * @description 数值单位: 个位, 百分比单位: 0 ~ 100, 会在这个方法里面二次处理数据
 *
 * @param source 数据源, 格式: [x轴name, 按时完成数, 逾期完成数, 未完成数, 按时完成率]
 * @returns
 */
export const createOrderLineChart = (source: any): EChartsOption => {
    const options: EChartsOption = {}
    options.color = ['#5DA9B0', '#E7B554', '#D5DDDE', '#5DA9B0']
    options.dataset = { source }
    options.grid = { left: 45, right: 42, top: 63, bottom: 43 }

    options.tooltip = {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        // 后补充逻辑, 用于样式处理
        formatter: (series: any) => {
            series = series.sort((a: any) => {
                if (a.seriesName === '未完成') return -1
                else if (a.seriesName === '逾期完成') return -1
                else if (a.seriesName === '按时完成') return -1
                return 0
            })
            let out: Array<string> = [series[0].axisValue]
            for (const s of series) {
                let val: any = s.value[s.seriesIndex + 1]
                if (s.seriesName === '及时完成率') {
                    val += '%'
                    s.marker = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:7px;height:7px;border:2px solid #5DA9B0;"></span>`
                }
                out.push(
                    `<div>${s.marker} <span style="margin-right: 20px;">${s.seriesName}</span><span style='float: right;'>${val}</span></div>`
                )
            }
            return out.join('')
        }
    }

    options.legend = [
        {
            padding: [8, 0, 0, 0],
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 12,
                color: '#888888'
            },
            itemWidth: 16,
            itemHeight: 8,
            itemGap: window.innerWidth >= 355 ? 12 : 6
        }
    ]

    options.xAxis = [
        {
            type: 'category',
            axisLabel: {
                interval: 0,
                showMinLabel: true,
                padding: [6, 0, 0, 0],
                fontFamily: 'Microsoft YaHei',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 12,
                color: '#888888',
                formatter: (str: string) => {
                    let len: number = source.length
                    if (len < 3 || str.length <= 3) return str
                    else if (len < 6) return str.substring(0, 3) + '...'
                    else return str.substring(0, 2) + '...'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#CED5E9'
                }
            },
            triggerEvent: true
        }
    ]
    const calcYSplitNumber = () => {
        const max: number = source.reduce((max: number, c: any) => {
            if (max < c[1]) return c[1]
            if (max < c[2]) return c[2]
            if (max < c[3]) return c[3]
            return max
        }, 0)
        if (max <= 1) return 1
        else return 4
    }
    options.yAxis = [
        {
            name: '总点位(个)',
            type: 'value',
            axisLine: {
                lineStyle: {
                    dashOffset: 2
                }
            },
            splitLine: {
                show: false
            },
            splitNumber: calcYSplitNumber(),
            nameTextStyle: {
                padding: [0, 32, 0, 0]
            },
            axisLabel: {
                formatter: (value: number, index: number): string => {
                    if (value < 10000) return value.toFixed(0)
                    return Math.floor(value / 1000) + 'k'
                }
            }
        },
        {
            name: '及时完成率(%)',
            type: 'value',
            offset: 0,
            position: 'right',
            min: 0,
            max: 100,
            interval: 25,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#E6E6E6'
                }
            }
        }
    ]
    options.series = [
        {
            name: '按时完成',
            type: 'bar',
            stack: 'bar',
            barWidth: 26
        },
        {
            name: '逾期完成',
            type: 'bar',
            stack: 'bar',
            barWidth: 26
        },
        {
            name: '未完成',
            type: 'bar',
            stack: 'bar',
            barWidth: 26
        },
        {
            z: 3,
            name: '及时完成率',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            symbolSize: 8,
            emphasis: {
                itemStyle: {
                    shadowBlur: 4,
                    shadowColor: '#E6E6E6'
                }
            }
        }
    ]
    options.dataZoom = [
        {
            throttle: 50,
            show: true,
            zoomLock: true,
            type: 'inside',
            showDetail: false,
            showDataShadow: false,
            moveHandleSize: 0,
            xAxisIndex: [0],
            startValue: 0,
            endValue: 5 // 0 ~ 5 条显示,
        }
    ]
    return options
}
