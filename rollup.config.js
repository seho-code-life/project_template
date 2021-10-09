import path from 'path';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import merge from 'lodash.merge';
import pkg from './package.json';

const extensions = ['.js', '.ts', '.json'];

const resolve = function (...args) {
  return path.resolve(__dirname, ...args);
};

const jobs = {
  esm: {
    output: {
      format: 'esm',
      file: resolve(pkg.module)
    }
  },
  umd: {
    output: {
      format: 'umd',
      file: resolve(pkg.main),
      name: 'rem'
    }
  },
  min: {
    output: {
      format: 'umd',
      file: resolve(pkg.main.replace(/(.\w+)$/, '.min$1')),
      name: 'rem'
    },
    plugins: [uglify()]
  }
};

// 从环境变量获取打包特征
const mergeConfig = jobs[process.env.FORMAT || 'esm'];

module.exports = merge(
  {
    input: resolve('./src/index.ts'),
    output: {
      file: resolve('./', pkg.main),
      format: 'esm'
    },
    plugins: [
      nodeResolve({
        extensions,
        modulesOnly: true
      }),
      babel({
        exclude: 'node_modules/**',
        extensions
      })
    ]
  },
  mergeConfig
);
