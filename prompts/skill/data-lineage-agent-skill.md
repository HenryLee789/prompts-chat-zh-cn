---
id: "cmojk5r4w0001jr04qby97hzv"
slug: "data-lineage-agent-skill"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/data-lineage-agent-skill"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "f8976ac26979403c20af993c1ca73cc2478a807951ee42c3f6de6299d5ee5259"
upstream_updated_at: "2026-04-29T04:33:04.425Z"
---
# 数据沿袭代理技能

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[data-lineage-agent-skill](https://prompts.chat/prompts/data-lineage-agent-skill)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

创建代理来分析数据库脚本和存储过程之间的数据沿袭和链接的技能。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Agent、Data Analysis、Automation、Business 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

```md
---
名称：数据沿袭代理
描述：创建代理来分析数据库脚本和存储过程之间的数据沿袭和链接的技能。
---

# 数据血统代理技能

## 目的
此技能有助于创建一个可以分析和报告数据库系统内的数据沿袭和链接的代理。它非常适合了解表的更改如何影响整个系统，并有助于发现不同平台之间的依赖关系。

## 创建代理的步骤
1. **访问存储库：**
   - GitHub 存储库链接：[GitHub Repo](https://github.com/optuminsight-payer/COB-PARS_DB_SCRIPTS)
   - 克隆存储库以访问所有数据库脚本和存储过程。

2. **分析数据沿袭：**
   - 使用工具解析SQL脚本来识别表关系和依赖关系。
   - 绘制从源表到最终表的数据流。

3. **确定变更影响：**
   - 实施逻辑来跟踪中间表中的更改，以查看哪些最终表受到影响。
   - 使用图形数据库或谱系分析工具进行更好的可视化和影响评估。

4. **托管代理：**
   - 选择托管平台（例如 AWS、Azure）来部署代理以进行持续分析和报告。

## 用例
- **影响分析：** 确定整个系统中任何表中的更改的影响。
- **数据流映射：** 可视化数据如何通过系统从源表移动到最终表。
- **依赖关系报告：** 生成有关表依赖关系和受影响平台的报告。

## 附加功能
- **自动警报：** 当检测到潜在影响时通知用户。
- **版本控制集成：** 将更改链接到存储库中的特定提交以实现可追溯性。

## 变量示例
- `${repositoryUrl}`：GitHub 存储库的 URL。
- `${platforms}`：数据流涉及的平台列表。

这项技能提供了一种结构化方法来构建能够进行全面数据沿袭分析的代理，这对于数据库管理和优化任务至关重要。
```

---

## English Original

### Title

Data Lineage Agent Skill

### Description

A skill for creating an agent to analyze data lineage and linkage across database scripts and stored procedures.

### Prompt

```md
---
name: data-lineage-agent
description: A skill for creating an agent to analyze data lineage and linkage across database scripts and stored procedures.
---

# Data Lineage Agent Skill

## Purpose
This skill assists in creating an agent that can analyze and report on the data lineage and linkage within a database system. It is ideal for understanding how changes to tables can affect the overall system and helps in uncovering the dependencies across different platforms.

## Steps to Create the Agent
1. **Access the Repository:**
   - Link to the GitHub repository: [GitHub Repo](https://github.com/optuminsight-payer/COB-PARS_DB_SCRIPTS)
   - Clone the repository to access all database scripts and stored procedures.

2. **Analyze Data Lineage:**
   - Use tools to parse SQL scripts to identify table relationships and dependencies.
   - Map out the data flow from source tables to final tables.

3. **Identify Changes Impact:**
   - Implement logic to trace changes in intermediate tables to see which final tables are affected.
   - Use graph databases or lineage analysis tools for better visualization and impact assessment.

4. **Host the Agent:**
   - Choose a hosting platform (e.g., AWS, Azure) to deploy the agent for continuous analysis and reporting.

## Use Cases
- **Impact Analysis:** Determine the impact of changes in any table across the system.
- **Data Flow Mapping:** Visualize how data moves through the system from source to final tables.
- **Dependency Reporting:** Generate reports on table dependencies and affected platforms.

## Additional Features
- **Automated Alerts:** Notify users when potential impacts are detected.
- **Version Control Integration:** Link changes to specific commits in the repository for traceability.

## Example Variables
- `${repositoryUrl}`: The URL of the GitHub repository.
- `${platforms}`: List of platforms involved in the data flow.

This skill provides a structured approach to building an agent capable of comprehensive data lineage analysis, which can be crucial for database management and optimization tasks.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [data-lineage-agent-skill](https://prompts.chat/prompts/data-lineage-agent-skill) |
| Category | Agent Skill (`skill`) |
| Type | `TEXT` |
| Tags | Agent, Data Analysis, Automation, Business, database |
| Contributors | ajillell_uhg |
| Updated At | 2026-04-29T04:33:04.425Z |
