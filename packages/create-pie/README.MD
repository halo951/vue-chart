# @vue-chart/create-pie

![npm](https://img.shields.io/npm/dw/@vue-chart/create-pie.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/@vue-chart/create-pie.svg?style=social&label=@vue-chart/create-pie)](https://github.com/halo951/@vue-chart/create-pie)
[![npm version](https://badge.fury.io/js/@vue-chart/create-pie.svg)](https://badge.fury.io/js/@vue-chart/create-pie)

## About

创建饼状图

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

## Install

```bash

yarn add @vue-chart/create-pie

```

## usage

- use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createPie from '@vue-chart/create-pie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createPie(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

- use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createPie from '@vue-chart/create-pie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = createPie(/* data source */)
}
</script>
```

- use in js

```vue
<script lang="ts" setup>
import createPie from '@vue-chart/create-pie'

export default {
    data() {
        return {
            options: createPie(/* data source */)
        }
    }
}
</script>
```