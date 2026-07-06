# 曼哈顿海市蜃楼

## 中文说明

这是一个充满激情的电影时刻，捕捉到一位女士在黄金时段自信地大步穿过充满蒸汽的纽约十字路口的瞬间。

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
  “标题”：“曼哈顿幻影”，
  "description": "一个高辛烷值的电影时刻，捕捉到一位女士在黄金时段自信地大步穿过充满蒸汽的纽约十字路口。",
  "prompt": "你将使用提供的照片进行图像编辑。创建女性主体的超真实感图像。风格非常详细，类似于 Arri Alexa 上以电影 1:1 的长宽比拍摄的帧。应用大景深模糊繁忙的背景，同时保持主体清晰。使用强背光的电影照明。主体穿着红色迷你裙，正在街上行走。",
  “详细信息”：{
    “年份”：“1999”，
    "genre": "电影照片写实主义",
    "location": "日落时纽约市一个坚韧、熙熙攘攘的十字路口，蒸汽从检修孔中升起，背景中是模糊的黄色出租车。",
    “照明”：[
      “黄金时段逆光”，
      “镜头光晕”，
      “高对比度体积照明”
    ],
    "camera_angle": "低角度跟踪拍摄，居中构图。",
    “情感”：[
      “自信”，
      “赋权”，
      “冷漠”
    ],
    “颜色调色板”：[
      “绛红色”，
      “沥青灰”，
      “金黄色”，
      “深黑色”
    ],
    “气氛”：[
      “城市”，
      “动态”，
      “电影化”，
      “精力充沛”
    ],
    "environmental_elements": "从地面升起的蒸汽羽流、运动模糊的交通、飞翔的鸽子、反映日落的潮湿路面。",
    “主题1”：{
      "costume": "红色迷你裙",
      "subject_expression": "眼神凶狠、自信，嘴唇微张，可能戴着老式太阳镜。",
      "subject_action": "走在街上"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “空荡荡的街道”，
        “工作室背景”，
        “过度曝光的天空”，
        “静态姿势”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “插图”，
        “动漫”，
        “素描”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “淡粉色”
      ],
      “排除对象”：[
        “智能手机”，
        “现代汽车”，
        “未来派小玩意”
      ]
    }
  }
}
```

---

## English Original

### Title

Manhattan Mirage

### Description

A high-octane, cinematic moment capturing a woman's confident stride through a steam-filled New York intersection during golden hour.

### Prompt

```md
{
  "title": "Manhattan Mirage",
  "description": "A high-octane, cinematic moment capturing a woman's confident stride through a steam-filled New York intersection during golden hour.",
  "prompt": "You will perform an image edit using the provided photo. Create an Ultra-Photorealistic image of the female subject. The style is highly detailed, resembling a frame shot on Arri Alexa with a cinematic 1:1 aspect ratio. Apply heavy depth of field to blur the busy background while keeping the subject sharp. Use cinematic lighting with strong backlight. The subject is wearing a red mini skirt and is walking on the street.",
  "details": {
    "year": "1999",
    "genre": "Cinematic Photorealism",
    "location": "A gritty, bustling New York City intersection at sunset, with steam rising from manholes and blurred yellow taxis in the background.",
    "lighting": [
      "Golden hour backlight",
      "Lens flares",
      "High contrast volumetric lighting"
    ],
    "camera_angle": "Low-angle tracking shot, centered composition.",
    "emotion": [
      "Confident",
      "Empowered",
      "Aloof"
    ],
    "color_palette": [
      "Crimson red",
      "Asphalt grey",
      "Golden yellow",
      "Deep black"
    ],
    "atmosphere": [
      "Urban",
      "Dynamic",
      "Cinematic",
      "Energetic"
    ],
    "environmental_elements": "Steam plumes rising from the ground, motion-blurred traffic, flying pigeons, wet pavement reflecting the sunset.",
    "subject1": {
      "costume": "red mini skirt",
      "subject_expression": "A fierce, confident gaze with slightly parted lips, perhaps wearing vintage sunglasses.",
      "subject_action": "walking on the street"
    },
    "negative_prompt": {
      "exclude_visuals": [
        "empty streets",
        "studio background",
        "overexposed sky",
        "static pose"
      ],
      "exclude_styles": [
        "cartoon",
        "3D render",
        "illustration",
        "anime",
        "sketch"
      ],
      "exclude_colors": [
        "neon green",
        "pastel pink"
      ],
      "exclude_objects": [
        "smartphones",
        "modern cars",
        "futuristic gadgets"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
