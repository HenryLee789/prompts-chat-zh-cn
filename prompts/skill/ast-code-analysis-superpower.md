---
id: "cmjmk2f8i000bld04ikqh7i78"
slug: "ast-code-analysis-superpower"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ast-code-analysis-superpower"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "8ed3f63b0406023627f9b2c34f1b4e72eefdc1ce12317ee3849778a810ad2c28"
upstream_updated_at: "2026-01-15T14:37:01.985Z"
---
# AST 代码分析超能力

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ast-code-analysis-superpower](https://prompts.chat/prompts/ast-code-analysis-superpower)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

使用 ast-grep 进行基于 AST 的代码模式分析，以解决安全性、性能和结构问题。在以下情况下使用：(1) 检查代码是否存在安全漏洞；(2) 分析 React 钩子依赖性或性能模式；(3) 检测大型代码库中的结构反模式；(4) 需要超出手动检查的系统模式匹配。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Skill、AI Tools、JavaScript、TypeScript 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称：ast-代码分析-超能力
描述：使用 ast-grep 进行基于 AST 的代码模式分析，以解决安全性、性能和结构问题。在以下情况下使用：(1) 检查代码是否存在安全漏洞；(2) 分析 React 钩子依赖性或性能模式；(3) 检测大型代码库中的结构反模式；(4) 需要超出手动检查的系统模式匹配。
---

# AST-Grep 代码分析

AST 模式匹配通过结构识别而不是逐行读取来识别代码问题。代码结构揭示了表面检查遗漏的隐藏关系、漏洞和反模式。

## 配置

- **目标语言**：${language:javascript}
- **分析重点**：${analysis_focus:security}
- **严重级别**：${severity_level:ERROR}
- **框架**：${framework:React}
- **最大嵌套深度**：${max_nesting:3}

## 先决条件

```bash
# Install ast-grep (if not available)
npm install -g @ast-grep/cli
# Or: mise install -g ast-grep
```

## 决策树：何时使用 AST 分析

```
Code review needed?
|
+-- Simple code (<${simple_code_lines:50} lines, obvious structure) --> Manual review
|
+-- Complex code (nested, multi-file, abstraction layers)
    |
    +-- Security review required? --> Use security patterns
    +-- Performance analysis? --> Use performance patterns
    +-- Structural quality? --> Use structure patterns
    +-- Cross-file patterns? --> Run with --include glob
```

## 模式类别

|类别 |焦点 |共同发现|
|----------|------|-----------------|
|安全|加密功能、身份验证流程 |硬编码的秘密，弱令牌|
|性能|钩子、循环、异步 |无限重新渲染、内存泄漏 |
|结构|嵌套，复杂性|深层条件，可维护性 |

## 基本模式

### 安全性：硬编码的秘密

```yaml
# sg-rules/security/hardcoded-secrets.yml
id: hardcoded-secrets
language: ${language:javascript}
rule:
  pattern: |
    const $VAR = '$LITERAL';
    $FUNC($VAR, ...)
  meta:
    severity: ${severity_level:ERROR}
    message: "Potential hardcoded secret detected"
```

### 安全性：不安全的令牌生成

```yaml
# sg-rules/security/insecure-tokens.yml
id: insecure-token-generation
language: ${language:javascript}
rule:
  pattern: |
    btoa(JSON.stringify($OBJ) + '.' + $SECRET)
  meta:
    severity: ${severity_level:ERROR}
    message: "Insecure token generation using base64"
```

### 性能：${framework:React} 挂钩依赖项

```yaml
# sg-rules/performance/react-hook-deps.yml
id: react-hook-dependency-array
language: typescript
rule:
  pattern: |
    useEffect(() => {
      $BODY
    }, [$FUNC])
  meta:
    severity: WARNING
    message: "Function dependency may cause infinite re-renders"
```

### 结构：深度嵌套

```yaml
# sg-rules/structure/deep-nesting.yml
id: deep-nesting
language: ${language:javascript}
rule:
  any:
    - pattern: |
        if ($COND1) {
          if ($COND2) {
            if ($COND3) {
              $BODY
            }
          }
        }
    - pattern: |
        for ($INIT) {
          for ($INIT2) {
            for ($INIT3) {
              $BODY
            }
          }
        }
  meta:
    severity: WARNING
    message: "Deep nesting (>${max_nesting:3} levels) - consider refactoring"
```

## 运行分析

```bash
# Security scan
ast-grep run -r sg-rules/security/

# Performance scan on ${framework:React} files
ast-grep run -r sg-rules/performance/ --include="*.tsx,*.jsx"

# Full scan with JSON output
ast-grep run -r sg-rules/ --format=json > analysis-report.json

# Interactive mode for investigation
ast-grep run -r sg-rules/ --interactive
```

## 模式编写清单

- [ ] 模式匹配特定的反模式，而不是一般代码
- [ ] 使用 `inside` 或 `has` 进行上下文约束
- [ ] 包括 `not` 约束以减少误报
- [ ] 每种语言都有单独的规则（JS 与 TS）
- [ ] 适当的严重性（${severity_level:ERROR}/警告/信息）

## 常见错误

|错误|症状|修复 |
|---------|---------|-----|
|图案过于通用|许多误报|添加上下文约束 |
|失踪 `inside` |匹配错误的位置 |具有父上下文的范围 |
|无 `not` 条款 |匹配有效模式 |排除已知良好的案例 |
| TS 上的 JS 模式 |类型注释打破匹配 |创建特定于语言的规则 |

## 验证步骤

1. **测试模式准确性**：在已知存在漏洞的代码示例上运行
2. **检查误报率**：手动检查第一个 ${sample_size:10} 匹配
3. **验证严重性**：确认 ${severity_level:ERROR} 级别的发现是可行的
4. **跨文件覆盖**：验证模式在预期范围内运行

## 输出示例

```
$ ast-grep run -r sg-rules/
src/components/UserProfile.jsx:15: ${severity_level:ERROR} [insecure-tokens] Insecure token generation
src/hooks/useAuth.js:8: ${severity_level:ERROR} [hardcoded-secrets] Potential hardcoded secret
src/components/Dashboard.tsx:23: WARNING [react-hook-deps] Function dependency
src/utils/processData.js:45: WARNING [deep-nesting] Deep nesting detected

Found 4 issues (2 errors, 2 warnings)
```

## 项目设置

```bash
# Initialize ast-grep in project
ast-grep init

# Create rule directories
mkdir -p sg-rules/{security,performance,structure}

# Add to CI pipeline
# .github/workflows/lint.yml
# - run: ast-grep run -r sg-rules/ --format=json
```

## 自定义模式模板

### ${framework:React} 具体模式

```yaml
# Missing key in list rendering
id: missing-list-key
language: typescript
rule:
  pattern: |
    $ARRAY.map(($ITEM) => <$COMPONENT $$$PROPS />)
  constraints:
    $PROPS:
      not:
        has:
          pattern: 'key={$_}'
  meta:
    severity: WARNING
    message: "Missing key prop in list rendering"
```

### 异步/等待模式

```yaml
# Missing error handling in async
id: unhandled-async
language: ${language:javascript}
rule:
  pattern: |
    async function $NAME($$$) {
      $$$BODY
    }
  constraints:
    $BODY:
      not:
        has:
          pattern: 'try { $$$ } catch'
  meta:
    severity: WARNING
    message: "Async function without try-catch error handling"
```

## 与 CI/CD 集成

```yaml
# GitHub Actions example
name: AST Analysis
on: [push, pull_request]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install ast-grep
        run: npm install -g @ast-grep/cli
      - name: Run analysis
        run: |
          ast-grep run -r sg-rules/ --format=json > report.json
          if grep -q '"severity": "${severity_level:ERROR}"' report.json; then
            echo "Critical issues found!"
            exit 1
          fi
```
````

---

## English Original

### Title

AST Code Analysis Superpower

### Description

AST-based code pattern analysis using ast-grep for security, performance, and structural issues. Use when (1) reviewing code for security vulnerabilities, (2) analyzing React hook dependencies or performance patterns, (3) detecting structural anti-patterns across large codebases, (4) needing systematic pattern matching beyond manual inspection.

### Prompt

````md
---
name: ast-code-analysis-superpower
description: AST-based code pattern analysis using ast-grep for security, performance, and structural issues. Use when (1) reviewing code for security vulnerabilities, (2) analyzing React hook dependencies or performance patterns, (3) detecting structural anti-patterns across large codebases, (4) needing systematic pattern matching beyond manual inspection.
---

# AST-Grep Code Analysis

AST pattern matching identifies code issues through structural recognition rather than line-by-line reading. Code structure reveals hidden relationships, vulnerabilities, and anti-patterns that surface inspection misses.

## Configuration

- **Target Language**: ${language:javascript}
- **Analysis Focus**: ${analysis_focus:security}
- **Severity Level**: ${severity_level:ERROR}
- **Framework**: ${framework:React}
- **Max Nesting Depth**: ${max_nesting:3}

## Prerequisites

```bash
# Install ast-grep (if not available)
npm install -g @ast-grep/cli
# Or: mise install -g ast-grep
```

## Decision Tree: When to Use AST Analysis

```
Code review needed?
|
+-- Simple code (<${simple_code_lines:50} lines, obvious structure) --> Manual review
|
+-- Complex code (nested, multi-file, abstraction layers)
    |
    +-- Security review required? --> Use security patterns
    +-- Performance analysis? --> Use performance patterns
    +-- Structural quality? --> Use structure patterns
    +-- Cross-file patterns? --> Run with --include glob
```

## Pattern Categories

| Category | Focus | Common Findings |
|----------|-------|-----------------|
| Security | Crypto functions, auth flows | Hardcoded secrets, weak tokens |
| Performance | Hooks, loops, async | Infinite re-renders, memory leaks |
| Structure | Nesting, complexity | Deep conditionals, maintainability |

## Essential Patterns

### Security: Hardcoded Secrets

```yaml
# sg-rules/security/hardcoded-secrets.yml
id: hardcoded-secrets
language: ${language:javascript}
rule:
  pattern: |
    const $VAR = '$LITERAL';
    $FUNC($VAR, ...)
  meta:
    severity: ${severity_level:ERROR}
    message: "Potential hardcoded secret detected"
```

### Security: Insecure Token Generation

```yaml
# sg-rules/security/insecure-tokens.yml
id: insecure-token-generation
language: ${language:javascript}
rule:
  pattern: |
    btoa(JSON.stringify($OBJ) + '.' + $SECRET)
  meta:
    severity: ${severity_level:ERROR}
    message: "Insecure token generation using base64"
```

### Performance: ${framework:React} Hook Dependencies

```yaml
# sg-rules/performance/react-hook-deps.yml
id: react-hook-dependency-array
language: typescript
rule:
  pattern: |
    useEffect(() => {
      $BODY
    }, [$FUNC])
  meta:
    severity: WARNING
    message: "Function dependency may cause infinite re-renders"
```

### Structure: Deep Nesting

```yaml
# sg-rules/structure/deep-nesting.yml
id: deep-nesting
language: ${language:javascript}
rule:
  any:
    - pattern: |
        if ($COND1) {
          if ($COND2) {
            if ($COND3) {
              $BODY
            }
          }
        }
    - pattern: |
        for ($INIT) {
          for ($INIT2) {
            for ($INIT3) {
              $BODY
            }
          }
        }
  meta:
    severity: WARNING
    message: "Deep nesting (>${max_nesting:3} levels) - consider refactoring"
```

## Running Analysis

```bash
# Security scan
ast-grep run -r sg-rules/security/

# Performance scan on ${framework:React} files
ast-grep run -r sg-rules/performance/ --include="*.tsx,*.jsx"

# Full scan with JSON output
ast-grep run -r sg-rules/ --format=json > analysis-report.json

# Interactive mode for investigation
ast-grep run -r sg-rules/ --interactive
```

## Pattern Writing Checklist

- [ ] Pattern matches specific anti-pattern, not general code
- [ ] Uses `inside` or `has` for context constraints
- [ ] Includes `not` constraints to reduce false positives
- [ ] Separate rules per language (JS vs TS)
- [ ] Appropriate severity (${severity_level:ERROR}/WARNING/INFO)

## Common Mistakes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Too generic patterns | Many false positives | Add context constraints |
| Missing `inside` | Matches wrong locations | Scope with parent context |
| No `not` clauses | Matches valid patterns | Exclude known-good cases |
| JS patterns on TS | Type annotations break match | Create language-specific rules |

## Verification Steps

1. **Test pattern accuracy**: Run on known-vulnerable code samples
2. **Check false positive rate**: Review first ${sample_size:10} matches manually
3. **Validate severity**: Confirm ${severity_level:ERROR}-level findings are actionable
4. **Cross-file coverage**: Verify pattern runs across intended scope

## Example Output

```
$ ast-grep run -r sg-rules/
src/components/UserProfile.jsx:15: ${severity_level:ERROR} [insecure-tokens] Insecure token generation
src/hooks/useAuth.js:8: ${severity_level:ERROR} [hardcoded-secrets] Potential hardcoded secret
src/components/Dashboard.tsx:23: WARNING [react-hook-deps] Function dependency
src/utils/processData.js:45: WARNING [deep-nesting] Deep nesting detected

Found 4 issues (2 errors, 2 warnings)
```

## Project Setup

```bash
# Initialize ast-grep in project
ast-grep init

# Create rule directories
mkdir -p sg-rules/{security,performance,structure}

# Add to CI pipeline
# .github/workflows/lint.yml
# - run: ast-grep run -r sg-rules/ --format=json
```

## Custom Pattern Templates

### ${framework:React} Specific Patterns

```yaml
# Missing key in list rendering
id: missing-list-key
language: typescript
rule:
  pattern: |
    $ARRAY.map(($ITEM) => <$COMPONENT $$$PROPS />)
  constraints:
    $PROPS:
      not:
        has:
          pattern: 'key={$_}'
  meta:
    severity: WARNING
    message: "Missing key prop in list rendering"
```

### Async/Await Patterns

```yaml
# Missing error handling in async
id: unhandled-async
language: ${language:javascript}
rule:
  pattern: |
    async function $NAME($$$) {
      $$$BODY
    }
  constraints:
    $BODY:
      not:
        has:
          pattern: 'try { $$$ } catch'
  meta:
    severity: WARNING
    message: "Async function without try-catch error handling"
```

## Integration with CI/CD

```yaml
# GitHub Actions example
name: AST Analysis
on: [push, pull_request]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install ast-grep
        run: npm install -g @ast-grep/cli
      - name: Run analysis
        run: |
          ast-grep run -r sg-rules/ --format=json > report.json
          if grep -q '"severity": "${severity_level:ERROR}"' report.json; then
            echo "Critical issues found!"
            exit 1
          fi
```
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ast-code-analysis-superpower](https://prompts.chat/prompts/ast-code-analysis-superpower) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | Skill, AI Tools, JavaScript, TypeScript, React |
| Contributors | izzetemre |
| Updated At | 2026-01-15T14:37:01.985Z |
