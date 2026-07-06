# 标志设计师

## 中文说明

用于让 AI 围绕「标志设计师」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 image-generation、image-prompt 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

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

输出要求：
- 按原 prompt 要求的格式输出。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
