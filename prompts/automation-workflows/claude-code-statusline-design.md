---
id: "cml0l5irl0004la04vnl8q7eh"
slug: "claude-code-statusline-design"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/claude-code-statusline-design"
category: "automation-workflows"
category_name: "Automation & Workflows"
category_zh: "自动化工作流"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "13c1f544223d06443b281a533629a9ae738f9bbc7b061a917c2fbabc34b3c72b"
upstream_updated_at: "2026-01-30T07:55:49.484Z"
---
# 克劳德代码 Statusline 设计

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[claude-code-statusline-design](https://prompts.chat/prompts/claude-code-statusline-design)  
> 分类：自动化工作流（Automation & Workflows / `automation-workflows`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

为开发者打造专业的Claude Code自定义状态栏。

## 使用场景

- 用于自动化工作流相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Claude 等主题快速生成可复用结果。

## 适用人群

- 自动化工程师
- 运营人员
- 效率工具用户

## 中文 Prompt 正文

````md
# 任务：为 Claude Code 创建专业开发者状态栏

## 角色

您是一名系统程序员，正在为 Claude Code 创建高度优化的状态栏脚本。

## 可交付成果

一个单文件 Python 脚本 (`~/.claude/statusline.py`)，用于在 Claude Code 的状态行中显示开发人员关键信息。

## 输入规范

使用以下结构从 stdin 读取 JSON：

```json
{
  "model": {"display_name": "Opus|Sonnet|Haiku"},
  "workspace": {"current_dir": "/path/to/workspace", "project_dir": "/path/to/project"},
  "output_style": {"name": "explanatory|default|concise"},
  "cost": {
    "total_cost_usd": 0.0,
    "total_duration_ms": 0,
    "total_api_duration_ms": 0,
    "total_lines_added": 0,
    "total_lines_removed": 0
  }
}

```

## 输出要求

### 格式

* 精确打印一行到标准输出
* 使用 ANSI 256 颜色代码：\033[38;5;Nm，并具有优化的调色板以实现高对比度
* 智能截断：可见文本宽度 ≤ 80 个字符（ANSI 转义码不计入限制）
* 使用unicode符号： ●（干净）、+（添加）、~（修改）
* 调色板：橙色 208、蓝色 33、绿色 154、黄色 229、红色 196、灰色 245（针对暗/亮终端进行测试）

### 信息架构（从左到右优先）

1. 核心：型号名称（橙色）
2. 上下文：项目目录基本名称（蓝色）
3.Git状态：
* 分行名称（绿色）
* 干净：●（暗灰色）
* 修改：~N（黄色，N = 文件数）
* 添加：+N（黄色，N = 文件数）


4.元数据（暗灰色）：
* 未提交的文件：!N（红色，N = 来自 git status --porcelain 的计数）
* API比例：A:N%（N=api_duration/total_duration*100）



### 输出示例

\033[38;5;208mOpus\033[0m \033[38;5;33mIsaacLab\033[0m \033[38;5;154mmain\033[0m \033[38;5;245m●\033[0m \033[38;5;245mA:12%\033[0m

## 技术限制

### 性能（关键）

* 执行时间：< 100ms（每300ms调用一次）
* 缓存持久化：将Git状态缓存存储在/tmp/claude_statusline_cache.json中（脚本每次运行后都会退出，因此缓存必须持久化在磁盘上）
* 缓存 TTL：仅当缓存年龄 > 5 秒或 .git/index mtime 更改时才计数刷新 Git 文件
* Git逻辑优化：
* 分支名称：直接读取.git/HEAD（无子进程）
* 文件计数：仅当缓存过期时调用 subprocess.run(['git', 'status', '--porcelain'])


* 仅标准库：无外部依赖项（仅使用 sys、json、os、pathlib、subprocess、time）

### 错误处理

* JSON解析错误→返回空字符串“”
* 缺少字段 → 省略该部分（不要崩溃）
* 未找到 Git 目录 → 完全省略 Git 部分
* 任何异常→返回空字符串“”

## 代码结构

* 单个文件，< 100 行
* UTF-8 编码处理以实现可靠的 unicode 输出
* 每个关注点最多有一个函数（解析、git、格式化）
* 所有功能都需要输入提示
* 每个函数的文档字符串解释其用途

## 集成步骤

1.将脚本保存到~/.claude/statusline.py
2. 运行 chmod +x ~/.claude/statusline.py
3. 添加到~/.claude/settings.json：

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.py",
    "padding": 0
  }
}

```

4. 手动测试： echo '{"model":{"display_name":"Test"},"workspace":{"current_dir":"/tmp"}}' | 〜/.claude/statusline.py

## 验证清单

* 脚本执行时无需外部依赖（缓存时单个 git status --porcelain 调用除外）
* 可见文字宽度≤80个字符（ANSI码不计算在内）
* 颜色在深色和浅色终端背景下都能正确渲染
* 典型工作区中的执行时间 < 100 毫秒（缓存的调用应 < 20 毫秒）
* 优雅地处理丢失的 Git 存储库
* 缓存文件在 /tmp 中创建并遵循 TTL
* 当.git/index mtime改变或者5秒过去时Git文件计数刷新

## 决策背景

这是一个“专业开发人员”风格的状态栏。它优先考虑：

* 详细的Git信息，用于分支切换感知
* API 效率监控以实现成本意识开发
*每个字符的最大信息的视觉密度
````

---

## English Original

### Title

Claude Code Statusline Design

### Description

Build a professional Claude Code custom status bar for developers.

### Prompt

````md
# Task: Create a Professional Developer Status Bar for Claude Code

## Role

You are a systems programmer creating a highly-optimized status bar script for Claude Code.

## Deliverable

A single-file Python script (`~/.claude/statusline.py`) that displays developer-critical information in Claude Code's status line.

## Input Specification

Read JSON from stdin with this structure:

```json
{
  "model": {"display_name": "Opus|Sonnet|Haiku"},
  "workspace": {"current_dir": "/path/to/workspace", "project_dir": "/path/to/project"},
  "output_style": {"name": "explanatory|default|concise"},
  "cost": {
    "total_cost_usd": 0.0,
    "total_duration_ms": 0,
    "total_api_duration_ms": 0,
    "total_lines_added": 0,
    "total_lines_removed": 0
  }
}

```

## Output Requirements

### Format

* Print exactly ONE line to stdout
* Use ANSI 256-color codes: \033[38;5;Nm with optimized color palette for high contrast
* Smart truncation: Visible text width ≤ 80 characters (ANSI escape codes do NOT count toward limit)
* Use unicode symbols: ● (clean), + (added), ~ (modified)
* Color palette: orange 208, blue 33, green 154, yellow 229, red 196, gray 245 (tested for both dark/light terminals)

### Information Architecture (Left to Right Priority)

1. Core: Model name (orange)
2. Context: Project directory basename (blue)
3. Git Status:
* Branch name (green)
* Clean: ● (dim gray)
* Modified: ~N (yellow, N = file count)
* Added: +N (yellow, N = file count)


4. Metadata (dim gray):
* Uncommitted files: !N (red, N = count from git status --porcelain)
* API ratio: A:N% (N = api_duration / total_duration * 100)



### Example Output

\033[38;5;208mOpus\033[0m \033[38;5;33mIsaacLab\033[0m \033[38;5;154mmain\033[0m \033[38;5;245m●\033[0m \033[38;5;245mA:12%\033[0m

## Technical Constraints

### Performance (CRITICAL)

* Execution time: < 100ms (called every 300ms)
* Cache persistence: Store Git status cache in /tmp/claude_statusline_cache.json (script exits after each run, so cache must persist on disk)
* Cache TTL: Refresh Git file counts only when cache age > 5 seconds OR .git/index mtime changes
* Git logic optimization:
* Branch name: Read .git/HEAD directly (no subprocess)
* File counts: Call subprocess.run(['git', 'status', '--porcelain']) ONLY when cache expires


* Standard library only: No external dependencies (use only sys, json, os, pathlib, subprocess, time)

### Error Handling

* JSON parse error → return empty string ""
* Missing fields → omit that section (do not crash)
* Git directory not found → omit Git section entirely
* Any exception → return empty string ""

## Code Structure

* Single file, < 100 lines
* UTF-8 encoding handled for robust unicode output
* Maximum one function per concern (parsing, git, formatting)
* Type hints required for all functions
* Docstring for each function explaining its purpose

## Integration Steps

1. Save script to ~/.claude/statusline.py
2. Run chmod +x ~/.claude/statusline.py
3. Add to ~/.claude/settings.json:

```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.py",
    "padding": 0
  }
}

```

4. Test manually: echo '{"model":{"display_name":"Test"},"workspace":{"current_dir":"/tmp"}}' | ~/.claude/statusline.py

## Verification Checklist

* Script executes without external dependencies (except single git status --porcelain call when cached)
* Visible text width ≤ 80 characters (ANSI codes excluded from calculation)
* Colors render correctly in both dark and light terminal backgrounds
* Execution time < 100ms in typical workspace (cached calls should be < 20ms)
* Gracefully handles missing Git repository
* Cache file is created in /tmp and respects TTL
* Git file counts refresh when .git/index mtime changes or 5 seconds elapse

## Context for Decisions

This is a "developer professional" style status bar. It prioritizes:

* Detailed Git information for branch switching awareness
* API efficiency monitoring for cost-conscious development
* Visual density for maximum information per character
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [claude-code-statusline-design](https://prompts.chat/prompts/claude-code-statusline-design) |
| Category | Automation & Workflows (`automation-workflows`) |
| Type | `TEXT` |
| Tags | Claude |
| Contributors | CCanxue |
| Updated At | 2026-01-30T07:55:49.484Z |
