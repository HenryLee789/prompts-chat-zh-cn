# CLAUDE.md 大会

## 中文说明

这是最终装配提示。它获取阶段 1-3 的所有输出，并将它们编译成单个可用于生产的 CLAUDE.md 文件。该文件的结构使得AI助手可以有效地解析它 - 具有明确的规则、令牌表、组件规格以及最常用信息的“快速参考”部分。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 design、ui-ux 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你正在编译最终的 CLAUDE.md 设计系统参考文件。该文件将位于项目根目录中并作为
对于任何在此代码库上工作的AI助手（或人类开发人员）来说都是真理。

## 输入
- **代币架构：** [第2阶段输出]
- **组件文档：** [第 3 阶段输出]
- **项目元数据：**
  - 项目名称：${name}
  - 技术堆栈：[Next.js 14+ / React 18+ / Tailwind 3.x / 等]
  - 节点版本：${version}
  - 包管理器：[npm/pnpm/yarn]

## CLAUDE.md 结构

按以下顺序编译包含这些部分的最终文件：

### 1. 项目标识
- 项目名称、描述、定位
- 技术栈总结（一张表）
- 目录结构概述（src/布局）

### 2. 快速参考卡
简明备忘单——最常用的信息一目了然：
- 具有十六进制值的原色（最多 6 个）
- 字体堆栈
- 间距比例（视觉表示：4、8、12、16、24、32、48、64）
- 断点
- 边界半径值
- 阴影值
- Z索引图

### 3. 设计代币 — 完整参考
按层组织（原语 → 语义 → 组件）。每个标记条目：名称、值、CSS 变量、Tailwind 类等效项。使用表格以便于浏览。

### 4.排版系统
- 字体比例表（名称、尺寸、重量、行高、字母间距、用途）
- 响应式规则
- 字体加载策略

### 5.颜色系统
- 带有样本描述的完整调色板（名称、十六进制、使用上下文）
- 语义颜色映射表
- 深色模式映射（如果适用）
- 对比度合规说明

### 6.布局系统
- 网格规格
- 集装箱宽度
- 具有视觉比例的间距系统
- 断点行为

### 7. 组件库
[为每个组件插入第 3 相输出]

### 8. 动作与动画
- 命名预设表（名称、持续时间、缓动、用法）
- 约束条件：何时动画，何时不动画
- 性能限制

### 9. 编码约定
- 文件命名模式
- 进口订单
- 组件文件结构模板
- CSS 类排序约定（如果是 Tailwind）
- 使用的状态管理模式

### 10. 规则和限制
绝对不能违反的硬性约束条件：
- “切勿使用内联十六进制颜色 - 始终引用标记”
- “所有交互元素必须具有可见的焦点状态”
- “最小触摸目标：44x44px”
- “所有图像必须有替代文本”
- “没有超出定义范围的 z-index 值”
- [添加项目特定规则]

## 格式要求
- 对所有令牌/值映射使用Markdown表
- 所有代码示例均使用代码块
- 保持每个部分独立（无需滚动到其他部分即可阅读）
- 在顶部包含带有锚链接的目录
- 最大行长度：100 个字符以提高可读性
- 优先选择明确的值而不是“参见上文”引用

## 关键规则
该文件必须是权威的。如果两者之间存在歧义
CLAUDE.md 和实际代码，CLAUDE.md 应更新为
符合现实——绝不相反。这记录了什么是，
不是应该是什么（这是一个单独的路线图）。
```

---

## English Original

### Title

CLAUDE.md Assembly

### Description

This is the final assembly prompt. It takes all outputs from Phases 1-3 and compiles them into a single, production-ready CLAUDE.md file. The file is structured so that AI assistants can parse it efficiently — with explicit rules, token tables, component specs, and a "Quick Reference" section for the most commonly needed information.

### Prompt

```md
You are compiling the definitive CLAUDE.md design system reference file.
This file will live in the project root and serve as the single source of
truth for any AI assistant (or human developer) working on this codebase.

## Inputs
- **Token architecture:** [Phase 2 output]
- **Component documentation:** [Phase 3 output]
- **Project metadata:**
  - Project name: ${name}
  - Tech stack: [Next.js 14+ / React 18+ / Tailwind 3.x / etc.]
  - Node version: ${version}
  - Package manager: [npm / pnpm / yarn]

## CLAUDE.md Structure

Compile the final file with these sections IN THIS ORDER:

### 1. Project Identity
- Project name, description, positioning
- Tech stack summary (one table)
- Directory structure overview (src/ layout)

### 2. Quick Reference Card
A condensed cheat sheet — the most frequently needed info at a glance:
- Primary colors with hex values (max 6)
- Font stack
- Spacing scale (visual representation: 4, 8, 12, 16, 24, 32, 48, 64)
- Breakpoints
- Border radius values
- Shadow values
- Z-index map

### 3. Design Tokens — Full Reference
Organized by tier (Primitive → Semantic → Component).
Each token entry: name, value, CSS variable, Tailwind class equivalent.
Use tables for scannability.

### 4. Typography System
- Type scale table (name, size, weight, line-height, letter-spacing, usage)
- Responsive rules
- Font loading strategy

### 5. Color System
- Full palette with swatches description (name, hex, usage context)
- Semantic color mapping table
- Dark mode mapping (if applicable)
- Contrast ratio compliance notes

### 6. Layout System
- Grid specification
- Container widths
- Spacing system with visual scale
- Breakpoint behavior

### 7. Component Library
[Insert Phase 3 output for each component]

### 8. Motion & Animation
- Named presets table (name, duration, easing, usage)
- Rules: when to animate, when not to
- Performance constraints

### 9. Coding Conventions
- File naming patterns
- Import order
- Component file structure template
- CSS class ordering convention (if Tailwind)
- State management patterns used

### 10. Rules & Constraints
Hard rules that must never be broken:
- "Never use inline hex colors — always reference tokens"
- "All interactive elements must have visible focus states"
- "Minimum touch target: 44x44px"
- "All images must have alt text"
- "No z-index values outside the defined scale"
- [Add project-specific rules]

## Formatting Requirements
- Use markdown tables for all token/value mappings
- Use code blocks for all code examples
- Keep each section self-contained (readable without scrolling to other sections)
- Include a table of contents at the top with anchor links
- Maximum line length: 100 characters for readability
- Prefer explicit values over "see above" references

## Critical Rule
This file must be AUTHORITATIVE. If there's ambiguity between the
CLAUDE.md and the actual code, the CLAUDE.md should be updated to
match reality — never the other way around. This documents what IS,
not what SHOULD BE (that's a separate roadmap).
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
