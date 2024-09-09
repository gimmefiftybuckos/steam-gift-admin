module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
        mongo: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: ['.*', 'webpack.common.js', 'webpack.dev.js', 'webpack.prod.js', 'build/**/*']
};
