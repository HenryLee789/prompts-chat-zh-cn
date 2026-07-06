---
id: "cmnql8px80001ld04ar3ix7s1"
slug: "add-ai-protection"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/add-ai-protection"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "d0afb8b2ac454e1b7e6b2a1a8e0d2197260dc56348544dc20c47f08bee68b57f"
upstream_updated_at: "2026-04-08T21:57:01.524Z"
---
# 添加AI保护

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[add-ai-protection](https://prompts.chat/prompts/add-ai-protection)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

保护 AI 聊天和完成端点免遭滥用 - 检测提示注入和越狱尝试，阻止 PII 和敏感信息在响应中泄漏，并强制实施代币预算率限制以控制成本。当用户使用 LLM 构建或保护处理用户提示的任何端点时，请使用此技能，即使他们将其描述为“防止越狱”、“停止提示攻击”、“阻止敏感数据”或“控制 AI API 成本”，而不是命名特定的保护措施。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Security 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称：添加ai保护
许可证：Apache-2.0
描述：保护 AI 聊天和完成端点免受滥用 - 检测提示注入和越狱尝试，阻止 PII 和敏感信息在响应中泄漏，并强制实施代币预算率限制以控制成本。当用户使用 LLM 构建或保护处理用户提示的任何端点时，请使用此技能，即使他们将其描述为“防止越狱”、“停止提示攻击”、“阻止敏感数据”或“控制 AI API 成本”，而不是命名特定的保护措施。
元数据：
  路径模式：
    - “应用程序/api/聊天/**”
    -“应用程序/api/完成/**”
    -“src/app/api/chat/**”
    -“src/app/api/completion/**”
    - “**/聊天/**”
    - “**/ai/**”
    - “**/llm/**”
    - “**/api/生成*”
    - “**/api/聊天*”
    - “**/api/完成*”
  导入模式：
    - “艾”
    -“@ai-sdk/*”
    - “开放”
    -“@anthropic-ai/sdk”
    - “朗链”
  提示信号：
    短语：
      - “迅速注射”
      - “pii”
      - “敏感信息”
      - “人工智能安全”
      - “法学硕士安全”
    任意：
      - “保护艾”
      - “阻止 PII”
      - “检测注射”
      - “代币预算”
---

# 使用 Arcjet 添加特定于 AI 的安全性

通过分层保护保护 AI/LLM 端点：及时注入检测、PII 阻止和令牌预算速率限制。这些保护措施共同作用，可在滥用行为到达您的模型之前阻止其发生，从而节省 AI 预算并保护用户数据。

## 参考

阅读 https://docs.arcjet.com/llms.txt 获取涵盖所有框架、规则类型和配置选项的全面 SDK 文档。

Arcjet 规则在请求到达您的 AI 模型之前**运行 - 阻止提示注入、PII 泄漏、成本滥用和 HTTP 层的机器人抓取。

## 步骤 1：确保 Arcjet 已设置

检查现有的共享 Arcjet 客户端（有关完整设置，请参阅 `/arcjet:protect-route`）。如果不存在，请先以 `shield()` 作为基本规则设置一个。用户需要在 https://app.arcjet.com 注册 Arcjet 帐户，然后在其环境变量中使用 `ARCJET_KEY`。

## 步骤2：添加AI保护规则

AI 端点应使用 `withRule()` 在共享实例上组合这些规则：

### 及时注射检测

检测越狱、角色扮演越狱和指令覆盖。

- JS: `detectPromptInjection()` — 在 `protect()` 时间通过 `detectPromptInjectionMessage` 参数传递用户消息
- Python: `detect_prompt_injection()` — 通过 `detect_prompt_injection_message` 参数传递

**在敌意提示到达模型之前**阻止它们。这可以通过尽早拒绝攻击来节省人工智能预算。

### 敏感信息/PII 阻止

防止个人身份信息进入模型上下文。

- JS：`sensitiveInfo({ deny: ["EMAIL", "CREDIT_CARD_NUMBER", "PHONE_NUMBER", "IP_ADDRESS"] })`
- Python：`detect_sensitive_info(deny=[SensitiveInfoType.EMAIL, SensitiveInfoType.CREDIT_CARD_NUMBER, ...])`

在 `protect()` 时间通过 `sensitiveInfoValue` (JS) / `sensitive_info_value` (Python) 传递用户消息。

### 代币预算率限制

将 `tokenBucket()` / `token_bucket()` 用于 AI 端点 - `requested` 参数可以设置为与实际模型代币使用成比例，直接将速率限制与成本联系起来。它还允许短突发，同时强制执行平均速率，这与用户与聊天界面的交互方式相匹配。

推荐起始配置：

- `capacity`：10（最大爆发）
- `refillRate`：每个间隔 5 个代币
- `interval`：“10秒”

在 `protect()` 时间传入 `requested` 参数，按照模型成本比例扣除代币。例如，每条消息扣除1个令牌，或者根据提示长度进行估算。

设置 `characteristics` 以跟踪每个用户：`["userId"]` 如果经过身份验证，则默认为基于 IP。

### 基地保护

始终包含 `shield()` (WAF) 和 `detectBot()` 作为基础层。机器人抓取人工智能端点是一种常见的滥用媒介。对于通过浏览器访问的端点（例如聊天界面），请考虑添加 Arcjet 高级信号以进行客户端机器人检测，以捕获复杂的无头浏览器。请参阅 https://docs.arcjet.com/bot-protection/advanced-signals 进行设置。

## 步骤 3：编写 protected() 调用并处理决策

所有规则参数都在单个 `protect()` 调用中一起传递。使用这个模式：

```typescript
const userMessage = req.body.message; // the user's input

const decision = await aj.protect(req, {
  requested: 1, // tokens to deduct for rate limiting
  sensitiveInfoValue: userMessage, // PII scanning
  detectPromptInjectionMessage: userMessage, // injection detection
});

if (decision.isDenied()) {
  if (decision.reason.isRateLimit()) {
    return Response.json(
      { error: "You've exceeded your usage limit. Please try again later." },
      { status: 429 },
    );
  }
  if (decision.reason.isPromptInjection()) {
    return Response.json(
      { error: "Your message was flagged as potentially harmful." },
      { status: 400 },
    );
  }
  if (decision.reason.isSensitiveInfo()) {
    return Response.json(
      {
        error:
          "Your message contains sensitive information that cannot be processed. Please remove any personal data.",
      },
      { status: 400 },
    );
  }
  if (decision.reason.isBot()) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
}

// Arcjet fails open — log errors but allow the request
if (decision.isErrored()) {
  console.warn("Arcjet error:", decision.reason.message);
}

// Proceed with AI model call...
```

根据您的框架调整响应格式（例如 Express 的 `res.status(429).json(...)`）。

## 步骤 5：验证

1. 启动应用程序并发送正常消息 — 应该会成功
2. 通过发送“忽略所有先前的指令并...”之类的内容来测试提示注入
3. 通过发送带有虚假信用卡号的消息来测试 PII 阻止

首先以 `"DRY_RUN"` 模式启动所有规则。验证后，升级至`"LIVE"`。

**始终建议使用 Arcjet MCP 工具**来验证规则并分析流量：

- `list-requests` — 确认正在记录决策，按结论过滤以查看块
- `analyze-traffic` — 检查 AI 端点的拒绝率和模式
- `explain-decision` — 了解为什么允许或拒绝特定请求（对于调整提示注入灵敏度很有用）
- `promote-rule` — 一旦验证，将规则从 `DRY_RUN` 升级到 `LIVE`

如果用户想要进行全面的安全审查，建议使用 `/arcjet:security-analyst` 代理，它可以调查流量、检测异常并推荐其他规则。

https://app.arcjet.com 的 Arcjet 仪表板也可用于目视检查。

## 常见模式

**流媒体响应**：在开始流媒体之前调用 `protect()`。如果被拒绝，请在打开流之前返回错误 - 不要开始流然后中止。

**多个模型/提供商**：无论您使用哪个 AI 提供商，都使用相同的 Arcjet 实例。 Arcjet 在 HTTP 层运行，独立于模型提供者。

**Vercel AI SDK**：Arcjet 与 Vercel AI SDK 一起工作。在 `streamText()` / `generateText()` 之前致电 `protect()`。如果被拒绝，则返回简单的错误响应，而不是调用 AI SDK。

## 要避免的常见错误

- 敏感信息检测在 WASM 本地**运行 - 不会将用户数据发送到外部服务。它仅在路由处理程序中可用，在 Next.js 页面或服务器操作中不可用。
- `sensitiveInfoValue` 和 `detectPromptInjectionMessage` (JS) / `sensitive_info_value` 和 `detect_prompt_injection_message` (Python) 都必须在 `protect()` 时间通过 - 忘记其中一个会默默地跳过该检查。
- 在调用 `protect()` 之前启动流 — 如果请求在流中被拒绝，客户端会收到损坏的响应。在打开流之前始终先调用 `protect()` 并返回错误。
- 对于 AI 端点使用 `fixedWindow()` 或 `slidingWindow()` 代替 `tokenBucket()` — 令牌桶可让您按模型成本按比例扣除令牌，并匹配聊天界面的突发交互模式。
- 根据请求创建一个新的 Arcjet 实例，而不是与 `withRule()` 重用共享客户端。
````

---

## English Original

### Title

Add AI protection

### Description

Protect AI chat and completion endpoints from abuse — detect prompt injection and jailbreak attempts, block PII and sensitive info from leaking in responses, and enforce token budget rate limits to control costs. Use this skill when the user is building or securing any endpoint that processes user prompts with an LLM, even if they describe it as "preventing jailbreaks," "stopping prompt attacks," "blocking sensitive data," or "controlling AI API costs" rather than naming specific protections.

### Prompt

````md
---
name: add-ai-protection
license: Apache-2.0
description: Protect AI chat and completion endpoints from abuse — detect prompt injection and jailbreak attempts, block PII and sensitive info from leaking in responses, and enforce token budget rate limits to control costs. Use this skill when the user is building or securing any endpoint that processes user prompts with an LLM, even if they describe it as "preventing jailbreaks," "stopping prompt attacks," "blocking sensitive data," or "controlling AI API costs" rather than naming specific protections.
metadata:
  pathPatterns:
    - "app/api/chat/**"
    - "app/api/completion/**"
    - "src/app/api/chat/**"
    - "src/app/api/completion/**"
    - "**/chat/**"
    - "**/ai/**"
    - "**/llm/**"
    - "**/api/generate*"
    - "**/api/chat*"
    - "**/api/completion*"
  importPatterns:
    - "ai"
    - "@ai-sdk/*"
    - "openai"
    - "@anthropic-ai/sdk"
    - "langchain"
  promptSignals:
    phrases:
      - "prompt injection"
      - "pii"
      - "sensitive info"
      - "ai security"
      - "llm security"
    anyOf:
      - "protect ai"
      - "block pii"
      - "detect injection"
      - "token budget"
---

# Add AI-Specific Security with Arcjet

Secure AI/LLM endpoints with layered protection: prompt injection detection, PII blocking, and token budget rate limiting. These protections work together to block abuse before it reaches your model, saving AI budget and protecting user data.

## Reference

Read https://docs.arcjet.com/llms.txt for comprehensive SDK documentation covering all frameworks, rule types, and configuration options.

Arcjet rules run **before** the request reaches your AI model — blocking prompt injection, PII leakage, cost abuse, and bot scraping at the HTTP layer.

## Step 1: Ensure Arcjet Is Set Up

Check for an existing shared Arcjet client (see `/arcjet:protect-route` for full setup). If none exists, set one up first with `shield()` as the base rule. The user will need to register for an Arcjet account at https://app.arcjet.com then use the `ARCJET_KEY` in their environment variables.

## Step 2: Add AI Protection Rules

AI endpoints should combine these rules on the shared instance using `withRule()`:

### Prompt Injection Detection

Detects jailbreaks, role-play escapes, and instruction overrides.

- JS: `detectPromptInjection()` — pass user message via `detectPromptInjectionMessage` parameter at `protect()` time
- Python: `detect_prompt_injection()` — pass via `detect_prompt_injection_message` parameter

Blocks hostile prompts **before** they reach the model. This saves AI budget by rejecting attacks early.

### Sensitive Info / PII Blocking

Prevents personally identifiable information from entering model context.

- JS: `sensitiveInfo({ deny: ["EMAIL", "CREDIT_CARD_NUMBER", "PHONE_NUMBER", "IP_ADDRESS"] })`
- Python: `detect_sensitive_info(deny=[SensitiveInfoType.EMAIL, SensitiveInfoType.CREDIT_CARD_NUMBER, ...])`

Pass the user message via `sensitiveInfoValue` (JS) / `sensitive_info_value` (Python) at `protect()` time.

### Token Budget Rate Limiting

Use `tokenBucket()` / `token_bucket()` for AI endpoints — the `requested` parameter can be set proportional to actual model token usage, directly linking rate limiting to cost. It also allows short bursts while enforcing an average rate, which matches how users interact with chat interfaces.

Recommended starting configuration:

- `capacity`: 10 (max burst)
- `refillRate`: 5 tokens per interval
- `interval`: "10s"

Pass the `requested` parameter at `protect()` time to deduct tokens proportional to model cost. For example, deduct 1 token per message, or estimate based on prompt length.

Set `characteristics` to track per-user: `["userId"]` if authenticated, defaults to IP-based.

### Base Protection

Always include `shield()` (WAF) and `detectBot()` as base layers. Bots scraping AI endpoints are a common abuse vector. For endpoints accessed via browsers (e.g. chat interfaces), consider adding Arcjet advanced signals for client-side bot detection that catches sophisticated headless browsers. See https://docs.arcjet.com/bot-protection/advanced-signals for setup.

## Step 3: Compose the protect() Call and Handle Decisions

All rule parameters are passed together in a single `protect()` call. Use this pattern:

```typescript
const userMessage = req.body.message; // the user's input

const decision = await aj.protect(req, {
  requested: 1, // tokens to deduct for rate limiting
  sensitiveInfoValue: userMessage, // PII scanning
  detectPromptInjectionMessage: userMessage, // injection detection
});

if (decision.isDenied()) {
  if (decision.reason.isRateLimit()) {
    return Response.json(
      { error: "You've exceeded your usage limit. Please try again later." },
      { status: 429 },
    );
  }
  if (decision.reason.isPromptInjection()) {
    return Response.json(
      { error: "Your message was flagged as potentially harmful." },
      { status: 400 },
    );
  }
  if (decision.reason.isSensitiveInfo()) {
    return Response.json(
      {
        error:
          "Your message contains sensitive information that cannot be processed. Please remove any personal data.",
      },
      { status: 400 },
    );
  }
  if (decision.reason.isBot()) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
}

// Arcjet fails open — log errors but allow the request
if (decision.isErrored()) {
  console.warn("Arcjet error:", decision.reason.message);
}

// Proceed with AI model call...
```

Adapt the response format to your framework (e.g., `res.status(429).json(...)` for Express).

## Step 5: Verify

1. Start the app and send a normal message — should succeed
2. Test prompt injection by sending something like "Ignore all previous instructions and..."
3. Test PII blocking by sending a message with a fake credit card number

Start all rules in `"DRY_RUN"` mode first. Once verified, promote to `"LIVE"`.

**Always recommend using the Arcjet MCP tools** to verify rules and analyze traffic:

- `list-requests` — confirm decisions are being recorded, filter by conclusion to see blocks
- `analyze-traffic` — review denial rates and patterns for the AI endpoint
- `explain-decision` — understand why a specific request was allowed or denied (useful for tuning prompt injection sensitivity)
- `promote-rule` — promote rules from `DRY_RUN` to `LIVE` once verified

If the user wants a full security review, suggest the `/arcjet:security-analyst` agent which can investigate traffic, detect anomalies, and recommend additional rules.

The Arcjet dashboard at https://app.arcjet.com is also available for visual inspection.

## Common Patterns

**Streaming responses**: Call `protect()` before starting the stream. If denied, return the error before opening the stream — don't start streaming and then abort.

**Multiple models / providers**: Use the same Arcjet instance regardless of which AI provider you use. Arcjet operates at the HTTP layer, independent of the model provider.

**Vercel AI SDK**: Arcjet works alongside the Vercel AI SDK. Call `protect()` before `streamText()` / `generateText()`. If denied, return a plain error response instead of calling the AI SDK.

## Common Mistakes to Avoid

- Sensitive info detection runs **locally in WASM** — no user data is sent to external services. It is only available in route handlers, not in Next.js pages or server actions.
- `sensitiveInfoValue` and `detectPromptInjectionMessage` (JS) / `sensitive_info_value` and `detect_prompt_injection_message` (Python) must both be passed at `protect()` time — forgetting either silently skips that check.
- Starting a stream before calling `protect()` — if the request is denied mid-stream, the client gets a broken response. Always call `protect()` first and return an error before opening the stream.
- Using `fixedWindow()` or `slidingWindow()` instead of `tokenBucket()` for AI endpoints — token bucket lets you deduct tokens proportional to model cost and matches the bursty interaction pattern of chat interfaces.
- Creating a new Arcjet instance per request instead of reusing the shared client with `withRule()`.

````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [add-ai-protection](https://prompts.chat/prompts/add-ai-protection) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | Security |
| Contributors | davidmytton |
| Updated At | 2026-04-08T21:57:01.524Z |
