/**
  ## reference: https://zhuanlan.zhihu.com/p/62401626
 
  ## 初略步骤
    1. 安装 ESLint 解析 TypeScript 的依赖： 
      $ yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
    2. 安装prettier依赖： 
      yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    3. Visual Studio Code 集成 ESLint 与 Prettier
      安装vsc插件

  ## eslintrc.js一个配置文件
    使用插件将prettier的格式化规则集成到eslint的检查中
    在prettier/prettier中添加prettier规则之后，不再需要.prettierrc或者vscode/setting中配置prettier规则

 * 
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // 基础规则
    // 集成prettier的规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',
        semi: true,
        bracketSpacing: true,
        arrowParens: 'avoid',
        bracketSameLine: true,
      },
    ],
  },
};
