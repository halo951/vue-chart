<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Chart, EChartsOption } from '@vue-chart/echart'
import createBar from '@vue-chart/create-bar'

const options = {}
const chartOptions = ref(options)
</script>

<template>
    <Chart :options="chartOptions" renderer="canvas" />
</template>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
#app,
.chart {
    width: 500px;
    height: 400px;
}
</style>
