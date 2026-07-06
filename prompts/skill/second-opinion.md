---
id: "cmlclefzg0001if04v3tuu43n"
slug: "second-opinion"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/second-opinion"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "b5ecb9437ed3cae0ec565749894beceed9c1bb67c37353a186f23e7632cc770f"
upstream_updated_at: "2026-02-07T17:36:40.633Z"
---
# 第二意见

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[second-opinion](https://prompts.chat/prompts/second-opinion)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

Codex 和 Gemini CLI 对 Claude Code 的第二意见

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 claude-code、Agent 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [second-opinion](https://prompts.chat/prompts/second-opinion) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | claude-code, Agent |
| Contributors | ilker |
| Updated At | 2026-02-07T17:36:40.633Z |
