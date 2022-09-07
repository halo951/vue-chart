# @vue-chart/echart

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fechart.svg)](https://www.npmjs.com/package/@vue-chart/echart)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fechart.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/echart)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart)

## About

适用于 vue2.x、vue3.x 的通用 echart 组件.

## 扩展

> 整理了一些常用场景的图表创建模板 (Tips: 正在逐步开发, 带 todo 的是未完成的)

### 默认

> Tip:
> - 饼图考虑定位以及图例因素, 仅贡参考, 实际使用, 需要
-   [圆环进度图 - @vue-chart/create-process-serie](https://www.npmjs.com/package/@vue-chart/create-process-serie)
-   [TODO 柱状图 - @vue-chart/create-bar](https://www.npmjs.com/package/@vue-chart/create-bar)
-   [TODO 折线图 - @vue-chart/create-line](https://www.npmjs.com/package/@vue-chart/create-line)
-   [TODO 饼图 - @vue-chart/create-pie](https://www.npmjs.com/package/@vue-chart/create-pie)
-   [TODO 柱状图 & 折线图组合 - @vue-chart/create-mixin-bar](https://www.npmjs.com/package/@vue-chart/create-bar)
-   [TODO 空心饼图 - @vue-chart/create-hollow-serie](https://www.npmjs.com/package/@vue-chart/create-bar)

### 暗黑主题

-   [圆环进度图 (dark) - @vue-chart/create-dark-process-serie](https://www.npmjs.com/package/@vue-chart/create-dark-process-serie)
-   [TODO 柱状图 (dark) - @vue-chart/create-dark-bar](https://www.npmjs.com/package/@vue-chart/create-dark-bar)
-   [TODO 折线图 (dark) - @vue-chart/create-dark-line](https://www.npmjs.com/package/@vue-chart/create-dark-line)
-   [TODO 饼图 (dark) - @vue-chart/create-dark-pie](https://www.npmjs.com/package/@vue-chart/create-dark-pie)

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
import { Chart, OmitedEChartsOption } from '@vue-chart/echart'
import { ref, Ref } from 'vue'
import { EChartsOption } from 'echart'

const chartOptions: EChartsOption = {}

// Tip: 使用 ref 引用 options 时, 需要使用 OmitedEChartsOption 类型
// 因为, Ref 对象的类型推断使用的 Ref<Unwrap<T>> 解包方式, 与 echarts `graphic` 的类型重载冲突, 会产生类型推断错误
const chartOptions2: Ref<OmitedEChartsOption> = ref({} as EChartsOption)

// 或者, 可以使用以下2种写法
// const chartOptions3 = ref({} as EChartsOption)
// const chartOptions4: Ref<EChartsOption> = ref({}) // 注: ref 参数对象不能指定类型 `EChartsOption`, 需要让编译器推断
</script>

<!-- use in vue2 -->
<script lang="ts" setup>
import { Chart } from '@vue-chart/echart'
import { Component, Vue } from 'vue-property-decorator'
import { EChartsOption } from 'echart'

@Component({ components: { Chart } })
export default class extends Vue {
    chartOptions: EChartsOption = {}
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
-   修复, 使用 `ref` 映射 options 变量时, 由于`Ref<Unwrap<T>>` 类型冲突导致的类型推断不一致问题
