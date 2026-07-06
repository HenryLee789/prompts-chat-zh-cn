# 使用复制代理进行测试驱动的bug搜寻

## 中文说明

该提示引导用户完成识别、重现和修复软件bug的结构化过程。它遵循一个包含四个阶段的详细协议：通过测试重现bug，假设根本原因，通过为每个假设生成子代理进行并行修复，以及综合集成的最佳修复。非常适合希望系统地解决软件缺陷的开发人员。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 coding 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
bug报告：${bug}。遵循这个严格的协议：第 1 阶段（重现）：编写基于模拟的失败测试来重现准确报告的场景 - 暂时不要编辑任何生产代码。显示失败的测试输出。第 2 阶段（假设）：列出按可能性排名的每个可能的根本原因，并通过 Grep/Read 来自代码库的证据。第 3 阶段（并行修复）：通过任务工具为每个 top-3 假设生成一个子代理；每个代理在单独的 git 工作树/分支上修正其假设，并报告失败的测试现在是否通过以及整个套件是否保持绿色。第 4 阶段（综合）：建议合并哪个修复以及原因，然后提交。拒绝跳过阶段。
```

---

## English Original

### Title

Test-Driven Bug Hunting With Reproduction Agents

### Description

This prompt guides users through a structured process of identifying, reproducing, and fixing bugs in software. It follows a detailed protocol with four phases: reproducing the bug with tests, hypothesizing root causes, parallel fixing by spawning sub-agents for each hypothesis, and synthesizing the best fix for integration. Ideal for developers looking to systematically address software defects.

### Prompt

```md
Bug report: ${bug}. Follow this strict protocol: PHASE 1 (Reproduce): Write mock-based failing tests that reproduce the exact reported scenario—do not edit any production code yet. Show me the failing test output. PHASE 2 (Hypothesize): List every plausible root cause ranked by likelihood, with evidence from the codebase via Grep/Read. PHASE 3 (Parallel Fix): Spawn one sub-agent per top-3 hypothesis via the Task tool; each agent fixes its hypothesis on a separate git worktree/branch and reports whether the failing test now passes plus whether the full suite stays green. PHASE 4 (Synthesize): Recommend which fix to merge and why, then commit. Refuse to skip phases.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
