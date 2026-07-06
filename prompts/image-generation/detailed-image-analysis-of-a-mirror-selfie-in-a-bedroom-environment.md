# 卧室环境中镜子自拍的详细图像分析

## 中文说明

此 JSON 提示提供了对室内镜子自拍照的详细分析，捕获环境、灯光、主体姿势、服装以及场景中存在的其他对象等元素。

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
    “环境”：{
      “类型”：“室内”，
      "location_type": "卧室或起居区",
      "spatial_depth": "通过镜子反射的深度",
      "background_elements": "大型黑色平板电视（反射）、干净的白色墙壁、深色地板或地毯"
    },
    “相机规格”：{
      "lens_type": "智能手机主摄像头（广角）",
      "angle": "眼睛水平，直视镜面反射",
      "perspective": "全身照（剪到膝盖处）",
      "focus": "将焦点集中在拍摄对象的身体上",
      "framing": "圆形框架内的垂直肖像（镜子）"
    },
    “照明”：{
      “条件”：“柔和的日光/窗光”，
      “来源”：[
        {
          “源id”：1，
          "type": "自然窗光",
          "direction": "从左侧（对象的右侧）",
          "color_Temperature": "冷色/中性白色",
          “强度”：“中等”，
          "effect_on_subject": "在右臂、肩膀和臀部上创建柔和的高光；在躯干左侧投射柔和的阴影，强调肌肉的清晰度"
        }
      ],
      “shadows”: “柔和、弥漫的阴影定义腹部肌肉和锁骨”
    },
    “主题分析”：{
      "identity": "年轻女子（脸部被手机遮住）",
      "orientation": "正面朝向镜子",
      "emotional_state": "自信，身体积极",
      "sensuality": "中等；突出体质和健身",
      “姿势”：{
        "general_definition": "站立，'Contrapposto' 姿势（重量在一条腿上）",
        "feet_placement": "不可见（裁剪掉）",
        "hand_placement": "左手握住手机遮住脸部，右臂自然垂下",
        "visible_extent": "从头顶到大腿中部"
      },
      “头详细信息”：{
        “头发”：{
          “颜色”：“深棕色”，
          "style": "长、宽松、略呈波浪状",
          “质地”：“丝滑”，
          "interaction_with_face": "从肩膀上摔下来，把手机框起来"
        },
        “脸”：{
          "definition": "被智能手机遮挡",
          "visible_features": "没有明确可见的"
        }
      },
      “身体详细信息”：{
        "body_type": "苗条/运动/健美",
        "skin_tone": "白皙/苍白",
        “颈部区域”：{
          "visibility": "可见，细长",
          "details": "由于照明而清晰的胸锁乳突肌"
        },
        “肩部区域”：{
          "shape": "方形但精致",
          “姿势”：“放松”
        },
        “胸部区域”：{
          "ratio_to_body": "成比例",
          "visual_estimate": "小到中",
          "bra_status": "穿着运动胸罩/胸罩",
          "nipple_visibility": "被填充物/织物隐藏",
          "shape": "自然、提升"
        },
        “中段”：{
          "belly_button": "可见，垂直椭圆形",
          "muscle_definition": "可见的'11'线腹肌（白线定义）",
          "ratio_to_chest": "更窄",
          "ratio_to_hips": "显著锥形（沙漏轮廓）"
        },
        “臀部区域”：{
          "ratio_to_waist": "弯曲，比腰宽",
          “形状”：“圆形”，
          “宽度”：“中等”
        },
        “腿部区域”：{
          "thighs": "光滑，可见轻微间隙",
          "膝盖": "不可见"
        }
      },
      “服装”：{
        “上身”：{
          "item": "文胸/短款上衣",
          "style": "细肩带，褶皱/褶皱正面，汤匙领",
          “颜色”：“深橄榄绿”，

"fabric": "棉质或合成混纺，哑光饰面",
          “fit”：“紧身/紧身”
        },
        “下体”：{
          "item": "平角短裤/热裤",
          "style": "宽罗纹腰带，短腿",
          "color": "深橄榄绿（配套）",
          "fabric": "罗纹针织纹理",
          “fit”：“紧身/合身”
        }
      },
      “配件”：{
        "jewelry": "左手简单的戒指（打电话的手）",
        "tech": "带有浅粉色/腮红外壳的智能手机"
      }
    },
    “场景中的对象”：[
      {
        “对象”：“镜子”，
        "description": "带有细黑框的大型圆形壁镜",
        "role": "自拍取景装置",
        "ratio": "主导构图"
      },
      {
        “对象”：“电视”，
        "description": "大平面屏幕，黑色，关闭",
        "position": "反映在背景中，主体后面",
        "role": "背景杂乱/上下文"
      }
    ],
    “负面提示”：[
      “脸可见”，
      “丑陋”，
      “胖”，
      “病态”，
      “残缺不全”，
      “变性人”,
      “反式”，
      “变性人”，
      “插图”，
      “卡通”，
      “动漫”，
      “绘画”，
      “绘画”，
      “低质量”，
      “jpeg 伪影”，
      “颗粒状”，
      “文本”，
      “水印”，
      “签名”，
      “杂乱的背景”，
      “光线不好”
    ]
  }
}
```

---

## English Original

### Title

Detailed Image Analysis of a Mirror Selfie in a Bedroom Environment

### Description

This JSON prompt provides a detailed analysis of an indoor mirror selfie, capturing elements such as environment, lighting, subject posture, attire, and additional objects present in the scene.

### Prompt

```md
{
  "image_analysis": {
    "environment": {
      "type": "Indoor",
      "location_type": "Bedroom or Living Area",
      "spatial_depth": "Reflected depth via mirror",
      "background_elements": "Large black flat-screen TV (reflected), clean white walls, dark flooring or rug"
    },
    "camera_specs": {
      "lens_type": "Smartphone Main Camera (Wide)",
      "angle": "Eye-level, straight-on mirror reflection",
      "perspective": "Full body shot (cropped at knees)",
      "focus": "Sharp focus on the subject's body",
      "framing": "Vertical portrait within a circular frame (mirror)"
    },
    "lighting": {
      "condition": "Soft Daylight / Window Light",
      "sources": [
        {
          "source_id": 1,
          "type": "Natural Window Light",
          "direction": "From the left (subject's right side)",
          "color_temperature": "Cool/Neutral White",
          "intensity": "Moderate",
          "effect_on_subject": "Creates gentle highlights on the right arm, shoulder, and hip; casts soft shadows on the left side of the torso, emphasizing muscle definition"
        }
      ],
      "shadows": "Soft, diffuse shadows defining the abdominal muscles and collarbones"
    },
    "subject_analysis": {
      "identity": "Young woman (Face obscured by phone)",
      "orientation": "Front-facing towards mirror",
      "emotional_state": "Confident, body-positive",
      "sensuality": "Moderate; highlights physique and fitness",
      "posture": {
        "general_definition": "Standing, 'Contrapposto' stance (weight on one leg)",
        "feet_placement": "Not visible (cropped out)",
        "hand_placement": "Left hand holding phone covering face, Right arm hanging naturally by side",
        "visible_extent": "From top of head to mid-thigh"
      },
      "head_details": {
        "hair": {
          "color": "Dark Brown",
          "style": "Long, loose, slightly wavy",
          "texture": "Silky",
          "interaction_with_face": "Falls over shoulders, framing the phone"
        },
        "face": {
          "definition": "Obscured by smartphone",
          "visible_features": "None explicitly visible"
        }
      },
      "body_details": {
        "body_type": "Slim / Athletic / Toned",
        "skin_tone": "Fair / Pale",
        "neck_area": {
          "visibility": "Visible, slender",
          "details": "Defined sternocleidomastoid muscles due to lighting"
        },
        "shoulder_area": {
          "shape": "Squared but delicate",
          "posture": "Relaxed"
        },
        "chest_area": {
          "ratio_to_body": "Proportionate",
          "visual_estimate": "Small to Medium",
          "bra_status": "Wearing sports bra/bralette",
          "nipple_visibility": "Concealed by padding/fabric",
          "shape": "Natural, lifted"
        },
        "midsection": {
          "belly_button": "Visible, vertical oval",
          "muscle_definition": "Visible '11' line abs (linea alba definition)",
          "ratio_to_chest": "Narrower",
          "ratio_to_hips": "Significantly tapered (Hourglass silhouette)"
        },
        "hip_area": {
          "ratio_to_waist": "Curved, wider than waist",
          "shape": "Rounded",
          "width": "Moderate"
        },
        "leg_area": {
          "thighs": "Smooth, slight gap visible",
          "knees": "Not visible"
        }
      },
      "attire": {
        "upper_body": {
          "item": "Bralette / Crop Top",
          "style": "Spaghetti straps, gathered/ruched front, scoop neck",
          "color": "Dark Olive Green",
          "fabric": "Cotton or synthetic blend, matte finish",
          "fit": "Tight / Skin-tight"
        },
        "lower_body": {
          "item": "Boy Shorts / Hot Pants",
          "style": "Wide ribbed waistband, short leg",
          "color": "Dark Olive Green (Matching set)",
          "fabric": "Ribbed knit texture",
          "fit": "Tight / Form-fitting"
        }
      },
      "accessories": {
        "jewelry": "Simple ring on left hand (phone hand)",
        "tech": "Smartphone with light pink/blush case"
      }
    },
    "objects_in_scene": [
      {
        "object": "Mirror",
        "description": "Large, circular wall mirror with a thin black frame",
        "role": "Framing device for the selfie",
        "ratio": "Dominates the composition"
      },
      {
        "object": "Television",
        "description": "Large flat screen, black, turned off",
        "position": "Reflected in background, behind subject",
        "role": "Background clutter/context"
      }
    ],
    "negative_prompts": [
      "face visible",
      "ugly",
      "fat",
      "morbid",
      "mutilated",
      "tranny",
      "trans",
      "trannsexual",
      "illustration",
      "cartoon",
      "anime",
      "painting",
      "drawing",
      "low quality",
      "jpeg artifacts",
      "grainy",
      "text",
      "watermark",
      "signature",
      "cluttered background",
      "bad lighting"
    ]
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
