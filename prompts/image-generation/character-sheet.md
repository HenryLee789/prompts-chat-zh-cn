# 字符表

## 中文说明

用于让 AI 围绕「字符表」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
根据上传的参考图像在纯白色背景上创建完全相同的人的专业角色参考表。该角色必须在外观和艺术风格上与上传的参考图像完全匹配。如果参考图像是绘画、插图或风格化艺术品，请复制相同的绘画风格、线条、着色技术和渲染方法。如果参考图像具有真实感，则结果也必须具有真实感。视觉风格必须与参考相同。布局：三行。顶行：并排放置的四个大小相同的特写头部照片 - 正面、左侧侧面、右侧侧面和后脑勺。底行：并排放置的三个大小相等的全身视图 - 全身正面、全身侧面轮廓和全身背面。准确复制参考图像中的每个细节：
- 面部结构
- 肤色
- 自然瑕疵和毛孔纹理（如果可见）
- 头发的颜色、质地和造型
- 准确的虹膜颜色和眼睛细节
- 逼真的眼睛湿度和聚光灯（如果适用于该风格）

在每个视图中都必须穿着完全相同的服装，并且具有相同的细节、褶皱、颜色和材质。照明应该是柔和、中性的工作室照明，平坦且分布均匀，没有阴影，也没有色偏。所有视图必须彼此保持完全一致并与参考图像保持完全一致。
```

---

## English Original

### Title

CHARACTER SHEET

### Description



### Prompt

```md
Create a professional character reference sheet of the exact same person from the uploaded reference image on a plain white background.

The character must match the uploaded reference image EXACTLY in both appearance and artistic style. If the reference image is a drawing, illustration, or stylized artwork, replicate the same drawing style, line work, shading technique, and rendering method. If the reference image is photorealistic, the result must also be photorealistic. The visual style must be identical to the reference.

Layout: three rows.

Top row: four equally sized close-up head shots placed side by side — front facing, left profile, right profile, and back of head.

Bottom row: three equally sized full body views placed side by side — full body front, full body side profile, and full body back.

Replicate every detail from the reference image exactly:
- facial structure
- skin tone
- natural blemishes and pore texture (if visible)
- hair color, texture, and styling
- exact iris color and eye details
- realistic eye moisture and catchlights if applicable to the style

The exact same outfit must be worn in every view with identical details, folds, colors, and materials.

Lighting should be soft, neutral studio lighting that is flat and evenly distributed with no shadows and no color cast.

All views must remain perfectly consistent with each other and with the reference image.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
