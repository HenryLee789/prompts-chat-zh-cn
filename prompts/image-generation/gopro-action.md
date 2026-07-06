---
id: "cmjfyhe8j000bjp046ez0753o"
slug: "gopro-action"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/gopro-action"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "cc7aa240fea57283ae3dfbfa5f5d979398059cacae801f2eef0f2d498c9b3867"
upstream_updated_at: "2025-12-21T17:06:24.196Z"
---
# GoPro 行动

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[gopro-action](https://prompts.chat/prompts/gopro-action)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

该提示要求两位热衷于刺激的城市探险家在 100 层摩天大楼的窗台上拍摄一张 GoPro 风格的电影式自拍照。在黄金时段使用极端鱼眼镜头拍摄，图像必须捕捉到危险的高度、风和刺眼的阳光。对象 1 拿着相机兴奋地尖叫，而对象 2 的一条腿在边缘摇摇欲坠地保持平衡。最终图像必须是正方形（长宽比为 1:1）并且不显示安全栏。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "prompt": "您将使用所提供照片中的人物作为主要拍摄对象进行图像编辑。保留他们的核心相似性。将拍摄对象 1（男性）和拍摄对象 2（男性）转变为一座巨大摩天大楼顶上的肾上腺素上瘾的城市探险家。该图像是拍摄对象 1 拍摄的一张高能量、广角 POV 自拍照，捕捉到两个人都危险地栖息在屋顶壁架的边缘，以令人眼花缭乱的垂直下降到城市街道严格遵守电影 1:1 的宽高比。",
  “详细信息”：{
    "year": "今天",
    “流派”：“GoPro”，
    "location": "人口稠密的大都市中 100 层摩天大楼的屋顶壁架。",
    “照明”：[
      “黄金时刻的阳光”，
      “直接刺眼的耀斑”，
      “自然的户外暴露”
    ],
    "camera_angle": "极广角鱼眼 POV（自拍角度），边缘高度畸变，向下倾斜以显示下方远处的街道。",
    “情感”：[
      “兴奋”，
      “无所畏惧”，
      “肾上腺素飙升”
    ],
    “颜色调色板”：[
      “天蓝色”，
      《夕阳橙》、
      “混凝土灰”，
      “生动的运动服霓虹灯”
    ],
    “气氛”：[
      “引起眩晕”，
      “风”，
      “史诗”，
      “危险”
    ],
    "environmental_elements": "下面网格状的街道上可以看到小汽车，镜头光晕伪影，鸟儿在拍摄对象下方飞翔，风吹动他们的衣服。",
    “主题1”：{
      "costume": "一件技术风衣夹克、露指手套和一顶向后的棒球帽。",
      "subject_expression": "看着镜头，露出纯粹兴奋的大笑。",
      "subject_action": "伸出相机臂（自拍风格），同时探身于虚空之上。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “地面视图”，
        “内饰”，
        “演播室灯光”，
        “三脚架稳定性”，
        “散景”，
        “平透镜”
      ],
      “排除样式”：[
        “油画”，
        “素描”，
        “复古电影”，
        “工作室肖像”
      ],
      “排除颜色”：[
        “棕褐色”，
        “单色”
      ],
      “排除对象”：[
        “安全栏杆”，
        “栅栏”
      ]
    },
    “主题2”：{
      "costume": "连帽运动背心、工装慢跑鞋和登山鞋。",
      "subject_expression": "高度专注，夹杂着大胆的傻笑。",
      "subject_action": "用一条腿在檐口边缘保持平衡，向镜头扔出一个‘和平’标志。”
    }
  }
}
```

---

## English Original

### Title

GoPro Action

### Description

This prompt requests a cinematic, vertiginous GoPro-style selfie of two adrenaline-junkie urban explorers on the ledge of a 100-story skyscraper. Taken during golden hour with an extreme fisheye lens, the image must capture the dangerous height, wind, and harsh sunlight. Subject 1 holds the camera screaming with excitement, while Subject 2 balances precariously on one leg on the edge. The final image must be a square (1:1 aspect ratio) and show no safety rails.

### Prompt

```md
{
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Transform Subject 1 (male) and Subject 2 (male) into adrenaline-junkie urban explorers atop a massive skyscraper. The image is a high-energy, wide-angle POV selfie taken by Subject 1, capturing both men precariously perched on the edge of a rooftop ledge with a dizzying vertical drop to the city streets below. Adhere strictly to a cinematic 1:1 aspect ratio.",
  "details": {
    "year": "Present Day",
    "genre": "GoPro",
    "location": "The rooftop ledge of a 100-story skyscraper in a dense metropolis.",
    "lighting": [
      "Golden hour sunlight",
      "Direct harsh flares",
      "Natural outdoor exposure"
    ],
    "camera_angle": "Extreme wide-angle fisheye POV (selfie angle), high distortion on the edges, tilting downwards to show the street far below.",
    "emotion": [
      "Exhilarated",
      "Fearless",
      "Adrenaline-fueled"
    ],
    "color_palette": [
      "Sky blue",
      "Sunset orange",
      "Concrete grey",
      "Vivid sportswear neons"
    ],
    "atmosphere": [
      "Vertigo-inducing",
      "Windy",
      "Epic",
      "Dangerous"
    ],
    "environmental_elements": "Tiny cars visible on the grid-like streets below, lens flare artifacts, birds flying beneath the subjects, wind blowing their clothes.",
    "subject1": {
      "costume": "A technical windbreaker jacket, fingerless grip gloves, and a backward baseball cap.",
      "subject_expression": "A wide, shouting grin of pure excitement, looking into the lens.",
      "subject_action": "Holding the camera arm extended (selfie style) while leaning out over the void."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "ground level view",
        "interiors",
        "studio lighting",
        "tripod stability",
        "bokeh",
        "flat lens"
      ],
      "exclude_styles": [
        "oil painting",
        "sketch",
        "vintage film",
        "studio portrait"
      ],
      "exclude_colors": [
        "sepia",
        "monochrome"
      ],
      "exclude_objects": [
        "safety railings",
        "fences"
      ]
    },
    "subject2": {
      "costume": "A hooded athletic vest, cargo joggers, and climbing shoes.",
      "subject_expression": "Intense focus mixed with a daredevil smirk.",
      "subject_action": "Balancing on one leg on the very edge of the cornice, throwing a 'peace' sign towards the camera."
    }
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [gopro-action](https://prompts.chat/prompts/gopro-action) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | ersinkoc |
| Updated At | 2025-12-21T17:06:24.196Z |
