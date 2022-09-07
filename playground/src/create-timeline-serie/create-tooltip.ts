import { TooltipComponentOption } from 'echarts'

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(1).replace(/\.0$/, '') + '%'
}

/** 创建悬浮提示 */
export const createTooltip = (formatter?: (params: any) => string): TooltipComponentOption => {
    const opt: TooltipComponentOption = {
        show: true,
        extraCssText: 'text-align:left;',
        enterable: true,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 12,
            color: '#1F2429'
        },
        backgroundColor: '#ffffff',
        shadowBlur: 6,
        shadowOffsetY: 3,
        trigger: 'axis',
        position: (pt: Array<number>) => [pt[0], '0%'],
        formatter: (params: any): string => {
            const value: string = `${params.seriesName} ${makeText(params.value[2], params.value[0])}`
            return [
                params.marker,
                `<span style='margin-left: 8px; font-size: 12px; color: #1F2429;'>${value}</span>`
            ].join('')
        }
    }
    return opt
}
