<template>
  <van-grid :border="false" :column-num="3">
    <van-grid-item>
      <van-button type="primary" size="mini" @click="onCapture()">开始</van-button>
      <van-button type="primary" size="mini" @click="onStop()">停止</van-button>
    </van-grid-item>
    <van-grid-item>
      <input type="file" accept="image/*" capture="camera">
      <!-- <video class="video_class" id="localVideo" autoplay playsinline controls="false" /> -->
    </van-grid-item>
  </van-grid>
</template>

<script setup lang="ts">
async function onCapture() {
  const constraints = {
      'video' : true,
      'audio' : true
  }
  //获取当前音视频输入流，异步执行需要等待完成
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  //获取页面上的video控件
  const videoElem: any = document.querySelector('video#localVideo');
  if(videoElem == null){
      stopCapture();
      alert("无法获取到页面上的视频控件");
      return;
  }
  //播放捕获的音视频
  videoElem.srcObject = stream;
}

function onStop() {
  stopCapture();
}

function stopCapture() {
  //重新加载页面
  location.reload();
}
</script>

<style lang="less" scoped>
.video_class {
  display: block;
  width: 100px;
  height: auto;
  clear: both;
  margin: 0 auto;
}
</style>