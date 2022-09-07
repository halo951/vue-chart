# @vue-chart/create-dark-process-serie

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fcreate-dark-process-serie.svg)](https://www.npmjs.com/package/@vue-chart/create-dark-process-serie)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fcreate-dark-process-serie.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/create-dark-process-serie)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart/tree/master/packages/create-dark-process-serie)

## About

> Tips: 建议使用 `@vue-chart/echart` 作为图表组件, 也可以搭配其他图表组件使用

创建圆环进度图 (dark theme)

![example](https://github.com/halo951/vue-chart/blob/master/packages/create-dark-process-serie/example.jpg)

## Install

```bash

yarn add @vue-chart/create-dark-process-serie

```

## usage

-   use in composition api

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import createDarkProcessSerie from '@vue-chart/create-dark-process-serie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = createDarkProcessSerie({
    /* data source */
    val: 0,
    max: 100,
    title: '图表标题'
})

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
```

-   use in class api

```vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import createDarkProcessSerie from '@vue-chart/create-dark-process-serie'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({})
export default class extends Vue {
    options: EChartsOption = createDarkProcessSerie(/* data source */)
}
</script>
```

-   use in js

```vue
<script lang="ts" setup>
import createDarkProcessSerie from '@vue-chart/create-dark-process-serie'

export default {
    data() {
        return {
            options: createDarkProcessSerie(/* data source */)
        }
    }
}
</script>
```
