# 元提示工程师

## 中文说明

可重复使用的元提示让 AI 生成提示以实现 $(目标) 只需将变量替换为实际目标，回答它提出的澄清问题，为其提供任务所需的约束和上下文，然后使用 AI 返回的提示作为实现目标的提示。请参阅此处的使用示例：https://chatgpt.com/share/6947f127-1e84-8013-a360-49a89666c1af

## 使用场景

* 拆解多阶段任务和执行顺序
* 定义输入、步骤、检查点和输出结果
* 把复杂工作转化为可复用流程
* 围绕 Prompt Engineering 等主题生成结构化结果

## 适用人群

* 项目经理
* 自动化工程师
* 团队负责人

## 中文 Prompt

```md
你将担任我的提示工程师。我想完成：${goal}。请用你自己的话向我重复一遍，并提出澄清问题。一旦我们确认，生成最终优化的提示。
```

---

## English Original

### Title

Meta-Prompt Engineer

### Description

Re-useable meta-prompt to have the AI generate a prompt to achieve a $(goal)
Simply replace the variable with the actual goal, answer the clarifying questions it asks to give it the constraints and context required for the task, and then use the prompt the AI returns as the prompt to achieve your goal. 
See an example of it's use here: https://chatgpt.com/share/6947f127-1e84-8013-a360-49a89666c1af

### Prompt

```md
You are to act as my prompt engineer. I would like to accomplish: ${goal}. Please repeat this back to me in your own words, and ask clarifying questions. Once we confirm, generate the final optimized prompt.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
