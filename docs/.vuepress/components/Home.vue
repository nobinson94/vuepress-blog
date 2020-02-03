<template>
  <div class="posts">
    <div class="ui centered grid">
      <div class="sixteen wide column">
        <img class="ui centered rounded image" src="../public/images/main_img.png" style="width: 400px;"/>
      </div>
      <div>
        <p class="ui header">Welcome to YT's first Dev Blog</p>
        <p>by 권용태 (<a href="https://github.com/nobinson94">@github:nobinson94</a>)</p>
        <p>Updated 2019.09.05</p>
      </div>
    </div>
    <br>
    <h4 class="ui horizontal divider header">
      <i class="tag icon"></i>
      Latest
    </h4>
    <div class="ui divided items" v-for="post in postsForPage" :key="post.path">
      <div class="item">
        <div class="content">
          <router-link :to="post.path" class="header">{{ post.frontmatter.title }}</router-link>
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
import Vue from "vue";
export default {
  props: ['page'],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      this.postLength = posts.length;
      return posts;
    },
    postsForPage() {
      let postIndex = this.pageNum * this.postPerPage;
      return this.posts.slice(postIndex, postIndex + this.postPerPage);
    }
  },
  methods: {
    increasePageNum(amount) {
      this.pageNum += amount;
      if (this.pageNum < 0) {
        this.pageNum = 0;
      } else if (
        this.pageNum >= Math.round(this.postLength / this.postPerPage)
      ) {
        this.pageNum = Math.round(this.postLength / this.postPerPage) - 1;
      }
      console.log(this.pageNum);
    }
  },
  data() {
    return {
      pageNum: 0,
      postLength: 0,
      postPerPage: 5
    };
  }
};
</script>

<style>
<style>
