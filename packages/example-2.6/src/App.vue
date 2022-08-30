<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Chart, createPieChart } from 'common-charts'

@Component({ components: { Chart } })
export default class App extends Vue {
    opt: any = createPieChart({
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
