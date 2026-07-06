# 将你的照片变成辛普森一家场景

## 中文说明

将你上传的照片重新创建为经典《辛普森一家》中可信的剧照，转换每个人和任何动物，同时保留准确的数量、姿势和构图。背景和道具采用了类似斯普林菲尔德的外观，具有干净的卡通阴影，没有文字或水印。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Nano Banana、Art 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
使用上传的照片作为构图和主题的唯一参考。将其重新创建为“辛普森一家”（经典季节外观）中干净、可信的静态框架，并具有一致的、精确的角色设计和背景绘画。核心要求
- 照片中的每个可见主题都必须转换为辛普森风格的角色，包括：
  - 多人
  - 婴儿/儿童
  - 宠物和动物（猫、狗、鸟等）
- 不要让任何主题保持真实感。没有“半真实、半卡通”的结果。身份和计数锁定
- 保留人类和动物的准确数量。
- 保留每个拍摄对象的位置、相对大小、姿势、手势和注视方向。
- 保留每个主题的关键身份线索：发型、面部毛发、眼镜、独特的配饰、服装类型和整体氛围。
- 不要合并人物、移除动物、创造额外的角色或交换谁是谁。辛普森一家角色设计规则（必须符合演出）
- 皮肤：人类的辛普森黄色，具有典型的平坦填充。
- 眼睛：白色的大圆眼睛，带有小黑点瞳孔（没有细致的虹膜）。
- 鼻子：鼻子形状简单圆润，线条极少。
- 嘴部：线条简单，贴合时有微妙的覆咬合感觉。
- 手：人类 4 个手指（辛普森标准）。
- 线条：干净的黑色轮廓，粗细均匀，没有粗略的笔触。
- 着色：只有最小的赛璐珞风格的着色，没有真实的阴影或纹理。动物转换规则（显示准确）
- 将每只动物转换成类似辛普森一家的版本：
  - 简化的体型、大胆的轮廓、扁平的色彩
  - 富有表现力但简单的脸：圆点瞳孔，最小的口吻细节
- 以简化的形式保持物种的可读性并保留独特的标记（斑点、毛皮色块）。服装及配饰
- 保留原来的服装和配饰，但将细节简化为平面色块。
- 仅在清晰存在的情况下保留徽标/图案，但要大力简化。
- 衣服上没有添加文字。背景与环境
- 将背景转换为与原始设置相匹配的类似辛普森斯普林菲尔德的环境：
  - 如果在室内：简单的柔和墙壁、干净的道具、基本视角、典型的情景喜剧舞台。
  - 如果在户外：明亮的天空、简化的建筑物/树木、斯普林菲尔德的调色板。
- 保留主要背景物体（桌子、电话、椅子、标志），但简化为动画道具。
- 不要更改位置类型（不要将其移动到 Moe’s、Kwik-E-Mart 或 Simpsons house，除非原始位置已与此类位置匹配）。相机和取景
- 匹配原始相机角度、镜头感觉、裁剪和间距。
- 将其保留为单个电视框架，而不是海报。质量和底片
- 无文本、字幕、说明文字、水印、徽标、UI 或边框。
- 没有 3D、没有绘画风格、没有动漫、没有超出辛普森一家规范的漫画夸张。
- 没有奇怪的面部漂移：角色必须看起来像辛普森一家的角色，同时仍然清晰地映射到照片中的每个主题。
- 高分辨率、清晰的边缘、干净的色彩，看起来像真实的剧集截图。

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Turn Your Photo Into a Simpsons Scene

### Description

Recreates your uploaded photo as a believable still from classic The Simpsons, converting every person and any animals while preserving the exact count, poses, and composition. Background and props are adapted to a Springfield-like look with clean cel shading and no text or watermarks.

### Prompt

```md
Use the uploaded photo as the ONLY reference for composition and subjects. Recreate it as a clean, believable still frame from “The Simpsons” (classic seasons look), with consistent show-accurate character design and background painting.

Core requirement
- EVERY visible subject in the photo must be converted into a Simpsons-style character, including:
  - Multiple humans
  - Babies/children
  - Pets and animals (cats, dogs, birds, etc.)
- Do not keep any subject photorealistic. No “half-real, half-cartoon” results.

Identity and count lock
- Keep the exact number of humans and animals.
- Keep each subject’s position, relative size, pose, gesture, and gaze direction.
- Keep key identity cues per subject: hairstyle, facial hair, glasses, distinctive accessories, clothing type, and overall vibe.
- Do NOT merge people, remove animals, invent extra characters, or swap who is who.

Simpsons character design rules (must match the show)
- Skin: Simpsons yellow for humans, with show-typical flat fills.
- Eyes: large white round eyes with small black dot pupils (no detailed irises).
- Nose: simple rounded nose shape, minimal lines.
- Mouth: simple linework, subtle overbite feel when fitting.
- Hands: 4 fingers for humans (Simpsons standard).
- Linework: clean black outlines, uniform thickness, no sketchy strokes.
- Shading: minimal cel-style shading only, no realistic shadows or textures.

Animals conversion rules (show-accurate)
- Convert each animal into a Simpsons-like version:
  - Simplified body shapes, bold outlines, flat colors
  - Expressive but simple face: dot pupils, minimal muzzle detail
- Keep species readable and preserve unique markings (spots, fur color blocks) in simplified form.

Clothing and accessories
- Keep the original outfits and accessories but simplify details into flat color blocks.
- Preserve logos/patterns only if they were clearly present, but simplify heavily.
- No added text on clothing.

Background and environment
- Convert the background into a Simpsons Springfield-like environment that matches the original setting:
  - If indoors: simple pastel walls, clean props, basic perspective, typical sitcom staging.
  - If outdoors: bright sky, simplified buildings/trees, Springfield color palette.
- Keep major background objects (tables, phones, chairs, signs) but simplify to animation props.
- Do not change the location type (do not move it to Moe’s, Kwik-E-Mart, or the Simpsons house unless the original already matches that kind of place).

Camera and framing
- Match the original camera angle, lens feel, crop, and spacing.
- Keep it as a single TV frame, not a poster.

Quality and negatives
- No text, subtitles, captions, watermarks, logos, UI, or borders.
- No 3D, no painterly look, no anime, no caricature exaggeration beyond Simpsons norms.
- No uncanny face drift: characters must look like Simpsons characters while still clearly mapping to each subject in the photo.
- High resolution, crisp edges, clean colors, looks like an actual episode screenshot.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
