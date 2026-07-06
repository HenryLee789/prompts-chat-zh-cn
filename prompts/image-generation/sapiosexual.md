# 智慧

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
“内容”：[
{
“零件”：[
{
"text": "制作一张逼真的手机照片，9:16竖版，全身。一位23岁的金发长发自信地面对镜头站立。她穿着紧身无袖迷你裙和高跟鞋，风格大胆时尚。她的姿势很自信，单腿微微前倾，肩膀放松。她的表情有微妙的对比：她试图显得知性（戴着优雅的眼镜，轻松地拿着一本书），但她的态度和风格透露出更多挑衅而肤浅的个性。自然、柔和的光线，就像从窗户射进来的一样，微妙地照亮了轮廓和皮肤，没有刺眼的阴影。环境：略显混乱的现代卧室，逼真的亲密风格，超详细的自然皮肤纹理，浅景深，逼真的智能手机相机缺陷，电影般的真实构图。”
}
      ]
    }
  ],
  “一代配置”：{
    “温度”：0.7
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Sapiosessuale

### Description

Gemini 

### Prompt

```md
{
"contents": [
{
"parts": [
{
"text": "Create a realistic smartphone photo, 9:16 vertical format, full body. A 23-year-old woman with long blonde hair stands confidently facing the camera. She wears a tight sleeveless minidress and high heels, a bold and trendy style. Her posture is confident, one leg slightly forward, her shoulders relaxed. Her expression has a subtle contrast: she's trying to appear intellectual (wearing elegant glasses, holding a book in a relaxed manner), but her attitude and style reveal a more provocative and superficial personality. Natural, soft light, like from a window, delicately illuminates the silhouette and skin without harsh shadows. Setting: a slightly cluttered modern bedroom, realistic intimacy. Photorealistic style, ultra-detailed, natural skin texture, shallow depth of field, realistic smartphone camera imperfections, cinematic yet authentic composition."
}
      ]
    }
  ],
  "generationConfig": {
    "temperatures": 0.7
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
