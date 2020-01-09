# @jdrunken/stylelint


## dependancy
[stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended),   
[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)


## install

```
npm install @jdrunken/stylelint stylelint --save-dev
```


## how to use

take one follow after this.

- run this script in ternimal
  ``` bash
  npx json -I -f package.json -e 'this.stylelint = { "extends" = "./node_modules/glacier-stylelint/stylelintrc.yml"'
  ```

- add your package.json
  ``` json
  ...
  "stylelint": {
    "extends": [
      "./node_modules/@jdrunken/stylelint/stylelintrc.yml"
    ]
  }
  ...
  ```
