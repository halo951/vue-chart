import { EChartsOption } from 'echarts'
import { createBarChart } from '../create-bar'
import { createTitle } from './create-title'
import { createXAxis } from './create-xaxis'

/** 创建主要设备报修数 - 柱状图 */
export const createImportantEquipmentChart = (source: Array<[string, number]>): EChartsOption => {
    const options: EChartsOption = createBarChart({
        title: createTitle(),
        x: createXAxis(),
        source,
        series: [{ name: '完好率', y: { name: '%', max: 100 } }],
        grid: { left: '12%', right: 42 }
    })
    return options
}
