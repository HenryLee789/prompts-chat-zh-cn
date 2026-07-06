# 超现实 CGI 摄影混合肖像

## 中文说明

用于让 AI 围绕「超现实 CGI 摄影混合肖像」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 ChatGPT、API 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "prompt_type": "超现实 CGI 摄影混合肖像",
  “主题”：{
    "reference_identity": "至关重要的是，女性的面部特征、头发和独特身份必须与提供的参考照片完全匹配。",
    "expression": "中性表情，向上凝视。",
    "pose": "从上方看的超现实全身构图。她的上半身和手臂从平躺的智能手机屏幕中显现出来，双手放在屏幕边框上。她的下半身以数字方式包含在屏幕的显示屏内。",
    “服装”：{
      "upper_body_real": "有吸引力的日常穿着：合身的炭灰色罗纹针织毛衣。头上戴着白色耳罩式耳机。",
      "lower_body_screen": "有吸引力的日常穿着：深色高腰紧身牛仔裤和时尚的黑色皮革踝靴，在手机界面中以数字方式呈现。"
    }
  },
  “环境”：{
    "setting": "简约的灰色混凝土表面，黑色智能手机平放在上面。",
    "screen_content": "智能手机显示屏显示音乐播放器应用程序界面。曲目：Pentagram 的《笼中狮子》。时间戳：0:41 / 5:59。屏幕背景视觉效果：温暖的日落和棕榈树的剪影。",
    “道具”：“iPhone 16”
  },
  “电影摄影”：{
    "camera_angle": "高自上而下的视角（上帝视角），直视手机和新兴主题。",
    "lens": "35mm广角镜头，创造现实与数字世界的视角融合。",
    "aperture": "f/8 可实现深景深，保持物理主体和屏幕内容的清晰度。",
    "lighting": "柔和的人造头顶和正面照明与智能手机屏幕发出的温暖光芒混合在一起。中等对比度，扩散阴影。照明调色板稍微温暖且不饱和，反映了亲密的室内环境。",
    "color_palette": "现实世界中的中性灰白色主导调色板，与屏幕上日落界面的暖橙色、深红色和绿色形成鲜明对比。",
    “风格”：“数字 CGI 与摄影无缝融合。异想天开、超现实、受科技启发、身临其境的氛围。”
  }
}
```

---

## English Original

### Title

Surreal CGI-Photography Hybrid Portrait

### Description



### Prompt

```md
{
  "prompt_type": "Surreal CGI-Photography Hybrid Portrait",
  "subject": {
    "reference_identity": "Crucially, the woman's facial features, hair, and unique identity must match the provided reference photo exactly.",
    "expression": "Neutral expression, gazing upward.",
    "pose": "A surreal full-body composition viewed from above. Her upper torso and arms emerge physically from a smartphone screen lying flat, hands resting on the screen's bezel. Her lower body is digitally contained within the screen's display.",
    "attire": {
      "upper_body_real": "Attractive daily wear: A fitted, charcoal grey ribbed knit sweater. White over-ear headphones are on her head.",
      "lower_body_screen": "Attractive daily wear: Dark high-waisted skinny jeans and stylish black leather ankle boots, rendered digitally within the phone interface."
    }
  },
  "environment": {
    "setting": "A minimalist gray concrete surface where a black smartphone lies flat.",
    "screen_content": "The smartphone display shows a music player app interface. Track: 'Lions In a Cage' by Pentagram. Timestamp: 0:41 / 5:59. Background visual on screen: A warm sunset with silhouetted palm trees.",
    "props": "Iphone 16"
  },
  "cinematography": {
    "camera_angle": "High top-down view (God's eye angle), looking straight down at the phone and emerging subject.",
    "lens": "35mm wide-angle lens, creating perspective integration between the real and digital worlds.",
    "aperture": "f/8 for deep depth of field, keeping both the physical subject and the screen content sharp.",
    "lighting": "Soft artificial overhead and frontal lighting mixed with the warm glow emanating from the smartphone screen. Medium contrast, diffused shadows. The lighting palette is slightly warm and desaturated, mirroring an intimate indoor setting.",
    "color_palette": "Neutral gray-white dominant palette in the real world, contrasted by the warm oranges, deep reds, and greens from the sunset interface on the screen.",
    "style": "Digital CGI blended seamlessly with photography. Whimsical, surreal, tech-inspired, and immersive mood."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
