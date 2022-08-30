import { EChartsOption } from 'echarts';
/** 创建(三关一闭, 维保, 巡检) 工单echart 图表
 *
 * @description 数值单位: 个位, 百分比单位: 0 ~ 100, 会在这个方法里面二次处理数据
 *
 * @param source 数据源, 格式: [x轴name, 按时完成数, 逾期完成数, 未完成数, 按时完成率]
 * @returns
 */
export declare const createOrderLineChart: (source: any) => EChartsOption;
