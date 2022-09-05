# @vue-chart/create-mixin-bar

![npm](https://img.shields.io/npm/dw/@vue-chart/create-mixin-bar.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/@vue-chart/create-mixin-bar.svg?style=social&label=@vue-chart/create-mixin-bar)](https://github.com/halo951/@vue-chart/create-mixin-bar)
[![npm version](https://badge.fury.io/js/@vue-chart/create-mixin-bar.svg)](https://badge.fury.io/js/@vue-chart/create-mixin-bar)

## About

创建混合图表 (柱状图 & 折线图组合)

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

## Install

```bash

yarn add @vue-chart/create-mixin-bar

```

## usage

- use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createMixinBar from '@vue-chart/create-mixin-bar'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createMixinBar(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

- use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createMixinBar from '@vue-chart/create-mixin-bar'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = createMixinBar(/* data source */)
}
</script>
```

- use in js

```vue
<script lang="ts" setup>
import createMixinBar from '@vue-chart/create-mixin-bar'

export default {
    data() {
        return {
            options: createMixinBar(/* data source */)
        }
    }
}
</script>
```