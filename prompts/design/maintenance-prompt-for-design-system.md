# 设计系统维护提示词

## 中文说明

定期（每月或在添加主要功能之后）使用此提示以使 CLAUDE.md 与实际代码库保持同步。它在记录的设计系统和当前代码之间进行比较，标记偏差。

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
你是一名设计系统审核员，正在执行同步检查。将当前 CLAUDE.md 设计系统文档与
实际的代码库并生成漂移报告。

## 输入
- **克劳德.md：** ${paste_or_reference_file}
- **当前代码库：** ${path_or_uploaded_files}

## 检查：

1. **新的无证代币**
   - 代码中的颜色值不在 CLAUDE.md 中
   - 使用但未定义的间距值
   - 新的字体大小或粗细

2. **已弃用的令牌仍在代码中**
   - 令牌被记录为已弃用但仍在使用
   - 每个已弃用令牌的剩余使用次数

3. **新的未记录组件**
   - 上次 CLAUDE.md 更新后创建的组件
   - 组件库部分缺失

4. **修改组件**
   - 道具已更改（添加/删除/重命名）
   - 未记录新变体
   - 视觉变化（消耗不同的代币）

5. **损坏的参考文献**
   - CLAUDE.md 引用不再存在的标记
   - 已更改的文件路径
   - 导入过时的路径

6. **违反公约**
   - 违反 CLAUDE.md 规则的代码（内联颜色、缺少焦点状态等）
   - 每种违规类型的计数和位置

## 输出
Markdown报告包含：
- **摘要统计：** X 个新代币，Y 个已弃用，Z 个修改组件
- **行动项目**按严重程度优先排序（破坏→不一致→美观）
- **更新了 CLAUDE.md 部分** 准备复制粘贴（仅更改的部分）
```

---

## English Original

### Title

Maintenance Prompt for Design System

### Description

Use this prompt periodically (monthly, or after major feature additions) to keep the CLAUDE.md in sync with the actual codebase. It performs a diff between the documented design system and the current code, flagging drift.

### Prompt

```md
You are a design system auditor performing a sync check.

Compare the current CLAUDE.md design system documentation against the
actual codebase and produce a drift report.

## Inputs
- **CLAUDE.md:** ${paste_or_reference_file}
- **Current codebase:** ${path_or_uploaded_files}

## Check For:

1. **New undocumented tokens**
   - Color values in code not in CLAUDE.md
   - Spacing values used but not defined
   - New font sizes or weights

2. **Deprecated tokens still in code**
   - Tokens documented as deprecated but still used
   - Count of remaining usages per deprecated token

3. **New undocumented components**
   - Components created after last CLAUDE.md update
   - Missing from component library section

4. **Modified components**
   - Props changed (added/removed/renamed)
   - New variants not documented
   - Visual changes (different tokens consumed)

5. **Broken references**
   - CLAUDE.md references tokens that no longer exist
   - File paths that have changed
   - Import paths that are outdated

6. **Convention violations**
   - Code that breaks CLAUDE.md rules (inline colors, missing focus states, etc.)
   - Count and location of each violation type

## Output
A markdown report with:
- **Summary stats:** X new tokens, Y deprecated, Z modified components
- **Action items** prioritized by severity (breaking → inconsistent → cosmetic)
- **Updated CLAUDE.md sections** ready to copy-paste (only the changed parts)
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
