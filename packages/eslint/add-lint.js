const appRoot = require('app-root-path')

const packageFile = `${appRoot}/package.json`
const colors = require('colors')
const fs = require('fs')

const chunk = fs.readFileSync(packageFile, 'utf-8')
const pack = JSON.parse(chunk)

const drunken = 'drunken-eslint'


if (pack.eslintConfig) {
  if (pack.eslintConfig.extends) {
    if (typeof pack.eslintConfig.extends === 'string') {
      if (pack.eslintConfig.extends === drunken) { return }
      const result = [
        pack.eslintConfig.extends,
        drunken,
      ]

      pack.eslintConfig.extends = result
    } else {
      let isExist;
      pack.eslintConfig.extends.forEach((text) => {
        if (text === drunken) {
          isExist = true
          return isExist
        }
      })
      if (isExist) { return }
      pack.eslintConfig.extends.push(drunken)
    }
  } else {
    console.log(pack.eslintConfig)
    pack.eslintConfig.extends = drunken
  }
} else {
  pack.eslintConfig = {}
  pack.eslintConfig.extends = drunken
}

const data = JSON.stringify(pack, null, 2)

fs.writeFileSync(packageFile, data, 'utf-8', (err) => {
  console.log('Set drunken-eslint rule in your package.json...'.blue)
  err ? console.log('something is wrong!'.red) : console.log('done'.blue)
})
