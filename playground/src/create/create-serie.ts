import { PieSeriesOption } from 'echarts'

interface IPieOptionsMixin {
    /** 指定饼图容器
     *
     * @description 用于推断饼图渲染尺寸,
     */
    el?: HTMLElement

    /** 饼图是否是空心圆 */
    hollow?: boolean /** 饼图是否是空心圆 */

    /** 饼图半径
     *
     * @default 默认情况下,根据传入el推断合适的饼图半径.
     */
    radius?: string | number
}
/** 创建饼图 */
export const createSerie = (mixin: IPieOptionsMixin): PieSeriesOption => {
    let r: number = 0

    if (mixin.radius) {

    }

    return {
        type: 'pie',
        radius: mixin.radius ?? ['40%', '50%'],
        center: ['center', '30%'],
        avoidLabelOverlap: false,
        label: { show: false, position: 'center' },
        emphasis: {
            label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
                color: '#8D9399'
            }
        },
        emptyCircleStyle: {
            color: '#D1EBFF'
        }
    }
}
