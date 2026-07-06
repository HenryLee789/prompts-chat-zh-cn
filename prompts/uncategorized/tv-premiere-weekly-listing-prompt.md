---
id: "cmkub444v0001l404gyhlhw9i"
slug: "tv-premiere-weekly-listing-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/tv-premiere-weekly-listing-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "b113dbb73e3e49e8fdad8709fd711969b538fd41d982d303757c077eca189ae0"
upstream_updated_at: "2026-02-06T20:23:29.181Z"
---
# 电视首映每周列表提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[tv-premiere-weekly-listing-prompt](https://prompts.chat/prompts/tv-premiere-weekly-listing-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

创建一个简洁、用户友好的摘要，介绍新电视节目的首播和在指定的下周开始的回归季。输出每天使用单独的降价表（以日期为标题），重点关注主要的流媒体服务，同时注明突出的广播服务。这可以帮助用户快速计划他们的观看，而不会因空闲时间或过多的小型节目而造成混乱。

添加了下周将上线的电影

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Entertainment、Prompt Engineering 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
### 电视首映和回归季每周列表提示（v3.1 – 平衡重点）

**作者：** Scott M（在 Grok 的协助下进行了调整）  
**目标：**  
创建首播或回归的电视节目的简洁、用户友好的摘要 - 包括新季开始、中断/休息后恢复的剧集以及全新剧集首映 - 以及即将在流媒体服务上发布的新电影。突出显示令人兴奋的回归和新的开始，以便用户可以毫无混乱地计划所有必看的内容。

**支持的人工智能（按处理此提示的能力排序 - 从最好到良好）：**  
1. Grok (xAI) – 出色的实时更新、验证工具访问、精确处理结构化表格/格式。  
2. Claude 3.5/4（人类）——推理能力强，表格格式可靠，善于寻找/总结时间表。  
3. GPT-4o / o1 (OpenAI) – 非常有能力使用网络浏览插件/工具，一致的结构化输出。  
4. Gemini 1.5/2.0 (Google) – 适用于日历和列表，但可能需要提示分离表格。  
5. Llama 3/4 变体（元）——如果经过微调或带有搜索，效果会很好；基本版本可能需要更多格式指导。

**变更日志：**  
- v1.0（初始） – 包含日期、名称、新/返回、网络/服务的基本表。  
- v1.1 – 添加流派栏；每天切换到单独的表格，并带有日期标题，以实现更清晰的布局（没有日期列）。  
- v1.2 – 添加了此结构化标题（标题、作者、目标、支持的 AI、变更日志）；为了清晰度和可重用性进行了细微的措辞调整。  
- v1.3 – 修复了日期范围，自动从当前日期向前展望 7 天。  
- v2.0 – 扩展至包括发布到流媒体服务的电影；添加了类型列来区分电视与电影内容。  
- v3.0 – 将主要焦点转向回归电视节目（新季或休息后重新开始）；不再强调全新系列的首映，但仍然包括它们。  
- v3.1 – 平衡重点：将新剧集首播和回归季/重启同等重要；删除了任何优先级/去强调语言；更新了对称性的目标/说明。

**提示说明：**

列出首播或回归的电视节目（新季开始、从中断/中断中恢复的剧集以及全新剧集首播），以及从今天开始的未来 7 天内发布到流媒体服务的新电影。

使用单独的降价表来组织每天至少有一次值得注意的首映/回归/发布的信息。将日期作为 3 级标题放置在每个表格上方（例如，### 2026 年 2 月 6 日）。跳过没有重大活动的日子——不要提及空虚的日子。

在每个表中使用这些确切的列：  
- 姓名  
- 类型（“电视节目”或“电影”）  
- 新剧或回归（对于电视：使用“回归 - 第 X 季”表示新季/休息后重新开始，例如“回归 - 第 4 季”或“中断后回归 - 第 2 季”；使用“新”表示全新剧集首播；添加“（所有剧集掉落）”或“（季节第 2 部分）”等注释（如果适用）。对于电影：使用“新”或指定是否为新剧“影院 → 流媒体”发行，如果值得注意，则附有原始发行日期）  
- 网络/服务  
- 类型（保持简洁，主要 1-3 个类型，以“/”分隔，例如“犯罪剧/惊悚片”或“动作/科幻片”）

主要关注主要流媒体服务（Netflix、Disney+、Apple TV+、Paramount+、Hulu、Prime Video、Max 等），但也包括引人注目的广播/有线电视首播或高调回报（例如，主要网络剧、真人秀比赛恢复）。对于电影，包括转向流媒体的院线电影、原创流媒体电影以及著名的直接流媒体发行的电影。排除尚未在流媒体上播放的有限影院版本。仅包含在该周实际首播/发布的内容，不包括预告片、公告或没有首播/新季开始的正在进行的节目。

该列表基于来自可靠来源的最新首映时间表（例如，Deadline、Hollywood Reporter、Rotten Tomatoes、TVLine、Netflix Tudum、Disney+ 公告、Metacritic、维基百科电视/电影页面、JustWatch）。如果存在冲突日期，请优先考虑官方网络/服务公告。

以简短的注释部分结束响应，内容包括：  
- 任何重要的投递时间（例如，时区具体信息，如东部时间凌晨 3 点/太平洋时间午夜），  
- 发行风格（电视的完整剧集与每周剧集与分集；电影的影院窗口信息），  
- 可用性注意事项（例如，区域限制、检查平台的确切时间）、  
- 请注意，时间表可能会发生变化 - 请务必直接在服务上进行验证。

如果本周确实没有重大首映、回归或发布，请简单说明并建议检查更广泛的范围或流行的正在进行的内容。
```

---

## English Original

### Title

TV Premiere Weekly Listing Prompt

### Description

Create a clean, user-friendly summary of new TV show premieres and returning season starts in a specified upcoming week. The output uses separate markdown tables per day (with date as heading), focusing on major streaming services while noting prominent broadcast ones. This helps users quickly plan their viewing without clutter from empty days or excessive minor shows.

Added movies coming to streaming in the next week

### Prompt

```md
### TV Premieres & Returning Seasons Weekly Listings Prompt (v3.1 – Balanced Emphasis)

**Author:** Scott M (tweaked with Grok assistance)  
**Goal:**  
Create a clean, user-friendly summary of TV shows premiering or returning — including new seasons starting, series resuming after a hiatus/break, and brand-new series premieres — plus new movies releasing to streaming services in the upcoming week. Highlight both exciting comebacks and fresh starts so users can plan for all the must-watch drops without clutter.

**Supported AIs (sorted by ability to handle this prompt well – from best to good):**  
1. Grok (xAI) – Excellent real-time updates, tool access for verification, handles structured tables/formats precisely.  
2. Claude 3.5/4 (Anthropic) – Strong reasoning, reliable table formatting, good at sourcing/summarizing schedules.  
3. GPT-4o / o1 (OpenAI) – Very capable with web-browsing plugins/tools, consistent structured outputs.  
4. Gemini 1.5/2.0 (Google) – Solid for calendars and lists, but may need prompting for separation of tables.  
5. Llama 3/4 variants (Meta) – Good if fine-tuned or with search; basic versions may require more guidance on format.

**Changelog:**  
- v1.0 (initial) – Basic table with Date, Name, New/Returning, Network/Service.  
- v1.1 – Added Genre column; switched to separate tables per day with date heading for cleaner layout (no Date column).  
- v1.2 – Added this structured header (title, author, goal, supported AIs, changelog); minor wording tweaks for clarity and reusability.  
- v1.3 – Fixed date range to look forward 7 days from current date automatically.  
- v2.0 – Expanded to include movies releasing to streaming services; added Type column to distinguish TV vs Movie content.  
- v3.0 – Shifted primary focus to returning TV shows (new seasons or restarts after breaks); de-emphasized brand-new series premieres while still including them.  
- v3.1 – Balanced emphasis: Treat new series premieres and returning seasons/restarts as equally important; removed any prioritization/de-emphasis language; updated goal/instructions for symmetry.

**Prompt Instructions:**

List TV shows premiering or returning (new seasons starting, series resuming from hiatus/break, and brand-new series premieres), plus new movies releasing to streaming services in the next 7 days from today's date forward.

Organize the information with a separate markdown table for each day that has at least one notable premiere/return/release. Place the date as a level-3 heading above each table (e.g., ### February 6, 2026). Skip days with no major activity—do not mention empty days.

Use these exact columns in each table:  
- Name  
- Type (either 'TV Show' or 'Movie')  
- New or Returning (for TV: use 'Returning - Season X' for new seasons/restarts after break, e.g., 'Returning - Season 4' or 'Returning after hiatus - Season 2'; use 'New' for brand-new series premieres; add notes like '(all episodes drop)' or '(Part 2 of season)' if applicable. For Movies: use 'New' or specify if it's a 'Theatrical → Streaming' release with original release date if notable)  
- Network/Service  
- Genre (keep concise, primary 1-3 genres separated by ' / ', e.g., 'Crime Drama / Thriller' or 'Action / Sci-Fi')

Focus primarily on major streaming services (Netflix, Disney+, Apple TV+, Paramount+, Hulu, Prime Video, Max, etc.), but include notable broadcast/cable premieres or returns if high-profile (e.g., major network dramas, reality competitions resuming). For movies, include theatrical films moving to streaming, original streaming films, and notable direct-to-streaming releases. Exclude limited theatrical releases not yet on streaming. Only include content that actually premieres/releases during that exact week—exclude trailers, announcements, or ongoing shows without a premiere/new season starting.

Base the list on the most up-to-date premiere schedules from reliable sources (e.g., Deadline, Hollywood Reporter, Rotten Tomatoes, TVLine, Netflix Tudum, Disney+ announcements, Metacritic, Wikipedia TV/film pages, JustWatch). If conflicting dates exist, prioritize official network/service announcements.

End the response with brief notes section covering:  
- Any important drop times (e.g., time zone specifics like 3AM ET / midnight PT),  
- Release style (full binge drop vs. weekly episodes vs. split parts for TV; theatrical window info for movies),  
- Availability caveats (e.g., regional restrictions, check platform for exact timing),  
- And a note that schedules can shift—always verify directly on the service.

If literally no major premieres, returns, or releases in the week, state so briefly and suggest checking a broader range or popular ongoing content.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [tv-premiere-weekly-listing-prompt](https://prompts.chat/prompts/tv-premiere-weekly-listing-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Entertainment, Prompt Engineering |
| Contributors | thanos0000 |
| Updated At | 2026-02-06T20:23:29.181Z |
