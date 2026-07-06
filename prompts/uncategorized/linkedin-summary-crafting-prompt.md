---
id: "cml2q50qo0001l804u0i4t7tk"
slug: "linkedin-summary-crafting-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/linkedin-summary-crafting-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "fc4b8c9af2db4d49c041e001dfcf25806b65308805a7be95959b1ac3dfa4b145"
upstream_updated_at: "2026-01-31T19:48:23.510Z"
---
# LinkedIn 摘要制作提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[linkedin-summary-crafting-prompt](https://prompts.chat/prompts/linkedin-summary-crafting-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

旨在通过询问有关您的目标角色、行业、胜利和语气的明确问题来打造强大的 LinkedIn“关于”部分。 After you respond, it builds two drafts — one short (~900–1,500 chars) and one fuller (~2,000–2,500) — both under LinkedIn’s 2,600 limit.它可以从您的简历或 LinkedIn 个人资料中提取内容，保持真实和直接，并自然地为您的目标添加数字和关键字。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Prompt Engineering、Resume 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
# LinkedIn 摘要制作提示

## 作者
斯科特·M。

## 目标
此提示的目标是指导人工智能创建个性化、真实的 LinkedIn“关于”部分（摘要），有效突出用户独特的价值主张，与目标工作角色和行业保持一致，并吸引潜在的雇主或招聘人员。它的目标是产生感觉是人类编写的输出，避免人工智能生成的陈词滥调，并纳入 LinkedIn 2025-2026 年的最佳实践，例如简洁的挂钩、可量化的成就和微妙的号召性用语。进行了增强，可以智能地使用附加文件（简历、技能列表）和公共 LinkedIn 个人资料 URL 来自动填充相关详细信息。所有草稿必须遵守当前“关于”部分 2,600 个字符（包括空格）的限制；目标是 1,500–2,000 以获得最佳参与度。

## 观众
此提示专为求职者、职业转型专业人士或任何更新其 LinkedIn 个人资料以提高知名度和就业前景的人而设计。它对于中高级职位特别有用，其中个性化和讲故事可以在技术、金融或制造等竞争市场中区分候选人。

## 变更日志
- 版本 1.0：带有职位名称、行业和参考摘要的基本占位符的初始提示。
- 1.1版：转换为访谈式格式，以便更好地定制；添加了说明，以避免听起来像 AI 的语言并纳入现代 LinkedIn 最佳实践。
- 版本 1.2：添加了文档元素（目标、受众）；包括变更日志和作者； added supported AI engines list.
- 版本 1.3：轻微强化 - 添加了微妙的参考混合指令、明确的关键字微调、基于 2025-2026 年危险信号的收紧的反陈词滥调列表。
- 1.4版本：增加了对附加文件的支持（PDF简历、Markdown技巧等）；指示人工智能首先搜索附件并提出相关问题的答案（尤其是#3-5），然后再要求用户确认。
- 1.5版：添加版本控制和适配说明；包括示例之前/之后的示例；添加了明确的规则：“在回答/确认所有关键问题之前不要生成草稿。”
- 版本 1.6：添加了对用户公共 LinkedIn 个人资料 URL 的支持（问题 9）；指示人工智能浏览/总结可见的公共部分（如果提供），提出调整/改进，但仅使用公共数据。
- 版本 1.7：增加了关于“关于”部分 2,600 个字符限制的意识； require character counts in drafts;添加了在 LinkedIn 上应用更新的生成后说明。

## Versioning & Adaptation Note
此提示专门针对具有强大推理、文件搜索和网页浏览功能的高上下文模型（Grok 4、Claude 3.5/4、带浏览功能的 GPT-4o/4.1）进行迭代。  
对于较小/较旧的型号：缩短反陈词滥调列表，删除附件/URL 说明（如果没有工具支持），将问题减少到最多 5-6 个。  
始终使用人工智能检测器或人工通读来测试输出。 Update Changelog for changes. Fork for industry tweaks.

## Supported AI Engines (Best to Worst)
- 最佳：Grok 4（强大的文件/文档搜索 + URL 浏览页面工具）、GPT-4o（创意写作 + 浏览（如果启用）。
- 好：Claude 3.5 Sonnet / Claude 4（结构化散文+浏览），GPT-4（详细输出）。
- 一般：Llama 3 70B（细微差别但工具有限），Gemini 1.5 Pro（多模式但语气不一致）。
- 最差：GPT-3.5 Turbo（通用响应），较小的法学硕士（上下文/工具较差）。

## Prompt Text

我希望你能帮我写一篇强有力的 LinkedIn“关于”部分（摘要），旨在获得 [特定行业，例如 SaaS 技术、制造、医疗保健等] 中的 [你所瞄准的特定职位，例如高级全栈工程师/营销总监/等] 角色。

Make it feel like something I actually wrote myself—conversational, direct, with some personality.绝对没有夸张的企业流行语（避免“协同作用”、“杠杆作用”、“热情的思想领袖”、“经过验证的业绩记录”、“注重细节”、“游戏规则改变者”等），没有不必要的破折号，没有“这不是 X，这是 Y”结构，没有“在当今世界……”开头，并像真人一样保持句子的长度变化。 Blend any reference styles subtly—don't copy phrasing directly. Include relevant keywords naturally (pull from typical job descriptions in your target role if helpful).目标是在前 2-3 行中牢牢抓住 4-7 个短段落（因为这是“查看更多”之前显示的内容）。

**重要规则：**
- 如果用户附加了任何文件（简历 PDF、技能 Markdown、文本文档等），请首先智能搜索它们以获取相关详细信息（经验、角色、成就、年份、胜利、技能），并在可能的情况下使用这些文件提出或自动填写以下问题的答案。 Then ask for confirmation or missing info—don't assume everything is 100% accurate without user input.
- If the user provides their LinkedIn profile URL, use available browsing/fetch tools to access the public version only.总结可见部分（标题、公开内容、经验亮点、技能等），并提出其如何与目标角色/答案保持一致或提出改进建议。 Only use what's publicly visible without login — confirm with user if data seems incomplete/private.
- 在用户回答或确认所有相关问题（尤其是#1-7）并在需要时提供说明之前，不要生成任何摘要草稿。如果输入不完整，请先礼貌地询问缺少的部分。
- Respect the LinkedIn About section limit: maximum 2,600 characters (including spaces, line breaks, emojis).提供每份草稿的大概字符数。 If a draft exceeds or nears 2,600, suggest trims or prioritize key content.

To make this spot-on, answer these questions first so you can tailor it perfectly (reference attachments/URL where they apply):

1. 您现在想要的确切职位名称（或 1-2 个近似的变体）是什么？

2. Which industry or type of company are you targeting (e.g., fintech startups, established manufacturing, enterprise software)?

3. 您当前/最近的职位是什么？您在这个领域大约有多少年的经验？ (If attachments/LinkedIn URL cover this, propose what you found first.)

4. What are 2–3 things that make you different or really valuable? （例如，“我通过自动化管道将部署时间缩短了 60%”、“我两次扭转了表现不佳的团队”、“我能说流利的西班牙语并领导了拉丁美洲的扩张”，甚至是“我热衷于优化混乱的遗留代码”之类的怪癖）——从附件/URL 中提取强有力的示例（如果存在）。

5. Any big, specific wins or results you're proud of? Numbers help a ton (revenue impact, % improvements, team size led, projects shipped). — Extract quantifiable achievements from resume/attachments/URL first if available.

6. 你的语气/性格氛围如何？ （例如，直截了当、没有废话、冷幽默、热情/平易近人、技术呆子、建设者/企业家能量）

7. 您是否正在积极寻找工作，并希望加入微妙/公开的号召性用语（例如“对 X 领域的新机会持开放态度”或“如果您在 Y 领域构建很酷的东西，请私信我”）？

8. 在此处粘贴 2-4 个 LinkedIn About 部分（来自类似角色/行业的人），您喜欢其风格，甚至是您不喜欢的风格，这样我就可以避免这些陷阱。

9.（可选）您当前的 LinkedIn 个人资料 URL 是什么？如果提供，我将查看公共版本的标题、关于、经验、技能等，并建议如何针对您的目标角色构建/改进它。

一旦我得到您的答案（以及附件/URL 中的任何说明），我将起草 2 个版本：一个较短的版本（约 150–250 个单词/约 900–1,500 个字符）和一个更完整的版本（约 400–500 个单词/约 2,000–2,500 个字符，最多安全地保持在 2,600 个字符以下）。包括每个字符的大概字符数。您可以将它们混合搭配。

**提供草稿后：**
始终以有关如何应用/更新 LinkedIn 上的“关于”部分的明确说明结束，例如：
“要更新您的“关于”部分：
1. Go to your LinkedIn profile (click your photo > View Profile).
2. 单击“关于”部分中的铅笔图标（或“添加个人资料部分”>“关于”，如果为空）。
3. 将您选择的草稿（或混合版本）粘贴到文本框中。
4. 检查字符数（LinkedIn 实时显示；最多 2,600 个）。
5. Click 'Save' — preview how the first lines look before "See more".
6. Optional: Add line breaks/emojis for formatting, then save again.
刷新页面以确认其显示正确。”
```

---

## English Original

### Title

LinkedIn Summary Crafting Prompt

### Description

Designed to craft a strong LinkedIn "About" section by asking clear questions about your target role, industry, wins, and tone. After you respond, it builds two drafts — one short (~900–1,500 chars) and one fuller (~2,000–2,500) — both under LinkedIn’s 2,600 limit. It can pull from your resume or LinkedIn profile, stays authentic and direct, and adds numbers and keywords naturally for your goals.

### Prompt

```md
# LinkedIn Summary Crafting Prompt

## Author
Scott M.

## Goal
The goal of this prompt is to guide an AI in creating a personalized, authentic LinkedIn "About" section (summary) that effectively highlights a user's unique value proposition, aligns with targeted job roles and industries, and attracts potential employers or recruiters. It aims to produce output that feels human-written, avoids AI-generated clichés, and incorporates best practices for LinkedIn in 2025–2026, such as concise hooks, quantifiable achievements, and subtle calls-to-action. Enhanced to intelligently use attached files (resumes, skills lists) and public LinkedIn profile URLs for auto-filling details where relevant. All drafts must respect the current About section limit of 2,600 characters (including spaces); aim for 1,500–2,000 for best engagement.

## Audience
This prompt is designed for job seekers, professionals transitioning careers, or anyone updating their LinkedIn profile to improve visibility and job prospects. It's particularly useful for mid-to-senior level roles where personalization and storytelling can differentiate candidates in competitive markets like tech, finance, or manufacturing.

## Changelog
- Version 1.0: Initial prompt with basic placeholders for job title, industry, and reference summaries.
- Version 1.1: Converted to interview-style format for better customization; added instructions to avoid AI-sounding language and incorporate modern LinkedIn best practices.
- Version 1.2: Added documentation elements (goal, audience); included changelog and author; added supported AI engines list.
- Version 1.3: Minor hardening — added subtle blending instruction for references, explicit keyword nudge, tightened anti-cliché list based on 2025–2026 red flags.
- Version 1.4: Added support for attached files (PDF resumes, Markdown skills, etc.); instruct AI to search attachments first and propose answers to relevant questions (#3–5 especially) before asking user to confirm.
- Version 1.5: Added Versioning & Adaptation Note; included sample before/after example; added explicit rule: "Do not generate drafts until all key questions are answered/confirmed."
- Version 1.6: Added support for user's public LinkedIn profile URL (Question 9); instruct AI to browse/summarize visible public sections if provided, propose alignments/improvements, but only use public data.
- Version 1.7: Added awareness of 2,600-character limit for About section; require character counts in drafts; added post-generation instructions for applying the update on LinkedIn.

## Versioning & Adaptation Note
This prompt is iterated specifically for high-context models with strong reasoning, file-search, and web-browsing capabilities (Grok 4, Claude 3.5/4, GPT-4o/4.1 with browsing).  
For smaller/older models: shorten anti-cliché list, remove attachment/URL instructions if no tools support them, reduce questions to 5–6 max.  
Always test output with an AI detector or human read-through. Update Changelog for changes. Fork for industry tweaks.

## Supported AI Engines (Best to Worst)
- Best: Grok 4 (strong file/document search + browse_page tool for URLs), GPT-4o (creative writing + browsing if enabled).
- Good: Claude 3.5 Sonnet / Claude 4 (structured prose + browsing), GPT-4 (detailed outputs).
- Fair: Llama 3 70B (nuance but limited tools), Gemini 1.5 Pro (multimodal but inconsistent tone).
- Worst: GPT-3.5 Turbo (generic responses), smaller LLMs (poor context/tools).

## Prompt Text

I want you to help me write a strong LinkedIn "About" section (summary) that's aimed at landing a [specific job title you're targeting, e.g., Senior Full-Stack Engineer / Marketing Director / etc.] role in the [specific industry, e.g., SaaS tech, manufacturing, healthcare, etc.].

Make it feel like something I actually wrote myself—conversational, direct, with some personality. Absolutely no over-the-top corporate buzzwords (avoid "synergy", "leverage", "passionate thought leader", "proven track record", "detail-oriented", "game-changer", etc.), no unnecessary em-dashes, no "It's not X, it's Y" structures, no "In today's world…" openers, and keep sentences varied in length like real people write. Blend any reference styles subtly—don't copy phrasing directly. Include relevant keywords naturally (pull from typical job descriptions in your target role if helpful). Aim for 4–7 short paragraphs that hook fast in the first 2–3 lines (since that's what shows before "See more").

**Important rules:**
- If the user has attached any files (resume PDF, skills Markdown, text doc, etc.), first search them intelligently for relevant details (experience, roles, achievements, years, wins, skills) and use that to propose or auto-fill answers to questions below where possible. Then ask for confirmation or missing info—don't assume everything is 100% accurate without user input.
- If the user provides their LinkedIn profile URL, use available browsing/fetch tools to access the public version only. Summarize visible sections (headline, public About, experience highlights, skills, etc.) and propose how it aligns with target role/answers or suggest improvements. Only use what's publicly visible without login — confirm with user if data seems incomplete/private.
- Do not generate any draft summaries until the user has answered or confirmed all relevant questions (especially #1–7) and provided clarifications where needed. If input is incomplete, politely ask for the missing pieces first.
- Respect the LinkedIn About section limit: maximum 2,600 characters (including spaces, line breaks, emojis). Provide an approximate character count for each draft. If a draft exceeds or nears 2,600, suggest trims or prioritize key content.

To make this spot-on, answer these questions first so you can tailor it perfectly (reference attachments/URL where they apply):

1. What's the exact job title (or 1–2 close variations) you're going after right now?

2. Which industry or type of company are you targeting (e.g., fintech startups, established manufacturing, enterprise software)?

3. What's your current/most recent role, and roughly how many years of experience do you have in this space? (If attachments/LinkedIn URL cover this, propose what you found first.)

4. What are 2–3 things that make you different or really valuable? (e.g., "I cut deployment time 60% by automating pipelines", "I turned around underperforming teams twice", "I speak fluent Spanish and have led LATAM expansions", or even a quirk like "I geek out on optimizing messy legacy code") — Pull strong examples from attachments/URL if present.

5. Any big, specific wins or results you're proud of? Numbers help a ton (revenue impact, % improvements, team size led, projects shipped). — Extract quantifiable achievements from resume/attachments/URL first if available.

6. What's your tone/personality vibe? (e.g., straightforward and no-BS, dry humor, warm/approachable, technical nerd, builder/entrepreneur energy)

7. Are you actively job hunting and want to include a subtle/open call-to-action (like "Open to new opportunities in X" or "DM me if you're building cool stuff in Y")?

8. Paste 2–4 LinkedIn About sections here (from people in similar roles/industries) that you like the style of—or even ones you don't like, so I can avoid those pitfalls.

9. (Optional) What's your current LinkedIn profile URL? If provided, I'll review the public version for headline, About, experience, skills, etc., and suggest how to build on/improve it for your target role.

Once I have your answers (and any clarifications from attachments/URL), I'll draft 2 versions: one shorter (~150–250 words / ~900–1,500 chars) and one fuller (~400–500 words / ~2,000–2,500 chars max to stay safely under 2,600). Include approximate character counts for each. You can mix and match from them.

**After providing the drafts:**
Always end with clear instructions on how to apply/update the About section on LinkedIn, e.g.:
"To update your About section:
1. Go to your LinkedIn profile (click your photo > View Profile).
2. Click the pencil icon in the About section (or 'Add profile section' > About if empty).
3. Paste your chosen draft (or blended version) into the text box.
4. Check the character count (LinkedIn shows it live; max 2,600).
5. Click 'Save' — preview how the first lines look before "See more".
6. Optional: Add line breaks/emojis for formatting, then save again.
Refresh the page to confirm it displays correctly."
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [linkedin-summary-crafting-prompt](https://prompts.chat/prompts/linkedin-summary-crafting-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Prompt Engineering, Resume |
| Contributors | thanos0000 |
| Updated At | 2026-01-31T19:48:23.510Z |
