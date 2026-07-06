# 最后的柔板

## 中文说明

一位孤独的芭蕾舞演员在被洪水淹没、废弃的大图书馆里表演的美丽场景令人难以忘怀。

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
  "title": "最后的慢板",
  "description": "一位孤独的芭蕾舞演员在被洪水淹没、废弃的大图书馆里表演的令人难以忘怀的美丽场景。",
  "prompt": "你将使用提供的主题进行图像编辑。将对象 1（女性）转变为后世界末日世界的幸存者。她身处一个巨大、腐烂的图书馆，地板上充满了水。光线从倒塌的天花板溢出，照亮尘埃微粒和水的倒影。图像必须逼真，利用电影灯光、高度详细的纹理，在 Arri Alexa 上拍摄，浅景深以聚焦于主题，同时背景陷入柔和的散景中。",
  “详细信息”：{
    "year": "后崩溃时代",
    "genre": "电影照片写实主义",
    "location": "一座宏伟的废弃图书馆，里面有高耸的书架、摇摇欲坠的建筑，地板上充满了静止的反光水。",
    “照明”：[
      “上帝的光芒从倒塌的屋顶射入”，
      “来自水面的柔和反射光”，
      “高对比度电影阴影”
    ],
    "camera_angle": "低角度、广角镜头，捕捉水中的倒影。",
    “情感”：[
      “忧郁”，
      “优雅”，
      “孤独”
    ],
    “颜色调色板”：[
      “去饱和混凝土灰色”，
      “柔和的青色水”，
      “充满活力的深红色”，
      《尘土飞扬的金光》
    ],
    “气氛”：[
      “空灵”，
      “孤独”，
      “安静”，
      “雄伟”
    ],
    "environmental_elements": "旧书中的浮动页面，光轴中舞动的灰尘颗粒，水中的涟漪。",
    “主题1”：{
      "costume": "一件做旧、肮脏的白色芭蕾舞紧身衣，搭配原始的红色手套。",
      "subject_expression": "平静，闭上眼睛，沉浸在运动中。",
      "subject_action": "跳舞"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “明媚的阳光”，
        “干净的环境”，
        “现代技术”，
        “观众”
      ],
      “排除样式”：[
        “卡通”，
        “绘画”，
        “素描”，
        “3D渲染”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “亮橙色”
      ],
      “排除对象”：[
        “汽车”，
        “动物”，
        “电话”
      ]
    }
  }
}
```

---

## English Original

### Title

The Last Adagio

### Description

A hauntingly beautiful scene of a solitary ballerina performing in a flooded, abandoned grand library.

### Prompt

```md
{
  "title": "The Last Adagio",
  "description": "A hauntingly beautiful scene of a solitary ballerina performing in a flooded, abandoned grand library.",
  "prompt": "You will perform an image edit using the provided subject. Transform Subject 1 (female) into a survivor in a post-apocalyptic world. She is in a massive, decaying library where the floor is flooded with water. Light spills through the collapsed ceiling, illuminating dust motes and water reflections. The image must be photorealistic, utilizing cinematic lighting, highly detailed textures, shot on Arri Alexa with a shallow depth of field to focus on the subject while the background falls into soft bokeh.",
  "details": {
    "year": "Post-Collapse Era",
    "genre": "Cinematic Photorealism",
    "location": "A grand, abandoned library with towering shelves, crumbling architecture, and a floor flooded with still, reflective water.",
    "lighting": [
      "God rays entering from a collapsed roof",
      "Soft reflected light from the water",
      "High contrast cinematic shadows"
    ],
    "camera_angle": "Low angle, wide shot, capturing the reflection in the water.",
    "emotion": [
      "Melancholic",
      "Graceful",
      "Solitary"
    ],
    "color_palette": [
      "Desaturated concrete greys",
      "Muted teal water",
      "Vibrant crimson",
      "Dusty gold light"
    ],
    "atmosphere": [
      "Ethereal",
      "Lonely",
      "Quiet",
      "Majestic"
    ],
    "environmental_elements": "Floating pages from old books, dust particles dancing in light shafts, ripples in the water.",
    "subject1": {
      "costume": "A distressed, dirty white ballet leotard paired with pristine red gloves.",
      "subject_expression": "Serene, eyes closed, lost in the movement.",
      "subject_action": "dancing"
    },
    "negative_prompt": {
      "exclude_visuals": [
        "bright sunshine",
        "clean environment",
        "modern technology",
        "spectators"
      ],
      "exclude_styles": [
        "cartoon",
        "painting",
        "sketch",
        "3D render"
      ],
      "exclude_colors": [
        "neon green",
        "bright orange"
      ],
      "exclude_objects": [
        "cars",
        "animals",
        "phones"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
