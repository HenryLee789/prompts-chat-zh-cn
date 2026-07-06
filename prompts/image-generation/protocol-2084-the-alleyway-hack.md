# 协议 2084：巷道黑客

## 中文说明

反乌托邦未来的电影品质快照。在潮湿、碎片遍布的街道上，一名网络狂人紧急与神经技术互动，捕捉高科技下层社会的紧张气氛。

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
  "prompt": "你将进行图像编辑，将男性主体转变为在坚韧的高科技未来中的逃犯。结果必须是超真实感、电影品质的图像，类似于 IMAX 大片的帧。场景设置在主体隐藏的被雨水打湿的霓虹灯小巷中。确保图像高度细致，利用电影灯光和逼真的物理原理，在 Arri Alexa 上拍摄，并使用浅景深来隔离从混乱的背景中突出主体。",
  “详细信息”：{
    “年份”：“${year:2084}”，
    "genre": "电影照片写实主义",
    "location": "垂直建造的赛博朋克大城市中一条狭窄的、碎片遍布的小巷。地面是潮湿的沥青，反射着摩天大楼上霓虹灯汉字标志的混乱光芒。",
    “照明”：[
      “体积霓虹蓝和洋红色背光”，
      “脸上柔和凉爽的补光”，
      “高对比度阴影”，
      “潮湿表面上的镜面高光”
    ],
    "camera_angle": "与眼睛水平的中景镜头，浅景深（散景背景），聚焦于拍摄对象的强烈表情。",
    “情感”：[
      “偏执狂”，
      “专注”，
      “紧急”
    ],
    “颜色调色板”：[
      “电青色”，
      “霓虹粉红”，
      《深影黑》，
      《银雨》、
      《冷蓝》
    ],
    “气氛”：[
      “反乌托邦”，
      “幽闭恐惧症”，
      “湿”，
      “坚韧不拔”，
      “高科技低生活”
    ],
    "environmental_elements": "落下的雨滴及时冻结，旋转的蒸汽从通风口升起，闪烁的全息广告反射在泥泞的水坑中。",
    “主题1”：{
      "costume": "一件质感十足、防水的黑色科技风衣，带有发光的几何图案，无指战术手套，镜腿上可见金属神经接口端口。",
      "subject_expression": "高度集中，夹杂着焦虑，汗水和雨水从脸上滴落。",
      "subject_action": "在从手腕上安装的网络平台投射的浮动全息键盘上快速打字，同时回头扫视他的肩膀。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “白天”，
        “阳光”，
        “蓝天”，
        “清洁表面”，
        “干燥”，
        “温暖的灯光”
      ],
      “排除样式”：[
        “卡通”，
        “动漫”，
        “3D渲染”，
        “绘画”，
        “低分辨率”，
        “模糊”，
        “素描”
      ],
      “排除颜色”：[
        “温暖的棕褐色”，
        “粉彩”，
        “亮白”，
        “米色”
      ],
      “排除对象”：[
        “汽车”，
        “树”，
        “宠物”，
        “花”
      ]
    }
  }
}
```

---

## English Original

### Title

Protocol 2084: The Alleyway Hack

### Description

A movie-quality snapshot of a dystopian future. Amidst the wet, debris-strewn streets, a netrunner urgently interacts with neural tech, capturing the tension of high-tech low-life society.

### Prompt

```md
{
  "prompt": "You will perform an image edit transforming the male subject into a fugitive netrunner in a gritty, high-tech future. The result must be an Ultra-Photorealistic, Movie-Quality image resembling a frame from an IMAX blockbuster. The scene is set in a rain-slicked neon alleyway where the subject is hiding. Ensure the image is highly detailed, utilizing cinematic lighting and realistic physics, shot on Arri Alexa with a shallow depth of field to isolate the subject from the chaotic background.",
  "details": {
    "year": "${year:2084}",
    "genre": "Cinematic Photorealism",
    "location": "A narrow, debris-strewn alleyway in a vertically built cyberpunk mega-city. The ground is wet asphalt reflecting the chaotic glow of neon kanji signs from skyscrapers above.",
    "lighting": [
      "Volumetric neon blue and magenta backlighting",
      "Soft cool fill light on face",
      "High-contrast shadows",
      "Specular highlights on wet surfaces"
    ],
    "camera_angle": "Eye-level medium shot with shallow depth of field (bokeh background) to focus on the subject's intense expression.",
    "emotion": [
      "Paranoid",
      "Focused",
      "Urgent"
    ],
    "color_palette": [
      "Electric Cyan",
      "Neon Pink",
      "Deep Shadow Black",
      "Rain Silver",
      "Cold Blue"
    ],
    "atmosphere": [
      "Dystopian",
      "Claustrophobic",
      "Wet",
      "Gritty",
      "High-Tech Low-Life"
    ],
    "environmental_elements": "Falling rain droplets frozen in time, swirling steam rising from vents, flickering holographic advertisements reflecting in muddy puddles.",
    "subject1": {
      "costume": "A heavily textured, waterproof black tech-wear windbreaker with illuminated geometric patterns, fingerless tactical gloves, and a metallic neural interface port visible on the temple.",
      "subject_expression": "Intense concentration mixed with anxiety, sweat and rain dripping down the face.",
      "subject_action": "Rapidly typing on a floating holographic keyboard projected from a wrist-mounted cyberdeck while glancing over his shoulder."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "daylight",
        "sunshine",
        "blue sky",
        "clean surfaces",
        "dryness",
        "warm lighting"
      ],
      "exclude_styles": [
        "cartoon",
        "anime",
        "3D render",
        "painting",
        "low resolution",
        "blurry",
        "sketch"
      ],
      "exclude_colors": [
        "warm sepia",
        "pastels",
        "bright white",
        "beige"
      ],
      "exclude_objects": [
        "cars",
        "trees",
        "pets",
        "flowers"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
