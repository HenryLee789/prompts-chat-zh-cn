# 工作室美容社论（特写，专业）

## 中文说明

创建详细的工作室美容编辑特写镜头提示。该提示将包括有关主题人口统计、姿势、设置、相机细节、灯光和情绪的具体说明，以实现高端美容活动的感觉。它还将定义技术限制和负面提示，以避免不需要的元素。

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
  "类别": "STUDIO_BEAUTY_EDITORIAL_CLOSEUP",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其长相，选美运动氛围。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "时尚但自然（不是头盔头发）",
      “texture”：“可见单独的股线，微妙的飞散”
    },
    “脸”：{
      "shape": "软椭圆形",
      “眼睛”：“锐利的聚光灯，干净的睫毛”，
      “妆容”：“干净迷人，微妙轮廓，自然唇部”，
      "skin_details": "高保真毛孔，无喷枪",
      "micro_details": "灯光下可见细密的毳毛"
    },
    “服装”：{
      "outfit": "最小的黑色上衣，无徽标"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "美女特写",
    "orientation": "正面特写",
    "hands": "一只手轻轻勾勒下颌线（完美的解剖结构）",
    "gaze": "直接目光接触",
    "express": "中立自信"
  },
  “设置”：{
    "environment": "工作室无缝背景",
    "background_elements": ["干净的渐变背景，没有纹理干扰"],
    “深度”：“非常浅的背景干扰，主题孤立”
  },
  “相机”：{
    "shot_type": "特写肖像",
    "angle": "眼睛水平",
    "focal_length_equivalent": "85mm 编辑肖像感觉",
    "framing": "4:5（紧头肩）",
    “focus”：“眼睛锐利，皮肤纹理保留”
  },
  “照明”：{
    "source": "柔光箱键 + 柔和填充 + 微妙边缘",
    "direction": "键稍微偏上方和一侧",
    "highlights": "干净的镜面，不油腻",
    “shadows”：“柔和、雕刻、优质”
  },
  “心情和表达”：{
    "tone": "尊贵、优雅、冷静",
    "atmosphere": "高端美容活动"
  },
  “风格和现实主义”：{
    "style": "真实照片编辑",
    "fidelity": "极高的细节，无平滑"
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "噪音": "非常低",
    “分辨率”：“高”
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “喷枪皮肤”、“塑料脸”、“cgi”、
    “多余的手指”、“扭曲的手”、
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Studio Beauty Editorial (close-up, pro)

### Description

Create a detailed studio beauty editorial close-up shot prompt. The prompt will include specific instructions on subject demographics, pose, setting, camera details, lighting, and mood to achieve a high-end beauty campaign feel. It will also define technical constraints and negative prompts to avoid unwanted elements.

### Prompt

```md
{
  "category": "STUDIO_BEAUTY_EDITORIAL_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, beauty campaign vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Sleek but natural (not helmet hair)",
      "texture": "Individual strands visible, subtle flyaways"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Sharp catchlights, clean lashes",
      "makeup": "Clean glam, subtle contour, natural lip",
      "skin_details": "High fidelity pores, no airbrush",
      "micro_details": "Fine vellus hairs visible under light"
    },
    "clothing": {
      "outfit": "Minimal black top, no logos"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Beauty close-up",
    "orientation": "Frontal close-up",
    "hands": "One hand lightly framing jawline (perfect anatomy)",
    "gaze": "Direct eye contact",
    "expression": "Neutral confident"
  },
  "setting": {
    "environment": "Studio seamless background",
    "background_elements": ["Clean gradient backdrop, no texture distractions"],
    "depth": "Very shallow background distraction, subject isolated"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "85mm editorial portrait feel",
    "framing": "4:5 (tight head-and-shoulders)",
    "focus": "Eyes razor sharp, skin texture preserved"
  },
  "lighting": {
    "source": "Softbox key + gentle fill + subtle rim",
    "direction": "Key slightly above and to one side",
    "highlights": "Clean speculars, not oily",
    "shadows": "Soft, sculpted, premium"
  },
  "mood_and_expression": {
    "tone": "Premium, elegant, calm",
    "atmosphere": "High-end beauty campaign"
  },
  "style_and_realism": {
    "style": "Photoreal editorial",
    "fidelity": "Extremely high detail, no smoothing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Very low",
    "resolution": "High"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "airbrushed skin", "plastic face", "cgi",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
