---
id: "cmkfm57b70001jv04vyoumgxz"
slug: "cinematic-close-up-portrait-generation"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/cinematic-close-up-portrait-generation"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a1e482aa9119063a8f8c26ff54cddb71558c962a5236617bbc3de32c6c214472"
upstream_updated_at: "2026-01-15T15:53:21.090Z"
---
# 电影特写肖像生成

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[cinematic-close-up-portrait-generation](https://prompts.chat/prompts/cinematic-close-up-portrait-generation)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

创作一个年轻人的电影特写肖像，注重情感表达和真实质感。非常适合训练肖像生成和电影照明技术方面的 AI 模型。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Art、AI Tools、Computer Vision 等主题快速生成可复用结果。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “颜色”：{
    "color_temper": "暖色",
    "contrast_level": "高",
    “主导调色板”：[
      “烧焦的橙子”，
      “深青色”，
      “黑”，
      “晒黑”
    ]
  },
  “组成”：{
    "camera_angle": "特写",
    "depth_of_field": "中",
    "focus": "人脸侧面",
    “framing”：“拍摄对象被紧紧地置于左侧的框架中，朝框架的右侧看去，为他的目光创造了负空间。”
  },
  "description_short": "一个男人侧面的戏剧性和坚韧的特写肖像，在凉爽、有纹理的黑暗背景下被温暖的侧光照亮。",
  “环境”：{
    "location_type": "工作室",
    "setting_details": "背景是坚实的、深色的、有纹理的表面，可能是一面墙，带有喜怒无常的深青色。",
    "time_of_day": "未知",
    “天气”：“无”
  },
  “照明”：{
    “强度”：“强”，
    "source_direction": "侧面",
    “类型”：“电影”
  },
  “心情”：{
    "atmosphere": "内省而阴沉",
    "emotional_tone": "忧郁"
  },
  “叙述元素”：{
    "character_interactions": "这个人孤独一人，似乎陷入沉思，营造出一种孤立和内省的感觉。",
    "environmental_storytelling": "黑暗、有纹理的简约背景有助于隔离主题，将所有注意力集中在他的情绪状态和特征的细节纹理上。",
    "implied_action": "拍摄对象处于沉思的静止时刻，凝视着镜头外看不见的东西。"
  },
  “对象”：[
    “男人”，
    《夹克领子》
  ],
  “人”：{
    “年龄”：[
      “年轻的成年人”
    ],
    "clothing_style": "夹克或外套的深色领子可见。",
    “计数”：“1”，
    “性别”：[
      “男”
    ]
  },
  "prompt": "一个戏剧性的、电影般的特写肖像，描绘了一个沉思的年轻人的侧面。左侧强烈、温暖的侧光照亮了他粗糙的皮肤、胡茬和卷曲的黑发。他的蓝眼睛带着忧郁的表情凝视着远方。背景是深色、有纹理的青色墙壁，营造出喜怒无常和内省的氛围。风格坚韧而摄影，具有高对比度和明显的胶片颗粒效果，唤起一种原始的情感和深刻的思考。",
  “风格”：{
    "art_style": "现实",
    “影响”：[
      “电影肖像”，
      “美术摄影”
    ],
    “中”：“摄影”
  },
  “技术标签”：[
    “特写”，
    “肖像”，
    “个人资料照片”，
    “侧面照明”，
    “高对比度”，
    “胶片颗粒”，
    “有质感”，
    “情绪化的灯光”，
    “电影”，
    “明暗对比”
  ],
  "use_case": "训练 AI 模型以生成情感肖像、电影灯光风格和逼真的皮肤纹理渲染。",
  “uuid”：“6f682e5f-149f-475a-8285-7318abc5959f”
}
```

---

## English Original

### Title

Cinematic Close-Up Portrait Generation

### Description

Create a cinematic close-up portrait of a young man, focusing on emotional expression and realistic texture. Ideal for training AI models in portrait generation and cinematic lighting techniques.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "high",
    "dominant_palette": [
      "burnt orange",
      "deep teal",
      "black",
      "tan"
    ]
  },
  "composition": {
    "camera_angle": "close-up",
    "depth_of_field": "medium",
    "focus": "Man's face in profile",
    "framing": "The subject is tightly framed on the left, looking towards the right side of the frame, creating negative space for his gaze."
  },
  "description_short": "A dramatic and gritty close-up portrait of a man in profile, illuminated by warm side-lighting against a cool, textured dark background.",
  "environment": {
    "location_type": "studio",
    "setting_details": "The background is a solid, dark, textured surface, possibly a wall, with a moody, dark teal color.",
    "time_of_day": "unknown",
    "weather": "none"
  },
  "lighting": {
    "intensity": "strong",
    "source_direction": "side",
    "type": "cinematic"
  },
  "mood": {
    "atmosphere": "Introspective and somber",
    "emotional_tone": "melancholic"
  },
  "narrative_elements": {
    "character_interactions": "The man is alone, seemingly lost in thought, creating a sense of isolation and introspection.",
    "environmental_storytelling": "The dark, textured, and minimalist background serves to isolate the subject, focusing all attention on his emotional state and the detailed texture of his features.",
    "implied_action": "The subject is in a still moment of deep contemplation, gazing at something unseen off-camera."
  },
  "objects": [
    "Man",
    "Jacket collar"
  ],
  "people": {
    "ages": [
      "young adult"
    ],
    "clothing_style": "The dark collar of a jacket or coat is visible.",
    "count": "1",
    "genders": [
      "male"
    ]
  },
  "prompt": "A dramatic, cinematic close-up portrait of a pensive young man in profile. Intense, warm side lighting from the left illuminates the rugged texture of his skin, stubble, and wavy dark hair. His blue eye gazes off into the distance with a melancholic expression. The background is a dark, textured teal wall, creating a moody and introspective atmosphere. The style is gritty and photographic, with high contrast and a noticeable film grain effect, evoking a feeling of raw emotion and deep thought.",
  "style": {
    "art_style": "realistic",
    "influences": [
      "cinematic portraiture",
      "fine art photography"
    ],
    "medium": "photography"
  },
  "technical_tags": [
    "close-up",
    "portrait",
    "profile shot",
    "side lighting",
    "high contrast",
    "film grain",
    "textured",
    "moody lighting",
    "cinematic",
    "chiaroscuro"
  ],
  "use_case": "Training AI models for emotional portrait generation, cinematic lighting styles, and realistic skin texture rendering.",
  "uuid": "6f682e5f-149f-475a-8285-7318abc5959f"
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [cinematic-close-up-portrait-generation](https://prompts.chat/prompts/cinematic-close-up-portrait-generation) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Art, AI Tools, Computer Vision |
| Contributors | gunebak4n |
| Updated At | 2026-01-15T15:53:21.090Z |
