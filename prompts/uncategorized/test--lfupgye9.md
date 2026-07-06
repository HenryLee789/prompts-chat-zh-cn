# 测试

## 中文说明

用于让 AI 围绕「测试」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
---
名称：测试
描述：清楚地描述该技能的作用以及何时使用它
---

# 测试

描述该技能的作用以及代理应如何使用它。

## 说明

- 第 1 步：...
- 第 2 步：...

${名称}
```

---

## English Original

### Title

test

### Description



### Prompt

```md
---
name: test
description: A clear description of what this skill does and when to use it
---

# test

Describe what this skill does and how the agent should use it.

## Instructions

- Step 1: ...
- Step 2: ...

${名称}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
