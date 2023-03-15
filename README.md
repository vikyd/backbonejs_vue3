# Backbone.js + Vue 3

Thanks for [vue3-sfc-loader](https://github.com/FranckFreiburger/vue3-sfc-loader), stone age [backbone.js](https://backbonejs.org/) + jquery project can use [Vue 3](https://vuejs.org) now.

# Why ?

Because some historical reasons, maybe some backbonejs + jQuery projects are still running online. Wrose still, developers may has to add more feature to these old projects. However, it is not easy to maintain source code in old project mode. Use Vue 3 in part of page is a better middle choice, at least, no more backbone.js coding.

# Usage

- download this repo, cd into repo dir
- setup a simple http server in current dir:
  - py3: `python3 -m http.server 8686`
  - py2: `python -m SimpleHTTPServer 8686`
  - any other http server
- open demo, use dependency online: https://localhost:8686/index.html
- open demo, use dependency locally
  - install dependency: `npm install`
  - https://localhost:8686/index-local.html

# VSCode auto-completion

VSCode can provide Vue 3 code auto-completion when backbone.js integrating with Vue 3.

- use [Volar Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.volar), do not use Vetur.
- install Vue 3 locally which is needed for Volar

# Chrome DevTools: break point

Because `.vue` files are compiled in browser, source map is not working, we cannot search `.vue` files in devtools Source panel, and cannot add break point to `.vue`.

Solution:

- add `console.log('vueFileName')` to each `.vue` file, then to go devtools Console panel
- find corresponding printed file name, click on the right like `VM1275:3`, source code appeared
- now, you can add break point !

# Chrome DevTools: Vue plugin

You can use Chomre [Vue plugin](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).

- poor `.vue` component name, need addition works, see `export default` in `hello-world.vue` file

# Demo includes

- Vue 3
  - single setup `.vue`
  - import sub component
- [less](https://lesscss.org/)

# Problems

- import ES Module with sub dependency
  - may be possible, if you can write correct `getFile` function in `loadOptions`
  - or write some thirty dependencies as local files
- no Typescript Integration
- performance

# More about vue3-sfc-loader

vue3-sfc-loader includes more feature than this demo :

- [Examples](https://github.com/FranckFreiburger/vue3-sfc-loader/blob/main/docs/examples.md)
- [FAQ](https://github.com/FranckFreiburger/vue3-sfc-loader/blob/main/docs/faq.md)
- [API](https://github.com/FranckFreiburger/vue3-sfc-loader/blob/main/docs/api/README.md#loadmodule)
