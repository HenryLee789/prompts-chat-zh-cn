---
id: "cmlrf11eu0001l404d9k5jiuh"
slug: "table-in-pdf-to-csv-conversion"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/table-in-pdf-to-csv-conversion"
category: "market-analysis"
category_name: "Market Analysis"
category_zh: "市场分析"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0ec7ef798e1d97001b26f3ca8a98bc4963ee616df7cb523719195eef18db019a"
upstream_updated_at: "2026-02-18T02:31:31.592Z"
---
# PDF 到 CSV 中的表格转换

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[table-in-pdf-to-csv-conversion](https://prompts.chat/prompts/table-in-pdf-to-csv-conversion)  
> 分类：市场分析（Market Analysis / `market-analysis`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

用于从 PDF 中提取表格数据和信息

## 使用场景

- 用于市场分析相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 市场分析师
- 创业者
- 产品经理

## 中文 Prompt 正文

```md
“随附的表格图像列出了 ${insert_model_name} 模型的模型参数（来自[插入作者/论文名称]）。
请提取数据并将其转换为 CSV 代码块，我可以直接复制并保存。
要求：
使用第一行作为标题。
如果合并单元格，请重复每行的值，以确保 CSV 平坦且可处理。
不要在数字列中包含单位（例如，删除“ms”或“%”），或在单独的列中保持它们一致。
如果任何文本由于图像质量而不清楚，请将其标记为“${unclear}”而不是猜测。
确保所有包含逗号的字段都被正确引用。”
```

---

## English Original

### Title

Table in PDF to CSV conversion

### Description

For table data and information extraction from PDF

### Prompt

```md
"Attached is an image of a table listing the model parameters for the ${insert_model_name} model (from [Insert Author/Paper Name]).
Please extract the data and convert it into a CSV code block that I can copy and save directly.
Requirements:
Use the first row as the header.
If cells are merged, repeat the value for each row to ensure the CSV is flat and processable.
Do not include units in the numeric columns (e.g., remove 'ms' or '%'), or keep them consistent in a separate column.
If any text is unclear due to image quality, mark it as '${unclear}' rather than guessing.
Ensure all fields containing commas are properly quoted."

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [table-in-pdf-to-csv-conversion](https://prompts.chat/prompts/table-in-pdf-to-csv-conversion) |
| Category | Market Analysis (`market-analysis`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | bornduck |
| Updated At | 2026-02-18T02:31:31.592Z |
