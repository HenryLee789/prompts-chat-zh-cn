# 恶魔广告

## 中文说明

恶魔广告

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
目标：构建令人信服的反论点

1. **确定内容的中心点**

    * 找到核心思想或主要论点
    * 确定作者希望读者相信什么或做什么
    *反思“为什么？”内容的
    * 注意内容的范围和限制

2. **确定对立位置**

    * 确定一个有思想的批评家会争论什么
    * 找出最强烈的反对意见
    * 确定共同的基础和出发点

3. **表现出真正的理解**

    * 首先陈述原始论点的正确之处
    * 识别原始论点所涉及的有效问题
    * 表现出对你所反对的立场的尊重

4. **建立强有力的反对理由**

    * 提出 2-3 个令人信服的反论点并进行推理
    * 使用证据和逻辑，而不是情感或驳斥
    * 预测并解决可能的反驳

5. **解释根本分歧**

    * 确定关键假设或价值差异
    * 说明为什么理性的人可能会不同意
    * 避免稻草人谬误或恶意解释

6. **处理异常**

    在你的回复中优先考虑优秀的内容。如果你无法制定满足所有标准的响应，你应该
    * 尽你所能回应并且
    * 承认你面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。客观地考虑你提出的答复，并按 1 到 10 的等级对其进行评分。如果你不给 10 分，请尝试做出更强烈的回应，或者考虑承认你面临的任何限制或挑战。分数仅供你个人参考；不要与用户共享。

7. **最终回应**

    如果你有相关信息要分享，你的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **将响应格式设置为：**

    **原位置：** ${one_sentence_summary_of_what_the_page_argues}

    **这是正确的：** ${genuine_acknowledgment_of_valid_points}

    **反驳论点**

1.【反驳与推理】

2.【反驳与推理】

3.【反驳与推理】

    **核心分歧：** ${explanation_of_the_underlying_value_or_assumption_difference}

8. **后续问题**

    如果你能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为问题，以便像“是的，请”这样的简单回答可能会启动下一轮。
```

---

## English Original

### Title

devil adv

### Description

devil adv

### Prompt

```md
Objective: Construct a compelling counter-argument

1. **Identify the central point of the content**

    * Find the core idea or main argument
    * Identify what the author wants readers to believe or do
    * Reflect on the "why?" of the content
    * Note the scope and limitations of the content

2. **Identify the counter-position**

    * Determine what a thoughtful critic would argue
    * Find the strongest objections you can
    * Identify shared ground and points of departure

3. **Show genuine understanding**

    * Start by stating what the original argument gets right
    * Identify valid concerns the original argument addresses
    * Demonstrate respect for the position you're arguing against

4. **Build a strong opposing case**

    * Present 2-3 compelling counter-points with reasoning
    * Use evidence and logic, not emotion or dismissal
    * Anticipate and address likely rebuttals

5. **Explain the fundamental disagreement**

    * Identify the key assumption or value difference
    * Show why reasonable people might disagree
    * Avoid straw-man fallacy or bad-faith interpretation

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

    **The original position:** ${one_sentence_summary_of_what_the_page_argues}

    **What this gets right:** ${genuine_acknowledgment_of_valid_points}

    **A counter argument**

1. [Counter-point with reasoning]

2. [Counter-point with reasoning]

3. [Counter-point with reasoning]

    **The core disagreement:** ${explanation_of_the_underlying_value_or_assumption_difference}

8. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
