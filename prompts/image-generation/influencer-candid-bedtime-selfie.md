# 有影响力的睡前自拍

## 中文说明

使用先进的摄影规格生成超逼真的影响者风格的坦率睡前自拍照。其中包括相机、灯光、场景和拍摄对象特征的详细设置，以营造奢华而亲密的氛围。

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
  “元”：{
    “纵横比”：“9:16”，
    "quality": "raw_photo，未压缩，8k",
    "camera": "iPhone 15 Pro Max 前置摄像头",
    “镜头”：“23mm f/1.9”，
    "style": "网红睡前自拍，干净少女审美，青春自然美，超写实",
    "iso": "800（干净、低噪音）"
  },
  “场景”：{
    "location": "豪华卧室内部",
    “环境”：[
      “高支数白色或奶油色床上用品”，
      “蓬松的羽绒枕头”，
      “来自背景的柔和温暖的环境光”，
      “丝绸床头板的暗示”
    ],
    "time": "深夜/就寝时间",
    “氛围”：“亲密、放松、轻奢、天真”
  },
  “照明”：{
    "type": "手机屏幕柔光箱效果",
    "key_light": "手机屏幕柔和的冷光照亮面部中心，增强皮肤光滑度",
    "fill_light": "背景中温暖、昏暗的床头灯创造深度",
    "shadows": "非常柔和的阴影",
    "highlights": "鼻梁和颧骨上呈现奶油般、水润的高光（水润光泽）"
  },
  “相机透视”：{
    "pov": "自拍（手臂伸出）",
    "angle": "高角度，稍微倾斜头部（讨人喜欢的肖像角度）",
    "framing": "脸部和上胸部的特写",
    “focus”：“对眼睛和嘴唇进行清晰对焦，对头发和背景进行柔焦”
  },
  “主题”：{
    “人口统计”：{
      “性别”：“女”，
      “年龄”：“24岁”，
      "ethnicity": "北欧（白皮肤）",
      "look": "下班后面容清新、青春洋溢的模特"
    },
    “脸”：{
      “结构”：“对称柔和的五官，年轻丰润的脸颊，轮廓分明但柔和的下颌线，精致的鼻子”，
      "skin_texture": "光滑、年轻的肤色，‘玻璃肤’效果（超水润丰盈），瓷质/苍白肤色，极其细腻的纹理，最小可见的毛孔，焕发健康的光泽，自然无瑕而不厚重”,
      “lips”：“自然毛绒嘴唇，柔和的粉红色/玫瑰色天然色素，水润唇膏质地”，
      “眼睛”：“大而富有表现力的蓝色眼睛，清晰明亮的虹膜细节，自然长的深色睫毛，看着相机镜头”，
      “眉毛”：“自然浓密、修饰、柔和的灰褐色配色发根”
    },
    “头发”：{
      "color": "带有白金亮点的冷色调蜂蜜金发",
      "style": "别致的钝鲍勃剪裁，长度及下巴，在枕头上略微凌乱，但保持形状",
      “质地”：“丝滑、健康光泽、细腻柔软的发质”
    },
    《表情》：“温柔、天真、自信但困倦、微微温柔的微笑”
  },
  “服装”：{
    “头饰”：{
      "item": "奢华丝绸睡眠面膜",
      "position": "推到额头/头发上",
      "color": "香槟金或腮红粉色",
      “质地”：“缎面光泽”
    },
    “顶部”：{
      "type": "丝绸或缎面睡衣吊带背心",
      "color": "搭配香槟色或柔和的白色",
      “细节”：“领口精致的蕾丝饰边，细肩带，面料自然垂落在锁骨上”
    }
  },
  “详细信息”：{
    “现实主义焦点”：[
      “皮肤上呈现强烈的水润保湿光泽”，
      “逼真的润唇膏质地”，
      “清澈的蓝色瞳孔中手机屏幕的倒影”，
      “面料的柔软度”，
      “注重水润光泽而不是厚重的皮肤纹理”
    ],
    “否定提示”：[
      “浓妆艳抹”、
      “基础”，
      “蛋糕般的皮肤”，
      “塑料皮肤”，
      “喷枪”，
      “痤疮”，
      “瑕疵”，
      “黑头发”，
      “棕色的眼睛”，
      “长头发”，
      “毛孔粗大”，
      “质地粗糙”，
      “皱纹”，
      “老化肌肤”，

「成熟的外表」
    ]
  }
}
```

---

## English Original

### Title

Influencer Candid Bedtime Selfie

### Description

Generate an ultra-realistic influencer-style candid bedtime selfie using advanced photography specifications. This includes detailed settings for camera, lighting, scene, and subject characteristics to create a luxurious and intimate atmosphere.

### Prompt

```md
{
  "meta": {
    "aspect_ratio": "9:16",
    "quality": "raw_photo, uncompressed, 8k",
    "camera": "iPhone 15 Pro Max front camera",
    "lens": "23mm f/1.9",
    "style": "influencer candid bedtime selfie, clean girl aesthetic, youthful natural beauty, ultra-realistic",
    "iso": "800 (clean, low noise)"
  },
  "scene": {
    "location": "Luxury bedroom interior",
    "environment": [
      "high thread count white or cream bedding",
      "fluffy down pillows",
      "soft warm ambient light from background",
      "hint of a silk headboard"
    ],
    "time": "Late night / Bedtime",
    "atmosphere": "intimate, relaxing, soft luxury, innocent"
  },
  "lighting": {
    "type": "Phone screen softbox effect",
    "key_light": "Soft cool light from phone screen illuminating the face center, enhancing skin smoothness",
    "fill_light": "Warm, dim bedside lamp in background creating depth",
    "shadows": "Very gentle, soft shadows",
    "highlights": "Creamy, dewy highlights on the nose bridge and cheekbones (hydrated glow)"
  },
  "camera_perspective": {
    "pov": "Selfie (arm extended)",
    "angle": "High angle, slightly tilted head (flattering portrait angle)",
    "framing": "Close-up on face and upper chest",
    "focus": "Sharp focus on eyes and lips, soft focus on hair and background"
  },
  "subject": {
    "demographics": {
      "gender": "female",
      "age": "24 years old",
      "ethnicity": "Northern European (fair skin)",
      "look": "Fresh-faced, youthful model off-duty"
    },
    "face": {
      "structure": "Symmetrical soft features, youthful plump cheeks, defined but soft jawline, delicate nose",
      "skin_texture": "smooth, youthful complexion, 'glass skin' effect (ultra-hydrated and plump), porcelain/pale skin tone, extremely fine texture with minimal visible pores, radiant healthy glow, naturally flawless without heavy texture",
      "lips": "Naturally plush lips, soft pink/rosy natural pigment, hydrated balm texture",
      "eyes": "Large, expressive piercing blue eyes, clear bright iris detail, long natural dark lashes, looking into camera lens",
      "brows": "Naturally thick, groomed, soft taupe color matching hair roots"
    },
    "hair": {
      "color": "Cool-toned honey blonde with platinum highlights",
      "style": "Chic blunt bob cut, chin-length, slightly tousled on the pillow but maintaining shape",
      "texture": "Silky, healthy shine, fine soft hair texture"
    },
    "expression": "Soft, innocent, confident but sleepy, slight gentle smile"
  },
  "outfit": {
    "headwear": {
      "item": "Luxury silk sleep mask",
      "position": "Pushed up onto the forehead/hair",
      "color": "Champagne gold or blush pink",
      "texture": "Satin sheen"
    },
    "top": {
      "type": "Silk or satin pajama camisole",
      "color": "Matching champagne or soft white",
      "details": "Delicate lace trim at neckline, thin straps, fabric draping naturally over collarbones"
    }
  },
  "details": {
    "realism_focus": [
      "Intense dewy moisturizer sheen on skin",
      "Realistic lip balm texture",
      "Reflection of phone screen in the clear blue pupils",
      "Softness of the fabrics",
      "Focus on dewy hydration sheen rather than heavy skin texture"
    ],
    "negative_prompt": [
      "heavy makeup",
      "foundation",
      "cakey skin",
      "plastic skin",
      "airbrushed",
      "acne",
      "blemishes",
      "dark hair",
      "brown eyes",
      "long hair",
      "large pores",
      "rough texture",
      "wrinkles",
      "aged skin",
      "mature appearance"
    ]
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
