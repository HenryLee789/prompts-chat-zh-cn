# 在巴黎的一晚

## 中文说明

用于让 AI 围绕「在巴黎的一晚」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Nano Banana 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题和场景”：{
    "main_subject": "一个留着浓密的棕色卷发的年轻人，穿着精致的米色高领毛衣和配套的剪裁羊毛西装外套，表情沉思而喜怒无常。",
    "action": "随意靠在风化的石桥栏杆上，将视线从镜头上移开，转向巴黎的城市景观。",
    “环境”：“夜晚的巴黎，塞纳河畔；埃菲尔铁塔在背景中格外显眼，在金色的灯光下熠熠生辉，城市的灯光和河上的船只在黑暗的水面上留下柔和的倒影。”
  },
  “电影摄影”：{
    "camera_model": "索尼威尼斯 2",
    "sensor_type": "全帧",
    "shot_type": "牛仔射击",
    "camera_angle": "眼睛水平",
    “运动”：“静态”
  },
  “光学”：{
    "lens_type": "球面",
    "focal_length": "35mm（标准广角）",
    "aperture": "f/2.8（中等景深以保留背景上下文）",
    "shutter_effects": "标准快门"
  },
  “照明设计”：{
    "setup": "自然夜间氛围，主题柔和填充",
    "style": "低调、大气的光芒",
    "atmospheric_light": "埃菲尔铁塔的金色光芒，城市灯光的边缘照明",
    "color_Temperature": "暖色（3000K、琥珀色和金色）"
  },
  “颜色和帖子”：{
    "film_stock": "柯达 Portra 400",
    "color_grading": "温暖的怀旧色调，柔和的 Log-C",
    "analog_artifacts": "重胶片颗粒，金色塔灯周围柔和的光晕"
  },
  “渲染和技术”：{
    "engine": "辛烷值渲染",
    "advanced_tech": "皮肤上的次表面散射，水反射的全局照明",
    “规格”：{
      "aspect_ratio": "2.39:1 (CinemaScope)",
      “分辨率”：“8K、逼真、超详细”
    }
  },
  "directorial_style": "丹尼斯·维伦纽夫（大气的情绪和沉思的构图）"
}
```

---

## English Original

### Title

A night in paris

### Description



### Prompt

```md
{
  "subject_and_scene": {
    "main_subject": "A young man with thick curly brown hair, wearing a sophisticated beige turtleneck sweater and a matching tailored wool blazer, displaying a contemplative and moody expression.",
    "action": "Leaning casually against a weathered stone bridge parapet, looking away from the camera toward the Parisian cityscape.",
    "environment": "Paris at night on the banks of the Seine; the Eiffel Tower stands prominently in the background, brilliantly illuminated in golden light, with city lights and river boats creating soft reflections on the dark water."
  },
  "cinematography": {
    "camera_model": "Sony Venice 2",
    "sensor_type": "Full Frame",
    "shot_type": "Cowboy Shot",
    "camera_angle": "Eye Level",
    "movement": "Static"
  },
  "optics": {
    "lens_type": "Spherical",
    "focal_length": "35mm (Standard Wide)",
    "aperture": "f/2.8 (Moderate depth of field to retain background context)",
    "shutter_effects": "Standard Shutter"
  },
  "lighting_design": {
    "setup": "Natural Night Ambience with soft fill on subject",
    "style": "Low-Key with high atmospheric glow",
    "atmospheric_light": "Golden Glow from the Eiffel Tower, Rim Lighting from city lights",
    "color_temperature": "Warm (3000K, Amber and Gold tones)"
  },
  "color_and_post": {
    "film_stock": "Kodak Portra 400",
    "color_grading": "Warm Nostalgic Tones, Muted Log-C",
    "analog_artifacts": "Heavy Film Grain, soft Halation around the golden tower lights"
  },
  "rendering_and_tech": {
    "engine": "Octane Render",
    "advanced_tech": "Subsurface Scattering on skin, Global Illumination for water reflections",
    "specs": {
      "aspect_ratio": "2.39:1 (CinemaScope)",
      "resolution": "8K, Photorealistic, Hyper-detailed"
    }
  },
  "directorial_style": "Denis Villeneuve (Atmospheric mood and pensive composition)"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
