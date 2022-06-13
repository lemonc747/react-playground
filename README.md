



## github.io pages

https://lemonc747.github.io/react-playground/

reference: https://zhuanlan.zhihu.com/p/88481760

### gh-pages
`npm install gh-pages --save-dev`

### rpachage.json
1. "homepage": "https://lemonc747.github.io/react-playground",
2. "deploy": "gh-pages -d build"

### .gitignore
delete ./build(we need push build to repository)

### build and push(repeat when modified code)
1. npm run build
2. npm run deploy