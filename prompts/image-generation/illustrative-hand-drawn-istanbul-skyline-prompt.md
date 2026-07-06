# 说明性手绘伊斯坦布尔天际线提示词

## 中文说明

创建详细的提示，以生成伊斯坦布尔天际线的手绘风格插图，将圣索菲亚大教堂、加拉塔塔和博斯普鲁斯海峡等标志性地标与特定的调色板和艺术技巧结合起来。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、creative、design 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “主题”：{
    "description": "手绘的、儿童般的伊斯坦布尔天际线插图。场景包括圣索菲亚大教堂和另一座带有蓝色圆顶和橙色赤土墙的清真寺、加拉塔塔和一条蓝色河流（博斯普鲁斯海峡）和三艘小船。在最顶部，文本“伊斯坦布尔布尔”是用大的、彩色手写体字符写成的。",
    “计数”：1，
    "position_in_frame": "居中",
    "orientation": "面向前方",
    "expression_or_state": "静态风景画"
  },
  “组成”：{
    "shot_type": "广角镜头",
    "camera_angle": "眼睛水平视角",
    "framing": "紧密并控制在方形白色边框内",
    "symmetry": "不对称但平衡",
    "background": "浅蓝色的天空，简单的白云，右上方有一轮明亮的黄色太阳，放射着光芒，还有几只小‘V’形鸟剪影。”,
    "depth_of_field": "深，根据绘画风格，一切都清晰可见"
  },
  “风格”：{
    "visual_type": "插图",
    "realism_level": "手绘风格的文字再现",
    "art_style": "彩色铅笔和蜡笔画",
    "interpretation": "所提供艺术品的字面、技术复制品"
  },
  “照明”：{
    "light_type": "来自明亮太阳的平坦、均匀的照明",
    "light_direction": "右上",
    “对比度”：“中”，
    "shadows": "柔和，由建筑物侧面的简单铅笔阴影表示",
    "color_temper": "温暖开朗"
  },
  “颜色调色板”：{
    “主导颜色”：[
      《天蓝色》，
      “赤土橙”，
      《叶绿》，
      “鲜红”，
      《太阳黄》
    ],
    “饱和度”：“中”，
    "overall_tone": "对于儿童绘画来说充满活力和自然"
  },
  “纹理和细节”：{
    "surface_quality": "带有可见彩色铅笔笔触和纸纹的纹理",
    "grain_noise": "微妙的纸张纹理颗粒",
    "detail_level": "高，包括建筑窗户、船只细节和前景中的花朵图案",
    "sharpness": "清晰、清晰的手绘线条"
  },
  “camera_render_settings”：{
    "lens_equivalent": "n/a（平面图）",
    "aperture_look": "不适用",
    “分辨率”：“高分辨率”，
    "render_quality": "干净而精确地再现源艺术"
  },
  “约束”：{
    “no_additional_objects”：正确，
    “no_stylization”：正确，
    “no_artistic_license”：正确，
    “无文本”：假，
    “无水印”：正确，
    “no_crop_or_reframe”：正确，
    “no_color_shift”：正确，
    “no_dramatic_effects”：正确
  },
  “否定提示”：[
    “照片级写实”，
    “3D渲染”，
    “电影”，
    “数字绘画风格”，
    “模糊”，
    “非结构化”，
    “省略文字”，
    “改变字母颜色”，
    “修改建筑布局”，
    “戏剧性的灯光效果”，
    “广角畸变”
  ]
}
```

---

## English Original

### Title

Illustrative Hand-Drawn Istanbul Skyline Prompt

### Description

Create a detailed prompt for generating a hand-drawn style illustration of Istanbul's skyline, incorporating iconic landmarks such as the Hagia Sophia, Galata Tower, and the Bosphorus with specific color palettes and artistic techniques.

### Prompt

```md
{
  "subject": {
    "description": "A hand-drawn, child-like illustration of Istanbul's skyline. The scene includes the Hagia Sophia and another mosque with blue domes and orange-terracotta walls, the Galata Tower, and a blue river (the Bosphorus) with three small boats. At the very top, the text 'İSTAN BUL' is written in large, multi-colored hand-lettered block characters.",
    "count": 1,
    "position_in_frame": "centered",
    "orientation": "front-facing",
    "expression_or_state": "static landscape drawing"
  },
  "composition": {
    "shot_type": "wide shot",
    "camera_angle": "eye-level perspective",
    "framing": "tight and controlled within a square white border",
    "symmetry": "asymmetrical but balanced",
    "background": "Light blue sky with simple white clouds, a bright yellow sun with radiating rays in the upper right, and several small 'V' shaped bird silhouettes.",
    "depth_of_field": "deep, everything is in sharp focus as per the drawing style"
  },
  "style": {
    "visual_type": "illustration",
    "realism_level": "literal reproduction of a hand-drawn style",
    "art_style": "colored pencil and crayon drawing",
    "interpretation": "literal, technical reproduction of the provided artwork"
  },
  "lighting": {
    "light_type": "flat, uniform lighting from a bright sun",
    "light_direction": "upper right",
    "contrast": "medium",
    "shadows": "soft, represented by simple pencil shading on building sides",
    "color_temperature": "warm and cheerful"
  },
  "color_palette": {
    "dominant_colors": [
      "Sky Blue",
      "Terracotta Orange",
      "Leaf Green",
      "Bright Red",
      "Sun Yellow"
    ],
    "saturation": "medium",
    "overall_tone": "vibrant and natural for a child's drawing"
  },
  "texture_and_detail": {
    "surface_quality": "textured with visible colored pencil strokes and paper grain",
    "grain_noise": "subtle paper texture grain",
    "detail_level": "high, including architectural windows, boat details, and flower patterns in the foreground",
    "sharpness": "sharp, defined hand-drawn lines"
  },
  "camera_render_settings": {
    "lens_equivalent": "n/a (flat illustration)",
    "aperture_look": "n/a",
    "resolution": "high resolution",
    "render_quality": "clean and precise reproduction of the source art"
  },
  "constraints": {
    "no_additional_objects": true,
    "no_stylization": true,
    "no_artistic_license": true,
    "no_text": false,
    "no_watermark": true,
    "no_crop_or_reframe": true,
    "no_color_shift": true,
    "no_dramatic_effects": true
  },
  "negative_prompt": [
    "photorealistic",
    "3D render",
    "cinematic",
    "digital painting style",
    "blurry",
    "unstructured",
    "omitting the text",
    "changing the letter colors",
    "modifying the building layout",
    "dramatic lighting effects",
    "wide-angle distortion"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
