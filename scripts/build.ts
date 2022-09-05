import { program } from 'commander'
import fs from 'fs-extra'
import glob from 'glob'
import np from 'path'
import cp from 'child_process'

program
    .option('-p, --pkg <package name>', '指定编译某个包 (为空时, 编译全部)')
    .action(({ pkg }) => {
        const cwd: string = np.join(process.cwd(), 'packages')
        let task: Array<string> = []
        if (pkg) {
            task.push(pkg)
        } else {
            task = glob.sync('*', {
                windowsPathsNoEscape: true,
                cwd
            })
        }
        // transform to package name and filter playground or not project path.
        task = task
            .map((p) => p.replace(cwd, ''))
            .filter((p) => p !== 'playground')
            .filter((p) => {
                const pkgPath: string = np.join(cwd, p, 'package.json')
                const isPro: boolean = fs.existsSync(pkgPath)
                if (!isPro) return false
                const pkg = fs.readJsonSync(pkgPath, { encoding: 'utf-8' })
                return !!pkg?.scripts?.build
            })
            .sort((a, b) => (a === 'echart' ? -1 : 1))
        // run build task
        for (const t of task) {
            cp.execSync('yarn build', { cwd: np.join(cwd, t) })
        }
    })
    .parse()
