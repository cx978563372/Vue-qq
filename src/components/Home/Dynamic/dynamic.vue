<template>
  <div class="dynamic">
        <div class="ds">
            <input type="search" name="" id="" value="搜索" class="search">
        </div>
        <div class="dynamics">
            <i class="iconfont kj">&#xe672;</i>
            <span>空间动态</span>
            <i class="iconfont jt">&#xe602;</i>
        </div>
        <div class="dynamics">
            <i class="iconfont yx">&#xe60a;</i>
            <span>游戏</span>
            <i class="iconfont jt">&#xe602;</i>
        </div>
  </div>
</template>

<script>
export default {
  name: 'dynamic'
}
</script>

<style scoped>
i{
    margin-right: 10px;
    position: relative;
    top: 1px;
}
.kj{
    color: #FFCD00;
    font-size: 14px;
}
.yx{
    color: #007ACC;
    font-size: 16px;
}
.jt{
    position: absolute;
    right: 0;
    top: 0;
}
.dynamic{
    margin-top: 55px;
    font-size: 13px;
    height: 100vh;
    background: #F2F3F7;
}
.dynamic .ds{
    background: white;
    padding-bottom: 1px;
}
.dynamic .search{
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
.dynamic .dynamics{
    height: 50px;
    border-bottom: 10px solid #F2F3F7;
    line-height: 50px;
    padding-left: 10px;
    font-weight: 600;
    background: white;
    position: relative;
}
</style>
