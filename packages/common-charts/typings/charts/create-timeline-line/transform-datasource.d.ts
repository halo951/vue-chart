/** 处理数据源并计算极值
 *
 * @description 处理原始数据, 将 [日期, value] 转化为 [day, value, origin date]
 */
export declare const transformDatasource: (source: Array<Array<any>>) => {
    max: number;
    x: number[];
    source: any[][];
    dimensions: any[];
};
