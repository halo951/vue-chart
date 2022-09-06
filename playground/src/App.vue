<script setup lang="ts">
import { Chart } from '@vue-chart/echart'
import createProcessSerie from '@vue-chart/create-process-serie'

const options = createProcessSerie({
    val: 40,
    max: 100,
    title: '进度条'
})

// const options = create([
//     ['09.01', 1],
//     ['09.02', 21],
//     ['09.03', 41],
//     ['09.04', 31],
//     ['09.05', 61],
//     ['09.06', 11]
// ])
</script>

<template>
    <Chart :options="options" />
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
