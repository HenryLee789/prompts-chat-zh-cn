# 技术台“Builder”（半身，舒适的显示器发光）

## 中文说明

为一位 21 至 29 岁、长相土耳其的成年女性创作一幅逼真的生活方式肖像，充满创作者氛围。这一场景捕捉到了她在技术办公桌前进行舒适的深夜构建会议的情景。她半身坐着，以轻松、自信的姿势和微微笑着面对镜头。该设置包括一个最小的办公桌设置，配有台灯和显示器发光的暖色和冷色灯光。图像注重真实感，具有自然纹理和瑕疵，保持自由的氛围

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
  "类别": "TECH_DESK_BUILDER_HALF_BODY",
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其长相，创造者氛围。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "低马尾辫或宽松波浪",
      “texture”：“可见股线，轻微飞散”
    },
    “脸”：{
      "eyes": "专注但友好",
      "skin_details": "真实纹理，无平滑",
      “妆容”：“最小”
    },
    “服装”：{
      "outfit": "休闲黑上衣+浅色开衫，无标志",
      "fabric": "真正的针织编织，微妙的皱纹"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "半身坐姿",
    "orientation": "身体稍微倾斜，肩膀放松",
    "hands": "一只手靠近触控板，另一只手将头发塞到耳后",
    "gaze": "带着小傻笑看着镜头",
    "position": "放松自信"
  },
  “设置”：{
    "environment": "最少的办公桌设置",
    “背景元素”：[
      “具有通用模糊用户界面的笔记本电脑/显示器（无可读文本）”，
      “温暖的台灯+凉爽的显示器发光组合”，
      “角落里的植物，小杂物模糊”
    ],
    “深度”：“脸部锐利，背景散景”
  },
  “相机”：{
    "shot_type": "半身生活方式肖像",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "26mm 手机或 50mm pro",
    “取景”：“4：5”，
    “焦点”：“目光锐利”
  },
  “照明”：{
    "source": "暖灯 + 冷显示器发光",
    "direction": "柔和的混合照明和柔和的阴影",
    "highlights": "自然面部镜面反射",
    “shadows”：“柔和、真实”
  },
  “心情和表达”：{
    "tone": "舒适的创造者，自信",
    "表情": "微微笑",
    "atmosphere": "深夜构建会议氛围"
  },
  “风格和现实主义”：{
    "style": "逼真的生活方式",
    “imperfections”：“轻微噪点，轻微不完美的白平衡”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “噪音”：“轻微”，
    “分辨率”：“高”
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “no_read_screens”：true
  },
  “否定提示”：[
    “可读的 UI 文本”、“徽标”、“水印”、
    “塑料皮肤”、“cgi”、
    “多余的手指”、“扭曲的手”
  ]
}
```

---

## English Original

### Title

Tech Desk “Builder” (half-body, cozy monitor glow)

### Description

Create a photorealistic lifestyle portrait of a Turkish-looking adult woman, aged 21-29, with a creator vibe. The scene captures her in a cozy, late-night build session at her tech desk. She is seated half-body, engaging the camera with a relaxed, confident posture and a micro-smirk. The setting includes a minimal desk setup with warm and cool lighting blending from a desk lamp and monitor glow. The image focuses on realism with natural textures and imperfections, maintaining an atmosphere free 

### Prompt

```md
{
  "category": "TECH_DESK_BUILDER_HALF_BODY",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, creator vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Low ponytail or loose waves",
      "texture": "Strands visible, slight flyaways"
    },
    "face": {
      "eyes": "Focused but friendly",
      "skin_details": "Real texture, no smoothing",
      "makeup": "Minimal"
    },
    "clothing": {
      "outfit": "Casual black top + light cardigan, no logos",
      "fabric": "Real knit weave, subtle wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Half-body seated",
    "orientation": "Body slightly angled, shoulders relaxed",
    "hands": "One hand near trackpad, other tucking hair behind ear",
    "gaze": "Looking at camera with small smirk",
    "posture": "Relaxed confident"
  },
  "setting": {
    "environment": "Minimal desk setup",
    "background_elements": [
      "Laptop/monitor with generic blurred UI (NO readable text)",
      "Warm desk lamp + cool monitor glow mix",
      "Plant in corner, small clutter blurred"
    ],
    "depth": "Face sharp, background bokeh"
  },
  "camera": {
    "shot_type": "Half-body lifestyle portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone or 50mm pro",
    "framing": "4:5",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Warm lamp + cool monitor glow",
    "direction": "Soft mixed lighting with gentle shadows",
    "highlights": "Natural facial speculars",
    "shadows": "Soft, realistic"
  },
  "mood_and_expression": {
    "tone": "Cozy creator, confident",
    "expression": "Micro-smirk",
    "atmosphere": "Late-night build session vibe"
  },
  "style_and_realism": {
    "style": "Photorealistic lifestyle",
    "imperfections": "Mild noise, slight imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "resolution": "High"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_screens": true
  },
  "negative_prompt": [
    "readable UI text", "logos", "watermark",
    "plastic skin", "cgi",
    "extra fingers", "warped hands"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
