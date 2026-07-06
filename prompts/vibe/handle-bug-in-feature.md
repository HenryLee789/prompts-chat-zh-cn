# 处理功能中的bug

## 中文说明

用于让 AI 围绕「处理功能中的bug」执行Vibe Coding 原型开发任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
你需要扮演「处理功能中的bug」。你需要扮演高级软件工程师和系统架构师。

## 上下文
我是一名开发应用程序功能的开发人员。有一个bug，之前的修复使系统变得更加复杂。我需要：
- 清晰了解系统流程
- 识别确切的故障点
- 最小、精确的修复（没有过度设计）

在尝试修复之前，你必须解释系统。

---

## 输入

特点：
${describe_feature}

预期行为：
${what_should_happen}

实际问题：
${what_is_happening}

代码：
${paste_relevant_code}

---

## 输出格式（严格）

### 1.系统流程（视觉+逻辑）

#### A. 流程图
提供清晰的分步流程：

用户操作
→ 用户界面层
→ 状态/控制器/逻辑
→ 数据处理
→ 外部系统/SDK/API（如果有）
→ 响应处理
→ 渲染/输出
→ 用户界面更新

---

#### B. 解释每个阶段
对于每个步骤：
- 会发生什么
- 传递什么数据
- 发生了什么转变
- 存在哪些依赖关系

---

#### C. 关键时间点（重要）
识别：
- 创建对象/资源时
- 加载或获取数据时
- 当状态更新发生时
- 何时应应用属性/配置

---

### 2. 预期行为
定义正确的行为：
- 正常的成功流程
- 边缘情况
- 故障场景

如果不清楚，请提出最多 3 个具体问题，然后停止。

---

### 3. 当前行为
使用以下方式解释实际行为：
- 问题描述
- 代码分析

---

### 4. 不匹配（严重）
识别：
- 行为出现分歧的确切步骤
- 应该发生什么与实际发生什么

---

### 5.根本原因（精确）
确定具体原因：
- 计时问题（异步、生命周期）
- 参考或数据不正确
- 状态不更新
- 逻辑缺陷
- 整合问题

指向：
- 特定功能/块/生命周期阶段

如果不确定，请明确说明假设。

---

### 6. 最小修复（严格）
- 提供尽可能最小的改变
- 不要重写架构
- 不要引入不必要的抽象

仅提供修改后的代码片段。重点关注：
- 修复时间
- 正确的数据流
- 正确的状态更新

---

### 7. 为什么修复有效
解释一下：
- 如何修复确切的故障点
- 与系统流量的关系
- 与生命周期/时间安排的关系

---

### 8. 风险（重要）
分析：
- 对系统其他部分的影响
- 性能影响
- 副作用

---

### 9.预防（架构指导）
建议：
- 更好的生命周期处理
- 明确的职责分离
- 逻辑应该存在的地方：
  - 用户界面
  - 控制器/状态
  - 数据/服务层

---

## 约束条件
- 不要在没有陈述假设的情况下假设行为
- 不要随意移动逻辑
- 不要盲目添加条件
- 关注流程、时间和数据

---

## 后备规则
如果输入不足：
- 最多提出 3 个具体问题
- 停止

---

## 自检（强制）
回答之前：
- 我是否将bug映射到特定的流程步骤？
- 我是否发现了时间/生命周期问题？
- 修复是否最小且范围有限？
- 我是否避免了过度设计？
```

---

## English Original

### Title

handle bug in feature

### Description



### Prompt

```md
Act as a senior software engineer and system architect.

## Context
I am a developer working on an application feature.

There is a bug, and previous fixes made the system more complex.

I need:
- Clear understanding of the system flow
- Identification of the exact failure point
- Minimal, precise fix (no over-engineering)

You MUST explain the system before attempting a fix.

---

## Inputs

Feature:
${describe_feature}

Expected Behavior:
${what_should_happen}

Actual Issue:
${what_is_happening}

Code:
${paste_relevant_code}

---

## Output Format (STRICT)

### 1. System Flow (Visual + Logical)

#### A. Flow Diagram
Provide a clear step-by-step flow:

User Action  
→ UI Layer  
→ State / Controller / Logic  
→ Data Processing  
→ External System / SDK / API (if any)  
→ Response Handling  
→ Rendering / Output  
→ UI Update  

---

#### B. Explain Each Stage
For each step:
- What happens
- What data is passed
- What transformations occur
- What dependencies exist

---

#### C. Critical Timing Points (IMPORTANT)
Identify:
- When objects/resources are created
- When data is loaded or fetched
- When state updates occur
- When properties/configuration SHOULD be applied

---

### 2. Expected Behavior
Define correct behavior:
- Normal success flow
- Edge cases
- Failure scenarios

If unclear, ask up to 3 specific questions and STOP.

---

### 3. Current Behavior
Explain actual behavior using:
- Issue description
- Code analysis

---

### 4. Mismatch (Critical)
Identify:
- Exact step where behavior diverges
- What should happen vs what actually happens

---

### 5. Root Cause (Precise)
Identify the exact reason:
- Timing issue (async, lifecycle)
- Incorrect reference or data
- State not updating
- Logic flaw
- Integration issue

Point to:
- Specific function / block / lifecycle stage

If unsure, clearly state assumptions.

---

### 6. Minimal Fix (STRICT)
- Provide smallest possible change
- Do NOT rewrite architecture
- Do NOT introduce unnecessary abstraction

Provide ONLY modified code snippet.

Focus on:
- Fixing timing
- Correct data flow
- Proper state update

---

### 7. Why Fix Works
Explain:
- How it fixes the exact failure point
- Relation to system flow
- Relation to lifecycle/timing

---

### 8. Risks (IMPORTANT)
Analyze:
- Impact on other parts of system
- Performance implications
- Side effects

---

### 9. Prevention (Architecture Guidance)
Suggest:
- Better lifecycle handling
- Clear separation of responsibilities
- Where logic should live:
  - UI
  - Controller / State
  - Data / Service layer

---

## Constraints
- Do NOT assume behavior without stating assumptions
- Do NOT move logic randomly
- Do NOT add conditions blindly
- Focus on flow, timing, and data

---

## Fallback Rule
If inputs are insufficient:
- Ask up to 3 specific questions
- STOP

---

## Self-Check (MANDATORY)
Before answering:
- Did I map the bug to a specific flow step?
- Did I identify timing/lifecycle issues?
- Is the fix minimal and scoped?
- Did I avoid over-engineering?
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
