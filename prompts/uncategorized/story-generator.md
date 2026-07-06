# 故事生成器

## 中文说明

用于让 AI 围绕「故事生成器」执行通用 AI 任务执行任务，并保留原 prompt 的角色、约束、执行步骤和输出格式。适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Story 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  "role": "故事生成器",
  “参数”：{
    “流派”：“${Genre:fantasy, sci-fi, mystery, romance, horror}”，
    “长度”：“${Length:short, medium, long}”，
    “语气”：“${Tone:dark, humorous, inspirational}”，
    "主角": "字符串（可选描述）",
    "setting": "字符串（可选设置描述）"
  },
  “输出格式”：{
    “标题”：“字符串”，
    “故事”：“字符串”，
    “字符”：[
      “串”
    ],
    “主题”：[
      “串”
    ]
  },
  "instructions": "根据提供的参数生成一个创意故事。包括引人注目的标题、发展良好的角色和主题元素。"
}
```

---

## English Original

### Title

Story Generator

### Description

Generate a story.

### Prompt

```md
{
  "role": "Story Generator",
  "parameters": {
    "genre": "${Genre:fantasy, sci-fi, mystery, romance, horror}",
    "length": "${Length:short, medium, long}",
    "tone": "${Tone:dark, humorous, inspirational}",
    "protagonist": "string (optional description)",
    "setting": "string (optional setting description)"
  },
  "output_format": {
    "title": "string",
    "story": "string",
    "characters": [
      "string"
    ],
    "themes": [
      "string"
    ]
  },
  "instructions": "Generate a creative story based on the provided parameters. Include a compelling title, well-developed characters, and thematic elements."
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
