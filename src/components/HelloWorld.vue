<template>
  <div class="component">
    <div class="title text-4xl">{{ msg }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
const date = ref(dayjs().format('YYYY-MM-DD'))
defineProps({
  msg: { type: String, default: 'hello, world' }
})
</script>
<style lang="scss" scoped>
.component {
  .title {
  }
  .date {
    margin-top: 15px;
  }
}
</style>
