# 超高分辨率人像修复

## 中文说明

提示“超高分辨率人像修复”引导用户完成将旧的、模糊的、损坏的人像照片转变为现代的超高分辨率图像的过程。它涉及超分辨率增强、去模糊、纹理增强、色彩校正以及应用专业数字工作室灯光效果等步骤。目标是实现逼真且超详细的输出，同时保持真实性并避免过度处理。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 AI Tools、Computer Vision、Art 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "prompt": "恢复并全面增强这张旧的、模糊的、褪色的和损坏的肖像照片。将其转换为超高分辨率、逼真的图像，具有类似 HDR 的照明、自然景深、专业的数字工作室灯光效果和逼真的散景。应用超分辨率增强功能来重建低分辨率或模糊区域中丢失的细节。平滑皮肤和纹理，同时保留所有微观细节，如单独的发丝、睫毛、毛孔、面部特征和织物完全消除噪点、划痕、灰尘和伪影，保持逼真的阴影、反射和灯光动态，同时保持背景柔和模糊。如果是黑白，则以适当的对比度恢复准确的灰度色调。输出应该是专业、现代、超高质量、逼真的工作室风格。肖像，保留真实性、比例和情绪，完全平滑但超详细。",
  “步骤”：[
    {
      “步骤”：1、
      "action": "超分辨率",
      "description": "将图像升级到超高分辨率（8K 或更高）以重新创建丢失的细节。"
    },
    {
      “步骤”：2，
      "action": "去模糊和修复",
      "description": "修复照片中的模糊、运动伪影、划痕、灰尘和其他损坏。"
    },
    {
      “步骤”：3，
      "action": "纹理和微观细节增强",
      “描述”：“使皮肤和表面光滑，同时保留毛孔、发丝、睫毛和织物线等超微观细节。”
    },
    {
      “步骤”：4，
      "action": "色彩校正",
      “description”：“自然地调整颜色，保持逼真的对比度和亮度，模拟现代相机色彩科学。”
    },
    {
      “步骤”：5，
      "action": "HDR 灯光和数字工作室效果",
      “描述”：“应用类似 HDR 的照明、专业数字工作室照明、逼真的阴影、反射以及具有柔和散景背景的受控景深。”
    },
    {
      “步骤”：6，
      "action": "背景和细节恢复",
      “description”：“确保背景元素、服装和纹理清晰、超详细且干净，同时保留自然模糊的深度。”
    },
    {
      “步骤”：7，
      "action": "灰度调整（如果适用）",
      "description": "以准确的灰度色调和适当的对比度恢复黑白肖像。"
    },
    {
      “步骤”：8，
      "action": "最终抛光",
      “description”：“避免过度处理，保持自然真实的外观，保留原始情绪和比例，确保超平滑且超详细的输出。”
    }
  ]
}
```

---

## English Original

### Title

Ultra-High-Resolution Portrait Restoration

### Description

The prompt "Ultra-High-Resolution Portrait Restoration" guides the user through the process of transforming an old, blurry, and damaged portrait photograph into a modern, ultra-high-resolution image. It involves steps like super-resolution enhancement, deblurring, texture enhancement, color correction, and applying professional digital studio lighting effects. The goal is to achieve a photorealistic and ultra-detailed output while maintaining authenticity and avoiding over-processing.

### Prompt

```md
{
  "prompt": "Restore and fully enhance this old, blurry, faded, and damaged portrait photograph. Transform it into an ultra-high-resolution, photorealistic image with HDR-like lighting, natural depth-of-field, professional digital studio light effects, and realistic bokeh. Apply super-resolution enhancement to recreate lost details in low-resolution or blurred areas. Smooth skin and textures while preserving all micro-details such as individual hair strands, eyelashes, pores, facial features, and fabric threads. Remove noise, scratches, dust, and artifacts completely. Correct colors naturally with accurate contrast and brightness. Maintain realistic shadows, reflections, and lighting dynamics, emphasizing the subject while keeping the background softly blurred. Ensure every element, including clothing and background textures, is ultra-detailed and lifelike. If black-and-white, restore accurate grayscale tones with proper contrast. Avoid over-processing or artificial look. Output should be a professional, modern, ultra-high-quality, photorealistic studio-style portrait, preserving authenticity, proportions, and mood, completely smooth yet ultra-detailed.",
  "steps": [
    {
      "step": 1,
      "action": "Super-resolution",
      "description": "Upscale the image to ultra-high-resolution (8K or higher) to recreate lost details."
    },
    {
      "step": 2,
      "action": "Deblur and repair",
      "description": "Fix blur, motion artifacts, scratches, dust, and other damage in the photo."
    },
    {
      "step": 3,
      "action": "Texture and micro-detail enhancement",
      "description": "Smooth skin and surfaces while preserving ultra-micro-details such as pores, hair strands, eyelashes, and fabric threads."
    },
    {
      "step": 4,
      "action": "Color correction",
      "description": "Adjust colors naturally, maintain realistic contrast and brightness, simulate modern camera color science."
    },
    {
      "step": 5,
      "action": "HDR lighting and digital studio effect",
      "description": "Apply HDR-like lighting, professional digital studio lighting, realistic shadows, reflections, and controlled depth-of-field with soft bokeh background."
    },
    {
      "step": 6,
      "action": "Background and detail restoration",
      "description": "Ensure background elements, clothing, and textures are sharp, ultra-detailed, and clean, while preserving natural blur for depth."
    },
    {
      "step": 7,
      "action": "Grayscale adjustment (if applicable)",
      "description": "Restore black-and-white portraits with accurate grayscale tones and proper contrast."
    },
    {
      "step": 8,
      "action": "Final polishing",
      "description": "Avoid over-processing, maintain a natural and authentic look, preserve original mood and proportions, ensure ultra-smooth yet ultra-detailed output."
    }
  ]
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
