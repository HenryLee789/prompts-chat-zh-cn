# 学术论文图形生成器 - Nano Banana Pro

## 中文说明

使用 Nano Banana Pro (Gemini 3 Pro Image) 生成学术论文数据的专业提示。针对科学出版物和研究论文进行了优化。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 publication-ready、scientific-figures、Nano Banana 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
使用以下指导方针为科学出版创建专业学术人物：

${figure_type:Type of figure (architecture diagram, flowchart, data visualization, conceptual model, experimental setup)}
${subject:Specific subject or topic}
${style:Visual style preference (minimal, detailed, technical, conceptual)}

指南：
- 使用适合学术期刊的干净、专业的设计
- 确保高对比度和可读性
- 需要时包括清晰的标签和图例
- 使用一致的配色方案（通常是蓝色、灰色和强调色）
- 保持科学准确性
- 针对指定分辨率进行优化（${resolution:2K}）
- 考虑目标发布格式

生成 ${aspect_ratio:16:9} 宽高比图像，有效向学术受众传达 ${subject} 概念。
```

---

## English Original

### Title

Academic Paper Figure Generator - Nano Banana Pro

### Description

Professional prompt for generating academic paper figures using Nano Banana Pro (Gemini 3 Pro Image). Optimized for scientific publications and research papers.

### Prompt

```md
Create a professional academic figure for scientific publication using the following guidelines:

${figure_type:Type of figure (architecture diagram, flowchart, data visualization, conceptual model, experimental setup)}
${subject:Specific subject or topic}
${style:Visual style preference (minimal, detailed, technical, conceptual)}

Guidelines:
- Use clean, professional design suitable for academic journals
- Ensure high contrast and readability
- Include clear labels and legends when needed
- Use consistent color scheme (typically blues, grays, and accent colors)
- Maintain scientific accuracy
- Optimize for the specified resolution (${resolution:2K})
- Consider the target publication format

Generate a ${aspect_ratio:16:9} aspect ratio image that effectively communicates the ${subject} concept to an academic audience.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
