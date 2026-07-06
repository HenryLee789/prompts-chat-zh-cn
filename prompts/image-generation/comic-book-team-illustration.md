# 漫画书团队插图

## 中文说明

该提示指导创作漫画书风格的插图，该插图由四名年轻人组成，穿着相配的制服，其特点是简洁的线条和柔和的调色板。它包括对色彩、构图、环境、灯光和叙事元素的详细规范，以达到统一、严肃的气氛。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Character Development、Creative Writing 等主题生成结构化结果

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
      “蓝色”，
      “红色”，
      “淡黄色”，
      “黑”，
      “金发女郎”
    ]
  },
  “组成”：{
    "camera_angle": "中景",
    "depth_of_field": "浅",
    "focus": "四人一组",
    “framing”：“拍摄对象排列在从背景到前景的对角线上，最前面的角色占据画面的右侧。”
  },
  "description_short": "漫画风格的插图，四个年轻人穿着相配的制服，站成一排，表情严肃地看着左边。",
  “环境”：{
    "location_type": "室外",
    "setting_details": "背景是简单的颜色渐变，暗示着开阔的天空，没有其他可辨别的特征。",
    "time_of_day": "未知",
    “天气”：“晴”
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "未知",
    “类型”：“环境”
  },
  “心情”：{
    "atmosphere": "统一、坚决",
    "emotional_tone": "严肃"
  },
  “叙述元素”：{
    "character_interactions": "这四个人作为有凝聚力的整体站在一起，拥有共同的目光和目标，表明他们是一个团队或同一组织的一部分。",
    "environmental_storytelling": "鲜明、简约的背景强调了人物、他们的表情和他们的统一，表明他们的内部状态和群体动态是场景的中心焦点。",
    "implied_action": "角色似乎正立正或观察面板外的某些东西，表明他们要么即将开始执行任务，要么正面临重大事件。"
  },
  “对象”：[
    “开拓者”，
    “有领衬衫”，
    “制服”
  ],
  “人”：{
    “年龄”：[
      “少年”，
      “年轻的成年人”
    ],
    "clothing_style": "制服由蓝色西装外套组成，口袋上有黄色“T”徽章，穿在红领衬衫外面。",
    “计数”：“4”，
    “性别”：[
      “男”，
      “女”
    ]
  },
  "prompt": "一幅漫画书插图，四名年轻团队成员站成一排。他们都穿着配套的制服：红色衬衫上有黄色“T”标志的蓝色西装外套。前景中的人有一头短而深色的卷发和坚定的表情。在他们后面是一名金发女郎和两名深色头发的年轻男子。他们都严肃地看着左边，映衬着淡黄色和绿色的简单渐变天空。艺术风格由干净的线条和柔和的调色板定义，创造出严肃、统一的情绪。",
  “风格”：{
    "art_style": "漫画书",
    “影响”：[
      “独立漫画”，
      《美国漫画》
    ],
    “中”：“插图”
  },
  “技术标签”：[
    “线条艺术”，
    “插图”，
    “漫画艺术”，
    「角色设计」、
    《集体照》，
    “平面色彩”
  ],
  "use_case": "漫画艺术风格识别或人物插图生成的训练数据。",
  “uuid”：“1dac4e3f-b9dd-45de-9710-c4d685931446”
}
```

---

## English Original

### Title

Comic Book Team Illustration

### Description

This prompt guides the creation of a comic book style illustration of a team of four young individuals in matching uniforms, characterized by clean line work and a muted color palette. It includes detailed specifications for colors, composition, environment, lighting, and narrative elements to achieve a unified and serious atmosphere.

### Prompt

```md
{
  "colors": {
    "color_temperature": "neutral",
    "contrast_level": "medium",
    "dominant_palette": [
      "blue",
      "red",
      "pale yellow",
      "black",
      "blonde"
    ]
  },
  "composition": {
    "camera_angle": "medium shot",
    "depth_of_field": "shallow",
    "focus": "A group of four people",
    "framing": "The subjects are arranged in a diagonal line leading from the background to the foreground, with the foremost character taking up the right side of the frame."
  },
  "description_short": "A comic book style illustration of four young people in matching uniforms, standing in a line and looking towards the left with serious expressions.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "The background is a simple color gradient, suggesting an open sky with no other discernible features.",
    "time_of_day": "unknown",
    "weather": "clear"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "unknown",
    "type": "ambient"
  },
  "mood": {
    "atmosphere": "Unified and determined",
    "emotional_tone": "serious"
  },
  "narrative_elements": {
    "character_interactions": "The four individuals stand together as a cohesive unit, sharing a common gaze and purpose, indicating they are a team or part of the same organization.",
    "environmental_storytelling": "The stark, minimalist background emphasizes the characters, their expressions, and their unity, suggesting that their internal state and group dynamic are the central focus of the scene.",
    "implied_action": "The characters appear to be standing at attention or observing something off-panel, suggesting they are either about to embark on a mission or are facing a significant event."
  },
  "objects": [
    "Blazers",
    "Collared shirts",
    "Uniforms"
  ],
  "people": {
    "ages": [
      "teenager",
      "young adult"
    ],
    "clothing_style": "Uniform consisting of blue blazers with a yellow 'T' insignia on the pocket, worn over red collared shirts.",
    "count": "4",
    "genders": [
      "male",
      "female"
    ]
  },
  "prompt": "A comic book panel illustration of four young team members standing in a line. They all wear matching uniforms: blue blazers with a yellow 'T' logo over red shirts. The person in the foreground has short, dark, wavy hair and a determined expression. Behind them are a blonde woman, and two young men with dark hair. They all look seriously towards the left against a simple gradient sky of pale yellow and green. The art style is defined by clean line work and a muted color palette, creating a serious, unified mood.",
  "style": {
    "art_style": "comic book",
    "influences": [
      "Indie comics",
      "Amerimanga"
    ],
    "medium": "illustration"
  },
  "technical_tags": [
    "line art",
    "illustration",
    "comic art",
    "character design",
    "group portrait",
    "flat colors"
  ],
  "use_case": "Training data for comic book art style recognition or character illustration generation.",
  "uuid": "1dac4e3f-b9dd-45de-9710-c4d685931446"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
