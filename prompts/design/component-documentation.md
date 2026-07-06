---
id: "cmmoinu290001l1044q6jsos9"
slug: "component-documentation"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/component-documentation"
category: "design"
category_name: "Design"
category_zh: "设计"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "5beda1d978092fb9406590292058562b8f9e598cdfdd723dba4efd4e7eb07f16"
upstream_updated_at: "2026-03-13T06:29:51.987Z"
---
# 组件文档

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[component-documentation](https://prompts.chat/prompts/component-documentation)  
> 分类：设计（Design / `design`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

为设计系统中的每个组件生成详细的文档。这不仅仅是一个道具表——它包括使用指南、该做/不该做的示例、可访问性要求以及每个组件消耗的特定令牌。输出成为 CLAUDE.md 的组件部分。

## 使用场景

- 用于设计相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 design、ui-ux 等主题快速生成可复用结果。

## 适用人群

- 设计师
- 产品经理
- 前端开发者

## 中文 Prompt 正文

```md
您是一名创建组件规范的设计系统记录员
对于 CLAUDE.md 文件。该文档将供 AI 编码助手使用
（Claude、Cursor、Copilot）生成一致的 UI 代码。

## 上下文
- **令牌系统：** [粘贴或参考第2阶段输出]
- **组件到文档：** [组件名称，或“库存中的所有组件”]
- **框架：** [Next.js + React + Tailwind / 等]

## 对于每个组件，记录：

### 1. 概述
- 组件名称（帕斯卡命名法）
- 一行描述
- 类别（导航/输入/反馈/布局/数据显示）

### 2. 解剖学
- 列出每个视觉部分（例如，按钮 = 容器 + 标签 + 左图标 + 右图标）
- 哪些部分是可选的，哪些是必需的
- 嵌套规则（什么可以/不可以进入该组件）

### 3. 道具规格
对于每个道具：
- 名称、类型、默认值、必需/可选
- 允许的值（如果是枚举）
- 简要描述其视觉控制内容
- 用法示例

### 4. 视觉变体
- 具有精确标记值的尺寸变体（填充、字体大小、高度）
- 具有精确标记参考的颜色变体
- 状态变体：默认、悬停、活动、焦点、禁用、加载、错误
- 对于每个状态：指定哪些令牌更改以及更改为哪些值

### 5. 代币消费地图
组件：按钮
├── 背景 → 按钮-bg-${variant} → 颜色-品牌-${shade}
├── 文字颜色 → 按钮文字-${variant} → 颜色白色
├── padding-x → 按钮padding-x-${size} → 间距-{n}
├── padding-y → 按钮padding-y-${size} → 间距-{n}
├── 边框半径→按钮半径→半径md
├── 字体大小 → 按钮字体-${size} → 字体大小-{n}
├── 字体粗细 → 按钮字体粗细 → 字体粗细半粗体
└── 过渡 → 动作持续时间快速 + 动作缓动默认

### 6. 使用指南
- 何时使用（以及何时不使用——建议替代方案）
- 每个视口的最大实例数（例如，“每个部分只有 1 个主要 CTA”）
- 内容指南（标签长度、大写、图标使用）

### 7. 辅助功能
- 必需的 ARIA 属性
- 键盘交互模式
- 焦点管理规则
- 屏幕阅读器行为
- 默认令牌满足的最小对比度

### 8. 代码示例
使用实际代码库提供复制粘贴就绪的代码示例
模式（导入路径、类名约定等）

## 输出格式

Markdown，每个部分都有标题结构。这将直接
插入到 CLAUDE.md 文件中。
```

---

## English Original

### Title

Component Documentation

### Description

Generates detailed documentation for each component in the design system. This is not just a props table — it includes usage guidelines, do/don't examples, accessibility requirements, and the specific tokens each component consumes. The output becomes the component section of the CLAUDE.md.

### Prompt

```md
You are a design systems documentarian creating the component specification
for a CLAUDE.md file. This documentation will be used by AI coding assistants
(Claude, Cursor, Copilot) to generate consistent UI code.

## Context
- **Token system:** [Paste or reference Phase 2 output]
- **Component to document:** [Component name, or "all components from inventory"]
- **Framework:** [Next.js + React + Tailwind / etc.]

## For Each Component, Document:

### 1. Overview
- Component name (PascalCase)
- One-line description
- Category (Navigation / Input / Feedback / Layout / Data Display)

### 2. Anatomy
- List every visual part (e.g., Button = container + label + icon-left + icon-right)
- Which parts are optional vs required
- Nesting rules (what can/cannot go inside this component)

### 3. Props Specification
For each prop:
- Name, type, default value, required/optional
- Allowed values (if enum)
- Brief description of what it controls visually
- Example usage

### 4. Visual Variants
- Size variants with exact token values (padding, font-size, height)
- Color variants with exact token references
- State variants: default, hover, active, focus, disabled, loading, error
- For EACH state: specify which tokens change and to what values

### 5. Token Consumption Map
Component: Button
├── background → button-bg-${variant} → color-brand-${shade}
├── text-color → button-text-${variant} → color-white
├── padding-x → button-padding-x-${size} → spacing-{n}
├── padding-y → button-padding-y-${size} → spacing-{n}
├── border-radius → button-radius → radius-md
├── font-size → button-font-${size} → font-size-{n}
├── font-weight → button-font-weight → font-weight-semibold
└── transition → motion-duration-fast + motion-ease-default

### 6. Usage Guidelines
- When to use (and when NOT to use — suggest alternatives)
- Maximum instances per viewport (e.g., "only 1 primary CTA per section")
- Content guidelines (label length, capitalization, icon usage)

### 7. Accessibility
- Required ARIA attributes
- Keyboard interaction pattern
- Focus management rules
- Screen reader behavior
- Minimum contrast ratios met by default tokens

### 8. Code Example
Provide a copy-paste-ready code example using the actual codebase's
patterns (import paths, className conventions, etc.)

## Output Format

Markdown, structured with headers per section. This will be directly
inserted into the CLAUDE.md file.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [component-documentation](https://prompts.chat/prompts/component-documentation) |
| Category | Design (`design`) |
| Type | `TEXT` |
| Tags | design, ui-ux |
| Contributors | gokbeyinac |
| Updated At | 2026-03-13T06:29:51.987Z |
