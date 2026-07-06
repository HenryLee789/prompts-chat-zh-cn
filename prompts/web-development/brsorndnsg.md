# 布森恩斯格

## 中文说明

用于让 AI 围绕「布森恩斯格」执行Web 开发任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 围绕 Art 等主题生成结构化结果

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

```md
{
  “射击”：{
    "构图": "中等全身镜头，拍摄对象斜倚在白色弧形平台上，背景为深黑色",
    "camera_proximity": "medium_full_shot",
    "camera_angle": "eye_level",
    “film_grain”：“digital_clean_no_grain”
  },
  “主题”：{
    "description": "女性主体，其面部特征、头发外观、身体比例和整体外观与参考图像相匹配，以平静的编辑姿势拍摄",
    "wardrobe": "白色毛绒抹胸搭配配套短裤和超大白色毛绒耳罩",
    "emotion_and_mood": "平静、优雅、简约",
    “pose”：“斜倚在弧形平台上，右臂支撑上半身，左臂轻轻放在大腿上，目光从镜头外转向右侧”
  },
  “视觉细节”：{
    "action": "静态组合姿势强调干净的线条和纹理之间的对比",
    “props”：“白色弧形平台，双手腕上佩戴粗银手镯”
  },
  “场景”：{
    "location": "黑色背景的简约室内工作室",
    "time_of_day": "控制工作室灯光",
    “环境”：“干净的现代工作室空间，白色元素与黑暗环境形成强烈对比”
  },
  “电影摄影”：{
    “照明”：“软键”，
    “语气”：“最小”，
    “color_palette”：“high_contrast_bw”
  },
  “视觉风格”：{
    "style": "现代简约时尚社论",
    “元素”：“来自左前方的柔和聚光灯创造出柔和的高光和阴影、平滑的肤色、与背景分离的清晰轮廓、精致的纹理对比、无文字、无徽标”
  }
}
```

---

## English Original

### Title

brsorndnsg

### Description



### Prompt

```md
{
  "shot": {
    "composition": "medium full-body shot with the subject reclining on a white curved platform against a deep black background",
    "camera_proximity": "medium_full_shot",
    "camera_angle": "eye_level",
    "film_grain": "digital_clean_no_grain"
  },
  "subject": {
    "description": "female subject whose facial features, hair appearance, body proportions and overall look match the reference image, captured in a serene editorial pose",
    "wardrobe": "white fuzzy tube top paired with matching shorts and oversized white fuzzy earmuffs",
    "emotion_and_mood": "calm, elegant, minimal",
    "pose": "reclining on the curved platform with the right arm supporting the upper body and the left arm resting softly on the thigh, gaze directed off-camera to the right"
  },
  "visual_details": {
    "action": "static composed pose emphasizing clean lines and contrast between textures",
    "props": "white curved platform, chunky silver bracelets worn on both wrists"
  },
  "scene": {
    "location": "minimalist indoor studio with a black backdrop",
    "time_of_day": "controlled studio lighting",
    "environment": "clean modern studio space with strong contrast between white elements and dark surroundings"
  },
  "cinematography": {
    "lighting": "soft_key",
    "tone": "minimal",
    "color_palette": "high_contrast_bw"
  },
  "visual_style": {
    "style": "modern minimalist fashion editorial",
    "elements": "soft spotlight from the front-left creating gentle highlights and shadows, smooth skin tones, crisp silhouette separation from background, refined texture contrast, no text, no logos"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
