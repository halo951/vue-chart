# @vue-chart

[![npm version](https://badge.fury.io/js/%40vue-chart%2Fechart.svg)](https://www.npmjs.com/package/@vue-chart/echart)
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2Fechart.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/echart)
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart)

## About

提供适用于 vue2.x、vue3.x 的通用 echart 组件, 和一些常用的图表创建方法

## docs

-   [使用 <Chart /> 组件](packages/echart/README.md)

## 可用图表模板

### 默认

-   [圆环进度图 - @vue-chart/create-process-serie](https://www.npmjs.com/package/@vue-chart/create-process-serie)

### 暗黑主题

-   [圆环进度图 (dark) - @vue-chart/create-dark-process-serie](https://www.npmjs.com/package/@vue-chart/create-dark-process-serie)

## 贡献指南

### 增加新的图表模板

1. clone this repo 并安装依赖
2. 执行命令 `yarn cp -n <package name> -d <description>` 创建一个新的图表模板
3. 遵循 ts 规范 和 echarts api
4. 注意事项

    - **echarts 版本** 一般建议最新的 5.x 版本, 如果有特殊需求(如: 需要 4.x), 则应在`peerDependencies`中, 指定需要的 echart 版本
    - **package name** 包名命名方式上, 一般建议 `create-<图表类型>`, 应遵循`小写加 - `方式命名
    - **导出文件** 使用 `yarn cp` 会默认创建一个 `index.ts`, 如需修改, 应保证导出文件格式与 `README.md` 使用方式一致.
    - **记得截图** 使用截图工具, 截一个效果图(命名: example.jpg), 存放到新增包的根目录下, 并推送到 github.

## Scripts

-   创建新的图表模板 `yarn cp -n <package name> -d <description>`
-   仅编译 `yarn build`
-   仅编译 (执行包) `yarn build -p <package name>`
-   发布 `yarn release`
-   发布单个包 `yarn release -p <package name>`
