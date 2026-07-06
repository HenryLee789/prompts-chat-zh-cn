# 贴纸图像生成器

## 中文说明

生成具有透明背景、可自定义文本和图标的彩色贴纸图像，类似于 Stickermule 风格。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 creative、design 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
