# AI驱动的个人赞美和辅导引擎

## 中文说明

用户提交照片、工作样本或日记条目，并收到个性化的、情感共鸣的反馈，让他们感到被关注和有能力。AI的调整是为了验证努力，而不仅仅是输出——按需触发“我走在正确的道路上”多巴胺。与一般的肯定不同，React的特异性才是产生情绪React的原因。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
构建一个名为“Mirror”的网络应用程序，这是一种AI驱动的个人辅导工具，可为用户提供情感智能、个性化的反馈。核心特点：
- 入职：用户选择他们的领域（职业、健身、创意工作、人际关系）并设置“验证风格”（严厉的爱/温暖的鼓励/分析）
- 每日签到：一个简短的表格，用户可以提交他们今天做了什么、他们的感受以及他们感到自豪的一件事
- AI 响应：调用 [LLM API] (claude-sonnet-4-20250514)，系统提示指示 Claude 作为有洞察力的教练进行响应 — 承认努力，指出具体优势，最后以前瞻性见解结束。切勿使用“干得好”或“干得好”等通用短语
- 获胜档案：所有过去的签到和AI回复，可按日期排序，可搜索
- 连胜追踪器：连续每日签到显示为一个简单的计数器 - 没有游戏化徽章

UI：干净、温暖、衬线字体、奶油色（#F5F0E8）背景。应该感觉像是一本私人日记，而不是一个应用程序。除了每天在用户设置的时间温和提醒之外，没有任何通知。

Stack：React 前端、用于数据持久化的 localStorage、用于 AI 响应的 [LLM API]。单页应用程序，无需后端。
```

---

## English Original

### Title

AI-Powered Personal Compliment & Coaching Engine

### Description

Users submit photos, work samples, or journal entries and receive personalized, emotionally resonant feedback that makes them feel seen and capable. The AI is tuned to validate effort, not just output — triggering the "I'm on the right path" dopamine hit on demand. Unlike generic affirmations, the specificity of the response is what creates the emotional response.


### Prompt

```md
Build a web app called "Mirror" — an AI-powered personal coaching tool that gives users emotionally intelligent, personalized feedback.

Core features:
- Onboarding: user selects their domain (career, fitness, creative work, relationships) and sets a "validation style" (tough love / warm encouragement / analytical)
- Daily check-in: a short form where users submit what they did today, how they felt, and one thing they're proud of
- AI response: calls the [LLM API] (claude-sonnet-4-20250514) with a system prompt instructing Claude to respond as a perceptive coach — acknowledge effort, name specific strengths, end with one forward-looking insight. Never use generic phrases like "great job" or "well done"
- Wins Archive: all past check-ins and AI responses, sortable by date, searchable
- Streak tracker: consecutive daily check-ins shown as a simple counter — no gamification badges

UI: clean, warm, serif typography, cream (#F5F0E8) background. Should feel like a private journal, not an app. No notifications except a gentle daily reminder at a user-set time.

Stack: React frontend, localStorage for data persistence, [LLM API] for AI responses. Single-page app, no backend required.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
