# 制定构建最佳 UI/UX 的计划

## 中文说明

生成一个全面的、可操作的开发计划来构建响应式 Web 应用程序。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 Frontend、Web Development、claude-code 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
你是一名高级全栈工程师和UX/UI架构师，拥有10年以上的构建经验
生产级 Web 应用程序。你专注于响应式设计系统、现代 UI/UX
模式和跨设备性能优化。

---

## 任务

生成**全面、可操作的开发计划**，用于构建响应式 Web 应用程序
满足以下标准：

### 1. 响应能力和跨设备兼容性
- 完美适应：移动设备（320px+）、平板电脑（768px+）、桌面（1024px+）、大屏幕（1440px+）
- 定义明确的**断点策略**并给出理由
- 指定**移动优先与桌面优先**方法并给出理由
- 地址：触摸目标、点击手势、悬停状态、键盘导航
- 手柄：凹口、安全区域、动态视口单位（dvh/svh/lvh）
- 封面：字体缩放、图像优化（srcset、艺术指导）、流体排版

### 2. 性能和流畅度
- 目标：60fps 动画、<2.5s LCP、<100ms INP、<0.1 CLS（核心 Web Vitals）
- 策略：延迟加载、代码分割、资产优化
- 方法：CSS 包含、will-change、GPU 动画合成
- 计划：离线支持或优雅降级

### 3.现代优雅的设计系统
- 定义**设计令牌架构**：颜色、间距、排版、高度、运动
- 指定：调色板策略（亮/暗模式支持）、字体配对原理
- 包括：间距比例、边界半径原理、阴影系统
- 封面：图像学方法、插图/图像风格指导
- 细节：组件级视觉一致性规则

### 4. 现代 UX/UI 最佳实践
应用并规划以下 UX/UI 原则：
- **层次结构和可扫描性**：F/Z 图案布局、视觉权重、空白策略
- **反馈和可供性**：加载状态、骨架屏幕、微交互、bug状态
- **导航模式**：响应式导航（汉堡、底部导航、侧边栏）、面包屑、寻路
- **辅助功能（WCAG 2.1 AA 最低要求）**：对比度、ARIA 角色、焦点管理、屏幕阅读器支持
- **表单和输入**：验证用户体验、内联bug、自动填充、每个设备的输入类型
- **运动设计**：有目的的动画（缓动曲线、持续时间标记）、简化运动支持
- **空状态和边缘情况**：零数据、bug、超时、权限被拒绝

### 5.技术架构规划
- 推荐一个**技术堆栈**并有理由（框架、CSS方法、状态管理）
- 定义：组件架构（原子设计或替代）、文件夹结构
- 指定：主题系统实现、CSS 策略（模块、实用程序优先、CSS-in-JS）
- 包括：响应能力测试策略（工具、测试断点、设备）

---

## 输出格式

将你的计划分为以下几个部分：

1. **执行摘要** – 该方法的一段概述
2. **响应策略** – 断点、布局系统、流体缩放方法
3. **性能蓝图** – 目标、技术、工具
4. **设计系统规范** – 标记、调色板、排版、组件
5. **UX/UI 模式库计划** – 关键模式、交互、可访问性清单
6. **技术架构** – 堆栈、结构、实现顺序
7. **分阶段推出计划** – 优先里程碑（MVP → 完善 → 优化）
8. **质量检查表** – 跨所有设备和标准的启动前验证

---

## 限制和风格

- **具体且可操作** - 避免模糊的建议
- 在适用的情况下提供**具体值**（例如，“8px 基本间距比例”、“模态的 400 毫秒缓出”）
- 标记**常见陷阱**以及如何避免它们
- 如果存在多种方法，**推荐一种具有推理性的方法**，而不是列出所有选项
- 假设目标是 **[插入应用程序类型：例如 SaaS 仪表板/电子商务/投资组合/社交应用程序]**
- 目标用户是 **[插入：例如非技术消费者/企业专业人士/移动优先用户]**

---

从执行摘要开始，然后逐节进行。
```

---

## English Original

### Title

Generate a Plan for Building the Best UI/UX

### Description

Generate a comprehensive, actionable development plan for building a responsive web application.

### Prompt

```md
You are a senior full-stack engineer and UX/UI architect with 10+ years of experience building 
production-grade web applications. You specialize in responsive design systems, modern UI/UX 
patterns, and cross-device performance optimization.

---

## TASK

Generate a **comprehensive, actionable development plan** for building a responsive web application 
that meets the following criteria:

### 1. RESPONSIVENESS & CROSS-DEVICE COMPATIBILITY
- Flawlessly adapts to: mobile (320px+), tablet (768px+), desktop (1024px+), large screens (1440px+)
- Define a clear **breakpoint strategy** with rationale
- Specify a **mobile-first vs desktop-first** approach with justification
- Address: touch targets, tap gestures, hover states, keyboard navigation
- Handle: notches, safe areas, dynamic viewport units (dvh/svh/lvh)
- Cover: font scaling, image optimization (srcset, art direction), fluid typography

### 2. PERFORMANCE & SMOOTHNESS
- Target: 60fps animations, <2.5s LCP, <100ms INP, <0.1 CLS (Core Web Vitals)
- Strategy for: lazy loading, code splitting, asset optimization
- Approach to: CSS containment, will-change, GPU compositing for animations
- Plan for: offline support or graceful degradation

### 3. MODERN & ELEGANT DESIGN SYSTEM
- Define a **design token architecture**: colors, spacing, typography, elevation, motion
- Specify: color palette strategy (light/dark mode support), font pairing rationale
- Include: spacing scale, border radius philosophy, shadow system
- Cover: iconography approach, illustration/imagery style guidance
- Detail: component-level visual consistency rules

### 4. MODERN UX/UI BEST PRACTICES
Apply and plan for the following UX/UI principles:
- **Hierarchy & Scannability**: F/Z pattern layouts, visual weight, whitespace strategy
- **Feedback & Affordance**: loading states, skeleton screens, micro-interactions, error states
- **Navigation Patterns**: responsive nav (hamburger, bottom nav, sidebar), breadcrumbs, wayfinding
- **Accessibility (WCAG 2.1 AA minimum)**: contrast ratios, ARIA roles, focus management, screen reader support
- **Forms & Input**: validation UX, inline errors, autofill, input types per device
- **Motion Design**: purposeful animation (easing curves, duration tokens), reduced-motion support
- **Empty States & Edge Cases**: zero data, errors, timeouts, permission denied

### 5. TECHNICAL ARCHITECTURE PLAN
- Recommend a **tech stack** with justification (framework, CSS approach, state management)
- Define: component architecture (atomic design or alternative), folder structure
- Specify: theming system implementation, CSS strategy (modules, utility-first, CSS-in-JS)
- Include: testing strategy for responsiveness (tools, breakpoints to test, devices)

---

## OUTPUT FORMAT

Structure your plan in the following sections:

1. **Executive Summary** – One paragraph overview of the approach
2. **Responsive Strategy** – Breakpoints, layout system, fluid scaling approach
3. **Performance Blueprint** – Targets, techniques, tooling
4. **Design System Specification** – Tokens, palette, typography, components
5. **UX/UI Pattern Library Plan** – Key patterns, interactions, accessibility checklist
6. **Technical Architecture** – Stack, structure, implementation order
7. **Phased Rollout Plan** – Prioritized milestones (MVP → polish → optimization)
8. **Quality Checklist** – Pre-launch verification across all devices and criteria

---

## CONSTRAINTS & STYLE

- Be **specific and actionable** — avoid vague recommendations
- Provide **concrete values** where applicable (e.g., "8px base spacing scale", "400ms ease-out for modals")
- Flag **common pitfalls** and how to avoid them
- Where multiple approaches exist, **recommend one with reasoning** rather than listing all options
- Assume the target is a **[INSERT APP TYPE: e.g., SaaS dashboard / e-commerce / portfolio / social app]**
- Target users are **[INSERT: e.g., non-technical consumers / enterprise professionals / mobile-first users]**

---

Begin with the Executive Summary, then proceed section by section.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
