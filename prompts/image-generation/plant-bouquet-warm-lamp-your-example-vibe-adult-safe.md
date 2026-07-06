# 植物花束温暖灯（你的榜样氛围，成人安全）

## 中文说明

此提示会生成对室内植物角中的成年女性肖像的详细且逼真的描述。该场景的特点是自然光线、温暖的色调和复杂的细节，包括拍摄对象的外表、服装、姿势和背景。该提示确保最终图像适合成人观众，并排除任何文本或徽标。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "类别": "PLANTS_BOUQUET_WARM_LAMP",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其长相，年轻的气息，但显然是成年人。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "自然、柔和、略显凌乱、随意的不对称",
      "texture": "真实的股线、飞散、根部可见",
      "movement": "自然地落在肩膀上；末端允许有小的运动模糊"
    },
    “脸”：{
      "shape": "椭圆形，柔和的下巴轮廓",
      “眼睛”：“富有表现力的深色虹膜，清晰的眼神光”，
      "nose": "鼻梁轮廓分明，亮点自然",
      "lips": "柔和的玫瑰色，自然的纹理线条清晰可见",
      "skin_details": "真实毛孔，轻微自然腮红，无喷枪",
      "micro_details": "前额上有细细的发丝，保留了微妙的瑕疵"
    },
    “服装”：{
      "outfit": "时尚黑色休闲装，无文字/徽标",
      “fabric”：“触感明显的纺织织物，柔和的皱纹”
    },
    “配件”：{
      "jewelry": ["银圈耳环"]
    }
  },
  “姿势”：{
    "type": "坦率的生活方式肖像",
    "orientation": "半身",
    "head_position": "轻微倾斜；稍微向镜头左侧瞥一眼，然后回到镜头感觉",
    "hands": "手握牛皮纸包裹的花束；手指自然，关节正确",
    "gaze": "温暖、活泼的目光接触",
    “表情”：“甜美自信的笑容”
  },
  “设置”：{
    "environment": "室内植物角",
    “背景元素”：[
      “许多绿色植物分层前景/中景/背景”，
      “主体后面的温暖橙色灯泡产生光晕发光”，
      “牛皮纸花束包装：折痕、麻线细节、触觉纹理”
    ],
    “深度”：“前景树叶散景，主体清晰，背景灯绽放”
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "稍微离轴，休闲手持",
    "focal_length_equivalent": "26mm iPhone 广角外观",
    "framing": "4:5，不对称构图",
    “focus”：“眼睛锐利，花束边缘稍微柔和”
  },
  “照明”：{
    "source": "软暖键+橙钨实用背后",
    "direction": "温暖的侧光在脸上投射出复杂的树叶阴影图案（微妙、讨人喜欢）",
    "highlights": "头发和颧骨上的柔和高光",
    “shadows”：“细致入微的温暖阴影，舒适的氛围”，
    “品质”：“柔软、温暖、有触感”
  },
  “心情和表达”：{
    "tone": "可爱-轻松、舒适、坦诚",
    “表情”：“活泼的眼神，温柔的笑容”，
    “atmosphere”：“沉浸式、自发性”
  },
  “风格和现实主义”：{
    "style": "逼真的 iPhone 快照氛围",
    "fidelity": "高皮肤和头发细节，无平滑",
    “缺陷”：“远离脸部的轻微运动模糊，轻微的噪点”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高分辨率”，
    "noise": "轻微的手机传感器噪音",
    “构图”：“不完美的坦率取景（角度有点尴尬）但仍然美观”
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “single_subject_only”：正确，
    “do_not_show_phone”：正确
  },
  “否定提示”：[
    “cgi”、“卡通”、“动漫”、“塑料皮肤”、“过度平滑”、
    “多余的手指”、“扭曲的手”、“重复的人”、
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Plant Bouquet Warm Lamp (your example vibe, adult-safe)

### Description

This prompt generates a detailed and photorealistic description of a portrait featuring an adult woman in an indoor plant corner. The scene is characterized by natural lighting, warm tones, and intricate details, including the subject's appearance, clothing, pose, and setting. The prompt ensures the final image is suitable for adult audiences and excludes any text or logos.

### Prompt

```md
{
  "category": "PLANTS_BOUQUET_WARM_LAMP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, youthful vibe but clearly adult.",
    "hair": {
      "color": "Dark brown",
      "style": "Natural, soft, slightly tousled, casual asymmetry",
      "texture": "Realistic strands, flyaways, roots visible",
      "movement": "Falls naturally over shoulders; small motion blur allowed in ends"
    },
    "face": {
      "shape": "Oval, soft jawline",
      "eyes": "Expressive, dark irises, crisp catchlights",
      "nose": "Defined bridge, natural highlight",
      "lips": "Soft rosy tint, natural texture lines visible",
      "skin_details": "Real pores, slight natural blush, no airbrushing",
      "micro_details": "Fine hair strands across forehead, subtle imperfections preserved"
    },
    "clothing": {
      "outfit": "Trendy black casual outfit, no text/logos",
      "fabric": "Tactile textile weave visible, gentle wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoop earrings"]
    }
  },
  "pose": {
    "type": "Candid lifestyle portrait",
    "orientation": "Half-body",
    "head_position": "Slight tilt; subtle glance slightly left of lens then back to lens feel",
    "hands": "Holding bouquet wrapped in kraft paper; fingers natural, joints correct",
    "gaze": "Warm, lively eye contact",
    "expression": "Sweet confident smile"
  },
  "setting": {
    "environment": "Indoor plant corner",
    "background_elements": [
      "Many green plants layered foreground/midground/background",
      "Warm orange lamp bulb behind subject creating halo glow",
      "Kraft paper bouquet wrap: creases, twine detail, tactile texture"
    ],
    "depth": "Foreground leaf bokeh, subject sharp, background lamp bloom"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly off-axis, casual handheld",
    "focal_length_equivalent": "26mm iPhone wide look",
    "framing": "4:5, asymmetrical composition",
    "focus": "Eyes sharp, bouquet slightly softer at edges"
  },
  "lighting": {
    "source": "Soft warm key + orange tungsten practical behind",
    "direction": "Warm side light casts intricate leaf-shadow patterns across face (subtle, flattering)",
    "highlights": "Gentle highlight on hair and cheekbones",
    "shadows": "Nuanced warm shadows, comforting atmosphere",
    "quality": "Soft, warm, tactile"
  },
  "mood_and_expression": {
    "tone": "Cute-relaxed, cozy, candid",
    "expression": "Lively eyes, soft smile",
    "atmosphere": "Immersive, spontaneous"
  },
  "style_and_realism": {
    "style": "Photorealistic iPhone snapshot vibe",
    "fidelity": "High skin and hair detail, no smoothing",
    "imperfections": "Slight motion blur away from face, mild noise"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Slight phone sensor noise",
    "composition": "Imperfect candid framing (slightly awkward angle) but still aesthetic"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true,
    "do_not_show_phone": true
  },
  "negative_prompt": [
    "cgi", "cartoon", "anime", "plastic skin", "over-smoothing",
    "extra fingers", "warped hands", "duplicate person",
    "readable text", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
