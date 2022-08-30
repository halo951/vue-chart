import { EChartsOption } from 'echarts';
declare type TColor = string;
declare type TLabel = string;
declare type TValue = number;
/** 创建工单统计饼图 */
export declare const createWorkOrderChart: (source: Array<[TColor, TLabel, TValue]>) => EChartsOption;
export {};
