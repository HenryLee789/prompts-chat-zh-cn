---
id: "cmm7aph8m0001le04izoojs6t"
slug: "landing-page-copy-architect-conversion-framework-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/landing-page-copy-architect-conversion-framework-prompt"
category: "copywriting"
category_name: "Copywriting"
category_zh: "文案写作"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "eca44bd585b447ce17701fed3a0cce038cfb7e0d9e73a4b8c7f1d23e718eb223"
upstream_updated_at: "2026-03-01T05:14:45.872Z"
---
# 登陆页面复制架构师 – 转换框架提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[landing-page-copy-architect-conversion-framework-prompt](https://prompts.chat/prompts/landing-page-copy-architect-conversion-framework-prompt)  
> 分类：文案写作（Copywriting / `copywriting`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

为特定优惠设计高转化率的登陆页面复制框架。此提示将指导您创建可重用的蓝图，其他 AI 工具可使用该蓝图生成完整的登陆页面副本。

## 使用场景

- 用于文案写作相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Copywriting、Content Creation、Marketing、SEO 等主题快速生成可复用结果。

## 适用人群

- 文案策划
- 内容创作者
- 营销人员

## 中文 Prompt 正文

```md
登陆页面复制架构师 – 转换框架提示

**角色和目标**
您是一名资深转化文案和CRO策略师。为特定优惠设计**一个高转化率的着陆页文案框架**（非最终文案）。输出必须是可重用的蓝图，其他 AI（Claude、bolt.new、Lovable、ChatGPT 等）可以使用该蓝图生成完整的登陆页面副本。

---

### 1. 填写优惠详情（运行前）

* **优惠类型：** [铅磁铁/产品/网络研讨会/免费试用/其他]
* **优惠名称：** [OFFER_NAME]
* **目标受众：** [他们是谁、细分市场、最大的痛点和愿望]
* **目标转化：** [当前 % → 目标 %]
* **页面长度：** [短/中/长]
* **交通温度：** [冷/暖/热]
* **独特的机制/关键差异化因素：** [1-3 行简短的文字解释“有何不同”]
* **主要反对意见 (3-5)：** [价格/信任/时间/复杂性/等等]
* **可用的社会证明：** [感言/评论/案例研究/统计/无]
* **品牌声音：** [例如，大胆/俏皮/正式/善解人意]

在答案的每个部分都使用这些详细信息。

---

### 2.页面策略快照（≤200字）

简单解释一下：

* 此页面适合谁
* 主要转化目标是什么
* 优惠背后的**大创意**
* **独特的机制**如何改变通常的方法
* 针对此**流量温度**的建议页面长度和部分重点

---

### 3. 页面结构和部分

创建页面的**滚动顺序轮廓**作为表格或编号列表。对于每个部分，包括：

* **部分名称**（例如，英雄、问题、解决方案、社交证明、优惠、常见问题解答、最终 CTA）
* **本节的主要目标**
* **建议长度：** [非常短/短/中/长]
* **情绪状态** 我们希望读者在本节结束时进入状态
* **最佳内容类型：** [标题/要点/故事/感言/比较表/常见问题解答/等]

---

### 4. 标题公式库（10 种变化）

创建为此量身定制的 **10 个标题公式**：

* 优惠类型
* 交通温度
* 独特的机制/关键差异化因素

对于每个公式：

1. 显示带有全部大写占位符的**模式，例如

   * `Get [RESULT] In [TIMEFRAME] Without [HATED_ACTION]`
2. 提供针对此优惠、受众和机制定制的 **1 个工作示例**。

---

### 5. 逐节人工智能提示

对于页面结构中的**每个部分**，创建一个 Claude/bolt.new/Lovable 兼容的提示，另一个 AI 可以粘贴该提示以生成副本。

对于每个部分提示：

* 从标签开始：
  `SECTION PROMPT: [SECTION NAME]`
* 包括：

  * 本节目的
  * 所需的音调和长度
  * 报价、受众、流量温度快速提醒，独特机制
  * 生成该部分的 **2-3 个变体**的说明
* 将每个提示保留在**一个可复制粘贴块**中。

---

### 6. 优点与功能转换器

创建一个简单的**转换工具**：

1. **2 列列表**：

   * 第 1 栏：**特征**（例如，“8 周实时队列”、“终身访问”）
   * 第 2 栏：**用结果语言表述的好处**带有“所以你可以……”或类似内容。
2. **迷你规则手册**，其中包含 **5-7 条规则**，解释如何将功能转化为强大的优势。
3. **3个例子**从功能重→利益驱动的文案重写。

---

### 7. 异议处理计划

使用提供的“主要异议”，构建**异议处理图**：

* 列出 **前 5 个反对意见**（如果提供的反对意见较少，请根据优惠类型和流量温度推断可能的反对意见）。
* 对于每项反对意见，请注明：

* **页面上的**位置来解决这个问题（例如，英雄副标题、定价区域、常见问题解答、CTA 附近、推荐块）。
  * **采用什么格式：** 缩微副本、常见问题解答项目、保证块、推荐、比较表等。
* 提供 **3 个简短的即插即用模板** 用于异议处理，占位符全部大写，例如：

  * `Worried about [OBJECTION]? Here’s how [UNIQUE_MECHANISM] removes [RISK].`

---

### 8.CTA优化策略

设计适合此优惠和流量温度的 **CTA 策略**：

* 确定页面上的 **3–5 个关键 CTA 位置**（英雄、页面中部、社会证明之后、常见问题解答附近、最后部分）。
* 对于每个地点，请提供：

  * 带有占位符的 **CTA 按钮复制公式**（例如 `Get [RESULT] In [TIMEFRAME]`）
  * 建议**支持微观文案**（例如，风险逆转、紧迫性、保证、关键利益提醒）。
* 为 CTA 提供关于此类优惠和流量温度的 **5 条最佳实践规则**（例如，清晰度 > 聪明、减少摩擦的语言等）。

---

### 9. 信任元素集成

创建**信任建设计划**：

* 根据可用的社会证明建议使用**哪些信任元素**：

  * 推荐、星级、徽标、小型案例研究、保证、徽章、媒体提及等。
* 对于每个主要部分，请指定：

  * 哪种信任元素最适合
  * **为什么**它属于那里（它支持什么怀疑或信念）。
* 如果社会认同薄弱或缺失，请提出**替代方案**，例如：

  * 流程透明
  *“我们为什么要建造这个”故事
  * 降低风险的数据、逻辑或小承诺。

---

### 10. 输出和格式要求

* 使用**清晰的标题**和**要点**。
* 首先对所有部分进行**编号概述**，然后展开每个部分。
* 不要**写实际的最终登陆页面副本。只提供：

  * 框架
  * 公式
  * 表格/列表
  * 随时可用的提示
* 使用**全部大写**的占位符（例如，[受众]、[结果]、[时间范围]、[异议]）。
* 力争将完整回复控制在 **~1,800–2,200 字**。

以这一行结束，定制：

> **如果访问者只记得此着陆页中的一件事，则应该是：“[一个核心承诺]。”**

---
```

---

## English Original

### Title

Landing Page Copy Architect – Conversion Framework Prompt

### Description

Design a high-converting landing page copy framework for a specific offer. This prompt guides you in creating a reusable blueprint that other AI tools can use to generate full landing page copy.

### Prompt

```md
Landing Page Copy Architect – Conversion Framework Prompt

**Role & Goal**
You are a senior conversion copywriter and CRO strategist. Design **one high-converting landing page copy framework** (not final copy) for a specific offer. The output must be a reusable blueprint that another AI (Claude, bolt.new, Lovable, ChatGPT, etc.) can use to generate full landing page copy.

---

### 1. Fill in the Offer Details (before running)

* **Offer Type:** [LEAD MAGNET / PRODUCT / WEBINAR / FREE TRIAL / OTHER]
* **Offer Name:** [OFFER_NAME]
* **Target Audience:** [WHO THEY ARE, SEGMENT, TOP PAINS & DESIRES]
* **Target Conversion:** [CURRENT % → GOAL %]
* **Page Length:** [SHORT / MEDIUM / LONG]
* **Traffic Temperature:** [COLD / WARM / HOT]
* **Unique Mechanism / Key Differentiator:** [1–3 SHORT LINES EXPLAINING “WHAT MAKES THIS DIFFERENT”]
* **Main Objections (3–5):** [PRICE / TRUST / TIME / COMPLEXITY / ETC.]
* **Social Proof Available:** [TESTIMONIALS / REVIEWS / CASE STUDIES / STATS / NONE]
* **Brand Voice:** [E.G., BOLD / PLAYFUL / FORMAL / EMPATHETIC]

Use these details in every part of your answer.

---

### 2. Page Strategy Snapshot (≤ 200 words)

Briefly explain:

* Who this page is for
* What the primary conversion goal is
* The **big idea** behind the offer
* How the **unique mechanism** changes the usual approach
* Recommended page length and section emphasis for this **traffic temperature**

---

### 3. Page Structure & Sections

Create a **scroll-order outline** of the page as a table or numbered list. For each section, include:

* **Section Name** (e.g., Hero, Problem, Solution, Social Proof, Offer, FAQ, Final CTA)
* **Primary Goal** of the section
* **Recommended Length:** [VERY SHORT / SHORT / MEDIUM / LONG]
* **Emotional State** we want the reader in by the end of the section
* **Best Content Type:** [HEADLINE / BULLETS / STORY / TESTIMONIAL / COMPARISON TABLE / FAQ / ETC.]

---

### 4. Headline Formula Bank (10 Variations)

Create **10 headline formulas** tailored to this:

* Offer Type
* Traffic Temperature
* Unique Mechanism / Key Differentiator

For each formula:

1. Show a **pattern with placeholders in ALL CAPS**, e.g.

   * `Get [RESULT] In [TIMEFRAME] Without [HATED_ACTION]`
2. Provide **1 worked example** customized to this offer, audience, and mechanism.

---

### 5. Section-by-Section AI Prompts

For **each section** in the page structure, create a Claude/bolt.new/Lovable-compatible prompt that another AI can paste in to generate copy.

For every section prompt:

* Start with the label:
  `SECTION PROMPT: [SECTION NAME]`
* Include:

  * Section purpose
  * Desired tone & length
  * Quick reminder of offer, audience, traffic temperature, and unique mechanism
  * Instructions to generate **2–3 variations** of that section
* Keep each prompt in **one copy-pasteable block**.

---

### 6. Benefit vs Feature Converter

Create a simple **conversion tool**:

1. A **2-column list**:

   * Column 1: **Feature** (e.g., “8-week live cohort,” “lifetime access”)
   * Column 2: **Benefit phrased in outcome language** with “so you can…” or similar.
2. A **mini rulebook** with **5–7 rules** explaining how to turn features into strong benefits.
3. **3 examples** of copy rewritten from feature-heavy → benefit-driven.

---

### 7. Objection Handling Plan

Using the “Main Objections” provided, build an **objection handling map**:

* List the **top 5 objections** (if fewer provided, infer likely ones from offer type & traffic temperature).
* For each objection, specify:

  * **Where** on the page to address it (e.g., hero subhead, pricing area, FAQ, near CTA, testimonial block).
  * **In what format:** microcopy, FAQ item, guarantee block, testimonial, comparison table, etc.
* Provide **3 short plug-and-play templates** for objection handling, with placeholders in ALL CAPS, e.g.:

  * `Worried about [OBJECTION]? Here’s how [UNIQUE_MECHANISM] removes [RISK].`

---

### 8. CTA Optimization Strategy

Design a **CTA strategy** that fits this offer and traffic temperature:

* Identify **3–5 key CTA locations** on the page (hero, mid-page, after social proof, near FAQ, final section).
* For each location, provide:

  * A **CTA button copy formula** with placeholders (e.g., `Get [RESULT] In [TIMEFRAME]`)
  * Suggested **supporting microcopy** (e.g., risk reversal, urgency, reassurance, key benefit reminder).
* Give **5 best-practice rules** for CTAs on this type of offer & traffic temperature (e.g., clarity > cleverness, friction-reducing language, etc.).

---

### 9. Trust Element Integration

Create a **trust building plan**:

* Recommend **which trust elements** to use based on the available social proof:

  * Testimonials, star ratings, logos, mini case studies, guarantees, badges, media mentions, etc.
* For each major section, specify:

  * Which trust element fits best
  * **Why** it belongs there (what doubt or belief it supports).
* If social proof is weak or missing, suggest **alternatives** such as:

  * Process transparency
  * “Why we built this” story
  * Data, logic, or small commitments to reduce risk.

---

### 10. Output & Formatting Requirements

* Use **clear headings** and **bullet points**.
* Start with a **numbered overview** of all parts, then expand each.
* Do **not** write the actual final landing page copy. Only provide:

  * Frameworks
  * Formulas
  * Tables/lists
  * Ready-to-use prompts
* Use placeholders in **ALL CAPS** (e.g., [AUDIENCE], [RESULT], [TIMEFRAME], [OBJECTION]).
* Aim to keep the full response under **~1,800–2,200 words**.

End with this line, customized:

> **If visitors remember only one thing from this landing page, it should be: “[ONE CORE PROMISE].”**

---

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [landing-page-copy-architect-conversion-framework-prompt](https://prompts.chat/prompts/landing-page-copy-architect-conversion-framework-prompt) |
| Category | Copywriting (`copywriting`) |
| Type | `TEXT` |
| Tags | Copywriting, Content Creation, Marketing, SEO, Business Strategy |
| Contributors | Debashis |
| Updated At | 2026-03-01T05:14:45.872Z |
