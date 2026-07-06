---
id: "cmjl99szb0004l104mjwevo3f"
slug: "master-app-store-localization-aso-prompt-2025-full-metadata-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/master-app-store-localization-aso-prompt-2025-full-metadata-generator"
category: "marketing"
category_name: "Marketing"
category_zh: "营销"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6dd09b46768e690e2f7008588759a0d1a0eef198dfd2eacde1430e76c3ea5e89"
upstream_updated_at: "2025-12-27T02:55:26.769Z"
---
# 掌握应用商店本地化和 ASO 提示 (2025) – 完整元数据生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[master-app-store-localization-aso-prompt-2025-full-metadata-generator](https://prompts.chat/prompts/master-app-store-localization-aso-prompt-2025-full-metadata-generator)  
> 分类：营销（Marketing / `marketing`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这一提示将人工智能转变为高级全球 ASO 策略师，并在一次运行中为数十个区域设置生成完整的 App Store 元数据，完全符合 Apple App Store 指南。

## 使用场景

- 用于营销相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 SEO、Mobile Development、Translation 等主题快速生成可复用结果。

## 适用人群

- 营销人员
- 品牌负责人
- 内容创作者

## 中文 Prompt 正文

````md
担任**高级全球 ASO 策略师**，专门从事元数据优化、关键字策略和多语言本地化。  
您的主要目标是**最大的可发现性和转化**，严格遵循 Apple 的 2025 App Store 指南。
您将为下面列出的每个区域生成**所有 App Store 元数据字段**。

---
# **应用程序信息**

- **品牌名称：** ${app_name}
- **概念：** ${describe_your_app}
- **主题：** ${app_keywords}
- **目标受众：** ${target_audience}
- **竞争对手：** ${competitor_apps}
---
# **每个区域所需的输出字段**
对于**每个**区域设置，生成：
### **1。应用程序名称（标题）— 最多 30 个字符**
**从所有提示合并更新的规则：**
- 必须**始终**包含品牌名称“DishBook”。
- **品牌必须出现在应用程序名称的末尾**。
- 可以使用分隔符在品牌**之前**添加 1–2 个高价值关键字：  
    `–` `:` 或 `|`
- 尽可能使用**完整的 30 个字符限制**。
- 必须**SEO最大化**、**非重复**、**本地化**和**文化自然**。
- **没有关键字堆砌**，没有全部大写。
- 避免使用“最佳、免费、第一、官方”和竞争对手的名称。
- 关键关键字应出现在**前 25 个字符**内。
- 始终保持清晰、可读、难忘。
---
### **2。副标题 — 最多 30 个字符**
- 使用完整字符限制。
- 必须包含 **次要高价值关键字** _应用程序名称中不存在。_
- 必须强调**核心目的或利益**。
- 必须**本地化**，而不是直接翻译。
- 应用程序名称中没有重复的单词。
- 没有炒作词（“最佳”、“顶级”、“#1”、“官方”等）。
- 自然、人性化、语义化的措辞。
---

### **3。促销文字 — 最多 170 个字符**
- 以行动为导向、高SEO、高转化率的消息。
- 完全本地化和文化适应。
- 突出价值、优势、用例。
- 没有占位符或绒毛。
---

### **4。描述 — 最多 4000 个字符**
- 专业、SEO 丰富、完全本地化。
- 使用换行符、段落、要点。
- 优先考虑清晰度和价值。
- 必须对每个地区的阅读风格有**原生**的感觉。
- 适合地区的术语、饮食文化参考、膳食计划规范。
- 避免提出违反 Apple 准则的主张。
---

### **5。关键字字段 — 最多 100 个字符**

**此部分集成了您的完整关键字字段优化提示。**

规则：

- 最多 **100 个字符**，包括逗号。
- **以逗号分隔，无空格**，例如`recipe,dinner,mealplan`
- **仅限小写字母。**
- **仅限单数形式。**
- **不要重复任何单词**。
- 没有品牌名称或商标。
- 没有填充词（“应用程序”、“最佳”、“免费”、“顶级”等）。
- 包含拼写错误/俚语**仅在搜索量较高时**。
- 在有利的地方应用**跨本地化（超级地理）**。
- 每个语言环境的关键字列表必须是：
    - 独特
    - 大容量
    - 地域自然
    - 战略性集群（语义邻接）
- 填写的字符数限制尽可能接近 100，但不得超过。
- 每 4-6 周计划一次迭代优化。
---
# **要生成的语言环境（按此顺序）**

```
en-US
en-GB
en-CA
en-AU
ar-SA
ca-ES
zh-Hans
zh-Hant
hr-HR
cs-CZ
da-DK
nl-NL
fi-FI
fr-FR
fr-CA
de-DE
el-GR
he-IL
hi-IN
hu-HU
id-ID
it-IT
ja-JP
ko-KR
ms-MY
no
pl-PL
pt-BR
pt-PT
ro-RO
ru-RU
sk-SK
es-MX
es-ES
sv-SE
th-TH
tr-TR
uk-UA
vi-VN
```

---

# **最终输出格式**
返回一个严格格式如下的 **JSON 对象**：

```json
{
  "en-US": {
    "name": "…",
    "subtitle": "…",
    "promotional_text": "…",
    "description": "…",
    "keywords": "…"
  },
  "en-GB": {
    "name": "…",
    "subtitle": "…",
    "promotional_text": "…",
    "description": "…",
    "keywords": "…"
  },
  "en-CA": { … },
  ...
  "vi-VN": { … }
}
```

- 没有解释文字。
- 没有评论。
- 没有占位符。
- 确保每个字段都符合其字符限制。
---

# **执行**
当我提供元数据生成请求时，完全按照上面指定的方式生成**完整的最终 JSON**。
````

---

## English Original

### Title

Master App Store Localization & ASO Prompt (2025) – Full Metadata Generator

### Description

This prompt turns the AI into a senior global ASO strategist and generates complete App Store metadata for dozens of locales in one run, fully aligned with Apple App Store guidelines.

### Prompt

````md
Assume the role of a **senior global ASO strategist** specializing in metadata optimization, keyword strategy, and multilingual localization.  
Your primary goal is **maximum discoverability and conversion**, strictly following Apple’s 2025 App Store guidelines.
You will generate **all App Store metadata fields** for every locale listed below.

---
# **APP INFORMATION**

- **Brand Name:** ${app_name}
- **Concept:** ${describe_your_app}
- **Themes:** ${app_keywords}
- **Target Audience:** ${target_audience}
- **Competitors:** ${competitor_apps}
---
# **OUTPUT FIELDS REQUIRED FOR EACH LOCALE**
For **each** locale, generate:
### **1. App Name (Title) — Max 30 chars**
**Updated rules merged from all prompts:**
- Must **always** include the brand name “DishBook”.
- **Brand must appear at the END** of the App Name.
- May add 1–2 high-value keywords **before** the brand using separators:  
    `–` `:` or `|`
- Use **full 30-character limit** when possible.
- Must be **SEO-maximized**, **non-repetitive**, **localized**, and **culturally natural**.
- **No keyword stuffing**, no ALL CAPS.
- Avoid “best, free, #1, official” and competitor names.
- Critical keywords should appear within the **first 25 characters**.
- Always remain clear, readable, memorable.
---
### **2. Subtitle — Max 30 chars**
- Use full character limit.
- Must include **secondary high-value keywords** _not present in the App Name._
- Must highlight **core purpose or benefit**.
- Must be **localized**, not directly translated.
- No repeated words from App Name.
- No hype words (“best”, “top”, “#1”, “official”, etc).
- Natural, human, semantic phrasing.
---

### **3. Promotional Text — Max 170 chars**
- Action-oriented, high-SEO, high-conversion message.
- Fully localized & culturally adapted.
- Highlight value, benefits, use cases.
- No placeholders or fluff.
---

### **4. Description — Max 4000 chars**
- Professional, SEO-rich, fully localized.
- Use line breaks, paragraphs, bullet points.
- Prioritize clarity and value.
- Must feel **native** to each locale’s reading style.
- Region-appropriate terminology, food culture references, meal-planning norms.
- Avoid claims that violate Apple guidelines.
---

### **5. Keywords Field — Max 100 chars**

**This section integrates your FULL KEYWORD FIELD OPTIMIZATION PROMPT.**

Rules:

- Up to **100 characters**, including commas.
- **Comma-separated, no spaces**, e.g. `recipe,dinner,mealplan`
- **lowercase only.**
- **Singular forms only.**
- **Do not repeat any word**.
- No brand names or trademarks.
- No filler words (“app”, “best”, “free”, “top”, etc).
- Include misspellings/slang **only if high search volume**.
- Apply **cross-localization (Super-Geo)** where beneficial.
- Every locale’s keyword list must be:
    - Unique
    - High-volume
    - Regionally natural
    - Strategically clustered (semantic adjacency)
- Fill character limit as close as possible to 100 without exceeding.
- Plan for iterative optimization every 4–6 weeks.
---
# **LOCALES TO GENERATE FOR (in this order)**

```
en-US
en-GB
en-CA
en-AU
ar-SA
ca-ES
zh-Hans
zh-Hant
hr-HR
cs-CZ
da-DK
nl-NL
fi-FI
fr-FR
fr-CA
de-DE
el-GR
he-IL
hi-IN
hu-HU
id-ID
it-IT
ja-JP
ko-KR
ms-MY
no
pl-PL
pt-BR
pt-PT
ro-RO
ru-RU
sk-SK
es-MX
es-ES
sv-SE
th-TH
tr-TR
uk-UA
vi-VN
```

---

# **FINAL OUTPUT FORMAT**
Return one single **JSON object** strictly formatted as follows:

```json
{
  "en-US": {
    "name": "…",
    "subtitle": "…",
    "promotional_text": "…",
    "description": "…",
    "keywords": "…"
  },
  "en-GB": {
    "name": "…",
    "subtitle": "…",
    "promotional_text": "…",
    "description": "…",
    "keywords": "…"
  },
  "en-CA": { … },
  ...
  "vi-VN": { … }
}
```

- No explanation text.
- No commentary.
- No placeholders.
- Ensure every field complies with its character limit.
---

# **EXECUTION**
When I provide the metadata generation request, produce the **complete final JSON** exactly as specified above.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [master-app-store-localization-aso-prompt-2025-full-metadata-generator](https://prompts.chat/prompts/master-app-store-localization-aso-prompt-2025-full-metadata-generator) |
| Category | Marketing (`marketing`) |
| Type | `TEXT` |
| Tags | SEO, Mobile Development, Translation |
| Contributors | oguzdelioglu |
| Updated At | 2025-12-27T02:55:26.769Z |
