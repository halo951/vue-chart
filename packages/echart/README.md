# @vue-chart/echart

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fechart.svg)](https://www.npmjs.com/package/@vue-chart/echart)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fechart.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/echart)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart)

## About

适用于 vue2.x、vue3.x 的通用 echart 组件.

## 扩展

> 常用 echart 图表创建方法 (Tips: 正在逐步开发, 带 todo 的是未完成的)

-   [TODO 柱状图 - @vue-chart/create-bar](https://www.npmjs.com/package/@vue-chart/create-bar)
-   [TODO 折线图 - @vue-chart/create-bar](https://www.npmjs.com/package/@vue-chart/create-bar)
-   [TODO 饼图 - @vue-chart/create-bar](https://www.npmjs.com/package/@vue-chart/create-bar)
-   [TODO 柱状图 & 折线图组合 - @vue-chart/create-bar](https://www.npmjs.com/package/@vue-chart/create-bar)

## 安装

> 注意:
>
> 1. 出于对不同项目使用 echart 版本不同考虑, 这里 echart 组件请按需安装, 但建议版本应 >= 4.\*
> 2. 由于 @vue/composition-api 限制, 当 vue 版本 <= 2.6.10 时,
>
>     - 需要额外安装 `@vue/composition-api`, 扩展对组合式 API 支持.
>     - 需要使用 `@vue/cli-service` 构建项目, 如需使用 vitejs, 请升级到 vue 2.7.\*

-   vue 2.7.\* or vue >= 3.0.0

```bash

yarn add echart @vue-chart/echart

```

-   vue version <= 2.6.10

```bash
yarn add echart @vue-chart/echart @vue/composition-api
```

## 快速上手

```vue
<!-- use in vue3 composition api -->
<script lang="ts" setup>
import { Chart, EChartsOption } from '@vue-chart/echart'
import { ref } from 'vue'

const chartOptions: EchartOption = {}
</script>

<!-- use in vue2 -->
<script lang="ts" setup>
import { Chart, EChartsOption } from '@vue-chart/echart'
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: { Chart } })
export default class extends Vue {
    chartOptions: EchartOption = {}
}
</script>

<!-- use in js -->
<script>
import { Chart } from '@vue-chart/echart'

export default {
    components: { Chart },
    data() {
        return {
            chartOptions: {}
        }
    }
}
</script>

<!-- 必填项: Chart 组件引入和 指定容器尺寸(主要是高度) -->
<template>
    <!-- usage component -->
    <Chart :options="chartOptions" />
</template>

<style>
.chart {
    height: 181px - 16px;
}
</style>
```

## chart 特性

-   增强, 针对同一时刻大量更新的 echarts 图表, 增加了队列修改能力
-   增强, 针对单一图表, 增加 `clear` 属性, 允许清除未完成动画, 并执行下次渲染
