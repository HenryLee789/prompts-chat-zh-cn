# 光迹中的低语

## 中文说明

电影般的长曝光捕捉 20 世纪 50 年代的黑色场景，将侦探的宁静与爵士乐俱乐部的动能形成鲜明对比。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Nano Banana 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "title": "光迹中的低语",
  "description": "以电影般的长曝光捕捉 20 世纪 50 年代的黑色场景，将侦探的宁静与爵士乐俱乐部的动能形成鲜明对比。",
  "prompt": "你将使用提供的照片中的人物作为主要拍摄对象进行图像编辑。保留他们的核心相似性。将拍摄对象 1（男性）转变为 1950 年代的侦探，将拍摄对象 2（女性）转变为迷人的爵士歌手。利用长时间曝光的艺术风格，让时间仿佛在流血。拍摄对象 1 完全静止地坐在角落的摊位上，锐利而专注，而拍摄对象 2 倾身低语什么，她的动作被捕捉为优雅、幽灵般的模糊。背景音乐家和舞者被渲染成艺术的光线和运动条纹，强调了两人秘密会面周围的混乱气氛。",
  “详细信息”：{
    “年份”：“1952年”，
    “流派”：“长时间曝光”，
    "location": "一个狭窄、烟雾缭绕的地下室爵士俱乐部，有红色皮革摊位和一个小舞台。",
    “照明”：[
      “昏暗的环境烛光”，
      “舞台聚光灯在背景中闪烁”，
      “脸上的柔和亮点”
    ],
    "camera_angle": "眼睛水平的近景，以 1:1 的宽高比居中构图。",
    “情感”：[
      “秘密”，
      “忧郁”，
      “激烈”
    ],
    “颜色调色板”：[
      “深琥珀色”，
      “阴暗的木炭”，
      “充满活力的深红色条纹”，
      “霓虹蓝”
    ],
    “气氛”：[
      “动力学”，
      “朦胧”，
      “如梦如幻”，
      “黑色”
    ],
    "environmental_elements": "如丝般光滑的香烟烟雾轨迹，背景中铜管乐器发出的金色光芒，人群的模糊运动。",
    “主题1”：{
      "costume": "有质感的灰色风衣、软呢帽和宽松的领带。",
      "subject_expression": "坚忍而激烈，目光锁定前方。",
      "subject_action": "一动不动地坐着，手里拿着一杯威士忌。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “冻结行动”，
        “清晰的背景”，
        “静电烟雾”，
        “白天”
      ],
      “排除样式”：[
        “高速摄影”，
        “卡通”，
        “矢量艺术”，
        “平面照明”
      ],
      “排除颜色”：[
        “淡粉色”，
        “亮绿色”，
        “纯白”
      ],
      “排除对象”：[
        “智能手机”，
        “现代麦克风”，
        “数字手表”
      ]
    },
    “主题2”：{
      "costume": "闪闪发光的亮片晚礼服，戴着长歌剧手套。",
      "subject_expression": "诱人且紧迫，但因运动模糊而部分软化。",
      "subject_action": "快速倾身低语，创造运动轨迹效果。"
    }
  }
}
```

---

## English Original

### Title

Whispers in Light Trails

### Description

A cinematic long-exposure capture of a 1950s noir scene, contrasting the stillness of a detective with the kinetic energy of a jazz club.

### Prompt

```md
{
  "title": "Whispers in Light Trails",
  "description": "A cinematic long-exposure capture of a 1950s noir scene, contrasting the stillness of a detective with the kinetic energy of a jazz club.",
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Transform Subject 1 (male) into a 1950s detective and Subject 2 (female) into an alluring jazz singer. Utilize a Long Exposure artistic style where time seems to bleed. Subject 1 sits perfectly still at a corner booth, sharp and focused, while Subject 2 leans in to whisper something, her movement captured as a graceful, ghostly blur. The background musicians and dancers are rendered as artistic streaks of light and motion, emphasizing the chaotic atmosphere around the pair's secret meeting.",
  "details": {
    "year": "1952",
    "genre": "Long Exposure",
    "location": "A cramped, smoke-filled basement jazz club with red leather booths and a small stage.",
    "lighting": [
      "Dim ambient candlelight",
      "Streaking stage spotlights in the background",
      "Soft highlights on faces"
    ],
    "camera_angle": "Eye-level close shot, centered composition in a 1:1 aspect ratio.",
    "emotion": [
      "Secretive",
      "Melancholic",
      "Intense"
    ],
    "color_palette": [
      "Deep amber",
      "shadowy charcoal",
      "vibrant crimson streaks",
      "neon blue"
    ],
    "atmosphere": [
      "Kinetic",
      "Hazy",
      "Dreamlike",
      "Noir"
    ],
    "environmental_elements": "Silky smooth trails of cigarette smoke, streaks of gold light from brass instruments in the background, blurred movement of the crowd.",
    "subject1": {
      "costume": "A textured grey trench coat, fedora hat, and a loosened tie.",
      "subject_expression": "Stoic and intense, eyes locked forward.",
      "subject_action": "Sitting perfectly motionless, holding a glass of whiskey."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "frozen action",
        "crisp background",
        "static smoke",
        "daylight"
      ],
      "exclude_styles": [
        "high speed photography",
        "cartoon",
        "vector art",
        "flat lighting"
      ],
      "exclude_colors": [
        "pastel pink",
        "bright green",
        "pure white"
      ],
      "exclude_objects": [
        "smartphones",
        "modern microphones",
        "digital watches"
      ]
    },
    "subject2": {
      "costume": "A sparkling sequined evening gown with long opera gloves.",
      "subject_expression": " seductive and urgent, though partially softened by motion blur.",
      "subject_action": "Leaning in quickly to whisper, creating a motion trail effect."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
