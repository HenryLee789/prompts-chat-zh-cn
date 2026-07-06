---
id: "cmjok4wz00011ie04xm76o7zb"
slug: "passenger-seat-car-selfie-golden-hour-candid"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/passenger-seat-car-selfie-golden-hour-candid"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "792f51eb8ae7cbfab865781c0cf680232e7180366af4731a3144e6b06a63161f"
upstream_updated_at: "2025-12-27T18:51:23.266Z"
---
# 乘客座汽车自拍（黄金时段，偷拍）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[passenger-seat-car-selfie-golden-hour-candid](https://prompts.chat/prompts/passenger-seat-car-selfie-golden-hour-candid)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示旨在生成黄金时段坐在汽车乘客座位上的土耳其成年女性的真实自拍照图像。它包括有关主题外观、姿势、设置、灯光和技术细节的详细规范，以确保高质量和逼真的图像，同时遵守身份锁定和无徽标或文本等限制。

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
  "类别": "CAR_PASSENGER_SEAT_SELFIE",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "将身份准确锁定到参考图像。保留面部比例、特征和肤色。仅限 21 岁以上成人。"
  },
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其人长相（匹配参考）。",
    “头发”：{
      "color": "匹配参考。",
      "style": "宽松，略带风感",
      "texture": "可见单独的股线；一些飞散的部分",
      "movement": "头发以微妙的动作搁在肩上"
    },
    “脸”：{
      "eyes": "精确的参考形状；窗户发出明亮的聚光灯",
      "skin_details": "毛孔可见，温暖的光芒；没有平滑",
      "micro_details": "准确保留标记"
    },
    “服装”：{
      "top": "休闲黑色上衣或连帽衫（无徽标/文字）",
      "texture": "棉织可见"
    },
    “配件”：{
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "手持自拍氛围（不展示手机）",
    "orientation": "半身特写",
    "head_position": "稍微向窗光倾斜",
    "limbs": "一只手臂意味着将相机保持在画面之外",
    "gaze": "直接目光接触",
    "express": "自信放松的撅嘴（微妙，不夸张）"
  },
  “设置”：{
    "environment": "汽车乘客座椅",
    “背景元素”：[
      “座椅面料纹理清晰可见”，
      “窗户光条纹”，
      “外面的风景模糊（没有可读的标志）”
    ],
    "深度": "脸部锐利；背景柔和模糊"
  },
  “相机”：{
    "shot_type": "自拍风格肖像",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "24-28mm 智能手机宽",
    "framing": "3:4 或 4:5，胸部向上的裁剪",
    “focus”：“眼睛锐利；肩膀轻微下垂”
  },
  “照明”：{
    “来源”：“黄金时刻阳光透过车窗”，
    "direction": "侧面/正面温暖",
    "highlights": "脸颊和头发上的暖色高光",
    "shadows": "柔和的下巴阴影，逼真的对比度"
  },
  “心情和表达”：{
    "tone": "随意、自信、坦诚",
    "氛围": "温馨的旅行时刻"
  },
  “风格和现实主义”：{
    "style": "真实感社交自拍",
    “imperfections”：“轻微噪点，轻微不完美的白平衡”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    "noise": "阴影中的轻微颗粒",
    “模式变体”：{
      "amateur": "取景稍微晃动，远离脸部的微妙运动模糊，类似手机的 HDR"，
      “pro”：“更清晰的曝光和更清晰的微对比度，仍然逼真”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “no_read_outside_signs”：true
  },
  “否定提示”：[
    “身份漂移”、“面孔变形”、
    “变形的汽车内饰”、“重复的主题”、
    “额外的手指”，“糟糕的解剖结构”，
    “可读文本”、“徽标”、“水印”、
    “塑料皮肤”、“过度平滑”
  ]
}
```

---

## English Original

### Title

Passenger Seat Car Selfie (golden hour, candid)

### Description

This prompt is designed to generate a photorealistic selfie image of an adult Turkish-looking woman in the car passenger seat during golden hour. It includes detailed specifications on subject appearance, pose, setting, lighting, and technical details to ensure high-quality and realistic imagery while adhering to constraints like identity lock and no logos or text.

### Prompt

```md
{
  "category": "CAR_PASSENGER_SEAT_SELFIE",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Preserve face proportions, features, and skin tone. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking (match reference).",
    "hair": {
      "color": "Match reference.",
      "style": "Loose, slightly wind-touched",
      "texture": "Individual strands visible; a few flyaways",
      "movement": "Hair resting on shoulder with subtle motion"
    },
    "face": {
      "eyes": "Exact reference shape; bright catchlights from window",
      "skin_details": "Pores visible, warm glow; no smoothing",
      "micro_details": "Preserve marks exactly"
    },
    "clothing": {
      "top": "Casual black top or hoodie (no logos/text)",
      "texture": "Cotton weave visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Handheld selfie vibe (do not show phone)",
    "orientation": "Close-up to half-body",
    "head_position": "Slight tilt toward window light",
    "limbs": "One arm implied holding camera out of frame",
    "gaze": "Direct eye contact",
    "expression": "Confident relaxed pout (subtle, not exaggerated)"
  },
  "setting": {
    "environment": "Car passenger seat",
    "background_elements": [
      "Seat fabric texture visible",
      "Window light streaks",
      "Outside scenery blurred (no readable signs)"
    ],
    "depth": "Face sharp; background soft blur"
  },
  "camera": {
    "shot_type": "Selfie-style portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "24-28mm smartphone wide",
    "framing": "3:4 or 4:5, chest-up crop",
    "focus": "Eyes sharp; slight fall-off at shoulders"
  },
  "lighting": {
    "source": "Golden hour sunlight through car window",
    "direction": "Side/front warm",
    "highlights": "Warm highlight on cheek and hair",
    "shadows": "Soft under-chin shadow, realistic contrast"
  },
  "mood_and_expression": {
    "tone": "Casual, confident, candid",
    "atmosphere": "Warm travel moment"
  },
  "style_and_realism": {
    "style": "Photorealistic social selfie",
    "imperfections": "Mild noise, slight imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild grain in shadows",
    "mode_variants": {
      "amateur": "Slightly shaky framing, subtle motion blur away from face, phone-like HDR",
      "pro": "Cleaner exposure and sharper micro-contrast, still realistic"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_outside_signs": true
  },
  "negative_prompt": [
    "identity drift", "face morphing",
    "warped car interior", "duplicate subject",
    "extra fingers", "bad anatomy",
    "readable text", "logos", "watermark",
    "plastic skin", "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [passenger-seat-car-selfie-golden-hour-candid](https://prompts.chat/prompts/passenger-seat-car-selfie-golden-hour-candid) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:51:23.266Z |
