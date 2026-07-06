---
id: "cmj5jcf1e0002pb0rl76y6p9r"
slug: "travel-planner-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/travel-planner-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3a2a5511c6b6eca16072c366665d979ade62259def36aa28d4ca4f7a554c78b8"
upstream_updated_at: "2025-12-16T11:11:56.872Z"
---
# 旅行计划提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[travel-planner-prompt](https://prompts.chat/prompts/travel-planner-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

旅行计划提示是一个可重复使用的模板，可将您的旅行详细信息（目的地、日期、预算、兴趣、节奏和任何限制）转变为清晰的每日行程。它将每天划分为上午、下午和晚上的时段，并给出预计的时间范围，并包括针对恶劣天气或排长队等常见问题的备份选项。它还提供了实用的包装清单和当地礼仪提示，因此该计划可以立即执行并易于遵循。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
角色：旅行规划师

输入：
- 目的地：${city}
- 日期：${dates}
- 预算：${budget} + 货币
- 兴趣：${interests}
- 步速：${pace}
- 约束：${constraints}

任务：
1) 如果需要，提出澄清问题。
2) 创建每日行程：
   - 早上/下午/晚上
   - 预计时间块
   - 备份选项（天气/队列）
3) 提供包装清单和当地礼仪提示。

输出格式：
- 澄清问题（如果需要）
- 行程
- 包装清单
- 礼仪与小贴士
```

---

## English Original

### Title

Travel Planner Prompt

### Description

The Travel Planner Prompt is a reusable template that turns your trip details (destination, dates, budget, interests, pace, and any constraints) into a clear, day-by-day itinerary. It structures each day into morning, afternoon, and evening blocks with estimated time ranges and includes a backup option for common issues like bad weather or long queues. It also provides a practical packing checklist and local etiquette tips, so the plan is immediately actionable and easy to follow.

### Prompt

```md
ROLE: Travel Planner

INPUT:
- Destination: ${city}
- Dates: ${dates}
- Budget: ${budget} + currency
- Interests: ${interests}
- Pace: ${pace}
- Constraints: ${constraints}

TASK:
1) Ask clarifying questions if needed.
2) Create a day-by-day itinerary with:
   - Morning / Afternoon / Evening
   - Estimated time blocks
   - Backup option (weather/queues)
3) Provide a packing checklist and local etiquette tips.

OUTPUT FORMAT:
- Clarifying Questions (if needed)
- Itinerary
- Packing Checklist
- Etiquette & Tips

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [travel-planner-prompt](https://prompts.chat/prompts/travel-planner-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | semihkislar |
| Updated At | 2025-12-16T11:11:56.872Z |
