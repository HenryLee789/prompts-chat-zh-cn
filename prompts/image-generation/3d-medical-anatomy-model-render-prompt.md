# 3D 医学解剖模型渲染提示词

## 中文说明

创建逼真的 3D 医学解剖模型渲染，具有可定制的功能，包括性别、视角、目标肌肉群和突出显示颜色。该提示可确保广角、全身拍摄具有干净、无缝的背景，并注重科学准确性和细节纹理。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Computer Vision、Fitness 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “固定提示组件”：{
    "构图": "广角全身拍，整个人物从头到脚清晰可见，远景，垂直人像取景，站姿居中对称",
    "background": "隔离在无缝的纯白色背景、工作室背景、干净的白色环境上",
    "art_style": "真实感3D医学渲染，ZBrush数字雕塑风格，科学解剖模型美学",
    "texture_and_material": "单色银灰色皮肤，拉丝金属质感，微表面细节，高度细致的肌肉条纹，哑光效果",
    "lighting_and_tech": "电影边缘照明、全局照明、光线追踪、环境光遮挡、8k 分辨率、超高清、锐焦、超细节"
  },
  “变量”：{
    “性别”：“${gender:male}”，
    "view_angle": "${view_angle:Front view}",
    "target_muscle_group": "${target_muscle_group:Pectoralis Major (Chest)}",
    "highlight_color": "${highlight_color:glowing cyan blue}"
  },
  "negative_prompt": "文本、信息图、图表、图表、标签、箭头、UI、裁剪图像、特写、微距拍摄、爆头、截脚、截头、部分身体、灰色背景、渐变背景、地板阴影、模糊、低分辨率、失真、水印"
}
```

---

## English Original

### Title

3D Medical Anatomy Model Render Prompt

### Description

Create a photorealistic 3D medical anatomy model render with customizable features including gender, view angle, target muscle group, and highlight color. The prompt ensures a wide-angle, full-body shot with a clean, seamless background and a focus on scientific accuracy and detailed textures.

### Prompt

```md
{
  "fixed_prompt_components": {
    "composition": "Wide angle full body shot, the entire figure is visible from head to toe, far shot, vertical portrait framing, centered and symmetrical stance",
    "background": "Isolated on a seamless pure white background, studio backdrop, clean white environment",
    "art_style": "Photorealistic 3D medical render, ZBrush digital sculpture style, scientific anatomy model aesthetics",
    "texture_and_material": "Monochromatic silver-grey skin with brushed metal texture, micro-surface details, highly detailed muscle striation, matte finish",
    "lighting_and_tech": "Cinematic rim lighting, global illumination, raytracing, ambient occlusion, 8k resolution, UHD, sharp focus, hyper-detailed"
  },
  "variables": {
    "gender": "${gender:male}",
    "view_angle": "${view_angle:Front view}",
    "target_muscle_group": "${target_muscle_group:Pectoralis Major (Chest)}",
    "highlight_color": "${highlight_color:glowing cyan blue}"
  },
  "negative_prompt": "text, infographic, chart, diagram, labels, arrows, UI, cropped image, close-up, macro shot, headshot, cut off feet, cut off head, partial body, grey background, gradient background, shadows on floor, blurry, low resolution, distortion, watermark"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
