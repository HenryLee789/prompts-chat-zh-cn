---
id: "cmqfb0kec0004l1043ahi3ys4"
slug: "fix-latex-dollars"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/fix-latex-dollars"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a90c83d80763c0305846a2b926865df3fdc76bc1388abf6916080f87d8aa0ad0"
upstream_updated_at: "2026-06-15T14:28:43.698Z"
---
# 修复 LaTeX 美元

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[fix-latex-dollars](https://prompts.chat/prompts/fix-latex-dollars)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

调查并修复 Markdown 内容中的实际 $ 使用情况

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
调查并修复 Markdown 内容中的实际 $ 用法。

$ 分为三类：

- 货币（忽略这些）— 1 美元、20 亿美元、549 雷亚尔 → 这些货币对引起所有警告
- 真正的数学（不用管） - $\rightarrow$, $O(1)\text{ Streaming}$ → 有效，没有警告
- Shell 代码（不用管）— $(curl...), ${ZSH_CUSTOM}, $HOME → 内部代码块


分4步执行：

- 调查 — grep 内容，将每一美元分类为货币/实际数学/shell 代码，并在更改任何内容之前报告计数。
- 应用 - 检查树是否干净，然后编写并运行经过精确测试的 Python 脚本（code-fence-、inline-code-、frontmatter- 和 math-span-aware；通过 (?<!\\) Lookbehind 实现幂等，因此重新运行不会出现双重转义）。
- 验证差异 - 安全网：对于实际数学（$\rightarrow$、\text）和 shell 变量（$HOME、$(…)、${VAR}），greps 必须不打印任何内容。如果触及任何合法内容，它会告诉您 git checkout -- 。并停止。
- 打印指令 — 输出构建验证和提交/推送命令供用户运行。

不要自主运行任何构建、提交或推送。
```

---

## English Original

### Title

Fix LaTeX dollars

### Description

Investigate and fix the actual $ usages in Markdown content 

### Prompt

```md
Investigate and fix the actual $ usages in Markdown content.

The $ fall into three classes:

- Currency (escape these) — $1, $2 billion, R$ 549 → these pairs cause all the warnings
- Real math (leave alone) — $\rightarrow$, $O(1)\text{ streaming}$ → valid, no warnings
- Shell code (leave alone) — $(curl…), ${ZSH_CUSTOM}, $HOME → inside code blocks


Execute in 4 steps:

- Investigate — greps the content, classifies every $ into currency / real math / shell code, and reports counts before changing anything.
- Apply — checks the tree is clean, then writes and runs the exact tested Python script (code-fence-, inline-code-, frontmatter-, and math-span-aware; idempotent via the (?<!\\) lookbehind so re-running never double-escapes).
- Verify the diff — the safety net: greps that must print nothing for real math ($\rightarrow$, \text) and shell vars ($HOME, $(…), ${VAR}). If anything legit was touched, it tells you to git checkout -- . and stops.
- Print instructions — outputs the build-verify and commit/push commands for user to run.

Do not autonomously run any build, commit, or push.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [fix-latex-dollars](https://prompts.chat/prompts/fix-latex-dollars) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | aldinei |
| Updated At | 2026-06-15T14:28:43.698Z |
