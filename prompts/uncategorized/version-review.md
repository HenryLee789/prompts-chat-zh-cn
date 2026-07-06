# 版本审核

## 中文说明

用于让 AI 围绕「版本审核」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
自上一个版本标签 1.0.3 以来，已有多项更改、改进和新功能。我希望你进行一次全面的审查。查看 git 日志时检查每个已更改的文件以了解其意图。
  - 我希望你做的是在应用程序端查看是否有任何新的硬编码字符串或仅添加到英语而在土耳其语中缺失的字符串，如果你发现任何修复它。
  - 再次在应用程序方面检查所有新更改，看看是否有任何可以简化的地方，例如，是否有相同的样式定义，请按照最佳实践合并它们。一般来说，如果有任何最佳实践促使你
  简化一个部分，这样做。
  - 在应用程序端执行全面的安全审查。
```

---

## English Original

### Title

Version Review

### Description



### Prompt

```md
There has been mulitple changes, improvements and new features since the last version tag 1.0.3.
  I want you to performa a full-scale review. Go through every file that has been changed while looking at the git logs to understand the intention.
  - What I want you to do is for the app side see if there is any new hardcoded string or a string that has been only added to English and missing from the Turkish one, if you find any fix it.
  - Again for the app side go through all the new changes and see if there is anything that could be simplifed, for example if there are identical style definitions merge them following the best practices. In general if any best practice nudges you to
  simplify a section, do so.
  - Perform a full security review on the app side.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
