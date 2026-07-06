# Web应用测试技巧

## 中文说明

使用 Playwright 与本地 Web 应用程序交互并测试本地 Web 应用程序的工具包。支持验证前端功能、debug UI 行为、捕获浏览器屏幕截图以及查看浏览器日志。

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 围绕 Skill、Web Development、Testing 等主题生成结构化结果

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

````md
---
名称：网络应用程序测试技能
描述：使用 Playwright 与本地 Web 应用程序交互并测试本地 Web 应用程序的工具包。
---

# Web 应用程序测试

此技能可以使用 Playwright 自动化对本地 Web 应用程序进行全面测试和debug。

## 何时使用此技能

当你需要执行以下操作时，请使用此技能：
- 在真实浏览器中测试前端功能
- 验证 UI 行为和交互
- debug网络应用程序问题
- 捕获屏幕截图以用于文档或debug
- 检查浏览器控制台日志
- 验证表单提交和用户流程
- 检查跨视口的响应式设计

## 先决条件

- 系统上安装了 Node.js
- 本地运行的 Web 应用程序（或可访问的 URL）
- 如果不存在，剧作家将自动安装

## 核心能力

### 1. 浏览器自动化
- 导航至 URL
- 单击按钮和链接
- 填写表单字段
- 选择下拉菜单
- 处理对话框和警报

### 2.验证
- 断言元素存在
- 验证文本内容
- 检查元素可见性
- 验证 URL
- 测试响应行为

### 3.debug
- 捕获屏幕截图
- 查看控制台日志
- 检查网络请求
- debug失败的测试

## 用法示例

### 示例 1：基本导航测试
```javascript
// Navigate to a page and verify title
await page.goto('http://localhost:3000');
const title = await page.title();
console.log('Page title:', title);
```

### 示例 2：表单交互
```javascript
// Fill out and submit a form
await page.fill('#username', 'testuser');
await page.fill('#password', 'password123');
await page.click('button[type="submit"]');
await page.waitForURL('**/dashboard');
```

### 示例 3：屏幕截图
```javascript
// Capture a screenshot for debugging
await page.screenshot({ path: 'debug.png', fullPage: true });
```

## 指南

1. **始终验证应用程序是否正在运行** - 在运行测试之前检查本地服务器是否可访问
2. **使用显式等待** - 在交互之前等待元素或导航完成
3. **Capture Screenshots on failure** - 截取屏幕截图以帮助debug问题
4. **清理资源** - 完成后始终关闭浏览器
5. **优雅地处理超时** - 为缓慢的操作设置合理的超时
6. **增量测试** - 在复杂的流程之前从简单的交互开始
7. **明智地使用选择器** - 优先使用 data-testid 或基于角色的选择器而不是 CSS 类

## 常见模式

### 模式：等待元素
```javascript
await page.waitForSelector('#element-id', { state: 'visible' });
```

### 模式：检查元素是否存在
```javascript
const exists = await page.locator('#element-id').count() > 0;
```

### 模式：获取控制台日志
```javascript
page.on('console', msg => console.log('Browser log:', msg.text()));
```

### 模式：处理bug
```javascript
try {
  await page.click('#button');
} catch (error) {
  await page.screenshot({ path: 'error.png' });
  throw error;
}
```

## 限制

- 需要Node.js环境
- 无法测试本机移动应用程序（使用 React Native 测试库代替）
- 复杂的身份验证流程可能存在问题
- 一些现代框架可能需要特定配置
````

---

## English Original

### Title

Web Application Testing Skill

### Description

Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.

### Prompt

````md
---
name: web-application-testing-skill
description: A toolkit for interacting with and testing local web applications using Playwright.
---

# Web Application Testing

This skill enables comprehensive testing and debugging of local web applications using Playwright automation.

## When to Use This Skill

Use this skill when you need to:
- Test frontend functionality in a real browser
- Verify UI behavior and interactions
- Debug web application issues
- Capture screenshots for documentation or debugging
- Inspect browser console logs
- Validate form submissions and user flows
- Check responsive design across viewports

## Prerequisites

- Node.js installed on the system
- A locally running web application (or accessible URL)
- Playwright will be installed automatically if not present

## Core Capabilities

### 1. Browser Automation
- Navigate to URLs
- Click buttons and links
- Fill form fields
- Select dropdowns
- Handle dialogs and alerts

### 2. Verification
- Assert element presence
- Verify text content
- Check element visibility
- Validate URLs
- Test responsive behavior

### 3. Debugging
- Capture screenshots
- View console logs
- Inspect network requests
- Debug failed tests

## Usage Examples

### Example 1: Basic Navigation Test
```javascript
// Navigate to a page and verify title
await page.goto('http://localhost:3000');
const title = await page.title();
console.log('Page title:', title);
```

### Example 2: Form Interaction
```javascript
// Fill out and submit a form
await page.fill('#username', 'testuser');
await page.fill('#password', 'password123');
await page.click('button[type="submit"]');
await page.waitForURL('**/dashboard');
```

### Example 3: Screenshot Capture
```javascript
// Capture a screenshot for debugging
await page.screenshot({ path: 'debug.png', fullPage: true });
```

## Guidelines

1. **Always verify the app is running** - Check that the local server is accessible before running tests
2. **Use explicit waits** - Wait for elements or navigation to complete before interacting
3. **Capture screenshots on failure** - Take screenshots to help debug issues
4. **Clean up resources** - Always close the browser when done
5. **Handle timeouts gracefully** - Set reasonable timeouts for slow operations
6. **Test incrementally** - Start with simple interactions before complex flows
7. **Use selectors wisely** - Prefer data-testid or role-based selectors over CSS classes

## Common Patterns

### Pattern: Wait for Element
```javascript
await page.waitForSelector('#element-id', { state: 'visible' });
```

### Pattern: Check if Element Exists
```javascript
const exists = await page.locator('#element-id').count() > 0;
```

### Pattern: Get Console Logs
```javascript
page.on('console', msg => console.log('Browser log:', msg.text()));
```

### Pattern: Handle Errors
```javascript
try {
  await page.click('#button');
} catch (error) {
  await page.screenshot({ path: 'error.png' });
  throw error;
}
```

## Limitations

- Requires Node.js environment
- Cannot test native mobile apps (use React Native Testing Library instead)
- May have issues with complex authentication flows
- Some modern frameworks may require specific configuration
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
