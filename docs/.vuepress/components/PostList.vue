<template>
  <div>
    <h2>{{ postListTitle }}</h2>
    <div class="ui divided items" v-for="post in postList">
      <div class="item">
        <div class="content">
          <router-link :to="post.path" class="header">{{ post.title }}</router-link>
          <div class="meta">
            <span>{{ post.frontmatter.date }}</span>
          </div>
          <div class="description">
            <p>{{ post.frontmatter.description }}</p>
          </div>
          <div class="extra">
            <div class="ui label" v-for="tag in post.frontmatter.tags">{{ tag }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ "path", "title" ],
  created() {
    this.pageCategory = this.$page.frontmatter.category;
    this.pagePath = this.$page.regularPath
  },
  data() {
    return {
      pageCategory: "",
      pagePath: "",
    }
  },
  computed: {
    postListTitle() {
      if (this.title) {
        return this.title
      }
      return this.$page.title
    },
    postList() {
      let path = this.path ? this.path : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${path})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    },
  }
}
</script>

<style></style>
