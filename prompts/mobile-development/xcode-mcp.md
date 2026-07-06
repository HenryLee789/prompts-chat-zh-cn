---
id: "cmlgonce30009ju04csqhzq32"
slug: "xcode-mcp"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/xcode-mcp"
category: "mobile-development"
category_name: "Mobile Development"
category_zh: "移动开发"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "3612a6767957f27e2a98272b74a9ef2467b4b2aa759670a17dda732d8da4920c"
upstream_updated_at: "2026-02-10T14:17:49.423Z"
---
# xcode-mcp

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[xcode-mcp](https://prompts.chat/prompts/xcode-mcp)  
> 分类：移动开发（Mobile Development / `mobile-development`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

高效 Xcode MCP 工具使用指南。此技能应用于了解何时使用 Xcode MCP 工具与标准工具。 Xcode MCP 消耗许多令牌 - 仅用于构建、测试、模拟器、预览和 SourceKit 诊断。切勿用于文件读/写/grep 操作。

## 使用场景

- 用于移动开发相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Agent 等主题快速生成可复用结果。

## 适用人群

- 移动开发者
- 产品经理
- 技术负责人
- 开发者

## 中文 Prompt 正文

````md
---
名称：xcode-mcp
描述：高效 Xcode MCP 工具使用指南。此技能应用于了解何时使用 Xcode MCP 工具与标准工具。 Xcode MCP 消耗许多令牌 - 仅用于构建、测试、模拟器、预览和 SourceKit 诊断。切勿用于文件读/写/grep 操作。
---

# Xcode MCP 使用指南

Xcode MCP 工具消耗大量令牌。此技能定义何时使用 Xcode MCP 以及何时首选标准工具。

## 完整的 Xcode MCP 工具参考

### 窗口和项目管理
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__XcodeListWindows` |列出打开的 Xcode 窗口（获取 tabIdentifier）|低 ✓ |

### 构建操作
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__BuildProject` |构建 Xcode 项目 |中等 ✓ |
| `mcp__xcode__GetBuildLog` |获取包含错误/警告的构建日志 |中等 ✓ |
| `mcp__xcode__XcodeListNavigatorIssues` |在问题导航器中列出问题 |低 ✓ |

### 测试
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__GetTestList` |从测试计划中获取可用测试 |低 ✓ |
| `mcp__xcode__RunAllTests` |运行所有测试 |中等|
| `mcp__xcode__RunSomeTests` |运行特定测试（首选）|中等 ✓ |

### 预览和执行
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__RenderPreview` |渲染 SwiftUI 预览快照 |中等 ✓ |
| `mcp__xcode__ExecuteSnippet` |在文件上下文中执行代码片段 |中等 ✓ |

### 诊断
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__XcodeRefreshCodeIssuesInFile` |获取特定文件的编译器诊断 |低 ✓ |
| `mcp__ide__getDiagnostics` |获取 SourceKit 诊断（所有打开的文件）|低 ✓ |

### 文档
|工具|描述 |代币成本 |
|------|-------------|------------|
| `mcp__xcode__DocumentationSearch` |搜索 Apple 开发者文档 |低 ✓ |

### 文件操作（高令牌 - 切勿使用）
|工具|另类|为什么 |
|------|-------------|-----|
| `mcp__xcode__XcodeRead` | `Read`工具|高代币消耗 |
| `mcp__xcode__XcodeWrite` | `Write`工具|高代币消耗 |
| `mcp__xcode__XcodeUpdate` | `Edit`工具|高代币消耗 |
| `mcp__xcode__XcodeGrep` | `rg` / `Grep` 工具 |高代币消耗 |
| `mcp__xcode__XcodeGlob` | `Glob`工具|高代币消耗 |
| `mcp__xcode__XcodeLS` | `ls` 命令 |高代币消耗 |
| `mcp__xcode__XcodeRM` | `rm` 命令 |高代币消耗 |
| `mcp__xcode__XcodeMakeDir` | `mkdir` 命令 |高代币消耗 |
| `mcp__xcode__XcodeMV` | `mv` 命令 |高代币消耗 |

---

## 推荐的工作流程

### 1. 代码更改和构建流程
```
1. Search code      → rg "pattern" --type swift
2. Read file        → Read tool
3. Edit file        → Edit tool
4. Syntax check     → mcp__ide__getDiagnostics
5. Build            → mcp__xcode__BuildProject
6. Check errors     → mcp__xcode__GetBuildLog (if build fails)
```

### 2. 测试编写和运行流程
```
1. Read test file   → Read tool
2. Write/edit test  → Edit tool
3. Get test list    → mcp__xcode__GetTestList
4. Run tests        → mcp__xcode__RunSomeTests (specific tests)
5. Check results    → Review test output
```

### 3.SwiftUI 预览流程
```
1. Edit view        → Edit tool
2. Render preview   → mcp__xcode__RenderPreview
3. Iterate          → Repeat as needed
```

### 4. 调试流程
```
1. Check diagnostics → mcp__ide__getDiagnostics (quick syntax check)
2. Build project     → mcp__xcode__BuildProject
3. Get build log     → mcp__xcode__GetBuildLog (severity: error)
4. Fix issues        → Edit tool
5. Rebuild           → mcp__xcode__BuildProject
```

### 5. 文档搜索
```
1. Search docs       → mcp__xcode__DocumentationSearch
2. Review results    → Use information in implementation
```

---

## 回退命令（当 MCP 不可用时）

如果 Xcode MCP 已断开连接或不可用，请使用以下 xcodebuild 命令：

### 构建命令
```bash
# Debug build (simulator) - replace <SchemeName> with your project's scheme
xcodebuild -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# Release build (device)
xcodebuild -scheme <SchemeName> -configuration Release -sdk iphoneos build

# Build with workspace (for CocoaPods projects)
xcodebuild -workspace <ProjectName>.xcworkspace -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# Build with project file
xcodebuild -project <ProjectName>.xcodeproj -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# List available schemes
xcodebuild -list
```

### 测试命令
```bash
# Run all tests
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -configuration Debug

# Run specific test class
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -only-testing:<TestTarget>/<TestClassName>

# Run specific test method
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -only-testing:<TestTarget>/<TestClassName>/<testMethodName>

# Run with code coverage
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -configuration Debug -enableCodeCoverage YES

# List available simulators
xcrun simctl list devices available
```

### 干净构建
```bash
xcodebuild clean -scheme <SchemeName>

```

---

## 快速参考

### 使用 Xcode MCP 用于：
- ✅ `BuildProject` - 建筑
- ✅ `GetBuildLog` - 构建错误
- ✅ `RunSomeTests` - 运行特定测试
- ✅ `GetTestList` - 列表测试
- ✅ `RenderPreview` - SwiftUI 预览
- ✅ `ExecuteSnippet` - 代码执行
- ✅ `DocumentationSearch` - Apple 文档
- ✅ `XcodeListWindows` - 获取 tabIdentifier
- ✅ `mcp__ide__getDiagnostics` - SourceKit 错误

### 切勿将 Xcode MCP 用于：
- ❌ `XcodeRead` → 使用 `Read` 工具
- ❌ `XcodeWrite` → 使用 `Write` 工具
- ❌ `XcodeUpdate` → 使用 `Edit` 工具
- ❌ `XcodeGrep` → 使用 `rg` 或 `Grep` 工具
- ❌ `XcodeGlob` → 使用 `Glob` 工具
- ❌`XcodeLS` → 使用 `ls` 命令
- ❌文件操作→使用标准工具

---

## 代币效率总结

|运营|最佳选择|代币影响 |
|------------|-------------|--------------|
|快速语法检查 | `mcp__ide__getDiagnostics` | 🟢 低 |
|完整构建 | `mcp__xcode__BuildProject` | 🟡 中等 |
|运行特定测试 | `mcp__xcode__RunSomeTests` | 🟡 中等 |
|运行所有测试 | `mcp__xcode__RunAllTests` | 🟠 高 |
|读取文件 | `Read`工具| 🟠 高 |
|编辑文件| `Edit`工具| 🟠 高|
|搜索码 | `rg` / `Grep` | 🟢 低 |
|列出文件 | `ls` / `Glob` | 🟢 低 |
````

---

## English Original

### Title

xcode-mcp

### Description

Guidelines for efficient Xcode MCP tool usage. This skill should be used to understand when to use Xcode MCP tools vs standard tools. Xcode MCP consumes many tokens - use only for build, test, simulator, preview, and SourceKit diagnostics. Never use for file read/write/grep operations.

### Prompt

````md
---
name: xcode-mcp
description: Guidelines for efficient Xcode MCP tool usage. This skill should be used to understand when to use Xcode MCP tools vs standard tools. Xcode MCP consumes many tokens - use only for build, test, simulator, preview, and SourceKit diagnostics. Never use for file read/write/grep operations.
---

# Xcode MCP Usage Guidelines

Xcode MCP tools consume significant tokens. This skill defines when to use Xcode MCP and when to prefer standard tools.

## Complete Xcode MCP Tools Reference

### Window & Project Management
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__XcodeListWindows` | List open Xcode windows (get tabIdentifier) | Low ✓ |

### Build Operations
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__BuildProject` | Build the Xcode project | Medium ✓ |
| `mcp__xcode__GetBuildLog` | Get build log with errors/warnings | Medium ✓ |
| `mcp__xcode__XcodeListNavigatorIssues` | List issues in Issue Navigator | Low ✓ |

### Testing
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__GetTestList` | Get available tests from test plan | Low ✓ |
| `mcp__xcode__RunAllTests` | Run all tests | Medium |
| `mcp__xcode__RunSomeTests` | Run specific tests (preferred) | Medium ✓ |

### Preview & Execution
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__RenderPreview` | Render SwiftUI Preview snapshot | Medium ✓ |
| `mcp__xcode__ExecuteSnippet` | Execute code snippet in file context | Medium ✓ |

### Diagnostics
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__XcodeRefreshCodeIssuesInFile` | Get compiler diagnostics for specific file | Low ✓ |
| `mcp__ide__getDiagnostics` | Get SourceKit diagnostics (all open files) | Low ✓ |

### Documentation
| Tool | Description | Token Cost |
|------|-------------|------------|
| `mcp__xcode__DocumentationSearch` | Search Apple Developer Documentation | Low ✓ |

### File Operations (HIGH TOKEN - NEVER USE)
| Tool | Alternative | Why |
|------|-------------|-----|
| `mcp__xcode__XcodeRead` | `Read` tool | High token consumption |
| `mcp__xcode__XcodeWrite` | `Write` tool | High token consumption |
| `mcp__xcode__XcodeUpdate` | `Edit` tool | High token consumption |
| `mcp__xcode__XcodeGrep` | `rg` / `Grep` tool | High token consumption |
| `mcp__xcode__XcodeGlob` | `Glob` tool | High token consumption |
| `mcp__xcode__XcodeLS` | `ls` command | High token consumption |
| `mcp__xcode__XcodeRM` | `rm` command | High token consumption |
| `mcp__xcode__XcodeMakeDir` | `mkdir` command | High token consumption |
| `mcp__xcode__XcodeMV` | `mv` command | High token consumption |

---

## Recommended Workflows

### 1. Code Change & Build Flow
```
1. Search code      → rg "pattern" --type swift
2. Read file        → Read tool
3. Edit file        → Edit tool
4. Syntax check     → mcp__ide__getDiagnostics
5. Build            → mcp__xcode__BuildProject
6. Check errors     → mcp__xcode__GetBuildLog (if build fails)
```

### 2. Test Writing & Running Flow
```
1. Read test file   → Read tool
2. Write/edit test  → Edit tool
3. Get test list    → mcp__xcode__GetTestList
4. Run tests        → mcp__xcode__RunSomeTests (specific tests)
5. Check results    → Review test output
```

### 3. SwiftUI Preview Flow
```
1. Edit view        → Edit tool
2. Render preview   → mcp__xcode__RenderPreview
3. Iterate          → Repeat as needed
```

### 4. Debug Flow
```
1. Check diagnostics → mcp__ide__getDiagnostics (quick syntax check)
2. Build project     → mcp__xcode__BuildProject
3. Get build log     → mcp__xcode__GetBuildLog (severity: error)
4. Fix issues        → Edit tool
5. Rebuild           → mcp__xcode__BuildProject
```

### 5. Documentation Search
```
1. Search docs       → mcp__xcode__DocumentationSearch
2. Review results    → Use information in implementation
```

---

## Fallback Commands (When MCP Unavailable)

If Xcode MCP is disconnected or unavailable, use these xcodebuild commands:

### Build Commands
```bash
# Debug build (simulator) - replace <SchemeName> with your project's scheme
xcodebuild -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# Release build (device)
xcodebuild -scheme <SchemeName> -configuration Release -sdk iphoneos build

# Build with workspace (for CocoaPods projects)
xcodebuild -workspace <ProjectName>.xcworkspace -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# Build with project file
xcodebuild -project <ProjectName>.xcodeproj -scheme <SchemeName> -configuration Debug -sdk iphonesimulator build

# List available schemes
xcodebuild -list
```

### Test Commands
```bash
# Run all tests
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -configuration Debug

# Run specific test class
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -only-testing:<TestTarget>/<TestClassName>

# Run specific test method
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -destination "platform=iOS Simulator,name=iPhone 16" \
  -only-testing:<TestTarget>/<TestClassName>/<testMethodName>

# Run with code coverage
xcodebuild test -scheme <SchemeName> -sdk iphonesimulator \
  -configuration Debug -enableCodeCoverage YES

# List available simulators
xcrun simctl list devices available
```

### Clean Build
```bash
xcodebuild clean -scheme <SchemeName>

```

---

## Quick Reference

### USE Xcode MCP For:
- ✅ `BuildProject` - Building
- ✅ `GetBuildLog` - Build errors
- ✅ `RunSomeTests` - Running specific tests
- ✅ `GetTestList` - Listing tests
- ✅ `RenderPreview` - SwiftUI previews
- ✅ `ExecuteSnippet` - Code execution
- ✅ `DocumentationSearch` - Apple docs
- ✅ `XcodeListWindows` - Get tabIdentifier
- ✅ `mcp__ide__getDiagnostics` - SourceKit errors

### NEVER USE Xcode MCP For:
- ❌ `XcodeRead` → Use `Read` tool
- ❌ `XcodeWrite` → Use `Write` tool
- ❌ `XcodeUpdate` → Use `Edit` tool
- ❌ `XcodeGrep` → Use `rg` or `Grep` tool
- ❌ `XcodeGlob` → Use `Glob` tool
- ❌ `XcodeLS` → Use `ls` command
- ❌ File operations → Use standard tools

---

## Token Efficiency Summary

| Operation | Best Choice | Token Impact |
|-----------|-------------|--------------|
| Quick syntax check | `mcp__ide__getDiagnostics` | 🟢 Low |
| Full build | `mcp__xcode__BuildProject` | 🟡 Medium |
| Run specific tests | `mcp__xcode__RunSomeTests` | 🟡 Medium |
| Run all tests | `mcp__xcode__RunAllTests` | 🟠 High |
| Read file | `Read` tool | 🟠 High |
| Edit file | `Edit` tool | 🟠 High|
| Search code | `rg` / `Grep` | 🟢 Low |
| List files | `ls` / `Glob` | 🟢 Low |
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [xcode-mcp](https://prompts.chat/prompts/xcode-mcp) |
| Category | Mobile Development (`mobile-development`) |
| Type | `SKILL` |
| Tags | Agent |
| Contributors | ilker |
| Updated At | 2026-02-10T14:17:49.423Z |
