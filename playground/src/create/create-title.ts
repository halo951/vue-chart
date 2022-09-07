import { EChartsOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title: string | EChartsOption['title']): EChartsOption['title'] => {
    if (typeof title === 'string') {
        return {
            text: title,
            left: -4,
            textStyle: {
                fontFamily: 'PingFang SC',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 12,
                color: '#8D9399'
            }
        }
    } else {
        return title
    }
}
