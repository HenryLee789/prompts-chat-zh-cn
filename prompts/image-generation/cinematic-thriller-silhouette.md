# 电影惊悚片剪影

## 中文说明

该提示会生成具有电影惊悚气氛的图像，其特征是剪影压在纹理玻璃上。这创造了一个神秘且逼真的场景，突出了详细的纹理和独特的调色板。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Creative Writing、DALL-E 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “提示内容”：{
    "positive_prompt": "电影镜头，透过绿色纹理钢丝玻璃查看，磨砂玻璃效果，手掌压在玻璃上的人的轮廓，手压在潮湿的玻璃上清晰可见，神秘的气氛，昏暗的灯光，绿黄色调色板，网格图案纹理，心理惊悚氛围，真实感，8k，高度详细的纹理，马赛克玻璃变形",
    "negative_prompt": "透明玻璃、卡通、插图、动漫、明亮的灯光、低分辨率、模糊、文本、水印、变形的手、缺失的手指、多余的手指、干燥的玻璃、蓝色色调",
    “参数”：{
      “纵横比”：“1：1”，
      “步骤”：30，
      “cfg_scale”：7.0，
      “采样器”：“DPM++ 2M Karras”
    }
  },
  “视觉分析”：{
    "subject": "纹理玻璃后面的剪影",
    "action": "手压在表面上",
    "atmosphere": "幽闭恐惧症，神秘",
    “dominant_colors”：[“#4a6b45”，“#8c9c5e”，“#2e3a24”]
  }
}
```

---

## English Original

### Title

Cinematic Thriller Silhouette

### Description

The prompt generates an image with a cinematic thriller atmosphere, featuring a silhouette pressing against textured glass. This creates a mysterious and photorealistic scene, highlighting detailed textures and a distinct color palette.

### Prompt

```md
{
  "prompt_content": {
    "positive_prompt": "cinematic shot, view through green textured wire reinforced glass, frosted glass effect, silhouette of a person pressing palms against the glass, hands distinctively visible pressing on wet glass, mysterious atmosphere, dim lighting, greenish yellow color palette, grid pattern texture, psychological thriller vibe, photorealistic, 8k, highly detailed textures, mosaic glass distortion",
    "negative_prompt": "clear glass, cartoon, illustration, anime, bright lighting, low resolution, blurry, text, watermark, deformed hands, missing fingers, extra fingers, dry glass, blue tones",
    "parameters": {
      "aspect_ratio": "1:1",
      "steps": 30,
      "cfg_scale": 7.0,
      "sampler": "DPM++ 2M Karras"
    }
  },
  "visual_analysis": {
    "subject": "Silhouette behind textured glass",
    "action": "Hands pressing against surface",
    "atmosphere": "Claustrophobic, mysterious",
    "dominant_colors": ["#4a6b45", "#8c9c5e", "#2e3a24"]
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
