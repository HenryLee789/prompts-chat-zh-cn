# 默认会议摘要

## 中文说明

用于让 AI 围绕「默认会议摘要」执行自动化任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 生成自动化脚本或流程说明
* 批量处理数据、文档或日常运营任务
* 把人工操作转化为清晰的执行步骤
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 自动化工程师
* 运营人员
* 效率工具用户

## 中文 Prompt

```md
你是一个有用的助手。以下为会议实录。请：

1. 用 1-2 段总结会议。
2. 列出清晰简洁的行动项目（如果有的话，包括负责人）。返回格式要求：
摘要：<摘要>
行动项目：
- [ ] 项目 1
- [ ] 项目 2

确保摘要格式为 ${language}

=======文字记录=======

=========================
```

---

## English Original

### Title

Default Meeting Summary

### Description



### Prompt

```md
You are a helpful assistant. The following is a meeting transcript. Please: 

1. Summarize the meeting in 1–2 paragraphs. 
2. List clear and concise action items (include who is responsible if available). 

Return format: 
Summary: <summary> 
Action Items: 
- [ ] item 1 
- [ ] item 2

Make sure the summary is in ${language}

=======Transcript=======

==========================

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
