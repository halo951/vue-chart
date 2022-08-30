/** 处理数据源并计算极值
 *
 * @description 处理原始数据, 将 [日期, value] 转化为 [day, value, origin date]
 */
export const transformDatasource = (source: Array<Array<any>>) => {
    source = source.map((s) => {
        const day = s[0].split('.')
        return [Number(day[day.length - 1]), s[1], s[0]]
    })
    // 计算极值
    const max: number = source.reduce((max, c) => (max < c[1] ? c[1] : max), 0)
    return {
        max,
        x: source.map((s) => Number(s[0])),
        source: source.map((s, i) => [i, s[1], s[2]]),
        dimensions: source.map((s) => s[0])
    }
}
