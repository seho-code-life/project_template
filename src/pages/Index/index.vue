<template>
  <div class="index-box">
    {{ msg }}
    <p class="date">{{ dayjs(Date.now()).format('YYYY-MM-DD HH:mm') }}</p>
    <Button type="primary">test</Button>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from '@vue/reactivity';
import { Button, message } from 'ant-design-vue';

const msg = ref<string>('hello, ziggurat');
message.info('hello');
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
  @include app_ellipsis(2);
}
</style>
