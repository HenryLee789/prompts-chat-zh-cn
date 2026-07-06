---
id: "cmj1zb2nu00rfvl0rwi7xtz97"
slug: "story-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/story-generator"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4dc241ad969069a60e3bd7f839fb333ace9ae8f25e893abb4c4b6dccd7226045"
upstream_updated_at: "2025-12-16T11:11:51.644Z"
---
# 故事生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[story-generator](https://prompts.chat/prompts/story-generator)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

生成一个故事。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Story 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
{
  "role": "故事生成器",
  “参数”：{
    “流派”：“${Genre:fantasy, sci-fi, mystery, romance, horror}”，
    “长度”：“${Length:short, medium, long}”，
    “音调”：“${Tone:dark, humorous, inspirational}”，
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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [story-generator](https://prompts.chat/prompts/story-generator) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Story |
| Contributors | f |
| Updated At | 2025-12-16T11:11:51.644Z |
