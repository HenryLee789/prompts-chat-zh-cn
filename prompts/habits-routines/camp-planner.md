# 营地规划师

## 中文说明

用于让 AI 围绕「营地规划师」执行习惯管理与日程规划任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 制定习惯养成计划和日程安排
* 拆解目标、障碍和执行反馈
* 生成可持续的自我管理流程
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 自我提升用户
* 效率工具用户
* 教练

## 中文 Prompt

```md
{
  “研究配置”：{
    "topic": "面向物流的无车露营规划分析",
    “目标角色”：{
      "年龄组": "${age_group:30-35}",
      "group_size": "${group_size:4}",
      "travel_mode": "多式联运（公共交通 + 仅徒步旅行/步行）"
    },
    “output_lang”：“${lang:English}”
  },
  “上下文”：{
    “来源”：“${origin:Ankara Yenimahalle}”，
    "destination_region": "${destination:Nallihan}",
    “具体日期”：“${date:March 14, 2026}”，
    “优先事项”：[
      “物流可行性”，
      “安全”，
      “沉浸自然”，
      “极简主义/超轻方法”
    ]
  },
  “知识库要求”：{
    “运输分析”：[
      “主要干线巴士/火车线路和具体停靠位置”，
      “第一英里/最后一英里连接（当地班车、出租车可用性或距终点站的徒步距离）”，
      “周末班次和票务/付款方式（例如当地交通卡与现金）”
    ],
    “网站选择标准”：[
      “可达性：距公共交通下车点最多 5 公里的徒步距离”，
      “合法性：官方指定的露营地或安全、合法的野外露营区”，
      “资源可用性：靠近水源和基本必需品（厕所/市场）”
    ]
  },
  “目标”：{
    "primary_objective": "打造一个可持续、舒适、安全的无私家车露营计划。",
    “具体研究任务”：[
      “确定该地区 3 种不同的露营地类型（例如湖边、森林、高海拔）。”,
      “考虑严格的背包重量限制（最大 15-18 公斤），制定装备和膳食清单。”,
      “计算到最近的定居点和医疗设施的距离，以执行紧急协议。”,
      “制定周六早上出发、周日晚上返回的精确时间表。”
    ]
  },
  “输出结构”：{
    "format": "战略研究报告",
    “部分”：[
      "1. 运输物流矩阵",
      “2. 露营地选择（带有利弊分析）”，
      “3.装备和膳食计划（超轻和实用）”，
      “4. 周末时间表（按时间顺序）”，
      “5. 安全协议和本地内幕提示”
    ],
    “tone”：“分析性、指导性、安全性和鼓励性”
  }
}
```

---

## English Original

### Title

Camp Planner

### Description



### Prompt

```md
{
  "research_config": {
    "topic": "Logistics-Oriented and Car-Free Camping Planning Analysis",
    "target_persona": {
      "age_group": "${age_group:30-35}",
      "group_size": "${group_size:4}",
      "travel_mode": "Intermodal Transportation (Public Transit + Hiking/Walking Only)"
    },
    "output_lang": "${lang:English}"
  },
  "context": {
    "origin": "${origin:Ankara Yenimahalle}",
    "destination_region": "${destination:Nallihan}",
    "specific_date": "${date:March 14, 2026}",
    "priorities": [
      "Logistical feasibility",
      "Safety",
      "Nature immersion",
      "Minimalism/Ultralight approach"
    ]
  },
  "knowledge_base_requirements": {
    "transport_analysis": [
      "Main artery bus/train lines and specific stop locations",
      "First/Last Mile connectivity (Local shuttles, taxi availability, or trekking distance from the final stop)",
      "Weekend frequency and ticketing/payment methods (e.g., local transit cards vs. cash)"
    ],
    "site_selection_criteria": [
      "Accessibility: Max 5km hiking distance from public transit drop-off points",
      "Legality: Officially designated campsites or safe, legal wild camping zones",
      "Resource Availability: Proximity to water sources and basic necessities (WC/Market)"
    ]
  },
  "goal": {
    "primary_objective": "To create a sustainable, comfortable, and safe camping plan without a private vehicle.",
    "specific_research_tasks": [
      "Identify 3 distinct campsite typologies (e.g., lakeside, forest, high altitude) in the region.",
      "Curate a gear and meal list considering a strict backpack weight limit (max 15-18kg).",
      "Calculate distances to the nearest settlement and medical facilities for emergency protocols.",
      "Construct a precise timeline for a Saturday morning departure and Sunday evening return."
    ]
  },
  "output_structure": {
    "format": "Strategic Research Report",
    "sections": [
      "1. Transportation & Logistics Matrix",
      "2. Campsite Options (with Pros/Cons Analysis)",
      "3. Gear & Meal Planning (Ultralight & Practical)",
      "4. Step-by-Step Weekend Timeline (Chronological)",
      "5. Safety Protocols & Local Insider Tips"
    ],
    "tone": "Analytical, instructional, safe and encouraging"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
