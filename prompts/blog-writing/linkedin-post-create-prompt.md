# Linkedin 帖子创建提示词

## 中文说明

用于让 AI 围绕「Linkedin 帖子创建提示词」执行博客内容创作任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 撰写博客文章、标题和段落结构
* 优化文章表达、可读性和信息密度
* 生成面向特定读者的内容草稿
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 内容创作者
* 博客作者
* 运营编辑

## 中文 Prompt

```md
你将帮助我撰写听起来人性化、简单的 LinkedIn 帖子，并且是根据真实经验撰写的，而不是公司或机器人。在写这篇文章之前，你必须问我 3-5 个简短的问题来理解：
1.我到底构建了什么
2. 为什么它很重要
3.它解决什么问题
4. 任何值得强调的具体结果、斗争或见解。在提出问题之前不要生成帖子。我的发帖风格
严格遵循以下规定：
1. 使用简单的英语（不要使用复杂的单词）
2. 保持句子简短
3. 用短行书写（适合移动设备的格式）
4. 添加行间距以提高可读性
5. 稍微专业的语气（不随意，不公司）
6. 没有虚假炒作，没有“改变游戏规则”，没有“革命性”

岗位结构
你的帖子必须遵循以下流程：

1. Hook（基于好奇心）
   1.1.前 1-2 行必须引起好奇心
   1.2.让人们想要点击“查看更多”
   1.3.没有通用的钩子
2. 背景
   2.1.我构建的内容（${project:Project 1} 或功能）
   2.2.保持清晰和直接
3. 问题
   3.1.它解决了什么实际问题
   3.2.使其具有相关性
4.洞察/构建旅程（可选但首选）
   4.1.一次小小的挣扎、领悟或学习
   4.2.保持真实，而不是戏剧化
5. 结果/价值
   5.1.用户现在可以做什么
   5.2.为什么这很重要
6. 软推（产品）
   6.1.自然地提及 Snapify
   6.2.没有强行推销
7. 结束线
   7.1.可以是反思性的、前瞻性的或稍微发人深省的
   7.2.避免陈词滥调的结局

规则
1.保持总长度紧（不要太长）
2. 除非真正适合，否则不要使用表情符号（默认：避免）
3.没有企业语气
4. 不要过度解释
5. 没有流行语
6. 没有“我很高兴宣布”
7. 禁止垃圾主题标签（如果需要，最多 3-5 个）

你的任务
提出问题并获得答案后，生成：
1. LinkedIn 上的一篇主要帖子
2. 一种替代变体（钩子+角度略有不同）

生成两者后，询问：
“我们应该发布哪一个？”
```

---

## English Original

### Title

Linkedin Post Create Prompt

### Description



### Prompt

```md
You will help me write LinkedIn posts that sound human, simple, and written from real experience — not corporate or robotic.

Before writing the post, you must ask me 3–5 short questions to understand:
1. What exactly I built
2. Why it matters
3. What problem it solves
4. Any specific result, struggle, or insight worth highlighting.
Do NOT generate the post before asking questions.

My Posting Style
Follow this strictly:
1. Use simple English (no complex words)
2. Keep sentences short
3. Write in short lines (mobile-friendly format)
4. Add spacing between lines for readability
5. Slightly professional tone (not casual, not corporate)
6. No fake hype, no “game-changing”, no “revolutionary”

Post Structure
Your post must follow this flow:

1. Hook (Curiosity-based)
   1.1. First 1–2 lines must create curiosity
   1.2. Make people want to click “see more”
   1.3. No generic hooks
2. Context
   2.1. What I built (${project:Project 1} or feature)
   2.2. Keep it clear and direct 
3. Problem
   3.1. What real problem it solves
   3.2. Make it relatable
4. Insight / Build Journey (optional but preferred)
   4.1. A small struggle, realisation, or learning
   4.2. Keep it real, not dramatic
5. Outcome / Value
   5.1. What users can now do
   5.2. Why it matters
6. Soft Push (Product)
   6.1. Mention Snapify naturally
   6.2. No hard selling
7. Ending Line
   7.1. Can be reflective, forward-looking, or slightly thought-provoking
   7.2. No cliché endings

Rules
1. Keep total length tight (not too long)
2. No emojis unless they genuinely fit (default: avoid)
3. No corporate tone
4. No over-explaining
5. No buzzwords
6. No “I’m excited to announce”
7. No hashtags spam (max 3–5 if needed)

Your Task
After asking questions and getting answers, generate:
1. One main LinkedIn post
2. One alternative variation (slightly different hook + angle)

After generating both, ask:
“Which one should we post?”
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
