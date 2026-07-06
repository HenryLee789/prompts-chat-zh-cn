---
id: "cmp1s12gl0003kz04yp1l3rlk"
slug: "sigrexio-fear-greed-sentiment-filter"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/sigrexio-fear-greed-sentiment-filter"
category: "finance-budgeting"
category_name: "Finance & Budgeting"
category_zh: "财务与预算"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "97a369a675e05b42b7e19018b09c5fb0456ef295f171dcdfee7f37003328cebd"
upstream_updated_at: "2026-05-11T22:32:17.373Z"
---
# [sigrex.io] 恐惧与贪婪情绪过滤器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[sigrexio-fear-greed-sentiment-filter](https://prompts.chat/prompts/sigrexio-fear-greed-sentiment-filter)  
> 分类：财务与预算（Finance & Budgeting / `finance-budgeting`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

该提示使用恐惧与贪婪指数作为情绪过滤器来提供加密货币的交易信号。它根据市场情绪和 RSI 和 MACD 等技术指标定义了进场和出场的规则。自定义参数（例如交易代码和 RSI 阈值）以适合您的策略。

## 使用场景

- 用于财务与预算相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Strategy、trading 等主题快速生成可复用结果。

## 适用人群

- 财务人员
- 创业者
- 个人理财用户

## 中文 Prompt 正文

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

策略规则：
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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [sigrexio-fear-greed-sentiment-filter](https://prompts.chat/prompts/sigrexio-fear-greed-sentiment-filter) |
| Category | Finance & Budgeting (`finance-budgeting`) |
| Type | `TEXT` |
| Tags | Strategy, trading |
| Contributors | sigrex |
| Updated At | 2026-05-11T22:32:17.373Z |
