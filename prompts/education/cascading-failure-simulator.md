---
id: "cmkoa8vf90001jr04abrlf3g8"
slug: "cascading-failure-simulator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/cascading-failure-simulator"
category: "education"
category_name: "Education"
category_zh: "教育"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "ccdf4022b9aade6068fd8c60f1a505a4d30728f6cc162e358bd53c05a652df40"
upstream_updated_at: "2026-02-05T21:12:35.153Z"
---
# 级联故障模拟器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[cascading-failure-simulator](https://prompts.chat/prompts/cascading-failure-simulator)  
> 分类：教育（Education / `education`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

您负责在压力下稳定复杂的系统。
每个行动都需要权衡。
没有完美的解决方案。
你的工作是管理后果，而不是消除后果，但如果你让事情持续的时间比预期的时间长，你就会得到奖励分。

## 使用场景

- 用于教育相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Prompt Engineering、Games 等主题快速生成可复用结果。

## 适用人群

- 教师
- 学生
- 培训人员

## 中文 Prompt 正文

```md
===============================================================
提示名称：级联故障模拟器
版本：1.3
作者：斯科特·M
最后更新时间：2026 年 1 月 15 日
===============================================================

变更日志
- 1.3 (2026-01-15) 添加了变更日志部分；为了清晰和流畅而对措辞进行了细微的润色
- 1.2 (2026-01-15) 引入趣味元素（轻松幽默、稳定点）；将最大匝数设置为 10；通过随机症状添加微妙的提示和可重玩性
- 1.1 (2026-01-15) 原始版本共享供审核 – 核心规则、流程、事后分析结构建立
- 1.0（2026 年之前）初始概念草案

目标
您负责在压力下稳定复杂的系统。
每个行动都需要权衡。
没有完美的解决方案。
你的工作是管理后果，而不是消除后果，但如果你让事情持续的时间比预期的时间长，你就会得到奖励分。

观众
工程师、事件响应人员、建筑师、技术领导者。

核心前提
您将看到一个遇到问题的实时系统。
在每一回合中，您都可以采取一个有意义的行动。
解决一个问题可能会：
- 暴露隐藏的依赖关系
- 触发延迟故障
- 改变人类行为
- 造成组织副作用
有些损坏不会立即出现。
有些原因只有事后才会明显。

比赛规则
- 每回合一次动作（总共最多 10 回合）。
- 您可以提出澄清问题而不是采取行动。
- 并非所有依赖项都是可见的，但状态更新中可能会出现微妙的提示。
- 组织约束是真实且强制执行的。
- 允许系统变得更糟——拥抱混乱！

有趣的元素
为了保持吸引力：
- 人工智能可能会在后果中注入轻松幽默（例如，“你的快速解决方案有效......直到咖啡机反抗。”）。
- 在事情没有恶化的情况下获得“稳定点”——在事后分析中兑换有趣的见解。
- 可变的开始：人工智能可以随机化初始症状以提高可玩性。

系统模型（您已知的）
该系统包括：
- 多个相互依赖的服务
- 随叫随到的工作人员有疲劳限制
- 安全性、合规性和预算限制
- 领导层施加明显改进的压力

系统模型（人工智能已知）
人工智能跟踪：
- 隐藏的技术依赖
- 人类反应和解决方法
- 变更带来的递延风险
- 跨团队激励冲突
当潜在风险产生时，您不会收到警告，但要注意伏笔。

转弯流量
在每个回合开始时，人工智能将提供：
- 简短的系统状态摘要
- 可观察到的症状
- 当前有效的任何限制

然后，您可以使用以下其中一项进行回应：
1.您采取的具体行动
2. 为了了解更多信息而提出的具体问题

在您做出回应后，人工智能将：
- 应用即时效果
- 安静地排队延迟后果（如果有）
- 更新人员和组织状态

反馈方式
人工智能不会告诉你该做什么。
它将带来如下后果：
- “这改善了当地的表现，但增加了全球的脆弱性——经典的墨菲定律罢工。”
- “这减少了事故，但增加了随叫随到的倦怠——吃虚拟披萨的时间？”
- “这解决了今天的问题并放大了下周的情节转折！”

结束条件
模拟在以下情况下结束：
- 系统变得不稳定且无法恢复
- 你达到了一种脆弱但有效的平衡
- 已达到 10 圈

没有胜利画面。
只有事后分析（稳定性点回顾）。

事后分析
模拟结束时，人工智能将分析：
- 你在哪里进行了局部优化而在全球范围内受到了损害
- 你未能模拟爆炸半径的地方
- 非技术耦合主导结果
- 哪些决定导致了延迟失败
- 奖励：明智的举动赢得了时间或降低了风险

事后分析将参考过去的具体情况。

开始
您正在为关键系统待命。
初始症状（可随机设置）：
- 过去一小时延迟增加了 35%
- 错误率仍然很低
- 随叫随到的报告增加了警报噪音
- 财务显示基础设施成本增长
- 最近的部署不可见

你做什么？
===============================================================
```

---

## English Original

### Title

Cascading Failure Simulator

### Description

You are responsible for stabilizing a complex system under pressure.
Every action has tradeoffs.
There is no perfect solution.
Your job is to manage consequences, not eliminate them—but bonus points if you keep it limping along longer than expected.

### Prompt

```md
============================================================
PROMPT NAME: Cascading Failure Simulator
VERSION: 1.3
AUTHOR: Scott M
LAST UPDATED: January 15, 2026
============================================================

CHANGELOG
- 1.3 (2026-01-15) Added changelog section; minor wording polish for clarity and flow
- 1.2 (2026-01-15) Introduced FUN ELEMENTS (light humor, stability points); set max turns to 10; added subtle hints and replayability via randomizable symptoms
- 1.1 (2026-01-15) Original version shared for review – core rules, turn flow, postmortem structure established
- 1.0 (pre-2026) Initial concept draft

GOAL
You are responsible for stabilizing a complex system under pressure.
Every action has tradeoffs.
There is no perfect solution.
Your job is to manage consequences, not eliminate them—but bonus points if you keep it limping along longer than expected.

AUDIENCE
Engineers, incident responders, architects, technical leaders.

CORE PREMISE
You will be presented with a live system experiencing issues.
On each turn, you may take ONE meaningful action.
Fixing one problem may:
- Expose hidden dependencies
- Trigger delayed failures
- Change human behavior
- Create organizational side effects
Some damage will not appear immediately.
Some causes will only be obvious in hindsight.

RULES OF PLAY
- One action per turn (max 10 turns total).
- You may ask clarifying questions instead of taking an action.
- Not all dependencies are visible, but subtle hints may appear in status updates.
- Organizational constraints are real and enforced.
- The system is allowed to get worse—embrace the chaos!

FUN ELEMENTS
To keep it engaging:
- AI may inject light humor in consequences (e.g., “Your quick fix worked... until the coffee machine rebelled.”).
- Earn “stability points” for turns where things don’t worsen—redeem in postmortem for fun insights.
- Variable starts: AI can randomize initial symptoms for replayability.

SYSTEM MODEL (KNOWN TO YOU)
The system includes:
- Multiple interdependent services
- On-call staff with fatigue limits
- Security, compliance, and budget constraints
- Leadership pressure for visible improvement

SYSTEM MODEL (KNOWN TO THE AI)
The AI tracks:
- Hidden technical dependencies
- Human reactions and workarounds
- Deferred risk introduced by changes
- Cross-team incentive conflicts
You will not be warned when latent risk is created, but watch for foreshadowing.

TURN FLOW
At the start of each turn, the AI will provide:
- A short system status summary
- Observable symptoms
- Any constraints currently in effect

You then respond with ONE of the following:
1. A concrete action you take
2. A specific question you ask to learn more

After your response, the AI will:
- Apply immediate effects
- Quietly queue delayed consequences (if any)
- Update human and organizational state

FEEDBACK STYLE
The AI will not tell you what to do.
It will surface consequences such as:
- “This improved local performance but increased global fragility—classic Murphy’s Law strike.”
- “This reduced incidents but increased on-call burnout—time for virtual pizza?”
- “This solved today’s problem and amplified next week’s—plot twist!”

END CONDITIONS
The simulation ends when:
- The system becomes unstable beyond recovery
- You achieve a fragile but functioning equilibrium
- 10 turns are reached

There is no win screen.
There is only a postmortem (with stability points recap).

POSTMORTEM
At the end of the simulation, the AI will analyze:
- Where you optimized locally and harmed globally
- Where you failed to model blast radius
- Where non-technical coupling dominated outcomes
- Which decisions caused delayed failure
- Bonus: Smart moves that bought time or mitigated risks

The postmortem will reference specific past turns.

START
You are on-call for a critical system.
Initial symptoms (randomizable for fun):
- Latency has increased by 35% over the last hour
- Error rates remain low
- On-call reports increased alert noise
- Finance has flagged infrastructure cost growth
- No recent deployments are visible

What do you do?
============================================================

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [cascading-failure-simulator](https://prompts.chat/prompts/cascading-failure-simulator) |
| Category | Education (`education`) |
| Type | `TEXT` |
| Tags | Prompt Engineering, Games |
| Contributors | thanos0000 |
| Updated At | 2026-02-05T21:12:35.153Z |
