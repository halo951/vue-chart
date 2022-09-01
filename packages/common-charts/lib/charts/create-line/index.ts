import { EChartsOption } from 'echarts'
import { IBaseOptions, TArray } from '../intf'

export type TLineSource = TArray | Array<{ name: string; source: TArray }>

export interface ILineOptions extends IBaseOptions {}

/** 创建柱状图 */
export default (source: TLineSource, options?: ILineOptions): EChartsOption => {
    const out: EChartsOption = {}
    return out
}
