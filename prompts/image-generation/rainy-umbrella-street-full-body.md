# 雨伞街（全身）

## 中文说明

该提示会生成一个详细且逼真的全身图像，显示一位土耳其成年女性走在多雨的城市街道上。场景设置在黄昏，通过反射和路灯散景捕捉到喜怒无常的电影氛围。图像强调真实的纹理、光线和表情，确保在繁华的城市环境中生动地呈现主题。

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
  "类别": "RAINY_CITY_UMBRELLA_FULLBODY",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "微湿的股线，塞在耳后",
      "texture": "湿光泽逼真，不油腻",
      “movement”：“几缕轻柔地贴在脸颊上”
    },
    “脸”：{
      "eyes": "明亮的眼神接触，反光的眼神光",
      "skin_details": "自然纹理，轻微的水分真实感",
      “makeup”：“简约、防水的外观”
    },
    “服装”：{
      "outerwear": "雨衣或风衣（无徽标）",
      "fabric": "轻微的湿光泽和可见的水滴"
    },
    “配件”：{
      "umbrella": "带有雨滴的透明雨伞",
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "全身行走坦诚",
    "orientation": "中步，稍微转向相机",
    "hands": "一只手握着伞柄，另一只手放在外套口袋里",
    "gaze": "温柔的微笑，目光接触",
    "posture": "放松、自然的行走"
  },
  “设置”：{
    "environment": "黄昏的雨城街道",
    “背景元素”：[
      “湿路面反射”，
      “街灯散景”，
      “可见小雨（细水滴，不是烟/雾）”
    ],
    “深度”：“主体清晰，背景模糊”
  },
  “相机”：{
    "shot_type": "全身街拍",
    "angle": "眼睛水平",
    "focal_length_equivalent": "26mm 手机或 35mm 编辑",
    "framing": "4:5，主体稍微偏离中心",
    "focus": "脸部清晰，运动模糊最小"
  },
  “照明”：{
    "source": "路灯 + 环境天空",
    "direction": "软顶/侧面发光",
    "highlights": "雨伞上的雨滴镜面高光",
    “shadows”：“柔和、真实”
  },
  “心情和表达”：{
    "tone": "喜怒无常、舒适、时尚",
    “表情”：“温柔的微笑，从容的自信”，
    "atmosphere": "电影雨现实主义"
  },
  “风格和现实主义”：{
    "style": "真实的街头坦率",
    “imperfections”：“轻微噪点，仅背景轻微模糊”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "低光下类似手机的颗粒",
    "motion_blur": "仅背景反射轻微"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “烟雾”、“雾机外观”、“水枪飞溅”、
    “额外的肢体”、“扭曲的伞辐条”、
    “可读标志”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Rainy Umbrella Street (full-body)

### Description

This prompt generates a detailed and photorealistic full-body image of an adult Turkish-looking woman walking on a rainy city street. The scene is set at dusk, capturing a moody and cinematic atmosphere with reflections and streetlight bokeh. The image emphasizes realistic textures, lighting, and expressions, ensuring a vivid representation of the subject amid a bustling urban environment.

### Prompt

```md
{
  "category": "RAINY_CITY_UMBRELLA_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Slightly damp strands, tucked behind ears",
      "texture": "Wet sheen realistic, not greasy",
      "movement": "A few strands stick lightly to cheek"
    },
    "face": {
      "eyes": "Bright eye contact, reflective catchlights",
      "skin_details": "Natural texture, slight moisture realism",
      "makeup": "Minimal, water-resistant look"
    },
    "clothing": {
      "outerwear": "Raincoat or trench (no logos)",
      "fabric": "Slight wet sheen and droplets visible"
    },
    "accessories": {
      "umbrella": "Clear umbrella with raindrops",
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body walking candid",
    "orientation": "Mid-stride, slight turn toward camera",
    "hands": "One hand holding umbrella handle, other in coat pocket",
    "gaze": "Soft smile, eye contact",
    "posture": "Relaxed, natural walk"
  },
  "setting": {
    "environment": "Rainy city street at dusk",
    "background_elements": [
      "Wet pavement reflections",
      "Streetlight bokeh",
      "Light drizzle visible (fine droplets, not smoke/fog)"
    ],
    "depth": "Subject clear, background blurred"
  },
  "camera": {
    "shot_type": "Full-body street photo",
    "angle": "Eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5, subject slightly off-center",
    "focus": "Face sharp, motion blur minimal"
  },
  "lighting": {
    "source": "Streetlights + ambient sky",
    "direction": "Soft top/side glows",
    "highlights": "Raindrop specular highlights on umbrella",
    "shadows": "Soft, realistic"
  },
  "mood_and_expression": {
    "tone": "Moody, cozy, stylish",
    "expression": "Gentle smile, calm confidence",
    "atmosphere": "Cinematic rain realism"
  },
  "style_and_realism": {
    "style": "Photorealistic street candid",
    "imperfections": "Mild noise, slight blur in background only"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Phone-like grain in low light",
    "motion_blur": "Slight in background reflections only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "smoke", "fog machine look", "watergun splash",
    "extra limbs", "warped umbrella spokes",
    "readable signs", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
