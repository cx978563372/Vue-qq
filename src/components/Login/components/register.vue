<template>
  <div class="register">
    <div class="content">
        <input type="text" id="user" placeholder="匿名">
        <input type="password" id="pwd" placeholder="输入密码">
        <input type="password" id="pwd" placeholder="确认密码">
        <div class="btn">→</div>
    </div>
    <router-link to="/login">
        <span class="back">返回</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="stylus" scoped>
.register
    width 100vw
    .content
        margin-top 160px
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
            margin-bottom 10px
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
    .back
        width 50px
        height 50px
        display block
        font-size 14px
        text-align center
        margin 100px auto
        line-height 50px
</style>
