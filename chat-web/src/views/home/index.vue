<template>
  <div>home {{ a }}
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import io from "socket.io-client";
const a:Ref<number> = ref(0)
// init
const socket = io('http://127.0.0.1:9999/', {
  transports: ['websocket'],
  query: {
    a: 1123
  }
});
socket.on('connect', () => {
  console.log(123123);
})

</script>