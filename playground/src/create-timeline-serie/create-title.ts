import { TitleComponentOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title: string): TitleComponentOption => {
    return {
        text: title,
        left: -4,
        top: 14,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: '#8D9399'
        }
    }
}
