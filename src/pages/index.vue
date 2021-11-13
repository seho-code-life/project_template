<template>
  <div class="index-box">
    <hello-world></hello-world>
  </div>
</template>
<script lang="ts" setup>
const n = ref<number>(1)
</script>
<style lang="scss" scoped>
.index-box {
  text-align: center;
  margin-top: 30vh;
  font-weight: bold;
  font-size: 13px;
}

.date {
  font-size: 8px;
  color: red;
}
</style>
