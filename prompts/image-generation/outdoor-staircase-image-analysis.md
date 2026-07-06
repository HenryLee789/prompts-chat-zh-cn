---
id: "cmjpl8f1m000cl804d7e60hfq"
slug: "outdoor-staircase-image-analysis"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/outdoor-staircase-image-analysis"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "c228714381043ae50f28a7d0bf9e40cf5d6eaa08355232169e5d8f86e86c068b"
upstream_updated_at: "2025-12-28T10:30:24.814Z"
---
# 室外楼梯图像分析

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[outdoor-staircase-image-analysis](https://prompts.chat/prompts/outdoor-staircase-image-analysis)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

此 JSON 提示提供了对室外场景的详细分析，其中包括一位年轻女子在花园或公园入口的楼梯上，捕获场景中存在的环境、灯光、主体姿势、服装和其他对象等元素。

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
  “环境”：{
    “类型”：“户外”，
    “位置”：“楼梯”，
    “设置”：“花园或公园入口”，
    "time_of_day": "中午",
    “天气”：“晴”
  },
  “相机”：{
    “镜头”：“肖像镜头”，
    "focal_length_estimate": "50mm_to_85mm",
    “角度”：“眼睛水平”，
    "framing": "medium_shot",
    “焦点”：“对主题进行锐利”
  },
  “照明”：{
    "general_condition": "bright_natural_light",
    “来源”：[
      {
        “类型”：“太阳”，
        "角度": "头顶左侧",
        “颜色”：“暖白”，
        “强度”：“高”，
        "effect_on_objects": "creates_sharp_shadows_on_stairs_and_white_walls"
      }
    ]
  },
  “主题”：{
    "身份": "unknown_young_female",
    “方向”：{
      "body_face": "前面",
      "face_face": "前面",
      “凝视”：“direct_to_camera”
    },
    “情绪状态”：{
      "表达": "自信",
      “心情”：“平静”，
      "allure_level": "中等至高"
    },
    “姿势”：{
      "general": "stand_on_stairs",
      "姿势": "upright_slightly_arched",
      “四肢”：{
        "脚": "stand_on_steps_one_slightly_lower",
        “手”：{
          "left_hand": "extended_holding_railing",
          "right_hand": "down_holding_handbag"
        }
      },
      “可见性”：“knee_up”
    },
    “头详细信息”：{
      “结构”：“椭圆形”，
      “头发”：{
        “颜色”：“blonde_with_dark_roots”，
        "风格": "long_loose_waves",
        “离别”：“中心”，
        “质地”：“丝滑”
      },
      “脸”：{
        "额头": "smooth_partially_covered_by_hair_strands",
        "brows": "arched_groomed_brown",
        “眼睛”：{
          “颜色”：“蓝绿色”，
          “形状”：“杏仁”，
          “化妆”：“睫毛膏_眼线笔”
        },
        "鼻子": "straight_slim",
        “嘴唇”：{
          “形状”：“完整”，
          “颜色”：“粉红色光泽”，
          "表情": "轻微的微笑"
        },
        "下颌线": "定义",
        “脸颊”：“脸红了”
      }
    },
    “身体详细信息”：{
      "skin_tone": "晒黑",
      "颈部": "slender_visible",
      "shoulders": "covered_by_jacket",
      “胸部区域”：{
        "ratio_to_body": "大",
        "estimated_size": "性感",
        "bra_status": "no_visible_straps_likely_adhesive_or_none",
        "nipple_visibility": "not_visible",
        “分裂”：“deeply_visible_prominent”
      },
      “腹部”：{
        "ratio_to_body": "苗条",
        “定义”：“平色调”，
        "navel_visibility": "覆盖"
      },
      “臀部”：{
        "ratio_to_waist": "high_hourglass_shape",
        “宽度”：“弯曲”
      },
      “腿”：{
        "大腿": "smooth_toned",
        “曝光”：“visible_from_mid_thigh_down”
      }
    },
    “服装”：{
      “上身”：{
        “项目”：“夹克上衣”，
        “颜色”：“栗色_勃艮第”，
        "风格": "long_sleeve_deep_plunge_neckline_zip_front",
        “适合”：“紧身”，
        “light_interaction”：“absorbs_light_soft_shadows_in_folds”
      },
      “下体”：{
        “项目”：“短裤”，
        “颜色”：“青色_蓝色”，
        “风格”：“athletic_satin_finish_drawstring”，
        “适合”：“宽松”，
        “light_interaction”：“reflects_highlights_due_to_fabric_sheen”
      }
    },
    “配件”：[
      {
        “类型”：“项链”，
        “材质”：“银”，
        “吊坠”：“小心形”
      },
      {
        “类型”：“耳环”，
        “风格”：“箍”，
        “材质”：“金色”
      },
      {
        "type": "手提包",
        "pattern": "multicolor_floral",

“风格”：“结构化迷你包”，
        “hold_in”：“右手”
      }
    ]
  },
  “对象”：[
    {
      “名称”：“栏杆”，
      “颜色”：“黑色”，
      “材质”：“金属”，
      “位置”：“楼梯两侧”，
      “目的”：“安全和框架”
    },
    {
      “名称”：“楼梯”，
      “颜色”：“beige_treads_white_risers”，
      “材料”：“石头或混凝土”，
      “位置”：“center_foreground_to_midground”，
      “目的”：“主题平台”
    },
    {
      “名称”：“墙壁”，
      “颜色”：“白色”，
      "位置": "侧翼楼梯",
      “目的”：“建筑结构”
    },
    {
      “名称”：“植被”，
      “类型”：“树木和灌木丛”，
      “颜色”：“绿色”，
      “位置”：“背景”，
      “目的”：“自然背景”
    },
    {
      "name": "盆栽植物",
      "位置": "左中地",
      “类型”：“large_clay_pot_with_tree”，
      “颜色”：“terracotta_pot_green_leaves”
    }
  ],
  "negative_prompt": "变形的手、不良的解剖结构、毁容、模糊、低质量、水印、文本、签名、多余的肢体、缺失的手指、斗鸡眼、不对称的眼睛、不良的比例、不自然的皮肤纹理"
}
```

---

## English Original

### Title

Outdoor Staircase Image Analysis

### Description

This JSON prompt provides a detailed analysis of an outdoor scene featuring a young woman on a staircase in a garden or park entrance, capturing elements such as environment, lighting, subject posture, attire, and additional objects present in the scene.

### Prompt

```md
{
  "environment": {
    "type": "outdoor",
    "location": "staircase",
    "setting": "garden_or_park_entrance",
    "time_of_day": "mid_day",
    "weather": "sunny"
  },
  "camera": {
    "lens": "portrait_lens",
    "focal_length_estimate": "50mm_to_85mm",
    "angle": "eye_level",
    "framing": "medium_shot",
    "focus": "sharp_on_subject"
  },
  "lighting": {
    "general_condition": "bright_natural_light",
    "sources": [
      {
        "type": "sun",
        "angle": "overhead_left",
        "color": "warm_white",
        "intensity": "high",
        "effect_on_objects": "creates_sharp_shadows_on_stairs_and_white_walls"
      }
    ]
  },
  "subject": {
    "identity": "unknown_young_female",
    "orientation": {
      "body_facing": "front",
      "face_facing": "front",
      "gaze": "direct_to_camera"
    },
    "emotional_state": {
      "expression": "confident",
      "mood": "calm",
      "allure_level": "moderate_to_high"
    },
    "pose": {
      "general": "standing_on_stairs",
      "posture": "upright_slightly_arched",
      "limbs": {
        "feet": "standing_on_steps_one_slightly_lower",
        "hands": {
          "left_hand": "extended_holding_railing",
          "right_hand": "down_holding_handbag"
        }
      },
      "visibility": "knee_up"
    },
    "head_details": {
      "structure": "oval",
      "hair": {
        "color": "blonde_with_dark_roots",
        "style": "long_loose_waves",
        "parting": "center",
        "texture": "silky"
      },
      "face": {
        "forehead": "smooth_partially_covered_by_hair_strands",
        "brows": "arched_groomed_brown",
        "eyes": {
          "color": "blue_green",
          "shape": "almond",
          "makeup": "mascara_eyeliner"
        },
        "nose": "straight_slim",
        "lips": {
          "shape": "full",
          "color": "pink_glossy",
          "expression": "slight_smile"
        },
        "jawline": "defined",
        "cheeks": "blushed"
      }
    },
    "body_details": {
      "skin_tone": "tanned",
      "neck": "slender_visible",
      "shoulders": "covered_by_jacket",
      "chest_area": {
        "ratio_to_body": "large",
        "estimated_size": "voluptuous",
        "bra_status": "no_visible_straps_likely_adhesive_or_none",
        "nipple_visibility": "not_visible",
        "cleavage": "deeply_visible_prominent"
      },
      "abdomen": {
        "ratio_to_body": "slim",
        "definition": "flat_toned",
        "navel_visibility": "covered"
      },
      "hips": {
        "ratio_to_waist": "high_hourglass_shape",
        "width": "curvy"
      },
      "legs": {
        "thighs": "smooth_toned",
        "exposure": "visible_from_mid_thigh_down"
      }
    },
    "clothing": {
      "upper_body": {
        "item": "jacket_top",
        "color": "maroon_burgundy",
        "style": "long_sleeve_deep_plunge_neckline_zip_front",
        "fit": "tight_fitted",
        "light_interaction": "absorbs_light_soft_shadows_in_folds"
      },
      "lower_body": {
        "item": "shorts",
        "color": "teal_blue",
        "style": "athletic_satin_finish_drawstring",
        "fit": "loose_fit",
        "light_interaction": "reflects_highlights_due_to_fabric_sheen"
      }
    },
    "accessories": [
      {
        "type": "necklace",
        "material": "silver",
        "pendant": "small_heart_shape"
      },
      {
        "type": "earrings",
        "style": "hoops",
        "material": "gold_tone"
      },
      {
        "type": "handbag",
        "pattern": "multicolor_floral",
        "style": "structured_mini_bag",
        "held_in": "right_hand"
      }
    ]
  },
  "objects": [
    {
      "name": "railing",
      "color": "black",
      "material": "metal",
      "location": "sides_of_stairs",
      "purpose": "safety_and_framing"
    },
    {
      "name": "stairs",
      "color": "beige_treads_white_risers",
      "material": "stone_or_concrete",
      "location": "center_foreground_to_midground",
      "purpose": "platform_for_subject"
    },
    {
      "name": "walls",
      "color": "white",
      "location": "flanking_stairs",
      "purpose": "architectural_structure"
    },
    {
      "name": "vegetation",
      "type": "trees_and_bushes",
      "color": "green",
      "location": "background",
      "purpose": "natural_backdrop"
    },
    {
      "name": "potted_plant",
      "location": "left_midground",
      "type": "large_clay_pot_with_tree",
      "color": "terracotta_pot_green_leaves"
    }
  ],
  "negative_prompt": "deformed hands, bad anatomy, disfigured, blurry, low quality, watermark, text, signature, extra limbs, missing fingers, cross-eyed, asymmetrical eyes, bad proportions, unnatural skin texture"
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [outdoor-staircase-image-analysis](https://prompts.chat/prompts/outdoor-staircase-image-analysis) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | hasangariban |
| Updated At | 2025-12-28T10:30:24.814Z |
