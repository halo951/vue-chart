# @vue-chart/create-line

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fcreate-line.svg)](https://www.npmjs.com/package/@vue-chart/create-line)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fcreate-line.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/create-line)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart/tree/master/packages/create-line)

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