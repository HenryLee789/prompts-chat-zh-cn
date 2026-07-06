# 电影街头摄影提示词

## 中文说明

创建电影般的街头摄影场景，重点捕捉欢乐和情感的坦率时刻。此提示将引导你想象一张温暖、复古风格的照片，照片上是一位在繁华的城市环境中快乐的年轻女子。它强调构图、灯光和叙事元素，以产生真实而温馨的图像。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Creative Writing 等主题生成结构化结果

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
      “米色”，
      “柔和的青色”，
      “奶油”
    ]
  },
  “组成”：{
    "camera_angle": "眼睛水平",
    "depth_of_field": "浅",
    "focus": "一个年轻的${gender}在笑",
    “取景”：“主要拍摄对象被背景中模糊的人群和前景中的相机所框住。相机的屏幕创造了一个框架中的框架，强调了摄影的行为。”
  },
  "description_short": "摄影师的过肩镜头拍摄了一位快乐的年轻 ${gender} 在模糊的人群中开怀大笑的照片。",
  “环境”：{
    "location_type": "室外",
    "setting_details": "一个繁忙、拥挤的公共空间，可能是城市街道或广场。背景充满了很多人，全部渲染为柔和的模糊，可以看到一些红色的散景灯。",
    "time_of_day": "下午",
    “天气”：“多云”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "前面",
    “类型”：“自然”
  },
  “心情”：{
    "atmosphere": "纯粹喜悦的坦诚时刻",
    "emotional_tone": "快乐"
  },
  “叙述元素”：{
    "character_interactions": "摄影师正在捕捉 ${gender} 坦诚、快乐的时刻，表明他们之间存在积极而舒适的融洽关系。",
    "environmental_storytelling": "拥挤、失焦的背景凸显了 ${gender} 在熙熙攘攘的环境中作为幸福和平静的奇点，让这一刻感觉个性化和亲密。",
    "implied_action": "照片拍摄正在进行中，捕捉拍摄对象的自发React。"
  },
  “对象”：[
    “相机”，
    “${gender}”，
    “人群”
  ],
  “人”：{
    “年龄”：[
      “年轻的成年人”
    ],
    "clothing_style": "冬季休闲装",
    “计数”：“未知”，
    “性别”：[
      “女”
    ]
  },
  "prompt": "过肩视角的电影街头摄影。摄影师手持数码相机，屏幕上显示着镜头。拍摄对象是一位美丽的年轻亚洲人 ${gender}，棕色波浪发，张大嘴大笑。她穿着一件舒适的米色针织毛衣。背景是密集、匿名的人群，在柔和的散景灯下完全模糊。图像具有温暖、复古的色彩等级，浅深度的田野，捕捉到一个坦诚、温馨的纯粹幸福时刻。”,
  “风格”：{
    "art_style": "现实",
    “影响”：[
      “街头摄影”，
      “坦诚的肖像”，
      “电影般的”
    ],
    “中”：“摄影”
  },
  “技术标签”：[
    “浅景深”，
    “散景”，
    “过肩镜头”，
    “偷拍摄影”，
    “肖像”，
    “框架内的框架”，
    “暖色调”
  ],
  "use_case": "以幸福、城市生活、摄影和坦诚瞬间为主题的图库摄影。",
  “uuid”：“c0e1b01c-e07e-41b1-b035-f8802d8ec319”
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Cinematic Street Photography Prompt

### Description

Create a cinematic street photography scene with a focus on capturing candid moments of joy and emotion. This prompt guides you to visualize a warm, vintage-style photograph featuring a joyful young woman in a bustling urban environment. It emphasizes composition, lighting, and narrative elements to produce a realistic and heartwarming image.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "medium",
    "dominant_palette": [
      "brown",
      "beige",
      "muted teal",
      "cream"
    ]
  },
  "composition": {
    "camera_angle": "eye-level",
    "depth_of_field": "shallow",
    "focus": "A young ${gender} laughing",
    "framing": "The main subject is framed by a blurred crowd in the background and a camera in the foreground. The camera's screen creates a frame-within-a-frame, emphasizing the act of photography."
  },
  "description_short": "An over-the-shoulder shot of a photographer taking a picture of a joyful young ${gender} laughing heartily in the middle of a blurred crowd.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "A busy, crowded public space, likely a city street or plaza. The background is filled with many people, all rendered as a soft blur, with some red bokeh lights visible.",
    "time_of_day": "afternoon",
    "weather": "cloudy"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "front",
    "type": "natural"
  },
  "mood": {
    "atmosphere": "A candid moment of pure joy",
    "emotional_tone": "joyful"
  },
  "narrative_elements": {
    "character_interactions": "A photographer is capturing a candid, happy moment of a ${gender}, suggesting a positive and comfortable rapport between them.",
    "environmental_storytelling": "The crowded, out-of-focus background highlights the ${gender} as a singular point of happiness and calm within a bustling environment, making the moment feel personal and intimate.",
    "implied_action": "A photoshoot is actively in progress, capturing a spontaneous reaction from the subject."
  },
  "objects": [
    "camera",
    "${gender}",
    "crowd"
  ],
  "people": {
    "ages": [
      "young adult"
    ],
    "clothing_style": "casual winter wear",
    "count": "unknown",
    "genders": [
      "female"
    ]
  },
  "prompt": "Cinematic street photography from an over-the-shoulder perspective. A photographer holds a digital camera, its screen displaying the shot. The subject is a beautiful young Asian ${gender} with wavy brown hair, who is bursting into a joyful, open-mouthed laugh. She wears a cozy cream-colored knit sweater. The background is a dense, anonymous crowd, completely blurred with soft bokeh lights. The image has a warm, vintage color grade, shallow depth of field, and captures a candid, heartwarming moment of pure happiness.",
  "style": {
    "art_style": "realistic",
    "influences": [
      "street photography",
      "candid portraiture",
      "cinematic"
    ],
    "medium": "photography"
  },
  "technical_tags": [
    "shallow depth of field",
    "bokeh",
    "over-the-shoulder shot",
    "candid photography",
    "portrait",
    "frame within a frame",
    "warm tones"
  ],
  "use_case": "Stock photography for themes of happiness, urban life, photography, and candid moments.",
  "uuid": "c0e1b01c-e07e-41b1-b035-f8802d8ec319"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
