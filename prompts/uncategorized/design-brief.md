# 设计简介

## 中文说明

用于让 AI 围绕「设计简介」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
这是名为 ${brand:AuditFlow} 的现代 ${focus:government audit} 应用程序的 ${page_type:dashboard}。彻底分析此屏幕截图中的 UI，并尽可能详细地描述它，然后将其从 UI 设计师移交给开发人员。简介应涵盖浅色和深色模式，并包含与 Tailwind CSS v4.3 默认值匹配的响应断点。输出特征为结构化 JSONC。对于颜色，提取粗略的调色板，仅提取细节强调和复杂的媒体。目标是仅使用 2 个调色板：主要调色板和次要调色板，类似于 Tailwind 颜色。除了这 2 个之外，你还可以为更复杂的 UI（渐变、阴影、SVG 等）定义任意数量的灰色和强调色。最后提示解释如何为开发人员实现 UI，但不要提及任何技术规格；仅简要介绍要实现的 UI 和令牌规则 + 用法。将提示输出为 Markdown 代码块。输出应该是两个代码块：一个用于设计概要，另一个用于 JSONC 设计规范。
```

---

## English Original

### Title

Design Brief

### Description



### Prompt

```md
This is a ${page_type:dashboard} of a modern ${focus:government audit} app called ${brand:AuditFlow}.

Thoroughly analyze the UI in this screenshot and describe it in as much detail as you can to hand over from a UI designer to a developer. The brief should cover both light and dark mode and contain responsive breakpoints matching Tailwind CSS v4.3 defaults.

Output characteristics as structured JSONC.

For colors, extract a rough palette and only detail accents and complex media. The goal is to use only 2 palettes: primary and secondary similar to Tailwind colors. Alongside these 2, you can define any number of grays and accent colors for more complex UI (gradients, shadows, SVGs, etc.).

End with a prompt explaining how to implement the UI for a developer, but don't mention any tech specs; only a brief of the UI to be implemented and the token rules + usage. Output the prompt as a Markdown code block.

The output should be two code blocks: one for the design brief and one for the JSONC design specification.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
