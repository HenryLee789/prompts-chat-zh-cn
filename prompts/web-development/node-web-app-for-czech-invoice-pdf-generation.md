---
id: "cmjs4vrgm0001ju04om3vv6k2"
slug: "node-web-app-for-czech-invoice-pdf-generation"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/node-web-app-for-czech-invoice-pdf-generation"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "74a3c482786a212bf77489cde6e2a449be9a4466adb286c65557e3821045c56b"
upstream_updated_at: "2025-12-30T05:15:34.220Z"
---
# 用于生成捷克发票 PDF 的 Node Web 应用程序

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[node-web-app-for-czech-invoice-pdf-generation](https://prompts.chat/prompts/node-web-app-for-czech-invoice-pdf-generation)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

开发 Node.js Web 应用程序以使用 node-isdoc-pdf 生成 PDF 格式的捷克发票，并根据订单 XML 数据计算准备金。

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Node.js、Web Development、Finance 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

```md
充当全栈开发人员。您的任务是创建一个 Node.js Web 应用程序来生成 PDF 格式的捷克发票。您将： 
- 利用 GitHub 存储库 https://github.com/deltazero-cz/node-isdoc-pdf.git 生成 PDF。
- 获取包含订单的 XML 数据以计算规定。
- 执行不含增值税订单价格 7% 的基准拨备率。
- 准备应用程序以适应确定供应百分比的附加规则。
- 生成包含订单详细信息的 CSV 表的 PDF。
- 使用node-isdoc-pdf 为发票创建第二个PDF。
规则：
- 保持代码模块化以实现可扩展性。
- 确保应用程序可以通过新的规定规则进行扩展。
- 包括 XML 数据解析和 PDF 生成的错误处理。
变量：
- ${xmlData} - 包含订单详细信息的 XML 数据
- ${provisionRules} - 适用的附加规定规则
- ${outputPath} - 保存生成的 PDF 的目录
```

---

## English Original

### Title

Node Web App for Czech Invoice PDF Generation

### Description

Develop a Node.js web application to generate Czech invoices in PDF format using node-isdoc-pdf and calculate provisions based on order XML data.

### Prompt

```md
Act as a Full Stack Developer. You are tasked with creating a Node.js web application to generate Czech invoices in PDF format. You will: 
- Utilize the GitHub repository https://github.com/deltazero-cz/node-isdoc-pdf.git for PDF generation.
- Fetch XML data containing orders to calculate provisions.
- Implement a baseline provision rate of 7% from the price of the order without VAT.
- Prepare the app to accommodate additional rules for determining provision percentages.
- Generate a PDF of a CSV table containing order details.
- Create a second PDF for an invoice using node-isdoc-pdf.
Rules:
- Maintain code modularity for scalability.
- Ensure the application can be extended with new provision rules.
- Include error handling for XML data parsing and PDF generation.
Variables:
- ${xmlData} - XML data with order details
- ${provisionRules} - Additional provision rules to apply
- ${outputPath} - Directory for saving generated PDFs
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [node-web-app-for-czech-invoice-pdf-generation](https://prompts.chat/prompts/node-web-app-for-czech-invoice-pdf-generation) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | Node.js, Web Development, Finance |
| Contributors | ddann |
| Updated At | 2025-12-30T05:15:34.220Z |
