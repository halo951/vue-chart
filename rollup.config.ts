import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { RollupOptions } from 'rollup'
import pkg from './packages/echart/package.json'
import { totalSize } from 'rollup-plugin-total-size'

const banner: string = `
/** ${pkg.name}
 *
 * @author ${pkg.author.name}(${pkg.author.url})
 * @license ${pkg.license}
 */`.trim()

/** export rollup.config */
export default (): RollupOptions => {
    const outType: Array<'cjs' | 'es'> = ['cjs', 'es']
    return {
        treeshake: true,
        strictDeprecations: false,
        input: 'lib/index.ts',
        plugins: [
            typescript({ clean: true, useTsconfigDeclarationDir: true, abortOnError: true }),
            // compress
            terser(),
            // total bundle size
            totalSize()
        ],
        output: outType.map((format) => {
            return {
                exports: 'auto',
                inlineDynamicImports: true,
                banner,
                format,
                file: `dist/index.${format}.js`
            }
        })
    }
}
