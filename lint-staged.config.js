module.exports = {
  '*.{ts,tsx}': ['prettier --write', 'eslint --fix', () => 'tsc --noEmit --skipLibCheck'],
  '*.vue': ['prettier --write', 'eslint --fix', () => 'vue-tsc --noEmit --skipLibCheck'],
  '*.{json,js,jsx}': ['prettier --write', 'eslint --fix']
}
