import { useThemeStore } from '@/store/theme'
import { TitleComponentOption } from 'echarts'

/** 创建标题 */
export const createTitle = (title?: string | TitleComponentOption): TitleComponentOption | undefined => {
    if (!title) return undefined
    let options: TitleComponentOption = {
        left: -4,
        top: 14,
        textStyle: {
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            color: useThemeStore().chartTitleColor
        }
    }
    if (typeof title === 'string') {
        options.text = title
    } else {
        options = { ...options, ...title }
    }
    return options
}
