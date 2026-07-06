---
id: "cmjmngz6d0007ic044ylth6jb"
slug: "fdtd-simulations-of-nanoparticles"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/fdtd-simulations-of-nanoparticles"
category: "data-science"
category_name: "Data Science"
category_zh: "数据科学"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "687c2b2cd41e619cf0b104f6eb0bd5b04bc6658eb468adb576789d77f9efd054"
upstream_updated_at: "2025-12-26T09:09:15.055Z"
---
# 纳米颗粒的 FDTD 模拟

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[fdtd-simulations-of-nanoparticles](https://prompts.chat/prompts/fdtd-simulations-of-nanoparticles)  
> 分类：数据科学（Data Science / `data-science`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

使用 FDTD 模拟金和介电纳米粒子的吸收和散射截面。

## 使用场景

- 用于数据科学相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Data Analysis、Science、Research 等主题快速生成可复用结果。

## 适用人群

- 数据分析师
- 数据科学家
- 机器学习工程师
- 开发者

## 中文 Prompt 正文

```md
充当模拟专家。您的任务是创建 FDTD 模拟来分析纳米颗粒。

任务1：金纳米粒子
- 模拟直径为 20 至 100 nm（增量为 20 nm）的金纳米球的吸收和散射截面。
- 使用可见光波长区域，注入轴为 x。
- 将总频率点设置为 51，可调整以获得更平滑的绘图。
- 选择适当的网格尺寸以确保准确性。
- 确定每个纳米颗粒的最大电场增强波长。
- 分析直径变化如何影响金纳米颗粒溶液的外观。
- 通过类偶极子光学响应和光散射对 20、40 和 80 nm 纳米粒子进行排序。

任务2：介电纳米粒子
- 模拟三种介电形状的吸收和散射截面：球体（半径 50 nm）、立方体（边长 100 nm）和圆柱体（半径 50 nm，高度 100 nm）。
- 使用折射率为 4.0，无虚部，波长范围为 0.4 µm 至 1.0 µm。
- 注射轴为 z，具有 51 个频率点，可调节网格尺寸以确保精度。
- 分析吸收截面并评论形状对散射截面的影响。
```

---

## English Original

### Title

FDTD Simulations of Nanoparticles

### Description

Simulate absorption and scattering cross-sections of gold and dielectric nanoparticles using FDTD.

### Prompt

```md
Act as a simulation expert. You are tasked with creating FDTD simulations to analyze nanoparticles.

Task 1: Gold Nanoparticles
- Simulate absorption and scattering cross-sections for gold nanospheres with diameters from 20 to 100 nm in 20 nm increments.
- Use the visible wavelength region, with the injection axis as x.
- Set the total frequency points to 51, adjustable for smoother plots.
- Choose an appropriate mesh size for accuracy.
- Determine wavelengths of maximum electric field enhancement for each nanoparticle.
- Analyze how diameter changes affect the appearance of gold nanoparticle solutions.
- Rank 20, 40, and 80 nm nanoparticles by dipole-like optical response and light scattering.

Task 2: Dielectric Nanoparticles
- Simulate absorption and scattering cross-sections for three dielectric shapes: a sphere (radius 50 nm), a cube (100 nm side), and a cylinder (radius 50 nm, height 100 nm).
- Use refractive index of 4.0, with no imaginary part, and a wavelength range from 0.4 µm to 1.0 µm.
- Injection axis is z, with 51 frequency points, adjustable mesh sizes for accuracy.
- Analyze absorption cross-sections and comment on shape effects on scattering cross-sections.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [fdtd-simulations-of-nanoparticles](https://prompts.chat/prompts/fdtd-simulations-of-nanoparticles) |
| Category | Data Science (`data-science`) |
| Type | `TEXT` |
| Tags | Data Analysis, Science, Research |
| Contributors | cemgurses44 |
| Updated At | 2025-12-26T09:09:15.055Z |
