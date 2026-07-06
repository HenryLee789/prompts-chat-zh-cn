---
id: "cmmjg16xf0001l204wmrw6zpy"
slug: "library-migration"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/library-migration"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "e5154e35b0d34d8f04bf6fff76043a87cf49cc964a505f6294a02cfc2ebb0d58"
upstream_updated_at: "2026-03-09T17:16:52.222Z"
---
# 库迁移

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[library-migration](https://prompts.chat/prompts/library-migration)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
🔴 1. 数据访问和连接管理
These are critical because they affect performance, scalability, and outages.

🔹Redis
❌ Jedis（旧模式，拓扑问题）

✅ 生菜（反应式，自动重新连接）

✅ Valkey Glide（AWS 推荐）

🔹 JDBC 连接池
❌阿帕奇DBCP

❌C3P0

✅ HikariCP (default in Spring Boot, fastest, stable)

 

🔹 ORM/持久化
❌ 旧 Hibernate 4.x

❌ MyBatis 遗留配置

✅ 休眠 6+

✅ Spring Data JPA 最新
```

---

## English Original

### Title

library migration

### Description



### Prompt

```md
🔴 1. Data Access & Connection Management
These are critical because they affect performance, scalability, and outages.

🔹 Redis
❌ Jedis (older pattern, topology issues)

✅ Lettuce (reactive, auto-reconnect)

✅ Valkey Glide (AWS recommended)

🔹 JDBC Connection Pool
❌ Apache DBCP

❌ C3P0

✅ HikariCP (default in Spring Boot, fastest, stable)

 

🔹 ORM / Persistence
❌ Old Hibernate 4.x

❌ MyBatis legacy configs

✅ Hibernate 6+

✅ Spring Data JPA latest


```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [library-migration](https://prompts.chat/prompts/library-migration) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | abhinavme1004 |
| Updated At | 2026-03-09T17:16:52.222Z |
