# 孤独的哭泣

## 中文说明

双子座

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
  “图像描述”：{
    “主题”：{
      "type": "年轻女子",
      “外观”：{
        "hair": "齐肩的深色波浪发",
        "face": "微微泛红，泪水湿润，淡烟熏眼妆，大胆的红色口红",
        “表情”：“对着观众的令人心碎的恳求目光，可见的情感重量”，
        “体质”：“丰盈、坚挺、宽大的乳房，匀称的双腿，性感挑衅的姿势”
      },
      “服装”：{
        "dress": "极短的白色紧身连衣裙，无肩带、无袖、鸡心领口，明显难以容纳她的大胸围",
        "footwear": "红色漆皮细高跟鞋"
      },
      “pose”：“全身站立拍摄，一手撑在臀部，另一只手轻轻拉扯短裙的下摆，姿态诱人又脆弱”
    },
    “环境”：{
      "setting": "现代昏暗的客厅",
      "foreground": "复杂图案的波斯风格地毯",
      “背景”：[
        “带有图案垫子的灰色布艺沙发”，
        “深色木质咖啡桌，配有一杯水和一支蜡烛”，
        “现代三脚落地灯投射出柔和的阴影”，
        《远处黑暗的书架》
      ]
    },
    “技术规格”：{
      "angle": "稍微低角度的拍摄以强调高度和存在感",
      "lighting": "来自左侧的柔和定向光、深阴影、皮肤和服装面料上的微妙高光",
      "camera_style": "逼真的电影摄影",
      "lens_effects": "浅景深，模糊背景（散景）",
      "quality": "8k 分辨率、自然胶片颗粒、高度细致的纹理",
      "aspect_ratio": "9:16（垂直格式）"
    }
  }
}
```

---

## English Original

### Title

Lonely cry

### Description

Gemini

### Prompt

```md
{
  "image_description": {
    "subject": {
      "type": "Young woman",
      "appearance": {
        "hair": "Shoulder-length wavy brunette hair",
        "face": "Slightly flushed, wet with tears, light smokey eyes makeup, bold red lipstick",
        "expression": "Heartbreaking imploring gaze directed at the viewer, visible emotional weight",
        "physique": "Voluminous, firm, and large breasts, shapely legs, sensual and provocative posture"
      },
      "clothing": {
        "dress": "Extremely short white bodycon dress, strapless, sleeveless, sweetheart neckline that visibly struggles to contain her large bust",
        "footwear": "Red patent leather stiletto high heels"
      },
      "pose": "Full body standing shot, one hand resting on the hip, the other hand slightly tugging the hem of the short dress, alluring yet vulnerable stance"
    },
    "environment": {
      "setting": "Modern dimly lit living room",
      "foreground": "Intricate patterned Persian-style rug",
      "background": [
        "Grey fabric sofa with patterned cushions",
        "Dark wood coffee table with a glass of water and a candle",
        "Modern tripod floor lamp projecting soft shadows",
        "Dark bookshelf in the distance"
      ]
    },
    "technical_specs": {
      "angle": "Slightly low-angle shot to emphasize height and presence",
      "lighting": "Soft directional light from the left, deep shadows, subtle highlights on skin and dress fabric",
      "camera_style": "Photorealistic, cinematic photography",
      "lens_effects": "Shallow depth of field, blurred background (bokeh)",
      "quality": "8k resolution, natural film grain, highly detailed textures",
      "aspect_ratio": "9:16 (Vertical format)"
    }
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
