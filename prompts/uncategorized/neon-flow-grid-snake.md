# 霓虹流网格蛇

## 中文说明

基于现代化的蛇机制编写一个完整的、可玩的单文件（index.html）游戏。

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
你需要扮演「霓虹流网格蛇」。我希望你成为一名专业的 HTML5 Canvas 游戏开发人员。你的任务是基于现代化的蛇机制编写一个完整的、可玩的单文件（index.html）游戏。游戏规格：

标题：网络网格链接

核心机制：在移动的网格环境中控制由链式矢量粒子组成的蛇。目标：收集发光的能量矩阵晶体以生长链接链，同时躲避移动的防火墙障碍。技术要求：

单个文件：一个 HTML 文档中包含纯原生 JS，零外部库，零资源下载。渲染：带有 requestAnimationFrame 游戏循环的 HTML5 2D Canvas。蛇段运动的平滑 LERP 插值可创建流畅、有机的运动，而不是经典的块状步骤。控制：箭头键或 WASD 用于绝对方向转向。

Design style: Cyberpunk dark theme.网格必须使用局部坐标位移在蛇头附近稍微扭曲。蛇链具有脉动渐变纹理。
```

---

## English Original

### Title

Neon Flow Grid Snake

### Description

write a complete, playable SINGLE FILE (index.html) game based on a modernized snake mechanic.

### Prompt

```md
I want you to act as an expert HTML5 Canvas game developer. Your task is to write a complete, playable SINGLE FILE (index.html) game based on a modernized snake mechanic.

GAME SPEC:

Title: Cyber Grid Link

Core mechanic: Control a snake made of chained vector particles on a shifting grid environment.

Goal: Collect glowing energy matrix crystals to grow the link chain while dodging moving firewall barriers.

TECH REQUIREMENTS:

Single file: Pure vanilla JS inside one HTML document, zero external libraries, zero asset downloads.

Rendering: HTML5 2D Canvas with requestAnimationFrame game loop. Smooth LERP interpolation for snake segment movement to create a fluid, organic motion rather than classic blocky steps.

Controls: Arrow keys or WASD for absolute directional steering.

Design style: Cyberpunk dark theme. The grid must warp slightly near the snake's head using localized coordinate displacement. The snake chain features a pulsing gradient texture.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
