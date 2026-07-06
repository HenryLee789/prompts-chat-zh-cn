# 高端美容编辑照片拍摄规范

## 中文说明

此 JSON 包含高端美容编辑照片拍摄的详细规范，包括主题、环境和面板架构详细信息。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “项目规格”：{
    "format": "2x2 网格拼贴",
    “纵横比”：“4：5”，
    "aesthetic_style": "高端美容编辑",
    “渲染引擎提示”：{
      "realism_level": "超真实感",
      “纹理质量”：“8k”，
      "lighting_simulation": "光线追踪工作室照明"
    }
  },
  “全局资产”：{
    “主题定义”：{
      “头发”：{
        "style": "长、松散的波浪形、体积大",
        "texture": "自然的、单独的股线定义",
        "behavior": "凌乱但有风格，框住脸和肩膀"
      },
      “肤色”：{
        "skin_texture": "多孔，超现实",
        "finish": "水润的玻璃皮肤效果",
        “化妆”：{
          "cheeks": "重度潮红/脸红",
          "lips": "高光、丰润、自然粉色",
          “眼睛”：“干净、清晰的睫毛、自然的眉毛”
        }
      },
      “衣柜”：{
        "item": "迷你连衣裙",
        "fit": "塑身/紧身",
        “面料”：{
          “材质”：“柔软纹理针织物/毛圈圈”，
          “触感”：“模糊、吸光的纤维”，
          “颜色”：“柔和的紫红色或中性灰褐色”
        },
        "details": "细肩带，长度至大腿中部"
      }
    },
    “环境定义”：{
      “工作室设置”：{
        "background": "无缝纸，柔软的灰白色/米色",
        "气氛": "干净、温暖、亲密"
      },
      “照明装备”：{
        "key_light": "大型漫射柔光箱（左前）",
        "fill_light": "反射器（右）",
        "highlights": "嘴唇、颧骨和肩膀上的镜面高光"
      }
    }
  },
  “面板架构”：[
    {
      "position": "左上角 (1)",
      "shot_type": "极限特写（微距）",
      “组成”：{
        "angle": "低角度，稍微向上看",
        "focus": "口鼻区域",
        "depth_of_field": "浅"
      },
      “行动”：{
        "primary": "吃草莓",
        “nuance”：“精致的手指握持，嘴唇微微张开”
      },
      “视觉锚点”：[
        “草莓表面的水分”，
        “嘴唇上的光泽反射”，
        《太阳穴上的婴儿毛发》
      ]
    },
    {
      "position": "右上角 (2)",
      "shot_type": "中距离射击（大腿以上）",
      “组成”：{
        "angle": "眼睛水平",
        "pose_dynamic": "稍微向前倾斜朝向镜头"
      },
      “行动”：{
        "stance": "笔直站立",
        "arms": "两侧放松",
        “表情”：“直视，诱人的撅嘴”
      },
      “视觉锚点”：[
        《针织连衣裙的质感》，
        “锁骨阴影”，
        「腰部的曲线」
      ]
    },
    {
      "position": "左下 (3)",
      "shot_type": "全身（坐姿）",
      “组成”：{
        "angle": "侧面轮廓",
        "framing": "主体压实在地板上"
      },
      “行动”：{
        "pose": "膝盖到胸部（胎儿位置变化）",
        "interaction": "脸颊靠在膝盖上，手臂拥抱腿",
        "hair_flow": "层叠到地板上"
      },
      “视觉锚点”：[
        “光滑腿部定义”，
        “裙子延伸到大腿”，
        《梦幻的目光》
      ]
    },
    {
      "position": "右下角 (4)",
      "shot_type": "美女肖像（头部和手部）",
      “组成”：{
        "angle": "正面特写",
        “framing”：“下巴到发际线”
      },
      “行动”：{
        "gesture": "下巴放在交叉的手指上",
        “表情”：“温柔的微笑，目光远离镜头”
      },
      “视觉锚点”：[

“手部细节和美甲”，
        “眼睛清晰”，
        “脸颊泛红”
      ]
    }
  ]
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

High-End Beauty Editorial Photo Shoot Specification

### Description

This JSON contains a detailed specification for a high-end beauty editorial photo shoot, including subject, environment, and panel architecture details.

### Prompt

```md
{
  "project_specifications": {
    "format": "2x2 Grid Collage",
    "aspect_ratio": "4:5",
    "aesthetic_style": "High-end Beauty Editorial",
    "rendering_engine_hints": {
      "realism_level": "Ultra-photorealistic",
      "texture_quality": "8k",
      "lighting_simulation": "Ray-traced studio lighting"
    }
  },
  "global_assets": {
    "subject_definition": {
      "hair": {
        "style": "Long, loosely wavy, voluminous",
        "texture": "Natural, individual strands defined",
        "behavior": "Messy but styled, framing face and shoulders"
      },
      "complexion": {
        "skin_texture": "Porous, hyper-realistic",
        "finish": "Dewy, glass-skin effect",
        "makeup": {
          "cheeks": "Heavy flush/blush",
          "lips": "High-gloss, plump, natural pink",
          "eyes": "Clean, defined lashes, natural brows"
        }
      },
      "wardrobe": {
        "item": "Mini dress",
        "fit": "Bodycon / Tight",
        "fabric": {
          "material": "Soft textured knit / Boucle",
          "tactility": "Fuzzy, light-catching fibers",
          "color": "Soft mauve or neutral taupe"
        },
        "details": "Spaghetti straps, mid-thigh length"
      }
    },
    "environment_definition": {
      "studio_setup": {
        "background": "Seamless paper, soft off-white/beige",
        "atmosphere": "Clean, warm, intimate"
      },
      "lighting_rig": {
        "key_light": "Large diffuse softbox (Front-Left)",
        "fill_light": "Reflector (Right)",
        "highlights": "Specular highlights on lips, cheekbones, and shoulders"
      }
    }
  },
  "panel_architecture": [
    {
      "position": "Top-Left (1)",
      "shot_type": "Extreme Close-Up (Macro)",
      "composition": {
        "angle": "Low angle, looking up slightly",
        "focus": "Mouth and nose area",
        "depth_of_field": "Shallow"
      },
      "action": {
        "primary": "Eating a strawberry",
        "nuance": "Delicate finger hold, lips slightly parted"
      },
      "visual_anchors": [
        "Moisture on strawberry surface",
        "Gloss reflection on lips",
        "Baby hairs at temple"
      ]
    },
    {
      "position": "Top-Right (2)",
      "shot_type": "Medium Shot (Thigh-up)",
      "composition": {
        "angle": "Eye level",
        "pose_dynamic": "Leaning forward slightly towards lens"
      },
      "action": {
        "stance": "Standing straight on",
        "arms": "Relaxed at sides",
        "expression": "Direct gaze, alluring pout"
      },
      "visual_anchors": [
        "Texture of knit dress",
        "Collarbone shadows",
        "Curvature of waist"
      ]
    },
    {
      "position": "Bottom-Left (3)",
      "shot_type": "Full Body (Seated)",
      "composition": {
        "angle": "Side profile",
        "framing": "Subject compacted on floor"
      },
      "action": {
        "pose": "Knees to chest (fetal position variation)",
        "interaction": "Cheek resting on knee, arms embracing legs",
        "hair_flow": "Cascading onto the floor"
      },
      "visual_anchors": [
        "Smooth leg definition",
        "Dress stretching over thigh",
        "Dreamy gaze"
      ]
    },
    {
      "position": "Bottom-Right (4)",
      "shot_type": "Beauty Portrait (Head & Hands)",
      "composition": {
        "angle": "Frontal close-up",
        "framing": "Chin to hairline"
      },
      "action": {
        "gesture": "Chin resting on interlaced fingers",
        "expression": "Soft smile, looking off-camera"
      },
      "visual_anchors": [
        "Hand detail and manicure",
        "Eye clarity",
        "Flush on cheeks"
      ]
    }
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
