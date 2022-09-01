import { EChartsOption } from 'echarts';
import { IBaseOptions, TArray } from '../intf';
export declare type TPieSource = TArray | Array<{
    name: string;
    source: TArray;
}>;
export interface IPieOptions extends IBaseOptions {
}
/** 创建 */
export declare const createPieChart: (source: TPieSource, options?: IPieOptions) => EChartsOption;
