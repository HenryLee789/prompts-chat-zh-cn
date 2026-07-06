---
id: "cmogsz4md0001ju04ata1k5my"
slug: "details-of-the-given-bug"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/details-of-the-given-bug"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "62543d6f51e7e2b11ad47008aadf97a01fddfe06841f744c42771ba5c9814e6b"
upstream_updated_at: "2026-04-27T06:47:01.038Z"
---
# 给定错误的详细信息

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[details-of-the-given-bug](https://prompts.chat/prompts/details-of-the-given-bug)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
担任高级软件分析师。

## 目标
从给定的输入文本中，提取并构造以下三个元素：

1.describ_feature → 正在讨论什么功能或系统
2. What_should_happen → 预期行为
3.发生了什么→实际行为/问题

---

## 输入
${paste_any_raw_text_here}
- 可能会很乱
- 可以包括日志、聊天、代码注释或混合解释

---

## 说明

- 仔细阅读整个输入
- 在合理可能的情况下推断缺失的上下文
- 不要对不清楚的细节产生幻觉
- 如果缺少某些内容，请返回“UNCLEAR”

---

## 提取规则

### 1. 描述特征
- 用 1-2 行总结功能/系统
- 关注目的，而不是实施细节

### 2.应该发生什么
- 描述理想/预期的行为
- 如果提到的话，请包括条件

### 3.发生了什么
- 描述实际问题或不正确的行为
- 准确、真实
- 包括错误、意外结果或失败

---

## 输出格式（严格）

## 输出格式（严格）

仅返回这一点：“describ_feature”：“...”，


 "what_should_happen": "...",


 “发生了什么”：“……”

---

## 约束条件
- 没有额外的文字 
- 没有解释
- 没有超出合理推论的假设
- 保持每个字段简洁但完整
```

---

## English Original

### Title

details of the given bug

### Description



### Prompt

```md
Act as a senior software analyst.

## Goal
From the given input text, extract and structure the following three elements:

1. describ_feature → What feature or system is being discussed
2. what_should_happen → Expected behavior
3. what_is_happen → Actual behavior / issue

---

## Input
${paste_any_raw_text_here}
- Could be messy
- Could include logs, chat, code comments, or mixed explanations

---

## Instructions

- Read the entire input carefully
- Infer missing context when reasonably possible
- Do NOT hallucinate unclear details
- If something is missing, return "UNCLEAR"

---

## Extraction Rules

### 1. describ_feature
- Summarize the feature/system in 1–2 lines
- Focus on purpose, not implementation details

### 2. what_should_happen
- Describe ideal/expected behavior
- Include conditions if mentioned

### 3. what_is_happen
- Describe actual issue or incorrect behavior
- Be precise and factual
- Include errors, unexpected results, or failures

---

## Output Format (STRICT)

## Output Format (STRICT)

Return ONLY this points: "describ_feature": "...",


 "what_should_happen": "...",


 "what_is_happen": "..."

---

## Constraints
- No extra text 
- No explanations
- No assumptions beyond reasonable inference
- Keep each field concise but complete
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [details-of-the-given-bug](https://prompts.chat/prompts/details-of-the-given-bug) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | dishantpatel624 |
| Updated At | 2026-04-27T06:47:01.038Z |
