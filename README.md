# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

###文件配置

* components--->commons:为存放公共组件
* components--->pages:存放组件

* modules--->为放置公共配置文件
* modules--->config.js 为放置公共配置项 减少在main.js里面配置
* modules--->filters.js 为放置过滤器 
* modules---->rem.js  适应手机尺寸的配置文件
* modules---->ui-components.js  添加组件为公共组件文件

# stylesheets ---->全局样式文件 
* 所有全局的样式 都可以写到文件夹里面的 _base.scss _common.scss _mixins.scss _reset.scss中去   main.scss为把这些文件注册到全局中

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


