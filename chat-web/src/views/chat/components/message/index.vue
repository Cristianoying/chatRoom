<template>
  <div class="page">
    <van-search class="search" v-model="searchVal" placeholder="搜索" />
    <div class="messages">
      <lazy-component>
        <MessageOne v-for="item in messages" :key="item.id" v-bind="item" />
      </lazy-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Massage } from '../../type'
import MessageOne from './component/messageOne.vue';
const searchVal: Ref<string> = ref('');
const messages: Ref<Massage[]> = ref([
  {
    id: 1,
    friend: {
      name: '小于',
      nickName: '小于',
      headImg: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    },
    messageList: [
      {
        time: '2分钟前',
        message: '123123',
        messageType: 'message',
        read: false,
      }
    ]
  },
])
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
    min-height: calc(100vh - 120px);
    background: #f6f6f6;
  }
}
</style>