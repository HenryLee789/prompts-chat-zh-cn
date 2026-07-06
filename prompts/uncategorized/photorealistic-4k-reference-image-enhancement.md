# 逼真的 4K 参考图像增强

## 中文说明

精确聚焦提示，将参考图像增强为超高分辨率 4K，同时保留原始身份、面部结构、姿势、灯光、颜色、服装和背景。 It improves clarity, texture, detail, sharpness, and noise reduction without stylization, reshaping, or altering the source image.

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
“严格基于所提供的参考图像进行超高分辨率 4K 增强。绝对保真原始面部解剖结构、比例和身份。保持表情、凝视、姿势、相机角度、取景和透视零偏差。服装、头发、皮肤和背景元素必须在结构、放置和设计上保持不变。以自然真实感恢复细粒细节。增强毛孔、细纹、发丝、睫毛、织物编织、接缝和材料边缘，而无需引入 stylization. Maintain original color science, white balance, and tonal relationships exactly as captured. Lighting direction, intensity, contrast, and shadow behavior must match the source image precisely, with only improved clarity and expanded dynamic range. No relighting, no reshaping. Remove any grain. Apply controlled sharpening and high-frequency detail reconstruction. Remove compression artifacts and noise while retaining authentic texture. No smoothing, no plastic skin, no artificial gloss. Facial features must remain consistent across the entire image with coherent anatomy and clean, stable edges. Negative限制：没有变形，没有面部漂移，没有添加或缺失的解剖结构，没有改变手，没有扭曲，没有透视变化，没有文本或图形，没有幻觉的细节，没有程式化的渲染输出必须是与参考完全匹配的真实、逼真的高档，只有更清晰、更锐利和更高分辨率。”
```

---

## English Original

### Title

Photorealistic 4K Reference Image Enhancement

### Description

A precision-focused prompt for enhancing a reference image to ultra-high-resolution 4K while preserving the original identity, facial structure, pose, lighting, colors, clothing, and background exactly as they are. It improves clarity, texture, detail, sharpness, and noise reduction without stylization, reshaping, or altering the source image.

### Prompt

```md
"Ultra-high-resolution 4K enhancement based strictly on the provided reference image. Absolute fidelity to original facial anatomy, proportions, and identity. Preserve expression, gaze, pose, camera angle, framing, and perspective with zero deviation. Clothing, hair, skin, and background elements must remain unchanged in structure, placement, and design. Recover fine-grain detail with natural realism. Enhance pores, fine lines, hair strands, eyelashes, fabric weave, seams, and material edges without introducing stylization. Maintain original color science, white balance, and tonal relationships exactly as captured. Lighting direction, intensity, contrast, and shadow behavior must match the source image precisely, with only improved clarity and expanded dynamic range. No relighting, no reshaping. Remove any grain. Apply controlled sharpening and high-frequency detail reconstruction. Remove compression artifacts and noise while retaining authentic texture. No smoothing, no plastic skin, no artificial gloss. Facial features must remain consistent across the entire image with coherent anatomy and clean, stable edges. Negative constraints: no warping, no facial drift, no added or missing anatomy, no altered hands, no distortions, no perspective shift, no text or graphics, no hallucinated detail, no stylized rendering. Output must read as a true-to-life, photorealistic upscale that matches the reference exactly, only clearer, sharper, and higher resolution."
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
