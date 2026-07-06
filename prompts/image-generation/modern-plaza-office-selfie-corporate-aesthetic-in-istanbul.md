# 现代广场办公室自拍——伊斯坦布尔的企业美学

## 中文说明

在伊斯坦布尔一座现代化的高层广场办公室内拍摄的一张办公桌水平特写自拍照。这一场景将企业极简主义与大胆的个人表达融为一体：一位自信的年轻女性，身上有明显的纹身，坐在现代办公桌前，周围是落地玻璃窗，俯瞰着城市天际线。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Nano Banana、Entertainment 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "description": "一位身上有大量纹身的年轻女性，拍摄于现代伊斯坦布尔广场办公室的室内。她充满自信，有着沙漏般的曲线美。她的手臂和躯干上布满了黑色、灰色和彩色纹身，包括动漫人物、蛇和文字。她戴着带有金色徽标的 Miu Miu 无框太阳镜和简约的贝壳项圈。",
    “身体”：{
      "type": "性感沙漏型身材。",
      "details": "曲线优美的轮廓，腰部较窄，臀部较宽。手臂上布满了各种纹身艺术。腹部部分被衣服覆盖，纹身在适当的地方隐约可见。",
      “pose”：“坐在现代办公桌前，身体稍微前倾，在办公桌水平位置拍摄特写自拍照。”
    }
  },
  “衣柜”：{
    "top": "适合企业广场办公室的合身中性色调衬衫或轻质针织上衣。",
    "bottom": "米色、灰色或黑色高腰定制长裤或中长裙。",
    "layer": "可选的西装外套披在肩上或敞开。",
    “配件”：“Miu Miu 镜腿饰有金色徽标的无框太阳镜、精致的金色珠宝、简约的贝壳项圈、腕表。”
  },
  “场景”：{
    "location": "伊斯坦布尔的一处高层广场办公楼层，有宽大的落地玻璃窗（camekan）。",
    "background": "现代广场办公室内部配有大办公桌、符合人体工程学的办公椅、笔记本电脑、笔记本电脑、简约的装饰，透过玻璃可以看到伊斯坦布尔城市天际线。",
    “细节”：“干净的办公室表面，玻璃窗上的倒影，自然光充满整个空间。”
  },
  “相机”：{
    "angle": "桌面自拍角度，特写视角，仿佛从办公桌上用手拍摄。",
    "lens": "广角前置摄像头自拍镜头。",
    “纵横比”：“9:16”
  },
  “照明”：{
    "type": "自然光通过大玻璃窗进入。",
    “质量”：“柔和、平衡的日光，柔和的高光和逼真的室内阴影。”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Modern Plaza Office Selfie — Corporate Aesthetic in Istanbul

### Description

A close-up, desk-level selfie captured inside a modern high-rise plaza office in Istanbul.
The scene blends corporate minimalism with bold personal expression: a confident young woman with visible tattoos sits at a contemporary office desk, framed by floor-to-ceiling glass windows overlooking the city skyline.


### Prompt

```md
{
  "subject": {
    "description": "A young woman with extensive tattoos, captured indoors in a modern Istanbul plaza office. She has a confident presence and a curvy hourglass figure. Her arms and torso are heavily covered in black and grey and colored tattoos, including anime characters, snakes, and script. She wears Miu Miu rimless sunglasses with gold logos, a minimal shell choker.",
    "body": {
      "type": "Voluptuous hourglass figure.",
      "details": "Curvy silhouette with a narrow waist and wide hips. Arms fully sleeved with various tattoo art. Abdomen partially covered by clothing, with tattoos subtly visible where appropriate.",
      "pose": "Sitting at a modern office desk, leaning slightly forward while taking a close-up selfie from desk level."
    }
  },
  "wardrobe": {
    "top": "Fitted neutral-toned blouse or lightweight knit top suitable for a corporate plaza office.",
    "bottom": "High-waisted tailored trousers or a midi skirt in beige, grey, or black.",
    "layer": "Optional blazer draped over shoulders or worn open.",
    "accessories": "Miu Miu rimless sunglasses with gold logos on temples, subtle gold jewelry, minimalist shell choker, wristwatch."
  },
  "scene": {
    "location": "A high-rise plaza office floor in Istanbul with wide floor-to-ceiling glass windows (camekan).",
    "background": "Modern plaza office interior with a large desk, ergonomic office chair, laptop, notebook, minimal decor, and Istanbul city skyline visible through the glass.",
    "details": "Clean office surfaces, reflections on the glass windows, natural daylight filling the space."
  },
  "camera": {
    "angle": "Desk-level selfie angle, close-up perspective as if taken by hand from the office desk.",
    "lens": "Wide-angle front camera selfie lens.",
    "aspect_ratio": "9:16"
  },
  "lighting": {
    "type": "Natural daylight entering through large glass windows.",
    "quality": "Soft, balanced daylight with gentle highlights and realistic indoor shadows."
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
