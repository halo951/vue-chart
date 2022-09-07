import { EChartsOption, TitleComponentOption } from 'echarts'

export interface IPieOptions {}
/** 创建饼状图
 *
 * @returns EChartsOption
 */
export default (source: Array<[any, number]>, options: IPieOptions): EChartsOption => {
    // @ define options
    const chart: EChartsOption = {}

    return chart
}
