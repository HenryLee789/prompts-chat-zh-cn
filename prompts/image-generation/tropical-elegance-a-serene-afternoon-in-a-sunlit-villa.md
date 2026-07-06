# 热带优雅：阳光明媚的别墅里的宁静午后

## 中文说明

一位自信的黑发女士穿着别致的浓缩咖啡泳衣和飘逸的花卉纱笼，在华丽的木制沙发床上放松身心。周围是充满活力的紫色兰花，沐浴在柔和的自然光线下，场景散发着奢华而宁静的氛围，非常适合夏季度假。

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
      "file_name": "image_ef3de2.jpg",
      "file_type": "上传的文件",
      "analyst_persona": "技术照片分析师"
    },
    “场景环境”：{
      "location_type": "室内/半室外过渡（日光浴室或带顶棚的露台）",
      "氛围": "热带、豪华、轻松、温暖",
      "background_texture": "石墙、自然光、木制家具"
    },
    “相机技术”：{
      "lens_type": "35mm - 50mm（标准）",
      "angle": "眼睛水平，与右侧稍微成角度",
      "focus": "对主体进行清晰对焦，在极端前景（兰花）中出现轻微的散景",
      "composition": "三分法则，主体居中偏左，右侧以花朵为框"
    },
    “照明”：{
      "general_condition": "高调，自然光占主导地位",
      “来源”：[
        {
          “id”：“light_source_1”，
          "type": "自然阳光",
          "direction": "从左侧（观察者的视角）",
          "color_temp": "中性/冷白色（日光 ~5500K）",
          “强度”：“高”，
          "effect_on_objects": "在拍摄对象的右腿、手臂和脸部上创建明显的高光。向右侧投射柔和的阴影。"
        },
        {
          “id”：“light_source_2”，
          “type”：“环境填充”，
          "direction": "全向",
          "color_temp": "暖色",
          “强度”：“低/中”，
          "effect_on_objects": "柔化木制家具和拍摄对象左侧的阴影。"
        }
      ]
    },
    “主题”：{
      "identity": "成年女性（注明名人肖像，按照指示匿名处理）",
      "orientation": "面向前方，身体稍微向右倾斜",
      "gaze_direction": "与相机直接眼神接触",
      "emotional_state": "自信、放松、迷人",
      "sensuality_level": "中到高（由于服装和姿势，但优雅）",
      “姿势”：{
        "general_description": "半斜倚在木制沙发/沙发床上",
        "posture_effect_on_emotion": "倾斜的姿势强调放松和自信",
        "legs": "交叉；右腿弯曲在左膝盖上",
        "feet_position": "左脚放在地板/地毯上，右脚悬在空中，脚趾尖（跖屈）",
        "hands_position": "右手放在她身后的白色垫子上；左手放在她的大腿/膝盖附近",
        "visible_body_extent": "全身可见（从头到脚）"
      },
      “头”：{
        “头发”：{
          "color": "带有蜂蜜/焦糖平衡亮点的黑发女郎",
          "style": "长而松散的波浪，中心部分",
          "texture": "丝滑、丰盈",
          "interaction_with_head": "对称地构图脸部，落在肩膀上"
        },
        “耳朵”：{
          "visibility": "部分被头发覆盖",
          “shape”：“由于头发而难以辨认”
        },
        “脸”：{
          "struction": "椭圆形到菱形，高颧骨",
          "forehead": "光滑，标准高度，部分被头发包围",
          "眉毛": "整齐、拱形、深棕色",
          "eyes": "杏仁形，深色，有妆容",
          "nose": "笔直、轮廓分明的鼻梁",
          "upper_lip": "定义的丘比特之弓，淡紫色唇膏",
          "mouth_area": "闭上，轻微的傻笑/微笑",
          "chin": "轮廓分明，略尖",
          “mimic”：“微妙、自信的微笑，诱人的目光”
        }
      },
      “身体详细信息”：{
        "skin_tone": "晒黑/橄榄色",

"neck": "可见、光滑、V 领口突出",
        "shoulders": "暴露、圆润、放松",
        “胸部”：{
          "ratio_to_body": "比例大（性感）",
          "estimated_size": "全胸围",
          "bra_status": "没有可见的胸罩（可能是泳衣内置支撑）",
          "nipples_visible": "否",
          "shape_description": "自然，提升"
        },
        “胃”：{
          "ratio_to_body": "苗条、健美",
          "ratio_to_chest": "显著变小（沙漏身材）",
          "ratio_to_hips": "明显较小"
        },
        “臀部”：{
          "ratio_to_body": "宽，弯曲",
          "ratio_to_chest": "与胸部平衡",
          “形状”：“曲线优美”
        },
        “腿”：{
          "thighs": "饱满、光滑的肌肤纹理，光源凸显",
          "knees": "光滑、清晰",
          “小牛”：“色调”，
          "feet": "裸露、拱形、修脚（浅色抛光）"
        }
      },
      “服装”：{
        “上衣”：{
          "type": "连体泳衣 / Monokini",
          “颜色”：“深棕色/浓咖啡”，
          "details": "正面系带，带金色索环，挂脖款式",
          "light_interaction": "吸收光线，与皮肤形成对比"
        },
        “下衣”：{
          "type": "泳衣底（已连接）",
          "accessory": "花卉图案披肩/纱笼",
          "details": "披在腿下并略高于腿，多色花卉印花",
          "light_interaction": "柔软的折叠产生阴影"
        },
        “配件”：{
          “珠宝”：[
            {
              "物品": "手链",
              "location": "左手腕",
              "type": "粗金链节",
              “材质”：“黄金金属”
            },
            {
              "item": "项链",
              “位置”：“颈部”，
              "type": "细而精致的链条",
              "visibility": "几乎看不见"
            }
          ],
          "footwear": "无（赤脚）"
        }
      }
    },
    “场景中的对象”：[
      {
        "object": "木沙发/沙发床",
        "description": "华丽的深色木材，带有复杂的雕刻",
        "目的": "主题的座位",
        "ratio": "主导中间地带",
        “颜色”：“深桃花心木”，
        "location": "中地，从左侧延伸到中心"
      },
      {
        "object": "兰花植物",
        "description": "紫色和白色花朵的蝴蝶兰",
        "目的": "前景框架元素，增加深度和颜色",
        "ratio": "由于视角原因，前景较大",
        "color": "亮紫色、白色、绿色茎",
        "location": "前景右"
      },
      {
        "object": "水果碗",
        "description": "白色碗里装满柑橘类水果（橙子/柠檬）",
        "目的": "装饰，增加色彩对比",
        "ratio": "与主体相比较小",
        “颜色”：“亮橙色、黄色”，
        "location": "前景右侧（下角）"
      },
      {
        “对象”：“灯”，
        "description": "白色几何/蜂窝纹理底座，白色阴影",
        "目的": "背景装饰",
        “比例”：“中”，
        “颜色”：“白色”，
        "location": "背景左"
      },
      {
        "object": "书籍/杂志",
        "description": "封面上有一张脸的咖啡桌书",
        "目的": "前景细节",
        "ratio": "小切片可见",

"location": "极端前景底部中心"
      }
    ],
    “负面提示”：[
      “糟糕的解剖结构”，
      “额外的手指”，
      “失去四肢”，
      “扭曲的脸”，
      “低分辨率”，
      “主题模糊”，
      “曝光过度”，
      “曝光不足”，
      “水印”，
      “文字叠加（书名除外）”，
      “卡通”，
      “插图”，
      “计算机生成图像”，
      “肤色不自然”
    ]
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Tropical Elegance: A Serene Afternoon in a Sunlit Villa

### Description

A confident brunette woman relaxes on an ornate wooden daybed, dressed in a chic espresso swimsuit and a flowing floral sarong. Framed by vibrant purple orchids and bathed in soft natural light, the scene exudes a luxurious and tranquil atmosphere perfect for a summer escape.

### Prompt

```md
{
  "image_analysis": {
    "meta": {
      "file_name": "image_ef3de2.jpg",
      "file_type": "uploaded file",
      "analyst_persona": "Technical Photo Analyst"
    },
    "scene_environment": {
      "location_type": "Indoor / Semi-outdoor transition (Sunroom or covered patio)",
      "atmosphere": "Tropical, luxurious, relaxed, warm",
      "background_texture": "Stone walls, natural light, wooden furniture"
    },
    "camera_technical": {
      "lens_type": "35mm - 50mm (Standard)",
      "angle": "Eye-level, slightly angled from the right",
      "focus": "Sharp focus on the subject, slight bokeh in the extreme foreground (orchids)",
      "composition": "Rule of thirds, subject center-left, framed by flowers on the right"
    },
    "lighting": {
      "general_condition": "High-key, natural daylight dominant",
      "sources": [
        {
          "id": "light_source_1",
          "type": "Natural Sunlight",
          "direction": "From left (viewer's perspective)",
          "color_temp": "Neutral/Cool White (Daylight ~5500K)",
          "intensity": "High",
          "effect_on_objects": "Creates distinct highlights on the subject's right leg, arm, and face. Casts soft shadows to the right."
        },
        {
          "id": "light_source_2",
          "type": "Ambient Fill",
          "direction": "Omnidirectional",
          "color_temp": "Warm",
          "intensity": "Low/Medium",
          "effect_on_objects": "Softens shadows on the wooden furniture and the subject's left side."
        }
      ]
    },
    "subject": {
      "identity": "Adult Female (Celebrity likeness noted, treated anonymously as per instruction)",
      "orientation": "Facing forward, body angled slightly to the right",
      "gaze_direction": "Direct eye contact with the camera",
      "emotional_state": "Confident, relaxed, alluring",
      "sensuality_level": "Moderate to High (due to attire and pose, but elegant)",
      "pose": {
        "general_description": "Seated semi-reclined on a wooden sofa/daybed",
        "posture_effect_on_emotion": "The reclined posture emphasizes relaxation and confidence",
        "legs": "Crossed; Right leg bent over the left knee",
        "feet_position": "Left foot resting on the floor/rug, right foot suspended in air, toes pointed (plantar flexion)",
        "hands_position": "Right hand resting on the white cushion behind her; Left hand resting near her thigh/knee",
        "visible_body_extent": "Full body visible (head to toe)"
      },
      "head": {
        "hair": {
          "color": "Brunette with honey/caramel balayage highlights",
          "style": "Long, loose waves, center part",
          "texture": "Silky, voluminous",
          "interaction_with_head": "Frames the face symmetrically, falling over shoulders"
        },
        "ears": {
          "visibility": "Partially covered by hair",
          "shape": "Indiscernible due to hair"
        },
        "face": {
          "structure": "Oval to diamond shape, high cheekbones",
          "forehead": "Smooth, standard height, partially framed by hair",
          "brows": "Well-groomed, arched, dark brown",
          "eyes": "Almond shape, dark, lined with makeup",
          "nose": "Straight, defined bridge",
          "upper_lip": "Defined cupid's bow, mauve lipstick",
          "mouth_area": "Closed, slight smirk/smile",
          "chin": "Defined, slightly pointed",
          "mimic": "Subtle, confident smile, seductive gaze"
        }
      },
      "body_details": {
        "skin_tone": "Tanned / Olive",
        "neck": "Visible, smooth, accentuated by V-neckline",
        "shoulders": "Exposed, rounded, relaxed",
        "chest": {
          "ratio_to_body": "Proportionally large (Voluptuous)",
          "estimated_size": "Full bust",
          "bra_status": "No visible bra (likely built-in support in swimsuit)",
          "nipples_visible": "No",
          "shape_description": "Natural, lifted"
        },
        "stomach": {
          "ratio_to_body": "Slim, toned",
          "ratio_to_chest": "Significantly smaller (Hourglass figure)",
          "ratio_to_hips": "Significantly smaller"
        },
        "hips": {
          "ratio_to_body": "Wide, curvy",
          "ratio_to_chest": "Balanced with chest",
          "shape": "Curvaceous"
        },
        "legs": {
          "thighs": "Full, smooth skin texture, highlighted by light source",
          "knees": "Smooth, defined",
          "calves": "Toned",
          "feet": "Bare, arched, well-pedicured (pale polish)"
        }
      },
      "attire": {
        "upper_garment": {
          "type": "One-piece swimsuit / Monokini",
          "color": "Dark Brown / Espresso",
          "details": "Lace-up front with gold grommets, halter neck style",
          "light_interaction": "Absorbs light, creates contrast with skin"
        },
        "lower_garment": {
          "type": "Swimsuit bottom (connected)",
          "accessory": "Floral patterned shawl/sarong",
          "details": "Draped underneath and slightly over the legs, multicolored floral print",
          "light_interaction": "Soft folds create shadows"
        },
        "accessories": {
          "jewelry": [
            {
              "item": "Bracelet",
              "location": "Left wrist",
              "type": "Chunky gold chain link",
              "material": "Gold metal"
            },
            {
              "item": "Necklace",
              "location": "Neck",
              "type": "Thin delicate chain",
              "visibility": "Barely visible"
            }
          ],
          "footwear": "None (Barefoot)"
        }
      }
    },
    "objects_in_scene": [
      {
        "object": "Wooden Sofa / Daybed",
        "description": "Ornate, dark wood with intricate carvings",
        "purpose": "Seating for subject",
        "ratio": "Dominates the middle ground",
        "color": "Dark Mahogany",
        "location": "Mid-ground, extending from left to center"
      },
      {
        "object": "Orchid Plant",
        "description": "Phalaenopsis orchids with purple and white blooms",
        "purpose": "Foreground framing element, adds depth and color",
        "ratio": "Large in foreground due to perspective",
        "color": "Bright Purple, White, Green stems",
        "location": "Foreground Right"
      },
      {
        "object": "Fruit Bowl",
        "description": "White bowl filled with citrus fruits (oranges/lemons)",
        "purpose": "Decor, adds color contrast",
        "ratio": "Small compared to subject",
        "color": "Bright Orange, Yellow",
        "location": "Foreground Right (lower corner)"
      },
      {
        "object": "Lamp",
        "description": "White geometric/honeycomb textured base with white shade",
        "purpose": "Background decor",
        "ratio": "Medium",
        "color": "White",
        "location": "Background Left"
      },
      {
        "object": "Book/Magazine",
        "description": "Coffee table book featuring a face on the cover",
        "purpose": "Foreground detail",
        "ratio": "Small slice visible",
        "location": "Extreme Foreground Bottom Center"
      }
    ],
    "negative_prompts": [
      "bad anatomy",
      "extra fingers",
      "missing limbs",
      "distorted face",
      "low resolution",
      "blurry subject",
      "overexposed",
      "underexposed",
      "watermark",
      "text overlay (except book title)",
      "cartoon",
      "illustration",
      "CGI",
      "unnatural skin tone"
    ]
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
