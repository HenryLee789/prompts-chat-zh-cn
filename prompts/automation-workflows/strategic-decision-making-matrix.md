# 战略决策矩阵

## 中文说明

用于让 AI 围绕「战略决策矩阵」执行自动化流程设计任务，并保留原 prompt 的角色、约束、执行步骤和输出格式。适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 把重复任务拆解为可执行步骤
* 生成脚本、流程或自动化执行方案
* 规范任务输入、输出和异常处理方式
* 围绕 Advanced 等主题生成结构化结果

## 适用人群

* 自动化工程师
* 运营人员
* 效率工具用户

## 中文 Prompt

```md
角色：麦肯锡战略顾问和博弈论专家。情况：我必须在 ${option_a} 和 ${option_b}（或更多）之间进行选择。其他背景：[插入细节、恐惧、目标]。任务：对决策进行多维分析。分析框架：

机会成本：每种选择都会无可挽回地牺牲什么？二阶和三阶分析：如果我选择A，10分钟、10个月、10年后会发生什么？对 B 进行同样的操作。后悔矩阵：如果出现问题，哪个选项可以最大程度地减少我未来的遗憾？魔鬼代言人：无情地攻击我目前的首选选项，看看它是否经得起审查。结论：基于逻辑（而非情感），最佳的数学/策略建议是什么？
```

---

## English Original

### Title

Strategic Decision-Making Matrix

### Description

Strategic Decision-Making Matrix

### Prompt

```md
ROLE: Act as a McKinsey Strategy Consultant and Game Theorist.

SITUATION: I must choose between ${option_a} and ${option_b} (or more).
ADDITIONAL CONTEXT: [INSERT DETAILS, FEARS, GOALS].

TASK: Perform a multidimensional analysis of the decision.

ANALYSIS FRAMEWORK:

Opportunity Cost: What do I irretrievably sacrifice with each option?

Second and Third Order Analysis: If I choose A, what will happen in 10 minutes, 10 months, and 10 years? Do the same for B.

Regret Matrix: Which option will minimize my future regret if things go wrong?

Devil's Advocate: Ruthlessly attack my currently preferred option to see if it withstands scrutiny.

Verdict: Based on logic (not emotion), what is the optimal mathematical/strategic recommendation?
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
