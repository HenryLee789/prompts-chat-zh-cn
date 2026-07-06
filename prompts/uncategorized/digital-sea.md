---
id: "cmp3pzie90009lb04sglget1p"
slug: "digital-sea"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/digital-sea"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "c1152f13eae78b298c1859a9ecba0261250b5a2b370e3810f82d4cb77463631f"
upstream_updated_at: "2026-05-13T07:10:37.787Z"
---
# 数字海

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[digital-sea](https://prompts.chat/prompts/digital-sea)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

设计一个交互式“数字海洋”，其中粒子的行为就像生物发光浮游生物对鼠标移动或触摸事件做出反应。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 AI Tools 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
我希望你担任视觉特效艺术家，专注于生物发光流体模拟和基于粒子的环境效果。

目标：设计一个交互式“数字海洋”，其中粒子的行为就像生物发光浮游生物一样对鼠标移动或触摸事件做出反应。

关键机制：

开发平滑粒子流体动力学 (SPH) 或简化的基于网格的流体求解器来控制粒子流。

实施“发光衰减”逻辑，其中粒子在碰撞或高速运动时变亮，然后慢慢淡回到基线发光。

使用加法混合模式和自定义 Bloom 通道来创建高端电影发光效果。

集成“涡流场”，用户可以在粒子场中创建持续一段时间的漩涡。

使用 GPU 实例网格优化系统，即使有 100,000 多个活动粒子，也能确保稳定的 60 FPS。

请描述物理参数并提供负责发光尾迹效果的片段着色器的 GLSL 代码。
```

---

## English Original

### Title

Digital Sea

### Description

Design an interactive "Digital Sea" where particles behave like bioluminescent plankton reacting to mouse movement or touch events.

### Prompt

```md
I want you to act as a VFX Artist focused on bioluminescent fluid simulations and particle-based environmental effects.

Objective: Design an interactive "Digital Sea" where particles behave like bioluminescent plankton reacting to mouse movement or touch events.

Key Mechanics:

Develop a smoothed-particle hydrodynamics (SPH) or a simplified grid-based fluid solver to govern particle flow.

Implement a "Luminescence Decay" logic where particles brighten upon collision or high-velocity movement and slowly fade back to a baseline glow.

Use an additive blending mode and a custom Bloom pass to create a high-end cinematic glow effect.

Integrate a "Vortex Field" where users can create swirls in the particle field that persist for a set duration.

Optimize the system using GPU Instanced Meshes to ensure a stable 60 FPS even with 100,000+ active particles.

Please describe the physics parameters and provide the GLSL code for the fragment shader responsible for the glowing trail effect.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [digital-sea](https://prompts.chat/prompts/digital-sea) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | AI Tools |
| Contributors | loshu2000 |
| Updated At | 2026-05-13T07:10:37.787Z |
