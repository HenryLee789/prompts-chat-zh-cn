# 牛仔

## 中文说明

用于让 AI 围绕「牛仔」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  "prompt": "你将使用所提供照片中的人物作为主要拍摄对象进行图像编辑。面部必须保持清晰且不变。将拍摄对象转变为目光坚定的**狂野西部枪手/亡命之徒**，高高地站在日落时分边境城镇尘土飞扬的大街上，手悬停在皮套附近。强调粗糙的纹理、温暖的金色光芒、紧张的气氛和经典的西部细节。",
  “详细信息”：{
    "year": "19世纪末（美国边境/狂野西部时代）",
    "genre": "西部/时代片/动作/美国",
    "location": "一座木质边境小镇的宽阔、尘土飞扬的主街道。街道两旁是风化的建筑，门面是假门面（酒吧、杂货店）。太阳在它们身后落下，投下长长的影子。灰尘悬浮在空气中。风滚草是可选的，但很受欢迎。",
    "lighting": "戏剧性的‘黄金时刻’日落。来自夕阳的温暖、低角度的光线照亮了拍摄对象和灰尘，营造出金色的薄雾和强烈的边缘照明。长而戏剧性的阴影横跨街道。整体色调温暖而坚韧。”,
    "camera_angle": "全身拍摄，略低角度，仰视拍摄对象，强调其气势。构图居中，后面延伸着城镇街道，创造深度。（1:1构图）。",
    "emotion": "紧张、自信、警惕、准备采取行动。",
    "costume": "粗犷、破旧的西部服装：一件长长的、布满灰尘的帆布或皮革防尘外套、一顶略低拉低的破旧牛仔帽、一件有图案的衬衫、一件皮背心和一双坚固、磨损的牛仔靴。一条厚重的皮革枪带，上面有一个适合那个时代的左轮手枪的皮套。脖子上系着一条头巾。",
    "color_palette": "以温暖、朴实的色调为主：灰棕色、焦橙色、深红色和日落时的金黄色。建筑物的木材是风化的灰色和棕色。天空是火橙色、粉红色和深蓝色的渐变。",
    "atmosphere": "紧张、坚韧、电影般、安静。空气中弥漫着灰尘和期待，仿佛决斗即将开始。典型的西方对峙感觉。",
    "subject_expression": "从帽檐下直视前方的钢铁般坚定的目光。下巴坚定而坚定。表情平静但高度专注，传达出一种危险的能力感。",
    "subject_action": "双脚分开站立，身体略带刀刃。一只手悬停在装在皮套的左轮手枪握把上方，手指准备好拔枪。另一只手可能放在腰带上或松松地挂在身边。",
    "environmental_elements": "可见的尘埃微粒捕捉到金色的光芒。背景中一匹马的轮廓拴在栏杆上。酒吧的木制标志（例如，'金块酒吧'）清晰可见，但稍微失焦。粗糙的木材和干燥的泥土的纹理是显而易见的。"
  }
}
```

---

## English Original

### Title

Cowboy

### Description



### Prompt

```md
{
  "prompt": "You will perform an image edit using the person from the provided photo as the main subject. The face must remain clear and unaltered. Transform the subject into a steely-eyed **Wild West Gunslinger/Outlaw**, standing tall on the dusty main street of a frontier town at sunset, hand hovering near their holster. Emphasize rugged textures, warm golden light, a tense atmosphere, and classic Western details.",
  "details": {
    "year": "Late 19th Century (American Frontier / Wild West Era)",
    "genre": "Western / Period Piece / Action / Americana",
    "location": "The wide, dusty main street of a wooden frontier town. Weathered buildings with false fronts (saloon, general store) line the street. The sun is setting behind them, casting long shadows. Dust hangs in the air. Tumbleweeds are optional but welcomed.",
    "lighting": "Dramatic 'Golden Hour' sunset. Warm, low-angle light from the setting sun backlights the subject and the dust, creating a golden haze and strong rim lighting. Long, dramatic shadows stretch across the street. The overall tone is warm and gritty.",
    "camera_angle": "Full-body shot, slightly low-angle, looking up at the subject to emphasize their imposing presence. The composition is centered, with the town street stretching behind them, creating depth. (1:1 composition).",
    "emotion": "Tense, confident, watchful, and ready for action.",
    "costume": "Rugged, worn Western attire: a long, dusty canvas or leather duster coat, a worn cowboy hat pulled slightly low, a patterned shirt, a leather vest, and sturdy, scuffed cowboy boots. A thick leather gun belt with a holster holding a period-appropriate revolver is prominent. A bandana is tied around the neck.",
    "color_palette": "Dominated by warm, earthy tones: dusty browns, burnt oranges, deep reds, and golden yellows from the sunset. The wood of the buildings is weathered gray and brown. The sky is a gradient of fiery orange, pink, and deep blue.",
    "atmosphere": "Tense, gritty, cinematic, and quiet. The air is thick with dust and anticipation, as if a duel is about to commence. A classic Western standoff feel.",
    "subject_expression": "A steely, unwavering gaze looking directly forward from beneath the hat brim. A firm, set jaw. The expression is calm but intensely focused, conveying a sense of dangerous capability.",
    "subject_action": "Standing with feet planted firmly apart, body slightly bladed. One hand is hovering just above the grip of their holstered revolver, fingers ready to draw. The other hand might be resting on their belt or hanging loosely at their side.",
    "environmental_elements": "Visible dust motes catching the golden light. The silhouette of a horse hitched to a rail in the background. A wooden sign for a saloon (e.g., 'Golden Nugget Saloon') is visible but slightly out of focus. The texture of rough wood and dry earth is palpable."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
