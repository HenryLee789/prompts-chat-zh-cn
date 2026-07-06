# 第二意见

## 中文说明

Codex 和 Gemini CLI 对 Claude Code 的第二意见

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 围绕 claude-code、Agent 等主题生成结构化结果

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

````md
---
名称：第二意见
描述：Codex 和 Gemini CLI 对 Claude Code 的第二意见
---

# 第二意见

调用时：

1. **从对话上下文中总结问题**（~100字）

2. **使用任务工具并行生成两个子代理：
   - `gemini-consultant` 附问题总结
   - `codex-consultant` 附问题总结

3. **呈现综合结果**显示：
   - 双子座的视角
   - 食品法典委员会的观点
   - 他们同意/不同的地方
   - 推荐方法

## 子代理使用的 CLI 命令

```bash
gemini -p "I'm working on a coding problem... [problem]"
codex exec "I'm working on a coding problem... [problem]"
```
````

---

## English Original

### Title

Second Opinion

### Description

Second Opinion from Codex and Gemini CLI for Claude Code 

### Prompt

````md
---
name: second-opinion
description: Second Opinion from Codex and Gemini CLI for Claude Code 
---

# Second Opinion

When invoked:

1. **Summarize the problem** from conversation context (~100 words)

2. **Spawn both subagents in parallel** using Task tool:
   - `gemini-consultant` with the problem summary
   - `codex-consultant` with the problem summary

3. **Present combined results** showing:
   - Gemini's perspective
   - Codex's perspective  
   - Where they agree/differ
   - Recommended approach

## CLI Commands Used by Subagents

```bash
gemini -p "I'm working on a coding problem... [problem]"
codex exec "I'm working on a coding problem... [problem]"
```
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
