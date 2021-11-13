module.exports = {
  '*.{ts,tsx}': ['prettier --write', 'eslint --fix', 'tsc --noEmit'],
  '*.vue': ['prettier --write', 'eslint --fix', 'vue-tsc --noEmit'],
  '*.{json,js,jsx}': ['prettier --write', 'eslint --fix']
}
