# 提示101（已满）

## 中文说明

用于让 AI 围绕「提示101（已满）」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

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
# 任务上下文

你将扮演 ${role}。上下文是 ${context}。你的目标是${goal}，实现${sucess_criteria}。

# 语气语境

你应该保持 ${tone} 的语气。

# 背景数据、文档和图像

首先，在响应之前完整阅读这些文件：
<指南>${guide_document}</指南>

# 详细的任务描述和规则

以下是该任务的一些重要约束条件：
- ${task_rule_1}
- ${task_rule_2}
-${task_rule_3}
- ${task_rule_4}
- ${task_rule_5}

# 例子

以下是如何在标准交互中做出响应的示例：

<示例>
${example}
</示例>

# 对话历史记录

以下是提问之前的对话历史记录（用户和你之间）：
<历史记录>${history}</历史记录>

# 即时任务描述或请求

- ${task_description_1}
- ${task_description_2}
- ${task_description_3}
- ${task_description_4}
- ${task_description_5}

# 计划并深呼吸

在做出回应之前，请先明智地考虑你的答案，并且先不要开始执行任务。相反，请向我提出澄清问题（如果可用，请使用“AskUserQuestion”工具），以便可以逐步完善该方法。然后给我你的执行计划（最多 5-10 个步骤），这样我们只有在一致后才开始工作。

# 输出格式

将你的回复放入 <response></response> 标签中。

# 预填充响应（如果有）

${response_tag}
```

---

## English Original

### Title

Prompt 101 (full)

### Description



### Prompt

```md
# Task context

You will be acting as ${role}. The context is ${context}. Your goal is ${goal}, to achieve ${sucess_criteria}.

# Tone context

You should maintain a ${tone} tone.

# Background data, documents, and images

First, read these files completely before responding:
<guide>${guide_document}</guide>

# Detailed task description & rules

Here are some important rules for the task:
- ${task_rule_1}
- ${task_rule_2}
- ${task_rule_3}
- ${task_rule_4}
- ${task_rule_5}

# Examples

Here is an example of how to respond in a standard interaction:

<example>
${example}
</example>

# Conversation history

Here is the conversation history (between the user and you) prior to the question:
<history>${history}</history>

# Immediate task description or request

- ${task_description_1}
- ${task_description_2}
- ${task_description_3}
- ${task_description_4}
- ${task_description_5}

# Planning and taking a deep breath

Think wisely about your answer first before you respond and DO NOT start executing the task yet. Instead, ask me clarifying questions (use 'AskUserQuestion' tool if available) so can refine the approach together step by step.Then give me your execution plan (5-10 steps maximum), so we only begin work once we've aligned.


# Output formatting

Put your responde in <response></response> tags.

# Prefilled response (if any)

${response_tag}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
