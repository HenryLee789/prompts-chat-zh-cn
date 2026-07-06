---
id: "cmjok4xx20019ie04glixush0"
slug: "hotel-hallway-fit-check-mirror-vibe-no-phone-shown"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/hotel-hallway-fit-check-mirror-vibe-no-phone-shown"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "dce030c3bc12915b67738c36d3bacc691ec4e14fa56a4449b60df015b56059f2"
upstream_updated_at: "2025-12-27T18:41:59.448Z"
---
# 酒店走廊适合检查（镜子氛围，未显示电话）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[hotel-hallway-fit-check-mirror-vibe-no-phone-shown](https://prompts.chat/prompts/hotel-hallway-fit-check-mirror-vibe-no-phone-shown)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成一个成年女性在酒店走廊进行合身检查的逼真图像。该图像捕捉到了一个坦率而冷静的时刻，特别关注头发、服装、配饰和灯光等细节。该设置强调别致和奢华的旅行氛围，技术规格确保高品质和现实的结果。限制包括保持主体的身份并避免图像中出现任何可识别的徽标或文本。

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
  "类别": "HOTEL_HALLWAY_FIT_CHECK",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "保留准确的参考身份。仅限 21 岁以上成人。不得更改面孔/种族。"
  },
  “主题”：{
    "demographics": "成年女性，21-29，匹配参考身份。",
    “头发”：{
      "color": "匹配参考。",
      "style": "光滑的马尾辫或宽松的波浪",
      “texture”：“自然的股线，温和的飞扬”
    },
    “脸”：{
      "eyes": "精确的参考眼睛；自信的目光",
      "skin_details": "纹理自然，毛孔清晰可见"
    },
    “服装”：{
      "outfit": "最小的黑色旅行装（无徽标/文字）",
      "fabric": "织物组织可见，有细微皱纹"
    },
    “配件”：{
      “珠宝”：[
        《小银圈》
      ],
      "bag": "小单肩包（无标志）"
    }
  },
  “姿势”：{
    "type": "适合检查坦率",
    "orientation": "全身或四分之三",
    "hands": "一只手调整夹克下摆；另一只手拿着包带",
    "gaze": "看着镜面反射（看不到手机）",
    "express": "中立自信"
  },
  “设置”：{
    "environment": "酒店走廊",
    “背景元素”：[
      “温暖的壁灯”，
      “地毯纹理清晰可见”，
      “门框模糊（无法辨认房间号）”
    ],
    “深度”：“主体清晰；背景柔和模糊”
  },
  “相机”：{
    "shot_type": "全身走廊肖像",
    "angle": "对于高度或视线水平来说略低",
    "focal_length_equivalent": "26mm 手机或 35mm 编辑",
    “取景”：“4：5”，
    “focus”：“脸型和服装都很犀利”
  },
  “照明”：{
    "source": "温暖的走廊壁灯",
    "direction": "顶部/侧面温暖",
    "highlights": "头发上的温暖边缘",
    “阴影”：“柔和”
  },
  “心情和表达”：{
    "tone": "旅行潇洒，静谧奢华",
    "atmosphere": "坦诚但沉着"
  },
  “风格和现实主义”：{
    "style": "照片级真实生活方式",
    “imperfections”：“轻微噪音，允许轻微倾斜”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    "noise": "温和的室内颗粒",
    “模式变体”：{
      "amateur": "手持取景稍微弯曲，颗粒轻微，作物不完美",
      “pro”：“干净的编辑曝光、清晰的细节、受控的亮点”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “无可读数字”：true
  },
  “否定提示”：[
    “可读门牌号”，
    “可读文本”，
    “标志”，
    “水印”，
    “身份漂移”，
    “变脸”，
    “额外的手指”，
    “扭曲的手”，
    “塑料皮肤”，
    “过度平滑”
  ]
}
```

---

## English Original

### Title

Hotel Hallway Fit Check (mirror vibe, no phone shown)

### Description

This prompt generates a photorealistic image of an adult woman performing a fit check in a hotel hallway. The image captures a candid yet composed moment with specific attention to details such as hair, clothing, accessories, and lighting. The setting emphasizes a chic and luxurious travel vibe, with technical specifications ensuring a high-quality and realistic result. Constraints include maintaining the subject's identity and avoiding any identifiable logos or text in the image.

### Prompt

```md
{
  "category": "HOTEL_HALLWAY_FIT_CHECK",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve exact reference identity. Adult 21+ only. No face/ethnicity changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Sleek ponytail or loose waves",
      "texture": "Natural strands, mild flyaways"
    },
    "face": {
      "eyes": "Exact reference eyes; confident gaze",
      "skin_details": "Natural texture, pores visible"
    },
    "clothing": {
      "outfit": "Minimal black travel outfit (no logos/text)",
      "fabric": "Fabric weave visible, subtle wrinkles"
    },
    "accessories": {
      "jewelry": [
        "Small silver hoops"
      ],
      "bag": "Small shoulder bag (no logos)"
    }
  },
  "pose": {
    "type": "Fit-check candid",
    "orientation": "Full-body or three-quarter",
    "hands": "One hand adjusting jacket hem; other holding bag strap",
    "gaze": "Looking at mirror reflection (no phone visible)",
    "expression": "Neutral confident"
  },
  "setting": {
    "environment": "Hotel hallway",
    "background_elements": [
      "Warm wall sconces",
      "Carpet texture visible",
      "Door frames blurred (no room numbers readable)"
    ],
    "depth": "Subject sharp; background softly blurred"
  },
  "camera": {
    "shot_type": "Full-body hallway portrait",
    "angle": "Slightly low for height OR eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5",
    "focus": "Face and outfit sharp"
  },
  "lighting": {
    "source": "Warm hallway sconces",
    "direction": "Top/side warm",
    "highlights": "Warm rim on hair",
    "shadows": "Soft"
  },
  "mood_and_expression": {
    "tone": "Travel chic, quiet luxury",
    "atmosphere": "Candid but composed"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle",
    "imperfections": "Slight noise, mild tilt allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild indoor grain",
    "mode_variants": {
      "amateur": "Slightly crooked handheld framing, mild grain, imperfect crop",
      "pro": "Clean editorial exposure, crisp detail, controlled highlights"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_numbers": true
  },
  "negative_prompt": [
    "readable door numbers",
    "readable text",
    "logos",
    "watermark",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "plastic skin",
    "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [hotel-hallway-fit-check-mirror-vibe-no-phone-shown](https://prompts.chat/prompts/hotel-hallway-fit-check-mirror-vibe-no-phone-shown) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:41:59.448Z |
