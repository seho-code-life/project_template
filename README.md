# rollup-typescript-package

- [x] 基础的校验机制，保证代码美观符合生产环境
- [x] 自带 babel,rollup,eslint 等配置，开发 lib 直接就能上手
- [x] 提供了 rollup 并行打包,多模块输出等功能

## 命令

| 命令      | 含义                        |
| --------- | --------------------------- |
| build     | 并行打包所有类型的 lib      |
| build:esm | 打包 esmodule 版本的 lib    |
| build:umd | 打包 umd 版本的 lib         |
| build:min | 打包压缩版的 umd 版本的 lib |

## 技术栈：

1. typescript

## 命令行 🔧

通过安装 Tool，来可视化地使用模板，因为仓库中的模板大多数都不会全部用到，你可以通过 tool 去按需引入它们

```
npm i enjoy-project-tool -g
```

创建模板

```
enjoy create
```

当然，作为模板的伴生工具，我还会继续维护并且持续提出新的 feature 来减轻我们开发负担

Tool 是使用 TS 开发的，如果你感兴趣可以提 pr，这是[Tool 的仓库](https://github.com/seho-code-life/project_tool)
