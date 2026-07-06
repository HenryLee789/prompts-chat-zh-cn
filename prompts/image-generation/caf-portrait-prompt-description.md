# 咖啡馆肖像提示说明

## 中文说明

该提示提供了详细的真实感描述，用于生成年轻女性主题的自然咖啡馆肖像。它包括对面部特征、皮肤纹理、发型、配饰、服装和姿势的具体指导，以及现代室内咖啡馆环境、背景构图和照明条件等环境元素。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 image-generation、image-prompt、ChatGPT 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "description": "一位年轻、迷人的金发女郎，向后梳着光滑的头发，编成松散的侧辫，手托右脸，直视镜头，表情平静、自然，略带沉思。五官均衡、美观，皮肤清澈光滑。",
    "position": "坐在咖啡馆的木桌旁，面向镜头。",
    "pose": "头轻轻放在右手上，肘部放在桌子上；左臂放松在桌子上。",
    "表情": "平静、自然、略带沉思、目光柔和。",
    “服装”：{
      "top": "黑色细肩带背心，简约合身的外观。"
    },
    "accessories": "多个小金圈耳环，手指上的细戒指，最小的珠宝，左前臂内侧有一个小文字纹身（文字：'无痛'）。",
    "hair": "金发，整齐地向后梳，编成松散的辫子，垂落在左肩上，带有轻微的自然飘逸。",
    "skin_details": "清晰、光滑、健康的皮肤，具有微妙的自然纹理，最小的瑕疵，无需大量修饰"
  },
  “场景”：{
    "description": "白天现代咖啡馆/酒吧的内部。吧台和架子清晰可见，摆满了酒瓶和玻璃器皿，但空间感觉干净，并不拥挤。",
    "location": "土耳其伊斯坦布尔的一家现代咖啡馆。",
    "setting": "有日光的室内咖啡馆。",
    "background_elements": "酒吧架上摆满了瓶子、玻璃器皿、木质纹理、日光照射进来的大窗户，很少或没有可见的人；如果存在，只有柔和模糊的轮廓，没有可区分的特征。",
    "lighting": "来自窗户的柔和自然日光与柔和的室内环境光相结合。",
    "atmosphere": "轻松、平静、现代的城市环境，不太忙碌。"
  },
  “技术细节”：{
    "shot_type": "中特写。",
    "perspective": "眼睛水平、自然的手持视角，就好像坐在桌子旁的另一个人拍摄的一样。",
    "focal_length": "智能手机广角镜头（约 26 毫米等效）。",
    "depth_of_field": "浅景深，主体清晰对焦，背景柔和模糊，自然散景。",
    "composition": "主题稍微偏离中心，平衡的构图，架子上的垂直线和柔和的背景结构。",
    "colors": "中性自然色调、温暖的木棕色、珠宝的柔和金色、逼真的色彩平衡。",
    "camera_type": "iPhone 13 后置摄像头",
    "camera_behavior": "自然智能手机处理，轻微边缘锐化，逼真的 HDR，无人工滤镜",
    "resolution": "标准手机照片质量，不是超锐利，细节稍微柔和",
    “图像特征”：{
      "grain": "非常微妙的精细数字颗粒",
      "dynamic_range": "平衡 HDR，控制高光和阴影",
      "sharpness": "适中，不过分清脆",
      "compression": "最小的压缩伪影，接近原始捕获"
    }
  },
  “约束”：{
    "background_people": "避免清晰可见或细节丰富的人物；只允许模糊的模糊形状",
    "focus_priority": "人脸必须是最清晰的元素",
    “避免”：“背景中的人造面孔、过度处理的皮肤、Instagram 风格的滤镜、过度清晰度、电影单反相机外观”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Café Portrait Prompt Description

### Description

This prompt provides a detailed photorealistic description for generating a natural café portrait of a young female subject. It includes specific guidance on facial features, skin texture, hairstyle, accessories, clothing, and pose, along with environmental elements such as a modern indoor café setting, background composition, and lighting conditions.

### Prompt

```md
{
  "subject": {
    "description": "A young, attractive blonde woman with sleeked-back hair styled into a loose side braid, resting her right cheek on her hand and looking directly at the camera with a calm, natural, slightly pensive expression. Her facial features are balanced and aesthetically pleasing, with clear and smooth skin.",
    "position": "Seated at a wooden table in a cafe, facing the camera.",
    "pose": "Head resting gently on right hand, elbow on table; left arm relaxed on the table surface.",
    "expression": "Calm, natural, slightly pensive, soft gaze.",
    "clothing": {
      "top": "Black spaghetti strap tank top with a minimal, fitted look."
    },
    "accessories": "Multiple small gold hoop earrings, thin rings on fingers, minimal jewelry, a small script tattoo on the inner left forearm (text: 'no pain').",
    "hair": "Blonde hair, neatly slicked back and styled into a loose braid falling over the left shoulder with slight natural flyaways.",
    "skin_details": "Clear, smooth, healthy-looking skin with subtle natural texture, minimal blemishes, no heavy retouching"
  },
  "scene": {
    "description": "Interior of a modern cafe/bar during daytime. The bar counter and shelves are clearly visible, filled with liquor bottles and glassware, but the space feels clean and not overcrowded.",
    "location": "A modern cafe in Istanbul, Turkey.",
    "setting": "Indoor cafe with daylight.",
    "background_elements": "Bar shelves with bottles, glassware, wooden textures, large windows with daylight entering, very few or no visible people; if present, only soft blurred silhouettes without distinguishable features.",
    "lighting": "Soft natural daylight coming from windows combined with gentle indoor ambient light.",
    "atmosphere": "Relaxed, calm, modern urban setting, not overly busy."
  },
  "technical_details": {
    "shot_type": "Medium close-up.",
    "perspective": "Eye-level, natural handheld perspective as if taken by another person sitting at the table.",
    "focal_length": "Smartphone wide lens (~26mm equivalent).",
    "depth_of_field": "Shallow depth of field, subject sharply in focus, background softly blurred with natural bokeh.",
    "composition": "Subject slightly off-center, balanced composition with vertical lines from shelves and soft background structure.",
    "colors": "Neutral and natural tones, warm wood browns, soft gold from jewelry, realistic color balance.",
    "camera_type": "iPhone 13 rear camera",
    "camera_behavior": "Natural smartphone processing, slight edge sharpening, realistic HDR, no artificial filters",
    "resolution": "Standard mobile photo quality, not ultra sharp, slightly softened details",
    "image_characteristics": {
      "grain": "Very subtle fine digital grain",
      "dynamic_range": "Balanced HDR with controlled highlights and shadows",
      "sharpness": "Moderate, not overly crisp",
      "compression": "Minimal compression artifacts, close to original capture"
    }
  },
  "constraints": {
    "background_people": "Avoid clearly visible or detailed people; allow only indistinct blurred shapes",
    "focus_priority": "Face must be the sharpest element",
    "avoid": "Artificial faces in background, over-processed skin, Instagram-style filters, excessive sharpness, cinematic DSLR look"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
