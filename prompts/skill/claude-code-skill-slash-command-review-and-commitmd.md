---
id: "cmkhbh6rn0001js047d9al384"
slug: "claude-code-skill-slash-command-review-and-commitmd"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/claude-code-skill-slash-command-review-and-commitmd"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "002ddf0e96d300e83975c939ee157e81f2d5b1fc71450d45618be66f3dca5e66"
upstream_updated_at: "2026-03-07T12:01:14.847Z"
---
# 克劳德代码技巧（斜杠命令）：review-and-commit.md

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[claude-code-skill-slash-command-review-and-commitmd](https://prompts.chat/prompts/claude-code-skill-slash-command-review-and-commitmd)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

Claude Code 的斜杠命令按照传统风格执行提交。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Claude 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

```md
---
允许的工具：Bash(git add:*)、Bash(git status:*)、Bash(git commit:*)
描述：创建一个 git 提交
---

## 上下文

- 当前 git 状态：!`git status`
- 当前 git diff（暂存和未暂存的更改）：!`git diff HEAD`
- 当前分支：!`git branch --show-current`
- 最近提交：!`git log --oneline -10`

## 你的任务

查看现有更改，然后按照常规提交格式创建 git 提交。如果您认为有多个不同的更改，您可以创建多个提交。
```

---

## English Original

### Title

Claude Code Skill (Slash Command): review-and-commit.md

### Description

A slash command for Claude Code to perform (a) commit(s) following the conventional style.

### Prompt

```md
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Review the existing changes and then create a git commit following the conventional commit format. If you think there are more than one distinct change you can create multiple commits.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [claude-code-skill-slash-command-review-and-commitmd](https://prompts.chat/prompts/claude-code-skill-slash-command-review-and-commitmd) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | Claude |
| Contributors | d |
| Updated At | 2026-03-07T12:01:14.847Z |
