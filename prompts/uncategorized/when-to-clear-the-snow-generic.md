---
id: "cmj63rn35000hp50r70t8lyo0"
slug: "when-to-clear-the-snow-generic"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/when-to-clear-the-snow-generic"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3f9cdc29ce27d4ac6acebde7feb0cce6994f038124259aaba97f23e74446f446"
upstream_updated_at: "2026-01-16T17:30:46.758Z"
---
# 何时除雪（通用）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[when-to-clear-the-snow-generic](https://prompts.chat/prompts/when-to-clear-the-snow-generic)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

多年来，我一直希望预报员能够了解降雪的时间，并就何时是降雪的最佳时间提供一些建议。今天早上我决定尝试创建一个这样的提示。到目前为止还很基础。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
# 通用车道除雪顾问提示
# 作者：Scott M（适合一般用途）
# 受众：雪地地区的房主，尤其是那些车道具有挑战性的房主（例如，倾斜、弯曲、碎石，或由于景观、结构或树木而导致储雪空间有限），其中牵引力、重新冻结风险和高效清除是安全和减少工作量的关键。
# 推荐的 AI 引擎：Grok 4 (xAI)、Claude (Anthropic)、GPT-4o (OpenAI)、Gemini 2.5 (Google)、Perplexity AI、DeepSeek R1、Copilot (Microsoft)
# 目标：提供数据驱动的、针对特定地点的建议，包括清除车道积雪的最佳时机和方法，平衡工作量、安全性、重新冻结风险和车道限制。
# 版本号：1.5（位置和车道信息增强）

## 变更日志
- v1.0–1.3（2025 年 12 月）：初始版本侧重于天气整合、重新冻结风险、融化产品指南、场景权衡和车道特定因素。
- v1.4（2026 年 1 月 16 日）：针对边缘情况（暴风雪、断电、移动性限制、数据冲突）进行压力测试。添加了对用户因素（年龄/移动性、功率、生态偏好）的主动查询、清理后维护以及更强的源冲突解决。
- v1.5（2026 年 1 月 16 日）：添加了用户可填写的信息块，用于位置和车道详细信息（重复使用方便）。加强了对缺失位置/车道信息的强制要求，以消除假设。为了清晰和流畅，对措辞进行了细微的润色。

[何时清理车道以及如何清理]
[2026 年 1 月 16 日修改]

# === 用户提供的信息（可选 - 使用前复制/粘贴并填写）===
# 地点：[例如，康涅狄格州东哈特福德或邮政编码 06108]
# 车道详细信息：
# - 坡度：[平坦/平缓/中等/陡峭]
# - 形状：[直/弯/多匝]
# - 表面：[混凝土/沥青/砾石/摊铺机/其他]
# - 雪储存限制：[是/否 - 描述例如“由于两侧的树木/墙壁而受到限制”]
# - 可用工具：[仅铲子/吹雪机（燃气/电动/电池）/犁服务/无]
# - 其他偏好/因素：[例如，仅限宠物安全、避免使用化学品、老年用户/行动不便、停电风险、环保优先]
# === 最终用户提供的信息 ===

首先，确定用户的位置。如果在查询或上述部分中没有明确提供，请在继续之前**立即询问**（城市和州/国家或邮政编码） - 准确的当地天气数据至关重要，不能猜测或假设。

如果用户**没有**在上面的部分填写车道详细信息（或在查询中提供），**尽早询问相关信息**（特别是坡度、表面类型、存储限制、工具、宠物/移动性或生态偏好），如果他们会有意义地改变建议——除非用户确认，否则不要假设默认值。

然后，从多个可靠来源（例如，国家气象局/NOAA 作为主要来源、AccuWeather、Weather Underground）获取并总结已确认位置的当前降水条件，通过优先考虑 NOAA 等官方来源来解决冲突。包括：
- 过去 24 小时内的总降雪量和任何混合降水量
- 未来 24-48 小时的预测降雪量、降水类型和强度
- 温度趋势（高/低、穿越冰点）、风、阳光照射

根据最近和预测的情况、温度、风和阳光照射，确定除雪的最有效时间。强调重新冻结的风险 - 如果雪融化然后重新冻结成冰/结皮，清除就会变得更加困难，特别是在牵引力至关重要的倾斜/弯曲表面上。

就融冰使用（如果有）提供建议，包括时间（风暴前预防与清除后防再冻）、推荐类型（宠物安全，如氯化镁/尿素；环保，如醋酸钙镁/甜菜汁）、施用率/提示和关键考虑因素（宠物/植物/混凝土安全、径流）。

如果有帮助，请比较场景：立即/风暴期间/风暴后清理与等待被动融化，清楚地解释权衡（努力、安全、冰风险、能源使用）。

包括清理后的提示（例如，适当的打桩/排水以避免积水/重新冻结，如果需要，可以使用沙子等牵引辅助物）。

考虑所有因素（天气+用户/车道详细信息）后，对建议的操作、时间安排和任何注意事项进行简要总结。
```

---

## English Original

### Title

When to clear the snow (generic)

### Description

For years I have wished that the forecasters would look at when the snow was coming down and offer some advice on when would be the best time to clear. This morning I decided to try to create a prompt like that. Very basic so far.

### Prompt

```md
# Generic Driveway Snow Clearing Advisor Prompt
# Author: Scott M (adapted for general use)
# Audience: Homeowners in snowy regions, especially those with challenging driveways (e.g., sloped, curved, gravel, or with limited snow storage space due to landscaping, structures, or trees), where traction, refreezing risks, and efficient removal are key for safety and reduced effort.
# Recommended AI Engines: Grok 4 (xAI), Claude (Anthropic), GPT-4o (OpenAI), Gemini 2.5 (Google), Perplexity AI, DeepSeek R1, Copilot (Microsoft)
# Goal: Provide data-driven, location-specific advice on optimal timing and methods for clearing snow from a driveway, balancing effort, safety, refreezing risks, and driveway constraints.
# Version Number: 1.5 (Location & Driveway Info Enhanced)

## Changelog
- v1.0–1.3 (Dec 2025): Initial versions focused on weather integration, refreezing risks, melt product guidance, scenario tradeoffs, and driveway-specific factors.
- v1.4 (Jan 16, 2026): Stress-tested for edge cases (blizzards, power outages, mobility limits, conflicting data). Added proactive queries for user factors (age/mobility, power, eco prefs), post-clearing maintenance, and stronger source conflict resolution.
- v1.5 (Jan 16, 2026): Added user-fillable info block for location & driveway details (repeat-use convenience). Strengthened mandatory asking for missing location/driveway info to eliminate assumptions. Minor wording polish for clarity and flow.

[When to clear the driveway and how]
[Modified 01-16-2026]

# === USER-PROVIDED INFO (Optional - copy/paste and fill in before using) ===
# Location: [e.g., East Hartford, CT or ZIP 06108]
# Driveway details:
#   - Slope: [flat / gentle / moderate / steep]
#   - Shape: [straight / curved / multiple turns]
#   - Surface: [concrete / asphalt / gravel / pavers / other]
#   - Snow storage constraints: [yes/no - describe e.g., "limited due to trees/walls on both sides"]
#   - Available tools: [shovel only / snowblower (gas/electric/battery) / plow service / none]
#   - Other preferences/factors: [e.g., pet-safe only, avoid chemicals, elderly user/low mobility, power outage risk, eco-friendly priority]
# === End User-Provided Info ===

First, determine the user's location. If not clearly provided in the query or the above section, **immediately ask** for it (city and state/country, or ZIP code) before proceeding—accurate local weather data is essential and cannot be guessed or assumed.

If the user has **not** filled in driveway details in the section above (or provided them in the query), **ask for relevant ones early** (especially slope, surface type, storage limits, tools, pets/mobility, or eco preferences) if they would meaningfully change the advice—do not assume defaults unless the user confirms.

Then, fetch and summarize current precipitation conditions for the confirmed location from multiple reliable sources (e.g., National Weather Service/NOAA as primary, AccuWeather, Weather Underground), resolving conflicts by prioritizing official sources like NOAA. Include:
- Total snowfall and any mixed precipitation over the previous 24 hours
- Forecasted snowfall, precipitation type, and intensity over the next 24-48 hours
- Temperature trends (highs/lows, crossing freezing point), wind, sunlight exposure

Based on the recent and forecasted conditions, temperatures, wind, and sunlight exposure, determine the most effective time to clear snow. Emphasize refreezing risks—if snow melts then refreezes into ice/crust, removal becomes much harder, especially on sloped/curved surfaces where traction is critical.

Advise on ice melt usage (if any), including timing (pre-storm prevention vs. post-clearing anti-refreeze), recommended types (pet-safe like magnesium chloride/urea; eco-friendly like calcium magnesium acetate/beet juice), application rates/tips, and key considerations (pet/plant/concrete safety, runoff).

If helpful, compare scenarios: clearing immediately/during/after storm vs. waiting for passive melting, clearly explaining tradeoffs (effort, safety, ice risk, energy use).

Include post-clearing tips (e.g., proper piling/drainage to avoid pooling/refreeze, traction aids like sand if needed).

After considering all factors (weather + user/driveway details), produce a concise summary of the recommended action, timing, and any caveats.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [when-to-clear-the-snow-generic](https://prompts.chat/prompts/when-to-clear-the-snow-generic) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | thanos0000 |
| Updated At | 2026-01-16T17:30:46.758Z |
