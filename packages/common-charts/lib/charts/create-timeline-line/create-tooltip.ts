import { TooltipComponentOption } from 'echarts'
import { useThemeStore } from '@/store/theme'
/** 创建悬浮提示 */
export const createTooltip = (formatter?: (params: any) => string): TooltipComponentOption => {
    const opt = useThemeStore().createChartToolTipStyle()
    opt.trigger = 'axis'
    opt.position = (pt: Array<number>) => [pt[0], '0%']
    opt.formatter = formatter
    return opt
}
