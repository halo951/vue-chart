import { useThemeStore } from '@/store/theme'
import { TooltipComponentOption } from 'echarts'
import { createPieDefaultFormatter } from '../create-tooltip-formatter'

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(0)
}

/** 创建 悬浮提示 */
export const createTooltip = (): TooltipComponentOption => {
    const opt = useThemeStore().createChartToolTipStyle()
    opt.formatter = createPieDefaultFormatter((params) => makeText(params.data[1], params.data[2]))
    return opt
}
