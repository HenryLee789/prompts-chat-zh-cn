---
id: "cmm1hzh340007jo04bip9zr7x"
slug: "app-store-screenshots-gallery-generator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/app-store-screenshots-gallery-generator"
category: "web-development"
category_name: "Web Development"
category_zh: "Web 开发"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "faf8563d094cf3c8274c9280e0cc7d3508356f68a8d261a9c16ce9a2a31bc23a"
upstream_updated_at: "2026-02-25T03:51:36.256Z"
---
# App Store 截图库生成器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[app-store-screenshots-gallery-generator](https://prompts.chat/prompts/app-store-screenshots-gallery-generator)  
> 分类：Web 开发（Web Development / `web-development`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

为 iOS/macOS/Android 应用程序创建一个专业的、可用于生产的屏幕截图库，看起来像是由排名前 1% 的应用程序开发人员设计的。单个 HTML 文件，无需构建步骤。

## 使用场景

- 用于Web 开发相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 swiftui、CSS、HTML、app-store 等主题快速生成可复用结果。

## 适用人群

- Web 开发者
- 前端工程师
- 产品经理
- 开发者

## 中文 Prompt 正文

````md
# App Store 截图库生成器

**为 iOS/macOS/Android 应用程序创建一个专业的、可用于生产的屏幕截图库，看起来像是由排名前 1% 的应用程序开发人员设计的。**

## 上下文

您正在为应用程序构建屏幕截图库页面。该项目的屏幕截图位于文件夹中（通常为 `screenshots/`、`fastlane/screenshots/` 或类似文件夹）。图库应该是一个可以部署到 Netlify、Vercel 或任何静态主机的 HTML 文件。

## 要求

### 1.设计系统基础

为以下对象创建 CSS 自定义属性（设计标记）：

- **颜色**：主调色板（50-900 色调）、辅助/强调调色板、中性灰色（50-900）
- **表面**：三个表面级别（表面 1、表面 2、表面 3）
- **版式**：两种字体堆栈（UI 元素为单色，正文为无字体）
- **间距**：一致的比例（4px 为基础）
- **边界**：半径比例（sm、md、lg、xl、2xl、3xl）
- **阴影**：五个标高级别（sm、md、lg、xl、2xl）
- **过渡**：三种速度（快速：150 毫秒，正常：300 毫秒，平滑：400 毫秒，带三次贝塞尔曲线）

### 2.布局架构

- **容器**：最大宽度 1600 像素，居中，具有响应式填充
- **网格**：使用 `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))` 的砖石风格响应式网格
- **差距**：桌面设备 2rem，平板电脑 1.5rem，移动设备 1rem
- **卡片纵横比**：保持一致的屏幕截图呈现

### 3. 标题部分

- **应用程序徽章**：带有图标和“IOS应用程序”或平台文本的小药丸形徽章
- **标题**：大而粗的应用程序名称，带有渐变文本处理
- **副标题**：一行描述提及关键技术和功能
- **背景**：微妙的网格图案叠加深度
- **填充**：减少垂直填充（顶部 3rem，底部 2rem），带来紧凑感

### 4. 截图卡

每张卡应具有：

- **容器**：白色/灰白色背景，圆角 (2xl)，微妙的阴影
- **图像容器**：渐变背景，带有白色边框的居中屏幕截图（8px）
- **悬停效果**：
  - 带有增强阴影的卡片升降机（-8px 平移Y）
  - 屏幕截图比例 (1.04) 轻微旋转 (0.5deg)
  - 出现顶部边框（渐变条）
  - 径向发光叠加淡入
- **元数据栏**：
  - 数字徽章（渐变背景，26px 正方形）
  - 设备名称（大写、小字体、单色字体）
- **标题**：粗体、单色字体、1rem
- **描述**：一行标题，较小的字体，微妙的颜色

### 5. 用户旅程排序

根据用户体验应用程序的方式对屏幕截图进行排序：

1. **登录/入门** - 用户看到的第一个屏幕
2. **Dashboard/Home** - 登录后主登陆
3. **主要功能视图** - 核心应用程序功能
4. **设置/配置** - 自定义屏幕
5. **权限/集成** - HealthKit、通知等。
6. **高级功能** - 同步、共享、云功能
7. **分析/报告** - 数据可视化屏幕
8. **存档/历史** - 历史数据视图

### 6. 动画

- **入口**：使用translateY 交错淡入（卡片之间延迟0.1 秒）
- **悬停**：平滑的三次贝塞尔曲线缓动（0.16、1、0.3、1）
- **滚动**：IntersectionObserver 在卡片进入视口时触发动画
- **性能**：使用 `will-change` 进行变换和不透明度

### 7.页脚

- **背景**：深色（中性-900），带有微妙的渐变叠加
- **边界半径**：仅限顶角 (2xl)
- **内容**：带图标的最小元数据（设备、日期、状态）
- **间距**：紧凑（2rem 填充）

### 8.响应断点

- **桌面** (>1280px)：4-5 列
- **平板电脑** (768-1280px)：2-3 列
- **移动** (<768px)：1 列，减少整个填充

### 9. 技术要求

- **单个 HTML 文件**：所有 CSS 内联在 `<style>` 标记中
- **仅限外部依赖**：
  - Pico.css（最小CSS框架）
  - 很棒的字体（图标）
  - 谷歌字体（Inter + IBM Plex Mono）
  - Animate.css（可选，用于附加动画）
- **无构建步骤**：必须作为静态 HTML 工作
- **性能**：优化动画，无布局变化
- **辅助功能**：语义 HTML、图像上的替代文本

### 10. 波兰细节

- **微妙的渐变**：背景径向深度（不是压倒性的）
- **边框处理**：1px 实心，具有 alpha 透明度
- **阴影分层**：深度的多个阴影值
- **版式**：标题上的紧密字母间距（-0.03em）
- **颜色一致性**：到处使用设计标记，没有硬编码值
- **图像呈现**：屏幕截图周围的白色边框，用于设备框架错觉

## 输出格式

使用以下命令生成单个 `index.html` 文件：

1.完整的HTML结构
2.带有设计标记的内联CSS
3.用于滚动动画的JavaScript（IntersectionObserver）
4.所有带有正确元数据的截图卡
5. 适合所有屏幕尺寸的响应式设计

## 屏幕截图卡结构示例

```html
<div class="screenshot-card">
    <div class="screenshot-img-container">
        <img src="screenshot-name.png" alt="Description" class="screenshot-img">
    </div>
    <div class="screenshot-info">
        <div class="screenshot-meta">
            <div class="screenshot-number">1</div>
            <div class="screenshot-device">iPhone 17 Pro Max</div>
        </div>
        <h3 class="screenshot-title">Screen Title</h3>
        <p class="screenshot-desc">One-line caption</p>
    </div>
</div>
```

## 与“人工智能”画廊的主要区别

❌ **避免**：
- 过多的渐变和颜色
- 浪费空间的大统计卡
- 详细描述和功能列表
- 部分分隔符和类别标题
- 压倒性的动画
- 间距不一致
- 通用图库摄影风格

✅ **模拟**：
- Apple App Store 产品页面
- Linear、Raycast、Super human 营销网站
- 极简、内容优先的设计
- 微妙、精致的互动
- 一致的视觉节奏
- 版式驱动的层次结构
- 留白作为设计元素

## 部署注意事项

- Gallery 应部署到 `project-root/screenshots-gallery/` 或类似的
- 包含 `.netlify` 文件夹和 `netlify.toml` 进行配置
- 所有屏幕截图应位于与 `index.html` 相同的文件夹中
- 无需构建过程 - 纯静态 HTML

---

**用法**：复制此提示并将其与以下内容一起提供给 AI 助手：
1. 项目中的截图文件列表
2.您的应用程序名称和一行描述
3. 平台（iOS、macOS、Android、Web）
4.使用的关键技术（SwiftUI、React Native、Flutter等）

人工智能将生成一个看起来经过专业设计的可投入生产的画廊。
````

---

## English Original

### Title

App Store Screenshots Gallery Generator

### Description

Create a professional, production-ready screenshots gallery for iOS/macOS/Android apps that looks like it was designed by the top 1% of app developers. Single HTML file, no build step required.

### Prompt

````md
# App Store Screenshots Gallery Generator

**Create a professional, production-ready screenshots gallery for an iOS/macOS/Android app that looks like it was designed by the top 1% of app developers.**

## Context

You are building a screenshots gallery page for an app. The project has screenshots in a folder (typically `screenshots/`, `fastlane/screenshots/`, or similar). The gallery should be a single HTML file that can be deployed to Netlify, Vercel, or any static host.

## Requirements

### 1. Design System Foundation

Create CSS custom properties (design tokens) for:

- **Colors**: Primary palette (50-900 shades), secondary/accent palette, neutral grays (50-900)
- **Surfaces**: Three surface levels (surface-1, surface-2, surface-3)
- **Typography**: Two-font stack (mono for UI elements, sans for body)
- **Spacing**: Consistent scale (4px base)
- **Borders**: Radius scale (sm, md, lg, xl, 2xl, 3xl)
- **Shadows**: Five elevation levels (sm, md, lg, xl, 2xl)
- **Transitions**: Three speeds (fast: 150ms, normal: 300ms, smooth: 400ms with cubic-bezier)

### 2. Layout Architecture

- **Container**: Max-width 1600px, centered, with responsive padding
- **Grid**: Masonry-style responsive grid using `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))`
- **Gap**: 2rem on desktop, 1.5rem tablet, 1rem mobile
- **Card aspect ratio**: Maintain consistent screenshot presentation

### 3. Header Section

- **App badge**: Small pill-shaped badge with icon and "IOS APPLICATION" or platform text
- **Title**: Large, bold app name with gradient text treatment
- **Subtitle**: One-line description mentioning key technologies and features
- **Background**: Subtle grid pattern overlay for depth
- **Padding**: Reduced vertical padding (3rem top, 2rem bottom) for compact feel

### 4. Screenshot Cards

Each card should have:

- **Container**: White/off-white background, rounded corners (2xl), subtle shadow
- **Image container**: Gradient background, centered screenshot with white border (8px)
- **Hover effects**:
  - Card lifts (-8px translateY) with enhanced shadow
  - Screenshot scales (1.04) with slight rotation (0.5deg)
  - Top border appears (gradient bar)
  - Radial glow overlay fades in
- **Metadata bar**:
  - Number badge (gradient background, 26px square)
  - Device name (uppercase, small font, mono font)
- **Title**: Bold, mono font, 1rem
- **Description**: One-line caption, smaller font, subtle color

### 5. User Journey Ordering

Order screenshots by how users experience the app:

1. **Login/Onboarding** - First screen users see
2. **Dashboard/Home** - Main landing after login
3. **Primary feature views** - Core app functionality
4. **Settings/Configuration** - Customization screens
5. **Permissions/Integrations** - HealthKit, notifications, etc.
6. **Advanced features** - Sync, sharing, cloud features
7. **Analytics/Reports** - Data visualization screens
8. **Archive/History** - Historical data views

### 6. Animations

- **Entrance**: Staggered fade-in with translateY (0.1s delays between cards)
- **Hover**: Smooth cubic-bezier easing (0.16, 1, 0.3, 1)
- **Scroll**: IntersectionObserver to trigger animations when cards enter viewport
- **Performance**: Use `will-change` for transform and opacity

### 7. Footer

- **Background**: Dark (neutral-900) with subtle gradient overlay
- **Border radius**: Top corners only (2xl)
- **Content**: Minimal metadata (device, date, status) with icons
- **Spacing**: Compact (2rem padding)

### 8. Responsive Breakpoints

- **Desktop** (>1280px): 4-5 columns
- **Tablet** (768-1280px): 2-3 columns
- **Mobile** (<768px): 1 column, reduced padding throughout

### 9. Technical Requirements

- **Single HTML file**: All CSS inline in `<style>` tag
- **External dependencies only**:
  - Pico.css (minimal CSS framework)
  - Font Awesome (icons)
  - Google Fonts (Inter + IBM Plex Mono)
  - Animate.css (optional, for additional animations)
- **No build step**: Must work as static HTML
- **Performance**: Optimized animations, no layout shift
- **Accessibility**: Semantic HTML, alt text on images

### 10. Polish Details

- **Subtle gradients**: Background radials for depth (not overwhelming)
- **Border treatment**: 1px solid with alpha transparency
- **Shadow layering**: Multiple shadow values for depth
- **Typography**: Tight letter-spacing on headings (-0.03em)
- **Color consistency**: Use design tokens everywhere, no hardcoded values
- **Image presentation**: White border around screenshots for device frame illusion

## Output Format

Generate a single `index.html` file with:

1. Complete HTML structure
2. Inline CSS with design tokens
3. JavaScript for scroll animations (IntersectionObserver)
4. All screenshot cards with proper metadata
5. Responsive design for all screen sizes

## Example Screenshot Card Structure

```html
<div class="screenshot-card">
    <div class="screenshot-img-container">
        <img src="screenshot-name.png" alt="Description" class="screenshot-img">
    </div>
    <div class="screenshot-info">
        <div class="screenshot-meta">
            <div class="screenshot-number">1</div>
            <div class="screenshot-device">iPhone 17 Pro Max</div>
        </div>
        <h3 class="screenshot-title">Screen Title</h3>
        <p class="screenshot-desc">One-line caption</p>
    </div>
</div>
```

## Key Differentiators from "AI-looking" Galleries

❌ **Avoid**:
- Excessive gradients and colors
- Large stat cards that waste space
- Verbose descriptions and feature lists
- Section dividers and category headers
- Overwhelming animations
- Inconsistent spacing
- Generic stock photography style

✅ **Emulate**:
- Apple App Store product pages
- Linear, Raycast, Superhuman marketing sites
- Minimalist, content-first design
- Subtle, refined interactions
- Consistent visual rhythm
- Typography-driven hierarchy
- White space as design element

## Deployment Notes

- Gallery should deploy to `project-root/screenshots-gallery/` or similar
- Include `.netlify` folder with `netlify.toml` for configuration
- All screenshots should be in the same folder as `index.html`
- No build process required - pure static HTML

---

**Usage**: Copy this prompt and provide it to an AI assistant along with:
1. The list of screenshot files in your project
2. Your app name and one-line description
3. The platform (iOS, macOS, Android, web)
4. Key technologies used (SwiftUI, React Native, Flutter, etc.)

The AI will generate a production-ready gallery that looks professionally designed.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [app-store-screenshots-gallery-generator](https://prompts.chat/prompts/app-store-screenshots-gallery-generator) |
| Category | Web Development (`web-development`) |
| Type | `TEXT` |
| Tags | swiftui, CSS, HTML, app-store, gallery, screenshots, android, ios |
| Contributors | agileinnov8tor |
| Updated At | 2026-02-25T03:51:36.256Z |
