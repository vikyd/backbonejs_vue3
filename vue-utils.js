const VueUtils = {
  /**
   * https://github.com/FranckFreiburger/vue3-sfc-loader/blob/main/docs/examples.md
   */
  loadOptions: {
    // global vars
    moduleCache: {
      vue: window.Vue,
      "tdesign-vue-next": window.TDesign,
      lodash: window._,
      less: window.less,
    },
    async getFile(urlIn) {
      let url = urlIn;
      if (url.startsWith("@")) {
        // @ prefix path
        const loc = window.location;
        url =
          location.protocol +
          "//" +
          location.host +
          location.pathname +
          urlIn.substring(1);
      }

      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        throw Object.assign(new Error(res.statusText + " " + url), {
          res,
        });
      }

      // auto load .js as module
      if (url.endsWith(".js")) {
        const text = await res.text();
        return {
          getContentData: () => {
            return text;
          },
          type: ".mjs",
        };
      }
      return {
        getContentData: (asBinary) =>
          asBinary ? res.arrayBuffer() : res.text(),
      };
    },
    addStyle(textContent) {
      const style = Object.assign(document.createElement("style"), {
        textContent,
      });
      const ref = document.head.getElementsByTagName("style")[0] || null;
      document.head.insertBefore(style, ref);
    },
  },
  parseVueCompTag(path) {
    const arr = path.split("/");
    const fileParts = arr[arr.length - 1].split(".");
    return fileParts[0];
  },
  /**
   * create Vue app
   * - https://github.com/FranckFreiburger/vue3-sfc-loader/blob/main/docs/examples.md
   */
  loadVueComp({ compName = "my-comp", compPath, vueData = {}, mountTarget }) {
    const { loadModule } = window["vue3-sfc-loader"];
    const App = {
      // should kebab-case, like: task-list.vue
      name: `app-${compName}`,
      components: {
        [compName]: window.Vue.defineAsyncComponent(() =>
          loadModule(compPath, VueUtils.loadOptions)
        ),
      },
      data() {
        return {
          ...vueData,
        };
      },
    };
    const app = window.Vue.createApp(App);
    app.use(window.TDesign);
    app.mount(mountTarget);
  },
};
