# 探测

## 中文说明

探测

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
目标：生成帮助用户深入思考某个主题的问题

1. **确定内容的中心点**

    * 找到核心思想或主要论点
    * 确定作者希望读者相信什么或做什么
    *反思“为什么？”内容的
    * 注意内容的范围和限制
    * 如果可能的话，与更广泛的主题建立联系

2. **生成多样化的问题类型**

    * **挑战假设**：这认为什么是理所当然的？
    * **探索影响**：如果这是真的，接下来会发生什么？
    * **连接体验**：这与生活有何关系？
    * **考虑替代方案**：反驳是什么？
    * **找出差距**：这个答案没有说明什么？

3. **喜欢开放式问题**

    * 没有单一的正确答案
    * 邀请个人反思
    * 鼓励更深入的探索

4. **处理异常**

    在你的回复中优先考虑优秀的内容。如果你无法制定满足所有标准的响应，你应该
    * 尽你所能回应并且
    * 承认你面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。客观地考虑你提出的答复，并按 1 到 10 的等级对其进行评分。如果你不给 10 分，请尝试做出更强烈的回应，或者考虑承认你面临的任何限制或挑战。分数仅供你个人参考；不要与用户共享。

5. **最终回应**

    如果你有相关信息要分享，你的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **需要思考的问题**

1. **挑战假设：** ${question_about_what_the_content_takes_for_granted}

2. **探索影响：** ${question_about_what_follows_if_this_is_true}

3. **联系经验：** [与个人生活/经历相关的问题]

4. **考虑替代方案：** [关于反驳或其他观点的问题]

5. **找出差距：** [关于未解决的问题]

6. **后续问题**

    如果你能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为问题，以便像“是的，请”这样的简单回答可能会启动下一轮。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Probe

### Description

Probe

### Prompt

```md
Objective: Generate questions that help the user think deeply about a topic

1. **Identify the central point of the content**

    * Find the core idea or main argument
    * Identify what the author wants readers to believe or do
    * Reflect on the "why?" of the content
    * Note the scope and limitations of the content
    * Make connections to broader topics, if possible

2. **Generate diverse question types**

    * **Challenge assumptions**: What does this take for granted?
    * **Explore implications**: If this is true, what follows?
    * **Connect to experience**: How does this relate to life?
    * **Consider alternatives**: What's the counter-argument?
    * **Identify gaps**: What doesn't this answer?

3. **Favor questions that are open ended**

    * No single right answer
    * Invite personal reflection
    * Encourage deeper exploration

4. **Handling exceptions**

    Prioritize excellent content in your response. If you're unable to formulate a response that meets all criteria, you should
    * respond as best you can and
    * acknowledge any limitations or challenges you faced. For example, maybe there wasn't sufficient content on a webpage or the content wasn't compatible with a given request.

    Consider your proposed response objectively and rate it on a scale from 1-10. If you wouldn't give it a 10, either try to create a stronger response or consider acknowledging any limitations or challenges you faced. The score is just for your own purposes; don't share it with the user.

5. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words

    **Questions to think about**

1. **Challenge assumptions:** ${question_about_what_the_content_takes_for_granted}

2. **Explore implications:** ${question_about_what_follows_if_this_is_true}

3. **Connect to experience:** [Question relating to personal life/experience]

4. **Consider alternatives:** [Question about counter-arguments or other views]

5. **Identify gaps:** [Question about what isn't addressed]

6. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
