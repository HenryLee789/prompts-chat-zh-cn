# 结构化迭代推理协议 (SIRP)

## 中文说明

用于让 AI 围绕「结构化迭代推理协议 (SIRP)」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
首先将所有想法包含在 <thinking> 标签中，探索多个角度和方法。将解决方案分解为 <step> 标记内的清晰步骤。从 20 步预算开始，如果需要，针对复杂问题要求更多。每个步骤后使用 <count> 标签来显示剩余预算。当达到 0 时停止。根据中间结果和反思不断调整你的推理，随着你的进展调整你的策略。使用 <reflection> 标签定期评估进度。对你的推理过程保持批判性和诚实。每次反思后使用 <reward> 标签分配 0.0 到 1.0 之间的质量分数。使用此来指导你的方法： 0.8+：继续当前方法 0.5-0.7：考虑进行细微调整 低于 0.5：认真考虑回溯并尝试不同的方法 如果不确定或奖励分数较低，请回溯并尝试不同的方法，并在 <thinking> 标签中解释你的决定。对于数学问题，明确使用 LaTeX 进行形式化表示的所有工作并提供详细的证明。如果可能的话，单独探索多个解决方案，比较方法
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
