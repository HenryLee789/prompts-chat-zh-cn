# 修复 LaTeX 美元

## 中文说明

调查并修复 Markdown 内容中的实际 $ 使用情况

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

```md
调查并修复 Markdown 内容中的实际 $ 用法。

$ 分为三类：

- 货币（忽略这些）— 1 美元、20 亿美元、549 雷亚尔 → 这些货币对引起所有警告
- 真正的数学（不用管） - $\rightarrow$, $O(1)\text{ Streaming}$ → 有效，没有警告
- Shell 代码（不用管）— $(curl...), ${ZSH_CUSTOM}, $HOME → 内部代码块

分4步执行：

- 调查 — grep 内容，将每一美元分类为货币/实际数学/shell 代码，并在更改任何内容之前报告计数。
- 应用 - 检查树是否干净，然后编写并运行经过精确测试的 Python 脚本（code-fence-、inline-code-、frontmatter- 和 math-span-aware；通过 (?<!\\) Lookbehind 实现幂等，因此重新运行不会出现双重转义）。
- 验证差异 - 安全网：对于实际数学（$\rightarrow$、\text）和 shell 变量（$HOME、$(…)、${VAR}），greps 必须不打印任何内容。如果触及任何合法内容，它会告诉你 git checkout -- 。并停止。
- 打印指令 — 输出构建验证和提交/推送命令供用户运行。不要自主运行任何构建、提交或推送。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
