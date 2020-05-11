<template>
  <div class="home">
    <home-header class="header"></home-header>
    <router-view></router-view>
    <home-footer class="footer"></home-footer>
  </div>
</template>

<script>
import HomeFooter from '@/components/Footer/footer'
import HomeHeader from '@/components/Header/header'
export default {
  name: 'home',
  components: {
    HomeFooter,
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
.home
  overflow hidden
  .footer
    position fixed
    bottom 0
  .header
    position fixed
    top 0
    z-index 100
</style>
