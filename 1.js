const glob = require('glob')
const fs = require('fs-extra')

for (const p of glob.sync('create-*', { cwd: 'packages' })) {
    const pkg = fs.readJsonSync(`packages/${p}/package.json`, { encoding: 'utf-8' })
    const { description } = pkg
    console.log(`yarn cp -n ${p} -d "${description}"`)
}
