<template>
  <div class="chat">
      <a @click="back">
        <div class="back"></div>
      </a>
      <img src="../../assets/images/chat.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'chat',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.chat
  height 100vh
  background #EBEDF5
  .back
    width 40px
    height 40px
    position fixed
  img
    width 100%
    height auto
</style>
