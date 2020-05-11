<template>
  <div class="login-home">
    <div class="login-img">
      <img src="@/assets/images/qqlogin.png" alt="qq-login">
    </div>
    <div class="login-btn">
      <router-link to="/register">
        <input type="button" value="新用户" class="new-user">
      </router-link>
      <router-link to="/login">
      <input type="button" value="登入" class="login">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginHome'
}
</script>

<style lang="stylus" scoped>
.login-home
  width 100vw
  .login-img
    width 50vw
    margin 0 auto
    padding-top 50%
  .login-btn
    width 90vw
    position fixed
    bottom 10vw
    left 5vw
    .new-user
      width 45%
      display inline-block
    .login
      margin-left 5%
      width 45%
      background #00CAFC
      color white
      display inline-block
</style>
