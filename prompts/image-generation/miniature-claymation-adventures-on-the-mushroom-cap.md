# 蘑菇帽上的迷你粘土动画冒险

## 中文说明

定格动画风格提示将两个主题转变成放置在巨型蘑菇上的微型手工粘土人物。该图像强调触觉纹理、可见的指纹以及舒适的宏观氛围。

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
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象进行图像编辑。保留他们的核心相似性，但将它们渲染为迷人的手工粘土模型。将受试者 1（男性）和受试者 2（女性）转变为坐在巨大红色蘑菇帽子上的微型冒险家。该场景应该看起来像高预算定格电影中的定格画面，在粘土表面上有可见的指纹和不均匀的雕刻纹理。",
  “详细信息”：{
    “year”：“永恒的奇思妙想”，
    "genre": "粘土动画",
    "location": "宏观森林地面，中心位于一个带有白色斑点的大型红色飞木耳蘑菇顶部。",
    “照明”：[
      “柔和的工作室灯光”，
      “暖键灯”，
      “模拟边缘照明以突出粘土边缘”
    ],
    "camera_angle": "轻微的高角度微距拍摄，浅景深，模拟微型布景。",
    “情感”：[
      “欢乐”，
      “温馨”，
      “奇迹”
    ],
    “颜色调色板”：[
      “充满活力的红色”，
      “苔藓绿”，
      “金丝雀黄”，
      “土棕色”，
      “天蓝色”
    ],
    “气氛”：[
      “好玩”，
      “手工制作”，
      “触觉”，
      “迷人”
    ],
    "environmental_elements": "由扁平的绿色粘土制成的超大草叶，由卷起的橡皮泥制成的带有螺旋壳的蜗牛，以及背景中的棉球云。",
    “主题1”：{
      "costume": "由哑光粘土制成的有纹理的徒步旅行者背心，带有彩绘线条的格子衬衫，以及厚实的棕色靴子。",
      "subject_expression": "宽阔、友好的笑容，略显夸张、圆润的特征。",
      "subject_action": "坐在蘑菇边缘，晃来晃去的双腿，指着一只粘土蝴蝶。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “逼真的皮肤”，
        “人体比例”，
        “发丝”，
        “数字光泽”
      ],
      “排除样式”：[
        “计算机生成图像”，
        “2D卡通”，
        “素描”，
        “动漫”，
        “水彩”
      ],
      “排除颜色”：[
        “霓虹灯”，
        “灰度”，
        “暗沉的喜怒无常的色调”
      ],
      “排除对象”：[
        “现代技术”，
        “汽车”，
        “建筑物”
      ]
    },
    “主题2”：{
      "costume": "光滑、有光泽的黄色雨衣和超大红色雨靴。",
      "subject_expression": "开朗的外表，雕刻的笑纹和明亮的眼睛。",
      "subject_action": "跪在蘑菇帽上，双手捧着一颗巨大的雕刻蓝莓。"
    }
  }
}
```

---

## English Original

### Title

Miniature Claymation Adventures on the Mushroom Cap

### Description

A stop-motion style prompt transforming two subjects into miniature, handcrafted clay figures resting on a giant mushroom. The image emphasizes tactile textures, visible thumbprints, and a cozy, macro-scale atmosphere.

### Prompt

```md
{
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness but render them as charming, handcrafted clay models. Transform Subject 1 (male) and Subject 2 (female) into miniature adventurers resting on the cap of a giant red mushroom. The scene should look like a freeze-frame from a high-budget stop-motion film, complete with visible thumbprints on the clay surfaces and uneven, sculpted textures.",
  "details": {
    "year": "Timeless Whimsy",
    "genre": "Claymation",
    "location": "A macro-scale forest floor, centered on top of a large, red Fly Agaric mushroom with white spots.",
    "lighting": [
      "Soft studio lighting",
      "Warm key light",
      "Simulated rim lighting to highlight clay edges"
    ],
    "camera_angle": "Slight high-angle macro shot with a shallow depth of field to simulate a miniature set.",
    "emotion": [
      "Joyful",
      "Cozy",
      "Wonder"
    ],
    "color_palette": [
      "Vibrant red",
      "moss green",
      "canary yellow",
      "earthy brown",
      "sky blue"
    ],
    "atmosphere": [
      "Playful",
      "Handcrafted",
      "Tactile",
      "Charming"
    ],
    "environmental_elements": "Oversized blades of grass made of flattened green clay, a snail with a spiral shell made of rolled play-dough, and cotton-ball clouds in the background.",
    "subject1": {
      "costume": "A textured hiker's vest made of matte clay, a plaid shirt with painted lines, and chunky brown boots.",
      "subject_expression": "A wide, friendly grin with slightly exaggerated, rounded features.",
      "subject_action": "Sitting on the edge of the mushroom, dangling his legs and pointing at a clay butterfly."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "photorealistic skin",
        "human proportions",
        "hair strands",
        "digital gloss"
      ],
      "exclude_styles": [
        "CGI",
        "2D cartoon",
        "sketch",
        "anime",
        "watercolor"
      ],
      "exclude_colors": [
        "neon",
        "grayscale",
        "dark moody tones"
      ],
      "exclude_objects": [
        "modern technology",
        "cars",
        "buildings"
      ]
    },
    "subject2": {
      "costume": "A yellow raincoat with a smooth, glossy finish and oversized red rain boots.",
      "subject_expression": "A cheerful look with sculpted laugh lines and bright eyes.",
      "subject_action": "Kneeling on the mushroom cap, holding a giant, sculpted blueberry with both hands."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
