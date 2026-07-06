---
id: "cmoeco0q20001jl04pbo28854"
slug: "rooftop-lifestyle-portrait-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/rooftop-lifestyle-portrait-prompt"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "80fab54a02eca6bc8bf5b4d74059ca616e7b0bdfc02a66ef1004df2c736a119d"
upstream_updated_at: "2026-04-25T17:53:57.143Z"
---
# 屋顶生活方式肖像提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[rooftop-lifestyle-portrait-prompt](https://prompts.chat/prompts/rooftop-lifestyle-portrait-prompt)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

该提示提供了详细的真实感描述，用于在户外城市环境中生成年轻女性主题的自然、坦率的生活方式肖像。它捕捉了诸如外貌、姿势、面部表情和服装等关键元素，以及环境背景，包括阳光照射的屋顶露台、周围的建筑和大气细节。

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
    "description": "一位年轻的金发女郎，皮肤白皙，坐在阳光直射的户外，放松地微笑着，由于明亮的光线，她眯着眼睛。",
    “身体”：{
      "type": "女性，身材苗条",
      “细节”：“浅肤色，松散的金色直发，自然妆容，轻微阳光照射的皮肤”，
      “pose”：“斜倚在现代户外椅子上，身体稍微向右倾斜，双腿向前伸展，双手放在膝盖附近，拿着手机”
    },
    “脸”：{
      “表情”：“笑容柔和，眼睛因阳光而微微眯起，轻松又自信”，
      "gaze_direction": "朝向相机",
      "head_tilt": "稍微向右倾斜",
      “皮肤”：“光滑、自然的皮肤，阳光下的亮点和最小的瑕疵”
    },
    “衣柜”：{
      "top": "白色合身T恤",
      "bottom": "浅蓝色破洞牛仔裤，膝盖有撕裂",
      "outerwear": "黑色夹克随意地披在肩上",
      “配件”：“头顶上的太阳镜，最小的珠宝”
    },
    “头发”：“宽松的金发，自然垂落在肩上，带有轻微的阳光亮点”
  },
  “场景”：{
    "description": "白天的屋顶露台，背景是城市住宅楼。",
    "location": "城市的户外露台（地中海/欧式建筑）。",
    "setting": "屋顶座位区",
    "background_elements": "带有绿色植物的木制花盆、混凝土地砖、附近有窗户和屋顶的建筑物",
    “照明”：“强烈的自然阳光投射出锐利的阴影”，
    “atmosphere”：“休闲、阳光、轻松的白天氛围”
  },
  “环境”：{
    "ambience": "明亮的日光、户外、通风",
    "style": "坦率的生活方式时刻",
    "depth_of_field": "中等景深，主体清晰，背景稍微柔化，但仍然可读"
  },
  “相机”：{
    "device": "iPhone 13 后置摄像头",
    "mode": "标准照片模式",
    "lens": "广角镜头（~26mm 等效）",
    "angle": "略微自上而下的角度，就好像站在主体上方一样",
    “纵横比”：“4：5”，
    "framing": "全身坐姿取景，拍摄对象居中稍低的位置",
    “focus”：“聚焦于主题”，
    “稳定性”：“手持”
  },
  “图像质量”：{
    "resolution": "标准移动分辨率",
    "grain": "非常微妙的颗粒",
    "sharpness": "自然智能手机锐化",
    "compression_artifacts": "最小",
    "dynamic_range": "明亮的高光，在阳光最强的区域有轻微的剪裁"
  },
  “照明”：{
    “type”：“直射阳光”，
    “质量”：“严酷、高对比度的照明和强烈的阴影”，
    “效果”：“头发和皮肤上的阳光高光，地面和椅子上的锐利阴影边缘”
  },
  “颜色分级”：{
    “tone”：“自然光”，
    "温度": "稍热",
    "contrast": "因阳光而产生的中等到高对比度",
    "saturation": "现实，略带活力",
    "highlights": "明亮，在阳光照射的地方有轻微的风吹",
    “shadows”：“清晰且更暗”
  },
  “渲染”：{
    "style": "逼真的智能手机摄影",
    “质量”：“干净、自然、未经过滤的外观”，
    "skin_texture": "自然的阳光反射",
    "post_processing": "最小的、直接从相机中出来的感觉"
  },
  “文物”：{
    "lens_flare": "可能非常微妙的阳光耀斑",
    "noise_pattern": "最小",
    "motion_blur": "无",
    "chromatic_aberration": "高对比度边缘轻微"
  },
  “约束”：{

"focus_priority": "拍摄对象必须保持主要焦点",
    “避免”：“过度处理的皮肤、人工照明、工作室外观、电影分级”
  }
}
```

---

## English Original

### Title

Rooftop Lifestyle Portrait Prompt

### Description

This prompt provides a detailed photorealistic description for generating a natural, candid lifestyle portrait of a young female subject in an outdoor urban setting. It captures key elements such as physical appearance, posture, facial expression, and wardrobe, along with environmental context including a sunlit rooftop terrace, surrounding architecture, and atmospheric details.

### Prompt

```md
{
  "subject": {
    "description": "A young blonde woman with fair skin sitting outdoors in direct sunlight, relaxed and slightly smiling with a soft squint due to bright light.",
    "body": {
      "type": "female, slim build",
      "details": "light skin tone, straight blonde hair worn loose, natural makeup, slightly sunlit skin",
      "pose": "reclining on a modern outdoor chair, body angled slightly to the right, legs extended forward, hands resting near her lap holding a phone"
    },
    "face": {
      "expression": "soft smile, slightly squinting eyes due to sunlight, relaxed and confident",
      "gaze_direction": "towards camera",
      "head_tilt": "slight tilt to the right",
      "skin": "smooth, natural skin with sunlight highlights and minimal imperfections"
    },
    "wardrobe": {
      "top": "white fitted t-shirt",
      "bottom": "light blue ripped jeans with knee tears",
      "outerwear": "black jacket casually draped over shoulders",
      "accessories": "sunglasses resting on top of head, minimal jewelry"
    },
    "hair": "loose blonde hair, naturally falling over shoulders with slight sun highlights"
  },
  "scene": {
    "description": "A rooftop terrace during daytime with urban residential buildings in the background.",
    "location": "Outdoor terrace in a city (Mediterranean/European style architecture).",
    "setting": "Rooftop seating area",
    "background_elements": "wooden planter boxes with green plants, concrete floor tiles, nearby buildings with windows and rooftops",
    "lighting": "strong natural sunlight casting sharp shadows",
    "atmosphere": "casual, sunny, relaxed daytime vibe"
  },
  "environment": {
    "ambience": "bright daylight, outdoor, airy",
    "style": "candid lifestyle moment",
    "depth_of_field": "moderate depth of field, subject in focus, background slightly softened but still readable"
  },
  "camera": {
    "device": "iPhone 13 rear camera",
    "mode": "standard photo mode",
    "lens": "wide lens (~26mm equivalent)",
    "angle": "slightly top-down angle, as if standing above subject",
    "aspect_ratio": "4:5",
    "framing": "full body seated framing, subject centered slightly lower in frame",
    "focus": "sharp focus on subject",
    "stability": "handheld"
  },
  "image_quality": {
    "resolution": "standard mobile resolution",
    "grain": "very subtle grain",
    "sharpness": "natural smartphone sharpening",
    "compression_artifacts": "minimal",
    "dynamic_range": "bright highlights with slight clipping in strongest sunlight areas"
  },
  "lighting": {
    "type": "direct sunlight",
    "quality": "harsh, high contrast lighting with strong shadows",
    "effects": "sunlight highlights on hair and skin, sharp shadow edges on ground and chair"
  },
  "color_grading": {
    "tone": "natural daylight",
    "temperature": "slightly warm",
    "contrast": "moderate to high contrast due to sunlight",
    "saturation": "realistic, slightly vibrant",
    "highlights": "bright, slightly blown in sunlit areas",
    "shadows": "defined and darker"
  },
  "rendering": {
    "style": "photorealistic smartphone photography",
    "quality": "clean, natural, unfiltered look",
    "skin_texture": "natural with sunlight reflections",
    "post_processing": "minimal, straight-out-of-camera feel"
  },
  "artifacts": {
    "lens_flare": "very subtle possible sunlight flare",
    "noise_pattern": "minimal",
    "motion_blur": "none",
    "chromatic_aberration": "slight on high contrast edges"
  },
  "constraints": {
    "focus_priority": "subject must remain primary focal point",
    "avoid": "over-processed skin, artificial lighting, studio look, cinematic grading"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [rooftop-lifestyle-portrait-prompt](https://prompts.chat/prompts/rooftop-lifestyle-portrait-prompt) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | image-generation, image-prompt, ChatGPT |
| Contributors | krebetem |
| Updated At | 2026-04-25T17:53:57.143Z |
