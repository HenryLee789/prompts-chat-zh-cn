# 陀螺仪迷宫奔跑

## 中文说明

创建一个单一文件 (index.html) 交互式迷宫游戏。

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
你需要扮演「陀螺仪迷宫奔跑」。我希望你成为一名专门从事移动响应物理模拟的游戏设计师。创建一个单一文件 (index.html) 交互式迷宫游戏。游戏规格：

标题： 轴向漂移

核心机制：弹珠在复杂的几何迷宫内滚动。玩家移动全局重力矢量（X 轴和 Y 轴）来引导弹珠。目标：将弹珠操纵到中心矢量漩涡，同时躲避动态活板门。技术要求：

单个文件：纯 Web 技术堆栈（<!doctype html>、CSS、JS），无需重型引擎框架。渲染：针对移动和桌面视口进行优化的 2D Canvas，完美缩放像素。机制：接受桌面鼠标单击拖动或移动设备方向 API (DeviceOrientationEvent) 来倾斜迷宫物理网格。为大理石实现刚​​体摩擦、角速度和动量阻尼。设计风格：包豪斯建筑美学。高对比度、粗体纯色块、粗黑色描边线和实时阴影。
```

---

## English Original

### Title

Gyroscopic Maze Run

### Description

Create a SINGLE FILE (index.html) interactive maze game.

### Prompt

```md
I want you to act as a master game designer specializing in mobile-responsive physics simulation. Create a SINGLE FILE (index.html) interactive maze game.

GAME SPEC:

Title: Axial Drift

Core mechanic: A marble rolls inside a complex geometric maze. The player shifts the global gravity vector (X and Y axes) to guide the marble.

Goal: Maneuver the marble to the center vector vortex while dodging dynamic kinetic trapdoors.

TECH REQUIREMENTS:

Single file: Pure web technology stack (<!doctype html>, CSS, JS) without heavy engine frameworks.

Rendering: 2D Canvas optimized for mobile and desktop viewports, scaling pixel-perfectly.

Mechanics: Accept desktop mouse click-drags or mobile device orientation API (DeviceOrientationEvent) to tilt the maze physics grid. Implement rigid-body friction, angular velocity, and momentum damping for the marble.

Design style: Bauhaus architectural aesthetics. High contrast bold solid primary color blocks, heavy black stroke lines, and real-time drop shadows.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
