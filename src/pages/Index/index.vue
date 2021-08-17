<template>
  <div class="index-box">
    {{ msg }}
    <p class="date">{{ dayjs(Date.now()).format('YYYY-MM-DD HH:mm') }}</p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from '@vue/reactivity';

const msg = ref<string>('hello, ziggurat');
</script>
<style lang="scss" scoped>
.index-box {
  text-align: center;
  margin-top: 30vh;
  font-weight: bold;
  font-size: 30px;
}

.date {
  font-size: 15px;
  color: red;
  @include app_ellipsis(2);
}
</style>
