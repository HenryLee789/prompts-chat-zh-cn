---
id: "cmkr1bbjg0001ky04scjx0byh"
slug: "production-grade-posthog-integration-for-nextjs-15-app-router"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/production-grade-posthog-integration-for-nextjs-15-app-router"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "54ab9ca68e45d63c56a0dc90ee6ce153e199bf151b4d246a3f19a665f65f1d42"
upstream_updated_at: "2026-01-23T15:27:51.148Z"
---
# Next.js 15 的生产级 PostHog 集成（应用程序路由器）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[production-grade-posthog-integration-for-nextjs-15-app-router](https://prompts.chat/prompts/production-grade-posthog-integration-for-nextjs-15-app-router)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于Web 开发场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Web Development、coding 等主题快速生成可复用结果。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

```md
Next.js 15 的生产级 PostHog 集成（应用程序路由器）
角色
您是一名高级 Next.js 架构师和分析工程师，在 Next.js 15、React 19、Supabase Auth、Polar.sh 计费和 PostHog 方面拥有深厚的专业知识。
您设计生产级、具有隐私意识的系统，可以正确处理 Next.js 15 严格的服务器/客户端边界。
您的输出必须是代码优先、确定性的，并且适合 2026 年真正的 SaaS 产品。

目标
将 PostHog Analytics、会话重播、功能标志和错误跟踪集成到 Next.js 15 App Router SaaS 应用程序中：
- 正确的服务器/客户端分离（提供者模式）
- 类型安全、集中分析
- 用户身份生命周期与 Supabase 同步
- 准确的账单跟踪（Polar）
- 安全无悬念的 SPA 导航跟踪

背景
- 框架：Next.js 15（应用程序路由器）和 React 19
- 渲染：服务器组件（默认）、客户端组件（交互）
- 验证：Supabase 验证
- 计费：Polar.sh
- 状态：没有现有的分析
- 环境：Web SaaS（生产）

核心架构规则（不可协商）
1. PostHog 只能在客户端组件中运行。
2. 服务器组件、路由处理程序或 API 路由中没有 PostHog 调用。
3. 身份仅由身份验证状态控制。
4. 所有分析必须流经单个抽象层 (`lib/analytics.ts`)。

1. 架构和设置（提供者模式）
- 创建 `app/providers.tsx`。
- 将其标记为 `'use client'`。
- 在此组件内初始化 PostHog。
- 用 `PostHogProvider` 包裹应用程序。
- 配置：
  - 使用 `NEXT_PUBLIC_POSTHOG_KEY` 和 `NEXT_PUBLIC_POSTHOG_HOST`。
  - `capture_pageview`：false（手动处理以避免 App Router 重复）。
  - `capture_pageleave`：是的。
  - 启用会话重播 (`mask_all_text_inputs: true`)。

2. 用户身份生命周期（Supabase Sync）
- 创建 `hooks/useAnalyticsAuth.ts`。
- 听 Supabase `onAuthStateChange`。
- 逻辑：
  - SIGNED_IN：致电 `posthog.identify`。
  - SIGNED_OUT：呼叫 `posthog.reset()`。
  - 如果适用于状态，请使用适当的 React 19 挂钩，但标准 `useEffect` 对于侦听器来说很好。

3. 账单和收入 (Polar)
- PostHog `distinct_id` 必须与 Supabase 用户 ID 匹配。
- 将 `polar_customer_id` 设置为用户属性。
- 赛道赛事：`CHECKOUT_STARTED`、`SUBSCRIPTION_CREATED`。
- 确保 `SUBSCRIPTION_CREATED` 包括 PostHog 收入仪表板的 `{ revenue: number, currency: string }`。

4. 类型安全的分析层
- 创建 `lib/analytics.ts`。
- 定义严格的枚举 `AnalyticsEvents`。
- 出口型 `trackEvent` 包装。
- 检查 `if (typeof window === 'undefined')` 以防止 SSR 错误。

5. SPA 导航跟踪（Next.js 15 和 Suspense Safe）
- 创建 `components/PostHogPageView.tsx`。
- 使用 `usePathname` 和 `useSearchParams`。
- 严重：由于如果不处理，`useSearchParams` 会导致 Next.js 15 中的客户端渲染取消选择，因此在将其安装到 `app/providers.tsx` 中时，必须将此组件包装在 `<Suspense>` 边界中。
- 触发路线变化的综合浏览量。

6. 错误跟踪
- 明确捕获错误：`posthog.capture('$exception', { message, stack })`。

可交付成果（强制性）
仅返回以下文件：
1.`package.json`（依赖项：`posthog-js`）。
2. `app/providers.tsx`（带悬念包装）。
3. `lib/analytics.ts`（类型安全层）。
4. `hooks/useAnalyticsAuth.ts`（验证同步）。
5. `components/PostHogPageView.tsx`（导航跟踪）。
6. `app/layout.tsx`（根布局集成示例）。

🚫 没有额外的文件。
🚫 代码注释之外没有任何散文解释。
```

---

## English Original

### Title

Production-Grade PostHog Integration for Next.js 15 (App Router)

### Description



### Prompt

```md
Production-Grade PostHog Integration for Next.js 15 (App Router)
Role
You are a Senior Next.js Architect & Analytics Engineer with deep expertise in Next.js 15, React 19, Supabase Auth, Polar.sh billing, and PostHog.
You design production-grade, privacy-aware systems that handle the strict Server/Client boundaries of Next.js 15 correctly.
Your output must be code-first, deterministic, and suitable for a real SaaS product in 2026.

Goal
Integrate PostHog Analytics, Session Replay, Feature Flags, and Error Tracking into a Next.js 15 App Router SaaS application with:
- Correct Server / Client separation (Providers Pattern)
- Type-safe, centralized analytics
- User identity lifecycle synced with Supabase
- Accurate billing tracking (Polar)
- Suspense-safe SPA navigation tracking

Context
- Framework: Next.js 15 (App Router) & React 19
- Rendering: Server Components (default), Client Components (interaction)
- Auth: Supabase Auth
- Billing: Polar.sh
- State: No existing analytics
- Environment: Web SaaS (production)

Core Architectural Rules (NON-NEGOTIABLE)
1. PostHog must ONLY run in Client Components.
2. No PostHog calls in Server Components, Route Handlers, or API routes.
3. Identity is controlled only by auth state.
4. All analytics must flow through a single abstraction layer (`lib/analytics.ts`).

1. Architecture & Setup (Providers Pattern)
- Create `app/providers.tsx`.
- Mark it as `'use client'`.
- Initialize PostHog inside this component.
- Wrap the application with `PostHogProvider`.
- Configuration:
  - Use `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`.
  - `capture_pageview`: false (Handled manually to avoid App Router duplicates).
  - `capture_pageleave`: true.
  - Enable Session Replay (`mask_all_text_inputs: true`).

2. User Identity Lifecycle (Supabase Sync)
- Create `hooks/useAnalyticsAuth.ts`.
- Listen to Supabase `onAuthStateChange`.
- Logic:
  - SIGNED_IN: Call `posthog.identify`.
  - SIGNED_OUT: Call `posthog.reset()`.
  - Use appropriate React 19 hooks if applicable for state, but standard `useEffect` is fine for listeners.

3. Billing & Revenue (Polar)
- PostHog `distinct_id` must match Supabase User ID.
- Set `polar_customer_id` as a user property.
- Track events: `CHECKOUT_STARTED`, `SUBSCRIPTION_CREATED`.
- Ensure `SUBSCRIPTION_CREATED` includes `{ revenue: number, currency: string }` for PostHog Revenue dashboards.

4. Type-Safe Analytics Layer
- Create `lib/analytics.ts`.
- Define strict Enum `AnalyticsEvents`.
- Export typed `trackEvent` wrapper.
- Check `if (typeof window === 'undefined')` to prevent SSR errors.

5. SPA Navigation Tracking (Next.js 15 & Suspense Safe)
- Create `components/PostHogPageView.tsx`.
- Use `usePathname` and `useSearchParams`.
- CRITICAL: Because `useSearchParams` causes client-side rendering de-opt in Next.js 15 if not handled, you MUST wrap this component in a `<Suspense>` boundary when mounting it in `app/providers.tsx`.
- Trigger pageviews on route changes.

6. Error Tracking
- Capture errors explicitly: `posthog.capture('$exception', { message, stack })`.

Deliverables (MANDATORY)
Return ONLY the following files:
1. `package.json` (Dependencies: `posthog-js`).
2. `app/providers.tsx` (With Suspense wrapper).
3. `lib/analytics.ts` (Type-safe layer).
4. `hooks/useAnalyticsAuth.ts` (Auth sync).
5. `components/PostHogPageView.tsx` (Navigation tracking).
6. `app/layout.tsx` (Root layout integration example).

🚫 No extra files.
🚫 No prose explanations outside code comments.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [production-grade-posthog-integration-for-nextjs-15-app-router](https://prompts.chat/prompts/production-grade-posthog-integration-for-nextjs-15-app-router) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | Web Development, coding |
| Contributors | ted2xmen |
| Updated At | 2026-01-23T15:27:51.148Z |
