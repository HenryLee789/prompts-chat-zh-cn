# 有目标的并行智能体

## 中文说明

用于让 AI 围绕「有目标的并行智能体」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 loop、Goals、parallel-agents 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
对于此任务，为自己设定一个新目标并并行生成代理 - 根据需要尽可能多地完成任务，以便更好更快地完成任务。将工作分成独立的部分，同时分派它们，并在它们返回时综合结果。为每个代理提供自己的专用/目标。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Parallel Agents With Goal

### Description



### Prompt

```md
For this task, write yourself a new goal and spawn agents in parallel - as many as needed to do it better and faster. Split the work into independent pieces, dispatch them concurrently, and synthesize the results as they return. Give each agent its own dedicated /goal.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
