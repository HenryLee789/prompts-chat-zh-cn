---
id: "cmjr30i5y000ui804m7utgkk1"
slug: "realistic-amateur-vibe-candid-photography-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/realistic-amateur-vibe-candid-photography-prompt"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a3f488371cb011527f06f74cf11ba39e1b0c75fe888f008114b33d1afa569a34"
upstream_updated_at: "2025-12-29T11:35:24.178Z"
---
# 逼真的业余氛围坦率摄影提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[realistic-amateur-vibe-candid-photography-prompt](https://prompts.chat/prompts/realistic-amateur-vibe-candid-photography-prompt)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成一张具有特定技术属性（例如自然皮肤纹理、手持微模糊和使用 iPhone 11 设置的休闲姿势）的逼真的业余氛围偷拍照片。它的目标是通过最少的修饰和自然瑕疵来创造真实的日常快照感觉。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "prompt": "instagirl、偷拍手机快照、真实业余氛围、自然肤质、淡妆至多、手持微模糊、iPhone 11 宽幅 26mm EXIF 外观、f/1.8、1/60s、ISO 200、轻微镜头畸变、休闲姿势、日常服装、轻微飞扬的头发、不完美的取景、背景杂乱、无修饰、逼真的阴影、忠实的解剖结构、同一个人身份、同一身体比例”，
  "negative_prompt": "美容滤镜、皮肤平滑、工作室魅力、hdr 发光、电影分级、时尚社论、喷枪、液化、身体变形、变脸、去衰老、恐怖谷、额外的手指、扭曲的四肢、NSFW、内衣、比基尼、水印、文本、徽标、边框",
  “图像”：“<REFERENCE_IMAGE_URL>”，
  “强度”：0.35，
  “指导”：5.0，
  “控制网”：[
    {
      “类型”：“开放姿势”，
      “图像”：“<REFERENCE_IMAGE_URL>”，
      “重量”：0.7，
      “猜测模式”：假
    },
    {
      “类型”：“深度”，
      “图像”：“<REFERENCE_IMAGE_URL>”，
      “重量”：0.45
    }
  ],
  “面部锁定”：{
    “类型”：“ip_adapter_faceid”，
    "ref_image": "<REFERENCE_FACE_CROP_OR_SAME_URL>",
    “重量”：0.75
  }
}
```

---

## English Original

### Title

Realistic Amateur Vibe Candid Photography Prompt

### Description

This prompt generates a realistic amateur vibe candid photograph with specific technical attributes such as natural skin texture, handheld micro-blur, and casual postures using iPhone 11 settings. It aims to create an authentic, everyday snapshot feel with minimal retouching and natural imperfections.

### Prompt

```md
{
  "prompt": "instagirl, candid phone snapshot, realistic amateur vibe, natural skin texture, light makeup at most, handheld micro-blur, iPhone 11 wide 26mm EXIF look, f/1.8, 1/60s, ISO 200, slight lens distortion, casual posture, everyday outfit, mild flyaway hair, imperfect framing, background clutter present, no retouching, realistic shadows, faithful anatomy, same person identity, same body proportions",
  "negative_prompt": "beauty filter, skin smoothing, studio glam, hdr glow, cinematic grading, fashion editorial, airbrush, liquify, body morph, face changed, de-aged, uncanny valley, extra fingers, warped limbs, NSFW, lingerie, bikini, watermark, text, logo, border",
  "image": "<REFERENCE_IMAGE_URL>",
  "strength": 0.35,
  "guidance": 5.0,
  "control_nets": [
    {
      "type": "openpose",
      "image": "<REFERENCE_IMAGE_URL>",
      "weight": 0.7,
      "guess_mode": false
    },
    {
      "type": "depth",
      "image": "<REFERENCE_IMAGE_URL>",
      "weight": 0.45
    }
  ],
  "face_lock": {
    "type": "ip_adapter_faceid",
    "ref_image": "<REFERENCE_FACE_CROP_OR_SAME_URL>",
    "weight": 0.75
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [realistic-amateur-vibe-candid-photography-prompt](https://prompts.chat/prompts/realistic-amateur-vibe-candid-photography-prompt) |
| Category | Image Generation (`image-generation`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-29T11:35:24.178Z |
