import { TitleComponentOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title: string): TitleComponentOption => {
    return {
        text: title,
        left: -4,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 12
        }
    }
}
