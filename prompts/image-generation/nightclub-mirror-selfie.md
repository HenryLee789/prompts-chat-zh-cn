# 夜店镜子自拍

## 中文说明

在伊斯坦布尔一家夜总会浴室内拍摄的一张高能量镜子自拍照，被镜子中反射的强烈 iPhone 闪光灯照亮。该场景传达了真实的深夜气氛。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Nano Banana、Entertainment 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "description": "伊斯坦布尔一家夜总会浴室里的镜子自拍照中捕捉到了一位自信的年轻女性，在夜间外出时的样子。她充满活力的俱乐部活力，跳舞时略带出汗，面部色调没有潮红或过红。她的皮肤干净，没有纹身。",
    “身体”：{
      "type": "曲线优美、女性化的轮廓。",
      "details": "自然比例，因热量和运动而产生微妙的汗水光泽。中腹部可见；领口具有雅致、适合夜生活的低领设计。脸部保持中性色调和自然。",
      “pose”：“站在浴室镜子前，以经典的镜子自拍构图直接面对它。手机本身大部分都在框架之外，但闪光灯反射和框架清楚地表明 iPhone 前置摄像头拍摄的照片。”
    }
  },
  “衣柜”：{
    "top": "精致的蕾丝吊带背心式衬衫，配有细肩带，适合夜店风格，具有柔软的低领设计。",
    "bottom": "适合夜晚外出的高腰短裤或合身迷你裙。",
    "bag": "小肩包自然挂在肩上。",
    “配件”：“脖子上的分层项链、手腕上的手镯、戒指和可见的耳环。”
  },
  “场景”：{
    "location": "伊斯坦布尔夜总会浴室内。",
    "background": "现代俱乐部浴室配有大镜子、瓷砖或混凝土墙、水槽以及微妙的霓虹灯或温暖的环境照明。",
    “细节”：“干净放置的标牌，如出口或卫生间，自然地放置在墙壁或门上方。这些标牌在镜子和光滑表面上柔和地反射，增加了深度和真实感。镜子上的光凝结和逼真的表面磨损增强了深夜的氛围。”
  },
  “相机”：{
    "angle": "镜子自拍视角。",
    "device": "iPhone，可通过特征闪光强度、色温和镜头放置反射来识别。",
    “纵横比”：“9:16”，
    “flash”：“开启，产生明亮、锐利的 iPhone 式闪光，在镜子中清晰反射。”
  },
  “照明”：{
    "type": "直接 iPhone 闪光灯与昏暗的夜总会浴室照明相结合。",
    “质量”：“皮肤和蕾丝织物纹理上的高对比度闪光高光、清晰的镜面反射、可见光反射和标牌反射、带有霓虹灯色调的较暗环境。”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Nightclub Mirror Selfie

### Description

A high-energy mirror selfie captured inside a nightclub bathroom in Istanbul, illuminated by a strong iPhone flash reflected in the mirror. The scene conveys an authentic late-night atmospher.

### Prompt

```md
{
  "subject": {
    "description": "A young woman with a confident, night-out presence, captured in a mirror selfie inside a nightclub bathroom in Istanbul. She has lively club energy and appears lightly sweaty from dancing, without flushed or overly red facial tones. Her skin is clean with no tattoos.",
    "body": {
      "type": "Curvy, feminine silhouette.",
      "details": "Natural proportions with a subtle sheen of sweat from heat and movement. Midriff visible; neckline features a tasteful, nightlife-appropriate décolletage. Face remains neutral-toned and natural.",
      "pose": "Standing in front of a bathroom mirror, facing it directly in a classic mirror selfie composition. The phone itself is mostly out of frame, but the flash reflection and framing clearly indicate an iPhone front-camera capture."
    }
  },
  "wardrobe": {
    "top": "Delicate lace camisole-style blouse with thin spaghetti straps, nightclub-appropriate, featuring a soft décolletage.",
    "bottom": "High-waisted shorts or a fitted mini skirt suitable for a night out.",
    "bag": "Small shoulder bag hanging naturally from one shoulder.",
    "accessories": "Layered necklaces around the neck, bracelets on the wrists, rings, and visible earrings."
  },
  "scene": {
    "location": "Inside a nightclub bathroom in Istanbul.",
    "background": "Modern club bathroom with large mirrors, tiled or concrete walls, sinks, and subtle neon or warm ambient lighting.",
    "details": "Cleanly placed signage such as EXIT or WC positioned naturally on walls or above doors. These signs reflect softly in mirrors and glossy surfaces, adding depth and realism. Light condensation on mirrors and realistic surface wear enhance the late-night atmosphere."
  },
  "camera": {
    "angle": "Mirror selfie perspective.",
    "device": "iPhone, recognizable by the characteristic flash intensity, color temperature, and lens placement reflection.",
    "aspect_ratio": "9:16",
    "flash": "On, producing a bright, sharp iPhone-style flash burst reflected clearly in the mirror."
  },
  "lighting": {
    "type": "Direct iPhone flash combined with dim nightclub bathroom lighting.",
    "quality": "High-contrast flash highlights on skin and lace fabric texture, crisp mirror reflections, visible light bounce and signage reflections, darker surroundings with ambient neon tones."
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
