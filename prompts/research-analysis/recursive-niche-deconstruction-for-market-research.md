# 市场研究的递归利基解构

## 中文说明

执行递归利基解构，以确定特定市场垂直领域的主导公司。分析每个利基细分级别的市场规模和竞争格局。

## 使用场景

* 拆解研究问题、证据和结论
* 生成调研框架、分析维度和报告结构
* 围绕复杂主题输出可追溯的判断
* 围绕 Market Analysis、Business Strategy 等主题生成结构化结果

## 适用人群

* 研究人员
* 分析师
* 产品经理

## 中文 Prompt

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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
