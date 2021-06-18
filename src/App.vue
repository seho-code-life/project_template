<template>
  <Spin :spinning="store.state.requestLoading">
    <router-view></router-view>
  </Spin>
</template>

<script lang="ts" setup>
import { Spin } from "ant-design-vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { registerSW } from "virtual:pwa-register";
const store = useStore();
console.log(store.state.requestLoading)
onMounted(() => {
  registerSW();
});
</script>

<style>
</style>
