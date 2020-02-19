<template>
	<div>

      <div class="title-wrapper">
        <div>
          <router-link :to="$site.base"><h1 class="white-color-text">{{ $site.title }}</h1></router-link>
        </div>
      </div>

      <div class="menu-list-wrapper">
      	<div class="menu-list">
        	<div v-for="menu in menuList" :children="menu.items">
            <router-link :to="menu.link" class="white-color-text"><div class="menu-box large">{{ menu.text }}</div></router-link>            
            <router-link class="white-color-text" :to="child.link" v-for="child in menu.items"><div class="menu-box small">{{ child.text }}</div></router-link>
        	</div>
        </div>
        <div class="search-input-wrapper">
          <div class="ui input"><input type="text" placeholder="Search..."></div>
        </div>
      </div>

	</div>
</template>

<script>
import Vue from 'vue';
export default {
  name: "SideBar",
  created() {
    
  },
  computed: {
    menuList() {
      return this.$site.themeConfig.nav;
    }
  }
};
</script>

<style>
.title-link {
	color: white
}
.white-color-text {
	color: white
}
.title-wrapper {
	margin-top: 40px;
	color: white;
	text-align: center;
}
.menu-list-wrapper {
	margin-top: 50px;
}
.menu-list {
	display: block;
  padding-left: 20px;
}
.menu-box {
	display: block;
	width: 100%;
}
.menu-box.large {
  font-size: 20px;
  margin-top: 20px;
}
.menu-box.small {
  font-size: 17px;
  margin-top: 10px;
  padding-left: 15px;
}
.search-input-wrapper {
	text-align: center;
	margin-top: 100px;
}
</style>