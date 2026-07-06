---
id: "cmp1hf04k000fjs04gd82p7bj"
slug: "sigrexio-rsi-macd-momentum"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/sigrexio-rsi-macd-momentum"
category: "finance-budgeting"
category_name: "Finance & Budgeting"
category_zh: "财务与预算"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "75d36cabab27ed830f100f42926ed50e9511a94ae6887923ecd422dbe2c9a553"
upstream_updated_at: "2026-05-11T22:28:02.583Z"
---
# [sigrex.io] RSI + MACD 动量

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[sigrexio-rsi-macd-momentum](https://prompts.chat/prompts/sigrexio-rsi-macd-momentum)  
> 分类：财务与预算（Finance & Budgeting / `finance-budgeting`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

该提示使用 RSI 和 MACD 指标分析 ${symbol} 加密货币。它根据特定条件确定交易的进入点和退出点。用户可以自定义 RSI 超买和超卖水平，以根据他们的策略定制分析。

## 使用场景

- 用于财务与预算相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 trading、Strategy 等主题快速生成可复用结果。

## 适用人群

- 财务人员
- 创业者
- 个人理财用户

## 中文 Prompt 正文

```md
{{val:symbol=BTCUSDT}}
{{val:rsi_ob=70}}
{{val:rsi_os=30}}

您正在 {{current_time}} 分析 {{symbol}}。

最后信号：{{last_trigger_action}}，价格为 {{last_trigger_price}}（执行：{{last_trigger_at}}）。

最近的信号历史记录：
{{trigger_history}}

策略规则：
- 查看图表上的 RSI 指标。
- 查看图表上的 MACD 指标（柱状图、信号线交叉）。

LONG 条件（必须满足所有条件）：
  1. RSI 低于 {{rsi_os}} 并向上
  2. MACD柱状图由负向正交叉
  3. 目前没有持仓

简短条件（必须满足所有条件）：
  1. RSI 高于 {{rsi_ob}} 并转向向下
  2. MACD柱状图由正向负交叉
  3. 目前没有持仓

退出条件（任意即可）：
  1. RSI 穿过相反的极端（例如，之前是空头，RSI 现在低于 {{rsi_os}}）
  2. MACD 给出当前位置的反转交叉

持有如果：
  - 条件混杂或不明确
  - 持仓已开仓，但没有退出信号

使用 {{trigger_history}} 可以避免连续两次重复相同的信号而中间没有 EXIT。
```

---

## English Original

### Title

[sigrex.io] RSI + MACD Momentum

### Description

This prompt analyzes the ${symbol} cryptocurrency using RSI and MACD indicators. It determines entry and exit points for trading based on specific conditions. Users can customize RSI overbought and oversold levels to tailor the analysis to their strategy.

### Prompt

```md
{{val:symbol=BTCUSDT}}
{{val:rsi_ob=70}}
{{val:rsi_os=30}}

You are analyzing {{symbol}} at {{current_time}}.

Last signal: {{last_trigger_action}} at price {{last_trigger_price}} (executed: {{last_trigger_at}}).

Recent signal history:
{{trigger_history}}

STRATEGY RULES:
- Look at the RSI indicator on the chart.
- Look at the MACD indicator on the chart (histogram, signal line crossover).

LONG conditions (all must be met):
  1. RSI is below {{rsi_os}} and turning upward
  2. MACD histogram is crossing from negative to positive
  3. No position is currently open

SHORT conditions (all must be met):
  1. RSI is above {{rsi_ob}} and turning downward
  2. MACD histogram is crossing from positive to negative
  3. No position is currently open

EXIT conditions (any is enough):
  1. RSI crosses the opposite extreme (e.g., was SHORT, RSI now below {{rsi_os}})
  2. MACD gives a reversal crossover against current position

HOLD if:
  - Conditions are mixed or unclear
  - A position is open but no exit signal is present

Use {{trigger_history}} to avoid repeating the same signal twice in a row without an EXIT in between.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [sigrexio-rsi-macd-momentum](https://prompts.chat/prompts/sigrexio-rsi-macd-momentum) |
| Category | Finance & Budgeting (`finance-budgeting`) |
| Type | `TEXT` |
| Tags | trading, Strategy |
| Contributors | sigrex |
| Updated At | 2026-05-11T22:28:02.583Z |
