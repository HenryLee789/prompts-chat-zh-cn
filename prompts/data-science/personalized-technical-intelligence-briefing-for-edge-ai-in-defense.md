# 国防边缘AI的个性化技术情报简报

## 中文说明

为专注于国防的计算机视觉研究人员生成量身定制的情报简报，强调边缘AI和威胁检测创新。

## 使用场景

* 分析数据、指标、模型和实验结果
* 生成数据处理、统计分析或建模方案
* 输出结构化结论、风险和下一步建议
* 围绕 AI Tools、Data Science、Machine Learning 等主题生成结构化结果

## 适用人群

* 数据分析师
* 数据科学家
* 机器学习工程师
* 开发者

## 中文 Prompt

```md
{
  “开场”：“${bibleVerse}”，
  “关键情报”：[
    {
      "标题": "${headline1}",
      “来源”：“${sourceLink1}”，
      "technicalSummary": "${technicalSummary1}",
      "relevanceScore": "${relevanceScore1}",
      “actionableInsight”：“${actionableInsight1}”
    },
    {
      "标题": "${headline2}",
      “来源”：“${sourceLink2}”，
      "technicalSummary": "${technicalSummary2}",
      "relevanceScore": "${relevanceScore2}",
      “actionableInsight”：“${actionableInsight2}”
    },
    // 总共添加 8 个项目
  ],
  “技术深度潜水”：[
    {
      "breakthroughItem": "${breakthrough1}",
      “实施详细信息”：“${implementationDetails1}”
    },
    {
      "breakthroughItem": "${breakthrough2}",
      “实施详细信息”：“${implementationDetails2}”
    }
    // 最多添加 3 个项目
  ],
  “优先智能目标”：{
    “主要”：[
      “假阳性减少方法”，
      “资源受限硬件的边缘AI优化”，
      “实时推理基准”
    ],
    “次要”：[
      《国防采购公告》，
      “SBIR/STTR 机会”，
      “反无人机技术”
    ],
    “三级”：[
      “PyTorch/OpenCV 更新”，
      “Rust 嵌入式框架”，
      《军用机器人合同》
    ]
  },
  “来源优先”：[
    “arXiv（cs.CV，cs.RO，cs.LG）”，
    “突破防御”，
    《战区》、
    “NVIDIA 开发者博客”
  ],
  “排除”：[
    “消费技术，除非直接适用”，
    “没有实施路径的理论论文”，
    “重述新闻”，
    “没有实质内容的一般AI炒作”
  ],
  “增强功能”：{
    “基准比较表”：true，
    “reproducibleResearchLinks”：正确，
    “会议截止日期”：正确，
    “defenseContractAwards”：正确，
    “每周趋势图”：true
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Personalized Technical Intelligence Briefing for Edge AI in Defense

### Description

Generate a tailored intelligence briefing for defense-focused computer vision researchers, emphasizing Edge AI and threat detection innovations.

### Prompt

```md
{
  "opening": "${bibleVerse}",
  "criticalIntelligence": [
    {
      "headline": "${headline1}",
      "source": "${sourceLink1}",
      "technicalSummary": "${technicalSummary1}",
      "relevanceScore": "${relevanceScore1}",
      "actionableInsight": "${actionableInsight1}"
    },
    {
      "headline": "${headline2}",
      "source": "${sourceLink2}",
      "technicalSummary": "${technicalSummary2}",
      "relevanceScore": "${relevanceScore2}",
      "actionableInsight": "${actionableInsight2}"
    },
    // Add up to 8 total items
  ],
  "technicalDeepDive": [
    {
      "breakthroughItem": "${breakthrough1}",
      "implementationDetails": "${implementationDetails1}"
    },
    {
      "breakthroughItem": "${breakthrough2}",
      "implementationDetails": "${implementationDetails2}"
    }
    // Add up to 3 items
  ],
  "priorityIntelligenceTargets": {
    "primary": [
      "False positive reduction methodologies",
      "Edge AI optimization for resource-constrained hardware",
      "Real-time inference benchmarks"
    ],
    "secondary": [
      "Defense procurement announcements",
      "SBIR/STTR opportunities",
      "Counter-UAS technologies"
    ],
    "tertiary": [
      "PyTorch/OpenCV updates",
      "Rust embedded frameworks",
      "Military robotics contracts"
    ]
  },
  "sourcesToPrioritize": [
    "arXiv (cs.CV, cs.RO, cs.LG)",
    "Breaking Defense",
    "The War Zone",
    "NVIDIA Developer Blog"
  ],
  "exclusions": [
    "Consumer tech unless directly applicable",
    "Theoretical papers without implementation paths",
    "Rehashed news",
    "General AI hype without substance"
  ],
  "enhancedFeatures": {
    "benchmarkComparisonTables": true,
    "reproducibleResearchLinks": true,
    "conferenceDeadlines": true,
    "defenseContractAwards": true,
    "weeklyTrendChart": true
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
