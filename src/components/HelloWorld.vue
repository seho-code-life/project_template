<template>
  <div class="component">
    <div class="title text-4xl">hello, world</div>
    <div class="date">{{ date }}</div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import { useUserStore } from '../store/user'
const date = ref(dayjs().format('YYYY-MM-DD'))
const userStore = useUserStore()
userStore.resetAge()
console.log(userStore.$state)

const age = ref<numbe>(1)
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
