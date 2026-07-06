# 终端速度

## 中文说明

一个高风险的动作框架捕捉到一名妇女在火花和混乱中冲过摇摇欲坠的工业隧道的画面。

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
  "title": "终端速度",
  "description": "一个高风险的动作框架，捕捉到一名妇女在火花和混乱中冲过摇摇欲坠的工业隧道的画面。",
  "prompt": "你将执行图像编辑，以创建超真实感、电影品质的动作镜头。结果必须真实、高度详细，并具有电影照明效果。以浅景深模拟在 Arri Alexa 上拍摄的大片电影的外观。描绘对象 1 在黑暗、坍塌的工业隧道中冲向相机，周围是飞溅的火花和掉落的碎片。",
  “详细信息”：{
    "year": "当代动作惊悚片",
    "genre": "电影照片写实主义",
    "location": "一条破旧、充满蒸汽的工业维修隧道，灯光闪烁，电线裸露。",
    “照明”：[
      “高对比度明暗对比”，
      “爆炸火花带来的温暖背光”，
      “冰冷、粗糙的荧光环境光”，
      “通过蒸汽实现体积照明”
    ],
    "camera_angle": "低角度正面跟踪拍摄，背景上有运动模糊。",
    “情感”：[
      “肾上腺素”，
      “恐慌”，
      《决心》
    ],
    “颜色调色板”：[
      “混凝土灰”，
      “危险橙”，
      “钢蓝色”，
      《深影黑》
    ],
    “气氛”：[
      “混乱”，
      “爆炸”，
      “坚韧不拔”，
      “幽闭恐惧症”
    ],
    "environmental_elements": "层叠的电火花、运动模糊的碎片、破裂管道中排出的蒸汽、潮湿的混凝土地板反映了混乱。",
    “主题1”：{
      "costume": "黑色迷你裙、白色短上衣、皮革无指手套",
      "subject_expression": "全神贯注，用力时嘴巴微张，汗水在皮肤上闪闪发光，头发向后飞扬。",
      “subject_action”：“正在运行”
    },
    “否定提示”：{
      “排除视觉效果”：[
        “阳光”，
        “安静的环境”，
        “清洁表面”，
        “微笑”，
        “站着不动”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “插图”，
        “素描”，
        “低分辨率”
      ],
      “排除颜色”：[
        “淡粉色”，
        “充满活力的绿色”，
        “柔和的色彩”
      ],
      “排除对象”：[
        “树”，
        “天空”，
        “动物”，
        “车辆”
      ]
    }
  }
}
```

---

## English Original

### Title

Terminal Velocity

### Description

A high-stakes action frame capturing a woman sprinting through a crumbling industrial tunnel amidst sparks and chaos.

### Prompt

```md
{
  "title": "Terminal Velocity",
  "description": "A high-stakes action frame capturing a woman sprinting through a crumbling industrial tunnel amidst sparks and chaos.",
  "prompt": "You will perform an image edit to create an Ultra-Photorealistic, Movie-Quality action shot. The result must be photorealistic, highly detailed, and feature cinematic lighting. Emulate the look of a blockbuster film shot on Arri Alexa with a shallow depth of field. Depict Subject 1 sprinting towards the camera in a dark, collapsing industrial tunnel, surrounded by flying sparks and falling debris.",
  "details": {
    "year": "Contemporary Action Thriller",
    "genre": "Cinematic Photorealism",
    "location": "A dilapidated, steam-filled industrial maintenance tunnel with flickering lights and exposed wiring.",
    "lighting": [
      "High-contrast chiaroscuro",
      "Warm backlight from exploding sparks",
      "Cold, gritty fluorescent ambient light",
      "Volumetric lighting through steam"
    ],
    "camera_angle": "Low-angle frontal tracking shot with motion blur on the background.",
    "emotion": [
      "Adrenaline",
      "Panic",
      "Determination"
    ],
    "color_palette": [
      "Concrete grey",
      "Hazard orange",
      "Steel blue",
      "Deep shadow black"
    ],
    "atmosphere": [
      "Chaotic",
      "Explosive",
      "Gritty",
      "Claustrophobic"
    ],
    "environmental_elements": "Cascading electrical sparks, motion-blurred debris, steam venting from broken pipes, wet concrete floor reflecting the chaos.",
    "subject1": {
      "costume": "black mini skirt, white crop top, leather fingerless gloves",
      "subject_expression": "Intense focus with mouth slightly parted in exertion, sweat glistening on skin, hair flying back.",
      "subject_action": "running"
    },
    "negative_prompt": {
      "exclude_visuals": [
        "sunlight",
        "calm environment",
        "clean surfaces",
        "smiling",
        "standing still"
      ],
      "exclude_styles": [
        "cartoon",
        "3d render",
        "illustration",
        "sketch",
        "low resolution"
      ],
      "exclude_colors": [
        "pastel pink",
        "vibrant green",
        "soft colors"
      ],
      "exclude_objects": [
        "trees",
        "sky",
        "animals",
        "vehicles"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
