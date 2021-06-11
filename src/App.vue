<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core';
import { registerSW } from 'virtual:pwa-register';
onMounted(() => {
  registerSW();
})
</script>

<style>

</style>
