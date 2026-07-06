# 蓝色音符的阴影

## 中文说明

一位疲惫的侦探和一位迷人的线人在 20 世纪 50 年代烟雾缭绕的爵士乐休息室里进行了一场紧张而高风险的会面。

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
  "title": "蓝色音符的阴影",
  "description": "一位疲惫的侦探和一位迷人的线人在烟雾弥漫的 20 世纪 50 年代爵士乐休息室里进行了一场紧张、高风险的会面。",
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象进行图像编辑。保留他们的核心相似性。将拍摄对象 1（男性）和拍摄对象 2（女性）转换为 20 世纪 50 年代经典黑色电影中的角色。拍摄对象 1 是一位粗犷的私家侦探，拍摄对象 2 是一位优雅的蛇蝎美人。他们坐在灯光昏暗、烟雾弥漫的爵士俱乐部的一个僻静的隔间里。图像必须是超真实感，利用电影灯光创建深阴影和高光，场景应该看起来像高预算大片中的帧，由 Arri Alexa 拍摄，细节丰富，浅景深专注于他们的激烈互动。”,
  “详细信息”：{
    “年份”：“1954年”，
    "genre": "电影照片写实主义",
    "location": "纽约市一家高档、灯光昏暗的爵士俱乐部的天鹅绒内饰。",
    “照明”：[
      “低调的黑色灯光”，
      “穿过浓烟的体积光轴”，
      “台灯发出温暖的钨丝光”
    ],
    "camera_angle": "中等过肩镜头，浅景深模糊背景。",
    “情感”：[
      “悬疑”，
      “秘密”，
      “有趣”
    ],
    “颜色调色板”：[
      “深沉的黑色黑人”，
      “烟草棕”，
      “丝绒红”，
      “金琥珀”
    ],
    “气氛”：[
      “烟熏”，
      “闷热”，
      “危险”，
      “电影化”
    ],
    "environmental_elements": "空气中弥漫着浓浓的香烟烟雾，桌上摆着水晶威士忌酒杯，背景是模糊的低音提琴手。",
    “主题1”：{
      "costume": "一件皱巴巴的米色风衣、一件白色正装衬衫、一条宽松的领带和一顶毡帽。",
      "subject_expression": "严肃、坚毅的鬼脸，眯起眼睛专注。",
      "subject_action": "向前倾过桌子，用一只手挡住打火机的火焰。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “白天”，
        “现代技术”，
        “智能手机”，
        “霓虹灯”，
        “鲜艳的色彩”
      ],
      “排除样式”：[
        “卡通”，
        “素描”，
        “绘画”，
        “3D渲染”，
        “动漫”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “艳粉色”，
        “明亮的蓝色”
      ],
      “排除对象”：[
        “汽车”，
        “电视”，
        “太阳镜”
      ]
    },
    “主题2”：{
      "costume": "深红色丝绸晚礼服、长缎手套和珍珠项链。",
      "subject_expression": "神秘的侧眼一瞥，嘴唇微微张开。",
      "subject_action": "一边优雅地将长烟嘴靠近脸，一边低声说出秘密。"
    }
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Shadows of the Blue Note

### Description

A tense, high-stakes meeting between a weary detective and a glamorous informant in a smoky 1950s jazz lounge.

### Prompt

```md
{
  "title": "Shadows of the Blue Note",
  "description": "A tense, high-stakes meeting between a weary detective and a glamorous informant in a smoky 1950s jazz lounge.",
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Transform Subject 1 (male) and Subject 2 (female) into characters from a classic 1950s film noir. Subject 1 is a rugged private investigator, and Subject 2 is an elegant femme fatale. They are seated at a secluded booth in a dimly lit, smoke-filled jazz club. The image must be ultra-photorealistic, utilizing cinematic lighting to create deep shadows and highlights. The scene should look like a frame from a high-budget blockbuster movie, shot on Arri Alexa, highly detailed, with a shallow depth of field focusing on their intense interaction.",
  "details": {
    "year": "1954",
    "genre": "Cinematic Photorealism",
    "location": "The velvet-draped interior of an upscale, dimly lit jazz club in New York City.",
    "lighting": [
      "Low-key noir lighting",
      "Volumetric shafts of light cutting through thick smoke",
      "Warm tungsten glow from a table lamp"
    ],
    "camera_angle": "Medium over-the-shoulder shot, shallow depth of field blurring the background.",
    "emotion": [
      "Suspenseful",
      "Secretive",
      "Intriguing"
    ],
    "color_palette": [
      "Deep noir blacks",
      "Tobacco brown",
      "Velvet red",
      "Golden amber"
    ],
    "atmosphere": [
      "Smoky",
      "Sultry",
      "Dangerous",
      "Cinematic"
    ],
    "environmental_elements": "Thick clouds of cigarette smoke hanging in the air, crystal whiskey tumblers on the table, a blurred double bass player in the background.",
    "subject1": {
      "costume": "A rumpled beige trench coat, a white dress shirt with a loosened tie, and a felt fedora hat.",
      "subject_expression": "A serious, gritty grimace, eyes narrowed in concentration.",
      "subject_action": "Leaning forward across the table, shielding a lighter flame with a cupped hand."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "daylight",
        "modern technology",
        "smartphones",
        "neon lights",
        "bright colors"
      ],
      "exclude_styles": [
        "cartoon",
        "sketch",
        "painting",
        "3D render",
        "anime"
      ],
      "exclude_colors": [
        "neon green",
        "hot pink",
        "bright blue"
      ],
      "exclude_objects": [
        "cars",
        "television",
        "sunglasses"
      ]
    },
    "subject2": {
      "costume": "A crimson silk evening gown, long satin gloves, and a pearl necklace.",
      "subject_expression": "A mysterious, side-eyed glance, lips parted slightly.",
      "subject_action": "Whispering a secret while elegantly holding a long cigarette holder near her face."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
