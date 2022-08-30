import { EChartsOption } from 'echarts';
/** 创建设备健康度用的进度图 */
export declare const createProcessForEquipmentHealth: (params: Array<{
    key: string;
    value: number;
    max?: number;
}>) => EChartsOption;
