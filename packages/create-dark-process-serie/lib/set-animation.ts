import { EChartsOption } from 'echarts'

/** 动画属性 */
const animationDuration: number = 1000
const animationDurationUpdate: number = 700
const animationEasingUpdate = 'linear'

/** 设置动画属性 */
export const setAnimation = (chart: EChartsOption): void => {
    chart.animationDuration = animationDuration
    chart.animationDurationUpdate = animationDurationUpdate
    chart.animationEasingUpdate = animationEasingUpdate
    chart.stateAnimation = { duration: 0 }
}
