import { EChartsOption, TitleComponentOption } from 'echarts'

export type TKey = string | number

export interface IBarOptions {
    /** 标题
     *
     * @description
     */
    title: string | TitleComponentOption
    /** x轴是否倾斜 */
    xTilt?: boolean
}

/** 创建柱状图
 *
 * @description aewfawejfiawef
 * @returns EChartsOption
 */
export default (source: Array<[TKey, number]>, options?: IBarOptions): EChartsOption => {
    // @ options
    const opt: EChartsOption = {}

    // 添加 标题

    //

    return opt
}
