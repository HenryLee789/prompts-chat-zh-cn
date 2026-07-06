# 书店过道（艺术气息、安静奢华）

## 中文说明

此提示旨在为书店过道中的土耳其成年女性创建逼真的生活方式/编辑图像。它包括对拍摄对象的外观、姿势、服装、布景、相机、灯光、情绪和技术方面的详细规范，以确保高保真和真实的描绘，以及艺术、平静、“安静奢华”的氛围。

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
  "类别": "BOOKSTORE_AISLE_ARTSY",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "保留参考图像中的准确身份（面部几何形状、特征、肤色、标记）。仅限 21 岁以上成人。不得进行美化或身份更改。"
  },
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其人长相（必须匹配参考）。",
    “头发”：{
      "color": "与参考完全匹配。",
      "style": "松散的波浪卷在一只耳朵后面",
      "texture": "真正的股线；轻微卷曲；可见飞散",
      “movement”：“头发自然地搭在肩上”
    },
    “脸”：{
      "eyes": "精确的参考眼睛；深思熟虑的凝视；自然的眼神光",
      "skin_details": "毛孔可见，真实的色调变化",
      "micro_details": "精确保留所有参考标记"
    },
    “服装”：{
      "outfit": "中性上衣外搭简约的黑色外套或羊毛衫（无徽标/文字）。",
      "fabric": "羊毛/针织纹理可见，肘部有轻微皱纹"
    },
    “配件”：{
      "jewelry": ["小银圈"],
      "props": ["一本没有可读标题的精装书（模糊/书脊转开）"]
    }
  },
  “姿势”：{
    "type": "坦率浏览",
    "orientation": "半身",
    "head_position": "下巴稍微向下，眼睛向上看向相机",
    "hands": "一只手拿着一本书靠近胸部；另一只手触摸书架边缘（手正确）",
    "gaze": "近乎直接的目光接触，平静而自信",
    “表情”：“柔和中性，微微笑”
  },
  “设置”：{
    "environment": "书店过道",
    “背景元素”：[
      “书架上的书脊背对着或模糊（没有可读的文字）”，
      “温暖的室内照明”，
      “柔和的深度沿着过道层层叠叠”
    ],
    “深度”：“浅景深：脸部锐利，架子柔和模糊”
  },
  “相机”：{
    "shot_type": "半身像",
    "angle": "眼睛水平或稍高于眼睛",
    "focal_length_equivalent": "35-50mm pro 或 26mm 手机",
    "framing": "4:5，与架子上的引导线不对称",
    “焦点”：“眼睛锐利，手相当锐利，背景柔和”
  },
  “照明”：{
    "source": "书店头顶温暖的灯光+柔和的填充",
    "direction": "温和的顶部/侧面",
    "highlights": "眼睛和颧骨上的柔和亮点",
    “shadows”：“下巴下的微妙阴影，逼真的对比度”
  },
  “心情和表达”：{
    "tone": "艺术、平静、‘安静的奢华’",
    "atmosphere": "舒适、亲密、坦诚"
  },
  “风格和现实主义”：{
    "style": "真实的生活方式/社论",
    "fidelity": "高细节，无喷枪"
  },
  “颜色和色调”：{
    "palette": "暖棕色+中性黑色+奶油色高光",
    "white_balance": "室内温暖",
    “对比度”：“中”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    "noise": "温和的室内颗粒",
    “模式变体”：{
      "amateur": "手持取景稍微弯曲，轻微噪点，白平衡不完美",
      “pro”：“更清晰的曝光、受控的高光、清晰的微对比度”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “no_read_book_titles”：true
  },
  “否定提示”：[
    “可读文本”、“徽标”、“水印”、
    “身份漂移”、“面孔变形”、
    “塑料皮肤”、“过度平滑”、
    “多余的手指”、“扭曲的手”、
    “cgi”、“卡通”、“动画”
  ]
}
```

---

## English Original

### Title

Bookstore Aisle (artsy, quiet luxury)

### Description

This prompt is designed for creating a photorealistic lifestyle/editorial image of an adult Turkish-looking woman in a bookstore aisle. It includes detailed specifications for the subject's appearance, pose, clothing, setting, camera, lighting, mood, and technical aspects to ensure a high-fidelity and realistic portrayal with an artsy, calm, 'quiet luxury' atmosphere.

### Prompt

```md
{
  "category": "BOOKSTORE_AISLE_ARTSY",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve the exact identity from the reference image (face geometry, features, skin tone, marks). Adult 21+ only. No beautification or identity changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking (must match reference).",
    "hair": {
      "color": "Match reference exactly.",
      "style": "Loose waves tucked behind one ear",
      "texture": "Real strands; slight frizz; flyaways visible",
      "movement": "Hair rests naturally on shoulders"
    },
    "face": {
      "eyes": "Exact reference eyes; thoughtful gaze; natural catchlights",
      "skin_details": "Pores visible, realistic tone variation",
      "micro_details": "Preserve all reference marks precisely"
    },
    "clothing": {
      "outfit": "Minimal black coat or cardigan over a neutral top (no logos/text).",
      "fabric": "Wool/knit texture visible, slight wrinkles at elbows"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"],
      "props": ["One hardcover book with no readable title (blur/spine turned away)"]
    }
  },
  "pose": {
    "type": "Candid browsing",
    "orientation": "Half-body",
    "head_position": "Chin slightly down, eyes up toward camera",
    "hands": "One hand holding a book near chest; other hand touching a shelf edge (hands correct)",
    "gaze": "Near-direct eye contact, calm and confident",
    "expression": "Soft neutral with micro-smile"
  },
  "setting": {
    "environment": "Bookstore aisle",
    "background_elements": [
      "Shelves of books with spines turned away or blurred (NO readable text)",
      "Warm indoor lighting",
      "Soft depth layers down the aisle"
    ],
    "depth": "Shallow DOF: face sharp, shelves softly blurred"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye level or slightly above",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone",
    "framing": "4:5, asymmetrical with leading lines from shelves",
    "focus": "Eyes sharp, hands reasonably sharp, background soft"
  },
  "lighting": {
    "source": "Warm overhead bookstore lights + soft fill",
    "direction": "Gentle top/side",
    "highlights": "Soft highlights on eyes and cheekbones",
    "shadows": "Subtle under-chin shadow, realistic contrast"
  },
  "mood_and_expression": {
    "tone": "Artsy, calm, 'quiet luxury'",
    "atmosphere": "Cozy and intimate, candid"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle/editorial",
    "fidelity": "High detail, no airbrushing"
  },
  "colors_and_tone": {
    "palette": "Warm browns + neutral blacks + creamy highlights",
    "white_balance": "Warm indoor",
    "contrast": "Medium"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild indoor grain",
    "mode_variants": {
      "amateur": "Slightly crooked handheld framing, mild noise, imperfect WB",
      "pro": "Cleaner exposure, controlled highlights, crisp micro-contrast"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_book_titles": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "identity drift", "face morphing",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped hands",
    "cgi", "cartoon", "anime"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
