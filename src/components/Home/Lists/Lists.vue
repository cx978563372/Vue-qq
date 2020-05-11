<template>
  <div class="lists">
    <router-link to="/chat">
      <ul class="msg-lists" v-for="list in msglists" :key="list.id">
            <li class="msg-list">
                <img :src="list.tx" alt="" class="tx">
                <div class="content">
                    <span class="title">{{list.title}}</span>
                    <p class="msg">{{list.msg}}</p>
                </div>
                <div class="rig">
                    <span class="time">{{list.time | timefilters}}</span>
                </div>
            </li>
        </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      msglists: [
        {
          id: '1',
          tx: ' .bred',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '2',
          tx: ' .bgreen',
          title: 'QQ直播',
          msg: '你的红包可以体现！',
          time: Date()
        },
        {
          id: '3',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '4',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '5',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '6',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '7',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '8',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '9',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '11',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '12',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '312',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        },
        {
          id: '44',
          tx: '.bblue',
          title: '腾讯新闻',
          msg: '速查手机！这21款手机App涉违规',
          time: Date()
        }
      ]
    }
  },
  filters: {
    timefilters (val) {
      const time = new Date(val)
      const y = time.getFullYear()
      const m = time.getMonth()
      const d = time.getDate()
      return y + '-' + m + '-' + d
    }
  }
}
</script>

<style lang="stylus" scoped>
.lists
  font-size 14px
  margin-top 50px
  .msg-lists
    .msg-list
      width 100vw
      height 60px
      display flex
      padding 5px 5px
      .tx
        display block
        background red
        width 50px
        height 50px
        border-radius 50%
        margin-top 5px
        margin-left 5px
      .content
        margin-top 12px
        margin-left 10px
        flex 3.5
        .title
          font-weight 600
        .msg
          font-size 12px
          margin-top 10px
          color #B0B3BF
      .rig
       margin-top 10px
       font-size 12px
       color #B0B3BF
       flex 1
</style>
