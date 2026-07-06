---
id: "cmjok4u47000jie041kutaf4z"
slug: "nightclub-booth-flash-half-body-party-candids"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/nightclub-booth-flash-half-body-party-candids"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "08a39d0ceeeebfd00f133f340b36f6126188952856fa39f7eb11389d5119a81c"
upstream_updated_at: "2025-12-27T19:06:16.160Z"
---
# 夜总会摊位闪光（半身，派对偷拍）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[nightclub-booth-flash-half-body-party-candids](https://prompts.chat/prompts/nightclub-booth-flash-half-body-party-candids)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此提示会生成夜总会环境中年轻成年女性逼真的半身肖像。该主题被描绘成具有特定的属性，例如深棕色头发、时尚的黑色服装和银圈珠宝，在坦率的夜生活氛围中捕捉到。该提示强调有趣和自信的心情，使用逼真的灯光和相机设置来营造充满活力的夜生活场景。限制包括背景中没有徽标、水印或可识别的面孔。

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
  "类别": "NIGHTCLUB_BOOTH_FLASH",
  “主题”：{
    "demographics": "成年女性，21-29岁，土耳其长相，夜生活氛围。",
    “头发”：{
      “颜色”：“深棕色”，
      "style": "稍微凌乱，夜间纹理",
      "texture": "线可见，轻微光泽",
      "movement": "头发轻微移位，仿佛在跳舞"
    },
    “脸”：{
      “眼睛”：“明亮、俏皮”，
      "skin_details": "真实质感，轻微闪光",
      “妆容”：“夜间自然魅力”
    },
    “服装”：{
      "outfit": "时尚的黑色服装，无标志",
      "fabric": "真实的织物光泽（不是塑料）"
    },
    “配件”：{
      "jewelry": ["银圈"],
      "props": ["简单饮料杯（无标签）"]
    }
  },
  “姿势”：{
    "type": "半身偷拍摊位照",
    "orientation": "稍微向相机倾斜",
    "hands": "一只手拿着玻璃，另一只手向后梳头发",
    "gaze": "直接目光接触",
    “表情”：“顽皮的傻笑”
  },
  “设置”：{
    "environment": "夜总会摊位",
    “背景元素”：[
      “彩灯散景”，
      “柔和的大气雾霾（不是烟雾）”，
      “人群轮廓模糊（无法识别面孔）”
    ],
    “深度”：“脸部锐利，背景散景沉重”
  },
  “相机”：{
    "shot_type": "半身夜生活肖像",
    "angle": "眼平，手持",
    "focal_length_equivalent": "26mm手机夜间模式",
    “取景”：“4：5”，
    “焦点”：“眼睛锐利，背景柔和”
  },
  “照明”：{
    "source": "手机闪光灯 + 俱乐部环境灯",
    "highlights": "闪光在脸上弹出，逼真的光泽",
    “shadows”：“柔和但对比鲜明的夜生活外观”
  },
  “心情和表达”：{
    "tone": "有趣、自信、坦诚",
    "atmosphere": "充满活力的夜生活"
  },
  “风格和现实主义”：{
    "style": "真实感派对 UGC",
    “imperfections”：“纹理，背景轻微模糊”
  },
  “技术细节”：{
    “纵横比”：“4：5”，
    "noise": "明显但真实的低光噪声",
    "motion_blur": "最小；仅允许在背景中使用"
  },
  “约束”：{
    “仅限成人”：正确，
    “无文本”：正确，
    “no_logos”：正确，
    “无水印”：正确
  },
  “否定提示”：[
    “可读标牌”、“徽标”、“水印”、
    “塑料皮肤”、“cgi”、
    “多余的肢体”、“扭曲的手”
  ]
}
```

---

## English Original

### Title

Nightclub Booth Flash (half-body, party candids)

### Description

This prompt generates a photorealistic half-body portrait of a young adult woman in a nightclub setting. The subject is depicted with specific attributes such as dark brown hair, trendy black clothing, and silver hoop jewelry, captured in a candid, nightlife atmosphere. The prompt emphasizes a fun and confident mood, using realistic lighting and camera settings to create an energetic nightlife scene. Constraints include no logos, watermarks, or identifiable faces in the background.

### Prompt

```md
{
  "category": "NIGHTCLUB_BOOTH_FLASH",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, nightlife vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Slightly messy, night-out texture",
      "texture": "Strands visible, slight shine",
      "movement": "Hair slightly displaced as if dancing"
    },
    "face": {
      "eyes": "Bright, playful",
      "skin_details": "Real texture, slight flash shine",
      "makeup": "Night-out natural glam"
    },
    "clothing": {
      "outfit": "Trendy black outfit, no logos",
      "fabric": "Realistic fabric sheen (not plastic)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"],
      "props": ["Simple drink glass (no labels)"]
    }
  },
  "pose": {
    "type": "Half-body candid booth shot",
    "orientation": "Leaning slightly toward camera",
    "hands": "One hand holding glass, other brushing hair back",
    "gaze": "Direct eye contact",
    "expression": "Playful smirk"
  },
  "setting": {
    "environment": "Nightclub booth",
    "background_elements": [
      "Colored lights bokeh",
      "Soft atmospheric haze (not smoke)",
      "Crowd silhouettes blurred (no faces identifiable)"
    ],
    "depth": "Face sharp, background bokeh heavy"
  },
  "camera": {
    "shot_type": "Half-body nightlife portrait",
    "angle": "Eye-level, handheld",
    "focal_length_equivalent": "26mm phone night mode",
    "framing": "4:5",
    "focus": "Eyes sharp, background soft"
  },
  "lighting": {
    "source": "Phone flash + ambient club lights",
    "highlights": "Flash pop on face, realistic shine",
    "shadows": "Soft but contrasty nightlife look"
  },
  "mood_and_expression": {
    "tone": "Fun, confident, candid",
    "atmosphere": "Energetic nightlife"
  },
  "style_and_realism": {
    "style": "Photorealistic party UGC",
    "imperfections": "Grain, slight blur in background"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Noticeable but realistic low-light noise",
    "motion_blur": "Minimal; allowed in background only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable signage", "logos", "watermark",
    "plastic skin", "cgi",
    "extra limbs", "warped hands"
  ]
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [nightclub-booth-flash-half-body-party-candids](https://prompts.chat/prompts/nightclub-booth-flash-half-body-party-candids) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2025-12-27T19:06:16.160Z |
