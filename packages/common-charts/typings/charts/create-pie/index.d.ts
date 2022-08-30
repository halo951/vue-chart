import { EChartsOption } from 'echarts';
interface IParams {
    /** 标题 */
    title: string;
    /** 数量单位 */
    unit: string;
    /** 数据源 */
    source: Array<[string, number]>;
    /** 布局/坐标 */
    position: {
        r: number;
        x: number;
        y: number;
    };
}
/** 创建通用饼图 */
export declare const createPieChart: (params: IParams) => EChartsOption;
export {};
