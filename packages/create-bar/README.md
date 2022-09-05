# @vue-chart/create-bar

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fcreate-bar.svg)](https://www.npmjs.com/package/@vue-chart/create-bar)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fcreate-bar.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/create-bar)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart/tree/master/packages/create-bar)

## About

创建柱状图

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

## Install

```bash

yarn add @vue-chart/create-bar

```

## usage

- use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createBar from '@vue-chart/create-bar'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createBar(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

- use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createBar from '@vue-chart/create-bar'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = createBar(/* data source */)
}
</script>
```

- use in js

```vue
<script lang="ts" setup>
import createBar from '@vue-chart/create-bar'

export default {
    data() {
        return {
            options: createBar(/* data source */)
        }
    }
}
</script>
```