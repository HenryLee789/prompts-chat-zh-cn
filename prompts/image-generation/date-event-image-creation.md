# 日期-事件-视觉创作

## 中文说明

你将输入提示的位置和日期部分。 Nano Banana 搜索该日期在该位置发生的重要事件（如果有）并为其创建合适的视觉效果。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

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
    “负面”：“现代建筑、汽车、沥青、霓虹灯、智能手机、bug时代的服装/盔甲、幻想、动漫、卡通、文本叠加、模糊、低分辨率、额外的肢体”
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
