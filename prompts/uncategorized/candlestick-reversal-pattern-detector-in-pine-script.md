# Pine 脚本中的烛台反转模式检测器

## 中文说明

在 Pine Script v5 中创建 TradingView 指标，以使用趋势和 RSI 过滤器检测和标记烛台反转模式。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Finance、Automation、Investing 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「Pine 脚本中的烛台反转模式检测器」。你需要扮演 TradingView Pine Script v5 开发人员。你的任务是创建一个指标，自动检测并在价格图表上绘制烛台反转模式。

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

输出要求：
- 按原 prompt 要求的格式输出。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
