# 宫女

## 中文说明

用于让 AI 围绕「宫女」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
“场景”：{
"subject": "年轻女子（茉莉花）具有地中海特征，深色头发向后梳成凌乱的发髻，发丝垂落在脸上。表情深沉痛苦，眼睛明亮，脸颊上有明显的泪痕。",
"format": "垂直，宽高比 9:16",
"pose": "跪在大理石地板上，身体微微前倾。一只手放在胸前，做出痛苦的姿势，另一只手放在大腿上。",
"clothing": "翠绿色丝绸宫女连衣裙，饰有精致的金色刺绣、透明薄纱、领口极低，侧开衩露出双腿。金色细高跟凉鞋。",
"key_element": "重金链子连接到承重墙上的金属环上。另一端是重金手镯 (ceppo)，缠绕在女人的左脚踝上。"
},
“氛围”：{
"style": "东方/新古典主义风格的豪华宫殿内部。大理石柱、尖拱门、浅色石墙。",
"lighting": "戏剧性的夜间气氛。黄铜壁火把和大型悬挂的阿拉伯灯笼发出温暖的光线。长而大胆的阴影投射在墙壁和天花板上。",
“地板”：“带有灰色纹理的白色大理石，经过抛光和反光，显示出灯光和主体的反射。”
},
“技术规格”：{
"composition": "全身镜头，略低角度的视角，强调拍摄对象的脆弱性。景深适中，背景柔和模糊。",
"photography_style": "高分辨率电影照片写实主义。饱和的颜色（绿色、金色）与凉爽的大理石色调和深阴影形成鲜明对比。",
"render_details": "详细的皮肤纹理，汗水或泪水的反射，逼真的大理石纹理，金色和链条的金属亮点，裙子刺绣的微观细节。",
“atmosphere”：“戏剧性、压抑、奢华但又令人产生幽闭恐惧症。”
},
“次要元素”：{
"shadow_presence": "在画面的右边缘，可以看到一个威严的男性人物（苏丹）的深色长袍的阴影或下摆，表明他的存在，但没有完全暴露出来。",
“家具”：“背景中，深色木制家具和厚重的天鹅绒窗帘挡住了通往其他房间的通道。”
}
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Odalisque

### Description



### Prompt

```md
{
"scene": {
"subject": "Young woman (Jasmine) with Mediterranean features, dark hair pulled back in a messy bun with strands falling over her face. An expression of deep pain, bright eyes, and visible tears on her cheeks.",
"format": "vertical, 9:16 aspect ratio",
"pose": "Kneeling on a marble floor, her body leaning slightly forward. One hand is brought to her chest in a gesture of anguish, the other rests on her thigh.",
"clothing": "Emerald green silk odalisque dress with elaborate gold embroidery, sheer tulle, a very low neckline, and side slits that reveal the legs. Gold stiletto sandals.",
"key_element": "Heavy gold chain attached to a metal ring in the load-bearing wall. The other end ends in a heavy gold bracelet (ceppo) wrapped around the woman's left ankle."
},
"ambience": {
"style": "Interior of a luxurious palace in oriental/neoclassical style. Marble columns, pointed arches, light-colored stone walls.",
"lighting": "Dramatic, nocturnal atmosphere. Warm light from brass wall torches and a large hanging Arabian lantern. Long, bold shadows cast on the walls and ceiling.",
"flooring": "White marble veined with gray, polished and reflective, showing the reflections of the lights and the subject."
},
"technical_specs": {
"composition": "Full-body shot, slightly low-angle perspective to emphasize the subject's vulnerability. Moderate depth of field with a softly blurred background.",
"photography_style": "High-resolution cinematic photorealism. Saturated colors (green, gold) contrasted by cool marble tones and deep shadows.",
"render_details": "Detailed skin texture with reflections of sweat or tears, realistic marble veining, metallic highlights from the gold and chains, micro-details in the dress's embroidery.",
"atmosphere": "Dramatic, oppressive, luxurious yet claustrophobic."
},
"secondary_elements": {
"shadow_presence": "At the right edge of the frame, the shadow or hem of the dark robe of an imposing male figure (the Sultan) can be seen, suggesting his presence without fully revealing it.",
"furniture": "In the background, dark wooden furniture and heavy velvet curtains block the access to other rooms."
}
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
