# 孤独的女孩

## 中文说明

用于让 AI 围绕「孤独的女孩」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  “行动”：“图像生成”，
  “提示详细信息”：{
    "format": "垂直格式 9:16 宽高比",
    "subject": "一个身材苗条、胸部丰满的年轻女子（艾玛），站在公园附近一条偏僻的街道上。",
    “服装”：{
      "clothing": "超短超紧身黑色微礼服（微裙长），深V领口和细肩带。",
      "accessories": "手里拿着手机，很高的黑色细高跟鞋。",
      “detail”：“这个姿势突出、自信且非常诱人。”
    },
    “环境”：{
      "setting": "户外，强烈的午后阳光创造出锐利的阴影（明暗对比）。",
      "background": "一条柏油路，绿树环绕，背景是栅栏，气氛略显荒凉。"
    },
    “电影摄影”：{
      "shot_type": "全身镜头，平视镜头。",
      "mood": "戏剧性的、电影般的、激烈的、充满激情的。",
      "color_palette": "裙子的黑色与自然暖光、饱和色彩之间的高对比度。",
      "technical_specs": "极度真实感、8k、景深（背景稍微模糊）、详细的皮肤和织物纹理。"
    },
    “情绪”：“充满磁性和强烈的面部表情，凝视着房间。”
  }
}
```

---

## English Original

### Title

Lonely Girl

### Description



### Prompt

```md
{
  "action": "image_generation",
  "prompt_details": {
    "format": "formato verticale 9:16 aspect ratio",
    "subject": "Una giovane donna dal fisico snello e dal seno prosperoso (Emma) a figura intera, in piedi in una strada isolata vicino a un parco.",
    "outfit": {
      "clothing": "Micro abito nero ultra-corto e super attillato (micro skirt length), scollatura profonda e spalline sottili.",
      "accessories": "Un cellulare tenuto in mano, tacchi a spillo neri molto alti.",
      "detail": "La posa è accentuata, sicura e molto seducente."
    },
    "environment": {
      "setting": "Esterno, luce solare pomeridiana intensa che crea ombre nette (chiaroscuro).",
      "background": "Una strada asfaltata con alberi verdi e una recinzione sullo sfondo, atmosfera leggermente desolata."
    },
    "cinematography": {
      "shot_type": "Figura intera (full body shot), inquadratura ad altezza occhi.",
      "mood": "Drammatico, cinematografico, intenso, passionale.",
      "color_palette": "Contrasto elevato tra il nero del vestito e la luce calda naturale, colori saturi.",
      "technical_specs": "Fotorealismo estremo, 8k, profondità di campo (sfondo leggermente sfocato), texture della pelle e del tessuto dettagliata."
    },
    "emotions": "Espressione del viso magnetica e intensa, sguardo fisso in camera."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
