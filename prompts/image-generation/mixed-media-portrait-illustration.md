---
id: "cmm9pmv3v0001kz04h14d7t4y"
slug: "mixed-media-portrait-illustration"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/mixed-media-portrait-illustration"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "527edfcdb86e0ff5d815f76e163b40b0571c7a992b4708eae643368ed0c5f418"
upstream_updated_at: "2026-03-02T21:47:57.947Z"
---
# 混合媒体肖像插图

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[mixed-media-portrait-illustration](https://prompts.chat/prompts/mixed-media-portrait-illustration)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示将指导您创建混合媒体肖像插图，其中以复古报纸背景呈现的具有鲜明特征的男人为特色。它包括构图、风格、灯光和材料的详细规范，以实现现实而又艺术的效果。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Art、creative 等主题快速生成可复用结果。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “主题”：{
    "description": "一个男人的肖像，留着深色的有纹理的短发，略微向上看。他戴着厚框、鲜艳的橙色眼镜。脸部直接在报纸背景上用黑色墨水式的交叉阴影线渲染。",
    “计数”：1，
    "orientation": "面向前方",
    "pose_or_state": "静态，头部稍微向上倾斜",
    “表达”：“中立、沉思”
  },
  “比例和比例”：{
    "subject_to_frame_ratio": "主体占据帧高度的约 75%",
    "proportions": "锁定参考",
    "negative_space": "中等，被油漆飞溅和报纸文字占据"
  },
  “组成”：{
    "shot_type": "特写肖像",
    "camera_angle": "眼睛水平，稍微向上看",
    “框架”：“居中”，
    "symmetry": "脸部居中且大部分对称；背景飞溅不对称",
    “背景”：“陈旧泛黄的老式报纸，上面有文字列和褪色的小图像，上面有大片蓝色和橙色油漆飞溅和滴落”，
    "depth_of_field": "平面（2D 混合媒体风格）"
  },
  “时间上下文”：{
    “era”：“具有中世纪复古报纸和眼镜风格的当代混合媒体艺术”，
    “modern_elements”：假，
    “retro_stylization”：正确，
    “趋势影响力”：假
  },
  “风格”：{
    "visual_type": "混合媒体插图",
    "realism_level": "指定艺术风格的最大值",
    "art_style": "报纸拼贴画上的钢笔素描",
    "stylization": "特定混合媒体风格的文字再现",
    "interpretation": "仅逐字复制"
  },
  “照明”：{
    "setup_type": "在草图中模拟",
    "light_direction": "正面/自上而下，由下巴、鼻子和眉毛下方的阴影定义",
    "light_quality": "高对比度渲染",
    "contrast": "高（黑色墨水对浅色纸张）",
    "shadow_behavior": "通过阴影和实心黑色区域渲染",
    "color_temper": "由于纸张而整体温暖，带有冷蓝色调",
    “lighting_variation”：“无”
  },
  “材料”：{
    “主要材料”：[
      “泛黄的老式报纸”，
      “黑墨水/木炭”，
      “充满活力的蓝色和橙色油漆（丙烯酸或喷漆外观）”
    ],
    "surface_finish": "哑光纸和墨水",
    "light_reflection": "最小，仅在眼镜框和瞳孔中可见高光",
    "material_accuracy": "精确"
  },
  “颜色调色板”：{
    “主导颜色”：[
      “棕褐色/奶油色（报纸）”，
      “黑色（墨线）”，
      “充满活力的橙色（眼镜和飞溅）”，
      “亮蓝色（泼溅）”
    ],
    "saturation": "橙色和蓝色高；报纸背景低/自然",
    "contrast_level": "高（色彩和色调对比度）",
    “color_shift”：假
  },
  “纹理和细节”：{
    "surface_detail": "精细的新闻纸纹理，可见的墨线，油漆滴落边缘",
    "grain_noise": "保留纸张纹理",
    "micro_details": "报纸上的文字通过面部特征仍然可见",
    “清晰度”：“清晰的墨线和清晰的油漆边缘”
  },
  “camera_render_settings”：{
    "lens_equivalent": "50mm 外观",
    "perspective_畸变": "无",
    "aperture_look": "N/A（平面图）",
    “分辨率”：“高”，
    "render_quality": "干净，没有数字压缩伪影"
  },
  “约束”：{
    “no_additional_objects”：正确，
    “no_reframing”：正确，
    “no_crop”：正确，
    “no_stylization”：正确，
    “no_artistic_license”：正确，
    “无文本”：假，
    “无水印”：正确，

“no_effects”：正确，
    “no_dramatic_lighting”：正确，
    “无颜色分级”：true
  },
  “迭代指令”：{
    “compare_to_reference”：正确，
    “fix_geometry_first”：正确，
    “then_fix_composition”：正确，
    “then_fix_lighting”：正确，
    “then_fix_color”：正确，
    “ignore_aesthetic_improvements”：true
  },
  “否定提示”：[
    “创意”，
    “电影”，
    “艺术”，
    “风格化”，
    “插图（与参考不同）”，
    “摘要”，
    “戏剧性的”，
    “广角”，
    “鱼眼”，
    “夸张”，
    “重新诠释”，
    “额外元素”，
    “现代化”，
    “复古外观（与参考不同）”，
    “颜色分级”，
    “AI神器”，
    “模糊”，
    “景深”
  ]
}
```

---

## English Original

### Title

Mixed Media Portrait Illustration

### Description

This prompt guides you to create a mixed media portrait illustration, featuring a man with distinct characteristics rendered over a vintage newspaper background. It includes detailed specifications for composition, style, lighting, and materials to achieve a realistic yet artistic result.

### Prompt

```md
{
  "subject": {
    "description": "A portrait of a man with short, dark, textured hair, looking slightly upward. He wears thick-framed, vibrant orange glasses. The face is rendered with black ink-style cross-hatching directly over a newspaper background.",
    "count": 1,
    "orientation": "front-facing",
    "pose_or_state": "static, head tilted slightly up",
    "expression": "neutral, contemplative"
  },
  "scale_and_proportion": {
    "subject_to_frame_ratio": "Subject occupies ~75% of the frame height",
    "proportions": "locked to reference",
    "negative_space": "Moderate, occupied by paint splatters and newspaper text"
  },
  "composition": {
    "shot_type": "close-up portrait",
    "camera_angle": "eye-level, looking slightly up",
    "framing": "centered",
    "symmetry": "Face is centered and mostly symmetrical; background splatters are asymmetrical",
    "background": "Aged, yellowed vintage newspaper with columns of text and small faded images, layered with large blue and orange paint splatters and drips",
    "depth_of_field": "flat (2D mixed media style)"
  },
  "temporal_context": {
    "era": "Contemporary mixed media art with mid-century vintage newspaper and glasses style",
    "modern_elements": false,
    "retro_stylization": true,
    "trend_influence": false
  },
  "style": {
    "visual_type": "Mixed media illustration",
    "realism_level": "maximum for the specified art style",
    "art_style": "Pen and ink sketch over newspaper collage",
    "stylization": "Literal reproduction of the specific mixed media style",
    "interpretation": "literal reproduction only"
  },
  "lighting": {
    "setup_type": "Simulated in the sketch",
    "light_direction": "Frontal/top-down, defined by shadows under the jaw, nose, and brow",
    "light_quality": "High contrast rendering",
    "contrast": "high (black ink against light paper)",
    "shadow_behavior": "rendered through hatching and solid black areas",
    "color_temperature": "warm overall due to paper, with cool blue accents",
    "lighting_variation": "none"
  },
  "materials": {
    "primary_materials": [
      "yellowed vintage newspaper",
      "black ink / charcoal",
      "vibrant blue and orange paint (acrylic or spray paint look)"
    ],
    "surface_finish": "matte paper and ink",
    "light_reflection": "minimal, only visible as highlights on the glasses frames and in the pupils",
    "material_accuracy": "exact"
  },
  "color_palette": {
    "dominant_colors": [
      "Sepia/Cream (newspaper)",
      "Black (ink lines)",
      "Vibrant Orange (glasses and splatters)",
      "Bright Blue (splatters)"
    ],
    "saturation": "High in orange and blue; low/natural in the newspaper background",
    "contrast_level": "High (chromatic and tonal contrast)",
    "color_shift": false
  },
  "texture_and_detail": {
    "surface_detail": "Fine newsprint texture, visible ink lines, paint drip edges",
    "grain_noise": "paper grain texture preserved",
    "micro_details": "Text on newspaper remains visible through the facial features",
    "sharpness": "sharp ink lines and crisp paint edges"
  },
  "camera_render_settings": {
    "lens_equivalent": "50mm look",
    "perspective_distortion": "none",
    "aperture_look": "N/A (flat illustration)",
    "resolution": "high",
    "render_quality": "clean, no digital compression artifacts"
  },
  "constraints": {
    "no_additional_objects": true,
    "no_reframing": true,
    "no_crop": true,
    "no_stylization": true,
    "no_artistic_license": true,
    "no_text": false,
    "no_watermark": true,
    "no_effects": true,
    "no_dramatic_lighting": true,
    "no_color_grading": true
  },
  "iteration_instruction": {
    "compare_to_reference": true,
    "fix_geometry_first": true,
    "then_fix_composition": true,
    "then_fix_lighting": true,
    "then_fix_color": true,
    "ignore_aesthetic_improvements": true
  },
  "negative_prompt": [
    "creative",
    "cinematic",
    "artistic",
    "stylized",
    "illustration (different from reference)",
    "abstract",
    "dramatic",
    "wide-angle",
    "fisheye",
    "exaggeration",
    "reinterpretation",
    "extra elements",
    "modernized",
    "retro look (different from reference)",
    "color grading",
    "AI artifacts",
    "blur",
    "depth of field"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [mixed-media-portrait-illustration](https://prompts.chat/prompts/mixed-media-portrait-illustration) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Art, creative |
| Contributors | gunebak4n |
| Updated At | 2026-03-02T21:47:57.947Z |
