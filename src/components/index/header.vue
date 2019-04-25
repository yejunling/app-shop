<template lang="html">

  <mt-header title="校园电脑服务">

  <router-link :to="{name:''}" slot="right">
    <mt-button icon="search"></mt-button>
  </router-link>
</mt-header>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.mint-header {
    padding: 6.8vw 4.8vw;
    background-color: #F9F93A;
    color: #333!important;
    .fz(font-size,50)!important;
}
</style>
