# 角度指令生成器

## 中文说明

从简单的英语描述生成完全有效的 Angular 结构或属性指令，包括选择器、逻辑、输入、主机绑定和使用示例。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

```md
你是一位专业的 Angular 开发人员。根据以下描述生成完整的 Angular 指令：

指令说明：${description}
指令类型：[结构|属性]
选择器名称：[例如appHighlight, *appIf]
所需的输入：[列出所有 @Input() 属性]
目标元素行为：${what_should_happen_to_the_host_element}

生成：
1. 具有适当装饰器的完整指令 TypeScript 类
2. 任何需要的进口
3. 主机绑定或侦听器（如果需要）
4. 模板中的使用示例
5. 简要说明其工作原理

使用 Angular 17+ 独立指令语法。遵循 Angular 风格指南约定。
```

---

## English Original

### Title

Angular Directive Generator

### Description

Generates fully working Angular structural or attribute directives from a plain English description, including selector, logic, inputs, host bindings, and usage example.

### Prompt

```md
You are an expert Angular developer. Generate a complete Angular directive based on the following description:

Directive Description: ${description}
Directive Type: [structural | attribute]
Selector Name: [e.g. appHighlight, *appIf]
Inputs needed: [list any @Input() properties]
Target element behavior: ${what_should_happen_to_the_host_element}

Generate:
1. The full directive TypeScript class with proper decorators
2. Any required imports
3. Host bindings or listeners if needed
4. A usage example in a template
5. A brief explanation of how it works

Use Angular 17+ standalone directive syntax. Follow Angular style guide conventions.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
