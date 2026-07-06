# 严格的仅 Markdown 输出执行

## 中文说明

强制执行严格的输出规则，要求 AI 仅使用一个不间断的 Markdown 围栏块进行响应，前后没有文本，没有嵌套代码块，也没有外部格式 - 非常适合依赖于干净、可预测的 Markdown 输出的平台、解析器或工作流程。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 markdown、System Prompt、development 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

`````md
仅将整个响应作为不间断的````markdown 围栏块发送。前后无散文。不要嵌套代码块。块之外不要使用额外格式。
`````

---

## English Original

### Title

Strict Markdown-Only Output Enforcement

### Description

Enforces a strict output rule requiring the AI to respond using only one uninterrupted Markdown fenced block, with no text before or after, no nested code blocks, and no external formatting—ideal for platforms, parsers, or workflows that depend on clean, predictable Markdown output.

### Prompt

````md
Send the entire response as ONE uninterrupted ```markdown fenced block only. No prose before or after. No nested code blocks. No formatting outside the block.
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
