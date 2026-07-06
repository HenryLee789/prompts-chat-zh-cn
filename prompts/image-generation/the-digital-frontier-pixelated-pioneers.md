---
id: "cmjhkjbx20001l404l00tc388"
slug: "the-digital-frontier-pixelated-pioneers"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/the-digital-frontier-pixelated-pioneers"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0f897b41cb36072696300630534d134102efaf4c0b2852f8a9c42f46abdb9ace"
upstream_updated_at: "2025-12-22T21:53:36.607Z"
---
# 数字前沿：像素化先驱

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[the-digital-frontier-pixelated-pioneers](https://prompts.chat/prompts/the-digital-frontier-pixelated-pioneers)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

在一个由发光立方体和深紫色虚空组成的梦幻世界中，两名探险家发现了一座悬浮数字岛屿的秘密。 1:1 的电影视图捕捉到在块状 8 位宇宙中寻找生命和光的奇迹。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Nano Banana 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
#版本1.0
根{详细信息，提示：str}：
  详细信息{气氛，camera_angle：str，color_palette，情感，environmental_elements：str，流派：str，灯光，位置：str，subject1，subject2，year：str}：
    氛围[4]：俏皮、梦幻、数字前沿、平静隔离
    camera_angle：“高角度等距视图，强调岛屿的孤立性和块状美学，1:1 电影宽高比。”
    color_palette[4]：饱和的原色，岛屿的活力绿色和蓝色，虚空的深紫色和黑色，像素化的橙色口音
    情感[4]：惊奇、好奇、发现、宁静
    Environmental_elements：“带有发光叶子的块状几何树木，瀑布般的像素化瀑布倾泻而下，漂浮着抽象的数字尘埃，虚空地板上微妙的网格线。”
    类型： 体素艺术
    照明[3]：来自体素本身的发射光，“来自数字虚空的柔和的漫射环境光”，块状人物上的微妙边缘照明
    位置：“一个由发光体素组成的孤独的块状浮岛，悬浮在无限的数字空间中，有稀疏的几何树木和结构。”
    subject1{服装：str，subject_action：str，subject_expression：str}：
      服装：“低多边形冒险家上衣和裤子采用柔和的绿色和棕色，带有体素工具的块状实用腰带，简单、厚实的体素靴子。”
      subject_action：“站立，一只手轻轻地放在嵌入岛上的一个大的、块状的、发光的数据晶体上。”
      subject_expression：“一种微妙而好奇的表情，睁大眼睛，对数字景观充满好奇。”
    subject2{服装：str，subject_action：str，subject_expression：str}：
      服装：“充满活力的电蓝色像素化探险家连身裤，带有对比鲜明的橙色口音，头上戴着厚实的体素护目镜，手腕上戴着一个小块状数字指南针。”
      subject_action：“稍微向前倾，伸出手臂，兴奋地指向岛屿边缘的一群特别充满活力的体素植物群。”
      subject_expression：“一种兴奋、喜悦的表情，嘴巴因敬畏而微微张开。”
    年份：“复古未来主义，8 位美学”
  提示：“您将使用所提供照片中的人物作为主要拍摄对象来进行图像编辑。保留他们的核心相似性。将拍摄对象 1（男性）和拍摄对象 2（女性）想象成块状、低多边形的探险家，在广阔的数字空间中发现一个充满活力、漂浮的体素岛。拍摄对象 1 正在沉思，而拍摄对象 2 则热切地指出像素化植物群中的一个新发现。”
```

---

## English Original

### Title

The Digital Frontier: Pixelated Pioneers

### Description

In a dreamlike world of glowing cubes and deep purple voids, two explorers discover the secrets of a suspended digital island. A 1:1 cinematic view capturing the wonder of finding life and light in a blocky, 8-bit universe.

### Prompt

```md
#version 1.0
root{details,prompt:str}:
  details{atmosphere,camera_angle:str,color_palette,emotion,environmental_elements:str,genre:str,lighting,location:str,subject1,subject2,year:str}:
    atmosphere[4]: Playful,Dreamlike,Digital frontier,Calm isolation
    camera_angle: "High-angle isometric view, emphasizing the island's isolation and the blocky aesthetics, 1:1 cinematic aspect ratio."
    color_palette[4]: Saturated primary colors,vibrant greens and blues for the island,deep purples and blacks for the void,pixelated orange accents
    emotion[4]: Wonder,Curiosity,Discovery,Serenity
    environmental_elements: "Blocky, geometric trees with glowing leaves, pixelated waterfalls cascading into the void, floating abstract digital dust motes, subtle grid lines on the void's floor."
    genre: Voxel Art
    lighting[3]: Emissive light from the voxels themselves,"soft, diffuse ambient light from the digital void",subtle rim lighting on the blocky figures
    location: "A solitary, blocky floating island made of glowing voxels, suspended in an infinite digital void, with sparse, geometric trees and structures."
    subject1{costume:str,subject_action:str,subject_expression:str}:
      costume: "Low-polygon adventurer tunic and trousers in muted greens and browns, a blocky utility belt with voxel tools, simple, chunky voxel boots."
      subject_action: "Standing with one hand lightly resting on a large, blocky, glowing data crystal embedded in the island."
      subject_expression: "A subtle, curious expression, eyes wide with wonder at the digital landscape."
    subject2{costume:str,subject_action:str,subject_expression:str}:
      costume: "A vibrant, pixelated explorer jumpsuit in electric blue, with contrasting orange accents, chunky voxel goggles pushed up on her head, a small blocky digital compass attached to her wrist."
      subject_action: "Leaning forward slightly, arm outstretched, pointing excitedly towards a cluster of particularly vibrant voxel flora at the island's edge."
      subject_expression: "An excited, joyful expression, mouth slightly open in awe."
    year: "Retro-Futuristic, 8-bit aesthetic"
  prompt: "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Imagine Subject 1 (male) and Subject 2 (female) as blocky, low-polygon explorers discovering a vibrant, floating voxel island in a vast digital void. Subject 1 is contemplative, while Subject 2 is eagerly pointing out a new discovery amidst the pixelated flora."
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [the-digital-frontier-pixelated-pioneers](https://prompts.chat/prompts/the-digital-frontier-pixelated-pioneers) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Nano Banana |
| Contributors | ersinkoc |
| Updated At | 2025-12-22T21:53:36.607Z |
