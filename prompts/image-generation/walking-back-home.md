# 步行回家

## 中文说明

用于让 AI 围绕「步行回家」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  "prompt": "Nan Goldin 风格的纪实摄影。全身竖拍，长宽比 9:16，一位 25 岁的女性在光天化日下步行回家。图像捕捉到了真实的脆弱和坚韧的时刻。她穿着与背景不相称的低胸短晚礼服，细高跟鞋，波浪发。她的目光直视，但充满羞耻和不适。优雅深邃的胸围强调了她巨大而坚挺的胸部。光线自然而刺眼，就像路灯柱一样，在她的脸上和她身后的城市环境形成强烈的对比，强调纹理：织物、皮肤、潮湿的沥青。”，
  “纵横比”：“9:16”，
  "style": "纪录片，南戈尔丁",
  "negative_prompt": "卡通、插图、人工、摆姿势、迷人、专业模特、工作室灯光、柔焦、过滤"
}
```

---

## English Original

### Title

Walking back home

### Description



### Prompt

```md
{
  "prompt": "Documentary photography in the style of Nan Goldin. Full-body vertical shot, 9:16 aspect ratio, of a 25-year-old woman walking home in broad daylight. The image captures a moment of authentic vulnerability and resilience. She wears a short, low-cut evening dress inappropriate for the context, stiletto heels, and wavy hair. Her gaze is direct but filled with shame and discomfort. Her very large and firm bust emphasized by the elegant deep neckline. The light is natural and harsh, like that of a lamppost, creating strong contrasts on her face and the urban environment behind her. The atmosphere is raw, honest, and deeply human. Emphasis on textures: fabric, skin, wet asphalt. Her expression is intense and dense with discomfort.",
  "aspect_ratio": "9:16",
  "style": "documentary, Nan Goldin",
  "negative_prompt": "cartoon, illustration, artificial, posed, glamorous, professional model, studio lighting, soft focus, filtered"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
