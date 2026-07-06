# 个人知识和叙事工具

## 中文说明

记笔记已经商品化。意义创造则不然。 A tool that connects notes into a personal narrative — that shows you the throughline of your thinking across months and years — sells identity and continuity, not storage.如果搜索和同步不能完美运行，无论叙述功能如何，用户都会立即放弃。可靠性是赌注；其他一切都是差异化因素。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 coding 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
构建一个名为“Thread”的个人知识和叙事工具——将笔记连接成生动故事的第二个大脑。核心特点：
- 笔记捕获：快速输入标题、正文、标签、日期和可选的“人生章节”标签（用户定义的时间段，如“建设公司”或“在柏林的一年”）——章节标签创建叙事结构
- 连接引擎：[LLM API] 定期分析所有注释并建议条目之间的主题连接。用户会看到“建议的连接”面板 - 接受或拒绝每个连接。接受的连接创建双向链接
- 叙述时间线：D3.js 时间线显示按章节分组的注释。缩小到十年视图，放大到周视图。单击任何注释可在其周围条目的上下文中阅读它
- 每周综合：每周日，AI都会从该周的笔记中生成“一周回顾”段落 - 作为时间线中的特殊条目存储。积累成一本可读的人生编年史
- 模式报告：每月 — AI 识别重复出现的主题（概念被提及 5 次以上）、最相关的想法（高连接密度）和“休眠”想法（60 多天内未提及，显示为“值得重新审视”）
- 章节导出：按日期范围选择任何章节并导出为格式化的 PDF 叙述性文档

Stack：React，[LLM API] 用于连接建议、综合和模式报告，D3.js 用于时间轴可视化，localStorage 具有用于备份的 JSON 导出/导入功能。文学设计——衬线字体、慷慨的空白。
```

---

## English Original

### Title

Personal Knowledge & Narrative Tool

### Description

Note-taking is commoditized. Meaning-making is not. A tool that connects notes into a personal narrative — that shows you the throughline of your thinking across months and years — sells identity and continuity, not storage. If search and sync don't work flawlessly, users abandon immediately regardless of the narrative features. Reliability is table stakes; everything else is the differentiator.

### Prompt

```md
Build a personal knowledge and narrative tool called "Thread" — a second brain that connects notes into a living story.

Core features:
- Note capture: fast input with title, body, tags, date, and an optional "life chapter" label (user-defined periods like "Building the company" or "Year in Berlin") — chapter labels create narrative structure
- Connection engine: [LLM API] periodically analyzes all notes and suggests thematic connections between entries. User sees a "Suggested connections" panel — accepts or rejects each. Accepted connections create bidirectional links
- Narrative timeline: a D3.js timeline showing notes grouped by chapter. Zoom out to decade view, zoom in to week view. Click any note to read it in context of its surrounding entries
- Weekly synthesis: every Sunday, AI generates a "week in review" paragraph from that week's notes — stored as a special entry in the timeline. Accumulates into a readable life chronicle
- Pattern report: monthly — AI identifies recurring themes (concepts mentioned 5+ times), most-linked ideas (high connection density), and "dormant" ideas (not referenced in 60+ days, surfaced as "worth revisiting")
- Chapter export: select any chapter by date range and export as a formatted PDF narrative document

Stack: React, [LLM API] for connection suggestions, synthesis, and pattern reports, D3.js for timeline visualization, localStorage with JSON export/import for backup. Literary design — serif fonts, generous whitespace.

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
