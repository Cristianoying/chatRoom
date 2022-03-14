<template>
  <div>home {{ a }}
    <button @click="emitMsg">发消息</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';
import { io } from "socket.io-client";
const a:Ref<number> = ref(0)
const socket:any = ref(null)
onMounted(async () => {
  socket.value = io('http://127.0.0.1:7001/', {
    query: {
      id: 1,
    },
    transports: ['websocket'],
  })
  socket.value.on('connect', (...params: any) => {
    console.log(params, 'connect===');
  })
  socket.value.on('disconnect', (...params: any) => {
    console.log(params, 'disconnect===');
  })
})

function emitMsg() {
  socket.value.emit('news', {
  title: 'this is a news',
});
}
</script>