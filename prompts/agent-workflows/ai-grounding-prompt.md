---
id: "cmm2lxb2u0001l2047r4ztp0f"
slug: "ai-grounding-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ai-grounding-prompt"
category: "agent-workflows"
category_name: "Agent Workflows"
category_zh: "智能体工作流"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4cca126924dcccc8bb0f4252b942ff60aa7e9e8ad42fe2397fab3f3dc5cf30a1"
upstream_updated_at: "2026-02-25T23:34:36.229Z"
---
# AI接地提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ai-grounding-prompt](https://prompts.chat/prompts/ai-grounding-prompt)  
> 分类：智能体工作流（Agent Workflows / `agent-workflows`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

人工智能搜索信息时的基本提示大纲。最初设计是为了确保搜索上传文档的准确性，可以针对需要数据准确性的其他工作流程稍作修改。  该提示使人工智能接地并有助于防止幻觉。

## 使用场景

- 用于智能体工作流相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 智能体开发者
- 自动化工程师
- 产品经理

## 中文 Prompt 正文

```md
1. 仅根据上传的文件做出回答。没有别的了。
2. 如果未找到信息，请说“未找到”。 Don't guess.
3. 对于每项声明，请引用：[文档、页/节、引用]
4. 如果不确定，请标记为[未验证]
5. [Your question]

Re-scan the document.对于每项索赔，请给我支持它的确切报价，如果您找不到报价，请收回索赔。
```

---

## English Original

### Title

AI Grounding Prompt

### Description

A basic prompt outline to ground an AI when searching for information. Initially designed to ensure accuracy in searching uploaded documents, it can be modified slightly for other workflows where data accuracy is required.  The prompt grounds an AI and help prevent hallucinations.

### Prompt

```md
1. Base your answer ONLY on the uploaded documents. Nothing else.
2. If info isn't found, say "Not found." Don't guess.
3. For each claim, cite: [Document, Page/Section, Quote]
4. If uncertain, mark as [Unverified]
5. [Your question]

Re-scan the document. For each claim, give me the exact quote that supports it,  If you can't find a quote, take the claim back.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ai-grounding-prompt](https://prompts.chat/prompts/ai-grounding-prompt) |
| Category | Agent Workflows (`agent-workflows`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | roshinau |
| Updated At | 2026-02-25T23:34:36.229Z |
