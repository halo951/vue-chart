import { EChartsOption } from 'echarts'
import { IBaseOptions, TArray } from '../intf'

export type TPieSource = TArray | Array<{ name: string; source: TArray }>

export interface IPieOptions extends IBaseOptions {}

/** 创建 */
export const createPieChart = (source: TPieSource, options?: IPieOptions): EChartsOption => {
    const out: EChartsOption = {}
    return out
}
