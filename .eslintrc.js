module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // 确保在最后一个 屏蔽了eslint格式上的校验， extends引用顺序和优先级有关，所以必须最后一个
  ],
  rules: {
    // 支持ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
};
