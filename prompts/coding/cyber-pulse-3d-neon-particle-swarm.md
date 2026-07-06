---
id: "cmoc2mkbm0001jr04k3z0vxrc"
slug: "cyber-pulse-3d-neon-particle-swarm"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/cyber-pulse-3d-neon-particle-swarm"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6b05aa6724d85e1dccf4d9cc3e691e082a07c0d50d853a52b3798627c26212d9"
upstream_updated_at: "2026-04-23T22:46:34.445Z"
---
# Cyber​​-Pulse：3D 霓虹粒子群

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[cyber-pulse-3d-neon-particle-swarm](https://prompts.chat/prompts/cyber-pulse-3d-neon-particle-swarm)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

快节奏的街机“躲避游戏”，设置在数字空间中。玩家控制核心能量火花，穿过由 10,000 多个蓝色和紫色粒子组成的流体状星云，这些粒子会对玩家的存在做出反应。

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 OpenAI 等主题快速生成可复用结果。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
游戏概念：以数字空间为背景的快节奏街机“躲避游戏”。玩家控制核心能量火花，穿过由 10,000 多个蓝色和紫色粒子组成的流体状星云，这些粒子会对玩家的存在做出反应。
技术提示：
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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [cyber-pulse-3d-neon-particle-swarm](https://prompts.chat/prompts/cyber-pulse-3d-neon-particle-swarm) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | OpenAI |
| Contributors | loshu2000 |
| Updated At | 2026-04-23T22:46:34.445Z |
