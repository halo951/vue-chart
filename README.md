# @vue-chart

![npm](https://img.shields.io/npm/dw/@vue-chart/echart.svg)
[![GitHub stars](https://img.shields.io/github/stars/halo951/@vue-chart/echart.svg?style=social&label=@vue-chart/echart)](https://github.com/halo951/@vue-chart/echart)
[![npm version](https://badge.fury.io/js/@vue-chart/echart.svg)](https://badge.fury.io/js/@vue-chart/echart)

## About

提供适用于 vue2.x、vue3.x 的通用 echart 组件, 和一些常用的图表创建方法

## docs

-   [使用 <Chart /> 组件](packages/echart/README.md)

## 贡献指南

### 增加新的图表模板

1. clone this repo 并安装依赖
2. 执行命令 `yarn cp -n <package name> -d <description>` 创建一个新的图表模板
3. 遵循 ts 规范 和 echarts api
4. 注意事项

    - **echarts 版本** 一般建议最新的 5.x 版本, 如果有特殊需求(如: 需要 4.x), 则应在`peerDependencies`中, 指定需要的 echart 版本
    - **package name** 包名命名方式上, 一般建议 `create-<图表类型>`, 应遵循`小写加 - `方式命名
    - **导出文件** 使用 `yarn cp` 会默认创建一个 `index.ts`, 如需修改, 应保证导出文件格式与 `README.md` 使用方式一致.
