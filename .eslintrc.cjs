module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        //'plugin:react/recommended'
    ],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'eqeqeq': 'error',
        'indent': [
            'error',
            4
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
