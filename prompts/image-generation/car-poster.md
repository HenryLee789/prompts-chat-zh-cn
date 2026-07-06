# 汽车海报

## 中文说明

用于让 AI 围绕「汽车海报」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
${primary_text:Megane}{
  “类别”：“STUDIO_RACE_CAR_SIDE_PROFILE”，
  “主题”：{
    "vehicle_type": "GT 耐力赛车",
    "base_form": "现代 GT 级轮廓，低悬挂空气动力学车身",
    “品牌”：{
      "primary_text": "梅甘娜",
      "replacement_rule": "所有通常出现“保时捷”品牌的实例均替换为“梅甘娜””,
      "style": "干净的赛车排版，逼真的乙烯基应用",
      “放置”：[
        “门板主品牌区”，
        “通常放置制造商名称的侧面进气区域”
      ]
    },
    “制服”：{
      "primary_colors": ["白色", "红色", "黑色"],
      "pattern": "锐利的赛车运动色块",
      "finish": "具有微妙反射的光泽涂料",
      "decals": "有赞助商风格的贴花，但不会分散注意力"
    },
    “详细信息”：{
      “空气动力学”：[
        “大尾翼”，
        “前分离器”，
        “侧面进气口”，
        「后扩散器」
      ],
      “轮子”：{
        "type": "中心锁赛车轮",
        "tires": "带有可见侧壁文字的光滑赛车轮胎",
        “brakes”：“通过轮圈可见大型高性能制动盘”
      },
      “表面现实主义”：{
        "panel_lines": "清晰准确",
        "bolts_and_fasteners": "空气动力学元件周围可见",
        "minor_wear": "细微的比赛使用痕迹，未损坏"
      }
    }
  },
  “姿势和方向”：{
    "view": "完美的侧面轮廓",
    "orientation": "车辆水平对齐，面向左",
    "stance": "静态工作室姿势，轮子笔直"
  },
  “设置”：{
    "environment": "工作室背景",
    “背景”：{
      "color": "粗体红色和白色图形背景",
      "design": "汽车后面抽象的大型印刷形状",
      "interaction": "没有阴影投射到背景文本上"
    },
    "ground_plane": "干净的工作室地板，最小的反射"
  },
  “相机”：{
    "shot_type": "侧面轮廓产品风格镜头",
    "angle": "眼睛水平，正交的感觉",
    "focal_length_equivalent": "70-100mm（压缩、无失真）",
    "framing": "车辆完全包含在框架内",
    “focus”：“整车从前扰流板到后翼子板清晰”
  },
  “照明”：{
    "setup": "受控工作室照明",
    "key_light": "沿着车身面板的横向照明",
    "fill_light": "软填充以保持阴影区域的细节",
    "highlights": "油漆和碳表面的清晰反射",
    “shadows”：“最小，边缘柔和，在轮胎下接地”
  },
  “心情和风格”：{
    "tone": "高性能、优质赛车运动",
    "atmosphere": "编辑赛车展示",
    "emotion": "精度、速度、工程信心"
  },
  “风格和现实主义”：{
    "style": "照片级真实汽车工作室摄影",
    "fidelity": "材料精度高（油漆、碳纤维、橡胶）",
    “imperfections”：“非常微妙、真实——没有过度打磨的 CGI”
  },
  “技术细节”：{
    "aspect_ratio": "根据景观源改编的肖像裁剪",
    “清晰度”：“整个车辆的清晰度很高”，
    "noise": "非常低，工作室干净"
  },
  “约束”：{
    “no_original_brand_names”：正确，
    “brand_replacement_enforced”：正确，
    “无水印”：正确，
    “no_unread_text”：正确，
    “single_vehicle_only”：true
  },
  “否定提示”：[
    “汽车比例不正确”，
    “扭曲的轮子”，
    “扭曲的版式”，
    “漂浮的汽车”，
    “运动模糊”，
    “cgi 外观”，
    “低细节纹理”，
    “bug的品牌标志”，
    “额外车辆”
  ],
  “额外更改”：{

"explicit_request": "将所有 'Porsche' 文本替换为 'Megane'",
    "implementation_note": "更改品牌名称时保留版式比例、对齐方式和真实感"
  }
}
```

---

## English Original

### Title

Car poster

### Description



### Prompt

```md
${primary_text:Megane}{
  "category": "STUDIO_RACE_CAR_SIDE_PROFILE",
  "subject": {
    "vehicle_type": "GT endurance race car",
    "base_form": "Modern GT-class silhouette, low-slung aerodynamic body",
    "branding": {
      "primary_text": "Megane",
      "replacement_rule": "All instances where 'Porsche' branding would normally appear are replaced with 'Megane'",
      "style": "Clean motorsport typography, realistic vinyl application",
      "placement": [
        "Door panel main branding area",
        "Side intake area where manufacturer name is typically placed"
      ]
    },
    "livery": {
      "primary_colors": ["White", "Red", "Black"],
      "pattern": "Sharp motorsport color blocking",
      "finish": "Gloss paint with subtle reflections",
      "decals": "Sponsor-style decals present but non-distracting"
    },
    "details": {
      "aerodynamics": [
        "Large rear wing",
        "Front splitter",
        "Side air intakes",
        "Rear diffuser"
      ],
      "wheels": {
        "type": "Center-lock racing wheels",
        "tires": "Slick racing tires with visible sidewall text",
        "brakes": "Large performance brake discs visible through rims"
      },
      "surface_realism": {
        "panel_lines": "Crisp and accurate",
        "bolts_and_fasteners": "Visible around aero elements",
        "minor_wear": "Subtle race-use marks, not damaged"
      }
    }
  },
  "pose_and_orientation": {
    "view": "Perfect side profile",
    "orientation": "Vehicle aligned horizontally, facing left",
    "stance": "Static studio pose, wheels straight"
  },
  "setting": {
    "environment": "Studio backdrop",
    "background": {
      "color": "Bold red and white graphic background",
      "design": "Large typographic shapes abstracted behind the car",
      "interaction": "No shadows cast onto background text"
    },
    "ground_plane": "Clean studio floor, minimal reflection"
  },
  "camera": {
    "shot_type": "Side profile product-style shot",
    "angle": "Eye-level, orthographic feel",
    "focal_length_equivalent": "70-100mm (compressed, distortion-free)",
    "framing": "Vehicle fully contained within frame",
    "focus": "Entire car sharp from front splitter to rear wing"
  },
  "lighting": {
    "setup": "Controlled studio lighting",
    "key_light": "Even lateral illumination along body panels",
    "fill_light": "Soft fill to maintain detail in shadow areas",
    "highlights": "Clean reflections on paint and carbon surfaces",
    "shadows": "Minimal, soft-edged, grounded under tires"
  },
  "mood_and_style": {
    "tone": "High-performance, premium motorsport",
    "atmosphere": "Editorial racing showcase",
    "emotion": "Precision, speed, engineering confidence"
  },
  "style_and_realism": {
    "style": "Photoreal automotive studio photography",
    "fidelity": "High material accuracy (paint, carbon fiber, rubber)",
    "imperfections": "Very subtle, realistic — not overly polished CGI"
  },
  "technical_details": {
    "aspect_ratio": "Portrait crop adapted from landscape source",
    "sharpness": "High across entire vehicle",
    "noise": "Very low, studio clean"
  },
  "constraints": {
    "no_original_brand_names": true,
    "brand_replacement_enforced": true,
    "no_watermarks": true,
    "no_unreadable_text": true,
    "single_vehicle_only": true
  },
  "negative_prompt": [
    "incorrect car proportions",
    "distorted wheels",
    "warped typography",
    "floating car",
    "motion blur",
    "cgi look",
    "low detail textures",
    "wrong brand logos",
    "extra vehicles"
  ],
  "extra_changes": {
    "explicit_request": "Replace all 'Porsche' text with 'Megane'",
    "implementation_note": "Typography scale, alignment, and realism preserved while changing brand name"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
