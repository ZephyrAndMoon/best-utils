'use strict'

console.log()
process.on('exit', () => {
  console.log()
})
console.log(process.argv)
if (!process.argv[2]) {
  console.error('[名称]必填 - Please enter new name')
  process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const name = process.argv[2]

const utilsFile = require('../utils.json')
if (utilsFile[name]) {
  console.error(`${name} 已存在.`)
  process.exit(1)
}
utilsFile[name] = `./${name}`
fileSave(path.join(__dirname, '../utils.json'))
  .write(JSON.stringify(utilsFile, null, '  '), 'utf8')
  .end('\n')

const Files = [
  {
    fileName: `${name}.ts`,
    filePath: path.resolve(__dirname, '../src'),
    content: `/**
 * ${name}
 * @version 1.0.1
 * @param
 * @category ${name}
 * @example
 */
const ${name} = (): boolean => {
  return true
}

export default ${name}`
  },
  {
    fileName: `${name}.test.ts`,
    filePath: path.resolve(__dirname, '../__tests__'),
    content: `import ${name} from '../src/${name}'

test('this is test', () => {})`
  }
]

Files.forEach(file => {
  fileSave(path.join(file.filePath, file.fileName))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log(utilsFile)
let indexConent = ``
const exportName = []
let exportDefault = ''
for (const key in utilsFile) {
  indexConent += `import ${key} from '${utilsFile[key]}'\n`
  exportName.push(key)
}
indexConent += `\nexport default { ${exportName.join(', ')} }`
indexConent += `\nexport { ${exportName.join(', ')} }`

fileSave(path.join(path.resolve(__dirname, '../src'), 'index.ts'))
  .write(indexConent, 'utf8')
  .end('\n')
