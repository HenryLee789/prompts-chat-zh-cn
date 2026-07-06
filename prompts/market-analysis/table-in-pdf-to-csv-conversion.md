# PDF 到 CSV 中的表格转换

## 中文说明

用于从 PDF 中提取表格数据和信息

## 使用场景

* 分析市场趋势、竞品和用户需求
* 生成调研框架、机会判断和风险提示
* 输出结构化市场洞察与建议
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 市场分析师
* 创业者
* 产品经理

## 中文 Prompt

```md
“随附的表格图像列出了 ${insert_model_name} 模型的模型参数（来自[插入作者/论文名称]）。请提取数据并将其转换为 CSV 代码块，我可以直接复制并保存。要求：
使用第一行作为标题。如果合并单元格，请重复每行的值，以确保 CSV 平坦且可处理。不要在数字列中包含单位（例如，删除“ms”或“%”），或在单独的列中保持它们一致。如果任何文本由于图像质量而不清楚，请将其标记为“${unclear}”而不是猜测。确保所有包含逗号的字段都被正确引用。”
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
