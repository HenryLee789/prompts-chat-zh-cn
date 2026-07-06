---
id: "cmjok4xp30017ie04rtyt181j"
slug: "farmers-market-colorful-produce-candid"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/farmers-market-colorful-produce-candid"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "1e3b0f7092d2a29d30aec521e2f7dc5d8e3b57b496723977d8694e7ac16df018"
upstream_updated_at: "2025-12-27T18:49:38.390Z"
---
# 农贸市场（色彩缤纷的农产品，坦诚）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[farmers-market-colorful-produce-candid](https://prompts.chat/prompts/farmers-market-colorful-produce-candid)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

本提示描述了在农贸市场生成年轻成年女性逼真图像的详细场景。它的重点是保持主体的身份，捕捉坦率的情感，并创造一个充满活力、现实的市场环境。该提示包括有关拍摄对象的外观、姿势、设置和相机技术细节的具体说明，以确保获得高质量、逼真的图像。

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
  "类别": "FARMERS_MARKET_PRODUCE_CANDID",
  “身份锁”：{
    “启用”：正确，
    “优先级”：“ABSOLUTE_MAX”，
    "instruction": "将身份准确锁定到参考图像。仅限 21 岁以上成人。面部无变化。"
  },
  “主题”：{
    "demographics": "成年女性，21-29，匹配参考身份。",
    “头发”：{
      "color": "匹配参考。",
      "style": "宽松的波浪，塞在耳后",
      "texture": "可见股线，轻微飞散",
      "movement": "行走时的自然运动"
    },
    “脸”：{
      "eyes": "精确的参考眼睛；明亮的日光眼神光",
      "skin_details": "毛孔清晰，自然阳光照射纹理",
      "micro_details": "保留标记"
    },
    “服装”：{
      "outfit": "休闲黑色上衣 + 轻便夹克（无徽标/文字）",
      "fabric": "可见棉/牛仔布编织"
    },
    “配件”：{
      "bag": "帆布手提包（无徽标）",
      "jewelry": ["小银圈"],
      "props": ["产品纸袋（无品牌）"]
    }
  },
  “姿势”：{
    "type": "坦诚相见",
    "orientation": "半身",
    "hands": "一只手拿着农产品袋，另一只手调节手提带",
    "gaze": "笑着看着镜头",
    “表情”：“灿烂、自然的微笑”
  },
  “设置”：{
    "environment": "户外农贸市场",
    “背景元素”：[
      “色彩缤纷的水果/蔬菜摊位（没有可读的标志）”，
      “人群模糊（没有可识别的面孔）”，
      《阳光斑驳》
    ],
    "deep": "主体清晰；背景生动的散景"
  },
  “相机”：{
    "shot_type": "半身生活方式",
    "angle": "眼睛水平",
    "focal_length_equivalent": "26mm 手机或 35mm 编辑",
    "framing": "4:5，主体偏离中心",
    "focus": "脸部锐利，背景柔和"
  },
  “照明”：{
    "source": "自然光",
    "direction": "软正面/侧面",
    "highlights": "自然的面部亮点",
    “shadows”：“柔软的下巴”
  },
  “心情和表达”：{
    "tone": "新鲜、快乐、有共鸣",
    "atmosphere": "周末坦诚"
  },
  “风格和现实主义”：{
    "style": "逼真的 IG 生活方式",
    “imperfections”：“允许农产品袋边缘出现轻微运动模糊”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    “分辨率”：“高”，
    “噪音”：“低”，
    “模式变体”：{
      "amateur": "稍微摇晃的偷拍取景，温和的 HDR，不完美的裁剪",
      “pro”：“干净的编辑曝光、清晰的细节、浅景深”
    }
  },
  “约束”：{
    “仅限成人”：正确，
    “single_subject_only”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确，
    “无可读标牌”：true
  },
  “否定提示”：[
    “可读文本”、“徽标”、“水印”、
    “身份漂移”、“面孔变形”、
    “多余的手指”、“扭曲的手”、
    “塑料皮肤”、“过度平滑”
  ]
}
```

---

## English Original

### Title

Farmers Market (colorful produce, candid)

### Description

This prompt describes a detailed scenario for generating a photorealistic image of a young adult woman at a farmers market. It focuses on maintaining the subject's identity, capturing candid emotions, and creating a vibrant, realistic market setting. The prompt includes specific instructions for the subject's appearance, pose, setting, and technical camera details to ensure a high-quality, lifelike image.

### Prompt

```md
{
  "category": "FARMERS_MARKET_PRODUCE_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Adult 21+ only. No face changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Loose waves, tucked behind ear",
      "texture": "Strands visible, mild flyaways",
      "movement": "Natural movement while walking"
    },
    "face": {
      "eyes": "Exact reference eyes; bright daylight catchlights",
      "skin_details": "Pores visible, natural sunlit texture",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outfit": "Casual black top + light jacket (no logos/text)",
      "fabric": "Cotton/denim weave visible"
    },
    "accessories": {
      "bag": "Canvas tote (no logos)",
      "jewelry": ["Small silver hoops"],
      "props": ["Paper bag of produce (unbranded)"]
    }
  },
  "pose": {
    "type": "Walking candid",
    "orientation": "Half-body",
    "hands": "One hand holding produce bag, other adjusting tote strap",
    "gaze": "Looking at camera mid-laugh",
    "expression": "Bright, natural smile"
  },
  "setting": {
    "environment": "Outdoor farmers market",
    "background_elements": [
      "Colorful fruit/vegetable stalls (no readable signs)",
      "Soft crowd blur (no identifiable faces)",
      "Sunlight dappling"
    ],
    "depth": "Subject sharp; background lively bokeh"
  },
  "camera": {
    "shot_type": "Half-body lifestyle",
    "angle": "Eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5, subject off-center",
    "focus": "Face sharp; background soft"
  },
  "lighting": {
    "source": "Natural daylight",
    "direction": "Soft front/side",
    "highlights": "Natural facial highlights",
    "shadows": "Soft under-chin"
  },
  "mood_and_expression": {
    "tone": "Fresh, happy, relatable",
    "atmosphere": "Weekend candid"
  },
  "style_and_realism": {
    "style": "Photorealistic IG lifestyle",
    "imperfections": "Minor motion blur in produce bag edges allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Low",
    "mode_variants": {
      "amateur": "Slightly shaky candid framing, mild HDR, imperfect crop",
      "pro": "Clean editorial exposure, crisp detail, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_signage": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "identity drift", "face morphing",
    "extra fingers", "warped hands",
    "plastic skin", "over-smoothing"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [farmers-market-colorful-produce-candid](https://prompts.chat/prompts/farmers-market-colorful-produce-candid) |
| Category | Image Generation (`image-generation`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T18:49:38.390Z |
