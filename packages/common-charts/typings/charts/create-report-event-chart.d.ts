import { EChartsOption } from 'echarts';
/** 创建报修事件 echart 图表
 *
 * @description 数值单位: 个位, 百分比单位: 0 ~ 100, 会在这个方法里面二次处理数据
 *
 * @param source 数据源, 格式: [x轴name, 未完成, 已完成, 按时完成率]
 * @returns
 */
export declare const createReportEventChart: (source: Array<any>) => EChartsOption;
