---
id: "cmjok4xh10015ie04h8ia0cil"
slug: "subway-platform-street-candid-moody"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/subway-platform-street-candid-moody"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4e83e4310a7feb26d5effb602e1fc24231c57583a838b3c1029d252f4508b774"
upstream_updated_at: "2025-12-27T18:50:32.726Z"
---
# 地铁站台（街头坦率、喜怒无常）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[subway-platform-street-candid-moody](https://prompts.chat/prompts/subway-platform-street-candid-moody)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成地铁站台上成年女性的逼真街头风格肖像。它注重捕捉坦率的都市情绪，特别关注头发、服装和环境等细节。该提示确保保留主体的身份和真实特征，同时遵循约束以避免图像中出现文本和徽标。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "类别": "SUBWAY_PLATFORM_STREET_CANDID",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "准确使用参考图像身份。21 岁以上成人。保留面部比例和标记。无美化。"
  },
  “主题”：{
    "demographics": "成年女性，21-29，匹配参考身份。",
    “头发”：{
      "color": "匹配参考。",
      "style": "低马尾辫或松散的波浪卷在围巾后面",
      "texture": "真实的股线；轻微的卷曲；飞扬的",
      "movement": "最小的运动，平台微风微妙"
    },
    “脸”：{
      "eyes": "精确参考；反光聚光灯",
      "skin_details": "毛孔可见，阴影真实",
      "micro_details": "保留标记"
    },
    “服装”：{
      "outerwear": "最小的黑色外套或夹克（无徽标/文字）",
      "extras": "围巾可选（无带文字图案）",
      "fabric": "羊毛纹理可见"
    },
    “配件”：{
      "jewelry": ["小银圈（可选）"],
      "bag": "简单的手提包/单肩包（无徽标）"
    }
  },
  “姿势”：{
    "type": "坦诚等待",
    "orientation": "半身站在平台边缘附近（安全距离）",
    "head_position": "轻微倾斜，平静的姿势",
    "hands": "一只手握住包带，另一只手放在口袋里",
    "gaze": "以中立的自信看着镜头",
    “表情”：“冷静，略显严肃”
  },
  “设置”：{
    "environment": "地铁站台",
    “背景元素”：[
      “头顶荧光灯”，
      “背景中的火车模糊（没有可读的标牌）”，
      “具有真实磨损的平台瓷砖”
    ],
    "deep": "脸部锐利；背景柔和"
  },
  “相机”：{
    "shot_type": "街头风格肖像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "35mm 编辑或 26mm 手机",
    "framing": "4:5，平台引导线",
    "focus": "眼睛锐利，允许背景运动模糊"
  },
  “照明”：{
    "source": "荧光灯开销 + 环境光",
    "direction": "自上而下，温和填充",
    "highlights": "头发/皮肤的真实光泽",
    “shadows”：“柔和、略冷的地铁对比”
  },
  “心情和表达”：{
    "tone": "喜怒无常、都市、自信",
    "atmosphere": "真实的城市通勤坦诚"
  },
  “风格和现实主义”：{
    "style": "照片级真实街头肖像",
    “imperfections”：“背景中有噪点+轻微的运动模糊”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    "noise": "中等低光颗粒",
    “模式变体”：{
      "amateur": "类似手机的 HDR，轻微颗粒，不完美的取景",
      “pro”：“更清晰的曝光、受控的高光、清晰的主体分离”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “无可读标牌”：true
  },
  “否定提示”：[
    “可读标志”、“徽标”、“水印”、
    “身份漂移”、“面孔变形”、
    “多余的手指”、“扭曲的手”、
    “cgi”、“塑料皮肤”、“过度平滑”
  ]
}
```

---

## English Original

### Title

Subway Platform (street candid, moody)

### Description

This prompt generates a photorealistic street-style portrait of an adult woman on a subway platform. It focuses on capturing a candid, urban mood with specific attention to details like hair, clothing, and environment. The prompt ensures the preservation of the subject's identity and realistic features, while following constraints to avoid text and logos in the image.

### Prompt

```md
{
  "category": "SUBWAY_PLATFORM_STREET_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Use reference image identity exactly. Adult 21+. Preserve face proportions and marks. No beautification."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Low ponytail or loose waves tucked behind scarf",
      "texture": "Real strands; slight frizz; flyaways",
      "movement": "Minimal movement, platform breeze subtle"
    },
    "face": {
      "eyes": "Exact reference; reflective catchlights",
      "skin_details": "Pores visible, realistic shadows",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outerwear": "Minimal black coat or jacket (no logos/text)",
      "extras": "Scarf optional (no patterns with text)",
      "fabric": "Wool texture visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional)"],
      "bag": "Simple tote/shoulder bag (no logos)"
    }
  },
  "pose": {
    "type": "Candid waiting",
    "orientation": "Half-body standing near platform edge (safe distance)",
    "head_position": "Slight tilt, calm posture",
    "hands": "One hand holding bag strap, other in pocket",
    "gaze": "Looking toward camera with neutral confidence",
    "expression": "Calm, slightly serious"
  },
  "setting": {
    "environment": "Subway platform",
    "background_elements": [
      "Overhead fluorescent lights",
      "Train blur in background (no readable signage)",
      "Platform tiles with realistic wear"
    ],
    "depth": "Face sharp; background softened"
  },
  "camera": {
    "shot_type": "Street-style portrait",
    "angle": "Eye level",
    "focal_length_equivalent": "35mm editorial OR 26mm phone",
    "framing": "4:5, leading lines from platform",
    "focus": "Eyes sharp, background motion blur allowed"
  },
  "lighting": {
    "source": "Fluorescent overhead + ambient",
    "direction": "Top-down with mild fill",
    "highlights": "Realistic shine on hair/skin",
    "shadows": "Soft, slightly cool subway contrast"
  },
  "mood_and_expression": {
    "tone": "Moody, urban, confident",
    "atmosphere": "Real city commute candid"
  },
  "style_and_realism": {
    "style": "Photoreal street portrait",
    "imperfections": "Noise + slight motion blur in background"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Moderate low-light grain",
    "mode_variants": {
      "amateur": "Phone-like HDR, mild grain, imperfect framing",
      "pro": "Cleaner exposure, controlled highlights, crisp subject separation"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_signage": true
  },
  "negative_prompt": [
    "readable signs", "logos", "watermark",
    "identity drift", "face morphing",
    "extra fingers", "warped hands",
    "cgi", "plastic skin", "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [subway-platform-street-candid-moody](https://prompts.chat/prompts/subway-platform-street-candid-moody) |
| Category | Image Generation (`image-generation`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:50:32.726Z |
