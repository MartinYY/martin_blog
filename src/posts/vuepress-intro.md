---
title: VuePress 2 快速入门
date: 2026-03-10
tags:
  - VuePress
  - 教程
---

# VuePress 2 快速入门

VuePress 2 是一个强大的静态网站生成器，专为文档和博客设计。

## 什么是 VuePress？

VuePress 是由 Vue.js 创始人尤雨溪开发的静态站点生成器。它使用 Vue 3 和 Vite，提供极快的开发体验和构建速度。

## 主要特性

- **Vite 支持**：更快的冷启动和热更新
- **Vue 3 驱动**：使用最新的 Vue 3 生态
- **Markdown 扩展**：支持自定义组件和语法
- **SEO 友好**：预渲染的静态 HTML
- **主题系统**：可轻松定制和扩展

## 快速开始

### 安装依赖

```bash
npm install -D vuepress@next vuepress-vite@next
```

### 创建配置文件

在项目根目录创建 `.vuepress/config.ts`：

```typescript
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '我的个人博客',
})
```

### 运行开发服务器

```bash
npx vuepress-vite dev src
```

### 构建静态文件

```bash
npx vuepress-vite build src
```

## 总结

VuePress 2 是构建技术博客和文档的理想选择。它的配置简单，功能强大，值得尝试！
