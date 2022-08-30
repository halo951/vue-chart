import { EChartsOption } from 'echarts';
declare type TColor = string;
declare type TLabel = string;
declare type TValue = number;
/** 创建 年度专项任务统计 图表 */
export declare const createSpecialChart: (source: Array<[TLabel, TValue, TColor]>) => EChartsOption;
export {};
