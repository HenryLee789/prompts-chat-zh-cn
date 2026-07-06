# 博物馆台阶（全身，文化）

## 中文说明

此提示创建详细、结构化的描述，以生成艺术且逼真的全身肖像。拍摄对象是一位长相土耳其、充满艺术气息的成年女性，坐在博物馆的台阶上。该提示包括有关主题外观、姿势、设置、相机、灯光、情绪、风格和技术细节的具体说明，以实现照片级真实的编辑生活方式图像。约束确保自然且专业的结果，没有徽标或水印。

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
  "类别": "MUSEUM_STEPS_FULLBODY",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其长相，有艺术气息。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "松散的波浪，塞在一只耳朵后面",
      “texture”：“自然股线，轻微飞扬”
    },
    “脸”：{
      “眼睛”：“体贴、温暖”，
      "skin_details": "自然纹理，无平滑"
    },
    “服装”：{
      "outfit": "简约别致的黑色服装+浅色外套（无徽标）",
      "fabric": "纺织组织可见"
    },
    “配件”：{
      "jewelry": ["银圈"]
    }
  },
  “姿势”：{
    "type": "坐式全身",
    "orientation": "坐在台阶上，脚踝交叉",
    "hands": "一只手放在膝盖上，另一只手靠近下巴",
    "gaze": "柔和的目光接触，平静",
    “姿势”：“放松、沉着”
  },
  “设置”：{
    "environment": "博物馆外部台阶",
    “背景元素”：[
      “具有真实毛孔和磨损的石材纹理”，
      “柔和的日光”，
      “没有可读的牌匾/标牌”
    ],
    “深度”：“主体清晰，背景柔和模糊”
  },
  “相机”：{
    "shot_type": "全身肖像",
    "angle": "稍微低一点的角度，更优雅",
    "focal_length_equivalent": "35-50mm 社论",
    “取景”：“4：5”，
    “焦点”：“人脸+手部锐利，背景柔和”
  },
  “照明”：{
    "source": "自然光",
    "direction": "软正面",
    “shadows”：“温柔、真实”
  },
  “心情和表达”：{
    "tone": "艺术、冷静、自信",
    《表情》：“微妙的微笑，深思熟虑的眼神”
  },
  “风格和现实主义”：{
    "style": "真实的编辑生活方式",
    “imperfections”：“保留自然的飞散头发”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "噪音": "非常温和",
    "sharpness": "清晰的面部细节"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “可读文本”、“徽标”、“水印”、
    “额外的手指”、“扭曲的脚步”、
    “塑料皮肤”、“cgi”
  ]
}
```

---

## English Original

### Title

Museum Steps (full-body, cultural)

### Description

This prompt creates a detailed, structured description for generating an artistic and realistic full-body portrait. The subject is a Turkish-looking adult woman with an artsy vibe, seated on museum steps. The prompt includes specific instructions for subject appearance, pose, setting, camera, lighting, mood, style, and technical details to achieve a photoreal editorial lifestyle image. Constraints ensure a natural and professional outcome without logos or watermarks.

### Prompt

```md
{
  "category": "MUSEUM_STEPS_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, artsy vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, tucked behind one ear",
      "texture": "Natural strands, slight flyaways"
    },
    "face": {
      "eyes": "Thoughtful, warm",
      "skin_details": "Natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Minimal chic black outfit + light coat (no logos)",
      "fabric": "Textile weave visible"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Seated full-body",
    "orientation": "Sitting on steps, ankles crossed",
    "hands": "One hand resting on knee, other near chin",
    "gaze": "Soft eye contact, calm",
    "posture": "Relaxed, composed"
  },
  "setting": {
    "environment": "Museum exterior steps",
    "background_elements": [
      "Stone texture with realistic pores and wear",
      "Soft daylight",
      "No readable plaques/signage"
    ],
    "depth": "Subject sharp, background softly blurred"
  },
  "camera": {
    "shot_type": "Full-body portrait",
    "angle": "Slightly low angle for elegance",
    "focal_length_equivalent": "35-50mm editorial",
    "framing": "4:5",
    "focus": "Face + hands sharp, background soft"
  },
  "lighting": {
    "source": "Natural daylight",
    "direction": "Soft front-side",
    "shadows": "Gentle, realistic"
  },
  "mood_and_expression": {
    "tone": "Artsy, calm, confident",
    "expression": "Subtle smile, thoughtful eyes"
  },
  "style_and_realism": {
    "style": "Photoreal editorial lifestyle",
    "imperfections": "Natural hair flyaways preserved"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Very mild",
    "sharpness": "Crisp facial detail"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "extra fingers", "warped steps",
    "plastic skin", "cgi"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
