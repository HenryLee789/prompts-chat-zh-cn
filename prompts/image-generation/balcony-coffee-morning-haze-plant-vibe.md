# 阳台咖啡（晨雾，植物氛围）

## 中文说明

这种结构化的 JSON 提示旨在创建真实且相关的生活方式肖像。它的重点是捕捉一位成年女性在被植物包围的阳台上享用早晨咖啡的画面。该提示包括外观、姿势、设置、拍摄技术、灯光和情绪的详细规范，以确保在舒适的氛围中呈现逼真的效果。应用约束来保持真实性并防止不必要的更改。非常适合摄影师和数字艺术家寻求

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “类别”：“BALCONY_COFFEE_PLANTS”，
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "保留准确的身份参考。仅限 21 岁以上成人。不得美化或面部变化。"
  },
  “主题”：{
    "demographics": "成年女性，21-29（匹配参考身份）。",
    “头发”：{
      "color": "匹配参考。",
      "style": "松散的波浪或带有卷须的凌乱发髻",
      "texture": "真实的股线、飞扬的线、真实的体积",
      “movement”：“自然，微风升起”
    },
    “脸”：{
      "eyes": "精确的参考眼睛；柔和的晨光",
      "skin_details": "质感自然，毛孔清晰，温柔晨光",
      "micro_details": "保留参考标记"
    },
    “服装”：{
      "outfit": "舒适的羊毛衫 + 简单的上衣（无徽标/文字）",
      "fabric": "针织纹理可见，允许轻微起球"
    },
    “配件”：{
      "jewelry": ["小银圈"],
      "props": ["陶瓷杯（无品牌）"]
    }
  },
  “姿势”：{
    "type": "生活方式坦诚",
    "orientation": "半身坐在阳台椅子上",
    "head_position": "轻微倾斜，下巴放松",
    "hands": "双手围绕杯子取暖（正确的手）",
    "gaze": "近乎直接的目光接触",
    “表情”：“笑容柔和，轻松”
  },
  “设置”：{
    "environment": "有盆栽的阳台",
    “背景元素”：[
      “在前景散景中种植叶子”，
      “柔和的城市背景模糊（没有可读的标志）”，
      “晨雾，温柔的气氛”
    ],
    "深度": "前景树叶模糊；脸部锐利；背景柔和"
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "26mm 手机或 50mm pro",
    "framing": "4:5，偏心构图",
    "focus": "眼睛锐利；杯子稍微柔和"
  },
  “照明”：{
    "source": "柔和的早晨日光",
    "direction": "前/侧扩散",
    "highlights": "眼睛和嘴唇上的自然亮点",
    "shadows": "下巴下的柔和阴影"
  },
  “心情和表达”：{
    "tone": "舒适、相关、平静",
    "atmosphere": "触觉早晨安静"
  },
  “风格和现实主义”：{
    "style": "照片级真实 IG 生活方式",
    “imperfections”：“轻微颗粒，框架稍有缺陷”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    “噪音”：“轻微”，
    “模式变体”：{
      "amate": "手持iPhone——偷拍倾斜，轻微噪点，构图不完美",
      “pro”：“更清晰的曝光、清晰的微对比度、浅景深”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “身份漂移”、“面孔变形”、
    “cgi植物”，“塑料皮肤”，
    “额外的手指”，“扭曲的杯子”，
    “可读文本”、“徽标”、“水印”
  ]
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Balcony Coffee (morning haze, plant vibe)

### Description

This structured JSON prompt is designed to create a realistic and relatable lifestyle portrait. It focuses on capturing an adult woman enjoying a morning coffee on a balcony surrounded by plants. The prompt includes detailed specifications for appearance, pose, setting, camera techniques, lighting, and mood to ensure a photorealistic outcome with a cozy atmosphere. Constraints are applied to maintain authenticity and prevent unwanted alterations. Ideal for photographers and digital artists seeki

### Prompt

```md
{
  "category": "BALCONY_COFFEE_PLANTS",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve exact identity from reference. Adult 21+ only. No beautification or face changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29 (match reference identity).",
    "hair": {
      "color": "Match reference.",
      "style": "Loose waves or messy bun with tendrils",
      "texture": "Real strands, flyaways, realistic volume",
      "movement": "Natural, slight breeze lift"
    },
    "face": {
      "eyes": "Exact reference eyes; soft morning catchlights",
      "skin_details": "Natural texture, pores visible, gentle morning glow",
      "micro_details": "Keep reference marks"
    },
    "clothing": {
      "outfit": "Cozy cardigan + simple top (no logos/text)",
      "fabric": "Knit texture visible, slight pilling allowed"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"],
      "props": ["Ceramic mug (unbranded)"]
    }
  },
  "pose": {
    "type": "Lifestyle candid",
    "orientation": "Half-body seated on balcony chair",
    "head_position": "Slight tilt, chin relaxed",
    "hands": "Both hands around mug for warmth (hands correct)",
    "gaze": "Near-direct eye contact",
    "expression": "Soft smile, relaxed"
  },
  "setting": {
    "environment": "Balcony with potted plants",
    "background_elements": [
      "Plant leaves in foreground bokeh",
      "Soft city background blur (no readable signs)",
      "Morning haze, gentle atmosphere"
    ],
    "depth": "Foreground leaves blurred; face sharp; background soft"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone OR 50mm pro",
    "framing": "4:5, off-center composition",
    "focus": "Eyes sharp; mug slightly softer"
  },
  "lighting": {
    "source": "Soft morning daylight",
    "direction": "Front/side diffuse",
    "highlights": "Natural highlights on eyes and lips",
    "shadows": "Gentle under-chin shadow"
  },
  "mood_and_expression": {
    "tone": "Cozy, relatable, calm",
    "atmosphere": "Tactile morning quiet"
  },
  "style_and_realism": {
    "style": "Photoreal IG lifestyle",
    "imperfections": "Mild grain, slightly imperfect framing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild",
    "mode_variants": {
      "amateur": "Handheld iPhone-candid tilt, slight noise, imperfect composition",
      "pro": "Cleaner exposure, crisp micro-contrast, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "identity drift", "face morphing",
    "cgi plants", "plastic skin",
    "extra fingers", "warped mug",
    "readable text", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
