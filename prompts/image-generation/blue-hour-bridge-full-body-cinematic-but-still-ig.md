---
id: "cmjok4vsc000vie04sp3ys0bh"
slug: "blue-hour-bridge-full-body-cinematic-but-still-ig"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/blue-hour-bridge-full-body-cinematic-but-still-ig"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "9d9414df432993ae6dd58301f6a2b45c5005b2ef951f477f8fbd8396f2a22b38"
upstream_updated_at: "2025-12-27T18:55:46.447Z"
---
# 《Blue Hour Bridge》（全身，电影感，但还是IG）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[blue-hour-bridge-full-body-cinematic-but-still-ig](https://prompts.chat/prompts/blue-hour-bridge-full-body-cinematic-but-still-ig)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

该提示描述了蓝色时段一位成年女性在桥上的详细摄影场景。它包括对拍摄对象的外观、姿势、设置、相机细节、灯光和情绪的具体说明。该提示旨在创建具有逼真编辑风格的电影级优质图像，确保没有可见的徽标或文本。包含约束和负面提示以保持场景的质量和真实感。

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
  "类别": "BLUE_HOUR_BRIDGE_FULLBODY",
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其长相，冷静自信的氛围。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "松散的波浪，微风拂动",
      "texture": "单独的股线可见",
      "movement": "发尖的小动作"
    },
    “脸”：{
      "eyes": "平静的直视",
      "skin_details": "自然纹理，无平滑"
    },
    “服装”：{
      "outfit": "简约黑色外套 + 合身上衣，无徽标",
      "fabric": "外套纹理可见，轻微皱纹"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "全身靠在栏杆上",
    "orientation": "身体倾斜，头部转向相机",
    "hands": "手放在栏杆上，手指正确",
    "gaze": "直接目光接触",
    “表情”：“中性冷静自信”
  },
  “设置”：{
    "environment": "蓝色时刻的桥梁",
    “背景元素”：[
      “城市灯光散景”，
      “凉爽的黄昏氛围”，
      “栏杆纹理清晰可见”
    ],
    “深度”：“主体清晰，背景散景”
  },
  “相机”：{
    "shot_type": "全身肖像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "35mm 社论",
    "framing": "4:5，主体偏离中心",
    “focus”：“脸部锐利，背景奶油色”
  },
  “照明”：{
    "source": "环境黄昏+城市光反射",
    "direction": "来自环境的软前填充",
    "highlights": "受控、微妙"
  },
  “心情和表达”：{
    "tone": "电影般的、平静的、优质的",
    "atmosphere": "蓝色时刻梦幻现实主义"
  },
  “风格和现实主义”：{
    "style": "真实照片社交/社论",
    “imperfections”：“允许轻微的低光噪音”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "轻度低光颗粒"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “假天际线”，“cgi”，
    “塑料皮肤”、“过度平滑”、
    “额外的手指”，“扭曲的栏杆”，
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

“Blue Hour Bridge” (full-body, cinematic but still IG)

### Description

This prompt describes a detailed photographic scene of an adult woman on a bridge during the blue hour. It includes specific instructions for the subject's appearance, pose, setting, camera details, lighting, and mood. The prompt aims to create a cinematic, premium image with a photorealistic editorial style, ensuring no logos or text are visible. Constraints and negative prompts are included to maintain the quality and realism of the scene.

### Prompt

```md
{
  "category": "BLUE_HOUR_BRIDGE_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, calm confident vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, slightly wind-touched",
      "texture": "Individual strands visible",
      "movement": "Small motion in hair tips"
    },
    "face": {
      "eyes": "Calm direct gaze",
      "skin_details": "Natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Minimal black coat + fitted top, no logos",
      "fabric": "Coat texture visible, slight wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body leaning on railing",
    "orientation": "Body angled, head turned to camera",
    "hands": "Hands resting on railing, fingers correct",
    "gaze": "Direct eye contact",
    "expression": "Neutral calm confidence"
  },
  "setting": {
    "environment": "Bridge at blue hour",
    "background_elements": [
      "City lights bokeh",
      "Cool dusk ambience",
      "Railing texture visible"
    ],
    "depth": "Subject sharp, background bokeh"
  },
  "camera": {
    "shot_type": "Full-body portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "35mm editorial",
    "framing": "4:5, subject off-center",
    "focus": "Face sharp, background creamy"
  },
  "lighting": {
    "source": "Ambient dusk + city light bounce",
    "direction": "Soft front fill from environment",
    "highlights": "Controlled, subtle"
  },
  "mood_and_expression": {
    "tone": "Cinematic, calm, premium",
    "atmosphere": "Blue hour dreamy realism"
  },
  "style_and_realism": {
    "style": "Photoreal social/editorial",
    "imperfections": "Slight low-light noise allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild low-light grain"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fake skyline", "cgi",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped railing",
    "readable text", "logos", "watermark"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [blue-hour-bridge-full-body-cinematic-but-still-ig](https://prompts.chat/prompts/blue-hour-bridge-full-body-cinematic-but-still-ig) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:55:46.447Z |
