<template>
  <div class="tab-content">
    <Message v-show="activeTab === 'message'" />
  </div>
  <Tab @tabChange="tabChange" />
</template>

<script setup lang="ts">
import Tab from "./components/tab.vue";
import Message from "./components/message/index.vue";
import { ref, Ref } from "@vue/reactivity";

const activeTab: Ref<string> = ref("message");
function tabChange(active: string): void {
  activeTab.value = active;
}
</script>

<style lang="less" scoped>
.tab-content {
  background: #f6f6f6;
  height: calc(100vh - 50px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>