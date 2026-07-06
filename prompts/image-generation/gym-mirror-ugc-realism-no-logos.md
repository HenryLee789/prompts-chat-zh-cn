---
id: "cmjodsen5001rjp04am6f9nw5"
slug: "gym-mirror-ugc-realism-no-logos"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/gym-mirror-ugc-realism-no-logos"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "ff17cd4c4fca48f6e50d4967ef73b9edfde8ebd86a2933587e0a0af0fbbdd23e"
upstream_updated_at: "2025-12-27T17:03:15.659Z"
---
# 健身房镜子（UGC 现实主义，无徽标）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[gym-mirror-ugc-realism-no-logos](https://prompts.chat/prompts/gym-mirror-ugc-realism-no-logos)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

生成逼真的健身房自拍照图像，其中包含一位穿着运动服、长相土耳其的运动型女性，没有可见的徽标或文字。图像应使用特定的环境和摄影元素（例如健身房灯光和自然表情）来捕捉坦率、积极的时刻，以增强真实感。

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
  "类别": "GYM_MIRROR_UGC",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其长相，运动型。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "高马尾辫，略显凌乱",
      "texture": "可见丝线，汗水触碰的飘逸物",
      “movement”：“几缕头发紧贴在额头附近”
    },
    “脸”：{
      “眼睛”：“明亮，充满活力”，
      "skin_details": "真实的毛孔，微妙的汗水光泽",
      “妆容”：“简约、自然”
    },
    “服装”：{
      "outfit": "最小运动服套装（无徽标/文字）",
      "fit": "逼真的运动贴合度，微妙的面料张力",
      "texture": "可见针织面料"
    },
    “配件”：{
      "jewelry": ["小银圈（可选）"]
    }
  },
  “姿势”：{
    "type": "镜像锻炼自拍氛围（手机未直接显示）",
    "orientation": "半身",
    "hands": "一只手臂放松，另一只手臂轻轻弯曲（自然，不是极端）",
    "gaze": "镜像眼神接触",
    “表情”：“小得意的微笑”
  },
  “设置”：{
    "environment": "健身房更衣室区域",
    “背景元素”：[
      “带有逼真污迹的镜子”，
      “柔和的荧光灯头顶照明”，
      “设备模糊”
    ],
    “深度”：“脸部+躯干锐利；背景柔和”
  },
  “相机”：{
    "shot_type": "半身镜人像",
    "angle": "休闲自拍典型的稍高角度",
    "focal_length_equivalent": "24-28mm 手机宽",
    “取景”：“4：5”，
    “focus”：“脸部锐利，背景稍微柔和”
  },
  “照明”：{
    "source": "健身房上方荧光灯照明",
    "direction": "自上而下，镜子温和填充",
    "highlights": "逼真的汗水光泽亮点",
    “shadows”：“下巴下柔软”
  },
  “心情和表达”：{
    "tone": "有动力、有共鸣、坦诚",
    "express": "骄傲而友好"
  },
  “风格和现实主义”：{
    "style": "真实的 UGC",
    “imperfections”：“轻微噪音，不完美的白平衡”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “噪音”：“轻微”，
    "motion_blur": "最小"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “品牌标志”，“可读文字”，
    “额外的手指”，“扭曲的镜子”，
    “塑料皮肤”、“cgi 外观”
  ]
}
```

---

## English Original

### Title

Gym Mirror (UGC realism, no logos)

### Description

Generate a realistic gym selfie image featuring an athletic Turkish-looking woman in an activewear set without visible logos or text. The image should capture a candid, motivated moment using specific environmental and photographic elements to enhance realism, such as gym lighting and natural expressions.

### Prompt

```md
{
  "category": "GYM_MIRROR_UGC",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, athletic.",
    "hair": {
      "color": "Dark brown",
      "style": "High ponytail, slightly messy",
      "texture": "Strands visible, sweat-touched flyaways",
      "movement": "A few strands cling near forehead"
    },
    "face": {
      "eyes": "Bright, energized",
      "skin_details": "Real pores, subtle sweat sheen",
      "makeup": "Minimal, natural"
    },
    "clothing": {
      "outfit": "Minimal activewear set (no logos/text)",
      "fit": "Realistic athletic fit, subtle fabric tension",
      "texture": "Fabric knit visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional)"]
    }
  },
  "pose": {
    "type": "Mirror workout selfie vibe (phone not shown directly)",
    "orientation": "Half-body",
    "hands": "One arm relaxed, the other lightly flexed (natural, not extreme)",
    "gaze": "Mirror eye contact",
    "expression": "Small proud smile"
  },
  "setting": {
    "environment": "Gym locker area",
    "background_elements": [
      "Mirrors with realistic smudges",
      "Soft fluorescent overhead lighting",
      "Equipment blurred"
    ],
    "depth": "Face + torso sharp; background softened"
  },
  "camera": {
    "shot_type": "Half-body mirror portrait",
    "angle": "Slightly high angle typical of casual selfie",
    "focal_length_equivalent": "24-28mm phone wide",
    "framing": "4:5",
    "focus": "Sharp on face, slightly softer on background"
  },
  "lighting": {
    "source": "Fluorescent overhead gym lighting",
    "direction": "Top-down with mild fill from mirrors",
    "highlights": "Realistic sweat sheen highlights",
    "shadows": "Soft under chin"
  },
  "mood_and_expression": {
    "tone": "Motivated, relatable, candid",
    "expression": "Proud and friendly"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Mild noise, imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "motion_blur": "Minimal"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "brand logos", "readable text",
    "extra fingers", "warped mirror",
    "plastic skin", "cgi look"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [gym-mirror-ugc-realism-no-logos](https://prompts.chat/prompts/gym-mirror-ugc-realism-no-logos) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T17:03:15.659Z |
