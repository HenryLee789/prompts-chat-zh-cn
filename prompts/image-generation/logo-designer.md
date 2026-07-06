---
id: "cmm3d8z4p0001l204px3flk39"
slug: "logo-designer"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/logo-designer"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "8ab033e3d1aa61ec572d999b299694326274ec117d7ad99c73e6d4b4340ebbd6"
upstream_updated_at: "2026-02-26T11:16:06.926Z"
---
# 标志设计师

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[logo-designer](https://prompts.chat/prompts/logo-designer)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于图像生成场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 image-generation、image-prompt 等主题快速生成可复用结果。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  "system_instruction": "担任高级品牌标识设计师。根据以下参数创建专业的、可扩展的企业标识。",
  “品牌变量”：{
    “名称”：“${COMPANY_NAME}”，
    “行业”：“${INDUSTRY}”，
    "core_aesthetic": "${AESTHETIC_STYLE}", 
    "primary_color": "${BRAND_COLOR_HEX_OR_NAME}",
    “隐喻”：“${VISUAL_SYMBOL_DESCRIPTION}”
  },
  “设计逻辑”：{
    "composition": "符号和版式的专业平衡锁定。",
    "typography": "'${COMPANY_NAME}' 的高保真渲染。风格：粗体、现代、无衬线、优化字距调整。",
    "symbolism": "包含代表 ${VISUAL_SYMBOL_DESCRIPTION} 的最小几何标记。",
    "color_theory": "在干净、高对比度的背景上主要使用 ${BRAND_COLOR_HEX_OR_NAME}。"
  },
  “nano_banana_constraints”：{
    "style_reference": "瑞士平面设计，现代企业极简主义",
    “技术规格”：[
      “矢量风格的清晰度”，
      “没有 3D 效果或阴影”，
      “纯色”，
      “小尺寸下的最大可读性”
    ],
    "negative_space": "利用有意的空白来增强 ${AESTHETIC_STYLE} 的感觉。"
  },
  "output_format": "居中、单一徽标版本、无模型、白色背景。"
}
```

---

## English Original

### Title

logo designer

### Description



### Prompt

```md
{
  "system_instruction": "Act as a senior brand identity designer. Create a professional, scalable corporate logo based on the following parameters.",
  "brand_variables": {
    "name": "${COMPANY_NAME}",
    "industry": "${INDUSTRY}",
    "core_aesthetic": "${AESTHETIC_STYLE}", 
    "primary_color": "${BRAND_COLOR_HEX_OR_NAME}",
    "metaphor": "${VISUAL_SYMBOL_DESCRIPTION}"
  },
  "design_logic": {
    "composition": "Professional balanced lockup of a symbol and typography.",
    "typography": "High-fidelity rendering of '${COMPANY_NAME}'. Style: Bold, modern, sans-serif, optimized kerning.",
    "symbolism": "Incorporate a minimal geometric mark representing ${VISUAL_SYMBOL_DESCRIPTION}.",
    "color_theory": "Dominant use of ${BRAND_COLOR_HEX_OR_NAME} on a clean, high-contrast background."
  },
  "nano_banana_constraints": {
    "style_reference": "Swiss Graphic Design, Modern Corporate Minimalism",
    "technical_specs": [
      "Vector-style clarity",
      "No 3D effects or drop shadows",
      "Solid flat colors",
      "Maximum legibility at small scale"
    ],
    "negative_space": "Utilize intentional white space to enhance the ${AESTHETIC_STYLE} feel."
  },
  "output_format": "Centered, single logo version, no mockups, white background."
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [logo-designer](https://prompts.chat/prompts/logo-designer) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | image-generation, image-prompt |
| Contributors | yigitdemiralp06 |
| Updated At | 2026-02-26T11:16:06.926Z |
