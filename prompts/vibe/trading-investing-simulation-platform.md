---
id: "cmmxuk7na0009ky04jgx2k8je"
slug: "trading-investing-simulation-platform"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/trading-investing-simulation-platform"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "513a526fd96e7f3dfb4c1cdcb5e731574536b4d90d172f386c3bdd9bcf9e866a"
upstream_updated_at: "2026-03-19T19:12:16.822Z"
---
# 交易投资模拟平台

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[trading-investing-simulation-platform](https://prompts.chat/prompts/trading-investing-simulation-platform)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

人们希望在拿真钱冒险之前先练习一下。模拟出售的是最终有足够能力进行投资的希望，而期刊分析层则出售的是成为判断力随着时间的推移而提高的人的希望。如果模拟不能反映真实的市场机制，它就像一个玩具并且失去可信度。必须模拟滑点、交易成本和实际价格影响。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 coding 等主题快速生成可复用结果。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
建立一个名为“Paper”的模拟交易平台——一个学习交易和投资的真实、无风险的环境。

核心特点：
- 投资组合设置：用户从 100,000 美元的虚拟现金开始。通过 Yahoo Finance 或 Alpha Vantage API 获取实时股票和 ETF 价格
- 交易执行：支持市价单和限价单。模拟市价订单的 0.1% 滑点。每笔交易佣金为 1 美元（现实摩擦，但不会受到惩罚）
- 绩效仪表板：盈亏图（每日）、总回报、年化回报、胜率、平均盈亏、夏普比率和当前行业风险敞口——每笔交易都会更新。使用重新图表构建
- 交易日志：每次平仓时必填字段 — “我进入此交易的论文是什么？发生了什么？我会采取什么不同的做法？”三个字段，每个字段最多 200 个字符。在未完成日志的情况下无法平仓
- 行为分析：[LLM API] 分析最近 20 个交易日志条目并识别重复出现的行为模式 — “当盈利头寸接近整数价格水平时，您始终会尽早退出” — 每月出现
- 排行榜：朋友群体中可选的、每周重置的排行榜——按风险调整回报排名，而不是原始损益排名

Stack：React、Yahoo Finance 或 Alpha Vantage 用于市场数据，[LLM API] 用于行为分析、图表。受终端启发的设计——数据密集，无装饰元素。
```

---

## English Original

### Title

Trading & Investing Simulation Platform

### Description

People want to practice before risking real money. The simulation sells the hope of being competent enough to invest eventually — and the journal analysis layer sells the hope of becoming the kind of person whose judgment improves over time. If simulation doesn't reflect real market mechanics, it feels like a toy and loses credibility. Slippage, transaction costs, and realistic price impact must be simulated.

### Prompt

```md
Build a paper trading simulation platform called "Paper" — a realistic, risk-free environment for learning to trade and invest.

Core features:
- Portfolio setup: user starts with $100,000 in virtual cash. Real-time stock and ETF prices via Yahoo Finance or Alpha Vantage API
- Trade execution: market and limit orders supported. Simulate 0.1% slippage on market orders. Commission of $1 per trade (realistic friction without being punitive)
- Performance dashboard: P&L chart (daily), total return, annualized return, win rate, average gain and loss, Sharpe ratio, and current sector exposure — all updated with each trade. Built with recharts
- Trade journal: required field on every position close — "What was my thesis entering this trade? What happened? What will I do differently?" Three fields, each max 200 characters. Cannot close a position without completing the journal
- Behavioral analysis: [LLM API] analyzes the last 20 trade journal entries and identifies recurring behavioral patterns — "You consistently exit winning positions early when they approach round-number price levels" — surfaced monthly
- Leaderboard: optional, weekly-resetting leaderboard among friend groups — ranked by risk-adjusted return, not raw P&L

Stack: React, Yahoo Finance or Alpha Vantage for market data, [LLM API] for behavioral analysis, recharts. Terminal-inspired design — data dense, no decorative elements.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [trading-investing-simulation-platform](https://prompts.chat/prompts/trading-investing-simulation-platform) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | coding |
| Contributors | mmanisaligil |
| Updated At | 2026-03-19T19:12:16.822Z |
