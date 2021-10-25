// 如果你在jest中不需要使用环境变量，那就可以忽略下面的代码，你也可以选择注释
process.env = {
  ...process.env,
  VITE_APP_API: 'http://serverless.aliyun.test.project-template-api.yinzhuoei.com'
};

// 导出一个配置对象
export default {
  rootDir: 'tests',
  preset: 'ts-jest/presets/default-esm',
  transform: {},
  verbose: true,
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  extensionsToTreatAsEsm: ['.ts']
};
