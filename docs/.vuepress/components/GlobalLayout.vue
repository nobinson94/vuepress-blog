<template>
  <div>
    <div class="wrapper">
      <div class="header-wrapper">
        <div class="ui secondary large stackable container menu">
          <div class="middle aligned content">
            <div class="header item">
              <router-link :to="$site.base" class="item"><h1 class="header">{{ $site.title }}</h1></router-link>
            </div>
          </div>
          <div class="right menu">
            <router-link v-for="menu in menuList" :to="menu.link" class="item">{{ menu.text }}</router-link>
            <div class="item">
              <div class="ui input"><input type="text" placeholder="Search..."></div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="ui container">
          <component class="ui container" :is="$page.frontmatter.layout"/>
        </div>
      </div>
      <div class="push"></div>
    </div>
    <div class="footer-wrapper">
      <div class="ui inverted last container">
        <div>
          <p class="ui centered grid">© 2019 nobinson94. This work is liscensed under CC BY-NC 4.0.</p>
          <p class="ui centered grid">Powered by Vuepress</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: "Layout",
  created() {
    console.log(this.$page)
    console.log(this.$site)
  },
  computed: {
    menuList() {
      console.log(this.$site.themeConfig.nav);
      return this.$site.themeConfig.nav;
      // return menus;
    }
  }
};
</script>
<style src="../public/style.css"/>
<style src="../../../semantic/dist/semantic.min.css"/>
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="../../../semantic/dist/semantic.min.js"></script>
<style scoped>
</style>
