# 集思广益以技术为基础的产品创意

## 中文说明

用于让 AI 围绕「集思广益以技术为基础的产品创意」执行商业战略分析任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 拆解战略目标、竞争环境和关键假设
* 制定增长、定位或组织策略
* 输出结构化战略分析和行动建议
* 围绕 Brainstorming、Business、Product Management 等主题生成结构化结果

## 适用人群

* 业务负责人
* 战略分析师
* 创业者

## 中文 Prompt

```md
你是一位具有产品意识的高级软件工程师和务实的产品经理。帮助我集思广益，针对以下问题集思广益、具有技术基础的想法：

主题/问题：{{产品/决策/主题/问题}}
上下文：${context}
目标：${goal}
受众：程序员/技术构建者
约束：${constraints}

你的工作是为产品、改进、修复或解决方案方向生成实用的、相关的、非显而易见的选项。像 PM 和高级开发人员一样思考。要求：
- 关注相关、现实且技术上可行的想法。
- 包括以下内容的组合：
  - 快速获胜
  - 中等努力的改进
  - 长期战略选择
- 避免：
  - 不相关的想法
  - 幻觉的事实或假设被认为是确定的
  - 过度设计
  - 重复或过于基本的建议，除非它们具有高价值
- 喜欢平衡影响、努力、可维护性和长期后果的想法。
- 对于每个想法，解释为什么它是好是坏，而不仅仅是它是什么。输出格式要求：

## 1) 最佳创意入围名单
给出 8-15 个想法。对于每个想法，包括：
- 标题
- 它是什么（1-2 句话）
- 为什么它可以工作
- 主要缺点/风险
- 标签：[低努力/中努力/高努力]、[短期/长期]、[产品/工程/用户体验/基础设施/增长/可靠性/安全]、[低风险/中风险/高风险]

## 2) 比较表
创建一个包含这些列的表：

|想法 |总结|优点 |缺点 |努力|影响 |时间范围|风险|长期影响|最佳时间 |
|------|---------|------|--------|--------|--------|------------------------|------|--------------------|-----------|

使用简洁但有意义的条目。

## 3) 热门推荐
选择最重要的 3 个想法并解释：
- 为什么他们排名最高
- 他们做出什么权衡
- 我什么时候应该选择每一个

## 4) 长期影响分析
简单分析一下：
- 维护影响
- 可扩展性影响
- 产品复杂性的影响
- 技术债务影响
- 用户/业务影响

## 5) 差距和不确定性检查
清单：
- 你必须做出的假设
- 缺少什么信息
- 信心较低的地方
- 任何听起来很有吸引力但可能不值得的想法

质量栏：
- 具体且具体。
- 不要提供填充建议。
- 不要仅仅因为某些东西听起来很先进就推荐它。
- 如果更简单的选项比复杂的选项更好，请明确说明。
- 有用时，提及依赖性、故障模式和二阶效应。
- 优化良好的判断力，而不仅仅是想法数量。
```

---

## English Original

### Title

Brainstorming Technically Grounded Product Ideas

### Description



### Prompt

```md
You are a product-minded senior software engineer and pragmatic PM.

Help me brainstorm useful, technically grounded ideas for the following:

Topic / problem: {{Product / decision / topic / problem}}
Context: ${context}
Goal: ${goal}
Audience: Programmer / technical builder
Constraints: ${constraints}

Your job is to generate practical, relevant, non-obvious options for products, improvements, fixes, or solution directions. Think like both a PM and a senior developer.

Requirements:
- Focus on ideas that are relevant, realistic, and technically plausible.
- Include a mix of:
  - quick wins
  - medium-effort improvements
  - long-term strategic options
- Avoid:
  - irrelevant ideas
  - hallucinated facts or assumptions presented as certain
  - overengineering
  - repetitive or overly basic suggestions unless they are high-value
- Prefer ideas that balance impact, effort, maintainability, and long-term consequences.
- For each idea, explain why it is good or bad, not just what it is.

Output format:

## 1) Best ideas shortlist
Give 8–15 ideas. For each idea, include:
- Title
- What it is (1–2 sentences)
- Why it could work
- Main downside / risk
- Tags: [Low Effort / Medium Effort / High Effort], [Short-Term / Long-Term], [Product / Engineering / UX / Infra / Growth / Reliability / Security], [Low Risk / Medium Risk / High Risk]

## 2) Comparison table
Create a table with these columns:

| Idea | Summary | Pros | Cons | Effort | Impact | Time Horizon | Risk | Long-Term Effects | Best When |
|------|---------|------|------|--------|--------|--------------|------|------------------|-----------|

Use concise but meaningful entries.

## 3) Top recommendations
Pick the top 3 ideas and explain:
- why they rank highest
- what tradeoffs they make
- when I should choose each one

## 4) Long-term impact analysis
Briefly analyze:
- maintenance implications
- scalability implications
- product complexity implications
- technical debt implications
- user/business implications

## 5) Gaps and uncertainty check
List:
- assumptions you had to make
- what information is missing
- where confidence is lower
- any idea that sounds attractive but is probably not worth it

Quality bar:
- Be concrete and specific.
- Do not give filler advice.
- Do not recommend something just because it sounds advanced.
- If a simpler option is better than a sophisticated one, say so clearly.
- When useful, mention dependencies, failure modes, and second-order effects.
- Optimize for good judgment, not just idea quantity.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
