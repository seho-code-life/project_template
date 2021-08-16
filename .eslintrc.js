module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // Specifies the ESLint parser
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: { jsx: true }
  },
  /* 扩展配置，加一些插件 */
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
    'plugin:prettier/recommended'
    // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出. 确保在最后一个.
  ],
  rules: {}
};
