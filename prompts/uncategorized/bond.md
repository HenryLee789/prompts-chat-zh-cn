---
id: "cmr6eednm0001jp04nzxgaifx"
slug: "bond"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/bond"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a6e194ebd82d9fcd31b2fa2b938e74b13e9771134875a026cb9661e90e321674"
upstream_updated_at: "2026-07-04T13:28:36.850Z"
---
# 纽带

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[bond](https://prompts.chat/prompts/bond)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

纽带

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
动态宏主提示符（V7.1）

执行说明：在回答之前，请使用搜索工具查找美国国债（2年期、10年期、30年期）和日本政府债券（2年期、10年期、30年期）的“当前每日收益率”。在开始分析之前，请使用这些实时值填充下表。

角色：高级跨资产投资组合策略师。

任务：综合实时收益率数据以确定全球“风险开/关”态势并识别潜在的波动触发因素。

第 1 部分：实时核心数据输入

表 A：美国与日本多期限快照

1 个月趋势美国国库券 (UST) 日本 (JGB) 利差 (UST - JGB)[评估 🟢🟡🔴]2 年${search_result}${search_result}${calculate}[评估🟢🟡🔴]10年${search_result}${search_result}${calculate}[评估🟢🟡🔴]30年${search_result}${search_result}${calculate}

表 B：美国 10Y-2Y 价差矩阵

1个月趋势指标当前值制度信号[评估🟢🟡🔴]美国10年-2年价差${search_result}${identify_regime}第2部分：分析框架

美国利差分析：评估当前10年-2年利差。曲线是变陡还是变平？将此与人工智能主导的 2% GDP 扩张与中东能源封锁进行对比。

“日元套利”压力测试：分析 10 年期 UST-JGB 利差。如果收窄至175个基点，则计算“日元急升”导致全球风险资产清算的风险。

汇回风险：分析 30 年利差。目前的日本国债 30 年期收益率是否足以激励日本“鲸鱼”出售 UST 并将资金带回国内？

风险开/关综合：定义“净信号”。

第 3 部分：输出要求

风险规避概率评分：(1-10)。

战术资产预测：BTC/美元、纳斯达克 100 和美元/日元。

“哨兵”玩法：一种注重增长的立场和一种保护性对冲。
```

---

## English Original

### Title

bond

### Description

bond

### Prompt

```md
The Dynamic Macro Master Prompt (V7.1)

Execution Instruction: Before answering, use your search tool to find the "Current Daily Yields" for US Treasuries (2Y, 10Y, 30Y) and Japan Government Bonds (2Y, 10Y, 30Y). Populate the tables below with these live values before beginning the analysis.

Role: Senior Cross-Asset Portfolio Strategist.

Task: Synthesize live yield data to determine global "Risk On/Off" posture and identify potential volatility triggers.

Section 1: Live Core Data Inputs

Table A: US vs. Japan Multi-Tenor Snapshot

1-Month TrendTenorUS Treasury (UST)Japan (JGB)Spread (UST - JGB)[Assess 🟢🟡🔴]2-Year${search_result}${search_result}${calculate}[Assess 🟢🟡🔴]10-Year${search_result}${search_result}${calculate}[Assess 🟢🟡🔴]30-Year${search_result}${search_result}${calculate}

Table B: US 10Y-2Y Spread Matrix

1-Month TrendMetricCurrent ValueRegime Signal[Assess 🟢🟡🔴]US 10Y-2Y Spread${search_result}${identify_regime}Section 2: Analysis Framework

US Spread Analysis: Evaluate the current 10Y-2Y spread. Is the curve steepening or flattening? Contrast this with the 2% AI-led GDP expansion vs. the Middle East energy blockade.

The "Yen Carry" Pressure Test: Analyze the 10Y UST-JGB spread. If it is narrowing toward 175 bps, calculate the risk of a "Yen Snap" causing a liquidation of global risk assets.

Repatriation Risk: Analyze the 30Y spread. Does the current JGB 30Y yield provide enough incentive for Japanese "whales" to sell USTs and bring capital home?

Risk On/Off Synthesis: Define the "Net Signal."

Section 3: Output Requirements

Risk-Off Probability Score: (1–10).

Tactical Asset Forecast: BTC/USD, Nasdaq 100, and USD/JPY.

The "Sentinel" Play: One growth-focused position and one protective hedge. 


```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [bond](https://prompts.chat/prompts/bond) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | kennynah85 |
| Updated At | 2026-07-04T13:28:36.850Z |
