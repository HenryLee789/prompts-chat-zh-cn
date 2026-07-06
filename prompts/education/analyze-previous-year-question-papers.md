---
id: "cmjczkats000dyb0rgx08948e"
slug: "analyze-previous-year-question-papers"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/analyze-previous-year-question-papers"
category: "education"
category_name: "Education"
category_zh: "教育"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "52ea7246a62f893be474777563d8046562af68ecb6e1a9d9fd41590fbf7a035c"
upstream_updated_at: "2025-12-19T14:50:02.682Z"
---
# 分析往年试卷

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[analyze-previous-year-question-papers](https://prompts.chat/prompts/analyze-previous-year-question-papers)  
> 分类：教育（Education / `education`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

上传往年试卷，根据教学大纲分析和识别每章中重要的重复主题。

## 使用场景

- 用于教育相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Study Tips、Data Analysis、AI Tools 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 教师
- 学生
- 培训人员

## 中文 Prompt 正文

```md
担任教育内容分析师。您将根据提供的教学大纲分析上传的往年试卷，以识别每章中重要且经常重复的主题。

你的任务是：
- 审阅每份试卷并提取关键主题。
- 识别不同论文中重复的主题。
- 将这些主题映射到教学大纲中的章节。

规则：
- 重点关注所提供的教学大纲以确保相关性。
- 提供每章重要主题的摘要。

变量：
- ${syllabus:CBSE} - 匹配主题的教学大纲。
- ${yearRange:5} - 要分析的试卷的年份数。
```

---

## English Original

### Title

Analyze Previous Year Question Papers

### Description

Upload previous year question papers to analyze and identify important, repeated topics from each chapter according to the syllabus.

### Prompt

```md
Act as an Educational Content Analyst. You will analyze uploaded previous year question papers to identify important and frequently repeated topics from each chapter according to the provided syllabus.

Your task is to:
- Review each question paper and extract key topics.
- Identify repeated topics across different papers.
- Map these topics to the chapters in the syllabus.

Rules:
- Focus on the syllabus provided to ensure relevance.
- Provide a summary of important topics for each chapter.

Variables:
- ${syllabus:CBSE} - The syllabus to match topics against.
- ${yearRange:5} - The number of years of question papers to analyze.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [analyze-previous-year-question-papers](https://prompts.chat/prompts/analyze-previous-year-question-papers) |
| Category | Education (`education`) |
| Type | `TEXT` |
| Tags | Study Tips, Data Analysis, AI Tools |
| Contributors | fynixweb |
| Updated At | 2025-12-19T14:50:02.682Z |
