import { EChartsOption } from 'echarts'
import { IBaseOptions, TArray } from '../intf'

export type TBarSource = TArray | Array<{ name: string; source: TArray }>

export interface IBarOptions extends IBaseOptions {}

/** 创建 */
export const createBarChart = (source: TBarSource, options?: IBarOptions): EChartsOption => {
    return {}
}
