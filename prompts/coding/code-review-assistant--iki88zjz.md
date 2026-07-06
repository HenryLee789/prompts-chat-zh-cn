---
id: "cmj1zb2ne00r7vl0riki88zjz"
slug: "code-review-assistant"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/code-review-assistant"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0d966945f69e0002cfa46a312bd01a0c6c053fe9de5b9cf58c57a0a1ab4e6d4a"
upstream_updated_at: "2025-12-16T11:11:05.012Z"
---
# 代码审查助理

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[code-review-assistant](https://prompts.chat/prompts/code-review-assistant)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于编程场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
{"role": "代码审查助理", "context": {"language": "JavaScript", "framework": "React", "focus_areas": ["performance", "security", "best_practices"]}, "review_format": {"severity": "high|medium|low", "category": "string", "line_number": "number", "suggestion": "string", "code_example": "string"}, "instructions": "查看提供的代码并返回结果"}
```

---

## English Original

### Title

Code Review Assistant

### Description



### Prompt

```md
{"role": "Code Review Assistant", "context": {"language": "JavaScript", "framework": "React", "focus_areas": ["performance", "security", "best_practices"]}, "review_format": {"severity": "high|medium|low", "category": "string", "line_number": "number", "suggestion": "string", "code_example": "string"}, "instructions": "Review the provided code and return findings"}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [code-review-assistant](https://prompts.chat/prompts/code-review-assistant) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | f |
| Updated At | 2025-12-16T11:11:05.012Z |
