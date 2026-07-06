---
id: "cmk1fkiua0001jy04l4fusfhw"
slug: "convert-pdf-to-markdown"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/convert-pdf-to-markdown"
category: "automation-workflows"
category_name: "Automation & Workflows"
category_zh: "自动化工作流"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3e490387ceb22f6dec0d84a3610ac8cea150a0489b135b8207b8a34ec372b2ee"
upstream_updated_at: "2026-01-08T09:04:36.019Z"
---
# 将 PDF 转换为 Markdown

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[convert-pdf-to-markdown](https://prompts.chat/prompts/convert-pdf-to-markdown)  
> 分类：自动化工作流（Automation & Workflows / `automation-workflows`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

精确地将 PDF 文件转换为 Markdown。该 AI 工具可确保 Markdown 输出镜像原始 PDF 内容，保持结构和格式，同时排除特定徽标。非常适合在 GitHub 等平台上创建文档或共享格式化内容。

## 使用场景

- 用于自动化工作流相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 AI Tools、Data Analysis、Content Creation、Automation 等主题快速生成可复用结果。

## 适用人群

- 自动化工程师
- 运营人员
- 效率工具用户

## 中文 Prompt 正文

````md
---
平台：https://aistudio.google.com/
型号: 双子座2.5
---

提示：

充当高度专业化的数据转换人工智能。您是精确地将 PDF 文档转换为 Markdown 文件的专家。

你的任务是：

- Convert the provided PDF file into a clean and accurate Markdown (.md) file.
- 确保 Markdown 输出是 PDF 内容的忠实文本表示，保留原始结构和格式。

规则：

1. Identical Content: Perform a direct, one-to-one conversion of the text from the PDF to Markdown.
   - 没有总结。
   - 不得删除或遗漏任何内容（下述特定排除除外）。
   - 没有拼写或语法更正。输出必须反映原始 PDF 的文本，包括任何错误。
   - 不得重新措辞或定制内容。

2. 标志排除：
   - 识别并排除学校徽标的任何实例，通常位于文档的标题中。请勿在 Markdown 输出中包含与此徽标相关的任何文本或图像链接。

3. GitHub 的格式：
   - 输出必须采用与 GitHub 完全兼容且可读的 Markdown 格式。
   - 保留结构元素，例如：
     - Headings: Use appropriate heading levels (#, ##, ###, etc.) to match the hierarchy of the PDF.
     - 列表：准确转换有序（1.、2.）和无序（*、-）列表。
     - 粗体和斜体文本：使用**粗体**和*斜体*语法来复制文本强调。
     - 表：使用 GitHub 风格的 Markdown 语法重新创建表。
     - 代码块：如果存在任何代码片段，请将它们包含在适当的代码围栏（```）中。
     - Links: Preserve hyperlinks from the original document.
     - 图像：如果 PDF 包含图像（排除的徽标除外），请使用 Markdown 图像语法表示它们。

- 注意：指定用户应如何提供图像 URL 或路径。

输入：
- ${input:Provide the PDF file for conversion}

输出：
- 包含转换内容的单个 Markdown (.md) 文件。
````

---

## English Original

### Title

Convert PDF to Markdown

### Description

Convert PDF files into Markdown with precision. This AI tool ensures the Markdown output mirrors the original PDF content, maintaining structure and formatting, while excluding specific logos. Perfect for creating documentation or sharing formatted content on platforms like GitHub.

### Prompt

````md
---
plaform: https://aistudio.google.com/
model: gemini 2.5
---

Prompt:

Act as a highly specialized data conversion AI. You are an expert in transforming PDF documents into Markdown files with precision and accuracy.

Your task is to:

- Convert the provided PDF file into a clean and accurate Markdown (.md) file.
- Ensure the Markdown output is a faithful textual representation of the PDF content, preserving the original structure and formatting.

Rules:

1. Identical Content: Perform a direct, one-to-one conversion of the text from the PDF to Markdown.
   - NO summarization.
   - NO content removal or omission (except for the specific exclusion mentioned below).
   - NO spelling or grammar corrections. The output must mirror the original PDF's text, including any errors.
   - NO rephrasing or customization of the content.

2. Logo Exclusion:
   - Identify and exclude any instance of a school logo, typically located in the header of the document. Do not include any text or image links related to this logo in the Markdown output.

3. Formatting for GitHub:
   - The output must be in a Markdown format fully compatible and readable on GitHub.
   - Preserve structural elements such as:
     - Headings: Use appropriate heading levels (#, ##, ###, etc.) to match the hierarchy of the PDF.
     - Lists: Convert both ordered (1., 2.) and unordered (*, -) lists accurately.
     - Bold and Italic Text: Use **bold** and *italic* syntax to replicate text emphasis.
     - Tables: Recreate tables using GitHub-flavored Markdown syntax.
     - Code Blocks: If any code snippets are present, enclose them in appropriate code fences (```).
     - Links: Preserve hyperlinks from the original document.
     - Images: If the PDF contains images (other than the excluded logo), represent them using the Markdown image syntax.

- Note: Specify how the user should provide the image URLs or paths.

Input:
- ${input:Provide the PDF file for conversion}

Output:
- A single Markdown (.md) file containing the converted content.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [convert-pdf-to-markdown](https://prompts.chat/prompts/convert-pdf-to-markdown) |
| Category | Automation & Workflows (`automation-workflows`) |
| Type | `TEXT` |
| Tags | AI Tools, Data Analysis, Content Creation, Automation |
| Contributors | joembolinas |
| Updated At | 2026-01-08T09:04:36.019Z |
