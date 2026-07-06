# 三幅单色图像

## 中文说明

用于让 AI 围绕「三幅单色图像」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  “主题”：{
    "description": "一幅三幅单色图像。上幅：一个戴着兜帽的人物，眼睛发光，背着背包，在黑暗、多云的夜空下爬过铁丝网，右上角有一轮圆圆的明亮月亮。中左幅：一个人的剪影，坐在一间黑暗、废弃的房间里的瓦砾上，向外看一个明亮的开口，那里光秃秃的，纠结的树木和远处朦胧的光源。中右幅：一只巨大的剪影手向上到达一个非常明亮的圆形光源。",
    “count”：“单个图像中的三个不同场景”，
    “orientation”：“各种，根据参考面板”，
    "pose_or_state": "顶部：主动攀爬；中左：静态坐姿；中右：向上伸展",
    "express": "不适用（剪影/发光的眼睛）"
  },
  “比例和比例”：{
    "subject_to_frame_ratio": "每个面板的主题根据参考进行缩放；堆叠的三个面板总共占据帧高度的 100%。",
    "proportions": "锁定参考",
    "negative_space": "显著，特别是在顶部和右中面板中，由黑暗区域和点画效果创建，与参考相同"
  },
  “组成”：{
    "shot_type": "顶部：中景；中左：中景；中右：特写",
    "camera_angle": "顶部：稍低的角度；中左：低角度；中右：与手的视线水平",
    "framing": "与参考值相同（三个垂直面板）",
    “对称”：“每个面板不对称；整体三联结构与强大的水平面板分隔线垂直对齐”，
    "background": "顶部：多云的夜空，月亮和铁丝网；中左：光秃秃的树木和透过开口的远处光线；中右：纯黑色背景，带有占主导地位的明亮圆形光",
    "depth_of_field": "顶部：深，一切都在清晰的点画焦点中；中左：开口外的深焦点，点画细节中的前景元素；中右：手上的清晰焦点，光源在点画图案内扩散"
  },
  “时间上下文”：{
    "era": "当代/永恒的荒凉美学",
    “modern_elements”：假，
    “retro_stylization”：假，
    “趋势影响力”：假
  },
  “风格”：{
    "visual_type": "模仿印刷媒体的黑白点画/半色调图形艺术",
    "realism_level": "形式和光照是真实的，但渲染完全是通过点画图案",
    "art_style": "半色调/点画图形艺术",
    “风格化”：真实，
    "interpretation": "字面再现，包括特定的点画图案和黑白渲染"
  },
  “照明”：{
    "setup_type": "主要由每个面板的单一主要光源提供背光",
    "light_direction": "顶部：正面（月亮）；中左：正面（通过开口）；中右：正面（来自圆形光源）",
    "light_quality": "强光创造出鲜明的轮廓，光源周围有明亮、漫射的辉光，全部用点画渲染",
    “对比度”：“非常高”，
    "shadow_behavior": "锐利而清晰，创造出由密集点画点组成的强烈轮廓",
    "color_Temperature": "不适用（单色）",
    "lighting_variation": "每个面板内最小，每个面板都有不同的背光"
  },
  “材料”：{
    “主要材料”：[
      “人物（剪影）”，
      “勾花网（金属）”，
      “云”，
      “光秃秃的树/树枝”，
      “瓦砾/混凝土/粗糙地面”，
      “通用粗糙纹理”
    ],

"surface_finish": "由于点画和轮廓而不明显；不透明物体隐含哑光",
    "light_reflection": "最小的，主要是由点画定义的轮廓边缘",
    "material_accuracy": "通过轮廓和点画密度隐含的形状准确"
  },
  “颜色调色板”：{
    “主导颜色”：[
      “黑”，
      “白色”
    ],
    "saturation": "不适用（单色）",
    "contrast_level": "非常高",
    “color_shift”：假
  },
  “纹理和细节”：{
    "surface_detail": "完全通过不同密度的点画点进行渲染；栅栏网、树枝、地面碎石通过点图案可见",
    "grain_noise": "无，只有精确大小和分布的故意点画/半色调点",
    "micro_details": "通过存在的点画密度保留",
    “锐度”：“锐利的形式，但边缘和渐变是由点画图案的离散点定义的”
  },
  “camera_render_settings”：{
    "lens_equivalent": "跨面板的标准/正常镜头外观",
    "perspective_畸变": "无",
    "aperture_look": "顶部和中左的景深较深，意味着中右漫射光源的光圈非常宽（但手仍然很锋利）",
    “分辨率”：“高”，
    "render_quality": "干净和中性，但具有明确和精确的点画效果"
  },
  “约束”：{
    “no_additional_objects”：正确，
    “no_reframing”：正确，
    “no_crop”：正确，
    “no_stylization”：假，
    “no_artistic_license”：正确，
    “无文本”：正确，
    “无水印”：正确，
    “no_effects”：正确，
    “no_dramatic_lighting”：正确，
    “无颜色分级”：正确，
    “no_smooth_gradients”：正确，
    “严格黑与白”：正确
  },
  “迭代指令”：{
    “compare_to_reference”：正确，
    “fix_geometry_first”：正确，
    “then_fix_composition”：正确，
    “then_fix_lighting”：正确，
    “then_fix_color”：正确，
    “then_fix_stipple_pattern_fidelity”：正确，
    “ignore_aesthetic_improvements”：true
  },
  “否定提示”：[
    “创意”，
    “电影”，
    “艺术”，
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
    “光滑”，
    “梯度”，
    “灰度”，
    “棕褐色”，
    “全彩”，
    “软焦点”，
    “模糊”，
    “真实照片（无点画）”，
    “绘画”，
    “素描”，
    “水彩画”，
    “卡通”，
    “漫画书（除非专门用于点画效果）”
  ]
}
```

---

## English Original

### Title

A three-panel monochromatic image

### Description



### Prompt

```md
{
  "subject": {
    "description": "A three-panel monochromatic image. Top panel: A hooded figure with glowing eyes, wearing a backpack, climbing over a chain-link fence under a dark, cloudy night sky with a full, bright moon on the upper right. Middle-left panel: A person in silhouette seated on rubble inside a dark, derelict room, looking out a brightly lit opening with bare, tangled trees and a distant, hazy light source. Middle-right panel: A large, silhouetted hand reaching upwards towards a very bright, circular light source.",
    "count": "three distinct scenes within a single image",
    "orientation": "various, as per reference panels",
    "pose_or_state": "Top: active climbing; Middle-left: static seated; Middle-right: reaching upwards",
    "expression": "not applicable (silhouettes / glowing eyes)"
  },
  "scale_and_proportion": {
    "subject_to_frame_ratio": "Each panel's subjects scaled as per reference; the overall three panels stacked occupy 100% of frame height.",
    "proportions": "locked to reference",
    "negative_space": "significant, particularly in the top and middle-right panels, created by dark areas and the stipple effect, identical to reference"
  },
  "composition": {
    "shot_type": "Top: medium shot; Middle-left: medium interior shot; Middle-right: close-up",
    "camera_angle": "Top: slightly low angle; Middle-left: low angle; Middle-right: eye-level for the hand",
    "framing": "unchanged from reference (three vertical panels)",
    "symmetry": "asymmetrical per panel; overall triptych structure is vertically aligned with strong horizontal panel dividers",
    "background": "Top: cloudy night sky with moon and chain-link fence; Middle-left: bare trees and distant light through an opening; Middle-right: plain dark background with a dominant bright circular light",
    "depth_of_field": "Top: deep, everything in sharp stipple focus; Middle-left: deep focus outside opening, foreground elements in stipple detail; Middle-right: sharp focus on hand, light source is diffuse within the stipple pattern"
  },
  "temporal_context": {
    "era": "contemporary / timeless desolate aesthetic",
    "modern_elements": false,
    "retro_stylization": false,
    "trend_influence": false
  },
  "style": {
    "visual_type": "black and white stipple / halftone graphic art mimicking print media",
    "realism_level": "forms and lighting are realistic, but the rendering is entirely through a stipple pattern",
    "art_style": "halftone / stipple graphic art",
    "stylization": true,
    "interpretation": "literal reproduction, including the specific stipple pattern and black and white rendering"
  },
  "lighting": {
    "setup_type": "predominantly backlighting from a single dominant source per panel",
    "light_direction": "Top: frontal (moon); Middle-left: frontal (through opening); Middle-right: frontal (from the circular light source)",
    "light_quality": "hard light creating stark silhouettes, with bright, diffused glow around light sources, all rendered with stipple",
    "contrast": "very high",
    "shadow_behavior": "sharp and defined, creating strong silhouettes, composed of dense stipple dots",
    "color_temperature": "not applicable (monochromatic)",
    "lighting_variation": "minimal within each panel, distinct backlighting per panel"
  },
  "materials": {
    "primary_materials": [
      "human figures (silhouettes)",
      "chain-link fence (metal)",
      "clouds",
      "bare trees / branches",
      "rubble / concrete / rough ground",
      "generic rough textures"
    ],
    "surface_finish": "not distinct due to stipple and silhouette; implied matte for opaque objects",
    "light_reflection": "minimal, primarily silhouette edges defined by stipple",
    "material_accuracy": "implied forms accurate through silhouette and stipple density"
  },
  "color_palette": {
    "dominant_colors": [
      "black",
      "white"
    ],
    "saturation": "not applicable (monochromatic)",
    "contrast_level": "very high",
    "color_shift": false
  },
  "texture_and_detail": {
    "surface_detail": "rendered entirely through varying density of stipple dots; fence mesh, tree branches, ground rubble are visible through dot patterns",
    "grain_noise": "none, only intentional stipple/halftone dots of precise size and distribution",
    "micro_details": "preserved through stipple density where present",
    "sharpness": "sharp forms, but edges and gradients are defined by discrete dots of the stipple pattern"
  },
  "camera_render_settings": {
    "lens_equivalent": "standard/normal lens look across panels",
    "perspective_distortion": "none",
    "aperture_look": "deep depth of field for top and middle-left, implied very wide aperture for diffuse light source in middle-right (but hand is still sharp)",
    "resolution": "high",
    "render_quality": "clean and neutral, but with the explicit and precise stipple effect"
  },
  "constraints": {
    "no_additional_objects": true,
    "no_reframing": true,
    "no_crop": true,
    "no_stylization": false,
    "no_artistic_license": true,
    "no_text": true,
    "no_watermark": true,
    "no_effects": true,
    "no_dramatic_lighting": true,
    "no_color_grading": true,
    "no_smooth_gradients": true,
    "strictly_black_and_white": true
  },
  "iteration_instruction": {
    "compare_to_reference": true,
    "fix_geometry_first": true,
    "then_fix_composition": true,
    "then_fix_lighting": true,
    "then_fix_color": true,
    "then_fix_stipple_pattern_fidelity": true,
    "ignore_aesthetic_improvements": true
  },
  "negative_prompt": [
    "creative",
    "cinematic",
    "artistic",
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
    "smooth",
    "gradient",
    "grayscale",
    "sepia",
    "full color",
    "soft focus",
    "blurry",
    "realistic photograph (without stipple)",
    "painting",
    "sketch",
    "watercolor",
    "cartoon",
    "comic book (unless specifically for stipple effect)"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
