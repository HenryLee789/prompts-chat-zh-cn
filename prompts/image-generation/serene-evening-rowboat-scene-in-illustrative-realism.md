# 说明性现实主义的宁静夜晚划艇场景

## 中文说明

用于让 AI 围绕「说明性现实主义的宁静夜晚划艇场景」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Creative Writing、Storytelling 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "中性",
    "contrast_level": "中",
    “主导调色板”：[
      “石板蓝”，
      “灰白色”，
      “橄榄绿”，
      “棕色”，
      “赭色”
    ]
  },
  “组成”：{
    "camera_angle": "广角镜头",
    "depth_of_field": "深",
    "focus": "三个人划艇",
    “framing”：“拍摄对象位于中间位置，稍微偏离中心，水中有一条强烈的水平线，在画面的下半部分形成反射对称。”
  },
  "description_short": "一幅插图画，描绘了黄昏时分三个人在平静的水面上划艇，背景是一群房屋和一轮苍白的大月亮，所有这些都倒映在水面上。",
  “环境”：{
    "location_type": "室外",
    "setting_details": "一个安静的水湾或海湾，旁边有一个沿海或湖边的小村庄。房屋是简单的两层楼结构。水面非常平静，就像一面镜子。",
    "time_of_day": "晚上",
    “天气”：“晴”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "返回",
    “类型”：“软”
  },
  “心情”：{
    "atmosphere": "安静且沉思",
    "emotional_tone": "平静"
  },
  “叙述元素”：{
    "character_interactions": "这三个人似乎正在一起努力驾驶船只，表明有共同的目的或旅程，也许是渔民在一天结束时返回。",
    "environmental_storytelling": "带有发光窗户的乡村房屋和简单的船唤起了一种与水相关的永恒、勤劳的生活方式。宁静暗示着一天结束时的例行公事。",
    "implied_action": "拿着竿子站着的人正在把船推入水中，表明船在缓慢、稳定地穿过入口，要么驶出，要么上岸。"
  },
  “对象”：[
    “划艇”，
    “房子”，
    “水”，
    “桨”，
    “月亮”，
    “海岸线”，
    “烟囱”
  ],
  “人”：{
    “年龄”：[
      “成人”
    ],
    "clothing_style": "20 世纪早期的工作服，包括帽子、简单的衬衫和一个男人的围裙。",
    “计数”：“3”，
    “性别”：[
      “男”
    ]
  },
  "prompt": "一幅美国现实主义风格的宁静画作，描绘了三个穿着老式工作服的男人在完全静止、反光的水面上驾驶一艘小划艇。现在是晚上，岸边有一座古色古香的木屋村庄，窗户发光。一轮巨大的苍白满月悬挂在昏暗的天空中，在场景上投射出柔和的光线。构图平静而平衡，柔和的调色板和可见的画布纹理，唤起一种平静的感觉。怀旧之情。”,
  “风格”：{
    "art_style": "插画现实主义",
    “影响”：[
      《美国地区主义》，
      《爱德华·霍珀》，
      「平面设计」
    ],
    “medium”：“数字绘画”
  },
  “技术标签”：[
    “画布纹理”，
    “反思”，
    “说明性”，
    “静语气色板”，
    “具象艺术”，
    《水景》、
    “风格化”，
    “平静”，
    《夜曲》
  ],
  "use_case": "艺术风格分析，生成大气或历史插图，反射表面数据集。",
  “uuid”：“c75abe54-048c-4c30-945a-67ea7cab3f6b”
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Serene Evening Rowboat Scene in Illustrative Realism

### Description



### Prompt

```md
{
  "colors": {
    "color_temperature": "neutral",
    "contrast_level": "medium",
    "dominant_palette": [
      "slate blue",
      "off-white",
      "olive green",
      "brown",
      "ochre"
    ]
  },
  "composition": {
    "camera_angle": "wide shot",
    "depth_of_field": "deep",
    "focus": "Three men in a rowboat",
    "framing": "The subjects are positioned slightly off-center in the middle ground, with a strong horizontal line from the water creating a reflective symmetry in the lower half of the frame."
  },
  "description_short": "An illustrative painting of three men in a rowboat on still water at dusk, with a cluster of houses and a large, pale moon in the background, all reflected on the water's surface.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "A quiet inlet or bay next to a small coastal or lakeside village. The houses are simple, two-story structures. The water is very calm, acting like a mirror.",
    "time_of_day": "evening",
    "weather": "clear"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "back",
    "type": "soft"
  },
  "mood": {
    "atmosphere": "Quiet and contemplative",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "character_interactions": "The three men appear to be working together to navigate the boat, suggesting a shared purpose or journey, perhaps fishermen returning at the end of the day.",
    "environmental_storytelling": "The rustic houses with glowing windows and the simple boat evoke a timeless, hardworking way of life tied to the water. The tranquility suggests an end-of-day routine.",
    "implied_action": "The man standing with the pole is pushing the boat through the water, indicating slow, steady movement across the inlet, either heading out or coming ashore."
  },
  "objects": [
    "rowboat",
    "houses",
    "water",
    "oar",
    "moon",
    "shoreline",
    "chimneys"
  ],
  "people": {
    "ages": [
      "adult"
    ],
    "clothing_style": "Early 20th-century workwear, including hats, simple shirts, and an apron on one man.",
    "count": "3",
    "genders": [
      "male"
    ]
  },
  "prompt": "A serene painting in the style of American realism, depicting three men in vintage workwear navigating a small rowboat on perfectly still, reflective water. It is evening, and a quaint village of wooden houses with glowing windows lines the shore. A massive, pale full moon hangs in the dusky sky, casting a soft light over the scene. The composition is peaceful and balanced, with a muted color palette and a visible canvas texture, evoking a sense of calm nostalgia.",
  "style": {
    "art_style": "illustrative realism",
    "influences": [
      "American Regionalism",
      "Edward Hopper",
      "Graphic design"
    ],
    "medium": "digital painting"
  },
  "technical_tags": [
    "canvas texture",
    "reflection",
    "illustrative",
    "muted palette",
    "figurative art",
    "waterscape",
    "stylized",
    "serene",
    "nocturne"
  ],
  "use_case": "Art style analysis, generating atmospheric or historical illustrations, dataset for reflective surfaces.",
  "uuid": "c75abe54-048c-4c30-945a-67ea7cab3f6b"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
