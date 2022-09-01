<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Chart, createBar } from 'common-charts'

@Component({ components: { Chart } })
export default class App extends Vue {
    opt: any = createBar([])
    mounted() {}
}
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
