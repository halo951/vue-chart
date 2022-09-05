import { program } from 'commander'
import glob from 'glob'
import np from 'path'
import cp from 'child_process'
import fs from 'fs-extra'

const log: {
    path: string
    pkg: { [p: string]: any }
    read: () => void
    write: () => void
} = {
    path: np.join(process.cwd(), 'release.log'),
    pkg: {},
    read() {
        if (!fs.existsSync(log.path)) return
        const fi: string = fs.readFileSync(log.path, { encoding: 'utf-8' })
        const pkgs = fi.split(/\n/g).map((line) => line.split('@'))
        for (const [p, v] of pkgs) log.pkg[p] = v
    },
    write() {
        const l: string = Object.entries(log.pkg)
            .map(([k, v]) => `${k}@${v}`)
            .join('\n')
        fs.writeFileSync(log.path, l, { encoding: 'utf-8' })
    }
}

program
    .option('-p, --pkg <package name>', '仅发布执行包')
    .action(async ({ pkg }) => {
        const cwd: string = np.join(process.cwd(), 'packages')
        let projects: Array<string> = []
        if (pkg) {
            projects = glob.sync(pkg, { windowsPathsNoEscape: true, cwd })
        } else {
            projects = glob.sync('*', { windowsPathsNoEscape: true, cwd })
        }
        log.read()
        // run build projects
        for (const p of projects) {
            let pVersion: string = fs.readJsonSync(np.join(cwd, p, 'package.json'), { encoding: 'utf-8' }).version
            // if version not update, then continue
            if (log.pkg[p] === pVersion) continue
            // publish
            try {
                console.log('> build package:', p)
                console.log(cp.execSync('yarn build ', { cwd: np.join(cwd, p), encoding: 'utf-8' }))
                console.log('> release package:', p)
                console.log(cp.execSync('yarn publish --access public', { cwd: np.join(cwd, p), encoding: 'utf-8' }))
            } catch (e) {
                console.log('> release failure:', (e as any).stderr)
            }
            // update log
            pVersion = fs.readJsonSync(np.join(cwd, p, 'package.json'), { encoding: 'utf-8' }).version
            log.pkg[p] = pVersion
            log.write()
        }
    })
    .parse()
