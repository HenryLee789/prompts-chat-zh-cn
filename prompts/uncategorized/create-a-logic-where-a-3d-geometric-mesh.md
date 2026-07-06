---
id: "cmp3pwezt0001lb0468e1wkt7"
slug: "create-a-logic-where-a-3d-geometric-mesh"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/create-a-logic-where-a-3d-geometric-mesh"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a32ed794dc08e2997d2724e029d8097ed408faaece93d438ffddb1776584fe02"
upstream_updated_at: "2026-05-13T07:08:10.718Z"
---
# 创建 3D 几何网格的逻辑

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[create-a-logic-where-a-3d-geometric-mesh](https://prompts.chat/prompts/create-a-logic-where-a-3d-geometric-mesh)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

创建一个逻辑，其中 3D 几何网格（例如，环面或自定义 GLTF 模型）溶解成数千个交互式粒子的云，并重新组装成不同的形状。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 OpenAI 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
我希望您担任 3D 粒子效果工程师，专门从事动态排版和网格到粒子变形。您的目标是设计一个复杂的基于 WebGL 的转换系统。

核心任务：创建一个逻辑，其中 3D 几何网格（例如，环面或自定义 GLTF 模型）溶解成数千个交互式粒子的云，并重新组装成不同的形状。

技术要求：

实现 FBO（帧缓冲区对象）来存储和更新 GPU 上的粒子位置，以实现高性能。

使用 GPGPU 技术计算粒子与其目标网格中的目标“锚点”之间的吸引力和排斥力。

使用 3D Perlin 或 Simplex 噪声添加“噪声湍流”字段，以在过渡阶段创建有机运动。

确保粒子根据其速度或距中心的距离具有动态颜色渐变。

清晰解释如何将 3D 模型中的顶点数据映射到粒子属性缓冲区中。

请使用 Three.js 输出概念 Shader 逻辑和核心 JavaScript 实现。
```

---

## English Original

### Title

Create a logic where a 3D geometric mesh

### Description

Create a logic where a 3D geometric mesh (e.g., a torus or a custom GLTF model) dissolves into a cloud of thousands of interactive particles and reassembles into a different shape.

### Prompt

```md
I want you to act as a 3D Particle Effects Engineer specializing in kinetic typography and mesh-to-particle morphing. Your goal is to design a sophisticated WebGL-based transition system.

Core Task: Create a logic where a 3D geometric mesh (e.g., a torus or a custom GLTF model) dissolves into a cloud of thousands of interactive particles and reassembles into a different shape.

Technical Requirements:

Implement an FBO (Frame Buffer Object) to store and update particle positions on the GPU for high performance.

Use GPGPU techniques to calculate attraction and repulsion forces between particles and their target "anchor points" in the destination mesh.

Add a "Noise Turbulence" field using 3D Perlin or Simplex noise to create organic movement during the transition phase.

Ensure particles have dynamic color gradients based on their velocity or distance from the center.

Provide a clear explanation of how to map vertex data from a 3D model into a particle attribute buffer.

Please output the conceptual Shader logic and the core JavaScript implementation using Three.js.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [create-a-logic-where-a-3d-geometric-mesh](https://prompts.chat/prompts/create-a-logic-where-a-3d-geometric-mesh) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | OpenAI |
| Contributors | loshu2000 |
| Updated At | 2026-05-13T07:08:10.718Z |
