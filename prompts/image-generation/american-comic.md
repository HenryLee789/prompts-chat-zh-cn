# 美国漫画

## 中文说明

你的故事成为轰动一时的漫画页面。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Comedy、Storytelling 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
故事：儿童超人和儿童蝙蝠侠在森林里联手。这是森林里美好的一天，他们看到了一个用棍子搭建的庇护所，想要出去看看。他们看到一只狐狸，有好几秒钟，狐狸和孩子们都不知道该怎么办。他们首先思考。然后他们都决定朝相反的方向跑

说明：{
  “风格”：{
    “名称”：“美国漫画书”，
    “描述”：“采用经典美国超级英雄传统的大胆、动态的漫画书页面。将你的叙述作为完全实现的漫画页面，具有戏剧性的面板布局、电影动作和专业的漫画书渲染。”
  },
  “视觉基础”：{
    “中”：{
      "type": "专业美国漫画艺术",
      "tradition": "DC/Marvel 主流超级英雄漫画",
      "era": "具有古典情感的现代（2000 年代至今）",
      "finish": "完全着墨和数字着色，可供出版"
    },
    “页面存在”：{
      "impact": "每个页面都应该是一个引人注目的时刻",
      "energy": "动能、爆炸、具有传奇色彩",
      “tone”：“史诗般的、戏剧性的，绝不是静态的或平凡的”
    }
  },
  “面板架构”：{
    “布局哲学”：{
      "approach": "具有戏剧性变化的动态不对称网格",
      “pacing”：“面板大小反映了故事节拍——重要时刻需要大面板”，
      "flow": "尽管动态布局，但从左到右、从上到下的阅读路径清晰",
      "gutters": "干净的白色排水沟，一致的宽度，锐利的面板边框"
    },
    “面板品种”：{
      "hero_panel": "用于关键动作时刻的大型中央或全宽面板",
      “建立”：“规模和环境的宽面板”，
      “reaction”：“用于面部、对话、紧张节拍的较小面板”，
      "inset": "偶尔重叠面板以强调或同时进行"
    },
    “边界处理”：{
      "standard": "干净的黑色矩形边框",
      "action_breaks": "面板边框可能会因爆炸行为而破碎或损坏",
      "bleed": "关键时刻可能会渗到页面边缘以获得最大影响"
    }
  },
  “艺术渲染”：{
    “线路工作”：{
      “品质”：“大胆、自信、专业着墨”，
      "weight_variation": "人物轮廓重，细节中等，纹理精细",
      "contour": "任何尺寸都可读的清晰轮廓",
      "hatching": "形状和阴影的战略交叉影线，不要过度劳累",
      "energy_lines": "速度线、冲击爆发、动力动作的运动轨迹"
    },
    “解剖学和人物”：{
      "style": "英雄理想化的解剖学——强大、动态、夸张",
      “musculature”：“详细的肌肉定义，解剖学推动戏剧”，
      "poses": "极端的透视、戏剧性的角度、不可能的活力",
      "scale": "人物占据空间，比例英勇",
      “表达”：“即使在远处也能感受到强烈、易读的情绪”
    },
    “环境渲染”：{
      "destruction": "详细的瓦砾、碎片云、结构损坏",
      "atmosphere": "雨、烟、灰尘、粒子对情绪的影响",
      "architecture": "立体视角，足够详细，可供尺度参考",
      "深度": "清晰的前景/中景/背景分离"
    }
  },
  “颜色哲学”：{
    “方法”：{
      "style": "具有绘画渲染的现代数字着色",
      "deep": "带有高光、中间调、阴影的完整建模",
      "mood": "颜色支持每个面板的情感基调"
    },
    “palette_dynamics”：{
      "characters": "英雄/主要人物的大胆、饱和的颜色",
      "environments": "更柔和、大气的色调来推动人物前进",
      "contrast": "主体和背景之间强烈的明暗对比",
      “温度”：“深度和戏剧性的战略性暖/冷对比”
    },
    “atmospheric_coloring”：{

"sky": "戏剧性的渐变——暴风雨般的灰色、末日般的橙色、喜怒无常的蓝色",
      "weather": "雨呈现为白色/浅蓝色条纹，与较暗的值相对应",
      "fire_energy": "充满活力的橙色、带有白热核心的黄色、适当的辉光衰减",
      "smoke_dust": "分层不透明，暖灰色和冷灰色混合"
    },
    “照明效果”：{
      "key_light": "强烈的戏剧性来源创造出大胆的阴影",
      "rim_light": "边缘照明将人物与背景分开",
      "energy_glow": "绽放对电源、眼睛、武器的影响",
      “环境”：“从火灾、爆炸、能量爆炸中反射光”
    }
  },
  “版式和刻字”：{
    “语音气泡”：{
      "shape": "经典椭圆形/圆角矩形气球",
      "border": "干净的黑色轮廓，一致的粗细",
      "tail": "尖尾清晰地指示说话者",
      "fill": "纯白色内饰，最大程度提高可读性"
    },
    “对话文本”：{
      "font": "经典漫画书字体——粗体、干净、大写",
      "size": "以打印尺寸可读，全文一致",
      "emphasis": "粗体表示压力，斜体表示耳语或想法"
    },
    “声音效果”：{
      "style": "大、动感、融入艺术",
      "design": "与声音相匹配的自定义字体——锯齿状代表爆炸，粗体代表冲击力",
      "color": "带有轮廓、阴影或 3D 效果的鲜艳色彩",
      "placement": "构图的一部分，不仅仅是重叠"
    },
    “标题”：{
      "style": "具有微妙颜色编码的矩形框",
      "placement": "面板的顶部或底部，层次结构清晰"
    }
  },
  “行动和动态”：{
    “运动渲染”：{
      "speed_lines": "显示移动方向的放射线或平行线",
      "motion_blur": "对快速移动的元素进行选择性模糊",
      "impact_frames": "碰撞点的星爆图案",
      "debris_scatter": "岩石、玻璃、瓦砾以清晰的轨迹飞行"
    },
    “影响可视化”：{
      "collision": "可见冲击波、地面裂缝、结构变形",
      "energy_attacks": "明亮的核心随着大气散射逐渐褪色到彩色边缘",
      "physical_force": "身体对不可能的力量做出真实的React"
    },
    “相机动态”：{
      "angles": "极低角度用于功率，高角度用于缩放",
      "foreshortening": "对接近的人物/拳头的积极视角",
      "dutch_angles": "倾斜的框架造成紧张和不安",
      "depth_of_field": "建议通过细节级别和模糊进行聚焦"
    }
  },
  “大气元素”：{
    “天气”：{
      "rain": "斜条纹、表面飞溅、湿反射",
      "lightning": "明亮的叉子戏剧性地照亮了场景",
      “风”：“碎片、头发、斗篷显示方向和力量”
    },
    “破坏美学”：{
      "rubble": "详细的混凝土块、钢筋、破碎的玻璃",
      "dust_clouds": "滚滚、分层、大气视角",
      "fire": "具有适当色温梯度的真实火焰形状",
      "smoke": "升起的柱子，飘动的缕缕，模糊的背景"
    },
    “规模指标”：{
      "buildings": "受损结构规模巨大",
      "vehicles": "汽车、坦克作为尺寸参考对象",
      "crowds": "强调主要主题规模的较小人物"
    }
  },
  “技术标准”：{
    “组成”：{
      "focal_point": "每个面板都有清晰的视觉层次结构",
      "eye_flow": "通过放置和对比度通过面板的故意路径",

“balance”：“动态不对称让人感觉有意为之，而不是混乱”
    },
    “一致性”：{
      "character_models": "所有面板的设计一致",
      "lighting_logic": "光源在整个页面上都有意义",
      "scale_relationships": "始终保持尺寸比例"
    },
    “打印就绪”：{
      "resolution": "适合打印复制的高分辨率",
      "color_space": "适用于 CMYK 的鲜艳色彩",
      "bleed_safe": "重要元素远离修剪边缘"
    }
  },
  “页面组成”：{
    “无边框”：{
      "edge_treatment": "页面周围没有边框——面板延伸到图像边缘",
      "bleed": "页面是漫画页，而不是漫画页",
      "presentation": "直接漫画页，未拍照或加框"
    }
  },
  “避免”：[
    “整个页面周围的任何框架或边框”，
    “漫画页照片效果”，
    “静态、僵硬的姿势，没有能量”，
    “没有戏剧性阴影的平面照明”，
    “浑浊、不饱和的色彩”，
    “线条薄弱、粗糙或不一致”，
    “令人困惑的面板流程或布局”，
    “难以辨认的小字”，
    “纯文本叠加的音效”，
    “解剖学上不正确的人物（除非故意风格化）”，
    “空虚、无聊的背景”，
    “面板之间的字符比例不一致”，
    “美国漫画美学中的漫画风格效果”，
    “过度渲染到失去图形冲击力的程度”，
    “弱冲击时刻——每一个动作都应该有重量”
  ]
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

American Comic

### Description

Your story as a blockbuster comic page.

### Prompt

```md
story: a child superman and a child batman joins their forces together in a forest. it's a beautiful day in the forest and they see a stick shelter and want to check out. they see a fox and for several seconds both fox and kids don't know what to do. they think first. then they all decide to run in opposite directions

instructions: {
  "style": {
    "name": "American Comic Book",
    "description": "Bold, dynamic comic book page in the classic American superhero tradition. Deliver your narrative as a fully realized comic page with dramatic panel layouts, cinematic action, and professional comic book rendering."
  },
  "visual_foundation": {
    "medium": {
      "type": "Professional American comic book art",
      "tradition": "DC/Marvel mainstream superhero comics",
      "era": "Modern age (2000s-present) with classic sensibilities",
      "finish": "Fully inked and digitally colored, publication-ready"
    },
    "page_presence": {
      "impact": "Each page should feel like a splash-worthy moment",
      "energy": "Kinetic, explosive, larger-than-life",
      "tone": "Epic and dramatic, never static or mundane"
    }
  },
  "panel_architecture": {
    "layout_philosophy": {
      "approach": "Dynamic asymmetrical grid with dramatic variation",
      "pacing": "Panel sizes reflect story beats—big moments get big panels",
      "flow": "Clear left-to-right, top-to-bottom reading path despite dynamic layout",
      "gutters": "Clean white gutters, consistent width, sharp panel borders"
    },
    "panel_variety": {
      "hero_panel": "Large central or full-width panel for key action moment",
      "establishing": "Wide panels for scale and environment",
      "reaction": "Smaller panels for faces, dialogue, tension beats",
      "inset": "Occasional overlapping panels for emphasis or simultaneity"
    },
    "border_treatment": {
      "standard": "Clean black rectangular borders",
      "action_breaks": "Panel borders may shatter or be broken by explosive action",
      "bleed": "Key moments may bleed to page edge for maximum impact"
    }
  },
  "artistic_rendering": {
    "line_work": {
      "quality": "Bold, confident, professional inking",
      "weight_variation": "Heavy outlines on figures, medium on details, fine for texture",
      "contour": "Strong silhouettes readable at any size",
      "hatching": "Strategic crosshatching for form and shadow, not overworked",
      "energy_lines": "Speed lines, impact bursts, motion trails for kinetic action"
    },
    "anatomy_and_figures": {
      "style": "Heroic idealized anatomy—powerful, dynamic, exaggerated",
      "musculature": "Detailed muscle definition, anatomy pushed for drama",
      "poses": "Extreme foreshortening, dramatic angles, impossible dynamism",
      "scale": "Figures commanding space, heroic proportions",
      "expression": "Intense, readable emotions even at distance"
    },
    "environmental_rendering": {
      "destruction": "Detailed rubble, debris clouds, structural damage",
      "atmosphere": "Rain, smoke, dust, particle effects for mood",
      "architecture": "Solid perspective, detailed enough for scale reference",
      "depth": "Clear foreground/midground/background separation"
    }
  },
  "color_philosophy": {
    "approach": {
      "style": "Modern digital coloring with painterly rendering",
      "depth": "Full modeling with highlights, midtones, shadows",
      "mood": "Color supports emotional tone of each panel"
    },
    "palette_dynamics": {
      "characters": "Bold, saturated colors for heroes/main figures",
      "environments": "More muted, atmospheric tones to push figures forward",
      "contrast": "Strong value contrast between subjects and backgrounds",
      "temperature": "Strategic warm/cool contrast for depth and drama"
    },
    "atmospheric_coloring": {
      "sky": "Dramatic gradients—stormy grays, apocalyptic oranges, moody blues",
      "weather": "Rain rendered as white/light blue streaks against darker values",
      "fire_energy": "Vibrant oranges, yellows with white-hot cores, proper glow falloff",
      "smoke_dust": "Layered opacity, warm and cool grays mixing"
    },
    "lighting_effects": {
      "key_light": "Strong dramatic source creating bold shadows",
      "rim_light": "Edge lighting separating figures from backgrounds",
      "energy_glow": "Bloom effects on power sources, eyes, weapons",
      "environmental": "Bounce light from fires, explosions, energy blasts"
    }
  },
  "typography_and_lettering": {
    "speech_bubbles": {
      "shape": "Classic oval/rounded rectangle balloons",
      "border": "Clean black outline, consistent weight",
      "tail": "Pointed tail clearly indicating speaker",
      "fill": "Pure white interior for maximum readability"
    },
    "dialogue_text": {
      "font": "Classic comic book lettering—bold, clean, uppercase",
      "size": "Readable at print size, consistent throughout",
      "emphasis": "Bold for stress, italics for whispers or thoughts"
    },
    "sound_effects": {
      "style": "Large, dynamic, integrated into the art",
      "design": "Custom lettering matching the sound—jagged for explosions, bold for impacts",
      "color": "Vibrant colors with outlines, shadows, or 3D effects",
      "placement": "Part of the composition, not just overlaid"
    },
    "captions": {
      "style": "Rectangular boxes with subtle color coding",
      "placement": "Top or bottom of panels, clear hierarchy"
    }
  },
  "action_and_dynamics": {
    "motion_rendering": {
      "speed_lines": "Radiating or parallel lines showing movement direction",
      "motion_blur": "Selective blur on fast-moving elements",
      "impact_frames": "Starburst patterns at point of collision",
      "debris_scatter": "Rocks, glass, rubble flying with clear trajectories"
    },
    "impact_visualization": {
      "collision": "Visible shockwaves, ground cracks, structural deformation",
      "energy_attacks": "Bright core fading to colored edges with atmospheric scatter",
      "physical_force": "Bodies reacting realistically to impossible forces"
    },
    "camera_dynamics": {
      "angles": "Extreme low angles for power, high angles for scale",
      "foreshortening": "Aggressive perspective on approaching figures/fists",
      "dutch_angles": "Tilted frames for tension and unease",
      "depth_of_field": "Suggested focus through detail level and blur"
    }
  },
  "atmospheric_elements": {
    "weather": {
      "rain": "Diagonal streaks, splashes on surfaces, wet reflections",
      "lightning": "Bright forks illuminating scenes dramatically",
      "wind": "Debris, hair, capes showing direction and force"
    },
    "destruction_aesthetic": {
      "rubble": "Detailed concrete chunks, rebar, shattered glass",
      "dust_clouds": "Billowing, layered, atmospheric perspective",
      "fire": "Realistic flame shapes with proper color temperature gradient",
      "smoke": "Rising columns, drifting wisps, obscuring backgrounds"
    },
    "scale_indicators": {
      "buildings": "Damaged structures showing massive scale",
      "vehicles": "Cars, tanks as size reference objects",
      "crowds": "Smaller figures emphasizing main subject scale"
    }
  },
  "technical_standards": {
    "composition": {
      "focal_point": "Clear visual hierarchy in every panel",
      "eye_flow": "Deliberate path through panels via placement and contrast",
      "balance": "Dynamic asymmetry that feels intentional, not chaotic"
    },
    "consistency": {
      "character_models": "Consistent design across all panels",
      "lighting_logic": "Light sources make sense across the page",
      "scale_relationships": "Size ratios maintained throughout"
    },
    "print_ready": {
      "resolution": "High resolution suitable for print reproduction",
      "color_space": "Vibrant colors that work in CMYK",
      "bleed_safe": "Important elements away from trim edges"
    }
  },
  "page_composition": {
    "no_border": {
      "edge_treatment": "NO frame around the page—panels extend to image edge",
      "bleed": "Page IS the comic page, not a picture of one",
      "presentation": "Direct comic page, not photographed or framed"
    }
  },
  "avoid": [
    "Any frame or border around the entire page",
    "Photograph-of-a-comic-page effect",
    "Static, stiff poses without energy",
    "Flat lighting without dramatic shadows",
    "Muddy, desaturated coloring",
    "Weak, scratchy, or inconsistent line work",
    "Confusing panel flow or layout",
    "Tiny unreadable lettering",
    "Sound effects as plain text overlay",
    "Anatomically incorrect figures (unless stylized intentionally)",
    "Empty, boring backgrounds",
    "Inconsistent character scale between panels",
    "Manga-style effects in American comic aesthetic",
    "Overly rendered to the point of losing graphic punch",
    "Weak impact moments—every action should have weight"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
