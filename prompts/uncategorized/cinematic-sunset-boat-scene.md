# 电影日落船场景

## 中文说明

创建电影场景描述，捕捉湖上宁静的日落时刻，以传统船上的孤独人物为特色。非常适合旅游宣传、图库摄影、电影参考和背景图像。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Travel 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "暖色",
    "contrast_level": "低",
    “主导调色板”：[
      “棕褐色”，
      “灰褐色”，
      “深石板灰色”，
      “卡其色”，
      “一枝黄花”
    ]
  },
  “组成”：{
    "camera_angle": "广角镜头",
    "depth_of_field": "深",
    "focus": "船上的人",
    “取景”：“主体，船和人，按照三分法则，在 1:1 的方形格式内偏右放置。水、海岸线和山脉的水平层次被保留并适应方形框架，保持深度和宁静。”
  },
  "description_short": "日出或日落时，一个戴着圆锥形帽子的孤独者坐在传统的木船上，在平静的湖面上，周围是鸟儿，背景是朦胧的山脉。",
  “环境”：{
    "location_type": "室外",
    "setting_details": "宁静的湖泊或河流，水面平静、反光。背景中，一座遥远、朦胧的山脉耸立在低矮的海岸线上，树木茂盛。气氛充满了金色的薄雾。",
    "time_of_day": "晚上",
    “天气”：“有雾”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "返回",
    “类型”：“自然”
  },
  “心情”：{
    "atmosphere": "平静而沉思的孤独",
    "emotional_tone": "平静"
  },
  “叙述元素”：{
    "environmental_storytelling": "传统的船、圆锥形的帽子和广阔、安静的景观暗示着一种永恒的乡村生活方式，可能是在不受现代影响的地方钓鱼或通勤。金色的薄雾营造出一种梦幻般的怀旧感觉。",
    "implied_action": "这个人可能会慢慢地划桨或停下来观察周围的环境，暗示着一次例行的旅行或在大自然中反思的时刻。"
  },
  “对象”：[
    “船”，
    “人”，
    “水”，
    “鸟”，
    “山”，
    “圆锥形帽子”
  ],
  “人”：{
    “年龄”：[
      “成人”
    ],
    "clothing_style": "传统服装，包括圆锥形帽子。",
    “计数”：“1”，
    “性别”：[
      “未知”
    ]
  },
  "prompt": "一张电影般的广角照片，采用 1:1 方形格式，拍摄的是传统木船上的一个孤独人物，在宁静的夕阳的朦胧金色光芒的映衬下，映衬着朦胧的金色光芒。这个人戴着圆锥形帽子，安静地躺在平静、碧波荡漾的湖面上的船上。构图在方形框架内保持平衡，拍摄对象稍稍偏离中心。远处，云雾缭绕的山脉逐渐消失在温暖的天空中。成群的鸟儿飞过头顶，漂浮在水面上，增添了生机。宁静的场景，气氛平静而永恒，具有柔和的颗粒质感。",
  “风格”：{
    "art_style": "现实",
    “影响”：[
      “电影摄影”，
      “风景摄影”，
      「旅游摄影」
    ],
    “中”：“摄影”
  },
  “技术标签”：[
    “剪影”，
    “广角镜头”，
    “风景”，
    “黄金时刻”，
    “朦胧”，
    “大气视角”，
    “平静”，
    “自然光”，
    “反思”，
    “胶片颗粒”，
    “方形格式”，
    “1:1 纵横比”
  ],
  "use_case": "旅行和旅游促销、图库摄影、电影参考、背景图像。"
}
```

---

## English Original

### Title

Cinematic Sunset Boat Scene

### Description

Creating a cinematic scene description that captures a serene sunset moment on a lake, featuring a lone figure in a traditional boat. Ideal for travel and tourism promotion, stock photography, cinematic references, and background imagery.

### Prompt

```md
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "low",
    "dominant_palette": [
      "sepia",
      "taupe",
      "dark slate gray",
      "khaki",
      "goldenrod"
    ]
  },
  "composition": {
    "camera_angle": "wide shot",
    "depth_of_field": "deep",
    "focus": "Person in boat",
    "framing": "The main subject, the boat and person, are placed off-center to the right within a 1:1 square format, following the rule of thirds. Horizontal layers of water, shoreline, and mountains are preserved and adapted to fit the square frame, maintaining depth and tranquility."
  },
  "description_short": "A lone person wearing a conical hat sits in a traditional wooden boat on a calm lake at sunrise or sunset, surrounded by birds, with hazy mountains in the background.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "A serene lake or river with calm, reflective water. In the background, a distant, hazy mountain range rises above a low shoreline with trees. The atmosphere is filled with a golden mist.",
    "time_of_day": "evening",
    "weather": "hazy"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "back",
    "type": "natural"
  },
  "mood": {
    "atmosphere": "Peaceful and contemplative solitude",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "environmental_storytelling": "The traditional boat, conical hat, and vast, quiet landscape suggest a timeless, rural way of life, possibly fishing or commuting in a place untouched by modernity. The golden haze creates a dreamlike, nostalgic feeling.",
    "implied_action": "The person is likely paddling slowly or pausing to observe the surroundings, suggesting a routine journey or a moment of reflection amidst nature."
  },
  "objects": [
    "boat",
    "person",
    "water",
    "birds",
    "mountains",
    "conical hat"
  ],
  "people": {
    "ages": [
      "adult"
    ],
    "clothing_style": "Traditional attire including a conical hat.",
    "count": "1",
    "genders": [
      "unknown"
    ]
  },
  "prompt": "A cinematic, wide-angle photograph in a 1:1 square format of a lone figure in a traditional wooden boat, silhouetted against the hazy golden light of a serene sunset. The person wears a conical hat, resting peacefully in the boat on a calm, rippling lake. The composition is balanced within a square frame with the subject slightly off-center. In the distance, misty mountains fade into the warm sky. Flocks of birds fly overhead and float on the water, adding life to the tranquil scene. The atmosphere is calm and timeless, with a soft, grainy film texture.",
  "style": {
    "art_style": "realistic",
    "influences": [
      "cinematic photography",
      "landscape photography",
      "travel photography"
    ],
    "medium": "photography"
  },
  "technical_tags": [
    "silhouette",
    "wide shot",
    "landscape",
    "golden hour",
    "hazy",
    "atmospheric perspective",
    "serene",
    "natural light",
    "reflection",
    "film grain",
    "square format",
    "1:1 aspect ratio"
  ],
  "use_case": "Travel and tourism promotion, stock photography, cinematic reference, background imagery."
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
