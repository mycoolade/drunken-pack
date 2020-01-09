# @jdrunken/eslint

## install

```
npm install @jdrunken/eslint --save-dev
```

## using

- add your package.json
  ``` json
  ...
  "eslint": {
    "extends": [
      "./node_modules/@jdrunken/eslint/eslint.js"
    ]
  }
  ...
  ```


## `.eslintignore`

If you want ignore files, add `.eslintignore` file in your package.json

for example,

```
*.test.js
```

For more information: https://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments



