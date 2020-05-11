<template>
  <div class="login">
      <div class="img">
          <img src="@/assets/images/qq.png" alt="qq">
      </div>
      <div class="content">
          <input type="text" id="user" placeholder="QQ号/手机号/邮箱" v-model="user">
          <input type="password" id="pwd" placeholder="输入密码" v-model="pwd">
          <div class="btn" @click="log">→</div>
      </div>
      <div class="bot">
          <div class="fpwd">忘记密码</div>
          <router-link to="/register">
            <div class="register">用户注册</div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    log () {
      if (this.user === '111' && this.pwd === '111') {
        this.$router.replace('/home')
      } else {
        alert('error')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
    width 100vw
    display flex
    flex-direction column
    justify-content center
    align-items center
    .img
        padding-top 25%
        margin-bottom 30px
    .content
        #user
            width 80vw
            height 45px
            border-radius 35px
            border 0px
            background #F2F3F7
            font-weight 600
            text-align center
            margin-bottom 10px
            color black
            font-size 15px
        #pwd
            width 80vw
            height 45px
            border-radius 35px
            border 0px
            background #F2F3F7
            font-weight 600
            text-align center
            color black
            font-size 15px
        .btn
            width 50px
            height 50px
            background #F2F3F7
            font-size 30px
            color white
            text-align center
            line-height 45px
            border-radius 50%
            margin 0 auto
            margin-top 50px
    .bot
        position absolute
        bottom 10vw
        font-size 13px
        color black
        font-weight 600
        width 100vw
        text-align center
        .fpwd
            width 49vw
            float left
            border-right 1px solid #BCBFC9
        .register
            width 50vw
            float left
</style>
