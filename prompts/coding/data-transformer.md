# 数据转换器

## 中文说明

用于让 AI 围绕「数据转换器」执行编程与技术实现任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
