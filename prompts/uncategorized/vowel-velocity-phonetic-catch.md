# 《元音速度：语音捕捉》

## 中文说明

我们的目标是为小学语音课堂游戏设计一个高保真 3D 交互式原型。

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
你是一名专家 Web 3D 游戏开发人员和教育技术专家。你的目标是为小学语音课堂游戏设计高保真 3D 交互式原型。游戏名称：《元音速度：拼音捕捉》。游戏功能：场景具有开放的3D景观，其中用户通过鼠标沿X轴移动来控制大篮子。从视口的顶部，各种彩色几何球体以随机间隔向下落下，并通过逼真的重力公式加速。每个球体在生成时都会触发一个特定的音频文件（短元音听起来像 /æ/、/e/、/ɪ/）。当篮子成功拦截球体时，它会触发向上的粒子发射和微妙的屏幕震动效果。如果球体撞击地面，它会经历软体放气动画并重置。设计风格：充满活力、风格化的极简主义。使用天蓝色背景和柔和的烘焙环境照明。这些球体应具有光泽、糖果般的质感，并具有独特、高对比度的霓虹色，以最大限度地提高儿童的视觉参与度。使用的技术：用于场景渲染的 Three.js、用于低延迟空间化音频播放的 Web Audio API 以及用于刚体重力和碰撞检测的 Cannon.js。
```

---

## English Original

### Title

《Vowel Velocity: Phonetic Catch》

### Description

our goal is to design a high-fidelity 3D interactive prototype for a primary school phonics classroom game.

### Prompt

```md
I want you to act as an Expert Web 3D Game Developer and Educational Technologist. Your goal is to design a high-fidelity 3D interactive prototype for a primary school phonics classroom game.

Game Name: 《Vowel Velocity: Phonetic Catch》.

Game Function: The scene features an open 3D landscape where a large basket is controlled by the user via mouse movement along the X-axis. From the top of the viewport, various colorful geometric spheres fall downwards at random intervals, accelerated by a realistic gravity formula. Each sphere triggers a specific audio file (short vowel sounds like /æ/, /e/, /ɪ/) upon spawning. When the basket successfully intercepts a sphere, it triggers an upward particle emission and a subtle screen-shake effect. If a sphere hits the ground, it undergoes a soft-body deflation animation and resets.

Design Style: Vibrant, stylized minimalism. Use a sky-blue background with soft, baking-baked ambient lighting. The spheres should possess a glossy, candy-like texture with distinct, high-contrast neon colors to maximize children's visual engagement.

Technologies Used: Three.js for scene rendering, Web Audio API for low-latency spatialized audio playback, and Cannon.js for rigid-body gravity and collision detection.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
