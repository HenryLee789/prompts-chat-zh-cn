---
id: "cmmidnmi4000ik00488pm7qjy"
slug: "transform-the-provided-clothing-product-image"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/transform-the-provided-clothing-product-image"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0abec43eebb56523b8f28c35c360ba6b7bb3c2f8fbadd51fbb905517f20c2035"
upstream_updated_at: "2026-03-08T23:22:32.660Z"
---
# 转换提供的服装产品图像。

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[transform-the-provided-clothing-product-image](https://prompts.chat/prompts/transform-the-provided-clothing-product-image)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

将提供的服装产品图像转换为豪华工作室幽灵人体模型演示，其中服装看起来自然磨损且具有体积感，就好像在隐形人体模型上充气一样。保留原始产品的准确身份，零改动

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Nano Banana 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “模型”：“纳米香蕉”，
  “任务”：“图像到图像产品的转换”，

  "objective": "将提供的服装产品图像转换为豪华工作室幽灵人体模型演示，其中服装呈现自然穿着和体积感，就好像在隐形人体模型上充气一样。以零改动保留原始产品的确切身份。",

  “输入描述”：{
    "source_image_type": "平躺服装产品照片",
    "background": "白色背景",
    "product_category": "一般服装（T 恤、夹克、连帽衫、裤子、牛仔布、背心等）"
  },

  “转换规则”：{
    "garment_struct": "给衣服充气，就像穿着隐形人体模型一样，创造自然的身体体积和形状，同时保持内部空旷",
    "mannequin_style": "高端时尚电商摄影使用的豪华鬼模",
    "fabric_condition": "完美熨烫的面料，具有微妙的自然褶皱，反映真实的服装张力",
    “pose”：“自然的可穿戴服装形状，就像放置在躯干或身体上一样，但没有可见的人体模型或人类存在”，
    "center_alignment": "服装必须保持在框架中完美居中",
    "framing": "干净的产品目录组成，各面边距平衡",
    "background": "纯白色专业工作室背景 (#FFFFFF)，除了非常柔和的自然接地阴影外，没有渐变、纹理、道具或阴影"
  },

  “照明”：{
    "style": "高端时尚电商影楼灯光",
    "direction": "柔和的正面照明与平衡的补光",
    "goal": "突出面料纹理、缝合、接缝和服装结构",
    "shadow_control": "在衣服正下方的最小软阴影以实现真实感",
    “曝光”：“干净明亮的曝光，没有过度的高光或破碎的阴影”
  },

  “身份保存”：{
    "color": "保留准确的原始颜色值",
    "texture": "保留准确的织物纹理和编织",
    "logos": "如果存在，则准确保留现有徽标",
    "stitching": "准确保留缝合图案",
    “细节”：“准确保留口袋、纽扣、拉链、接缝、刺绣、标签和所有结构细节”
  },

  “严格禁止”：[
    “不要添加新徽标”，
    “不要删除现有徽标”，
    “不要改变服装颜色”，
    “不要改变缝合”，
    “不要修改口袋”，
    “不要修改服装设计”，
    “不要发明新的织物纹理”，
    “不要改变服装比例”，
    “不添加配件”，
    “不要添加人体模型”，
    “不要添加人体模型”，
    “不要添加道具或风景”，
    “不要裁剪衣服”
  ],

  “织物现实主义”：{
    "struct": "基于服装物理的真实服装体积",
    “folds”：“由重力和身体形态引起的微妙的自然褶皱”，
    “张力”：“胸部、肩膀、腰部或臀部周围有轻微的张力，具体取决于服装类型”，
    "fabric_behavior": "尊重真实的纺织品行为，例如牛仔布硬度、棉质柔软度或针织灵活性"
  },

  “组成要求”：{
    "camera_angle": "直正面目录角度",
    "symmetry": "平衡且专业的电商联盟",
    "product_visibility": "整件衣服完全可见，无需裁剪",
    "catalog_standard": "适合自动化产品画廊的一致框架"
  },

“质量要求”：{
    "style": "奢华时尚电商摄影",
    "sharpness": "高细节清晰的服装纹理",
    "resolution": "适合产品缩放的高分辨率",
    “清洁度”：“没有灰尘、皱纹、伪影、扭曲或人工智能幻觉”
  },

  “管道目标”：{
    "use_case": "360度产品旋转管道",
    "consistency_requirement": "服装结构、照明和比例必须在多个角度保持稳定且可重复",
    "output_type": "专业电商目录图片"
  }
}
```

---

## English Original

### Title

Transform the provided clothing product image.

### Description

Transform the provided clothing product image into a luxury studio ghost-mannequin presentation where the garment appears naturally worn and volumetric, as if inflated with air on an invisible mannequin. Preserve the exact identity of the original product with zero alterations

### Prompt

```md
{
  "model": "nano-banana",
  "task": "image_to_image_product_transformation",

  "objective": "Transform the provided clothing product image into a luxury studio ghost-mannequin presentation where the garment appears naturally worn and volumetric, as if inflated with air on an invisible mannequin. Preserve the exact identity of the original product with zero alterations.",

  "input_description": {
    "source_image_type": "flat lay clothing product photo",
    "background": "white background",
    "product_category": "general clothing (t-shirts, jackets, hoodies, pants, denim, vests, etc)"
  },

  "transformation_rules": {
    "garment_structure": "inflate the garment as if worn by an invisible mannequin, creating natural body volume and shape while keeping the interior empty",
    "mannequin_style": "luxury ghost mannequin used in high-end fashion e-commerce photography",
    "fabric_condition": "perfectly ironed fabric with subtle natural folds that reflect realistic garment tension",
    "pose": "natural wearable garment shape as if placed on a torso or body form, but with no visible mannequin or human presence",
    "center_alignment": "the garment must remain perfectly centered in the frame",
    "framing": "clean product catalog composition with balanced margins on all sides",
    "background": "pure white professional studio background (#FFFFFF) with no gradients, textures, props, or shadows except a very soft natural grounding shadow"
  },

  "lighting": {
    "style": "high-end fashion e-commerce studio lighting",
    "direction": "soft frontal lighting with balanced fill light",
    "goal": "highlight fabric texture, stitching, seams, and garment structure",
    "shadow_control": "minimal soft shadow directly beneath garment for realism",
    "exposure": "clean bright exposure without overblown highlights or crushed shadows"
  },

  "identity_preservation": {
    "color": "preserve the exact original color values",
    "texture": "preserve the exact fabric texture and weave",
    "logos": "preserve existing logos exactly if present",
    "stitching": "preserve stitching patterns exactly",
    "details": "preserve pockets, buttons, zippers, seams, embroidery, tags, and all construction details exactly"
  },

  "strict_prohibitions": [
    "do not add new logos",
    "do not remove existing logos",
    "do not change garment color",
    "do not alter stitching",
    "do not modify pockets",
    "do not modify garment design",
    "do not invent new fabric textures",
    "do not change garment proportions",
    "do not add accessories",
    "do not add a human model",
    "do not add a mannequin",
    "do not add props or scenery",
    "do not crop the garment"
  ],

  "fabric_realism": {
    "structure": "realistic garment volume based on clothing physics",
    "folds": "subtle natural folds caused by gravity and body form",
    "tension": "light tension around chest, shoulders, waist, or hips depending on garment type",
    "fabric_behavior": "respect real textile behavior such as denim stiffness, cotton softness, or knit flexibility"
  },

  "composition_requirements": {
    "camera_angle": "straight-on front-facing catalog angle",
    "symmetry": "balanced and professional e-commerce alignment",
    "product_visibility": "entire garment fully visible without cropping",
    "catalog_standard": "consistent framing suitable for automated product galleries"
  },

  "quality_requirements": {
    "style": "luxury fashion e-commerce photography",
    "sharpness": "high-detail crisp garment texture",
    "resolution": "high resolution suitable for product zoom",
    "cleanliness": "no dust, wrinkles, artifacts, distortions, or AI hallucinations"
  },

  "pipeline_goal": {
    "use_case": "360-degree product rotation pipeline",
    "consistency_requirement": "garment structure, lighting, and proportions must remain stable and repeatable across multiple angles",
    "output_type": "professional e-commerce catalog image"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [transform-the-provided-clothing-product-image](https://prompts.chat/prompts/transform-the-provided-clothing-product-image) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Nano Banana |
| Contributors | ayoubelouardi3710 |
| Updated At | 2026-03-08T23:22:32.660Z |
