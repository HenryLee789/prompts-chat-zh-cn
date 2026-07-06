---
id: "cmms43gs50004jy042djn2324"
slug: "xcode-mcp-for-pi-agent"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/xcode-mcp-for-pi-agent"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "33ff4324a54a7eacdaa58689394e0037ad34498d209597fcd0bbc919c4f87e10"
upstream_updated_at: "2026-03-15T18:52:38.252Z"
---
# xcode-mcp（用于 pi 代理）

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[xcode-mcp-for-pi-agent](https://prompts.chat/prompts/xcode-mcp-for-pi-agent)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

通过 mcporter CLI 高效使用 Xcode MCP 工具的指南。此技能应用于了解何时使用 Xcode MCP 工具与标准工具。 Xcode MCP 消耗许多令牌 - 仅用于构建、测试、模拟器、预览和 SourceKit 诊断。切勿用于文件读/写/grep 操作。每当处理 Xcode 项目、iOS/macOS 构建、SwiftUI 预览或 Apple 平台开发时，请使用此技能。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称： xcode-mcp-for-pi-agent
描述：通过 mcporter CLI 高效使用 Xcode MCP 工具的指南。此技能应用于了解何时使用 Xcode MCP 工具与标准工具。 Xcode MCP 消耗许多令牌 - 仅用于构建、测试、模拟器、预览和 SourceKit 诊断。切勿用于文件读/写/grep 操作。每当处理 Xcode 项目、iOS/macOS 构建、SwiftUI 预览或 Apple 平台开发时，请使用此技能。
---

# Xcode MCP 使用指南

Xcode MCP 工具可通过 `mcporter` CLI 访问，它将 MCP 服务器与标准命令行工具桥接起来。此技能定义何时使用 Xcode MCP 以及何时首选标准工具。

## 设置

Xcode MCP 必须在 `~/.mcporter/mcporter.json` 中配置：

```json
{
  "mcpServers": {
    "xcode": {
      "command": "xcrun",
      "args": ["mcpbridge"],
      "env": {}
    }
  }
}
```

验证连接：
```bash
mcporter list xcode
```

---

## 调用工具

所有 Xcode MCP 工具均通过 mcporter 调用：

```bash
# List available tools
mcporter list xcode

# Call a tool with key:value args
mcporter call xcode.<tool_name> param1:value1 param2:value2

# Call with function-call syntax
mcporter call 'xcode.<tool_name>(param1: "value1", param2: "value2")'
```

---

## 完整的 Xcode MCP 工具参考

### 窗口和项目管理
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|列出打开的 Xcode 窗口（获取 tabIdentifier）| `mcporter call xcode.XcodeListWindows` |低 ✓ |

### 构建操作
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|构建 Xcode 项目 | `mcporter call xcode.BuildProject` |中等 ✓ |
|获取包含错误/警告的构建日志 | `mcporter call xcode.GetBuildLog` |中等 ✓ |
|在问题导航器中列出问题 | `mcporter call xcode.XcodeListNavigatorIssues` |低 ✓ |

### 测试
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|从测试计划中获取可用测试 | `mcporter call xcode.GetTestList` |低 ✓ |
|运行所有测试 | `mcporter call xcode.RunAllTests` |中等|
|运行特定测试（首选）| `mcporter call xcode.RunSomeTests` |中等 ✓ |

### 预览和执行
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|渲染 SwiftUI 预览快照 | `mcporter call xcode.RenderPreview` |中等 ✓ |
|在文件上下文中执行代码片段 | `mcporter call xcode.ExecuteSnippet` |中等 ✓ |

### 诊断
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|获取特定文件的编译器诊断 | `mcporter call xcode.XcodeRefreshCodeIssuesInFile` |低 ✓ |
|获取 SourceKit 诊断（所有打开的文件）| `mcporter call xcode.getDiagnostics` |低 ✓ |

### 文档
|工具|麦克波特电话 |代币成本 |
|------|----------------|------------|
|搜索 Apple 开发者文档 | `mcporter call xcode.DocumentationSearch` |低 ✓ |

### 文件操作（高令牌 - 切勿使用）
| MCP 工具 |使用替代 |为什么 |
|----------|-------------|-----|
| `xcode.XcodeRead` | `Read` 工具 / `cat` |高代币消耗 |
| `xcode.XcodeWrite` | `Write`工具|高代币消耗 |
| `xcode.XcodeUpdate` | `Edit`工具|高代币消耗 |
| `xcode.XcodeGrep` | `rg` / `grep` |高代币消耗 |
| `xcode.XcodeGlob` | `find` / `glob` |高代币消耗 |
| `xcode.XcodeLS` | `ls` 命令 |高代币消耗 |
| `xcode.XcodeRM` | `rm` 命令 |高代币消耗 |
| `xcode.XcodeMakeDir` | `mkdir` 命令 |高代币消耗 |
| `xcode.XcodeMV` | `mv` 命令 |高代币消耗 |

---

## 推荐的工作流程

### 1. 代码更改和构建流程
```
1. Search code      → rg "pattern" --type swift
2. Read file        → Read tool / cat
3. Edit file        → Edit tool
4. Syntax check     → mcporter call xcode.getDiagnostics
5. Build            → mcporter call xcode.BuildProject
6. Check errors     → mcporter call xcode.GetBuildLog (if build fails)
```

### 2. 测试编写和运行流程
```
1. Read test file   → Read tool / cat
2. Write/edit test  → Edit tool
3. Get test list    → mcporter call xcode.GetTestList
4. Run tests        → mcporter call xcode.RunSomeTests (specific tests)
5. Check results    → Review test output
```

### 3.SwiftUI 预览流程
```
1. Edit view        → Edit tool
2. Render preview   → mcporter call xcode.RenderPreview
3. Iterate          → Repeat as needed
```

### 4. 调试流程
```
1. Check diagnostics → mcporter call xcode.getDiagnostics
2. Build project     → mcporter call xcode.BuildProject
3. Get build log     → mcporter call xcode.GetBuildLog severity:error
4. Fix issues        → Edit tool
5. Rebuild           → mcporter call xcode.BuildProject
```

### 5. 文档搜索
```
1. Search docs       → mcporter call xcode.DocumentationSearch query:"SwiftUI NavigationStack"
2. Review results    → Use information in implementation
```

---

## 回退命令（当 MCP 或 mcporter 不可用时）

如果 Xcode MCP 已断开连接、mcporter 未安装或连接失败，请直接使用以下 xcodebuild 命令：

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

### 使用 mcporter + Xcode MCP 用于：
- ✅ `xcode.BuildProject` — 建筑
- ✅ `xcode.GetBuildLog` — 构建错误
- ✅ `xcode.RunSomeTests` — 运行特定测试
- ✅ `xcode.GetTestList` — 列表测试
- ✅ `xcode.RenderPreview` — SwiftUI 预览
- ✅ `xcode.ExecuteSnippet` — 代码执行
- ✅ `xcode.DocumentationSearch` — Apple 文档
- ✅ `xcode.XcodeListWindows` — 获取 tabIdentifier
- ✅ `xcode.getDiagnostics` — SourceKit 错误

### 切勿将 Xcode MCP 用于：
- ❌ `xcode.XcodeRead` → 使用 `Read` 工具 / `cat`
- ❌ `xcode.XcodeWrite` → 使用 `Write` 工具
- ❌ `xcode.XcodeUpdate` → 使用 `Edit` 工具
- ❌ `xcode.XcodeGrep` → 使用 `rg` 或 `grep`
- ❌`xcode.XcodeGlob` → 使用 `find` / `glob`
- ❌`xcode.XcodeLS` → 使用 `ls` 命令
- ❌文件操作→使用标准工具

---

## 代币效率总结

|运营|最佳选择|代币影响 |
|------------|-------------|--------------|
|快速语法检查 | `mcporter call xcode.getDiagnostics` | 🟢 低 |
|完整构建 | `mcporter call xcode.BuildProject` | 🟡 中等 |
|运行特定测试 | `mcporter call xcode.RunSomeTests` | 🟡 中等 |
|运行所有测试 | `mcporter call xcode.RunAllTests` | 🟠 高 |
|读取文件 | `Read` 工具 / `cat` | 🟢 低 |
|编辑文件| `Edit`工具| 🟢 低 |
|搜索码 | `rg` / `grep` | 🟢 低 |
|列出文件 | `ls` / `find` | 🟢 低 |
````

---

## English Original

### Title

xcode-mcp (for pi agent)

### Description

Guidelines for efficient Xcode MCP tool usage via mcporter CLI. This skill should be used to understand when to use Xcode MCP tools vs standard tools. Xcode MCP consumes many tokens - use only for build, test, simulator, preview, and SourceKit diagnostics. Never use for file read/write/grep operations. Use this skill whenever working with Xcode projects, iOS/macOS builds, SwiftUI previews, or Apple platform development.

### Prompt

````md
---
name: xcode-mcp-for-pi-agent
description: Guidelines for efficient Xcode MCP tool usage via mcporter CLI. This skill should be used to understand when to use Xcode MCP tools vs standard tools. Xcode MCP consumes many tokens - use only for build, test, simulator, preview, and SourceKit diagnostics. Never use for file read/write/grep operations. Use this skill whenever working with Xcode projects, iOS/macOS builds, SwiftUI previews, or Apple platform development.
---

# Xcode MCP Usage Guidelines

Xcode MCP tools are accessed via `mcporter` CLI, which bridges MCP servers to standard command-line tools. This skill defines when to use Xcode MCP and when to prefer standard tools.

## Setup

Xcode MCP must be configured in `~/.mcporter/mcporter.json`:

```json
{
  "mcpServers": {
    "xcode": {
      "command": "xcrun",
      "args": ["mcpbridge"],
      "env": {}
    }
  }
}
```

Verify the connection:
```bash
mcporter list xcode
```

---

## Calling Tools

All Xcode MCP tools are called via mcporter:

```bash
# List available tools
mcporter list xcode

# Call a tool with key:value args
mcporter call xcode.<tool_name> param1:value1 param2:value2

# Call with function-call syntax
mcporter call 'xcode.<tool_name>(param1: "value1", param2: "value2")'
```

---

## Complete Xcode MCP Tools Reference

### Window & Project Management
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| List open Xcode windows (get tabIdentifier) | `mcporter call xcode.XcodeListWindows` | Low ✓ |

### Build Operations
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| Build the Xcode project | `mcporter call xcode.BuildProject` | Medium ✓ |
| Get build log with errors/warnings | `mcporter call xcode.GetBuildLog` | Medium ✓ |
| List issues in Issue Navigator | `mcporter call xcode.XcodeListNavigatorIssues` | Low ✓ |

### Testing
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| Get available tests from test plan | `mcporter call xcode.GetTestList` | Low ✓ |
| Run all tests | `mcporter call xcode.RunAllTests` | Medium |
| Run specific tests (preferred) | `mcporter call xcode.RunSomeTests` | Medium ✓ |

### Preview & Execution
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| Render SwiftUI Preview snapshot | `mcporter call xcode.RenderPreview` | Medium ✓ |
| Execute code snippet in file context | `mcporter call xcode.ExecuteSnippet` | Medium ✓ |

### Diagnostics
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| Get compiler diagnostics for specific file | `mcporter call xcode.XcodeRefreshCodeIssuesInFile` | Low ✓ |
| Get SourceKit diagnostics (all open files) | `mcporter call xcode.getDiagnostics` | Low ✓ |

### Documentation
| Tool | mcporter call | Token Cost |
|------|---------------|------------|
| Search Apple Developer Documentation | `mcporter call xcode.DocumentationSearch` | Low ✓ |

### File Operations (HIGH TOKEN - NEVER USE)
| MCP Tool | Use Instead | Why |
|----------|-------------|-----|
| `xcode.XcodeRead` | `Read` tool / `cat` | High token consumption |
| `xcode.XcodeWrite` | `Write` tool | High token consumption |
| `xcode.XcodeUpdate` | `Edit` tool | High token consumption |
| `xcode.XcodeGrep` | `rg` / `grep` | High token consumption |
| `xcode.XcodeGlob` | `find` / `glob` | High token consumption |
| `xcode.XcodeLS` | `ls` command | High token consumption |
| `xcode.XcodeRM` | `rm` command | High token consumption |
| `xcode.XcodeMakeDir` | `mkdir` command | High token consumption |
| `xcode.XcodeMV` | `mv` command | High token consumption |

---

## Recommended Workflows

### 1. Code Change & Build Flow
```
1. Search code      → rg "pattern" --type swift
2. Read file        → Read tool / cat
3. Edit file        → Edit tool
4. Syntax check     → mcporter call xcode.getDiagnostics
5. Build            → mcporter call xcode.BuildProject
6. Check errors     → mcporter call xcode.GetBuildLog (if build fails)
```

### 2. Test Writing & Running Flow
```
1. Read test file   → Read tool / cat
2. Write/edit test  → Edit tool
3. Get test list    → mcporter call xcode.GetTestList
4. Run tests        → mcporter call xcode.RunSomeTests (specific tests)
5. Check results    → Review test output
```

### 3. SwiftUI Preview Flow
```
1. Edit view        → Edit tool
2. Render preview   → mcporter call xcode.RenderPreview
3. Iterate          → Repeat as needed
```

### 4. Debug Flow
```
1. Check diagnostics → mcporter call xcode.getDiagnostics
2. Build project     → mcporter call xcode.BuildProject
3. Get build log     → mcporter call xcode.GetBuildLog severity:error
4. Fix issues        → Edit tool
5. Rebuild           → mcporter call xcode.BuildProject
```

### 5. Documentation Search
```
1. Search docs       → mcporter call xcode.DocumentationSearch query:"SwiftUI NavigationStack"
2. Review results    → Use information in implementation
```

---

## Fallback Commands (When MCP or mcporter Unavailable)

If Xcode MCP is disconnected, mcporter is not installed, or the connection fails, use these xcodebuild commands directly:

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

### USE mcporter + Xcode MCP For:
- ✅ `xcode.BuildProject` — Building
- ✅ `xcode.GetBuildLog` — Build errors
- ✅ `xcode.RunSomeTests` — Running specific tests
- ✅ `xcode.GetTestList` — Listing tests
- ✅ `xcode.RenderPreview` — SwiftUI previews
- ✅ `xcode.ExecuteSnippet` — Code execution
- ✅ `xcode.DocumentationSearch` — Apple docs
- ✅ `xcode.XcodeListWindows` — Get tabIdentifier
- ✅ `xcode.getDiagnostics` — SourceKit errors

### NEVER USE Xcode MCP For:
- ❌ `xcode.XcodeRead` → Use `Read` tool / `cat`
- ❌ `xcode.XcodeWrite` → Use `Write` tool
- ❌ `xcode.XcodeUpdate` → Use `Edit` tool
- ❌ `xcode.XcodeGrep` → Use `rg` or `grep`
- ❌ `xcode.XcodeGlob` → Use `find` / `glob`
- ❌ `xcode.XcodeLS` → Use `ls` command
- ❌ File operations → Use standard tools

---

## Token Efficiency Summary

| Operation | Best Choice | Token Impact |
|-----------|-------------|--------------|
| Quick syntax check | `mcporter call xcode.getDiagnostics` | 🟢 Low |
| Full build | `mcporter call xcode.BuildProject` | 🟡 Medium |
| Run specific tests | `mcporter call xcode.RunSomeTests` | 🟡 Medium |
| Run all tests | `mcporter call xcode.RunAllTests` | 🟠 High |
| Read file | `Read` tool / `cat` | 🟢 Low |
| Edit file | `Edit` tool | 🟢 Low |
| Search code | `rg` / `grep` | 🟢 Low |
| List files | `ls` / `find` | 🟢 Low |
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [xcode-mcp-for-pi-agent](https://prompts.chat/prompts/xcode-mcp-for-pi-agent) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | None |
| Contributors | ilker |
| Updated At | 2026-03-15T18:52:38.252Z |
