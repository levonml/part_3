module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12
  },
  "editor.codeActionsOnSave": {
	  "source.fixAll.eslint": true
	},
   
  'plugins': [
    'react'
  ],
  'rules': {
    'eqeqeq': 'error',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
