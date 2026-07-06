---
id: "cmj211exv0005wa0stbf15gvm"
slug: "isometric-city-diorama"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/isometric-city-diorama"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "2af4d8d341de398a2278889a023d34d7cc1b8b3dcf5f7f1365a15f033b1fcb75"
upstream_updated_at: "2025-12-16T11:13:44.198Z"
---
# 等距城市立体模型

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[isometric-city-diorama](https://prompts.chat/prompts/isometric-city-diorama)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

用于生成微型 3D 风格的等距城市立体模型的结构化提示，其中天气和环境适应指定城市。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Midjourney、Vision 等主题快速生成可复用结果。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “元”：{
    "description": "生成微型 3D 风格的等距城市立体模型的结构化提示，天气和环境适应指定城市。",
    “变量”：“${City:San Francisco}”
  },
  “提示结构”：{
    “透视和格式”：{
      "view": "等距相机视图",
      "format": "微型 3D 立体模型放置在作为地面底座的浮动方形底座上。",
      "ratio": "16:9（竖屏手机）"
    },
    “艺术风格”：{
      "medium": "高细节 3D 渲染",
      "texture_quality": "适合该地区建筑的真实纹理（例如石头/砖、灰泥/土坯、玻璃/钢）。",
      “vibe”：“类似玩具但高度复杂的建筑模型，具有触觉材料品质。”
    },
    “环境和大气”：{
      "weather": "与指定城市相关的典型气候和天气条件（例如，伦敦阴/雨，开罗晴/晴/干旱，莫斯科下雪）。照明与天气相匹配。",
      "ground": "城市典型的地面材料（例如，沥青、鹅卵石、沙子、泥土）。地表条件反映了天气（例如，下雨时潮湿并有反射，干旱时干燥且多尘，冬季时积雪覆盖）。",
      "background": "与所选天气相匹配的天空渐变和大气，填充上框。"
    },
    “建筑元素”：{
      "housing": "密集的住宅或商业建筑群，体现了城市的乡土建筑风格。",
      “地标”：“定义城市的标志性地标的等距微型表示。”
    },
    “道具和详细信息”：{
      "street_level": "特定于城市氛围的微型元素（例如，黄色出租车或红色巴士等标志性车辆、棕榈树或落叶树等特定植被、路灯、标牌）。",
      《life》：“微小的、程式化的人物穿着适合气候和文化的衣服。”
    },
    “文本覆盖”：{
      “内容”：“${City:San Francisco}”，
      "font_style": "白色、无衬线、粗体、大写字母",
      "placement": "居中浮动在框架的最顶部。"
    }
  }
}
```

---

## English Original

### Title

Isometric City Diorama

### Description

Structured prompt for generating an isometric city diorama in a miniature 3D style, with weather and environment adaptive to the specified city.

### Prompt

```md
{
  "meta": {
    "description": "Structured prompt for generating an isometric city diorama in a miniature 3D style, with weather and environment adaptive to the specified city.",
    "variable": "${City:San Francisco}"
  },
  "prompt_structure": {
    "perspective_and_format": {
      "view": "Isometric camera view",
      "format": "Miniature 3D diorama resting on a floating square base serving as the ground plinth.",
      "ratio": "16:9 (vertical phone)"
    },
    "art_style": {
      "medium": "High-detail 3D render",
      "texture_quality": "Realistic textures appropriate for the region's architecture (e.g., stone/brick, stucco/adobe, glass/steel).",
      "vibe": "Toy-like but highly sophisticated architectural model with tactile material qualities."
    },
    "environment_and_atmosphere": {
      "weather": "Typical climate and weather conditions associated with the specified city (e.g., overcast/rainy for London, bright/sunny/arid for Cairo, snowy for Moscow). Lighting matches the weather.",
      "ground": "Ground surface material typical for the city (e.g., asphalt, cobblestones, sand, dirt). Surface conditions reflect the weather (e.g., wet with reflections if rainy, dry and dusty if arid, snow-covered if winter).",
      "background": "Sky gradient and atmosphere matching the chosen weather, filling the upper frame."
    },
    "architectural_elements": {
      "housing": "Dense cluster of residential or commercial buildings reflecting the city's vernacular architecture style.",
      "landmarks": "Isometric miniature representations of iconic landmarks defining the city."
    },
    "props_and_details": {
      "street_level": "Miniature elements specific to the city's vibe (e.g., iconic vehicles like yellow cabs or red buses, specific vegetation like palm trees or deciduous trees, streetlights, signage).",
      "life": "Tiny, stylized figures dressed in clothing appropriate for the climate and culture."
    },
    "text_overlay": {
      "content": "${City:San Francisco}",
      "font_style": "White, sans-serif, bold, uppercase letters",
      "placement": "Centered floating at the very top of the frame."
    }
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [isometric-city-diorama](https://prompts.chat/prompts/isometric-city-diorama) |
| Category | Image Generation (`image-generation`) |
| Type | `TEXT` |
| Tags | Midjourney, Vision |
| Contributors | f |
| Updated At | 2025-12-16T11:13:44.198Z |
