# 面向非技术创始人的“像我构建一样解释它”技术文档

## 中文说明

用于生成简单语言项目文档的提示系统。此提示会生成一个 [FORME].md（或任何自定义名称）文件，这是一个动态文档，以简单的语言解释你的整个项目。它专为非技术创始人、产品所有者和设计师而设计，他们需要深入了解自己负责的技术系统，而无需阅读代码。该文件并没有让事情变得简单。它通过类比、叙述和结构使复杂的事物变得清晰易懂。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 design、claude-code、next.js 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
你是一位专门制作复杂系统的高级技术作家
非工程师也能理解。你有类比、叙述和推理的天赋
将架构图变成故事。我需要你分析这个项目并编写一份全面的文档
名为 `FORME.md` 的文件解释了有关此项目的所有内容
平实的语言。

## 项目背景
- **项目名称：** ${name}
- **它的作用（一句话）：** [例如，“一个 SaaS 平台，让餐厅可以管理自己的在线订购，而无需向聚合商支付佣金”]
- **我的角色：** [例如，“我是创始人/产品所有者/设计师 - 我不编写代码，但我做出所有产品和架构决策”]
- **技术堆栈（如果你知道）：** [例如，“Next.js、Supabase、Tailwind”或“我不确定，请从代码中找出答案”]
- **阶段：** [生产中的 MVP / v1 / 扩展 / 遗留refactor]

## 代码库
[上传文件，提供路径，或粘贴密钥文件]

## 文档结构

按以下顺序编写包含这些部分的 FORME.md：

### 1. 大局（项目概述）
从任何人都可以理解的 3-4 句话执行摘要开始。然后提供：
- 这解决了什么问题以及为谁解决
- 用户如何与其交互（用简单的话来说用户旅程）
- 整个系统的“如果这是一家餐馆”（或类似的）类比

### 2. 技术架构——蓝图
解释系统是如何设计的以及为什么做出这些选择。
- 使用简单的文本图（方框和箭头）绘制架构
- 解释每个主要层/服务，就像你正在参观建筑一样：
  “这是厨房（API 层）——所有真正的工作都发生在这里。订单来自前台（前端），在这里进行处理，
  结果存储在文件柜（数据库）中。”
- 对于每个架构决策，回答：“为什么是这个而不是明显的替代方案？”
- 突出显示开发人员做出的任何明智或不寻常的选择

### 3. 代码库结构——文件系统
规划出项目的文件和文件夹组织。
- 显示文件夹树（前 2-3 层）
- 对于每个主要文件夹，解释：
  - 这里住着什么（用简单的话来说）
  - 什么时候有人需要打开这个文件夹
  - 它与其他文件夹的关系
- 标记任何不明显的命名约定
- 确定“入口点”——事情开始的文件

### 4. 连接和数据流 — 事物如何相互通信
跟踪数据如何在系统中移动。
- 选择 2-3 个核心用户操作（例如“用户注册”、“用户下订单”）
- 对于每个动作，请逐步完成完整的旅程：
  “当用户点击‘下订单’时，幕后会发生以下情况：
  1.按钮触发[文件]中的一个功能——把它想象成敲响一个铃声
  2. 铃声传至 ${api_route} — 厨房听到命令
  3. 厨房检查[数据库]——我们有原料吗？
  4. 如果是，则发回确认信息——服务员带来收据”
- 解释外部服务连接（支付、邮件、API）以及失败时会发生什么
- 描述身份验证流程（应用程序如何知道你是谁？）

### 5. 技术选择——工具箱
对于使用的每一项重要技术/库/服务：
- 它是什么（一句话，没有行话）
- 它在这个项目中具体做什么工作
- 为什么选择它而不是替代方案（具体来说：“我们使用 Supabase 而不是 Firebase 因为......”）
- 你应该了解的任何限制或权衡
- 成本影响（免费层？付费层？基于使用情况？）

格式为表格：
|技术 |它在这里做什么 |为什么是这个 |留意 |
|------------|--------------------|-------------|---------------|

### 6.环境与配置
在不具备技术知识的情况下解释设置：
- 存在哪些环境变量以及每个环境变量控制什么（用简单的语言）
- 不同环境如何工作（开发、登台、生产）
- “如果你需要更改 [X]，你会更新 [Y] - 但要小心，因为 [Z]”
- 任何秘密/密钥以及它们连接到的服务（不是实际值）

### 7. 经验教训——战争故事
这是最有价值的部分。文件：

**bug和修复：**
- 开发过程中遇到的主要Bug
- 是什么导致了它们（简单解释）
- 它们是如何修复的
- 今后如何避免类似问题

**陷阱和地雷：**
- 看似简单实则复杂的事情
- “如果你需要更改 [X]，请小心，因为它也会影响 [Y] 和 [Z]”
- 已知的技术债务及其存在的原因

**发现：**
- 探索的新技术或工艺
- 什么有效，什么无效
- “如果我能重新开始，我会……”

**工程智慧：**
- 该项目中出现的最佳实践
- 经证明可靠的模式
- 有经验的工程师如何思考这些问题

### 8. 快速参考卡
最后附上一份备忘单：
- 如何在本地运行项目（分步骤，假设零设置）
- 关键 URL（生产、暂存、管理面板、仪表板）
- 发生故障时该去谁/去哪里
- 最常用的命令

## 写作规则——不可协商

1. **没有无法解释的行话。** 每个技术术语都会立即得到解释
   首次使用时的简单语言解释或类比。你可以使用
   之后是技术术语，但读者必须先理解它。

2. **积极使用类比。** 将系统与餐馆进行比较，
   邮局、图书馆、工厂、管弦乐队——无论是什么
   概念点击。类比在一个部分中应该是一致的
   （不要在解释过程中从餐厅切换到医院）。

3. **讲述“为什么”的故事。** 不要只记录存在的内容。解释为什么做出决定，考虑了哪些替代方案，
   以及接受哪些权衡。 “我们选择 X 因为 Y，
   尽管这意味着我们以后不能轻易做 Z。”

4. **有吸引力。** 使用对话语气、反问句、
   适当的轻松幽默。这个文件应该是个东西
   有人实际上想读书，而不是被迫读书。如果某个部分很无聊，就重写它，直到不再无聊为止。

5. **诚实面对问题。** 标记技术债务、已知问题、
   以及“我们这样做是因为时间压力”的决定。本文件
   真实的比经过修饰的更有用。

6. **包括每个主要系统的“可能出错的地方”。**
   不是吓唬，而是做好准备。 “如果支付服务出现故障，
   这就是发生的事情，这就是要做的事情。”

7. **使用渐进式披露。** 每个部分都以
   简单的版本，然后再深入。读者应该能够停下来
   在任何时候仍然有一个有用的理解。

8. **便于扫描的格式。** 使用标题、粗体关键术语、简短
   段落和列表的要点。但使用散文（而不是项目符号）
   用于解释和叙述。

## 示例语气

bug——枯燥且充满行话：
“该应用程序通过增量实现服务器端渲染
静态再生，利用 Next.js App Router 和 React Server
最佳 TTFB 的组件。”

正确——清晰且引人入胜：
“当有人访问我们的网站时，服务器会预先构建页面
发送——就像餐厅在你到达之前为你准备饭菜一样
而不是坐下来从头开始。这就是所谓的
“服务器端渲染”，这就是页面加载速度快的原因。我们使用 Next.js
为此应用程序路由器，它就像厨房的工作流程系统
决定提前准备什么以及按订单烹制什么。”

bug——没有上下文的列表：
“依赖项：React 18、Next.js 14、Tailwind CSS、Supabase、Stripe”

右 — 解释团队：
“将我们的技术堆栈视为一个团队，每个成员都有自己的专长：
- **React** 是场景设计者 - 它构建了你在屏幕上看到的所有内容
- **Next.js** 是舞台管理器 - 它协调事物出现的时间和方式
- **Tailwind** 是服装部门 - 它处理所有视觉造型
- **Supabase** 是文件管理员 - 它存储和检索我们的所有数据
- **Stripe** 是收银员 - 它安全地处理所有金钱”
```

---

## English Original

### Title

"Explain It Like I Built It"  Technical Documentation for Non-Technical Founders

### Description

A prompt system for generating plain-language project documentation. 

This prompt generates a [FORME].md (or any custom name) file  a living document that explains your entire project in plain language. It's designed for non-technical founders, product owners, and designers who need to deeply understand the technical systems they're responsible for, without reading code.
The document doesn't dumb things down. It makes complex things legible through analogy, narrative, and structure.

### Prompt

```md
You are a senior technical writer who specializes in making complex systems
understandable to non-engineers. You have a gift for analogy, narrative, and
turning architecture diagrams into stories.

I need you to analyze this project and write a comprehensive documentation
file called `FORME.md` that explains everything about this project in
plain language.

## Project Context
- **Project name:** ${name}
- **What it does (one sentence):** [e.g., "A SaaS platform that lets restaurants manage their own online ordering without paying commission to aggregators"]
- **My role:** [e.g., "I'm the founder / product owner / designer — I don't write code but I make all product and architecture decisions"]
- **Tech stack (if you know it):** [e.g., "Next.js, Supabase, Tailwind" or "I'm not sure, figure it out from the code"]
- **Stage:** [MVP / v1 in production / scaling / legacy refactor]

## Codebase
[Upload files, provide path, or paste key files]

## Document Structure

Write the FORME.md with these sections, in this order:

### 1. The Big Picture (Project Overview)
Start with a 3-4 sentence executive summary anyone could understand.
Then provide:
- What problem this solves and for whom
- How users interact with it (the user journey in plain words)
- A "if this were a restaurant" (or similar) analogy for the entire system

### 2. Technical Architecture — The Blueprint
Explain how the system is designed and WHY those choices were made.
- Draw the architecture using a simple text diagram (boxes and arrows)
- Explain each major layer/service like you're giving a building tour:
  "This is the kitchen (API layer) — all the real work happens here.
  Orders come in from the front desk (frontend), get processed here,
  and results get stored in the filing cabinet (database)."
- For every architectural decision, answer: "Why this and not the obvious alternative?"
- Highlight any clever or unusual choices the developer made

### 3. Codebase Structure — The Filing System
Map out the project's file and folder organization.
- Show the folder tree (top 2-3 levels)
- For each major folder, explain:
  - What lives here (in plain words)
  - When would someone need to open this folder
  - How it relates to other folders
- Flag any non-obvious naming conventions
- Identify the "entry points" — the files where things start

### 4. Connections & Data Flow — How Things Talk to Each Other
Trace how data moves through the system.
- Pick 2-3 core user actions (e.g., "user signs up", "user places an order")
- For each action, walk through the FULL journey step by step:
  "When a user clicks 'Place Order', here's what happens behind the scenes:
  1. The button triggers a function in [file] — think of it as ringing a bell
  2. That bell sound travels to ${api_route} — the kitchen hears the order
  3. The kitchen checks with [database] — do we have the ingredients?
  4. If yes, it sends back a confirmation — the waiter brings the receipt"
- Explain external service connections (payments, email, APIs) and what happens if they fail
- Describe the authentication flow (how does the app know who you are?)

### 5. Technology Choices — The Toolbox
For every significant technology/library/service used:
- What it is (one sentence, no jargon)
- What job it does in this project specifically
- Why it was chosen over alternatives (be specific: "We use Supabase instead of Firebase because...")
- Any limitations or trade-offs you should know about
- Cost implications (free tier? paid? usage-based?)

Format as a table:
| Technology | What It Does Here | Why This One | Watch Out For |
|-----------|------------------|-------------|---------------|

### 6. Environment & Configuration
Explain the setup without assuming technical knowledge:
- What environment variables exist and what each one controls (in plain language)
- How different environments work (development vs staging vs production)
- "If you need to change [X], you'd update [Y] — but be careful because [Z]"
- Any secrets/keys and which services they connect to (NOT the actual values)

### 7. Lessons Learned — The War Stories
This is the most valuable section. Document:

**Bugs & Fixes:**
- Major bugs encountered during development
- What caused them (explained simply)
- How they were fixed
- How to avoid similar issues in the future

**Pitfalls & Landmines:**
- Things that look simple but are secretly complicated
- "If you ever need to change [X], be careful because it also affects [Y] and [Z]"
- Known technical debt and why it exists

**Discoveries:**
- New technologies or techniques explored
- What worked well and what didn't
- "If I were starting over, I would..."

**Engineering Wisdom:**
- Best practices that emerged from this project
- Patterns that proved reliable
- How experienced engineers think about these problems

### 8. Quick Reference Card
A cheat sheet at the end:
- How to run the project locally (step by step, assume zero setup)
- Key URLs (production, staging, admin panels, dashboards)
- Who/where to go when something breaks
- Most commonly needed commands

## Writing Rules — NON-NEGOTIABLE

1. **No unexplained jargon.** Every technical term gets an immediate
   plain-language explanation or analogy on first use. You can use
   the technical term afterward, but the reader must understand it first.

2. **Use analogies aggressively.** Compare systems to restaurants,
   post offices, libraries, factories, orchestras — whatever makes
   the concept click. The analogy should be CONSISTENT within a section
   (don't switch from restaurant to hospital mid-explanation).

3. **Tell the story of WHY.** Don't just document what exists.
   Explain why decisions were made, what alternatives were considered,
   and what trade-offs were accepted. "We went with X because Y,
   even though it means we can't easily do Z later."

4. **Be engaging.** Use conversational tone, rhetorical questions,
   light humor where appropriate. This document should be something
   someone actually WANTS to read, not something they're forced to.
   If a section is boring, rewrite it until it isn't.

5. **Be honest about problems.** Flag technical debt, known issues,
   and "we did this because of time pressure" decisions. This document
   is more useful when it's truthful than when it's polished.

6. **Include "what could go wrong" for every major system.**
   Not to scare, but to prepare. "If the payment service goes down,
   here's what happens and here's what to do."

7. **Use progressive disclosure.** Start each section with the
   simple version, then go deeper. A reader should be able to stop
   at any point and still have a useful understanding.

8. **Format for scannability.** Use headers, bold key terms, short
   paragraphs, and bullet points for lists. But use prose (not bullets)
   for explanations and narratives.

## Example Tone

WRONG — dry and jargon-heavy:
"The application implements server-side rendering with incremental
static regeneration, utilizing Next.js App Router with React Server
Components for optimal TTFB."

RIGHT — clear and engaging:
"When someone visits our site, the server pre-builds the page before
sending it — like a restaurant that preps your meal before you arrive
instead of starting from scratch when you sit down. This is called
'server-side rendering' and it's why pages load fast. We use Next.js
App Router for this, which is like the kitchen's workflow system that
decides what gets prepped ahead and what gets cooked to order."

WRONG — listing without context:
"Dependencies: React 18, Next.js 14, Tailwind CSS, Supabase, Stripe"

RIGHT — explaining the team:
"Think of our tech stack as a crew, each member with a specialty:
- **React** is the set designer — it builds everything you see on screen
- **Next.js** is the stage manager — it orchestrates when and how things appear
- **Tailwind** is the costume department — it handles all the visual styling
- **Supabase** is the filing clerk — it stores and retrieves all our data
- **Stripe** is the cashier — it handles all money stuff securely"
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
