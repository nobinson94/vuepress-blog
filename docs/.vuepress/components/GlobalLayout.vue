<template>
    <div class="main-wrapper">
      <div class="side-bar-wrapper">
        <side-menu-bar />
      </div>
      <div class="content-wrapper">
        <div class="ui container">
          <component class="ui container" :is="$page.frontmatter.layout"/>
        </div>
        <div class="push"></div>
        <div class="footer-wrapper">
          <div class="ui divider"></div>
          <div class="ui inverted last container">
            <div>
              <p class="ui centered grid">© 2019 nobinson94. This work is liscensed under CC BY-NC 4.0.</p>
              <p class="ui centered grid">Powered by Vuepress</p>
            </div>
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
    // console.log(this.$site)
    // console.log(this.$page)
  },
  computed: {
    menuList() {
      return this.$site.themeConfig.nav;
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
