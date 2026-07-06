# 终极修复/参考提示词

## 中文说明

用于让 AI 围绕「终极修复/参考提示词」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给视频生成模型，控制镜头、动作、节奏和场景。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给视频生成模型，控制镜头、动作、节奏和场景。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
基于所提供的参考图像的豪华温暖的室内场景。保持精确的构图、比例和拍摄角度。厨房吧台：
	• 台面必须严格使用提供的大理石参考图像。
	• 匹配与条相关的精确颜色、图案、纹理和真实比例。
	• 不要对大理石进行风格化、改变或重新诠释。
	• 大理石应与条形边缘、反射和环境照明自然地融为一体。吧台底座：温暖的天然木材。重点墙：浅灰色垂直条形覆层，全圆形圆柱形轮廓（圆形，非方形，无锋利边缘）。墙体划分：
	• 垂直：
	• 上部：墙高的顶部 2/3，条带直径 0.5 厘米
	• 下部：底部 1/3 墙高，条带直径 1 厘米
	• 水平（沿墙宽）：
	• 上部部分跨越墙宽的前三分之二
	• 下半部分跨越剩余三分之一
	• 平滑过渡、精确间距、建筑精度。地板：抛光白色卡拉拉大理石。温馨的氛围灯光，柔和的间接隐藏式照明，舒适又奢华的意式高端内饰。超现实的建筑可视化。对AI的严格指示：精确的材料匹配，准确遵循参考图像，保持比例，不重新解释或创建新的图案，大理石必须在比例上显得自然和真实。

⸻

中途/修复参数：

--v 6 --style raw --ar 3:4 --quality 2 --iw 2 --no 艺术诠释
```

---

## English Original

### Title

Ultimate Inpainting / Reference Prompt

### Description



### Prompt

```md

A luxurious warm interior scene based on the provided reference image. Maintain exact composition, proportions, and camera angle.

Kitchen bar:
	•	Countertop must strictly use the provided marble reference image.
	•	Match exact color, pattern, veining, and realistic scale relative to the bar.
	•	Do not stylize, alter, or reinterpret the marble.
	•	Marble should integrate naturally with bar edges, reflections, and ambient lighting.

Bar base: warm natural wood.

Accent wall: vertical strip cladding in light gray, fully rounded cylindrical profiles (round, not square, no sharp edges).

Wall division:
	•	Vertically:
	•	Upper section: top 2/3 of wall height, strips 0.5 cm diameter
	•	Lower section: bottom 1/3 of wall height, strips 1 cm diameter
	•	Horizontally (along wall width):
	•	Upper section spans first two-thirds of wall width
	•	Lower section spans remaining one-third
	•	Smooth transitions, precise spacing, architectural accuracy.

Flooring: polished white Carrara marble.
Warm ambient lighting, soft indirect hidden lighting, cozy yet luxurious Italian-style high-end interior. Ultra-realistic architectural visualization.

Strict instructions for AI: exact material matching, follow reference image exactly, maintain proportions, do not reinterpret or create new patterns, marble must appear natural and realistic in scale.

⸻

Midjourney / Inpainting Parameters:

--v 6 --style raw --ar 3:4 --quality 2 --iw 2 --no artistic interpretation
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
