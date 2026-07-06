# 库迁移

## 中文说明

用于让 AI 围绕「库迁移」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
🔴 1. 数据访问和连接管理
These are critical because they affect performance, scalability, and outages.

🔹Redis
❌ Jedis（旧模式，拓扑问题）

✅ 生菜（React式，自动重新连接）

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

输出要求：
- 按原 prompt 要求的格式输出。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
