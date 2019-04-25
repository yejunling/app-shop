<template lang="html">
  <section class="section1">
    <h1 class="section1-title">
      {{banner}}
      <!-- <i class="icon-right"></i> -->
    </h1>
    <ul class="section1-list">
      <li v-for="k in list" :key='k.id' @click="goOrder(k)">
        <!-- <router-link :to="{name:'详情页'}">
          <img v-lazy="k.imgPath">
          <p>{{k.intro}}</p>
        </router-link> -->
        <a>
          <img v-lazy="k.imgPath">
          <p>{{k.intro}}</p>
        </a>
        <h3>{{k.title}}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    goOrder(k) {
      this.$router.push({
        path: '/order',
        query: {type: k.id}
      });
    }
  },
}

</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1 {
  .pt();
  .section1-title {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
    .fz(font-size, 50);
    color: #333;
    position: relative;
    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top,-16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }

  .section1-list {
    width: 100%;
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    li {
      width: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 3vw;
      > a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: gold;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1.2vw 2vw;
        }
      }

      > h3 {
        padding-top: 3vw;
        .fz(font-size,40);
      }
      > span {
        display: inline-block;
        padding-bottom: 3vw;
        color: #b4282d;
      }
    }
  }

  .section1-banner {
    display: block;
    width: 100vw;
    img {
      width: 100%;
      height: 24vw;
    }
  }
}
</style>
