module.exports = {
  parser: 'babel-eslint',
  globals: {
    window: true,
    document: true,
    DEV: true,
    DEPLOYED_ADDRESS: true,
    artifacts: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb',
    'plugin:cypress/recommended',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'global-require': 0,
    'func-names': 0,
    'function-paren-newline': 0,
    'semi': [ 2, 'never' ],
    'prefer-arrow-callback': 0,
    eqeqeq: 0,
    'wrap-iife': 0,
    'no-unused-expressions': 0,
    'no-console': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'no-multi-assign': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['id'],
      },
    }],
    'jsx-a11y/label-has-associated-control': [1, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-fragments': 0,
    'react/jsx-one-expression-per-line': 0,
    'object-curly-newline': [
      'error',
      {
        'ImportDeclaration': {
          'multiline': true,
          'minProperties': 8
        }
      }
    ]
    'flowtype/define-flow-type': 2,
    'react/jsx-closing-bracket-location': [
      1,
      'line-aligned'
    ],
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'state',
        'lifecycle',
        'everything-else',
        '/^on.+$/',
        'render',
      ],
    }],
    'react/require-default-props': 'off',
    curly: [2, 'all'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-props-no-spreading': [
      'off', {
        html: 'ignore',
        custom: 'ignore',
      },
    ],
    'arrow-body-style': 0,
    'max-len': 0,
    'react/prop-types': 0,
  },
}
