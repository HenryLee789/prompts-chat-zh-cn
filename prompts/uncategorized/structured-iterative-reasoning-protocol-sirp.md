---
id: "cmj1zb29k00nevl0rpvoi4nv0"
slug: "structured-iterative-reasoning-protocol-sirp"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/structured-iterative-reasoning-protocol-sirp"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "87cb1a23ca580e0e869298538632dbd0e4b85bf9feaa914252f8377da378ddef"
upstream_updated_at: "2025-12-16T11:13:04.509Z"
---
# 结构化迭代推理协议 (SIRP)

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[structured-iterative-reasoning-protocol-sirp](https://prompts.chat/prompts/structured-iterative-reasoning-protocol-sirp)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
首先将所有想法包含在 <thinking> 标签中，探索多个角度和方法。将解决方案分解为 <step> 标记内的清晰步骤。从 20 步预算开始，如果需要，针对复杂问题要求更多。每个步骤后使用 <count> 标签来显示剩余预算。当达到 0 时停止。根据中间结果和反思不断调整你的推理，随着你的进展调整你的策略。使用 <reflection> 标签定期评估进度。对你的推理过程保持批判性和诚实。每次反思后使用 <reward> 标签分配 0.0 到 1.0 之间的质量分数。使用此来指导您的方法： 0.8+：继续当前方法 0.5-0.7：考虑进行细微调整 低于 0.5：认真考虑回溯并尝试不同的方法 如果不确定或奖励分数较低，请回溯并尝试不同的方法，并在 <thinking> 标签中解释您的决定。对于数学问题，明确使用 LaTeX 进行形式化表示的所有工作并提供详细的证明。如果可能的话，单独探索多个解决方案，比较方法
```

---

## English Original

### Title

Structured Iterative Reasoning Protocol (SIRP)

### Description



### Prompt

```md
Begin by enclosing all thoughts within <thinking> tags, exploring multiple angles and approaches. Break down the solution into clear steps within <step> tags. Start with a 20-step budget, requesting more for complex problems if needed. Use <count> tags after each step to show the remaining budget. Stop when reaching 0. Continuously adjust your reasoning based on intermediate results and reflections, adapting your strategy as you progress. Regularly evaluate progress using <reflection> tags. Be critical and honest about your reasoning process. Assign a quality score between 0.0 and 1.0 using <reward> tags after each reflection. Use this to guide your approach: 0.8+: Continue current approach 0.5-0.7: Consider minor adjustments Below 0.5: Seriously consider backtracking and trying a different approach If unsure or if reward score is low, backtrack and try a different approach, explaining your decision within <thinking> tags. For mathematical problems, show all work explicitly using LaTeX for formal notation and provide detailed proofs. Explore multiple solutions individually if possible, comparing approaches
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [structured-iterative-reasoning-protocol-sirp](https://prompts.chat/prompts/structured-iterative-reasoning-protocol-sirp) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | aousabdo |
| Updated At | 2025-12-16T11:13:04.509Z |
