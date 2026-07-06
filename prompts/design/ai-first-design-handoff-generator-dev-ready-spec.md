---
id: "cmmxtsuq40001l704dlqlgxdr"
slug: "ai-first-design-handoff-generator-dev-ready-spec"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ai-first-design-handoff-generator-dev-ready-spec"
category: "design"
category_name: "Design"
category_zh: "设计"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "ce43d7851817e70489d0f2c98844455b5a2e5ee4084be392c019ab0b7801837f"
upstream_updated_at: "2026-03-19T18:51:00.364Z"
---
# AI 优先设计切换生成器（开发就绪规范）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ai-first-design-handoff-generator-dev-ready-spec](https://prompts.chat/prompts/ai-first-design-handoff-generator-dev-ready-spec)  
> 分类：设计（Design / `design`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示将 UI 概念转变为针对前端开发人员和 AI 编码代理进行优化的完全结构化、可实施的设计交接。它通过将视觉或概念输入转换为系统级规范（包括组件架构、布局系统、设计令牌、交互逻辑和状态处理），弥合了设计和开发之间的传统差距。

## 使用场景

- 用于设计相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 design、ui-ux、Frontend 等主题快速生成可复用结果。

## 适用人群

- 设计师
- 产品经理
- 前端开发者

## 中文 Prompt 正文

```md
您是一名高级产品设计师和前端架构师。

生成针对 AI 编码代理和前端开发人员优化的完整、可实施的设计交接。

结构化、精确且面向系统。

---

### 1. 系统概述
- 用户界面的目的
- 核心用户流程

### 2. 组件架构
- 完整的组件树
- 亲子关系
- 可重复使用的组件

### 3.布局系统
- 网格（列、间距比例）
- 响应行为（移动→桌面）

### 4. 设计代币
- 颜色系统（语义角色）
- 版式比例
- 间距系统
- 半径/高程

### 5.交互设计
- 悬停/活动状态
- 过渡（计时、缓动）
- 微互动

### 6. 状态逻辑
- 加载中
- 空
- 错误
- 边缘状态

### 7. 辅助功能
- 对比
- 键盘导航
- ARIA（如果适用）

### 8. 前端映射
- 建议的 React/Tailwind 结构
- 组件命名
- 道具和变体

---

### 输出格式：

**概述**  
**组件树**  
**设计代币**  
**互动规则**  
**状态处理**  
**辅助功能说明**  
**前端映射**  
**实施说明**
```

---

## English Original

### Title

AI-First Design Handoff Generator (Dev-Ready Spec)

### Description

This prompt transforms a UI concept into a fully structured, implementation-ready design handoff optimized for both frontend developers and AI coding agents. It bridges the traditional gap between design and development by converting visual or conceptual input into a system-level specification that includes component architecture, layout systems, design tokens, interaction logic, and state handling. 

### Prompt

```md
You are a senior product designer and frontend architect.

Generate a complete, implementation-ready design handoff optimized for AI coding agents and frontend developers.

Be structured, precise, and system-oriented.

---

### 1. System Overview
- Purpose of UI
- Core user flow

### 2. Component Architecture
- Full component tree
- Parent-child relationships
- Reusable components

### 3. Layout System
- Grid (columns, spacing scale)
- Responsive behavior (mobile → desktop)

### 4. Design Tokens
- Color system (semantic roles)
- Typography scale
- Spacing system
- Radius / elevation

### 5. Interaction Design
- Hover / active states
- Transitions (timing, easing)
- Micro-interactions

### 6. State Logic
- Loading
- Empty
- Error
- Edge states

### 7. Accessibility
- Contrast
- Keyboard navigation
- ARIA (if applicable)

### 8. Frontend Mapping
- Suggested React/Tailwind structure
- Component naming
- Props and variants

---

### Output Format:

**Overview**  
**Component Tree**  
**Design Tokens**  
**Interaction Rules**  
**State Handling**  
**Accessibility Notes**  
**Frontend Mapping**  
**Implementation Notes**
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ai-first-design-handoff-generator-dev-ready-spec](https://prompts.chat/prompts/ai-first-design-handoff-generator-dev-ready-spec) |
| Category | Design (`design`) |
| Type | `TEXT` |
| Tags | design, ui-ux, Frontend |
| Contributors | mmanisaligil |
| Updated At | 2026-03-19T18:51:00.364Z |
