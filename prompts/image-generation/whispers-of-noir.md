# 黑色的低语

## 中文说明

影片描绘了一位冷酷侦探在朦胧的地下爵士乐休息室里等待线索的坚韧电影形象。

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
  “title”：“黑色的低语”，
  "description": "一个坚韧的、电影般的肖像，描绘了一位冷酷的侦探在一个朦胧的地下爵士乐休息室里等待线索。",
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象来执行图像编辑。保留核心相似性。将拍摄对象 1（男性）转变为一位疲惫的 1950 年代私家侦探，坐在烟雾缭绕的爵士俱乐部内的豪华天鹅绒展位上。将图像渲染为超真实感电影剧照，利用电影灯光强调他的皮肤纹理和周围旋转的烟雾。图像必须非常详细，拍摄于Arri Alexa 采用浅景深来模糊背景中的乐队，并遵循 1:1 的宽高比。",
  “详细信息”：{
    “年份”：“1954年”，
    "genre": "电影照片写实主义",
    "location": "Blue Velvet Lounge，一个拥有桃花心木墙壁和昏暗台灯的地下俱乐部。",
    “照明”：[
      “明暗对比”，
      “温暖的台灯光芒”，
      “舞台上凉爽的蓝色背光”，
      “穿过烟雾的体积光束”
    ],
    "camera_angle": "眼平中特写，重点关注拍摄对象的脸部。",
    “情感”：[
      “怀疑”，
      “厌世”，
      “专注”
    ],
    “颜色调色板”：[
      “威士忌琥珀”，
      “丝绒红”，
      “深影黑”，
      “烟草烟灰”
    ],
    “气氛”：[
      “闷热”，
      “紧张”，
      “幽闭恐惧症”，
      “复古”
    ],
    "environmental_elements": "空气中弥漫着浓浓的香烟烟雾，桌子上放着一杯琥珀色液体的水晶杯，背景中音乐家的轮廓模糊。",
    “主题1”：{
      "costume": "有纹理的木炭风衣搭配皱巴巴的西装，系着宽松的领带，软呢帽稍微向前倾斜。",
      "subject_expression": "目光锐利、愤世嫉俗，眯起眼睛，下巴紧绷。",
      "subject_action": "将一只手放在一杯半空的威士忌旁边，稍微倾斜到光线下。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “明亮的白天”，
        “现代技术”，
        “手机”，
        “霓虹灯标志”，
        “干净的空气”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “动漫”，
        “素描”，
        “绘画”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “艳粉色”，
        “纯白”
      ],
      “排除对象”：[
        “汽车”，
        “数字手表”，
        “第二人”
      ]
    }
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Whispers of Noir

### Description

A gritty, cinematic portrait of a hard-boiled detective waiting for a lead in a hazy, underground jazz lounge.

### Prompt

```md
{
  "title": "Whispers of Noir",
  "description": "A gritty, cinematic portrait of a hard-boiled detective waiting for a lead in a hazy, underground jazz lounge.",
  "prompt": "You will perform an image edit using the person from the provided photo as the main subject. Preserve the core likeness. Transform Subject 1 (male) into a weary 1950s private investigator seated in a plush velvet booth within a smoke-filled jazz club. Render the image as an ultra-photorealistic movie still, utilizing cinematic lighting that emphasizes the texture of his skin and the swirling smoke around him. The image must be highly detailed, shot on Arri Alexa with a shallow depth of field to blur the band in the background, adhering to a 1:1 aspect ratio.",
  "details": {
    "year": "1954",
    "genre": "Cinematic Photorealism",
    "location": "The Blue Velvet Lounge, a subterranean club with mahogany walls and dim table lamps.",
    "lighting": [
      "Chiaroscuro",
      "Warm table lamp glow",
      "Cool blue backlighting from the stage",
      "Volumetric light beams through smoke"
    ],
    "camera_angle": "Eye-level medium close-up, focusing intensely on the subject's face.",
    "emotion": [
      "Suspicion",
      "World-weariness",
      "Focused"
    ],
    "color_palette": [
      "Whiskey amber",
      "Velvet red",
      "Deep shadow black",
      "Tobacco smoke grey"
    ],
    "atmosphere": [
      "Sultry",
      "Tense",
      "Claustrophobic",
      "Vintage"
    ],
    "environmental_elements": "Thick clouds of cigarette smoke hanging in the air, a crystal tumbler of amber liquid on the table, blurred silhouettes of musicians in the background.",
    "subject1": {
      "costume": "A textured charcoal trench coat over a rumpled suit, with a loose tie and a fedora tilted slightly forward.",
      "subject_expression": "A piercing, cynical gaze with narrowed eyes and a tight jaw.",
      "subject_action": "Resting one hand near a half-empty glass of whiskey, leaning slightly into the light."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "bright daylight",
        "modern technology",
        "cell phones",
        "neon signs",
        "clean air"
      ],
      "exclude_styles": [
        "cartoon",
        "3d render",
        "anime",
        "sketch",
        "painting"
      ],
      "exclude_colors": [
        "neon green",
        "hot pink",
        "pure white"
      ],
      "exclude_objects": [
        "cars",
        "digital watches",
        "second person"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
