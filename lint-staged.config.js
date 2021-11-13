module.exports = {
  '*.{ts,tsx}': (filenames) => ['eslint --fix', 'tsc --noEmit'],
  '*.vue': (filenames) => ['eslint --fix', 'vue-tsc --noEmit'],
  '*.{json,js,jsx}': (filenames) => {
    console.log(filenames)
    return ['eslint --fix']
  }
}
