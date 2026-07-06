---
id: "cmlbc82sf0001ic04nl7eluiq"
slug: "sports-events-weekly-listings-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/sports-events-weekly-listings-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "c8b4d99c501a8d83ad78d61656d71d10d4b8469e15923656c1f4f0e0e86c1165"
upstream_updated_at: "2026-02-06T20:28:40.080Z"
---
# 体育赛事每周列表提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[sports-events-weekly-listings-prompt](https://prompts.chat/prompts/sports-events-weekly-listings-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

创建未来 7 天内主要体育赛事（比赛、比赛、重要锦标赛）的清晰摘要。按受欢迎程度（收视率、粉丝群、文化影响）排序。包括广播/流媒体详细信息并将时间转换为用户的本地时区（来自用户信息）。使用每日降价表（日期为 ### 标题），跳过空的日子，只关注备受瞩目的赛事——没有次要或小众的体育赛事。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Entertainment 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
### 体育赛事每周列表提示（v1.0 – 初始版本）

**作者：** 斯科特 M 
**目标：**  
创建从今天开始的未来 7 天内即将举行的重大体育赛事的清晰、用户友好的摘要。包括热门体育联盟（例如 NFL、NBA、MLB、NHL、英超联赛等）的比赛、比赛、锦标赛或重要赛事。按估计受欢迎程度对赛事进行排序（基于一般收视率指标、粉丝群规模和文化影响，例如，优先考虑足球而不是冰壶）。指示广播详细信息（电视频道或流媒体服务）并将事件时间转换为用户的本地时区（基于提供的用户信息）。每天使用降价表进行组织，以便快速规划，专注于备受瞩目的活动，而不会受到小联盟或小众运动的干扰。

**支持的人工智能（按处理此提示的能力排序 - 从最好到良好）：**  
1. Grok (xAI) – 出色的实时更新、验证工具访问、精确处理结构化表格/格式。  
2. Claude 3.5/4（人类）——推理能力强，表格格式可靠，善于寻找/总结时间表。  
3. GPT-4o / o1 (OpenAI) – 非常有能力使用网络浏览插件/工具，一致的结构化输出。  
4. Gemini 1.5/2.0 (Google) – 适用于日历和列表，但可能需要提示分离表格。  
5. Llama 3/4 变体（元）——如果经过微调或带有搜索，效果会很好；基本版本可能需要更多格式指导。

**变更日志：**  
- v1.0（初始）——改编自电视首映提示；包含名称、运动、广播、当地时间的基本表；按受欢迎程度排序；包括广播和当地时间翻译。

**提示说明：**

列出从今天开始的 7 天内即将举行的重大体育赛事（比赛、比赛、锦标赛）。关注备受瞩目的联赛和赛事（例如 NFL、NBA、MLB、NHL、英超联赛或 MLS 等足球联赛、网球大满贯、高尔夫大满贯、UFC 比赛等）。排除小联盟或业余赛事，除非特别引人注目。

对于至少有一个值得注意的事件的每一天，使用单独的降价表来组织信息。将日期作为 3 级标题放置在每个表格上方（例如，### 2026 年 2 月 6 日）。跳过没有重大活动的日子——不要提及空虚的日子。

按估计受欢迎程度对每天表格中的赛事进行排序（降序：使用平均收视率、全球粉丝群或文化相关性等指标，例如 NFL 比赛 > NBA > 冰壶赛事）。在每个表中使用这些确切的列：  
- 姓名（例如“Super Bowl LV”或“Manchester United vs. Liverpool”）  
- 体育（例如“足球/NFL”或“篮球/NBA”）  
- 广播（电视频道或流媒体服务，例如“ESPN / Disney+”或“NBC / Peacock”；包括多个（如果适用））  
- 本地时间（转换为用户的本地时区，例如“8:00 PM EST”；包括相关持续时间，例如“8:00-11:00 PM EST”）  
- 注释（简短的细节，如“季后赛第一轮”或“关键比赛：涉及明星球员”；保持简洁）

重点关注主要网络或流媒体服务（例如 ESPN、福克斯体育、NBC、CBS、TNT、Prime Video、Peacock、Paramount+ 等）上播出的赛事。仅包含在那一周内实际发生的事件，不包括公告、回顾或选秀等非竞争性事件（除非像 NFL 选秀这样非常受欢迎）。

该列表基于来自可靠来源的最新赛程表（例如 ESPN、体育画报、Bleacher Report、NFL.com、NBA.com、MLB.com、PremierLeague.com、Wikipedia 体育日历、JustWatch 等广播信息等官方联盟网站）。如果存在冲突的时间表，请优先考虑官方联盟或广播公司的公告。

以简短的注释部分结束响应，内容包括：  
- 任何重要的时区详细信息（例如，如何根据用户位置转换时间），  
- 广播警告（例如，区域停电、需要订阅、检查直播选项）、  
- 受欢迎度排序的基本原理（例如，基于尼尔森等来源的收视率数据），  
- 请注意，日程安排可能会因天气、受伤或其他因素而发生变化——请务必直接在官方网站或应用程序上进行验证。

如果本周确实没有重大体育赛事，请简单说明并建议检查更广泛的范围或正在进行的热门赛季。
```

---

## English Original

### Title

Sports Events Weekly Listings Prompt

### Description

Create a clean summary of major sports events (games, matches, key tournaments) in the next 7 days. Sort by popularity (viewership, fan base, cultural impact). Include broadcast/streaming details and convert times to user's local timezone (from user info). Use daily markdown tables (date as ### heading), skip empty days, focus on high-profile events only—no minor or niche sports clutter.

### Prompt

```md
### Sports Events Weekly Listings Prompt (v1.0 – Initial Version)

**Author:** Scott M 
**Goal:**  
Create a clean, user-friendly summary of upcoming major sports events in the next 7 days from today's date forward. Include games, matches, tournaments, or key events across popular sports leagues (e.g., NFL, NBA, MLB, NHL, Premier League, etc.). Sort events by estimated popularity (based on general viewership metrics, fan base size, and cultural impact—e.g., prioritize football over curling). Indicate broadcast details (TV channels or streaming services) and translate event times to the user's local time zone (based on provided user info). Organize by day with markdown tables for quick planning, focusing on high-profile events without clutter from minor leagues or niche sports.

**Supported AIs (sorted by ability to handle this prompt well – from best to good):**  
1. Grok (xAI) – Excellent real-time updates, tool access for verification, handles structured tables/formats precisely.  
2. Claude 3.5/4 (Anthropic) – Strong reasoning, reliable table formatting, good at sourcing/summarizing schedules.  
3. GPT-4o / o1 (OpenAI) – Very capable with web-browsing plugins/tools, consistent structured outputs.  
4. Gemini 1.5/2.0 (Google) – Solid for calendars and lists, but may need prompting for separation of tables.  
5. Llama 3/4 variants (Meta) – Good if fine-tuned or with search; basic versions may require more guidance on format.

**Changelog:**  
- v1.0 (initial) – Adapted from TV Premieres prompt; basic table with Name, Sport, Broadcast, Local Time; sorted by popularity; includes broadcast and local time translation.

**Prompt Instructions:**

List upcoming major sports events (games, matches, tournaments) in the next 7 days from today's date forward. Focus on high-profile leagues and events (e.g., NFL, NBA, MLB, NHL, soccer leagues like Premier League or MLS, tennis Grand Slams, golf majors, UFC fights, etc.). Exclude minor league or amateur events unless exceptionally notable.

Organize the information with a separate markdown table for each day that has at least one notable event. Place the date as a level-3 heading above each table (e.g., ### February 6, 2026). Skip days with no major activity—do not mention empty days.

Sort events within each day's table by estimated popularity (descending order: use metrics like average viewership, global fan base, or cultural relevance—e.g., NFL games > NBA > curling events). Use these exact columns in each table:  
- Name (e.g., 'Super Bowl LV' or 'Manchester United vs. Liverpool')  
- Sport (e.g., 'Football / NFL' or 'Basketball / NBA')  
- Broadcast (TV channel or streaming service, e.g., 'ESPN / Disney+' or 'NBC / Peacock'; include multiple if applicable)  
- Local Time (translate to user's local time zone, e.g., '8:00 PM EST'; include duration if relevant, like '8:00-11:00 PM EST')  
- Notes (brief details like 'Playoffs Round 1' or 'Key Matchup: Star Players Involved'; keep concise)

Focus on events broadcast on major networks or streaming services (e.g., ESPN, Fox Sports, NBC, CBS, TNT, Prime Video, Peacock, Paramount+, etc.). Only include events that actually occur during that exact week—exclude announcements, recaps, or non-competitive events like drafts (unless highly popular like NFL Draft).

Base the list on the most up-to-date schedules from reliable sources (e.g., ESPN, Sports Illustrated, Bleacher Report, official league sites like NFL.com, NBA.com, MLB.com, PremierLeague.com, Wikipedia sports calendars, JustWatch for broadcast info). If conflicting schedules exist, prioritize official league or broadcaster announcements.

End the response with a brief notes section covering:  
- Any important time zone details (e.g., how times were translated based on user location),  
- Broadcast caveats (e.g., regional blackouts, subscription required, check for live streaming options),  
- Popularity sorting rationale (e.g., based on viewership data from sources like Nielsen),  
- And a note that schedules can change due to weather, injuries, or other factors—always verify directly on official sites or apps.

If literally no major sports events in the week, state so briefly and suggest checking a broader range or popular ongoing seasons.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [sports-events-weekly-listings-prompt](https://prompts.chat/prompts/sports-events-weekly-listings-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Entertainment |
| Contributors | thanos0000 |
| Updated At | 2026-02-06T20:28:40.080Z |
