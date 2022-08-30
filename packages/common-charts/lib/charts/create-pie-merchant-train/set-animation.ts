import { EChartsOption } from 'echarts'

/** 动画属性 */
const animationDuration: number = 1000
const animationDurationUpdate: number = 700
const animationEasingUpdate = 'cubicInOut'

/** 设置动画属性 */
export const setAnimation = (options: EChartsOption): void => {
    options.animationDuration = animationDuration
    options.animationDurationUpdate = animationDurationUpdate
    options.animationEasingUpdate = animationEasingUpdate
}
