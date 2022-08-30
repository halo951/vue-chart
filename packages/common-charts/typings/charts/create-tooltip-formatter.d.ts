export declare type IFormatter = (params: any) => string;
export declare const createBarDefaultFormatter: () => IFormatter;
export declare const createPieDefaultFormatter: (percentFormatter?: ((params: any) => string) | undefined) => IFormatter;
export declare const createPictorialFormatter: (unit: string, legendLabel: string) => (params: any) => string;
/** 创建 processline tooltip */
export declare const createProcessFormatter: () => (params: any) => string;
/** 扩展暗黑主题后, 为了方便管理, 特意将所有的 formatter 方法放在一块管理. 修改的时候改这个文件即可 */
export declare const createRenderBlockTableFormatter: (label: string) => IFormatter;
