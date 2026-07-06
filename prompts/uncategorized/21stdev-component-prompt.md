---
id: "cmq58sz480004i9046hdc9zkr"
slug: "21stdev-component-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/21stdev-component-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "e8a212129e2828307c8f924339144793a2c691a479ab91f3cc0b5fade2036e4f"
upstream_updated_at: "2026-06-08T13:24:32.118Z"
---
# 21st.dev 组件提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[21stdev-component-prompt](https://prompts.chat/prompts/21stdev-component-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
您需要将现有的 React 组件集成到代码库中。

代码库应该支持：
- shadcn项目结构  
- 顺风CSS
- 打字稿

如果没有，请提供有关如何通过 shadcn CLI 设置项目、安装 Tailwind 或 Typescript 的说明。

确定组件和样式的默认路径。 
如果组件的默认路径不是 /components/ui，请提供有关创建此文件夹的重要性的说明
将此组件复制粘贴到 /components/ui 文件夹：

${21st.dev_component}

实施指南
 1. 分析组件结构并确定所有所需的依赖关系
 2. 检查组件的参数和状态
 3. 确定任何所需的上下文提供程序或挂钩并安装它们
 4. 要问的问题
 - 哪些数据/道具将传递给该组件？
 - 是否有任何具体的状态管理要求？
 - 是否有任何必需的资源（图像、图标等）？
 - 预期的响应行为是什么？
 - 在应用程序中使用此组件的最佳位置是什么？

整合步骤
 0. 将上面的所有代码复制粘贴到正确的目录中
 1.安装外部依赖
 2. 使用您知道存在的 Unsplash 库存图像填充图像资源
 3. 如果组件需要，请使用 lucide-react 图标作为 svgs 或徽标
```

---

## English Original

### Title

21st.dev component prompt

### Description



### Prompt

```md
You are given a task to integrate an existing React component in the codebase.

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

${21st.dev_component}

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [21stdev-component-prompt](https://prompts.chat/prompts/21stdev-component-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | fariasandreluiz |
| Updated At | 2026-06-08T13:24:32.118Z |
