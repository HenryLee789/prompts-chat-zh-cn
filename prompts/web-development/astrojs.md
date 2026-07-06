---
id: "cmn1elvgk0001le04njueblr2"
slug: "astrojs"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/astrojs"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "988eea51deeaf36d325cf5ba5b51de7d76ab269790fe66a51afdb0c2f7fc988b"
upstream_updated_at: "2026-03-22T06:57:19.283Z"
---
# Astro.js

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[astrojs](https://prompts.chat/prompts/astrojs)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

Astro.js 提示

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Frontend、JavaScript 等主题快速生成可复用结果。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

```md
# Astro v6 架构规则（严格模式）

## 1. 核心理念

- 遵循 Astro 的“HTML优先/默认为零 JavaScript”原则：
  - 除非明确需要交互性，否则一切都是静态 HTML。
  - JavaScript 是一种成本→只有在创造真正的用户价值时才会增加。

- 始终在“岛屿建筑”中思考：
  - 该页面是静态 HTML
  - 互动部分是孤岛
  - 切勿将整个页面视为一个应用程序

- 在编写任何 JavaScript 之前，请始终询问：
  “这个问题可以通过 HTML + CSS 或服务器端逻辑来解决吗？”

---

## 2. 组件模型

- 使用 `.astro` 组件：
  - 布局
  - 成分
  - 静态用户界面
  - 数据获取
  - 服务器端逻辑（frontmatter）

- `.astro` 组件：
  - 在构建时或服务器端运行
  - 默认情况下不发布 JavaScript
  - 必须保持与框架无关

- 切勿在 `.astro` 内使用 React/Vue/Svelte 钩子

---

## 3. 岛屿（交互组件）

- 仅使用框架组件（React、Vue、Svelte 等）进行交互。

- 将每个交互组件视为一个孤岛：
  - 独立
  - 独立的
  - 最小范围

- 绝不：
  - 水合整个页面或布局
  - 将大树包裹在一个岛上
  - 不必要地在循环中创建许多小岛

- 更喜欢：
  - 静态列表渲染
  - 仅水化最小的交互单元

---

## 4. 补水策略（关键）

- 始终使用 `client:*` 指令明确定义水合作用。

- 选择尽可能低的优先级：

  - `client:load`
    → 仅适用于关键的首屏交互

  - `client:idle`
    → 页面加载后的辅助 UI

  - `client:visible`
    → 适用于非折叠或重型组件

  - `client:media`
    → 对于响应式/条件式 UI

  -`client:only`
    → 仅当 SSR 损坏时（窗口、本地存储等）

- 默认规则：
  ❌ 切勿默认为 `client:load`
  ✅ 优先选择 `client:visible` 或 `client:idle`

- 水合作用是一项绩效预算：
  - 每个岛屿都增加了JS
  - 保持 JS 总量最小

📌 Astro 不会水合成分，除非通过 `client:*` 明确告知：contentReference[oaicite:0]{index=0}  

---

## 5. 服务器与客户端逻辑

- 更喜欢服务器端逻辑（在 `.astro` frontmatter 内）：
  - 数据获取
  - 转变
  - 过滤/排序
  - 派生值

- 仅在以下情况下使用客户端状态：
  - 用户交互需要它
  - 需要实时更新

- 避免：
  - 在客户端复制逻辑
  - 将服务器逻辑移至孤岛中

---

## 6. 状态管理

- 除非绝对必要，否则避免客户端状态。

- 如果需要：
  - 仅限岛内的范围状态
  - 除非需要，否则不要创建全局应用程序状态

- 对于跨岛州：
  - 使用轻量级共享存储（例如，nano 存储）
  - 默认情况下避免重型全局状态系统

---

## 7. 性能约束（硬规则）

- 最小化发送给客户端的 JavaScript：
  - Astro 仅加载水合组件的 JS ：contentReference[oaicite:1]{index=1}  

- 更喜欢：
  - 静态渲染
  - 部分保湿
  - 懒惰补水

- 避免：
  - 滋润大清单
  - 循环中重复的岛屿
  - 过度使用`client:load`

- 每个岛屿：
  - 有自己的捆绑包
  - 独立加载
  - 应保持小而专注：contentReference[oaicite:2]{index=2}  

---

## 8. 文件和项目结构

- `/pages`
  - 入口点（SSG/SSR）
  - 没有客户端逻辑

- `/components`
  - 共享用户界面
  - 岛屿住在这里

- `/layouts`
  - 仅静态包装器

- `/content`
  - Markdown / CMS 数据

- 让 `.astro` 文件专注于组成，而不是行为

---

## 9. 反模式（严格禁止）

- ❌ 在 `.astro` 中使用挂钩
- ❌将Astro转变为SPA架构
- ❌ 滋润整个布局/页面
- ❌ 到处使用`client:load`
- ❌ 将列表映射到水合组件
- ❌使用客户端JS解决静态问题
- ❌ 用客户端逻辑替换服务器逻辑

---

## 10. 首选模式

- ✅ 静态优先渲染
- ✅ 最小的孤立岛屿
- ✅ 懒惰补水（`visible`、`idle`）
- ✅ 服务器端计算
- ✅ HTML + CSS 先于 JS
- ✅ 渐进增强

---

## 11.决策框架（非常重要）

对于每个功能：

1. 这可以是静态 HTML 吗？
   → 是 → 使用 `.astro`

2、需要互动吗？
   → 否 → 保持静止

3、需要JS吗？
   → 是 → 创建一个岛屿

4.什么时候加载？
   → 选择最低优先级 `client:*`

---

## 12.心智模型（不可协商）

- Astro 不是：
  - Next.js
  - SPA框架
  - 反应优先系统

- 天文是：
  - 静态优先渲染器
  部分水化系统
  - 性能优先的架构

- 思考：
  ❌“构建一个应用程序”
  ✅ “发布 HTML + 洒水 JS”
```

---

## English Original

### Title

Astro.js

### Description

Astro.js Prompts

### Prompt

```md
# Astro v6 Architecture Rules (Strict Mode)

## 1. Core Philosophy

- Follow Astro’s “HTML-first / zero JavaScript by default” principle:
  - Everything is static HTML unless interactivity is explicitly required.
  - JavaScript is a cost → only add when it creates real user value.

- Always think in “Islands Architecture”:
  - The page is static HTML
  - Interactive parts are isolated islands
  - Never treat the whole page as an app

- Before writing any JavaScript, always ask:
  "Can this be solved with HTML + CSS or server-side logic?"

---

## 2. Component Model

- Use `.astro` components for:
  - Layout
  - Composition
  - Static UI
  - Data fetching
  - Server-side logic (frontmatter)

- `.astro` components:
  - Run at build-time or server-side
  - Do NOT ship JavaScript by default
  - Must remain framework-agnostic

- NEVER use React/Vue/Svelte hooks inside `.astro`

---

## 3. Islands (Interactive Components)

- Only use framework components (React, Vue, Svelte, etc.) for interactivity.

- Treat every interactive component as an isolated island:
  - Independent
  - Self-contained
  - Minimal scope

- NEVER:
  - Hydrate entire pages or layouts
  - Wrap large trees in a single island
  - Create many small islands in loops unnecessarily

- Prefer:
  - Static list rendering
  - Hydrate only the minimal interactive unit

---

## 4. Hydration Strategy (Critical)

- Always explicitly define hydration using `client:*` directives.

- Choose the LOWEST possible priority:

  - `client:load`
    → Only for critical, above-the-fold interactivity

  - `client:idle`
    → For secondary UI after page load

  - `client:visible`
    → For below-the-fold or heavy components

  - `client:media`
    → For responsive / conditional UI

  - `client:only`
    → ONLY when SSR breaks (window, localStorage, etc.)

- Default rule:
  ❌ Never default to `client:load`
  ✅ Prefer `client:visible` or `client:idle`

- Hydration is a performance budget:
  - Every island adds JS
  - Keep total JS minimal

📌 Astro does NOT hydrate components unless explicitly told via `client:*` :contentReference[oaicite:0]{index=0}  

---

## 5. Server vs Client Logic

- Prefer server-side logic (inside `.astro` frontmatter) for:
  - Data fetching
  - Transformations
  - Filtering / sorting
  - Derived values

- Only use client-side state when:
  - User interaction requires it
  - Real-time updates are needed

- Avoid:
  - Duplicating logic on client
  - Moving server logic into islands

---

## 6. State Management

- Avoid client state unless strictly necessary.

- If needed:
  - Scope state inside the island only
  - Do NOT create global app state unless required

- For cross-island state:
  - Use lightweight shared stores (e.g., nano stores)
  - Avoid heavy global state systems by default

---

## 7. Performance Constraints (Hard Rules)

- Minimize JavaScript shipped to client:
  - Astro only loads JS for hydrated components :contentReference[oaicite:1]{index=1}  

- Prefer:
  - Static rendering
  - Partial hydration
  - Lazy hydration

- Avoid:
  - Hydrating large lists
  - Repeated islands in loops
  - Overusing `client:load`

- Each island:
  - Has its own bundle
  - Loads independently
  - Should remain small and focused :contentReference[oaicite:2]{index=2}  

---

## 8. File & Project Structure

- `/pages`
  - Entry points (SSG/SSR)
  - No client logic

- `/components`
  - Shared UI
  - Islands live here

- `/layouts`
  - Static wrappers only

- `/content`
  - Markdown / CMS data

- Keep `.astro` files focused on composition, not behavior

---

## 9. Anti-Patterns (Strictly Forbidden)

- ❌ Using hooks in `.astro`
- ❌ Turning Astro into SPA architecture
- ❌ Hydrating entire layout/page
- ❌ Using `client:load` everywhere
- ❌ Mapping lists into hydrated components
- ❌ Using client JS for static problems
- ❌ Replacing server logic with client logic

---

## 10. Preferred Patterns

- ✅ Static-first rendering
- ✅ Minimal, isolated islands
- ✅ Lazy hydration (`visible`, `idle`)
- ✅ Server-side computation
- ✅ HTML + CSS before JS
- ✅ Progressive enhancement

---

## 11. Decision Framework (VERY IMPORTANT)

For every feature:

1. Can this be static HTML?
   → YES → Use `.astro`

2. Does it require interaction?
   → NO → Stay static

3. Does it require JS?
   → YES → Create an island

4. When should it load?
   → Choose LOWEST priority `client:*`

---

## 12. Mental Model (Non-Negotiable)

- Astro is NOT:
  - Next.js
  - SPA framework
  - React-first system

- Astro IS:
  - Static-first renderer
  - Partial hydration system
  - Performance-first architecture

- Think:
  ❌ “Build an app”
  ✅ “Ship HTML + sprinkle JS”
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [astrojs](https://prompts.chat/prompts/astrojs) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | Frontend, JavaScript |
| Contributors | tuanductran |
| Updated At | 2026-03-22T06:57:19.283Z |
