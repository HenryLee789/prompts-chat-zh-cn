# 代币架构

## 中文说明

从第 1 阶段获取原始 JSON 审计，并将其转换为具有清晰层次结构（原始 → 语义 → 组件）的结构化命名令牌系统。这就是代码库的混乱现实被组织成适当的设计语言的地方。 Claude 还将标记要重命名、合并或弃用的内容。

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
你是一名设计系统架构师。我向你提供来自现有代码库的原始设计审核 JSON。你的工作是将这种混乱转变为结构化的代币架构。

## 输入
[在此处粘贴第 1 阶段 JSON 输出，或引用该文件]

## 代币层次结构

设计一个三层代币系统：

### 第 1 层 — 原始令牌（原始值）
命名的、不可变的值。没有语义意义。
- 颜色：`color-gray-100`、`color-blue-500`
- 间距：`space-1` 至 `space-N`
- 字体大小：`font-size-xs` 到 `font-size-4xl`
- 半径：`radius-sm`、`radius-md`、`radius-lg`

### 第 2 层 — 语义标记（上下文含义）
将原语映射到目的。这些在主题之间变化。
- `color-text-primary` → `color-gray-900`
- `color-bg-surface` → `color-white`
- `color-border-default` → `color-gray-200`
- `spacing-section` → `space-16`
- `font-heading` → `font-size-2xl` + `font-weight-bold` + `line-height-tight`

### 第 3 层 — 组件令牌（范围仅限于组件）
- `button-padding-x` → `spacing-4`
- `button-bg-primary` → `color-brand-500`
- `card-radius` → `radius-lg`
- `input-border-color` → `color-border-default`

## 合并规则
1. 合并彼此 2px 以内的值（例如，14px 和 15px → 选择一个，记下哪个）
2.建立一致的间距比例（建议4px为基础，标记偏差）
3. 将调色板减少到 ≤60 个总标记（标记要弃用的内容）
4. 将字体大小标准化为逻辑级数
5. 根据一次性值创建命名动画预设

## 输出格式

提供：
1. **JSON 格式的完整令牌映射** — 所有三层均带有引用
2. **迁移表** — 当前值→新令牌名称→哪些文件使用它
3. **弃用列表** — 要删除并建议替换的值
4. **决策日志** — 你做出的每个判断（为什么将 X 合并到 Y 等）

对于每个决定，请解释权衡。我可能不同意你的合并
选择，因此透明度比信心更重要。
```

---

## English Original

### Title

Token Architecture

### Description

Takes the raw JSON audit from Phase 1 and transforms it into a structured, named token system with a clear hierarchy (primitive → semantic → component). This is where the messy reality of the codebase gets organized into a proper design language. Claude will also flag what to rename, merge, or deprecate.

### Prompt

```md
You are a design systems architect. I'm providing you with a raw design audit JSON from an existing codebase. Your job is to transform this chaos into a structured token architecture.

## Input
[Paste the Phase 1 JSON output here, or reference the file]

## Token Hierarchy

Design a 3-tier token system:

### Tier 1 — Primitive Tokens (raw values)
Named, immutable values. No semantic meaning.
- Colors: `color-gray-100`, `color-blue-500`
- Spacing: `space-1` through `space-N`
- Font sizes: `font-size-xs` through `font-size-4xl`
- Radii: `radius-sm`, `radius-md`, `radius-lg`

### Tier 2 — Semantic Tokens (contextual meaning)
Map primitives to purpose. These change between themes.
- `color-text-primary` → `color-gray-900`
- `color-bg-surface` → `color-white`
- `color-border-default` → `color-gray-200`
- `spacing-section` → `space-16`
- `font-heading` → `font-size-2xl` + `font-weight-bold` + `line-height-tight`

### Tier 3 — Component Tokens (scoped to components)
- `button-padding-x` → `spacing-4`
- `button-bg-primary` → `color-brand-500`
- `card-radius` → `radius-lg`
- `input-border-color` → `color-border-default`

## Consolidation Rules
1. Merge values within 2px of each other (e.g., 14px and 15px → pick one, note which)
2. Establish a consistent spacing scale (4px base recommended, flag deviations)
3. Reduce color palette to ≤60 total tokens (flag what to deprecate)
4. Normalize font size scale to a logical progression
5. Create named animation presets from one-off values

## Output Format

Provide:
1. **Complete token map** in JSON — all three tiers with references
2. **Migration table** — current value → new token name → which files use it
3. **Deprecation list** — values to remove with suggested replacements
4. **Decision log** — every judgment call you made (why you merged X into Y, etc.)

For each decision, explain the trade-off. I may disagree with your consolidation
choices, so transparency matters more than confidence.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
