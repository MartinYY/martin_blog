# VuePress 2 博客

基于 VuePress 2 + Vite 构建的静态博客网站，支持部署到 Vercel。

## 技术栈

- **VuePress 2** - Vue 3 驱动的静态站点生成器
- **Vite** - 快速的构建工具
- **默认主题** - 开箱即用的响应式主题

## 目录结构

```
.
├── src/
│   ├── .vuepress/          # VuePress 配置目录
│   │   ├── config.ts       # 站点配置
│   │   └── dist/           # 构建输出目录
│   ├── posts/              # 博客文章
│   │   ├── vuepress-intro.md
│   │   ├── typescript-best-practices.md
│   │   └── vue3-composition-api.md
│   └── about/              # 关于页面
│       └── README.md
├── package.json
├── vercel.json             # Vercel 部署配置
└── README.md
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 预览网站。

### 构建静态文件

```bash
npm run build
```

构建输出在 `src/.vuepress/dist` 目录。

### 本地预览

```bash
npm run preview
```

## 部署到 Vercel

### 方式一：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 方式二：Vercel 官网

1. 登录 [Vercel](https://vercel.com)
2. 点击 "Add New Project"
3. 导入你的 GitHub 仓库
4. 保持默认配置即可
5. 点击 "Deploy"

### 方式三：Git 推送部署

连接 GitHub 仓库后，每次推送到主分支都会自动触发部署。

## 添加新文章

在 `src/posts/` 目录下创建新的 `.md` 文件：

```markdown
---
title: 文章标题
date: 2026-03-10
tags:
  - 标签 1
  - 标签 2
---

# 文章标题

正文内容...
```

## 自定义配置

编辑 `src/.vuepress/config.ts` 修改：

- 网站标题和描述
- 导航栏链接
- 侧边栏配置
- 社交媒体链接
- 页脚信息

## License

MIT
