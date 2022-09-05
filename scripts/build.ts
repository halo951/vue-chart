import { program } from 'commander'
import glob from 'glob'
import np from 'path'
import cp from 'child_process'

program
    .option('-p, --pkg <package name>', '指定编译某个包 (为空时, 编译全部)')
    .action(async ({ pkg }) => {
        const cwd: string = np.join(process.cwd(), 'packages')
        let projects: Array<string> = []
        if (pkg) {
            projects = glob.sync(pkg, { windowsPathsNoEscape: true, cwd })
        } else {
            projects = glob.sync('*', { windowsPathsNoEscape: true, cwd })
        }
        projects = projects.map((p) => np.join(cwd, p))
        // run build projects
        for (const p of projects) console.log(cp.execSync('yarn build', { cwd: p, encoding: 'utf-8' }))
    })
    .parse()
