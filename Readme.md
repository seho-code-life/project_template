# node-command-ts-template

- [x] git 提交前的 lint-stage+husky 校验和美化代码（prettier）, 多人协作风格统一
- [x] 开发预设 eslint 校验和自动修复以及 IDE 统一配置，将开发错误遏制在本地

## 命令

| 命令       | 含义                                                    |
| ---------- | ------------------------------------------------------- |
| run        | 启动服务，会把src下的文件编译到dist中，自带nodemon监听         |
| lint       | 带有--fix 的 eslint 校验                                |
| prettier   | eslint-prettier 的美化代码命令                          |
| prepare    | npm install 自动执行的 husky 安装命令（不使用的请忽略） |
| lint-stage | 对 git 暂存区的文件进行操作，源于 lint-stage 插件       |
