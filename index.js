const AppView = Backbone.View.extend({
  el: ".container",
  events: {
    "click .btn": "onBtnClick",
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    this.a = 0;
    this.$el.html(`<div style="margin: 10px 5%;">
      <div>
        <h1>Backbone.js content</h1>
        <div>
          <button class="btn">click</button>
          <span class="count">${this.a}</span>
        </div>
      <div class="vue-container"></div>
    </div>`);
    this.renderVue();
  },
  onBtnClick() {
    this.a += 1;
    this.$(".count").text(this.a);
  },
  renderVue() {
    const compPath = `./hello-world.vue`;
    const compName = VueUtils.parseVueCompTag(compPath);
    const $el = this.$(".vue-container");
    const prop1 = "Hello World";
    const objData = {
      keyA: 1,
      keyB: ["x", "y", "z", { s: 123 }],
    };
    $el.append(`<${compName} prop1="${prop1}" :propobj="keyB"/>`);
    VueUtils.loadVueComp({
      compName,
      compPath,
      mountTarget: $el[0],
      // ↓ props for vue app root, not for component(usage ↑)
      vueData: objData,
    });
  },
});

new AppView();
