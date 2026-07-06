---
id: "cmk5gxiub0001l404m59d4jpw"
slug: "ultra-realistic-winter-cinematography-series"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ultra-realistic-winter-cinematography-series"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "964f35e4b12d63cb8cdab0e7b0d1b502fa011c8fae6de81c08816eb44065eea1"
upstream_updated_at: "2026-01-08T13:13:49.988Z"
---
# 超写实冬季电影系列

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ultra-realistic-winter-cinematography-series](https://prompts.chat/prompts/ultra-realistic-winter-cinematography-series)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

创建一系列超逼真的冬季电影图像，在多个帧中具有一致的特征。每帧对面部表情、环境和电影风格都有独特的要求，确保灯光、氛围和身份的高度真实性和连续性。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Art、Character Development 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “版本”：“2.1”，
  "type": "multi_frame_winter_cinematography",
  “身份”：{
    "reference_face": "使用参考照片的脸部，身份准确度为 100%。",
    “一致性”：“所有帧中都是同一个人；可见相同的面部结构、皮肤纹理、发型和年龄。”
  },
  “风格”：{
    "cinematography": "具有 85mm 镜头特征的超现实冬季电影摄影。",
    "color_grade": "微妙的蓝色冬季渐变，冷色调，柔和的高光。",
    “气氛”：“柔和的漫射冬日光线，细小的悬浮雪花，温和的冷雾。”
  },
  “框架”：[
    {
      "frame_id": "顶部框架",
      "description": "雪林中人的侧面肖像。",
      “要求”：{
        "face_visibility": "侧面轮廓完全可见。",
        "identity_match": "与参考人脸完美匹配。",
        "express": "从侧面可见温暖、自然的微笑。",
        “环境”：{
          "location": "冰雪覆盖的森林",
          "lighting": "柔和的冬日早晨光线塑造面部轮廓",
          “元素”：[
            “雪花轻轻飘落”，
            “肉眼可见的冰冷气息”，
            《冬日的薄雾》
          ]
        },
        “衣柜”：{
          "coat": "深色冬季外套",
          "scarf": "深色或中性色调的冬季围巾"
        },
        “相机”：{
          “镜头”：“85毫米”，
          "depth_of_field": "浅",
          "look": "超现实的冬季电影外观"
        }
      }
    },
    {
      "frame_id": "中间帧",
      "description": "走过一条狭窄的雪林小路时的后背特写。",
      “要求”：{
        "face_visibility": "脸部不能完全可见；严格向后转。",
        "identity_cues": "体型、姿势和服装必须清楚地表明同一个人。",
        “环境”：{
          "location": "狭窄的白雪覆盖的森林小道",
          "forbidden_elements": ["没有鸟居门"],
          "trees": "高大的光秃秃的树木微微弯曲，形成一条天然的雪廊",
          "atmosphere": "安静、祥和的冬季寂静，雪花飘落"
        },
        “衣柜”：{
          "coat": "与顶框相同的深色冬季外套",
          "scarf": "同一条围巾"
        },
        “相机”：{
          “镜头”：“85毫米”，
          "shot_type": "后面特写",
          "depth_of_field": "浅景深的柔和背景"
        }
      }
    },
    {
      "frame_id": "底部框架",
      "description": "极端特写向上看，冬雪飘落。",
      “要求”：{
        "face_visibility": "极度特写，脸部完全可见。",
        "identity_match": "与参考人脸完全匹配。",
        "express": "向上看时温柔、温暖的微笑。",
        “环境”：{
          “元素”：[
            “雪花飘落，却没有触及脸庞”，
            “仅前景和背景有雪”，
            “没有可见的呼吸蒸汽或口腔蒸汽”，
            “周围环境中的柔和冬季雾霾”
          ]
        },
        “相机”：{
          “镜头”：“85毫米”，
          "depth_of_field": "非常浅",
          “detail”：“高度真实感，清晰的皮肤纹理，选择性聚焦的雪花”
        },
        “lighting”：“柔和的冬日光线，带有微妙的蓝色反射”
      }
    }
  ],
  “全局约束”：{
    "identity": "参考脸部必须在所有可见脸部帧中完美再现。",

"连续性": "所有帧中的灯光、冬季调色板、镜头特征和氛围必须保持一致。",
    "realism_level": "超现实、电影级的冬季精度。"
  }
}
{
  “版本”：“2.1”，
  "type": "multi_frame_winter_cinematography",
  “身份”：{
    "reference_face": "使用参考照片的脸部，身份准确度为 100%。",
    “一致性”：“所有帧中都是同一个人；可见相同的面部结构、皮肤纹理、发型和年龄。”
  }，
  “风格”： {

"cinematography": "具有 85mm 镜头特征的超现实冬季电影摄影。",
    "color_grade": "微妙的蓝色冬季渐变，冷色调，柔和的高光。",
    “气氛”：“柔和的漫射冬日光线，细小的悬浮雪花，温和的冷雾。”
  },
  “框架”：[
    {
      "frame_id": "顶部框架",
      "description": "雪林中人的侧面肖像。",
      “要求”：{
        "face_visibility": "侧面轮廓完全可见。",
        "identity_match": "与参考人脸完美匹配。",
        "express": "从侧面可见温暖、自然的微笑。",
        “环境”：{
          "location": "冰雪覆盖的森林",
          "lighting": "柔和的冬日早晨光线塑造面部轮廓",
          “元素”：[
            “雪花轻轻飘落”，
            “肉眼可见的冰冷气息”，
            《冬日的薄雾》
          ]
        },
        “衣柜”：{
          "coat": "深色冬季外套",
          "scarf": "深色或中性色调的冬季围巾"
        },
        “相机”：{
          “镜头”：“85毫米”，
          "depth_of_field": "浅",
          "look": "超现实的冬季电影外观"
        }
      }
    },
    {
      "frame_id": "中间帧",
      "description": "走过一条狭窄的雪林小路时的后背特写。",
      “要求”：{
        "face_visibility": "脸部不能完全可见；严格向后转。",
        "identity_cues": "体型、姿势和服装必须清楚地表明同一个人。",
        “环境”：{
          "location": "狭窄的白雪覆盖的森林小道",
          "forbidden_elements": ["没有鸟居门"],
          "trees": "高大的光秃秃的树木微微弯曲，形成一条天然的雪廊",
          "atmosphere": "安静、祥和的冬季寂静，雪花飘落"
        },
        “衣柜”：{
          "coat": "与顶框相同的深色冬季外套",
          "scarf": "同一条围巾"
        },
        “相机”：{
          “镜头”：“85毫米”，
          "shot_type": "后面特写",
          "depth_of_field": "浅景深的柔和背景"
        }
      }
    },
    {
      "frame_id": "底部框架",
      "description": "极端特写向上看，冬雪飘落。",
      “要求”：{
        "face_visibility": "极度特写，脸部完全可见。",
        "identity_match": "与参考人脸完全匹配。",
        "express": "向上看时温柔、温暖的微笑。",
        “环境”：{
          “元素”：[
            “雪花飘落，却没有触及脸庞”，
            “仅前景和背景有雪”，
            “没有可见的呼吸蒸汽或口腔蒸汽”，
            “周围环境中的柔和冬季雾霾”
          ]
        },
        “相机”：{
          “镜头”：“85毫米”，
          "depth_of_field": "非常浅",
          “detail”：“高度真实感，清晰的皮肤纹理，选择性聚焦的雪花”
        },
        “lighting”：“柔和的冬日光线，带有微妙的蓝色反射”
      }
    }
  ],
  “全局约束”：{
    "identity": "参考脸部必须在所有可见脸部帧中完美再现。",
    "连续性": "所有帧中的灯光、冬季调色板、镜头特征和氛围必须保持一致。",
    "realism_level": "超现实、电影级的冬季精度。"
  }
}
```

---

## English Original

### Title

Ultra-Realistic Winter Cinematography Series

### Description

Create a series of ultra-realistic winter cinematography images featuring a consistent character across multiple frames. Each frame has unique requirements for facial expressions, environment, and cinematographic style, ensuring high realism and continuity in lighting, atmosphere, and identity.

### Prompt

```md
{
  "version": "2.1",
  "type": "multi_frame_winter_cinematography",
  "identity": {
    "reference_face": "Use the reference photo’s face with 100% identity accuracy.",
    "consistency": "Same person across all frames; identical facial structure, skin texture, hairstyle and age where visible."
  },
  "style": {
    "cinematography": "Ultra-realistic winter cinematography with 85mm lens character.",
    "color_grade": "Subtle blue winter grading, cold tones, soft highlights.",
    "atmosphere": "Soft diffused winter light, fine suspended snowflakes, gentle cold haze."
  },
  "frames": [
    {
      "frame_id": "top_frame",
      "description": "Side-profile portrait of the person in a snowy forest.",
      "requirements": {
        "face_visibility": "Side profile fully visible.",
        "identity_match": "Perfect match to reference face.",
        "expression": "A warm, natural smile visible from the side profile.",
        "environment": {
          "location": "Snow-covered forest",
          "lighting": "Soft morning winter light shaping facial contours",
          "elements": [
            "Gently falling snow",
            "Visible cold breath",
            "Light winter haze"
          ]
        },
        "wardrobe": {
          "coat": "Dark winter coat",
          "scarf": "Dark or neutral-toned winter scarf"
        },
        "camera": {
          "lens": "85mm",
          "depth_of_field": "Shallow",
          "look": "Ultra-realistic winter cinematic look"
        }
      }
    },
    {
      "frame_id": "middle_frame",
      "description": "Back-turned close-up while walking through a narrow snowy forest path.",
      "requirements": {
        "face_visibility": "Face must not be visible at all; strictly back-turned.",
        "identity_cues": "Body shape, posture, and clothing must clearly indicate the same person.",
        "environment": {
          "location": "Narrow snow-covered forest path",
          "forbidden_elements": ["No torii gate"],
          "trees": "Tall bare trees bending slightly, forming a natural snowy corridor",
          "atmosphere": "Quiet, serene winter silence with falling snow"
        },
        "wardrobe": {
          "coat": "Same dark winter coat as top frame",
          "scarf": "Same scarf"
        },
        "camera": {
          "lens": "85mm",
          "shot_type": "Close-up from behind",
          "depth_of_field": "Soft background with shallow DOF"
        }
      }
    },
    {
      "frame_id": "bottom_frame",
      "description": "Extreme close-up looking upward with falling winter snow.",
      "requirements": {
        "face_visibility": "Extreme close-up, fully visible face.",
        "identity_match": "Exact match to reference face.",
        "expression": "A gentle, warm smile while looking upward.",
        "environment": {
          "elements": [
            "Snowflakes falling around but NOT touching the face",
            "Snow in foreground and background only",
            "No visible breath vapor or mouth steam",
            "Soft winter haze in the ambient environment"
          ]
        },
        "camera": {
          "lens": "85mm",
          "depth_of_field": "Very shallow",
          "detail": "High realism, crisp skin texture, selective-focus snowflakes"
        },
        "lighting": "Soft winter light with subtle blue reflections"
      }
    }
  ],
  "global_constraints": {
    "identity": "Reference face must be perfectly reproduced in all visible-face frames.",
    "continuity": "Lighting, winter palette, lens characteristics, and atmosphere must remain consistent across all frames.",
    "realism_level": "Ultra-realistic, film-grade winter accuracy."
  }
}
{
  "version": "2.1",
  "type": "multi_frame_winter_cinematography",
  "identity": {
    "reference_face": "Use the reference photo’s face with 100% identity accuracy.",
    "consistency": "Same person across all frames; identical facial structure, skin texture, hairstyle and age where visible."
  },
  "style": {

    "cinematography": "Ultra-realistic winter cinematography with 85mm lens character.",
    "color_grade": "Subtle blue winter grading, cold tones, soft highlights.",
    "atmosphere": "Soft diffused winter light, fine suspended snowflakes, gentle cold haze."
  },
  "frames": [
    {
      "frame_id": "top_frame",
      "description": "Side-profile portrait of the person in a snowy forest.",
      "requirements": {
        "face_visibility": "Side profile fully visible.",
        "identity_match": "Perfect match to reference face.",
        "expression": "A warm, natural smile visible from the side profile.",
        "environment": {
          "location": "Snow-covered forest",
          "lighting": "Soft morning winter light shaping facial contours",
          "elements": [
            "Gently falling snow",
            "Visible cold breath",
            "Light winter haze"
          ]
        },
        "wardrobe": {
          "coat": "Dark winter coat",
          "scarf": "Dark or neutral-toned winter scarf"
        },
        "camera": {
          "lens": "85mm",
          "depth_of_field": "Shallow",
          "look": "Ultra-realistic winter cinematic look"
        }
      }
    },
    {
      "frame_id": "middle_frame",
      "description": "Back-turned close-up while walking through a narrow snowy forest path.",
      "requirements": {
        "face_visibility": "Face must not be visible at all; strictly back-turned.",
        "identity_cues": "Body shape, posture, and clothing must clearly indicate the same person.",
        "environment": {
          "location": "Narrow snow-covered forest path",
          "forbidden_elements": ["No torii gate"],
          "trees": "Tall bare trees bending slightly, forming a natural snowy corridor",
          "atmosphere": "Quiet, serene winter silence with falling snow"
        },
        "wardrobe": {
          "coat": "Same dark winter coat as top frame",
          "scarf": "Same scarf"
        },
        "camera": {
          "lens": "85mm",
          "shot_type": "Close-up from behind",
          "depth_of_field": "Soft background with shallow DOF"
        }
      }
    },
    {
      "frame_id": "bottom_frame",
      "description": "Extreme close-up looking upward with falling winter snow.",
      "requirements": {
        "face_visibility": "Extreme close-up, fully visible face.",
        "identity_match": "Exact match to reference face.",
        "expression": "A gentle, warm smile while looking upward.",
        "environment": {
          "elements": [
            "Snowflakes falling around but NOT touching the face",
            "Snow in foreground and background only",
            "No visible breath vapor or mouth steam",
            "Soft winter haze in the ambient environment"
          ]
        },
        "camera": {
          "lens": "85mm",
          "depth_of_field": "Very shallow",
          "detail": "High realism, crisp skin texture, selective-focus snowflakes"
        },
        "lighting": "Soft winter light with subtle blue reflections"
      }
    }
  ],
  "global_constraints": {
    "identity": "Reference face must be perfectly reproduced in all visible-face frames.",
    "continuity": "Lighting, winter palette, lens characteristics, and atmosphere must remain consistent across all frames.",
    "realism_level": "Ultra-realistic, film-grade winter accuracy."
  }
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ultra-realistic-winter-cinematography-series](https://prompts.chat/prompts/ultra-realistic-winter-cinematography-series) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Art, Character Development |
| Contributors | gunebak4n |
| Updated At | 2026-01-08T13:13:49.988Z |
