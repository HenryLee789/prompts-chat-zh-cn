# AI接地提示词

## 中文说明

AI搜索信息时的基本提示大纲。最初设计是为了确保搜索上传文档的准确性，可以针对需要数据准确性的其他工作流程稍作修改。该提示使AI接地并有助于防止幻觉。

## 使用场景

* 设计可复用的 AI Agent 工作流
* 拆解多步骤任务并明确执行边界
* 为工具调用、上下文迁移或任务编排提供指令
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 智能体开发者
* 自动化工程师
* 产品经理

## 中文 Prompt

```md
1. 仅根据上传的文件做出回答。没有别的了。
2. 如果未找到信息，请说“未找到”。 Don't guess.
3. 对于每项声明，请引用：[文档、页/节、引用]
4. 如果不确定，请标记为[未验证]
5. [Your question]

Re-scan the document.对于每项索赔，请给我支持它的确切报价，如果你找不到报价，请收回索赔。

约束条件：
- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
