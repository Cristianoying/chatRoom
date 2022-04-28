<template>
  <div class="page">
    <van-search class="search" v-model="searchVal" placeholder="搜索" />
    <van-pull-refresh class="messages" :head-height="80" v-model="loading" @refresh="onRefresh">
      <template #pulling="props">
        <img class="doge" src="https://cdn.jsdelivr.net/npm/@vant/assets/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }" />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://cdn.jsdelivr.net/npm/@vant/assets/doge.png" />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://cdn.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg" />
      </template>
      <MessageOne v-for="item in messages" :key="item.id" v-bind="item" />
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
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
const { push } = useRouter()
function chatWithFriend() {
  push('/chat-with-friend')
}
const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  width: 100%;
  position: relative;

  .search {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .messages {
    min-height: 100%;
    padding-top: 54px;
    border-top: 1px solid #ccc;
    .doge {
      width: 140px;
      height: 72px;
      margin-top: 8px;
      border-radius: 4px;
    }
  }
}
</style>