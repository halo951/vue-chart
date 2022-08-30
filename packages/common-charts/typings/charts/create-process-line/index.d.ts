import { EChartsOption } from 'echarts';
export interface IParams {
    title: string;
    current: number;
    all: number;
}
/** 创建进度条 */
export declare const createProcessLine: (params: IParams) => EChartsOption;
