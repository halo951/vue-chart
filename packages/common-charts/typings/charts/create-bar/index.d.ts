import type { BarSeriesOption, EChartsOption, GridComponentOption, LegendComponentOption, TitleComponentOption, XAXisComponentOption, YAXisComponentOption } from 'echarts';
export interface IParams {
    /** 标题 */
    title?: string | TitleComponentOption;
    /** 布局调整 */
    grid?: GridComponentOption;
    /** x轴配置 */
    x?: XAXisComponentOption;
    /** y轴配置 */
    y?: YAXisComponentOption;
    /** 图例配置 */
    legend?: false | LegendComponentOption;
    /** 自定义tooltip渲染 */
    formatter?: string | ((params: any) => string);
    /** 图表配置 */
    series: Array<{
        /** 图例名称 */
        name?: string;
        /** y轴 (对应到列的y轴配置) */
        y?: YAXisComponentOption;
        /** 表格独立样式 */
        serie?: BarSeriesOption;
    }>;
    /** 元数据 */
    source: Array<[any, number]> | Array<[any, number, number]>;
    /** 滚动条选项 */
    dataZoom?: boolean;
}
/** 创建通用柱状图 */
export declare const createBarChart: (params: IParams) => EChartsOption;
