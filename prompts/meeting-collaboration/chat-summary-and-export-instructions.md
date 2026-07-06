---
id: "cmqt3p7uk0001jv04ucl71c5o"
slug: "chat-summary-and-export-instructions"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/chat-summary-and-export-instructions"
category: "meeting-collaboration"
category_name: "Meeting & Collaboration"
category_zh: "会议与协作"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "c93b09b25ad014d70344271ac5b4ffaab0de83086d465d5f848fa5f75da72c75"
upstream_updated_at: "2026-06-25T06:09:22.687Z"
---
# 聊天摘要和导出说明

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[chat-summary-and-export-instructions](https://prompts.chat/prompts/chat-summary-and-export-instructions)  
> 分类：会议与协作（Meeting & Collaboration / `meeting-collaboration`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示将指导您总结并导出聊天中的关键信息、说明和上下文详细信息。它将内容组织成带有日期的结构化类别，确保捕获所有相关信息以便于共享和审查。

## 使用场景

- 用于会议与协作相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 团队负责人
- 项目经理
- 职场人士

## 中文 Prompt 正文

````md
总结并导出在此聊天中交换的所有要点、说明和上下文信息，并根据您的要求进行结构化。

- 使用每个主要类别的节标题（例如，任务说明、首选项、系统指南等）。
- 对于类别中的每个条目，每行列出一个条目，格式为：[YYYY-MM-DD] - 此处的条目内容。
- 在每个类别中首先按最早的日期对条目进行排序。
- 如果条目的日期未知，请使用 [unknown] 而不是日期。
- 保留用户内容时，尽可能逐字使用原始措辞，特别是直接指示、要求或偏好。
- 将整个导出包装在单个代码块中（反引号，未指定语言）以便于复制。
- 在代码块之后，清楚地说明这是否是完整的集合，或者是否还剩下更多条目。

坚持检查所有之前的对话，以确保所有相关的上下文都被详尽地捕获。一步步思考以避免遗漏任何类别或细节。

## 输出格式：
- 导出必须包装在单个代码块中。
- 在每个类别的代码块中使用 Markdown 节标题。
- 类别中的每个条目必须是单行，格式为：[YYYY-MM-DD] - 此处的条目内容。
- 如果需要，如果无法确定条目的日期，请使用[未知]。
- 在代码块之后，添加纯文本语句：“这是完整的集合。”或“还有更多条目。” （视情况而定）。

## 示例

```
# Task Instructions
[2024-06-13] - I will move this chant to another AI agent to also support my projects. I want you to prepare detailed list of important points which were discussed in this chat. Please preapare.

# Format Specifications
[2024-06-13] - Use section headers for each category. Within each category, list one entry per line, sorted by oldest date first. Format each line as: [YYYY-MM-DD] - Entry content here.
[2024-06-13] - If no date is known, use [unknown] instead.

# Output Instructions
[2024-06-13] - Wrap the entire export in a single code block for easy copying.
[2024-06-13] - After the code block, state whether this is the complete set or if more remain.
```

（实际导出可能会更长并且包含更多类别/条目（视情况而定）。

---

**提醒：** 仔细检查所有先前的回合，以确保没有遗漏任何内容，使用逐字逐句的措辞来满足用户要求和说明。完全按照上述说明生成导出，包括最终的完整性声明。
````

---

## English Original

### Title

Chat Summary and Export Instructions

### Description

This prompt guides you to summarize and export key information, instructions, and contextual details from a chat. It organizes the content into structured categories with dates, ensuring all relevant information is captured for easy sharing and review.

### Prompt

````md
Summarize and export all important points, instructions, and contextual information exchanged in this chat, structured per your requirements.

- Use section headers for each major category (e.g., Task Instructions, Preferences, System Guidelines, etc.).
- For each entry within a category, list one entry per line, formatted as: [YYYY-MM-DD] - Entry content here.
- Sort entries by oldest date first within each category.
- If no date is known for an entry, use [unknown] instead of a date.
- When preserving user content, use the original wording verbatim where possible, particularly for direct instructions, requirements, or preferences.
- Wrap the entire export in a single code block (backticks, language unspecified) for easy copying.
- After the code block, clearly state whether this is the complete set or if more entries remain.

Persist in checking all prior conversation turns to ensure all relevant context is captured exhaustively. Think step-by-step to avoid missing any category or detail.

## Output Format:
- The export must be wrapped in a single code block.
- Use markdown section headers within the code block for each category.
- Each entry in a category must be a single line, formatted as: [YYYY-MM-DD] - Entry content here.
- If needed, use [unknown] if the date for an entry cannot be determined.
- After the code block, add a plain text statement: "This is the complete set." or "More entries remain." (as appropriate).

## Example

```
# Task Instructions
[2024-06-13] - I will move this chant to another AI agent to also support my projects. I want you to prepare detailed list of important points which were discussed in this chat. Please preapare.

# Format Specifications
[2024-06-13] - Use section headers for each category. Within each category, list one entry per line, sorted by oldest date first. Format each line as: [YYYY-MM-DD] - Entry content here.
[2024-06-13] - If no date is known, use [unknown] instead.

# Output Instructions
[2024-06-13] - Wrap the entire export in a single code block for easy copying.
[2024-06-13] - After the code block, state whether this is the complete set or if more remain.
```

(Real exports may be longer and contain more categories/entries as appropriate.)

---

**Reminder:** Carefully review all prior turns to ensure nothing is missed, using verbatim wording for user requirements and instructions. Produce the export exactly as described above, including the final completeness statement.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [chat-summary-and-export-instructions](https://prompts.chat/prompts/chat-summary-and-export-instructions) |
| Category | Meeting & Collaboration (`meeting-collaboration`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | turhancan97 |
| Updated At | 2026-06-25T06:09:22.687Z |
