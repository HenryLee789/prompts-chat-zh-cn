---
id: "cmjok4v18000rie04x4wkpl0e"
slug: "restaurant-candle-close-up-intimate-not-explicit"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/restaurant-candle-close-up-intimate-not-explicit"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "12c89b93dfa0e8a0aa7f992e7c58baba8588255c836c2f4dc53c946c0eaaa857"
upstream_updated_at: "2025-12-27T18:58:25.639Z"
---
# 餐厅蜡烛特写（亲密，不露骨）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[restaurant-candle-close-up-intimate-not-explicit](https://prompts.chat/prompts/restaurant-candle-close-up-intimate-not-explicit)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成烛光餐厅环境中成年女性的详细、逼真的肖像，突出了亲密和优雅的特征。它指定了人口统计、姿势、背景、摄像机细节和灯光，以营造温暖的电影氛围。约束确保图像真实并避免人为元素。

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
  "类别": "CANDLELIT_RESTAURANT_CLOSEUP",
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "宽松、柔和的风格",
      “texture”：“真实的股线，柔和的光泽”
    },
    “脸”：{
      “眼睛”：“柔和的目光接触，温暖的亮点”，
      “妆容”：“自然魅力，微妙眼线”，
      "skin_details": "真实的毛孔，蜡烛的温暖光芒"
    },
    “服装”：{
      "outfit": "简单优雅的黑色上衣/连衣裙（无徽标）"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "特写坐姿",
    "orientation": "面向相机",
    "hands": "一只手支撑下巴，手指放松",
    "gaze": "直接目光接触",
    “表情”：“平静自信的微微笑”
  },
  “设置”：{
    "environment": "餐厅餐桌",
    “背景元素”：[
      “蜡烛火焰散景”，
      “玻璃反射”，
      “柔和的背景模糊（没有可读的标牌）”
    ],
    “深度”：“脸部锐利，背景奶油色”
  },
  “相机”：{
    "shot_type": "特写肖像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "50-85mm 专业感觉或 26mm 手机版本",
    "framing": "4:5，紧密裁剪",
    “focus”：“眼睛极其锐利”
  },
  “照明”：{
    "source": "蜡烛+温暖的环境",
    "direction": "暖侧面/正面",
    "highlights": "嘴唇和眼睛上的柔和镜面反射",
    “shadows”：“温柔、讨人喜欢”
  },
  “心情和表达”：{
    "tone": "亲密、优雅、自信",
    “气氛”：“温暖，电影般”
  },
  “风格和现实主义”：{
    "style": "照片级 IG 肖像",
    "imperfections": "可接受轻微颗粒"
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
    “假火焰”、“cgi”、
    “塑料皮肤”、“过度平滑”、
    “多余的手指”、“扭曲的手”、
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Restaurant Candle Close-up (intimate, not explicit)

### Description

This prompt generates a detailed, photorealistic portrait of an adult woman in a candlelit restaurant setting, highlighting intimate and elegant features. It specifies demographics, pose, setting, camera details, and lighting to create a warm, cinematic atmosphere. Constraints ensure the image is realistic and avoids artificial elements.

### Prompt

```md
{
  "category": "CANDLELIT_RESTAURANT_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose, softly styled",
      "texture": "Real strands, gentle shine"
    },
    "face": {
      "eyes": "Soft eye contact, warm highlights",
      "makeup": "Natural glam, subtle liner",
      "skin_details": "Real pores, warm glow from candle"
    },
    "clothing": {
      "outfit": "Simple elegant black top/dress (no logos)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up seated",
    "orientation": "Face toward camera",
    "hands": "One hand supporting chin, fingers relaxed",
    "gaze": "Direct eye contact",
    "expression": "Calm confident micro-smile"
  },
  "setting": {
    "environment": "Restaurant table",
    "background_elements": [
      "Candle flame bokeh",
      "Glass reflections",
      "Soft background blur (no readable signage)"
    ],
    "depth": "Face sharp, background creamy"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "50-85mm pro feel or 26mm phone variant",
    "framing": "4:5, tight crop",
    "focus": "Eyes extremely sharp"
  },
  "lighting": {
    "source": "Candle + warm ambient",
    "direction": "Warm side/front",
    "highlights": "Soft specular on lips and eyes",
    "shadows": "Gentle, flattering"
  },
  "mood_and_expression": {
    "tone": "Intimate, elegant, confident",
    "atmosphere": "Warm, cinematic"
  },
  "style_and_realism": {
    "style": "Photoreal IG portrait",
    "imperfections": "Slight grain acceptable"
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
    "fake flames", "cgi",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [restaurant-candle-close-up-intimate-not-explicit](https://prompts.chat/prompts/restaurant-candle-close-up-intimate-not-explicit) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:58:25.639Z |
