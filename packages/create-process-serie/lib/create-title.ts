import { TitleComponentOption, PolarComponentOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title: string, polar: PolarComponentOption): TitleComponentOption => {
    let bottom!: string | number
    return {
        text: title,
        left: polar.center?.[0] ?? 'center',
        // top: 50,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: '#8D9399'
        }
    }
}
