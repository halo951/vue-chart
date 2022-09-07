import { TooltipComponentOption } from 'echarts'

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(1).replace(/\.0$/, '') + '%'
}

/** 创建悬浮提示 */
export const createTooltip = (unit?: string): TooltipComponentOption => {
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
        position: 'right'
        // formatter: (params: any): string => {
        //     const { chartAxisColor, chartValueColor } = useThemeStore()
        //     params = params instanceof Array ? params[0] : params
        //     if (percentFormatter) params.percent = percentFormatter(params)
        //     const unit: string = transformUnit(params.seriesName)
        //     const label: string = params.data[0]
        //     const value: string = `${params.data[1]}${unit}&nbsp;&nbsp;&nbsp;${params.percent}%`
        //     return [
        //         `${params.marker}<span style='margin-left:8px; margin-right: 12px; font-size: 12px; color:${chartAxisColor};'>${label}</span>`,
        //         `<span style='font-size: 14px; color:${chartValueColor}; margin-top: 4px;'>${value}</span>`
        //     ].join('<br />')
        // }
    }
    return opt
}
