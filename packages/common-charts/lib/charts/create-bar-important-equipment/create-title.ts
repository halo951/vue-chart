import { useThemeStore } from '@/store/theme'
import { TitleComponentOption } from 'echarts'

export const createTitle = (): TitleComponentOption => ({
    text: '主要设备完好率',
    left: 12,
    top: 0,
    textStyle: {
        fontFamily: 'PingFang SC',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        color: useThemeStore().chartTitleColor
    }
})
