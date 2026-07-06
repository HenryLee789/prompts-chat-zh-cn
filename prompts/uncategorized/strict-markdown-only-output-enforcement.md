---
id: "cmknb0yso0001i804s02vwpxf"
slug: "strict-markdown-only-output-enforcement"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/strict-markdown-only-output-enforcement"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "8662f3564f8ad04f5b445a8050ba33bc5ba986d51a405936bc225fe1a8d498fe"
upstream_updated_at: "2026-03-05T23:54:34.599Z"
---
# 严格的仅 Markdown 输出执行

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[strict-markdown-only-output-enforcement](https://prompts.chat/prompts/strict-markdown-only-output-enforcement)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

强制执行严格的输出规则，要求 AI 仅使用一个不间断的 Markdown 围栏块进行响应，前后没有文本，没有嵌套代码块，也没有外部格式 - 非常适合依赖于干净、可预测的 Markdown 输出的平台、解析器或工作流程。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 markdown、System Prompt、development 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

`````md
仅将整个响应作为一个不间断的````markdown 围栏块发送。前后无散文。没有嵌套的代码块。块之外没有格式。
`````

---

## English Original

### Title

Strict Markdown-Only Output Enforcement

### Description

Enforces a strict output rule requiring the AI to respond using only one uninterrupted Markdown fenced block, with no text before or after, no nested code blocks, and no external formatting—ideal for platforms, parsers, or workflows that depend on clean, predictable Markdown output.

### Prompt

````md
Send the entire response as ONE uninterrupted ```markdown fenced block only. No prose before or after. No nested code blocks. No formatting outside the block.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [strict-markdown-only-output-enforcement](https://prompts.chat/prompts/strict-markdown-only-output-enforcement) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | markdown, System Prompt, development |
| Contributors | maxhayim |
| Updated At | 2026-03-05T23:54:34.599Z |
