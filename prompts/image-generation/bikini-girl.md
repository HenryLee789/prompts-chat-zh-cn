# 比基尼_女孩

## 中文说明

用于让 AI 围绕「比基尼_女孩」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  "prompt": "一张高品质的全身户外照片，一位年轻女子站在阳光明媚的海滩上，身材曲线优美，身材修长，胸围非常丰满。以四分之三视角（3/4角）拍摄，她看着镜头，表情自信、诱惑、挑衅。她穿着时尚的紫色比基尼凸显身材，脚上踩着高跟凉鞋，踩在金色的沙滩上。背景是热带海滩，柔软的白色沙滩，柔和的绿松石海浪，明亮的蓝色天空，在她的皮肤上创造出逼真的阴影和高光。构图遵循三分法则，浅景深稍微模糊了海洋背景，将焦点完全集中在她身上。”
  "scene_type": "挑衅性的海滩摄影",
  “主题”：[
    {
      "role": "主要主题",
      "description": "年轻女性，身材曲线优美但身材苗条，胸部非常突出且丰满。",
      "wardrobe": "紫色比基尼，高跟凉鞋。",
      "pose_and_expression": "四分之三视角，站在沙子上，挑衅性感的态度，自信的目光。"
    }
  ],
  “环境”：{
    "setting": "热带海滩",
    “细节”：“金色的沙滩，碧绿的海水，晴朗的天空，明亮的日光。”
  },
  “照明”：{
    "type": "自然阳光",
    “品质”：“明亮、直接”，
    “效果”：“真实的皮肤纹理，自然的亮点”
  },
  “组成”：{
    "framing": "全身拍摄",
    "angle": "3/4 视图",
    "depth_of_field": "浅（散景背景）"
  },
  “风格和质量提示”：[
    “高分辨率摄影”，
    “真实的皮肤纹理”，
    “鲜艳的色彩”，
    “专业照明”，
    “对主题的敏锐关注”
  ],
  "negative_prompt": "卡通、绘画、动漫、低分辨率、模糊、扭曲的解剖结构、多余的肢体、不切实际的皮肤、平面照明、凌乱的头发"
}
```

---

## English Original

### Title

Bikini_Girl

### Description



### Prompt

```md
{
  "prompt": "A high-quality, full-body outdoor photo of a young woman with a curvaceous yet slender physique and a very voluminous bust, standing on a sunny beach. She is captured in a three-quarter view (3/4 angle), looking toward the camera with a confident, seductive, and provocative expression. She wears a stylish purple bikini that highlights her figure and high-heeled sandals on her feet, which are planted in the golden sand. The background features a tropical beach with soft white sand, gentle turquoise waves, and a clear blue sky. The lighting is bright, natural sunlight, creating realistic shadows and highlights on her skin. The composition is professional, following the rule of thirds, with a shallow depth of field that slightly blurs the ocean background to keep the focus entirely on her.",
  "scene_type": "Provocative beach photography",
  "subjects": [
    {
      "role": "Main subject",
      "description": "Young woman with a curvy but slim build, featuring a very prominent and voluminous bust.",
      "wardrobe": "Purple bikini, high-heeled sandals.",
      "pose_and_expression": "Three-quarter view, standing on sand, provocative and sexy attitude, confident gaze."
    }
  ],
  "environment": {
    "setting": "Tropical beach",
    "details": "Golden sand, turquoise sea, clear sky, bright daylight."
  },
  "lighting": {
    "type": "Natural sunlight",
    "quality": "Bright and direct",
    "effects": "Realistic skin textures, natural highlights"
  },
  "composition": {
    "framing": "Full-body shot",
    "angle": "3/4 view",
    "depth_of_field": "Shallow (bokeh background)"
  },
  "style_and_quality_cues": [
    "High-resolution photography",
    "Realistic skin texture",
    "Vibrant colors",
    "Professional lighting",
    "Sharp focus on subject"
  ],
  "negative_prompt": "cartoon, drawing, anime, low resolution, blurry, distorted anatomy, extra limbs, unrealistic skin, flat lighting, messy hair"
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
