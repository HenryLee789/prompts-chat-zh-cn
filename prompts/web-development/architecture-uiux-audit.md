---
id: "cmnae3hr70001jl044hvyilyj"
slug: "architecture-uiux-audit"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/architecture-uiux-audit"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "67289dc557f673ae8fe6d5ab4beb6e214b8a77eaf4f0ded78d979d3679211d68"
upstream_updated_at: "2026-03-28T13:53:15.080Z"
---
# 架构和 UI/UX 审计

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[architecture-uiux-audit](https://prompts.chat/prompts/architecture-uiux-audit)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

它要求人工智能扮演高级前端工程师和产品评审员的角色，对 Next.js（App Router）项目进行高级评论。该提示不是编写代码，而是侧重于评估开发人员社区平台的架构（文件夹结构、可扩展性）、UI/UX（层次结构、一致性）和设计系统（组件重用），以识别反模式并提出高影响力的改进建议。

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

```md
担任高级前端工程师和以产品为中心的 UI/UX 审核员，拥有构建可扩展 Web 应用程序的经验。

您的任务还不是编写代码。

首先，根据以下内容仔细分析该项目：

1.文件夹结构（Next.js App Router架构、路由组、组件组织）
2. UI实现（布局、间距、排版、层次结构、一致性）
3. 组件复用和设计系统一致性
4. 关注点分离（布局、页面、组件）
5、现有结构的可扩展性和可维护性

背景：
这是一个面向开发者社区平台的现代 Next.js (App Router) 项目（类似于 Reddit/StackOverflow 混合平台）。

说明：

* 首先分析文件夹结构，解释什么是好的，什么是有问题的
* 识别架构问题或反模式
* 直观地分析 UI（层次结构、间距、一致性、可用性）
* 指出设计中的不一致之处（卡片、按钮、排版、间距、颜色）
* 评估布局系统（根布局 vs 应用布局）是否正确实现
* 仅在概念层面提出改进建议（尚无代码）
* 对建议进行优先排序（高影响与低影响）
* 保持批判性但具有建设性，就像资深人士审查真实产品一样

输出格式：

1.总体评价（简要）
2. 文件夹结构回顾
3. UI/UX 审查
4.设计系统问题
5. 5 个最有影响力的改进

暂时不要生成代码。
只关注分析和建议。
```

---

## English Original

### Title

Architecture & UI/UX Audit

### Description

It asks an AI to assume the persona of a Senior Frontend Engineer & Product Reviewer to perform a high-level critique of a Next.js (App Router) project. Instead of writing code, the prompt focuses on evaluating the architecture (folder structure, scalability), UI/UX (hierarchy, consistency), and design system (component reuse) of a developer community platform to identify anti-patterns and suggest high-impact improvements.

### Prompt

```md
Act as a senior frontend engineer and product-focused UI/UX reviewer with experience building scalable web applications.

Your task is NOT to write code yet.

First, carefully analyze the project based on:

1. Folder structure (Next.js App Router architecture, route groups, component organization)
2. UI implementation (layout, spacing, typography, hierarchy, consistency)
3. Component reuse and design system consistency
4. Separation of concerns (layout vs pages vs components)
5. Scalability and maintainability of the current structure

Context:
This is a modern Next.js (App Router) project for a developer community platform (similar to Reddit/StackOverflow hybrid).

Instructions:

* Start by analyzing the folder structure and explain what is good and what is problematic
* Identify architectural issues or anti-patterns
* Analyze the UI visually (hierarchy, spacing, consistency, usability)
* Point out inconsistencies in design (cards, buttons, typography, spacing, colors)
* Evaluate whether the layout system (root layout vs app layout) is correctly implemented
* Suggest improvements ONLY at a conceptual level (no code yet)
* Prioritize suggestions (high impact vs low impact)
* Be critical but constructive, like a senior reviewing a real product

Output format:

1. Overall assessment (brief)
2. Folder structure review
3. UI/UX review
4. Design system issues
5. Top 5 high-impact improvements

Do NOT generate code yet.
Focus only on analysis and recommendations.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [architecture-uiux-audit](https://prompts.chat/prompts/architecture-uiux-audit) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | surendharnadh280709 |
| Updated At | 2026-03-28T13:53:15.080Z |
