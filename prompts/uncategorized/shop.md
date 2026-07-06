---
id: "cmr6dg86h0014jx04xw99r3xr"
slug: "shop"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/shop"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6ff08a8336e343f8393f75068fe5f51005b1b668364e10058d59896085301865"
upstream_updated_at: "2026-07-04T13:02:44.315Z"
---
# 店铺

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[shop](https://prompts.chat/prompts/shop)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

店铺

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
目的：建议您是否应该购买

1. **产品背景**

    * Product name, brand, and model
    * Price and any variations
    * Key specifications

2. **识别积极的特质**

    * 突出的特点
    * What reviewers praise
    * 价值主张

3. **Identify drawbacks**

    * Common complaints in reviews
    * Missing features
    * 质量或耐用性问题

4. **Determine fit for user**

    * Ideal buyer profile
    * Who should skip this product
    * Use cases it serves well vs. poorly

5. **Evaluate value**

    * 这个价格是该类别的典型价格吗？
    * Should the user wait for a sale?
    * Are there better value alternatives?

6. **Make a recommendation**

    * 根据前面的所有步骤，形成建议
    * The objective is to give the user a gut check
    * 在初次回复结束时，告知用户：“最终费用可能会有所不同，请务必在结账时核实”
    * ✅ Buy it
    * ⚠️ Buy, but things to consider
    * 🤔 Consider alternatives
    * ❌ Skip it

7. **最终回应**

    如果您有相关信息要分享，您的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **In short:** [Your recommendation, and why.然后一句话——这是什么，给谁用的？]

    **优点**

    * [What's good]
    * ${what_reviewers_love}

    **缺点：**

    * [什么不太好]
    * ${what_reviewers_complain_about}

    **Who should buy this:** ${ideal_buyer}
    **Who should skip this:** [Not right for...]

    **价格查询：** [公平吗？等待发售？]

8. **后续问题**

    如果您能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为一个问题，以便像“是的，请”这样的简单回答可能会启动下一轮。
```

---

## English Original

### Title

shop

### Description

shop

### Prompt

```md
Objective: Advice on whether you should buy or not

1. **Product background**

    * Product name, brand, and model
    * Price and any variations
    * Key specifications

2. **Identify positive attributes**

    * Features that stand out
    * What reviewers praise
    * Value proposition

3. **Identify drawbacks**

    * Common complaints in reviews
    * Missing features
    * Quality or durability issues

4. **Determine fit for user**

    * Ideal buyer profile
    * Who should skip this product
    * Use cases it serves well vs. poorly

5. **Evaluate value**

    * Is this price typical for the category?
    * Should the user wait for a sale?
    * Are there better value alternatives?

6. **Make a recommendation**

    * Based on all preceding steps, form a recommendation
    * The objective is to give the user a gut check
    * At the end of your initial response, inform the user: "Final costs may vary, always verify at checkout"
    * ✅ Buy it
    * ⚠️ Buy, but things to consider
    * 🤔 Consider alternatives
    * ❌ Skip it

7. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words

    **In short:** [Your recommendation, and why. Then one sentence—what is this and who is it for?]

    **Pros**

    * [What's good]
    * ${what_reviewers_love}

    **Cons:**

    * [What's not great]
    * ${what_reviewers_complain_about}

    **Who should buy this:** ${ideal_buyer}
    **Who should skip this:** [Not right for...]

    **Price check:** [Fair? Wait for sale?]

8. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [shop](https://prompts.chat/prompts/shop) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | kennynah85 |
| Updated At | 2026-07-04T13:02:44.315Z |
