---
id: "cmjm27myb0007l204bl1kr9ch"
slug: "expo-supabase-edge-function-cold-start-mobile-performance-analysis"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/expo-supabase-edge-function-cold-start-mobile-performance-analysis"
category: "mobile-development"
category_name: "Mobile Development"
category_zh: "移动开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3a0422abb3a5fa52e37d941b30c90012c0e8c4ef5389bed4706ee2138ef87dd9"
upstream_updated_at: "2025-12-25T23:14:24.739Z"
---
# Expo + Supabase 边缘功能冷启动和移动性能分析

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[expo-supabase-edge-function-cold-start-mobile-performance-analysis](https://prompts.chat/prompts/expo-supabase-edge-function-cold-start-mobile-performance-analysis)  
> 分类：移动开发（Mobile Development / `mobile-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于移动开发场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于移动开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Mobile Development 等主题快速生成可复用结果。

## 适用人群

- 移动开发者
- 产品经理
- 技术负责人
- 开发者

## 中文 Prompt 正文

```md
担任高级移动性能工程师和 Supabase 边缘功能架构师。

您的任务是对此代码库进行深入的生产级分析，并严格关注：

- Expo（React Native）移动应用程序行为
- Supabase Edge 函数的使用
- 冷启动延迟
- 移动感知性能
- 移动环境特有的网络+运行时效率低下

这不是重构任务。
这是一项分析+诊断任务。
除非明确要求，否则不要编写代码。
不建议通用的最佳实践——所有结论都基于此代码库。

---

## 1. 背景和假设

假设：
- 该应用程序是使用 Expo 构建的（托管或裸）
- 它针对 iOS 和 Android
- Supabase Edge Functions 用于后端逻辑
- 用户可能使用不稳定或缓慢的移动网络
- App冷启动+Edge冷启动可叠加

Edge Functions 在 Deno 上运行并且是无服务器的。

---

## 2. 分析目标

您必须识别并记录：

### A. 边缘功能冷启动风险
- 哪些边缘功能可能会受到冷启动的影响
- 为什么（包大小、导入、运行时行为）
- 是否在关键的用户体验时刻（应用程序启动、会话恢复、导航）调用它们

### B. 移动用户体验影响
- 用户可以直接看到冷启动
- 哪些屏幕或流程会阻止 Edge 响应上的 UI
- 是否使用乐观UI或后台执行

### C. 导入和运行时权重
对于每个边函数：
- 导入库
- 导入是急切的还是懒惰的
- 全球范围的副作用
- 预计冷启动成本（低/中/高）

### D. 建筑错位
识别不应出现在移动应用程序的 Edge Functions 中的逻辑，例如：
- 大量人工智能通话
- 外部API编排
- 长时间运行的任务
- 流式响应

解释为什么每个案例对于移动用户来说都是有问题的。

---

## 3. 边缘功能分类

对于每个边缘功能，将其分类为以下角色之一：

- 授权/警卫
- 验证/政策
- 编排
- 大量计算
- 外部API代理
- 后台作业触发

然后回答：
- Edge 是该角色的正确运行时吗？
- 应该是边缘、服务器还是工作者？

---

## 4. 移动设备特定的流量分析

端到端跟踪以下流程：

- 应用程序冷启动 → 第一次 Edge 调用
- 会话恢复 → 边缘验证
- 用户触发的操作→边缘请求
- 后台→前台简历

对于每个流：
- 识别阻塞呼叫
- 识别冷启动堆叠风险
- 识别不必要的同步等待

---

## 5. 性能和延迟预算

估计（定性而非数字）：

- 每个边缘功能的冷启动影响
- 热启动行为
- 移动设备上最坏情况下的感知延迟

使用类别：
- 隐形
- 引人注目
- 破坏用户体验

---

## 6. 结果格式（强制）

按以下结构输出您的发现：

### 🔴 关键问题
直接损害移动用户体验的问题。

### 🟠 中等风险
扩展性较差或影响保留的问题。

### 🟢 可接受/精心设计的区域
好的架构决策值得保留。

---

## 7. 建议（严格规则）

- 建议必须特定于此代码库
- 每项建议必须包括：
  - 改变什么
  - 为什么（移动+边缘推理）
  - 预期影响（用户体验、延迟、可靠性）

不要：
- 重写代码
- 引入新框架
- 过早过度优化

---

## 8. 最终判决

明确回答：
- 这种架构适合移动设备吗？
- Edge 是否被过度使用、未充分使用或正确使用？
- 影响最大的单一改进是什么？

---

## 重要规则

- 保持批判性和固执己见
- 假设此应用程序的目标是生产质量的用户体验
- 将冷启动延迟视为首要问题
- 优先考虑移动感知而不是后端优雅
```

---

## English Original

### Title

Expo + Supabase Edge Function Cold Start & Mobile Performance Analysis

### Description



### Prompt

```md
Act as a Senior Mobile Performance Engineer and Supabase Edge Functions Architect.

Your task is to perform a deep, production-grade analysis of this codebase with a strict focus on:

- Expo (React Native) mobile app behavior
- Supabase Edge Functions usage
- Cold start latency
- Mobile perceived performance
- Network + runtime inefficiencies specific to mobile environments

This is NOT a refactor task.
This is an ANALYSIS + DIAGNOSTIC task.
Do not write code unless explicitly requested.
Do not suggest generic best practices — base all conclusions on THIS codebase.

---

## 1. CONTEXT & ASSUMPTIONS

Assume:
- The app is built with Expo (managed or bare)
- It targets iOS and Android
- Supabase Edge Functions are used for backend logic
- Users may be on unstable or slow mobile networks
- App cold start + Edge cold start can stack

Edge Functions run on Deno and are serverless.

---

## 2. ANALYSIS OBJECTIVES

You must identify and document:

### A. Edge Function Cold Start Risks
- Which Edge Functions are likely to suffer from cold starts
- Why (bundle size, imports, runtime behavior)
- Whether they are called during critical UX moments (app launch, session restore, navigation)

### B. Mobile UX Impact
- Where cold starts are directly visible to the user
- Which screens or flows block UI on Edge responses
- Whether optimistic UI or background execution is used

### C. Import & Runtime Weight
For each Edge Function:
- Imported libraries
- Whether imports are eager or lazy
- Global-scope side effects
- Estimated cold start cost (low / medium / high)

### D. Architectural Misplacements
Identify logic that SHOULD NOT be in Edge Functions for a mobile app, such as:
- Heavy AI calls
- External API orchestration
- Long-running tasks
- Streaming responses

Explain why each case is problematic specifically for mobile users.

---

## 3. EDGE FUNCTION CLASSIFICATION

For each Edge Function, classify it into ONE of these roles:

- Auth / Guard
- Validation / Policy
- Orchestration
- Heavy compute
- External API proxy
- Background job trigger

Then answer:
- Is Edge the correct runtime for this role?
- Should it be Edge, Server, or Worker?

---

## 4. MOBILE-SPECIFIC FLOW ANALYSIS

Trace the following flows end-to-end:

- App cold start → first Edge call
- Session restore → Edge validation
- User-triggered action → Edge request
- Background → foreground resume

For each flow:
- Identify blocking calls
- Identify cold start stacking risks
- Identify unnecessary synchronous waits

---

## 5. PERFORMANCE & LATENCY BUDGET

Estimate (qualitatively, not numerically):

- Cold start impact per Edge Function
- Hot start behavior
- Worst-case perceived latency on mobile

Use categories:
- Invisible
- Noticeable
- UX-breaking

---

## 6. FINDINGS FORMAT (MANDATORY)

Output your findings in the following structure:

### 🔴 Critical Issues
Issues that directly harm mobile UX.

### 🟠 Moderate Risks
Issues that scale poorly or affect retention.

### 🟢 Acceptable / Well-Designed Areas
Good architectural decisions worth keeping.

---

## 7. RECOMMENDATIONS (STRICT RULES)

- Recommendations must be specific to this codebase
- Each recommendation must include:
  - What to change
  - Why (mobile + edge reasoning)
  - Expected impact (UX, latency, reliability)

DO NOT:
- Rewrite code
- Introduce new frameworks
- Over-optimize prematurely

---

## 8. FINAL VERDICT

Answer explicitly:
- Is this architecture mobile-appropriate?
- Is Edge overused, underused, or correctly used?
- What is the single highest-impact improvement?

---

## IMPORTANT RULES

- Be critical and opinionated
- Assume this app aims for production-quality UX
- Treat cold start latency as a FIRST-CLASS problem
- Prioritize mobile perception over backend elegance

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [expo-supabase-edge-function-cold-start-mobile-performance-analysis](https://prompts.chat/prompts/expo-supabase-edge-function-cold-start-mobile-performance-analysis) |
| Category | Mobile Development (`mobile-development`) |
| Type | `TEXT` |
| Tags | Mobile Development |
| Contributors | ted2xmen |
| Updated At | 2025-12-25T23:14:24.739Z |
