import { program } from 'commander'
import fs from 'fs-extra'
import np from 'path'

const pkgPath = (name: string) => np.join(process.cwd(), 'packages', name)
const isExist = (name: string) => fs.existsSync(pkgPath(name))

const createPkg = (name: string, desc: string) => {
    const pkg = {
        name: `@vue-chart/${name}`,
        description: `${desc}`,
        keywords: ['echart', 'vue-chart'],
        version: '1.0.0',
        main: 'dist/index.cjs.js',
        module: 'dist/index.es.js',
        typings: 'typings/index.d.ts',
        exports: {
            '.': {
                import: './dist/index.es.js',
                require: './dist/index.cjs.js'
            }
        },
        sideEffects: false,
        author: {
            name: 'halo951',
            url: 'https://github.com/halo951'
        },
        repository: {
            type: 'git',
            url: 'https://github.com/halo951/vue-chart.git'
        },
        bugs: {
            url: 'https://github.com/halo951/vue-chart/issues'
        },
        homepage: 'https://github.com/halo951/vue-chart#readme',
        license: 'MIT',
        scripts: {
            clean: 'rimraf dist/* && rimraf typings/*',
            build: 'rollup --config rollup.config.ts --configPlugin typescript2',
            'lint:fix': 'prettier -w **.ts **.md **.json',
            test: 'jest --coverage'
        },
        peerDependencies: {
            echarts: '>= 4.0.0'
        },
        devDependencies: {
            echarts: '^5.3.3'
        }
    }

    //  write
    fs.outputFileSync(np.join(pkgPath(name), 'package.json'), JSON.stringify(pkg, null, 4), { encoding: 'utf-8' })
}

const createReadme = (name: string, desc: string) => {
    const toCamelCase = (str: string = ''): string => {
        return str
            .replace(/[^a-z0-9]/gi, ' ')
            .toLowerCase()
            .split(' ')
            .map((el, ind) => (ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length)))
            .join('')
    }
    const hump: string = toCamelCase(name)
    const readme: string = `
# @vue-chart/${name}

[![npm version](https://badge.fury.io/js/%40vue-chart%2F${name}.svg)](https://www.npmjs.com/package/@vue-chart/${name})
[![npm downloads](https://img.shields.io/npm/dm/%40vue-chart%2F${name}.svg?style=flat)](https://www.npmjs.com/package/@vue-chart/${name})
[![GitHub stars](https://img.shields.io/github/stars/halo951/vue-chart?style=social&label=@vue-chart/echart)](https://github.com/halo951/vue-chart/tree/master/packages/${name})

## About

> Tips: 建议使用 \`@vue-chart/echart\` 作为图表组件, 也可以搭配其他图表组件使用

${desc}

![example](./example.jpg)

## Install

\`\`\`bash

yarn add @vue-chart/${name}

\`\`\`

## usage

- use in composition api

\`\`\`vue
<script lang="ts" setup>
import { ref } from 'vue'
import ${hump} from '@vue-chart/${name}'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

const options: EChartsOption = ${hump}(/* data source */)

const chartOptions: Ref<EChartsOption> = ref(options)
</script>
\`\`\`

- use in class api

\`\`\`vue
<script lang="ts" setup>
import { Component, Vue } from 'vue-property-decorator'
import ${hump} from '@vue-chart/${name}'
import type { EChartsOption } from '@vue-chart/echart' // or from 'echart'

@Component({ })
export default class extends Vue {
    options: EChartsOption = ${hump}(/* data source */)
}
</script>
\`\`\`

- use in js

\`\`\`vue
<script lang="ts" setup>
import ${hump} from '@vue-chart/${name}'

export default {
    data() {
        return {
            options: ${hump}(/* data source */)
        }
    }
}
</script>
\`\`\`


`
    //  write
    fs.outputFileSync(np.join(pkgPath(name), 'README.md'), readme.trim(), { encoding: 'utf-8' })
}

/** 创建导出文件 */
const createIndex = (name: string, desc: string) => {
    const ts: string = `
import { EChartsOption } from 'echarts'

/** ${desc}
 * 
 * @returns EChartsOption
 */
export default (): EChartsOption => {
    // @define options
    const opt: EChartsOption = {}

    // TODO 

    return opt
}
`.trim()
    fs.outputFileSync(np.join(pkgPath(name), 'lib', 'index.ts'), ts, { encoding: 'utf-8' })
}

program
    .requiredOption('-n, --name <package name>', '包名')
    .option('-d, --desc <description>', '描述', '')
    .action(({ name, desc }) => {
        // 判断目录是否存在
        if (isExist(name)) {
            // return console.log(`> 目录 '${name}' 已存在`)
        }
        // 创建package.json
        createPkg(name, desc)
        // 创建README
        createReadme(name, desc)
        // 复制 tsconfig.json
        fs.copyFileSync(
            np.join(process.cwd(), 'packages/echart/tsconfig.json'),
            np.join(process.cwd(), `packages/${name}/tsconfig.json`)
        )
        // 复制 rollup.config.ts
        fs.copyFileSync(
            np.join(process.cwd(), 'packages/echart/rollup.config.ts'),
            np.join(process.cwd(), `packages/${name}/rollup.config.ts`)
        )
        // 创建入口文件
        createIndex(name, desc)

        console.log('> 创建完成')
    })
    .parse()
