# 电影灯光下的戏剧性马剪影

## 中文说明

用于创建马剪影的电影和戏剧照片的结构化提示。提示详细介绍了灯光、构图、情绪和风格，以实现强大而神秘的图像。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Art 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "暖色",
    "contrast_level": "高",
    “主导调色板”：[
      “黑”，
      “金黄色”，
      “青色”，
      “深棕色”
    ]
  },
  “组成”：{
    "camera_angle": "广角镜头",
    "depth_of_field": "中",
    “焦点”：“马”，
    “framing”：“马仍然是中心主题，采用 1:1 的方形格式，由旋转的彩色烟雾构成，烟雾均匀地填充在方形内。”
  },
  "description_short": "一匹强大的马的戏剧性剪影在浓密的彩色烟雾中移动，在黑暗的背景下被温暖的黄色和冷蓝色的光对比照亮。",
  “环境”：{
    "location_type": "工作室",
    "setting_details": "场景是一个黑暗的、不确定的空间，充满了厚厚的烟雾或灰尘，营造出一种沉重的气氛。",
    "time_of_day": "晚上",
    “天气”：“无”
  },
  “照明”：{
    “强度”：“强”，
    "source_direction": "混合",
    “类型”：“电影”
  },
  “心情”：{
    "atmosphere": "戏剧性和空灵的力量",
    "emotional_tone": "神秘"
  },
  “叙述元素”：{
    "environmental_storytelling": "浓雾中温暖和冷色的灯光相互碰撞，营造出一种冲突感或神奇的揭示，表明这匹马是从另一个领域出现的元素或神话生物。",
    "implied_action": "这匹马正迈着大步，带着力量和目标从暖光移向冷光，暗示着一次旅行或一次逃跑。"
  },
  “对象”：[
    “马”，
    “烟”，
    “灰尘”
  ],
  “人”：{
    “计数”：“0”
  },
  "prompt": "一张电影般的高对比度照片，照片中一匹强大的黑马剪影，以 1:1 的方形格式穿过浓密的漩涡雾气。构图位于方形框架内。场景采用分光效果进行戏剧性照明。温暖的金橙色灯光照亮了左侧的烟雾，捕捉到了马飘逸的鬃毛和肌肉的轮廓。从右侧，凉爽、神秘的青蓝色灯光切入了画面。穿过黑暗，营造出一种空灵而神秘的氛围，背景是深黑色，强调了体积光和马的动态能量。",
  “风格”：{
    "art_style": "现实",
    “影响”：[
      “电影”，
      “美术摄影”，
      “明暗对比”
    ],
    “中”：“摄影”
  },
  “技术标签”：[
    “剪影”，
    “体积照明”，
    “高对比度”，
    “烟”，
    “电影灯光”，
    “分割照明”，
    “动物摄影”，
    “背光”，
    “戏剧性的灯光”，
    “方形格式”，
    “1:1 纵横比”
  ]
}
```

---

## English Original

### Title

Dramatic Horse Silhouette in Cinematic Lighting

### Description

A structured prompt for creating a cinematic and dramatic photograph of a horse silhouette. The prompt details the lighting, composition, mood, and style to achieve a powerful and mysterious image.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "high",
    "dominant_palette": [
      "black",
      "golden yellow",
      "teal",
      "dark brown"
    ]
  },
  "composition": {
    "camera_angle": "wide shot",
    "depth_of_field": "medium",
    "focus": "horse",
    "framing": "The horse remains the central subject, adapted to a 1:1 square format, framed by swirling, colorful smoke that fills the composition evenly within the square."
  },
  "description_short": "A dramatic silhouette of a powerful horse moving through dense, colorful smoke, illuminated by contrasting warm yellow and cool blue light against a dark background.",
  "environment": {
    "location_type": "studio",
    "setting_details": "The setting is a dark, undefined space filled with thick, volumetric smoke or dust, creating a heavy atmosphere.",
    "time_of_day": "night",
    "weather": "none"
  },
  "lighting": {
    "intensity": "strong",
    "source_direction": "mixed",
    "type": "cinematic"
  },
  "mood": {
    "atmosphere": "Dramatic and ethereal power",
    "emotional_tone": "mysterious"
  },
  "narrative_elements": {
    "environmental_storytelling": "The clashing warm and cool lights within the dense fog create a sense of conflict or a magical reveal, suggesting the horse is an elemental or mythical creature emerging from another realm.",
    "implied_action": "The horse is in mid-stride, moving with force and purpose from the warm light towards the cool light, suggesting a journey or an escape."
  },
  "objects": [
    "horse",
    "smoke",
    "dust"
  ],
  "people": {
    "count": "0"
  },
  "prompt": "A cinematic, high-contrast photograph of a powerful dark horse in silhouette, moving through a thick, swirling fog in a 1:1 square format. The composition is centered within a square frame. The scene is dramatically lit with a split-lighting effect. A warm, golden-orange light illuminates the smoke from the left, catching the highlights of the horse's flowing mane and muscular form. From the right, a cool, mystical teal-blue light cuts through the darkness, creating an ethereal and mysterious atmosphere. The background is deep black, emphasizing the volumetric light and the dynamic energy of the horse.",
  "style": {
    "art_style": "realistic",
    "influences": [
      "cinematic",
      "fine art photography",
      "chiaroscuro"
    ],
    "medium": "photography"
  },
  "technical_tags": [
    "silhouette",
    "volumetric lighting",
    "high contrast",
    "smoke",
    "cinematic lighting",
    "split lighting",
    "animal photography",
    "backlit",
    "dramatic lighting",
    "square format",
    "1:1 aspect ratio"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
