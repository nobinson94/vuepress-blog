module.exports = {
  title: "NOBINSON, ",
  description: "Be Better Software Engineer",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '개발', link: '/dev/', children: [ { text: 'Vue JS', link: '/dev/vuejs/' }, { text: 'Algorithm 공부', link: '/dev/algo-practice/' } ]},
      { text: '영화 이야기', link: '/film-review/' },
      { text: 'About Me', link: '/about/' },
    ]
  }
};
