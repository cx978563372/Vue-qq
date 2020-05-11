<template>
  <div class="contacts">
      <input type="search" name="" id="" value="搜索" class="search">
      <div class="newfriend">
          <span>新朋友</span>
          <i class="iconfont">&#xe602;</i>
      </div>
      <div class="contact">
          <ul class="navs">
              <li class="nav" v-for="(nav, index) in navs" :key="index" :class="{'active': activeClass == index}" @click="getItem(index)">
                  <div class="bg" v-html="nav"></div>
              </li>
          </ul>
          <router-link to="/chat">
            <ul class="friends">
                <li class="friend" v-for="(friend, index) in friends" :key="index">
                    <div class="tx"></div>
                    <div class="con">
                          <div class="name" v-html="friend.name"></div>
                          <div class="desc" v-html="friend.desc"></div>
                    </div>
                </li>
            </ul>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      activeClass: 0,
      navs: [
        '好友',
        '分组',
        '群聊',
        '设备'
      ],
      friends: [
        {
          id: 1,
          tx: '',
          name: '好友1',
          desc: '[在线]你好..............'
        },
        {
          id: 2,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 3,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 4,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 5,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 6,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 7,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 8,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 9,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 10,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 11,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
        },
        {
          id: 12,
          tx: '',
          name: '好友2',
          desc: '[离线]你好..............'
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

<style scoped>
.active{
    color: #48D3FC;
    height: 25px;
    background: #E6FAFF;
    position: relative;
    top: 5px;
    left: 5px;
    border-radius: 10px;
    line-height: 25px;
}
.active .bg{
    position: absolute;
    top: -4px;
    left: 28px;
}
.contacts{
    margin-top: 55px;
    font-size: 13px;
}
.contacts .search{
    height: 30px;
    width: 90vw;
    border: none;
    border-radius: 40px;
    background: #F2F3F7;
    color: #B0B3BF;
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
}
.contacts .newfriend{
    height: 50px;
    border-bottom: 10px solid #F2F3F7;
    line-height: 50px;
    padding-left: 10px;
    font-weight: 600;
    position: relative;
}
.iconfont{
    position: absolute;
    right: 0;
    top: 0;
}
.navs{
    display: flex;
    height: 40px;
}
.nav{
    flex: 1;
    text-align: center;
    line-height: 35px;
    font-size: 12px;
    font-weight: 600;
    margin-right: 10px;
}
.friends{
    width: 100vw;
}
.friends .friend{
    height: 30px;
    display: flex;
    padding: 10px 10px;
}
.friends .friend .tx{
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: red;
}
.friends .friend .con{
    margin-left: 10px;
}
.friends .friend .con .name{
    margin-bottom: 5px;
    font-weight: 700;
}
</style>
