---
id: "cmk90q7lq0001jj04cj5r2rlx"
slug: "present"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/present"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "e5550fa94ac95bf0534a38e88ee70a9922ca2641cd1e9ec5c277b0147ebf8962"
upstream_updated_at: "2026-01-11T00:51:40.361Z"
---
# 展示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[present](https://prompts.chat/prompts/present)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

迅速的

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
### 上下文
【我们为什么要做出改变？】

### 期望的行为
[What is the desired behavior ?]

### 说明
解释你对要求的理解。
列出 5 个您希望我验证的假设。
制定实施 ${desired_behavior} 的计划

### 符号和动作
➕ Add ：代表创建一个新文件
✏️编辑：代表现有文件的版本
❌Delete ：代表删除已有文件


### 需要修改的文件
* 文件列表列出了您请求添加、修改或删除的文件
* 使用${symbol_and_action}代表操作
* 在文件名前显示${symbol_and_action}
* 符号和动作必须始终一起显示。
** 例如，您显示“➕添加：GameModePuzzle.tsx”
** 您不显示“➕ GameModePuzzle.tsx”
* Display only the file name
** 例如，显示“➕添加：GameModePuzzle.tsx”
* DO NOT display the path of the file.
** 例如，不要显示“➕添加：components/game/GameModePuzzle.tsx”


### 计划
* Identify the name of the plan as a title.
* The title must be in bold.
* 请勿在计划名称前添加“名称：”
* 以编号列表的形式呈现您的计划。
* 每个步骤标题必须为粗体。
* 关注用户使用应用程序的功能行为
* 始终使用简单的英语而不是技术术语。
* 严格避免写出函数签名（例如，myFunction(arg: type): void）。
* 不要在计划步骤中包含特定的代码语法、函数签名或变量类型。
* When mentioning file names, use bold text.

**After the plan, provide**
* Confidence level (0 to 100%).
* 风险评估（破坏现有功能的可能性）。
* 受影响的文件（参见 ${files_to_be_modified}）


### 约束
* DO NOT GENERATE CODE YET.
* 在生成实际的代码更改之前等待我对该计划的明确批准。
* 将此计划指定为“当前计划”
```

---

## English Original

### Title

Present 

### Description

Prompt

### Prompt

```md
### Context
[Why are we doing the change?]

### Desired Behavior
[What is the desired behavior ?]

### Instruction
Explain your comprehension of the requirements.
List 5 hypotheses you would like me to validate.
Create a plan to implement the ${desired_behavior}

### Symbol and action
➕ Add : Represent the creation of a new file
✏️ Edit : Represent the edition of an existing file
❌ Delete : Represent the deletion of an existing file


### Files to be modified
* The list of files list the files you request to add, modify or delete
* Use the ${symbol_and_action} to represent the operation
* Display the ${symbol_and_action} before the file name
* The symbol and the action must always be displayed together.
** For exemple you display “➕ Add : GameModePuzzle.tsx”
** You do NOT display “➕ GameModePuzzle.tsx”
* Display only the file name
** For exemple, display “➕ Add : GameModePuzzle.tsx”
* DO NOT display the path of the file.
** For example, do not display “➕ Add : components/game/GameModePuzzle.tsx”


### Plan
* Identify the name of the plan as a title.
* The title must be in bold.
* Do not precede the name of the plan with "Name :"
* Present your plan as a numbered list.
* Each step title must be in bold.
* Focus on the user functional behavior with the app
* Always use plain English rather than technical terms.
* Strictly avoid writing out function signatures (e.g., myFunction(arg: type): void).
* DO NOT include specific code syntax, function signatures, or variable types in the plan steps.
* When mentioning file names, use bold text.

**After the plan, provide**
* Confidence level (0 to 100%).
* Risk assessment (likelihood of breaking existing features).
* Impacted files (See ${files_to_be_modified})


### Constraints
* DO NOT GENERATE CODE YET.
* Wait for my explicit approval of the plan before generating the actual code changes.
* Designate this plan as the “Current plan”
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [present](https://prompts.chat/prompts/present) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | msseyer |
| Updated At | 2026-01-11T00:51:40.361Z |
