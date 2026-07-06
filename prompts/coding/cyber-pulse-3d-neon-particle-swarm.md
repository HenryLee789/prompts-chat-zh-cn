# Cyber​​-Pulse：3D 霓虹粒子群

## 中文说明

快节奏的街机“躲避游戏”，设置在数字空间中。玩家控制核心能量火花，穿过由 10,000 多个蓝色和紫色粒子组成的流体状星云，这些粒子会对玩家的存在做出React。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 围绕 OpenAI 等主题生成结构化结果

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

```md
游戏概念：以数字空间为背景的快节奏街机“躲避游戏”。玩家控制核心能量火花，穿过由 10,000 多个蓝色和紫色粒子组成的流体状星云，这些粒子会对玩家的存在做出React。技术提示：
创建一个具有包含 15,000 个粒子的点系统的 Three.js 场景。使用自定义 ShaderMaterial 实现发光效果。实现粒子飞离鼠标光标的斥力逻辑。

JavaScript
// 核心斥力数学
让 dist = molecularPos.distanceTo(mousePos);
如果（距离 < 5）{
  Direction.subVectors(articlePos, mousePos).normalize();
  粒子Pos.addScaledVector（方向，0.2）；
}
包括用于后处理的 BloomPass 并通过以下方式确保 60FPS 性能
```

---

## English Original

### Title

Cyber-Pulse: 3D Neon Particle Swarm

### Description

A fast-paced arcade "dodge-em-up" set in a digital void. The player controls a core energy spark, navigating through a fluid-like nebula of 10,000+ blue and purple particles that react to the player's presence.

### Prompt

```md
Game Concept: A fast-paced arcade "dodge-em-up" set in a digital void. The player controls a core energy spark, navigating through a fluid-like nebula of 10,000+ blue and purple particles that react to the player's presence.
Technical Prompt:
Create a Three.js scene featuring a Points system with 15,000 particles. Use a custom ShaderMaterial for a glow effect. Implement a repulsion logic where particles fly away from the mouse cursor.

JavaScript
// Core repulsion math
let dist = particlePos.distanceTo(mousePos);
if (dist < 5) {
  direction.subVectors(particlePos, mousePos).normalize();
  particlePos.addScaledVector(direction, 0.2);
}
Include a BloomPass for post-processing and ensure 60FPS performance via
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
