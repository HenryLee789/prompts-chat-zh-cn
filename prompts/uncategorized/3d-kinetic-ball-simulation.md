# 3D 动球模拟

## 中文说明

你的任务是生成 3D Kinetic Bounce Arena 的单个文件 (index.html) 实现。

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
你需要扮演「3D 动球模拟」。我希望你成为一名专业的前端游戏工程师，专门研究单文件 HTML5 游戏。你的任务是生成 3D Kinetic Bounce Arena 的单个文件 (index.html) 实现。游戏规格：

名称: 动能弹跳竞技场

核心机制：将发光球体发射到装有 25 个较小的物理驱动粒子的旋转 3D 圆柱容器中。目标：通过鼠标移动调整容器的倾斜度，保持主球体弹跳。技术要求：

单个文件：<!doctype html>，使用 p5.js 内联 <style> 和 <script>（通过 CDN 加载）。渲染：p5.js 中的 WebGL 模式，600x600 画布位于页面中央。物理：对圆柱壁和球体到粒子的动量传递实施 3D 边界框碰撞检测。粒子必须留下褪色的彩色运动轨迹。设计风格：黑暗合成波美学，具有发光霓虹灯材料、发光粒子矢量和平滑的自动相机变焦缩放。
```

---

## English Original

### Title

3D Kinetic Ball Simulation

### Description

Your task is to produce a SINGLE FILE (index.html) implementation of a 3D Kinetic Bounce Arena.

### Prompt

```md
I want you to act as an expert front-end game engineer specializing in single-file HTML5 games. Your task is to produce a SINGLE FILE (index.html) implementation of a 3D Kinetic Bounce Arena.

GAME SPEC:

Title: Kinetic Bounce Arena

Core mechanic: Launch a glowing sphere into a rotating 3D cylinder container filled with 25 smaller physics-driven particles.

Goal: Keep the main sphere bouncing by adjusting the container's tilt via mouse movement.

TECH REQUIREMENTS:

Single file: <!doctype html> with inline <style> and <script> using p5.js (loaded via CDN).

Rendering: WebGL mode in p5.js, 600x600 canvas centered on page.

Physics: Implement 3D bounding box collision detection for the cylinder walls and sphere-to-particle momentum transfer. Particles must leave fading colorful motion trails.

Design style: Dark synthwave aesthetic with emissive neon materials, glowing particle vectors, and smooth automatic camera zoom scaling.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
