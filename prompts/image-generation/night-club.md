# 夜总会

## 中文说明

用于让 AI 围绕「夜总会」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  “提示”：“一个身材曲线优美、身材苗条的三十多岁女人，棕色的波浪发在夜总会的讲台上狂舞。她双手空着，睁着眼睛，表情复杂地环顾四周。她穿着白色抹胸上衣，黑色短款皮质超短裙。突出的胸部和曲线优美的身材，闪亮的红色高跟鞋。女人的完整身材从头到脚都清晰可见。她的周围是隐约可见的背景中的男性阴影被刺眼的彩色舞台灯光照亮，形成了强烈的阴影和高光，该图像采用 9:16 的宽高比，以浅景深为特色，以电影般的非 CGI 质量拍摄，模仿社会现实主义戏剧的高端电影剧照，真实的皮肤毛孔和瑕疵可见，没有数字平滑。”
  "negative_prompt": "数字艺术、CGI、3D 渲染、插图、绘画、绘画、卡通、动漫、光滑的皮肤、喷枪、完美的皮肤、柔和的灯光、模糊、失焦、扭曲的比例、不自然的姿势、丑陋、不良的解剖结构、糟糕的手、额外的手指、缺失的手指、裁剪的身体、水印、签名、文本、徽标、框架、边框、低质量、低分辨率、jpeg 伪影",
  “宽度”：720，
  “高度”：1280，
  “guidance_scale”：7.5，
  “num_inference_steps”：30，
  “种子”：123456，
  “调度程序”：“DDIM”
}
```

---

## English Original

### Title

Night club

### Description



### Prompt

```md
{
  "prompt": "A curvy but slender thirty-year-old woman with wavy brown hair dances wildly on a nightclub podium. She has her hands free, eyes open, looking around with a complex expressio. She wears a white strapless top and a short black leather miniskirt. A prominent breast and curvy but slender figure, shiny red stiletto heels. The full figure of the woman is visible from head to toe. She is surrounded by indistinct male shadows in the background. The scene is lit with harsh, colorful stage lights creating strong shadows and highlights. The image is a cinematic, realistic capture with a 9:16 aspect ratio, featuring a shallow depth of field to keep the woman in sharp focus. The shot is captured as cinematic, non-CGI quality, mimicking a high-end film still from a social-realist drama. High grain, 35mm film texture, authentic skin pores and imperfections visible, no digital smoothing.",
  "negative_prompt": "Digital art, CGI, 3D render, illustration, painting, drawing, cartoon, anime, smooth skin, airbrushed, flawless skin, soft lighting, blurry, out of focus, distorted proportions, unnatural pose, ugly, bad anatomy, bad hands, extra fingers, missing fingers, cropped body, watermarks, signatures, text, logo, frame, border, low quality, low resolution, jpeg artifacts",
  "width": 720,
  "height": 1280,
  "guidance_scale": 7.5,
  "num_inference_steps": 30,
  "seed": 123456,
  "scheduler": "DDIM"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
