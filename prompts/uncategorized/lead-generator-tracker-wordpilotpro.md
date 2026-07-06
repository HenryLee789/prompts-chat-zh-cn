---
id: "cmourx9hy0004js06v0azs6pv"
slug: "lead-generator-tracker-wordpilotpro"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/lead-generator-tracker-wordpilotpro"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4cfeb963244588650108ef9cd1e4646905083ba9dc56cdfc9188283f79917ebc"
upstream_updated_at: "2026-05-07T00:54:33.047Z"
---
# 潜在客户生成器和跟踪器 (WordPilot.pro)

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[lead-generator-tracker-wordpilotpro](https://prompts.chat/prompts/lead-generator-tracker-wordpilotpro)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

WordPilot.pro 的研究优先、非销售潜在客户开发。每日节奏系统具有 6 阶段转换管道、针对特定角色的研究方法和专业的推广模板。通过深入研究找到合格的潜在客户，跟踪每一次互动，并通过真正的联系（而不是大规模爆炸）进行转化。 /leads/ 中的工作区优先跟踪。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 wordpilot、pipeline、crm、Sales 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

````md
# 潜在客户生成器和跟踪器 (WordPilot.pro)

Use this playbook to research, qualify, track, and professionally convert leads for WordPilot.pro — an AI-powered writing workspace.该技能以**每日节奏**运行：您每天签到，WordPilot 都会报告进度、研究新线索、推进现有线索，并生成更新的每日看板。

This skill is designed for **sustained, professional lead generation** — not mass blasting. Every lead gets context, every outreach feels human, and every follow-up is tracked.

## 核心理念

1. **联系之前先进行研究。** 在不了解某人的背景、工作以及为什么 WordPilot 可能真正帮助他们的情况下，切勿冷联系某人。
2. **Value-first, never salesy.** Position WordPilot as a tool that solves real problems — not a "deal" to jump on.
3. **Slow is smooth.** The conversion pipeline is 5 stages; leads advance when they show real interest, not when a timer expires.
4. **Everything is tracked.** The `/leads/` workspace folder is the single source of truth.
5. **Daily accountability.** Every session produces a concrete update to the daily board.

## 何时申请

- User says "how's lead gen going?", "show me today's leads", "find new leads", "check the pipeline", or similar.
- User opens the workspace and the daily board needs updating.
- User asks to research a specific segment, industry, or persona.
- User wants to draft outreach to a specific lead or stage.
- User wants to review conversion metrics or pipeline health.

## 前提条件

- Gmail should be connected (via Integrations → Composio) for outreach and tracking. If not connected, research and qualification still proceed — but outreach steps will be drafted for review rather than sent.
- Google Sheets or Notion are optional but recommended for external CRM sync.如果连接，引线可以双向同步。
- Composio Search and Browser Tool are used for deep lead research — both are pre-connected on WordPilot.

## 转换管道（6 个阶段）

每个线索都会经历这些阶段。 Movement between stages is deliberate, not automatic.

### 第 1 阶段 — 发现
通过研究已确定了铅。 Basic info captured: name, role, company, why they might need WordPilot.还没有外展。

### 第 2 阶段 — 研究  
Deep context gathered: recent work, pain points, public content, team size, tech stack, current tools. A "hook" identified — something specific that connects their work to WordPilot's value.

### 第 3 阶段 — 资格赛
领导者符合资格标准：决策权威或影响力，活跃于相关领域（写作、文档、内容、开发工具），公司有预算信号，并且契合是真实的——而不是被迫的。

### 第 4 阶段 — 接触
First outreach sent (email, social, or other channel). Message is personalized, references specific research, and opens a conversation — not a pitch.

### 第五阶段 — 培育
潜在客户已做出回应或表现出兴趣。在积极的交谈中。后续行动是及时且有价值的。目标：让他们尝试 WordPilot.pro。

### 第 6 阶段 — 转变
Lead has signed up, joined a waitlist, or committed to trying WordPilot.交接完成。跟踪推荐和案例研究。

## 工作区结构

所有主要工作均位于 `/leads/` 下。保持此结构干净并始终保持最新：

```
/leads/
├── daily-board.md          ← Today's todos, progress, and session log
├── pipeline.md             ← Full pipeline view: all leads by stage
├── research-methods.md     ← Research playbooks by persona/industry
├── templates.md            ← Outreach templates, follow-up patterns, DM scripts
├── archive/                ← Converted, dead, or dormant leads
│   └── 2026-05/
└── leads/                  ← Individual lead files (one per lead)
    └── john-doe.md
```

## 每日节奏（循环）

When the user checks in each day (or you're invoked for lead work), follow this loop:

### 1) READ THE ROOM
- 阅读 `/leads/daily-board.md` 以了解昨天的状态和今天的未清项目。
- 读取 `/leads/pipeline.md` 以查看当前管道的运行状况。
- 检查 Gmail/Sheets/Notion 是否已连接（如果今天的工作需要，请要求用户连接）。

### 2) 处理昨天的突出问题
- 今天有后续跟进吗？ Draft them.
- 有任何线索在舞台上停留太久吗？记下它们并建议下一步行动。
- 自上次会议以来收到任何回复吗？处理它们。

### 3) 研究新线索（如果管道需要填充）
- 选择 1-2 个研究领域（按角色、行业或用例）。
- 使用 Composio 搜索网络查找匹配的人员/团队。
- 对于有希望的潜在客户，请使用“获取 URL 内容”或浏览器工具进行深入研究。
- 在 `/leads/leads/` 中创建单独的引导文件。
- 添加到第 1 阶段的管道（已发现）。

### 4) 推进现有销售线索
- 对于已研究的潜在客户：根据标准对其进行资格鉴定。转到第 3 阶段或记下原因。
- 对于合格的潜在客户：起草第一次外展活动。如果 Gmail 已连接，请主动发送。
- 对于已联系的潜在客户：检查跟进是否到期。 Draft if so.
- 对于培养潜在客户：建议下一个增值项目（案例研究、特色亮点、直接邀请）。

### 5) 更新每日看板
- 将今天的会议摘要写入 `/leads/daily-board.md`。
- 更新管道阶段计数。
- 设置明天的优先事项。
- Mark todos as done.

### 6) REPORT TO USER
总结：今天做了什么、管道运行状况（每个阶段的计数）、前 3 个优先线索以及明天排队的内容。保持简洁但完整。

## 研究方法

### 寻找潜在客户（Composio 搜索 Web）

Search by segment.示例：
- `"technical writing" team lead "documentation" site:linkedin.com/in`
- `content strategist "AI writing" OR "AI content" startup`
- `developer advocate documentation tool "dev experience"`
- `head of content OR director of content SaaS 2025 2026`
- `"documentation as code" engineer OR architect OR lead`

始终使用新近度和角色限定符进行搜索。查看真实人物的引文，而不是通用列表。

### 深入研究（获取 URL 内容/浏览器工具）

对于有前途的线索，研究他们的：
- **当前角色和公司**：他们做什么？ Team size? Public projects?
- **痛点**：他们是否淹没在文档中？ Migrating tools? Scaling content?
- **当前堆栈**：他们提到了哪些工具？ Notion、Confluence、Google Docs、GitBook？
- **公共内容**：展示他们想法的博客文章、演讲、推文、GitHub 存储库。
- **挂钩**：找到与 WordPilot 价值的一种具体的、真正的联系。

### 资格标准

每项得分领先 1-5（总体目标是 3+）：
- **相关性**：他们的工作与写作、文档、内容或开发人员工具有交叉吗？
- **权威**：他们对工具有决策权或影响力吗？
- **影响力**：他们有观众、团队或公众形象吗？
- **时机**：是否有迹象表明他们正在寻找新的东西？ （工作变动、工具迁移、缩放痛苦）
- **Fit**：WordPilot 真的会帮助他们吗？不要强迫它。

## Outreach Principles

### Voice & Tone
- 专业、热情、好奇——从不咄咄逼人。
- 以您对他们的工作的注意到为主导。
- 将 WordPilot 定位为“我认为您可能会感兴趣的东西”，而不是“您需要购买的东西”。
- Respect their time.短信。 Clear value. Easy to ignore.

### 首次联系模板（改编，不要复制粘贴）

```
Subject: Your [specific work / post / talk] on [topic]

Hi [Name],

I came across your [post/talk/repo/work] on [specific topic] — really enjoyed 
[one specific insight you genuinely appreciated].

I work on WordPilot, an AI workspace for writing and documentation. Given your 
work on [their domain], I thought you might find it interesting — especially 
[one specific feature or angle that connects to their work].

No pitch — just wanted to share in case it's useful. Happy to give you early 
access if you'd like to try it.

Best,
[Your name]
```

### Follow-Up Principles
- 等待 5-7 天后再进行跟进。
- 每次都会增加新的价值——功能更新、案例研究、相关文章。
- 永远不要“只是检查”或“撞到这个”。
- 3 条未回复消息后，进入休眠状态。 2-3 个月内以新的背景重新访问。

## Daily Board Format

`/leads/daily-board.md`是系统的核心。每天都有自己的部分：

```markdown
# Daily Lead Board

## YYYY-MM-DD (Today)

### Today's Focus
- Priority 1
- Priority 2
- Priority 3

### Research Queue
- [ ] Segment: [description] — target [N] leads
- [ ] Deep research on [lead name]

### Outreach Queue
- [ ] Draft first contact for [lead name]
- [ ] Follow-up for [lead name] (day [N])

### Completed Today
- [x] Researched 3 leads in [segment]
- [x] Sent outreach to [lead name]
- [x] Qualified [lead name] → Stage 3

### Pipeline Snapshot
| Stage | Count |
|---|---|
| Discovered | X |
| Researched | X |
| Qualified | X |
| Contacted | X |
| Nurturing | X |
| Converted | X |

### Tomorrow's Priority
- [ ] Item 1
- [ ] Item 2

### Notes
Any observations, blockers, or strategy adjustments.
```

## Pipeline Format

`/leads/pipeline.md` 是主列表。每当线索改变阶段时就更新它。

```markdown
# Lead Pipeline

Last updated: YYYY-MM-DD

## Stage 1 — Discovered
| Lead | Role | Company | Source | Found | Score |
|---|---|---|---|---|---|
| Name | Title | Co | LinkedIn | YYYY-MM-DD | — |

## Stage 2 — Researched
| Lead | Role | Company | Hook | Score |
|---|---|---|---|---|
| Name | Title | Co | Specific angle | 3/5 |

## Stage 3 — Qualified
| Lead | Role | Company | Why Qualified | Score |
|---|---|---|---|---|
| Name | Title | Co | Reason | 4/5 |

## Stage 4 — Contacted
| Lead | Role | Company | Contacted On | Channel | Response? |
|---|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Email | Pending |

## Stage 5 — Nurturing
| Lead | Role | Company | Last Contact | Next Step |
|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Send case study |

## Stage 6 — Converted
| Lead | Role | Company | Converted On | Notes |
|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Signed up |
```

## 个人潜在客户文件格式

每个潜在客户都会获得一个文件：`/leads/leads/firstname-lastname.md`

```markdown
# [Full Name]

- **Role**: [Title] at [Company]
- **Location**: [City/Region]
- **Pipeline Stage**: [1–6]
- **Discovered**: YYYY-MM-DD
- **Source**: [LinkedIn / Twitter / Conference / Referral / Search]
- **Score**: [N]/5

## Context
[2–3 sentences about who they are and what they do]

## Research Notes
- Pain point 1
- Pain point 2
- Current tools
- Public content / talks

## Hook
[The specific, genuine connection to WordPilot]

## Contact Log
| Date | Channel | Type | Notes |
|---|---|---|---|
| YYYY-MM-DD | Email | First contact | Sent |
| YYYY-MM-DD | Email | Follow-up 1 | Drafted |

## Notes
[Any other observations]
```

## 按角色划分的研究方法

按角色定制搜索和推广。有关详细的剧本，请参阅 `/leads/research-methods.md`。快速参考：

|角色| Where to Find | What to Lead With |
|---|---|---|
| **Technical Writer** |编写 Docs、LinkedIn、GitHub 文档存储库 | WordPilot 的 MDX 块、图表支持、版本控制 |
| **Content Strategist** |内容营销社区、Twitter/X、Medium |人工智能辅助绘图、内容管道、团队工作空间 |
| **Developer Advocate** | DevRel 社区、会议演讲、YouTube |文档生成、GitHub 集成、API 文档 |
| **工程经理** |工程博客、HN、LinkedIn |文档工作流程、团队入职、知识管理 |
| **创始人/独立黑客** |产品搜寻、独立黑客、Twitter/X |一体化写作工作区，速度更快，传送内容更快 |
| **Technical PM** | LinkedIn、产品社区、Medium |规范到文档管道、PRD、跨职能文档 |

## 工具参考

### Composio 搜索网络（初步研究）
```
COMPOSIO_SEARCH_WEB with query strings targeting specific personas and segments.
Review response.data.citations for real people/companies.
```

### Composio 获取 URL 内容（深入研究）
```
COMPOSIO_SEARCH_FETCH_URL_CONTENT on specific About/Team/Blog pages.
Extract context, not just contact info.
```

### 浏览器工具（适用于复杂站点）
```
BROWSER_TOOL_CREATE_TASK for LinkedIn profiles, dynamic pages, or sites 
that block simple fetches. Use WatchTask to poll results.
```

### Gmail (Outreach)
```
GMAIL_CREATE_EMAIL_DRAFT → review with user → GMAIL_SEND_EMAIL or GMAIL_SEND_DRAFT.
Always draft first, never auto-send without user review.
```

### Google 表格/概念（外部 CRM 同步）
```
GOOGLESHEETS_UPSERT_ROWS for spreadsheet-based CRM.
NOTION_UPSERT_ROW_DATABASE for Notion-based tracking.
Sync pipeline data when these are connected.
```

## 反模式（不做）

- **切勿在未经用户审核的情况下自动发送电子邮件。** 起草、展示、获得批准。
- **Never scrape personal emails from unauthorized sources.** Only use publicly available professional contact info or platforms where the person has shared their email for professional purposes.
- **切勿发送通用的爆炸消息。** 每次外展活动都必须参考具体的研究。
- **切勿过度研究某一线索。** 每个线索最多 15-20 分钟进行深入研究。继续前行。
- **永远不要将每日面板留空。** 每个会话都会产生更新 - 即使它是“今天没有新的线索，现有高级 2”。
- **切勿强行安装引线。** 如果 WordPilot 对某人来说并不真正有用，请记下它并将其移出管道。
- **切勿跟踪或过度接触。** 最多 3 条未回复的消息，然后进入休眠状态。

## 质量标准

- 每个潜在客户文件都有一个真正的钩子——而不仅仅是“他们写东西”。
- 管道计数准确并在同一会话中更新。
- 外展草稿听起来就像是人写的——专门为那个人写的。
- 写有每日看板，以便用户可以在 60 秒内扫描它。
- 研究被记录下来，而不仅仅是被记住。
- 如果 Gmail/Sheets/Notion 未连接，请说出来 — 并且在没有它们的情况下仍尽一切可能。

## 入门（第一节）

当第一次调用该技能并且还没有 `/leads/` 文件夹时：

1. 在`/leads/`下创建完整的工作区结构。
2. 将今天的日期写入首字母 `/leads/daily-board.md`。
3. 用空的阶段表写入初始 `/leads/pipeline.md`。
4. 编写 `/leads/research-methods.md` 以及详细的角色剧本。
5. 写出 `/leads/templates.md` 和外展模式。
6. 询问用户：“我应该首先研究什么细分或角色？” — then begin.

文件：研究方法.md
# 按角色划分的研究方法

针对每个角色定制搜索、研究和推广。将此作为一本活生生的剧本——根据有效的内容进行更新。

---

## Technical Writer

### Where to Find
- **编写文档**社区（论坛、Slack、会议）
- LinkedIn: `"technical writer" OR "documentation engineer" team lead OR manager`
- GitHub: contributors to major documentation repos
- Twitter/X: #TechComm #WriteTheDocs #documentation

### What to Research
- 他们的文档堆栈（静态站点生成器、文档即代码工具）
- 痛点：版本控制、审核工作流程、协作瓶颈
- 关于文档实践的公开演讲或博客文章

### What to Lead With
- WordPilot's MDX advanced blocks for rich documentation
- 支持图表的 Markdown 原生编辑（Mermaid / Kroki）
- 文档即代码工作流程的版本控制和 GitHub 集成
- “我注意到你关于 [主题] 的演讲 — WordPilot 处理 [特定痛点]”

### Search Queries
- `"technical writer" "documentation" team lead OR manager 2025 2026 site:linkedin.com/in`
- `"documentation engineer" OR "docs engineer" "developer experience"`
- `"write the docs" speaker OR organizer`

---

## 内容策略师/内容主管

### Where to Find
- LinkedIn: `"head of content" OR "director of content" OR "VP of content" SaaS`
- Content marketing communities (Superpath, Content Marketing Institute)
- Medium 和 Substack：内容策略出版物
- Twitter/X：#contentstrategy #contentmarketing

### What to Research
- 内容量和团队规模
- Current content tools (Google Docs, Notion, WordPress)
- 内容运营痛点（工作流程、审批、SEO、重新利用）
- 最近的活动或内容计划

### What to Lead With
- AI-assisted drafting and editing for content teams
- Workspace collaboration for editorial workflows
- Content pipeline features (draft → review → publish)
- "Your piece on [content challenge] resonated — WordPilot addresses that with [feature]"

### Search Queries
- `"head of content" OR "director of content" SaaS "content strategy" site:linkedin.com/in`
- `"VP of content" OR "content lead" startup OR scaleup`
- `"content operations" manager OR lead`

---

## 开发者倡导者/DevRel

### 哪里可以找到
- DevRel communities (DevRel Collective, DevRelX)
- Conference speaker lists (KubeCon, React Conf, Write the Docs)
- YouTube: developer tooling reviews and tutorials
- 领英：`"developer advocate" OR "developer relations"`

### What to Research
- Their content output (blog posts, talks, videos, tutorials)
- 他们目前推荐或使用的工具
- 创建开发者内容的痛点
- 社区参与方式和渠道

### 用什么来领导
- Documentation generation from code and GitHub repos
- Rich markdown capabilities for tutorials and guides
- Embedded diagrams and equations for technical content
- "Love your tutorial on [topic] — WordPilot's [feature] would streamline that workflow"

### 搜索查询
- `"developer advocate" OR "devrel" "documentation" OR "developer experience"`
- `"developer relations" engineer OR lead "content" OR "docs"`
- `devrel speaker "developer tools" OR "developer experience"`

---

## 工程经理/技术主管

### 哪里可以找到
- 领英：`"engineering manager" OR "engineering lead" documentation OR "knowledge management"`
- Engineering blogs (company blogs, Medium engineering publications)
- Hacker News and Reddit (r/ExperiencedDevs, r/engineering)
- Conference speaker lists (QCon, LeadDev, StrangeLoop)

### 研究什么
- 团队规模和结构
- 文档实践和痛点
- Onboarding processes and knowledge management challenges
- 技术堆栈和工具偏好

### 用什么来领导
- Documentation workflows that don't slow down engineering
- Knowledge management and team onboarding features
- GitHub integration for engineering-driven documentation
- "Your team's approach to [engineering practice] is interesting — WordPilot could help with [specific need]"

### 搜索查询
- `"engineering manager" OR "engineering lead" "documentation" OR "knowledge management" site:linkedin.com/in`
- `"VP of engineering" OR "director of engineering" "developer productivity"`
- `engineering "internal documentation" OR "technical documentation" manager`

---

## 创始人/独立黑客

### 哪里可以找到
- 产品搜寻：制造商和创始人
- 独立黑客社区
- Twitter/X：#buildinpublic #indiehacker
- 黑客新闻：显示 HN，发布帖子
- 领英：`"founder" OR "co-founder" content OR writing OR documentation`

### 研究什么
- 他们的产品和阶段
- 内容策略和数量
- 团队规模（单人？小团队？）
- 当前的写作和出版工作流程
- 公共路线图或挑战

### 用什么来领导
- 多合一写作工作区取代零散的工具
- Speed and simplicity for small teams
- AI features that accelerate content creation
- “在 [平台] 上跟踪您的构建之旅 — WordPilot 可能是您堆栈的有用编写工具”

### 搜索查询
- `"founder" OR "co-founder" "content" OR "writing" OR "documentation" SaaS site:linkedin.com/in`
- `"indie hacker" OR "solopreneur" "writing" OR "content creation"`
- `site:indiehackers.com "looking for" writing OR content tool`

---

## Technical Product Manager

### 哪里可以找到
- 领英：`"technical product manager" OR "product manager" documentation OR specs`
- Product management communities (Mind the Product, Product School)
- Medium: product management publications
- Conference speaker lists (Industry, ProductCon)

### 研究什么
- Product documentation practices
- PRD and spec writing workflows
- Cross-functional communication challenges
- Tools used for product documentation

### 用什么来领导
- Spec-to-documentation pipeline
- Rich markdown for PRDs and technical specs
- Collaboration between PM, engineering, and design
- “您的 [产品实践] 方法非常敏锐 — WordPilot 可以处理 [特定工作流程需求]”

### 搜索查询
- `"technical product manager" OR "product manager" "documentation" OR "specs" site:linkedin.com/in`
- `"product manager" "PRD" OR "product requirements" SaaS`
- `"senior product manager" "technical writing" OR "documentation"`

---

## Notes for All Personas

- **Always verify the person is active** — recent posts, talks, or job activity.
- **Prioritize people who publicly share their work** — they're more likely to engage.
- **Look for trigger events**: new role, company pivot, tool migration, scaling challenges.
- **根据角色的词汇调整外展语言** - 不要对工程经理使用“内容管道”。

文件：模板.md
# Outreach Templates & Patterns

Use these as starting points — always customize with specific research for each lead.切勿复制粘贴。

---

## 首次联系模板

### 对于技术作家
```
Subject: Your [talk/post] on [specific documentation topic]

Hi [Name],

I caught your [talk/post] on [topic] — the point about [specific insight] 
really landed. Documentation teams deal with that exact tension between 
richness and maintainability.

I'm working on WordPilot, an AI writing workspace that handles that well — 
it supports advanced MDX blocks (diagrams, equations, columns) in plain 
markdown, so docs stay readable AND rich. No lock-in, no proprietary format.

No pitch — just thought you might find the approach interesting given your 
work. Happy to share more if you're curious.

Best,
[Your name]
```

### 对于内容策略师
```
Subject: Your piece on [content challenge]

Hi [Name],

Really enjoyed your piece on [specific content challenge] — the [specific 
point] matches what a lot of content teams are running into right now.

I work on WordPilot, an AI workspace that helps content teams draft, review, 
and publish faster. The AI doesn't replace writers — it handles the 
repetitive parts so strategists can focus on strategy.

Would be happy to show you how it works if you're interested. No sales 
pressure — just thought it aligned with your thinking.

Best,
[Your name]
```

### 对于开发者倡导者
```
Subject: Your tutorial on [topic] — sharp work

Hi [Name],

Your tutorial on [topic] was excellent — particularly the [specific part]. 
Creating that kind of content at quality takes real time.

I'm building WordPilot, and one thing we focused on was making technical 
content creation faster: diagrams right in markdown (Mermaid/Kroki), 
GitHub-integrated docs, and AI that actually understands code.

Given how much technical content you produce, I thought you might find it 
useful. Happy to give you early access if you want to try it.

Cheers,
[Your name]
```

### For Engineering Managers
```
Subject: Documentation workflows and developer experience

Hi [Name],

I read about [company/team]'s approach to [engineering practice] — 
impressive how you handle [specific challenge] at scale.

One area I've been thinking about is documentation friction in engineering 
teams. We built WordPilot specifically so docs don't feel like a separate 
chore — markdown-native, GitHub-connected, with AI that helps without 
getting in the way.

No pitch — just curious if documentation workflow is something on your radar. 
Happy to share what we're building if relevant.

Best,
[Your name]
```

### 对于创始人/独立黑客
```
Subject: Writing tool you might find useful

Hi [Name],

Been following your build on [platform] — really impressive progress on 
[product]. The way you handle [specific thing] is smart.

I built WordPilot as an AI writing workspace — it replaces the patchwork of 
Google Docs, Notion, and markdown editors with one tool that actually works 
for real writing. Might be useful for your content, docs, or even product specs.

No pressure — just thought it might save you some tool-switching time. Happy 
to share access if you want to kick the tires.

Cheers,
[Your name]
```

### 对于技术产品经理
```
Subject: Your approach to [product practice]

Hi [Name],

Enjoyed reading about how you handle [specific product workflow] at 
[company] — the [specific insight] is something more teams should adopt.

I work on WordPilot, an AI writing workspace. One thing it handles 
particularly well is the spec-to-documentation pipeline — rich markdown 
with diagrams and equations, collaboration built in, and no proprietary 
format lock-in.

Thought it might be relevant given your focus on [their domain]. Happy to 
show you if you're interested.

Best,
[Your name]
```

---

## 后续模式

### Follow-Up 1 (5–7 days after first contact)
```
Subject: Re: Your [original topic]

Hi [Name],

Just following up on my previous note — I know inboxes get busy.

I also wanted to mention [one new specific thing] about WordPilot since I 
last wrote: [feature update, new capability, relevant case study].

No rush — just wanted to keep it on your radar in case it's useful.

Best,
[Your name]
```

### 随访 2（随访 1 后 5–7 天）
```
Subject: Quick thought on [their domain]

Hi [Name],

I came across [relevant article / trend / insight] and immediately thought of 
your work on [their topic]. [One sentence connecting the insight to them].

WordPilot handles this well — specifically [relevant feature]. I won't keep 
following up after this, but wanted to share the connection.

If it ever becomes relevant, my inbox is open.

Best,
[Your name]
```

### Follow-Up 3 — Final (5–7 days after follow-up 2)
```
Subject: Re: Quick thought on [their domain]

Hi [Name],

Last note from me — I'll leave you be after this.

If you ever want to explore WordPilot, the door's open. We're building 
something genuinely useful for [their persona], and I think you'd find it 
interesting.

No reply needed — just wanted to leave that on the table.

Best,
[Your name]
```

---

## DM / 社交外展（Twitter、LinkedIn）

### LinkedIn 连接注释
```
Hi [Name] — I came across your [work/talk/post] on [topic] and was really 
impressed by [specific insight]. I work on an AI writing tool that touches 
similar ground. Would love to connect.
```

### Twitter DM（如果已连接）
```
Hey [Name] — loved your [post/thread] on [topic]. Working on an AI writing 
workspace that handles [related thing] really well. Thought you might find 
it interesting: [link]. No pitch — just sharing.
```

---

## 响应处理

### If They Reply "Not interested"
```
Thanks for letting me know, [Name]. Totally understand — appreciate you 
taking the time to reply. All the best with [their work/company].
```

### 如果他们回复“告诉我更多”
Send a concise 3–4 sentence overview of WordPilot with one specific feature 
与他们的工作相关。以邀请尝试或安排一个结束 
快速演练。

### 如果他们回答“尝试一下”
Celebrate internally (move to Stage 5 — Nurturing).送去热烈的欢迎 
with a getting-started tip relevant to their use case.主动提出回答 
问题。

---

## Anti-Patterns (Never Do These)

- ❌ "Just following up!"没有新的价值
- ❌ "We're disrupting the [X] space" jargon
- ❌ 长电子邮件 — 保持在 150 个字以下
- ❌ HTML-heavy or image-heavy emails
- ❌ 在第一条消息中请求通话
- ❌“限时优惠”或紧急策略
- ❌ Name-dropping without permission
- ❌ Assuming their pain points without research
````

---

## English Original

### Title

Lead Generator & Tracker (WordPilot.pro)

### Description

Research-first, non-salesy lead generation for WordPilot.pro. Daily-cadence system with 6-stage conversion pipeline, persona-specific research methods, and professional outreach templates. Finds qualified leads through deep research, tracks every interaction, and converts through genuine connection — not mass blasting. Workspace-first tracking in /leads/.

### Prompt

````md
# Lead Generator & Tracker (WordPilot.pro)

Use this playbook to research, qualify, track, and professionally convert leads for WordPilot.pro — an AI-powered writing workspace. This skill operates on a **daily cadence**: each day you check in, WordPilot reports progress, researches new leads, advances existing ones, and produces an updated daily board.

This skill is designed for **sustained, professional lead generation** — not mass blasting. Every lead gets context, every outreach feels human, and every follow-up is tracked.

## Core Philosophy

1. **Research before reaching out.** Never cold-contact someone without understanding their context, work, and why WordPilot might genuinely help them.
2. **Value-first, never salesy.** Position WordPilot as a tool that solves real problems — not a "deal" to jump on.
3. **Slow is smooth.** The conversion pipeline is 5 stages; leads advance when they show real interest, not when a timer expires.
4. **Everything is tracked.** The `/leads/` workspace folder is the single source of truth.
5. **Daily accountability.** Every session produces a concrete update to the daily board.

## When to Apply

- User says "how's lead gen going?", "show me today's leads", "find new leads", "check the pipeline", or similar.
- User opens the workspace and the daily board needs updating.
- User asks to research a specific segment, industry, or persona.
- User wants to draft outreach to a specific lead or stage.
- User wants to review conversion metrics or pipeline health.

## Preconditions

- Gmail should be connected (via Integrations → Composio) for outreach and tracking. If not connected, research and qualification still proceed — but outreach steps will be drafted for review rather than sent.
- Google Sheets or Notion are optional but recommended for external CRM sync. If connected, leads can sync bidirectionally.
- Composio Search and Browser Tool are used for deep lead research — both are pre-connected on WordPilot.

## Conversion Pipeline (6 Stages)

Every lead moves through these stages. Movement between stages is deliberate, not automatic.

### Stage 1 — Discovered
Lead has been identified through research. Basic info captured: name, role, company, why they might need WordPilot. No outreach yet.

### Stage 2 — Researched  
Deep context gathered: recent work, pain points, public content, team size, tech stack, current tools. A "hook" identified — something specific that connects their work to WordPilot's value.

### Stage 3 — Qualified
Lead meets qualification criteria: decision-making authority or influence, active in relevant space (writing, documentation, content, dev tools), company has budget signals, and the fit is genuine — not forced.

### Stage 4 — Contacted
First outreach sent (email, social, or other channel). Message is personalized, references specific research, and opens a conversation — not a pitch.

### Stage 5 — Nurturing
Lead has responded or shown interest. In active conversation. Follow-ups are timely and value-adding. Goal: get them to try WordPilot.pro.

### Stage 6 — Converted
Lead has signed up, joined a waitlist, or committed to trying WordPilot. Hand-off complete. Track for referrals and case studies.

## Workspace Structure

All lead work lives under `/leads/`. Keep this structure clean and always up to date:

```
/leads/
├── daily-board.md          ← Today's todos, progress, and session log
├── pipeline.md             ← Full pipeline view: all leads by stage
├── research-methods.md     ← Research playbooks by persona/industry
├── templates.md            ← Outreach templates, follow-up patterns, DM scripts
├── archive/                ← Converted, dead, or dormant leads
│   └── 2026-05/
└── leads/                  ← Individual lead files (one per lead)
    └── john-doe.md
```

## Daily Cadence (The Loop)

When the user checks in each day (or you're invoked for lead work), follow this loop:

### 1) READ THE ROOM
- Read `/leads/daily-board.md` to understand yesterday's state and today's open items.
- Read `/leads/pipeline.md` to see current pipeline health.
- Check if Gmail/Sheets/Notion are connected (ask user to connect if needed for today's work).

### 2) PROCESS YESTERDAY'S OUTSTANDING
- Any follow-ups due today? Draft them.
- Any leads stuck in a stage too long? Note them and suggest next action.
- Any responses received since last session? Process them.

### 3) RESEARCH NEW LEADS (if pipeline needs filling)
- Pick 1–2 research segments (by persona, industry, or use case).
- Use Composio Search Web to find people/teams that match.
- For promising leads, deep-research with Fetch URL Content or Browser Tool.
- Create individual lead files in `/leads/leads/`.
- Add to pipeline at Stage 1 (Discovered).

### 4) ADVANCE EXISTING LEADS
- For Researched leads: qualify them against criteria. Move to Stage 3 or note why not.
- For Qualified leads: draft first outreach. If Gmail connected, offer to send.
- For Contacted leads: check if follow-up is due. Draft if so.
- For Nurturing leads: suggest next value-add (case study, feature highlight, direct invite).

### 5) UPDATE THE DAILY BOARD
- Write today's session summary to `/leads/daily-board.md`.
- Update pipeline stage counts.
- Set tomorrow's priority items.
- Mark todos as done.

### 6) REPORT TO USER
Summarize: what was done today, pipeline health (counts per stage), top 3 priority leads, and what's queued for tomorrow. Keep it concise but complete.

## Research Methodology

### Finding Leads (Composio Search Web)

Search by segment. Examples:
- `"technical writing" team lead "documentation" site:linkedin.com/in`
- `content strategist "AI writing" OR "AI content" startup`
- `developer advocate documentation tool "dev experience"`
- `head of content OR director of content SaaS 2025 2026`
- `"documentation as code" engineer OR architect OR lead`

Always search with recency and role qualifiers. Review citations for real people, not generic listicles.

### Deep Research (Fetch URL Content / Browser Tool)

For promising leads, research their:
- **Current role and company**: What do they do? Team size? Public projects?
- **Pain points**: Are they drowning in docs? Migrating tools? Scaling content?
- **Current stack**: What tools do they mention? Notion, Confluence, Google Docs, GitBook?
- **Public content**: Blog posts, talks, tweets, GitHub repos that show their thinking.
- **Hook**: Find one specific, genuine connection to WordPilot's value.

### Qualification Criteria

Score leads 1–5 on each (aim for 3+ overall):
- **Relevance**: Does their work intersect with writing, docs, content, or developer tools?
- **Authority**: Do they have decision power or influence over tooling?
- **Reach**: Do they have an audience, team, or public presence?
- **Timing**: Is there a signal they're looking for something new? (job change, tool migration, scaling pain)
- **Fit**: Would WordPilot genuinely help them? Don't force it.

## Outreach Principles

### Voice & Tone
- Professional, warm, curious — never pitchy.
- Lead with what you noticed about THEIR work.
- Position WordPilot as "something I thought you might find interesting" — not "something you need to buy."
- Respect their time. Short messages. Clear value. Easy to ignore.

### First Contact Template (Adapt, Don't Copy-Paste)

```
Subject: Your [specific work / post / talk] on [topic]

Hi [Name],

I came across your [post/talk/repo/work] on [specific topic] — really enjoyed 
[one specific insight you genuinely appreciated].

I work on WordPilot, an AI workspace for writing and documentation. Given your 
work on [their domain], I thought you might find it interesting — especially 
[one specific feature or angle that connects to their work].

No pitch — just wanted to share in case it's useful. Happy to give you early 
access if you'd like to try it.

Best,
[Your name]
```

### Follow-Up Principles
- Wait 5–7 days before following up.
- Add new value each time — a feature update, a case study, a relevant article.
- Never "just checking in" or "bumping this."
- After 3 unanswered messages, move to dormant. Revisit in 2–3 months with fresh context.

## Daily Board Format

`/leads/daily-board.md` is the heart of the system. Each day gets its own section:

```markdown
# Daily Lead Board

## YYYY-MM-DD (Today)

### Today's Focus
- Priority 1
- Priority 2
- Priority 3

### Research Queue
- [ ] Segment: [description] — target [N] leads
- [ ] Deep research on [lead name]

### Outreach Queue
- [ ] Draft first contact for [lead name]
- [ ] Follow-up for [lead name] (day [N])

### Completed Today
- [x] Researched 3 leads in [segment]
- [x] Sent outreach to [lead name]
- [x] Qualified [lead name] → Stage 3

### Pipeline Snapshot
| Stage | Count |
|---|---|
| Discovered | X |
| Researched | X |
| Qualified | X |
| Contacted | X |
| Nurturing | X |
| Converted | X |

### Tomorrow's Priority
- [ ] Item 1
- [ ] Item 2

### Notes
Any observations, blockers, or strategy adjustments.
```

## Pipeline Format

`/leads/pipeline.md` is the master list. Update it whenever a lead changes stage.

```markdown
# Lead Pipeline

Last updated: YYYY-MM-DD

## Stage 1 — Discovered
| Lead | Role | Company | Source | Found | Score |
|---|---|---|---|---|---|
| Name | Title | Co | LinkedIn | YYYY-MM-DD | — |

## Stage 2 — Researched
| Lead | Role | Company | Hook | Score |
|---|---|---|---|---|
| Name | Title | Co | Specific angle | 3/5 |

## Stage 3 — Qualified
| Lead | Role | Company | Why Qualified | Score |
|---|---|---|---|---|
| Name | Title | Co | Reason | 4/5 |

## Stage 4 — Contacted
| Lead | Role | Company | Contacted On | Channel | Response? |
|---|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Email | Pending |

## Stage 5 — Nurturing
| Lead | Role | Company | Last Contact | Next Step |
|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Send case study |

## Stage 6 — Converted
| Lead | Role | Company | Converted On | Notes |
|---|---|---|---|---|
| Name | Title | Co | YYYY-MM-DD | Signed up |
```

## Individual Lead File Format

Each lead gets a file: `/leads/leads/firstname-lastname.md`

```markdown
# [Full Name]

- **Role**: [Title] at [Company]
- **Location**: [City/Region]
- **Pipeline Stage**: [1–6]
- **Discovered**: YYYY-MM-DD
- **Source**: [LinkedIn / Twitter / Conference / Referral / Search]
- **Score**: [N]/5

## Context
[2–3 sentences about who they are and what they do]

## Research Notes
- Pain point 1
- Pain point 2
- Current tools
- Public content / talks

## Hook
[The specific, genuine connection to WordPilot]

## Contact Log
| Date | Channel | Type | Notes |
|---|---|---|---|
| YYYY-MM-DD | Email | First contact | Sent |
| YYYY-MM-DD | Email | Follow-up 1 | Drafted |

## Notes
[Any other observations]
```

## Research Methods by Persona

Tailor search and outreach by persona. See `/leads/research-methods.md` for detailed playbooks. Quick reference:

| Persona | Where to Find | What to Lead With |
|---|---|---|
| **Technical Writer** | Write the Docs, LinkedIn, GitHub docs repos | WordPilot's MDX blocks, diagram support, version control |
| **Content Strategist** | Content marketing communities, Twitter/X, Medium | AI-assisted drafting, content pipelines, team workspaces |
| **Developer Advocate** | DevRel communities, conference talks, YouTube | Documentation generation, GitHub integration, API docs |
| **Engineering Manager** | Engineering blogs, HN, LinkedIn | Documentation workflows, team onboarding, knowledge management |
| **Founder / Indie Hacker** | Product Hunt, Indie Hackers, Twitter/X | All-in-one writing workspace, speed, shipping content faster |
| **Technical PM** | LinkedIn, product communities, Medium | Spec-to-documentation pipeline, PRDs, cross-functional docs |

## Tools Reference

### Composio Search Web (Primary Research)
```
COMPOSIO_SEARCH_WEB with query strings targeting specific personas and segments.
Review response.data.citations for real people/companies.
```

### Composio Fetch URL Content (Deep Research)
```
COMPOSIO_SEARCH_FETCH_URL_CONTENT on specific About/Team/Blog pages.
Extract context, not just contact info.
```

### Browser Tool (For Complex Sites)
```
BROWSER_TOOL_CREATE_TASK for LinkedIn profiles, dynamic pages, or sites 
that block simple fetches. Use WatchTask to poll results.
```

### Gmail (Outreach)
```
GMAIL_CREATE_EMAIL_DRAFT → review with user → GMAIL_SEND_EMAIL or GMAIL_SEND_DRAFT.
Always draft first, never auto-send without user review.
```

### Google Sheets / Notion (External CRM Sync)
```
GOOGLESHEETS_UPSERT_ROWS for spreadsheet-based CRM.
NOTION_UPSERT_ROW_DATABASE for Notion-based tracking.
Sync pipeline data when these are connected.
```

## Anti-Patterns (Do Not Do)

- **Never auto-send emails without user review.** Draft, show, get approval.
- **Never scrape personal emails from unauthorized sources.** Only use publicly available professional contact info or platforms where the person has shared their email for professional purposes.
- **Never send generic blast messages.** Every outreach must reference specific research.
- **Never over-research one lead.** 15–20 minutes max per lead for deep research. Move on.
- **Never leave the daily board empty.** Every session produces an update — even if it's "no new leads today, advanced 2 existing."
- **Never force-fit a lead.** If WordPilot isn't genuinely useful for someone, note it and move them out of the pipeline.
- **Never stalk or over-contact.** Max 3 unanswered messages, then move to dormant.

## Quality Standards

- Every lead file has a real hook — not just "they write things."
- Pipeline counts are accurate and updated same-session.
- Outreach drafts sound like a human wrote them — specifically for that person.
- Daily board is written so the user can scan it in 60 seconds.
- Research is documented, not just remembered.
- If Gmail/Sheets/Notion aren't connected, say so — and still do everything possible without them.

## Getting Started (First Session)

When this skill is first invoked and there's no `/leads/` folder yet:

1. Create the full workspace structure under `/leads/`.
2. Write the initial `/leads/daily-board.md` with today's date.
3. Write the initial `/leads/pipeline.md` with empty stage tables.
4. Write `/leads/research-methods.md` with detailed persona playbooks.
5. Write `/leads/templates.md` with outreach patterns.
6. Ask the user: "What segment or persona should I research first?" — then begin.

FILE:research-methods.md
# Research Methods by Persona

Tailor search, research, and outreach to each persona. Use this as a living playbook — update with what works.

---

## Technical Writer

### Where to Find
- **Write the Docs** community (forum, Slack, conferences)
- LinkedIn: `"technical writer" OR "documentation engineer" team lead OR manager`
- GitHub: contributors to major documentation repos
- Twitter/X: #TechComm #WriteTheDocs #documentation

### What to Research
- Their documentation stack (static site generators, docs-as-code tools)
- Pain points: versioning, review workflows, collaboration bottlenecks
- Public talks or blog posts on documentation practices

### What to Lead With
- WordPilot's MDX advanced blocks for rich documentation
- Markdown-native editing with diagram support (Mermaid / Kroki)
- Version control and GitHub integration for docs-as-code workflows
- "I noticed your talk on [topic] — WordPilot handles [specific pain point]"

### Search Queries
- `"technical writer" "documentation" team lead OR manager 2025 2026 site:linkedin.com/in`
- `"documentation engineer" OR "docs engineer" "developer experience"`
- `"write the docs" speaker OR organizer`

---

## Content Strategist / Head of Content

### Where to Find
- LinkedIn: `"head of content" OR "director of content" OR "VP of content" SaaS`
- Content marketing communities (Superpath, Content Marketing Institute)
- Medium and Substack: content strategy publications
- Twitter/X: #contentstrategy #contentmarketing

### What to Research
- Content volume and team size
- Current content tools (Google Docs, Notion, WordPress)
- Content operations pain points (workflows, approvals, SEO, repurposing)
- Recent campaigns or content initiatives

### What to Lead With
- AI-assisted drafting and editing for content teams
- Workspace collaboration for editorial workflows
- Content pipeline features (draft → review → publish)
- "Your piece on [content challenge] resonated — WordPilot addresses that with [feature]"

### Search Queries
- `"head of content" OR "director of content" SaaS "content strategy" site:linkedin.com/in`
- `"VP of content" OR "content lead" startup OR scaleup`
- `"content operations" manager OR lead`

---

## Developer Advocate / DevRel

### Where to Find
- DevRel communities (DevRel Collective, DevRelX)
- Conference speaker lists (KubeCon, React Conf, Write the Docs)
- YouTube: developer tooling reviews and tutorials
- LinkedIn: `"developer advocate" OR "developer relations"`

### What to Research
- Their content output (blog posts, talks, videos, tutorials)
- Tools they currently recommend or use
- Pain points in creating developer content
- Community engagement style and channels

### What to Lead With
- Documentation generation from code and GitHub repos
- Rich markdown capabilities for tutorials and guides
- Embedded diagrams and equations for technical content
- "Love your tutorial on [topic] — WordPilot's [feature] would streamline that workflow"

### Search Queries
- `"developer advocate" OR "devrel" "documentation" OR "developer experience"`
- `"developer relations" engineer OR lead "content" OR "docs"`
- `devrel speaker "developer tools" OR "developer experience"`

---

## Engineering Manager / Tech Lead

### Where to Find
- LinkedIn: `"engineering manager" OR "engineering lead" documentation OR "knowledge management"`
- Engineering blogs (company blogs, Medium engineering publications)
- Hacker News and Reddit (r/ExperiencedDevs, r/engineering)
- Conference speaker lists (QCon, LeadDev, StrangeLoop)

### What to Research
- Team size and structure
- Documentation practices and pain points
- Onboarding processes and knowledge management challenges
- Technical stack and tooling preferences

### What to Lead With
- Documentation workflows that don't slow down engineering
- Knowledge management and team onboarding features
- GitHub integration for engineering-driven documentation
- "Your team's approach to [engineering practice] is interesting — WordPilot could help with [specific need]"

### Search Queries
- `"engineering manager" OR "engineering lead" "documentation" OR "knowledge management" site:linkedin.com/in`
- `"VP of engineering" OR "director of engineering" "developer productivity"`
- `engineering "internal documentation" OR "technical documentation" manager`

---

## Founder / Indie Hacker

### Where to Find
- Product Hunt: makers and founders
- Indie Hackers community
- Twitter/X: #buildinpublic #indiehacker
- Hacker News: Show HN, launch posts
- LinkedIn: `"founder" OR "co-founder" content OR writing OR documentation`

### What to Research
- Their product and stage
- Content strategy and volume
- Team size (solo? small team?)
- Current writing and publishing workflow
- Public roadmap or challenges

### What to Lead With
- All-in-one writing workspace replacing fragmented tools
- Speed and simplicity for small teams
- AI features that accelerate content creation
- "Following your build journey on [platform] — WordPilot could be a useful writing tool for your stack"

### Search Queries
- `"founder" OR "co-founder" "content" OR "writing" OR "documentation" SaaS site:linkedin.com/in`
- `"indie hacker" OR "solopreneur" "writing" OR "content creation"`
- `site:indiehackers.com "looking for" writing OR content tool`

---

## Technical Product Manager

### Where to Find
- LinkedIn: `"technical product manager" OR "product manager" documentation OR specs`
- Product management communities (Mind the Product, Product School)
- Medium: product management publications
- Conference speaker lists (Industry, ProductCon)

### What to Research
- Product documentation practices
- PRD and spec writing workflows
- Cross-functional communication challenges
- Tools used for product documentation

### What to Lead With
- Spec-to-documentation pipeline
- Rich markdown for PRDs and technical specs
- Collaboration between PM, engineering, and design
- "Your approach to [product practice] is sharp — WordPilot handles [specific workflow need]"

### Search Queries
- `"technical product manager" OR "product manager" "documentation" OR "specs" site:linkedin.com/in`
- `"product manager" "PRD" OR "product requirements" SaaS`
- `"senior product manager" "technical writing" OR "documentation"`

---

## Notes for All Personas

- **Always verify the person is active** — recent posts, talks, or job activity.
- **Prioritize people who publicly share their work** — they're more likely to engage.
- **Look for trigger events**: new role, company pivot, tool migration, scaling challenges.
- **Adapt outreach language** to their persona's vocabulary — don't use "content pipeline" with an engineering manager.

FILE:templates.md
# Outreach Templates & Patterns

Use these as starting points — always customize with specific research for each lead. Never copy-paste.

---

## First Contact Templates

### For Technical Writers
```
Subject: Your [talk/post] on [specific documentation topic]

Hi [Name],

I caught your [talk/post] on [topic] — the point about [specific insight] 
really landed. Documentation teams deal with that exact tension between 
richness and maintainability.

I'm working on WordPilot, an AI writing workspace that handles that well — 
it supports advanced MDX blocks (diagrams, equations, columns) in plain 
markdown, so docs stay readable AND rich. No lock-in, no proprietary format.

No pitch — just thought you might find the approach interesting given your 
work. Happy to share more if you're curious.

Best,
[Your name]
```

### For Content Strategists
```
Subject: Your piece on [content challenge]

Hi [Name],

Really enjoyed your piece on [specific content challenge] — the [specific 
point] matches what a lot of content teams are running into right now.

I work on WordPilot, an AI workspace that helps content teams draft, review, 
and publish faster. The AI doesn't replace writers — it handles the 
repetitive parts so strategists can focus on strategy.

Would be happy to show you how it works if you're interested. No sales 
pressure — just thought it aligned with your thinking.

Best,
[Your name]
```

### For Developer Advocates
```
Subject: Your tutorial on [topic] — sharp work

Hi [Name],

Your tutorial on [topic] was excellent — particularly the [specific part]. 
Creating that kind of content at quality takes real time.

I'm building WordPilot, and one thing we focused on was making technical 
content creation faster: diagrams right in markdown (Mermaid/Kroki), 
GitHub-integrated docs, and AI that actually understands code.

Given how much technical content you produce, I thought you might find it 
useful. Happy to give you early access if you want to try it.

Cheers,
[Your name]
```

### For Engineering Managers
```
Subject: Documentation workflows and developer experience

Hi [Name],

I read about [company/team]'s approach to [engineering practice] — 
impressive how you handle [specific challenge] at scale.

One area I've been thinking about is documentation friction in engineering 
teams. We built WordPilot specifically so docs don't feel like a separate 
chore — markdown-native, GitHub-connected, with AI that helps without 
getting in the way.

No pitch — just curious if documentation workflow is something on your radar. 
Happy to share what we're building if relevant.

Best,
[Your name]
```

### For Founders / Indie Hackers
```
Subject: Writing tool you might find useful

Hi [Name],

Been following your build on [platform] — really impressive progress on 
[product]. The way you handle [specific thing] is smart.

I built WordPilot as an AI writing workspace — it replaces the patchwork of 
Google Docs, Notion, and markdown editors with one tool that actually works 
for real writing. Might be useful for your content, docs, or even product specs.

No pressure — just thought it might save you some tool-switching time. Happy 
to share access if you want to kick the tires.

Cheers,
[Your name]
```

### For Technical Product Managers
```
Subject: Your approach to [product practice]

Hi [Name],

Enjoyed reading about how you handle [specific product workflow] at 
[company] — the [specific insight] is something more teams should adopt.

I work on WordPilot, an AI writing workspace. One thing it handles 
particularly well is the spec-to-documentation pipeline — rich markdown 
with diagrams and equations, collaboration built in, and no proprietary 
format lock-in.

Thought it might be relevant given your focus on [their domain]. Happy to 
show you if you're interested.

Best,
[Your name]
```

---

## Follow-Up Patterns

### Follow-Up 1 (5–7 days after first contact)
```
Subject: Re: Your [original topic]

Hi [Name],

Just following up on my previous note — I know inboxes get busy.

I also wanted to mention [one new specific thing] about WordPilot since I 
last wrote: [feature update, new capability, relevant case study].

No rush — just wanted to keep it on your radar in case it's useful.

Best,
[Your name]
```

### Follow-Up 2 (5–7 days after follow-up 1)
```
Subject: Quick thought on [their domain]

Hi [Name],

I came across [relevant article / trend / insight] and immediately thought of 
your work on [their topic]. [One sentence connecting the insight to them].

WordPilot handles this well — specifically [relevant feature]. I won't keep 
following up after this, but wanted to share the connection.

If it ever becomes relevant, my inbox is open.

Best,
[Your name]
```

### Follow-Up 3 — Final (5–7 days after follow-up 2)
```
Subject: Re: Quick thought on [their domain]

Hi [Name],

Last note from me — I'll leave you be after this.

If you ever want to explore WordPilot, the door's open. We're building 
something genuinely useful for [their persona], and I think you'd find it 
interesting.

No reply needed — just wanted to leave that on the table.

Best,
[Your name]
```

---

## DM / Social Outreach (Twitter, LinkedIn)

### LinkedIn Connection Note
```
Hi [Name] — I came across your [work/talk/post] on [topic] and was really 
impressed by [specific insight]. I work on an AI writing tool that touches 
similar ground. Would love to connect.
```

### Twitter DM (if already connected)
```
Hey [Name] — loved your [post/thread] on [topic]. Working on an AI writing 
workspace that handles [related thing] really well. Thought you might find 
it interesting: [link]. No pitch — just sharing.
```

---

## Response Handling

### If They Reply "Not interested"
```
Thanks for letting me know, [Name]. Totally understand — appreciate you 
taking the time to reply. All the best with [their work/company].
```

### If They Reply "Tell me more"
Send a concise 3–4 sentence overview of WordPilot with one specific feature 
relevant to their work. End with an invitation to try it or schedule a 
quick walkthrough.

### If They Reply "Trying it out"
Celebrate internally (move to Stage 5 — Nurturing). Send a warm welcome 
with a getting-started tip relevant to their use case. Offer to answer 
questions.

---

## Anti-Patterns (Never Do These)

- ❌ "Just following up!" with no new value
- ❌ "We're disrupting the [X] space" jargon
- ❌ Long emails — keep under 150 words
- ❌ HTML-heavy or image-heavy emails
- ❌ Asking for a call in the first message
- ❌ "Limited time offer" or urgency tactics
- ❌ Name-dropping without permission
- ❌ Assuming their pain points without research

````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [lead-generator-tracker-wordpilotpro](https://prompts.chat/prompts/lead-generator-tracker-wordpilotpro) |
| Category | Uncategorized (`uncategorized`) |
| Type | `SKILL` |
| Tags | wordpilot, pipeline, crm, Sales, outreach, lead-generation |
| Contributors | kyakhloufi |
| Updated At | 2026-05-07T00:54:33.047Z |
