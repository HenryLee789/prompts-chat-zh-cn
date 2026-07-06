---
id: "cmlw7oh7r0001ii04dh8p0p3r"
slug: "test-first-bug-fixing-approach"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/test-first-bug-fixing-approach"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "b20ac1c0185c36148bbaa36e4c78a0bee63f793563ecd67bcd2d8f5c6642fd67"
upstream_updated_at: "2026-02-21T11:04:46.886Z"
---
# 测试优先的错误修复方法

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[test-first-bug-fixing-approach](https://prompts.chat/prompts/test-first-bug-fixing-approach)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

使用测试优先方法修复错误的指南，通过系统测试和实施确保代码可靠性。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 development 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
我有一个错误：${bug}。采取测试优先的方法：1）阅读相关源文件和现有测试。 2）编写一个失败的测试来重现确切的错误。 3) 运行测试套件以确认其失败。 4) 实施最小修复。 5) 重新运行完整的测试套件。 6) 如果任何测试失败，请分析失败，调整代码，然后重新运行 - 重复直到所有测试通过。 7) 然后 grep 代码库以查找可能存在相同问题的相关代码路径，并为这些路径添加测试。 8) 总结所做的每项更改及其原因。不要问我问题——做出合理的假设并记录下来。
```

---

## English Original

### Title

Test-First Bug Fixing Approach

### Description

Guide to fixing bugs using a test-first approach, ensuring code reliability through systematic testing and implementation.

### Prompt

```md
I have a bug: ${bug}. Take a test-first approach: 1) Read the relevant source files and existing tests. 2) Write a failing test that reproduces the exact bug. 3) Run the test suite to confirm it fails. 4) Implement the minimal fix. 5) Re-run the full test suite. 6) If any test fails, analyze the failure, adjust the code, and re-run—repeat until ALL tests pass. 7) Then grep the codebase for related code paths that might have the same issue and add tests for those too. 8) Summarize every change made and why. Do not ask me questions—make reasonable assumptions and document them.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [test-first-bug-fixing-approach](https://prompts.chat/prompts/test-first-bug-fixing-approach) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | development |
| Contributors | ilker |
| Updated At | 2026-02-21T11:04:46.886Z |
