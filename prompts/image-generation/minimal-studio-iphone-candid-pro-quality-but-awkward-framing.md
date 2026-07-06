# Minimal Studio“iPhone Candid”（专业品质但框架尴尬）

## 中文说明

此提示旨在指导生成具有特定取景和主题细节的高质量、坦率风格的照片。它涉及捕捉具有土耳其特色的成年女性的形象，强调自然之美和俏皮的日常情绪。照片应采用稍微尴尬的裁剪，并包括详细的技术和风格说明，以确保真实性和现实性。约束确保图像保持专业且没有徽标或水印。

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
  "类别": "STUDIO_IPHONE_CANDID_AWKWARD_FRAMING",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其长相，年轻但成熟。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "自然松散波浪",
      “texture”：“可见股线，轻微飞散”
    },
    “脸”：{
      “眼睛”：“明亮、直接”，
      "skin_details": "高保真毛孔，无平滑",
      “妆容”：“干净自然”
    },
    “服装”：{
      "outfit": "简单的黑色上衣（无徽标）"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "特写/半身偷拍",
    "orientation": "裁剪有点太近，取景不完美",
    "hands": "一只手短暂地出现在发际线附近的画面中（手指正确）",
    "gaze": "直接目光接触",
    "表情": "俏皮的微微笑"
  },
  “设置”：{
    "environment": "素色工作室墙",
    “背景元素”：[
      “微妙的墙壁纹理”，
      “没有道具”
    ],
    “深度”：“脸部锐利，背景柔和”
  },
  “相机”：{
    "shot_type": "干净空间中的手机外观",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "26mm 手机感觉",
    "framing": "4:5，裁剪不当（稍微剪掉头发/顶部空间）",
    “焦点”：“目光锐利”
  },
  “照明”：{
    "source": "软漫射主光",
    "direction": "正面/侧面轻柔",
    “品质”：“自然，无光泽”
  },
  “心情和表达”：{
    "tone": "坦诚、俏皮、日常",
    "atmosphere": "看起来没有计划，但仍然很讨人喜欢"
  },
  “风格和现实主义”：{
    "style": "真实的 UGC",
    “imperfections”：“微小的噪音，不完美的构图”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “噪音”：“轻微”
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “过度修饰”、“美颜滤镜”、
    “塑料皮肤”、“cgi”、
    “多余的手指”、“扭曲的手”、
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Minimal Studio “iPhone Candid” (pro-quality but awkward framing)

### Description

This prompt is designed to guide the generation of a high-quality, candid-style photo with specific framing and subject details. It involves capturing the image of an adult woman with Turkish features, emphasizing natural beauty and a playful, everyday mood. The photo should feature a slightly awkward crop and include detailed technical and stylistic instructions to ensure authenticity and realism. Constraints ensure that the image remains professional and free of logos or watermarks.

### Prompt

```md
{
  "category": "STUDIO_IPHONE_CANDID_AWKWARD_FRAMING",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, youthful vibe but adult.",
    "hair": {
      "color": "Dark brown",
      "style": "Natural loose waves",
      "texture": "Strands visible, slight flyaways"
    },
    "face": {
      "eyes": "Bright, direct",
      "skin_details": "High fidelity pores, no smoothing",
      "makeup": "Clean natural"
    },
    "clothing": {
      "outfit": "Simple black top (no logos)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up/half-body candid",
    "orientation": "Slightly too-close crop, imperfect framing",
    "hands": "One hand briefly in frame near hairline (fingers correct)",
    "gaze": "Direct eye contact",
    "expression": "Playful micro-smile"
  },
  "setting": {
    "environment": "Plain studio wall",
    "background_elements": [
      "Subtle wall texture",
      "No props"
    ],
    "depth": "Face sharp, background soft"
  },
  "camera": {
    "shot_type": "Phone-candid look in a clean space",
    "angle": "Slightly above eye-level",
    "focal_length_equivalent": "26mm phone feel",
    "framing": "4:5 with awkward crop (slightly cutting hair/top space)",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Soft diffused key light",
    "direction": "Front/side gentle",
    "quality": "Natural, not glossy"
  },
  "mood_and_expression": {
    "tone": "Candid, playful, everyday",
    "atmosphere": "Looks unplanned but still flattering"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Tiny noise, imperfect composition"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "over-retouch", "beauty filter",
    "plastic skin", "cgi",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
