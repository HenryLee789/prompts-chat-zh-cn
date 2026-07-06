# 艺术-W

## 中文说明

json 提示符特别适用于 Nano Banana Pro，并将你的图像变成艺术品

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
  “颜色”：{
    “主导调色板”：[
      “珊瑚粉红色”，
      “天蓝色_蓝色”，
      “橄榄绿”，
      “森林_绿色”，
      “奶油白”
    ],
    “application”：“平坦的、具有最小渐变的色块、定义的轮廓。”
  },
  “排版”：{
    "style": "图像中不存在。"
  },
  “组成”：{
    "struct": "三个水平带：天空/山、人物/橘子树、大水果/桌子。",
    "perspective": "具有程式化深度的扁平分层平面。",
    “elements”：“人、树、水果和风景的简化形式。”
  },
  “效果”：{
    "texture": "厚涂油画纹理，可见笔触。",
    “lighting”：“风格化，强烈的阴影和高光，不现实。”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Art-W

### Description

Özellikle Nano Banana Pro ile çalışan, görüntülerinizi sanat eserine dönüştüren json prompt 

### Prompt

```md
{
  "colors": {
    "dominant_palette": [
      "coral_pink",
      "cerulean_blue",
      "olive_green",
      "forest_green",
      "cream_white"
    ],
    "application": "Flat, blocks of color with minimal gradients, defined contours."
  },
  "typography": {
    "style": "None present in the image."
  },
  "composition": {
    "structure": "Three horizontal bands: sky/mountain, figures/orange trees, large fruit/table.",
    "perspective": "Flattened, layered planes with stylized depth.",
    "elements": "Simplified forms of people, trees, fruit, and landscape."
  },
  "effects": {
    "texture": "Impasto oil painting texture, visible brushstrokes.",
    "lighting": "Stylized, strong shadows and highlights, non-realistic."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
