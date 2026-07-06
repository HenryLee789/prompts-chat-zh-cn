---
id: "cml0r6rqg0004jg04v37di6kv"
slug: "create-icons"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/create-icons"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "eb49606803a7ed168c5bff6a48b58aeaa44718b5bfc3560a2f8bc8619f139469"
upstream_updated_at: "2026-01-30T15:23:35.900Z"
---
# 创建图标

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[create-icons](https://prompts.chat/prompts/create-icons)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

为您的应用程序提供高质量图标。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Nano Banana、Art、Content Creation、Business 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

````md
用于跑步和健身应用程序的高级 iOS 应用程序图标，具有 
一个程式化的抽象跑步者人物在运动，由流动组成 
充满活力的珊瑚中的渐变丝带过渡到充满活力 
洋红色。该图显示了速度和前进动力 
尾随运动元素。背景是深海军蓝色， 
人物背后微妙的径向渐变灯光。动态， 
精力充沛、有抱负。柔和的灯光，周围有微妙的光芒 
图。圆角方形格式，1024x1024 像素。

请遵循以下规格和随附的示例图标设计：

这些规范定义了顶级 iOS/macOS 应用程序中优质、现代应用程序图标的视觉语言。我们的目标是制作出精美、令人难忘且值得旗舰产品的图标。

---

## 1. 画布和形状

### 基础形状
- **格式：** 具有连续圆角的正方形（iOS“squircle”）
- **圆角半径：** 大约为图标宽度的 22-24%（模仿 Apple 的超椭圆）
- **纵横比：** 1:1
- **推荐分辨率：** 1024×1024px（干净地缩小）

### 安全区
- 将主要元素保持在画布中心 80% 的范围内
- 允许微妙的效果（发光、阴影）接近边缘但不剪辑

---

## 2. 背景处理

### 纯色背景
- **深色/黑色：** 纯黑色 (#000000) 到深木炭色 (#1C1C1E) — 创造戏剧性，使元素流行
- **充满活力的固体：** 饱和单色填充（电蓝色#007AFF，暖橙色#FF9500）
- **渐变背景：** 微妙的从上到下或径向渐变增加深度

### 渐变类型（使用时）
|类型 |描述 |示例|
|------|-------------|---------|
|线性|软过渡，通常顶部较轻 |蓝天渐变|
|径向|中心发光效果，边缘较暗 |聚光灯效果|
|角度|全面的色彩过渡 |彩虹色表面 |

### 纹理（微妙）
- 精细的垂直/水平线条，带来金属或织物的感觉
- 1-3% 不透明度的噪点颗粒可实现有机温暖
- 避免与主要符号竞争的沉重纹理

---

## 3. 调色板

### 主要调色板特征
- **高饱和度：**颜色鲜艳，但不是霓虹灯
- **丰富的深色：** 黑色和海军蓝占主导地位
- **选择性明亮：** 谨慎使用强调色以产生影响

### 推荐颜色系列

#### 酷光谱
```
Navy/Deep Blue:    #0A1628, #1A2744, #2D4A7C
Electric Blue:     #007AFF, #5AC8FA, #64D2FF
Purple/Violet:     #5E5CE6, #BF5AF2, #AF52DE
Teal/Cyan:         #30D5C8, #5AC8FA, #32ADE6
```

#### 暖光谱
```
Orange:            #FF9500, #FF6B35, #FF3B30
Pink/Coral:        #FF6B8A, #FF2D55, #FF375F
Peach/Salmon:      #FFACA8, #FF8A80, #FFB199
```

#### 中性色
```
True Black:        #000000
Soft Black:        #1C1C1E, #2C2C2E
White:             #FFFFFF
Off-White:         #F5F5F7, #E5E5EA
```

### 色彩和谐规则
- 每个图标限制为 2-3 个主色
- 使用互补或类似关系
- 一种颜色应占主导地位（60%），次要颜色（30%），重点颜色（10%）

---

## 4. 光照和深度

### 光源
- **位置：** 左上角或正上方（一致的 45° 角）
- **质量：** 柔和、漫射 — 无刺眼阴影
- **创建：** 上表面上有微妙的高光，下面有阴影

### 深度技巧

#### 亮点
- 3D 表格顶部边缘的柔和白色/浅色渐变
- 镜面反射为小亮点（不过强）
- 面向光的边缘的边缘照明

#### 阴影
- **阴影：** 柔和、漫射、10-20% 不透明度、轻微 Y 偏移
- **内阴影：** 非常微妙，增加了凹进效果
- **接触阴影：** 物体正下方的更暗、更紧密的阴影

#### 分层
- 元素应该看起来漂浮在背景上方
- 使用大气透视（远处的元素稍微模糊）
- 重叠的形状创造自然的层次结构

---

## 5. 符号和图像

### 风格方法

#### A. 维度/3D 对象
- 柔软、圆润的形状和清晰的体积
- 微妙的渐变暗示曲率
- 示例：纸飞机、打开的书、球体

#### B. 带有深度提示的降调
- 具有策略性阴影/高光的简化形状
- 干净的几何形状，带有轻微的梯度
- 示例：火焰图标、指南针表盘

#### C. 抽象/几何
- 重叠的半透明形状
- 连锁形式创造视觉趣味
- 示例：重叠的菱形、三角形组合

#### D. 玻璃态/半透明
- 磨砂玻璃效果模糊
- 看起来具有透明度的形状
- 轻微的折射和渗色

### 符号特征
- **简单性：** 可在 16×16px 下识别
- **平衡：** 视觉重量集中或有意动态
- **原创性：**避免通用剪贴画的感觉
- **隐喻：** 符号明显与应用程序功能相关

### 推荐的符号比例
- 主要符号：图标画布的 50-70%
- 在边缘留出呼吸空间
- 光学中心（可能与数学中心不同）

---

## 6. 材料和表面质量

### 哑光表面
- 柔和的渐变，没有尖锐的亮点
- 可能有微妙的纹理
- 颜色显得扎实且接地气

### 光泽/反光表面
- 明显的亮点和反思
- 增加明暗区域之间的对比度
- 建议玻璃、塑料或抛光金属

### 金属表面
- 模仿金属光泽的线性或径向渐变
- 银色/铬色为冷色调，金色/青铜色为暖色调
- 精细纹理线条可选

### 玻璃/半透明
- 降低不透明度 (60-85%)
- 后面元素的模糊效果
- 带有浅色边缘的彩色色调
- 微妙的内发光

### 纸/织物
- 柔和、柔和的色彩
- 非常微妙的纹理
- 柔和的阴影暗示灵活性

---

## 7. 效果和润色

### 发光效果
- **外发光：** 明亮元素周围的柔和光晕，5-15% 不透明度
- **内发光：** 微妙的边缘照明，创造体积感
- **彩色发光：** 有色发光匹配元素颜色（营造氛围）

### 思考
- 漂浮物体下方的微妙地板反射（非常微弱）
- 光滑表面上的环境反射
- 镜面高光暗示光源

### 形状内的渐变
- 用于复杂颜色过渡的多级渐变
- 球形外观的径向渐变
- 用于有机、流体着色的网格渐变

### 模糊和景深
- 分层构图的背景模糊
- 5-20px 的高斯模糊以获得大气效果
- 仅在建议运动时运动模糊

---

## 8. 组成原则

### 视觉平衡
- **居中：** 符号位于光学中心（经典，稳定）
- **动态：** 轻微偏移产生能量和运动
- **不对称：** 视觉平衡的故意不平衡

### 负空间
- 宽敞的空白/呼吸空间
- 背景是设计的一部分，而不仅仅是空的
- 负空间可以形成二次形状

### 焦点
- 一个对比度/细节最高的清晰区域
- 眼睛应该首先落在最重要的元素上
- 支撑元素在视觉上后退

### 比例对比
- 大大小小的元素的混合创造了兴趣
- 主要符号占主导地位，细节微妙
- 避免相同大小的元素造成混乱

---

## 9. 风格变化

### 最小黑暗
- 黑色或非常暗的背景
- 单个明亮元素或单色符号
- 高对比度，戏剧性的感觉
- 示例：火焰图标、股票图表

### 充满活力的渐变
- 多色渐变背景
- 顶部有白色或浅色符号
- 充满活力、现代感
- 示例：电报、图书应用程序

### 柔软轻便
- 浅色、通风的背景（白色、柔和的）
- 带有柔和阴影的彩色符号
- 友好、平易近人的感觉
- 示例：海拔应用程序、手势图标

### 玻璃形态
- 半透明磨砂元素
- 具有不同不透明度的分层形状
- 现代、精致的感觉
- 示例：快捷方式图标、重叠形状

### 3D 渲染
- 逼真的 3D 物体
- 复杂的照明和材质
- 优质、有形的感觉
- 示例：球体、飞机、书籍
````

---

## English Original

### Title

Create Icons

### Description

High quality icons for your apps.

### Prompt

````md
A premium iOS app icon for a running and fitness app, featuring 
a stylized abstract runner figure in motion, composed of flowing 
gradient ribbons in energetic coral transitioning to vibrant 
magenta. The figure suggests speed and forward momentum with 
trailing motion elements. Background is a deep navy blue with 
subtle radial gradient lighter behind the figure. Dynamic, 
energetic, aspirational. Soft lighting with subtle glow around 
figure. Rounded square format, 1024x1024px.

follow the specs below and the example icon designs attached:

These specifications define the visual language of premium, modern app icons as seen in top-tier iOS/macOS applications. The goal is to produce icons that feel polished, memorable, and worthy of a flagship product.

---

## 1. Canvas & Shape

### Base Shape
- **Format:** Square with continuous rounded corners (iOS "squircle")
- **Corner Radius:** Approximately 22-24% of icon width (mimics Apple's superellipse)
- **Aspect Ratio:** 1:1
- **Recommended Resolution:** 1024×1024px (scales down cleanly)

### Safe Zone
- Keep primary elements within the center 80% of the canvas
- Allow subtle effects (glows, shadows) to approach edges but not clip

---

## 2. Background Treatments

### Solid Backgrounds
- **Dark/Black:** Pure black (#000000) to deep charcoal (#1C1C1E) — creates drama, makes elements pop
- **Vibrant Solids:** Saturated single-color fills (electric blue #007AFF, warm orange #FF9500)
- **Gradient Backgrounds:** Subtle top-to-bottom or radial gradients adding depth

### Gradient Types (when used)
| Type | Description | Example |
|------|-------------|---------|
| Linear | Soft transition, typically lighter at top | Blue sky gradient |
| Radial | Center glow effect, darker edges | Spotlight effect |
| Angular | Sweeping color transition | Iridescent surfaces |

### Texture (Subtle)
- Fine vertical/horizontal lines for metallic or fabric feel
- Noise grain at 1-3% opacity for organic warmth
- Avoid heavy textures that compete with the main symbol

---

## 3. Color Palette

### Primary Palette Characteristics
- **High Saturation:** Colors are vivid but not neon
- **Rich Darks:** Blacks and navy blues feature prominently
- **Selective Brights:** Accent colors used sparingly for impact

### Recommended Color Families

#### Cool Spectrum
```
Navy/Deep Blue:    #0A1628, #1A2744, #2D4A7C
Electric Blue:     #007AFF, #5AC8FA, #64D2FF
Purple/Violet:     #5E5CE6, #BF5AF2, #AF52DE
Teal/Cyan:         #30D5C8, #5AC8FA, #32ADE6
```

#### Warm Spectrum
```
Orange:            #FF9500, #FF6B35, #FF3B30
Pink/Coral:        #FF6B8A, #FF2D55, #FF375F
Peach/Salmon:      #FFACA8, #FF8A80, #FFB199
```

#### Neutrals
```
True Black:        #000000
Soft Black:        #1C1C1E, #2C2C2E
White:             #FFFFFF
Off-White:         #F5F5F7, #E5E5EA
```

### Color Harmony Rules
- Limit to 2-3 dominant colors per icon
- Use complementary or analogous relationships
- One color should dominate (60%), secondary (30%), accent (10%)

---

## 4. Lighting & Depth

### Light Source
- **Position:** Top-left or directly above (consistent 45° angle)
- **Quality:** Soft, diffused — no harsh shadows
- **Creates:** Subtle highlights on upper surfaces, shadows below

### Depth Techniques

#### Highlights
- Soft white/light gradient on top edges of 3D forms
- Specular reflections as small, bright spots (not overpowering)
- Rim lighting on edges facing the light

#### Shadows
- **Drop Shadows:** Soft, diffused, 10-20% opacity, slight Y offset
- **Inner Shadows:** Very subtle, adds recessed effect
- **Contact Shadows:** Darker, tighter shadows directly beneath objects

#### Layering
- Elements should appear to float above the background
- Use atmospheric perspective (distant elements slightly hazier)
- Overlapping shapes create natural hierarchy

---

## 5. Symbol & Iconography

### Style Approaches

#### A. Dimensional/3D Objects
- Soft, rounded forms with clear volume
- Subtle gradients suggesting curvature
- Examples: Paper airplane, open book, spheres

#### B. Flat with Depth Cues
- Simplified shapes with strategic shadows/highlights
- Clean geometry with slight gradients
- Examples: Flame icon, compass dial

#### C. Abstract/Geometric
- Overlapping translucent shapes
- Interlocking forms creating visual interest
- Examples: Overlapping diamonds, triangular compositions

#### D. Glassmorphic/Translucent
- Frosted glass effect with blur
- Shapes that appear to have transparency
- Subtle refraction and color bleeding

### Symbol Characteristics
- **Simplicity:** Recognizable at 16×16px
- **Balance:** Visual weight centered or intentionally dynamic
- **Originality:** Avoid generic clip-art feeling
- **Metaphor:** Symbol clearly relates to app function

### Recommended Symbol Scale
- Primary symbol: 50-70% of icon canvas
- Leave breathing room around edges
- Optical centering (may differ from mathematical center)

---

## 6. Material & Surface Qualities

### Matte Surfaces
- Soft gradients without sharp highlights
- Subtle texture possible
- Colors appear solid and grounded

### Glossy/Reflective Surfaces
- Pronounced highlights and reflections
- Increased contrast between light and dark areas
- Suggests glass, plastic, or polished metal

### Metallic Surfaces
- Linear or radial gradients mimicking metal sheen
- Cool tones for silver/chrome, warm for gold/bronze
- Fine texture lines optional

### Glass/Translucent
- Reduced opacity (60-85%)
- Blur effect on elements behind
- Colored tint with light edges
- Subtle inner glow

### Paper/Fabric
- Soft, muted colors
- Very subtle texture
- Gentle shadows suggesting flexibility

---

## 7. Effects & Polish

### Glow Effects
- **Outer Glow:** Soft halo around bright elements, 5-15% opacity
- **Inner Glow:** Subtle edge lighting, creates volumetric feel
- **Color Glow:** Tinted glow matching element color (creates ambiance)

### Reflections
- Subtle floor reflection beneath floating objects (very faint)
- Environmental reflections on glossy surfaces
- Specular highlights suggesting light source

### Gradients Within Shapes
- Multi-stop gradients for complex color transitions
- Radial gradients for spherical appearance
- Mesh gradients for organic, fluid coloring

### Blur & Depth of Field
- Background blur for layered compositions
- Gaussian blur at 5-20px for atmospheric effect
- Motion blur only if suggesting movement

---

## 8. Composition Principles

### Visual Balance
- **Centered:** Symbol sits in optical center (classical, stable)
- **Dynamic:** Slight offset creates energy and movement
- **Asymmetric:** Intentional imbalance with visual counterweight

### Negative Space
- Generous whitespace/breathing room
- Background is part of the design, not just empty
- Negative space can form secondary shapes

### Focal Point
- One clear area of highest contrast/detail
- Eye should land on most important element first
- Supporting elements recede visually

### Scale Contrast
- Mix of large and small elements creates interest
- Primary symbol dominates, details are subtle
- Avoid cluttering with equal-sized elements

---

## 9. Style Variations

### Minimal Dark
- Black or very dark background
- Single bright element or monochromatic symbol
- High contrast, dramatic feel
- Examples: Flame icon, stocks chart

### Vibrant Gradient
- Multi-color gradient backgrounds
- White or light symbols on top
- Energetic, modern feel
- Examples: Telegram, Books app

### Soft & Light
- Light, airy backgrounds (white, pastels)
- Colorful symbols with soft shadows
- Friendly, approachable feel
- Examples: Altitude app, gesture icons

### Glassmorphic
- Translucent, frosted elements
- Layered shapes with varying opacity
- Contemporary, sophisticated feel
- Examples: Shortcuts icon, overlapping shapes

### 3D Rendered
- Realistic 3D objects
- Complex lighting and materials
- Premium, tangible feel
- Examples: Sphere, airplane, book

````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [create-icons](https://prompts.chat/prompts/create-icons) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | Nano Banana, Art, Content Creation, Business, Marketing |
| Contributors | semih |
| Updated At | 2026-01-30T15:23:35.900Z |
