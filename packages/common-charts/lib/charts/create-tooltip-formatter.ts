export type IFormatter = (params: any) => string

// 单个字符宽度: 12px + 1px (font-weight 为 600, 补1px)
const ww = (str: string): number => (/^[\u4e00-\u9fa5]/.test(str) ? 2 : 1) * (12 + 1)

/** 处理超长字符串 */
const transformLongStr = (str: string) => {
    let strWidth: number = 0
    let max: number = 50 * 12
    let out: string = ''
    // ? 超长字数时, 再进行处理
    if (str.length > 25) {
        for (const w of str.split('')) {
            if (strWidth > max) {
                out += '<br />'
                strWidth = 0
            }
            strWidth += ww(w)
            out += w
        }
    } else {
        out = str
    }
    return out
}

const transformUnit = (name: string) => {
    const map: any = {
        完好率: '%',
        工单数: '个',
        分项得分: '分',
        分项问题数: '个',
        已完成培训商户数: '户',
        未完成培训商户数: '户'
    }
    return map[name] ?? ''
}

export const createBarDefaultFormatter = (): IFormatter => {
    return (params: any): string => {
        params = params instanceof Array ? params[0] : params
        const { marker, name, seriesName, data, seriesIndex } = params
        const unit = transformUnit(seriesName)
        const label: string = transformLongStr(name)
        const value: string = seriesName + ' ' + data[seriesIndex + 1] + unit
        return [
            `<span style='margin-left:8px; margin-right: 12px; font-size: 12px; color:#fff;'>${label}</span>`,
            `${marker} <span style='font-size: 14px; color:#fff; margin-top: 4px;'>${value}</span>`
        ].join('<br />')
    }
}

export const createPieDefaultFormatter = (percentFormatter?: (params: any) => string): IFormatter => {
    return (params: any): string => {
        params = params instanceof Array ? params[0] : params
        if (percentFormatter) params.percent = percentFormatter(params)
        const unit: string = transformUnit(params.seriesName)
        const label: string = params.data[0]
        const value: string = `${params.data[1]}${unit}&nbsp;&nbsp;&nbsp;${params.percent}%`

        return [
            `<span style='margin-left:8px; margin-right: 12px; font-size: 12px; color:#fff;'>${label}</span>`,
            ` <span style='font-size: 14px; color:#fff; margin-top: 4px;'>${value}</span>`
        ].join('<br />')
    }
}

export const createPictorialFormatter = (unit: string, legendLabel: string) => {
    return (params: any) => {
        params = params instanceof Array ? params[0] : params
        const { marker } = params
        const label = params.value[0]
        const value = params.value[1] + unit
        return [
            `<span style='margin-left:8px; margin-right: 12px; font-size: 12px; color:#fff;'>${label}${legendLabel}</span>`,
            `${marker} <span style='font-size: 14px; color:#fff; margin-top: 4px;'>${value}</span>`
        ].join('<br />')
    }
}

/** 生成进度文字 */
const makeText = (current: number, max: number): string => {
    return ((current / max) * 100).toFixed(1).replace(/\.0$/, '') + '%'
}

/** 创建 processline tooltip */
export const createProcessFormatter = () => {
    return (params: any): string => {
        const value: string = `${params.seriesName} ${makeText(params.value[2], params.value[0])}`
        return [params.marker, `<span style='margin-left: 8px; font-size: 12px; color:#fff;'>${value}</span>`].join('')
    }
}

/** 扩展暗黑主题后, 为了方便管理, 特意将所有的 formatter 方法放在一块管理. 修改的时候改这个文件即可 */
export const createRenderBlockTableFormatter = (label: string): IFormatter => {
    return (params: any): string => {
        const current = params instanceof Array ? params[0] : params
        const { marker, value } = current
        return [
            `${marker} `,
            `<span style="font-weight: 400;font-size: 12px;line-height: 18px;color: #fff;">${value[2]}</span><br />`,
            `<span style="font-weight: 400;font-size: 14px;line-height: 22px;color: #fff;">${label}</span>`,
            `<span style="font-weight: 400;font-size: 14px;line-height: 22px;color: #fff;"> ${value[1]}人</span>`
        ].join('')
    }
}
