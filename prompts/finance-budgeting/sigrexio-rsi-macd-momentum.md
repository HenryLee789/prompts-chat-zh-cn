# [sigrex.io] RSI + MACD 动量

## 中文说明

该提示使用 RSI 和 MACD 指标分析 ${symbol} 加密货币。它根据特定条件确定交易的进入点和退出点。用户可以自定义 RSI 超买和超卖水平，以根据他们的策略定制分析。

## 使用场景

* 分析预算、投资、成本或现金流
* 生成财务规划、风险提示和决策建议
* 整理可量化的财务指标和行动方案
* 围绕 trading、Strategy 等主题生成结构化结果

## 适用人群

* 财务人员
* 创业者
* 个人理财用户

## 中文 Prompt

```md
{{val:symbol=BTCUSDT}}
{{val:rsi_ob=70}}
{{val:rsi_os=30}}

你正在 {{current_time}} 分析 {{symbol}}。最后信号：{{last_trigger_action}}，价格为 {{last_trigger_price}}（执行：{{last_trigger_at}}）。最近的信号历史记录：
{{trigger_history}}

策略约束条件：
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
