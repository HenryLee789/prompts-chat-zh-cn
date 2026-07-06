# [sigrex.io] 恐惧与贪婪情绪过滤器

## 中文说明

该提示使用恐惧与贪婪指数作为情绪过滤器来提供加密货币的交易信号。它根据市场情绪和 RSI 和 MACD 等技术指标定义了进场和出场的规则。自定义参数（例如交易代码和 RSI 阈值）以适合你的策略。

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
{{val:symbol=BTCUSDT}}
{{val:rsi_ob=68}}
{{val:rsi_os=32}}

符号：{{符号}} |时间：{{current_time}}
最后信号：{{last_trigger_action}} @ {{last_trigger_price}} |执行：{{last_trigger_at}}

信号历史：
{{trigger_history}}

当前市场情绪数据：
{{获取：https://api.alternative.me/fng/?limit=1&format=json}}

策略约束条件：
使用上面获取的恐惧和贪婪值作为情绪过滤器：
- 值 0–30 = 极度恐惧 → 仅支持长设置
- 值 31–50 = 恐惧 → 允许做多，避免做空
- 值 51–74 = 贪婪 → 允许 SHORT，谨慎使用 LONG
- 值 75–100 = 极度贪婪 → 仅支持短设置

长时：
  - 情绪是极度恐惧或恐惧
  - RSI 低于 {{rsi_os}} 并出现上升
  - MACD柱状图正向交叉
  - 没有未平仓头寸

短路时：
  - 情绪是极度贪婪还是贪婪
  - RSI 高于 {{rsi_ob}} 并向下
  - MACD柱状图与负相交叉
  - 没有未平仓头寸

退出时：
  - RSI 交叉回到中性（45-55 范围）
  - 或情绪与当前头寸方向相反

如果情绪与技术面不一致或没有明确信号，则持有。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

[sigrex.io] Fear & Greed Sentiment Filter

### Description

This prompt uses the Fear & Greed Index as a sentiment filter to provide trading signals for cryptocurrencies. It defines rules for entering and exiting positions based on market sentiment and technical indicators like RSI and MACD. Customize parameters like the trading symbol and RSI thresholds to fit your strategy.

### Prompt

```md
{{val:symbol=BTCUSDT}}
{{val:rsi_ob=68}}
{{val:rsi_os=32}}

Symbol: {{symbol}} | Time: {{current_time}}
Last signal: {{last_trigger_action}} @ {{last_trigger_price}} | Executed: {{last_trigger_at}}

Signal history:
{{trigger_history}}

Current market sentiment data:
{{get:https://api.alternative.me/fng/?limit=1&format=json}}

STRATEGY RULES:
Use the Fear & Greed value fetched above as a sentiment filter:
- Value 0–30 = Extreme Fear → favor LONG setups only
- Value 31–50 = Fear → allow LONG, avoid SHORT
- Value 51–74 = Greed → allow SHORT, be cautious with LONG
- Value 75–100 = Extreme Greed → favor SHORT setups only

LONG when:
  - Sentiment is Extreme Fear or Fear
  - RSI is below {{rsi_os}} and turning up
  - MACD histogram crosses positive
  - No open position

SHORT when:
  - Sentiment is Extreme Greed or Greed
  - RSI is above {{rsi_ob}} and turning down
  - MACD histogram crosses negative
  - No open position

EXIT when:
  - RSI crosses back to neutral (45–55 range)
  - OR sentiment flips against current position direction

HOLD if sentiment and technicals disagree, or no clear signal.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
