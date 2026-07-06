---
id: "cmlzxcmls0001jz047ggm9bff"
slug: "ckeditor-5-plugin"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ckeditor-5-plugin"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "d7983e2c25f810ab9928e9c931ecf313a2b21998eae5055d5b965345d05c0038"
upstream_updated_at: "2026-02-24T01:26:44.755Z"
---
# CKEditor 5 插件

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ckeditor-5-plugin](https://prompts.chat/prompts/ckeditor-5-plugin)  
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
您是一名高级 CKEditor 5 插件架构师。

我需要你构建一个完整的 CKEditor 5 插件，名为“NewsletterPlugin”。

背景：
- 这是从旧版 CKEditor 4 插件的迁移。
- 必须严格遵循CKEditor 5架构。
- 必须使用CKEditor 5 UI框架和插件系统。
- 必须遵循文档：
  https://ckeditor.com/docs/ckeditor5/latest/framework/architecture/ui-components.html
  https://ckeditor.com/docs/ckeditor5/latest/features/html/general-html-support.html

环境：
- CKEditor 5 自定义构建
- ES6模块
- 首选打字稿（如果可能）
- 不使用 CKEditor 4 API

=========================================
功能要求
=========================================

1) 工具栏按钮：
- 添加名为“新闻通讯”的工具栏按钮
- 图标：简单的 SVG 占位符
- 单击时 → 打开一个对话框（模式）

2) 对话框行为：
该对话框必须包含输入字段：
- 标题（文本输入）
- 描述（文本区域）
- 选项卡（动态列表，用户可以添加/删除选项卡项目）
    每个选项卡项目：
        - 选项卡标题
        - tabContent（允许 HTML）

按钮：
- 取消
- 好的

3) 确定：
- 在编辑器内生成结构化 HTML 块
- 结构示例：

<div class="newsletter">
    <ul class="newsletter-tabs">
        <li类=“活动”>
            <a href="#tab-1" class="active">选项卡 1</a>
        </li>
        <li>
            <a href="#tab-2">选项卡 2</a>
        </li>
    </ul>
    <div class="newsletter-content">
        <div id="tab-1" class="tab-pane active">
            内容1
        </div>
        <div id="tab-2" class="tab-pane">
            内容2
        </div>
    </div>
</div>

4）编辑器内的行为：

- 默认情况下，第一个选项卡始终处于活动状态。
- 当用户单击 <a> 选项卡链接时：
    - 从所有选项卡和窗格中删除“活动”类
    - 将“active”类添加到单击的选项卡和相应的窗格
- 当用户双击<a>时：
    - 再次打开对话框
    - 加载现有数据
    - 允许编辑
    - 更新 HTML 结构

5) 必须使用：
- GeneralHtmlSupport (GHS)，允许自定义类和属性
- 适当的向上/向下转换器
- Widget API（toWidget、toWidgetEditable（如果需要）
- 命令类
- UI组件系统（ButtonView、View、InputTextView）
- 编辑和UI部分分开
- 模式注册正确

6）架构要求：

创建结构：

- 时事通讯/
    - newsletterplugin.ts
    - 时事通讯编辑.ts
    - 时事通讯ui.ts
    - newslettercommand.ts

7）技术要求：

- 注册模式元素：
    时事通讯块
- 必须允许：
    类
    编号
    链接地址
    数据属性

- 使用：
    editor.model.change()
    conversion.for('upcast')
    conversion.for('沮丧')

- 通过编辑视图文档处理点击事件
- 使用 editor.view.document.on( 'click', ... )
- 检测双击事件

8）重要：
不要使用原始 DOM 操作。
所有更新都必须经过editor.model。

9) 所需输出：
- 完整的插件代码
- 适当的进口
- 解释架构的评论
- 解释与 CKEditor 4 的迁移差异
- 展示如何在构建中注册插件

10）额外：
解释如何在编辑器配置中启用 GeneralHtmlSupport 配置。

=========================================

请生成干净的生产就绪代码。
不要简化逻辑。
严格遵循 CKEditor 5 最佳实践。
```

---

## English Original

### Title

CKEditor 5 Plugin

### Description



### Prompt

```md
You are a senior CKEditor 5 plugin architect.

I need you to build a complete CKEditor 5 plugin called "NewsletterPlugin".

Context:
- This is a migration from a legacy CKEditor 4 plugin.
- Must follow CKEditor 5 architecture strictly.
- Must use CKEditor 5 UI framework and plugin system.
- Must follow documentation:
  https://ckeditor.com/docs/ckeditor5/latest/framework/architecture/ui-components.html
  https://ckeditor.com/docs/ckeditor5/latest/features/html/general-html-support.html

Environment:
- CKEditor 5 custom build
- ES6 modules
- Typescript preferred (if possible)
- No usage of CKEditor 4 APIs

========================================
FEATURE REQUIREMENTS
========================================

1) Toolbar Button:
- Add a toolbar button named "newsletter"
- Icon: simple SVG placeholder
- When clicked → open a dialog (modal)

2) Dialog Behavior:
The dialog must contain input fields:
- title (text input)
- description (textarea)
- tabs (dynamic list, user can add/remove tab items)
    Each tab item:
        - tabTitle
        - tabContent (HTML allowed)

Buttons:
- Cancel
- OK

3) On OK:
- Generate structured HTML block inside editor
- Structure example:

<div class="newsletter">
    <ul class="newsletter-tabs">
        <li class="active">
            <a href="#tab-1" class="active">Tab 1</a>
        </li>
        <li>
            <a href="#tab-2">Tab 2</a>
        </li>
    </ul>
    <div class="newsletter-content">
        <div id="tab-1" class="tab-pane active">
            Content 1
        </div>
        <div id="tab-2" class="tab-pane">
            Content 2
        </div>
    </div>
</div>

4) Behavior inside editor:

- First tab always active by default.
- When user clicks <a> tab link:
    - Remove class "active" from all tabs and panes
    - Add class "active" to clicked tab and corresponding pane
- When user double-clicks <a>:
    - Open dialog again
    - Load existing data
    - Allow editing
    - Update HTML structure

5) MUST USE:
- GeneralHtmlSupport (GHS) for allowing custom classes & attributes
- Proper upcast / downcast converters
- Widget API (toWidget, toWidgetEditable if needed)
- Command class
- UI Component system (ButtonView, View, InputTextView)
- Editing & UI part separated
- Schema registration properly

6) Architecture required:

Create structure:

- newsletter/
    - newsletterplugin.ts
    - newsletterediting.ts
    - newsletterui.ts
    - newslettercommand.ts

7) Technical requirements:

- Register schema element:
    newsletterBlock
- Must allow:
    class
    id
    href
    data attributes

- Use:
    editor.model.change()
    conversion.for('upcast')
    conversion.for('downcast')

- Handle click event via editing view document
- Use editing.view.document.on( 'click', ... )
- Detect double click event

8) Important:
Do NOT use raw DOM manipulation.
All updates must go through editor.model.

9) Output required:
- Full plugin code
- Proper imports
- Comments explaining architecture
- Explain migration differences from CKEditor 4
- Show how to register plugin in build

10) Extra:
Explain how to enable GeneralHtmlSupport configuration in editor config.

========================================

Please produce clean production-ready code.
Do not simplify logic.
Follow CKEditor 5 best practices strictly.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ckeditor-5-plugin](https://prompts.chat/prompts/ckeditor-5-plugin) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | bimbimkkay |
| Updated At | 2026-02-24T01:26:44.755Z |
