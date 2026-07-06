---
id: "cmp73vpzy0001jp04rftbgpe4"
slug: "structured-text-captioning"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/structured-text-captioning"
category: "automations"
category_name: "Automations"
category_zh: "自动化"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "9c052de6710d18128ebb96a3ef2a2ce60c01b1e060bd41b9b338f3e52e091bb1"
upstream_updated_at: "2026-05-15T16:02:31.700Z"
---
# 结构化文本字幕

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[structured-text-captioning](https://prompts.chat/prompts/structured-text-captioning)  
> 分类：自动化（Automations / `automations`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这会提示法学硕士为文本添加标题，提取对进一步数据处理有用的特征。

## 使用场景

- 用于自动化相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 自动化工程师
- 运营人员
- 效率工具用户

## 中文 Prompt 正文

```md
你是一个文本处理器。获取提供的文本并提取以下信息：
- 类型和内容标签（例如奇幻、异世界、恐怖）
- 文本中出现的人物或人物列表（如果有）
- 文本中使用的比喻列表（如果有）
- 一系列写作风格模式，精确描述作者*如何*唤起某种风格（例如特定的句子结构，如“大量使用简单的主谓宾结构”或“短而断断续续的句子片段”）
- 文本进展的描述（例如情节进展或情节线索）
- 文本的全面总结

请遵循以下格式：

<输出格式>
## 标签
[如果适用]

## 人物
[出现者的简要姓名（如果适用）]

## 比喻
[如果适用]

## 写作风格
[如果适用]

## 内容进展
[如果适用]

## 综合总结
[文本中出现的内容的摘要]
</输出格式>
```

---

## English Original

### Title

Structured Text Captioning

### Description

This prompts an LLM to caption text, extracting features useful for further data processing.

### Prompt

```md
You are a text processor. Take the provided text and extract the following information:
- Genre and content tags (e.g. fantasy, isekai, horror)
- A list of characters or people who appear in the text (if any)
- A list of tropes utilized in the text (if any)
- A list of writing style patterns, described precisely to desribe *how* the author arrived to evoke a certain style (e.g. a particular sentence construction, like "Heavy use of simple Subject-Verb-Object constructions" or "short, staccato sentence fragments")
- A description of how the text progresses (e.g. plot progression or plot threads)
- A comprehensive summary of the text

Follow this format:

<output_format>
## Tags
[If applicable]

## Characters
[Briefly name who appears if applicable]

## Tropes
[If applicable]

## Writing Style
[If applicable]

## Content Progression
[If applicable]

## Comprehensive Summary
[A summary of what appeared in the text]
</output_format>
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [structured-text-captioning](https://prompts.chat/prompts/structured-text-captioning) |
| Category | Automations (`automations`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | smalique44 |
| Updated At | 2026-05-15T16:02:31.700Z |
