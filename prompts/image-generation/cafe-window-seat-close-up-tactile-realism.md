# 咖啡馆靠窗的座位（特写，触觉真实感）

## 中文说明

本提示指导你为一位坐在窗边舒适咖啡馆里的年轻土耳其女子创作一幅逼真且细致的特写肖像。它强调触觉真实感，捕捉皮肤纹理、头发运动和微妙表情等自然细节，以达到亲密和平易近人的氛围。布景包括陶瓷杯和窗户凝结等元素，所有这些都以温暖的浅景深为框架，以唤起坦率的日常情绪。

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
  "类别": "CAFE_WINDOW_SEAT_CLOSEUP",
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "松散的波浪卷在一只耳朵后面",
      "texture": "单独的股线可见，轻微卷曲",
      “movement”：“几缕自然向前落下”
    },
    “脸”：{
      "shape": "软椭圆形",
      "eyes": "富有表现力、温暖、自然的湿线细节",
      "makeup": "自然‘干净’的妆容，微妙的眼线，柔和的腮红”,
      "skin_details": "毛孔可见，自然光泽，无需喷枪",
      "micro_details": "前额附近有细小的婴儿毛发"
    },
    “服装”：{
      "top": "休闲针织或合身 T 恤（无文字）",
      “texture”：“可见的针织组织，逼真的褶皱”
    },
    “配件”：{
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "餐桌上的偷拍肖像",
    "orientation": "特写/半身",
    "head_position": "轻微倾斜",
    "hands": "一只手靠近下巴，手指放松且符合解剖学原理",
    "gaze": "近乎直接的目光接触，柔和的微笑",
    “姿势”：“放松肩膀，稍微向前倾斜”
  },
  “设置”：{
    "environment": "靠窗的舒适咖啡馆",
    “背景元素”：[
      “桌上的陶瓷杯”，
      “玻璃上的凝结”，
      “盘子上的微小面包屑（微妙的现实主义）”，
      “背景顾客模糊（没有可识别的面孔）”
    ],
    “深度”：“具有温暖散景的浅景深”
  },
  “相机”：{
    "shot_type": "肖像",
    "angle": "略高于视线高度（休闲手持感）",
    "focal_length_equivalent": "26mm 手机或 50mm 专业肖像",
    "framing": "4:5，脸部和肩膀占主导地位",
    “focus”：“眼睛锐利，背景柔和模糊”
  },
  “照明”：{
    "source": "漫射窗户日光 + 温暖的室内环境",
    "direction": "柔光侧光塑造颧骨",
    "highlights": "鼻梁和嘴唇上的自然亮点",
    "shadows": "下巴下的柔和阴影，逼真的对比度",
    “品质”：“柔软、讨人喜欢、舒适”
  },
  “心情和表达”：{
    "tone": "温暖、平易近人、亲密",
    “表情”：“温柔的笑容，活泼的眼神”，
    “气氛”：“有触觉，日常坦诚”
  },
  “风格和现实主义”：{
    "style": "逼真的 IG 生活方式",
    "fidelity": "高细节（睫毛、毛孔、发丝）",
    "imperfections": "允许自然噪声、轻微不完美的白平衡"
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "阴影中轻微的类似电话的颗粒",
    "motion_blur": "脸上没有；背景中允许最少"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “过度平滑”、“塑料皮肤”、“不可思议的眼睛”、
    “坏手”、“多余的手指”、
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

Cafe Window Seat (close-up, tactile realism)

### Description

This prompt guides in creating a photorealistic and detailed close-up portrait of a young Turkish-looking woman seated in a cozy café by a window. It emphasizes tactile realism, capturing natural details such as skin texture, hair movement, and subtle expressions to achieve an intimate and approachable atmosphere. The setting includes elements like a ceramic cup and window condensation, all framed with a warm, shallow depth of field to evoke a candid, everyday mood.

### Prompt

```md
{
  "category": "CAFE_WINDOW_SEAT_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves tucked behind one ear",
      "texture": "Individual strands visible, slight frizz",
      "movement": "A few strands fall forward naturally"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Expressive, warm, natural wetline detail",
      "makeup": "Natural 'clean' makeup, subtle liner, soft blush",
      "skin_details": "Pores visible, natural sheen, no airbrush",
      "micro_details": "Fine baby hairs near forehead"
    },
    "clothing": {
      "top": "Casual knit or fitted tee (no text)",
      "texture": "Visible knit weave, realistic folds"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Candid portrait at a table",
    "orientation": "Close-up/half-body",
    "head_position": "Slight tilt",
    "hands": "One hand near chin, fingers relaxed and anatomically correct",
    "gaze": "Near-direct eye contact, soft smile",
    "posture": "Relaxed shoulders leaning slightly forward"
  },
  "setting": {
    "environment": "Cozy cafe by a window",
    "background_elements": [
      "Ceramic cup on table",
      "Condensation on glass",
      "Tiny crumbs on plate (subtle realism)",
      "Background patrons blurred (no identifiable faces)"
    ],
    "depth": "Shallow DOF with warm bokeh"
  },
  "camera": {
    "shot_type": "Portrait",
    "angle": "Slightly above eye level (casual handheld feel)",
    "focal_length_equivalent": "26mm phone OR 50mm pro portrait",
    "framing": "4:5, face and shoulders dominate frame",
    "focus": "Eyes sharp, background softly blurred"
  },
  "lighting": {
    "source": "Diffused window daylight + warm interior ambient",
    "direction": "Soft side light shaping cheekbones",
    "highlights": "Natural highlights on nose bridge and lips",
    "shadows": "Gentle shadow under chin, realistic contrast",
    "quality": "Soft, flattering, cozy"
  },
  "mood_and_expression": {
    "tone": "Warm, approachable, intimate",
    "expression": "Soft smile, lively eyes",
    "atmosphere": "Tactile, everyday candid"
  },
  "style_and_realism": {
    "style": "Photorealistic IG lifestyle",
    "fidelity": "High detail (lashes, pores, hair strands)",
    "imperfections": "Natural noise, slight imperfect WB allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild phone-like grain in shadows",
    "motion_blur": "None on face; minimal allowed in background"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "over-smoothing", "plastic skin", "uncanny eyes",
    "bad hands", "extra fingers",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
