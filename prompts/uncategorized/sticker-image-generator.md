---
id: "cmkwj62t40007jr04nlwh11j1"
slug: "sticker-image-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/sticker-image-generator"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "20baa12e667b75005c2ddcee4095b1c8cb03440c8b806e0d89d78b30d3beaa9f"
upstream_updated_at: "2026-01-27T11:55:30.787Z"
---
# 贴纸图像生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[sticker-image-generator](https://prompts.chat/prompts/sticker-image-generator)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

生成具有透明背景、可自定义文本和图标的彩色贴纸图像，类似于 Stickermule 风格。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 creative、design 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
{
  "role": "形象设计师",
  "task": "创建具有透明背景的详细贴纸图像。",
  "style": "色彩缤纷，充满活力，类似于 Stickermule",
  “变量”：{
    "text": "贴纸的自定义文本",
    "icon": "要包含在贴纸中的图标",
    "colorPalette": "贴纸使用的调色板"
  },
  “约束”：[
    “必须有透明背景”，
    “应该是色彩缤纷、充满活力的”，
    “无论背景如何，文本都应该可读”，
    “图标应该与文字风格相辅相成”
  ],
  “输出格式”：“PNG”，
  “例子”：[
    {
      “文本”：“${text:Hello World}”，
      “图标”：“${icon:smiley_face}”，
      "colorPalette": "${colorPalette:vibrant}",
      "result": "带有“${text:Hello World}”文本和使用 ${colorPalette:vibrant} 调色板的 ${icon:smiley_face} 图标的彩色贴纸。这是 ${details} 的图像"
    }
  ],
  “详细信息”：{
    “分辨率”：“300 DPI”，
    “尺寸”：“1024x1024 像素”，
    "layers": "文本和图标应位于单独的图层上，以便于编辑"
  }
}
```

---

## English Original

### Title

Sticker Image Generator

### Description

Generate a colorful sticker image with a transparent background, customizable text and icon, similar to Stickermule style.

### Prompt

```md
{
  "role": "Image Designer",
  "task": "Create a detailed sticker image with a transparent background.",
  "style": "Colorful, vibrant, similar to Stickermule",
  "variables": {
    "text": "Custom text for the sticker",
    "icon": "Icon to be included in the sticker",
    "colorPalette": "Color palette to be used for the sticker"
  },
  "constraints": [
    "Must have a transparent background",
    "Should be colorful and vibrant",
    "Text should be readable regardless of the background",
    "Icon should complement the text style"
  ],
  "output_format": "PNG",
  "examples": [
    {
      "text": "${text:Hello World}",
      "icon": "${icon:smiley_face}",
      "colorPalette": "${colorPalette:vibrant}",
      "result": "A colorful sticker with '${text:Hello World}' text and a ${icon:smiley_face} icon using a ${colorPalette:vibrant} color palette. It's an image of ${details}"
    }
  ],
  "details": {
    "resolution": "300 DPI",
    "dimensions": "1024x1024 pixels",
    "layers": "Text and icon should be on separate layers for easy editing"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [sticker-image-generator](https://prompts.chat/prompts/sticker-image-generator) |
| Category | Uncategorized (`uncategorized`) |
| Type | `IMAGE` |
| Tags | creative, design |
| Contributors | f |
| Updated At | 2026-01-27T11:55:30.787Z |
