# 机械零件渲染到技术绘图转换器

## 中文说明

将 3D 机械零件渲染转换为适合制造文档的精确且尺寸完整的技术绘图，符合 ISO 机械绘图标准。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 AI Tools、Data Science、Machine Learning 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

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

输出要求：
- 按原 prompt 要求的格式输出。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
