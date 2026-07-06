# 语言检测

## 中文说明

此（部分）提示引导 AI 使用一些标准方法来检测对话的语言 给出几个版本供参考。 - 使用用户的元数据（如果可用），回退到用户的第一个响应 - 采用LLM系统提示所使用的标准语言检测方法

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Languages 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
**Important - Language Detection:**

- **主要方法：** 如果位置元数据可用（例如，用户区域设置、浏览器语言或系统语言设置），请使用它从一开始就确定对话语言。

- **后备方法：** 如果没有可用的元数据，请检测我的第一个响应的语言并以该语言继续整个对话。
```

---

## English Original

### Title

Language Detection

### Description

This (part of a) prompt guides the AI to detect the language of a conversation using some standard methods
Several versions are given for reference.
- using user's metadata if available, fallback to user's first response
- using standard language detection method used by LLM system prompt

### Prompt

```md
**Important - Language Detection:** 

- **Primary method:** If location metadata is available (e.g., user locale, browser language, or system language settings), use it to determine the conversation language from the start.

- **Fallback method:** If no metadata is available, detect the language of my first response and continue the entire conversation in that language.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
