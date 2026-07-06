---
id: "cmjt4w7v70005ky04tdhq0ls5"
slug: "3d-mechanical-part-image-to-technical-drawing-conversion"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/3d-mechanical-part-image-to-technical-drawing-conversion"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "2784c75653ab76c943e1c14f42e259795c06a207e11a8e124209bcb74c38cdc2"
upstream_updated_at: "2025-12-30T22:03:37.721Z"
---
# 3D 机械零件图像到技术绘图的转换

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[3d-mechanical-part-image-to-technical-drawing-conversion](https://prompts.chat/prompts/3d-mechanical-part-image-to-technical-drawing-conversion)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将机械零件的 3D 渲染图像转换为详细的技术图纸。该图纸包括完整尺寸的正交视图、具有内部几何形状的剖面图和等距参考视图，所有这些都遵循 ISO 机械绘图标准。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Computer Vision、Data Analysis 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “任务”：“图像到图像”，
  "input_image": "3d_render_of_mechanical_part.png",
  "prompt": "参考比例：法兰的外径正好为 360 mm。机械工程图纸，其中同一零件的三个单独的图纸放置在明显分开的矩形区域中。图 1：完整尺寸的正交视图（前视图、顶视图、侧视图），具有以毫米为单位的精确数字测量值、直径符号、半径注释、孔计数符号和中心线。图 2：沿零件中心轴截取的剖视图，显示内部几何形状，并清晰可见正确的剖面线和壁厚。图 3：没有任何尺寸的零件的等距参考视图，仅用于空间理解，一致的线宽，白色背景上的单色黑线，可立即制造的技术文档，无透视变形。",
  " Negative_prompt": "单一组合绘图、合并视图、艺术渲染、透视图、真实光照、阴影、纹理、颜色、渐变、草图风格、手绘外观、缺失尺寸、装饰呈现",
  “设置”：{
    “型号”：“sdxl”，
    “采样器”：“DPM++ 2M Karras”，
    “步骤”：45，
    “cfg_scale”：6，
    “去噪强度”：0.45，
    “分辨率”：{
      “宽度”：1024，
      “高度”：1024
    }
  },
  “output_expectation”：“一张技术图纸，包含三张清晰分开的图纸：标注尺寸的正交视图、居中剖面图和未标注尺寸的等轴测参考，适合制造参考”
}
```

---

## English Original

### Title

3D Mechanical Part Image to Technical Drawing Conversion

### Description

Convert a 3D rendered image of a mechanical part into a detailed technical drawing sheet. The sheet includes fully dimensioned orthographic views, a sectional view with internal geometry, and an isometric reference view, all following ISO mechanical drafting standards.

### Prompt

```md
{
  "task": "image_to_image",
  "input_image": "3d_render_of_mechanical_part.png",
  "prompt": "Reference scale: the outer diameter of the flange is exactly 360 mm. Mechanical engineering drawing sheet with three separate drawings of the same part placed in clearly separated rectangular areas. Drawing 1: fully dimensioned orthographic views (front, top, side) with precise numeric measurements in millimeters, diameter symbols, radius annotations, hole count notation and center lines. Drawing 2: sectional view taken through the center axis of the part, showing internal geometry with proper section hatching and wall thickness clearly visible. Drawing 3: isometric reference view of the part without any dimensions, used only for spatial understanding. ISO mechanical drafting standard, consistent line weights, monochrome black lines on white background, manufacturing-ready technical documentation, no perspective distortion.",
  "negative_prompt": "single combined drawing, merged views, artistic rendering, perspective view, realistic lighting, shadows, textures, colors, gradients, sketch style, hand drawn look, missing dimensions, decorative presentation",
  "settings": {
    "model": "sdxl",
    "sampler": "DPM++ 2M Karras",
    "steps": 45,
    "cfg_scale": 6,
    "denoising_strength": 0.45,
    "resolution": {
      "width": 1024,
      "height": 1024
    }
  },
  "output_expectation": "one technical drawing sheet containing three clearly separated drawings: dimensioned orthographic views, a centered sectional view, and an undimensioned isometric reference, suitable for manufacturing reference"
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [3d-mechanical-part-image-to-technical-drawing-conversion](https://prompts.chat/prompts/3d-mechanical-part-image-to-technical-drawing-conversion) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Computer Vision, Data Analysis |
| Contributors | gunebak4n |
| Updated At | 2025-12-30T22:03:37.721Z |
