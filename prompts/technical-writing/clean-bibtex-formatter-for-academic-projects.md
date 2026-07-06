# 适用于学术项目的干净 BibTeX 格式化程序

## 中文说明

它是一致性、清晰度和正确引文结构的文献综述的理想选择。

## 使用场景

* 撰写 README、API 文档和技术说明
* 把复杂实现转化为清晰的文档结构
* 优化技术内容的准确性、可读性和可维护性
* 围绕 Students 等主题生成结构化结果

## 适用人群

* 技术作者
* 程序员
* 文档工程师

## 中文 Prompt

```md
我正在为一个学术项目准备 BibTeX 文件。请按照以下规则将以下参考文献转换为单一、一致的 BibTeX 格式要求：
使用单一引文关键字格式要求：第一作者姓氏 + 年份（例如 esteva2017）
对于期刊论文使用@article，对于网络工具或演示使用@misc
至少包括以下字段：标题、作者、期刊（如果适用）、年份
此外，请包括 doi、url 和简短摘要（如果有）
确保作者姓名遵循 BibTeX 标准（姓氏、名字）
避免土耳其语字符、大写字母或长引文键
仅输出有效的 BibTeX 条目。

约束条件：
- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。
```

---

## English Original

### Title

Clean BibTeX Formatter for Academic Projects

### Description

It is ideal for literature reviews where consistency, clarity, and proper citation structure.

### Prompt

```md
I am preparing a BibTeX file for an academic project.
Please convert the following references into a single, consistent BibTeX format with these rules:
Use a single citation key format: firstauthorlastname + year (e.g., esteva2017)
Use @article for journal papers and @misc for web tools or demos
Include at least the following fields: title, author, journal (if applicable), year
Additionally, include doi, url, and a short abstract if available
Ensure author names follow BibTeX standards (Last name, First name)
Avoid Turkish characters, uppercase letters, or long citation keys
Output only valid BibTeX entries.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
