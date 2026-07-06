# 逼真的镜子自拍分析

## 中文说明

此结构化 JSON 提示分析具有喜怒无常魅力的逼真镜子自拍照，捕获有关场景中的环境、灯光、主题和物体的详细信息。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “图像分析”：{
    “元”：{
      “类型”：“真实感”，
      "风格": "mirror_selfie_low_key",
      “主题数”：1，
      “审美”：“moody_allure_social_media_aesthetic”
    },
    “环境”：{
      “类型”：“室内”，
      “位置”：“浴室或换衣室”，
      “详细信息”：“black_tiled_walls_with_white_grout”，
      "气氛": "intimate_dim_warm",
      “time_of_day”：“不确定的人工光”
    },
    “相机设置”：{
      "lens_type": "smartphone_main_camera",
      “透视”：“mirror_reflection_eye_level”，
      "framing": "medium_shot_waist_up",
      "focus_point": "躯干和手机",
      “景深”：“深度焦点”
    },
    “照明”：{
      "summary": "低调单色红色氛围灯",
      “来源”：[
        {
          “id”：“light_source_1”，
          “类型”：“开销_环境”，
          “颜色”：“深红橙色”，
          “强度”：“dim_moody”，
          “角度”：“自上而下”，
          “效果”：“creates_strong_shadows_under_bust_and_ribs_casts_red_hue_on_skin”
        },
        {
          “id”：“light_source_2”，
          “类型”：“屏幕发光”，
          “颜色”：“faint_white”，
          “强度”：“非常低”，
          “角度”：“正面”，
          “效果”：“minimal_reflection_on_fingers”
        }
      ]
    },
    “人”：[
      {
        “id”：“person_1”，
        “人口统计”：{
          “性别”：“女”，
          “年龄组”：“年轻成人”，
          “body_type”：“slender_athletic_toned”
        },
        “方向”：{
          "body_direction": "faceing_mirror_frontal",
          "face_direction": "face_mirror_obscured",
          “凝视”：“obscured_behind_phone”
        },
        “情感和态度”：{
          "primary_emotion": "自信",
          "secondary_emotion": "诱人",
          "sensuality": "high_provocative",
          "vibe": "private_bold",
          "posture_impact": "upright_posture_accentuates_torso_definition"
        },
        “姿势细节”：{
          "general": "stand_mirror_selfie",
          "feet_position": "not_visible",
          “手的位置”：{
            "right_hand": "holding_phone_near_face_fingers_extended",
            “left_hand”：“hanging_loose_by_side_out_of_frame”
          },
          “visible_extent”：“hips_to_top_of_head”
        },
        “头和脸”：{
          “头发”：{
            “颜色”：“深棕色”，
            “样式”：“pulled_back_or_updo”，
            “纹理”：“indistinguishable_due_to_shadow”
          },
          “面结构”：{
            “可见性”：“通过手机遮挡”，
            "耳朵": "部分可见",
            “skin_tone”：“fair_luminated_red”
          }
        },
        “身体分析”：{
          "skin_tone": "fair_reflecting_red_light",
          "neck": "elongated_partially_covered_by_collar",
          “肩膀”：“slender_angular”，
          “胸部”：{
            "ratio_to_body": "比例自然",
            "bra_status": "no_bra_visible",
            "nipples_visible": "implied_shape_under_fabric_no_direct_exposure",
            “曝光”：“deep_plunge_cleavage_visible_due_to_unzipped_top”，
            "size_estimate": "moderate_natural"
          },
          “腰腹”：{
            “状况”：“toned_flat_stomach”，
            “定义”：“visible_linea_alba_and_rib_outline”，
            "ratio": "narrow_waist_athletic_build",
            “详细信息”：“small_tattoo_visible_on_left_ribcage”
          },
          “臀部”：{
            “可见性”：“top_curve_visible”，

“比率”：“slender_transition_from_waist”
          }
        },
        “服装和配饰”：{
          “上身”：{
            "item": "罗纹针织开衫",
            “颜色”：“cream_or_white_appearing_pinkish_red”，
            "款式": "high_neck_zip_up_long_sleeve",
            "fit": "tight_form_fitting",
            “状态”：“解压缩到底部暴露躯干”
          },
          “下体”：{
            "item": "underwear_or_lounge_pants_waistband",
            "品牌": "Calvin_Klein_(visible_logo_fragment)",
            “颜色”：“灰色混合”，
            “风格”：“低层”，
            “可见性”：“仅腰带”
          },
          “珠宝”：{
            “项目”：“项链”，
            “类型”：“thin_chain_with_bar_pendant”，
            “位置”：“悬挂_之间_分裂”
          },
          “钉子”：{
            "风格": "long_manicured_oval",
            “颜色”：“中性光”
          }
        }
      }
    ],
    “场景中的对象”：[
      {
        “对象”：“智能手机”，
        “描述”：“iPhone_Pro_model_with_triple_lens”，
        “颜色”：“银色或浅灰色”，
        “目的”：“捕获设备和人脸掩码”，
        “关系”：“held_in_right_hand_center_frame”
      },
      {
        “对象”：“镜子”，
        “描述”：“large_wall_mirror”，
        "目的": "medium_for_selfie",
        “关系”：“reflects_subject_and_background”
      },
      {
        “对象”：“瓷砖”，
        “描述”：“black_square_tiles_white_grout”，
        “位置”：“背景墙”，
        “目的”：“纹理和对比度”
      }
    ],
    "negative_prompt": "明亮的光线、阳光、户外、人群、风景、凌乱的房间、蓝光、霓虹绿、牛仔布、连衣裙、鞋子、模糊、粒状、像素化、低质量、扭曲、额外的肢体、绘画、插图、卡通"
  }
}
```

---

## English Original

### Title

Photorealistic Mirror Selfie Analysis

### Description

This structured JSON prompt analyzes a photorealistic mirror selfie with a moody allure, capturing details about the environment, lighting, subject, and objects in the scene.

### Prompt

```md
{
  "image_analysis": {
    "meta": {
      "type": "photorealistic",
      "style": "mirror_selfie_low_key",
      "subject_count": 1,
      "aesthetic": "moody_allure_social_media_aesthetic"
    },
    "environment": {
      "type": "indoor",
      "location": "bathroom_or_changing_room",
      "details": "black_tiled_walls_with_white_grout",
      "atmosphere": "intimate_dim_warm",
      "time_of_day": "indeterminate_artificial_light"
    },
    "camera_settings": {
      "lens_type": "smartphone_main_camera",
      "perspective": "mirror_reflection_eye_level",
      "framing": "medium_shot_waist_up",
      "focus_point": "torso_and_phone",
      "depth_of_field": "deep_focus"
    },
    "lighting": {
      "summary": "Low-key monochromatic red ambient lighting",
      "sources": [
        {
          "id": "light_source_1",
          "type": "overhead_ambient",
          "color": "deep_red_orange",
          "intensity": "dim_moody",
          "angle": "top_down",
          "effect": "creates_strong_shadows_under_bust_and_ribs_casts_red_hue_on_skin"
        },
        {
          "id": "light_source_2",
          "type": "screen_glow",
          "color": "faint_white",
          "intensity": "very_low",
          "angle": "frontal",
          "effect": "minimal_reflection_on_fingers"
        }
      ]
    },
    "people": [
      {
        "id": "person_1",
        "demographics": {
          "gender": "female",
          "age_group": "young_adult",
          "body_type": "slender_athletic_toned"
        },
        "orientation": {
          "body_direction": "facing_mirror_frontal",
          "face_direction": "facing_mirror_obscured",
          "gaze": "obscured_behind_phone"
        },
        "emotion_and_attitude": {
          "primary_emotion": "confident",
          "secondary_emotion": "seductive",
          "sensuality": "high_provocative",
          "vibe": "private_bold",
          "posture_impact": "upright_posture_accentuates_torso_definition"
        },
        "pose_details": {
          "general": "standing_mirror_selfie",
          "feet_position": "not_visible",
          "hand_position": {
            "right_hand": "holding_phone_near_face_fingers_extended",
            "left_hand": "hanging_loose_by_side_out_of_frame"
          },
          "visible_extent": "hips_to_top_of_head"
        },
        "head_and_face": {
          "hair": {
            "color": "dark_brown",
            "style": "pulled_back_or_updo",
            "texture": "indistinguishable_due_to_shadow"
          },
          "face_structure": {
            "visibility": "obscured_by_phone",
            "ears": "partially_visible",
            "skin_tone": "fair_illuminated_red"
          }
        },
        "body_analysis": {
          "skin_tone": "fair_reflecting_red_light",
          "neck": "elongated_partially_covered_by_collar",
          "shoulders": "slender_angular",
          "chest": {
            "ratio_to_body": "proportional_natural",
            "bra_status": "no_bra_visible",
            "nipples_visible": "implied_shape_under_fabric_no_direct_exposure",
            "exposure": "deep_plunge_cleavage_visible_due_to_unzipped_top",
            "size_estimation": "moderate_natural"
          },
          "waist_belly": {
            "condition": "toned_flat_stomach",
            "definition": "visible_linea_alba_and_rib_outline",
            "ratio": "narrow_waist_athletic_build",
            "details": "small_tattoo_visible_on_left_ribcage"
          },
          "hips": {
            "visibility": "top_curve_visible",
            "ratio": "slender_transition_from_waist"
          }
        },
        "clothing_and_accessories": {
          "upper_body": {
            "item": "ribbed_knit_cardigan",
            "color": "cream_or_white_appearing_pinkish_red",
            "style": "high_neck_zip_up_long_sleeve",
            "fit": "tight_form_fitting",
            "state": "unzipped_to_bottom_exposing_torso"
          },
          "lower_body": {
            "item": "underwear_or_lounge_pants_waistband",
            "brand": "Calvin_Klein_(visible_logo_fragment)",
            "color": "grey_melange",
            "style": "low_rise",
            "visibility": "waistband_only"
          },
          "jewelry": {
            "item": "necklace",
            "type": "thin_chain_with_bar_pendant",
            "position": "hanging_between_cleavage"
          },
          "nails": {
            "style": "long_manicured_oval",
            "color": "light_neutral"
          }
        }
      }
    ],
    "objects_in_scene": [
      {
        "object": "smartphone",
        "description": "iPhone_Pro_model_with_triple_lens",
        "color": "silver_or_light_grey",
        "purpose": "capture_device_and_face_mask",
        "relation": "held_in_right_hand_center_frame"
      },
      {
        "object": "mirror",
        "description": "large_wall_mirror",
        "purpose": "medium_for_selfie",
        "relation": "reflects_subject_and_background"
      },
      {
        "object": "tiles",
        "description": "black_square_tiles_white_grout",
        "location": "background_walls",
        "purpose": "texture_and_contrast"
      }
    ],
    "negative_prompt": "bright light, sunlight, outdoors, crowd, landscape, messy room, blue light, neon green, denim, dress, shoes, blurred, grainy, pixelated, low quality, distortion, extra limbs, painting, illustration, cartoon"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
