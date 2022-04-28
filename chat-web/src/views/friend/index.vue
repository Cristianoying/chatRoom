<template>
  <div class="page">
    <van-nav-bar title="小于" left-text="" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <div class="messages">
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
const searchVal: Ref<string> = ref('');
const onClickLeft = ():void => history.back();
const onClickRight = ():void => { console.log(123) };
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  position: relative;

  .search {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .messages {
    padding-top: 54px;
    border-top: 1px solid #ccc;
  }
}
</style>