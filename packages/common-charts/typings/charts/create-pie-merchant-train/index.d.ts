import { EChartsOption } from 'echarts';
interface IParams {
    all: number;
    completed: number;
}
/** 创建 商户培训图表 (饼图) */
export declare const createMerchantTrainChart: (params: IParams) => EChartsOption;
export {};
