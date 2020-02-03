<template>
  <div class="global-layout">
    <div class="middle aligned center aligned four wide column">
      <div class="ui container">
        <h1 class="header item" :href="$site.base">{{ $site.title }}</h1>
      </div>
    </div>
    <div class="right floated eight wide column">
      <div class="ui text menu">
        <div class="ui container">
          <a class="item" v-for="menu in menuList" :href="menu.link">
            {{ menu.text }}
          </a>
          <div class="item">
            <div class="ui input"><input type="text" placeholder="Search..."></div>
          </div>
        </div>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui vertical menu container">
        <div class="item">
          <a class="header">Home</a>
        </div>
        <div class="item" v-for="menu in menuList">
          <div class="header">{{ menu.text }}</div>
          <div class="menu">
            {{ menu }}
            <a class="item">Rails</a>
            <a class="item">Python</a>
            <a class="item">PHP</a>
          </div>
        </div>
      </div>
    </div>
    <div class="twelve wide column">
      <div class="ui container">
        <component :is="$page.frontmatter.layout"/>
      </div>
    </div>
    <div class="middle aligned center aligned">
      <p>© 2019 nobinson94. This work is liscensed under CC BY-NC 4.0.</p>
      <p>Powered by Vuepress</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: "Layout",
  computed: {
    menuList() {
      return this.$site;
    }
  }
};
</script>
<style src="../../../semantic/dist/semantic.min.css"/>
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="../../../semantic/dist/semantic.min.js"></script>
<style src="../public/style.css"/>
<style scoped>
.layout-wrapper {

}
.header-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 70px;
}
.main-container {
  position: absolute;
  margin-left: 100px;
}
.side-bar-container {
  position: absolute;
  top: 70px;
  left: 0px;
  width: 100px;
}
</style>
