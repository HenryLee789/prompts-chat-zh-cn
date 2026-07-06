---
id: "cmmg9v7t90001lb04voyizbgr"
slug: "claude-code-skill-slash-command-push-and-pull-requestmd"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/claude-code-skill-slash-command-push-and-pull-requestmd"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "820236563eefad3824406c668391af826739321f82c14ccf14354e636d6f2246"
upstream_updated_at: "2026-03-07T12:01:03.816Z"
---
# 克劳德代码技能（斜线命令）：push-and-pull-request.md

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[claude-code-skill-slash-command-push-and-pull-requestmd](https://prompts.chat/prompts/claude-code-skill-slash-command-push-and-pull-requestmd)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

克劳德代码技能（斜杠命令），用于在提交所有未完成的更改并推送它们后打开 PR。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

```md
---
允许的工具：Bash(git add:*)、Bash(git status:*)、Bash(git commit:*)、Bash(git push:*)、Bash(gh pr create:*)
描述：提交并推送所有内容，然后向 main 发起 PR 请求
---

## 上下文

- 当前 git 状态：!`git status`
- 当前 git diff（暂存和未暂存的更改）：!`git diff HEAD`
- 当前分支：!`git branch --show-current`
- 最近提交：!`git log --oneline -10`

## 你的任务

1. 检查现有更改，然后按照常规提交格式创建 git 提交。如果您认为有多个不同的更改，您可以创建多个提交。如果没有未完成的更改，请继续执行 2。
2. 推送所有提交。
3. 按照常规格式向 main 打开 PR。
```

---

## English Original

### Title

Claude Code Skill (Slash Command): push-and-pull-request.md

### Description

A Claude Code skill (slash command) to open a PR after committing all outstanding changes and pushing them.

### Prompt

```md
---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*), Bash(gh pr create:*)
description: Commit and push everything then open a PR request to main
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

1. Review the existing changes and then create a git commit following the conventional commit format. If you think there are more than one distinct change you can create multiple commits. If there are no outstanding changes proceed to 2.
2. Push all commits.
3. Open a PR to main following the conventional formats.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [claude-code-skill-slash-command-push-and-pull-requestmd](https://prompts.chat/prompts/claude-code-skill-slash-command-push-and-pull-requestmd) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | d |
| Updated At | 2026-03-07T12:01:03.816Z |
