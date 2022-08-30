import { EChartsOption, YAXisComponentOption } from 'echarts';
export interface IParams {
    /** 数据源 */
    source: Array<Array<any>>;
    /** 一级标题 */
    title: string;
    /** 二级标题 */
    subtitle?: {
        name: string;
        value?: number;
    };
    /** y轴配置 */
    y?: YAXisComponentOption;
    /** formatter label */
    formatter?: (params: any) => string;
}
/** 创建时间线折线图 */
export declare const createTimelineLine: (params: IParams) => EChartsOption;
