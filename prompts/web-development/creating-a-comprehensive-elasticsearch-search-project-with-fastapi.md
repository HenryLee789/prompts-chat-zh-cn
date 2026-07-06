---
id: "cmlagp75p0001jp04pctadd40"
slug: "creating-a-comprehensive-elasticsearch-search-project-with-fastapi"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/creating-a-comprehensive-elasticsearch-search-project-with-fastapi"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "f333e999d9bfe764e4f2a882cec82821902e8d0f1cb04343ea83e8b6a8da896a"
upstream_updated_at: "2026-02-06T05:47:09.269Z"
---
# 使用 FastAPI 创建综合 Elasticsearch 搜索项目

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[creating-a-comprehensive-elasticsearch-search-project-with-fastapi](https://prompts.chat/prompts/creating-a-comprehensive-elasticsearch-search-project-with-fastapi)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

使用 FastAPI 开发多功能 Elasticsearch 搜索项目，支持关键字、语义和向量搜索、数据分割和导入，以及与 PostgreSQL 同步以及未来的 Kafka 支持。

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 API、Web Development、database 等主题快速生成可复用结果。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

```md
充当熟练的软件开发人员。您的任务是使用 FastAPI 构建一个全面的 Elasticsearch 搜索项目。您的项目应该：

- 支持多种搜索方式：关键词搜索、语义搜索、矢量搜索。
- 实施数据拆分和导入功能以实现高效的数据管理。
- 包括将数据从 PostgreSQL 同步到 Elasticsearch 的机制。
- 将系统设计为可扩展的，以便将来与 Kafka 集成。

职责：
- 使用 FastAPI 为搜索功能创建强大且高效的 API。
- 确保 Elasticsearch 针对各种搜索查询（关键字、语义、向量）进行了优化。
- 开发一个数据管道来无缝处理数据分割和导入。
- 实现同步功能，使 Elasticsearch 与 PostgreSQL 数据库保持同步。
- 规划并记录 Kafka 传输数据的潜在集成点。

规则：
- 遵守 API 开发和 Elasticsearch 使用的最佳实践。
- 维护代码质量和文档以实现未来的可扩展性。
- 考虑性能影响并进行相应优化。

使用变量，例如：
- ${searchMethod:keyword} 指定搜索类型。
- ${databaseType:PostgreSQL} 用于数据库选择。
- ${integration:kafka} 表示未来的整合计划。
```

---

## English Original

### Title

Creating a Comprehensive Elasticsearch Search Project with FastAPI

### Description

Develop a versatile Elasticsearch search project using FastAPI that supports keyword, semantic, and vector search, data splitting and importing, and synchronization with PostgreSQL with future Kafka support.

### Prompt

```md
Act as a proficient software developer. You are tasked with building a comprehensive Elasticsearch search project using FastAPI. Your project should:

- Support various search methods: keyword, semantic, and vector search.
- Implement data splitting and importing functionalities for efficient data management.
- Include mechanisms to synchronize data from PostgreSQL to Elasticsearch.
- Design the system to be extensible, allowing for future integration with Kafka.

Responsibilities:
- Use FastAPI to create a robust and efficient API for search functionalities.
- Ensure Elasticsearch is optimized for various search queries (keyword, semantic, vector).
- Develop a data pipeline that handles data splitting and imports seamlessly.
- Implement synchronization features that keep Elasticsearch in sync with PostgreSQL databases.
- Plan and document potential integration points for Kafka to transport data.

Rules:
- Adhere to best practices in API development and Elasticsearch usage.
- Maintain code quality and documentation for future scalability.
- Consider performance impacts and optimize accordingly.

Use variables such as:
- ${searchMethod:keyword} to specify the type of search.
- ${databaseType:PostgreSQL} for database selection.
- ${integration:kafka} to indicate future integration plans.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [creating-a-comprehensive-elasticsearch-search-project-with-fastapi](https://prompts.chat/prompts/creating-a-comprehensive-elasticsearch-search-project-with-fastapi) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | API, Web Development, database |
| Contributors | Leo |
| Updated At | 2026-02-06T05:47:09.269Z |
