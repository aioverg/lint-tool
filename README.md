## 项目名称
> 售后宝前端规范工具库，集成了：

- 用 `Stylelint` 约束 `CSS`，配置文件在 `config\.eslintrc`，使用了如下集合：

  ```json
  "stylelint": "15.2.0",
  "stylelint-config-standard": "30.0.1",
  "stylelint-config-standard-scss": "7.0.1",
  "stylelint-config-standard-vue": "1.0.0",
  "stylelint-order": "6.0.2",
  "postcss": "8.4.21",
  "postcss-html": "1.5.0",
  ```

- 用 `ESLint` 约束 `JS`，配置文件在 `config\.stylelintrc`，使用了如下集合：

  ```json
  "eslint": "8.34.0",
  "eslint-config-standard": "17.0.0",
  "eslint-plugin-vue": "9.9.0",
  "vue-eslint-parser": "9.1.0",
  ```

## 运行命令

1. 全局安装 `npm install -g pub-bbx-lint`。
2. 在项目内运行 `pub-bbx-lint`，完成配置即可。

## 使用条件

1. 安装 ESLint 、Stylelint 插件。

2. vscode 配置如下（也可以查看本项目的 `.vscode/setting.json` 文件）：

   ```json
   {
     "stylelint.enable": true,    
     "editor.codeActionsOnSave": {     
       "source.fixAll.eslint": true,   
       "source.fixAll.stylelint": true    
     },
     "stylelint.validate": [
       "css",
       "less",
       "postcss",
       "scss",
       "vue",
       "sass"
     ],
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "vue"
     ]
   }
   ```

3. 其它编辑器，待补充