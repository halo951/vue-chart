# common-charts

![npm](https://img.shields.io/npm/dw/common-charts.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/common-charts.svg?style=social&label=common-charts)](https://github.com/halo951/common-charts)
[![npm version](https://badge.fury.io/js/common-charts.svg)](https://badge.fury.io/js/common-charts)

> 适用于 vue 项目的 echarts 图表集合

## usage

-   install

```bash

yarn add common-charts

```

-   usage in vue

```vue
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

<!-- use in js -->
<script>
import { Chart, createCommonPie } from 'common-charts'
</script>
<!-- use in typescript class -->
<script></script>
<!-- use in vue3 composition api -->
<script lang="ts" setup>
import { Chart } from 'common-charts'
</script>
```

-   if in vitejs

```

// 与Vite一起使用时，您需要选择退出预捆绑才能vue-demi正常工作
export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi']
 }
})

```

## 可用图表创建方法

-   方法、描述、图表示例

| function          | description    |
| ----------------- | -------------- |
| createPie         | 创建通用饼图   |
| createLine        | 创建通用折线图 |
| createBar         | 创建通用柱状图 |
| createProcessLine | 创建进度图     |

## example

<h3>createPie - 创建通用饼图</h3>

<img src="./" />
