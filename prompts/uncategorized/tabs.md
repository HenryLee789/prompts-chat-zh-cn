---
id: "cmr6dk8nw0017lh042rgys9zd"
slug: "tabs"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/tabs"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "57aa3267e9ff7dc9eb5f678d2269494f9fec6e55c02cb1638e2fd9f089463a93"
upstream_updated_at: "2026-07-04T13:05:27.048Z"
---
# 选项卡

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[tabs](https://prompts.chat/prompts/tabs)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

选项卡

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
目标：将当前选项卡中的产品与其他选项卡中的项目进行比较

1. **识别打开的产品选项卡**

    * 列出带有产品页面的所有选项卡，“比较选项卡”
    * 验证它们是同类产品
    * 请注意选项卡访问是否需要权限

2. **分析活动选项卡**

    * 产品名称和品牌
    * 价格
    * 关键规格
    * 评级

3. **分析每个比较选项卡**

    * 搜索每个产品的相同属性
    * 转换单位和格式，方便比较

4. **比较产品**

    * 并排比较
    * 突出差异
    * 突出显示缺失数据

5. **提出建议**

    * 根据前面的所有步骤，形成建议
    * 目的是让用户进行直觉检查
    * 在初次回复结束时，告知用户：“最终费用可能会有所不同，请务必在结账时核实”
    * 最便宜的选择
    * 最佳评论
    * 最佳整体价值

6. **处理异常**

    在您的回复中优先考虑优秀的内容。如果您无法制定满足所有标准的响应，您应该
    * 尽你所能回应并且
    * 承认您面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。

    客观地考虑您提出的答复，并按 1 到 10 的等级对其进行评分。如果您不给 10 分，请尝试做出更强烈的回应，或者考虑承认您面临的任何限制或挑战。分数仅供您个人参考；不要与用户共享。
    * 没有其他选项卡 → 解释用户需要打开比较选项卡
    * 不可比较的选项卡 → 列出打开的选项卡，注意它们是不同的类别
    * 需要权限 → 解释选项卡访问要求

7. **最终回应**

    如果您有相关信息要分享，您的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **推荐：** ${which_tab_to_buy_from_and_why}

    **比较：**

    |特色 |此选项卡 |选项卡 2 |选项卡 3 |选项卡 4 |
    | :------ | :----- | :---- | :---- | :---- |
    |产品 |          |       |       |       |
    |价格|          |       |       |       |
    |评级 |          |       |       |       |
    |规格|          |       |       |       |

    **最佳类别：**

    * 最便宜：${tab_x}
    * 最佳评论：${tab_y}
    * 最佳价值：${tab_z}

    *无需外部搜索——只需比较您已经打开的内容即可。*

    **后续问题**

    如果您能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为一个问题，以便像“是的，请”这样的简单回答可能会启动下一轮。
```

---

## English Original

### Title

tabs

### Description

tabs

### Prompt

```md
Objective: Compare product in current tab to items in other tabs

1. **Identify open product tabs**

    * List all tabs with product pages, "comparison tabs"
    * Verify they're comparable products
    * Note if permission is needed for tab access

2. **Analyze the active tab**

    * Product name and brand
    * Price
    * Key specifications
    * Rating

3. **Analyze each comparison tab**

    * Search for the same attributes for each product
    * Convert units and formatting, to facilitate comparison

4. **Compare products**

    * Side-by-side comparison
    * Highlight differences
    * Highlight missing data

5. **Make a recommendation**

    * Based on all preceding steps, form a recommendation
    * The objective is to give the user a gut check
    * At the end of your initial response, inform the user: "Final costs may vary, always verify at checkout"
    * Cheapest option
    * Best reviewed
    * Best overall value

6. **Handling exceptions**

    Prioritize excellent content in your response. If you're unable to formulate a response that meets all criteria, you should
    * respond as best you can and
    * acknowledge any limitations or challenges you faced. For example, maybe there wasn't sufficient content on a webpage or the content wasn't compatible with a given request.

    Consider your proposed response objectively and rate it on a scale from 1-10. If you wouldn't give it a 10, either try to create a stronger response or consider acknowledging any limitations or challenges you faced. The score is just for your own purposes; don't share it with the user.
    * No other tabs → Explain user needs to open comparison tabs
    * Non-comparable tabs → List what's open, note they're different categories
    * Permission needed → Explain tab access requirement

7. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words

    **Recommendation:** ${which_tab_to_buy_from_and_why}

    **Comparison:**

    | Feature | This Tab | Tab 2 | Tab 3 | Tab 4 |
    | :------ | :------- | :---- | :---- | :---- |
    | Product |          |       |       |       |
    | Price   |          |       |       |       |
    | Rating  |          |       |       |       |
    | Specs   |          |       |       |       |

    **Best by category:**

    * Cheapest: ${tab_x}
    * Best reviewed: ${tab_y}
    * Best value: ${tab_z}

    *No external search needed—just comparing what you already have open.*

    **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [tabs](https://prompts.chat/prompts/tabs) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | kennynah85 |
| Updated At | 2026-07-04T13:05:27.048Z |
