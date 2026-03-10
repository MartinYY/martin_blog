export default {
  lang: 'zh-CN',
  title: 'Martin 的博客',
  description: '记录技术与生活 - AI、前端、自动化',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/index' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: [
      {
        text: 'AI 与效率',
        items: [
          { text: 'AI 编程助手实战指南', link: '/posts/ai-coding-assistant-guide' },
          { text: 'OpenClaw 自动化助手入门', link: '/posts/openclaw-automation-guide' },
        ],
      },
      {
        text: '前端开发',
        items: [
          { text: '2026 年前端开发趋势', link: '/posts/frontend-trends-2026' },
          { text: 'TypeScript 最佳实践', link: '/posts/typescript-best-practices' },
          { text: 'Vue 3 组合式 API 指南', link: '/posts/vue3-composition-api' },
        ],
      },
      {
        text: '入门教程',
        items: [
          { text: 'VuePress 2 快速入门', link: '/posts/vuepress-intro' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com' },
    ],

    footer: 'MIT Licensed | Copyright © 2026 Martin',
  },

  markdown: {
    lineNumbers: true,
  },
}
