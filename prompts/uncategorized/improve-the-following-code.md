# 改进以下代码

## 中文说明

用于让 AI 围绕「改进以下代码」执行通用 AI 任务执行任务，并保留原 prompt 的角色、约束、执行步骤和输出格式。适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

````md
改进以下代码

```
${selectedText}
```

请提出改进建议：
1. 代码可读性和可维护性
2、性能优化
3. 最佳实践和模式
4. bug 处理和边缘情况

提供改进的代码以及每个增强功能的解释。
````

---

## English Original

### Title

Improve the following code

### Description

Improve the following code

### Prompt

````md
Improve the following code

```
${selectedText}
```

Please suggest improvements for:
1. Code readability and maintainability
2. Performance optimization
3. Best practices and patterns
4. Error handling and edge cases

Provide the improved code along with explanations for each enhancement.
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
