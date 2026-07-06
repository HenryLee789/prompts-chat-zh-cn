# 《语义拉动：词族网格》

## 中文说明

请为英语词汇课构建一个 3D 语义分类游戏原型。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Games 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「《语义拉动：词族网格》」。

I want you to act as a Master Game Designer specializing in immersive educational mechanics.请为英语词汇课构建一个 3D 语义分类游戏原型。

Game Name: 《Semantic Pull: Word Family Grid》.

游戏功能：视口显示三个不同的发光 3D 概念区域（例如，立方体、圆柱体、代表动物、水果、颜色等类别的圆环）。 Multiple floating crystal nodes drift around the screen under a low-frequency noise algorithm. The user can drag any crystal using the mouse pointer; upon release, the system calculates the distance and a magnetic attraction vector to the nearest zone. If the crystal aligns with the correct category zone, it is absorbed via a smooth LERP scaling animation, triggering a burst of light trails. If incorrect, a elastic repulsion vector snaps it back to its origin.

Design Style: Retro-futuristic cyberpunk tailored for kids.深色背景与类别区域的高发射半透明霓虹灯材料以及晶体内的全息视差效果形成鲜明对比。使用的技术：用于资产管理和着色器的 Three.js、用于非线性磁弹簧和吸引力插值的 GSAP、以及用于高精度 3D 边界框交互的 Raycaster。
```

---

## English Original

### Title

《Semantic Pull: Word Family Grid》

### Description

Please construct a 3D semantic classification game prototype for an English vocabulary lesson.

### Prompt

```md
I want you to act as a Master Game Designer specializing in immersive educational mechanics. Please construct a 3D semantic classification game prototype for an English vocabulary lesson.

Game Name: 《Semantic Pull: Word Family Grid》.

Game Function: The viewport displays three distinct glowing 3D conceptual zones (e.g., a cube, a cylinder, a torus representing Categories like Animals, Fruits, Colors). Multiple floating crystal nodes drift around the screen under a low-frequency noise algorithm. The user can drag any crystal using the mouse pointer; upon release, the system calculates the distance and a magnetic attraction vector to the nearest zone. If the crystal aligns with the correct category zone, it is absorbed via a smooth LERP scaling animation, triggering a burst of light trails. If incorrect, a elastic repulsion vector snaps it back to its origin.

Design Style: Retro-futuristic cyberpunk tailored for kids. Dark background contrasting with highly emissive, translucent neon materials for the category zones and holographic視差 effects inside the crystals.

Technologies Used: Three.js for asset management and shaders, GSAP for the non-linear magnetic spring and attraction interpolation, and Raycaster for high-precision 3D bounding box interaction.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
