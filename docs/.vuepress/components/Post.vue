<template>
  <div class="posts">
    <div class="post">
      <div>
        <div slot="header" class="post-header">
          <router-link :to="$page.path" class="post-link">{{ $page.frontmatter.category }}</router-link>
          >
          <router-link :to="$page.path" class="post-link">{{ $page.frontmatter.subcategory }}</router-link>
          <div class="post-title">
            {{ $page.frontmatter.title }}
          </div>
        </div>
        <Content class="post-content" />
      </div>
    </div>
    <!-- <disqus/> -->
  </div>
</template>
<script>
export default {
  created() {
    // console.log(this.$site)
  }
};
</script>

<style scoped>
.post-title {
  padding-top: 20px;
  padding-bottom: 100px;
  font-size: 40px;
}
.post {

} 
.post-header {
  margin-bottom: 20px;
}
.post-content {

}
</style>
