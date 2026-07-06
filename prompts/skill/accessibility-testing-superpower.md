---
id: "cmjmk4gsv000jld04pplcmo1e"
slug: "accessibility-testing-superpower"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/accessibility-testing-superpower"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6f0ca23df5185bef09fbe90d2ab955a6dd9feae1e38a524159d5ff8b1743af8a"
upstream_updated_at: "2026-01-15T13:58:26.836Z"
---
# 无障碍测试超能力

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[accessibility-testing-superpower](https://prompts.chat/prompts/accessibility-testing-superpower)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

对 Web 应用程序执行 WCAG 合规性审核和可访问性修复。在以下情况下使用： 1) 审核 UI 是否符合 WCAG 2.1/2.2 2) 修复屏幕阅读器或键盘导航问题 3) 正确实施 ARIA 模式 4) 检查颜色对比度和视觉可访问性 5) 创建可访问的表单或交互式组件

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Skill、AI Tools、JavaScript、Go 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称：可访问性测试超级大国
描述：|
  对 Web 应用程序执行 WCAG 合规性审核和可访问性修复。
  在以下情况下使用： 1) 审核 UI 是否符合 WCAG 2.1/2.2 2) 修复屏幕阅读器或键盘导航问题 3) 正确实施 ARIA 模式 4) 检查颜色对比度和视觉可访问性 5) 创建可访问的表单或交互式组件
---

# 辅助功能测试工作流程

## 配置

- **WCAG 级别**：${wcag_level:AA}
- **被测组件**：${component_name:Page}
- **合规标准**：${compliance_standard:WCAG 2.1}
- **最低灯塔分数**：${lighthouse_score:90}
- **主屏幕阅读器**：${screen_reader:NVDA}
- **测试框架**：${test_framework:jest-axe}

## 审计决策树

```
Accessibility request received
|
+-- New component/page?
|   +-- Run automated scan first (axe-core, Lighthouse)
|   +-- Keyboard navigation test
|   +-- Screen reader announcement check
|   +-- Color contrast verification
|
+-- Existing violation to fix?
|   +-- Identify WCAG success criterion
|   +-- Check if semantic HTML solves it
|   +-- Apply ARIA only when HTML insufficient
|   +-- Verify fix with assistive technology
|
+-- Compliance audit?
    +-- Automated scan (catches ~30% of issues)
    +-- Manual testing checklist
    +-- Document violations by severity
    +-- Create remediation roadmap
```

## WCAG 快速参考

### 严重程度分类

|严重程度 |影响 |示例 |修复时间线 |
|----------|--------|----------|--------------|
|关键|完全阻止访问 |没有键盘焦点、空按钮、功能图像上缺少 alt |立即 |
|认真的|主要障碍|对比度差、缺少表单标签、没有跳过链接 |冲刺内 |
|中等|困难但可用|导航不一致，错误消息不明确 |下一个版本 |
|次要|不便 |多余的替代文本、较小的标题顺序问题 |积压|

### 常见违规行为和修复

**缺少可访问名称**
```html
<!-- Violation -->
<button><svg>...</svg></button>

<!-- Fix: aria-label -->
<button aria-label="Close dialog"><svg>...</svg></button>

<!-- Fix: visually hidden text -->
<button><span class="sr-only">Close dialog</span><svg>...</svg></button>
```

**形成标签关联**
```html
<!-- Violation -->
<label>Email</label>
<input type="email">

<!-- Fix: explicit association -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Fix: implicit association -->
<label>Email <input type="email"></label>
```

**颜色对比失败**
```
Minimum ratios (WCAG ${wcag_level:AA}):
- Normal text (<${large_text_size:18}px or <${bold_text_size:14}px bold): ${contrast_ratio_normal:4.5}:1
- Large text (>=${large_text_size:18}px or >=${bold_text_size:14}px bold): ${contrast_ratio_large:3}:1
- UI components and graphics: 3:1

Tools: WebAIM Contrast Checker, browser DevTools
```

**焦点可见度**
```css
/* Never do this without alternative */
:focus { outline: none; }

/* Proper custom focus */
:focus-visible {
  outline: ${focus_outline_width:2}px solid ${focus_outline_color:#005fcc};
  outline-offset: ${focus_outline_offset:2}px;
}
```

## ARIA 决策框架

```
Need to convey information to assistive technology?
|
+-- Can semantic HTML do it?
|   +-- YES: Use HTML (<button>, <nav>, <main>, <article>)
|   +-- NO: Continue to ARIA
|
+-- What type of ARIA needed?
    +-- Role: What IS this element? (role="dialog", role="tab")
    +-- State: What condition? (aria-expanded, aria-checked)
    +-- Property: What relationship? (aria-labelledby, aria-describedby)
    +-- Live region: Dynamic content? (aria-live="${aria_live_mode:polite}")
```

### 常见小部件的 ARIA 模式

**披露（显示/隐藏）**
```html
<button aria-expanded="false" aria-controls="content-1">
  Show details
</button>
<div id="content-1" hidden>
  Content here
</div>
```

**选项卡界面**
```html
<div role="tablist" aria-label="${component_name:Settings}">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
    General
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
    Privacy
  </button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

**模态对话框**
```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm action</h2>
  <p>Are you sure you want to proceed?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>
```

## 键盘导航清单

```
[ ] All interactive elements focusable with Tab
[ ] Focus order matches visual/logical order
[ ] Focus visible on all elements
[ ] No keyboard traps (can always Tab out)
[ ] Skip link as first focusable element
[ ] Escape closes modals/dropdowns
[ ] Arrow keys navigate within widgets (tabs, menus, grids)
[ ] Enter/Space activates buttons and links
[ ] Custom shortcuts documented and configurable
```

### 焦点管理模式

**模态焦点陷阱**
```javascript
// On modal open:
// 1. Save previously focused element
// 2. Move focus to first focusable in modal
// 3. Trap Tab within modal boundaries

// On modal close:
// 1. Return focus to saved element
```

**动态内容**
```javascript
// After adding content:
// - Announce via aria-live region, OR
// - Move focus to new content heading

// After removing content:
// - Move focus to logical next element
// - Never leave focus on removed element
```

## 屏幕阅读器测试

###公告验证

|元素|应该宣布|
|------|------------------|
|按钮|角色 + 姓名 + 状态（“提交按钮”）|
|链接 |名称+“链接”（“主页链接”）|
|图片|替代文本或“装饰”（跳过）|
|标题 |级别 + 文本（“标题级别 2，关于我们”）|
|表单字段 |标签+类型+状态+说明|
|错误|错误信息+字段关联 |

### 测试命令（快速参考）

**画外音 (macOS)**
- VO = Ctrl + 选项
- VO + A：阅读全部
- VO + 右/左：导航元素
- VO + Cmd + H：下一个标题
- VO + Cmd + J：下一个表单控件

**${screen_reader:NVDA}（Windows）**
- NVDA + 向下：阅读全部
- 选项卡：下一个可聚焦的
- H：下一个标题
-F：下一个表单字段
- B：下一步按钮

## 自动化测试集成

### 测试中的 axe-core
```javascript
// ${test_framework:jest-axe}
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('${component_name:component} is accessible', async () => {
  const { container } = render(<${component_name:MyComponent} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### 灯塔 CI 阈值
```javascript
// lighthouserc.js
module.exports = {
  assertions: {
    'categories:accessibility': ['error', { minScore: ${lighthouse_score:90} / 100 }],
  },
};
```

## 修复优先级矩阵

```
Impact vs Effort:
                    Low Effort    High Effort
High Impact     |   DO FIRST   |   PLAN NEXT   |
                |   alt text   |   redesign    |
                |   labels     |   nav rebuild |
----------------|--------------|---------------|
Low Impact      |   QUICK WIN  |   BACKLOG     |
                |   contrast   |   nice-to-have|
                |   tweaks     |   enhancements|
```

## 验证清单

在将辅助功能标记为完成之前：

```
Automated Testing:
[ ] axe-core reports zero violations
[ ] Lighthouse accessibility >= ${lighthouse_score:90}
[ ] HTML validator passes (affects AT parsing)

Keyboard Testing:
[ ] Full task completion without mouse
[ ] Visible focus at all times
[ ] Logical tab order
[ ] No traps

Screen Reader Testing:
[ ] Tested with at least one screen reader (${screen_reader:NVDA})
[ ] All content announced correctly
[ ] Interactive elements have roles/states
[ ] Dynamic updates announced

Visual Testing:
[ ] Contrast ratios verified (${contrast_ratio_normal:4.5}:1 minimum)
[ ] Works at ${zoom_level:200}% zoom
[ ] No information conveyed by color alone
[ ] Respects prefers-reduced-motion
```
````

---

## English Original

### Title

Accessibility Testing Superpower

### Description

Performs WCAG compliance audits and accessibility remediation for web applications. Use when: 1) Auditing UI for WCAG 2.1/2.2 compliance 2) Fixing screen reader or keyboard navigation issues 3) Implementing ARIA patterns correctly 4) Reviewing color contrast and visual accessibility 5) Creating accessible forms or interactive components

### Prompt

````md
---
name: accessibility-testing-superpower
description: |
  Performs WCAG compliance audits and accessibility remediation for web applications.
  Use when: 1) Auditing UI for WCAG 2.1/2.2 compliance 2) Fixing screen reader or keyboard navigation issues 3) Implementing ARIA patterns correctly 4) Reviewing color contrast and visual accessibility 5) Creating accessible forms or interactive components
---

# Accessibility Testing Workflow

## Configuration

- **WCAG Level**: ${wcag_level:AA}
- **Component Under Test**: ${component_name:Page}
- **Compliance Standard**: ${compliance_standard:WCAG 2.1}
- **Minimum Lighthouse Score**: ${lighthouse_score:90}
- **Primary Screen Reader**: ${screen_reader:NVDA}
- **Test Framework**: ${test_framework:jest-axe}

## Audit Decision Tree

```
Accessibility request received
|
+-- New component/page?
|   +-- Run automated scan first (axe-core, Lighthouse)
|   +-- Keyboard navigation test
|   +-- Screen reader announcement check
|   +-- Color contrast verification
|
+-- Existing violation to fix?
|   +-- Identify WCAG success criterion
|   +-- Check if semantic HTML solves it
|   +-- Apply ARIA only when HTML insufficient
|   +-- Verify fix with assistive technology
|
+-- Compliance audit?
    +-- Automated scan (catches ~30% of issues)
    +-- Manual testing checklist
    +-- Document violations by severity
    +-- Create remediation roadmap
```

## WCAG Quick Reference

### Severity Classification

| Severity | Impact | Examples | Fix Timeline |
|----------|--------|----------|--------------|
| Critical | Blocks access entirely | No keyboard focus, empty buttons, missing alt on functional images | Immediate |
| Serious | Major barriers | Poor contrast, missing form labels, no skip links | Within sprint |
| Moderate | Difficult but usable | Inconsistent navigation, unclear error messages | Next release |
| Minor | Inconvenience | Redundant alt text, minor heading order issues | Backlog |

### Common Violations and Fixes

**Missing accessible name**
```html
<!-- Violation -->
<button><svg>...</svg></button>

<!-- Fix: aria-label -->
<button aria-label="Close dialog"><svg>...</svg></button>

<!-- Fix: visually hidden text -->
<button><span class="sr-only">Close dialog</span><svg>...</svg></button>
```

**Form label association**
```html
<!-- Violation -->
<label>Email</label>
<input type="email">

<!-- Fix: explicit association -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Fix: implicit association -->
<label>Email <input type="email"></label>
```

**Color contrast failure**
```
Minimum ratios (WCAG ${wcag_level:AA}):
- Normal text (<${large_text_size:18}px or <${bold_text_size:14}px bold): ${contrast_ratio_normal:4.5}:1
- Large text (>=${large_text_size:18}px or >=${bold_text_size:14}px bold): ${contrast_ratio_large:3}:1
- UI components and graphics: 3:1

Tools: WebAIM Contrast Checker, browser DevTools
```

**Focus visibility**
```css
/* Never do this without alternative */
:focus { outline: none; }

/* Proper custom focus */
:focus-visible {
  outline: ${focus_outline_width:2}px solid ${focus_outline_color:#005fcc};
  outline-offset: ${focus_outline_offset:2}px;
}
```

## ARIA Decision Framework

```
Need to convey information to assistive technology?
|
+-- Can semantic HTML do it?
|   +-- YES: Use HTML (<button>, <nav>, <main>, <article>)
|   +-- NO: Continue to ARIA
|
+-- What type of ARIA needed?
    +-- Role: What IS this element? (role="dialog", role="tab")
    +-- State: What condition? (aria-expanded, aria-checked)
    +-- Property: What relationship? (aria-labelledby, aria-describedby)
    +-- Live region: Dynamic content? (aria-live="${aria_live_mode:polite}")
```

### ARIA Patterns for Common Widgets

**Disclosure (show/hide)**
```html
<button aria-expanded="false" aria-controls="content-1">
  Show details
</button>
<div id="content-1" hidden>
  Content here
</div>
```

**Tab interface**
```html
<div role="tablist" aria-label="${component_name:Settings}">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
    General
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
    Privacy
  </button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

**Modal dialog**
```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm action</h2>
  <p>Are you sure you want to proceed?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>
```

## Keyboard Navigation Checklist

```
[ ] All interactive elements focusable with Tab
[ ] Focus order matches visual/logical order
[ ] Focus visible on all elements
[ ] No keyboard traps (can always Tab out)
[ ] Skip link as first focusable element
[ ] Escape closes modals/dropdowns
[ ] Arrow keys navigate within widgets (tabs, menus, grids)
[ ] Enter/Space activates buttons and links
[ ] Custom shortcuts documented and configurable
```

### Focus Management Patterns

**Modal focus trap**
```javascript
// On modal open:
// 1. Save previously focused element
// 2. Move focus to first focusable in modal
// 3. Trap Tab within modal boundaries

// On modal close:
// 1. Return focus to saved element
```

**Dynamic content**
```javascript
// After adding content:
// - Announce via aria-live region, OR
// - Move focus to new content heading

// After removing content:
// - Move focus to logical next element
// - Never leave focus on removed element
```

## Screen Reader Testing

### Announcement Verification

| Element | Should Announce |
|---------|-----------------|
| Button | Role + name + state ("Submit button") |
| Link | Name + "link" ("Home page link") |
| Image | Alt text OR "decorative" (skip) |
| Heading | Level + text ("Heading level 2, About us") |
| Form field | Label + type + state + instructions |
| Error | Error message + field association |

### Testing Commands (Quick Reference)

**VoiceOver (macOS)**
- VO = Ctrl + Option
- VO + A: Read all
- VO + Right/Left: Navigate elements
- VO + Cmd + H: Next heading
- VO + Cmd + J: Next form control

**${screen_reader:NVDA} (Windows)**
- NVDA + Down: Read all
- Tab: Next focusable
- H: Next heading
- F: Next form field
- B: Next button

## Automated Testing Integration

### axe-core in tests
```javascript
// ${test_framework:jest-axe}
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('${component_name:component} is accessible', async () => {
  const { container } = render(<${component_name:MyComponent} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Lighthouse CI threshold
```javascript
// lighthouserc.js
module.exports = {
  assertions: {
    'categories:accessibility': ['error', { minScore: ${lighthouse_score:90} / 100 }],
  },
};
```

## Remediation Priority Matrix

```
Impact vs Effort:
                    Low Effort    High Effort
High Impact     |   DO FIRST   |   PLAN NEXT   |
                |   alt text   |   redesign    |
                |   labels     |   nav rebuild |
----------------|--------------|---------------|
Low Impact      |   QUICK WIN  |   BACKLOG     |
                |   contrast   |   nice-to-have|
                |   tweaks     |   enhancements|
```

## Verification Checklist

Before marking accessibility work complete:

```
Automated Testing:
[ ] axe-core reports zero violations
[ ] Lighthouse accessibility >= ${lighthouse_score:90}
[ ] HTML validator passes (affects AT parsing)

Keyboard Testing:
[ ] Full task completion without mouse
[ ] Visible focus at all times
[ ] Logical tab order
[ ] No traps

Screen Reader Testing:
[ ] Tested with at least one screen reader (${screen_reader:NVDA})
[ ] All content announced correctly
[ ] Interactive elements have roles/states
[ ] Dynamic updates announced

Visual Testing:
[ ] Contrast ratios verified (${contrast_ratio_normal:4.5}:1 minimum)
[ ] Works at ${zoom_level:200}% zoom
[ ] No information conveyed by color alone
[ ] Respects prefers-reduced-motion
```
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [accessibility-testing-superpower](https://prompts.chat/prompts/accessibility-testing-superpower) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | Skill, AI Tools, JavaScript, Go, Backend |
| Contributors | izzetemre |
| Updated At | 2026-01-15T13:58:26.836Z |
