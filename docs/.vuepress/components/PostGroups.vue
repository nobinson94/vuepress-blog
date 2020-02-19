<template>
	<div>
		<div class="group-title">{{ this.$page.title }}</div>
		<post-list v-for="postGroup in postGroups" :path="postGroup.link" :title="postGroup.text" class="post-list-wrapper"/>
	</div>
</template>

<script>
import PostList from './PostList.vue'
export default {
	created() {
		console.log(this.$site.pages)
	},
	data() {
		return {

		}
	},
	computed: {
		postGroups () {
			let currentPath = this.$page.regularPath
			let postGroups = this.$site.themeConfig.nav.find(navItem => {
				return navItem.link === currentPath
			}).items
			console.log(postGroups)
			return postGroups
		}
	}
}
</script>
