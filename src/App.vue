<template>
  <Spin :spinning="store.state.requestLoading">
    <router-view></router-view>
  </Spin>
</template>

<script lang="ts" setup>
import { Spin } from 'ant-design-vue';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store = useStore();
</script>
<style lang="scss"></style>
