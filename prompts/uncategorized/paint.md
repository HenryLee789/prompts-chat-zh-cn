# 画

## 中文说明

用于让 AI 围绕「画」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  "prompt": "You will perform an image edit using the person from the provided photo as the main subject. The face must remain clear and unaltered. Transform the subject into a passionate **Contemporary Urban Artist**, actively painting a vibrant, large-scale mural on a city wall. Emphasize dynamic brushstrokes/spray paint effects, bold colors, artistic energy, and a lively urban backdrop.",
  “详细信息”：{
    "year": "Contemporary (Modern Urban Setting)",
    “流派”：“街头艺术/当代艺术/城市生活/表现主义”，
    "location": "A vibrant city alleyway or a prominent wall in an urban art district. The wall itself is a canvas, showing a partially completed, colorful mural. Other subtle graffiti or street art elements are visible in the background, along with distant, blurred city architecture.",
    "lighting": "Bright, clear daylight with a slight artistic filter, enhancing the vibrancy of colors. Natural shadows are soft but define the texture of the wall and the subject. The focus is on illuminating the artwork.",
    "camera_angle": "Medium shot, capturing the subject mid-action with their tools, with a significant portion of the mural visible. Dynamic angle that conveys movement and artistic energy. (1:1 composition).",
    "emotion": "专注、热情、精力充沛、富有表现力。",
    "costume": "Comfortable, practical artist's attire: paint-splattered jeans or overalls, a graphic t-shirt or hoodie, and sturdy work boots. Hair might be tied back or messy. Perhaps a beanie or cap worn backward.",
    "color_palette": "Explosive and highly saturated. A wide range of bright, bold colors used in the mural (e.g., electric blues, fiery oranges, vibrant pinks, lime greens). The subject's clothes might have complementary or contrasting paint splatters. The city background is slightly desaturated to make the mural pop.",
    "atmosphere": "Energetic, creative, inspiring, and lively. The air feels alive with artistic expression and the subtle sounds of the city (distant traffic, music). A sense of freedom and creation.",
    "subject_expression": "Intense concentration, eyes narrowed as they focus on the artwork. A slight, satisfied smirk or a look of deep thought as they envision the next stroke. No direct eye contact with the viewer.",
    "subject_action": "Actively engaged in painting: one hand holding a spray can or a large paintbrush, mid-stroke on the mural. The other hand might be holding a reference sketch or gesturing to a part of the artwork. Paint drips are visible down the wall. Their body is in motion, conveying the physical act of creation.",
    "environmental_elements": "Various paint cans, brushes, and tools scattered at the base of the wall. A stepladder or scaffolding is partially visible. Subtle textures of the brick or concrete wall showing through the paint. A sense of depth with layers of paint."
  }
 }

约束条件：
- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。
```

---

## English Original

### Title

Paint

### Description



### Prompt

```md
{
  "prompt": "You will perform an image edit using the person from the provided photo as the main subject. The face must remain clear and unaltered. Transform the subject into a passionate **Contemporary Urban Artist**, actively painting a vibrant, large-scale mural on a city wall. Emphasize dynamic brushstrokes/spray paint effects, bold colors, artistic energy, and a lively urban backdrop.",
  "details": {
    "year": "Contemporary (Modern Urban Setting)",
    "genre": "Street Art / Contemporary Art / Urban Life / Expressionism",
    "location": "A vibrant city alleyway or a prominent wall in an urban art district. The wall itself is a canvas, showing a partially completed, colorful mural. Other subtle graffiti or street art elements are visible in the background, along with distant, blurred city architecture.",
    "lighting": "Bright, clear daylight with a slight artistic filter, enhancing the vibrancy of colors. Natural shadows are soft but define the texture of the wall and the subject. The focus is on illuminating the artwork.",
    "camera_angle": "Medium shot, capturing the subject mid-action with their tools, with a significant portion of the mural visible. Dynamic angle that conveys movement and artistic energy. (1:1 composition).",
    "emotion": "Focused, passionate, energetic, and expressive.",
    "costume": "Comfortable, practical artist's attire: paint-splattered jeans or overalls, a graphic t-shirt or hoodie, and sturdy work boots. Hair might be tied back or messy. Perhaps a beanie or cap worn backward.",
    "color_palette": "Explosive and highly saturated. A wide range of bright, bold colors used in the mural (e.g., electric blues, fiery oranges, vibrant pinks, lime greens). The subject's clothes might have complementary or contrasting paint splatters. The city background is slightly desaturated to make the mural pop.",
    "atmosphere": "Energetic, creative, inspiring, and lively. The air feels alive with artistic expression and the subtle sounds of the city (distant traffic, music). A sense of freedom and creation.",
    "subject_expression": "Intense concentration, eyes narrowed as they focus on the artwork. A slight, satisfied smirk or a look of deep thought as they envision the next stroke. No direct eye contact with the viewer.",
    "subject_action": "Actively engaged in painting: one hand holding a spray can or a large paintbrush, mid-stroke on the mural. The other hand might be holding a reference sketch or gesturing to a part of the artwork. Paint drips are visible down the wall. Their body is in motion, conveying the physical act of creation.",
    "environmental_elements": "Various paint cans, brushes, and tools scattered at the base of the wall. A stepladder or scaffolding is partially visible. Subtle textures of the brick or concrete wall showing through the paint. A sense of depth with layers of paint."
  }
 }
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
