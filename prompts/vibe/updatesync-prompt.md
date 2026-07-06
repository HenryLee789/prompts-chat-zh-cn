# 更新/同步提示词

## 中文说明

当代码库自上次编写 FORME.md 以来发生更改时，请使用此提示。它在文档和当前代码之间进行比较，然后仅生成需要更新的部分，而不是从头开始生成整个文档。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 design、ui-ux、Frontend 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
你正在更新现有的 FORME.md 文档文件以反映
自上次编写以来代码库发生了变化。

## 输入
- **当前 FORGME.md:** ${paste_or_reference_file}
- **更新的代码库：** ${upload_files_or_provide_path}
- **已知更改（如果有）：** [例如，“我们添加了 Stripe 集成并从 REST 切换到 tRPC” - 或“我不知道发生了什么变化，请弄清楚”]

## 你的任务

1. **差异分析：** 将文档与当前代码进行比较。确定新增内容、更改内容以及删除内容。

2. **影响评估：** 对于每项变更，确定：
   - 哪些 FORME.md 部分受到影响
   - 更改是装饰性的（文件重命名）还是结构性的（新数据流）
   - 现有的类比是否仍然成立或需要更新

3. **产生更新：** 对于每个受影响的部分：
   - 编写替换文本（不是整个文档，只是更改的部分）
   - 清楚标记：${section_name} → [从“...”替换为“...”]
   - 保持与原作相同的语气、类比系统和风格

4. **新增内容：** 如果有全新的系统/功能：
   - 按照相同的结构和语气编写新的小节
   - 将它们集成到文档中的正确位置
   - 如果整体系统描述发生变化，则更新大图部分

5. **更改日志条目：** 在文档顶部添加带日期的条目：
   “### 更新了 ${date} — [更改内容的一行摘要]”

## 规则
- 不要重写未更改的部分
- 除非底层系统发生变化，否则不要打破现有的类比
- 如果技术被替换，请更新“船员”类比（或同等内容）
- 保持相同的声音 - 如果原版是休闲的，那就保持休闲
- 标记任何你不确定的内容：“我注意到 [X]，但无法确定是否 [Y]”
```

---

## English Original

### Title

Update/Sync Prompt

### Description

Use this prompt when the codebase has changed since the last FORME.md was written. It performs a diff between the documentation and current code, then produces only the sections that need updating not the entire document from scratch.

### Prompt

```md
You are updating an existing FORME.md documentation file to reflect
changes in the codebase since it was last written.

## Inputs
- **Current FORGME.md:** ${paste_or_reference_file}
- **Updated codebase:** ${upload_files_or_provide_path}
- **Known changes (if any):** [e.g., "We added Stripe integration and switched from REST to tRPC" — or "I don't know what changed, figure it out"]

## Your Tasks

1. **Diff Analysis:** Compare the documentation against the current code.
   Identify what's new, what changed, and what's been removed.

2. **Impact Assessment:** For each change, determine:
   - Which FORME.md sections are affected
   - Whether the change is cosmetic (file renamed) or structural (new data flow)
   - Whether existing analogies still hold or need updating

3. **Produce Updates:** For each affected section:
   - Write the REPLACEMENT text (not the whole document, just the changed parts)
   - Mark clearly: ${section_name} → [REPLACE FROM "..." TO "..."]
   - Maintain the same tone, analogy system, and style as the original

4. **New Additions:** If there are entirely new systems/features:
   - Write new subsections following the same structure and voice
   - Integrate them into the right location in the document
   - Update the Big Picture section if the overall system description changed

5. **Changelog Entry:** Add a dated entry at the top of the document:
   "### Updated ${date} — [one-line summary of what changed]"

## Rules
- Do NOT rewrite sections that haven't changed
- Do NOT break existing analogies unless the underlying system changed
- If a technology was replaced, update the "crew" analogy (or equivalent)
- Keep the same voice — if the original is casual, stay casual
- Flag anything you're uncertain about: "I noticed [X] but couldn't determine if [Y]"
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
