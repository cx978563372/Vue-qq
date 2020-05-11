<template>
  <div class="header">
    <router-link to="/sider">
      <div class="tx">
      <img src="@/assets/images/tx.jpg" alt="tx" class="img">
    </div>
    </router-link>
    <div class="contents">{{title}}</div>
    <div class="xj iconfont">&#xe688;</div>
    <div class="plus iconfont">&#xe61a;</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      title: '消息'
    }
  },
  watch: {
    $route (to, from) {
      const path = this.$route.path
      console.log(path)
      if (path === '/home/contacts') {
        this.title = '联系人'
      } else if (path === '/home/dynamic') {
        this.title = '动态'
      } else {
        this.title = '消息'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  width 100vw
  height 45px
  background #00B3FF
  color #fff
  line-height 45px
  .tx
    position relative
    width 30px
    height 30px
    top 8px
    left 15px
    .img
      display block
      height 30px
      border-radius 50%
   .tx::after
      content ''
      display block
      width 10px
      height 10px
      border-radius 50%
      background #1BE287
      position absolute
      bottom 2px
      right -12px
  .contents
    flex 5
    text-align center
    font-size 15px
    padding-left 49px
  .xj
    flex 1
    font-size 13px
    margin-right 20px
  .plus
    position absolute
    flex 1
    font-size 16px
    right 10px
</style>
