export default {
  lang: 'zh-CN',
  title: '我的博客',
  description: '基于 VitePress 构建的个人博客',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '技术文章',
          items: [
            { text: 'VuePress 2 快速入门', link: '/posts/vuepress-intro' },
            { text: 'TypeScript 最佳实践', link: '/posts/typescript-best-practices' },
            { text: 'Vue 3 组合式 API 指南', link: '/posts/vue3-composition-api' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    footer: 'MIT Licensed | Copyright © 2026',
  },

  markdown: {
    lineNumbers: true,
  },
}
