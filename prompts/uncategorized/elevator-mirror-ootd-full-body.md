# 电梯镜 OOTD（全身）

## 中文说明

该提示会生成一位成年女性在电梯里用全身镜自拍的详细视觉描述。它捕捉外观、姿势、环境和情绪的具体细节，以确保逼真且时尚的结果。非常适合想要以别致氛围描绘日常、坦率时刻的艺术家和创作者。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “类别”：“ELEVATOR_MIRROR_OOTD”，
  “主题”：{
    "demographics": "成年女性，21-27岁，土耳其人相貌。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "低马尾或松散的波浪，随意排列",
      "texture": "真实的股线，轻微的卷曲，存在飞散",
      “movement”：“头发自然地搭在衣领上”
    },
    “脸”：{
      "shape": "软椭圆形",
      "eyes": "富有表现力、自然的聚光灯",
      "nose": "定义的鼻梁",
      “嘴唇”：“柔和自然的色调”，
      "skin_details": "毛孔可见，色调变化自然",
      "micro_details": "太阳穴附近可见婴儿毛发"
    },
    “身体比例”：{
      "build": "自然、合身",
      "position": "放松自信的姿势"
    },
    “服装”：{
      "outerwear": "定制长外套（无徽标）",
      "inner": "最小顶部",
      "bottom": "直筒裤或牛仔裤",
      "shoes": "干净的运动鞋或踝靴（无品牌）",
      "texture": "织物组织可见；肘部有轻微皱纹"
    },
    “配件”：{
      "bag": "小肩包（无标志）",
      "jewelry": ["小银圈"]
    }
  },
  “姿势”：{
    "type": "全身镜自拍（手机不直接显示；隐含镜面反射）",
    "orientation": "稍微倾斜地站立",
    "head_position": "下巴微微下垂，随意",
    "limbs": "一只手调整外套袖口；另一只手放松靠近包带",
    "legs": "一侧膝盖稍微弯曲，重心转移到一侧臀部",
    "gaze": "看着镜子里的倒影，平静自信"
  },
  “设置”：{
    "environment": "电梯内部",
    “背景元素”：[
      “拉丝金属墙”，
      “柔和的头顶面板照明”，
      “镜子上的微妙指纹/污迹以实现真实感”
    ],
    “深度”：“一切都相当清晰；背景轻微柔和”
  },
  “相机”：{
    "shot_type": "全身镜拍摄",
    "angle": "手持设备典型的轻微向下倾斜",
    "focal_length_equivalent": "24-28mm 宽",
    "framing": "4:5 IG feed，全身可见",
    “focus”：“面部可读，装备清晰，失真最小”
  },
  “照明”：{
    "source": "高架电梯灯",
    "direction": "自上而下柔和但稍显粗糙（逼真的电梯外观）",
    "highlights": "控制金属反射",
    "shadows": "下巴、外套褶皱下的柔和阴影",
    “品质”：“日常真实”
  },
  “心情和表达”：{
    "tone": "极简别致，自信",
    "express": "中性微微笑",
    "atmosphere": "坦诚的通勤氛围"
  },
  “风格和现实主义”：{
    "style": "照片级真实社交",
    "fidelity": "织物纹理，金属反射逼真",
    “imperfections”：“轻微噪音，不完美的取景”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “噪音”：“轻微”，
    “锐度”：“脸+衣服脆”
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “single_subject_only”：true
  },
  “否定提示”：[
    “镜子故障”、“双重反射”、“扭曲的电梯”、
    “多余的肢体”、“糟糕的手”、“塑料皮肤”、
    “可读文本”、“徽标”、“水印”、
    “cgi”、“卡通”、“动画”
  ]
}
```

---

## English Original

### Title

Elevator Mirror OOTD (full-body)

### Description

This prompt generates a detailed visual description of an adult woman taking a full-body mirror selfie in an elevator. It captures specific details of appearance, pose, setting, and mood to ensure a photorealistic and stylish outcome. Ideal for artists and creators looking to depict everyday, candid moments with a chic vibe.

### Prompt

```md
{
  "category": "ELEVATOR_MIRROR_OOTD",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Low ponytail or loose waves, casually arranged",
      "texture": "Real strands, slight frizz, flyaways present",
      "movement": "Hair rests naturally over coat collar"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Expressive, natural catchlights",
      "nose": "Defined bridge",
      "lips": "Soft natural tint",
      "skin_details": "Pores visible, natural tone variation",
      "micro_details": "Baby hairs visible near temples"
    },
    "body_proportions": {
      "build": "Natural, fit",
      "posture": "Relaxed confident stance"
    },
    "clothing": {
      "outerwear": "Tailored long coat (no logos)",
      "inner": "Minimal top",
      "bottom": "Straight pants or jeans",
      "shoes": "Clean sneakers or ankle boots (no branding)",
      "texture": "Fabric weave visible; slight wrinkles at elbows"
    },
    "accessories": {
      "bag": "Small shoulder bag (no logos)",
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body mirror selfie (phone not shown directly; mirror reflection implied)",
    "orientation": "Standing slightly angled",
    "head_position": "Chin slightly down, casual",
    "limbs": "One hand adjusting coat cuff; other hand relaxed near bag strap",
    "legs": "One knee slightly bent, weight shifted to one hip",
    "gaze": "Looking at mirror reflection, calm confident"
  },
  "setting": {
    "environment": "Elevator interior",
    "background_elements": [
      "Brushed metal walls",
      "Soft overhead panel lighting",
      "Subtle fingerprints/smudges on mirror for realism"
    ],
    "depth": "Everything fairly clear; slight background softness"
  },
  "camera": {
    "shot_type": "Full-body mirror shot",
    "angle": "Slight downward tilt typical of handheld",
    "focal_length_equivalent": "24-28mm wide",
    "framing": "4:5 IG feed, full body visible",
    "focus": "Face readable, outfit sharp, minimal distortion"
  },
  "lighting": {
    "source": "Overhead elevator lights",
    "direction": "Top-down soft but slightly harsh (realistic elevator look)",
    "highlights": "Metal reflections controlled",
    "shadows": "Soft shadows under chin, coat folds",
    "quality": "Everyday realistic"
  },
  "mood_and_expression": {
    "tone": "Minimalist chic, confident",
    "expression": "Neutral with micro-smile",
    "atmosphere": "Candid commute vibe"
  },
  "style_and_realism": {
    "style": "Photoreal social",
    "fidelity": "Fabric texture, metal reflections realistic",
    "imperfections": "Slight noise, imperfect framing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "sharpness": "Face + outfit crisp"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true
  },
  "negative_prompt": [
    "mirror glitches", "double reflections", "warped elevator",
    "extra limbs", "bad hands", "plastic skin",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
