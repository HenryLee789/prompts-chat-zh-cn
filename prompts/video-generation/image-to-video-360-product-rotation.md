# 图像到视频 360 产品旋转

## 中文说明

使用提供的前后工作室图像创建逼真、稳定、360 度旋转的产品视频。产品必须看起来自然地充满内部体积，就像被隐形人穿着一样（幽灵人体模型效果），并保持精确的几何形状、比例、织物结构和身份。没有可见的人、人体模型或支撑结构。

## 使用场景

* 生成可用于视频模型的镜头和动作提示
* 描述画面、节奏、镜头、光线和叙事
* 把创意概念转化为可执行的视频生成指令
* 围绕 json 等主题生成结构化结果

## 适用人群

* 视频创作者
* 导演或编导
* AI 视频用户

## 中文 Prompt

```md
{
  “型号”：“veo-3.1”，
  “任务”：“image_to_video_360_product_rotation”，

  "objective": "根据所提供的完全相同产品的正面和背面图像生成逼真、无声、360 度旋转视频。保留 100% 的原始产品标识，无需修改、添加、删除或幻觉。产品必须使用幽灵人体模型体积重建来呈现自然填充的内部，同时保持完全忠实于原始图像。服装必须经过专业熨烫、完美光滑、清爽且适合零售，同时保留所有原始细节。输出必须绝对不包含任何内容。音频。”,

  “服装条件全局规则”：{
    “all_clothing_must_be_irned”：正确，
    “外观”：“完美压制、清脆、光滑、结构合理、优质的零售展示”，
    “no_new_wrinkles”：正确，
    “no_random_fabric_folding”：正确，
    “maintain_original_wrinkle_data_if_present”：true，
    “no_artificial_wrinkle_ Generation”：正确，
    “clean_finish”：正确，
    “brand_new_look”：正确
  },

  “输入”：{
    “类型”：“多图像”，
    “意见”：[
      {
        “名称”：“前面”，
        “角色”：“主要参考”，
        “重量”：1.0
      },
      {
        “名称”：“返回”，
        “角色”：“辅助参考”，
        “重量”：1.0
      }
    ],

    “取证身份锁”：{
      “模式”：“严格”，

      “几何锁”：真，
      “silhouette_lock”：正确，
      “mesh_lock”：真，

      “纹理锁定”：真，
      “fabric_pattern_lock”：真，
      “stitching_lock”：正确，
      “wrinkle_lock”：正确，

      “color_lock”：正确，
      “material_lock”：正确，
      “表面锁定”：真，

      “logo_lock”：正确，
      “label_lock”：真，
      “branding_lock”：正确，

      “比例锁定”：正确，
      “measurement_lock”：真，

      “prevent_hallucination”：正确，
      “prevent_detail_invention”：正确，
      “prevent_detail_removal”：true
    }
  },

  “几何重建”：{
    "method": "constrained_true_3d_reconstruction",

    "source_constraint": "only_use_information_present_in_input_images",

    “卷_代”：{
      “启用”：正确，
      “类型”：“ghost_mannequin_volume”，
      “可见性”：“无”
    },

    “重建规则”：{
      “interpolate_only”：正确，
      “no_detail_creation”：正确，
      “无表面修改”：正确，
      “no_topology_change”：正确，
      “no_design_interpretation”：正确
    },

    “网格约束”：{
      “刚性”：真实，
      “无变形”：正确，
      “no_shape_change”：正确，
      “no_texture_shift”：真
    }
  },

  “动画”：{
    “类型”：“360_度_旋转”，
    “轴”：“垂直”，
    “度”：360，
    “方向”：“顺时针”，

    “速度”：“恒定”，
    “持续时间秒”：6，

    “运动约束”：{
      “no_wobble”：正确，
      “no_jitter”：正确，
      “no_mesh_change”：正确，
      “no_texture_shift”：正确，
      “no_geometry_shift”：真
    },

    "start_state": "exact_front_view",
    "end_state": "exact_front_view",

    “循环”：真
  },

  “幽灵人体模型”：{
    “启用”：正确，
    “可见性”：“不可见”，

    “约束”：{
      “must_not_be_visible”：正确，
      “must_not_modify_surface”：true，
      “must_not_modify_shape”：正确，
      “must_not_modify_wrinkles”：正确，
      “must_not_modify_fit”：true
    }
  },

  “场景”：{
    “背景”：{
      “类型”：“纯白色”，
      “颜色”：“#FFFFFF”，
      “统一”：正确
    },

    “产品状态”：{
      “浮动”：真实，
      “no_support_visible”：正确
    },

“阴影”：{
      “类型”：“软接触”，
      “稳定”：真实，
      “物理正确”：正确
    }
  },

  “相机”：{
    “类型”：“固定”，
    “运动”：“无”，
    “旋转”：“无”，
    “缩放”：“无”，
    “center_lock”：正确，
    “镜头”：“85毫米”，
    “扭曲”：假
  },

  “照明”：{
    “类型”：“studio_softbox”，
    “一致性”：“锁定”，
    “变异”：假，
    “闪烁”：假，
    “must_not_change_during_rotation”：true
  },

  “渲染”：{
    “模式”：“真实感”，
    "texture_source": "input_images_only",
    “no_texture_ Generation”：正确，
    “no_creative_interpretation”：正确，
    “no_artificial_enhancement”：正确，
    "fabric_finish": "smooth_pressed_clean",
    “retail_presentation_standard”：“premium_ecommerce_ready”
  },

  “音频”：{
    “启用”：假，
    “生成音频”：假，
    “include_audio_track”：假，
    “音乐”：假，
    “声音效果”：假，
    “声音”：假，
    “环境声音”：假，
    “沉默”：真实
  },

  “输出”：{
    “分辨率”：“2160x2160”，
    “每秒帧数”：30，
    “持续时间秒”：6，
    “格式”：“mp4”，
    "video_codec": "H.264",
    "audio_codec": "无",
    “include_audio_track”：假，
    “循环”：正确，
    “背景”：“纯白色”，
    “沉默”：真实
  },

  “硬约束”：[
    “没有声音”，
    “没有音乐”，
    “没有音效”，
    “没有声音”，
    “没有环境声音”，
    “不要添加详细信息”，
    “不要删除细节”，
    “不要修改拼接”，
    “不要修改徽标”，
    “不要修改纹理”，
    “不要修改结构”，
    “不要改变比例”，
    “不要风格化”，
    “不要产生幻觉”，
    “没有新的皱纹”，
    “没有凌乱的织物褶皱”，
    “必须看起来经过专业熨烫”
  ],

  “否定提示”：[
    “音乐”，
    “声音”，
    “声音”，
    “音频”，
    “环境音频”，
    “音效”，
    “幻觉细节”，
    “修改缝合”，
    “不同的面料”，
    “形状变形”，
    “几何扭曲”，
    “创造性的重新诠释”，
    “起皱的布料”，
    “凌乱的褶皱”，
    “有褶皱的衣服”，
    “未熨烫的衣服”
  ]
}
```

---

## English Original

### Title

image to video 360 product rotaion

### Description

Create a photorealistic, stable, 360-degree rotating video of the product using the provided front and back studio images. The product must appear naturally filled with internal volume as if worn by an invisible person (ghost mannequin effect), preserving exact geometry, proportions, fabric structure, and identity. No visible person, mannequin, or support structure.

### Prompt

```md
{
  "model": "veo-3.1",
  "task": "image_to_video_360_product_rotation",

  "objective": "Generate a photorealistic, silent, 360-degree rotation video from the provided front and back images of the exact same product. Preserve 100% of the original product identity without modification, addition, removal, or hallucination. The product must appear naturally filled internally using ghost mannequin volume reconstruction, while remaining completely faithful to the original images. The garment must appear professionally ironed, perfectly smooth, crisp, and retail-ready while preserving all original details. Output must contain absolutely no audio.",

  "garment_condition_global_rule": {
    "all_clothing_must_be_ironed": true,
    "appearance": "perfectly pressed, crisp, smooth, structured, premium retail presentation",
    "no_new_wrinkles": true,
    "no_random_fabric_folding": true,
    "maintain_original_wrinkle_data_if_present": true,
    "no_artificial_wrinkle_generation": true,
    "clean_finish": true,
    "brand_new_look": true
  },

  "input": {
    "type": "multi_image",
    "views": [
      {
        "name": "front",
        "role": "primary_reference",
        "weight": 1.0
      },
      {
        "name": "back",
        "role": "secondary_reference",
        "weight": 1.0
      }
    ],

    "forensic_identity_lock": {
      "mode": "strict",

      "geometry_lock": true,
      "silhouette_lock": true,
      "mesh_lock": true,

      "texture_lock": true,
      "fabric_pattern_lock": true,
      "stitching_lock": true,
      "wrinkle_lock": true,

      "color_lock": true,
      "material_lock": true,
      "surface_lock": true,

      "logo_lock": true,
      "label_lock": true,
      "branding_lock": true,

      "proportion_lock": true,
      "measurement_lock": true,

      "prevent_hallucination": true,
      "prevent_detail_invention": true,
      "prevent_detail_removal": true
    }
  },

  "geometry_reconstruction": {
    "method": "constrained_true_3d_reconstruction",

    "source_constraint": "only_use_information_present_in_input_images",

    "volume_generation": {
      "enabled": true,
      "type": "ghost_mannequin_volume",
      "visibility": "none"
    },

    "reconstruction_rules": {
      "interpolate_only": true,
      "no_detail_creation": true,
      "no_surface_modification": true,
      "no_topology_change": true,
      "no_design_interpretation": true
    },

    "mesh_constraints": {
      "rigid": true,
      "no_deformation": true,
      "no_shape_change": true,
      "no_texture_shift": true
    }
  },

  "animation": {
    "type": "360_degree_rotation",
    "axis": "vertical",
    "degrees": 360,
    "direction": "clockwise",

    "speed": "constant",
    "duration_seconds": 6,

    "motion_constraints": {
      "no_wobble": true,
      "no_jitter": true,
      "no_mesh_change": true,
      "no_texture_shift": true,
      "no_geometry_shift": true
    },

    "start_state": "exact_front_view",
    "end_state": "exact_front_view",

    "loop": true
  },

  "ghost_mannequin": {
    "enabled": true,
    "visibility": "invisible",

    "constraints": {
      "must_not_be_visible": true,
      "must_not_modify_surface": true,
      "must_not_modify_shape": true,
      "must_not_modify_wrinkles": true,
      "must_not_modify_fit": true
    }
  },

  "scene": {
    "background": {
      "type": "pure_white",
      "color": "#FFFFFF",
      "uniform": true
    },

    "product_state": {
      "floating": true,
      "no_support_visible": true
    },

    "shadow": {
      "type": "soft_contact",
      "stable": true,
      "physically_correct": true
    }
  },

  "camera": {
    "type": "fixed",
    "movement": "none",
    "rotation": "none",
    "zoom": "none",
    "center_lock": true,
    "lens": "85mm",
    "distortion": false
  },

  "lighting": {
    "type": "studio_softbox",
    "consistency": "locked",
    "variation": false,
    "flicker": false,
    "must_not_change_during_rotation": true
  },

  "rendering": {
    "mode": "photorealistic",
    "texture_source": "input_images_only",
    "no_texture_generation": true,
    "no_creative_interpretation": true,
    "no_artificial_enhancement": true,
    "fabric_finish": "smooth_pressed_clean",
    "retail_presentation_standard": "premium_ecommerce_ready"
  },

  "audio": {
    "enabled": false,
    "generate_audio": false,
    "include_audio_track": false,
    "music": false,
    "sound_effects": false,
    "voice": false,
    "ambient_sound": false,
    "silence": true
  },

  "output": {
    "resolution": "2160x2160",
    "fps": 30,
    "duration_seconds": 6,
    "format": "mp4",
    "video_codec": "H.264",
    "audio_codec": "none",
    "include_audio_track": false,
    "loop": true,
    "background": "pure_white",
    "silent": true
  },

  "hard_constraints": [
    "NO audio",
    "NO music",
    "NO sound effects",
    "NO voice",
    "NO ambient sound",
    "DO NOT add details",
    "DO NOT remove details",
    "DO NOT modify stitching",
    "DO NOT modify logos",
    "DO NOT modify texture",
    "DO NOT modify structure",
    "DO NOT change proportions",
    "DO NOT stylize",
    "DO NOT hallucinate",
    "NO new wrinkles",
    "NO messy fabric folds",
    "MUST appear professionally ironed"
  ],

  "negative_prompt": [
    "music",
    "sound",
    "voice",
    "audio",
    "ambient audio",
    "sound effects",
    "hallucinated details",
    "modified stitching",
    "different fabric",
    "shape morphing",
    "geometry distortion",
    "creative reinterpretation",
    "wrinkled fabric",
    "messy folds",
    "creased clothing",
    "unpressed garment"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
