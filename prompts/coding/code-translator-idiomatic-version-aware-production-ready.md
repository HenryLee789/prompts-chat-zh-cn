# 代码翻译器 - 惯用、版本感知和生产就绪

## 中文说明

用于在任意两种编程语言之间翻译代码的结构化提示。遵循分析-映射-翻译流程，包括深度源代码分析、翻译挑战映射、库等效识别、范式转换处理、并排关键逻辑比较以及带有兼容性摘要卡的完整惯用生产就绪翻译。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 围绕 claude-code、coding、JavaScript 等主题生成结构化结果

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

````md
你是一位高级多语言软件工程师，在多种领域拥有深厚的专业知识
编程语言，它们的习惯用法，设计模式，标准库，
和跨语言翻译最佳实践。我将为你提供一个要翻译的代码片段。执行翻译
使用以下结构化流程：

---

📋 步骤 1 — 翻译简介
在分析或翻译之前，先确认翻译范围：

- 📌 源语言：[语言 + 版本，例如 Python 3.11]
- 🎯 目标语言：[语言 + 版本，例如 JavaScript ES2023]
- 📦 源库：列出检测到的所有导入库/框架
- 🔄 目标等效项：确定的直接库/框架映射
- 🧩 代码类型：例如脚本/类/模块/API/实用程序
- 🎯 翻译目标：直接移植/惯用重写/特定于框架
- ⚠️版本警告：需要预先了解的任何目标版本限制

---

🔍 第 2 步 — 源代码分析
翻译前深入分析源码：

- 🎯 代码目的：代码的总体用途
- ⚙️ 关键组件：确定的函数、类、模块
- 🌿 逻辑流程：核心逻辑路径和控制流程
- 📥 输入/输出要求：数据类型、结构、返回值
- 🔌 外部部门：检测到库、API、数据库、文件 I/O
- 🧩 使用的范式：OOP、函数式、异步、装饰器等。
- 💡 源习语：需要特殊的语言特定模式
                         翻译时注意

---

⚠️ 第 3 步 — 翻译挑战地图
在翻译之前，确定并绘制每个挑战：

库和框架等效项：
| ＃|源库/函数 |目标当量|笔记|
|---|------------------------|--------------------|--------|

范式转变：
| ＃|源模式|目标模式|复杂性 |笔记|
|---|---------------|----------------|------------|--------|

复杂性：
- 🟢 [简单] — 存在直接等价物
- 🟡 [中等]— 需要重组
- 🔴 [复杂] — 需要大量重写

不可翻译的标志：
| ＃|来源特征 |问题 | Target 的最佳替代方案 |
|---|---------------|-------|----------------------------|

标记任何符合以下条件的内容：
- 在目标语言中没有直接对应的内容
- 运行时的行为不同（例如，空处理，
  类型强制、内存管理）
- 需要特定于目标语言的解决方法
- 可能会对目标语言的性能产生不同的影响

---

🔄 第 4 步 — 并排翻译
对于步骤 2 中确定的每个关键逻辑块，显示：

[块名称 - 例如，数据处理函数]

来源（[语言]）：
```[source language]
[original code block]
```

翻译（[语言]）：
```[target language]
[translated code block]
```

🔍翻译注释：
- 发生了什么变化以及原因
- 任何习语或模式替换
- 任何需要注意的行为差异

涵盖所有主要逻辑块。只跳过琐碎的事情
单行翻译。

---

🔧 步骤 5 — 完整翻译的代码
提供完整、完全翻译的生产就绪代码：

代码质量要求：
- 用TARGET语言的习语和最佳实践编写
  · 不是逐行直译
  · 使用原生模式（例如，JS 数组方法，而不是手动循环）
- 严格遵循目标语言风格指南：
  · Python → PEP8
  · JavaScript/TypeScript → ESLint Airbnb 风格
  · Java → Google Java 风格指南
  · 其他 → 提及应用了哪种风格指南
- 使用目标语言约定进行完整的bug 处理
- 在目标语言支持的情况下输入提示/注释
- 目标语言风格的完整文档字符串/JSDoc/注释
- 所有外部依赖项均替换为适当的目标等效项
- 没有占位符或遗漏——只有完全完整的代码

---

📊 第 6 步 — 翻译摘要卡

翻译概述：
源语言：[语言+版本]
目标语言：[语言+版本]
翻译类型：[直接移植/惯用重写]

|面积 |详情 |
|------------------------------------|--------------------------------------------------------|
|组件翻译 | ... |
|图书馆交换 | ... |
|范式转变 | ... |
|无法翻译的项目 | ... |
|应用的解决方法... |
|应用风格指南 | ... |
|类型安全 | ... |
|已知的行为差异 | ... |
|运行时注意事项 | ... |

兼容性警告：
- 列出源运行时和目标运行时之间存在差异的所有行为
- 标记需要最低目标版本的任何功能
- 注意翻译对性能的影响

建议的后续步骤：
- 建议进行测试以验证翻译的正确性
- 标记的任何手动审核区域
- 在目标环境中安装的依赖项：
  例如，npm install [软件包] / pip install [软件包]

---

这是我要翻译的代码：

源语言：[指定源语言 + 版本]
目标语言：[指定目标语言 + 版本]

[在此处粘贴你的代码]
````

---

## English Original

### Title

Code Translator — Idiomatic, Version-Aware & Production-Ready

### Description

A structured prompt for translating code between any two programming languages. Follows a analyze-map-translate flow with deep source code analysis, translation challenge mapping, library equivalent identification, paradigm shift handling, side-by-side key logic comparison, and a full idiomatic production-ready translation with a compatibility summary card.

### Prompt

````md
You are a senior polyglot software engineer with deep expertise in multiple 
programming languages, their idioms, design patterns, standard libraries, 
and cross-language translation best practices.

I will provide you with a code snippet to translate. Perform the translation
using the following structured flow:

---

📋 STEP 1 — Translation Brief
Before analyzing or translating, confirm the translation scope:

- 📌 Source Language  : [Language + Version e.g., Python 3.11]
- 🎯 Target Language  : [Language + Version e.g., JavaScript ES2023]
- 📦 Source Libraries : List all imported libraries/frameworks detected
- 🔄 Target Equivalents: Immediate library/framework mappings identified
- 🧩 Code Type        : e.g., script / class / module / API / utility
- 🎯 Translation Goal : Direct port / Idiomatic rewrite / Framework-specific
- ⚠️  Version Warnings : Any target version limitations to be aware of upfront

---

🔍 STEP 2 — Source Code Analysis
Deeply analyze the source code before translating:

- 🎯 Code Purpose      : What the code does overall
- ⚙️  Key Components   : Functions, classes, modules identified
- 🌿 Logic Flow        : Core logic paths and control flow
- 📥 Inputs/Outputs    : Data types, structures, return values
- 🔌 External Deps     : Libraries, APIs, DB, file I/O detected
- 🧩 Paradigms Used    : OOP, functional, async, decorators, etc.
- 💡 Source Idioms     : Language-specific patterns that need special 
                         attention during translation

---

⚠️ STEP 3 — Translation Challenges Map
Before translating, identify and map every challenge:

LIBRARY & FRAMEWORK EQUIVALENTS:
| # | Source Library/Function | Target Equivalent | Notes |
|---|------------------------|-------------------|-------|

PARADIGM SHIFTS:
| # | Source Pattern | Target Pattern | Complexity | Notes |
|---|---------------|----------------|------------|-------|

Complexity: 
- 🟢 [Simple]  — Direct equivalent exists
- 🟡 [Moderate]— Requires restructuring
- 🔴 [Complex] — Significant rewrite needed

UNTRANSLATABLE FLAGS:
| # | Source Feature | Issue | Best Alternative in Target |
|---|---------------|-------|---------------------------|

Flag anything that:
- Has no direct equivalent in target language
- Behaves differently at runtime (e.g., null handling, 
  type coercion, memory management)
- Requires target-language-specific workarounds
- May impact performance differently in target language

---

🔄 STEP 4 — Side-by-Side Translation
For every key logic block identified in Step 2, show:

[BLOCK NAME — e.g., Data Processing Function]

SOURCE ([Language]):
```[source language]
[original code block]
```

TRANSLATED ([Language]):
```[target language]
[translated code block]
```

🔍 Translation Notes:
- What changed and why
- Any idiom or pattern substitution made
- Any behavior difference to be aware of

Cover all major logic blocks. Skip only trivial 
single-line translations.

---

🔧 STEP 5 — Full Translated Code
Provide the complete, fully translated production-ready code:

Code Quality Requirements:
- Written in the TARGET language's idioms and best practices
  · NOT a line-by-line literal translation
  · Use native patterns (e.g., JS array methods, not manual loops)
- Follow target language style guide strictly:
  · Python → PEP8
  · JavaScript/TypeScript → ESLint Airbnb style
  · Java → Google Java Style Guide
  · Other → mention which style guide applied
- Full error handling using target language conventions
- Type hints/annotations where supported by target language
- Complete docstrings/JSDoc/comments in target language style
- All external dependencies replaced with proper target equivalents
- No placeholders or omissions — fully complete code only

---

📊 STEP 6 — Translation Summary Card

Translation Overview:
Source Language  : [Language + Version]
Target Language  : [Language + Version]
Translation Type : [Direct Port / Idiomatic Rewrite]

| Area                    | Details                                    |
|-------------------------|--------------------------------------------|
| Components Translated   | ...                                        |
| Libraries Swapped       | ...                                        |
| Paradigm Shifts Made    | ...                                        |
| Untranslatable Items    | ...                                        |
| Workarounds Applied     | ...                                        |
| Style Guide Applied     | ...                                        |
| Type Safety             | ...                                        |
| Known Behavior Diffs    | ...                                        |
| Runtime Considerations  | ...                                        |

Compatibility Warnings:
- List any behaviors that differ between source and target runtime
- Flag any features that require minimum target version
- Note any performance implications of the translation

Recommended Next Steps:
- Suggested tests to validate translation correctness
- Any manual review areas flagged
- Dependencies to install in target environment:
  e.g., npm install [package] / pip install [package]

---

Here is my code to translate:

Source Language : [SPECIFY SOURCE LANGUAGE + VERSION]
Target Language : [SPECIFY TARGET LANGUAGE + VERSION]

[PASTE YOUR CODE HERE]
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
