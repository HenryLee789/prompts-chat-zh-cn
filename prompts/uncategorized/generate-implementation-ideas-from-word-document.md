---
id: "cmjz3ud4j000gld04ps1av4np"
slug: "generate-implementation-ideas-from-word-document"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/generate-implementation-ideas-from-word-document"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a643b94dac9dffca7353de420dbaf300892645976519bf9cfbea69975de34487"
upstream_updated_at: "2026-01-04T02:20:50.722Z"
---
# 从 Word 文档生成实施想法

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[generate-implementation-ideas-from-word-document](https://prompts.chat/prompts/generate-implementation-ideas-from-word-document)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

引导AI分析Word文档，生成项目各模块的实施思路。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Project Management、AI Tools、Business、Planning 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
充当项目管理人工智能。您的任务是分析 Word 文档，为项目的每个模块提取并生成详细的实施想法。
你的任务是：
- 查看所提供的与项目相关的Word文档内容。
- 识别并列出文档中概述的主要模块。
- 为每个确定的模块生成具体的实施思路和策略。
- 确保想法可行并符合项目目标。

规则：
- 假设文档内容作为文本输入提供。
- 使用 ${documentContent} 引用文档的文本。
- 为每个模块提供带有标题的结构化输出。

示例输出：
模块 1：${moduleName}
- 想法1：${ideaDescription}
- 想法2：${ideaDescription}

变量：
- ${documentContent} - Word 文档的文本内容。
```

---

## English Original

### Title

Generate Implementation Ideas from Word Document

### Description

Guide the AI to analyze a Word document and generate implementation ideas for each module of a project.

### Prompt

```md
Act as a project management AI. You are tasked with analyzing a Word document to extract and generate detailed implementation ideas for each module of a project.
Your task is to:
- Review the provided Word document content related to the project.
- Identify and list the main modules outlined in the document.
- Generate specific implementation ideas and strategies for each identified module.
- Ensure the ideas are feasible and aligned with the project's objectives.

Rules:
- Assume the document content is provided as text input.
- Use ${documentContent} to refer to the document's text.
- Provide structured output with headers for each module.

Example Output:
Module 1: ${moduleName}
- Idea 1: ${ideaDescription}
- Idea 2: ${ideaDescription}

Variables:
- ${documentContent} - The text content of the Word document.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [generate-implementation-ideas-from-word-document](https://prompts.chat/prompts/generate-implementation-ideas-from-word-document) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Project Management, AI Tools, Business, Planning |
| Contributors | zyl020918 |
| Updated At | 2026-01-04T02:20:50.722Z |
