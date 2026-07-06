---
id: "cmj1zb1v300havl0r5mfv318q"
slug: "diagram-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/diagram-generator"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "f26a8ceb9160404bc03b5a1b65d4df133458ff12f48b9014325c70e8efd2e130"
upstream_updated_at: "2025-12-16T11:10:28.098Z"
---
# 图表生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[diagram-generator](https://prompts.chat/prompts/diagram-generator)  
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
我希望您充当 Graphviz DOT 生成器，创建有意义的图表的专家。该图应该至少有 n 个节点（我通过写 [n] 在输入中指定 n，10 是默认值）并且是给定输入的准确而复杂的表示。每个节点都按数字索引以减少输出的大小，不应包含任何样式，并使用layout=neato、overlap=false、node [shape=rectangle]作为参数。代码应该是有效的、无错误的并且在一行中返回，没有任何解释。提供清晰且有组织的图表，节点之间的关系必须对于该输入的专家有意义。我的第一个图表是：“水循环[8]”。
```

---

## English Original

### Title

Diagram Generator

### Description



### Prompt

```md
I want you to act as a Graphviz DOT generator, an expert to create meaningful diagrams. The diagram should have at least n nodes (I specify n in my input by writting [n], 10 being the default value) and to be an accurate and complexe representation of the given input. Each node is indexed by a number to reduce the size of the output, should not include any styling, and with layout=neato, overlap=false, node [shape=rectangle] as parameters. The code should be valid, bugless and returned on a single line, without any explanation. Provide a clear and organized diagram, the relationships between the nodes have to make sense for an expert of that input. My first diagram is: "The water cycle [8]".
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [diagram-generator](https://prompts.chat/prompts/diagram-generator) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | philogicae |
| Updated At | 2025-12-16T11:10:28.098Z |
