# common-charts

![npm](https://img.shields.io/npm/dw/common-charts.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/common-charts.svg?style=social&label=common-charts)](https://github.com/halo951/common-charts)
[![npm version](https://badge.fury.io/js/common-charts.svg)](https://badge.fury.io/js/common-charts)

> 重要提示: 这个库刚开发出来, 目前就 `<Chart>` 组件可用, 其他的通用的创建方法正在做, 可以等到 0.0.1 版本搞好以后在用.
>
> 现阶段, 可以先用 `<Chart />` 作为 echart 容器

> 适用于 vue 项目的 echarts 图表集合. (vue2.x, vue3.x echart 图表组件过渡方案)


## 安装

-   install in vue2.7 or vue3.x

```bash

yarn add common-charts

```

-   install in vue2.6.14

> 注: 由于 @vue/composition-api 限制, 仅支持通过 @vue/cli-service 编译. 所以, 当你的项目是 vue2.6.\* 时, **必须使用@vue/cli-service 作为编译器**

```bash
yarn add common-charts @vue/composition-api
```

## 快速上手

```vue
<!-- use in vue3 composition api -->
<script lang="ts" setup>
import { Chart, createBar } from 'common-charts'
import { ref } from 'vue'

const chartOptions = ref(
    createBar([
        /* 填充数据 */
    ])
)
</script>

<!-- use in vue2 -->
<script lang="ts" setup>
import { Chart, createBar } from 'common-charts'
import { Component, Vue } from 'vue-property-decorator'
import type { EchartOption } from 'echarts'

@Component({ components: { Chart } })
export default class extends Vue {
    chartOptions: EchartOption = createBar([
        /* 填充数据 */
    ])
}
</script>

<!-- use in js -->
<script>
import { Chart, createBar } from 'common-charts'

export default {
    components: { Chart },
    data() {
        return {
            chartOptions: createBar([
                /* 填充数据 */
            ])
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

## 可用图表创建方法

-   createBar
-   createLine
-   createPie
-   createProcessLine
-   create

## example
