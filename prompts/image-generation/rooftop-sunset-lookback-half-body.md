# 屋顶日落回望（半身）

## 中文说明

此结构化提示概述了在屋顶日落环境中创建土耳其成年女性逼真图像的详细特征和设置。它包括外观、姿势、设置和技术摄影细节的规范，以指导艺术家或AI生成高质量、逼真的图像。

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
  "类别": "ROOFTOP_SUNSET_LOOKBACK",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "松散的波浪，微风拂动",
      "texture": "线束可见，在脸部周围飞散",
      “movement”：“头发被微风轻轻扬起”
    },
    “脸”：{
      "shape": "软椭圆形",
      "eyes": "强烈而友好的目光接触",
      “妆容”：“自然魅力，水润肌肤，微妙眼线”，
      "skin_details": "可见毛孔，真实发光，无需喷枪"
    },
    “服装”：{
      "outfit": "最小的黑色服装，轻便夹克（无文字/徽标）",
      "fabric": "真正的编织，肘部有轻微的皱纹"
    },
    “配件”：{
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "半身靠在栏杆上",
    "orientation": "身体倾斜，头转向相机",
    "head_position": "轻微倾斜，下巴放松",
    "hands": "一只手放在栏杆上，手指自然",
    "gaze": "回头眼神接触，微妙的傻笑",
    “姿势”：“放松、自信”
  },
  “设置”：{
    "environment": "远处有天际线的屋顶",
    “背景元素”：[
      “黄金时段太阳耀斑”，
      “城市灯光开始发光（散景）”，
      “栏杆纹理清晰可见”
    ],
    “深度”：“分离度强：主体清晰，天际线散景”
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "与眼睛水平或稍低",
    "focal_length_equivalent": "35-50mm 编辑感（或 26mm 手机版本）",
    "framing": "4:5，主体偏离中心",
    “focus”：“眼睛锐利，背景奶油色散景”
  },
  “照明”：{
    "source": "黄金时段阳光 + 微妙填充",
    "direction": "头发+脸颊边缘的温暖边缘光",
    "highlights": "受控耀斑，自然皮肤镜面反射",
    “shadows”: “柔和的阴影，电影般的分离”
  },
  “心情和表达”：{
    "tone": "安静奢华，自信",
    “表情”：“轻柔的傻笑，平静的强度”，
    “气氛”：“温暖、电影般、自发”
  },
  “风格和现实主义”：{
    "style": "照片级社交/编辑混合体",
    "fidelity": "高头发/皮肤细节，无平滑"
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “噪音”：“轻微”，
    "motion_blur": "仅在发尖处非常微妙"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “假天际线”、“cgi 光晕”、“塑料皮肤”、
    “额外的手指”，“扭曲的栏杆”，
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Rooftop Sunset Lookback (half-body)

### Description

This structured prompt outlines the detailed characteristics and settings for creating a photorealistic image of a Turkish-looking adult woman in a rooftop sunset setting. It includes specifications for appearance, pose, setting, and technical photography details to guide artists or AI in generating high-quality, realistic images.

### Prompt

```md
{
  "category": "ROOFTOP_SUNSET_LOOKBACK",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, slightly wind-touched",
      "texture": "Strands visible, flyaways around face",
      "movement": "Hair subtly lifted by breeze"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Intense yet friendly eye contact",
      "makeup": "Natural glam, dewy skin, subtle liner",
      "skin_details": "Visible pores, realistic glow, no airbrush"
    },
    "clothing": {
      "outfit": "Minimal black outfit, light jacket (no text/logos)",
      "fabric": "Real weave, gentle wrinkles at elbows"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Half-body leaning on railing",
    "orientation": "Body angled away, head turned back toward camera",
    "head_position": "Slight tilt, chin relaxed",
    "hands": "One hand resting on railing, fingers natural",
    "gaze": "Lookback eye contact, subtle smirk",
    "posture": "Relaxed, confident"
  },
  "setting": {
    "environment": "Rooftop with skyline in distance",
    "background_elements": [
      "Golden hour sun flare",
      "City lights beginning to glow (bokeh)",
      "Railing texture visible"
    ],
    "depth": "Strong separation: subject sharp, skyline bokeh"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye-level or slightly low",
    "focal_length_equivalent": "35-50mm editorial feel (or 26mm phone variant)",
    "framing": "4:5, subject off-center",
    "focus": "Eyes sharp, background creamy bokeh"
  },
  "lighting": {
    "source": "Golden hour sun + subtle fill",
    "direction": "Warm rim light on hair + cheek edge",
    "highlights": "Controlled flare, natural skin speculars",
    "shadows": "Soft shadows, cinematic separation"
  },
  "mood_and_expression": {
    "tone": "Quiet luxury, confident",
    "expression": "Soft smirk, calm intensity",
    "atmosphere": "Warm, cinematic, spontaneous"
  },
  "style_and_realism": {
    "style": "Photoreal social/editorial hybrid",
    "fidelity": "High hair/skin detail, no smoothing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "motion_blur": "Very subtle in hair tips only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fake skyline", "cgi flare", "plastic skin",
    "extra fingers", "warped railing",
    "readable text", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
