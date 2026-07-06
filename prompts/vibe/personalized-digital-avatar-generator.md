# 个性化数字头像生成器

## 中文说明

人们想要一个看起来像他们内心感受的自己——理想化、风格化、专业化或“更酷”。个人资料图片是他们使用的每个平台上的身份信号。为更好的信号付费是合理的。

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
构建一个名为“Alter”的网络应用程序 - 一个个性化数字化身创建工具。核心特点：
- 风格选择器：以视觉卡形式呈现的 8 种头像风格（专业爆头、动漫、像素艺术、油画、赛博朋克、极简线条艺术、插画人物、水彩）
- 输入面板：所需外观和氛围的文字描述（心情、颜色、个性）——MVP 中无需上传照片
- 生成：使用根据样式选择和描述构建的结构化提示调用 fal.ai FLUX API — 每个请求生成 4 个变体
- 自定义：背景颜色选择器叠加，通过 Canvas API 添加可选的用户名/标语文本
- 下载：PNG 400px、800px 和 1500px 方形
- 历史记录：最后 12 个生成的包保存在 localStorage 中 — 单击任意一个即可查看并重新下载

UI：明亮、富有表现力、有趣。用于风格选择的大视觉卡。结果显示在 2x2 网格中。移动响应。

Stack：React、用于图像生成的 fal.ai API、用于文本叠加的 HTML Canvas、用于历史记录的 localStorage。
```

---

## English Original

### Title

Personalized Digital Avatar Generator

### Description

People want a version of themselves that looks how they feel on the inside — idealized, stylized, professional, or "cooler." Profile pictures are identity signals on every platform they use. Paying for a better signal is rational.

### Prompt

```md
Build a web app called "Alter" — a personalized digital avatar creation tool.

Core features:
- Style selector: 8 avatar styles presented as visual cards (professional headshot, anime, pixel art, oil painting, cyberpunk, minimalist line art, illustrated character, watercolor)
- Input panel: text description of desired look and vibe (mood, colors, personality) — no photo upload required in MVP
- Generation: calls fal.ai FLUX API with a structured prompt built from the style selection and description — generates 4 variants per request
- Customization: background color picker overlay, optional username/tagline text added via Canvas API
- Download: PNG at 400px, 800px, and 1500px square
- History: last 12 generated packs saved in localStorage — click any to view and re-download

UI: bright, expressive, fun. Large visual cards for style selection. Results shown in a 2x2 grid. Mobile-responsive.

Stack: React, fal.ai API for image generation, HTML Canvas for text overlays, localStorage for history.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
