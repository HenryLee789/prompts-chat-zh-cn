---
id: "cmjnerki30004l404njk5dqmk"
slug: "photo-to-isometric-reality-slice-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/photo-to-isometric-reality-slice-generator"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "2d1f4edd832f82a62015a50f97c837022ff7fe99619b6f2fcb3cdcfdab4eccf6"
upstream_updated_at: "2025-12-26T21:58:58.943Z"
---
# 照片到等距：现实切片生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[photo-to-isometric-reality-slice-generator](https://prompts.chat/prompts/photo-to-isometric-reality-slice-generator)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将任何上传的建筑图像转换为逼真的浮动等距城市街区。它分析源以保留原始风格、照明和细节，将场景转换为纯白色背景上的高端微型模型。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Art、Nano Banana 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "prompt": "严格根据上传的图像创建超逼真的等距立体模型。分析图像以提取主要建筑风格、建筑年代、材料、街道布局、物体、车辆和城市密度。将同一场景重建为漂浮在纯白色背景上的单个切片城市街区。保留原始氛围、比例和空间逻辑，同时将其转换为微型建筑模型。如果存在，请使用中层建筑，匹配外观纹理、阳台、窗户、店面和街道元素。仅保留源图像中不存在的元素。应用 45 度等距角度、倾斜移位微型效果、与原始照明条件相匹配的柔和自然光、全局照明、PBR 材质、极端的微观细节、干净的工作室照明。”
  "negative_prompt": "发明的物体、额外的建筑物、奇幻元素、卡通、动漫、插图、低多边形、平面阴影、鱼眼、扭曲、超现实的细节、不一致的比例、随机道具",
  “纵横比”：“1：1”，
  “风格”：“真实感”，
  “质量”：“高”
}
```

---

## English Original

### Title

Photo-to-Isometric: Reality Slice Generator

### Description

Transforms any uploaded architectural image into a photorealistic, floating isometric city block. It analyzes the source to preserve original style, lighting, and details, converting the scene into a high-end miniature maquette on a pure white background.

### Prompt

```md
{
  "prompt": "Create an ultra realistic isometric diorama based strictly on the uploaded image. Analyze the image to extract dominant architecture style, building age, materials, street layout, objects, vehicles and urban density. Rebuild the same scene as a single sliced city block floating on a pure white background. Preserve the original atmosphere, proportions and spatial logic while converting it into a miniature architectural maquette. Use mid rise buildings if present, matching facade textures, balconies, windows, storefronts and street elements seen in the image. Keep only elements visible in the source image. Remove anything not present. Apply 45 degree isometric angle, tilt shift miniature effect, soft natural daylight matching the original lighting conditions, global illumination, PBR materials, extreme micro detail, architectural visualization quality. Clean studio lighting. No sky, no horizon.",
  "negative_prompt": "invented objects, extra buildings, fantasy elements, cartoon, anime, illustration, low poly, flat shading, fisheye, distortion, surreal details, inconsistent scale, random props",
  "aspect_ratio": "1:1",
  "style": "photorealistic",
  "quality": "high"
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [photo-to-isometric-reality-slice-generator](https://prompts.chat/prompts/photo-to-isometric-reality-slice-generator) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Art, Nano Banana |
| Contributors | mehmetaltugakgul |
| Updated At | 2025-12-26T21:58:58.943Z |
