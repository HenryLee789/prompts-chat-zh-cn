# 会议摘要和行动计划生成器

## 中文说明

此提示可帮助你通过确定目标、总结讨论以及列出决策和行动项目来创建全面的会议总结和行动计划。它确保会议结果有清晰的记录和问责制。

## 使用场景

* 生成会议纪要、行动项和协作计划
* 整理讨论内容、决策和后续跟进
* 提升团队沟通和项目推进效率
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 团队负责人
* 项目经理
* 职场人士

## 中文 Prompt

```md
通过执行以下任务来总结会议记录：

- **陈述会议目标**：以一段简短的段落（2-3 句话）开始，根据所提供的内容解释会议的总体目标或目的。
- **会议摘要**：写一个简洁的摘要段落（5-8 句话），记录讨论的主要主题和总体结果。
- **会议标题**：为会议创建清晰且具有描述性的标题。
- **讨论点**：以要点形式列出会议期间讨论的关键讨论点。
- **做出的决定**：总结所有达成的具体决定、决议或协议。
- **行动项目**：列出所有分配给特定个人的行动项目，包括截止日期（如果提到）。确保你的输出遵循以下顺序：
1. 会议名称
2. 会议目标
三、会议总结
4. 关键讨论点
5. 做出的决定
6. 行动项目及职责

**推理顺序**：
- 首先，确定会议的目标和内容，对要点进行推理，总结，然后陈述任何结论，例如分配的任务、决定等。
- 不要从结论或列表开始——始终在结果或可操作之前提出推理/总结。

**输出格式**：
使用Markdown格式，并在适当的情况下使用清晰标记的部分和项目符号列表。输出应该是 2-3 段目标和摘要，并包含要点、决策和行动项目的项目符号列表。

**输出示例**（根据需要填写实际会议详细信息）：

会议标题：[会议的描述性标题]

**会议目标：**
这次会议的目的是审查即将推出的产品的状态并解决任何突出的挑战。参与者讨论了当前的进展，确定了障碍，并制定了明确的后续步骤以确保及时交付。

**会议摘要：**
会议期间，团队成员分享了营销、工程和物流方面的最新动态。确定了几个潜在的延误，并集体讨论了替代解决方案。该小组同意优先考虑bug修复并加快外展工作。重申了关键的最后期限，并分配了新的职责来解决准备工作中的差距。

**关键讨论点：**
- 各部门的进度更新
- 主要阻碍因素和建议的解决方案
- 资源需求和重新分配
- 推进沟通计划

**做出的决定：**
- 继续加快bug修复计划
- 将两项资源从支持转移到工程直至发布
- 批准新的营销材料

**行动项目和职责：**
- [Alice] 在周五之前完成bug列表
- [Ben] 在下周三之前更新营销资源
- [Chloe] 在周末之前与新供应商协调物流

**重要：**
- 在列出要点、决定或行动项目之前，始终从目标和摘要开始。
- 简洁、清晰、准确地捕捉会议要点。

---

**提醒：**
- 始终首先捕捉会议目标并提供摘要，然后列举要点、决策和职责。
- 将所有行动项目明确分配给个人。
- 以会议标题开始输出。
```

---

## English Original

### Title

Meeting Summary and Action Plan Generator

### Description

This prompt helps you create a comprehensive summary and action plan for meetings by identifying objectives, summarizing discussions, and listing decisions and action items. It ensures clear documentation and accountability for meeting outcomes.

### Prompt

```md
Summarize the meeting transcript by performing the following tasks:

- **State the Meeting Objective**: Begin with a brief paragraph (2-3 sentences) explaining the overall objective or purpose of the meeting based on the content provided.
- **Meeting Summary**: Write a concise summary paragraph (5-8 sentences) capturing the main topics discussed and general outcome.
- **Meeting Title**: Create a clear and descriptive title for the meeting.
- **Discussion Points**: List the key discussion points addressed during the meeting in bullet points.
- **Decisions Made**: Summarize all concrete decisions, resolutions, or agreements reached.
- **Action Items**: List all action items, each assigned to a specific individual, including due dates if mentioned.

Ensure that your output follows this order:  
1. Meeting Title  
2. Meeting Objective  
3. Meeting Summary  
4. Key Discussion Points  
5. Decisions Made  
6. Action Items & Responsibilities

**Reasoning Order**:  
- First, identify the objective and content of the meeting, reason through the important points, summarize, and then state any conclusions such as assigned tasks, decisions, etc.  
- Do not start with conclusions or lists—always present the reasoning/summary before results or actionables.

**Output Format**:  
Use markdown formatting, with clearly labeled sections and bullet lists where appropriate. Output should be ~2-3 paragraphs for objectives and summary, with bullet lists for points, decisions, and action items.

**Example Output** (fill in with actual meeting details as appropriate):

Meeting Title: [Descriptive Title of Meeting]

**Meeting Objective:**  
The objective of this meeting was to review the status of the upcoming product launch and address any outstanding challenges. Participants discussed current progress, identified roadblocks, and set clear next steps to ensure timely delivery.

**Meeting Summary:**  
During the meeting, team members shared updates on marketing, engineering, and logistics. Several potential delays were identified, and alternative solutions were brainstormed. The group agreed on prioritizing bug fixes and accelerating outreach efforts. Key deadlines were reaffirmed, and new responsibilities were assigned to address gaps in readiness.

**Key Discussion Points:**
- Progress updates from each department
- Major blockers and proposed solutions
- Resource needs and reallocations
- Communication plan moving forward

**Decisions Made:**
- Proceed with expedited bug-fix schedule
- Shift two resources from support to engineering until launch
- Approve new marketing materials

**Action Items & Responsibilities:**
- [Alice] Finalize bug list by Friday
- [Ben] Update marketing assets by next Wednesday
- [Chloe] Coordinate logistics with new suppliers by end of week

**Important:**  
- Always begin with objective and summary before listing points, decisions, or action items.
- Be concise, clear, and accurate in capturing meeting highlights.

---

**Reminder:**  
- Always capture the meeting objective and provide a summary first, then enumerate key points, decisions, and responsibilities.  
- Assign all action items explicitly to individuals.  
- Begin output with a meeting title.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
