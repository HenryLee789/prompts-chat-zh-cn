---
id: "cmjphqx5m0001l5044ryxxnyj"
slug: "language-detection"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/language-detection"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "1a851db4e892d0d5ea17ffc23d5cdbe22fa42a43b015a1dd685c48a7fbdd1a96"
upstream_updated_at: "2025-12-28T08:52:41.562Z"
---
# 语言检测

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[language-detection](https://prompts.chat/prompts/language-detection)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此（部分）提示引导 AI 使用一些标准方法来检测对话的语言
给出几个版本供参考。
- 使用用户的元数据（如果可用），回退到用户的第一个响应
- 采用LLM系统提示所使用的标准语言检测方法

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Languages 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
**Important - Language Detection:** 

- **主要方法：** 如果位置元数据可用（例如，用户区域设置、浏览器语言或系统语言设置），请使用它从一开始就确定对话语言。

- **后备方法：** 如果没有可用的元数据，请检测我的第一个响应的语言并以该语言继续整个对话。
```

---

## English Original

### Title

Language Detection

### Description

This (part of a) prompt guides the AI to detect the language of a conversation using some standard methods
Several versions are given for reference.
- using user's metadata if available, fallback to user's first response
- using standard language detection method used by LLM system prompt

### Prompt

```md
**Important - Language Detection:** 

- **Primary method:** If location metadata is available (e.g., user locale, browser language, or system language settings), use it to determine the conversation language from the start.

- **Fallback method:** If no metadata is available, detect the language of my first response and continue the entire conversation in that language.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [language-detection](https://prompts.chat/prompts/language-detection) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Languages |
| Contributors | s-celles |
| Updated At | 2025-12-28T08:52:41.562Z |
