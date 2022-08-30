import { XAXisComponentOption } from 'echarts'

/** 创建x轴 */
export const createXAxis = (data: Array<any>): XAXisComponentOption => {
    return {
        data,
        axisTick: { show: false },
        axisLabel: {
            interval: 0,
            fontWeight: 600,
            fontSize: 12,
            color: '#8D9399',
            formatter: (item: any) => {
                return Number(item).toString()
            }
        }
    }
}
