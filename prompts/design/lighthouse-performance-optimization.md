# 灯塔和性能优化

## 中文说明

对构建的站点进行以性能为中心的分析，并生成可行的优化建议。这不仅仅是“运行 Lighthouse”，它还解释结果，根据影响与努力比确定修复的优先级，并提供可实施的解决方案。为需要向开发人员传达性能问题的设计师而编写。

## 使用场景

* 生成 UI/UX、视觉风格和设计规范
* 分析界面问题并提出改进方向
* 把需求转化为可执行的设计说明
* 围绕 ui-ux、design、Frontend 等主题生成结构化结果

## 适用人群

* 设计师
* 产品经理
* 前端开发者

## 中文 Prompt

```md
你是网络性能专家。分析该网站并提供
设计师可以理解的优化建议
开发人员可以立即实施。

## 输入
- **网站网址：** ${url}
- **当前已知问题：** [可选 - “移动速度慢”、“图像很大”]
- **目标分数：** [可选 —“LCP 低于 2.5 秒，CLS 低于 0.1”]
- **托管：** [Vercel / Netlify / 自定义服务器 / 不知道]

## 分析领域

### 1. 核心网络生命评估
对于每个指标，请解释：
- **它测量什么**（用简单的语言）
- **当前分数**（良好/需要改进/较差）
- **造成分数的原因**
- **如何修复它**（具体的、可操作的步骤）

指标：
- LCP（最大内容绘制）—“主要内容出现的速度有多快？”
- FID/INP（与下一个绘制的交互）-“它对点击的响应速度有多快？”
- CLS（累积布局偏移）——“加载时内容是否会跳跃？”

### 2. 图像优化
- 列出每张大于所需的图像
- 建议格式更改（PNG→WebP，未压缩→压缩）
- 识别缺失的响应式图像实现
- 标记在折叠上方加载的图像，没有优先级提示
- 建议延迟加载候选者

### 3.字体优化
- 字体文件大小和加载策略
- 子集机会（你需要全部 800 个字形吗？）
- 显示策略（交换、可选、后备）
- 自托管与 CDN 推荐

### 4. JavaScript 分析
- 包裹尺寸细分（什么重？）
- 未使用的 JavaScript 百分比
- 渲染阻塞脚本
- 第三方脚本影响

### 5. CSS 分析
- 未使用的 CSS 百分比
- 渲染阻塞样式表
- 关键的 CSS 提取机会

### 6. 缓存和交付
- 缓存标头存在且正确吗？
- CDN利用率
- 启用压缩（gzip/brotli）吗？

## 输出格式

### 快速摘要（针对客户/利益相关者）
3-4 句话：当前状态、最大问题、预期改进。

### 优化路线图
|优先|问题 |影响 |努力|如何修复 |
|----------|--------|--------|--------|-----------|
| 1 | ... |高|低| ${specific_steps} |
| 2 | ... | ... | ... | ... |

### 预期分数提高
|公制|当前|快速获胜之后 |全面优化后|
|--------|---------|-----------------|------------------------|
|性能| ... | ... | ... |
|液晶聚合物| ... | ... | ... |
| CLS | ... | ... | ... |

### 实施片段
对于前 5 个修复，请提供可复制粘贴的代码或配置。

约束条件：
- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。
```

---

## English Original

### Title

Lighthouse & Performance Optimization

### Description

Runs a performance-focused analysis of the built site and produces actionable optimization recommendations. This isn't just "run Lighthouse"  it interprets the results, prioritizes fixes by impact-to-effort ratio, and provides implementation-ready solutions. Written for a designer who needs to communicate performance issues to developers.

### Prompt

```md
You are a web performance specialist. Analyze this site and provide
optimization recommendations that a designer can understand and a
developer can implement immediately.

## Input
- **Site URL:** ${url}
- **Current known issues:** [optional — "slow on mobile", "images are huge"]
- **Target scores:** [optional — "LCP under 2.5s, CLS under 0.1"]
- **Hosting:** [Vercel / Netlify / custom server / don't know]

## Analysis Areas

### 1. Core Web Vitals Assessment
For each metric, explain:
- **What it measures** (in plain language)
- **Current score** (good / needs improvement / poor)
- **What's causing the score**
- **How to fix it** (specific, actionable steps)

Metrics:
- LCP (Largest Contentful Paint) — "how fast does the main content appear?"
- FID/INP (Interaction to Next Paint) — "how fast does it respond to clicks?"
- CLS (Cumulative Layout Shift) — "does stuff jump around while loading?"

### 2. Image Optimization
- List every image that's larger than necessary
- Recommend format changes (PNG→WebP, uncompressed→compressed)
- Identify missing responsive image implementations
- Flag images loading above the fold without priority hints
- Suggest lazy loading candidates

### 3. Font Optimization
- Font file sizes and loading strategy
- Subset opportunities (do you need all 800 glyphs?)
- Display strategy (swap, optional, fallback)
- Self-hosting vs CDN recommendation

### 4. JavaScript Analysis
- Bundle size breakdown (what's heavy?)
- Unused JavaScript percentage
- Render-blocking scripts
- Third-party script impact

### 5. CSS Analysis
- Unused CSS percentage
- Render-blocking stylesheets
- Critical CSS extraction opportunity

### 6. Caching & Delivery
- Cache headers present and correct?
- CDN utilization
- Compression (gzip/brotli) enabled?

## Output Format

### Quick Summary (for the client/stakeholder)
3-4 sentences: current state, biggest issues, expected improvement.

### Optimization Roadmap
| Priority | Issue | Impact | Effort | How to Fix |
|----------|-------|--------|--------|-----------|
| 1 | ... | High | Low | ${specific_steps} |
| 2 | ... | ... | ... | ... |

### Expected Score Improvement
| Metric | Current | After Quick Wins | After Full Optimization |
|--------|---------|-----------------|------------------------|
| Performance | ... | ... | ... |
| LCP | ... | ... | ... |
| CLS | ... | ... | ... |

### Implementation Snippets
For the top 5 fixes, provide copy-paste-ready code or configuration.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
