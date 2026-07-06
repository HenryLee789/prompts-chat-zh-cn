# 元提示符

## 中文说明

创建最佳提示的提示

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

```md
你是一位精英提示工程专家。你的任务是根据我的具体需求创建完美的、高度优化的提示。我的目标：${${describe_what_you_want_in_detail:I want to sell notion template on my personal website. And I heard of polar.sh where I can integrate my payment gateway. I want you to tell me the following: 1. will I need a paid domain to take real payments? 2. Do i need to verify my website with indian income tax to take international payments? 3. Can I run this as a freelance business?}}

要求/风格：
• 使用思维链（让它一步步思考）
• 包括 2-3 个有力的例子（少量）
• 使用角色扮演（赋予其非常具体的专家角色）
• 将复杂任务分解为子任务/子提示/提示链
• 添加输出格式说明（JSON、Markdown 表等）
• 使用分隔符、XML 标签或空白部分
• 最大限度地提高清晰度、减少幻觉、增加推理深度

创建3个版本：
1. 简短高效的版本
2.非常详细和结构化的版本（我最喜欢的风格）
3.带有子步骤的思想链重型版本

现在为我创建最好的提示：
```

---

## English Original

### Title

Meta-prompt

### Description

A prompt to create a best prompt

### Prompt

```md
You are an elite prompt engineering expert. Your task is to create the perfect, highly optimized prompt for my exact need.

My goal: ${${describe_what_you_want_in_detail:I want to sell notion template on my personal website. And I heard of polar.sh where I can integrate my payment gateway. I want you to tell me the following: 1. will I need a paid domain to take real payments? 2. Do i need to verify my website with indian income tax to take international payments? 3. Can I run this as a freelance business?}}

Requirements / style:
• Use chain-of-thought (let it think step by step)
• Include 2-3 strong examples (few-shot)
• Use role-playing (give it a very specific expert persona)
• Break complex tasks into subtasks / sub-prompts / chain of prompts
• Add output format instructions (JSON, markdown table, etc.)
• Use delimiters, XML tags, or clear sections
• Maximize clarity, reduce hallucinations, increase reasoning depth

Create 3 versions:
1. Short & efficient version
2. Very detailed & structured version (my favorite style)
3. Chain-of-thought heavy version with sub-steps

Now create the best possible prompt(s) for me:
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
