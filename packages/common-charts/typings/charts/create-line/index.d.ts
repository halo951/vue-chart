import { EChartsOption } from 'echarts';
import { IBaseOptions, TArray } from '../intf';
export declare type TLineSource = TArray | Array<{
    name: string;
    source: TArray;
}>;
export interface ILineOptions extends IBaseOptions {
}
/** 创建柱状图 */
declare const _default: (source: TLineSource, options?: ILineOptions) => EChartsOption;
export default _default;
