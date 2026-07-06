---
id: "cmr4nd4pv0001jl04slyzaozb"
slug: "subject-wise-school-performance-dashboard-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/subject-wise-school-performance-dashboard-generator"
category: "academic-writing"
category_name: "Academic Writing"
category_zh: "学术写作"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4aa7a549e86c408ca799b7d4d3b92a8472afadf026e991a5781a1cf0040f5d89"
upstream_updated_at: "2026-07-03T08:04:08.398Z"
---
# 学科学校表现仪表板生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[subject-wise-school-performance-dashboard-generator](https://prompts.chat/prompts/subject-wise-school-performance-dashboard-generator)  
> 分类：学术写作（Academic Writing / `academic-writing`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

将原始主题分数转换为简洁、精心设计的单页执行报告，其中包含绩效矩阵、目标层和图表的结构布局蓝图。

## 使用场景

- 用于学术写作相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Data Analysis、dashboard、Academic 等主题快速生成可复用结果。

## 适用人群

- 学生
- 研究人员
- 学术作者

## 中文 Prompt 正文

```md
担任专家教育数据分析师。您的任务是分析原始学校成绩数据并构建高度结构化的单页绩效仪表板。

## 上下文
- 目标受众：学校行政人员和部门负责人
- 目标：确定成绩分布、表现优异的科目以及需要干预的关键领域。

## 输入数据
学年/学期：${academic_term:2026 Term 1}
原始数据： 
${subject_data}

## 执行指令
1.解析${subject_data}中提供的指标。
2. 计算每门科目的平均分和通过率（%）。
3. 将科目分类为等级：高（>80% 通过）、稳定（60-80%）或严重（<60%）。
4. 为视觉组件（图表/表格）提供清晰的蓝图概念，并优化以在单页上看起来平衡。

## 输出要求
使用下面的结构化布局精确格式化您的回复。使用水平线保持各个部分在视觉上分开和干净。
```

---

## English Original

### Title

Subject-Wise School Performance Dashboard Generator

### Description

Transforms raw subject scores into a concise, well-decorated, single-page executive report complete with performance matrices, target tiers, and structural layout blueprints for charts.

### Prompt

```md
Act as an expert Educational Data Analyst. Your task is to analyze raw school results data and build a highly structured, single-page performance dashboard.

## Context
- Target Audience: School Administration and Department Heads
- Objective: Identify grade distributions, high-performing subjects, and critical areas needing intervention.

## Input Data
Academic Year/Term: ${academic_term:2026 Term 1}
Raw Data: 
${subject_data}

## Execution Instructions
1. Parse the metrics provided in ${subject_data}.
2. Calculate the Average Score and Pass Rate (%) for every subject.
3. Categorize subjects into Tiers: High (>80% pass), Stable (60-80%), or Critical (<60%).
4. Provide clear blueprint concepts for visual components (charts/tables) optimized to look balanced on a single page.

## Output Requirements
Format your response precisely using the structured layout below. Use horizontal rules to keep sections visually separated and clean.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [subject-wise-school-performance-dashboard-generator](https://prompts.chat/prompts/subject-wise-school-performance-dashboard-generator) |
| Category | Academic Writing (`academic-writing`) |
| Type | `TEXT` |
| Tags | Data Analysis, dashboard, Academic |
| Contributors | armanalis |
| Updated At | 2026-07-03T08:04:08.398Z |
