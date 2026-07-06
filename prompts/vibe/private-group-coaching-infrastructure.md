---
id: "cmmxuiara0005js04bq81ht9d"
slug: "private-group-coaching-infrastructure"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/private-group-coaching-infrastructure"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "ea09b40a5ebf5dae4a02ed4ab7071d02667ece3d0279b20312517a1b5e91e186"
upstream_updated_at: "2026-03-19T19:10:47.542Z"
---
# 私人团体教练基础设施

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[private-group-coaching-infrastructure](https://prompts.chat/prompts/private-group-coaching-infrastructure)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

小组教练和教育工作者为他们所管理的每个小组反复重建相同的基础设施——日程安排、作业提交、同伴反馈、进度跟踪。出售操作系统来运行高质量的团体项目是一种 B2B 归属感游戏，教练的学生是最终受益者。如果它给现有工作流程增加了摩擦，教练就会停止使用它。必须替换现有工具（Notion + 电子邮件 + Zoom 链接），而不是添加到其中。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
建立一个名为“Cohort OS”的团体辅导和队列管理平台——用于运行结构化团体计划的操作系统。

核心特点：
- 计划构建器：教练设置计划名称、会话数、节奏（每周/每两周）、最大参与者、价格和开始日期。每个课程都有一个标题、一个课前作业和一个课后反思提示
- 参与者门户：每个注册的参与者都可以在一个仪表板中看到他们的计划时间表、即将举行的会议、提交的作业和同行反思
- 作业提交：参与者在每次会议前提交书面或基于链接的作业。教练可以在一个视图中查看所有提交的内容，可以为每个提交留下书面反馈
- 同伴反馈轮次：每次会议结束后，系统都会提示参与者向另一位参与者提供一份结构化反馈（自动轮换，以便每个人平等地给予和接受）
- 进度跟踪器：教练仪表板显示每个参与者的作业完成率、出勤率和简单的参与度分数
- 证书生成：项目完成时，自动生成包含参与者姓名、项目名称、教练姓名和完成日期的 PDF 证书

Stack：React、Supabase、Stripe Connect 用于教练支付，Resend 用于会话提醒和反馈提示。干净、专业的设计——教练优先的用户体验。
```

---

## English Original

### Title

Private Group Coaching Infrastructure

### Description

Group coaches and educators repeatedly rebuild the same infrastructure — scheduling, homework submission, peer feedback, progress tracking — for every cohort they run. Selling the operating system for running a high-quality group program is a B2B belonging play where the coach's students are the end beneficiaries. Coaches stop using it if it adds friction to their existing workflow. Must replace existing tools (Notion + email + Zoom links), not add to them.

### Prompt

```md
Build a group coaching and cohort management platform called "Cohort OS" — the operating system for running structured group programs.

Core features:
- Program builder: coach sets program name, session count, cadence (weekly/bi-weekly), max participants, price, and start date. Each session has a title, a pre-work assignment, and a post-session reflection prompt
- Participant portal: each enrolled participant sees their program timeline, upcoming sessions, submitted assignments, and peer reflections in one dashboard
- Assignment submission: participants submit written or link-based assignments before each session. Coach sees all submissions in one view, can leave written feedback per submission
- Peer feedback rounds: after each session, participants are prompted to give one piece of structured feedback to one other participant (rotates automatically so everyone gives and receives equally)
- Progress tracker: coach dashboard showing assignment completion rate per participant, attendance, and a simple engagement score
- Certificate generation: at program completion, auto-generates a PDF certificate with participant name, program name, coach name, and completion date

Stack: React, Supabase, Stripe Connect for coach payouts, Resend for session reminders and feedback prompts. Clean, professional design — coach-first UX.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [private-group-coaching-infrastructure](https://prompts.chat/prompts/private-group-coaching-infrastructure) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | mmanisaligil |
| Updated At | 2026-03-19T19:10:47.542Z |
