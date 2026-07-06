# 尘暴之翼

## 中文说明

“一位勇敢的 20 世纪 30 年代女飞行员自信地站在日落时分的风吹过的机场上，准备穿越大西洋。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Nano Banana 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “title”：“尘暴之翼”，
  "description": "一位大胆的 20 世纪 30 年代女飞行员自信地站在日落时分的风吹过的机场上，准备穿越大西洋。",
  "prompt": "你将使用所提供的照片进行图像编辑，创建一个值得历史史诗般的框架。将女性主体转变为 1930 年代的先锋飞行员。图像必须逼真，利用电影照明来突出饱经风霜的皮革和皮肤毛孔的纹理。场景非常详细，使用 Arri Alexa 拍摄，采用浅景深，模糊了背景中的老式双翼飞机。构图侧重于现实物理，从风吹动她的围巾到她脸颊上沾满了油污。",
  “详细信息”：{
    “年份”：“1933年”，
    "genre": "电影照片写实主义",
    "location": "中西部一个尘土飞扬的偏远机场，背景中一架老式螺旋桨飞机的金属机头模糊不清。",
    “照明”：[
      “黄金时刻日落”，
      “强烈的边缘照明”，
      “穿过尘埃的体积光线”，
      “高对比度暖色调”
    ],
    "camera_angle": "使用 85mm 人像镜头的眼平特写镜头。",
    “情感”：[
      “决心”，
      “冒险”，
      “自信”
    ],
    “颜色调色板”：[
      “烧焦的橙子”，
      “皮革棕色”，
      “金属银”，
      《夕阳金》，
      “棕褐色”
    ],
    “气氛”：[
      “怀旧”，
      “坚韧不拔”，
      “风”，
      “史诗”
    ],
    "environmental_elements": "在光线下旋转的尘埃颗粒，远处旋转的螺旋桨运动模糊，高大的干草在风中吹动。",
    “主题1”：{
      "costume": "仿旧复古棕色羊毛皮飞行员夹克，白色丝绸飞行员围巾在风中飘扬，黄铜飞行护目镜放在她的额头上。",
      "subject_expression": "在夕阳的照射下，眼睛微微眯起，露出微妙而自信的傻笑。",
      "subject_action": "调整手上的皮手套，同时凝视地平线。"
    },
    “否定提示”：{
      “排除视觉效果”：[
        “现代喷气式飞机”，
        “铺好的跑道”，
        “智能手机”，
        “数字手表”，
        “清澈的蓝天”，
        “塑料质感”
      ],
      “排除样式”：[
        “卡通”，
        “3D渲染”，
        “动漫”，
        “绘画”，
        “素描”，
        “黑与白”
      ],
      “排除颜色”：[
        “霓虹绿”，
        “电光蓝”，
        “热粉色”
      ],
      “排除对象”：[
        “现代建筑”，
        “汽车”
      ]
    }
  }
}
```

---

## English Original

### Title

Wings of the Dust Bowl

### Description

"A daring 1930s female aviator stands confident on a wind-swept airfield at sunset, ready to cross the Atlantic.

### Prompt

```md
{
  "title": "Wings of the Dust Bowl",
  "description": "A daring 1930s female aviator stands confident on a wind-swept airfield at sunset, ready to cross the Atlantic.",
  "prompt": "You will perform an image edit using the provided photo to create a frame worthy of a historical epic. Transform the female subject into a pioneer aviator from the 1930s. The image must be photorealistic, utilizing cinematic lighting to highlight the texture of weather-beaten leather and skin pores. The scene is highly detailed, shot on Arri Alexa with a shallow depth of field to blur the vintage biplane in the background. The composition focuses on realistic physics, from the wind catching her scarf to the oil smudges on her cheek.",
  "details": {
    "year": "1933",
    "genre": "Cinematic Photorealism",
    "location": "A dusty, remote airfield in the Midwest with the blurred metallic nose of a vintage propeller plane in the background.",
    "lighting": [
      "Golden hour sunset",
      "Strong rim lighting",
      "Volumetric light rays through dust",
      "High contrast warm tones"
    ],
    "camera_angle": "Eye-level close-up shot using an 85mm portrait lens.",
    "emotion": [
      "Determined",
      "Adventurous",
      "Confident"
    ],
    "color_palette": [
      "Burnt orange",
      "Leather brown",
      "Metallic silver",
      "Sunset gold",
      "Sepia"
    ],
    "atmosphere": [
      "Nostalgic",
      "Gritty",
      "Windy",
      "Epic"
    ],
    "environmental_elements": "Swirling dust particles caught in the light, a spinning propeller motion blur in the distance, tall dry grass blowing in the wind.",
    "subject1": {
      "costume": "A distressed vintage brown leather bomber jacket with a shearling collar, a white silk aviator scarf blowing in the wind, and brass flight goggles resting on her forehead.",
      "subject_expression": "A subtle, confident smirk with eyes squinting slightly against the setting sun.",
      "subject_action": "Adjusting a leather glove on her hand while gazing toward the horizon."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "modern jets",
        "paved runway",
        "smartphones",
        "digital watches",
        "clear blue sky",
        "plastic textures"
      ],
      "exclude_styles": [
        "cartoon",
        "3D render",
        "anime",
        "painting",
        "sketch",
        "black and white"
      ],
      "exclude_colors": [
        "neon green",
        "electric blue",
        "hot pink"
      ],
      "exclude_objects": [
        "modern buildings",
        "cars"
      ]
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
