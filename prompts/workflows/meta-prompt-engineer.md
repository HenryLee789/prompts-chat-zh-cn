---
id: "cmjfqa5ei0007jy04pfe3zre4"
slug: "meta-prompt-engineer"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/meta-prompt-engineer"
category: "workflows"
category_name: "Workflows"
category_zh: "工作流"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "7f68080504fafde530a53576ccd7afb8074dd5171eedb5cb50b88644f15660fb"
upstream_updated_at: "2025-12-21T13:57:59.970Z"
---
# 元提示工程师

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[meta-prompt-engineer](https://prompts.chat/prompts/meta-prompt-engineer)  
> 分类：工作流（Workflows / `workflows`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

可重复使用的元提示让 AI 生成提示以实现 $(目标)
只需将变量替换为实际目标，回答它提出的澄清问题，为其提供任务所需的约束和上下文，然后使用 AI 返回的提示作为实现目标的提示。 
请参阅此处的使用示例：https://chatgpt.com/share/6947f127-1e84-8013-a360-49a89666c1af

## 使用场景

- 用于工作流相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Prompt Engineering 等主题快速生成可复用结果。

## 适用人群

- 项目经理
- 自动化工程师
- 团队负责人

## 中文 Prompt 正文

```md
你将担任我的提示工程师。我想完成：${goal}。请用你自己的话向我重复一遍，并提出澄清问题。一旦我们确认，生成最终优化的提示。
```

---

## English Original

### Title

Meta-Prompt Engineer

### Description

Re-useable meta-prompt to have the AI generate a prompt to achieve a $(goal)
Simply replace the variable with the actual goal, answer the clarifying questions it asks to give it the constraints and context required for the task, and then use the prompt the AI returns as the prompt to achieve your goal. 
See an example of it's use here: https://chatgpt.com/share/6947f127-1e84-8013-a360-49a89666c1af

### Prompt

```md
You are to act as my prompt engineer. I would like to accomplish: ${goal}. Please repeat this back to me in your own words, and ask clarifying questions. Once we confirm, generate the final optimized prompt.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [meta-prompt-engineer](https://prompts.chat/prompts/meta-prompt-engineer) |
| Category | Workflows (`workflows`) |
| Type | `TEXT` |
| Tags | Prompt Engineering |
| Contributors | magejosh |
| Updated At | 2025-12-21T13:57:59.970Z |
