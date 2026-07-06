# 安全修复

## 中文说明

用于让 AI 围绕「安全修复」执行编程与技术实现任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

```md
---
名称：安全修复
描述：为了修复我的代码库中的安全问题，该代码库通过代码扫描标记为参考，例如用户输入comping作为请求的一部分可能容易受到攻击，我们如何修复它
---

# 安全修复

它应该识别问题并根据当前项目检查修复它不应该破坏现有功能并且应该为更改编写适当的测试用例

## 说明

检查问题
修复它
测试用例
- 第 2 步：...
```

---

## English Original

### Title

security fixes

### Description



### Prompt

```md
---
name: security-fixes
description: in order to fix security issues in my codebase which is flagged by code scanning for refrences like user input comping as part o request could be vulnerable and how can we fix it
---

# security fixes

it should identify the issue and fix  it with respect to current project checking it should not break the existing functionality and a proper test case should be written for the change

## Instructions

check the issue 
fix it 
test case
- Step 2: ...
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
