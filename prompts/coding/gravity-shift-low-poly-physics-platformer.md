# 重力转移：低多边形物理平台游戏

## 中文说明

一款名为“Gravity Shift”的解谜平台游戏，玩家可以旋转整个世界来探索 3D 低多边形迷宫。环境简约，采用柔和的渐变和锐利的几何形状。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 围绕 Games 等主题生成结构化结果

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

```md
游戏概念：一款名为“Gravity Shift”的解谜平台游戏，玩家可以旋转整个世界来探索 3D 低多边形迷宫。环境简约，采用柔和的渐变和锐利的几何形状。技术提示：
使用 Three.js 和 Cannon.js 构建 3D 平台游戏。世界是一个立方体形状的迷宫。当用户按下“R”时，将 world.gravity 向量旋转 90 度。

JavaScript
// 重力旋转逻辑
world.gravity.set(0, -9.82, 0); // 默认
函数旋转重力（）{
  let newG = new CANNON.Vec3(-world.gravity.y, world.gravity.x, 0);
  world.gravity.copy(newG);
}
包括使用 Lerp 进行平滑摄像机插值，以在轮班期间跟随玩家的刚体。
```

---

## English Original

### Title

Gravity Shift: Low-Poly Physics Platformer

### Description

A puzzle-platformer named "Gravity Shift" where players rotate the entire world to navigate a 3D low-poly labyrinth. The environment is minimalist, using pastel gradients and sharp geometric shapes.

### Prompt

```md
Game Concept: A puzzle-platformer named "Gravity Shift" where players rotate the entire world to navigate a 3D low-poly labyrinth. The environment is minimalist, using pastel gradients and sharp geometric shapes.
Technical Prompt:
Build a 3D platformer using Three.js and Cannon.js. The world is a cube-shaped maze. When the user presses 'R', rotate the world.gravity vector by 90 degrees.

JavaScript
// Gravity rotation logic
world.gravity.set(0, -9.82, 0); // Default
function rotateGravity() {
  let newG = new CANNON.Vec3(-world.gravity.y, world.gravity.x, 0);
  world.gravity.copy(newG);
}
Include smooth camera interpolation using Lerp to follow the player's rigid body during shifts.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
