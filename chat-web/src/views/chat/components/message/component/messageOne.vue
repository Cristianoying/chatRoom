<template>
  <van-swipe-cell>
    <div class="chat-message" @click="chatWithFriend">
      <div class="img">
        <img :src="props.friend.headImg" />
      </div>
      <div class="info">
        <div class="title-message">
          <p>{{ props.friend.name }}</p>
          <p>{{ showMessage }}</p>
        </div>
        <div class="time">
          <p>{{ time }}</p>
          <div class="badge">
            <van-badge :content="3" />
          </div>
        </div>
      </div>
    </div>
    <template #right>
      <van-button square class="btn" type="primary" text="置顶" />
      <van-button square class="btn" type="danger" text="删除" />
    </template>
  </van-swipe-cell>
</template>

<script setup lang="ts">
import { ref, Ref, computed, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance();
const { push } = useRouter()
function chatWithFriend() {
  push('/chat-with-friend')
}
const props = defineProps({
  id: {
    type: Number,
  },
  friend: {
    type: Object,
    default: () => ({
      name: "",
      nickName: "",
      headImg: ""
    }),
  },
  messageList: {
    type: [Object],
    default: () => [],
  },
});
const time: Ref<string> = computed(() => {
  return proxy.$dayjs(new Date().getTime() - 1000 * 60 * 2).fromNow();
});
const showMessage: Ref<string> = computed(() => {
  let msg: string = "";
  props.messageList.length > 0 && (msg = props.messageList[0].message);
  return msg;
});
</script>

<style lang="less" scoped>
.chat-message {
  height: 80px;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;
  background: #fff;
  overflow: hidden;

  .img {
    width: 60px;
    margin-right: 12px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .title-message {
      flex: 1;
      overflow: hidden;
      /*超出部分隐藏*/
      white-space: nowrap;
      /*不换行*/
      text-overflow: ellipsis;
      /*超出部分文字以...显示*/
    }

    .time {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .badge {
        margin-right: 10px;
      }
    }
  }
}
.btn{
  height: 100%;
}
</style>