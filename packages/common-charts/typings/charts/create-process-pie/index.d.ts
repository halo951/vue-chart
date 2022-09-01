import { EChartsOption } from 'echarts';
import { IBaseOptions, TArray } from '../intf';
export declare type TBarSource = TArray | Array<{
    name: string;
    source: TArray;
}>;
export interface IBarOptions extends IBaseOptions {
}
/** 创建 */
export declare const createBarChart: (source: TBarSource, options?: IBarOptions) => EChartsOption;
