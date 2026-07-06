---
id: "cmj2yc3sk0001un0stwt431nj"
slug: "director-variation-grid-one-still-eight-auteur-re-shoots"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/director-variation-grid-one-still-eight-auteur-re-shoots"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6cd9f0c1a17431125770283198581bdf2d4fc2fa1337bec9fac909f56bc5ce3f"
upstream_updated_at: "2025-12-16T11:12:02.369Z"
---
# 导演变化网格：一张剧照，八张导演重拍作品

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[director-variation-grid-one-still-eight-auteur-re-shoots](https://prompts.chat/prompts/director-variation-grid-one-still-eight-auteur-re-shoots)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将您的原始影片锁定在中央图块中，作为原始影片，未经修改，然后通过八位传奇导演的视觉语言重新拍摄完全相同的场景。此 3x3 网格模板强制执行干净的对齐、一致的标签和强大的导演特定电影摄影（取景、镜头感觉、灯光、颜色分级、纹理、情绪）。
它还包括身份+性别锁定，因此多角色场景保持一致，防止角色漂移、脸部互换或跨图块的性别变化。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
创建单个 3x3 网格图像（正方形、2048x2048、高细节）。
中心图块（第 2 行，第 2 列）必须是准确上传的参考影片，保持不变。请勿以任何方式重新解释、重新绘制、重新照明、重新着色、裁剪、重新构建、风格化、锐化、模糊或转换它。它必须与所提供的完全一致。

导演检测规则
如果上传电影的导演仍然是下面列出的 8 位导演之一，则同一导演的图块必须与原始中心图块完全相同，完全没有任何更改（相同的图像内容、相同的框架、相同的颜色、相同的灯光、相同的纹理）。仅粘贴标签。
所有其他瓷砖都遵循正常的重拍规则。

网格规则
9 个相等的瓷砖采用干净的 3x3 布局，瓷砖之间的排水沟细而均匀。
每个图块的左上角都有一个简单易读的标签，字体和大小一致，对比度高，无变形。
中心瓷砖标签：原装
其他瓷砖标签完全一样：
阿尔弗雷德·希区柯克
黑泽明
费德里科·费里尼
安德烈·塔可夫斯基
英格玛·伯格曼
让-吕克·戈达尔
阿涅斯·瓦尔达
塞尔吉奥·莱昂内
没有其他文本、徽标、字幕或水印。
保持 3x3 对齐完全笔直且干净。

身份+性别锁定（适用于所有非原始图块）
- 使用原始中心图块作为每个人身份的唯一事实来源。
- 保留确切的人数及其角色/职位（不交换谁是谁）。
- 请勿改变任何人的性别或性别表现。没有性别互换，没有性别改变，没有交叉演员。
- 保持每个人的关键身份特征一致：面部结构、发型长度/类型、面部毛发（不得出现/消失）、化妆水平（不得出现/消失）、身体比例、年龄范围、肤色和独特特征（痣/疤痕/眼镜）。
- 不要把一个人变成另一个人。不要合并面。不要把一个人分成两个人。不要在不同的人身上重复同一张脸。
- 如果任何身份属性不明确，则默认与原始属性完全匹配。
- 允许的更改仅限于每个导演的电影处理：取景、镜头感觉、摄像机高度、景深、灯光、调色板、对比度曲线、纹理、情绪和设置重点。身份必须保持锁定状态。
负面：性别互换、女性化/男性化、添加/删除胡须、添加/删除口红、大幅改变头发长度、面部替换、身份漂移。

铸造锚固
- 人 A = 原件中最左边的人，人 B = 原件中最右边的人，人 C = 原件中中间/后面的人，等等。
- 每个图块必须将 A/B/C 保持为相同的个体（相同的性别表现和身份），仅以电影方式重新拍摄。

内容规则（针对非重复图块）
在所有图块（谁/哪里/什么）之间保持可识别的连续性。不要将身份更改为不同的人。
每个导演都有所不同：取景、镜头感觉、摄像机高度、景深、灯光、调色板、对比度曲线、纹理、制作设计重点、情绪。
超清晰的电影剧照（除非指定了漫射）、连贯的灯光、正确的解剖结构、没有重复的面孔、没有破损的手、没有破碎的透视、没有故障伪影以及完全可读的标签。

导演特定的风格和颜色分级（强烈适用于每个图块，除非重复规则适用）

阿尔弗雷德·希区柯克
调色板：柔和的中性色、冷灰色、病态的绿色、深黑色、偶尔饱和的红色。
对比度：高对比度，阴影清晰、充满悬念。
质感：经典35mm洁净，气氛紧张。
镜头/景深：35–50mm，深度受控，几何形状精确。
灯光/遮挡：受黑色影响的实用性、硬调、偷窥框架、心理紧张。

黑泽明
调色板：朴实的不饱和棕色/绿色；如果是彩色的话，则采用克制的原色。
对比：大胆的色调分离，强烈的黑色。
质地：坚韧的薄膜颗粒、触觉元素（泥、雨、风）。
镜头/景深：24-50mm，深焦；动态的舞台和强大的几何形状。
照明/氛围：戏剧性的自然光、天气设计（雾、雨痕、背光）。

费德里科·费里尼
调色板：温暖的琥珀色、狂欢节的红色、奶油色的亮点、柔和的色调。
对比度：中等对比度，梦幻般的光芒和柔和的绽放。
质感：柔和的扩散，戏剧性的超现实抛光。
镜头/景深：正常到广角、舞台场景、丰富的背景布景。
灯光：富有表现力、舞台般、异想天开而又忧郁的情绪。

安德烈·塔可夫斯基
调色板：柔和的棕褐色/橄榄色、冷青灰色、低饱和度、风化色调。
对比度：低到中、柔和的高光衰减。
纹理：有机颗粒、雾气、水渍、老化表面。
镜头/景深：50–85mm，沉思式取景，自然景深。
灯光/氛围：窗光、阴沉的感觉、诗意的元素（雾、雨、烟）、安静的强度。

英格玛·伯格曼
调色板：近乎单色克制、冷灰色、苍白肤色、最小的色彩干扰。
对比度：高对比度、雕刻面孔、深阴影。
质地：干净、亲密、注重心理。
镜头/景深：50–85mm，更紧凑的取景，浅到中景深。
灯光：强烈的基调和戏剧性的衰减，情感强烈的肖像。

让-吕克·戈达尔
调色板：大胆的原色（红/蓝/黄）强调中性色，或有意平坦的自然色。
对比度：中等对比度，偶尔有轻微曝光过度的高光。
纹理：原始 16mm/35mm 能量，不完美且充满活力。
镜头/景深：更宽的镜头，自发的偏心构图。
灯光：可用的光感、街道/霓虹灯/实用、纪录片新浪潮即时性。

阿涅斯·瓦尔达
调色板：温暖的自然光、柔和的粉彩、诚实的肤色、微妙的互补色。
对比度：中等、柔和且诱人。
质感：触感真实，细腻的胶片颗粒。
镜头/景深：28–50mm，带背景的环境人像取景。
灯光：自然主义、以人为本、亲密而又开放的氛围。

塞尔吉奥·莱昂内
调色板：晒金、灰橙色、棕褐色、深阴影、偶尔的绿松石天空色调。
对比度：高对比度、刺眼的阳光、强烈的轮廓。
纹理：砂砾灰尘、汗水、皮革、风化表面、明显的纹理。
镜头/景深：极宽（24-35mm）和极特写语言；眼睛/细节的浅景深。
灯光/氛围：强烈的阳光、边缘光、歌剧般的张力、标志性的戏剧性阴影形状。

输出：仅单个最终 3x3 网格图像。
```

---

## English Original

### Title

Director Variation Grid: One Still, Eight Auteur Re-Shoots

### Description

Lock your original film still in the center tile as ORIGINAL, untouched, then re-shoot the exact same scene through the visual language of eight legendary directors. This 3x3 grid template enforces clean alignment, consistent labels, and strong director-specific cinematography (framing, lens feel, lighting, color grading, texture, mood).
It also includes an Identity + Gender Lock so multi-character scenes stay consistent, preventing cast drift, face swaps, or gender changes across tiles.

### Prompt

```md
Create a single 3x3 grid image (square, 2048x2048, high detail).
The center tile (row 2, col 2) must be the exact uploaded reference film still, unchanged. Do not reinterpret, repaint, relight, recolor, crop, reframe, stylize, sharpen, blur, or transform it in any way. It must remain exactly as provided.

Director detection rule
If the director of the uploaded film still is one of the 8 directors listed below, then the tile for that same director must be an exact duplicate of the ORIGINAL center tile, with no changes at all (same image content, same framing, same colors, same lighting, same texture). Only apply the label.
All other tiles follow the normal re-shoot rules.

Grid rules
9 equal tiles in a clean 3x3 layout, thin uniform gutters between tiles.
Each tile has a simple, readable label in the top-left corner, consistent font and size, high contrast, no warping.
Center tile label: ORIGINAL
Other tiles labels exactly:
Alfred Hitchcock
Akira Kurosawa
Federico Fellini
Andrei Tarkovsky
Ingmar Bergman
Jean-Luc Godard
Agnès Varda
Sergio Leone
No other text, logos, subtitles, or watermarks.
Keep the 3x3 alignment perfectly straight and clean.

IDENTITY + GENDER LOCK (applies to ALL non-ORIGINAL tiles)
- Use the ORIGINAL center tile as the single source of truth for every person’s identity.
- Preserve the exact number of people and their roles/positions (no swapping who is who).
- Do NOT change any person’s gender or gender presentation. No gender swap, no sex change, no cross-casting.
- Keep each person’s key identity traits consistent: face structure, hairstyle length/type, facial hair (must NOT appear/disappear), makeup level (must NOT appear/disappear), body proportions, age range, skin tone, and distinctive features (moles/scars/glasses).
- Do not turn one person into a different person. Do not merge faces. Do not split one person into two. Do not duplicate the same face across different people.
- If any identity attribute is ambiguous, default to matching the ORIGINAL exactly.
- Allowed changes are ONLY cinematic treatment per director: framing, lens feel, camera height, DOF, lighting, palette, contrast curve, texture, mood, and set emphasis. Identities must remain locked.
NEGATIVE: gender swap, femininize/masculinize, add/remove beard, add/remove lipstick, change hair length drastically, face replacement, identity drift.

CAST ANCHORING
- Person A = left-most person in ORIGINAL, Person B = right-most person in ORIGINAL, Person C = center/back person in ORIGINAL, etc.
- Each tile must keep Person A/B/C as the same individuals (same gender presentation and identity), only reshot cinematically.

Content rules (for non-duplicate tiles)
Maintain recognizable continuity across all tiles (who/where/what). Do not change identities into different people.
Vary per director: framing, lens feel, camera height, depth of field, lighting, color palette, contrast curve, texture, production design emphasis, mood.
Ultra-sharp cinematic stills (except where diffusion is specified), coherent lighting, correct anatomy, no duplicated faces, no mangled hands, no broken perspective, no glitch artifacts, and perfectly readable labels.

Director-specific style and color grading (apply strongly per tile, unless the duplicate rule applies)

Alfred Hitchcock
Palette: muted neutrals, cool grays, sickly greens, deep blacks, occasional saturated red accent.
Contrast: high contrast with crisp, suspenseful shadows.
Texture: classic 35mm cleanliness with tense atmosphere.
Lens/DOF: 35–50mm, controlled depth, precise geometry.
Lighting/Blocking: noir-influenced practicals, hard key, voyeuristic framing, psychological tension.

Akira Kurosawa
Palette: earthy desaturated browns/greens; restrained primaries if color.
Contrast: bold tonal separation, punchy blacks.
Texture: gritty film grain, tactile elements (mud, rain, wind).
Lens/DOF: 24–50mm with deep focus; dynamic staging and strong geometry.
Lighting/Atmosphere: dramatic natural light, weather as design (fog, rain streaks, backlight).

Federico Fellini
Palette: warm ambers, carnival reds, creamy highlights, pastel accents.
Contrast: medium contrast, dreamy glow and gentle bloom.
Texture: soft diffusion, theatrical surreal polish.
Lens/DOF: normal to wide, staged tableaux, rich background set dressing.
Lighting: expressive, stage-like, whimsical yet melancholic mood.

Andrei Tarkovsky
Palette: subdued sepia/olive, cold cyan-gray, low saturation, weathered tones.
Contrast: low-to-medium, soft highlight roll-off.
Texture: organic grain, misty air, water stains, aged surfaces.
Lens/DOF: 50–85mm, contemplative framing, naturalistic DOF.
Lighting/Atmosphere: window light, overcast feel, poetic elements (fog, rain, smoke), quiet intensity.

Ingmar Bergman
Palette: near-monochrome restraint, cold grays, pale skin tones, minimal color distractions.
Contrast: high contrast, sculpted faces, deep shadows.
Texture: clean, intimate, psychologically focused.
Lens/DOF: 50–85mm, tighter framing, shallow-to-medium DOF.
Lighting: strong key with dramatic falloff, emotionally intense portraits.

Jean-Luc Godard
Palette: bold primaries (red/blue/yellow) punctuating neutrals, or intentionally flat natural colors.
Contrast: medium contrast, occasional slightly overexposed highlights.
Texture: raw 16mm/35mm energy, imperfect and alive.
Lens/DOF: wider lenses, spontaneous off-center composition.
Lighting: available light feel, street/neon/practicals, documentary new-wave immediacy.

Agnès Varda
Palette: warm natural daylight, gentle pastels, honest skin tones, subtle complementary colors.
Contrast: medium, soft and inviting.
Texture: tactile lived-in realism, subtle film grain.
Lens/DOF: 28–50mm, environmental portrait framing with context.
Lighting: naturalistic, human-first, intimate but open atmosphere.

Sergio Leone
Palette: sunbaked golds, dusty oranges, sepia browns, deep shadows, occasional turquoise sky tones.
Contrast: high contrast, harsh sun, strong silhouettes.
Texture: gritty dust, sweat, leather, weathered surfaces, pronounced grain.
Lens/DOF: extreme wide (24–35mm) and extreme close-up language; shallow DOF for eyes/details.
Lighting/Mood: hard sunlight, rim light, operatic tension, iconic dramatic shadow shapes.

Output: a single final 3x3 grid image only.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [director-variation-grid-one-still-eight-auteur-re-shoots](https://prompts.chat/prompts/director-variation-grid-one-still-eight-auteur-re-shoots) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | semihkislar |
| Updated At | 2025-12-16T11:12:02.369Z |
