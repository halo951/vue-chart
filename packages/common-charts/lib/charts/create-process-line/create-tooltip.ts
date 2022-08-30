import { useThemeStore } from '@/store/theme'
import { TooltipComponentOption } from 'echarts'
import { createProcessFormatter } from '../create-tooltip-formatter'

/** 创建悬浮提示 */
export const createTooltip = (): TooltipComponentOption => {
    const opt = useThemeStore().createChartToolTipStyle()
    opt.formatter = createProcessFormatter()
    return opt
}
