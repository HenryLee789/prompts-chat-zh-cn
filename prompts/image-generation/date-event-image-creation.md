---
id: "cmj4qzy1u000bwd0r58xgbduw"
slug: "date-event-image-creation"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/date-event-image-creation"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "b3d7bf996fc7b5660b89caccc39916e533ed67a4df0d41c14693d3c5844a824c"
upstream_updated_at: "2025-12-16T11:13:43.041Z"
---
# 日期-事件-视觉创作

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[date-event-image-creation](https://prompts.chat/prompts/date-event-image-creation)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

您将输入提示的位置和日期部分。

Nano Banana 搜索该日期在该位置发生的重要事件（如果有）并为其创建合适的视觉效果。

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
  “元”：{
    “型号”：“纳米香蕉专业”，
    “模式”：“思考”，
    “use_search_grounding”：正确，
    “语言”：“tr”
  },
  “输入”：{
    “位置”：“${Location: Location}”，
    "日期": "${Date: YYYY-MM-DD}",
    "aspectRatio": "${Aspect Ratio: 16:9 | 4:3 | 1:1 | 9:16}",
    "timeOfDay": "${Time of the Day}",
    “心情”：“${Mood: epic | solemn | celebratory | tense | melancholic}”
  },
  “提示”：{
    "positive": "地点：${Location: Location}\n日期：瞬间，真实的相机物理，自然的人体比例，高微细节。",
    “负面”：“现代建筑、汽车、沥青、霓虹灯、智能手机、错误时代的服装/盔甲、幻想、动漫、卡通、文本叠加、模糊、低分辨率、额外的肢体”
  },
  “渲染”：{
    “质量”：“超”，
    “分辨率”：“4k”
  },
  "name": "我的工作流程",
  “步骤”：[]
}
```

---

## English Original

### Title

Tarih-olay- Görsel oluşturma

### Description

Prompt Konum (location)ve tarih (date) kısmını siz gireceksiniz

O tarihte o konumda olmuş önemli bir olayı (var ise) nano banana araştırıyor ve ona uygun bir görsel oluşturuyor


### Prompt

```md
{
  "meta": {
    "model": "nano-banana-pro",
    "mode": "thinking",
    "use_search_grounding": true,
    "language": "tr"
  },
  "input": {
    "location": "${Location: Location}",
    "date": "${Date: YYYY-MM-DD}",
    "aspectRatio": "${Aspect Ratio: 16:9 | 4:3 | 1:1 | 9:16}",
    "timeOfDay": "${Time of the Day}",
    "mood": "${Mood: epic | solemn | celebratory | tense | melancholic}"
  },
  "prompt": {
    "positive": "Konum: ${Location: Location}\nTarih: ${Date: YYYY-MM-DD}\n\nÖnce güvenilir kaynaklarla arama yap ve bu tarihte bu konumda gerçekleşen en önemli tarihsel olayı belirle. Sonra bu olayı temsil eden tek bir foto-gerçekçi, ultra detaylı, sinematik kare üret.\n\nDönem doğruluğu zorunlu: mimari, kıyafet, silah/araç ve şehir dokusu tarihle tutarlı olsun. Modern hiçbir obje, bina, araç veya tabela görünmesin. Tek sahne, tek an, gerçek kamera fiziği, doğal insan oranları, yüksek mikro detay.",
    "negative": "modern buildings, cars, asphalt, neon, smartphones, wrong era clothing/armor, fantasy, anime, cartoon, text overlay, blurry, low-res, extra limbs"
  },
  "render": {
    "quality": "ultra",
    "resolution": "4k"
  },
  "name": "My Workflow",
  "steps": []
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [date-event-image-creation](https://prompts.chat/prompts/date-event-image-creation) |
| Category | Image Generation (`image-generation`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | stiva1979 |
| Updated At | 2025-12-16T11:13:43.041Z |
