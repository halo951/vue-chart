import { useThemeStore } from '@/store/theme'
import { TooltipComponentOption } from 'echarts'
import { createBarDefaultFormatter } from '../create-tooltip-formatter'

/** 创建悬浮提示
 *
 * @description 当指定了 formatter 时, 使用 formatter 替代原始渲染
 */
export const createTooltip = (formatter?: string | ((params: any) => string)): TooltipComponentOption => {
    const opt: TooltipComponentOption = useThemeStore().createChartToolTipStyle()
    opt.formatter = createBarDefaultFormatter()
    if (formatter) opt.formatter = formatter
    return opt
}
