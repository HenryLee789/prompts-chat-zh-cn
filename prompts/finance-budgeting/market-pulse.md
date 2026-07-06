---
id: "cmlxysj800004l404w879tm25"
slug: "market-pulse"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/market-pulse"
category: "finance-budgeting"
category_name: "Finance & Budgeting"
category_zh: "财务与预算"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6c0e02449d88a0bb0a3dc6b142e6c621571d9c1a09d5543a9668086c46349a78"
upstream_updated_at: "2026-02-22T18:25:14.990Z"
---
# 市场脉搏

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[market-pulse](https://prompts.chat/prompts/market-pulse)  
> 分类：财务与预算（Finance & Budgeting / `finance-budgeting`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

该提示指示模型生成带日期标记的结构化报告，该报告分析最近和即将发生的市场波动事件，验证参考价格，跟踪情绪和风险指标，并为美国主要股指和 ETF 提供可操作的近期交易前景（带有来源引文）。为了获得最佳结果，请与思维模型一起使用。

## 使用场景

- 用于财务与预算相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Finance、stock-analysis、Market Analysis 等主题快速生成可复用结果。

## 适用人群

- 财务人员
- 创业者
- 个人理财用户

## 中文 Prompt 正文

```md
作者：Rick Kotlarz，@RickKotlarz

**重要** 显示当前日期 GMT-4 / UTC-4。显示日期后继续执行以下操作。

## 1) 范围和重点
市场动态新闻、美国贸易或关税、联邦立法或法规，以及 VIX、道琼斯工业平均指数、罗素 2000、标准普尔 500、纳斯达克 100 及相关期货的成交量或价格异常。优先考虑可操作的要点。除非有要求，否则没有图表。

## 2) 时间窗口
回顾1周。 1、7、30、60、90 天的前瞻性展望。

## 3) 价格验证 – 如果引用则需要
使用主要上市市场最近完成交易日的最新可用报价。 1天内验证；如果因假期或休息而年龄较大，请如此说。更喜欢 etoro.com；否则另一个信誉良好的报价页面（纳斯达克、纽约证券交易所、芝加哥商品交易所、ICE、伦敦证券交易所、TMX、TradingView、雅虎财经、路透社、彭博报价页面）。当使用任何价格时，显示最后交易价格、货币、主要交易所或地点、会话日期，并引用带有时间戳的来源。检查并调整拆分、分拆、代码或 CUSIP 变更；请注明日期和来源。如果没有信誉良好的来源，请写下价格：不可用。如果退市或暂停，请说明状态和最后正常价格及日期。

## 4) 事件处理
仅使用当前日期。如果重新安排，请显示新日期。格式：“工作日，周一 - 描述”。如果未知或已取消：“日期待定”或“已取消”以及最新状态。

## 5) 事件宇宙
涵盖所有市场敏感项目。使用 `Appendix A` 作为基础并根据需要进行扩展。包括巨额收益、再平衡、期权到期、国债拍卖或退款、美联储 QT、与指数相关的 SEC 文件、地缘政治风险和未注明日期的变动因素。

## 6) 关税报告
跟踪公告、时间表、执行、暂停或结束、反倾销、CVD 裁决、最高法院裁决或类似内容。包括生效日期、范围、部门或索引重叠以及主要来源引用。包括影响期货或行业 ETF 走势的可信谣言。

## 7) 情绪和市场指标
报告以下流量触发器和情绪指标：
- **CPC 比率** - 当前水平和趋势
- **VVIX** - 期权市场成交量
- **VIX 期限结构** - VXST 与 VIX（如果 VXST > VIX 则标记为看跌触发因素）
- **MOVE 指数** - 国债波动性（峰值引发股票抛售）
- **信用利差 (OAS)** - IG 和 HY 逐日或逐周变动（扩大=看跌触发）
- **伽玛曝光 (GEX)** - SPX/NDX 的净交易商伽玛定位和关键执行水平
- **0DTE 期权交易量** - 占总交易量的百分比以及对日内流量的影响
- **IWM 或 /NQ 与 20-EMA 和 50-MA** - 相对于各自的当前价格（上方 = 看涨，下方 = 看跌）
- **DIA 或 /NQ 与 20-EMA 和 50-MA** - 相对于各自的当前价格（上方 = 看涨，下方 = 看跌）
- **SPY 或 /ES 与 20-EMA 和 50-MA** - 相对于各自的当前价格（上方 = 看涨，下方 = 看跌）
- **QQQ 或 /NQ 与 20-EMA 和 50-MA** - 相对于各自的当前价格（上方 = 看涨，下方 = 看跌）


**市场情绪评级：** 根据总体信号（非常看跌、看跌、中性、看涨、非常看涨）为 IWM、DIA、SPY 和 QQQ 分配评级。权重：VIX 期限结构反转、信用利差飙升、GEX 头寸、移动平均线头寸和 MOVE 峰值是主要驱动因素。显示为：**IWM：[评级] | DIA：[评级]|间谍：[评级]| QQQ：[评分]**，并附有每个评分的简要理由。

## 8) 来源和引文
优先级：FRED → 美联储 → BLS → BEA → SEC EDGAR → CME → CBOE → USTR → WTO → CBP → 彭博社 → 路透社 → CNBC → 雅虎财经 → 华尔街日报 → MarketWatch → Barron's → 美国银行 (BoA)。引文格式：（来源：名称、URL、日期）。如果不可用，请使用“来源：不可用”。

## 9) 输出
### 执行摘要
三个带有按日期排序的项目符号的块：
- 📈 看涨司机
- 📉 看跌驱动因素
- ⚠️事件风险或注意事项
每个项目符号：[日期 - 事件（来源：名称、URL、日期）]。使用“日期待定 - 事件（公告延迟）”来记录延迟。如果提到任何价格，还显示最后价格、货币、会话日期和带有时间戳的验证源。 **当第 7 节指标代表重大触发因素或崩溃时（例如，期限结构倒挂、移动平均线突破、信用利差急剧波动），请包括这些指标。**

### 深入探讨 – 表格
宏观和美联储观察： |指标|最新 |趋势或要点|来源 | → **优先考虑附录 A 中的市场走势指标**
全球事件： |日期 |活动名称 |描述 |链接 |
美国数据回顾： |发布日期 |数据名称 |结果 |市场影响 |来源 |
情绪和风险指标： |仪表名称 |最新 |总结|来源 | → 根据第 7 节指标填充，包括市场情绪评级
美国银行股票客户流量趋势： |机构买入/卖出|零售购买/销售|
30 或 60 或 90 天展望： |地平线|基地|公牛|熊|催化剂|
收益或公司行为： |股票代码 |行动|生效日期 |笔记|来源 | → 注意分拆或分拆并确保分拆调整后的定价

### 缩略语
列出所有具有简单英语含义的使用过的首字母缩略词，例如：CPC：情绪测量仪。

## 10) 语气和合规性
清晰、直接、专业、对话。避免行话。使用破折号或减号，而不是破折号。保持客观并以事实为中心。

## 11) 冗长和回传
除非表格中需要详细信息，否则应简洁。当提供所需的部分和首字母缩略词时得出结论，或者在缺少关键上下文时升级。如果价格验证失败，请设置 Price: Unavailable 并且不进行推断。

## 12) 最终展望
根据包括市场情绪评级在内的所有指标，您将如何在未来 7-10 天内交易 IWM、DIA、SPY 和 QQQ（看涨/看跌）？考虑每只 ETF 相对于其 20 日移动平均线和 50 日移动平均线的当前头寸。

## 附录 A – 事件定义
市场走势指标：OPEC会议、消费者信心、CPI、耐用品订单、EIA石油状况、就业形势、现房销售、美联储主席新闻发布会、FOMC公告或会议纪要、GDP、新屋开工或许可、工业生产、国际贸易（提前或全部）、ISM制造业、失业救济金申请、新屋销售、个人收入或支出、PPI - 最终需求、零售销售、国库退款公告
特别关注：ADP全国就业报告、褐皮书、商业库存、芝加哥PMI、建筑支出、消费者信心、EIA天然气、帝国大厦制造业、就业成本指数、工厂订单、美联储资产负债表、房地产市场指数、进出口价格、ISM服务、JOLTS、机动车辆销售、待售房屋销售指数、费城联储制造业、PMI闪现或终值、服务业PMI、生产率和成本、案例-希勒房价、财政部报表、财政部国际资本
```

---

## English Original

### Title

Market Pulse

### Description

This prompt instructs the model to generate a structured, date-stamped report that analyzes recent and upcoming market-moving events, validates referenced prices, tracks sentiment and risk metrics, and delivers actionable near-term trading outlooks for major U.S. equity indices and ETFs with sourced citations. For best results, use with thinking models.

### Prompt

```md
Author: Rick Kotlarz, @RickKotlarz

**IMPORTANT** Display the current date GMT-4 / UTC-4. Then continue with the following after displaying the date.

## 1) Scope and Focus
Market-moving news, U.S. trade or tariffs, federal legislation or regulation, and volume or price anomalies for VIX, Dow Jones Industrial Average, Russel 2000, S&P 500, Nasdaq-100, and related futures. Prioritize actionable takeaways. No charts unless asked.

## 2) Time Windows
Look-back 1 week. Forward outlook at 1, 7, 30, 60, 90 days.

## 3) Price Validation – Required if referenced
Use latest available quote from most recent completed trading day in primary listing market. Validate within 1 day; if older due to holiday or halt, say so. Prefer etoro.com; otherwise another reputable quotes page (Nasdaq, NYSE, CME, ICE, LSE, TMX, TradingView, Yahoo Finance, Reuters, Bloomberg quote pages). When any price is used, display last traded price, currency, primary exchange or venue, session date, and cite source with timestamp. Check and adjust for splits, spinoffs, symbol or CUSIP changes; note with date and source. If no reputable source, write Price: Unavailable. If delisted or halted, state status and last regular price with date.

## 4) Event Handling
Use current dates only. If rescheduled, show the new date. Format: "Weekday, D-Mon - Description". If unknown or canceled: "Date TBD" or "Canceled" with latest status.

## 5) Event Universe
Cover all market-sensitive items. Use `Appendix A` as base and expand as needed. Include mega-cap earnings, rebalances, options expirations, Treasury auctions or refunding, Fed QT, SEC filings relevant to indices, geopolitical risks, and undated movers.

## 6) Tariff Reporting
Track announcements, schedules, enforcement, pauses or ends, anti-dumping, CVD rulings, supreme court ruling, or similar. Include effective date, scope, sector or index overlap, and primary-source citation. Include credible rumors that move futures or sector ETFs.

## 7) Sentiment and Market Metrics
Report the following flow triggers and sentiment gauges:
- **CPC Ratio** - current level and trend
- **VVIX** - options market vol-of-vol
- **VIX Term Structure** - VXST vs VIX (flag if VXST > VIX as bearish trigger)
- **MOVE Index** - Treasury volatility (spikes trigger equity selling)
- **Credit Spreads (OAS)** - IG and HY day-over-day or week-over-week moves (widening = bearish trigger)
- **Gamma Exposure (GEX)** - Net dealer gamma positioning and key strike levels for SPX/NDX
- **0DTE Options Volume** - % of total volume and impact on intraday flows
- **IWM  or /NQ vs 20-EMA and 50-MA** - current price relative to each (above = bullish, below = bearish)
- **DIA  or /NQ vs 20-EMA and 50-MA** - current price relative to each (above = bullish, below = bearish)
- **SPY or /ES vs 20-EMA and 50-MA** - current price relative to each (above = bullish, below = bearish)
- **QQQ  or /NQ vs 20-EMA and 50-MA** - current price relative to each (above = bullish, below = bearish)


**Market Sentiment Rating:** Assign a rating for IWM, DIA,SPY, and QQQ based on aggregate signals (very bearish, bearish, neutral, bullish, very bullish). Weight: VIX term structure inversions, credit spread spikes, GEX positioning, moving average position, and MOVE spikes as primary drivers. Display as: **IWM: [rating] | DIA: [rating] | SPY: [rating] | QQQ: [rating]** with brief justification for each.

## 8) Sources and Citations
Priority: FRED → Federal Reserve → BLS → BEA → SEC EDGAR → CME → CBOE → USTR → WTO → CBP → Bloomberg → Reuters → CNBC → Yahoo Finance → WSJ → MarketWatch → Barron's → Bank of America (BoA). Citation format: (Source: NAME, URL, DATE). If not available use "Source: Unavailable".

## 9) Output
### Executive Summary
Three blocks with date-ordered bullets:
- 📈 bullish driver
- 📉 bearish driver
- ⚠️ event risk or caution
Each bullet: [Date - Event (Source: NAME, URL, DATE)]. Note delays using "Date TBD - Event (Announcement Delayed)". If any price is mentioned, also show last price, currency, session date, and validation source with timestamp. **Include Section 7 metrics when they represent significant triggers or breakdowns (e.g., term structure inversions, MA breaks, sharp credit spread moves).**

### Deep Dive – Tables
Macro and Fed Watch: | Indicator | Latest | Trend or Takeaway | Source | → **Prioritize Market Moving Indicators from Appendix A**
Global Events: | Date | Event Name | Description | Link |
US Data Recap: | Release Date | Data Name | Results | Market Implication | Source |
Sentiment and Risk Metrics: | Gauge Name | Latest | Summary | Source | → Populate from Section 7 metrics including Market Sentiment Rating
BofA Equity Client Flow trends: | Institutional Buying / Selling | Retail Buying / Selling |
30 or 60 or 90-Day Outlook: | Horizon | Base | Bull | Bear | Catalysts |
Earnings or Corporate Actions: | Ticker | Action | Effective Date | Notes | Source | → Note splits or spinoffs and ensure split-adjusted pricing

### Acronyms
List all used acronyms with plain-English significance, for example: CPC: sentiment gauge.

## 10) Tone and Compliance
Clear, direct, professional, conversational. Avoid jargon. Use dash or minus, not em dash. Be objective and fact-focused.

## 11) Verbosity and Handback
Be concise unless detail is needed in tables. Conclude when required sections and acronyms are delivered or escalate if critical context is missing. If price validation fails, set Price: Unavailable and do not infer.

## 12) Final Outlook
Based on all metrics including the Market Sentiment Rating, how would you trade IWM, DIA,SPY, and QQQ for the next 7–10 days (bullish/bearish)? Consider each ETF’s current position relative to its 20-EMA and 50-day moving average.

## Appendix A – Event Definitions
Market Moving Indicators: OPEC Meeting, Consumer Confidence, CPI, Durable Goods Orders, EIA Petroleum Status, Employment Situation, Existing Home Sales, Fed Chair Press Conference, FOMC Announcement or Minutes, GDP, Housing Starts or Permits, Industrial Production, International Trade (Advance or Full), ISM Manufacturing, Jobless Claims, New Home Sales, Personal Income or Outlays, PPI - Final Demand, Retail Sales, Treasury Refunding Announcement
Extra Attention: ADP National Employment Report, Beige Book, Business Inventories, Chicago PMI, Construction Spending, Consumer Sentiment, EIA Nat Gas, Empire State Manufacturing, Employment Cost Index, Factory Orders, Fed Balance Sheet, Housing Market Index, Import or Export Prices, ISM Services, JOLTS, Motor Vehicle Sales, Pending Home Sales Index, Philadelphia Fed Manufacturing, PMI Flashes or Finals, Services PMIs, Productivity and Costs, Case - Shiller Home Price, Treasury Statement, Treasury International Capital
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [market-pulse](https://prompts.chat/prompts/market-pulse) |
| Category | Finance & Budgeting (`finance-budgeting`) |
| Type | `TEXT` |
| Tags | Finance, stock-analysis, Market Analysis |
| Contributors | rickkotlarz |
| Updated At | 2026-02-22T18:25:14.990Z |
