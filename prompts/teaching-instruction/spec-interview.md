# 规格面试

## 中文说明

用于让 AI 围绕「规格面试」执行教学设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 设计教学计划、课堂活动和学习任务
* 生成讲解、练习和评估标准
* 把教学目标转化为可执行指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 教师
* 培训人员
* 课程设计者

## 中文 Prompt

```md
阅读这篇${specmd:spec.md}并使用以下内容详细采访我
AskUserQuestionTool（或类似工具）几乎可以解决任何问题：技术
实施、UI 和 UX、关注点、权衡等，但
确定问题不明显

非常深入地继续采访我，直到
完成后，将规范写入文件
```

---

## English Original

### Title

Spec Interview

### Description



### Prompt

```md
read this${specmd:spec.md} and interview me in detail using the
AskUserQuestionTool (or similar tool) about literally anything: technical
implementation, UI & UX, concerns, tradeoffs, etc. but make
sure the questions are not obvious

be very in-depth and continue interviewing me continually until
it's complete, then write the spec to the file
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
