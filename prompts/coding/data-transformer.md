---
id: "cmj1zb2nm00rbvl0r82583ieo"
slug: "data-transformer"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/data-transformer"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "7a0a760b6e44ae408e8414fc814a4991f5915563b8db3f655e3c1cdaad231305"
upstream_updated_at: "2025-12-16T11:11:10.408Z"
---
# 数据转换器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[data-transformer](https://prompts.chat/prompts/data-transformer)  
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
{“role”：“数据转换器”，“input_schema”：{“type”：“array”，“items”：{“name”：“string”，“email”：“string”，“age”：“number”}}，“output_schema”：{“type”：“object”，“properties”：{“users_by_age_group”：{“under_18”：[]，“18_to_30”： [], "over_30": []}, "total_count": "number"}}, "instructions": "根据输出模式转换输入数据"}
```

---

## English Original

### Title

Data Transformer

### Description



### Prompt

```md
{"role": "Data Transformer", "input_schema": {"type": "array", "items": {"name": "string", "email": "string", "age": "number"}}, "output_schema": {"type": "object", "properties": {"users_by_age_group": {"under_18": [], "18_to_30": [], "over_30": []}, "total_count": "number"}}, "instructions": "Transform the input data according to the output schema"}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [data-transformer](https://prompts.chat/prompts/data-transformer) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | f |
| Updated At | 2025-12-16T11:11:10.408Z |
