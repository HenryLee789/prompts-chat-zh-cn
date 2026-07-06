# 铁锈时代的回声

## 中文说明

两名幸存者在一片完全由废弃技术和生锈金属组成的危险环境中航行。

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
  "title": "铁锈时代的回响",
  "description": "两名幸存者在一片完全由废弃技术和生锈金属组成的危险景观中航行。",
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象进行图像编辑。保留他们的核心相似性。将拍摄对象 1（男性）和拍摄对象 2（女性）设置为垃圾沙漠中的末日流浪者。他们正在穿越由几个世纪的生锈碎片形成的巨大峡谷。图像必须逼真，具有电影灯光、高度详细的皮肤纹理和环境砂砾，在 Arri Alexa 上以浅深度拍摄将他们与混乱的背景隔离开来。",
  “详细信息”：{
    "year": "2189（铁锈时代）",
    "genre": "电影照片写实主义",
    "location": "一个广阔的峡谷不是由岩石形成的，而是由高耸的生锈的集装箱、古老的车辆和纠结的钢筋组成，所有这些都半埋在橙色的沙子里。",
    “照明”：[
      “刺眼、定向的沙漠阳光”，
      “高对比度阴影”，
      “金属表面的黄金时刻边缘照明”
    ],
    "camera_angle": "低角度中特写，强调身后垃圾堆的规模。",
    “情感”：[
      “疲倦”，
      “有韧性”，
      “专注”
    ],
    “颜色调色板”：[
      “铁锈橙”，
      “金属灰”，
      “尘土飞扬的米色”，
      “焦黑”，
      “褪色牛仔蓝”
    ],
    “气氛”：[
      “干旱”，
      《荒凉》、
      “坚韧不拔”，
      “热气腾腾”
    ],
    "environmental_elements": "由金属丝制成的风滚草，闪烁的热雾扭曲了背景，细沙在风中飘扬。",
    “主题1”：{
      "costume": "拼凑而成的皮背心，脖子上有焊接护目镜，沾满油污的战术裤，厚重的靴子。",
      "subject_expression": "对着阳光眯着眼睛，咬紧牙关显示出用力。",
      "subject_action": "将一个沉重的、打捞出来的涡轮发动机部件拖到肩上。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “干净的衣服”，
        “水”，
        “植被”，
        “茂密的森林”，
        “蓝天”，
        “铺好的道路”，
        “奢侈品”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “插图”，
        “素描”，
        “低分辨率”，
        “模糊”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “饱和紫色”，
        “干净的白色”
      ],
      “排除对象”：[
        “汽车状况良好”，
        “现代智能手机”，
        “塑料”
      ]
    },
    “主题2”：{
      "costume": "多层沙漠亚麻包裹物、用生锈的车牌制成的临时肩甲、无指手套。",
      "subject_expression": "警惕并扫视地平线，睁大眼睛，专注。",
      "subject_action": "指向废料堆中远处的缺口，标志着一条安全的前进道路。"
    }
  }
}
```

---

## English Original

### Title

Echoes of the Rust Age

### Description

Two survivors navigate a treacherous landscape composed entirely of discarded technology and rusted metal.

### Prompt

```md
{
  "title": "Echoes of the Rust Age",
  "description": "Two survivors navigate a treacherous landscape composed entirely of discarded technology and rusted metal.",
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Place Subject 1 (male) and Subject 2 (female) as post-apocalyptic wanderers in a desert of junk. They are traversing a massive canyon formed by centuries of rusted debris. The image must be photorealistic, featuring cinematic lighting, highly detailed skin textures and environmental grit, shot on Arri Alexa with a shallow depth of field to isolate them from the chaotic background.",
  "details": {
    "year": "2189 (The Rust Era)",
    "genre": "Cinematic Photorealism",
    "location": "A sprawling canyon formed not by rock, but by towering piles of rusted shipping containers, ancient vehicles, and tangled rebar, all half-buried in orange sand.",
    "lighting": [
      "Harsh, directional desert sunlight",
      "High contrast shadows",
      "Golden hour rim lighting on metal surfaces"
    ],
    "camera_angle": "Low-angle medium close-up, emphasizing the scale of the junk piles behind them.",
    "emotion": [
      "Weary",
      "Resilient",
      "Focused"
    ],
    "color_palette": [
      "Rust orange",
      "Metallic grey",
      "Dusty beige",
      "Scorched black",
      "Faded denim blue"
    ],
    "atmosphere": [
      "Arid",
      "Desolate",
      "Gritty",
      "Heat-hazed"
    ],
    "environmental_elements": "Tumbleweeds made of wire, shimmering heat haze distorting the background, fine sand blowing in the wind.",
    "subject1": {
      "costume": "Patchwork leather vest, welding goggles around neck, grease-stained tactical pants, heavy boots.",
      "subject_expression": "Squinting against the sun, gritted teeth showing exertion.",
      "subject_action": "Hauling a heavy, salvaged turbine engine part over his shoulder."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "clean clothing",
        "water",
        "vegetation",
        "lush forests",
        "blue sky",
        "paved roads",
        "luxury items"
      ],
      "exclude_styles": [
        "cartoon",
        "3d render",
        "illustration",
        "sketch",
        "low resolution",
        "blurry"
      ],
      "exclude_colors": [
        "neon green",
        "saturated purple",
        "clean white"
      ],
      "exclude_objects": [
        "cars in good condition",
        "modern smartphones",
        "plastic"
      ]
    },
    "subject2": {
      "costume": "Layers of desert linen wraps, makeshift shoulder armor made from a rusted license plate, fingerless gloves.",
      "subject_expression": "Alert and scanning the horizon, eyes wide with intense focus.",
      "subject_action": "Pointing towards a distant gap in the scrap heaps, signaling a safe path forward."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
