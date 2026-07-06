---
id: "cmldznp480004lb04c7y8a0iy"
slug: "olympic-games-events-weekly-listings-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/olympic-games-events-weekly-listings-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "80250a150ba74547e00a09efc14cc776a5afdcbe1479e138687690e9275ec669"
upstream_updated_at: "2026-02-08T17:00:20.391Z"
---
# 奥运会赛事每周列表提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[olympic-games-events-weekly-listings-prompt](https://prompts.chat/prompts/olympic-games-events-weekly-listings-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

总结当前/指定奥运会（例如 2026 年米兰科尔蒂纳奥运会）未来 7 天内即将举行的奥运会赛事（奖牌、仪式）。优先考虑流行的运动（花样滑冰、滑雪、曲棍球）。包括美国广播 (NBC/Peacock) 和当地时间 (EST)。使用每日降价表，专注于关键的决赛/奖牌，跳过次要的预赛。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Spotlight、Entertainment 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
### 奥运会赛事每周列表提示（v1.0 – 多版本适应性）

**作者：** 斯科特 M 
**Goal:**  
Create a clean, user-friendly summary of upcoming Olympic events (competitions, medal events, ceremonies) during the next 7 days from today's date forward, for the current or specified Olympic Games (e.g., Winter Olympics Milano Cortina 2026, or future editions like LA 2028, French Alps 2030, etc.). Focus on major events across all sports, sorted by estimated popularity/viewership (e.g., prioritize high-profile sports like figure skating, alpine skiing, ice hockey over niche ones). Indicate broadcast/streaming details (primary channels/services like NBC/Peacock for US viewers) and translate event times to the user's local time zone (use provided user location/timezone). Organize by day with markdown tables for easy viewing planning, emphasizing key medal events, finals, and ceremonies while avoiding minor heats unless notable.

**支持的人工智能（按处理此提示的能力排序 - 从最好到良好）：**  
1. Grok (xAI) – 出色的实时更新、验证工具访问、精确处理结构化表格/格式。  
2. Claude 3.5/4（人类）——推理能力强，表格格式可靠，善于寻找/总结时间表。  
3. GPT-4o / o1 (OpenAI) – 非常有能力使用网络浏览插件/工具，一致的结构化输出。  
4. Gemini 1.5/2.0 (Google) – 适用于日历和列表，但可能需要提示分离表格。  
5. Llama 3/4 变体（元）——如果经过微调或带有搜索，效果会很好；基本版本可能需要更多格式指导。

**变更日志：**  
- v1.0（初始）——改编自体育赛事提示；专为多日奥运会期间量身定制；包括广播/流媒体、当地时间翻译； sorted by popularity;对未来的游戏灵活（例如，如果不是当前版本，请指定版本）。

**Prompt Instructions:**

List major Olympic events (competitions, medal finals, key matches, ceremonies) occurring in the next 7 days from today's date forward for the ongoing or specified Olympic Games (default to current edition, e.g., Milano Cortina 2026 Winter Olympics; adaptable for future like LA 2028 Summer, French Alps 2030 Winter, etc.).如果在范围内，则包括开幕式/闭幕式。

对于至少有一个值得注意的事件的每一天，使用单独的降价表来组织信息。将日期作为 3 级标题放置在每个表格上方（例如，### 2026 年 2 月 6 日）。跳过没有重大活动的日子——不要提及空虚的日子。

Sort events within each day's table by estimated popularity (descending: use general viewership, global interest, and cultural impact—e.g., ice hockey finals > figure skating > curling; alpine skiing > biathlon).在每个表中使用这些确切的列：  
- 姓名（例如“男子花样滑冰短节目”或“美国对加拿大冰球预赛”）  
- 运动/纪律（例如“花样滑冰”或“冰球”）  
- 广播/流媒体（主要平台，例如“NBC / Peacock”或“Eurosport / Discovery+”；如果相关，请注明美国/国际）  
- 当地时间（转换为用户的时区，例如“美国东部时间晚上 8:00”；包括已知的大致持续时间或会话，例如“美国东部时间晚上 8:00-10:30”）  
- 注释（简短的细节，如“奖牌赛事”或“美国队精选”或“米兰竞技场现场直播”；保持简洁）

Focus on events broadcast/streamed on major official Olympic broadcasters (e.g., NBC/Peacock in US, Eurosport/Discovery in Europe, official Olympics.com streams, host broadcaster RAI in Italy, etc.).优先考虑奖牌赛事、决赛、备受瞩目的比赛和仪式。 Only include events actually occurring during that exact week—exclude previews, recaps, or non-competitive activities unless exceptionally notable (e.g., torch relay if highlighted).

Base the list on the most up-to-date schedules from reliable sources (e.g., Olympics.com official schedule, NBCOlympics.com, TeamUSA.com, ESPN, BBC Sport, Wikipedia Olympic pages, official broadcaster sites).如果存在时间/日期冲突，请优先考虑国际奥委会或主办广播公司的官方公告。

以简短的注释部分结束响应，内容包括：  
- Time zone translation details (e.g., 'All times converted to EST based on user location in East Hartford, CT; Italy is typically 6 hours ahead during Winter Games'),  
- Broadcast caveats (e.g., regional availability, blackouts, subscription required for Peacock/Eurosport; check Olympics.com or local broadcaster for full streams),  
- 受欢迎度排序的基本原理（例如，基于之前奥运会的历史收视率数据），  
- 一般可用性（例如，许多赛事在 Olympics.com 或 Peacock 上直播；经常可以重播），  
- And a note that Olympic schedules can shift due to weather, delays, or other factors—always verify directly on official sites/apps like Olympics.com or NBCOlympics.com.

If literally no major Olympic events in the week (e.g., outside Games period), state so briefly and suggest checking the full Olympic calendar or upcoming editions (e.g., LA 2028 Summer Olympics July 14–30, 2028).

用于未来的奥运会：在未来几年运行时，替换或指定提示中的版本（例如“for the LA 2028 Summer Olympics”）。
```

---

## English Original

### Title

Olympic Games Events Weekly Listings Prompt

### Description

Summarize upcoming Olympic events (medals, ceremonies) for next 7 days in current/specified Games (e.g., Milano Cortina 2026). Prioritize popular sports (figure skating, skiing, hockey). Include US broadcast (NBC/Peacock) & local times (EST). Use daily markdown tables, focus on key finals/medals, skip minor heats.

### Prompt

```md
### Olympic Games Events Weekly Listings Prompt (v1.0 – Multi-Edition Adaptable)

**Author:** Scott M 
**Goal:**  
Create a clean, user-friendly summary of upcoming Olympic events (competitions, medal events, ceremonies) during the next 7 days from today's date forward, for the current or specified Olympic Games (e.g., Winter Olympics Milano Cortina 2026, or future editions like LA 2028, French Alps 2030, etc.). Focus on major events across all sports, sorted by estimated popularity/viewership (e.g., prioritize high-profile sports like figure skating, alpine skiing, ice hockey over niche ones). Indicate broadcast/streaming details (primary channels/services like NBC/Peacock for US viewers) and translate event times to the user's local time zone (use provided user location/timezone). Organize by day with markdown tables for easy viewing planning, emphasizing key medal events, finals, and ceremonies while avoiding minor heats unless notable.

**Supported AIs (sorted by ability to handle this prompt well – from best to good):**  
1. Grok (xAI) – Excellent real-time updates, tool access for verification, handles structured tables/formats precisely.  
2. Claude 3.5/4 (Anthropic) – Strong reasoning, reliable table formatting, good at sourcing/summarizing schedules.  
3. GPT-4o / o1 (OpenAI) – Very capable with web-browsing plugins/tools, consistent structured outputs.  
4. Gemini 1.5/2.0 (Google) – Solid for calendars and lists, but may need prompting for separation of tables.  
5. Llama 3/4 variants (Meta) – Good if fine-tuned or with search; basic versions may require more guidance on format.

**Changelog:**  
- v1.0 (initial) – Adapted from sports events prompt; tailored for multi-day Olympic periods; includes broadcast/streaming, local time translation; sorted by popularity; flexible for future Games (e.g., specify edition if not current).

**Prompt Instructions:**

List major Olympic events (competitions, medal finals, key matches, ceremonies) occurring in the next 7 days from today's date forward for the ongoing or specified Olympic Games (default to current edition, e.g., Milano Cortina 2026 Winter Olympics; adaptable for future like LA 2028 Summer, French Alps 2030 Winter, etc.). Include Opening/Closing Ceremonies if within range.

Organize the information with a separate markdown table for each day that has at least one notable event. Place the date as a level-3 heading above each table (e.g., ### February 6, 2026). Skip days with no major activity—do not mention empty days.

Sort events within each day's table by estimated popularity (descending: use general viewership, global interest, and cultural impact—e.g., ice hockey finals > figure skating > curling; alpine skiing > biathlon). Use these exact columns in each table:  
- Name (e.g., 'Men's Figure Skating Short Program' or 'USA vs. Canada Ice Hockey Preliminary')  
- Sport/Discipline (e.g., 'Figure Skating' or 'Ice Hockey')  
- Broadcast/Streaming (primary platforms, e.g., 'NBC / Peacock' or 'Eurosport / Discovery+'; note US/international if relevant)  
- Local Time (translated to user's timezone, e.g., '8:00 PM EST'; include approximate duration or session if known, like '8:00-10:30 PM EST')  
- Notes (brief details like 'Medal Event' or 'Team USA Featured' or 'Live from Milan Arena'; keep concise)

Focus on events broadcast/streamed on major official Olympic broadcasters (e.g., NBC/Peacock in US, Eurosport/Discovery in Europe, official Olympics.com streams, host broadcaster RAI in Italy, etc.). Prioritize medal events, finals, high-profile matchups, and ceremonies. Only include events actually occurring during that exact week—exclude previews, recaps, or non-competitive activities unless exceptionally notable (e.g., torch relay if highlighted).

Base the list on the most up-to-date schedules from reliable sources (e.g., Olympics.com official schedule, NBCOlympics.com, TeamUSA.com, ESPN, BBC Sport, Wikipedia Olympic pages, official broadcaster sites). If conflicting times/dates exist, prioritize official IOC or host broadcaster announcements.

End the response with a brief notes section covering:  
- Time zone translation details (e.g., 'All times converted to EST based on user location in East Hartford, CT; Italy is typically 6 hours ahead during Winter Games'),  
- Broadcast caveats (e.g., regional availability, blackouts, subscription required for Peacock/Eurosport; check Olympics.com or local broadcaster for full streams),  
- Popularity sorting rationale (e.g., based on historical viewership data from previous Olympics),  
- General availability (e.g., many events stream live on Olympics.com or Peacock; replays often available),  
- And a note that Olympic schedules can shift due to weather, delays, or other factors—always verify directly on official sites/apps like Olympics.com or NBCOlympics.com.

If literally no major Olympic events in the week (e.g., outside Games period), state so briefly and suggest checking the full Olympic calendar or upcoming editions (e.g., LA 2028 Summer Olympics July 14–30, 2028).

To use for future Games: Replace or specify the edition in the prompt (e.g., "for the LA 2028 Summer Olympics") when running in future years.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [olympic-games-events-weekly-listings-prompt](https://prompts.chat/prompts/olympic-games-events-weekly-listings-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Spotlight, Entertainment |
| Contributors | thanos0000 |
| Updated At | 2026-02-08T17:00:20.391Z |
