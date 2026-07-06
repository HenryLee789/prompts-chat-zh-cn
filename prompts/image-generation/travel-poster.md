# 旅游海报

## 中文说明

用于让 AI 围绕「旅游海报」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “样式定义”：{
    "art_style": "现代平面矢量图",
    "medium": "数字矢量艺术",
    "vibe": "乐观、开朗、旅行海报",
    "rendering_engine_simulation": "Adobe Illustrator / 矢量化"
  },
  “视觉参数”：{
    "lines_and_shapes": "干净锐利的线条，简化的几何形状，缺乏复杂的纹理，树木和云朵的圆形有机形状。",
    "colors": "高饱和度，充满活力的调色板。水/天空以青绿色和青色为主，建筑物以暖橙色和赤土色为主，植被以郁郁葱葱的绿色为主，云彩以奶油色/黄色为主。",
    “lighting”：“具有柔和渐变的平面照明、最小的阴影、明亮的日光氛围。”
  },
  " Generation_prompt": "将输入照片转换为商务旅行海报风格的高品质现代平面矢量图。图像应具有简化的形状、简洁的线条和光滑的哑光效果。使用充满活力的调色板，包括明亮的绿松石水、温暖的橙色屋顶和郁郁葱葱的绿色树叶。天空应该是明亮的蓝色，带有风格化的蓬松云彩。删除所有照片级真实纹理、噪音和颗粒。使其看起来像 Behance 或上的专业数字艺术品。保持原始照片的构图，但对细节进行矢量化。",
  " Negative_prompt": "真实感、逼真、3D 渲染、光泽、闪亮、颗粒状、噪声、模糊、散景、详细纹理、垃圾、黑暗、阴沉、草图、粗糙线条、低分辨率、摄影"
}
```

---

## English Original

### Title

Travel Poster

### Description



### Prompt

```md
{
  "style_definition": {
    "art_style": "Modern Flat Vector Illustration",
    "medium": "Digital Vector Art",
    "vibe": "Optimistic, Cheerful, Travel Poster",
    "rendering_engine_simulation": "Adobe Illustrator / Vectorized"
  },
  "visual_parameters": {
    "lines_and_shapes": "Clean sharp lines, simplified geometry, lack of complex textures, rounded organic shapes for trees and clouds.",
    "colors": "High saturation, vibrant palette. Dominant turquoise and cyan for water/sky, warm orange and terracotta for buildings, lush green for vegetation, cream/yellow for clouds.",
    "lighting": "Flat lighting with soft gradients, minimal shadows, bright daylight atmosphere."
  },
  "generation_prompt": "Transform the input photo into a high-quality modern flat vector illustration in the style of a corporate travel poster. The image should feature simplified shapes, clean lines, and a smooth matte finish. Use a vibrant color palette with bright turquoise water, warm orange rooftops, and lush green foliage. The sky should be bright blue with stylized fluffy clouds. Remove all photorealistic textures, noise, and grain. Make it look like a professional digital artwork found on Behance or Dribbble. Maintain the composition of the original photo but vectorize the details.",
  "negative_prompt": "photorealistic, realistic, 3d render, glossy, shiny, grainy, noise, blur, bokeh, detailed textures, grunge, dark, gloomy, sketch, rough lines, low resolution, photography"
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
