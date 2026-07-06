---
id: "cmpb3zajb0001jm04te3gbgin"
slug: "test-driven-bug-hunting-with-reproduction-agents"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/test-driven-bug-hunting-with-reproduction-agents"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4c62b8343ace67972d930955a096ee71eb863a94a39a78f1d2a2f73842d70c34"
upstream_updated_at: "2026-05-18T11:18:58.912Z"
---
# 使用复制代理进行测试驱动的错误搜寻

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[test-driven-bug-hunting-with-reproduction-agents](https://prompts.chat/prompts/test-driven-bug-hunting-with-reproduction-agents)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

该提示引导用户完成识别、重现和修复软件错误的结构化过程。它遵循一个包含四个阶段的详细协议：通过测试重现错误，假设根本原因，通过为每个假设生成子代理进行并行修复，以及综合集成的最佳修复。非常适合希望系统地解决软件缺陷的开发人员。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 coding 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
错误报告：${bug}。遵循这个严格的协议：第 1 阶段（重现）：编写基于模拟的失败测试来重现准确报告的场景 - 暂时不要编辑任何生产代码。显示失败的测试输出。第 2 阶段（假设）：列出按可能性排名的每个可能的根本原因，并通过 Grep/Read 来自代码库的证据。第 3 阶段（并行修复）：通过任务工具为每个 top-3 假设生成一个子代理；每个代理在单独的 git 工作树/分支上修正其假设，并报告失败的测试现在是否通过以及整个套件是否保持绿色。第 4 阶段（综合）：建议合并哪个修复以及原因，然后提交。拒绝跳过阶段。
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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [test-driven-bug-hunting-with-reproduction-agents](https://prompts.chat/prompts/test-driven-bug-hunting-with-reproduction-agents) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | coding |
| Contributors | ilker |
| Updated At | 2026-05-18T11:18:58.912Z |
