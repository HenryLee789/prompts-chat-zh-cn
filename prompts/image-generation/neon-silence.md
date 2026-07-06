---
id: "cmjud9h1w0001ld042c6l5mcx"
slug: "neon-silence"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/neon-silence"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "8bad7a456383dfeb148e374a491de86027103d22fc4ca25aabcaa9ac5e7713e6"
upstream_updated_at: "2026-01-01T23:30:26.892Z"
---
# 霓虹灯沉默

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[neon-silence](https://prompts.chat/prompts/neon-silence)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于图像生成场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

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
  "任务": "style_transfer_portrait_poster",
  “输入”：{
    "reference_image": "${reference_image_url_or_path}",
    "use_reference_as": "内容和姿势",
    “保留”：[
      “面部表情和注视方向”，
      “头发/轮廓和服装形式”，
      “框架（上半身肖像）”，
      《光的方向和阴影的分布》
    ]
  },
  “提示”：{
    “语言”：“tr”，
    "style_goal": "将参考图像中的人物/主题转换为高对比度霓虹灯墨水海报插画风格，保持相同的构图。",
    "main": "垂直 (9:16) 电影肖像插图：参考图像中的主要主题（人/人物）保持相同的姿势和框架。风格：深海军蓝/黑色墨水纹理和厚轮廓；脸部和衣服上的蚀刻阴影，海报美学与卡通着色相结合。背景：固体，非常饱和的温暖霓虹粉红色/红色背景；墨水/烟雾漩涡周围的液体，流体火焰状漩涡和飞溅的颗粒。霓虹粉色/红色斑点作为亮点颜色：脸上的划痕/痕迹、散布在衣服和烟雾纹理中的明亮水滴、高对比度、硬边、戏剧性的暗色调、简约而强烈的调色板（暗冷色调+霓虹灯暖色背景）和超清晰、高分辨率的封面/海报纹理。
    “内容规则”：[
      “添加品牌、型号、徽标、徽章、签名、水印或可读文本。”,
      "如果参考图像中有文本/徽标，请消除其可读性：将其模糊、将其变成抽象形状或将其删除。",
      “不要添加新的人/对象；只需对参考中的内容进行风格化即可。”,
      “不要扭曲面部解剖比例；保持自然但风格化。”
    ]
  },
  “否定提示”：[
    “照片级写实”，
    “低”，
    “模糊”，
    “泥泞的阴影”，
    “额外的人”，
    “额外的肢体”，
    “变形脸”，
    “不可思议”，
    “新文本”，
    “品牌名称”，
    “标志”，
    “水印”，
    “签名”，
    “繁忙的背景详细信息”，
    “洗掉霓虹灯”，
    “色带”，
    “jpeg 工件”
  ],
  “一代”：{
    “模式”：“图像到图像”，
    “强度”：0.6，
    “风格转移权重”：0.85，
    “组合锁”：0.8，
    "detail_level": "高",
    “分辨率”：{
      “宽度”：1080，
      “身高”：1920
    },
    “指导”：{
      “cfg_scale”：7.0
    },
    “采样器”：“自动”，
    “种子”：“自动”
  },
  “后处理”：{
    “锐化”：“中低”，
    “颗粒”：“微妙”，
    “对比度”：“高”，
    “饱和度”：“高”
  }
}
```

---

## English Original

### Title

Neon Silence

### Description



### Prompt

```md
{
  "task": "style_transfer_portrait_poster",
  "input": {
    "reference_image": "${reference_image_url_or_path}",
    "use_reference_as": "content_and_pose",
    "preserve": [
      "yüz ifadesi ve bakış yönü",
      "saç/siluet ve kıyafet formu",
      "kadraj (üst gövde portre)",
      "ışık yönü ve gölge dağılımı"
    ]
  },
  "prompt": {
    "language": "tr",
    "style_goal": "Referans görseldeki kişiyi/konuyu, aynı kompozisyonu koruyarak yüksek kontrastlı neon-ink poster illüstrasyonu stiline dönüştür.",
    "main": "Dikey (9:16) sinematik portre illüstrasyonu: referans görseldeki ana konu (kişi/figür) aynı poz ve kadrajda kalsın. Stil: koyu lacivert/siyah mürekkep dokuları ve kalın konturlar; yüz ve kıyafet üzerinde oyma/gravür benzeri ince çizgisel gölgelendirme (etched shading), cel-shading ile birleşen poster estetiği. Arka plan: düz, çok doygun sıcak neon pembe/kırmızı zemin; etrafında sıvı mürekkep/duman girdapları, akışkan alevimsi kıvrımlar ve parçacık sıçramaları. Vurgu rengi olarak neon pembe/kırmızı lekeler: yüzde çizik/iz gibi küçük vurgular, giyside ve duman dokusunda serpiştirilmiş parlak damlacıklar. Yüksek kontrast, sert kenarlar, dramatik karanlık tonlar, minimal ama güçlü renk paleti (koyu soğuk tonlar + neon sıcak arka plan). Hafif baskı grain’i ve poster dokusu; ultra net, yüksek çözünürlüklü kapak/poster görünümü.",
    "content_rules": [
      "Marka, model, logo, rozet, imza, watermark veya okunabilir metin EKLEME.",
      "Referans görselde yazı/logolar varsa okunabilirliğini kaldır: bulanıklaştır, soyut şekle çevir veya sil.",
      "Yeni kişi/obje ekleme; sadece referanstaki içeriği stilize et.",
      "Yüz anatomi oranlarını bozma; doğal ama stilize kalsın."
    ]
  },
  "negative_prompt": [
    "photorealistic",
    "lowres",
    "blurry",
    "muddy shading",
    "extra people",
    "extra limbs",
    "deformed face",
    "uncanny",
    "new text",
    "brand names",
    "logos",
    "watermark",
    "signature",
    "busy background details",
    "washed out neon",
    "color banding",
    "jpeg artifacts"
  ],
  "generation": {
    "mode": "image_to_image",
    "strength": 0.6,
    "style_transfer_weight": 0.85,
    "composition_lock": 0.8,
    "detail_level": "high",
    "resolution": {
      "width": 1080,
      "height": 1920
    },
    "guidance": {
      "cfg_scale": 7.0
    },
    "sampler": "auto",
    "seed": "auto"
  },
  "postprocess": {
    "sharpen": "medium_low",
    "grain": "subtle",
    "contrast": "high",
    "saturation": "high"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [neon-silence](https://prompts.chat/prompts/neon-silence) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | kyllimir |
| Updated At | 2026-01-01T23:30:26.892Z |
