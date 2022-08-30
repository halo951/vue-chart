import { useThemeStore } from '@/store/theme'
import {
    graphic,
    SeriesOption,
    CustomSeriesRenderItemParams as IRenderParams,
    CustomSeriesRenderItemAPI as IRenderApi,
    CustomSeriesRenderItemReturn as IRenderReturn
} from 'echarts'

// 填充, echarts hacker interface 缺失
interface ICoordSys {
    cx: number
    cy: number
    r: number
}

/** 背景图 */
const BG: HTMLImageElement = new Image()
BG.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjE1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3OC41NjQiIGN5PSI3OC4wMSIgcj0iNzAuNDM2IiBzdHJva2U9IiNEMUVCRkYiIHN0cm9rZS13aWR0aD0iMTQuNCIgc3Ryb2tlLWRhc2hhcnJheT0iOS4yMiIvPjwvc3ZnPg=='

/** 进度条属性 */
const processWidth: number = 15.4

/** 创建图表 */
export const createSerie = (name?: string): SeriesOption => {
    return {
        name,
        type: 'custom',
        coordinateSystem: 'polar', // 使用极坐标系
        renderItem: createRender
    }
}

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(1).replace(/\.0$/, '') + '%'
}

/** 创建渲染器 */
const createRender = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const background: any = createBackgroundRender(params, api)
    const bar: any = createProcessBar(params, api)
    const text: any = createProcessText(params, api)
    return {
        type: 'group',
        children: [background, bar, text]
    }
}

/** 创建进度文本 */
const createProcessText = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const max: number = api.value(0) as number
    const value: number = api.value(2) as number
    const { cx, cy } = params.coordSys as any as ICoordSys
    return {
        type: 'text',
        // 圆心
        x: cx,
        y: cy + 2,
        style: {
            // 文本
            text: makeText(value, max),
            // 样式
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontSize: 32,
            fontWeight: 400,
            fill: useThemeStore().chartValueColor,
            // 定位
            align: 'center',
            verticalAlign: 'middle'
        },
        extra: {
            value,
            transition: 'value',
            enterFrom: { value: 0 }
        },
        during(apiDiring): void {
            const val: number = apiDiring.getExtra('value') as number
            apiDiring.setStyle('text', makeText(val, max))
        }
    }
}

// 计算结束坐标点
const makeEndPosition = (process: number, r: number, cr: number, cx: number, cy: number): { x: number; y: number } => {
    const angle: number = process * 360 - 90
    const r0: number = r - cr
    return {
        x: cx + r0 * Math.cos((angle * Math.PI) / 180),
        y: cy + r0 * Math.sin((angle * Math.PI) / 180)
    }
}

// 添加起始坐标点
const addStartCircle = (api: IRenderApi, cx: number, cy: number, r: number, cr: number): IRenderReturn => {
    return {
        type: 'circle',
        style: {
            fill: (api.visual('color') as graphic.LinearGradient).colorStops[0].color
        },
        shape: { cx, cy: cy - r + cr, r: cr }
    }
}

// 添加进度条路径
const addProcessLine = (
    api: IRenderApi,
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number
): IRenderReturn => {
    return {
        type: 'circle',
        style: {
            fill: api.visual('color')
        },
        shape: { cx, cy, r },
        clipPath: {
            type: 'sector',
            shape: {
                r0: r - processWidth,
                r,
                cx,
                cy,
                startAngle,
                endAngle,
                transition: ['endAngle'] as Array<never>,
                enterFrom: { endAngle: startAngle }
            }
        }
    }
}

// 添加结束坐标点 (带样式)
const addEndCircle = (current: number, max: number, cx: number, cy: number, r: number, cr: number): IRenderReturn => {
    const endProcess: number = current / max
    const { x, y } = makeEndPosition(endProcess, r, cr, cx, cy)
    return {
        type: 'group',
        x,
        y,
        extra: {
            endProcess: endProcess,
            transition: 'endProcess',
            enterFrom: { endProcess: 0 }
        },
        transition: [],
        updateAnimation: {},
        during(apiDuring) {
            const c = apiDuring.getExtra('endProcess') as number
            const cp = makeEndPosition(c, r, cr, cx, cy)
            apiDuring.setTransform('x', cp.x)
            apiDuring.setTransform('y', cp.y)
        },
        children: [
            // 边框 (外)
            {
                type: 'circle',
                style: { fill: '#00BBFF', fillOpacity: 0.35 },
                shape: { r: cr + 6.66 }
            },
            // 边框 (内)
            {
                type: 'circle',
                style: { fill: '#00B3FF', fillOpacity: 0.35 },
                shape: { r: cr + 3.33 },
                keyframeAnimation: {
                    loop: true,
                    keyframes: [
                        {
                            percent: 0,
                            shape: { r: cr + 3.33 }
                        },
                        {
                            percent: 0.5,
                            shape: { r: cr + 6.66 },
                            style: { fillOpacity: 0.2 }
                        },
                        {
                            percent: 1,
                            shape: { r: cr + 3.33 }
                        }
                    ]
                }
            },
            // 圆心
            {
                type: 'circle',
                style: { fill: '#ffffff' },
                shape: { r: cr }
            }
        ]
    }
}

/** 创建进度条 */
const createProcessBar = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    // 取值: 极坐标系
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    // 取值: dataset
    let current: number = api.value(2) as number
    const min: number = api.value(1) as number
    const max: number = api.value(0) as number
    current = current > max ? max : current
    // 计算极坐标角度
    const startAngle: number = -1 * api.coord([1, min])[3]
    const endAngle: number = -1 * api.coord([1, current])[3]
    // 进度条坐标点半径
    const cr: number = processWidth / 2

    return {
        type: 'group',
        children: [
            // 进度条
            addProcessLine(api, cx, cy, r, startAngle, endAngle) as any,
            // 起始坐标点
            addStartCircle(api, cx, cy, r, cr),
            // 结束坐标点
            addEndCircle(current, max, cx, cy, r, cr)
        ]
    }
}

/** 创建背景图 */
const createBackgroundRender = (params: IRenderParams, _api: IRenderApi): IRenderReturn => {
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    return {
        type: 'image',
        x: cx - r,
        y: cy - r,
        style: {
            image: BG,
            width: r * 2,
            height: r * 2,
            opacity: useThemeStore().dark ? 0.2 : 1
        }
    }
}
