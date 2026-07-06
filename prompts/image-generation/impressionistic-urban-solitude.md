# 印象派城市孤独

## 中文说明

该提示会生成一个印象派场景，描绘黄昏时分城市环境中的孤独人物。重点是通过使用暖色、中等对比度和印象派笔触来捕捉孤独和沉思的情绪。非常适合艺术史研究、风格迁移模型训练或分析印象派绘画技巧。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、creative 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "暖色",
    "contrast_level": "中",
    “主导调色板”：[
      “棕色”，
      “橙色”，
      “紫色”，
      “黄色”，
      “灰色”
    ]
  },
  “组成”：{
    "camera_angle": "眼睛水平拍摄",
    "depth_of_field": "中",
    "focus": "一个穿着深色外套的人在抽烟",
    “framing”：“主要主题被放置在偏离中心的右侧，电车轨道上的强烈引导线引导人们的眼睛进入城市景观。”
  },
  "description_short": "一幅印象派画作，画中一个穿着深色外套的人站在黄昏时分的城市电车轨道上抽烟，远处的路灯在发光。",
  “环境”：{
    "location_type": "城市景观",
    "setting_details": "黄昏或黎明时分的城市街道，电车轨道逐渐远去。街道两旁排列着发光的灯柱，背景中可以看到电车和其他人物。",
    "time_of_day": "晚上",
    “天气”：“晴”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "混合",
    “类型”：“混合”
  },
  “心情”：{
    "atmosphere": "孤独的城市沉思",
    "emotional_tone": "忧郁"
  },
  “叙述元素”：{
    "character_interactions": "主角是孤独的，观察着城市的景色。还有其他远处的人物，但没有描绘直接的互动。",
    "environmental_storytelling": "昏暗的城市街道、发光的灯光和电车轨道暗示着等待或过渡的时刻，也许是工作日的结束。这一场景唤起了城市的匿名感和内省感。",
    "implied_action": "这个人正在等待，可能是在等电车。吸烟的行为表明在继续之前有片刻的暂停或反思。"
  },
  “对象”：[
    “人”，
    “大衣”，
    “电车轨道”，
    “路灯”，
    “烟”，
    “电车”，
    “建筑物”
  ],
  “人”：{
    “年龄”：[
      “成人”
    ],
    "clothing_style": "厚重的冬季大衣",
    “计数”：“1”，
    “性别”：[
      “男”
    ]
  },
  "prompt": "一幅印象派油画，从后面看，一个穿着深色厚重大衣的孤独人物。人物站在电车轨道旁，向凉爽的空气中吐出一缕烟雾。场景是黄昏时的城市街道，天空泛着温暖的橙色和黄色色调。远处的路灯沿着街道投射出柔和、温暖的光芒，反射在金属轨道上。风格以厚重、有质感的笔触为特色，营造出一种忧郁和忧郁的感觉。沉思的心情。”,
  “风格”：{
    "art_style": "印象派现实主义",
    “影响”：[
      “现实主义”，
      “印象派”，
      「城市景观」
    ],
    “媒介”：“绘画”
  },
  “技术标签”：[
    “油画”，
    “厚涂”，
    “印象派”，
    “城市景观”，
    “黄昏”，
    “明暗对比”，
    “引导线”，
    “孤独”，
    “有质感”
  ],
  "use_case": "艺术史数据集、风格迁移模型训练、印象派绘画技法分析。",
  “uuid”：“03c9a7a0-190f-4afa-bb32-1ed1c05cc818”
}
```

---

## English Original

### Title

Impressionistic Urban Solitude

### Description

This prompt generates an impressionistic scene depicting a solitary figure in an urban setting at dusk. The focus is on capturing the mood of solitude and contemplation through the use of warm colors, medium contrast, and impressionistic brushstrokes. Ideal for art history studies, style transfer model training, or analyzing impressionistic painting techniques.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "medium",
    "dominant_palette": [
      "brown",
      "orange",
      "purple",
      "yellow",
      "grey"
    ]
  },
  "composition": {
    "camera_angle": "eye-level shot",
    "depth_of_field": "medium",
    "focus": "A person in a dark coat smoking",
    "framing": "The main subject is placed off-center to the right, with strong leading lines from the tram tracks guiding the eye into the cityscape."
  },
  "description_short": "An impressionistic painting of a person in a dark coat smoking while standing by tram tracks in a city at dusk, with streetlights glowing in the distance.",
  "environment": {
    "location_type": "cityscape",
    "setting_details": "A city street at dusk or dawn, featuring tram tracks that recede into the distance. The street is lined with glowing lampposts, and a tram and other figures are visible in the background.",
    "time_of_day": "evening",
    "weather": "clear"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "mixed",
    "type": "mixed"
  },
  "mood": {
    "atmosphere": "Solitary urban contemplation",
    "emotional_tone": "melancholic"
  },
  "narrative_elements": {
    "character_interactions": "The main character is solitary, observing the city scene. There are other distant figures, but no direct interaction is depicted.",
    "environmental_storytelling": "The dusky city street, glowing lights, and tram tracks suggest a moment of waiting or transition, perhaps the end of a workday. The scene evokes a sense of urban anonymity and introspection.",
    "implied_action": "The person is waiting, possibly for a tram. The act of smoking suggests a moment of pause or reflection before continuing on."
  },
  "objects": [
    "person",
    "overcoat",
    "tram tracks",
    "streetlights",
    "smoke",
    "tram",
    "buildings"
  ],
  "people": {
    "ages": [
      "adult"
    ],
    "clothing_style": "heavy winter overcoat",
    "count": "1",
    "genders": [
      "male"
    ]
  },
  "prompt": "An impressionistic oil painting of a solitary figure in a dark, heavy overcoat, viewed from behind. The person stands beside tram tracks, exhaling a plume of smoke into the cool air. The scene is a city street at dusk, with the sky glowing with warm orange and yellow hues. Distant streetlights cast a soft, warm glow along the street, reflecting on the metal tracks. The style features thick, textured brushstrokes, creating a melancholic and contemplative mood.",
  "style": {
    "art_style": "impressionistic realism",
    "influences": [
      "realism",
      "impressionism",
      "urban landscape"
    ],
    "medium": "painting"
  },
  "technical_tags": [
    "oil painting",
    "impasto",
    "impressionism",
    "cityscape",
    "dusk",
    "chiaroscuro",
    "leading lines",
    "solitude",
    "textured"
  ],
  "use_case": "Art history dataset, style transfer model training, analysis of impressionistic painting techniques.",
  "uuid": "03c9a7a0-190f-4afa-bb32-1ed1c05cc818"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
