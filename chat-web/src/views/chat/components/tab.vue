<template>
  <van-tabbar v-model="active" @change="tabChange">
    <van-tabbar-item name="message" badge="3">
      <span>消息</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="friends" icon="search">联系人</van-tabbar-item>
    <van-tabbar-item name="mine" icon="setting-o">自己</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
const active: Ref<string> = ref('message');
const icon = {
  active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
  inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png',
};
const emits = defineEmits(['tabChange'])
function tabChange(active: number): void {
  emits('tabChange', active)
}
</script>

<style scoped>
</style>