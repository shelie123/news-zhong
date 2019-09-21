<template>
  <div class="colorRed">
    <!-- 这是一个单文件内容， -->
    {{message}}
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "heollo vue"
    };
  }
};
</script>

<style>
.colorRed {
  color: red;
}
.box {
  width: 5vw;
  height: 5vw;
  background: gray;
}
</style>