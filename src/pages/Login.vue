<template>
  <div>
    登陆页
    <!-- <p>第一个单文件组件</p> -->
    <div class="box">
      <!-- <img src="../images/logo.png" alt /> -->
      <p>
        <input type="text" placeholder="请输入用户名" />
      </p>
      <p>
        <input type="password" placeholder="请输入密码"/>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 组件样式 */
html {
  font-size: 10vw;
}

body {
  font-size: 16px;
}

.box {
  width: 5rem;
  height: 5rem;
  /* background: gray; */
}
</style>