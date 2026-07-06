# DD

## 中文说明

DD

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
目标：快速生成公司事实和谈话要点

1. **背景信息**

    * 公司是做什么的
    * 规模（员工、收入（如果有））
    * 成立日期和地点

2. **了解市场地位**

    * 目标客户
    * 价值主张
    * 使命宣言
    * 主要竞争对手
    * 差异化优势

3. **近期活动**

    * 最近的新闻或公告
    * 产品发布
    * 领导层变动
    * 融资轮次

4. **谈话要点**

    * 是什么让这家公司有趣
    * 聪明的候选人会问的问题
    * 与公司相关的行业趋势

5. **处理异常**

    在你的回复中优先考虑优秀的内容。如果你无法制定满足所有标准的响应，你应该
    * 尽你所能回应并且
    * 承认你面临的任何限制或挑战。例如，网页上可能没有足够的内容，或者内容与给定的请求不兼容。客观地考虑你提出的答复，并按 1 到 10 的等级对其进行评分。如果你不给 10 分，请尝试做出更强烈的回应，或者考虑承认你面临的任何限制或挑战。分数仅供你个人参考；不要与用户共享。
    * 不是公司页面 → 直接转到“关于”页面、LinkedIn 或 Crunchbase

6. **最终回应**

    如果你有相关信息要分享，你的最终回复应遵循标准写作指南，包括：

    * 句子大小写：标题、标签和所有其他内容都应使用句子大小写显示（仅专有名词和字符串的第一个字母大写）。
    * 喜欢使用常用单词的简单句子

    **背景**

    * 他们做什么：[一句话]
    * 尺寸：[员工（如有）
    * 成立：[时间、地点]

    **定位：**

    * 客户：[他们服务的对象]
    * 价值支柱：[他们提供什么]
    * 竞争对手：[如果可识别]

    **最新消息：** [任何可见的公告或进展]

    **谈话要点：**

    * [智能观察#1]
    * [智能观察#2]

7. **后续问题**

    如果你能想出一种方法来帮助用户根据响应中显示的信息采取行动，请以一个（最多两个）句子来提供此帮助。将其作为问题，以便像“是的，请”这样的简单回答可能会启动下一轮。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

DD

### Description

DD

### Prompt

```md
Objective: Generate quick company facts and talking points

1. **Background info**

    * What the company does
    * Size (employees, revenue if available)
    * Date founded and location

2. **Understand market position**

    * Target customers
    * Value proposition
    * Missions statement
    * Key competitors
    * Differentiators

3. **Recent activity**

    * Recent news or announcements
    * Product launches
    * Leadership changes
    * Funding rounds

4. **Talking points**

    * What makes this company interesting
    * Questions a smart candidate would ask
    * Industry trends relevant to the company

5. **Handling exceptions**

    Prioritize excellent content in your response. If you're unable to formulate a response that meets all criteria, you should
    * respond as best you can and
    * acknowledge any limitations or challenges you faced. For example, maybe there wasn't sufficient content on a webpage or the content wasn't compatible with a given request.

    Consider your proposed response objectively and rate it on a scale from 1-10. If you wouldn't give it a 10, either try to create a stronger response or consider acknowledging any limitations or challenges you faced. The score is just for your own purposes; don't share it with the user.
    * Not a company page → Direct to About page, LinkedIn, or Crunchbase

6. **Final response**

    If you have relevant info to share, your final response should follow standard writing guidelines, including:

    * Sentence case: titles, labels, and all other content should be displayed using sentence case (only proper nouns and the first letter of a string appear capitalized).
    * Favor simple sentences that use common words

    **Background**

    * What they do: [one sentence]
    * Size: [employees if available]
    * Founded: [when, where]

    **Positioning:**

    * Customers: [who they serve]
    * Value prop: [what they offer]
    * Competitors: [if identifiable]

    **Recent news:** [Any visible announcements or developments]

    **Talking points:**

    * [Intelligent observation #1]
    * [Intelligent observation #2]

7. **Follow-up questions**

    If you can think of a way you can help the user act on information shown in the response, conclude with one (at most two) sentences that offers this help. Frame it as a question so that a simple response like "yes please" might launch the next round.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
