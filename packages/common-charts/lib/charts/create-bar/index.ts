import { IBaseOptions, TArray } from '../intf'

export type TBarSource = TArray | Array<{ name: string; source: TArray }>

export interface IBarOptions extends IBaseOptions {}

/** 创建 */
export const createBar = (source: TBarSource, options?: IBarOptions) => {}
