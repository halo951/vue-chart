import {
    EChartsOption,
    CustomSeriesRenderItemParams as IRenderParams,
    CustomSeriesRenderItemAPI as IRenderApi,
    CustomSeriesRenderItemReturn as IRenderReturn,
    SeriesOption
} from 'echarts'

interface ICoordSys {
    cx: number
    cy: number
    r: number
}

/** 动画属性 */
const animationDuration: number = 1000
const animationDurationUpdate: number = 700
const animationEasingUpdate = 'linear'

/** 进度条属性 */
const processWidth: number = 6

/** 颜色属性 */
const colors: Array<string> = ['#3BACB2', '#2F3775']

/** 创建背景图 */
const createBackground = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    const max: number = api.value(1) as number
    // 计算极坐标角度
    const startAngle: number = -1 * api.coord([1, 0])[3]
    const endAngle: number = -1 * api.coord([1, max])[3]
    return {
        type: 'circle',
        style: {
            fill: '#d7eafd'
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
                endAngle
            }
        }
    }
}
/** 创建进度条 */
const createProcessLine = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const { cx, cy, r } = params.coordSys as any as ICoordSys
    const current: number = api.value(0) as number
    // 计算极坐标角度
    const startAngle: number = -1 * api.coord([1, 0])[3]
    const endAngle: number = -1 * api.coord([1, current])[3]
    return {
        type: 'circle',
        style: {
            fill: '#3BACB2'
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

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(2).replace(/\.0$/, '') + '%'
}

/** 创建中心文本 */
const createText = (params: IRenderParams, api: IRenderApi): IRenderReturn => {
    const max: number = 100
    const value: number = api.value(0) as number
    const lab: string = api.value(2) as string
    const { cx, cy } = params.coordSys as any as ICoordSys
    return {
        type: 'group',
        x: cx,
        y: cy,
        children: [
            {
                type: 'text',
                // 圆心
                x: 0,
                y: -3,
                style: {
                    // 文本
                    text: makeText(value, max),
                    // 样式
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fill: '#3BACB2',
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
            },
            {
                type: 'text',
                x: 0,
                y: 12,
                style: {
                    // 文本
                    text: lab,
                    // 样式
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fill: '#A6A6A6',
                    opacity: 0.9,
                    // 定位
                    align: 'center',
                    verticalAlign: 'middle'
                }
            }
        ]
    }
}

/** 进度饼图 */
const createProcessSeries = (properties: Array<{ key: string; value: number; max?: number }>): SeriesOption => {
    const { key, value, max } = properties[0]
    return {
        name: key,
        type: 'custom',
        coordinateSystem: 'polar', // 使用极坐标系
        data: [[value, max, key]],
        renderItem: (params: IRenderParams, api: IRenderApi): IRenderReturn => {
            return {
                type: 'group',
                children: [
                    // 创建背景
                    createBackground(params, api) as any,
                    // 创建进度条
                    createProcessLine(params, api) as any,
                    createText(params, api) as any
                ]
            }
        }
    }
}

const createPropertiesSeries = (properties: Array<{ key: string; value: number; max?: number }>): SeriesOption => {
    return {
        type: 'custom',
        coordinateSystem: 'none', // 禁用坐标系
        data: properties
            .filter((_p, i) => i > 0)
            .map((p) => {
                return [p.key, p.value]
            }),
        renderItem: (params: IRenderParams, api: IRenderApi): IRenderReturn => {
            const { dataIndex } = params
            const lab: string = api.value(0) as string
            const value: number = api.value(1) as number
            return {
                type: 'group',
                children: [
                    {
                        type: 'text',
                        x: 140 + dataIndex * api.getWidth() * 0.3,
                        y: api.getHeight() / 2 - 14 * 1.25,
                        style: {
                            // 文本
                            text: lab,
                            // 样式
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 14,
                            fontWeight: 400,
                            fontStyle: 'normal',
                            lineHeight: 14 * 1.5,
                            fill: '#888888',
                            // 定位
                            align: 'left',
                            verticalAlign: 'top'
                        }
                    },
                    {
                        type: 'text',
                        x: 140 + dataIndex * api.getWidth() * 0.3,
                        y: api.getHeight() / 2 + 14 * 0.25,
                        style: {
                            // 文本
                            text: `${value}`,
                            // 样式
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 14,
                            fontWeight: 400,
                            fontStyle: 'normal',
                            lineHeight: 14 * 1.5,
                            fill: colors[dataIndex],
                            // 定位
                            align: 'left',
                            verticalAlign: 'top'
                        },
                        extra: {
                            value,
                            transition: 'value',
                            enterFrom: { value: 0 }
                        },
                        during(apiDiring): void {
                            apiDiring.setStyle('text', (apiDiring.getExtra('value') as number).toFixed(0))
                        }
                    }
                ]
            }
        }
    }
}

/** 创建设备健康度用的进度图 */
export const createProcessForEquipmentHealth = (
    params: Array<{ key: string; value: number; max?: number }>
): EChartsOption => {
    // @ defined
    const options: EChartsOption = {}
    // 设置动画属性
    options.animationDuration = animationDuration
    options.animationDurationUpdate = animationDurationUpdate
    options.animationEasingUpdate = animationEasingUpdate
    // 设置容器范围
    options.grid = { top: 0, left: 0, right: 0, bottom: 0 }
    // 创建坐标系
    options.angleAxis = { show: false, min: 0, max: 100, type: 'value' }
    options.radiusAxis = { show: false }
    /** 设置极坐标系中心点, 与 r(半径) */
    options.polar = {
        center: [80, 'center'],
        radius: 44
    }
    // 创建图表数组
    options.series = [createProcessSeries(params), createPropertiesSeries(params)]

    // set
    return options
}
