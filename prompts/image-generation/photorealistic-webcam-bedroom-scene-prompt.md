---
id: "cmoeda3d40001ks04whpj1z1c"
slug: "photorealistic-webcam-bedroom-scene-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/photorealistic-webcam-bedroom-scene-prompt"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "395811036d5ce350d2e8dc0cb5dcfa8772e82b2186f065fe58766a7a6f48757c"
upstream_updated_at: "2026-04-25T13:20:19.445Z"
---
# 逼真的网络摄像头卧室场景提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[photorealistic-webcam-bedroom-scene-prompt](https://prompts.chat/prompts/photorealistic-webcam-bedroom-scene-prompt)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示提供了详细的真实感描述，用于生成通过笔记本电脑屏幕捕获的网络摄像头风格的卧室场景。它聚焦于一位年轻女性躺在床上使用智能手机的轻松、坦诚的时刻，强调自然的姿势、微妙的面部表情和舒适的室内造型。该设置包括 MacBook Photo Booth 风格的界面、可见的 UI 元素和基于屏幕的框架，以复制真实的数字拍摄。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 image-generation、image-prompt、ChatGPT 等主题快速生成可复用结果。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “主题”：{
    "description": "一名年轻女子躺在床上，手持智能手机，表情平静、略显专注的看着屏幕。",
    “身体”：{
      "type": "女性，身材苗条",
      “细节”：“浅肤色、金色长发、自然妆容、清晰的眼睛和嘴唇”，
      “pose”：“侧躺在床上，上半身稍微抬起，一只手臂将手机放在脸前，另一只手臂放在床上”
    },
    “脸”：{
      "表情": "中性、放松、稍微专注",
      "gaze_direction": "看着她的手机屏幕",
      "head_tilt": "稍微向下倾斜"
    },
    “衣柜”：{
      "top": "黑色休闲T恤",
      "bottom": "柔软面料睡衣短裤",
      "style": "舒适的室内家居服/睡衣装"
    },
    “头发”：“金色长发，直而略显蓬松，自然垂落在肩上”
  },
  “场景”：{
    "description": "使用相机应用程序界面通过笔记本电脑屏幕捕获的卧室场景。",
    "location": "室内卧室",
    "setting": "床铺有柔软的毯子和枕头",
    "background_elements": "中性的墙壁，略显凌乱的床上用品，柔软的织物纹理",
    “lighting”：“低环境室内照明，柔和的暖色调”，
    “atmosphere”：“舒适、亲密、轻松的夜间氛围”
  },
  “环境”：{
    "ambience": "灯光昏暗、安静的室内环境",
    "style": "通过屏幕进行坦率的数字捕捉",
    "depth_of_field": "屏幕内主体清晰，整体略显柔和"
  },
  “相机”：{
    "device": "笔记本电脑摄像头（MacBook Photo Booth 风格）",
    "angle": "稍微升高的屏幕视角",
    "aspect_ratio": "屏幕框架内为 4:3",
    "framing": "主体出现在笔记本电脑显示屏内，笔记本电脑边框部分可见",
    "focus": "中等焦距，轻微柔和的典型网络摄像头质量"
  },
  “界面”：{
    "visible_ui": "Photo Booth 应用程序界面在屏幕上可见",
    "elements": "顶部栏带有“Photo Booth”文本，底部中心红色快门按钮，小 UI 图标",
    "screen_effect": "微妙的屏幕眩光、像素柔和度、数字显示外观"
  },
  “图像质量”：{
    “分辨率”：“类似网络摄像头的质量”，
    “grain”：“由于低光造成的可见数字噪声”，
    "sharpness": "稍微柔和，细节不高",
    "compression_artifacts": "轻微的数字伪影",
    "dynamic_range": "有限的、较暗的阴影，带有一些高光柔和度"
  },
  “照明”：{
    "type": "室内环境光低",
    “quality”：“柔软，略微不均匀，暖色调”，
    “效果”：“柔和的阴影，脸上微妙的高光”
  },
  “颜色分级”：{
    “tone”：“温暖而柔和”，
    "温度": "稍热",
    “对比度”：“低到中等”，
    “饱和度”：“稍微降低，自然的室内色调”
  },
  “渲染”：{
    "style": "逼真的网络摄像头捕获",
    "quality": "故意不完美，截屏的感觉",
    "skin_texture": "自然，由于低分辨率而稍微软化",
    "post_processing": "最小的、原始的网络摄像头外观"
  },
  “文物”：{
    "screen_glare": "笔记本电脑屏幕上的微妙反射",
    "noise_pattern": "可见的低光颗粒",
    "chromatic_aberration": "最小",
    “motion_blur”：“无”
  },
  “约束”：{
    "focus_priority": "屏幕内的主体是主要焦点",
    “避免”：“过于锐利的单反相机外观、工作室灯光、人工滤镜”
  }
}
```

---

## English Original

### Title

Photorealistic Webcam Bedroom Scene Prompt

### Description

This prompt provides a detailed photorealistic description for generating a webcam-style bedroom scene captured through a laptop screen. It focuses on a young woman in a relaxed, candid moment, lying on a bed and using her smartphone, with emphasis on natural posture, subtle facial expression, and cozy indoor styling. The setup includes a MacBook Photo Booth-style interface, visible UI elements, and screen-based framing to replicate an authentic digital capture.

### Prompt

```md
{
  "subject": {
    "description": "A young woman lying on a bed, holding a smartphone and looking at the screen with a calm, slightly focused expression.",
    "body": {
      "type": "female, slim build",
      "details": "light skin tone, long blonde hair, natural makeup with defined eyes and lips",
      "pose": "lying on her side on a bed, upper body slightly raised, one arm holding a phone in front of her face, the other arm resting on the bed"
    },
    "face": {
      "expression": "neutral, relaxed, slightly focused",
      "gaze_direction": "looking at her phone screen",
      "head_tilt": "slight downward tilt"
    },
    "wardrobe": {
      "top": "black casual t-shirt",
      "bottom": "soft fabric pajama shorts",
      "style": "comfortable indoor loungewear / pajama outfit"
    },
    "hair": "long blonde hair, straight and slightly voluminous, falling naturally around shoulders"
  },
  "scene": {
    "description": "A bedroom scene captured through a laptop screen using a camera app interface.",
    "location": "indoor bedroom",
    "setting": "bed with soft blankets and pillows",
    "background_elements": "neutral wall, slightly messy bedding, soft fabric textures",
    "lighting": "low ambient indoor lighting with soft warm tones",
    "atmosphere": "cozy, intimate, relaxed night-time vibe"
  },
  "environment": {
    "ambience": "dimly lit, quiet indoor environment",
    "style": "candid digital capture through screen",
    "depth_of_field": "subject clear within the screen, slight softness overall"
  },
  "camera": {
    "device": "laptop camera (MacBook Photo Booth style)",
    "angle": "slightly elevated screen perspective",
    "aspect_ratio": "4:3 within screen frame",
    "framing": "the subject appears inside the laptop display, with the laptop bezel partially visible",
    "focus": "moderate focus, slightly soft typical webcam quality"
  },
  "interface": {
    "visible_ui": "Photo Booth application interface visible on screen",
    "elements": "top bar with 'Photo Booth' text, bottom center red shutter button, small UI icons",
    "screen_effect": "subtle screen glare, pixel softness, digital display look"
  },
  "image_quality": {
    "resolution": "webcam-like quality",
    "grain": "visible digital noise due to low light",
    "sharpness": "slightly soft, not highly detailed",
    "compression_artifacts": "minor digital artifacts",
    "dynamic_range": "limited, darker shadows with some highlight softness"
  },
  "lighting": {
    "type": "low indoor ambient light",
    "quality": "soft, slightly uneven, warm tones",
    "effects": "gentle shadows, subtle highlights on face"
  },
  "color_grading": {
    "tone": "warm and muted",
    "temperature": "slightly warm",
    "contrast": "low to moderate",
    "saturation": "slightly reduced, natural indoor tones"
  },
  "rendering": {
    "style": "photorealistic webcam capture",
    "quality": "intentionally imperfect, screen-captured feel",
    "skin_texture": "natural, slightly softened by low resolution",
    "post_processing": "minimal, raw webcam look"
  },
  "artifacts": {
    "screen_glare": "subtle reflections on laptop screen",
    "noise_pattern": "visible low-light grain",
    "chromatic_aberration": "minimal",
    "motion_blur": "none"
  },
  "constraints": {
    "focus_priority": "subject inside the screen is the main focus",
    "avoid": "overly sharp DSLR look, studio lighting, artificial filters"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [photorealistic-webcam-bedroom-scene-prompt](https://prompts.chat/prompts/photorealistic-webcam-bedroom-scene-prompt) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | image-generation, image-prompt, ChatGPT |
| Contributors | krebetem |
| Updated At | 2026-04-25T13:20:19.445Z |
