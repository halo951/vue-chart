import { EChartsOption } from 'echarts'

export type Tkey = string | number

export type TArray = Array<[Tkey, number]>

export interface IBaseOptions {
    options: EChartsOption
}
