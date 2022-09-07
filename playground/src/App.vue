<script setup lang="ts">
import { Chart } from '@vue-chart/echart'
import { ref, onMounted } from 'vue'
import createPie from './create'
import { createTimelineLine } from './create-timeline-serie'

const options = createTimelineLine({
    title: 'aeaewf',
    subtitle: { name: '副标题', value: 10 },
    source: [
        ['09.01', 1],
        ['09.02', 10],
        ['09.03', 230],
        ['09.04', 123],
        ['09.05', 155]
    ]
})
</script>

<template>
    <Chart :options="options" ref="chart" />
</template>

<style>
html,
body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* background: #000; */
}
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.chart {
    width: 400px;
    height: 300px;
    border-radius: 4px;
    /* border: 1px solid #ccc; */
    box-shadow: 2px 2px 4px 4px #ccc;
}
</style>
