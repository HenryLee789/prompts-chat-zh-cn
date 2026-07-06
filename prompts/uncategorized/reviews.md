---
id: "cmr6ddihb000ll104812qvy2m"
slug: "reviews"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/reviews"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "24396674a1c6e0a9e909eb9ff70494b5f7b89dd733778c267142638cd9fd0d89"
upstream_updated_at: "2026-07-04T13:01:18.828Z"
---
# 评论

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[reviews](https://prompts.chat/prompts/reviews)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

评论

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
目的：总结许多评论

1. **处理可用评论**

    * 记下评论数量并记住该值为“number_reviews”
    * 总体评分
    * 评级分布（如果可见）
    * 可能没有任何评论，例如产品是新产品或缺货。如果是这种情况，请不要在您的回复中包含任何评论分析。

2. **识别重复模式**

    * 常见的积极主题
    * 常见投诉
    * 每个主题出现的频率

3. **用证据支持主题**

    * 主要主题的代表性引述
    * 说明要点的具体例子

4. **评估可信度**

    * 评论看起来真实吗？
    * 可疑模式（均为五星级，通用语言）
    * 验证购买指标

5. **总结总体情绪**

    * 大多数评论者会再次购买吗？
    * 谁喜欢它，谁讨厌它？

6. **处理异常**

    在您的回复中优先考虑优秀的内容。如果您无法制定满足所有标准的响应，您应该
    * 尽你所能回应并且
    * 承认您面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。

    客观地考虑您提出的答复，并按 1 到 10 的等级对其进行评分。如果您不给 10 分，请尝试做出更强烈的回应，或者考虑承认您面临的任何限制或挑战。分数仅供您个人参考；不要与用户共享。

7. **最终回应**

    如果您有相关信息要分享，您的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子
    如果 number_reviews 为 0，您的回复应该提到没有任何评论，并且您应该跳至后续问题。

    **概述：** [X] 条评论，[Y] 平均评分

    **优点**

    |主题|频率|示例|
    | :---: | :---: | :---: |

    **缺点**

    |主题|频率|示例|
    | :---: | :---: | :---: |

    **评论质量：** [它们看起来真实吗？]

    **底线：** [大多数评论者会再次购买吗？]

8. **后续问题**

    如果您能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为一个问题，以便像“是的，请”这样的简单回答可能会启动下一轮。
```

---

## English Original

### Title

reviews

### Description

reviews

### Prompt

```md
Objective: Summarize many reviews

1. **Process available reviews**

    * Note the number of reviews and remember that value as "number_reviews"
    * Overall rating
    * Rating distribution if visible
    * It's possible there aren't any reviews, for example if a product is new or out of stock. If that's the case, don't include any review analysis in your response.

2. **Identify repeated patterns**

    * Common positive themes
    * Common complaints
    * Frequency of each theme

3. **Support themes with evidence**

    * Representative quotes for major themes
    * Specific examples that illustrate points

4. **Evaluate trustworthiness**

    * Do reviews seem genuine?
    * Suspicious patterns (all 5-star, generic language)
    * Verified purchase indicators

5. **Summarize overall sentiment**

    * Would most reviewers buy again?
    * Who loves it vs. who hates it?

6. **Handling exceptions**

    Prioritize excellent content in your response. If you're unable to formulate a response that meets all criteria, you should
    * respond as best you can and
    * acknowledge any limitations or challenges you faced. For example, maybe there wasn't sufficient content on a webpage or the content wasn't compatible with a given request.

    Consider your proposed response objectively and rate it on a scale from 1-10. If you wouldn't give it a 10, either try to create a stronger response or consider acknowledging any limitations or challenges you faced. The score is just for your own purposes; don't share it with the user.

7. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words
    If number_reviews is 0, your response should mention that there aren't any reviews and you should jump to the follow-on question.

    **Overview:** [X] reviews, [Y] average rating

    **Pros**

    | Theme | Frequency | Example |
    | :---: | :---: | :---: |

    **Cons**

    | Theme | Frequency | Example |
    | :---: | :---: | :---: |

    **Quality of reviews:** [Do they seem genuine?]

    **Bottom line:** [Would most reviewers buy again?]

8. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [reviews](https://prompts.chat/prompts/reviews) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | kennynah85 |
| Updated At | 2026-07-04T13:01:18.828Z |
