---
id: "cmjr1sb2j0001l404285zlvqq"
slug: "image-analysis-for-night-portrait-in-heavy-snowfall"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/image-analysis-for-night-portrait-in-heavy-snowfall"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "75ab114f080201860053345a109b88712d84a8d1e92b2d5c32c2e71c6d9e16af"
upstream_updated_at: "2025-12-29T11:01:03.547Z"
---
# 大雪夜景人像图像分析

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[image-analysis-for-night-portrait-in-heavy-snowfall](https://prompts.chat/prompts/image-analysis-for-night-portrait-in-heavy-snowfall)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

分析大雪期间在住宅区停车场拍摄的逼真、坦率的夜间肖像。这张照片的主角是一位单身女性

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
  “图像分析”：{
    “元”：{
      “类型”：“真实感”，
      "风格": "candid_night_portrait",
      “主题数”：1
    },
    “环境”：{
      “类型”：“户外”，
      “位置”：“住宅综合体停车场”，
      "天气": "大雪",
      "time_of_day": "晚上",
      “atmosphere”：“寒冷、冬日、城市”
    },
    “相机设置”：{
      "lens_type": "wide_angle_smartphone_lens",
      “视角”：“眼睛水平”，
      "depth_of_field": "moderate_focus_falloff",
      "focus_point": "subject_full_body",
      “颗粒”：“visible_iso_noise”
    },
    “照明”：{
      "summary": "具有强烈大气色偏的混合照明",
      “来源”：[
        {
          “id”：“light_source_1”，
          “类型”：“天空发光光污染”，
          “颜色”：“深橙色红色”，
          “强度”：“高环境”，
          "角度": "开销_扩散",
          “效果”：“casts_reddish_hue_on_snow_and_background”
        },
        {
          “id”：“light_source_2”，
          “类型”：“街道灯”，
          “颜色”：“暖黄色”，
          “强度”：“中等”，
          "angle": "背景分散",
          “效果”：“照亮_建筑物_和_停放_汽车”
        },
        {
          “id”：“light_source_3”，
          “类型”：“camera_flash_or_direct_source”，
          “颜色”：“冷白”，
          “强度”：“高”，
          “角度”：“正面”，
          “效果”：“highlights_subject_face_legs_and_jacket_texture”
        }
      ]
    },
    “人”：[
      {
        “id”：“person_1”，
        “人口统计”：{
          “性别”：“女”，
          “年龄组”：“年轻成人”，
          “body_type”：“修长”
        },
        “方向”：{
          "body_direction": "faceing_camera_angled_right",
          "face_direction": "面对相机",
          “凝视”：“朝向_camera_slightly_down”
        },
        “情感和态度”：{
          "primary_emotion": "playful_shy",
          "secondary_emotion": "快乐",
          "淫荡": "moderate_playful_allure",
          "vibe": "candid_winter_fun",
          "position_impact": "relaxed_stance_conveys_comfort_despite_cold"
        },
        “姿势细节”：{
          "一般": "stand_full_body",
          "feet_position": "left_foot_planted_right_foot_slightly_forward_relaxed",
          “手的位置”：{
            "left_hand": "raised_covering_mouth_fingers_curled",
            "right_hand": "hanging_loose_by_side"
          },
          “visible_extent”：“full_body_head_to_toe”
        },
        “头和脸”：{
          “头发”：{
            “颜色”：“深棕色”，
            "风格": "loose_waves_shoulder_length",
            “纹理”：“厚体积”，
            “条件”：“有雪花斑点”
          },
          “面结构”：{
            “形状”：“椭圆形”，
            "额头": "partially_covered_by_hair_parting",
            "眼睛": "dark_slightly_squinting_smiling",
            "nose": "partially_obscured_by_hand",
            "mouth": "covered_by_hand_hiding_smile",
            “skin_tone”：“fair_Illuminated_by_flash”
          },
          “化妆”：{
            “风格”：“natural_minimal”，
            “visible_details”：“red_nail_polish_visible_on_hand”
          }
        },
        “身体分析”：{
          "skin_tone": "fair_tan_on_legs",
          "neck": "covered_by_jacket_collar",
          “肩膀”：“加宽_超大_夹克”，
          “胸部”：{
            "ratio_to_body": "obscured_by_thick_outerwear",

“可见性”：“隐藏”，
            "bra_status": "不确定"
          },
          “腰腹”：{
            "ratio": "obscured_by_straight_cut_jacket",
            “可见性”：“隐藏”
          },
          “臀部臀肌”：{
            "ratio": "standard_to_slender_frame",
            “可见性”：“部分被夹克下摆覆盖”
          },
          “腿”：{
            “描述”：“prominent_slender_toned”，
            “可见性”：“从大腿中部到膝盖的暴露”，
            “比率”：“躯干相对长度”
          }
        },
        “服装和配饰”：{
          “外套”：{
            "item": "shearling_aviator_jacket",
            “颜色”：“black_with_white_lined”，
            “材质”：“leather_faux_leather_wool”，
            “适合”：“oversized_boxy”，
            “lighting_effect”：“absorbs_light_reflects_snow_flakes”
          },
          “下体”：{
            "item": "迷你裙或裙子下摆",
            “颜色”：“黑色”，
            “可见性”：“在夹克下几乎不可见”
          },
          “腿装”：{
            "item": "连裤袜_紧身衣",
            “完成”：“闪亮的光泽”，
            “颜色”：“裸米色”，
            “lighting_effect”：“highly_reflective_of_flash”
          },
          “鞋类”：{
            "item": "knee_high_boots",
            “颜色”：“黑色”，
            “材质”：“皮革_合成”，
            "condition": "covered_in_snow_at_base",
            “风格”：“平底或低跟_实用”
          },
          “配件”：{
            “珠宝”：“ring_on_left_ring_finger_silver”
          }
        }
      }
    ],
    “场景中的对象”：[
      {
        “对象”：“车辆”，
        “描述”：“sedan_cars_parked_in_rows”，
        “状态”：“stationary_covered_in_snow”，
        “颜色”：[“灰色”，“白色”，“银色”]，
        “目的”：“background_context_residential_parking”，
        “关系”：“behind_subject_creating_depth”
      },
      {
        “对象”：“建筑物”，
        "description": "multi_story_apartment_complexes",
        “风格”：“现代混凝土建筑”，
        “颜色”：[“米色”，“棕色装饰”]，
        “位置”：“背景左和右”，
        “目的”：“封闭场景”
      },
      {
        “对象”：“雪”，
        “描述”：“ground_cover_and_falling_flakes”，
        "texture": "disturbed_by_tire_tracks_and_footprints",
        “颜色”：“白色_反射_橙色_天空”，
        "位置": "前景和背景",
        “目的”：“定义气氛”
      }
    ],
    "negative_prompt": "日光、夏天、阳光、干燥的地面、室内、工作室、模糊的脸、扭曲的手、多余的手指、低分辨率、卡通、绘画、插图、裸体、比基尼、泳装、绿草、蓝天、人群、男人、动物"
  }
}
```

---

## English Original

### Title

Image Analysis for Night Portrait in Heavy Snowfall

### Description

Analyze a photorealistic, candid night portrait taken in a residential complex parking lot during heavy snowfall. The image features a single female subject with

### Prompt

```md
{
  "image_analysis": {
    "meta": {
      "type": "photorealistic",
      "style": "candid_night_portrait",
      "subject_count": 1
    },
    "environment": {
      "type": "outdoor",
      "location": "residential_complex_parking_lot",
      "weather": "heavy_snowfall",
      "time_of_day": "night",
      "atmosphere": "cold, wintery, urban"
    },
    "camera_settings": {
      "lens_type": "wide_angle_smartphone_lens",
      "perspective": "eye_level",
      "depth_of_field": "moderate_focus_falloff",
      "focus_point": "subject_full_body",
      "grain": "visible_iso_noise"
    },
    "lighting": {
      "summary": "Mixed lighting with strong atmospheric color cast",
      "sources": [
        {
          "id": "light_source_1",
          "type": "sky_glow_light_pollution",
          "color": "deep_orange_red",
          "intensity": "high_ambient",
          "angle": "overhead_diffused",
          "effect": "casts_reddish_hue_on_snow_and_background"
        },
        {
          "id": "light_source_2",
          "type": "street_lamps",
          "color": "warm_yellow",
          "intensity": "moderate",
          "angle": "background_scattered",
          "effect": "illuminates_buildings_and_parked_cars"
        },
        {
          "id": "light_source_3",
          "type": "camera_flash_or_direct_source",
          "color": "cool_white",
          "intensity": "high",
          "angle": "frontal",
          "effect": "highlights_subject_face_legs_and_jacket_texture"
        }
      ]
    },
    "people": [
      {
        "id": "person_1",
        "demographics": {
          "gender": "female",
          "age_group": "young_adult",
          "body_type": "slender_fit"
        },
        "orientation": {
          "body_direction": "facing_camera_angled_right",
          "face_direction": "facing_camera",
          "gaze": "towards_camera_slightly_down"
        },
        "emotion_and_attitude": {
          "primary_emotion": "playful_shy",
          "secondary_emotion": "joyful",
          "sensuality": "moderate_playful_allure",
          "vibe": "candid_winter_fun",
          "posture_impact": "relaxed_stance_conveys_comfort_despite_cold"
        },
        "pose_details": {
          "general": "standing_full_body",
          "feet_position": "left_foot_planted_right_foot_slightly_forward_relaxed",
          "hand_position": {
            "left_hand": "raised_covering_mouth_fingers_curled",
            "right_hand": "hanging_loose_by_side"
          },
          "visible_extent": "full_body_head_to_toe"
        },
        "head_and_face": {
          "hair": {
            "color": "dark_brown",
            "style": "loose_waves_shoulder_length",
            "texture": "thick_voluminous",
            "condition": "speckled_with_snowflakes"
          },
          "face_structure": {
            "shape": "oval",
            "forehead": "partially_covered_by_hair_parting",
            "eyes": "dark_slightly_squinting_smiling",
            "nose": "partially_obscured_by_hand",
            "mouth": "covered_by_hand_hiding_smile",
            "skin_tone": "fair_illuminated_by_flash"
          },
          "makeup": {
            "style": "natural_minimal",
            "visible_details": "red_nail_polish_visible_on_hand"
          }
        },
        "body_analysis": {
          "skin_tone": "fair_tan_on_legs",
          "neck": "covered_by_jacket_collar",
          "shoulders": "broadened_by_oversized_jacket",
          "chest": {
            "ratio_to_body": "obscured_by_thick_outerwear",
            "visibility": "hidden",
            "bra_status": "indeterminate"
          },
          "waist_belly": {
            "ratio": "obscured_by_straight_cut_jacket",
            "visibility": "hidden"
          },
          "hips_glutes": {
            "ratio": "standard_to_slender_frame",
            "visibility": "partially_covered_by_jacket_hem"
          },
          "legs": {
            "description": "prominent_slender_toned",
            "visibility": "exposed_from_mid_thigh_to_knee",
            "ratio": "long_relative_to_torso"
          }
        },
        "clothing_and_accessories": {
          "outerwear": {
            "item": "shearling_aviator_jacket",
            "color": "black_with_white_lining",
            "material": "leather_faux_leather_wool",
            "fit": "oversized_boxy",
            "lighting_effect": "absorbs_light_reflects_snow_flakes"
          },
          "lower_body": {
            "item": "mini_skirt_or_dress_hem",
            "color": "black",
            "visibility": "barely_visible_under_jacket"
          },
          "leg_wear": {
            "item": "pantyhose_tights",
            "finish": "shiny_glossy",
            "color": "nude_beige",
            "lighting_effect": "highly_reflective_of_flash"
          },
          "footwear": {
            "item": "knee_high_boots",
            "color": "black",
            "material": "leather_synthetic",
            "condition": "covered_in_snow_at_base",
            "style": "flat_or_low_heel_practical"
          },
          "accessories": {
            "jewelry": "ring_on_left_ring_finger_silver"
          }
        }
      }
    ],
    "objects_in_scene": [
      {
        "object": "vehicles",
        "description": "sedan_cars_parked_in_rows",
        "state": "stationary_covered_in_snow",
        "colors": ["grey", "white", "silver"],
        "purpose": "background_context_residential_parking",
        "relation": "behind_subject_creating_depth"
      },
      {
        "object": "buildings",
        "description": "multi_story_apartment_complexes",
        "style": "modern_concrete_architecture",
        "colors": ["beige", "brown_trim"],
        "location": "background_left_and_right",
        "purpose": "encloses_scene"
      },
      {
        "object": "snow",
        "description": "ground_cover_and_falling_flakes",
        "texture": "disturbed_by_tire_tracks_and_footprints",
        "color": "white_reflecting_orange_sky",
        "location": "foreground_and_background",
        "purpose": "defines_atmosphere"
      }
    ],
    "negative_prompt": "daylight, summer, sunshine, dry ground, indoor, studio, blurry face, distorted hands, extra fingers, low resolution, cartoon, painting, illustration, nudity, bikini, swimwear, green grass, blue sky, crowd, men, animals"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [image-analysis-for-night-portrait-in-heavy-snowfall](https://prompts.chat/prompts/image-analysis-for-night-portrait-in-heavy-snowfall) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | hasangariban |
| Updated At | 2025-12-29T11:01:03.547Z |
