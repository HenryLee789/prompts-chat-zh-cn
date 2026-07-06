# 时间线

## 中文说明

时间线

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
目标：构建事件的时间顺序

1. **确定内容的中心点**

    * 查找明确的日期，例如“2024年1月15日”； “2019”；或“上周二”
    * 确定相关引用，例如“三个月后”、“第二年”
    * 注意顺序词，如“first”、“then”、“finally”、“before”和“after”

2. **确定每个点发生了什么**

    * 识别动作或事件
    * 注意谁参与了
    * 如果有说明，请注意其重要性

3. **尽可能将事件转换为特定日期**

    * 使用上下文线索来计算相对日期
    * 用 (?) 标记不确定的日期
    * 当日期无法确定时保留原始措辞

4. **除非有充分的理由不安排活动**

    * 将最早发生的事件放在前面
    * 具有相同日期/时间范围的分组事件
    * 当确切的顺序已知但日期未知时，使用相对标记（“X 之前”、“Y 之后”）

5. **涵盖页面上呈现的整个事件时间线**

    * 全面性很重要，因此完整的时间表以及网页上提供的所有信息
    * 上下文准确性很重要，因此不要向时间线添加网页上未提及的其他事件

6. **处理异常**

    在你的回复中优先考虑优秀的内容。如果你无法制定满足所有标准的响应，你应该
    * 尽你所能回应并且
    * 承认你面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。客观地考虑你提出的答复，并按 1 到 10 的等级对其进行评分。如果你不给 10 分，请尝试做出更强烈的回应，或者考虑承认你面临的任何限制或挑战。分数仅供你个人参考；不要与用户共享。

7. **最终回应**

    如果你有相关信息要分享，你的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **将响应格式设置为：**

    **时间表**

    * **[日期/时间范围]**：${event_description}
    * **[日期/时间范围]**：${event_description}
    * **[日期/时间范围]**：${event_description}

    **注释**

    * ${any_dates_marked_uncertain}
    * ${any_events_where_sequence_is_unclear}

8. **后续问题**

    如果你能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为问题，以便像“是的，请”这样的简单回答可能会启动下一轮。
```

---

## English Original

### Title

timeline

### Description

timeline

### Prompt

```md
Objective: Construct a chronological sequence of events

1. **Identify the central point of the content**

    * Find explicit dates, for example, "January 15, 2024"; "2019"; or "last Tuesday"
    * Identify relative references, for example, "three months later", "the following year"
    * Note sequence words like "first", "then", "finally", "before", and "after"

2. **Identify what happened at each point**

    * Identify the action or occurrence
    * Note who was involved
    * Note the significance, if stated

3. **Convert events to specific dates when possible**

    * Use context clues to calculate relative dates
    * Mark uncertain dates with (?)
    * Preserve original phrasing when dates can't be determined

4. **Unless there is a strong reason not to, arrange events**

    * Place earliest events first
    * Group events with the same date/timeframe
    * Use relative markers ("Before X," "After Y") when exact sequence is known but dates aren't

5. **Cover the entire timeline of events presented on the page**

    * Comprehensiveness is important, so complete timelines with all information available on a webpage
    * Contextual accuracy is important, so don't add additional events to the timeline that aren't mentioned on the webpage

6. **Handling exceptions**

    Prioritize excellent content in your response. If you're unable to formulate a response that meets all criteria, you should
    * respond as best you can and
    * acknowledge any limitations or challenges you faced. For example, maybe there wasn't sufficient content on a webpage or the content wasn't compatible with a given request.

    Consider your proposed response objectively and rate it on a scale from 1-10. If you wouldn't give it a 10, either try to create a stronger response or consider acknowledging any limitations or challenges you faced. The score is just for your own purposes; don't share it with the user.

7. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words

    **Format the response as:**

    **Timeline**

    * **[Date/Timeframe]**: ${event_description}
    * **[Date/Timeframe]**: ${event_description}
    * **[Date/Timeframe]**: ${event_description}

    **Notes**

    * ${any_dates_marked_uncertain}
    * ${any_events_where_sequence_is_unclear}

8. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
