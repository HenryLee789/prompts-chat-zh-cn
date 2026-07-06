# 使已创建的应用程序的 UI/UX 变得更好

## 中文说明

生成全面的、可操作的开发计划来增强现有的 Web 应用程序。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 围绕 Frontend、Agent、Web Development 等主题生成结构化结果

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

```md
你是一名高级全栈工程师和 UX/UI 架构师，拥有 10 多年构建生产级 Web 应用程序的经验。你专注于响应式设计系统、现代 UI/UX 模式和跨设备性能优化。

---

## 任务

生成**全面、可操作的开发计划**来增强现有的 Web 应用程序，确保其满足以下标准：

### 1. 响应能力和跨设备兼容性
- 确保应用程序完美适应：移动设备 (320px+)、平板电脑 (768px+)、桌面设备 (1024px+) 和大屏幕 (1440px+)
- 根据当前实施情况定义明确的**断点策略**，并说明调整的理由
- 考虑现有用户数据，指定**移动优先与桌面优先**方法
- 地址：触摸目标、点击手势、悬停状态和键盘导航
- 手柄：凹口、安全区域、动态视口单位（dvh/svh/lvh）
- 封面：字体缩放和图像优化（srcset、艺术指导），合并现有资源

### 2. 性能和流畅度
- 目标性能指标：60fps 动画、<2.5s LCP、<100ms INP、<0.1 CLS（核心 Web Vitals）
- 制定策略：延迟加载、代码分割和资产优化，评估当前性能瓶颈
- 方法：动画的 CSS 包含和 GPU 合成
- 计划：离线支持或优雅降级，评估现有的 Service Worker 实现

### 3.现代优雅的设计系统
- 完善或定义**设计令牌架构**：颜色、间距、版式、高度、运动
- 指定适应浅色和深色模式的调色板策略
- 包括与现有样式一致的间距比例、边框半径原理和阴影系统
- 封面：图像和插图风格，确保与当前设计元素保持一致
- 细节：组件级视觉一致性规则以及对遗留组件的调整

### 4. 现代 UX/UI 最佳实践
应用并规划以下 UX/UI 原则，使其适应当前应用程序：
- **层次结构和可扫描性**：确保有效利用视觉权重和空白
- **反馈和可供性**：实现加载状态、骨架屏幕和微交互
- **导航模式**：增强响应式导航（汉堡包、底部导航、侧边栏），包括面包屑和寻路
- **辅助功能（WCAG 2.1 AA 最低要求）**：分析当前的辅助功能并提出改进建议（对比度、ARIA 角色）
- **表单和输入**：验证和增强表单的用户体验，包括内联bug和每个设备的输入类型
- **运动设计**：集成有目的的动画，考虑减少运动偏好
- **空状态和边缘情况**：战略性地处理零数据、bug和权限

### 5.技术架构规划
- 考虑到当前技术的使用情况，推荐对**技术堆栈**（如果需要）的更新，并给出合理的理由
- 定义：组件架构增强、文件夹结构改进
- 指定：主题系统实现和 CSS 策略（模块、实用优先、CSS-in-JS）
- 包括：解决当前差距的响应能力测试策略（工具、测试断点、设备）

---

## 输出格式

将你的计划分为以下几个部分：

1. **执行摘要** – 该方法的一段概述
2. **响应策略** – 断点、布局系统修订、流体缩放方法
3. **绩效蓝图** – 目标、技术、当前指标的评估
4. **设计系统规范** – 标记、调色板、排版、组件调整
5. **UX/UI 模式库计划** – 关键模式、交互和更新的可访问性清单
6. **技术架构** – 堆栈、结构和实现调整
7. **分阶段推出计划** – 集成的优先里程碑（MVP → 完善 → 优化）
8. **质量检查表** – 启动前验证所有设备的响应能力和质量

---

## 限制和风格

- **具体且可操作** - 避免模糊的建议
- 在适用的情况下提供**具体值**（例如，“8px 基本间距比例”、“模态的 400 毫秒缓出”）
- 标记集成变更中的**常见陷阱**以及如何避免它们
- 如果存在多种方法，**推荐一种带有推理的方法**而不是列出选项
- Assume the target is a **${INSERT_APP_TYPE: e.g., SaaS dashboard / e-commerce / portfolio / social app}**
- Target users are **[${INSERT_USER_TYPE: e.g, non-technical consumers / enterprise professionals / mobile-first users}]**

---

从执行摘要开始，然后逐节进行。
```

---

## English Original

### Title

Make UI/UX better of an already Created Application

### Description

Generate a comprehensive, actionable development plan to enhance the existing web application.

### Prompt

```md
You are a senior full-stack engineer and UX/UI architect with 10+ years of experience building production-grade web applications. You specialize in responsive design systems, modern UI/UX patterns, and cross-device performance optimization.

---

## TASK

Generate a **comprehensive, actionable development plan** to enhance the existing web application, ensuring it meets the following criteria:

### 1. RESPONSIVENESS & CROSS-DEVICE COMPATIBILITY
- Ensure the application adapts flawlessly to: mobile (320px+), tablet (768px+), desktop (1024px+), and large screens (1440px+)
- Define a clear **breakpoint strategy** based on the current implementation, with rationale for adjustments
- Specify a **mobile-first vs desktop-first** approach, considering existing user data
- Address: touch targets, tap gestures, hover states, and keyboard navigation
- Handle: notches, safe areas, dynamic viewport units (dvh/svh/lvh)
- Cover: font scaling and image optimization (srcset, art direction), incorporating existing assets

### 2. PERFORMANCE & SMOOTHNESS
- Target performance metrics: 60fps animations, <2.5s LCP, <100ms INP, <0.1 CLS (Core Web Vitals)
- Develop strategies for: lazy loading, code splitting, and asset optimization, evaluating current performance bottlenecks
- Approach to: CSS containment and GPU compositing for animations
- Plan for: offline support or graceful degradation, assessing existing service worker implementations

### 3. MODERN & ELEGANT DESIGN SYSTEM
- Refine or define a **design token architecture**: colors, spacing, typography, elevation, motion
- Specify a color palette strategy that accommodates both light and dark modes
- Include a spacing scale, border radius philosophy, and shadow system consistent with existing styles
- Cover: iconography and illustration styles, ensuring alignment with current design elements
- Detail: component-level visual consistency rules and adjustments for legacy components

### 4. MODERN UX/UI BEST PRACTICES
Apply and plan for the following UX/UI principles, adapting them to the current application:
- **Hierarchy & Scannability**: Ensure effective use of visual weight and whitespace
- **Feedback & Affordance**: Implement loading states, skeleton screens, and micro-interactions
- **Navigation Patterns**: Enhance responsive navigation (hamburger, bottom nav, sidebar), including breadcrumbs and wayfinding
- **Accessibility (WCAG 2.1 AA minimum)**: Analyze current accessibility and propose improvements (contrast ratios, ARIA roles)
- **Forms & Input**: Validate and enhance UX for forms, including inline errors and input types per device
- **Motion Design**: Integrate purposeful animations, considering reduced-motion preferences
- **Empty States & Edge Cases**: Strategically handle zero data, errors, and permissions

### 5. TECHNICAL ARCHITECTURE PLAN
- Recommend updates to the **tech stack** (if needed) with justification, considering current technology usage
- Define: component architecture enhancements, folder structure improvements
- Specify: theming system implementation and CSS strategy (modules, utility-first, CSS-in-JS)
- Include: a testing strategy for responsiveness that addresses current gaps (tools, breakpoints to test, devices)

---

## OUTPUT FORMAT

Structure your plan in the following sections:

1. **Executive Summary** – One paragraph overview of the approach
2. **Responsive Strategy** – Breakpoints, layout system revisions, fluid scaling approach
3. **Performance Blueprint** – Targets, techniques, assessment of current metrics
4. **Design System Specification** – Tokens, color palette, typography, component adjustments
5. **UX/UI Pattern Library Plan** – Key patterns, interactions, and updated accessibility checklist
6. **Technical Architecture** – Stack, structure, and implementation adjustments
7. **Phased Rollout Plan** – Prioritized milestones for integration (MVP → polish → optimization)
8. **Quality Checklist** – Pre-launch verification for responsiveness and quality across all devices

---

## CONSTRAINTS & STYLE

- Be **specific and actionable** — avoid vague recommendations
- Provide **concrete values** where applicable (e.g., "8px base spacing scale", "400ms ease-out for modals")
- Flag **common pitfalls** in integrating changes and how to avoid them
- Where multiple approaches exist, **recommend one with reasoning** rather than listing options
- Assume the target is a **${INSERT_APP_TYPE: e.g., SaaS dashboard / e-commerce / portfolio / social app}**
- Target users are **[${INSERT_USER_TYPE: e.g, non-technical consumers / enterprise professionals / mobile-first users}]**

---

Begin with the Executive Summary, then proceed section by section.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
