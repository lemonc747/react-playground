module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["plugin:@typescript-eslint/recommended", "react-app", "plugin:prettier/recommended"],
	plugins: ["@typescript-eslint", "react"],
	rules: {},
};

/**
 * reference: https://zhuanlan.zhihu.com/p/62401626
 * 
  1. 安装 ESLint 解析 TypeScript 的依赖： 
    $ yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
  2. 安装prettier依赖： 
    yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
  3. Visual Studio Code 集成 ESLint 与 Prettier
    安装vsc插件
 * 
 */
