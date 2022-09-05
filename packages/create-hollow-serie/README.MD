# @vue-chart/create-hollow-serie

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fcreate-hollow-serie.svg)](https://www.npmjs.com/package/@vue-chart/create-hollow-serie)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fcreate-hollow-serie.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/create-hollow-serie)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart/tree/master/packages/create-hollow-serie)

## About

创建空心圆样式饼状图 (custom serie)

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

## Install

```bash

yarn add @vue-chart/create-hollow-serie

```

## usage

- use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createHollowSerie from '@vue-chart/create-hollow-serie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createHollowSerie(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

- use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createHollowSerie from '@vue-chart/create-hollow-serie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = createHollowSerie(/* data source */)
}
</script>
```

- use in js

```vue
<script lang="ts" setup>
import createHollowSerie from '@vue-chart/create-hollow-serie'

export default {
    data() {
        return {
            options: createHollowSerie(/* data source */)
        }
    }
}
</script>
```