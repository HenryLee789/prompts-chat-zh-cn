---
id: "cmjwwd1bo000cl304j0kqz95a"
slug: "candid-outdoor-group-photo-in-natural-pool"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/candid-outdoor-group-photo-in-natural-pool"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6c6bc33274319def5e07e5bebbef0032a55fbfc11005955e247ef6576d3d4e57"
upstream_updated_at: "2026-01-04T11:56:04.943Z"
---
# 天然泳池户外合影

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[candid-outdoor-group-photo-in-natural-pool](https://prompts.chat/prompts/candid-outdoor-group-photo-in-natural-pool)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

创建一张真实、坦率的户外照片，捕捉一群成年人享受天然泳池或洞穴环境的情景。强调自然光、自发的姿势以及无忧无虑、冒险的氛围，并通过详细的环境和主题描述来指导场景。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "prompt": "一张户外照片，一群成年人（21 岁以上）站在齐腰深的清澈水中，在岩石天然水池或洞穴内。背景是深色、有纹理的岩壁，略微潮湿且凹凸不平，占据了大部分画面。灯光是自然光，柔和但直接，在潮湿的皮肤上创造出逼真的亮点。\n\n在中间，一位浅色皮肤、湿漉漉的金发向后梳着的微笑女士，以一种轻松、俏皮的方式将双臂高高举过头顶。她穿着青色的连体泳衣，被水染得颜色有些暗。\n\n在前景中，另一位浅色皮肤、深色湿发向后梳着的女人，穿着紫色比基尼泳裤，她的背部和肩膀在水里闪闪发光。\n\n在画面中，其他人的部分可见：一个人弯曲着手臂，另一个人拿着一个橙色的物体，增添了自发的集体外出的感觉。图像感觉自然，就像在度假时拍摄的快照，肤色逼真，有可见的高光和阴影，没有大量修饰。\n\n整体气氛无忧无虑，充满活力，具有夏日、冒险的氛围，构图略有偏离中心和不完美，增强了坦率、现实生活的感觉。
  "scene_type": "在岩石天然水池或洞穴中拍摄的户外旅行快照",
  “主题”：[
    {
      "role": "中心主题",
      "description": "微笑的女人，浅色皮肤，湿漉漉的金发向后梳，双臂高高举过头顶，摆出轻松、俏皮的姿势",
      "wardrobe": "青色连体泳衣，被水稍微变暗",
      "pose_and_expression": "俏皮、轻松、开朗的微笑"
    },
    {
      "role": "前景主体",
      "description": "浅色皮肤、深色湿发的女人向后梳，越过肩膀看向镜头，背部和肩膀上闪烁着水光",
      "wardrobe": "紫色比基尼泳裤",
      "pose_and_expression": "自信、随意的表情，露肩造型"
    },
    {
      "role": "边/背景组",
      "description": "额外的人部分可见并被框架裁剪，增强自发的集体外出能量",
      “详细信息”：[
        “一个人弯曲手臂”，
        “另一个人拿着一个橙色的物体”
      ]
    }
  ],
  “环境”：{
    "setting": "岩石天然水池或洞穴",
    “水”：{
      "clarity": "清澈的水",
      "深度": "齐腰深",
      "surface_effects": "湿润的皮肤上有轻微的水反射和微妙的微光"
    },
    “背景”：{
      "primary_element": "深色、有纹理的岩墙",
      "surface_characteristics": "轻微潮湿、不均匀、凹凸不平的纹理",
      "framing": "岩墙填充了大部分框架"
    }
  },
  “照明”：{
    "type": "自然光",
    “quality”：“柔和但直接”，
    “效果”：[
      “湿皮肤上的真实亮点”，
      “可见的自然阴影和深度”，
      “没有演播室灯光效果”
    ]
  },
  “组成”：{
    "framing": "不完美、稍微偏离中心的坦率取景",
    "cropping": "侧面的人物部分可见并被框架裁剪",
    "vibe": "未摆姿势的度假快照"
  },
  “风格和质量提示”：[
    “自然摄影”，
    “真实的皮肤纹理”，
    “没有演播室灯光”，
    “轻微的水反射”，
    “随意、坦率的快照”，
    “纪实/旅拍的感觉”，
    “没有繁重的修饰”，
    “皮肤上可见的高光和阴影”
  ],
  “camera_and_capture_feel”：{

“device”：“智能手机或消费相机”，
    "angle": "眼睛水平",
    "稳定性": "手持拍摄",
    "sharpness": "温和的柔软度，没有极端的锐度",
    "color_and_processing": "具有真实色调的自然日光颜色，没有过度风格化"
  },
  "negative_prompt": "工作室灯光、时尚姿势、夸张的解剖结构、塑料皮肤、过度平滑的面孔、电影色彩分级、人工背景、CGI、插图"
}
```

---

## English Original

### Title

Candid Outdoor Group Photo in Natural Pool

### Description

Create a realistic, candid outdoor photo capturing a group of adults enjoying a natural pool or cave setting. Emphasize natural lighting, spontaneous poses, and a carefree, adventurous vibe, with detailed environmental and subject descriptions to guide the scene.

### Prompt

```md
{
  "prompt": "A candid outdoor photo of a group of adults (21+) standing waist-deep in clear water inside a rocky natural pool or cave. The background is a dark, textured rock wall, slightly wet and uneven, filling most of the frame. Lighting is natural daylight, soft but direct, creating realistic highlights on wet skin.\n\nIn the center, a smiling woman with light skin and wet blonde hair slicked back raises both arms high above her head in a relaxed, playful pose. She wears a teal one-piece swimsuit, slightly darkened by water.\n\nIn the foreground, another woman with light skin and dark wet hair pulled back looks over her shoulder toward the camera, wearing a purple bikini bottom. Her back and shoulders glisten with water. Her expression is confident and casual.\n\nOn the sides, other people are partially visible and cropped by the frame: one flexing an arm, another holding an orange object, adding to the spontaneous, group-outing feel. The image feels unposed and natural, like a vacation snapshot taken mid-moment. Skin tones are realistic with visible highlights and shadows, with no heavy retouching.\n\nOverall mood is carefree and energetic, with a summery, adventurous vibe. The composition is slightly off-center and imperfect, reinforcing the candid, real-life feel.",
  "scene_type": "Candid outdoor travel snapshot in a rocky natural pool or cave",
  "subjects": [
    {
      "role": "Center subject",
      "description": "Smiling woman with light skin and wet blonde hair slicked back, arms raised high above head in a relaxed, playful pose",
      "wardrobe": "Teal one-piece swimsuit, slightly darkened by water",
      "pose_and_expression": "Playful, relaxed, cheerful smile"
    },
    {
      "role": "Foreground subject",
      "description": "Woman with light skin and dark wet hair pulled back, looking over her shoulder toward the camera, back and shoulders glistening with water",
      "wardrobe": "Purple bikini bottom",
      "pose_and_expression": "Confident, casual expression, over-the-shoulder look"
    },
    {
      "role": "Side/background group",
      "description": "Additional people partially visible and cropped by the frame, enhancing spontaneous group-outing energy",
      "details": [
        "One person flexing an arm",
        "Another person holding an orange object"
      ]
    }
  ],
  "environment": {
    "setting": "Rocky natural pool or cave",
    "water": {
      "clarity": "Clear water",
      "depth": "Waist-deep",
      "surface_effects": "Slight water reflections and subtle shimmer on wet skin"
    },
    "background": {
      "primary_element": "Dark, textured rock wall",
      "surface_characteristics": "Slightly wet, uneven, rugged texture",
      "framing": "Rock wall fills most of the frame"
    }
  },
  "lighting": {
    "type": "Natural daylight",
    "quality": "Soft but direct",
    "effects": [
      "Realistic highlights on wet skin",
      "Visible natural shadows and depth",
      "No studio lighting look"
    ]
  },
  "composition": {
    "framing": "Imperfect, slightly off-center candid framing",
    "cropping": "People on the sides are partially visible and cropped by the frame",
    "vibe": "Unposed, mid-moment vacation snapshot"
  },
  "style_and_quality_cues": [
    "Natural photography",
    "Realistic skin texture",
    "No studio lighting",
    "Slight water reflections",
    "Casual, candid snapshot",
    "Documentary / travel photo feel",
    "No heavy retouching",
    "Visible highlights and shadows on skin"
  ],
  "camera_and_capture_feel": {
    "device": "Smartphone or consumer camera",
    "angle": "Eye-level",
    "stability": "Handheld shot",
    "sharpness": "Mild softness, no extreme sharpness",
    "color_and_processing": "Natural daylight color with realistic tones, not heavily stylized"
  },
  "negative_prompt": "studio lighting, fashion pose, exaggerated anatomy, plastic skin, over-smoothed faces, cinematic color grading, artificial background, CGI, illustration"
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [candid-outdoor-group-photo-in-natural-pool](https://prompts.chat/prompts/candid-outdoor-group-photo-in-natural-pool) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2026-01-04T11:56:04.943Z |
