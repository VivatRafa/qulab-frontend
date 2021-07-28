module.exports = {
    // Globals
    env: {
        browser: true,
        jest: true,
        // node: true,
    },
    parser: "babel-eslint",
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2019,
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true,
        },
    },
    settings: {
        react: {
            // TODO: eslint-plugin-react в скором времени должны включить эту опцию по умолчанию
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [
                    ['components', './components'],
                    ['layouts', './layouts'],
                    ['config', './config'],
                    ['hooks', './hooks'],
                    ['styles', './styles'],
                    ['utils', './utils'],
                    ['api', './api'],
                ],
            },
        },
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'prettier',
    ],
    rules: {
        "react/jsx-props-no-spreading": "off",
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "import/no-unresolved": [
            2, 
            { "caseSensitive": false }
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/prefer-default-export': ['warn'],
        'react/jsx-filename-extension': ['off'],
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'react-hooks/exhaustive-deps': 'warn',
        'react/no-array-index-key': 'off',
        'no-use-before-define': 'off',
        'react/forbid-prop-types': 'warn',
        'react/prop-types': 'warn',
    },
};
