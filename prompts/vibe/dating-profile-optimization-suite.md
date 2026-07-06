# 约会资料优化套件

## 中文说明

人们担心自己的个人资料不起作用，并且看不到其他人看到的内容。AI可以重写他们的简历，分析他们选择的照片，并生成个性化的开场白，消除这种不确定性，并让人们相信获得更好的结果。

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
构建一个名为“第一印象”的网络应用程序——一个约会资料审核和优化工具。核心特点：
- 照片审核：用户描述他们的照片（最多 6 张）——AI 在活力、平易近人、社会认同和独特性方面对每张照片进行评分。返回排名顺序推荐，每张照片均包含一行推理
- 个人简介重写器：用户粘贴当前个人简介，单击“优化”，收到 3 个不同语气的重写版本（俏皮/真实/直接）。每个版本都包含字数和预测的“向右滑动率”标签（低/中/高）
-破冰游戏生成器：用户用几句话描述一场比赛的概况——AI生成 5 个个性化开场游戏，按预测响应率排名，每个开场游戏都有一行解释其工作原理
- 个人资料评分仪表板：生物质量、照片强度和开场效果的 0-100 综合评分 - 实时更新
- 导出：标题为“我的个人资料包”的所有资产的格式化 PDF

Stack：React，[LLM API] 用于所有 AI 调用，jsPDF 用于导出。移动优先的 UI 具有基于卡片的布局 - 温暖的颜色，现代约会应用程序的感觉。
```

---

## English Original

### Title

Dating Profile Optimization Suite

### Description

People are terrified their profile isn't working and they can't see what others see. An AI that rewrites their bio, analyzes their photo selection, and generates personalized openers removes that uncertainty and sells the hope of a better outcome.

### Prompt

```md
Build a web app called "First Impression" — a dating profile audit and optimization tool.

Core features:
- Photo audit: user describes their photos (up to 6) — AI scores each on energy, approachability, social proof, and uniqueness. Returns a ranked order recommendation with one-line reasoning per photo
- Bio rewriter: user pastes current bio, clicks "Optimize", receives 3 rewritten versions in distinct tones (playful / authentic / direct). Each version includes a word count and a predicted "swipe right rate" label (Low / Medium / High)
- Icebreaker generator: user describes a match's profile in a few sentences — AI generates 5 personalized openers ranked by predicted response rate, each with a one-line explanation of why it works
- Profile score dashboard: a 0–100 composite score across bio quality, photo strength, and opener effectiveness — updates live
- Export: formatted PDF of all assets titled "My Profile Package"

Stack: React, [LLM API] for all AI calls, jsPDF for export. Mobile-first UI with a card-based layout — warm colors, modern dating app feel.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
