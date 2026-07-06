---
id: "cmjt2o6jc0001jr04ufagbh4v"
slug: "what-will-2026-bring-you"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/what-will-2026-bring-you"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a89366049a4a9e01626c64767b6d052af8a2b9214f517b89a224b80765957cef"
upstream_updated_at: "2025-12-30T21:01:33.189Z"
---
# 2026年会给你带来什么？

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[what-will-2026-bring-you](https://prompts.chat/prompts/what-will-2026-bring-you)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

输入出生信息的上传图像的占星年 2026

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "task": "逼真的高级神秘 2026 年占星术海报，使用上传的肖像作为严格的身份锚，用户可选择文本语言（TR 或 EN）。",
  “输入”：{
    "REF_IMAGE": "${user_uploaded_image}",
    "BIRTH_DATE": "{YYYY-MM-DD}",
    "BIRTH_TIME": "{HH:MM 或未知}",
    "BIRTH_PLACE": "{城市、国家}",
    "TARGET_YEAR": "2026",
    "OUTPUT_LANGUAGE": "${tr_or_en}"
  },

"prompt": "严格身份锚点：\n使用 ${ref_image} 作为主要拍摄对象的严格身份锚点。准确保留同一个人：面部结构、比例、年龄、肤色、眼睛形状、鼻子、嘴唇、下巴轮廓和整体相似度。无身份漂移。\n\n第 1 步：占星预测（在渲染之前执行此操作）：\n- 根据以下内容构建出生图BIRTH_DATE=${birth_date}、BIRTH_TIME=${birth_time}、BIRTH_PLACE=${birth_place}。如果 BIRTH_TIME 未知，请使用中午图表近似值并避免与时间相关的声明。\n- 确定 2026 年展望：爱情、事业、金钱、健康。\n- 对于每个领域，选择一个描述可能的关键字。 2026 年结果。\n\n语言逻辑（关键）：\nIF OUTPUT_LANGUAGE = TR：\n- 准确生成 4 个土耳其语关键字。\n- 每个关键字必须只有一个单词（无空格、无连字符）、大写土耳其语，最多 10 个字符。\n- 仅示例（请勿盲目复制）：BOLLUK、KAVUŞMA、YÜKSELÞ、 DENGE、ŞANS、ATILIM、DÖNÜŞÜM、GÜÇLENME。\n- 底部口号必须精确：\n \"2026 Yılı Sizin Yılınız olsun\"\n\nIF OUTPUT_LANGUAGE = EN:\n- 恰好生成 4 个英文关键字。\n- 每个关键字只能是一个单词（无空格、无空格）连字符），大写，最多 10 个字符。\n- 仅示例（请勿盲目复制）：丰富、承诺、突破、清晰、成长、治愈、胜利、更新、促销。\n- 底部口号必须准确：\n \“让 2026 年成为你的一年”\n\n重要文本规则：\n- 请勿打印“爱情/事业/金钱/健康”等标签。\n- 仅打印 4 个关键字 + 底部标语，仅打印 4 个关键字 + 底部标语，仅打印其他内容。\n\n第 2 步：逼真的神秘外观（请勿将其风格化为插图）：\n- 拍摄对象必须保持逼真：自然的皮肤纹理、逼真的头发、无塑料皮肤。\n- 神秘主义必须通过电影摄影和微妙来实现气氛：\n - 微弱的体积雾霾，最小的熏香般的烟雾\n - 月光边缘光+温暖的主光，精致的镜面高光\n - 微尘微粒闪闪发光（非常微妙）\n - 仅在背景中微弱的黄道带轮和星盘线条（不在脸上）\n - 神圣的几何图形作为极其微妙的散景叠加，永远不可读的文本\n\n第3步：链接到的视觉隐喻预测（高级，不俗气）：\n- 金钱积极：精致的金色光弧和向上流动（没有货币，没有符号）。\n- 积极的爱情：成对的轨道路径和温暖的玫瑰金色亮点（没有表情符号心）。\n- 职业积极：上升的建筑线条或背景中微妙的上升星路线图。\n- 健康强大：平静的平衡环和干净的负空间。\n- 在视觉上打造两个最强的主题\n\n海报设计：\n- 纵横比：4:5 垂直，超高分辨率。\n- 构图：英雄肖像居中，头肩或躯干中部，眼睛水平。\n- 相机外观：85 毫米肖像，f/1.8，浅景深，眼睛清晰对焦。\n- 背景：深夜渐变，带有微妙的星星； \n\n排版（必须完美且可读）：\nA) 关键字行：\n- 将 4 个关键字放在标语上方的一行中。\n- 在单词之间使用分隔符：\" • \"。\n- 字体：modern sans（类似蒙特塞拉特），稍微增加字母间距。\n\nB) 底部标语：\n- 放在最底部，居中。\n-字体：优雅的衬线（类似 Playfair Display）。\n\n任何地方都没有其他文本。\n\n完成：\n- 高级颜色分级，微妙的电影对比度，无过饱和。\n- 自然修饰，无过度锐化。\n- 确保所选语言文本拼写正确且完全可读。\n",

" negative_prompt": "任何额外的文本、拼写错误的单词、错误的字母、水印、徽标、签名、二维码、低分辨率、模糊、噪音、面部扭曲、身份漂移、不同的人、插图、卡通、动漫、重幻想造型、霓虹灯颜色、廉价占星剪贴画、货币、货币符号、表情符号心、凌乱的背景、重复的脸、额外的手指、变形的手、可读的符文、可读的字形文本",
  “输出”：{
    “计数”：1，
    “纵横比”：“4：5”，
    “风格”：“逼真的高级电影神秘编辑海报”
  }
}
```

---

## English Original

### Title

2026 Size Neler getirecek

### Description

Yüklenen ve Doğum bilgileri girilen görselin Astrolojik 2026 yılı

### Prompt

```md
{
  "task": "Photorealistic premium mystical 2026 astrology poster using uploaded portrait as strict identity anchor, with user-selectable language (TR or EN) for text.",
  "inputs": {
    "REF_IMAGE": "${user_uploaded_image}",
    "BIRTH_DATE": "{YYYY-MM-DD}",
    "BIRTH_TIME": "{HH:MM or UNKNOWN}",
    "BIRTH_PLACE": "{City, Country}",
    "TARGET_YEAR": "2026",
    "OUTPUT_LANGUAGE": "${tr_or_en}"
  },
  "prompt": "STRICT IDENTITY ANCHOR:\nUse ${ref_image} as a strict identity anchor for the main subject. Preserve the same person exactly: facial structure, proportions, age, skin tone, eye shape, nose, lips, jawline, and overall likeness. No identity drift.\n\nSTEP 1: ASTROLOGY PREDICTIONS (do this BEFORE rendering):\n- Build a natal chart from BIRTH_DATE=${birth_date}, BIRTH_TIME=${birth_time}, BIRTH_PLACE=${birth_place}. If BIRTH_TIME is UNKNOWN, use a noon-chart approximation and avoid time-dependent claims.\n- Determine 2026 outlook for: LOVE, CAREER, MONEY, HEALTH.\n- For each area, choose ONE keyword describing the likely 2026 outcome.\n\nLANGUAGE LOGIC (critical):\nIF OUTPUT_LANGUAGE = TR:\n- Produce EXACTLY 4 Turkish keywords.\n- Each keyword must be ONE WORD only (no spaces, no hyphens), UPPERCASE Turkish, max 10 characters.\n- Examples only (do not copy blindly): BOLLUK, KAVUŞMA, YÜKSELİŞ, DENGE, ŞANS, ATILIM, DÖNÜŞÜM, GÜÇLENME.\n- Bottom slogan must be EXACT:\n  \"2026 Yılı Sizin Yılınız olsun\"\n\nIF OUTPUT_LANGUAGE = EN:\n- Produce EXACTLY 4 English keywords.\n- Each keyword must be ONE WORD only (no spaces, no hyphens), UPPERCASE, max 10 characters.\n- Examples only (do not copy blindly): ABUNDANCE, COMMITMENT, BREAKTHRU, CLARITY, GROWTH, HEALING, VICTORY, RENEWAL, PROMOTION.\n- Bottom slogan must be EXACT:\n  \"MAKE 2026 YOUR YEAR\"\n\nIMPORTANT TEXT RULES:\n- Do NOT print labels like LOVE/CAREER/MONEY/HEALTH.\n- Print ONLY the 4 keywords + the bottom slogan, nothing else.\n\nSTEP 2: PHOTO-REALISTIC MYSTICAL LOOK (do NOT stylize into illustration):\n- The subject must remain photorealistic: natural skin texture, realistic hair, no plastic skin.\n- Mysticism must be achieved via cinematography and subtle atmosphere:\n  - faint volumetric haze, minimal incense-like smoke wisps\n  - moonlit rim light + warm key light, refined specular highlights\n  - micro dust motes sparkle (very subtle)\n  - faint zodiac wheel and astrolabe linework in the BACKGROUND only (not on the face)\n  - sacred geometry as extremely subtle bokeh overlay, never readable text\n\nSTEP 3: VISUAL METAPHORS LINKED TO PREDICTIONS (premium, not cheesy):\n- MONEY positive: refined gold-toned light arcs and upward flow (no currency, no symbols).\n- LOVE positive: paired orbit paths and warm rose-gold highlights (no emoji hearts).\n- CAREER positive: ascending architectural lines or subtle rising star-route graph in background.\n- HEALTH strong: calm balanced rings and clean negative space.\n- Make the two strongest themes visually dominant through light direction, contrast, and placement.\n\nPOSTER DESIGN:\n- Aspect ratio: 4:5 vertical, ultra high resolution.\n- Composition: centered hero portrait, head-and-shoulders or mid-torso, eye-level.\n- Camera look: 85mm portrait, f/1.8, shallow depth of field, crisp focus on eyes.\n- Background: deep midnight gradient with subtle stars; modern, premium, minimal.\n\nTYPOGRAPHY (must be perfect and readable):\nA) Keyword row:\n- Place the 4 keywords in a single row ABOVE the slogan.\n- Use separators: \" • \" between words.\n- Font: modern sans (Montserrat-like), slightly increased letter spacing.\n\nB) Bottom slogan:\n- Place at the very bottom, centered.\n- Font: elegant serif (Playfair Display-like).\n\nNO OTHER TEXT ANYWHERE.\n\nFINISHING:\n- Premium color grading, subtle filmic contrast, no oversaturation.\n- Natural retouching, no over-sharpening.\n- Ensure the selected-language text is spelled correctly and fully readable.\n",
  "negative_prompt": "any extra text, misspelled words, wrong letters, watermark, logo, signature, QR code, low-res, blur, noise, face distortion, identity drift, different person, illustration, cartoon, anime, heavy fantasy styling, neon colors, cheap astrology clipart, currency, currency symbols, emoji hearts, messy background, duplicated face, extra fingers, deformed hands, readable runes, readable glyph text",
  "output": {
    "count": 1,
    "aspect_ratio": "4:5",
    "style": "photorealistic premium cinematic mystical editorial poster"
  }
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [what-will-2026-bring-you](https://prompts.chat/prompts/what-will-2026-bring-you) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | stiva1979 |
| Updated At | 2025-12-30T21:01:33.189Z |
