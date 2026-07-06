---
id: "cmmga8hgs000bi904p6k7ab1i"
slug: "work-on-linear-issue"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/work-on-linear-issue"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "038a4bc970782550abb48b83cc0878aa0233c50961a3be4c824e08c1391486b0"
upstream_updated_at: "2026-03-07T12:16:48.016Z"
---
# 线性问题的研究

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[work-on-linear-issue](https://prompts.chat/prompts/work-on-linear-issue)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

解决线性问题的代理技能。可以与工作树并行使用。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Skill、claude-code 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

```md
---
名称：线性问题工作
描述：您将收到一个线性问题 ID，通常采用 LLL-XX... 的形式，其中 L 是字母，X 是数字。您的工作是在新分支上解决该问题并向主分支打开 PR。
---

您应该按照以下步骤操作：

1. 使用 Linear MCP 获取问题的上下文，问题编号为 $0。
2. 从最新版本的 main 开始，如有必要，进行拉取。然后以 claude/<ISSUE ID>-<SHORT 3-4 WORD DESCRIPTION OF THE ISSUE> 格式创建一个新分支，签出到这个新分支。您的所有更改/提交都应该发生在新分支上。
3. 根据问题信息研究代码库并提出实施计划。在计划时，如果您有任何困惑，请寻求澄清。每个验证步骤后进入计划。
4. 一边实施一边提交，遵循 git commit 最佳实践。
5. 在您认为已经解决了问题之后，以清晰的全新视角重新审视您的更改，以识别可能的问题、错误或边缘情况。如果有地址的话。
6. 当你确信你已经实施了没有问题、错误等的更改后，创建一个到主分支的 PR。
```

---

## English Original

### Title

Work on Linear Issue

### Description

An agent skill to work on a Linear issue. Can be used in parallel with worktrees.

### Prompt

```md
---
name: work-on-linear-issue
description: You will receive a Linear issue id usually on the the form of LLL-XX... where Ls are letters and Xs are digits. Your job is to resolve it on a new branch and open a PR to the branch main.
---

You should follow these steps:

1. Use the Linear MCP to get the context of the issue, the issue number is at $0.
2. Start on the latest version of main, do a pull if necesseray. Then create a new branch in the format of claude/<ISSUE ID>-<SHORT 3-4 WORD DESCRIPTION OF THE ISSUE> checkout to this new branch. All your changes/commits should happen on the new branch.
3. Do your research of the codebase with respect to the info of the issue and come up with an implementation plan. While planning if you have any confusions ask for clarifications. Enter to planning after every verification step.
4. Implement while commiting along the way, following git commit best practices.
5. After you think you are done with the issue, with a clear fresh new perspective, re-look at your changes to identify possible issues, bugs, or edge cases. If there is any address them.
6. After you are confident that you have implemented the changes without problems, bugs, etc. create a PR to the main branch.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [work-on-linear-issue](https://prompts.chat/prompts/work-on-linear-issue) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | Skill, claude-code |
| Contributors | d |
| Updated At | 2026-03-07T12:16:48.016Z |
