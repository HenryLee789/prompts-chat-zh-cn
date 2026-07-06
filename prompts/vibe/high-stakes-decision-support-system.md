# 高风险决策支持系统

## 中文说明

重大的生活和商业决策——改变职业、筹集资金、结束一段关系、搬迁——让人们陷入瘫痪，不是因为他们缺乏信息，而是因为风险足够高，一旦犯错就会带来灾难性的后果。结构化分析迫使权衡变得清晰，即使在结果不确定的情况下，决策过程也会让人感觉很有能力。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
建立一个名为“Pivot”的高风险决策支持系统——一种用于重大生活和商业决策的结构化思维工具。这与简单的优缺点列表不同。该值存在于结构化分析过程中，而不是输出文档中。核心特点：
- 决策摄入：用户描述决策（他们正在选择什么）、他们的限制（时间、金钱、关系、义务）、他们声明的价值观（前 3 个）、他们当前的倾向和他们的截止日期
- 强制性澄清问题：[LLM API] 生成 5 个问题，旨在揭示用户具体决策中隐藏的假设和未说明的权衡。用户必须回答全部 5 个问题才能继续。这些问题的质量就是产品的质量
- 六个分析框架（每个分析框架作为单独的 API 调用运行，显示在选项卡中）：
  (1) 期望值 — 每个选项下的概率加权结果 (2) 遗憾最小化 — 哪个选项是你在 80 岁时最不可能后悔的 (3) 价值观一致性 — 哪个选项与既定价值观最一致，并有具体证据 (4) 可逆性指数 — 每个选项bug时撤销的容易程度 (5) 二阶效应 — 每个选项在 6 个月和 3 年内会产生什么结果 (6) 给朋友的建议 — 如果值得信赖的朋友描述了这一点具体情况，你会告诉他们什么？
- 魔鬼代言人简介：单独的分析尽可能强烈地反对用户当前的倾向 - 在 6 帧之后显示
- 决策记录：存储所有分析和做出的最终决策。用户更新 90 天和 1 年的实际结果

Stack：React，[LLM API]，每个分析框架都有一个精心设计的提示，localStorage。专注、严肃的设计——没有游戏化，没有鼓励。这处理真正的决定。
```

---

## English Original

### Title

High-Stakes Decision Support System

### Description

Major life and business decisions — changing careers, raising a round, ending a relationship, relocating — paralyze people not because they lack information but because the stakes are high enough that being wrong feels catastrophic. Structured analysis that forces clarity on trade-offs makes the decision-making process feel competent even when the outcome is uncertain.

### Prompt

```md
Build a high-stakes decision support system called "Pivot" — a structured thinking tool for major life and business decisions.
This is distinct from a simple pros/cons list. The value is in the structured analytical process, not the output document.
Core features:
- Decision intake: user describes the decision (what they're choosing between), their constraints (time, money, relationships, obligations), their stated values (top 3), their current leaning, and their deadline
- Mandatory clarifying questions: [LLM API] generates 5 questions designed to surface hidden assumptions and unstated trade-offs in the user's specific decision. User must answer all 5 before proceeding. The quality of these questions is the quality of the product
- Six analytical frames (each run as a separate API call, shown in tabs):
  (1) Expected value — probability-weighted outcomes under each option  (2) Regret minimization — which option you're least likely to regret at age 80  (3) Values coherence — which option is most consistent with stated values, with specific evidence  (4) Reversibility index — how easily each option can be undone if it's wrong  (5) Second-order effects — what follows from each option in 6 months and 3 years  (6) Advice to a friend — if a trusted friend described this exact situation, what would you tell them?
- Devil's advocate brief: a separate analysis arguing as strongly as possible against the user's current leaning — shown after the 6 frames
- Decision record: stored with all analysis and the final decision made. User updates with actual outcome at 90 days and 1 year

Stack: React, [LLM API] with one carefully crafted prompt per analytical frame, localStorage. Focused, serious design — no gamification, no encouragement. This handles real decisions.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
