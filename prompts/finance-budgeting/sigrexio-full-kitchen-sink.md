# [sigrex.io] 全套厨房水槽

## 中文说明

该提示是一个利用情绪分析和技术指标的综合交易信号生成器。它获取恐惧和贪婪指数来确定市场情绪，并使用 RSI 和 MACD 进行技术确认。策略逻辑包括情绪偏差、技术确认、仓位检查和决策规则，确保交易方法的纪律性。

## 使用场景

* 分析预算、投资、成本或现金流
* 生成财务规划、风险提示和决策建议
* 整理可量化的财务指标和行动方案
* 围绕 Strategy、trading 等主题生成结构化结果

## 适用人群

* 财务人员
* 创业者
* 个人理财用户

## 中文 Prompt

```md
{{val:symbol=SOLUSDT}}
{{val:rsi_ob=70}}
{{val:rsi_os=30}}
{{val:max_repeat=3}}

符号：{{符号}} |时间：{{current_time}}
最后信号：{{last_trigger_action}} @ {{last_trigger_price}} |执行：{{last_trigger_at}}

完整的信号历史记录：
{{trigger_history}}

{{评论：外部情绪——恐惧与贪婪}}
恐惧与贪婪指数：
{{获取：https://api.alternative.me/fng/?limit=1&format=json}}

{{comment: Toon 格式的策略主配置}}
主配置：
{{toon:{"name":"full_strategy","symbol":"SOLUSDT","bias_source":"fear_greed","technicals":["RSI","MACD"],"rsi":{"超买":70,"超卖":30}," MACD":{"signal":"histogram_cross"},"position_rules":{"max_open":1,"allow_same_direction_repeat":false},"safety":{"max_consecutive_non_exit":3}}}}

策略逻辑：

步骤 1 — 情绪偏差（来自恐惧和贪婪获取）：
  - 0–30：仅支持长
  - 31–50：倾向于做多，允许中立
  - 51–74：精简短线，允许中性
  - 75–100：仅支持短视频

第 2 步 — 技术确认（来自图表）：
  - 多头确认：RSI < {{rsi_os}} 向上 + MACD 正交叉
  - 空头确认：RSI > {{rsi_ob}} 向下 + MACD 负交叉

第 3 步 — 位置检查（来自trigger_history）：
  - 如果上次操作是长或短 → 必须在新条目之前退出
  - 如果 {{trigger_history}} 显示 {{max_repeat}} 或更多信号而没有 EXIT → HOLD

第 4 步 — 决定：
  - 情绪和技术面一致 → 发出信号
  - 情绪和技术面不一致 → 持有
  - 带有退出信号的开仓 → 退出
  - 没有退出信号的开仓 → 持有
  - 无仓位且无明确信号 → HOLD

{{评论：上面使用 max_repeat val 作为连续非退出信号的安全上限}}
```

---

## English Original

### Title

[sigrex.io] Full Kitchen Sink

### Description

This prompt is a comprehensive trading signal generator utilizing sentiment analysis and technical indicators. It fetches the Fear & Greed Index to determine market sentiment and uses RSI and MACD for technical confirmation. The strategy logic includes sentiment biasing, technical confirmation, position checks, and decision-making rules, ensuring a disciplined trading approach.

### Prompt

```md
{{val:symbol=SOLUSDT}}
{{val:rsi_ob=70}}
{{val:rsi_os=30}}
{{val:max_repeat=3}}

Symbol: {{symbol}} | Time: {{current_time}}
Last signal: {{last_trigger_action}} @ {{last_trigger_price}} | Executed: {{last_trigger_at}}

Full signal history:
{{trigger_history}}

{{comment: External sentiment — Fear & Greed}}
Fear & Greed Index:
{{get:https://api.alternative.me/fng/?limit=1&format=json}}

{{comment: Strategy master config in Toon format}}
Master config:
{{toon:{"name":"full_strategy","symbol":"SOLUSDT","bias_source":"fear_greed","technicals":["RSI","MACD"],"rsi":{"overbought":70,"oversold":30},"macd":{"signal":"histogram_cross"},"position_rules":{"max_open":1,"allow_same_direction_repeat":false},"safety":{"max_consecutive_non_exit":3}}}}

STRATEGY LOGIC:

Step 1 — Sentiment Bias (from Fear & Greed fetch):
  - 0–30: Favor LONG only
  - 31–50: Lean LONG, allow neutral
  - 51–74: Lean SHORT, allow neutral
  - 75–100: Favor SHORT only

Step 2 — Technical Confirmation (from chart):
  - LONG confirmed: RSI < {{rsi_os}} turning up + MACD positive cross
  - SHORT confirmed: RSI > {{rsi_ob}} turning down + MACD negative cross

Step 3 — Position Check (from trigger_history):
  - If last action was LONG or SHORT → must EXIT before new entry
  - If {{trigger_history}} shows {{max_repeat}} or more signals without EXIT → HOLD

Step 4 — Decision:
  - Sentiment and technicals agree → take signal
  - Sentiment and technicals disagree → HOLD
  - Open position with exit signal → EXIT
  - Open position without exit signal → HOLD
  - No position and no clear signal → HOLD

{{comment: max_repeat val used above as a safety cap on consecutive non-exit signals}}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
