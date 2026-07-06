---
id: "cmjodrqqb001jjp04x5ylermz"
slug: "snowy-street-cozy-winter-fit-cinematic"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/snowy-street-cozy-winter-fit-cinematic"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "bd4324bf452494a5de389b196c237d27b92d5bee570985cfc2ea1176e245deb7"
upstream_updated_at: "2025-12-29T10:44:44.162Z"
---
# Snowy Street Cosy（适合冬季，电影）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[snowy-street-cozy-winter-fit-cinematic](https://prompts.chat/prompts/snowy-street-cozy-winter-fit-cinematic)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成一个在白雪皑皑的街道上的成年女性的详细且电影般的冬季肖像。身份被锁定以匹配参考图像，专注于自然纹理、舒适的服装和逼真的风格。该场景捕捉了一个坦率的时刻，特别关注灯光、情绪和环境元素，确保了温暖而亲切的冬季氛围。

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
  "类别": "SNOWY_STREET_WINTER_CANDID",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "将身份准确锁定到参考图像。仅限 21 岁以上成人。"
  },
  “主题”：{
    "demographics": "成年女性，21-29，匹配参考身份。",
    “头发”：{
      "color": "匹配参考。",
      "style": "头发塞进围巾/外套里，有几缕可见",
      "texture": "自然股线，轻微的静态飞散",
      "movement": "最小的运动；冷空气现实主义"
    },
    “脸”：{
      "eyes": "精确的参考眼睛；因寒冷而轻微眯眼",
      "skin_details": "自然纹理；脸颊轻微发红（微妙，真实）",
      "micro_details": "保留标记"
    },
    “服装”：{
      "outerwear": "冬季外套+围巾+无檐小便帽（无徽标/文字）",
      "fabric": "羊毛针织纹理可见；外套上有微小的雪斑"
    },
    “配件”：{
      “珠宝”：[
        “可选银箍（可能被围巾隐藏）”
      ]
    }
  },
  “姿势”：{
    "type": "户外偷拍",
    "orientation": "半身",
    "hands": "手将围巾靠近下巴（手套可选，无品牌）",
    "gaze": "直接的目光接触，舒适的微笑",
    「表情」：「温暖、俏皮」
  },
  “设置”：{
    "environment": "黄昏雪街",
    “背景元素”：[
      “飘落的雪花（细颗粒，不是雾）”，
      “街灯散景”，
      “柔和的轮廓模糊（没有可辨认的面孔）”
    ],
    “深度”：“脸部锐利；背景奶油色散景”
  },
  “相机”：{
    "shot_type": "半身冬季肖像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "35-50mm pro 或 26mm 手机夜间模式",
    “取景”：“4：5”，
    "focus": "目光锐利；雪花柔和模糊"
  },
  “照明”：{
    "source": "路灯 + 环境黄昏",
    "direction": "软顶/侧发光",
    "highlights": "头发/脸颊上的暖色亮点",
    “shadows”：“柔和、电影般的冬季对比”
  },
  “心情和表达”：{
    "tone": "舒适、电影般、可爱相关",
    "atmosphere": "冬天的坦诚"
  },
  “风格和现实主义”：{
    "style": "照片级真实生活方式",
    "imperfections": "允许低光颗粒"
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    "noise": "中等低光颗粒",
    “模式变体”：{
      "amate": "手机夜间模式感觉：轻微颗粒、轻微倾斜、不完美的取景",
      “pro”：“更清晰的电影曝光、受控的高光、浅景深”
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
    “造雾机”、
    “烟”，
    “身份漂移”，
    “变脸”，
    “额外的手指”，
    “扭曲的手”，
    “可读文本”，
    “标志”，
    “水印”，
    “塑料皮肤”，
    “过度平滑”
  ]
}
```

---

## English Original

### Title

Snowy Street Cozy (winter fit, cinematic)

### Description

This prompt generates a detailed and cinematic winter portrait of an adult woman on a snowy street. The identity is locked to match a reference image, focusing on natural textures, cozy outfits, and a photorealistic style. The scene captures a candid moment with specific attention to lighting, mood, and environmental elements, ensuring a warm and relatable winter atmosphere.

### Prompt

```md
{
  "category": "SNOWY_STREET_WINTER_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Hair tucked into scarf/coat with a few strands visible",
      "texture": "Natural strands, slight static flyaways",
      "movement": "Minimal movement; cold air realism"
    },
    "face": {
      "eyes": "Exact reference eyes; slight squint from cold",
      "skin_details": "Natural texture; slight redness on cheeks (subtle, realistic)",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outerwear": "Winter coat + scarf + beanie (no logos/text)",
      "fabric": "Wool knit texture visible; tiny snow specks on coat"
    },
    "accessories": {
      "jewelry": [
        "Silver hoops optional (may be hidden by scarf)"
      ]
    }
  },
  "pose": {
    "type": "Outdoor candid",
    "orientation": "Half-body",
    "hands": "Hands holding scarf near chin (gloves optional, unbranded)",
    "gaze": "Direct eye contact, cozy smile",
    "expression": "Warm, playful"
  },
  "setting": {
    "environment": "Snowy street at dusk",
    "background_elements": [
      "Falling snowflakes (fine particles, not fog)",
      "Streetlight bokeh",
      "Soft silhouettes blurred (no identifiable faces)"
    ],
    "depth": "Face sharp; background creamy bokeh"
  },
  "camera": {
    "shot_type": "Half-body winter portrait",
    "angle": "Eye level",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone night mode",
    "framing": "4:5",
    "focus": "Eyes sharp; snowflakes softly blurred"
  },
  "lighting": {
    "source": "Streetlights + ambient dusk",
    "direction": "Soft top/side glow",
    "highlights": "Warm highlights on hair/cheeks",
    "shadows": "Soft, cinematic winter contrast"
  },
  "mood_and_expression": {
    "tone": "Cozy, cinematic, cute-relatable",
    "atmosphere": "Winter candid"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle",
    "imperfections": "Low-light grain allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Moderate low-light grain",
    "mode_variants": {
      "amateur": "Phone night-mode feel: mild grain, slight tilt, imperfect framing",
      "pro": "Cleaner cinematic exposure, controlled highlights, shallow DOF"
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
    "fog machine",
    "smoke",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "readable text",
    "logos",
    "watermark",
    "plastic skin",
    "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [snowy-street-cozy-winter-fit-cinematic](https://prompts.chat/prompts/snowy-street-cozy-winter-fit-cinematic) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-29T10:44:44.162Z |
