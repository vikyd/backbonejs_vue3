<template>
  <div class="vv">
    <t-divider />
    <h2>Vue Content</h2>
    <t-space direction="vertical">
      <t-space>
        <t-button variant="outline" theme="primary" @click="onShowMsgClick"
          >show msg</t-button
        >
        <t-button theme="danger" @click="onShowDialogClick"
          >show dialog</t-button
        >
        <t-button theme="warning">btn</t-button>
        <t-button theme="success">btn</t-button>
      </t-space>
      <t-space>
        <t-date-picker v-model="date" />
      </t-space>
      <t-space>
        <span> simple prop: </span>
        <span>
          {{ simple }}
        </span>
      </t-space>
      <t-space>
        <span>obj props:</span>
        <t-textarea :default-value="json" autosize></t-textarea>
      </t-space>
      <t-space>
        <t-slider v-model="sliderVal" class="slider" />
        <span>{{ sliderVal }}</span>
      </t-space>
      <t-space>
        <child-comp :percentage="sliderVal" class="child" />
      </t-space>
    </t-space>
  </div>
</template>

<script>
// ↓ one way to define component name(showing in Chrome Vue plugin)
export default { name: "HelloWorld" };
</script>

<script setup>
import { computed, onMounted, ref } from "vue";
// doc of tdesign: https://tdesign.tencent.com/vue-next/components/button
import { MessagePlugin, DialogPlugin } from "tdesign-vue-next";
import ChildComp from "./child-comp.vue";
import { concatStr } from "./simple.js";

// easier to debug
console.log("hello-world");

const props = defineProps({
  prop1: { type: String, default: "" },
  propobj: {
    type: Object,
    default() {
      return {};
    },
  },
});

const simple = computed(() => {
  return concatStr("Vue", props.prop1);
});

const onShowMsgClick = () => {
  MessagePlugin.success({
    content: "Success",
  });
};

const onShowDialogClick = () => {
  DialogPlugin({
    header: "tips",
    body: "nice click",
  });
};

const json = computed(() => {
  return JSON.stringify(props.propobj, null, 4);
});

const date = ref("2023-02-15");

const sliderVal = ref(70);
</script>

<style lang="less" scoped>
.vv {
  color: #41b883;
}

.slider {
  width: 600px;
}

.child {
  padding: 10px 150px 30px;
}
</style>
