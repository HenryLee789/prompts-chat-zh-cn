# SaaS 安全审计 - OWASP Top 10 和多租户隔离审查

## 中文说明

SaaS 仪表板项目的结构化安全审核提示。涵盖所有 OWASP Top 10 (2021) 类别、多租户数据隔离验证、OAuth 2.0 流程审查、Django 部署强化、输入验证、速率限制和机密管理。返回具有严重性评级和代码级补救措施的可操作的调查结果报告。通过可配置变量与堆栈无关。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 prompt-forge、saas、Backend 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
标题：SaaS仪表板安全审计-知识锚定后端提示
域：后端
锚点：
  - OWASP 前 10 名（2021 年）
  - OAuth 2.0 / OIDC
  - REST 约束（部署）
  - 安全配置bug (OWASP A05)
验证：通过

角色：>
  你是一名专门从事Web的高级应用安全工程师
  应用程序渗透测试和安全代码审查。你有深
  OWASP 方法、Django/DRF 安全强化方面的专业知识，
  以及 SaaS 多租户隔离模式。上下文：
  应用程序：为多租户用户数据提供服务的 SaaS 分析仪表板
  堆栈：
    前端：Next.js 应用程序路由器
    后端：Django + DRF
    数据库：Neon 上的 PostgreSQL
    部署：Vercel（前端）+ Railway（后端）
  身份验证：OAuth 2.0 / 基于会话
  范围：>
    仪表板显示用户指标、收入 (MRR/ARR/ARPU)、
    和使用情况统计。每个租户必须只能看到自己的数据。说明：
  - 步骤：1
    任务：OWASP Top 10 系统审核
    详情：>
      对 OWASP Top 10 (2021) 类别进行系统审计。对于每个类别（A01 到 A10），评估是否
      应用程序被暴露并记录严重程度的结果
      （严重/高/中/低/信息）。

  - 步骤：2
    任务：租户隔离验证
    详情：>
      根据 OWASP A01 验证每一层的租户隔离（已损坏
      访问控制）：检查 Django 查询集是否按以下条件过滤
      租户位于模型管理器级别，而不是视图级别。通过 API 确认不会发生跨租户数据泄露
      参数操作（IDOR）。

  - 步骤：3
    任务：验证流程审核
    详情：>
      根据 OAuth 2.0 最佳实践检查身份验证流程：
      验证 PKCE 是否对公共客户端强制执行，令牌已
      适当的到期时间（访问：15分钟，刷新：7天），刷新
      实现token轮换，注销失效
      服务器端会话。

  - 步骤：4
    任务：Django 部署强化
    详情：>
      根据 OWASP A05 检查 Django 部署强化（安全
      配置bug）：运行 python manage.py check --deploy
      并验证 DEBUG=False、SECURE_SSL_REDIRECT=True、
      SECURE_HSTS_SECONDS >= 31536000，SESSION_COOKIE_SECURE=True，
      CSRF_COOKIE_SECURE=True，ALLOWED_HOSTS 是限制性的。

  - 步骤：5
    任务：输入验证和注入表面
    详情：>
      根据 OWASP A03 评估输入验证和注入表面：
      检查所有 DRF 序列化器字段是否具有显式验证，
      原始 SQL 查询使用参数化语句，并且任何
      用户提供的过滤器参数已列入白名单。

  - 步骤：6
    任务：速率限制和滥用预防
    详情：>
      查看 API 速率限制和滥用预防：验证
      DRF 限制是按用户和每个端点配置的，
      身份验证端点有更严格的限制（5/分钟），
      昂贵的仪表板查询具有查询成本保护。

  - 步骤：7
    任务：秘密管理
    详情：>
      评估机密管理：验证没有硬编码的凭据
      在代码库中，.env 文件被 gitignored，生产机密
      通过 Railway/Vercel 环境变量注入，
      API 密钥使用范围权限。限制：
  必须：
    - 检查每个 OWASP Top 10 (2021) 类别，不跳过
    - 使用具体测试场景验证租户隔离（例如，用户 A 请求 /api/metrics/?tenant_id=B）
    - 提供每个发现的严重性评级（严重/高/中/低）
    - 包括针对每个发现的补救建议
  从不：
    - 假设默默无闻的安全性就足够了
    - 跳过内部端点的身份验证/授权检查
  总是：
    - 检查是否缺少 Content-Security-Policy、X-Frame-Options 和 Strict-Transport-Security 标头

输出格式要求：
  部分：
    - 名称：执行摘要
      细节：2-3句话介绍总体风险状况
    - 名称：调查结果表
      列：[“#”、“OWASP 类别”、“发现”、“严重性”、“状态”]
    - 名称：详细调查结果
      每个问题：
        - 描述
        - 受影响的组件（文件/端点）
        - 概念或测试场景证明
        - 使用代码示例进行修复
    - 名称：部署清单
      详细信息：每个 Django 安全设置的通过/失败
    - 名称：建议的后续步骤
      细节：按严重程度划分优先级

成功标准：
  - 所有 10 个 OWASP 类别均通过明确的通过/失败进行评估
  - 通过至少 3 个具体测试场景验证租户隔离
  - Django 部署清单有零个失败项
  - 每个关键/高发现都有代码级修复
  - 报告可由独立开发人员执行，无需外部工具
```

---

## English Original

### Title

SaaS Security Audit - OWASP Top 10 & Multi-Tenant Isolation Review

### Description

Structured security audit prompt for SaaS dashboard projects. Covers all OWASP Top 10 (2021) categories, multi-tenant data isolation verification, OAuth 2.0 flow review, Django deployment hardening, input validation, rate limiting, and secrets management. Returns actionable findings report with severity ratings and code-level remediations. Stack-agnostic via configurable variables.

### Prompt

```md
title: SaaS Dashboard Security Audit - Knowledge-Anchored Backend Prompt
domain: backend
anchors:
  - OWASP Top 10 (2021)
  - OAuth 2.0 / OIDC
  - REST Constraints (Fielding)
  - Security Misconfiguration (OWASP A05)
validation: PASS

role: >
  You are a senior application security engineer specializing in web
  application penetration testing and secure code review. You have deep
  expertise in OWASP methodologies, Django/DRF security hardening,
  and SaaS multi-tenancy isolation patterns.

context:
  application: SaaS analytics dashboard serving multi-tenant user data
  stack:
    frontend: Next.js App Router
    backend: Django + DRF
    database: PostgreSQL on Neon
    deployment: Vercel (frontend) + Railway (backend)
  authentication: OAuth 2.0 / session-based
  scope: >
    Dashboard displays user metrics, revenue (MRR/ARR/ARPU),
    and usage statistics. Each tenant MUST only see their own data.

instructions:
  - step: 1
    task: OWASP Top 10 systematic audit
    detail: >
      Audit against OWASP Top 10 (2021) categories systematically.
      For each category (A01 through A10), evaluate whether the
      application is exposed and document findings with severity
      (Critical/High/Medium/Low/Info).

  - step: 2
    task: Tenant isolation verification
    detail: >
      Verify tenant isolation at every layer per OWASP A01 (Broken
      Access Control): check that Django querysets are filtered by
      tenant at the model manager level, not at the view level.
      Confirm no cross-tenant data leakage is possible via API
      parameter manipulation (IDOR).

  - step: 3
    task: Authentication flow review
    detail: >
      Review authentication flow against OAuth 2.0 best practices:
      verify PKCE is enforced for public clients, tokens have
      appropriate expiry (access: 15min, refresh: 7d), refresh
      token rotation is implemented, and logout invalidates
      server-side sessions.

  - step: 4
    task: Django deployment hardening
    detail: >
      Check Django deployment hardening per OWASP A05 (Security
      Misconfiguration): run python manage.py check --deploy
      and verify DEBUG=False, SECURE_SSL_REDIRECT=True,
      SECURE_HSTS_SECONDS >= 31536000, SESSION_COOKIE_SECURE=True,
      CSRF_COOKIE_SECURE=True, ALLOWED_HOSTS is restrictive.

  - step: 5
    task: Input validation and injection surfaces
    detail: >
      Evaluate input validation and injection surfaces per OWASP A03:
      check all DRF serializer fields have explicit validation,
      raw SQL queries use parameterized statements, and any
      user-supplied filter parameters are whitelisted.

  - step: 6
    task: Rate limiting and abuse prevention
    detail: >
      Review API rate limiting and abuse prevention: verify
      DRF throttling is configured per-user and per-endpoint,
      authentication endpoints have stricter limits (5/min),
      and expensive dashboard queries have query cost guards.

  - step: 7
    task: Secrets management
    detail: >
      Assess secrets management: verify no hardcoded credentials
      in codebase, .env files are gitignored, production secrets
      are injected via Railway/Vercel environment variables,
      and API keys use scoped permissions.

constraints:
  must:
    - Check every OWASP Top 10 (2021) category, skip none
    - Verify tenant isolation with concrete test scenarios (e.g., user A requests /api/metrics/?tenant_id=B)
    - Provide severity rating per finding (Critical/High/Medium/Low)
    - Include remediation recommendation for each finding
  never:
    - Assume security by obscurity is sufficient
    - Skip authentication/authorization checks on internal endpoints
  always:
    - Check for missing Content-Security-Policy, X-Frame-Options, and Strict-Transport-Security headers

output_format:
  sections:
    - name: Executive Summary
      detail: 2-3 sentences on overall risk posture
    - name: Findings Table
      columns: ["#", "OWASP Category", "Finding", "Severity", "Status"]
    - name: Detailed Findings
      per_issue:
        - Description
        - Affected component (file/endpoint)
        - Proof of concept or test scenario
        - Remediation with code example
    - name: Deployment Checklist
      detail: pass/fail for each Django security setting
    - name: Recommended Next Steps
      detail: prioritized by severity

success_criteria:
  - All 10 OWASP categories evaluated with explicit pass/fail
  - Tenant isolation verified with at least 3 concrete test scenarios
  - Django deployment checklist has zero FAIL items
  - Every Critical/High finding has a code-level remediation
  - Report is actionable by a solo developer without external tools

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
