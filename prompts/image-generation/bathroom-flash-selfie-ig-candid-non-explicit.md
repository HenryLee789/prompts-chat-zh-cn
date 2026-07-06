# 浴室闪光自拍（IG-偷拍，不露骨）

## 中文说明

该提示指导生成真实、坦诚的浴室自拍照图像。它描述了一位具有特定人口统计和外观特征、随意姿势和家庭浴室环境的成年女性。重点是实现逼真且自信的图像，捕捉自然细节并避免露骨的内容。限制涉及灯光、相机设置和风格元素，以确保高质量的 IG 风格自拍照。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "类别": "BATHROOM_SELFIE_FLASH",
  “主题”：{
    "demographics": "成年女性，21-27 岁，土耳其长相/地中海风格。",
    “头发”：{
      "color": "深棕色，带有微妙的自然亮点。",
      "style": "宽松、略显凌乱、随意的分开。",
      "texture": "柔软的股线，可见的飞散，根部逼真。",
      “movement”：“自然地落在肩膀上，有少量的杂毛。”
    },
    “脸”：{
      "shape": "柔和的椭圆形，下巴轮廓柔和。",
      "eyes": "杏仁形，深色虹膜，锐利的眼神光，微妙的眼线。",
      "nose": "鼻梁轮廓分明，鼻尖自然突出。",
      "lips": "自然丰满，色调柔和，轻微分开（休闲自信）。",
      "skin_details": "真实的毛孔，闪光灯发出的轻微光泽，微妙的腮红，没有喷枪。",
      "micro_details": "保留了微小的瑕疵（发际线处细小的婴儿毛发）。"
    },
    “服装”：{
      "top": "休闲罗纹背心或合身 T 恤（无徽标，无文字）。",
      "fit": "真实贴合，肩部面料张力微妙。",
      “texture”：“闪光下可见罗纹/针织编织。”
    },
    “配件”：{
      “珠宝”：[
        “小银圈耳环”
      ]
    }
  },
  “姿势”：{
    "type": "镜面自拍视角（如果你愿意，手机不可见；否则仅镜面反射风格）。",
    "orientation": "半身特写，角度稍高。",
    "head_position": "稍微向主体右侧倾斜。",
    "limbs": "一只手臂意味着将相机举出画面；另一只手轻轻抚摸太阳穴附近的头发。",
    "gaze": "直接的目光接触，冷静而自信。",
    “姿势”：“肩膀放松，姿势随意。”
  },
  “设置”：{
    "environment": "家用卫生间",
    “背景元素”：[
      “具有真实反射的光泽瓷砖”，
      “镀铬淋浴装置稍微失焦”，
      “具有温和镜面高光的陶瓷表面”
    ],
    “深度”：“浅景深：脸部锐利，背景稍微柔和。”
  },
  “相机”：{
    "shot_type": "自拍风格肖像",
    "angle": "略高于视线高度",
    "focal_length_equivalent": "24-28mm 智能手机宽",
    "framing": "3:4 或 4:5，胸部向上的裁剪",
    "focus": "眼睛和脸部锐利，肩膀柔和衰减",
    "perspective": "手持自拍典型的自然轻微透视"
  },
  “照明”：{
    "source": "手机闪光灯般的硬质正面光 + 浴室氛围灯",
    "direction": "前置闪光灯，侧面填充最少",
    "highlights": "前额/鼻子/嘴唇上有闪光镜面；真实的光泽不是塑料的",
    "shadows": "下巴下的柔和阴影；控制对比度",
    "quality": "坦率的快闪流行"
  },
  “心情和表达”：{
    "tone": "随意、自信、亲密-坦诚",
    "express": "轻松的微微笑，'酷女孩'的氛围",
    "atmosphere": "自发的、无计划的"
  },
  “风格和现实主义”：{
    "style": "真实感 IG 自拍照",
    "fidelity": "高皮肤细节，无平滑",
    “缺陷”：“轻微噪点、微小杂毛、保留自然纹理”
  },
  “颜色和色调”：{
    "palette": "中性浴室色调+自然肤色",
    "white_balance": "室内稍暖",
    “对比度”：“中”，
    “饱和度”：“自然”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高分辨率”，
    "noise": "阴影中出现轻微的手机传感器颗粒",
    "motion_blur": "最小；仅在远离脸部时可接受"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，

“single_subject_only”：true
  },
  “否定提示”：[
    “裸体”、“露骨”、“色情”、
    “多余的手指”、“扭曲的手”、“双面脸”、
    “塑料皮肤”、“过度平滑”、
    “可读文本”、“徽标”、“水印”、
    “cgi”、“卡通”、“动画”
  ]
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Bathroom Flash Selfie (IG-candid, non-explicit)

### Description

This prompt guides the generation of a realistic and candid bathroom selfie image. It describes an adult woman with specific demographic and appearance attributes, a casual pose, and a domestic bathroom setting. The focus is on achieving a photorealistic and confident image, capturing natural details and avoiding explicit content. Constraints address lighting, camera settings, and stylistic elements to ensure a high-quality, IG-style selfie.

### Prompt

```md
{
  "category": "BATHROOM_SELFIE_FLASH",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking / Mediterranean vibe.",
    "hair": {
      "color": "Dark brown with subtle natural highlights.",
      "style": "Loose, slightly tousled, casual parting.",
      "texture": "Soft strands, visible flyaways, roots realistic.",
      "movement": "Falls naturally over shoulders with minor stray hairs."
    },
    "face": {
      "shape": "Soft oval with gentle jawline.",
      "eyes": "Almond-shaped, dark irises, sharp catchlights, subtle eyeliner.",
      "nose": "Defined bridge, natural highlight on tip.",
      "lips": "Natural fullness, soft tint, slight parting (casual confident).",
      "skin_details": "Real pores, mild shine from flash, subtle blush, no airbrush.",
      "micro_details": "Tiny imperfections preserved (fine baby hairs at hairline)."
    },
    "clothing": {
      "top": "Casual ribbed tank or fitted tee (no logos, no text).",
      "fit": "Realistic fit with subtle fabric tension at shoulders.",
      "texture": "Visible ribbing/knit weave under flash."
    },
    "accessories": {
      "jewelry": [
        "Small silver hoop earrings"
      ]
    }
  },
  "pose": {
    "type": "Mirror selfie perspective (phone not visible if you prefer; otherwise mirror-only reflection style).",
    "orientation": "Close-up to half-body, slight high angle.",
    "head_position": "Slight tilt to subject's right.",
    "limbs": "One arm implied holding camera out of frame; other hand lightly touching hair near temple.",
    "gaze": "Direct eye contact, cool and confident.",
    "posture": "Relaxed shoulders, casual stance."
  },
  "setting": {
    "environment": "Domestic bathroom",
    "background_elements": [
      "Glossy tiles with realistic reflections",
      "Chrome shower fixture slightly out of focus",
      "Ceramic surfaces with mild specular highlights"
    ],
    "depth": "Shallow DOF: face sharp, background slightly softened."
  },
  "camera": {
    "shot_type": "Selfie-style portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "24-28mm smartphone wide",
    "framing": "3:4 or 4:5, chest-up crop",
    "focus": "Eyes and face tack sharp, gentle falloff on shoulders",
    "perspective": "Natural mild foreshortening typical of handheld selfie"
  },
  "lighting": {
    "source": "Phone-flash-like hard frontal light + ambient bathroom light",
    "direction": "Front-facing flash with minimal side fill",
    "highlights": "Flash specular on forehead/nose/lips; realistic shine not plastic",
    "shadows": "Soft-ish shadows under chin; controlled contrast",
    "quality": "Candid flash pop"
  },
  "mood_and_expression": {
    "tone": "Casual, confident, intimate-candid",
    "expression": "Relaxed micro-smirk, 'cool girl' vibe",
    "atmosphere": "Spontaneous, unplanned"
  },
  "style_and_realism": {
    "style": "Photorealistic IG selfie",
    "fidelity": "High skin detail, no smoothing",
    "imperfections": "Mild noise, tiny stray hairs, natural texture retained"
  },
  "colors_and_tone": {
    "palette": "Neutral bathroom tones + natural skin",
    "white_balance": "Slightly warm indoor",
    "contrast": "Medium",
    "saturation": "Natural"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Slight phone-sensor grain in shadows",
    "motion_blur": "Minimal; acceptable only away from face"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true
  },
  "negative_prompt": [
    "nudity", "explicit", "porn",
    "extra fingers", "warped hands", "double face",
    "plastic skin", "over-smoothing",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
