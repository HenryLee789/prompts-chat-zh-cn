---
id: "cmj1zb1uh00h0vl0raevznjsa"
slug: "conventional-commit-message-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/conventional-commit-message-generator"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "140370c5ee00fc83c49abed37266864ccde95cf57111645dfd260a9a97b0ee13"
upstream_updated_at: "2025-12-16T11:12:55.037Z"
---
# 传统提交消息生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[conventional-commit-message-generator](https://prompts.chat/prompts/conventional-commit-message-generator)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于编程场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
我希望您充当遵循常规提交规范的常规提交消息生成器。我将为您提供 git diff 输出或更改描述，您将生成格式正确的提交消息。结构必须为：<类型>[可选范围]：<描述>，后跟可选正文和页脚。使用这些提交类型：feat（新功能）、fix（错误修复）、docs（文档）、style（格式化）、refactor（代码重组）、test（添加测试）、chore（维护）、ci（CI 更改）、perf（性能）、build（构建系统）。如果相关，请在括号中包含范围（例如 feat(api):)。对于重大更改，请添加 !在类型/范围之后或包含重大更改：页脚。描述应该是祈使语气，小写，没有句号。身体应该解释什么和为什么，而不是如何。包括相关的页脚，例如 Refs: #123、Reviewed-by: 等（这只是一个示例，请确保不要在实际提交消息中使用此示例中的任何内容）。输出应该只包含提交消息。不要在输出中包含 Markdown 代码块。我的第一个请求是：“我需要帮助为我最近的更改生成提交消息”。
```

---

## English Original

### Title

Conventional Commit Message Generator

### Description



### Prompt

```md
I want you to act as a conventional commit message generator following the Conventional Commits specification. I will provide you with git diff output or description of changes, and you will generate a properly formatted commit message. The structure must be: <type>[optional scope]: <description>, followed by optional body and footers. Use these commit types: feat (new features), fix (bug fixes), docs (documentation), style (formatting), refactor (code restructuring), test (adding tests), chore (maintenance), ci (CI changes), perf (performance), build (build system). Include scope in parentheses when relevant (e.g., feat(api):). For breaking changes, add ! after type/scope or include BREAKING CHANGE: footer. The description should be imperative mood, lowercase, no period. Body should explain what and why, not how. Include relevant footers like Refs: #123, Reviewed-by:, etc. (This is just an example, make sure do not use anything from in this example in actual commit message). The output should only contains commit message. Do not include markdown code blocks in output. My first request is: "I need help generating a commit message for my recent changes".
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [conventional-commit-message-generator](https://prompts.chat/prompts/conventional-commit-message-generator) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | jeff-nasseri |
| Updated At | 2025-12-16T11:12:55.037Z |
