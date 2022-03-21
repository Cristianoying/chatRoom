<template>
  <div>home {{ a }}
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { Socket } from '@/utils/websocket'
// import io from "socket.io-client";
const a:Ref<number> = ref(0)
new Socket('http://127.0.0.1:9999/')


</script>