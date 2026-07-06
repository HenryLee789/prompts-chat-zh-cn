# 仅有的

## 中文说明

用于让 AI 围绕「仅有的」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  "reference": {
    "face_identity": "${face_identity:uploaded reference image never change face and hair}",
    “身份锁”：真，
    "face_preservation": "100%相同的面部结构、比例、皮肤纹理、眼睛形状、嘴唇、鼻子、眉毛、痣和自然表情"
  },
  “主题”：[
    {
      "type": "${subject1_type:young woman}",
      "role": "前景主体",
      "express": "柔和自信的微笑",
      "gaze": "直视相机",
      “姿势”：{
        "position": "站得离男性主体非常近",
        “interaction”：“稍微靠向他，摆出随意的自拍姿势”
      },
      “头发”：{
        “颜色”：“深棕色”，
        “风格”：“时尚高马尾辫”
      },
      “化妆”：{
        “风格”：“自然魅力”，
        “详细信息”：[
          “甚至发光的皮肤”，
          “微妙的轮廓”，
          “柔和的腮红”，
          “明确的眉毛”，
          "natural pink lips"
        ]
      },
      “服装”：{
        "clothing": "黑色合身短袖上衣",
        “风格”：“运动休闲”
      }
    },
    {
      "type": "${subject2_type:Lionel Messi}",
      “角色”：“次要主题”，
      "express": "轻松的微笑",
      "gaze": "看着镜头",
      “特点”：{
        "beard": "短而整齐的胡须"
      },
      “头发”：{
        “颜色”：“棕色”，
        "style": "短，现代风格，顶部略显凌乱"
      },
      “服装”：{
        "clothing": "迈阿密国际粉色主场球衣",
        “详细信息”：[
          “胸前可见国际迈阿密苍鹭标志”，
          “阿迪达斯标志可见”，
          “赞助商标志可见”，
          “运动型身材”
        ]
      }
    }
  ],
  “环境”：{
    “地点”：“足球场”，
    “背景元素”：[
      “欢呼的人群”，
      “体育场座位上挤满了球迷”，
      “远处可见球员和工作人员”，
      “体育场泛光灯的夜空”
    ]
  },
  “照明”：{
    "type": "体育场照明",
    “特点”：[
      “明亮的头顶灯”，
      “面部照明均匀”，
      “皮肤上的轻微亮点”，
      “真实的夜间对比”
    ]
  },
  “摄影风格”：{
    "style": "现实生活中的自拍摄影",
    "camera_look": "智能手机摄像头",
    "depth_of_field": "中等景深，人群稍微模糊",
    “心情”：“兴奋、庆祝、坦率”
  },
  “渲染质量”：{
    “realism”：“超真实感”，
    "detail_level": "高",
    “纵横比”：“4：5”，
    "skin_texture": "自然逼真",
    “分辨率”：“高分辨率”，
    "color_grading": "逼真的色彩与体育场的活力"
  }
}
```

---

## English Original

### Title

berre

### Description



### Prompt

```md
{
  "reference": {
    "face_identity": "${face_identity:uploaded reference image never change face and hair}",
    "identity_lock": true,
    "face_preservation": "100% identical facial structure, proportions, skin texture, eye shape, lips, nose, brows, moles, and natural expression"
  },
  "subjects": [
    {
      "type": "${subject1_type:young woman}",
      "role": "foreground subject",
      "expression": "soft confident smile",
      "gaze": "looking directly at the camera",
      "pose": {
        "position": "standing very close to the male subject",
        "interaction": "leaning slightly toward him in a casual selfie pose"
      },
      "hair": {
        "color": "dark brown",
        "style": "sleek high ponytail"
      },
      "makeup": {
        "style": "natural glam",
        "details": [
          "even glowing skin",
          "subtle contour",
          "soft blush",
          "defined brows",
          "natural pink lips"
        ]
      },
      "outfit": {
        "clothing": "black fitted short-sleeve top",
        "style": "sporty casual"
      }
    },
    {
      "type": "${subject2_type:Lionel Messi}",
      "role": "secondary subject",
      "expression": "relaxed smile",
      "gaze": "looking at the camera",
      "features": {
        "beard": "short, well-groomed full beard"
      },
      "hair": {
        "color": "brown",
        "style": "short, modern styled, slightly messy on top"
      },
      "outfit": {
        "clothing": "Inter Miami pink home football jersey",
        "details": [
          "Inter Miami heron logo visible on chest",
          "adidas logo visible",
          "sponsor logo visible",
          "athletic fit"
        ]
      }
    }
  ],
  "environment": {
    "location": "football stadium",
    "background_elements": [
      "large cheering crowd",
      "stadium seating filled with fans",
      "players and staff visible in the distance",
      "night sky with stadium floodlights"
    ]
  },
  "lighting": {
    "type": "stadium lighting",
    "characteristics": [
      "bright overhead lights",
      "even illumination on faces",
      "slight highlights on skin",
      "realistic night-time contrast"
    ]
  },
  "photography_style": {
    "style": "real-life selfie photography",
    "camera_look": "smartphone camera",
    "depth_of_field": "moderate depth of field with slightly blurred crowd",
    "mood": "excited, celebratory, candid"
  },
  "render_quality": {
    "realism": "ultra-photorealistic",
    "detail_level": "high",
    "Aspect Ratio": "4:5",
    "skin_texture": "natural and realistic",
    "resolution": "high resolution",
    "color_grading": "true-to-life colors with stadium vibrancy"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
