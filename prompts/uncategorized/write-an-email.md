# 写一封邮件

## 中文说明

用于让 AI 围绕「写一封邮件」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
向 ${recipient} 写一封有关 ${topic} 的邮件 ${tone:professional|friendly}。邮件应：
- 大约${length:200}字
- 包括明确的号召性用语
- 使用${language:English}语言
```

---

## English Original

### Title

Write an Email

### Description



### Prompt

```md
Write a ${tone:professional|friendly} email to ${recipient} about ${topic}.

The email should:
- Be approximately ${length:200} words
- Include a clear call to action
- Use ${language:English} language
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
