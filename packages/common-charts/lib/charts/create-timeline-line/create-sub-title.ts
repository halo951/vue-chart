import { useThemeStore } from '@/store/theme'
import { TitleComponentOption } from 'echarts'

/** 创建二级标题 */
export const createSubTitle = (subtitle: { name: string; value?: number }): TitleComponentOption => {
    return {
        text: `{name|${subtitle.name}}{value|${subtitle.value}}`,
        right: -3,
        top: 14,
        textStyle: {
            rich: {
                name: {
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontSize: 14,
                    color: useThemeStore().chartTitleColor,
                    padding: [-2.5, 12, 0, 0]
                },
                value: {
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontSize: 24,
                    color: useThemeStore().chartValueColor
                }
            }
        }
    }
}
