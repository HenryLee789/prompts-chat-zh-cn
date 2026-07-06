# 舒适的沙发灯（特写，暖钨丝灯）

## 中文说明

这个结构化的 JSON 提示旨在提供捕捉舒适亲密的肖像场景的详细设置。它包括有关拍摄对象外观、姿势、设置、相机细节和灯光的具体说明，以实现逼真的坦率氛围。非常适合创建温暖、相关的图像，重点关注自然纹理和柔和的灯光。

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
  "类别": "COZY_COUCH_LAMP_CLOSEUP",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "带有面部框架卷须的凌乱发髻",
      "texture": "可见的股线，自然的卷曲",
      “运动”：“松散的发丝落在脸颊附近”
    },
    “脸”：{
      "eyes": "柔和的目光接触，温暖的眼神光",
      "妆容": "简约、水润、自然",
      "skin_details": "毛孔，自然纹理，无平滑"
    },
    “服装”：{
      "outfit": "休闲舒适针织毛衣（无文字）",
      “texture”：“针织编织可见，逼真的褶皱”
    },
    “配件”：{
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "特写偷拍",
    "orientation": "略高于角度，放松",
    "hands": "一只手拿着杯子靠近下巴（手指正确）",
    "gaze": "温柔的目光接触",
    《表情》：“笑容温柔，温馨”
  },
  “设置”：{
    "environment": "客厅沙发角",
    “背景元素”：[
      “温暖的橙色灯在背后发光”，
      “毯子纹理清晰可见”，
      “轻微的生活杂乱模糊了”
    ],
    “深度”：“脸部锐利，灯花在后面，柔和的背景”
  },
  “相机”：{
    "shot_type": "特写肖像",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "26mm 手机或 50mm pro",
    "framing": "4:5，脸部主导",
    “焦点”：“目光锐利”
  },
  “照明”：{
    "source": "温暖的钨丝灯 + 微弱的环境",
    "direction": "侧面/正面温暖",
    "highlights": "脸颊和头发上的柔和光泽",
    “shadows”：“温柔，令人安慰”
  },
  “心情和表达”：{
    "tone": "轻松、亲密、有共鸣",
    "表情": "温柔的微笑",
    “气氛”：“温暖、有触感、温馨”
  },
  “风格和现实主义”：{
    "style": "真实感 iPhone-坦率氛围",
    “imperfections”：“轻微颗粒，WB 稍有缺陷”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "轻微的手机传感器颗粒",
    "motion_blur": "脸上没有"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “塑料皮肤”、“过度平滑”、
    “额外的手指”，“扭曲的杯子”，
    “可读文本”、“徽标”、“水印”
  ]
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Cozy Couch Lamp (close-up, warm tungsten)

### Description

This structured JSON prompt is designed to provide a detailed setup for capturing a cozy and intimate portrait scene. It includes specific instructions on subject appearance, pose, setting, camera details, and lighting to achieve a photorealistic candid vibe. Ideal for creating warm, relatable images with a focus on natural textures and soft lighting.

### Prompt

```md
{
  "category": "COZY_COUCH_LAMP_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Messy bun with face-framing tendrils",
      "texture": "Visible strands, natural frizz",
      "movement": "Loose strands fall near cheeks"
    },
    "face": {
      "eyes": "Soft eye contact, warm catchlights",
      "makeup": "Minimal, dewy, natural",
      "skin_details": "Pores, natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Casual cozy knit sweater (no text)",
      "texture": "Knit weave visible, realistic folds"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up candid",
    "orientation": "Slightly above angle, relaxed",
    "hands": "One hand holding mug near chin (fingers correct)",
    "gaze": "Gentle eye contact",
    "expression": "Soft smile, cozy"
  },
  "setting": {
    "environment": "Living room couch corner",
    "background_elements": [
      "Warm orange lamp glow behind",
      "Blanket texture visible",
      "Slight lived-in clutter blurred"
    ],
    "depth": "Face sharp, lamp bloom behind, soft background"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone or 50mm pro",
    "framing": "4:5, face dominant",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Warm tungsten lamp + faint ambient",
    "direction": "Side/front warm",
    "highlights": "Soft glow on cheeks and hair",
    "shadows": "Gentle, comforting"
  },
  "mood_and_expression": {
    "tone": "Relaxed, intimate, relatable",
    "expression": "Soft smile",
    "atmosphere": "Warm, tactile, homey"
  },
  "style_and_realism": {
    "style": "Photorealistic iPhone-candid vibe",
    "imperfections": "Mild grain, slightly imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild phone sensor grain",
    "motion_blur": "None on face"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "plastic skin", "over-smoothing",
    "extra fingers", "warped mug",
    "readable text", "logo", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
