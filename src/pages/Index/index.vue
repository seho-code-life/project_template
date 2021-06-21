<template>
  <div class="index-box">
    {{ msg }}
    <p class="date">{{ dayjs(Date.now()).format("YYYY-MM-DD HH:mm") }}</p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import { ref } from "@vue/reactivity";
import UserModel from "../../model/userModel";

const msg = ref<string>("hello, ziggurat");

const load = async () => {
  const userModel = new UserModel();
  console.log(
    await userModel.create({
      data: {
        a: 1,
      },
      options: {
        headers: {
          fuck: "123",
        },
        authApi: true,
      },
    })
  );
};

load();
</script>
<style lang="scss" scoped>
.index-box {
  text-align: center;
  margin-top: 30vh;
  font-weight: bold;
  font-size: 30px;
  .date {
    font-size: 15px;
  }
}
</style>