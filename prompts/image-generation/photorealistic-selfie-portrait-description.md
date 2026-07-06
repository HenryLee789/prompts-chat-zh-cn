# 逼真的自拍肖像 描述

## 中文说明

此提示提供了详细的真实感描述，用于生成年轻女性主体的自拍照。它包括人口统计、面部特征、身体比例、服装、姿势、设置、相机细节、灯光、情绪和风格的细节。该描述旨在用于创建具有社交媒体美感的高保真、逼真图像。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Descriptions 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "demographics": "年轻女性，约20-24岁，白人。",
    “头发”：{
      "color": "脏金发到浅金发渐变。",
      "style": "长直微波，层次分明，随意分开。",
      "texture": "柔软、自然的股线，略微凌乱，根部可见。",
      “运动”：“自然落在肩膀和背部。”
    },
    “脸”：{
      "shape": "椭圆形，下巴轮廓柔和。",
      "eyes": "杏仁形，浅蓝色/灰色虹膜，清晰锐利的黑翼眼线。",
      "nose": "纽扣鼻，软鼻梁。",
      "lips": "饱满、丰满、玫瑰粉色，微张，呈现撅嘴的表情。",
      "skin_details": "鼻子和脸颊上有明显的重度雀斑。纹理光滑，但皮肤纹理真实。自然的腮红。",
      "micro_details": "右上胸有痣，左肩有痣。"
    },
    “身体比例”：{
      "build": "丰满、曲线优美、厚重的胸围。",
      "chest": "胸围大，前凸突出，乳沟深可见。",
      "waist_to_chest_ratio": "与腰部相比，胸宽明显更宽意味着沙漏型身材。",
      "shoulders": "柔软、圆润、自然的坡度。",
      “dominance”：“上躯干体积在视觉上主导了画面。”
    },
    “服装”：{
      "top": "希瑟灰色罗纹针织背心/吊带背心。",
      "fit": "紧身、合身、拉伸胸部体积、低汤匙领口。",
      “straps”：“厚带子，牢固地坐在肩膀上。”
    },
    “配件”：{
      “珠宝”：[
        “小金圈耳环。”,
        “带有小‘G’字母吊坠的金链项链。”,
        “更长的细金链，带有独特的袋鼠吊坠。”
      ]
    }
  },
  “姿势”：{
    "type": "手持自拍视角。",
    "orientation": "正面特写，从上方稍微倾斜。",
    "head_position": "稍微向主体右侧倾斜。",
    "limbs": "右臂向前延伸（超出画面），表示握住相机。",
    "gaze": "目光直接与镜头接触，迷人而自信。",
    "spine_curvature": "胸部突出暗示轻微的拱形。"
  },
  “设置”：{
    "environment": "家用卫生间。",
    "background_elements": "深棕色/灰色光泽瓷砖墙，左侧可见镀铬淋浴装置，右侧可见白色陶瓷马桶水箱顶部。",
    “深度”：“景深较浅，背景元素稍微失焦。”
  },
  “相机”：{
    "shot_type": "特写、自拍肖像。",
    "angle": "高角度（略高于视线水平），典型的智能手机自拍。",
    "focal_length": "24mm 至 28mm 等效值（广角智能手机镜头）。",
    "framing": "胸部向上拍摄，在躯干中部裁剪。",
    "focus": "眼睛和脸部的焦点清晰，肩膀轻微下降。",
    "perspective": "稍微缩短延伸的手臂一侧。"
  },
  “照明”：{
    "source": "柔和、漫射的头顶浴室环境照明。",
    "direction": "前顶照明。",
    "highlights": "额头、鼻尖、下巴和上胸部曲线上有柔和的镜面高光。",
    "shadows": "下巴下方的柔和阴影并定义乳沟深度。",
    “品质”：“自然、讨人喜欢，没有刺耳的对比。”
  },
  “心情和表达”：{
    "tone": "休闲、性感、自信。",
    "express": "轻松的噘嘴，‘酷女孩’的审美。”,
    “气氛”：“亲密、坦诚。”
  },
  “风格和现实主义”：{
    "style": "真实感、社交媒体审美。",
    "fidelity": "高保真皮肤纹理，无喷枪。",

    “缺陷”：“可见的雀斑、散乱的毛发、保留的自然皮肤变化。”
  },
  “颜色和色调”：{
    "palette": "中性色调（灰色、米色、肤色），带有蓝色（眼睛）和金色（珠宝）。",
    "skin_tone": "浅棕褐色至浅棕褐色，温暖的底色。",
    "white_balance": "稍微温暖，室内钨丝灯混合。",
    "saturation": "自然、略微充满活力的嘴唇和眼睛。",
    “对比度”：“中等对比度。”
  },
  “技术细节”：{
    “纵横比”：“3：4”，
    "resolution": "高分辨率，细节清晰。",
    “噪声”：“室内光线下手机摄像头传感器的轻微数字噪声特征。”
  }
}
```

---

## English Original

### Title

Photorealistic Selfie Portrait Description

### Description

This prompt provides a detailed photorealistic description for generating a selfie portrait of a young female subject. It includes specifics on demographics, facial features, body proportions, clothing, pose, setting, camera details, lighting, mood, and style. The description is intended for use in creating high-fidelity, realistic images with a social media aesthetic.

### Prompt

```md
{
  "subject": {
    "demographics": "Young female, approx 20-24 years old, Caucasian.",
    "hair": {
      "color": "Dirty blonde to light blonde gradient.",
      "style": "Long, straight with slight wave, layered, casual parting.",
      "texture": "Soft, natural strands, slightly tousled, roots visible.",
      "movement": "Falling naturally over shoulders and back."
    },
    "face": {
      "shape": "Oval with soft jawline.",
      "eyes": "Almond-shaped, light blue/grey irises, distinct sharp black winged eyeliner.",
      "nose": "Button nose, soft bridge.",
      "lips": "Full, plump, rosy pink, slightly parted in a pouty expression.",
      "skin_details": "Prominent, heavy freckles across nose and cheeks. Smooth texture but with realistic skin grain. Natural blush.",
      "micro_details": "Mole on right upper chest, mole on left shoulder."
    },
    "body_proportions": {
      "build": "Voluminous, curvy, heavy bust.",
      "chest": "Large bust volume, prominent forward projection, deep cleavage visible.",
      "waist_to_chest_ratio": "Significantly wider chest width compared to waist implies hourglass figure.",
      "shoulders": "Soft, rounded, natural slope.",
      "dominance": "Upper torso volume visually dominates the frame."
    },
    "clothing": {
      "top": "Heather grey ribbed knit tank top/camisole.",
      "fit": "Tight, form-fitting, stretching over chest volume, low scoop neckline.",
      "straps": "Thick straps, sitting securely on shoulders."
    },
    "accessories": {
      "jewelry": [
        "Small gold hoop earrings.",
        "Gold chain necklace with a small 'G' letter pendant.",
        "Longer thin gold chain with a distinct kangaroo pendant."
      ]
    }
  },
  "pose": {
    "type": "Handheld selfie perspective.",
    "orientation": "Frontal close-up, slightly angled from above.",
    "head_position": "Tilted slightly to subject's right.",
    "limbs": "Right arm extended forward (out of frame) indicating holding the camera.",
    "gaze": "Direct eye contact with lens, alluring and confident.",
    "spine_curvature": "Slight arch implied by chest prominence."
  },
  "setting": {
    "environment": "Domestic bathroom.",
    "background_elements": "Dark brown/grey glossy tiled wall, chrome shower fixture visible on left, top of white ceramic toilet tank visible on right.",
    "depth": "Shallow depth of field, background elements slightly out of focus."
  },
  "camera": {
    "shot_type": "Close-up, selfie portrait.",
    "angle": "High angle (slightly above eye level), typical of smartphone selfies.",
    "focal_length": "24mm to 28mm equivalent (wide angle smartphone lens).",
    "framing": "Chest-up shot, cropping at mid-torso.",
    "focus": "Sharp focus on eyes and face, slight fall-off on shoulders.",
    "perspective": "Slight foreshortening of the extended arm side."
  },
  "lighting": {
    "source": "Soft, diffused overhead ambient bathroom lighting.",
    "direction": "Front-top lighting.",
    "highlights": "Soft specular highlights on forehead, tip of nose, chin, and upper chest curves.",
    "shadows": "Soft shadows under the chin and defining the cleavage depth.",
    "quality": "Natural, flattering, no harsh contrast."
  },
  "mood_and_expression": {
    "tone": "Casual, sultry, confident.",
    "expression": "Relaxed pout, 'cool girl' aesthetic.",
    "atmosphere": "Intimate, candid."
  },
  "style_and_realism": {
    "style": "Photorealistic, social media aesthetic.",
    "fidelity": "High fidelity skin texture, no airbrushing.",
    "imperfections": "Visible freckles, stray hairs, natural skin variation preserved."
  },
  "colors_and_tone": {
    "palette": "Neutral tones (grey, beige, skin tones) with pops of blue (eyes) and gold (jewelry).",
    "skin_tone": "Fair to light tan, warm undertones.",
    "white_balance": "Slightly warm, indoor tungsten mix.",
    "saturation": "Natural, slightly vibrant lips and eyes.",
    "contrast": "Medium contrast."
  },
  "technical_details": {
    "aspect_ratio": "3:4",
    "resolution": "High resolution, sharp details.",
    "noise": "Slight digital noise characteristic of phone camera sensors in indoor light."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
