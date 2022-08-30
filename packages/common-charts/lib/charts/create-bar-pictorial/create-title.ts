import { useThemeStore } from '@/store/theme'
import { TitleComponentOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title: string): TitleComponentOption => {
    if (!title) return {}
    return {
        text: title,
        left: 0,
        top: 14,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: useThemeStore().chartTitleColor
        }
    }
}
