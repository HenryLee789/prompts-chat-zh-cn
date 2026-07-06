---
id: "cml6j49lm0001lg04fa43g0p1"
slug: "recursive-niche-deconstruction-for-market-research"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/recursive-niche-deconstruction-for-market-research"
category: "research-analysis"
category_name: "Research & Analysis"
category_zh: "研究与分析"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a2ee2ceaf06edbc9d4e1e6a436262367bd7c1912873d936e9f8eed5cbd272ebf"
upstream_updated_at: "2026-02-03T12:05:02.801Z"
---
# 市场研究的递归利基解构

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[recursive-niche-deconstruction-for-market-research](https://prompts.chat/prompts/recursive-niche-deconstruction-for-market-research)  
> 分类：研究与分析（Research & Analysis / `research-analysis`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

执行递归利基解构，以确定特定市场垂直领域的主导公司。分析每个利基细分级别的市场规模和竞争格局。

## 使用场景

- 用于研究与分析相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Market Analysis、Business Strategy 等主题快速生成可复用结果。

## 适用人群

- 研究人员
- 分析师
- 产品经理

## 中文 Prompt 正文

```md
{
  “行业”：“${industry}”，
  “区域”：“${region}”，
  “树”：{
    "level": "宏",
    “名称”：“...”，
    "market_valuation": "$X",
    “顶级玩家”：[
      {
        “名称”：“A公司”，
        "type": "现任",
        “焦点”：“广泛”
      },
      {
        "name": "B公司",
        "type": "现任",
        “焦点”：“广泛”
      }
    ],
    “孩子们”：[
      {
        "level": "子利基/微观",
        “名称”：“...”，
        "narrowing_variable": "...",
        "market_valuation": "$X",
        “顶级玩家”：[
          {
            "name": "启动C",
            “类型”：“专家”，
            “焦点”：“垂直化”
          },
          {
            "name": "工具D",
            "type": "微SaaS",
            “焦点”：“超具体”
          }
        ],
        “孩子们”：[]
      }
    ]
  },
  “关键字分析”：{
    "monthly_traffic": "{特定区域的流量数据}",
    "competitiveness": "{地区特定竞争力数据}",
    “潜在关键字”：[
      {
        “关键字”：“...”，
        "交通": "...",
        “竞争”：“……”
      }
    ]
  }
}
```

---

## English Original

### Title

Recursive Niche Deconstruction for Market Research

### Description

Perform a Recursive Niche Deconstruction to identify dominant companies in specific market verticals. Analyze the market size and competitive landscape at each level of niche breakdown.

### Prompt

```md
{
  "industry": "${industry}",
  "region": "${region}",
  "tree": {
    "level": "Macro",
    "name": "...",
    "market_valuation": "$X",
    "top_players": [
      {
        "name": "Company A",
        "type": "Incumbent",
        "focus": "Broad"
      },
      {
        "name": "Company B",
        "type": "Incumbent",
        "focus": "Broad"
      }
    ],
    "children": [
      {
        "level": "Sub-Niche/Micro",
        "name": "...",
        "narrowing_variable": "...",
        "market_valuation": "$X",
        "top_players": [
          {
            "name": "Startup C",
            "type": "Specialist",
            "focus": "Verticalized"
          },
          {
            "name": "Tool D",
            "type": "Micro-SaaS",
            "focus": "Hyper-Specific"
          }
        ],
        "children": []
      }
    ]
  },
  "keyword_analysis": {
    "monthly_traffic": "{region-specific traffic data}",
    "competitiveness": "{region-specific competitiveness data}",
    "potential_keywords": [
      {
        "keyword": "...",
        "traffic": "...",
        "competition": "..."
      }
    ]
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [recursive-niche-deconstruction-for-market-research](https://prompts.chat/prompts/recursive-niche-deconstruction-for-market-research) |
| Category | Research & Analysis (`research-analysis`) |
| Type | `TEXT` |
| Tags | Market Analysis, Business Strategy |
| Contributors | amvicioushecs |
| Updated At | 2026-02-03T12:05:02.801Z |
