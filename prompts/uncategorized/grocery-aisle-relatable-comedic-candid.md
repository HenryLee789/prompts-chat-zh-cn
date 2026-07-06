---
id: "cmjok4yeg001die04a7tutue8"
slug: "grocery-aisle-relatable-comedic-candid"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/grocery-aisle-relatable-comedic-candid"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "5294d2e90924b97ff7fd8bb0c33e46b00349e83a3c060a5b4d1ffd9ce1c0effd"
upstream_updated_at: "2025-12-27T18:41:39.465Z"
---
# 杂货店过道（相关、喜剧坦率）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[grocery-aisle-relatable-comedic-candid](https://prompts.chat/prompts/grocery-aisle-relatable-comedic-candid)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

创建一个相关的喜剧图像提示，以杂货店过道中的成年女性为主角，以俏皮的表情和特定的风格和技术限制捕捉坦率的时刻。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
{
  “类别”：“GROCERY_AISLE_RELATABLE_CANDID”，
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "保留准确的参考身份。仅限 21 岁以上成人。"
  },
  “主题”：{
    "demographics": "成年女性，21-29，匹配参考身份。",
    “头发”：{
      "color": "匹配参考。",
      "style": "休闲马尾辫或宽松大波浪",
      "texture": "真实的股线，飞扬的",
      “运动”：“最小”
    },
    “脸”：{
      "eyes": "精确参考；俏皮的眼神接触",
      "skin_details": "自然纹理；无平滑",
      "micro_details": "保留标记"
    },
    “服装”：{
      "outfit": "休闲黑色连帽衫或夹克（无徽标/文字）",
      "fabric": "可见棉织；轻微皱纹"
    },
    “配件”：{
      “道具”：[
        “购物篮（无品牌）”
      ]
    }
  },
  “姿势”：{
    "type": "坦率的中间过道",
    "orientation": "半身",
    "hands": "一只手拿着篮子；另一只手拿着没有可读文字的普通标签物品",
    "gaze": "直接目光接触",
    "express": "有趣的‘当场’傻笑”
  },
  “设置”：{
    "environment": "杂货过道",
    “背景元素”：[
      “货架模糊，没有可读的包装文字”，
      “荧光灯头顶照明”，
      “清洁反光地板”
    ],
    “深度”：“脸型锐利；架子软化”
  },
  “相机”：{
    "shot_type": "半身偷拍",
    "angle": "眼睛水平",
    "focal_length_equivalent": "24-28mm 手机宽",
    "framing": "4:5，构图稍有不完美",
    "focus": "眼睛锐利；项目稍微失焦以避免可读的文本"
  },
  “照明”：{
    "source": "头顶荧光灯",
    "direction": "自上而下，温和填充",
    "highlights": "真实的光泽，而不是塑料",
    “shadows”：“柔软的下巴”
  },
  “心情和表达”：{
    "tone": "相关、有趣、坦诚",
    “气氛”：“日常生活”
  },
  “风格和现实主义”：{
    "style": "真实的 UGC",
    “imperfections”：“轻微噪音和不完美的白平衡”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    “噪音”：“轻微”，
    “模式变体”：{
      "amateur": "手机偷拍，微歪，轻度 HDR",
      “pro”：“更清晰的曝光，更锐利的细节，受控的高光”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “无可读包装”：true
  },
  “否定提示”：[
    “可读标签”，
    “标志”，
    “水印”，
    “身份漂移”，
    “变脸”，
    “额外的手指”，
    “扭曲的手”，
    “塑料皮肤”，
    “过度平滑”
  ]
}
```

---

## English Original

### Title

Grocery Aisle (relatable, comedic-candid)

### Description

Create a relatable and comedic image prompt featuring an adult woman in a grocery aisle, capturing a candid moment with a playful expression and specific stylistic and technical constraints.

### Prompt

```md
{
  "category": "GROCERY_AISLE_RELATABLE_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Keep exact reference identity. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Casual ponytail or loose waves",
      "texture": "Real strands, flyaways",
      "movement": "Minimal"
    },
    "face": {
      "eyes": "Exact reference; playful eye contact",
      "skin_details": "Natural texture; no smoothing",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outfit": "Casual black hoodie or jacket (no logos/text)",
      "fabric": "Cotton weave visible; slight wrinkles"
    },
    "accessories": {
      "props": [
        "Shopping basket (unbranded)"
      ]
    }
  },
  "pose": {
    "type": "Candid mid-aisle",
    "orientation": "Half-body",
    "hands": "One hand holding basket; other holding a plain-label item with NO readable text",
    "gaze": "Direct eye contact",
    "expression": "Funny 'caught in the act' smirk"
  },
  "setting": {
    "environment": "Grocery aisle",
    "background_elements": [
      "Shelves blurred with NO readable packaging text",
      "Fluorescent overhead lighting",
      "Clean reflective floor"
    ],
    "depth": "Face sharp; shelves softened"
  },
  "camera": {
    "shot_type": "Half-body candid",
    "angle": "Eye level",
    "focal_length_equivalent": "24-28mm phone wide",
    "framing": "4:5, slightly imperfect composition",
    "focus": "Eyes sharp; item slightly out of focus to avoid readable text"
  },
  "lighting": {
    "source": "Overhead fluorescent",
    "direction": "Top-down with mild fill",
    "highlights": "Realistic shine, not plastic",
    "shadows": "Soft under-chin"
  },
  "mood_and_expression": {
    "tone": "Relatable, playful, candid",
    "atmosphere": "Everyday life"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Mild noise and imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild",
    "mode_variants": {
      "amateur": "Phone candid, slightly crooked, mild HDR",
      "pro": "Cleaner exposure, sharper detail, controlled highlights"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_packaging": true
  },
  "negative_prompt": [
    "readable labels",
    "logos",
    "watermark",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "plastic skin",
    "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [grocery-aisle-relatable-comedic-candid](https://prompts.chat/prompts/grocery-aisle-relatable-comedic-candid) |
| Category | Uncategorized (`uncategorized`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:41:39.465Z |
