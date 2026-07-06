# 冷战的阴影：1962 年的交换

## 中文说明

铁桥上，浓浓的河雾笼罩着一场紧张的秘密会议。这个电影中景特写使用体积照明来突出两名间谍之间皮革档案的紧急交接，以浅景深捕捉那个时代的令人毛骨悚然的气氛。

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
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象来执行图像编辑。保留他们的核心相似性。创建一个超真实、电影品质的场景，将对象 1（男性）和对象 2（女性）描绘成冷战期间在雾蒙蒙的铁桥上会面的秘密间谍。该图像必须看起来像在 Arri Alexa 上拍摄的高预算大片电影中的帧。使用电影照明来创建深阴影和高光。场景细节丰富，景深较浅。拍摄对象 1 正在将秘密包裹交给拍摄对象 2。构图遵循电影般的 1:1 宽高比。",
  “详细信息”：{
    “年份”：“1962年”，
    "genre": "电影照片写实主义",
    "location": "午夜的格林尼克桥，被浓浓的河雾遮蔽，被昏暗的黄色路灯照亮。",
    “照明”：[
      “体积雾照明”，
      “黑色风格明暗对比”，
      “轮廓上的边缘照明”，
      “柔和的黄色钨丝光芒”
    ],
    "camera_angle": "眼平中等特写，浅景深，将拍摄对象与雾蒙蒙的背景隔离开来。",
    “情感”：[
      “悬疑”，
      “紧急”，
      《秘密》
    ],
    “颜色调色板”：[
      “钢蓝色”，
      “雾灰色”，
      “钨琥珀”，
      “深黑”，
      “充满活力的深红色”
    ],
    “气氛”：[
      “冷”，
      “紧张”，
      “电影化”，
      “神秘”
    ],
    "environmental_elements": "从下面的水中升起的漩涡雾气、潮湿的铁栏杆、远处老式检查站车辆模糊的车头灯。",
    “主题1”：{
      "costume": "一件有纹理的木炭羊毛短大衣，领子翻起来挡风。",
      "subject_expression": "焦虑，额头冒汗，眼睛紧张地转动。",
      "subject_action": "巧妙地将皮革档案滑过栏杆，滑向受试者 2。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “白天”，
        “阳光”，
        “现代汽车”，
        “手机”，
        “霓虹灯招牌”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “素描”，
        “动漫”，
        “印象派”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “艳粉色”，
        “柔和的色彩”
      ],
      “排除对象”：[
        “雨伞”，
        “人群”，
        “现代建筑”
      ]
    },
    “主题2”：{
      "costume": "经典米色风衣，腰间系腰带，戴着红色帽子。",
      "subject_expression": "坚忍而沉着，眼神锐利而精于算计。",
      "subject_action": "伸出一只戴着黑色皮手套的手截取档案，同时回头查看。"
    }
  }
}
```

---

## English Original

### Title

Shadows of the Cold War: The 1962 Exchange

### Description

A tense, clandestine meeting shrouded in thick river fog on an iron bridge. This cinematic medium close-up uses volumetric lighting to highlight the urgent handoff of a leather dossier between two spies, capturing the chilling atmosphere of the era with shallow depth of field.

### Prompt

```md
{
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Create an Ultra-Photorealistic, Movie-Quality scene depicting Subject 1 (male) and Subject 2 (female) as covert spies meeting on a foggy, iron bridge during the Cold War. The image must look like a frame from a high-budget blockbuster movie shot on Arri Alexa. Use cinematic lighting to create deep shadows and highlights. The scene is highly detailed with a shallow depth of field. Subject 1 is handing off a secret package to Subject 2. The composition adheres to a cinematic 1:1 aspect ratio.",
  "details": {
    "year": "1962",
    "genre": "Cinematic Photorealism",
    "location": "The Glienicke Bridge at midnight, obscured by thick river fog and illuminated by dim, yellow streetlamps.",
    "lighting": [
      "Volumetric fog lighting",
      "Noir style chiaroscuro",
      "Rim lighting on silhouettes",
      "Soft yellow tungsten glow"
    ],
    "camera_angle": "Eye-level medium closeup with a shallow depth of field to isolate the subjects from the misty background.",
    "emotion": [
      "Suspenseful",
      "Urgent",
      "Clandestine"
    ],
    "color_palette": [
      "Steel blue",
      "Fog gray",
      "Tungsten amber",
      "Deep black",
      "Vibrant crimson"
    ],
    "atmosphere": [
      "Cold",
      "Tense",
      "Cinematic",
      "Mysterious"
    ],
    "environmental_elements": "Swirling mist rising from the water below, damp iron railings, the distant blurred headlights of a vintage checkpoint vehicle.",
    "subject1": {
      "costume": "A textured charcoal wool peacoat with the collar turned up against the wind.",
      "subject_expression": "Anxious, with sweat glistening on his brow and eyes darting nervously.",
      "subject_action": "Subtly sliding a leather dossier across the railing towards Subject 2."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "daylight",
        "sunshine",
        "modern cars",
        "cell phones",
        "neon signs"
      ],
      "exclude_styles": [
        "cartoon",
        "3D render",
        "sketch",
        "anime",
        "impressionist"
      ],
      "exclude_colors": [
        "neon green",
        "hot pink",
        "pastel colors"
      ],
      "exclude_objects": [
        "umbrellas",
        "crowds",
        "modern architecture"
      ]
    },
    "subject2": {
      "costume": "A classic beige trench coat belted at the waist and a red hat.",
      "subject_expression": "Stoic and composed, with a piercing, calculating gaze.",
      "subject_action": "Reaching out with a black leather-gloved hand to intercept the dossier while looking over her shoulder."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
