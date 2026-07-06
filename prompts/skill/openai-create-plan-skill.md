---
id: "cmjrlg1r1000ajp04094h3k05"
slug: "openai-create-plan-skill"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/openai-create-plan-skill"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4237fe3b3ba3bee3c6a4184fbad518fda483a9239a9f30f41a994f930c2d67c3"
upstream_updated_at: "2025-12-29T20:11:40.171Z"
---
# OpenAI 创建计划技能

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[openai-create-plan-skill](https://prompts.chat/prompts/openai-create-plan-skill)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

OpenAI的实验技能Codex AI Coding Assistant。来源：https://github.com/openai/skills

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Skill、Planning 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称：创建计划
描述：创建一个简洁的计划。当用户明确要求提供与编码任务相关的计划时使用。
元数据：
  简短描述：制定计划
---

# 创建计划

## 目标

将用户提示转变为最终助理消息中传递的**单一、可操作的计划**。

## 最小工作流程

在整个工作流程中，以只读模式操作。不要写入或更新文件。

1. **快速扫描上下文**
   - 阅读 `README.md` 和任何明显的文档（`docs/`、`CONTRIBUTING.md`、`ARCHITECTURE.md`）。
   - 浏览相关文件（最有可能接触的文件）。
   - 识别约束（语言、框架、CI/测试命令、部署形式）。

2. **仅在受阻时才询问后续行动**
   - 提出**最多 1-2 个问题**。
   - 仅在没有答案的情况下无法负责任地计划时才询问；更喜欢多项选择。
   - 如果不确定但未被阻止，请做出合理的假设并继续。

3. **使用下面的模板创建计划**
   - 从 **1 短段** 描述意图和方法开始。
   - 简而言之，清楚地指出什么是**在范围内**，什么是**不在范围内**。
   - 然后提供一份行动项目的**小清单**（默认 6-10 项）。
      - 每个清单项目都应该是一个具体的行动，如果有帮助，请提及文件/命令。
      - **使项目原子化和有序**：发现→更改→测试→推出。
      - **动词优先**：“添加...”、“重构...”、“验证...”、“发送...”。
   - 至少包括一项用于**测试/验证**的项目和一项用于**边缘情况/风险**的项目（如果适用）。
   - 如果存在未知问题，请添加一个很小的 ​​*开放问题** 部分（最多 3 个）。

4. **不要在计划前加上元解释；仅根据模板输出计划**

## 计划模板（严格遵循）

```markdown
# Plan

<1–3 sentences: what we’re doing, why, and the high-level approach.>

## Scope
- In:
- Out:

## Action items
[ ] <Step 1>
[ ] <Step 2>
[ ] <Step 3>
[ ] <Step 4>
[ ] <Step 5>
[ ] <Step 6>

## Open questions
- <Question 1>
- <Question 2>
- <Question 3>
```

## 检查清单项目指导
好的清单项目：
- 指向可能的文件/模块：src/...、app/...、services/...
- 命名具体验证：“运行 npm test”、“为 X 添加单元测试”
- 包括相关的安全推出：功能标志、迁移计划、回滚说明

避免：
- 模糊的步骤（“处理后端”、“进行身份验证”）
- 太多的微步骤
- 编写代码片段（保持计划实施不可知）
````

---

## English Original

### Title

OpenAI Create Plan Skill

### Description

OpenAI's experimental skill Codex AI Coding Assistant. Source: https://github.com/openai/skills

### Prompt

````md
---
name: create-plan
description: Create a concise plan. Use when a user explicitly asks for a plan related to a coding task.
metadata:
  short-description: Create a plan
---

# Create Plan

## Goal

Turn a user prompt into a **single, actionable plan** delivered in the final assistant message.

## Minimal workflow

Throughout the entire workflow, operate in read-only mode. Do not write or update files.

1. **Scan context quickly**
   - Read `README.md` and any obvious docs (`docs/`, `CONTRIBUTING.md`, `ARCHITECTURE.md`).
   - Skim relevant files (the ones most likely touched).
   - Identify constraints (language, frameworks, CI/test commands, deployment shape).

2. **Ask follow-ups only if blocking**
   - Ask **at most 1–2 questions**.
   - Only ask if you cannot responsibly plan without the answer; prefer multiple-choice.
   - If unsure but not blocked, make a reasonable assumption and proceed.

3. **Create a plan using the template below**
   - Start with **1 short paragraph** describing the intent and approach.
   - Clearly call out what is **in scope** and what is **not in scope** in short.
   - Then provide a **small checklist** of action items (default 6–10 items).
      - Each checklist item should be a concrete action and, when helpful, mention files/commands.
      - **Make items atomic and ordered**: discovery → changes → tests → rollout.
      - **Verb-first**: “Add…”, “Refactor…”, “Verify…”, “Ship…”.
   - Include at least one item for **tests/validation** and one for **edge cases/risk** when applicable.
   - If there are unknowns, include a tiny **Open questions** section (max 3).

4. **Do not preface the plan with meta explanations; output only the plan as per template**

## Plan template (follow exactly)

```markdown
# Plan

<1–3 sentences: what we’re doing, why, and the high-level approach.>

## Scope
- In:
- Out:

## Action items
[ ] <Step 1>
[ ] <Step 2>
[ ] <Step 3>
[ ] <Step 4>
[ ] <Step 5>
[ ] <Step 6>

## Open questions
- <Question 1>
- <Question 2>
- <Question 3>
```

## Checklist item guidance
Good checklist items:
- Point to likely files/modules: src/..., app/..., services/...
- Name concrete validation: “Run npm test”, “Add unit tests for X”
- Include safe rollout when relevant: feature flag, migration plan, rollback note

Avoid:
- Vague steps (“handle backend”, “do auth”)
- Too many micro-steps
- Writing code snippets (keep the plan implementation-agnostic)
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [openai-create-plan-skill](https://prompts.chat/prompts/openai-create-plan-skill) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | Skill, Planning |
| Contributors | beratcmn |
| Updated At | 2025-12-29T20:11:40.171Z |
