<template>
  <div class="sider">
      <router-link to="/home">
            <div class="x">X</div>
      </router-link>
      <div class="jianjian">
        <div class="tx">
            <img src="../../assets/images/tx.jpg" alt="">
        </div>
        <div class="con">
            <div class="name">平津</div>
            <div class="lv">LV.52</div>
            <div class="desc">编辑个性签名</div>
        </div>
      </div>
      <div class="lists">
          <div class="vip list">
              <i class="iconfont">&#xe60c;</i>
              &nbsp;开通会员
              <i class="iconfont q">&#xe602;</i>
          </div>
          <div class="bag list">
              <i class="iconfont">&#xe607;</i>
              &nbsp;我的钱包
              <i class="iconfont q">&#xe602;</i>
          </div>
          <div class="zb list">
              <i class="iconfont">&#xe692;</i>
              &nbsp;我的个性装扮
              <i class="iconfont q">&#xe602;</i>
          </div>
          <div class="kj list">
              <i class="iconfont">&#xe65b;</i>
              &nbsp;我的情侣空间
              <i class="iconfont q">&#xe602;</i>
          </div>
          <div class="sc list">
              <i class="iconfont">&#xe61b;</i>
              &nbsp;我的收藏
              <i class="iconfont q">&#xe602;</i>
          </div>
          <div class="xc list">
              <i class="iconfont">&#xe7cb;</i>
              &nbsp;我的相册
              <i class="iconfont q">&#xe602;</i>
          </div>
      </div>
      <div class="navs">
          <div class="sz nav">
              <i class="iconfont z">&#xe65e;</i>
              设置
            </div>
          <div class="yj nav">
              <i class="iconfont z">&#xe601;</i>
              夜间
            </div>
          <div class="dr nav">
              <i class="iconfont z">&#xe62d;</i>
              达人
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sider'
}
</script>

<style scoped>
.sider{
    font-size: 14px;
}
.iconfont{
    color: #989EB4;
}
.q{
    position: absolute;
    right: 10px;
    font-size: 10px;
    font-weight: 100;
}
.x{
    height: 20px;
    text-align: right;
    padding: 10px 10px;
}
.jianjian{
    display: flex;
}
.tx{
    width: 45px;
    height: 45px;
    margin: 0px 5px;
    margin-left: 15px;
}
.tx img{
    width: 100%;
    height: auto;
    border-radius: 50%;
}
.con{
    margin: 0px 5px;
}
.con .name{
    font-weight: 700;
}
.con .lv{
    margin: 5px 0;
    font-size: 12px;
}
.con .desc{
    font-size: 12px;
    color: #C6C9D1;
}
.lists{
    margin-top: 50px;
    padding: 0 20px;
}
.list{
    margin: 25px 0;
    font-weight: 600;
}
.navs{
    position: fixed;
    bottom: 20px;
    display: flex;
    margin-left: 30px;
}
.nav{
    width: 40px;
    margin-right: 20px;
    font-size: 10px;
}
.z{
    display: block;
    padding-left: 4px;
    margin-bottom: 5px;
    color: #989EB4;
}
</style>
