<template>
  <div>
    <h1>{{ this.$page.title }}</h1>
    <div v-for="post in postList">
      <div class="">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.pageCategory = this.$page.frontmatter.category;
  },
  data() {
    return {
      pageCategory: ""
    }
  },
  computed: {
    postList() {
      let pages = []
      console.log(this.pageCategory);
      this.$site.pages.forEach(page => {
        if (page.frontmatter.category.indexOf(this.pageCategory) > -1 && page.frontmatter.layout === 'post') {
          pages.push(page);
        }
      })
      return pages;
    }
  }
}
</script>

<style></style>
