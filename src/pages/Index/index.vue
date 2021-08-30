<template>
  <div class="index-box">
    {{ msg }}
    <p class="date">{{ dayjs(Date.now()).format('YYYY-MM-DD HH:mm') }}</p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { ref } from '@vue/reactivity';
import { message } from 'ant-design-vue';
import UserController from 'controller/user';

const userController = new UserController();

const login = async (params: TUserApiModel.ReqLogin) => {
  await userController.login(params);
};

// 调用login函数
login({
  captcha: '',
  password: '',
  username: '',
  uuid: ''
});

const msg = ref<string>('hello, world');
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
}
</style>
