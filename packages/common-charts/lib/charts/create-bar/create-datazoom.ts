/** 创建滚动条 */
export const createDataZoom = () => {
    return [
        {
            type: 'slider',
            bottom: 18,
            height: 12,
            showDataShadow: false,
            backgroundColor: '#51B2FF30',
            borderColor: 'transparent',
            fillerColor: '#51B2FF90',
            moveHandleSize: 0,
            xAxisIndex: [0],
            startValue: 0,
            endValue: 4 // 0 ~ 5 条显示,
        },
        {
            throttle: 50,
            show: true,
            zoomLock: true,
            type: 'inside',
            showDetail: false,
            showDataShadow: false,
            moveHandleSize: 0,
            xAxisIndex: [0],
            startValue: 0,
            endValue: 5 // 0 ~ 5 条显示,
        }
    ]
}
