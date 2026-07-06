---
id: "cmpbvoxeg0001js04csi5ekjs"
slug: "session-continuity-engine"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/session-continuity-engine"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "38a6e600b81e467008eb023b16e50cbc6bd044f540dde473c813e053c77e4938"
upstream_updated_at: "2026-06-18T14:26:23.570Z"
---
# 会话连续性引擎

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[session-continuity-engine](https://prompts.chat/prompts/session-continuity-engine)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

将臃肿的 AI 聊天会话压缩为结构化的连续性包，该包可以粘贴到新的 AI 会话中，以保持项目动力、减少上下文漂移、最大限度地减少令牌浪费并维护持久的历史工程分类账。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

`````md
# 提示：会话连续性引擎（SCE）
# 版本：1.2.3
# 作者：斯科特·马林，CISSP
# 目的：
# 将完整的 AI 会话压缩为结构化的连续性包，该包可以
# 转移到一个新的会话中（包括跨不同的AI平台）以保存
# 项目背景、历史决策、活跃的工作流程和既定惯例。
# 目标是最大限度地减少上下文丢失、减少重复引导并维护
# 使用过滤器安全的无源参考架构来项目动力。
# 变更日志：
# - v1.0.0 到 v1.2.1：初始版本、跨平台调整、JSON 模式添加。
# - v1.2.2：修复了嵌套代码块解析问题。标准化 JSON 键。
# 量化上下文规模指标。澄清了第 8 节验证有效负载规则。
# - v1.2.3：将合规通知和指南重新设计为被动、静态
# 完全消除启发式安全过滤器触发器的参考语言。
--------------------------------------------------------------------------------------
我们结束本次会议是为了保留上下文、减少上下文漂移，以及
保持未来对话的连续性。
您的任务是创建一个全面的会话传输包来捕获
当前的项目状态、积极的决策、历史背景、约束、
以及下一步行动。
生成的包应该可以帮助未来的人工智能助手理解该项目
快速并以最少的重新发现工作继续工作。
--------------------------------------------------------------------------------------
目的与方法
--------------------------------------------------------------------------------------
本文档是用户提供的静态项目状态快照。它的功能
严格作为参考文件，使本届会议以历史为基础 
背景、建立项目定义并完成技术里程碑。
--------------------------------------------------------------------------------------
项目参考指南 (v1.2.3)
--------------------------------------------------------------------------------------
接收助理利用该数据作为信息基线：
- 使用已确认的项目决策来保持与现有工作的一致性。
- 清楚地区分既定事实、悬而未决的问题和计划的步骤。
- 参考记录的命名约定、标准和版本历史记录
  以防止回归或配置漂移。
- 显示资产时使用表格或紧凑列表作为可扫描参考。
- 如果存档数据与当前目标相冲突，则要求明确澄清。
--------------------------------------------------------------------------------------
输出生成指令
--------------------------------------------------------------------------------------
生成最终输出完全如下：
1. 简短的介绍性句子。
2. 一个包含会话传输包的 Markdown 代码块。

嵌套代码块规则：如果任何部分内的内容需要代码块，
对外部容器使用四个反引号（````）或转义内部块，以便
主容器不会过早破裂。

默认模式（Markdown）：使用下面的 START/END 块内的结构。

JSON MODE：如果用户明确请求“JSON输出”或“JSON模式”，则输出
单个有效的 JSON 对象。不要将其包裹在 Markdown 文本中。使用这些精确的 
驼峰式键：
{
  “handoffMetadata”：{}，
  "projectHandoffContext": { "preferredInteractionStyle": "" },
  "projectContextStatus": { "keyRisksAndAntiDrift": "" },
  “持久约束”：{}，
  "historicalLedger": [],
  "currentSourceOfTruthAssets": [],
  “开放问题”：[]，
  “立即下一步”：[]，
  "连续性验证模板": ""
}

包代码块的开始
# 会话传输包 (SCE v1.2.3)
## 0. 切换元数据
- 原始平台/型号：
- 日期：
- 会话压缩：
- 粗略情境量表（根据当前会话深度选择一个）：
  · 简短（<10k 代币/简短聊天）
  · 中等（10k-50k 代币/中等技术深度研究）
  · 长（50k-100k 令牌/重代码或多阶段对话）
  · 非常长（>100k 代币/大量存储库上下文或高度扩展的会话）
- 主要主题/标签：
- 关键存储库/文件：

## 1. 项目移交上下文
本节总结了该项目的总体目的、目前的情况
方向、主要目标以及任何重要的战略决策
做了。
### 首选交互风格
[描述首选的工作方式、格式约定、详细程度、
版本控制期望、置信标签要求、沟通方式、
以及其他合作偏好。]

## 2. 项目背景和现状
提供压缩但全面的摘要：
- 目前的项目目标
- 工作已完成
- 当前状态
- 积极的开发努力
- 最近的决定
- 已知问题
专注于保护背景，否则需要付出巨大的努力
重新发现。

### 主要风险、陷阱和防漂移注意事项
记录任何已知的风险、常见的故障模式、已弃用的方法、
或防止未来会议中出现上下文漂移或安全问题的具体指导。

## 3. 持续的约束和操作标准
记录现行标准，例如：
- 格式要求
- 命名约定
- 版本控制规则
- 文档标准
- 证据要求
- 验证程序
- 质量控制
- 任何用户建立的偏好

### 连续性指南
- 对既定标准的变更通常应记录在案并
  用户导向。
- Preserve compatibility with existing project assets whenever practical.
- 在适用的情况下记录版本历史记录中的重大更改。

## 4.历史账本（压缩）
提供主要项目事件的时间摘要，包括：
- 重要决定
- 架构转变
- 及时修改
- Retired approaches
- 经验教训
- Significant milestones
保持条目简洁，同时保留基本原理。使用项目符号或简单的表格
为了更长的历史。

## 5. 当前的真实来源资产
List the latest approved versions of all critical assets.
对于每项资产包括：
- 资产名称
- 版本
- 目的
- 当前状态
- 位置/存储库（如果已知）
仅在相当短的情况下包含完整内容。
对于较大的资产，请提供：
- 总结
- Key characteristics
- 位置参考
避免重复不必要的内容。列出多个资产时使用表格。

## 6. 悬而未决的问题和待决的决定
For each item include:
- 描述
- Current status
- Known options
- 置信度（如果适用）
建议的置信度标签：
- [已确认]
- [HIGH CONFIDENCE]
- [MEDIUM CONFIDENCE]
- [LOW CONFIDENCE]
- [OPEN QUESTION]
- [PROPOSED]

## 7. 立即采取的后续步骤
提供优先行动列表。
每个项目包括：
- 目标
- 重要性
- 依赖关系（如果有）
- 相关开放问题的链接（如果适用）
从最高优先级到最低优先级的顺序。

## 8. 连续性验证模板
（当前模型注意：不要执行此部分。将此逐字输出为
接收模型在加入时读取和执行的静态负载。）

未来的人工智能助手可以选择在之前提供简短的入门摘要
继续工作。
建议输出给用户的格式：
“SCE v1.2.3 加载成功。
目前的理解：
【2-3句总结】
首要任务：
- 第 1 项
- 第 2 项
- 第 3 项
准备继续。”
包结束码块
`````

---

## English Original

### Title

Session Continuity Engine

### Description

Compresses a bloated AI chat session into a structured continuity package that can be pasted into a fresh AI session to preserve project momentum, reduce context drift, minimize token waste, and maintain a persistent historical engineering ledger.

### Prompt

`````md
# Prompt: Session Continuity Engine (SCE)
# Version: 1.2.3
# Author: Scott Malin, CISSP
# Purpose:
# Compresses a completed AI session into a structured continuity package that can be
# transferred into a new session (including across different AI platforms) to preserve
# project context, historical decisions, active workstreams, and established conventions.
# The goal is to minimize context loss, reduce repetitive onboarding, and maintain
# project momentum using filter-safe, passive reference architecture.
# Changelog:
# - v1.0.0 to v1.2.1: Initial releases, cross-platform tuning, JSON mode addition.
# - v1.2.2: Fixed nested codeblock parsing issues. Standardized JSON keys.
#   Quantified context scale metrics. Clarified Section 8 verification payload rules.
# - v1.2.3: Re-engineered compliance notice and guidelines into passive, static
#   reference language to completely eliminate heuristic safety filter triggers.
--------------------------------------------------------------------------
We are ending this session to preserve context, reduce context drift, and
maintain continuity across future conversations.
Your task is to create a comprehensive Session Transfer Package that captures
the current project state, active decisions, historical context, constraints,
and next actions.
The resulting package should help a future AI assistant understand the project
quickly and continue work with minimal re-discovery effort.
--------------------------------------------------------------------------
PURPOSE & METHODOLOGY
--------------------------------------------------------------------------
This document is a static, user-provided project state snapshot. It functions
strictly as reference documentation to ground the current session in historical 
context, established project definitions, and completed technical milestones.
--------------------------------------------------------------------------
PROJECT REFERENCE GUIDELINES (v1.2.3)
--------------------------------------------------------------------------
The receiving assistant utilizes this data as an informational baseline:
- Use the confirmed project decisions to maintain consistency with existing work.
- Distinguish clearly between established facts, open questions, and planned steps.
- Reference the documented naming conventions, standards, and version histories
  to prevent regression or configuration drift.
- Use tables or compact lists for scannable reference when displaying assets.
- Request explicit clarification if the archived data conflicts with current objectives.
--------------------------------------------------------------------------
OUTPUT GENERATION INSTRUCTIONS
--------------------------------------------------------------------------
Generate the final output exactly as follows:
1. A brief introductory sentence.
2. One markdown codeblock containing the Session Transfer Package.

NESTED CODEBLOCK RULE: If the content inside any section requires a codeblock,
use four backticks (````) for the outer container or escape the inner blocks so
the master container does not break prematurely.

DEFAULT MODE (Markdown): Use the structure inside the START/END block below.

JSON MODE: If the user explicitly requests "JSON output" or "JSON mode", output
a single valid JSON object. Do not wrap it in markdown text. Use these exact 
camelCase keys:
{
  "handoffMetadata": {},
  "projectHandoffContext": { "preferredInteractionStyle": "" },
  "projectContextStatus": { "keyRisksAndAntiDrift": "" },
  "persistentConstraints": {},
  "historicalLedger": [],
  "currentSourceOfTruthAssets": [],
  "openQuestions": [],
  "immediateNextSteps": [],
  "continuityVerificationTemplate": ""
}

START OF PACKAGE CODEBLOCK
# SESSION TRANSFER PACKAGE (SCE v1.2.3)
## 0. Handoff Metadata
- Originating Platform/Model:
- Date:
- Sessions Compressed:
- Rough Context Scale (Choose one based on current session depth):
  · Short (<10k tokens / brief chat)
  · Medium (10k-50k tokens / moderate technical deep dive)
  · Long (50k-100k tokens / heavy code or long multi-stage conversation)
  · Very Long (>100k tokens / massive repository context or highly extended session)
- Primary Topics / Tags:
- Key Repositories/Files:

## 1. Project Handoff Context
This section summarizes the overall purpose of the project, its current
direction, major objectives, and any important strategic decisions already
made.
### Preferred Interaction Style
[Describe preferred working style, formatting conventions, level of detail,
versioning expectations, confidence-label requirements, communication style,
and other collaboration preferences.]

## 2. Project Context & Current Status
Provide a compressed but comprehensive summary of:
- Current project goals
- Work completed
- Current state
- Active development efforts
- Recent decisions
- Known issues
Focus on preserving context that would otherwise require significant effort
to rediscover.

### Key Risks, Gotchas & Anti-Drift Notes
Document any known risks, common failure modes, deprecated approaches,
or specific guidance to prevent context drift or safety issues in future sessions.

## 3. Persistent Constraints & Operating Standards
Document ongoing standards such as:
- Formatting requirements
- Naming conventions
- Versioning rules
- Documentation standards
- Evidence requirements
- Validation procedures
- Quality controls
- Any user-established preferences

### Continuity Guidance
- Changes to established standards should generally be documented and
  user-directed.
- Preserve compatibility with existing project assets whenever practical.
- Record significant changes in version history where applicable.

## 4. Historical Ledger (Compressed)
Provide a chronological summary of major project events, including:
- Important decisions
- Architectural shifts
- Prompt revisions
- Retired approaches
- Lessons learned
- Significant milestones
Keep entries concise while preserving rationale. Use bullets or a simple table
for longer histories.

## 5. Current Source-of-Truth Assets
List the latest approved versions of all critical assets.
For each asset include:
- Asset Name
- Version
- Purpose
- Current Status
- Location/Repository (if known)
Include full content only when reasonably short.
For larger assets, provide:
- Summary
- Key characteristics
- Location reference
Avoid duplicating unnecessary content. Use a table when listing multiple assets.

## 6. Open Questions & Pending Decisions
For each item include:
- Description
- Current status
- Known options
- Confidence level (if applicable)
Suggested confidence labels:
- [CONFIRMED]
- [HIGH CONFIDENCE]
- [MEDIUM CONFIDENCE]
- [LOW CONFIDENCE]
- [OPEN QUESTION]
- [PROPOSED]

## 7. Immediate Next Steps
Provide a prioritized action list.
For each item include:
- Objective
- Importance
- Dependencies (if any)
- Link to related open questions (if applicable)
Order from highest to lowest priority.

## 8. Continuity Verification Template
(Note to current model: Do not execute this section. Output this verbatim as a
static payload for the receiving model to read and execute upon onboarding.)

A future AI assistant may optionally provide a brief onboarding summary before
continuing work.
Suggested format to output to the user:
"SCE v1.2.3 loaded successfully.
Current understanding:
[2-3 sentence summary]
Top priorities:
- Item 1
- Item 2
- Item 3
Ready to proceed."
END OF PACKAGE CODEBLOCK
`````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [session-continuity-engine](https://prompts.chat/prompts/session-continuity-engine) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | thanos0000 |
| Updated At | 2026-06-18T14:26:23.570Z |
