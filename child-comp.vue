<template>
  <t-space direction="vertical" class="child">
    <t-space>
      <h3>vue child component</h3>
    </t-space>
    <t-space> percentage: {{ percentage }} </t-space>
  </t-space>
</template>

<script>
// ↓ one way to define component name(showing in Chrome Vue plugin)
export default { name: "ChildComp" };
</script>

<script setup>
// easier to debug
console.log("child-comp");

defineProps({
  percentage: { type: Number, default: 0 },
});
</script>

<style lang="less" scoped>
.child {
  background-color: #eee;
}
</style>
