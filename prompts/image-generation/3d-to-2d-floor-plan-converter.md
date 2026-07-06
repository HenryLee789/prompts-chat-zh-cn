---
id: "cmjt4n3000001ky04k1pv255w"
slug: "3d-to-2d-floor-plan-converter"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/3d-to-2d-floor-plan-converter"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "8644de66c746aa2c7d4b7ab1c87e6fa18d24a4be7e2147980ebc38f8014ea41e"
upstream_updated_at: "2026-01-01T23:31:20.545Z"
---
# 3D 到 2D 平面图转换器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[3d-to-2d-floor-plan-converter](https://prompts.chat/prompts/3d-to-2d-floor-plan-converter)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将带家具的 3D 室内渲染转换为详细且精确的 2D 建筑平面图。该工具非常适合房地产列表或建筑文档，提供了干净的矢量风格蓝图，其中包含明确定义的房间和空间。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Interior Design、Computer Vision 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “任务”：“图像到图像”，
  "description": "将带家具的 3D 室内渲染转换为干净的 2D 建筑平面图",
  "input_image": "3d_render_of_apartment_interior.png",
  "prompt": "自上而下的 2D 建筑平面图、黑白技术图、干净的矢量风格线条、精确的墙厚、明确定义的房间、带有房间名称和平方米面积的标记空间、带有摆动弧线的门、显示为墙壁断裂的窗户、最小阴影、无透视、正投影、建筑蓝图风格、专业住宅平面图，类似于 CAD 绘图",
  "negative_prompt": "3d 透视、等轴测视图、真实照明、阴影、纹理、家具渲染、人物、深度、照片写实、颜色、渐变、软边、艺术素描、手绘风格",
  “设置”：{
    “型号”：“sdxl”，
    “采样器”：“DPM++ 2M Karras”，
    “步骤”：30，
    “cfg_scale”：7，
    “去噪强度”：0.65，
    “分辨率”：{
      “宽度”：1024，
      “高度”：1024
    }
  },
  "output_expectation": "类似于建筑平面图的平面二维平面图，适用于房地产清单或施工文件"
}
```

---

## English Original

### Title

3D to 2D Floor Plan Converter

### Description

Convert a furnished 3D interior render into a detailed and precise 2D architectural floor plan. Ideal for real estate listings or construction documents, this tool offers a clean vector-style blueprint with clearly defined rooms and spaces.

### Prompt

```md
{
  "task": "image_to_image",
  "description": "Convert a furnished 3D interior render into a clean 2D architectural floor plan drawing",
  "input_image": "3d_render_of_apartment_interior.png",
  "prompt": "top-down 2D architectural floor plan, black and white technical drawing, clean vector-style lines, precise wall thickness, clearly defined rooms, labeled spaces with room names and square meter areas, doors with swing arcs, windows shown as breaks in walls, minimal shading, no perspective, orthographic projection, architectural blueprint style, professional residential floor plan, similar to CAD drawing",
  "negative_prompt": "3d perspective, isometric view, realistic lighting, shadows, textures, furniture rendering, people, depth, photorealism, colors, gradients, soft edges, artistic sketch, hand drawn style",
  "settings": {
    "model": "sdxl",
    "sampler": "DPM++ 2M Karras",
    "steps": 30,
    "cfg_scale": 7,
    "denoising_strength": 0.65,
    "resolution": {
      "width": 1024,
      "height": 1024
    }
  },
  "output_expectation": "flat 2D floor plan similar to architectural plan drawings, suitable for real estate listings or construction documents"
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [3d-to-2d-floor-plan-converter](https://prompts.chat/prompts/3d-to-2d-floor-plan-converter) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Interior Design, Computer Vision |
| Contributors | gunebak4n |
| Updated At | 2026-01-01T23:31:20.545Z |
