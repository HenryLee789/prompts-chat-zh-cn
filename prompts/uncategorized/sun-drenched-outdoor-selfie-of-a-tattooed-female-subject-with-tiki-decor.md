# 一位带有 Tiki 装饰的纹身女性在阳光普照的户外自拍

## 中文说明

这张特写镜头拍摄于明亮的户外环境，拍摄的是一位年轻女子，她有一头金发，胸部和手臂上有明显的纹身，摆出自信、直视的目光。阳光明媚的庭院背景的特点是灰色的墙壁、质朴的木制花盆和位于主题右侧的彩色提基图腾柱

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “场景分析”：{
    “环境”：{
      “类型”：“户外”，
      "setting": "庭院或后院露台",
      "weather": "晴朗，可见晴朗的天空",
      “背景元素”：[
        “灰色灰泥墙”，
        “人造绿篱墙”，
        《蓝天》
      ]
    },
    “相机”：{
      "lens": "广角镜头（典型的智能手机前置摄像头）",
      "angle": "自拍角度，微低仰视，特写取景",
      "focus": "将焦点集中在拍摄对象的脸部和上半身",
      "畸变": "由于广角造成的轻微透视畸变"
    },
    “照明”：{
      "overall_condition": "明亮的自然光，强光照明",
      “来源”：[
        {
          “源id”：1，
          “类型”：“太阳”，
          "angle": "高角度，来自左上角（主体的右侧）",
          "color": "自然白色/暖日光",
          “强度”：“高/强”，
          "effects_on_objects": "在拍摄对象的头发、下巴和鼻子下创建硬阴影。在后面的灰色墙壁上投射明确的阴影。照亮头发，产生金色光泽。"
        }
      ]
    }
  },
  “主题”：[
    {
      “id”：“person_1”，
      “类型”：“人类”，
      “性别”：“女”，
      "身份": "匿名",
      “方向”：{
        "faceing": "直接朝向相机",
        "body_rotation": "正面，稍微向前倾斜"
      },
      “情绪状态”：{
        "mood": "轻松、自信、略显闷热",
        "express": "中性，嘴唇微张，'卧室眼睛'",
        "lust_factor": "中度到高（暗示性姿势和裸体暗示）",
        "position_effect": "倾斜的姿势强调胸部，营造出随意、亲密的氛围"
      },
      “姿势”：{
        "general_definition": "前倾自拍，可能是坐着或跪着",
        "feet_position": "不可见（超出框架）",
        "hand_position": "右臂伸出握住相机（暗示），左臂放在下表面/膝盖上",
        "visible_extent": "头到腰/躯干中部"
      },
      “头”：{
        "struct": "椭圆形脸型，轮廓分明的下巴轮廓",
        “头发”：{
          "color": "浅棕色，带有金色亮点（bronde）",
          "style": "齐肩、分层、纹理/凌乱的外观",
          "shape": "塑造脸部轮廓，体积庞大",
          “condition”：“阳光亲吻，质地干燥”
        },
        "ears": "部分被头发覆盖",
        "forehead": "部分被刘海/发丝覆盖，皮肤光滑",
        "brows": "自然，拉毛，深棕色",
        “眼睛”：{
          "gaze": "目光直接接触镜头",
          “形状”：“杏仁”，
          "makeup": "简约或自然的妆容"
        },
        “鼻子”：{
          "struction": "直的，略带纽扣的尖端",
          "details": "桥对面可见雀斑"
        },
        “嘴区域”：{
          "lips": "非常饱满、丰满，上唇微微上扬",
          "mouth_state": "稍微张开",
          "philtrum": "定义"
        },
        "chin": "圆润但轮廓分明",
        “mimics”：“放松的面部肌肉，诱人的目光”
      },
      “身体”：{
        “皮肤”：{
          "tone": "晒黑",
          “texture”：“光滑，胸部和脸上有雀斑”
        },
        “脖子”：{
          "可见性": "可见",
          "tattoo": "中心/喉咙区域的小文字纹身（垂直字符）"
        },
        “肩膀”：{
          "可见性": "可见",

"posture": "放松，因倾斜而稍微前倾"
        },
        “胸部”：{
          "ratio_to_body": "突出",
          "estimated_size": "全胸围",
          "bra_status": "无（没有胸罩可见）",
          "nipples_visible": "否（被框架/阴影隐藏）",
          "shape_notes": "由于重力和倾斜姿势而自然下垂，乳沟可见",
          "tattoo": "胸骨上的哥特式文字纹身，上面写着“神圣女性””
        },
        “肚子”：{
          "visibility": "部分可见（上腹部）",
          "ratio": "相对于胸部苗条"
        },
        “武器”：{
          “纹身”：{
            "right_arm": "浓墨，大袖/设计可见",
            "left_arm": "素描风格的纹身，包括动漫风格的女孩脸、蜂鸟和线条艺术"
          }
        }
      },
      “服装”：{
        "upper_body": "无（暗示赤裸上身）",
        "lower_body": "不清晰可见，可能是一条白色毛巾或衣服聚集在左下角附近",
        "accessories": "左手腕上的手链（银/细链）"
      },
      “light_interaction_body”：{
        "face": "均匀照明，额头和鼻梁上有高光",
        "chest": "胸部上部曲线突出，乳沟处阴影较深",
        "hair": "顶部发丝的背光效果"
      }
    }
  ],
  “对象”：[
    {
      “id”：“object_1”，
      "name": "提基图腾雕像",
      "description": "带脸的木雕雕像",
      "color": "灰色/棕色木材，涂有红色舌头和黄色牙齿",
      "position": "画面右侧，前景",
      "目的": "装饰、审美元素",
      "ratio": "大型垂直元素与主体的头部尺寸在透视上相当"
    },
    {
      “id”：“object_2”，
      "name": "绿化花盆",
      "description": "带有人造蕨类植物/植物的质朴木制花箱",
      "color": "白色的木材，鼠尾草绿色的植物",
      "position": "右侧，Tiki 雕像后面",
      "目的": "装饰、背景纹理"
    },
    {
      “id”：“object_3”，
      “名称”：“烧烤炉”，
      "description": "不锈钢户外烧烤炉",
      “颜色”：“金属银”，
      "position": "最左边缘，部分裁剪",
      “用途”：“功能性庭院设备”
    }
  ],
  “负面提示”：[
    “上半身的衣服”，
    “衬衫”，
    “胸罩”，
    “比基尼上衣”，
    “变形的手”，
    “糟糕的解剖结构”，
    “模糊”，
    “低分辨率”，
    “黑暗的灯光”，
    “室内环境”，
    “男性主体”，
    “太阳镜”
  ]
}
```

---

## English Original

### Title

Sun-Drenched Outdoor Selfie of a Tattooed Female Subject with Tiki Decor

### Description

Captured in a bright outdoor setting, this close-up features a young woman with bronde hair and distinct tattoos on her chest and arms, posing with a confident, direct gaze. The sunny patio background is characterized by a grey wall, a rustic wooden planter, and a colorful tiki totem pole positioned to the right of the subject

### Prompt

```md
{
  "scene_analysis": {
    "environment": {
      "type": "Outdoor",
      "setting": "Patio or backyard terrace",
      "weather": "Sunny, clear sky visible",
      "background_elements": [
        "Grey stucco wall",
        "Artificial green hedge wall",
        "Blue sky"
      ]
    },
    "camera": {
      "lens": "Wide-angle lens (typical of smartphone front camera)",
      "angle": "Selfie angle, slightly low looking up, close-up framing",
      "focus": "Sharp focus on the subject's face and upper body",
      "distortion": "Slight perspective distortion due to wide angle"
    },
    "lighting": {
      "overall_condition": "Bright natural daylight, hard lighting",
      "sources": [
        {
          "source_id": 1,
          "type": "Sun",
          "angle": "High angle, coming from the upper left (subject's right)",
          "color": "Natural white/warm daylight",
          "intensity": "High/Strong",
          "effects_on_objects": "Creates hard shadows under the subject's hair, chin, and nose. Casts defined shadows on the grey wall behind. Illuminates the hair creating a golden sheen."
        }
      ]
    }
  },
  "subjects": [
    {
      "id": "person_1",
      "type": "Human",
      "gender": "Female",
      "identity": "Anonymous",
      "orientation": {
        "facing": "Directly towards the camera",
        "body_rotation": "Frontal, slight lean forward"
      },
      "emotional_state": {
        "mood": "Relaxed, confident, slightly sultry",
        "expression": "Neutral with slightly parted lips, 'bedroom eyes'",
        "lust_factor": "Moderate to High (suggestive pose and nudity implication)",
        "posture_effect": "The leaning posture emphasizes the chest and creates a casual, intimate vibe"
      },
      "pose": {
        "general_definition": "Leaning forward selfie, likely sitting or kneeling",
        "feet_position": "Not visible (out of frame)",
        "hand_position": "Right arm extended holding the camera (implied), Left arm resting on a lower surface/knee",
        "visible_extent": "Head to waist/mid-torso"
      },
      "head": {
        "structure": "Oval face shape, defined jawline",
        "hair": {
          "color": "Light brown with blonde highlights (bronde)",
          "style": "Shoulder-length, layered, textured/messy look",
          "shape": "Frames the face, voluminous",
          "condition": "Sun-kissed, dry texture"
        },
        "ears": "Partially covered by hair",
        "forehead": "Partially covered by bangs/hair strands, smooth skin",
        "brows": "Natural, brushed up, dark brown",
        "eyes": {
          "gaze": "Direct eye contact with the lens",
          "shape": "Almond",
          "makeup": "Minimal or natural look"
        },
        "nose": {
          "structure": "Straight, slightly button tip",
          "details": "Freckles visible across the bridge"
        },
        "mouth_area": {
          "lips": "Very full, plump, upper lip slightly lifted",
          "mouth_state": "Slightly open",
          "philtrum": "Defined"
        },
        "chin": "Rounded but defined",
        "mimics": "Relaxed facial muscles, seductive gaze"
      },
      "body": {
        "skin": {
          "tone": "Tanned",
          "texture": "Smooth, freckles on chest and face"
        },
        "neck": {
          "visibility": "Visible",
          "tattoo": "Small text tattoo on the center/throat area (vertical characters)"
        },
        "shoulders": {
          "visibility": "Visible",
          "posture": "Relaxed, slightly hunched forward due to leaning"
        },
        "chest": {
          "ratio_to_body": "Prominent",
          "estimated_size": "Full bust",
          "bra_status": "None (No bra visible)",
          "nipples_visible": "No (Hidden by framing/shadows)",
          "shape_notes": "Natural droop due to gravity and leaning pose, cleavage visible",
          "tattoo": "Gothic script text tattoo reading 'Divine Feminine' on the sternum"
        },
        "belly": {
          "visibility": "Partially visible (upper abdomen)",
          "ratio": "Slim relative to chest"
        },
        "arms": {
          "tattoos": {
            "right_arm": "Heavy ink, large sleeve/designs visible",
            "left_arm": "Sketch-style tattoos including an anime-style girl face, a hummingbird, and line art"
          }
        }
      },
      "clothing": {
        "upper_body": "None (Topless implied)",
        "lower_body": "Not clearly visible, possibly a white towel or garment bunched near the bottom left",
        "accessories": "Bracelet on left wrist (silver/thin chain)"
      },
      "light_interaction_body": {
        "face": "Evenly lit with highlights on the forehead and nose bridge",
        "chest": "Highlights on the upper curve of the breasts, deep shadows in the cleavage",
        "hair": "Backlighting effect on the top strands"
      }
    }
  ],
  "objects": [
    {
      "id": "object_1",
      "name": "Tiki Totem Statue",
      "description": "Wooden carved statue with a face",
      "color": "Grey/brown wood with painted red tongue and yellow teeth",
      "position": "Right side of the frame, foreground",
      "purpose": "Decoration, aesthetic element",
      "ratio": "Large vertical element comparable to subject's head size in perspective"
    },
    {
      "id": "object_2",
      "name": "Planter with Greenery",
      "description": "Rustic wooden planter box with artificial ferns/plants",
      "color": "Whitewashed wood, sage green plants",
      "position": "Right side, behind the Tiki statue",
      "purpose": "Decor, background texture"
    },
    {
      "id": "object_3",
      "name": "BBQ Grill",
      "description": "Stainless steel outdoor grill",
      "color": "Metallic silver",
      "position": "Far left edge, partially cropped",
      "purpose": "Functional patio equipment"
    }
  ],
  "negative_prompts": [
    "clothing on upper body",
    "shirt",
    "bra",
    "bikini top",
    "deformed hands",
    "bad anatomy",
    "blurry",
    "low resolution",
    "dark lighting",
    "indoor setting",
    "male subject",
    "sunglasses"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
