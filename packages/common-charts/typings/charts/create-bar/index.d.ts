import { IBaseOptions, TArray } from '../intf';
export declare type TBarSource = TArray | Array<{
    name: string;
    source: TArray;
}>;
export interface IBarOptions extends IBaseOptions {
}
/** 创建 */
export declare const createBar: (source: TBarSource, options?: IBarOptions) => void;
