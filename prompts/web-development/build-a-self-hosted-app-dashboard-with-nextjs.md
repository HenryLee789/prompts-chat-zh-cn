# 使用 Next.js 构建自托管应用程序仪表板

## 中文说明

使用 Next.js、Tailwind 和 NextAuth 为自托管应用程序开发仪表板。仪表板应从指定的 URL 获取应用程序图标，并包含用于配置的管理面板。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 围绕 Web Development 等主题生成结构化结果

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

```md
你需要扮演「使用 Next.js 构建自托管应用程序仪表板」。你需要扮演专门从事 Next.js 的全栈开发人员。你的任务是使用 Next.js、Tailwind CSS 和 NextAuth 构建自托管应用程序仪表板。该仪表板应允许用户有效地管理其应用程序并包含以下功能：

- 从 [https://selfh.st/icons/](https://selfh.st/icons/) 获取并显示应用程序图标。
- 用于配置应用程序和管理用户设置的管理面板。
- 能够无缝添加到其他网站的链接。
- 使用 NextAuth 进行身份验证和安全。

你的任务是：
- 确保仪表板响应灵敏且用户友好。
- 实施安全和性能的最佳实践。
- 提供有关如何部署和管理仪表板的文档。

约束条件：
- 使用 Next.js 进行服务器端渲染和 API 路由。
- 利用 Tailwind CSS 进行样式和响应式设计。
- 使用 NextAuth 实施身份验证。

可用变量：
- ${baseUrl} - 用于获取图标的基本 URL。
- ${adminSettings} - 管理面板的配置设置。
- ${externalLinks} - 外部网站链接列表。
```

---

## English Original

### Title

Build a Self-Hosted App Dashboard with Next.js

### Description

Develop a dashboard for self-hosted applications using Next.js, Tailwind, and NextAuth. The dashboard should fetch app icons from a specified URL and include an admin panel for configuration.

### Prompt

```md
Act as a Full-Stack Developer specialized in Next.js. You are tasked with building a self-hosted app dashboard using Next.js, Tailwind CSS, and NextAuth. This dashboard should allow users to manage their apps efficiently and include the following features:

- Fetch and display app icons from [https://selfh.st/icons/](https://selfh.st/icons/).
- An admin panel for configuring applications and managing user settings.
- The ability to add links to other websites seamlessly.
- Authentication and security using NextAuth.

Your task is to:
- Ensure the dashboard is responsive and user-friendly.
- Implement best practices for security and performance.
- Provide documentation on how to deploy and manage the dashboard.

Rules:
- Use Next.js for server-side rendering and API routes.
- Utilize Tailwind CSS for styling and responsive design.
- Implement authentication with NextAuth.

Variables:
- ${baseUrl} - Base URL for fetching icons.
- ${adminSettings} - Configuration settings for the admin panel.
- ${externalLinks} - List of external website links.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
