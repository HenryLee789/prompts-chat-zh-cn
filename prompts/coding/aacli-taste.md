---
id: "cmngmckys0004l4043edgh3us"
slug: "aacli-taste"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/aacli-taste"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TASTE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3e5b36994a1d0f6bf94bf3fc0123728c508184fd653c82d11605f2177a9b086f"
upstream_updated_at: "2026-04-01T22:30:04.609Z"
---
# aa/cli 味道

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[aacli-taste](https://prompts.chat/prompts/aacli-taste)  
> 分类：编程（Coding / `coding`）  
> 类型：`TASTE`  
> 翻译状态：`machine_translated`

## 中文说明

用于设置 CLI 项目的综合指南，包含最佳实践和工具建议。

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 CLI、coding、development、Best Practices 等主题快速生成可复用结果。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
# AA 的 CLI 味道
- 使用 pnpm 作为 CLI 项目的包管理器。置信度：1.00
- 将 TypeScript 用于 CLI 项目。置信度：0.95
- 使用 tsup 作为 CLI 项目的构建工具。置信度：0.95
- 使用 vitest 测试 CLI 项目。置信度：0.95
- 使用 Commander.js 进行 CLI 命令处理。置信度：0.95
- 在 CLI 项目中使用 clack 进行交互式用户输入。置信度：0.95
- 在运行 npm link 之前检查现有的 CLI 名称冲突。置信度：0.95
- 将 CLI 命令组织在专用命令文件夹中，每个模块分开。置信度：0.95
- 包括一个小的 150 像素 ASCII 艺术欢迎横幅，显示 CLI 名称。置信度：0.95
- 对版本和帮助命令使用小写标志（-v、--version、-h、--help）。置信度：0.85
- 使用版本 0.0.1 而不是 1.0.0 启动项目。置信度：0.85
- 版本命令应仅输出版本号，不带 ASCII 艺术、横幅或附加信息。置信度：0.90
- 从 package.json 读取 CLI 版本，而不是将其硬编码到源代码中。置信度：0.75
- 始终使用 ora 在 CLI 项目中加载微调器。置信度：0.95
- 在 CLI 项目中使用 picocolors 进行终端字符串着色。置信度：0.90
- 使用 Ink 在 CommandCode 项目中构建交互式 CLI UI。置信度：0.80
- 使用 ink-spinner 在基于 Ink 的 CLI 中加载动画。置信度：0.70
- 隐藏帮助中的内部标志：.addOption(new Option('--local').hideHelp())。置信度：0.90
- 在 package.json 中使用 pnpm.onlyBuiltDependency 来预先批准本机二进制构建。置信度：0.60
- 对于大终端宽度的 ASCII 艺术使用 ANSI Shadow 字体，对于小宽度使用 ANSI Compact 字体。置信度：0.85
- 对 ASCII 艺术横幅使用最少的白色、灰色和黑色。置信度：0.85
- 在构建或发布之前使用 `npx can-i-publish` 检查包是否可发布。置信度：0.85
```

---

## English Original

### Title

aa/cli taste

### Description

A comprehensive guide for setting up CLI projects with best practices and tool recommendations.

### Prompt

```md
# Cli taste of AA
- Use pnpm as the package manager for CLI projects. Confidence: 1.00
- Use TypeScript for CLI projects. Confidence: 0.95
- Use tsup as the build tool for CLI projects. Confidence: 0.95
- Use vitest for testing CLI projects. Confidence: 0.95
- Use Commander.js for CLI command handling. Confidence: 0.95
- Use clack for interactive user input in CLI projects. Confidence: 0.95
- Check for existing CLI name conflicts before running npm link. Confidence: 0.95
- Organize CLI commands in a dedicated commands folder with each module separated. Confidence: 0.95
- Include a small 150px ASCII art welcome banner displaying the CLI name. Confidence: 0.95
- Use lowercase flags for version and help commands (-v, --version, -h, --help). Confidence: 0.85
- Start projects with version 0.0.1 instead of 1.0.0. Confidence: 0.85
- Version command should output only the version number with no ASCII art, banner, or additional information. Confidence: 0.90
- Read CLI version from package.json instead of hardcoding it in the source code. Confidence: 0.75
- Always use ora for loading spinners in CLI projects. Confidence: 0.95
- Use picocolors for terminal string coloring in CLI projects. Confidence: 0.90
- Use Ink for building interactive CLI UIs in CommandCode projects. Confidence: 0.80
- Use ink-spinner for loading animations in Ink-based CLIs. Confidence: 0.70
- Hide internal flags from help: .addOption(new Option('--local').hideHelp()). Confidence: 0.90
- Use pnpm.onlyBuiltDependencies in package.json to pre-approve native binary builds. Confidence: 0.60
- Use ANSI Shadow font for ASCII art at large terminal widths and ANSI Compact for small widths. Confidence: 0.85
- Use minimal white, gray, and black colors for ASCII art banners. Confidence: 0.85
- Check if package is publishable using `npx can-i-publish` before building or publishing. Confidence: 0.85

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [aacli-taste](https://prompts.chat/prompts/aacli-taste) |
| Category | Coding (`coding`) |
| Type | `TASTE` |
| Tags | CLI, coding, development, Best Practices |
| Contributors | ahmadawais |
| Updated At | 2026-04-01T22:30:04.609Z |
