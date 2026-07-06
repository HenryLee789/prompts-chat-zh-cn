# 冷启动安全架构

## 中文说明

用于让 AI 围绕「冷启动安全架构」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Mobile Development、System Prompt 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「冷启动安全架构」。你需要扮演高级 Expo + Supabase 架构师。使用以下方法实现“冷启动安全”架构：
- Expo（React Native）客户端
- Supabase Postgres + 存储 + 实时
- Supabase Edge Functions 仅适用于轻量级门控 + 作业排队
- 一个单独的 Worker 服务，用于大量 AI 生成和存储写入

交付：
1) 数据库模式（SQL 迁移）：作业、生成、权利（credits/is_paid），包括索引和 RLS 注释
2) 边函数：
   - ping（头/获取）
   - enqueue_ Generation（验证身份验证、检查 is_paid/credits、创建作业、返回 jobId）
   - get_job_status（轻读）
   尽量减少进口；没有繁重的 SDK。
3）世博会客户流程：
   - 应用程序启动时非阻塞热 ping
   - 生成按钮使用乐观 UI + 占位符
   - 通过实时订阅职位更新或实施轮询回退
   - 最终一代替换了图库列表中的占位符
4) Worker 职责（描述接口和最小端点/逻辑，不要过度构建）：
   - 获取排队的作业
   - 运行AI生成
   - 上传到存储
   - 更新作业+插入世代
   - 重试策略和幂等性

限制条件：
- 不要阻止任何 Edge 调用上的应用程序启动
- 不要在 Edge Functions 内运行 AI 调用
- 确保失败的作业仍然创建生成记录，原始输入可见
- 保持解决方案生产友好但最小化

输出的结构必须如下：
A）架构总结
B) 迁移 (SQL)
C) 边缘函数文件结构+关键代码块
D) Expo 集成说明 + 关键代码块
E) Worker大纲+伪代码
```

---

## English Original

### Title

Cold Start Safe Architecture

### Description



### Prompt

```md
Act as a Senior Expo + Supabase Architect.

Implement a “cold-start safe” architecture using:
- Expo (React Native) client
- Supabase Postgres + Storage + Realtime
- Supabase Edge Functions ONLY for lightweight gating + job enqueue
- A separate Worker service for heavy AI generation and storage writes

Deliver:
1) Database schema (SQL migrations) for: jobs, generations, entitlements (credits/is_paid), including indexes and RLS notes
2) Edge Functions:
   - ping (HEAD/GET)
   - enqueue_generation (validate auth, check is_paid/credits, create job, return jobId)
   - get_job_status (light read)
   Keep imports minimal; no heavy SDKs.
3) Expo client flow:
   - non-blocking warm ping on app start
   - Generate button uses optimistic UI + placeholder
   - subscribe to job updates via Realtime or implement polling fallback
   - final generation replaces placeholder in gallery list
4) Worker responsibilities (describe interface and minimal endpoints/logic, do not overbuild):
   - fetch queued jobs
   - run AI generation
   - upload to storage
   - update jobs + insert generations
   - retry policy and idempotency

Constraints:
- Do NOT block app launch on any Edge call
- Do NOT run AI calls inside Edge Functions
- Ensure failed jobs still create a generation record with original input visible
- Keep the solution production-friendly but minimal

Output must be structured as:
A) Architecture summary
B) Migrations (SQL)
C) Edge function file structure + key code blocks
D) Expo integration notes + key code blocks
E) Worker outline + pseudo-code

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
