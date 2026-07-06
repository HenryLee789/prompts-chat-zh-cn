---
id: "cmjt4s0it0012jj04jw4dehc1"
slug: "mechanical-part-render-to-technical-drawing-converter"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/mechanical-part-render-to-technical-drawing-converter"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "affeb00d7f397a753453bad8fbb972048cda64edd39046f3a05c4abf725c71ea"
upstream_updated_at: "2025-12-30T22:00:22.170Z"
---
# 机械零件渲染到技术绘图转换器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[mechanical-part-render-to-technical-drawing-converter](https://prompts.chat/prompts/mechanical-part-render-to-technical-drawing-converter)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将 3D 机械零件渲染转换为适合制造文档的精确且尺寸完整的技术绘图，符合 ISO 机械绘图标准。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 AI Tools、Data Science、Machine Learning、Computer Vision 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “任务”：“图像到图像”，
  "description": "将 3D 机械零件渲染转换为完整尺寸的制造图纸",
  "input_image": "3d_render_of_pipe_or_mechanical_part.png",
  "prompt": "机械工程图、多视图正投影、前视图、顶视图、侧视图和剖面图、全尺寸技术图纸、以毫米为单位的精确数字测量、直径符号、半径注释、孔计数符号、中心线、剖面剖面线、一致的线宽、ISO 机械绘图标准、白底黑墨、制造就绪文档",
  "negative_prompt": "艺术风格、透视图、柔和的阴影、纹理、逼真的灯光、颜色、装饰渲染、草图、手绘外观、不完整的尺寸",
  “设置”：{
    “型号”：“sdxl”，
    “采样器”：“DPM++ 2M Karras”，
    “步骤”：40，
    “cfg_scale”：6，
    “去噪强度”：0.5，
    “分辨率”：{
      “宽度”：1024，
      “高度”：1024
    }
  },
  "output_expectation": "ISO 风格的机械绘图，具有清晰的尺寸，适合 CNC、铸造或制造参考"
}
```

---

## English Original

### Title

Mechanical Part Render to Technical Drawing Converter

### Description

Convert a 3D mechanical part render into a precise and fully dimensioned technical drawing suitable for manufacturing documentation, adhering to ISO mechanical drafting standards.

### Prompt

```md
{
  "task": "image_to_image",
  "description": "Convert a 3D mechanical part render into a fully dimensioned manufacturing drawing",
  "input_image": "3d_render_of_pipe_or_mechanical_part.png",
  "prompt": "mechanical engineering drawing, multi-view orthographic projection, front view, top view, side view and section view, fully dimensioned technical drawing, precise numeric measurements in millimeters, diameter symbols, radius annotations, hole count notation, center lines, section hatching, consistent line weights, ISO mechanical drafting standard, black ink on white background, manufacturing-ready documentation",
  "negative_prompt": "artistic style, perspective view, soft shading, textures, realistic lighting, colors, decorative rendering, sketch, hand-drawn look, incomplete dimensions",
  "settings": {
    "model": "sdxl",
    "sampler": "DPM++ 2M Karras",
    "steps": 40,
    "cfg_scale": 6,
    "denoising_strength": 0.5,
    "resolution": {
      "width": 1024,
      "height": 1024
    }
  },
  "output_expectation": "ISO-style mechanical drawing with clear dimensions suitable for CNC, casting, or fabrication reference"
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [mechanical-part-render-to-technical-drawing-converter](https://prompts.chat/prompts/mechanical-part-render-to-technical-drawing-converter) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | AI Tools, Data Science, Machine Learning, Computer Vision |
| Contributors | gunebak4n |
| Updated At | 2025-12-30T22:00:22.170Z |
