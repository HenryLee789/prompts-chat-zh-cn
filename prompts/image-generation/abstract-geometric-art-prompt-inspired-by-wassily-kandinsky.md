# 受瓦西里·康定斯基启发的抽象几何艺术提示词

## 中文说明

该提示提供了一个精心设计的框架，用于生成受瓦西里·康定斯基风格启发的抽象几何艺术。它详细介绍了如何使用鲜艳的色彩、几何形状和构图元素来创造和谐而知性的艺术作品。对于专注于抽象艺术风格转移和生成艺术项目的艺术家、设计师和AI模型来说，该提示是一个理想的工具。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、abstract 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “颜色”：{
    "color_temper": "中性",
    "contrast_level": "高",
    “主导调色板”：[
      “深绿色”，
      “黑”，
      “蓝色”，
      “黄色”，
      “红色”，
      “浅紫色”
    ]
  },
  “组成”：{
    "camera_angle": "眼睛水平",
    "depth_of_field": "中",
    "focus": "中央排列着一个带有黑色核心的大浅蓝色环，由黑色线条相交。",
    “framing”：“通过放置几何簇和牢固的水平和垂直线来锚定构图，从而创造出不对称的平衡。”
  },
  "description_short": "一幅抽象画，以各种彩色几何形状为特色，包括圆形、正方形和弧形，排列在深色、有纹理的绿色背景上。构图由大胆的黑色线条构成。",
  “环境”：{
    "location_type": "摘要",
    "setting_details": "场景是一个非具象空间，由深邃、斑驳的绿色背景定义，为浮动的几何形式提供了深度感。"
  },
  “照明”：{
    “强度”：“中等”，
    "source_direction": "未知",
    “类型”：“环境”
  },
  “心情”：{
    "atmosphere": "和谐的几何相互作用",
    "emotional_tone": "平静"
  },
  “叙述元素”：{
    "environmental_storytelling": "形状和颜色的相互作用（重叠、交叉和浮动）创造了节奏、张力和平衡的视觉叙事，通常与音乐作品相比较。",
    "implied_action": "新月形状和粗线条暗示着静态形式之间的动态运动和相互作用，在更大的宇宙事件中创造出一种冻结时刻的感觉。"
  },
  “对象”：[
    “圈子”，
    “正方形”，
    “棋盘图案”，
    “线”，
    “新月形状”，
    “三角形”，
    “矩形”
  ],
  “人”：{
    “计数”：“0”
  },
  "prompt": "这是一幅瓦西里·康定斯基风格的抽象画。复杂、和谐的几何形状构图漂浮在深邃、有质感的深绿色背景上。一个中心黑色的浅蓝色大圆圈是焦点，中间被大胆的黑色线条相交。色彩缤纷的棋盘图案、黄色和蓝色的分段圆圈以及充满活力的红黑新月经过精心排列，营造出一种音乐节奏感和宇宙平衡感。风格是纯粹的几何抽象，唤起一种知识分子的感觉。和沉思的心情。”,
  “风格”：{
    "art_style": "抽象",
    “影响”：[
      “包豪斯”，
      “几何抽象”，
      “建构主义”
    ],
    “媒介”：“绘画”
  },
  “技术标签”：[
    “抽象艺术”，
    “几何抽象”，
    “包豪斯”，
    《瓦西里·康定斯基》，
    “现代主义”，
    “组成”，
    《色彩理论》、
    “非具象艺术”
  ],
  "use_case": "风格转移AI、艺术史分析或抽象艺术生成模型的训练数据。",
  “uuid”：“a6088ce6-f151-41f2-aec4-06758084a585”
}
```

---

## English Original

### Title

Abstract Geometric Art Prompt Inspired by Wassily Kandinsky

### Description

The prompt provides an elaborate framework for generating abstract geometric art inspired by the style of Wassily Kandinsky. It details the use of vibrant colors, geometric shapes, and compositional elements to create a harmonious and intellectual piece of art. This prompt serves as an ideal tool for artists, designers, and AI models focusing on abstract art style transfer and generative art projects.



### Prompt

```md
{
  "colors": {
    "color_temperature": "neutral",
    "contrast_level": "high",
    "dominant_palette": [
      "dark green",
      "black",
      "blue",
      "yellow",
      "red",
      "light purple"
    ]
  },
  "composition": {
    "camera_angle": "eye-level",
    "depth_of_field": "medium",
    "focus": "The central arrangement of a large light blue ring with a black core, intersected by black lines.",
    "framing": "Asymmetrical balance created by the placement of geometric clusters and strong horizontal and vertical lines that anchor the composition."
  },
  "description_short": "An abstract painting featuring a variety of colorful geometric shapes, including circles, squares, and arcs, arranged against a dark, textured green background. The composition is structured by bold black lines.",
  "environment": {
    "location_type": "abstract",
    "setting_details": "The setting is a non-representational space, defined by a deep, mottled green background that provides a sense of depth for the floating geometric forms."
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "unknown",
    "type": "ambient"
  },
  "mood": {
    "atmosphere": "Harmonious geometric interplay",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "environmental_storytelling": "The interaction of shapes and colors—overlapping, intersecting, and floating—creates a visual narrative of rhythm, tension, and balance, often compared to a musical composition.",
    "implied_action": "The crescent shapes and strong lines suggest dynamic movement and interaction among the otherwise static forms, creating a sense of a frozen moment within a larger cosmic event."
  },
  "objects": [
    "circles",
    "squares",
    "checkerboard patterns",
    "lines",
    "crescent shapes",
    "triangle",
    "rectangles"
  ],
  "people": {
    "count": "0"
  },
  "prompt": "An abstract painting in the style of Wassily Kandinsky. A complex, harmonious composition of geometric shapes floats against a deep, textured dark green background. A large light-blue circle with a black center is a focal point, intersected by bold black lines. Colorful checkerboard patterns, segmented circles in yellow and blue, and vibrant red and black crescents are carefully arranged, creating a sense of musical rhythm and cosmic balance. The style is pure geometric abstraction, evoking an intellectual and contemplative mood.",
  "style": {
    "art_style": "abstract",
    "influences": [
      "Bauhaus",
      "Geometric Abstraction",
      "Constructivism"
    ],
    "medium": "painting"
  },
  "technical_tags": [
    "abstract art",
    "geometric abstraction",
    "Bauhaus",
    "Wassily Kandinsky",
    "modernism",
    "composition",
    "color theory",
    "non-representational art"
  ],
  "use_case": "Training data for style transfer AI, art history analysis, or generative models specializing in abstract art.",
  "uuid": "a6088ce6-f151-41f2-aec4-06758084a585"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
