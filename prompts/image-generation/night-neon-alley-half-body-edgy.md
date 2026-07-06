---
id: "cmjok4shi0009ie0476nd4hui"
slug: "night-neon-alley-half-body-edgy"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/night-neon-alley-half-body-edgy"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "59cd60879d5e2e19768a987c6f2454524c9294141bd0e66eef77b1f4b0f0e13c"
upstream_updated_at: "2025-12-29T10:40:41.294Z"
---
# 夜霓虹巷（半身、前卫）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[night-neon-alley-half-body-edgy](https://prompts.chat/prompts/night-neon-alley-half-body-edgy)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示提供了详细且结构化的 JSON 格式，用于在霓虹灯照亮的小巷中创建逼真的夜生活肖像。它包括主题人口统计、姿势、设置、相机细节、灯光、情绪、风格和技术限制的规范，以确保高质量和逼真的图像。非常适合寻求捕捉前卫时尚的城市场景的艺术家和摄影师。

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
  "类别": "NEON_NIGHT_ALLEY_HALF_BODY",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "宽松、略显凌乱的夜间发型",
      "texture": "线可见，轻微光泽",
      “运动”：“一些飞翔的地方捕捉到霓虹灯边缘的光”
    },
    “脸”：{
      "eyes": "直接目光接触，锐利的聚光灯",
      "makeup": "夜晚微妙的魅力，但不厚重",
      "skin_details": "真实毛孔，轻微光泽，无平滑"
    },
    “服装”：{
      "outfit": "前卫的黑色夹克/上衣，无徽标",
      "fabric": "具有逼真质感的仿皮革或哑光纺织品"
    },
    “配件”：{
      “珠宝”：[
        《小银圈》
      ]
    }
  },
  “姿势”：{
    "type": "半身靠墙",
    "orientation": "肩膀靠墙，下巴微微抬起",
    "hands": "一只手放在夹克口袋里，另一只手轻轻触碰衣领",
    "gaze": "强烈的眼神交流，微妙的傻笑",
    "position": "放松自信"
  },
  “设置”：{
    "environment": "夜晚霓虹灯照亮的小巷",
    “背景元素”：[
      “霓虹灯发光（没有可读的文字）”，
      “湿地反射”，
      “柔和的雾霾看起来像是大气，而不是烟雾”
    ],
    “深度”：“主体清晰，背景散景霓虹灯”
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "35-50mm pro 或 26mm 手机夜间模式变体",
    "framing": "4:5，不对称构图",
    “焦点”：“眼睛锐利，霓虹灯模糊”
  },
  “照明”：{
    "source": "霓虹实用灯+氛围城市",
    "direction": "霓虹灯的侧边，街道弹跳的柔和填充",
    "highlights": "头发和脸颊边缘受控的霓虹灯边缘",
    “shadows”：“丰富、逼真的夜间对比度”
  },
  “心情和表达”：{
    "tone": "前卫、自信、时尚",
    "express": "平静强度",
    "atmosphere": "城市之夜，电影般的"
  },
  “风格和现实主义”：{
    "style": "逼真的夜生活肖像",
    "fidelity": "高细节，允许真实的噪音"
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "低光颗粒（真实）",
    "motion_blur": "脸上没有；仅在背景散景中允许轻微"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “可读的霓虹灯标志”，
    “标志”，
    “水印”，
    “塑料皮肤”，
    “cgi 外观”，
    “额外的手指”，
    “扭曲的脸”，
    “重复主题”
  ]
}
```

---

## English Original

### Title

Night Neon Alley (half-body, edgy)

### Description

This prompt provides a detailed and structured JSON format for creating a photorealistic nightlife portrait in a neon-lit alley. It includes specifications for subject demographics, pose, setting, camera details, lighting, mood, style, and technical constraints to ensure a high-quality and realistic image. Ideal for artists and photographers seeking to capture an edgy and stylish urban scene.

### Prompt

```md
{
  "category": "NEON_NIGHT_ALLEY_HALF_BODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose, slightly messy night-out hair",
      "texture": "Strands visible, slight shine",
      "movement": "A few flyaways catch neon rim light"
    },
    "face": {
      "eyes": "Direct eye contact, sharp catchlights",
      "makeup": "Night-out subtle glam, not heavy",
      "skin_details": "Real pores, slight sheen, no smoothing"
    },
    "clothing": {
      "outfit": "Edgy black jacket/top, no logos",
      "fabric": "Leather-like or matte textile with realistic texture"
    },
    "accessories": {
      "jewelry": [
        "Small silver hoops"
      ]
    }
  },
  "pose": {
    "type": "Half-body wall lean",
    "orientation": "Shoulder against wall, chin slightly raised",
    "hands": "One hand in jacket pocket, other lightly touching collar",
    "gaze": "Strong eye contact, subtle smirk",
    "posture": "Relaxed confident"
  },
  "setting": {
    "environment": "Neon-lit alley at night",
    "background_elements": [
      "Neon glow (no readable text)",
      "Wet ground reflections",
      "Soft haze that reads as atmosphere, not smoke"
    ],
    "depth": "Subject sharp, background bokeh neon"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone night mode variant",
    "framing": "4:5, asymmetrical composition",
    "focus": "Eyes sharp, neon blur behind"
  },
  "lighting": {
    "source": "Neon practical lights + ambient city",
    "direction": "Side rim from neon, soft fill from street bounce",
    "highlights": "Controlled neon rim on hair and cheek edge",
    "shadows": "Rich, realistic night contrast"
  },
  "mood_and_expression": {
    "tone": "Edgy, confident, stylish",
    "expression": "Calm intensity",
    "atmosphere": "Urban night, cinematic"
  },
  "style_and_realism": {
    "style": "Photorealistic nightlife portrait",
    "fidelity": "High detail, realistic noise allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Low-light grain (realistic)",
    "motion_blur": "None on face; slight allowed in background bokeh only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable neon signs",
    "logo",
    "watermark",
    "plastic skin",
    "cgi look",
    "extra fingers",
    "warped face",
    "duplicate subject"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [night-neon-alley-half-body-edgy](https://prompts.chat/prompts/night-neon-alley-half-body-edgy) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-29T10:40:41.294Z |
