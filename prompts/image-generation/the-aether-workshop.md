# 以太坊

## 中文说明

这是一张充满活力、怀旧的快照，展示了两位发明家在阳光普照的蒸汽朋克工作室中合作创作的发条杰作。

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
  "title": "以太工作室",
  "description": "两位发明家在阳光普照的蒸汽朋克工作室中合作创作发条杰作的充满活力、怀旧的快照。",
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象来执行图像编辑。保留他们的核心相似性。以老式柯达彩色胶片的独特风格渲染场景，其特点是高对比度、丰富的饱和度和档案胶片颗粒。受试者 1（男性）是一名专注的蒸汽朋克机械师，正在摆弄黄铜自动机的齿轮。受试者 2（女性）是一名大胆的飞艇飞行员，靠在工作台上，检查一个复杂的装置。他们周围是一个混乱的、阳光明媚的车间，里面堆满了滴答作响的小玩意、蒸汽管道和散落的工具。",
  “详细信息”：{
    "year": "另一个 1890 年代",
    “流派”：“柯达彩色”，
    "location": "一个天花板高、杂乱的阁楼车间，有大拱形窗户，俯瞰烟雾弥漫的工业城市。",
    “照明”：[
      “强烈而温暖的阳光透过布满灰尘的玻璃照射进来”，
      “幻灯片典型的高对比度阴影”，
      《黄金时刻的光芒》
    ],
    "camera_angle": "眼睛水平的中景镜头，营造亲密的纪实感觉。1:1 电影构图。",
    “情感”：[
      “专注”，
      “协作”，
      “有创意”
    ],
    “颜色调色板”：[
      “抛光黄铜金”，
      “深桃花心木棕色”，
      “充满活力的标志性柯达彩色红色”，
      “氧化铜青色”
    ],
    “气氛”：[
      “怀旧”，
      “温暖”，
      “尘土飞扬”，
      “触觉”
    ],
    "environmental_elements": "漂浮的尘埃捕捉到光线，蒸汽从铜管中轻轻排出，蓝图钉在墙上，成堆的齿轮和弹簧。",
    “主题1”：{
      "costume": "一件沾满油脂的白衬衫，卷起的袖子，一条厚重的皮围裙，额头上戴着黄铜焊接护目镜。",
      "subject_expression": "全神贯注，眉头紧锁，调整着精密的机制。",
      "subject_action": "拿着一把精致的螺丝刀并调整机械臂内的金色齿轮。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “霓虹灯”，
        “数字显示器”，
        “塑料材料”，
        “现代时尚”，
        “蓝色色调”
      ],
      “排除样式”：[
        “数字绘画”，
        “3D渲染”，
        “动漫”，
        “黑与白”，
        “仅限棕褐色”，
        “低饱和度”
      ],
      “排除颜色”：[
        “荧光绿”，
        “热粉色”
      ],
      “排除对象”：[
        “计算机”，
        “智能手机”，
        “现代汽车”
      ]
    },
    “主题2”：{
      "costume": "羊毛皮领子的棕色飞行员皮夹克、鲜艳的红色丝巾和帆布长裤。",
      "subject_expression": "好奇且善于分析，指出机器上的具体细节。",
      "subject_action": "一只手靠在工作台上，另一只手拿着卷起的蓝色原理图。"
    }
  }
}
```

---

## English Original

### Title

The Aether Workshop

### Description

A vibrant, nostalgic snapshot of two inventors collaborating on a clockwork masterpiece in a sun-drenched steampunk atelier.

### Prompt

```md
{
  "title": "The Aether Workshop",
  "description": "A vibrant, nostalgic snapshot of two inventors collaborating on a clockwork masterpiece in a sun-drenched steampunk atelier.",
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Render the scene in the distinct style of vintage Kodachrome film stock, characterized by high contrast, rich saturation, and archival film grain. Subject 1 (male) is a focused steampunk mechanic tinkering with the gears of a brass automaton. Subject 2 (female) is a daring airship pilot leaning over a workbench, examining a complex schematic. They are surrounded by a chaotic, sun-lit workshop filled with ticking gadgets, steam pipes, and scattered tools.",
  "details": {
    "year": "Alternate 1890s",
    "genre": "Kodachrome",
    "location": "A high-ceilinged, cluttered attic workshop with large arched windows overlooking a smoggy industrial city.",
    "lighting": [
      "Hard, warm sunlight streaming through dusty glass",
      "High contrast shadows typical of slide film",
      "Golden hour glow"
    ],
    "camera_angle": "Eye-level medium shot, creating an intimate, documentary feel. 1:1 cinematic composition.",
    "emotion": [
      "Focused",
      "Collaborative",
      "Inventive"
    ],
    "color_palette": [
      "Polished brass gold",
      "Deep mahogany brown",
      "Vibrant iconic Kodachrome red",
      "Oxidized copper teal"
    ],
    "atmosphere": [
      "Nostalgic",
      "Warm",
      "Dusty",
      "Tactile"
    ],
    "environmental_elements": "Floating dust motes catching the light, steam venting softly from a copper pipe, blueprints pinned to walls, piles of cogs and springs.",
    "subject1": {
      "costume": "A grease-stained white shirt with rolled sleeves, a heavy leather apron, and brass welding goggles resting on his forehead.",
      "subject_expression": " intense concentration, brow furrowed as he adjusts a delicate mechanism.",
      "subject_action": "Holding a fine screwdriver and tweaking a golden gear inside a robotic arm."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "neon lights",
        "digital displays",
        "plastic materials",
        "modern sleekness",
        "blue hues"
      ],
      "exclude_styles": [
        "digital painting",
        "3D render",
        "anime",
        "black and white",
        "sepia only",
        "low saturation"
      ],
      "exclude_colors": [
        "fluorescent green",
        "hot pink"
      ],
      "exclude_objects": [
        "computers",
        "smartphones",
        "modern cars"
      ]
    },
    "subject2": {
      "costume": "A brown leather aviator jacket with a shearling collar, a vibrant red silk scarf, and canvas trousers.",
      "subject_expression": "Curious and analytical, pointing out a specific detail on the machine.",
      "subject_action": "Leaning one hand on the workbench while holding a rolled-up blue schematic in the other."
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
