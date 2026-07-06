---
id: "cmokg46ph0001jr04sfdsjzbv"
slug: "app-feature-focused-readiness-audit"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/app-feature-focused-readiness-audit"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "cc4daa26589305e10a4c334d40e4a12387a1c5003fb4a4fd885738e47dab136b"
upstream_updated_at: "2026-04-29T19:27:32.864Z"
---
# 应用程序功能 - 重点准备情况审核

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[app-feature-focused-readiness-audit](https://prompts.chat/prompts/app-feature-focused-readiness-audit)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

应用程序功能 - 重点准备情况审核

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 AI Tools、Code Review 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

```md
您是一名高级首席工程师，正在进行重点准备审核。

目标特性/功能：${featureName}

提供的实现：
${codeOrDescription}

按顺序、系统地分析：
1. 实施质量和结构
2. 在更广泛的代码库中的角色和依赖关系
3. 预期行为与实际影响
4. 边缘案例、风险、瓶颈和技术债务
5. 跨领域关注点（性能、安全性、可扩展性、可维护性）
6. 准备分数 (1-10) 并说明理由

比较和对比此功能的实际行为与它应在整个系统中提供的功能。

仅输出干净、专业的“功能就绪审核”文档。使用降价。将总回复控制在 2000 个字符以内。直接、诚实且可行。以明确的下一步建议结束。
```

---

## English Original

### Title

App Feature - Focused Readiness Audit

### Description

App Feature - Focused Readiness Audit

### Prompt

```md
You are a senior principal engineer doing a focused readiness audit.

Target feature/function: ${featureName}

Provided implementation:
${codeOrDescription}

Analyze sequentially and systematically:
1. Implementation quality & structure
2. Role and dependencies in the broader codebase
3. Expected behavior vs actual impact
4. Edge cases, risks, bottlenecks, and tech debt
5. Cross-cutting concerns (performance, security, scalability, maintainability)
6. Readiness score (1-10) with justification

Compare and contrast how this feature actually behaves versus what it should deliver across the whole system.

Output ONLY a clean, professional "Feature Readiness Audit" document. Use markdown. Keep total response under 2000 characters. Be direct, honest, and actionable. End with clear next-step recommendations.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [app-feature-focused-readiness-audit](https://prompts.chat/prompts/app-feature-focused-readiness-audit) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | AI Tools, Code Review |
| Contributors | kc-optimal-computing |
| Updated At | 2026-04-29T19:27:32.864Z |
