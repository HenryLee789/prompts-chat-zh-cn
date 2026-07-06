# 差异

## 中文说明

差异

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

```md
“深度扫描比较”提示
“担任专家教育者。我想了解[插入主题/主题]。任务 1：核心景观。创建本主题内 5-7 个最重要的[概念/理论/工具]的综合比较表。使用以下列：

概念名称：标准术语。

“简而言之”的定义：一个 1 句话的简单英语摘要。核心机制：它实际上是如何工作的（“幕后”逻辑）。关键区别：使其与表中其他项目不同的一个具体因素。最佳用例：何时何地这是使用的“黄金标准”。

“主要缺陷”：最常见的批评或限制。任务 2：相似度谱。在表格下方，找出最常相互混淆的两个概念。用一个简单的类比来解释区分它们的“细微差别”。任务 3：层次结构/分类。如果这些概念是一栋“建筑”，那么哪一个是地基（最基本的），哪一个是屋顶（最先进/利基的）？简单解释一下原因。”

为什么这个提示有效：
“关键区别”栏：这是最重要的部分。大多数AI的回答都会给你列出一系列相似之处。强制使用“差异化”列可以阻止信息混杂在一起。

“主要缺陷”栏：这提供了即时的批判性思维。它可以防止你将某个概念视为“完美的解决方案”，并帮助你了解其边界。任务 2（细微差别）：目标是“容易混淆的部分”。在任何领域（例如，营销与品牌，或数据科学与统计），总是有两个术语听起来相同但事实并非如此。这立即清除了这一点。任务 3（层次结构）：这为你提供了学习路线图。它告诉你在进入“屋顶”之前首先需要掌握什么。这是干净地重新格式化的原始文本，具有一致的标题、间距和结构 - 但没有缩短或简化任何内容：
```

---

## English Original

### Title

diff

### Description

diff

### Prompt

```md
The "Deep-Scan Comparative" Prompt
"Act as an Expert Educator. I want to learn about [INSERT SUBJECT/TOPIC].

Task 1: The Core Landscape. Create a comprehensive comparison table of the 5–7 most important [CONCEPTS/THEORIES/TOOLS] within this subject.

Use the following columns:

Concept Name: The standard term.

The 'In a Nutshell' Definition: A 1-sentence plain-English summary.

The Core Mechanism: How it actually works (the 'under the hood' logic).

Key Differentiator: The one specific thing that makes it different from the other items in the table.

Best Use Case: When or where this is the 'gold standard' to use.

The 'Major Flaw': The most common critique or limitation.

Task 2: The Similarity Spectrum. Below the table, identify the two concepts that are most frequently confused with each other. Explain the 'nuance' that separates them using a simple analogy.

Task 3: The Hierarchy/taxonomy. If these concepts were a 'building,' which one is the foundation (the most basic) and which one is the roof (the most advanced/niche)? Briefly explain why."

Why this prompt works:
The 'Key Differentiator' Column: This is the most important part. Most AI responses give you a list of similarities. Forcing a "differentiator" column stops the information from bleeding together.

The 'Major Flaw' Column: This provides immediate critical thinking. It prevents you from seeing a concept as a "perfect solution" and helps you understand its boundaries.

Task 2 (The Nuance): This targets the "Confusables." In any field (e.g., Marketing vs. Branding, or Data Science vs. Statistics), there are always two terms that sound the same but aren't. This clears that up instantly.

Task 3 (The Hierarchy): This gives you a learning roadmap. It tells you what you need to master first before moving to the "roof."

Here’s your original text reformatted cleanly, with consistent headings, spacing, and structure — but without shortening or simplifying any of the content:
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
