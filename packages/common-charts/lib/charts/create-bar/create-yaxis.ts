import { useThemeStore } from '@/store/theme'
import { YAXisComponentOption } from 'echarts'

/** 创建y轴 */
export const createYAxis = (index: number, source: Array<any>, yAxis: YAXisComponentOption): YAXisComponentOption => {
    const theme = useThemeStore()
    const dark: boolean = theme.themeMode === 'dark'
    // @ 数据预处理
    const si: number = index + 1
    // ? 与数据眼进行比较, 当超出max时, 以数据源中的极值为最大值, 未指定max值时, 采用100为最小极值
    const max: number = source.reduce((max, c) => (max > c[si] ? max : c[si]), yAxis.max ?? 100)
    delete yAxis.max
    const opts: YAXisComponentOption = {
        type: 'value',
        min: 0,
        max: Math.ceil(max / 10) * 10,
        nameTextStyle: { color: useThemeStore().chartColor, padding: [0, 0, 0, index % 2 === 0 ? -24 : 24] },
        nameGap: 18,
        splitLine: { show: !dark },
        axisLabel: { color: useThemeStore().chartColor }
    }
    return { ...opts, ...yAxis }
}
