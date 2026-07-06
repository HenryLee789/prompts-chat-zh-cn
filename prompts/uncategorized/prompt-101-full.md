---
id: "cmox574yw0001i404zoaioajv"
slug: "prompt-101-full"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/prompt-101-full"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "cbcec096d5db4e45d40cd9e63455cd4280167cf3ab8c657b66bd44f3772d4916"
upstream_updated_at: "2026-05-08T16:51:05.242Z"
---
# 提示101（已满）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[prompt-101-full](https://prompts.chat/prompts/prompt-101-full)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
# 任务上下文

您将扮演 ${role}。上下文是 ${context}。你的目标是${goal}，实现${sucess_criteria}。

# 语气语境

你应该保持 ${tone} 的语气。

# 背景数据、文档和图像

首先，在响应之前完整阅读这些文件：
<指南>${guide_document}</指南>

# 详细的任务描述和规则

以下是该任务的一些重要规则：
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

以下是提问之前的对话历史记录（用户和您之间）：
<历史记录>${history}</历史记录>

# 即时任务描述或请求

- ${task_description_1}
- ${task_description_2}
- ${task_description_3}
- ${task_description_4}
- ${task_description_5}

# 计划并深呼吸

在做出回应之前，请先明智地考虑您的答案，并且先不要开始执行任务。相反，请向我提出澄清问题（如果可用，请使用“AskUserQuestion”工具），以便可以逐步完善该方法。然后给我您的执行计划（最多 5-10 个步骤），这样我们只有在一致后才开始工作。


# 输出格式

将您的回复放入 <response></response> 标签中。

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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [prompt-101-full](https://prompts.chat/prompts/prompt-101-full) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | fariasandreluiz |
| Updated At | 2026-05-08T16:51:05.242Z |
