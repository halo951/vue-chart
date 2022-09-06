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
    r0: number
}

/** 背景图 */
const BG: HTMLImageElement = new Image()
BG.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjE1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI3OC41NjQiIGN5PSI3OC4wMSIgcj0iNzAuNDM2IiBzdHJva2U9IiNEMUVCRkYiIHN0cm9rZS13aWR0aD0iMTQuNCIgc3Ryb2tlLWRhc2hhcnJheT0iOS4yMiIvPjwvc3ZnPg=='

/** 创建图表 */
export const createSerie = (name?: string, background?: HTMLImageElement): SeriesOption => {
    return {
        name,
        type: 'custom',
        coordinateSystem: 'polar', // 使用极坐标系
        renderItem: createRender(name, background)
    }
}

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(1).replace(/\.0$/, '') + '%'
}

/** 创建渲染器 */
const createRender = (name?: string, background?: HTMLImageElement) => {
    return (params: IRenderParams, api: IRenderApi): IRenderReturn => {
        const render = {
            type: 'group',
            children: [
                // 添加背景
                createBackgroundRender(params, api, background) as any,
                // 添加进度条
                createProcessBar(params, api),
                // 添加进度文本
                createProcessText(params, api)
            ]
        }
        // ? 如果指定了标题, 增加标题渲染
        if (name) render.children.push(createTitle(params, api))
        return render as IRenderReturn
    }
}
const createTitle = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const { seriesName } = params
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    return {
        type: 'text',
        // 圆心
        x: cx,
        y: cy + r + 14,
        style: {
            // 文本
            text: seriesName,
            // 样式
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            fill: '#8D9399',
            // 定位
            align: 'center',
            verticalAlign: 'top'
        }
    }
}
/** 创建进度文本 */
const createProcessText = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const max: number = api.value(0) as number
    const value: number = api.value(2) as number
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    return {
        type: 'text',
        // 圆心
        x: cx,
        y: cy + r * 0.035,
        style: {
            // 文本
            text: makeText(value, max),
            // 样式
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontSize: r * 0.36,
            fontWeight: 400,
            fill: '#1F2429',
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
    r0: number,
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
                r,
                r0,
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
const addEndCircle = (current: number, max: number, cx: number, cy: number, r: number, w: number): IRenderReturn => {
    const endProcess: number = current / max
    const { x, y } = makeEndPosition(endProcess, r, w, cx, cy)
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
            const cp = makeEndPosition(c, r, w, cx, cy)
            apiDuring.setTransform('x', cp.x)
            apiDuring.setTransform('y', cp.y)
        },
        children: [
            // 边框 (外)
            {
                type: 'circle',
                style: { fill: '#00BBFF', fillOpacity: 0.35 },
                shape: { r: w + 6.66 }
            },
            // 边框 (内)
            {
                type: 'circle',
                style: { fill: '#00B3FF', fillOpacity: 0.35 },
                shape: { r: w + 3.33 },
                keyframeAnimation: {
                    loop: true,
                    keyframes: [
                        {
                            percent: 0,
                            shape: { r: w + 3.33 }
                        },
                        {
                            percent: 0.5,
                            shape: { r: w + 6.66 },
                            style: { fillOpacity: 0.2 }
                        },
                        {
                            percent: 1,
                            shape: { r: w + 3.33 }
                        }
                    ]
                }
            },
            // 圆心
            {
                type: 'circle',
                style: { fill: '#ffffff' },
                shape: { r: w }
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
    const r0: number = r * 0.8
    const w: number = Math.abs(r - r0) / 2

    return {
        type: 'group',
        children: [
            // 进度条
            addProcessLine(api, cx, cy, r, r0, startAngle, endAngle) as any,
            // 起始坐标点
            addStartCircle(api, cx, cy, r, w),
            // 结束坐标点
            addEndCircle(current, max, cx, cy, r, w)
        ]
    }
}

/** 创建背景图 */
const createBackgroundRender = (
    params: IRenderParams,
    _api: IRenderApi,
    background?: HTMLImageElement
): IRenderReturn => {
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    return {
        type: 'image',
        x: cx - r,
        y: cy - r,
        style: {
            image: background ?? BG,
            width: r * 2,
            height: r * 2
        }
    }
}
