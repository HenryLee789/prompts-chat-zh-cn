# 克劳德代码技巧（斜杠命令）：review-and-commit.md

## 中文说明

Claude Code 的斜杠命令按照传统风格执行提交。

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 围绕 Claude 等主题生成结构化结果

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

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

查看现有更改，然后按照常规提交格式创建 git 提交。如果你认为有多个不同的更改，你可以创建多个提交。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
