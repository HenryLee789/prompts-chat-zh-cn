# 启动前清单生成器

## 中文说明

生成一个全面的、特定于项目的预启动清单，涵盖设计师在上线前应验证的每个类别。它不是一个通用列表，而是根据特定项目的技术堆栈、功能和要求量身定制的。

## 使用场景

* 生成 UI/UX、视觉风格和设计规范
* 分析界面问题并提出改进方向
* 把需求转化为可执行的设计说明
* 围绕 design、ui-ux 等主题生成结构化结果

## 适用人群

* 设计师
* 产品经理
* 前端开发者

## 中文 Prompt

```md
你是发射准备专家。生成全面的
针对该特定项目量身定制的启动前清单。

## 项目背景
- **项目：** [名称、类型、描述]
- **技术堆栈：** [框架、托管、服务]
- **特点：** ${key_features_that_need_verification}
- **启动类型：** [软启动/公开启动/客户端切换]
- **域名：** [DNS 是否已配置？]

## 生成清单覆盖范围：

### 功能
- 所有关键用户流程端到端工作
- 所有表格均正确提交并显示适当的反馈
- 支付流程有效（如果适用）——使用真实沙箱进行测试
- 身份验证有效（登录、注销、密码重置、会话过期）
- 邮件通知正确发送（检查垃圾邮件文件夹）
- 第三方集成正确响应
- bug 处理有效（当事情发生时会发生什么？）

### 内容和副本
- 没有剩余的 lorem ipsum
- 所有链接均有效（无 404）
- 存在法律页面（隐私政策、条款、cookie 同意）
- 联系方式正确
- 当前版权年份
- 社交媒体链接指向正确的个人资料
- 所有图像都有替代文本
- 网站图标已设置（所有尺寸）

### 视觉占位符扫描 🔴
扫描整个代码库和部署站点以获取占位符视觉资产
必须在发射前更换。这是一个关键类别——
实时网站上的占位符图像比拼写错误更具破坏性。

**代码库扫描 - 搜索这些模式：**
- URL 包含：`placeholder`、`via.placeholder.com`、`placehold.co`、
  `picsum.photos`、`unsplash.it/random`、`dummyimage.com`、`placekitten`、
  `placebear`、`fakeimg`
- 文件名包含：`placeholder`、`dummy`、`sample`、`example`、
  `temp`、`test-image`、`default-`、`no-image`
- Next.js / Vercel 默认值：`public/next.svg`、`public/vercel.svg`、
  `public/thirteen.svg`、`app/favicon.ico`（如果仍然是 Next.js 默认值）
- 框架样板图像仍在 `public/` 文件夹中
- 没有真实图像的硬编码尺寸：`width={400} height={300}`
  与灰色 div 配对或缺少 src
- SVG 占位符模式：用作临时图像填充的内联 SVG
  （通常是灰色矩形，中心有一个图标）

**组件级检查：**
- 头像组件回退到通用用户图标 - 是后备
  设计的还是图书馆默认的？
- 具有 `image?: string` 道具的卡组件 — 没有时渲染的内容
  图片通过了？是设计好的空状态还是损坏的布局？
- 英雄/横幅部分 - 背景图像是最终的还是开发示例？
- 产品/产品组合网格 - 是所有使用真实图像的项目还是部分项目
  仍然使用相同的重复测试图像？
- 徽标组件 - 它是最终的徽标文件还是文本占位符？
- OG 图像（`og:image` 元标签）——它是设计资产还是
  框架/托管默认值？

**第三方和CDN检查：**
- 从仅用于开发的 CDN 加载的图像（例如 `picsum.photos`）
- 库存照片水印仍然可见（搜索 >500kb 的图像
  可能是未购买的库存）
- 替代文本中包含 `lorem` 或 `test` 的图像

**输出格式要求：**
生成一个包含找到的每个占位符的表格：

| ＃|文件路径 |线路|类型 |当前值|严重程度 |需要采取行动|
|---|------------|------|------|----------------|---------|---------------|
| 1 | `src/app/page.tsx` | 42 | 42图片网址 | `via.placeholder.com/800x400` | 🔴 关键 |替换为英雄图片 |
| 2 | `public/favicon.ico` | — |框架默认| Next.js 默认图标 | 🔴 关键 |替换为品牌图标 |
| 3 | `src/components/Card.tsx` | 18 | 18缺少后备|没有图像 = 布局损坏 | 🟡高|设计空态|

严重级别：
- 🔴 关键：关键页面上的用户可见（英雄、首屏、OG 图片）
- 🟡 高：正常使用时用户可见（卡片、头像、内容图像）
- 🟠 中：在边缘情况下可见（空状态、bug页面、后备）
- ⚪ 低：仅在代码中，不面向用户（测试装置、仅限开发的路线）

### SEO 和元数据
- 页面标题独特且具有描述性
- 为每个页面编写元描述
- 用于社交共享的开放图标签（使用共享debug器进行测试）
- Robots.txt配置正确
- Sitemap.xml 存在并已提交
- 设置规范 URL
- 结构化数据/模式标记（如果适用）

### 性能
- Lighthouse 分数达到目标
- 图像经过优化且响应灵敏
- 字体加载效率高
- 生产构建中没有控制台bug
- 已安装分析并进行跟踪

### 安全
- 强制执行 HTTPS（无混合内容）
- 环境变量在生产中设置
- 前端代码中没有公开 API 密钥
- 表单速率限制（防止垃圾邮件）
- CORS配置正确
- CSP 标头（如果适用）

### 跨平台
- 测试环境：Chrome、Safari、Firefox（最新）
- 测试环境：iOS Safari、Android Chrome
- 在关键断点处进行测试
- 打印样式表（如果用户可以打印）

### 基础设施
- 域已连接并且 SSL 处于活动状态
- 配置来自 www/非 www 的重定向
- 设计了404页面（非默认）
- 设计了bug页面（500，维护）
- 配置备份（数据库，如果适用）
- 设置监控/正常运行时间检查

### 移交（如果是客户项目）
- 客户可以访问所有帐户（托管、域、分析）
- 文档完整（FORGOKBEY.md 或同等文件）
- 安排或记录培训
- 支持/维护协议明确

## 输出格式
Markdown 清单包含：
- [ ] 每个项目作为可勾选项
- 按类别分组
- 关键项目的优先级标志（🔴必须在发布前修复）
- 每个项目都包含一行“如何验证”注释
```

---

## English Original

### Title

Pre-Launch Checklist Generator

### Description

Generates a comprehensive, project-specific pre-launch checklist covering every category a designer should verify before going live. Not a generic list it's tailored to the specific project's tech stack, features, and requirements.

### Prompt

```md
You are a launch readiness specialist. Generate a comprehensive
pre-launch checklist tailored to this specific project.

## Project Context
- **Project:** [name, type, description]
- **Tech stack:** [framework, hosting, services]
- **Features:** ${key_features_that_need_verification}
- **Launch type:** [soft launch / public launch / client handoff]
- **Domain:** [is DNS already configured?]

## Generate Checklist Covering:

### Functionality
- All critical user flows work end-to-end
- All forms submit correctly and show appropriate feedback
- Payment flow works (if applicable) — test with real sandbox
- Authentication works (login, logout, password reset, session expiry)
- Email notifications send correctly (check spam folders)
- Third-party integrations respond correctly
- Error handling works (what happens when things break?)

### Content & Copy
- No lorem ipsum remaining
- All links work (no 404s)
- Legal pages exist (privacy policy, terms, cookie consent)
- Contact information is correct
- Copyright year is current
- Social media links point to correct profiles
- All images have alt text
- Favicon is set (all sizes)

### Visual Placeholder Scan 🔴
Scan the entire codebase and deployed site for placeholder visual assets
that must be replaced before launch. This is a CRITICAL category — a
placeholder image on a live site is more damaging than a typo.

**Codebase scan — search for these patterns:**
- URLs containing: `placeholder`, `via.placeholder.com`, `placehold.co`,
  `picsum.photos`, `unsplash.it/random`, `dummyimage.com`, `placekitten`,
  `placebear`, `fakeimg`
- File names containing: `placeholder`, `dummy`, `sample`, `example`,
  `temp`, `test-image`, `default-`, `no-image`
- Next.js / Vercel defaults: `public/next.svg`, `public/vercel.svg`,
  `public/thirteen.svg`, `app/favicon.ico` (if still the Next.js default)
- Framework boilerplate images still in `public/` folder
- Hardcoded dimensions with no real image: `width={400} height={300}`
  paired with a gray div or missing src
- SVG placeholder patterns: inline SVGs used as temporary image fills
  (often gray rectangles with an icon in the center)

**Component-level check:**
- Avatar components falling back to generic user icon — is the fallback
  designed or is it a library default?
- Card components with `image?: string` prop — what renders when no
  image is passed? Is it a designed empty state or a broken layout?
- Hero/banner sections — is the background image final or a dev sample?
- Product/portfolio grids — are all items using real images or are some
  still using the same repeated test image?
- Logo component — is it the final logo file or a text placeholder?
- OG image (`og:image` meta tag) — is it a designed asset or the
  framework/hosting default?

**Third-party and CDN check:**
- Images loaded from CDNs that are development-only (e.g., `picsum.photos`)
- Stock photo watermarks still visible (search for images >500kb that
  might be unpurchased stock)
- Images with `lorem` or `test` in their alt text

**Output format:**
Produce a table of every placeholder found:

| # | File Path | Line | Type | Current Value | Severity | Action Needed |
|---|-----------|------|------|---------------|----------|---------------|
| 1 | `src/app/page.tsx` | 42 | Image URL | `via.placeholder.com/800x400` | 🔴 Critical | Replace with hero image |
| 2 | `public/favicon.ico` | — | Framework default | Next.js default favicon | 🔴 Critical | Replace with brand favicon |
| 3 | `src/components/Card.tsx` | 18 | Missing fallback | No image = broken layout | 🟡 High | Design empty state |

Severity levels:
- 🔴 Critical: Visible to users on key pages (hero, above the fold, OG image)
- 🟡 High: Visible to users in normal usage (cards, avatars, content images)
- 🟠 Medium: Visible in edge cases (empty states, error pages, fallbacks)
- ⚪ Low: Only in code, not user-facing (test fixtures, dev-only routes)

### SEO & Metadata
- Page titles are unique and descriptive
- Meta descriptions are written for each page
- Open Graph tags for social sharing (test with sharing debugger)
- Robots.txt is configured correctly
- Sitemap.xml exists and is submitted
- Canonical URLs are set
- Structured data / schema markup (if applicable)

### Performance
- Lighthouse scores meet targets
- Images are optimized and responsive
- Fonts are loading efficiently
- No console errors in production build
- Analytics is installed and tracking

### Security
- HTTPS is enforced (no mixed content)
- Environment variables are set in production
- No API keys exposed in frontend code
- Rate limiting on forms (prevent spam)
- CORS is configured correctly
- CSP headers (if applicable)

### Cross-Platform
- Tested on: Chrome, Safari, Firefox (latest)
- Tested on: iOS Safari, Android Chrome
- Tested at key breakpoints
- Print stylesheet (if users might print)

### Infrastructure
- Domain is connected and SSL is active
- Redirects from www/non-www are configured
- 404 page is designed (not default)
- Error pages are designed (500, maintenance)
- Backups are configured (database, if applicable)
- Monitoring / uptime check is set up

### Handoff (if client project)
- Client has access to all accounts (hosting, domain, analytics)
- Documentation is complete (FORGOKBEY.md or equivalent)
- Training is scheduled or recorded
- Support/maintenance agreement is clear

## Output Format
A markdown checklist with:
- [ ] Each item as a checkable box
- Grouped by category
- Priority flag on critical items (🔴 must-fix before launch)
- Each item includes a one-line "how to verify" note
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
