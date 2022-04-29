<template>
  <div>
    <van-cell-group inset>
      <van-field v-model="form.username" required label="用户名" placeholder="请输入用户名"/>
      <van-field v-model="form.password" required type="password" label="密码" />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  username: '',
  password: '',
})
</script>

<style scoped>

</style>