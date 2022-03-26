module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2018,
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],
    rules: {
        'vue/html-indent': ['error', 2] // 2 spaces for html indent
    }
}
