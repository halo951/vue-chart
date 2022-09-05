# @vue-chart/create-line

![npm](https://img.shields.io/npm/dw/@vue-chart/create-line.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/@vue-chart/create-line.svg?style=social&label=@vue-chart/create-line)](https://github.com/halo951/@vue-chart/create-line)
[![npm version](https://badge.fury.io/js/@vue-chart/create-line.svg)](https://badge.fury.io/js/@vue-chart/create-line)

## About

创建折线图

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

## Install

```bash

yarn add @vue-chart/create-line

```

## usage

- use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createLine from '@vue-chart/create-line'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createLine(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

- use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createLine from '@vue-chart/create-line'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = createLine(/* data source */)
}
</script>
```

- use in js

```vue
<script lang="ts" setup>
import createLine from '@vue-chart/create-line'

export default {
    data() {
        return {
            options: createLine(/* data source */)
        }
    }
}
</script>
```