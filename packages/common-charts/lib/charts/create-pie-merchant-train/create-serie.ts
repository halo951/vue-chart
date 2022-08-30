import { useThemeStore } from '@/store/theme'
import {
    CustomSeriesRenderItem,
    SeriesOption,
    CustomSeriesRenderItemParams as IRenderParams,
    CustomSeriesRenderItemAPI as IRenderApi,
    CustomSeriesRenderItemReturn as IRenderReturn
} from 'echarts'

/** 圆环边框间距 */
const borderAngle: number = 0.05
/** 饼图圆环透明度集合 */
const opacitys: Array<number> = [0.86, 0.14, 0.1, 0.1]

/** 创建图集
 *
 * @description 由于 Pie Chart 边框是描边实现, 无法实现阴影衔接效果, 然后单一的 Custom Chart 的 Legend 执行的是 Custom Chart name,
 * so, 这里通过图集方式, 生成饼图
 * 同时, 由于计算发生在图表外, 所以, dataset 也失效了
 */
export const createSeries = (source: Array<[string, number, number]>): Array<SeriesOption> => {
    // @ 获取总人数
    const all: number = source.reduce((c, s) => c + s[1], 0)
    // # 创建文本渲染器
    const textRender = createTextRender(all)
    let last: number = 0
    // # 创建饼图渲染器
    const pies: Array<SeriesOption> = source.map((s, n) => {
        const pieRender = createPieRender(last, last + s[1])
        last += s[1]
        return {
            datasetIndex: n,
            name: s[0],
            colorBy: 'series',
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: pieRender
        }
    })

    return [
        {
            colorBy: 'series',
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: textRender
        },
        ...pies
    ]
}

/** 创建文本渲染器 */
const createTextRender = (all: number): CustomSeriesRenderItem => {
    return (params) => {
        const { cx, cy } = params.coordSys as any
        return {
            type: 'group',
            silent: true,
            children: [
                {
                    type: 'text',
                    style: {
                        x: cx,
                        y: cy + 14.91,
                        text: '应培训商户数',
                        align: 'center',
                        verticalAlign: 'middle',
                        fontFamily: 'PingFang SC',
                        fontWeight: 400,
                        fontSize: 16,
                        fill: useThemeStore().chartAxisColor
                    }
                },
                {
                    type: 'text',
                    style: {
                        x: cx,
                        y: cy - 11.57,
                        text: all.toFixed(0),
                        align: 'center',
                        verticalAlign: 'middle',
                        fontFamily: 'PingFang SC',
                        fontWeight: 600,
                        fontSize: 32,
                        fill: useThemeStore().chartValueColor
                    },
                    extra: {
                        all,
                        transition: 'all',
                        enterFrom: { all: 0 }
                    },
                    updateAnimation: {
                        duration: 500
                    },
                    during(apiDuring) {
                        apiDuring.setStyle('text', (apiDuring.getExtra('all') as number).toFixed(0))
                    }
                }
            ]
        }
    }
}

/** 生成饼图角度 */
const makeAngle = (api: IRenderApi, start: number, end: number): { startAngle: number; endAngle: number } => {
    let startAngle: number = -1 * api.coord([1, start])[3]
    let endAngle: number = -1 * api.coord([1, end])[3]
    return { startAngle, endAngle }
}

/** 创建自定义样式的饼图 */
const createPieRender = (start: number, end: number): CustomSeriesRenderItem => {
    return (params, api) => {
        let { cx, cy, r } = params.coordSys as any
        // > 计算极坐标角度
        let { startAngle, endAngle } = makeAngle(api, start, end)
        // ? 如果剩余圆环宽度, 超过边框角度, 则从结束角扣除边框宽度
        if (Math.abs(endAngle - startAngle) > borderAngle) {
            startAngle += borderAngle / 2
            endAngle -= borderAngle / 2
        }
        return {
            type: 'group',
            children: opacitys.map((opacity: number, index: number) => {
                const cr: number = r - 8 * index
                return {
                    type: 'sector',
                    transition: [],
                    shape: {
                        r0: cr - 20,
                        r: cr,
                        cx,
                        cy,
                        startAngle,
                        endAngle: endAngle
                    },
                    extra: {
                        startAngle,
                        endAngle,
                        transition: ['endAngle', 'startAngle'],
                        enterFrom: { endAngle: startAngle, startAngle }
                    },
                    style: { fill: api.visual('color'), opacity },
                    during(apiDuring) {
                        const startAngle: number = apiDuring.getExtra('startAngle') as number
                        const endAngle: number = apiDuring.getExtra('endAngle') as number
                        apiDuring.setShape('startAngle', startAngle)
                        apiDuring.setShape('endAngle', endAngle)
                    },
                    // hover 样式
                    emphasis: {
                        style: { opacity: opacity + 0.2 }
                    }
                }
            })
        }
    }
}
