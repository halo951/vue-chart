/** 创建滚动条 */
export declare const createDataZoom: () => ({
    type: string;
    bottom: number;
    height: number;
    showDataShadow: boolean;
    backgroundColor: string;
    borderColor: string;
    fillerColor: string;
    moveHandleSize: number;
    xAxisIndex: number[];
    startValue: number;
    endValue: number;
    throttle?: undefined;
    show?: undefined;
    zoomLock?: undefined;
    showDetail?: undefined;
} | {
    throttle: number;
    show: boolean;
    zoomLock: boolean;
    type: string;
    showDetail: boolean;
    showDataShadow: boolean;
    moveHandleSize: number;
    xAxisIndex: number[];
    startValue: number;
    endValue: number;
    bottom?: undefined;
    height?: undefined;
    backgroundColor?: undefined;
    borderColor?: undefined;
    fillerColor?: undefined;
})[];
