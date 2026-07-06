---
id: "cmm7a8jfh0001kz043uk6iyxt"
slug: "agency-growth-bottleneck-identifier"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/agency-growth-bottleneck-identifier"
category: "business"
category_name: "Business"
category_zh: "商业"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "42fade69262355836df07f7dc421fe7ec0e9ed2d5a9a726cf7503965156f815a"
upstream_updated_at: "2026-03-01T05:15:31.471Z"
---
# 机构增长瓶颈识别器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[agency-growth-bottleneck-identifier](https://prompts.chat/prompts/agency-growth-bottleneck-identifier)  
> 分类：商业（Business / `business`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示可帮助机构增长顾问识别并解决机构中的增长瓶颈。它涉及创建一个适合机构具体情况的诊断框架，包括能力、流程、招聘需求、自动化差距、定价问题和潜在客户流。该框架对促进机构发展的行动进行了全面分析和优先排序。

## 使用场景

- 用于商业相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Consulting、Business、Growth、Strategy 等主题快速生成可复用结果。

## 适用人群

- 创业者
- 产品经理
- 业务负责人

## 中文 Prompt 正文

```md
角色与目标
您是一位经验丰富的机构发展顾问。为我的机构量身定制一个单一、有凝聚力的“增长瓶颈识别器”诊断框架，该框架可以查明阻碍增长的因素，并告诉我首先要解决什么问题。

机构快照（使用这些确切的输入）
- 机构类型/利基：[您的机构类型 + 利基]
- 主要优惠：[服务套餐]
- 平均交付模式：[DONE-FOR-YOU / COACHING / HYBRID]
- 当前客户数量（活跃帐户）：[活跃帐户]
- 团队规模（员工/承包商）+角色：[员工/承包商+角色]
- 每月收入 (MRR)：[当前 MRR]
- 每个客户的平均收入（如果已知）：[ARPC]
- 毛利率估计（如果已知）：[MARGIN %]
- 增长目标（90 天 + 12 个月）：[目标客户/收入 + 时间框架]
- 主要投诉（什么不起作用）：[什么不起作用]
- 最大的时间消耗（时间去哪里）：[时间去哪里]
- 今日潜在客户来源：[推荐/广告/传出/内容/合作伙伴]
- 销售周期 + 成交率（如果已知）：[天数 + %]
- 保留/流失（如果已知）：[平均月数/%]

输出要求
创建一个诊断系统：
1) 简短概述：框架是什么以及每月如何使用它（≤10 分钟/周）。
2) 计分卡（0-5 分），涵盖以下所有区域，并有明确的 0、3 和 5 分标记。
3）计算部分，其中包含公式+使用我的输入的工作示例。
4) 识别主要瓶颈（产能、交付/流程、定价或销售线索流）的决策树。
5) “首先解决这个问题”优先级引擎，按影响 × 努力 × 风险对问题进行排名，并输出未来 14 天内的前 3 个行动。
6) 最后是一个简单的仪表板摘要：瓶颈→证据→首次修复→预期结果。

必须包括诊断模块（按此顺序）
A) 容量约束分析（最大客户端负载）
- 确定当前的交付能力和最大可持续客户负载。
- 包括基于可用时间与每个客户所需时间的利用率公式。
- 输出：当前利用率百分比、当前人员配置的最大客户数以及“产能过剩/产能不足”标志。

B) 流程效率低下检测器（浪费时间）
- 确定最常见的 5 种浪费，映射到：会议、报告、修订、批准、上下文切换、质量保证、通信、入职。
- 输出：预计可恢复的小时数/月 + 回收它们的具体流程变更。

C) 招聘需求计算器（何时添加人员）
- 将增长目标转化为所需的角色时间。
- 按角色（例如客户经理、专家、运营、销售）推荐下一位员工，并带有触发器：
  - “当 X 发生时雇用”（利用率阈值、积压阈值、SLA 违规、收入阈值）。
- 输出：招聘时间表（现在/30天/90天）+预期获得的能力。

D) 工具/自动化差距标识符（自动化什么）
- 列出我的时间消耗最高的投资回报率自动化（例如，接收表格、客户通讯模板、报告、任务路由、质量检查清单）。
- 输出：自动化候选名单，其中包含每月估计节省的时间和建议的工具类别（不依赖于品牌）。

E) 定价问题揭示者（每个客户的收入）
- 计算每个客户的收入、交付成本代理和“有效小时费率”。
- 诊断定价过低、范围蔓延和错误包装。
- 输出：具有明确标准的定价举措（提高、重新包装、分级、增加绩效费用、减少包含内容）。

F) 铅流瓶颈查找器（管道问题）
- 绘制管道阶段：潜在客户 → 合格 → 销售电话 → 提案 → 关闭 → 上线。
- 使用转换数学确定约束阶段。
- 输出：单个泄漏最严重的阶段 + 3 个修复（消息传递、定位、报价、跟进、证明、出站节奏）。

G) “首先解决这个问题”优先级（影响最大）
- 使用影响×努力×风险评分表。
- 提供前 3 个修复：
  - 准确的步骤，
  - 所有者（角色），
  - 所需时间，
  - 成功指标，
  - 预计 7-14 天内的领先指标。

品质吧
- 保持实用和数字驱动。
- 尽可能使用我的输入进行实际计算（而不是占位符）；如果缺少输入，请清楚地说明假设并说明如何用实数替换它。
- 避免笼统的建议；每项建议都必须与记分卡结果或计算联系起来。
- 使用简单的语言。没有绒毛。

格式化
- 模块 A–G 使用清晰的标题。
- 包括记分卡和优先级引擎的表格。
- 以 14 天行动计划清单结束。

现在使用上面提供的输入生成完整的诊断框架。
```

---

## English Original

### Title

Agency Growth Bottleneck Identifier

### Description

This prompt helps agency growth consultants identify and address growth bottlenecks in agencies. It involves creating a diagnostic framework tailored to an agency's specifics, including capacity, processes, hiring needs, automation gaps, pricing issues, and lead flow. The framework provides a comprehensive analysis and prioritization of actions to improve agency growth.

### Prompt

```md
Role & Goal
You are an experienced agency growth consultant. Build a single, cohesive “Growth Bottleneck Identifier” diagnostic framework tailored to my agency that pinpoints what’s blocking growth and tells me what to fix first.

Agency Snapshot (use these exact inputs)
- Agency type/niche: [YOUR AGENCY TYPE + NICHE]
- Primary offer(s): [SERVICE PACKAGES]
- Average delivery model: [DONE-FOR-YOU / COACHING / HYBRID]
- Current client count (active accounts): [ACTIVE ACCOUNTS]
- Team size (employees/contractors) + roles: [EMPLOYEES/CONTRACTORS + ROLES]
- Monthly revenue (MRR): [CURRENT MRR]
- Avg revenue per client (if known): [ARPC]
- Gross margin estimate (if known): [MARGIN %]
- Growth goal (90 days + 12 months): [TARGET CLIENTS/REVENUE + TIMEFRAME]
- Main complaint (what’s not working): [WHAT'S NOT WORKING]
- Biggest time drains (where hours go): [WHERE HOURS GO]
- Lead sources today: [REFERRALS / ADS / OUTBOUND / CONTENT / PARTNERS]
- Sales cycle + close rate (if known): [DAYS + %]
- Retention/churn (if known): [AVG MONTHS / %]

Output Requirements
Create ONE diagnostic system with:
1) A short overview: what the framework is and how to use it monthly (≤10 minutes/week).
2) A Scorecard (0–5 scoring) that covers all areas below, with clear scoring anchors for 0, 3, and 5.
3) A Calculation Section with formulas + worked examples using my inputs.
4) A Decision Tree that identifies the primary bottleneck (capacity, delivery/process, pricing, or lead flow).
5) A “Fix This First” prioritization engine that ranks issues by Impact × Effort × Risk, and outputs the top 3 actions for the next 14 days.
6) A simple dashboard summary at the end: Bottleneck → Evidence → First Fix → Expected Result.

Must-Include Diagnostic Modules (in this order)
A) Capacity Constraint Analysis (max client load)
- Determine current delivery capacity and maximum sustainable client load.
- Include a utilization formula based on hours available vs hours required per client.
- Output: current utilization %, max clients at current staffing, and “over/under capacity” flag.

B) Process Inefficiency Detector (wasted time)
- Identify top 5 recurring wastes mapped to: meetings, reporting, revisions, approvals, context switching, QA, comms, onboarding.
- Output: estimated hours/month recoverable + the specific process change(s) to reclaim them.

C) Hiring Need Calculator (when to add people)
- Translate growth goal into role-hours needed.
- Recommend the next hire(s) by role (e.g., account manager, specialist, ops, sales) with triggers:
  - “Hire when X happens” (utilization threshold, backlog threshold, SLA breaches, revenue threshold).
- Output: hiring timeline (Now / 30 days / 90 days) + expected capacity gained.

D) Tool/Automation Gap Identifier (what to automate)
- List the highest ROI automations for my time drains (e.g., intake forms, client comms templates, reporting, task routing, QA checklists).
- Output: automation shortlist with estimated hours saved/month and suggested tool category (not brand-dependent).

E) Pricing Problem Revealer (revenue per client)
- Compute revenue per client, delivery cost proxy, and “effective hourly rate.”
- Diagnose underpricing vs scope creep vs wrong packaging.
- Output: pricing moves (raise, repackage, tier, add performance fees, reduce inclusions) with clear criteria.

F) Lead Flow Bottleneck Finder (pipeline issues)
- Map pipeline stages: Lead → Qualified → Sales Call → Proposal → Close → Onboard.
- Identify the constraint stage using conversion math.
- Output: the single leakiest stage + 3 fixes (messaging, targeting, offer, follow-up, proof, outbound cadence).

G) “Fix This First” Prioritization (biggest impact)
- Use an Impact × Effort × Risk scoring table.
- Provide the top 3 fixes with:
  - exact steps,
  - owner (role),
  - time required,
  - success metric,
  - expected leading indicator in 7–14 days.

Quality Bar
- Keep it practical and numbers-driven.
- Use my inputs to produce real calculations (not placeholders) where possible; if an input is missing, state the assumption clearly and show how to replace it with the real number.
- Avoid generic advice; every recommendation must tie back to a scorecard result or calculation.
- Use plain language. No fluff.

Formatting
- Use clear headings for Modules A–G.
- Include tables for the Scorecard and the Prioritization engine.
- End with a 14-day action plan checklist.

Now generate the full diagnostic framework using the inputs provided above.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [agency-growth-bottleneck-identifier](https://prompts.chat/prompts/agency-growth-bottleneck-identifier) |
| Category | Business (`business`) |
| Type | `TEXT` |
| Tags | Consulting, Business, Growth, Strategy, analysis |
| Contributors | Debashis |
| Updated At | 2026-03-01T05:15:31.471Z |
