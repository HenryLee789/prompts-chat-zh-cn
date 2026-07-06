---
id: "cmjq0ijn7000hji04hwbgmota"
slug: "candlestick-reversal-pattern-detector-in-pine-script"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/candlestick-reversal-pattern-detector-in-pine-script"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4813b7b930fd1df6426ddf565d4a036eb53efff8b24be34a589415c051ae1cb2"
upstream_updated_at: "2025-12-28T17:37:43.033Z"
---
# Pine 脚本中的烛台反转模式检测器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[candlestick-reversal-pattern-detector-in-pine-script](https://prompts.chat/prompts/candlestick-reversal-pattern-detector-in-pine-script)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

在 Pine Script v5 中创建 TradingView 指标，以使用趋势和 RSI 过滤器检测和标记烛台反转模式。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Finance、Automation、Investing 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
担任 TradingView Pine Script v5 开发人员。您的任务是创建一个指标，自动检测并在价格图表上绘制烛台反转模式。 

你的任务是：
- 识别并标记以下烛台形态：
  - 看涨：晨星、锤子
  - 看跌：黄昏之星、看跌吞没
- 对于每个检测到的模式：
  - 在看涨形态的蜡烛下方绘制一个绿色向上箭头，并带有文本“买入：形态名称”
  - 在看跌形态的蜡烛上方绘制一个红色向下箭头，并带有文本“卖出：形态名称”
- 添加使用移动平均线（用户可选择长度）的可选趋势确认。
  - 仅显示 MA 上方的看涨信号和 MA 下方的看跌信号（可切换）。
- 包括可选的 RSI 面板：
  - RSI长度输入
  - 超买和超卖水平
  - 允许 RSI 用作信号的附加过滤器（开/关）
- 确保指标覆盖价格图表上的信号并使用清晰的标签和箭头 
- 允许用户输入单独启用/禁用每个烛台图案
- 确保脚本干净、优化且与 TradingView 完全兼容。
```

---

## English Original

### Title

Candlestick Reversal Pattern Detector in Pine Script

### Description

Create a TradingView indicator in Pine Script v5 to detect and label candlestick reversal patterns with trend and RSI filters.

### Prompt

```md
Act as a TradingView Pine Script v5 developer. You are tasked with creating an indicator that automatically detects and plots candlestick reversal patterns on the price chart. 

Your task is to:
- Identify and label the following candlestick patterns:
  - Bullish: Morning Star, Hammer
  - Bearish: Evening Star, Bearish Engulfing
- For each detected pattern:
  - Plot a green upward arrow below the candle for bullish patterns with the text “BUY: Pattern Name”
  - Plot a red downward arrow above the candle for bearish patterns with the text “SELL: Pattern Name”
- Add optional trend confirmation using a moving average (user-selectable length).
  - Only show bullish signals above the MA and bearish signals below the MA (toggleable).
- Include an optional RSI panel:
  - RSI length input
  - Overbought and oversold levels
  - Allow RSI to be used as an additional filter for signals (on/off)
- Ensure the indicator overlays signals on the price chart and uses clear labels and arrows 
- Allow user inputs to enable/disable each candlestick pattern individually
- Make sure the script is clean, optimized, and fully compatible with TradingView.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [candlestick-reversal-pattern-detector-in-pine-script](https://prompts.chat/prompts/candlestick-reversal-pattern-detector-in-pine-script) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Finance, Automation, Investing |
| Contributors | cutejsq |
| Updated At | 2025-12-28T17:37:43.033Z |
