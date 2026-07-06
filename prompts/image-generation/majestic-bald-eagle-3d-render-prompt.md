# Majestic Bald Eagle 3D 渲染提示词

## 中文说明

此提示将指导你使用特定的构图、灯光和风格说明创建秃鹰头部和上颈部的高度逼真的 3D 渲染。重点是通过精确的灯光效果实现最大的纹理真实感，确保解剖学上准确、雄伟的描绘。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、creative、visual 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "description": "秃鹰的头部和上颈部，向上看向光源。",
    “计数”：1，
    "orientation": "侧面，面向左，急剧向上倾斜",
    "pose_or_state": "静态，脖子伸展，头向上看",
    “表情”：“雄伟、中性”
  },
  “比例和比例”：{
    "subject_to_frame_ratio": "主体占据画面的大约 40%，位于右中",
    “比例”：“解剖学上准确的鹰头”，
    "negative_space": "框架左侧和底部有大量负空间"
  },
  “组成”：{
    "shot_type": "特写",
    "camera_angle": "低角度，仰视拍摄对象",
    "framing": "拍摄对象位于画面的右半部分",
    "symmetry": "高度不对称",
    "background": "漆黑，带有突出的对角体积光线",
    "depth_of_field": "深邃的光线和照明的主体特征都处于清晰的焦点"
  },
  “时间上下文”：{
    "era": "当代数字艺术",
    “modern_elements”：假，
    “retro_stylization”：假，
    “趋势影响力”：假
  },
  “风格”：{
    "visual_type": "3D 渲染",
    "realism_level": "最大纹理真实感",
    "art_style": "无",
    “风格化”：bug，
    "interpretation": "仅逐字复制"
  },
  “照明”：{
    "setup_type": "体积/边缘照明",
    "light_direction": "右上角，向下向左下角投射光线",
    "light_quality": "硬体积光束（上帝射线）",
    "contrast": "极高，明暗效果",
    "shadow_behavior": "深邃、绝对的黑色阴影遮蔽了主体的下半部分",
    "color_temper": "非常酷，单色深紫罗兰色/紫色",
    “lighting_variation”：“无”
  },
  “材料”：{
    “主要材料”：[
      “羽毛”，
      “角蛋白（喙）”
    ],
    "surface_finish": "哑光羽毛，半光泽喙",
    "light_reflection": "喙的上曲线上有锐利的闪光，个别羽毛边缘上有柔和的高光",
    "material_accuracy": "精确"
  },
  “颜色调色板”：{
    “主导颜色”：[
      “深紫色（#32174d）”，
      “黑色（#000000）”
    ],
    "saturation": "紫色光束中的高饱和度",
    "contrast_level": "最大",
    “color_shift”：假
  },
  “纹理和细节”：{
    "surface_detail": "细羽毛倒刺和纹理仅在光线照射的地方可见",
    "grain_noise": "无，完美干净的数字渲染",
    "micro_details": "保留喙纹理和突出羽毛的锋利边缘",
    “锐度”：“锐利地聚焦在喙和头顶”
  },
  “camera_render_settings”：{
    "lens_equivalent": "50mm",
    "perspective_畸变": "无",
    "aperture_look": "f/8（深焦）",
    “分辨率”：“高”，
    "render_quality": "干净且中性"
  },
  “约束”：{
    “no_additional_objects”：正确，
    “no_reframing”：正确，
    “no_crop”：正确，
    “no_stylization”：正确，
    “no_artistic_license”：正确，
    “无文本”：正确，
    “无水印”：正确，
    “no_effects”：正确，
    “no_dramatic_lighting”：假，
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
    “插图”，
    “摘要”，
    “戏剧性的”，
    “广角”，
    “鱼眼”，

“夸张”，
    “重新诠释”，
    “额外元素”，
    “现代化”，
    “复古外观”，
    “颜色分级”，
    “AI神器”，
    “暖色系”，
    “可见的背景元素”
  ]
}
```

---

## English Original

### Title

Majestic Bald Eagle 3D Render Prompt

### Description

This prompt guides you to create a highly realistic 3D render of a bald eagle's head and upper neck using specific composition, lighting, and style instructions. The focus is on achieving maximum texture realism with precise lighting effects, ensuring an anatomically accurate, majestic portrayal.

### Prompt

```md
{
  "subject": {
    "description": "The head and upper neck of a bald eagle, looking upwards towards a light source.",
    "count": 1,
    "orientation": "profile, facing left, tilted steeply upward",
    "pose_or_state": "static, neck extended and head looking up",
    "expression": "majestic, neutral"
  },
  "scale_and_proportion": {
    "subject_to_frame_ratio": "subject occupies approximately 40% of the frame, positioned in the center-right",
    "proportions": "anatomically accurate eagle head",
    "negative_space": "extensive negative space on the left and bottom of the frame"
  },
  "composition": {
    "shot_type": "close-up",
    "camera_angle": "low angle, looking up at the subject",
    "framing": "subject positioned in the right half of the frame",
    "symmetry": "highly asymmetrical",
    "background": "pitch black with prominent diagonal volumetric light rays",
    "depth_of_field": "deep, light rays and illuminated subject features are in sharp focus"
  },
  "temporal_context": {
    "era": "contemporary digital art",
    "modern_elements": false,
    "retro_stylization": false,
    "trend_influence": false
  },
  "style": {
    "visual_type": "3D render",
    "realism_level": "maximum texture realism",
    "art_style": "none",
    "stylization": false,
    "interpretation": "literal reproduction only"
  },
  "lighting": {
    "setup_type": "volumetric / rim lighting",
    "light_direction": "top right, casting rays downwards toward the bottom left",
    "light_quality": "hard volumetric beams (god rays)",
    "contrast": "extremely high, chiaroscuro effect",
    "shadow_behavior": "deep, absolute black shadows obscuring the lower half of the subject",
    "color_temperature": "very cool, monochromatic deep violet/purple",
    "lighting_variation": "none"
  },
  "materials": {
    "primary_materials": [
      "feathers",
      "keratin (beak)"
    ],
    "surface_finish": "matte feathers, semi-gloss beak",
    "light_reflection": "sharp glint on the upper curve of the beak, soft highlights on individual feather edges",
    "material_accuracy": "exact"
  },
  "color_palette": {
    "dominant_colors": [
      "Deep Purple (#32174d)",
      "Black (#000000)"
    ],
    "saturation": "high saturation in the purple light beams",
    "contrast_level": "maximum",
    "color_shift": false
  },
  "texture_and_detail": {
    "surface_detail": "fine feather barbs and textures visible only where the light hits",
    "grain_noise": "none, perfectly clean digital render",
    "micro_details": "preserved beak texture and sharp edges of highlighted feathers",
    "sharpness": "sharp focus on the beak and top of the head"
  },
  "camera_render_settings": {
    "lens_equivalent": "50mm",
    "perspective_distortion": "none",
    "aperture_look": "f/8 (deep focus)",
    "resolution": "high",
    "render_quality": "clean and neutral"
  },
  "constraints": {
    "no_additional_objects": true,
    "no_reframing": true,
    "no_crop": true,
    "no_stylization": true,
    "no_artistic_license": true,
    "no_text": true,
    "no_watermark": true,
    "no_effects": true,
    "no_dramatic_lighting": false,
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
    "illustration",
    "abstract",
    "dramatic",
    "wide-angle",
    "fisheye",
    "exaggeration",
    "reinterpretation",
    "extra elements",
    "modernized",
    "retro look",
    "color grading",
    "AI artifacts",
    "warm colors",
    "visible background elements"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
