---
id: "cmq5b1zzi0004la04htszgti1"
slug: "shadcn-component-adapter-for-cursor"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/shadcn-component-adapter-for-cursor"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "d9de37ad8c9ef5dd3cda65d6b0d7f1a7cc17dbd96100b9aef67003df927be208"
upstream_updated_at: "2026-06-08T16:20:34.474Z"
---
# shadcn 光标组件适配器

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[shadcn-component-adapter-for-cursor](https://prompts.chat/prompts/shadcn-component-adapter-for-cursor)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于Vibe Coding场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
# shadcn 组件视觉适配器

## 🎯 目标
重构位于 `${component_file_path}` 的现有 `${component_name}` 组件，以匹配参考组件的**视觉设计、结构和行为**：

> ${install_command:bunx --bun shadcn@latest add accordion}
${reference_url:} ← 可选；如果不存在文档页面，则留空

不要替换业务逻辑、现有的 props 接口或数据获取模式。保护它们。
仅适应**视觉层**：标记结构、类名称、动画和可访问性属性。

---

## 📋 步骤 1 — 分析现有组件

在编写任何代码之前：

1. 阅读`${component_file_path}`的完整源码。
2. 绘制地图：
   - 所有 **props 及其类型**（TypeScript 接口或 PropTypes）。
   - 内部**状态变量**（`useState`、`useReducer`、Zustand 切片等）。
   - **消耗上下文提供者或自定义挂钩**。
   - **子组件**呈现及其所在位置。
   - **事件处理程序**和向父级公开的回调。
3. 列出每个 **import** — 标记任何与 shadcn 原语冲突或可以被 shadcn 原语替换的内容。

在接触任何代码之前输出一个简短的审计表：

|项目 |当前值|行动|
|------|--------------|--------|
|道具| ... |保留/重命名/删除 |
|状态| ... |保留/迁移|
|上下文/挂钩 | ... |保留/替换|
|子组件| ... |保留/替换|
|依赖关系 | ... |保留/安装/删除|

---

## 📦 步骤 2 — 依赖解析

直接运行安装命令：

${install_command}

命令完成后，生成的文件将出现在
${components_dir:components/ui}/.使用这些文件继续执行步骤 3。

---

## 🔬 步骤 3 — 查看参考组件

如果提供了 ${reference_url} → 获取它并像以前一样提取视觉规范。

IF ${reference_url} 为空→读取CLI命令下载的文件
在步骤2中直接从源代码中提取相同的信息：
  - cva变体模式
  - 数据状态/数据禁用属性
  - 动画/过渡类
  - ARIA角色和道具
  - cn() 使用模式

---

## 🛠 步骤 4 — 重构组件

将步骤 3 中的视觉结构应用到步骤 1 中的现有组件。

### 规则：
- ✅ 保留所有**现有的 prop 名称和类型**，除非存在直接的 shadcn 等效项。
- ✅ 保留所有**数据获取、业务逻辑和回调**。
- ✅ 使用 **`forwardRef`** 包裹 Radix 原语并展开 `...props` 以保持灵活性。
- ✅ 使用 `cn()` 进行所有类名合并 — 切勿使用字符串连接。
- ✅ 如果参考组件使用命名复合子组件（例如 `Accordion`、`AccordionItem`、`AccordionTrigger`、`AccordionContent`），则导出它们。
- ❌ 不要导入生成的 shadcn 文件并重新导出它 — 在重构文件中构建内联原语以保持逻辑位于同一位置。
- ❌ 未经明确指示，请勿添加参考组件中不存在的 Tailwind 类。

### 响应行为 (`${responsive_breakpoints:sm md lg}`)：
应用移动优先响应类。确认 `tailwind.config.ts` 中的当前断点符合项目的约定。如果引用使用容器查询，请安装 `@tailwindcss/container-queries`。

---

## 🧩 步骤 5 — 上下文提供者和 Hooks

如果参考组件需要上下文提供程序（例如，`ToastProvider`、`TooltipProvider`）：

1. 检查`${provider_file:app/layout.tsx}`或`${provider_file:app/providers.tsx}`中是否已安装。
2. 如果没有，请将其添加到相应的布局文件中。提供准确的差异。
3. 如果需要自定义挂钩（例如 `useToast`、`useDialog`），请将其放置在 `${hooks_dir:hooks/}` 中并从那里导入。

---

## ❓ 第 6 步 — 澄清问题（如果未知，则在生成前询问）

如果从现有代码中无法确定以下任何内容，**在编写之前询问**：

1. **Data/props**：将传递什么形状的数据？ （如果有帮助，请提供示例对象。）
2. **状态管理**：组件状态是本地的，还是外部管理的（Zustand、Redux、React Query）？
3. **资产**：是否有 lucide-react 未涵盖的所需图像、徽标或自定义图标？
4. **响应式**：`${responsive_breakpoints:sm md lg}` 断点处的预期布局是什么？
5. **放置**：该组件将位于应用程序路由/布局树中的哪个位置？ （对于上下文提供者的放置很重要。）

---

## 📐 步骤 7 — 输出格式

提供结果为：

1. **`${component_file_path}`** — 完全重构的组件文件。
2. **`${components_dir:components/ui}/${shadcn_component_slug}.tsx`** — shadcn 原语（仅当需要且不是由 CLI 生成时）。
3. **`lib/utils.ts`** — 仅当需要创建或更新时。
4. **布局/提供程序差异** — 仅当需要添加提供程序时。
5. 简短的**迁移说明**部分列表：
   - 删除了依赖项
   - 重命名的道具（如果有）
   - 所需的任何手动步骤（例如，将 CSS 变量添加到 `globals.css`）

---

## 🎨 Tailwind CSS 变量（shadcn 设计令牌）

确认 `globals.css` 包含所需的 CSS 自定义属性。如果参考组件使用 `--radius`、`--background`、`--foreground`、`--primary`、`--ring` 等标记，请附加缺少的变量。除非项目已经定义了自定义主题，否则请使用 `${color_theme:zinc}` 的 shadcn 默认令牌集。

---

## 🚫 约束

- 框架：**${framework:Next.js 14+ App Router}**
- 样式：仅限 **Tailwind CSS ${tailwind_version:3}** — 无内联样式、无 CSS 模块、无样式组件。
- TypeScript：**严格模式**。所有新代码都必须完整键入。
- 除非存在直接的对等冲突，否则请勿升级或降级任何现有依赖项版本。
```

---

## English Original

### Title

shadcn Component Adapter for Cursor

### Description



### Prompt

```md
# shadcn Component Visual Adapter

## 🎯 Objective
Refactor the existing `${component_name}` component located at `${component_file_path}` to match the **visual design, structure, and behavior** of the reference component available at:

> ${install_command:bunx --bun shadcn@latest add accordion}
${reference_url:}   ← optional; leave blank if no docs page exists

Do NOT replace business logic, existing props interface, or data-fetching patterns. Preserve them.
Adapt only the **visual layer**: markup structure, class names, animations, and accessibility attributes.

---

## 📋 Step 1 — Analyze the Existing Component

Before writing any code:

1. Read the full source of `${component_file_path}`.
2. Map out:
   - All **props and their types** (TypeScript interfaces or PropTypes).
   - Internal **state variables** (`useState`, `useReducer`, Zustand slices, etc.).
   - **Context providers or custom hooks** consumed.
   - **Child components** rendered and where they live.
   - **Event handlers** and callbacks exposed to the parent.
3. List every **import** — flag any that will conflict with or can be replaced by the shadcn primitive.

Output a brief audit table before touching any code:

| Item | Current value | Action |
|------|--------------|--------|
| Props | ... | keep / rename / remove |
| State | ... | keep / migrate |
| Context/Hooks | ... | keep / replace |
| Sub-components | ... | keep / replace |
| Dependencies | ... | keep / install / remove |

---

## 📦 Step 2 — Dependency Resolution

Run the install command directly:

${install_command}

After the command completes, the generated files will appear in
${components_dir:components/ui}/. Proceed to Step 3 using those files.

---

## 🔬 Step 3 — Review Reference Component

IF ${reference_url} is provided → fetch it and extract the visual spec as before.

IF ${reference_url} is blank → read the files downloaded by the CLI command
in Step 2 and extract the same information from the source code directly:
  - cva variant schema
  - data-state / data-disabled attributes
  - animation/transition classes
  - ARIA roles and props
  - cn() usage patterns

---

## 🛠 Step 4 — Refactor the Component

Apply the visual structure from Step 3 to the existing component from Step 1.

### Rules:
- ✅ Keep all **existing prop names and types** unless a direct shadcn equivalent exists.
- ✅ Keep all **data-fetching, business logic, and callbacks**.
- ✅ Wrap Radix primitives using **`forwardRef`** and spread `...props` to preserve flexibility.
- ✅ Use `cn()` for all className merging — never string concatenation.
- ✅ Export named compound sub-components if the reference component uses them (e.g., `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`).
- ❌ Do NOT import the generated shadcn file and re-export it — build the primitive inline in the refactored file to keep the logic co-located.
- ❌ Do NOT add Tailwind classes not present in the reference component without explicit instruction.

### Responsive behavior (`${responsive_breakpoints:sm md lg}`):
Apply mobile-first responsive classes. Confirm current breakpoints in `tailwind.config.ts` match the project's convention. If the reference uses container queries, install `@tailwindcss/container-queries`.

---

## 🧩 Step 5 — Context Providers and Hooks

If the reference component requires a context provider (e.g., `ToastProvider`, `TooltipProvider`):

1. Check if it is already mounted in `${provider_file:app/layout.tsx}` or `${provider_file:app/providers.tsx}`.
2. If not, add it to the appropriate layout file. Provide the exact diff.
3. If a custom hook is required (e.g., `useToast`, `useDialog`), place it in `${hooks_dir:hooks/}` and import it from there.

---

## ❓ Step 6 — Clarifying Questions (ask before generating if unknown)

If any of the following are not determinable from the existing code, **ask before writing**:

1. **Data/props**: What shape of data will be passed? (Provide a sample object if helpful.)
2. **State management**: Is component state local, or managed externally (Zustand, Redux, React Query)?
3. **Assets**: Are there required images, logos, or custom icons not covered by lucide-react?
4. **Responsive**: What is the expected layout at `${responsive_breakpoints:sm md lg}` breakpoints?
5. **Placement**: Where in the app routing/layout tree will this component live? (Important for context provider placement.)

---

## 📐 Step 7 — Output Format

Provide the result as:

1. **`${component_file_path}`** — full refactored component file.
2. **`${components_dir:components/ui}/${shadcn_component_slug}.tsx`** — shadcn primitive (only if needed and not generated by CLI).
3. **`lib/utils.ts`** — only if it needs to be created or updated.
4. **Layout/provider diff** — only if a provider needs to be added.
5. A short **migration notes** section listing:
   - Removed dependencies
   - Renamed props (if any)
   - Any manual steps required (e.g., adding CSS variables to `globals.css`)

---

## 🎨 Tailwind CSS Variables (shadcn design tokens)

Confirm that `globals.css` contains the required CSS custom properties. If the reference component uses tokens like `--radius`, `--background`, `--foreground`, `--primary`, `--ring`, append the missing variables. Use the shadcn default token set for `${color_theme:zinc}` unless the project already defines a custom theme.

---

## 🚫 Constraints

- Framework: **${framework:Next.js 14+ App Router}**
- Styling: **Tailwind CSS ${tailwind_version:3}** only — no inline styles, no CSS modules, no styled-components.
- TypeScript: **strict mode**. All new code must be fully typed.
- Do not upgrade or downgrade any existing dependency version unless there is a direct peer conflict.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [shadcn-component-adapter-for-cursor](https://prompts.chat/prompts/shadcn-component-adapter-for-cursor) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | fariasandreluiz |
| Updated At | 2026-06-08T16:20:34.474Z |
