# 极简监控插画提示词

## 中文说明

此提示将指导你创建一个极简主义图形插图，描绘一个小个子男人被多个大眼睛注视。它以橙色背景设置了一个充满活力的场景，重点关注监视、偏执和公众监督的主题。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "暖色",
    "contrast_level": "高",
    “主导调色板”：[
      “橙色”，
      “灰白色”，
      “黑”，
      “黄色”
    ]
  },
  “组成”：{
    "camera_angle": "眼睛水平拍摄",
    "depth_of_field": "深",
    "focus": "小个子和看着他的大眼睛之间的关系。",
    “取景”：“小人物位于底部居中，而画面的上三分之二则充满了向下看的大眼睛图案，营造出一种压迫感和对称的构图。”
  },
  "description_short": "一个极简主义的图形插图，一个穿着黄色衬衫的小个子男人在充满活力的橙色背景下被许多大而程式化的眼睛注视着。",
  “环境”：{
    "location_type": "摘要",
    "setting_details": "背景是坚实的、有纹理的橙色背景，没有任何其他环境元素，创造了一个象征性和非文字的空间。",
    "time_of_day": "未知",
    “天气”：“无”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "未知",
    “类型”：“环境”
  },
  “心情”：{
    "atmosphere": "一种受到持续审查或监视的感觉。",
    "emotional_tone": "紧张"
  },
  “叙述元素”：{
    "character_interactions": "一个人是众多无形的眼睛强烈、压倒性目光注视的对象，暗示着权力的不平衡和被评判的感觉。",
    "environmental_storytelling": "由巨眼主导的广阔、空旷的空间强调了小人物的孤立和脆弱，讲述了一个关于监视、偏执或社会压力的故事。",
    "implied_action": "男人一动不动地站着，似乎在凝视的重压下僵住了。场景是静态的，但心理上充满了活力。"
  },
  “对象”：[
    “眼睛”，
    《人形》
  ],
  “人”：{
    “年龄”：[
      “成人”
    ],
    "clothing_style": "休闲（黄色T恤、黑色裤子）",
    “计数”：“1”，
    “性别”：[
      “男”
    ]
  },
  "prompt": "一幅引人注目的极简主义插画，描绘了一个穿着黄色T恤和黑色裤子的小个子男人，独自站在画面的底部。在他的上方，有许多巨大的、风格化的、黑色瞳孔的眼睛专注地向下凝视。背景是坚实的、有质感的、充满活力的橙色。情绪紧张而超现实，传达出一种强烈的监视、偏执和被评判的感觉。艺术风格是干净的、象征性的、高对比度。”,
  “风格”：{
    "art_style": "极简主义",
    “影响”：[
      “平面设计”，
      “超现实主义”，
      “海报艺术”
    ],
    “媒介”：“数字艺术”
  },
  “技术标签”：[
    “插图”，
    “极简主义”，
    “超现实主义”，
    “象征主义”，
    “偏执狂”，
    “监视”，
    “图形艺术”，
    “高对比度”，
    “概念性”
  ],
  "use_case": "数据隐私、社交焦虑、政府监视或公众监督等主题的社论插图。",
  “uuid”：“a11d9c1f-ca39-4d02-a6ec-21769391501c”
}
```

---

## English Original

### Title

Minimalist Surveillance Illustration Prompt

### Description

This prompt guides you to create a minimalist graphic illustration depicting a small man being watched by multiple large eyes. It sets a vibrant scene with an orange background, focusing on themes of surveillance, paranoia, and public scrutiny.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "high",
    "dominant_palette": [
      "orange",
      "off-white",
      "black",
      "yellow"
    ]
  },
  "composition": {
    "camera_angle": "eye-level shot",
    "depth_of_field": "deep",
    "focus": "The relationship between the small man and the large eyes watching him.",
    "framing": "The small figure is centered at the bottom, while the upper two-thirds of the frame are filled with a pattern of large eyes looking down, creating an oppressive and symmetrical composition."
  },
  "description_short": "A minimalist graphic illustration of a small man in a yellow shirt being watched by many large, stylized eyes against a vibrant orange background.",
  "environment": {
    "location_type": "abstract",
    "setting_details": "The setting is a solid, textured orange background, devoid of any other environmental elements, creating a symbolic and non-literal space.",
    "time_of_day": "unknown",
    "weather": "none"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "unknown",
    "type": "ambient"
  },
  "mood": {
    "atmosphere": "A feeling of being under constant scrutiny or surveillance.",
    "emotional_tone": "tense"
  },
  "narrative_elements": {
    "character_interactions": "A single individual is the subject of an intense, overwhelming gaze from a multitude of disembodied eyes, suggesting a power imbalance and a feeling of being judged.",
    "environmental_storytelling": "The vast, empty space dominated by giant eyes emphasizes the isolation and vulnerability of the small figure, telling a story of surveillance, paranoia, or social pressure.",
    "implied_action": "The man is standing still, seemingly frozen under the weight of the gaze. The scene is static but psychologically charged."
  },
  "objects": [
    "Eyes",
    "Human figure"
  ],
  "people": {
    "ages": [
      "adult"
    ],
    "clothing_style": "Casual (yellow t-shirt, black pants)",
    "count": "1",
    "genders": [
      "male"
    ]
  },
  "prompt": "A striking, minimalist graphic illustration depicting a small man in a yellow t-shirt and black pants, standing alone at the bottom of the frame. Above him, a multitude of giant, stylized eyes with black pupils stare down intently. The background is a solid, textured, vibrant orange. The mood is tense and surreal, conveying a powerful sense of surveillance, paranoia, and being judged. The art style is clean, symbolic, and high-contrast.",
  "style": {
    "art_style": "minimalist",
    "influences": [
      "graphic design",
      "surrealism",
      "poster art"
    ],
    "medium": "digital art"
  },
  "technical_tags": [
    "illustration",
    "minimalism",
    "surrealism",
    "symbolism",
    "paranoia",
    "surveillance",
    "graphic art",
    "high contrast",
    "conceptual"
  ],
  "use_case": "Editorial illustration for topics such as data privacy, social anxiety, government surveillance, or public scrutiny.",
  "uuid": "a11d9c1f-ca39-4d02-a6ec-21769391501c"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
