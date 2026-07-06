# 一个破碎的、灵魂被压垮的中世纪骑士

## 中文说明

用于让 AI 围绕「一个破碎的、灵魂被压垮的中世纪骑士」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 ChatGPT 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题和场景”：{
    "main_subject": "一位破碎的、灵魂被压垮的中世纪骑士跪在失败中，他的眼睛里充满了泪水和创伤；他破碎的盔甲上沾满了干泥和新鲜的血液。他的脸是一张布满疤痕、汗水和污垢的画布，反映出一个堕落王国的悲惨损失。",
    "action": "用颤抖的双手紧握剑柄，仿佛这是唯一能让他免于崩溃的东西；他的胸口因绝望而有节奏地起伏着。",
    “环境”：“古老森林边缘的荒凉、风吹的战场；朦胧、空灵的雾气在地面上翻滚，部分遮住了远处闷烧的城堡废墟。花瓣或余烬被风卷起，从他的脸上飘过。”
  },
  “电影摄影”：{
    "camera_model": "索尼威尼斯 2",
    "sensor_type": "全帧",
    "shot_type": "中特写（垂直构图，重点关注骑士的躯干和脸部，但保持他的跪姿可见）",
    "camera_angle": "低角度（略微倾斜的荷兰角以唤起心理不稳定和悲伤感）",
    “movement”：“缓慢的‘Dolly In’与‘Snorricam’效果相结合，使骑士的斗争感觉幽闭恐怖且非常个人化”
  },
  “光学”：{
    "lens_type": "变形（创造情感‘梦幻般’的衰减和戏剧性的耀斑）”,
    "focal_length": "50mm（提供自然但情感集中的视角）",
    "aperture": "f/1.4（极浅的景深，除了他充满泪水的眼睛之外，一切都模糊了）",
    "shutter_effects": "180 度快门，对被风吹动的碎片进行自然运动模糊，强调‘慢动作’的悲伤感”
  },
  “照明设计”：{
    "setup": "分裂灯光将他的半张脸隐藏在黑暗中，象征着他内心的冲突和失落",
    "style": "低调，高情感反差",
    "atmospheric_light": "蓝色时刻逐渐消失在黑暗中，一道温暖的‘神光’穿透云层，像聚光灯一样突出他的脸”,
    "color_temper": "环境的冰冷蓝色调，与远处火光闪烁的温暖橙色光形成鲜明对比"
  },
  “颜色和帖子”：{
    "film_stock": "Kodak Portra 160（拉动 1 档以获得更低的对比度和更柔和、更忧郁的肤色）",
    "color_grading": "漂白绕过（去饱和颜色，浓黑，强调坚韧和悲伤）",
    "analog_artifacts": "高光周围的重光晕和微妙的“门编织”模仿了老式 35 毫米战争电影的美感”
  },
  “渲染和技术”：{
    "engine": "辛烷值渲染",
    "advanced_tech": "高度详细的皮肤毛孔纹理，带有光线追踪泪滴和湿血反射",
    “规格”：{
      "aspect_ratio": "9:16（垂直影院）",
      “分辨率”：“8K 真实感”
    }
  },
  "directorial_style": "丹尼斯·维伦纽夫（大气雾霾和压倒性的寂静）与梅尔·吉布森（坚韧、内心真实的战争）混合在一起"
}
```

---

## English Original

### Title

A broken, soul-crushed medieval knight

### Description



### Prompt

```md
{
  "subject_and_scene": {
    "main_subject": "A broken, soul-crushed medieval knight kneeling in defeat, his eyes glazed with tears and trauma; his shattered armor is caked in dried mud and fresh blood. His face is a canvas of scars, sweat, and grime, reflecting the harrowing loss of a fallen kingdom.",
    "action": "Gripping his sword's hilt with trembling hands as if it's the only thing keeping him from collapsing; his chest heaving in rhythmic, heavy gasps of despair.",
    "environment": "A desolate, windswept battlefield at the edge of an ancient forest; a hazy, ethereal fog rolls over the ground, partially obscuring the distant, smoldering ruins of a castle. Petals or embers are caught in the wind, drifting past his face."
  },
  "cinematography": {
    "camera_model": "Sony Venice 2",
    "sensor_type": "Full Frame",
    "shot_type": "Medium Close-Up (Vertical composition focusing on the knight's torso and face, but keeping his kneeling posture visible)",
    "camera_angle": "Low Angle (Slightly tilted Dutch Angle to evoke a sense of psychological instability and sorrow)",
    "movement": "Slow 'Dolly In' combined with a 'Snorricam' effect to make the knight's struggle feel claustrophobic and intensely personal"
  },
  "optics": {
    "lens_type": "Anamorphic (to create emotional 'dream-like' fall-off and dramatic flares)",
    "focal_length": "50mm (providing a natural but emotionally focused perspective)",
    "aperture": "f/1.4 (Extremely shallow depth of field, blurring everything but his tear-filled eyes)",
    "shutter_effects": "180-degree shutter for natural motion blur on the wind-blown debris, emphasizing the 'slow-motion' feeling of grief"
  },
  "lighting_design": {
    "setup": "Split Lighting to hide half of his face in darkness, symbolizing his internal conflict and loss",
    "style": "Low-Key with high emotional contrast",
    "atmospheric_light": "Blue Hour fading into darkness, with a single warm 'God Ray' piercing through the clouds to highlight his face like a spotlight",
    "color_temperature": "Ice-cold Blue tones for the environment, contrasting with the Warm, flickering orange light from distant fires"
  },
  "color_and_post": {
    "film_stock": "Kodak Portra 160 (Pulled 1 stop for lower contrast and softer, more melancholic skin tones)",
    "color_grading": "Bleach Bypass (Desaturated colors, heavy blacks, emphasizing the grittiness and sorrow)",
    "analog_artifacts": "Heavy Halation around the highlights and subtle 'Gate Weave' to mimic a vintage 35mm war film aesthetic"
  },
  "rendering_and_tech": {
    "engine": "Octane Render",
    "advanced_tech": "Highly detailed skin pore texture with Ray Traced tear droplets and wet blood reflections",
    "specs": {
      "aspect_ratio": "9:16 (Vertical Cinema)",
      "resolution": "8K Photorealistic"
    }
  },
  "directorial_style": "Denis Villeneuve (Atmospheric haze and overwhelming silence) mixed with Mel Gibson (Gritty, visceral realism of war)"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
