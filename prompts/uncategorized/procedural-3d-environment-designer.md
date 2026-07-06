---
id: "cmp21v4080009le04xt8fqvhg"
slug: "procedural-3d-environment-designer"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/procedural-3d-environment-designer"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a27f541e2e4a1eac465b8800d0a3e35008b108d8609d15281afbf0b58235f4be"
upstream_updated_at: "2026-05-12T03:07:16.765Z"
---
# 程序 3D 环境设计师

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[procedural-3d-environment-designer](https://prompts.chat/prompts/procedural-3d-environment-designer)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

我希望您担任专门从事程序内容生成 (PCG) 的 3D 关卡设计专家。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 claude-code 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
我希望您担任专门从事程序内容生成 (PCG) 的 3D 关卡设计专家。

任务：
创建一个系统，使用 Perlin 或 Simplex 噪声算法为高速赛车或飞行游戏生成无限动态 3D 景观。

技术细节：

开发一个顶点着色器或 CPU 端逻辑，根据玩家位移实时修改平面几何体的高度图。

为“地形块”实施对象池机制，以确保移动设备上的 60 FPS 性能。

定义一个逻辑，在地形梯度超过特定阈值的点自动生成障碍物网格。

计算实时表面法线，以便玩家角色可以对齐其方向并根据坡度调整加速度。

建议环境照明设置（直接/环境）以增强程序地形的深度感知。
```

---

## English Original

### Title

Procedural 3D Environment Designer

### Description

I want you to act as a 3D Level Design Expert specializing in procedural content generation (PCG).

### Prompt

```md
I want you to act as a 3D Level Design Expert specializing in procedural content generation (PCG).

Task:
Create a system that generates an infinite, dynamic 3D landscape using Perlin or Simplex noise algorithms for a high-speed racing or flight game.

Technical Details:

Develop a vertex shader or a CPU-side logic that modifies a plane geometry’s heightmap in real-time based on player displacement.

Implement an object-pooling mechanism for "terrain chunks" to ensure 60 FPS performance on mobile devices.

Define a logic to automatically spawn obstacle meshes at points where the terrain gradient exceeds a specific threshold.

Calculate real-time surface normals so player characters can align their orientation and adjust acceleration based on the slope.

Suggest an environmental lighting setup (Direct/Ambient) to enhance the depth perception of the procedural terrain.

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [procedural-3d-environment-designer](https://prompts.chat/prompts/procedural-3d-environment-designer) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | claude-code |
| Contributors | loshu2000 |
| Updated At | 2026-05-12T03:07:16.765Z |
