import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '基于 VuePress 2 构建的个人博客',

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/logo.png',

    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about/' },
    ],

    // 侧边栏配置
    sidebar: {
      '/posts/': [
        {
          text: '技术文章',
          children: [
            { text: 'VuePress 2 快速入门', link: '/posts/vuepress-intro.html' },
            { text: 'TypeScript 最佳实践', link: '/posts/typescript-best-practices.html' },
            { text: 'Vue 3 组合式 API 指南', link: '/posts/vue3-composition-api.html' },
          ],
        },
      ],
    },

    // 社交媒体链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com' },
    ],

    // 页脚
    footer: 'MIT Licensed | Copyright © 2026',
  }),

  // Vite 配置
  viteOptions: {
    optimizeDeps: {
      include: ['vue'],
    },
  },
})
