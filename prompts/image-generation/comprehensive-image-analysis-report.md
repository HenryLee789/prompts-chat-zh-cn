# 综合图像分析报告

## 中文说明

该提示提供了图像的详细分析，包括相机设置、场景环境、空间几何、主题细节、灯光、调色板、构图以及元素之间的关系。这份综合报告利用先进的图像分析模型以高度可信的方式提供见解。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Computer Vision、AI Tools、Advanced 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “元”：{
    "source_image": "用户提供的图像",
    "analysis_timestamp": "2024-07-30T12:00:00Z",
    “analysis_model”：“image_to_json_v1.0”，
    “总体置信度”：0.99
  },
  “camera_and_exif”：{
    "camera_make": "未知",
    "camera_model": "未知",
    "lens_model": "未知",
    “焦距毫米”：50，
    “光圈光圈”：11.0，
    “快门速度”：0.004，
    “iso_值”：1600，
    "white_balance_mode": "不适用（单色）",
    “曝光补偿_ev”：0，
    “方向”：“肖像”，
    "resolution_px": "800x995",
    "color_profile": "灰度"
  },
  “场景环境”：{
    "scene_type": "室外、开放区域、临时活动设置",
    "time_of_day": "白天",
    “季节”：“未知”，
    "weather_conditions": "阴天，漫射光",
    "temple_appearance": "中性，微凉",
    “环境距离深度”：{
      “前景深度_m”：2.0，
      “中地深度_米”：15，
      “背景深度米”：60
    },
    "environment_description": "大而空的露天铺砌区域或礼堂地板，在均匀、漫射的日光下，有数百把深色折叠椅排列成不规则的行。一个孤独的人物坐在前景中，面向椅子。",
    "ground_material": "粗糙混凝土或沥青",
    “环境对象”：[
      {
        "id": "env_obj_chair_array",
        "type": "折叠椅（百张）",
        "position_relative_to_subject": "在前面，从远到远",
        “大约距离米”：5.0，
        “高度_米”：0.8，
        “宽度米”：0.45，
        “材质”：“金属框架，深色塑料/乙烯基座椅和靠背”，
        "color_dominant": "#4A4A4A",
        “texture”：“光滑的座椅/靠背，金属框架，轻微光泽”，
        “occlusion”：“部分由于从高角度角度重叠行”
      }
    ],
    “空气属性”：{
      “湿度估计”：0.6，
      “雾度”：0.15，
      “雾密度”：0.0，
      "color_tint": "不适用（单色）"
    }
  },
  “空间几何和距离”：{
    “相机位置”：{
      “x_m”：0，
      “y_m”：25.0，
      “z_m”：-8.0
    },
    “相机角度_度”：{
      “音高”：-75，
      “偏航”：0，
      “滚动”：0
    },
    “主体到相机的距离_m”：26.2，
    “对象到对象距离”：[
      {
        “object_a”：“subject_01”，
        "object_b": "env_obj_chair_array_nearest_row",
        “距离米”：5.0
      },
      {
        “object_a”：“subject_01”，
        "object_b": "env_obj_chair_array_furthest_row",
        “距离米”：60.0
      }
    ],
    “高度参考比例”：{
      “known_reference”：“人”，
      “身高米”：1.75，
      “像素与仪表之比”：0.0109
    }
  },
  “受试者和解剖学”：{
    “检测到的人”：1，
    “主题”：[
      {
        “id”：“subject_01”，
        “类别”：“人类”，
        “年龄估计”：40，
        "gender_appearance": "男",
        "body_posture": "坐着，背对镜头，向前看",
        “身高估计米”：1.75，
        “肩宽米”：0.48，
        “身体比例”：{
          “头高比”：0.125，
          “躯干与腿部之比”：0.5
        },
        “面部结构”：{
          "face_shape": "未知",
          "jawline_definition": "未知",
          "skin_tone": "不适用（单色）",
          "facial_expression": "未知",
          "eye_color": "未知",
          "hair_color": "深色",
          "hair_style": "短，梳理整齐",
          "facial_feature_asymmetry": "未知"
        },
        “场景中的位置”：{
          "relative_position": "底部中心框架",

"depth_layer": "前景-中景过渡",
          "ground_contact": "坐在椅子上，椅子腿放在地上",
          "orientation_to_camera": "远离相机旋转 180 度（回到相机）"
        },
        “服装”：[
          {
            "item": "西装外套",
            “颜色”：“#1A1A1A”，
            “材质”：“羊毛混纺”，
            “适合”：“量身定制”，
            “模式”：“普通”，
            “质地”：“光滑哑光”
          },
          {
            “商品”：“裤子”，
            “颜色”：“#1A1A1A”，
            “材质”：“羊毛混纺”，
            “适合”：“量身定制”，
            “模式”：“普通”，
            “质地”：“光滑哑光”
          },
          {
            “项目”：“椅子”，
            "颜色": "#333333",
            “材质”：“金属框架，深色塑料/乙烯基座椅”，
            "fit": "标准折叠椅",
            “模式”：“无”，
            “texture”：“光滑座椅，金属框架”
          }
        ]
      }
    ]
  },
  “照明分析”：{
    “主光源”：{
      "type": "自然漫射光",
      "direction": "头顶、全向",
      “强度_勒克斯”：8000，
      “柔软度”：“非常柔软”，
      "color_temp_k": "不适用（单色）"
    },
    “辅助灯”：[]，
    “阴影属性”：{
      “现在”：真实，
      “softness”：“非常软，几乎察觉不到”，
      “方向度”：180，
      "tint_color": "不适用（单色）"
    },
    “反思”：{
      “存在”：假
    },
    "mood_descriptor": "庄严、孤立、期待、广阔、简约、沉思"
  },
  “颜色纹理和样式”：{
    “主导调色板”：[
      “#E6E6E6”，
      “#CCCCCC”，
      “#AAAAAA”，
      “#4A4A4A”，
      “#1A1A1A”
    ],
    "palette_description": "单色调色板，深黑色和亮白色之间具有高对比度，并由广泛的中灰色调支持。整体印象鲜明且生动。",
    "saturation_level": "不适用（单色）",
    "contrast_level": "高",
    "color_temper_description": "不适用（单色）",
    "texture_map": "整个图像上可见的高频颗粒/噪声",
    "grain_quality": "精细、独特、电影般",
    “microtexture”：“地面上可见的粗糙度，西装上微妙的织物纹理，光滑的椅子”，
    "tone_balance": "浓烈的黑色、明亮的白色和丰富的中间色调，营造出图形、近乎抽象的品质。"
  },
  “构图和几何”：{
    “rule_of_thirds_alignment”：假，
    "symmetry_type": "不对称平衡，中心人物固定在底部，与上面巨大的、重复的、半对称的椅子图案形成对比",
    “leading_lines_present”：正确，
    "framing_description": "高角度、俯视拍摄，孤独的拍摄对象位于画面的底部中心，向上面向一排看似无穷无尽的空椅子，这些椅子占据了图像的上三分之二。构图强调规模、孤立和预期。",
    “深度层”：[
      “前景（主体前面的空地）”，
      “中景（主题和最近的椅子）”，
      “背景（远处的一排椅子，逐渐消失在大气视野中）”
    ],
    "perspective_type": "高角度正交，具有轻微的线性深度透视",
    "depth_of_field_strength": "深景深，从前景到背景的所有内容都清晰可见。"
  },
  “环境关系”：{
    “主体环境交互”：{

"stance": "拍摄对象坐在椅子上，位于画面底部的中央，面向广阔、安静的空椅子。",
      "shadow_cast_on": "地面直接位于主体和椅子下方，非常微妙且分散。",
      “接近对象”：[
        {
          "object_id": "env_obj_chair_array_nearest_row",
          “距离米”：5.0，
          "interaction_type": "视觉对抗、象征性观众、焦点"
        }
      ],
      "environmental_scale_perception": "在巨大的、重复的空椅子图案的映衬下，个体主体显得很小且孤立，创造了强大的规模感和潜在的意义。"
    },
    "acoustic_environment_estimate": "安静、广阔，如果在室内或大的开放空间中可能会产生回声，强调安静的沉思或期待。",
    "temple_feel": "温和到凉爽，中性，由于材料（混凝土、金属）和漫射照明。"
  },
  “输出和生成参数”：{
    “目标相似度”：0.99，
    "schema_completeness": "保留所有部分，缺失数据指示为'未知'或'n/a'",
    "color_fidelity": "单色表示中色调准确性的高优先级",
    “距离精度米”：0.5，
    “姿势精度”：0.05，
    “面部几何精度”：0.002
  },
  “隐私和安全”：{
    “face_blurring”：假，
    “pii_Detected”：假，
    “注释”：“由于拍摄对象的方向（背向相机）和图像的性质，看不到可识别的面部特征或个人信息。”
  }
}
```

---

## English Original

### Title

Comprehensive Image Analysis Report

### Description

The prompt provides a detailed analysis of an image, including camera settings, scene environment, spatial geometry, subject details, lighting, color palette, composition, and relationships between elements. This comprehensive report utilizes advanced image analysis models to deliver insights with high confidence.

### Prompt

```md
{
  "meta": {
    "source_image": "user_provided_image",
    "analysis_timestamp": "2024-07-30T12:00:00Z",
    "analysis_model": "image_to_json_v1.0",
    "overall_confidence": 0.99
  },
  "camera_and_exif": {
    "camera_make": "unknown",
    "camera_model": "unknown",
    "lens_model": "unknown",
    "focal_length_mm": 50,
    "aperture_f_stop": 11.0,
    "shutter_speed_s": 0.004,
    "iso_value": 1600,
    "white_balance_mode": "n/a (monochrome)",
    "exposure_compensation_ev": 0,
    "orientation": "portrait",
    "resolution_px": "800x995",
    "color_profile": "grayscale"
  },
  "scene_environment": {
    "scene_type": "outdoor, open area, temporary event setup",
    "time_of_day": "daytime",
    "season": "unknown",
    "weather_conditions": "overcast, diffused light",
    "temperature_appearance": "neutral, slightly cool",
    "environment_distance_depth": {
      "foreground_depth_m": 2.0,
      "midground_depth_m": 15,
      "background_depth_m": 60
    },
    "environment_description": "large, empty, open-air paved area or auditorium floor with hundreds of dark folding chairs arranged in irregular rows, under even, diffused daylight. A solitary figure is seated in the foreground, facing the chairs.",
    "ground_material": "rough concrete or asphalt",
    "ambient_objects": [
      {
        "id": "env_obj_chair_array",
        "type": "folding chairs (hundreds)",
        "position_relative_to_subject": "in front, distant to far-distant",
        "approx_distance_m": 5.0,
        "height_m": 0.8,
        "width_m": 0.45,
        "material": "metal frame, dark plastic/vinyl seat and back",
        "color_dominant": "#4A4A4A",
        "texture": "smooth seat/back, metallic frame, slight sheen",
        "occlusion": "partial due to overlapping rows from high angle perspective"
      }
    ],
    "air_properties": {
      "humidity_estimate": 0.6,
      "haze_level": 0.15,
      "fog_density": 0.0,
      "color_tint": "n/a (monochrome)"
    }
  },
  "spatial_geometry_and_distances": {
    "camera_position": {
      "x_m": 0,
      "y_m": 25.0,
      "z_m": -8.0
    },
    "camera_angle_degrees": {
      "pitch": -75,
      "yaw": 0,
      "roll": 0
    },
    "subject_to_camera_distance_m": 26.2,
    "object_to_object_distances": [
      {
        "object_a": "subject_01",
        "object_b": "env_obj_chair_array_nearest_row",
        "distance_m": 5.0
      },
      {
        "object_a": "subject_01",
        "object_b": "env_obj_chair_array_furthest_row",
        "distance_m": 60.0
      }
    ],
    "height_reference_scale": {
      "known_reference": "person",
      "height_m": 1.75,
      "pixel_to_meter_ratio": 0.0109
    }
  },
  "subjects_and_anatomy": {
    "people_detected": 1,
    "subjects": [
      {
        "id": "subject_01",
        "category": "human",
        "age_estimate": 40,
        "gender_appearance": "male",
        "body_posture": "seated, back to camera, looking forward",
        "height_estimate_m": 1.75,
        "shoulder_width_m": 0.48,
        "body_proportions": {
          "head_height_ratio": 0.125,
          "torso_to_leg_ratio": 0.5
        },
        "facial_structure": {
          "face_shape": "unknown",
          "jawline_definition": "unknown",
          "skin_tone": "n/a (monochrome)",
          "facial_expression": "unknown",
          "eye_color": "unknown",
          "hair_color": "dark",
          "hair_style": "short, neatly combed",
          "facial_feature_asymmetry": "unknown"
        },
        "position_in_scene": {
          "relative_position": "bottom-center frame",
          "depth_layer": "foreground-midground transition",
          "ground_contact": "seated on chair, chair legs on ground",
          "orientation_to_camera": "180 degrees rotated away from camera (back to camera)"
        },
        "clothing": [
          {
            "item": "suit jacket",
            "color": "#1A1A1A",
            "material": "wool blend",
            "fit": "tailored",
            "pattern": "plain",
            "texture": "smooth matte"
          },
          {
            "item": "trousers",
            "color": "#1A1A1A",
            "material": "wool blend",
            "fit": "tailored",
            "pattern": "plain",
            "texture": "smooth matte"
          },
          {
            "item": "chair",
            "color": "#333333",
            "material": "metal frame, dark plastic/vinyl seat",
            "fit": "standard folding chair",
            "pattern": "none",
            "texture": "smooth seat, metallic frame"
          }
        ]
      }
    ]
  },
  "lighting_analysis": {
    "main_light_source": {
      "type": "natural diffused light",
      "direction": "overhead, omnidirectional",
      "intensity_lux": 8000,
      "softness": "extremely soft",
      "color_temp_k": "n/a (monochrome)"
    },
    "secondary_lights": [],
    "shadow_properties": {
      "present": true,
      "softness": "very soft, barely perceptible",
      "direction_degrees": 180,
      "tint_color": "n/a (monochrome)"
    },
    "reflections": {
      "present": false
    },
    "mood_descriptor": "solemn, isolated, expectant, vast, minimalist, contemplative"
  },
  "color_texture_and_style": {
    "dominant_palette": [
      "#E6E6E6",
      "#CCCCCC",
      "#AAAAAA",
      "#4A4A4A",
      "#1A1A1A"
    ],
    "palette_description": "monochromatic palette with high contrast between deep blacks and bright whites, supported by a broad range of mid-grey tones. Overall impression is stark and graphic.",
    "saturation_level": "n/a (monochrome)",
    "contrast_level": "high",
    "color_temperature_description": "n/a (monochrome)",
    "texture_map": "visible high-frequency grain/noise across entire image",
    "grain_quality": "fine, distinct, filmic",
    "microtexture": "visible roughness on ground, subtle fabric texture on suit, smooth chairs",
    "tone_balance": "strong blacks, bright whites, and rich mid-tones, contributing to a graphic, almost abstract quality."
  },
  "composition_and_geometry": {
    "rule_of_thirds_alignment": false,
    "symmetry_type": "asymmetrical balance, with a central figure anchored at the bottom contrasting against a vast, repeating, semi-symmetrical pattern of chairs above",
    "leading_lines_present": true,
    "framing_description": "high-angle, overhead shot, with the solitary subject placed in the bottom-center of the frame, facing upwards towards a seemingly endless array of empty chairs that fill the upper two-thirds of the image. The composition emphasizes scale, isolation, and anticipation.",
    "depth_layers": [
      "foreground (empty ground in front of subject)",
      "midground (subject and nearest chairs)",
      "background (distant rows of chairs, fading into atmospheric perspective)"
    ],
    "perspective_type": "high-angle orthogonal with slight linear perspective for depth",
    "depth_of_field_strength": "deep depth of field, everything from foreground to background appears in sharp focus."
  },
  "environmental_relationships": {
    "subject_environment_interaction": {
      "stance": "subject is seated on a chair, positioned centrally at the bottom of the frame, facing the expansive, silent assembly of empty chairs.",
      "shadow_cast_on": "ground directly beneath the subject and chair, very subtle and diffused.",
      "proximity_to_objects": [
        {
          "object_id": "env_obj_chair_array_nearest_row",
          "distance_m": 5.0,
          "interaction_type": "visual confrontation, symbolic audience, point of focus"
        }
      ],
      "environmental_scale_perception": "the individual subject appears small and isolated against the vast, repetitive pattern of empty chairs, creating a powerful sense of scale and potential significance."
    },
    "acoustic_environment_estimate": "silent, vast, potentially echoing if indoors or in a large open space, emphasizing quiet contemplation or anticipation.",
    "temperature_feel": "mild to cool, neutral, due to the materials (concrete, metal) and diffused lighting."
  },
  "output_and_generation_parameters": {
    "target_similarity": 0.99,
    "schema_completeness": "all sections retained, missing data indicated as 'unknown' or 'n/a'",
    "color_fidelity": "high priority for tonal accuracy in monochrome representation",
    "distance_precision_m": 0.5,
    "pose_accuracy": 0.05,
    "facial_geometry_precision": 0.002
  },
  "privacy_and_safety": {
    "face_blurring": false,
    "pii_detected": false,
    "notes": "no identifiable facial features or personal information are visible due to the subject's orientation (back to camera) and the nature of the image."
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
