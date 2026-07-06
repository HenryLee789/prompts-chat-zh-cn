# 飞行中度假自拍——自然的前置摄像头视角

## 中文说明

飞行期间在商用飞机机舱内拍摄的自然前置摄像头自拍照。拍摄对象舒适地坐在飞机座位上，用一只手握住相机，略高于眼睛水平，创造出真实、随意的自拍角度，而手机不会出现在画面中。

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
    "description": "飞行中坐在飞机座位上拍摄的年轻女子，外表自然、轻松。她有一种自信又休闲的度假能量。她的皮肤干净，没有纹身。她戴着一顶轻便的度假帽和时尚的太阳镜。",
    “身体”：{
      "type": "曲线优美、女性化的轮廓。",
      "details": "自然的比例，放松的姿势，舒适的坐姿。",
      “pose”：“坐在飞机座位上，微微向后倾斜，画面显示用一只手握住相机，略高于头部水平并向下倾斜，就像用前置摄像头进行休闲自拍一样。手机本身在画面中是不可见的。”
    }
  },
  “衣柜”：{
    "top": "轻便的夏季度假装，例如宽松的亚麻衬衫、短款上衣或透气的衬衫。",
    "bottom": "适合旅行的高腰短裤、轻质布料裙子或宽松的夏季长裤。",
    "headwear": "度假帽或草帽。",
    “配件”：“太阳镜、简约珠宝、小项链、手表。”
  },
  “场景”：{
    "location": "商用飞机机舱内。",
    "background": "一排排飞机座位和她身后的其他乘客清晰可见，面孔清晰可见且自然，不模糊。",
    “details”：“逼真的飞行氛围，微妙的机舱纹理、头顶行李箱和窗户灯。”
  },
  “相机”：{
    "angle": "前置摄像头视角，用一只手握住略高于视线水平并向下倾斜的角度。",
    "lens": "广角前置摄像头自拍镜头。",
    “纵横比”：“9:16”，
    "depth_of_field": "平衡景深，保持主体和背景乘客自然可见。"
  },
  “照明”：{
    "type": "柔和的机舱环境照明与窗户的自然光相结合。",
    “质量”：“均匀、自然的光线，柔和的高光和逼真的阴影。”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

In-Flight Vacation Selfie — Natural Front Camera Perspective

### Description

A natural front-camera selfie captured inside a commercial airplane cabin during a flight.
The subject is seated comfortably in her airplane seat, holding the camera with one hand slightly above eye level, creating an authentic, casual selfie angle without the phone appearing in frame.

### Prompt

```md
{
  "subject": {
    "description": "A young woman with a natural, relaxed appearance, captured while sitting in her airplane seat during a flight. She has a confident yet casual vacation energy. Her skin is clean with no tattoos. She wears a light vacation hat and stylish sunglasses.",
    "body": {
      "type": "Curvy, feminine silhouette.",
      "details": "Natural proportions, relaxed posture, comfortable seated position.",
      "pose": "Seated in an airplane seat, subtly leaning back, with the framing suggesting the camera is held by one hand slightly above head level and angled downward, as if taking a casual front-camera selfie. The phone itself is not visible in the frame."
    }
  },
  "wardrobe": {
    "top": "Light summer vacation outfit such as a loose linen shirt, crop-length top, or airy blouse.",
    "bottom": "High-waisted shorts, light fabric skirt, or relaxed summer trousers suitable for travel.",
    "headwear": "Vacation hat or straw hat.",
    "accessories": "Sunglasses, minimal jewelry, small necklace, wristwatch."
  },
  "scene": {
    "location": "Inside a commercial airplane cabin.",
    "background": "Rows of airplane seats and other passengers visible behind her, with faces clearly visible and natural, not blurred.",
    "details": "Realistic in-flight atmosphere with subtle cabin textures, overhead bins, and window light."
  },
  "camera": {
    "angle": "Front-facing camera perspective, held with one hand slightly above eye level and angled downward.",
    "lens": "Wide-angle front camera selfie lens.",
    "aspect_ratio": "9:16",
    "depth_of_field": "Balanced depth of field, keeping both the subject and background passengers naturally visible."
  },
  "lighting": {
    "type": "Soft ambient airplane cabin lighting combined with natural daylight from the window.",
    "quality": "Even, natural lighting with gentle highlights and realistic shadows."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
