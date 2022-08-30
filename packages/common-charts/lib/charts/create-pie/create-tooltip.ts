import { TooltipComponentOption } from 'echarts'
import { createPieDefaultFormatter } from '../create-tooltip-formatter'

/** 创建悬浮提示 */
export const createTooltip = (unit: string): TooltipComponentOption => {
    const opt: TooltipComponentOption = {}
    opt.position = 'right'
    opt.formatter = createPieDefaultFormatter()
    return opt
}
