module.exports = {
  title: "NOBINSON, ",
  description: "Be Better Software Engineer",
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '개발', link: '/dev/', 
        items: [ 
          { text: 'Vue.js', link: '/dev/vuejs/' }, 
          { text: 'Problem Solving', link: '/dev/algorithm/' },
          { text: 'iOS / Swift', link: '/dev/ios/' } 
        ]
      },
      { text: '영화 이야기', link: '/film-review/' },
      { text: 'About Me', link: '/about/' },
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-158759683-1'
      }
    ]
  ]
};
