<template>
  <div class="posts">
    <div class="post">
      <div>
        <div slot="header" class="clearfix">
          <router-link :to="$page.path" class="post-link">
            {{ $page.frontmatter.title }}
            <br>
            <span class="post-date">{{ $page.frontmatter.date }}</span>
          </router-link>
        </div>
        <Content/>
      </div>
    </div>
    <disqus/>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$page)
  }
};
</script>
<style scoped>
.post-title {
  margin: 5px;
  text-size: 15px;
}
.post {

}
.post-content {

}
</style>
