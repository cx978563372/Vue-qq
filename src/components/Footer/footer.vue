<template>
  <div class="footer">
    <router-link v-for="(link, index) in links" :key="index" :to="'/home' + link.path">
      <div :class="{'active': activeClass == index}" @click="getItem(index)">
        <i class="iconfont" v-html="link.icon"></i>
        {{link.title}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
      activeClass: -1,
      links: [
        {
          path: '',
          title: '消息',
          icon: '&#xe60d;'
        },
        {
          path: '/contacts',
          title: '联系人',
          icon: '&#xe65d;'
        },
        {
          path: '/dynamic',
          title: '动态',
          icon: '&#xe600;'
        }
      ]
    }
  },
  methods: {
    getItem (index) {
      this.activeClass = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.active
  color #00B3FF
.iconfontactive
  color #00B3FF
.footer
  width 100vw
  height 50px
  display flex
  justify-items center
  text-align center
  font-size 10px
  align-items: flex-end;
  border-top 1px solid #F2F3F7
  background white
  a
    flex 1
    padding-bottom 5px
    color #B0B3BF
    position relative
    i
      display block
      padding-bottom 5px
      font-size 20px
</style>
