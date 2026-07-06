---
id: "cmjok4wel000xie049tb70bqo"
slug: "kitchen-morning-window-light-candid-cozy"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/kitchen-morning-window-light-candid-cozy"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3bd6ea981bc29f6f7d140c11b08d7e8caf056087194fa0ce5d5f6835a2862d27"
upstream_updated_at: "2025-12-27T18:54:05.732Z"
---
# 厨房晨窗灯（坦诚、温馨）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[kitchen-morning-window-light-candid-cozy](https://prompts.chat/prompts/kitchen-morning-window-light-candid-cozy)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示有助于捕捉成年女性在厨房环境中逼真、坦率的早晨场景。它通过基于参考图像保留主体的身份、注重自然光并保持真实的纹理和细节来强调真实的表现。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “类别”：“KITCHEN_MORNING_WINDOWLIGHT”，
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "使用输入的参考图像作为唯一的身份源。保留精确的面部结构、眼睛形状/间距、鼻梁/鼻尖、嘴唇、下巴线、颧骨、发际线、眉毛、肤色/底色和独特标记。不要美化，不要改变种族/年龄认知。仅限成人 (21 岁以上)。"
  },
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其样/地中海风格（必须匹配参考）。",
    “头发”：{
      "color": "与参考完全匹配。",
      "style": "早晨的头发松散、略显凌乱；一些修饰脸型的发丝。",
      "texture": "可见的单股线，微妙的飞扬，真实的根源。",
      “movement”：“自然下落；末端轻微移动是可以接受的。”
    },
    “脸”：{
      "shape": "与参考完全匹配。",
      "eyes": "精确的参考眼睛形状；自然的聚光灯；没有不可思议的锐化。",
      "lips": "精确的参考唇形；自然的纹理线条可见。",
      "skin_details": "高保真毛孔，微妙的早晨光泽；无需喷枪。",
      "micro_details": "精确保留参考标记/雀斑/痣。"
    },
    “服装”：{
      "top": "柔软的超大 T 恤或休闲背心（无徽标，无文字）。",
      "fit": "宽松，微皱，逼真的垂感。",
      “texture”：“棉纹可见，允许微弱起球。”
    },
    “配件”：{
      "jewelry": ["小银圈（可选，逼真的反射）"]
    }
  },
  “姿势”：{
    "type": "坦率的生活方式",
    "orientation": "半身轻靠柜台",
    "head_position": "轻微倾斜；下巴放松",
    "hands": "一只手拿着杯子；另一只手将头发梳到耳后（解剖学上的手是正确的）",
    "gaze": "近乎直接的目光接触（像坦诚时刻一样轻微偏离轴）",
    “表情”：“睡意温柔的微笑，舒适的早晨氛围”
  },
  “设置”：{
    "environment": "家庭厨房",
    “背景元素”：[
      “带有透明窗帘的窗户可以扩散日光”，
      “台面上有细微的面包屑/咖啡勺（无品牌）”，
      “植物或水果盘（没有可读标签）”，
      “柔和的杂乱模糊（有品味，真实）”
    ],
    “深度”：“主体清晰；背景柔和模糊，具有自然的深度分层”
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "略高于视线水平，手持",
    "focal_length_equivalent": "24-28mm 智能手机宽（业余）或 35-50mm（专业）",
    "framing": "4:5 IG feed，不对称成分",
    "focus": "眼睛/脸部锐利；肩膀/背景下降",
    "perspective": "自然；没有脸部扭曲"
  },
  “照明”：{
    "source": "柔和的窗户日光 + 微妙的室内反射",
    "direction": "侧面/正面柔光轻轻塑造颧骨",
    "highlights": "眼睛、鼻梁、嘴唇上的自然镜面",
    "shadows": "下巴和发际线下的软边阴影",
    “quality”：“温暖、舒适、真实的晨光”
  },
  “心情和表达”：{
    "tone": "舒适、亲密、有关联",
    “表情”：“柔和的微笑和活泼的眼睛”，
    "atmosphere": "无计划、日常坦诚"
  },
  “风格和现实主义”：{
    "style": "逼真的社交媒体生活方式",
    "fidelity": "高细节皮肤纹理和发丝；无平滑",
    "imperfections": "允许阴影中出现轻微噪点"
  },
  “颜色和色调”：{
    "palette": "温暖的中性色 + 柔和的日光色调",
    "white_balance": "稍微温暖的室内/日光混合",

"contrast": "中等、真实的动态范围",
    “饱和度”：“自然”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高分辨率”，
    "noise": "阴影中温和逼真的传感器颗粒",
    “模式变体”：{
      "amate": "iPhone 的真实感觉：轻微倾斜、不完美的取景、轻微的噪点、远离脸部的微妙运动模糊",
      "pro": "编辑生活方式：更干净的曝光、受控的高光、清晰的微对比度、浅景深"
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “无可读标签”：true
  },
  “否定提示”：[
    “身份漂移”、“脸部变形”、“美颜滤镜”、“瓷肌”、“过度平滑”、
    “cgi”、“卡通”、“动漫”、
    “多余的手指”、“扭曲的手”、“重复的人”、
    “可读文本”、“徽标”、“水印”
  ]
}
```

---

## English Original

### Title

Kitchen Morning Window Light (candid, cozy)

### Description

This prompt assists in capturing a photorealistic, candid morning scene of an adult woman in a kitchen setting. It emphasizes authentic representation by preserving the subject's identity based on a reference image, focusing on natural lighting, and maintaining realistic textures and details.

### Prompt

```md
{
  "category": "KITCHEN_MORNING_WINDOWLIGHT",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Use the input reference image as the only identity source. Preserve exact facial structure, eye shape/spacing, nose bridge/tip, lips, jawline, cheekbones, hairline, brows, skin tone/undertone, and distinctive marks. Do not beautify, do not change ethnicity/age perception. Adult (21+) only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking / Mediterranean vibe (must match reference).",
    "hair": {
      "color": "Match reference exactly.",
      "style": "Loose, slightly messy morning hair; a few face-framing strands.",
      "texture": "Visible individual strands, subtle flyaways, realistic roots.",
      "movement": "Falls naturally; slight motion in ends is acceptable."
    },
    "face": {
      "shape": "Match reference exactly.",
      "eyes": "Exact reference eye shape; natural catchlights; no uncanny sharpening.",
      "lips": "Exact reference lip shape; natural texture lines visible.",
      "skin_details": "High-fidelity pores, subtle morning sheen; no airbrushing.",
      "micro_details": "Keep reference marks/freckles/moles precisely."
    },
    "clothing": {
      "top": "Soft oversized tee or casual tank (no logos, no text).",
      "fit": "Relaxed, slightly wrinkled, realistic drape.",
      "texture": "Cotton weave visible, faint pilling allowed."
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional, realistic reflections)"]
    }
  },
  "pose": {
    "type": "Candid lifestyle",
    "orientation": "Half-body leaning lightly on counter",
    "head_position": "Slight tilt; chin relaxed",
    "hands": "One hand holding a mug; other hand brushing hair behind ear (hands anatomically correct)",
    "gaze": "Near-direct eye contact (slight off-axis like a candid moment)",
    "expression": "Sleepy-soft smile, cozy morning vibe"
  },
  "setting": {
    "environment": "Home kitchen",
    "background_elements": [
      "Window with sheer curtain diffusing daylight",
      "Countertop with subtle crumbs/coffee spoon (no branding)",
      "Plants or fruit bowl (no readable labels)",
      "Soft clutter blur (tasteful, realistic)"
    ],
    "depth": "Subject sharp; background softly blurred with natural depth layering"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly above eye level, handheld",
    "focal_length_equivalent": "24-28mm smartphone wide (amateur) OR 35-50mm (pro)",
    "framing": "4:5 IG feed, asymmetrical composition",
    "focus": "Eyes/face sharp; fall-off on shoulders/background",
    "perspective": "Natural; no face distortion"
  },
  "lighting": {
    "source": "Soft window daylight + subtle indoor bounce",
    "direction": "Side/front soft light shaping cheekbones gently",
    "highlights": "Natural speculars on eyes, nose bridge, lips",
    "shadows": "Soft-edge shadows under chin and hairline",
    "quality": "Warm, comforting, realistic morning light"
  },
  "mood_and_expression": {
    "tone": "Cozy, intimate, relatable",
    "expression": "Soft smile with lively eyes",
    "atmosphere": "Unplanned, everyday candid"
  },
  "style_and_realism": {
    "style": "Photorealistic social media lifestyle",
    "fidelity": "High detail skin texture and hair strands; no smoothing",
    "imperfections": "Minor noise in shadows allowed"
  },
  "colors_and_tone": {
    "palette": "Warm neutrals + soft daylight tones",
    "white_balance": "Slightly warm indoor/daylight mix",
    "contrast": "Medium, realistic dynamic range",
    "saturation": "Natural"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Mild realistic sensor grain in shadows",
    "mode_variants": {
      "amateur": "iPhone-candid feel: slight tilt, imperfect framing, mild noise, subtle motion blur away from face",
      "pro": "Editorial lifestyle: cleaner exposure, controlled highlights, crisp micro-contrast, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_labels": true
  },
  "negative_prompt": [
    "identity drift", "face morphing", "beauty filter", "porcelain skin", "over-smoothing",
    "cgi", "cartoon", "anime",
    "extra fingers", "warped hands", "duplicate person",
    "readable text", "logos", "watermark"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [kitchen-morning-window-light-candid-cozy](https://prompts.chat/prompts/kitchen-morning-window-light-candid-cozy) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:54:05.732Z |
