# 雅达利

## 中文说明

用于让 AI 围绕「雅达利」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象来执行图像编辑。面部必须保持清晰且不变。将拍摄对象转变为酷炫的 **80 年代 Synthwave 游戏玩家**，在灯光昏暗、霓虹灯笼罩的复古街机中激烈地玩街机柜。强调发光的霓虹灯颜色（洋红色、青色）、复古未来主义时尚、CRT 屏幕反射以及怀旧的电子游戏气氛。”,
  “详细信息”：{
    "year": "1980 年代（复古未来主义/合成波美学）",
    "genre": "Synthwave / Retrowave / 80 年代怀旧 / Cyberpunk Lite",
    "location": "一个黑暗、大气的复古拱廊。墙壁上排列着发光的拱廊橱柜，展示像素艺术。地板上可能有发光的霓虹灯网格图案。烟雾机在空气中产生轻微的薄雾，捕捉彩色灯光。",
    "lighting": "强烈、对比鲜明的霓虹灯。主要色调为电粉色、青色、深紫色和激光蓝色。拍摄对象脸上的主要光源是他们正在玩的 CRT 街机屏幕发出的光芒，产生强烈的彩色亮点。",
    "camera_angle": "中景镜头，从腰部以上捕捉拍摄对象，与街机互动。背景是模糊的霓虹灯和屏幕。（1:1 构图）。",
    "emotion": "冷静、专注、沉浸、略带怀旧。",
    "costume": "典型的 80 年代酷感：缎面‘会员专用’风格夹克（可能是彩虹色或带有复古标志）、图案带 T 恤，也许还有露指手套。在室内戴太阳镜是可选的，但鼓励美观。头发造型有体积。",
    "color_palette": "严格的合成波调色板：饱和的洋红色、青色、深紫色、电蓝色和日落橙色。阴影中的深黑色与霓虹灯光源形成鲜明对比。",
    "atmosphere": "电动、怀旧、朦胧、凉爽。空气中充满了合成音乐和硬币掉落的声音。蒸汽波曲目的视觉表现。",
    "subject_expression": "冷静、专注的傻笑或高度专注，眼睛盯着屏幕。游戏中不断变换的彩色灯光照亮了真实的脸部。",
    "subject_action": "手积极地使用街机操纵杆和按钮，指关节因抓握而略显发白。身体稍微倾斜到机器上，全神贯注。",
    "environmental_elements": "CRT 屏幕上可见的扫描线。像素化爆炸或高分反映在对象的太阳镜或眼睛中。发光的硬币槽。背景是 80 年代虚构科幻电影的复古海报。"
  }
}
```

---

## English Original

### Title

Atari

### Description



### Prompt

```md
{
  "prompt": "You will perform an image edit using the person from the provided photo as the main subject. The face must remain clear and unaltered. Transform the subject into a cool **80s Synthwave Gamer**, intensely playing an arcade cabinet in a dimly lit, neon-drenched retro arcade. Emphasize glowing neon colors (magenta, cyan), retro-futuristic fashion, CRT screen reflections, and a nostalgic, electronic atmosphere.",
  "details": {
    "year": "1980s (Retro-Futuristic / Synthwave Aesthetic)",
    "genre": "Synthwave / Retrowave / 80s Nostalgia / Cyberpunk Lite",
    "location": "A dark, atmospheric retro arcade. Walls are lined with glowing arcade cabinets showing pixel art. The floor might have a glowing neon grid pattern. Smoke machines create a slight haze in the air, catching the colored lights.",
    "lighting": "Intense, contrasting neon lighting. Dominant hues of electric pink, cyan, deep purple, and laser blue. The primary light source on the subject's face is the glow from the CRT arcade screen they are playing, creating strong, colorful highlights.",
    "camera_angle": "Medium shot, capturing the subject from the waist up, engaged with the arcade machine. The background is a blur of neon lights and screens. (1:1 composition).",
    "emotion": "Cool, focused, immersed, and slightly nostalgic.",
    "costume": "Quintessential 80s cool: A satin 'Members Only' style jacket (perhaps iridescent or with a retro logo), a graphic band t-shirt, and maybe fingerless gloves. Sunglasses worn indoors are optional but encouraged for the aesthetic. Hair is styled with volume.",
    "color_palette": "A strict synthwave palette: saturated magenta, cyan, deep violet, electric blue, and sunset orange. Deep blacks in the shadows contrast sharply with the neon light sources.",
    "atmosphere": "Electric, nostalgic, hazy, and cool. The air feels filled with the sounds of synthesized music and coin drops. A visual representation of a vaporwave track.",
    "subject_expression": "A cool, focused smirk or intense concentration, eyes fixed on the screen. The realistic face is illuminated by the shifting colored light of the game.",
    "subject_action": "Hands are actively engaged with the arcade joystick and buttons, knuckles slightly white from gripping. The body is leaned slightly into the machine in concentration.",
    "environmental_elements": "Scanlines visible on the CRT screens. Pixelated explosions or high scores reflecting in the subject's sunglasses or eyes. Glowing coin slots. A retro poster for a fictional 80s sci-fi movie in the background."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
