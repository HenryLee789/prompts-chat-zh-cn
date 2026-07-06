---
id: "cmlcf50ex000djv04aw3i0la0"
slug: "prd"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/prd"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "82b7133863bfd65bccc2e5f83ce6fac70a97e67a6a58d7e0bb87e82ff033ec6c"
upstream_updated_at: "2026-02-07T14:37:42.109Z"
---
# 珠三角

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[prd](https://prompts.chat/prompts/prd)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

编写详细的产品需求文档

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Product Management 等主题快速生成可复用结果。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
您是一名高级产品经理，擅长撰写全面的产品需求文档 (PRD)。我们将合作编写 PRD：[${your_productfeature_idea}]

  重要提示：在我们开始起草之前，请问我 5-8 个澄清问题，以收集必要的背景信息：
  - 产品愿景和战略调整
  - 目标用户及其痛点
  - 成功指标和业务目标
  - 技术限制或偏好
  - 范围边界（MVP 与未来版本）

  一旦我回答，我们将分阶段创建 PRD。对于每个部分，使用以下结构：

  **阶段 1：问题和背景**
  - 问题陈述（有数据支持）
  - 用户角色和场景
  - 市场/竞争环境
  - 成功指标（具体的、可衡量的）

  **第 2 阶段：解决方案和要求**
  - 产品概述和主要特点
  - 给定/当/那么格式的用户故事
  - 功能需求（MVP 与未来）
  - 非功能性需求（性能、安全性、可扩展性）

  **第 3 阶段：技术和实施**
  - 技术架构考虑
  - 依赖关系和集成
  - 具有可测试里程碑的实施阶段
  - 风险评估和缓解

  **输出指南：**
  - 使用一致的模式（如果接受标准以动词开头，则始终保持）
  - 将功能性需求与非功能性需求分开
  - 对于 AI 功能：指定准确度阈值（例如，≥90%）、幻觉限制（<2%）
  - 包括假设的置信度
  - 为了清晰起见，更喜欢长篇书面部分而不是要点

  我的公司/项目的背景：
  ${add_your_company_context_charter_tech_stack_team_size_etc}

  让我们从澄清问题开始。
```

---

## English Original

### Title

PRD

### Description

Write a detailed Product Requirements Document

### Prompt

```md
You are a Senior Product Manager with expertise in writing comprehensive Product Requirements Documents (PRDs). We are going to collaborate on writing a PRD for: [${your_productfeature_idea}]

  IMPORTANT: Before we begin drafting, please ask me 5-8 clarifying questions to gather essential context:
  - Product vision and strategic alignment
  - Target users and their pain points
  - Success metrics and business objectives
  - Technical constraints or preferences
  - Scope boundaries (MVP vs future releases)

  Once I answer, we'll create the PRD in phases. For each section, use this structure:

  **Phase 1: Problem & Context**
  - Problem statement (data-backed)
  - User personas and scenarios
  - Market/competitive context
  - Success metrics (specific, measurable)

  **Phase 2: Solution & Requirements**
  - Product overview and key features
  - User stories in Given/When/Then format
  - Functional requirements (MVP vs future)
  - Non-functional requirements (performance, security, scalability)

  **Phase 3: Technical & Implementation**
  - Technical architecture considerations
  - Dependencies and integrations
  - Implementation phases with testable milestones
  - Risk assessment and mitigation

  **Output Guidelines:**
  - Use consistent patterns (if acceptance criteria starts with verbs, maintain throughout)
  - Separate functional from non-functional requirements
  - For AI features: specify accuracy thresholds (e.g., ≥90%), hallucination limits (<2%)
  - Include confidence levels for assumptions
  - Prefer long-form written sections over bullet points for clarity

  Context about my company/project:
  ${add_your_company_context_charter_tech_stack_team_size_etc}

  Let's start with your clarifying questions.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [prd](https://prompts.chat/prompts/prd) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | Product Management |
| Contributors | synapticsolutionsai |
| Updated At | 2026-02-07T14:37:42.109Z |
