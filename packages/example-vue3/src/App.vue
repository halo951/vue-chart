<script setup lang="ts">
import { Ref, ref } from 'vue'
import { Chart } from './chart'
import { createPieChart } from 'common-charts'
import { EChartsOption } from 'echarts'

const opt1 = createPieChart({
    /** 标题 */
    title: 'title',
    /** 数量单位 */
    unit: '个',
    /** 数据源 */
    source: [
        ['ha', 1],
        ['wa', 2],
        ['da', 3]
    ],
    /** 布局/坐标 */
    position: {
        r: 20,
        x: 0,
        y: 0
    }
})

const opt: Ref<EChartsOption> = ref(opt1 as any)
</script>

<template>
    <Chart :options="opt"></Chart>
</template>

<style>
.chart {
    width: 300px;
    height: 300px;
}
</style>
