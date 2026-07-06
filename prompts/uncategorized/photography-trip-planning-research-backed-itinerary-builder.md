---
id: "cmr2g3yw90001l7048veoh3xd"
slug: "photography-trip-planning-research-backed-itinerary-builder"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/photography-trip-planning-research-backed-itinerary-builder"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "f99c4405942748a5203ccb6be710d62cf08464f553572997f9e7c114e0cd6712"
upstream_updated_at: "2026-07-01T19:10:19.666Z"
---
# 摄影旅行规划 — 研究支持的行程构建器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[photography-trip-planning-research-backed-itinerary-builder](https://prompts.chat/prompts/photography-trip-planning-research-backed-itinerary-builder)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

针对旅行摄影师的研究支持的旅行计划提示。涵盖摄影风格分析、位置研究标准、Atlas Obscura 过滤、光照计时计算和可选的生产交付成果（PowerPoint、Excel、Google 地图 CSV）。在轻量级模式（仅文本计划）或完整生产模式（需要 Node.js 和 Python）下工作。与 Claude、ChatGPT、Gemini 或任何现代法学硕士兼容。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
# 摄影旅行计划提示
## 旅行摄影师可重复使用的模板
### v1.0

---

> **使用此模板的两种方法：**
>
> **轻量级模式** — 跳过所有标记为 `${optional}` 的部分以及整个技术说明部分。填写您的风格简介和旅行详细信息，然后向克劳德询问基于文本的研究简介和日常时间表。无需编写脚本。
>
> **完整生产模式** — 使用每个部分。 Claude 将制作一个 PowerPoint 幻灯片（通过 Node.js + pptxgenjs）、一个 Excel 工作簿（通过 Python + openpyxl）和 Google 地图 CSV — 所有这些都采用颜色编码并经过质量检查。需要从命令行轻松运行脚本。
>
> 在两种模式下：填写标记为 `${fill_in}` 的每个部分。标记为 `${example}` 的部分显示了完整条目的外观 - 将其替换为您自己的详细信息。如果与您的工作流程不相关，则可以删除标记为 `${optional}` 的部分。

---

## 我是谁

我是一名旅行摄影师，计划[有/没有]同伴旅行。我的名字是${fill_in}。我使用 [FILL IN — 例如，佳能 EOS R5 和索尼 A7IV] 进行拍摄。我的旅行镜头套件：[填写 — 例如，16-35 毫米宽、24-70 毫米标准、100 毫米微距]。我旅行时会携带[填写——例如碳纤维旅行三脚架/无三脚架/紧凑型大猩猩脚架]。我的旅行包是[填写 — 例如，带有相机立方体插件的 Peak Design 旅行背包 45L]。

---

## 我的摄影风格

这是最重要的部分。在建议任何地点之前请仔细阅读。

**The core subject:** [FILL IN — Describe the through-line of your work.你拍摄什么以及为什么？是什么吸引您关注某个主题？]

> ${example}：我拍摄那些经久不衰的事物——结构、风景和存在于时间之外的时刻。我作品的主线是建造或居住的事物，这些事物现在已经超出了它们最初的目的，但仍然存在。

**技术签名：** [填写 - 列出您一致的成分和技术选择。]

> ${example}：
> - Symmetrical or near-symmetrical composition with a strong central vanishing point
> - Low angle or looking straight up to exaggerate scale and eliminate horizon
> - 用于比例的单个人物，而不是作为主要主题
> - 长时间曝光或慢速快门可将水、云和人群中的运动拉出来
> - 用于结构和腐烂主题的黑白；当调色板本身是主题时的颜色
> - 强烈的色调对比 - 我打印深色
> - 事物的底面、内部骨架和结构骨骼比正面更让我感兴趣

**重复主题类别：** [填写 - 列出您经常寻找的地点和主题的类型。]

> ${example}：
> - 腐烂和遗弃——那些已经失去其用途的东西
> - Sacred spaces with weight and edge — not pretty churches, spaces where something happened
> - 旧与工业的并置
> - 地下和地下空间——现代城市下方的地窖、隧道、古代地层
> - 几何结构形式——桥梁、桥墩、拱门、重复元素
> - 安静而空旷的街道 - 我在人群到来之前拍摄
> - Atlas Obscura 类型的地点 — 不寻常的、隐藏的、被遗忘的

**我一贯避免的：** [填写 - 列出您不希望推荐的内容。]

> ${example}：
> - 著名景点明信片装框
> - 摆出的主题
> - 柔和或感伤的灯光
> - 拥挤的旅游景点是主要目标
> - 市场按计划停止（可能会被绊倒）

---

## 旅行伴侣 ${optional}

**${fill_in_or_delete_this_section}** — 如果您与同伴一起旅行，请在此处描述他们的兴趣，以便 Claude 制定适合你们俩的计划，而不是与同行的摄影师的行程。

> ${example}：我的妻子和我一起旅行。她喜欢精品店购物（不是连锁店或百货商店）、开胃酒文化、在感觉当地的地方漫步，以及不寻常的文化体验，包括骨库和地下墓穴。她热衷于人迹罕至的地方。将共同的经历融入到计划中——她不是一个需要管理的单独行程。

---

## 旅行

**目的地：** [填写 — 例如，“葡萄牙：里斯本、波尔图、辛特拉”]
**Departure:** [FILL IN — e.g., "LAX, Sept 16, 3:05 PM"]
**返回：** [填写 — 例如，“LHR，9 月 28 日上午 9:50”]
**出境到达：** [填写 — 例如，“LIS（里斯本），9 月 17 日，上午 8:30”]
**城市和夜晚：** [填写 — 例如，“里斯本 4 晚，波尔图 3 晚，辛特拉一日游”]
**城市到城市的交通：** [填写 — 例如，“火车，里斯本到波尔图 ~3 小时”]
**Base neighborhoods:** [FILL IN, or ask Claude to recommend based on your shooting targets and companion interests]

---

## 我想要克劳德建造什么

### 1. PowerPoint 幻灯片 [可选 — 需要 Node.js 和 pptxgenjs]

> 此交付成果旨在让用户能够轻松运行 Node.js 脚本。如果您想要更简单的输出，请将此部分替换为对格式化文档或 PDF 的请求。

**格式：** LAYOUT_WIDE（13.3 x 7.5 英寸），使用 Node.js 中的 pptxgenjs 构建。 Dark header bar on content slides with accent color labels.部分分隔幻灯片是全深色背景。封面上的版本号和文件名。

**幻灯片标题中的徽章：**
- 红色徽章：“★ 需要提前预订”——适用于需要预购门票的地点
- 绿色徽章：“★ ATLAS OBSCURA”——本着这种精神，代表不寻常/隐藏的地点
- 金横幅：“共享体验 - 不是主要摄影目标” - 有意义的共享访问

**幻灯片包括：**
- 封面（行程标题、城市、日期、版本号）
- 行程概览表（日期、经过验证的星期几、活动、备注）
- 每个城市的灯光时间表（蓝色时间开始，黄金时间开始，日出，日落，黄金时间结束，蓝色时间结束 - 使用Python星体库计算，精确坐标，实际旅行日期）
- 对于每个城市：
  - 城市部分分隔线
  - Base camp slide (why this neighborhood, proximity to shooting targets, highlights nearby, transit)
  - Location slides for each confirmed shooting target (about, key notes, shot list, unconventional perspectives)
  - Shared experience slides for meaningful non-photography visits
  - High viewpoints slide (card layout, 3 viewpoints, flag confirmed closures)
  - Daily schedule slide(s) — split across multiple slides if more than 14 rows;按类别进行颜色编码
  - Optional day trips slide (card layout, flag Atlas Obscura picks)
- Tickets and booking slide (3 columns: book in advance / pay on day / free)
- 齿轮列表幻灯片
- 开胃酒/美食吧幻灯片 — 按城市列出的特定地点，仅限本地精选，附有地址和说明 [可选 — 如果与您的目的地不相关，则删除]
- Shared activities slide (one column per city) ${optional}

**计划颜色编码：**
- 黎明前拍摄：深蓝色/浅蓝色文字
- Aperitivo/Food: dark purple / light purple text
- Shared Activity/Food/Shopping: dark gold / light gold text
- Free Roam/Optional: dark green / light green text
- Train Travel/Flight: dark gray / light gray text
- 休息/早餐/结帐：中灰色
- Advance Booking Required: dark red / light red text

---

### 2. Excel 工作簿 [可选 — 需要 Python 和 openpyxl]

> 该交付成果旨在帮助用户轻松运行 Python 脚本。

5 个选项卡：MASTER（按时间顺序排列的完整行程，包括旅行天数）、每个城市一个选项卡、LEGEND。
列：日期、日、城市、时间、活动、类别、持续时间、注释。
与时间表幻灯片相同的颜色编码。将窗格冻结在 A2、隐藏网格线、自动过滤标题。

---

### 3. Google 地图 CSV — 每个城市一个 ${optional}

列：名称、描述、类别、最佳时间、纬度、经度、地址。

**关键：** 使用带有 utf-8 编码的 Python csv.writer。没有特殊字符 — 仅纯 ASCII。在包含之前验证坐标。

类别：拍摄地点、共享活动、基地、高视角、交通、可选一日游、关闭 - 请勿使用、Atlas Obscura 可选。

**文件命名约定：** ${destination}-trip-${year}-v[N].pptx / .xlsx / city-locations.csv。每次重建时增加版本号。

---

## 地点研究标准

### 对于每个拍摄地点，请提供：
1. **描述** — 它是什么、为什么它对摄影很重要、最佳条件、与我的风格简介（如果相关）的联系
2. **镜头列表** — 4-5 个值得获得的标准镜头
3. **非传统视角** — 大多数摄影师错过的 3-4 个角度或方法，与我上面的风格简介相匹配
4. **要点** — 时间、通道、成本、交通、与其他目标的接近程度
5. **最佳时间** — 黎明前/清晨/早上/下午/黄金时段

### 对于每个城市，还要研究：
- 最好的基地社区（平衡与射击目标的距离和同伴的兴趣）
- 高视角（可公开访问的最高视角，标高和成本；确认当前状态）
- 可选的一日游（符合我的审美和同伴兴趣的 3-4 个选项）
- 真正符合我风格的 Atlas Obscura 地点 — 仔细筛选，并非所有内容都合格
- 当地特定的餐饮场所：仅限当地精选，不面向游客，包含名称、地址以及值得一去的原因

### 研究和验证要求：
- **在包含之前验证所有位置是否存在** - 网络搜索您不确定的任何位置
- **确认当前访问状态** — 在推荐任何景点或景点之前搜索关闭情况
- **一周中的天数：**始终使用实际旅行年份的 Python 日期时间进行计算。永远不要猜测。
- **光照计时：** 始终使用 Python 星体库使用精确的城市坐标和旅行日期进行计算。永远不要估计。
- **票价和预订窗口：** 搜索当前价格 - 不依赖训练数据
- **不要产生幻觉** — 如果不确定事实，请搜索或说出来

---

## ATLAS OBSCURA APPROACH

过滤器 Atlas Obscura 会严格根据您的上述风格进行挑选。使用这些作为通常有效和无效的指南：

**非常适合不寻常/隐藏的位置：**
- 地下或地下空间（地窖、隧道、古代地层）
- 废弃或腐烂的空间（前机构、工业废墟）
- 骨教堂和骨库
- Hidden architectural anomalies
- 进入神秘的神圣空间

**Weak fits — generally avoid:**
- 奇特的博物馆，没有很强的视觉潜力
- 历史上有趣但在摄影上不引人注目的地点
- 任何需要非法访问的内容 - 如果访问不确定并标记以供研究

---

## 规划过程

请遵循以下顺序：

1. 如果没有提供，请询问旅行日期、城市和交通
2. 在做其他事情之前先用 Python 验证星期几
3. 使用Python astral计算所有拍摄日的光照时间
4. 研究并提出拍摄地点——根据我的风格档案进行筛选——在建造前要求确认
5. 研究并提出每个城市的基地社区——要求确认
6. Research Atlas Obscura 按城市挑选 — 通过诚实的适合度评估提出建议
7. 研究每个城市特定的当地餐饮场所
8. 确定提前预订要求和预订窗口
9.制定时间表——黎明前拍摄、分享经验、吃饭、空闲时间
10. 一次性构建所有可交付成果：PowerPoint、Excel、CSV
11. 交付前对幻灯片进行质量检查：通过 soffice 转换为 PDF，然后 pdftoppm -jpeg -r 120，查看每张幻灯片的图像

**批量更改，然后重建。** 在触摸任何文件之前确认所有更改。避免增量重建。

---

## 技术说明 [可选 — 仅在使用 PowerPoint、Excel 或 CSV 可交付成果时相关]

### pptxgenjs：
- 切勿将 lambda 作为位置 y 参数传递给辅助函数 - 使用带有显式坐标的内联 `s.addText()`
- 始终将 `valign: "top"` 添加到项目符号列表文本框
- 每个项目符号数组的最后一项必须明确包含 `options: { bullet: true }`
- 切勿在十六进制颜色值中使用 `#` — 无需哈希值即可通过
- 每次重建时进行质量检查：`soffice --headless --convert-to pdf`，然后是 `pdftoppm -jpeg -r 120`，交付前进行审查

### openpyxl：
- 使用 `PatternFill("solid")` 填充所有单元格
- 将所有数据表上的 A2 窗格冻结
- 在所有工作表上设置 `showGridLines = False`
- 自动过滤标题行

### CSV：
- 始终使用带有 utf-8 编码的 Python `csv.writer`
- 无特殊字符 — 仅纯 ASCII
- 在包含之前验证坐标是否准确

### 日程安排：
- 如果数据行超过 14 个，则将任何城市时间表拆分为多张幻灯片

---

## 风格偏好

[填写——描述您的总体规划理念。下面的例子。]

> ${example}:
> - 质量重于数量——更少、更丰富的地点胜过全面的列表
> - 物流摩擦最小化——当目标可以聚集时，不要穿越城市
> - 真实而不是面向游客 - 如果存在访问量较少的同等产品，请推荐它
> - 黎明前进入是优先事项
> - 非凡胜过著名 — Atlas Obscura 贯穿始终的感性
> - 当对事实有疑问时，在回答之前先搜索

---

*模板改编自意大利工作旅行计划工作流程。专为需要研究支持、可立即制作的旅行计划（而不是列表文章）的旅行摄影师而设计。*
```

---

## English Original

### Title

Photography Trip Planning — Research-Backed Itinerary Builder

### Description

A research-backed trip planning prompt for travel photographers. Covers photographic style profiling, location research standards, Atlas Obscura filtering, light timing calculation, and optional production deliverables (PowerPoint, Excel, Google Maps CSVs). Works in lightweight mode (text plan only) or full production mode (requires Node.js and Python). Compatible with Claude, ChatGPT, Gemini, or any modern LLM.



### Prompt

```md
# Photography Trip Planning Prompt
## Reusable Template for Travel Photographers
### v1.0

---

> **Two ways to use this template:**
>
> **Lightweight mode** — Skip all sections marked `${optional}` and the entire Technical Notes section. Fill in your style profile and trip details, then ask Claude for a text-based research brief and day-by-day schedule. No scripting required.
>
> **Full production mode** — Use every section. Claude will produce a PowerPoint slide deck (via Node.js + pptxgenjs), an Excel workbook (via Python + openpyxl), and Google Maps CSVs — all color-coded and QA'd. Requires comfort running scripts from the command line.
>
> In both modes: fill in every section marked `${fill_in}`. Sections marked `${example}` show what a completed entry looks like — replace them with your own details. Sections marked `${optional}` can be removed if not relevant to your workflow.

---

## WHO I AM

I am a travel photographer planning a trip [with / without] a companion. My name is ${fill_in}. I shoot with [FILL IN — e.g., Canon EOS R5 and Sony A7IV]. My lens kit for travel: [FILL IN — e.g., 16-35mm wide, 24-70mm standard, 100mm macro]. I travel with [FILL IN — e.g., a carbon fiber travel tripod / no tripod / a compact gorilla-pod]. My travel bag is [FILL IN — e.g., Peak Design Travel Backpack 45L with camera cube insert].

---

## MY PHOTOGRAPHIC STYLE

This is the most important section. Read it carefully before suggesting any locations.

**The core subject:** [FILL IN — Describe the through-line of your work. What do you photograph and why? What draws you to a subject?]

> ${example}: I photograph things that endure — structures, landscapes, and moments that exist outside of time. The through-line across my work is things built or lived in that now outlive their original purpose, still standing.

**Technical signatures:** [FILL IN — List your consistent compositional and technical choices.]

> ${example}:
> - Symmetrical or near-symmetrical composition with a strong central vanishing point
> - Low angle or looking straight up to exaggerate scale and eliminate horizon
> - A single human figure used for scale, not as the primary subject
> - Long exposure or slow shutter to pull motion out of water, clouds, and crowds
> - B&W for structural and decay subjects; color when the palette itself is the subject
> - Strong tonal contrast — I print dark
> - The underside, interior skeleton, and structural bones of things interest me more than facades

**Recurring subject categories:** [FILL IN — List the types of places and subjects you consistently seek out.]

> ${example}:
> - Decay and abandonment — things that have outlived their purpose
> - Sacred spaces with weight and edge — not pretty churches, spaces where something happened
> - Old-meets-industrial juxtapositions
> - Underground and subterranean spaces — crypts, tunnels, ancient layers beneath modern cities
> - Geometric structural form — bridges, piers, arches, repeating elements
> - Quiet and empty streets — I shoot before crowds arrive
> - Atlas Obscura-type locations — the unusual, the hidden, the forgotten

**What I consistently avoid:** [FILL IN — List what you do not want recommended.]

> ${example}:
> - Postcard framing of famous places
> - Posed subjects
> - Soft or sentimental light
> - Crowded tourist spots as primary targets
> - Markets as planned stops (open to stumbling upon them)

---

## TRAVEL COMPANION ${optional}

**${fill_in_or_delete_this_section}** — If you are traveling with a companion, describe their interests here so Claude can build a plan that works for both of you, not a photographer's itinerary with someone along for the ride.

> ${example}: My wife travels with me. She enjoys boutique shopping (not chains or department stores), aperitivo culture, neighborhood wandering in places that feel local, and unusual cultural experiences including ossuaries and catacombs. She is game for off-the-beaten-path locations. Build shared experiences into the plan — she is not a separate itinerary to manage.

---

## THE TRIP

**Destination:** [FILL IN — e.g., "Portugal: Lisbon, Porto, Sintra"]
**Departure:** [FILL IN — e.g., "LAX, Sept 16, 3:05 PM"]
**Return:** [FILL IN — e.g., "LHR, Sept 28, 9:50 AM"]
**Outbound arrival:** [FILL IN — e.g., "LIS (Lisbon), Sept 17, 8:30 AM"]
**Cities and nights:** [FILL IN — e.g., "Lisbon 4 nights, Porto 3 nights, Sintra day trip"]
**City-to-city transport:** [FILL IN — e.g., "Train, Lisbon to Porto ~3 hrs"]
**Base neighborhoods:** [FILL IN, or ask Claude to recommend based on your shooting targets and companion interests]

---

## WHAT I WANT CLAUDE TO BUILD

### 1. PowerPoint Slide Deck [OPTIONAL — requires Node.js and pptxgenjs]

> This deliverable is for users comfortable running Node.js scripts. If you want a simpler output, replace this section with a request for a formatted document or PDF.

**Format:** LAYOUT_WIDE (13.3 x 7.5 inches), built with pptxgenjs in Node.js. Dark header bar on content slides with accent color labels. Section divider slides are full dark background. Version number on cover and filename.

**Badges in slide header:**
- Red badge: "★ ADVANCE BOOKING REQUIRED" — for locations requiring pre-purchase tickets
- Green badge: "★ ATLAS OBSCURA" — for unusual/hidden locations in that spirit
- Gold banner: "SHARED EXPERIENCE — not a primary photography target" — for meaningful shared visits

**Slides to include:**
- Cover (trip title, cities, dates, version number)
- Itinerary overview table (date, verified day of week, event, notes)
- Light timing table per city (blue hour start, golden hour start, sunrise, sunset, golden hour end, blue hour end — calculated with Python astral library, exact coordinates, actual trip dates)
- For each city:
  - City section divider
  - Base camp slide (why this neighborhood, proximity to shooting targets, highlights nearby, transit)
  - Location slides for each confirmed shooting target (about, key notes, shot list, unconventional perspectives)
  - Shared experience slides for meaningful non-photography visits
  - High viewpoints slide (card layout, 3 viewpoints, flag confirmed closures)
  - Daily schedule slide(s) — split across multiple slides if more than 14 rows; color-coded by category
  - Optional day trips slide (card layout, flag Atlas Obscura picks)
- Tickets and booking slide (3 columns: book in advance / pay on day / free)
- Gear list slide
- Aperitivo/food bars slide — specific named venues by city, local picks only, with address and description [OPTIONAL — remove if not relevant to your destination]
- Shared activities slide (one column per city) ${optional}

**Schedule color coding:**
- Pre-Dawn Shoot: dark blue / light blue text
- Aperitivo/Food: dark purple / light purple text
- Shared Activity/Food/Shopping: dark gold / light gold text
- Free Roam/Optional: dark green / light green text
- Train Travel/Flight: dark gray / light gray text
- Rest/Breakfast/Checkout: medium gray
- Advance Booking Required: dark red / light red text

---

### 2. Excel Workbook [OPTIONAL — requires Python and openpyxl]

> This deliverable is for users comfortable running Python scripts.

5 tabs: MASTER (full trip chronologically including travel days), one tab per city, LEGEND.
Columns: Date, Day, City, Time, Activity, Category, Duration, Notes.
Same color coding as schedule slides. Freeze panes at A2, hide gridlines, auto-filter on headers.

---

### 3. Google Maps CSVs — one per city ${optional}

Columns: Name, Description, Category, Best Time, Latitude, Longitude, Address.

**Critical:** Use Python csv.writer with utf-8 encoding. No special characters — plain ASCII only. Verify coordinates before including.

Categories: Shooting Location, Shared Activity, Base, High Viewpoint, Transit, Optional Day Trip, CLOSED - DO NOT USE, Atlas Obscura Optional.

**File naming convention:** ${destination}-trip-${year}-v[N].pptx / .xlsx / city-locations.csv. Increment version number on each rebuild.

---

## LOCATION RESEARCH STANDARDS

### For each shooting location, provide:
1. **Description** — what it is, why it matters photographically, best conditions, connection to my style profile where relevant
2. **Shot list** — 4–5 standard shots worth getting
3. **Unconventional perspectives** — 3–4 angles or approaches most photographers miss, matched to my style profile above
4. **Key notes** — hours, access, cost, transit, proximity to other targets
5. **Best time** — pre-dawn / early morning / morning / afternoon / golden hour

### For each city, also research:
- The best base neighborhood (balancing proximity to shooting targets and companion interests)
- High viewpoints (highest publicly accessible, with elevation and cost; confirm current status)
- Optional day trips (3–4 options matched to both my aesthetic and companion interests)
- Atlas Obscura locations that genuinely fit my style — filter carefully, not everything qualifies
- Specific local food/drink venues: local picks only, not tourist-facing, with name, address, and what makes them worth going to

### Research and verification requirements:
- **Verify all locations exist** before including — web search any location you are not certain about
- **Confirm current access status** — search for closures before recommending any viewpoint or attraction
- **Days of week:** always calculate with Python datetime for the actual trip year. Never guess.
- **Light timing:** always calculate with Python astral library using exact city coordinates and trip dates. Never estimate.
- **Ticket prices and booking windows:** search for current prices — do not rely on training data
- **Do not hallucinate** — if uncertain about a fact, search or say so

---

## ATLAS OBSCURA APPROACH

Filter Atlas Obscura picks strictly against your style profile above. Use these as a guide for what typically works and what doesn't:

**Strong fits for unusual/hidden locations:**
- Underground or subterranean spaces (crypts, tunnels, ancient layers)
- Abandoned or decaying spaces (former institutions, industrial ruins)
- Bone chapels and ossuaries
- Hidden architectural anomalies
- Sacred spaces that have crossed into the uncanny

**Weak fits — generally avoid:**
- Quirky museums without strong visual potential
- Locations that are historically interesting but not photographically compelling
- Anything requiring illegal access — note if access is uncertain and flag for research

---

## PLANNING PROCESS

Follow this order:

1. Ask for trip dates, cities, and transport if not provided
2. Verify days of week with Python before doing anything else
3. Calculate light timing with Python astral for all shooting days
4. Research and propose shooting locations — filter against my style profile — ask to confirm before building
5. Research and propose base neighborhoods per city — ask to confirm
6. Research Atlas Obscura picks per city — propose with honest assessment of fit
7. Research specific local food/drink venues per city
8. Identify advance booking requirements and booking windows
9. Build the schedule — pre-dawn shoots, shared experiences, meals, free time
10. Build all deliverables in one go: PowerPoint, Excel, CSVs
11. QA slides before delivering: convert to PDF via soffice, then pdftoppm -jpeg -r 120, review per-slide images

**Batch changes, then rebuild.** Confirm all changes before touching any files. Avoid incremental rebuilds.

---

## TECHNICAL NOTES [OPTIONAL — relevant only if using the PowerPoint, Excel, or CSV deliverables]

### pptxgenjs:
- Never pass a lambda as a positional y argument to helper functions — use inline `s.addText()` with explicit coordinates
- Always add `valign: "top"` to bulleted list text boxes
- Every bullet array's last item must include `options: { bullet: true }` explicitly
- Never use `#` in hex color values — pass without the hash
- QA every rebuild: `soffice --headless --convert-to pdf`, then `pdftoppm -jpeg -r 120`, review before delivering

### openpyxl:
- Use `PatternFill("solid")` for all cell fills
- Freeze panes at A2 on all data sheets
- Set `showGridLines = False` on all sheets
- Auto-filter on header rows

### CSVs:
- Always use Python `csv.writer` with utf-8 encoding
- No special characters — plain ASCII only
- Verify coordinates are accurate before including

### Schedule splits:
- Split any city schedule across multiple slides if more than 14 data rows

---

## STYLE PREFERENCES

[FILL IN — describe your general planning philosophy. Examples below.]

> ${example}:
> - Quality over quantity — fewer, richer locations beat comprehensive lists
> - Minimal logistics friction — don't route across a city when targets can be clustered
> - Authentic over tourist-facing — if a less-visited equivalent exists, recommend it
> - Pre-dawn access is a priority
> - The unusual over the famous — Atlas Obscura sensibility throughout
> - When in doubt about a fact, search before answering

---

*Template adapted from a working Italy trip planning workflow. Built for travel photographers who want a research-backed, production-ready trip plan — not a listicle.*

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [photography-trip-planning-research-backed-itinerary-builder](https://prompts.chat/prompts/photography-trip-planning-research-backed-itinerary-builder) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | elpicoso |
| Updated At | 2026-07-01T19:10:19.666Z |
