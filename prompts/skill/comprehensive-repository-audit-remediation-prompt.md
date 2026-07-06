# 全面的存储库审核和修复提示词

## 中文说明

用于让 AI 围绕「全面的存储库审核和修复提示词」执行AI 技能设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

````md
## 目标
对整个存储库进行彻底分析，以识别、确定优先级、修复和记录任何编程语言、框架或技术堆栈中的所有可验证bug、安全漏洞和关键问题。

## 第 1 阶段：初始存储库评估

### 1.1 架构映射
- 映射完整的项目结构（src/、lib/、tests/、docs/、config/、scripts/等）
- 识别技术堆栈和依赖项（package.json、requirements.txt、go.mod、pom.xml、Gemfile 等）
- 记录主要入口点、关键路径和系统边界
- 分析构建配置和 CI/CD 管道
- 查看现有文档（README、API 文档、架构图）

### 1.2 开发环境分析
- 识别测试框架（Jest、pytest、PHPUnit、Go test、JUnit、RSpec 等）
- 检查 linting/格式化配置（ESLint、Prettier、Black、RuboCop 等）
- 检查现有问题跟踪（GitHub 问题、TODO/FIXME/HACK/XXX 评论）
- 分析最近有问题的区域的提交历史记录
- 审查现有的测试覆盖率报告（如果有）

## 第 2 阶段：系统性bug发现

### 2.1 要识别的bug类别
**严重bug：**
- 安全漏洞（SQL注入、XSS、CSRF、身份验证绕过等）
- 数据损坏或丢失风险
- 系统崩溃或死锁
- 内存泄漏或资源耗尽

**功能bug：**
- 逻辑bug（不正确的条件、bug的计算、相差一bug）
- 状态管理问题（竞争条件、状态不一致、突变不当）
- 不正确的API合约或数据映射
- 验证缺失或不正确
- 破坏业务规则或工作流程

**集成bug：**
- 外部API使用不正确
- 数据库查询bug或效率低下
- 消息队列处理问题
- 文件系统操作问题
- 网络通讯bug

**边缘情况和bug 处理：**
- 空/未定义/零处理
- 空集合或零值边缘情况
- 边界条件和限制违规
- 丢失bug传播或吞噬异常
- 超时和重试逻辑问题

**代码质量问题：**
- 类型不匹配或不安全的强制转换
- 已弃用的 API 使用
- 死代码或无法访问的分支
- 循环依赖
- 性能瓶颈（N+1查询、低效算法）

### 2.2 发现方法
- 使用特定于语言的工具进行静态代码分析
- 常见反模式的模式匹配
- 依赖漏洞扫描
- 对无法访问或未经测试的代码进行代码路径分析
- 配置验证
- 交叉参考文档与实施

## 第 3 阶段：bug文档和优先级排序

### 3.1 bug报告模板
对于每个已识别的bug，记录：
```
BUG-ID: [Sequential identifier]
Severity: [CRITICAL | HIGH | MEDIUM | LOW]
Category: [Security | Functional | Performance | Integration | Code Quality]
File(s): [Complete file path(s) and line numbers]
Component: [Module/Service/Feature affected]

Description:
- Current behavior (what's wrong)
- Expected behavior (what should happen)
- Root cause analysis

Impact Assessment:
- User impact (UX degradation, data loss, security exposure)
- System impact (performance, stability, scalability)
- Business impact (compliance, revenue, reputation)

Reproduction Steps:
1. [Step-by-step instructions]
2. [Include test data/conditions if needed]
3. [Expected vs actual results]

Verification Method:
- [Code snippet or test that demonstrates the bug]
- [Metrics or logs showing the issue]

Dependencies:
- Related bugs: [List of related BUG-IDs]
- Blocking issues: [What needs to be fixed first]
```

### 3.2 优先级矩阵
使用以下方法对bug进行排名：
- **严重性**：严重 > 高 > 中 > 低
- **用户影响**：受影响的用户/功能数量
- **修复复杂性**：简单 < 中等 < 复杂
- **回归风险**：低 < 中 < 高

## 第 4 阶段：修复实施

### 4.1 修复策略
**对于每个bug：**
1. 创建独立的修复分支（如果使用版本控制）
2. 首先编写失败的测试（TDD 方法）
3. 实施最少的、集中的修复
4. 验证测试通过
5. 运行回归测试
6. 如果需要更新文档

### 4.2 修复指南
- **最小改变原则**：做出正确解决问题的最小改变
- **无范围膨胀**：避免不相关的refactor或改进
- **保留向后兼容性**：除非bug本身是一个破坏性的 API
- **遵循项目标准**：使用现有的代码风格和模式
- **添加防御性编程**：防止将来出现类似的bug

### 4.3 代码审查清单
- [ ] 修复解决根本原因，而不仅仅是症状
- [ ] 处理所有边缘情况
- [ ] bug消息清晰且可操作
- [ ] 性能影响是可以接受的
- [ ] 考虑安全影响
- [ ] 没有引入新的警告或 linting bug

## 第 5 阶段：测试和验证

### 5.1 测试要求
**对于每个已修复的bug，请提供：**
1. **单元测试**：针对特定修复的隔离测试
2. **集成测试**：如果bug涉及多个组件
3. **回归测试**：确保修复不会破坏现有功能
4. **边缘情况测试**：覆盖相关边界条件

### 5.2 测试结构
```[language-specific]
describe('BUG-[ID]: [Bug description]', () => {
  test('should fail with original bug', () => {
    // This test would fail before the fix
    // Demonstrates the bug
  });

  test('should pass after fix', () => {
    // This test passes after the fix
    // Verifies correct behavior
  });

  test('should handle edge cases', () => {
    // Additional edge case coverage
  });
});
```

### 5.3 验证步骤
1.运行完整的测试套件：`[npm test | pytest | go test ./... | mvn test | etc.]`
2.检查代码覆盖率变化
3.运行静态分析工具
4. 验证性能基准（如果适用）
5.在不同环境下测试（如果可能的话）

## 第 6 阶段：文档和报告

### 6.1 修复文档
对于每个已修复的bug：
- 更新解释修复的内联代码注释
- 添加/更新 API 文档（如果行为发生变化）
- 创建/更新故障排除指南
- 记录未解决问题的所有解决方法

### 6.2 执行摘要报告
```markdown
# Bug Fix Report - [Repository Name]
Date: [YYYY-MM-DD]
Analyzer: [Tool/Person Name]

## Overview
- Total Bugs Found: [X]
- Total Bugs Fixed: [Y]
- Unfixed/Deferred: [Z]
- Test Coverage Change: [Before]% → [After]%

## Critical Findings
[List top 3-5 most critical bugs found and fixed]

## Fix Summary by Category
- Security: [X bugs fixed]
- Functional: [Y bugs fixed]
- Performance: [Z bugs fixed]
- Integration: [W bugs fixed]
- Code Quality: [V bugs fixed]

## Detailed Fix List
[Organized table with columns: BUG-ID | File | Description | Status | Test Added]

## Risk Assessment
- Remaining High-Priority Issues: [List]
- Recommended Next Steps: [Actions]
- Technical Debt Identified: [Summary]

## Testing Results
- Test Command: [exact command used]
- Tests Passed: [X/Y]
- New Tests Added: [Count]
- Coverage Impact: [Details]
```

### 6.3 可交付成果清单
- [ ] 所有bug均以标准格式记录
- [ ] 修复已实施并经过测试
- [ ] 测试套件已更新并通过
- [ ] 文档已更新
- [ ] 代码审查已完成
- [ ] 评估绩效影响
- [ ] 进行安全审查（针对与安全相关的修复）
- [ ] 准备好部署说明

## 第 7 阶段：持续改进

### 7.1 模式分析
- 识别常见的bug模式
- 建议预防措施
- 推荐工具改进
- 提出架构变更建议以防止类似问题

### 7.2 监控建议
- 建议跟踪指标
- 推荐警报规则
- 提出日志记录改进建议
- 确定需要更好测试覆盖率的领域

## 限制和最佳实践

1. **为了简单起见，永远不要牺牲安全性**
2. **维护所有变更的审计跟踪**
3. **如果修复更改 API，则遵循语义版本控制**
4. **测试外部服务时的尊重率限制**
5. **使用功能标志**进行高风险修复（如果适用）
6. **考虑每个修复的回滚策略**
7. **记录分析期间做出的假设**

## 输出格式
提供以下两个方面的结果：
- 人类可读的 Markdown
- 用于自动化处理的 JSON/YAML
- 用于bug跟踪系统导入的 CSV

## 特别注意事项
- 对于 monorepos：分别分析每个包
- 对于微服务：考虑服务间依赖关系
- 对于遗留代码：平衡修复风险与收益
- 对于第三方依赖项：如果需要，请报告上游
````

---

## English Original

### Title

Comprehensive Repository Audit & Remediation Prompt

### Description



### Prompt

````md
## Objective
Conduct a thorough analysis of the entire repository to identify, prioritize, fix, and document ALL verifiable bugs, security vulnerabilities, and critical issues across any programming language, framework, or technology stack.

## Phase 1: Initial Repository Assessment

### 1.1 Architecture Mapping
- Map complete project structure (src/, lib/, tests/, docs/, config/, scripts/, etc.)
- Identify technology stack and dependencies (package.json, requirements.txt, go.mod, pom.xml, Gemfile, etc.)
- Document main entry points, critical paths, and system boundaries
- Analyze build configurations and CI/CD pipelines
- Review existing documentation (README, API docs, architecture diagrams)

### 1.2 Development Environment Analysis
- Identify testing frameworks (Jest, pytest, PHPUnit, Go test, JUnit, RSpec, etc.)
- Review linting/formatting configurations (ESLint, Prettier, Black, RuboCop, etc.)
- Check for existing issue tracking (GitHub Issues, TODO/FIXME/HACK/XXX comments)
- Analyze commit history for recent problematic areas
- Review existing test coverage reports if available

## Phase 2: Systematic Bug Discovery

### 2.1 Bug Categories to Identify
**Critical Bugs:**
- Security vulnerabilities (SQL injection, XSS, CSRF, auth bypass, etc.)
- Data corruption or loss risks
- System crashes or deadlocks
- Memory leaks or resource exhaustion

**Functional Bugs:**
- Logic errors (incorrect conditions, wrong calculations, off-by-one errors)
- State management issues (race conditions, inconsistent state, improper mutations)
- Incorrect API contracts or data mappings
- Missing or incorrect validations
- Broken business rules or workflows

**Integration Bugs:**
- Incorrect external API usage
- Database query errors or inefficiencies
- Message queue handling issues
- File system operation problems
- Network communication errors

**Edge Cases & Error Handling:**
- Null/undefined/nil handling
- Empty collections or zero-value edge cases
- Boundary conditions and limit violations
- Missing error propagation or swallowing exceptions
- Timeout and retry logic issues

**Code Quality Issues:**
- Type mismatches or unsafe casts
- Deprecated API usage
- Dead code or unreachable branches
- Circular dependencies
- Performance bottlenecks (N+1 queries, inefficient algorithms)

### 2.2 Discovery Methods
- Static code analysis using language-specific tools
- Pattern matching for common anti-patterns
- Dependency vulnerability scanning
- Code path analysis for unreachable or untested code
- Configuration validation
- Cross-reference documentation with implementation

## Phase 3: Bug Documentation & Prioritization

### 3.1 Bug Report Template
For each identified bug, document:
```
BUG-ID: [Sequential identifier]
Severity: [CRITICAL | HIGH | MEDIUM | LOW]
Category: [Security | Functional | Performance | Integration | Code Quality]
File(s): [Complete file path(s) and line numbers]
Component: [Module/Service/Feature affected]

Description:
- Current behavior (what's wrong)
- Expected behavior (what should happen)
- Root cause analysis

Impact Assessment:
- User impact (UX degradation, data loss, security exposure)
- System impact (performance, stability, scalability)
- Business impact (compliance, revenue, reputation)

Reproduction Steps:
1. [Step-by-step instructions]
2. [Include test data/conditions if needed]
3. [Expected vs actual results]

Verification Method:
- [Code snippet or test that demonstrates the bug]
- [Metrics or logs showing the issue]

Dependencies:
- Related bugs: [List of related BUG-IDs]
- Blocking issues: [What needs to be fixed first]
```

### 3.2 Prioritization Matrix
Rank bugs using:
- **Severity**: Critical > High > Medium > Low
- **User Impact**: Number of affected users/features
- **Fix Complexity**: Simple < Medium < Complex
- **Risk of Regression**: Low < Medium < High

## Phase 4: Fix Implementation

### 4.1 Fix Strategy
**For each bug:**
1. Create isolated fix branch (if using version control)
2. Write failing test FIRST (TDD approach)
3. Implement minimal, focused fix
4. Verify test passes
5. Run regression tests
6. Update documentation if needed

### 4.2 Fix Guidelines
- **Minimal Change Principle**: Make the smallest change that correctly fixes the issue
- **No Scope Creep**: Avoid unrelated refactoring or improvements
- **Preserve Backwards Compatibility**: Unless the bug itself is a breaking API
- **Follow Project Standards**: Use existing code style and patterns
- **Add Defensive Programming**: Prevent similar bugs in the future

### 4.3 Code Review Checklist
- [ ] Fix addresses the root cause, not just symptoms
- [ ] All edge cases are handled
- [ ] Error messages are clear and actionable
- [ ] Performance impact is acceptable
- [ ] Security implications considered
- [ ] No new warnings or linting errors introduced

## Phase 5: Testing & Validation

### 5.1 Test Requirements
**For EVERY fixed bug, provide:**
1. **Unit Test**: Isolated test for the specific fix
2. **Integration Test**: If bug involves multiple components
3. **Regression Test**: Ensure fix doesn't break existing functionality
4. **Edge Case Tests**: Cover related boundary conditions

### 5.2 Test Structure
```[language-specific]
describe('BUG-[ID]: [Bug description]', () => {
  test('should fail with original bug', () => {
    // This test would fail before the fix
    // Demonstrates the bug
  });
  
  test('should pass after fix', () => {
    // This test passes after the fix
    // Verifies correct behavior
  });
  
  test('should handle edge cases', () => {
    // Additional edge case coverage
  });
});
```

### 5.3 Validation Steps
1. Run full test suite: `[npm test | pytest | go test ./... | mvn test | etc.]`
2. Check code coverage changes
3. Run static analysis tools
4. Verify performance benchmarks (if applicable)
5. Test in different environments (if possible)

## Phase 6: Documentation & Reporting

### 6.1 Fix Documentation
For each fixed bug:
- Update inline code comments explaining the fix
- Add/update API documentation if behavior changed
- Create/update troubleshooting guides
- Document any workarounds for unfixed issues

### 6.2 Executive Summary Report
```markdown
# Bug Fix Report - [Repository Name]
Date: [YYYY-MM-DD]
Analyzer: [Tool/Person Name]

## Overview
- Total Bugs Found: [X]
- Total Bugs Fixed: [Y]
- Unfixed/Deferred: [Z]
- Test Coverage Change: [Before]% → [After]%

## Critical Findings
[List top 3-5 most critical bugs found and fixed]

## Fix Summary by Category
- Security: [X bugs fixed]
- Functional: [Y bugs fixed]
- Performance: [Z bugs fixed]
- Integration: [W bugs fixed]
- Code Quality: [V bugs fixed]

## Detailed Fix List
[Organized table with columns: BUG-ID | File | Description | Status | Test Added]

## Risk Assessment
- Remaining High-Priority Issues: [List]
- Recommended Next Steps: [Actions]
- Technical Debt Identified: [Summary]

## Testing Results
- Test Command: [exact command used]
- Tests Passed: [X/Y]
- New Tests Added: [Count]
- Coverage Impact: [Details]
```

### 6.3 Deliverables Checklist
- [ ] All bugs documented in standard format
- [ ] Fixes implemented and tested
- [ ] Test suite updated and passing
- [ ] Documentation updated
- [ ] Code review completed
- [ ] Performance impact assessed
- [ ] Security review conducted (for security-related fixes)
- [ ] Deployment notes prepared

## Phase 7: Continuous Improvement

### 7.1 Pattern Analysis
- Identify common bug patterns
- Suggest preventive measures
- Recommend tooling improvements
- Propose architectural changes to prevent similar issues

### 7.2 Monitoring Recommendations
- Suggest metrics to track
- Recommend alerting rules
- Propose logging improvements
- Identify areas needing better test coverage

## Constraints & Best Practices

1. **Never compromise security** for simplicity
2. **Maintain audit trail** of all changes
3. **Follow semantic versioning** if fixes change API
4. **Respect rate limits** when testing external services
5. **Use feature flags** for high-risk fixes (if applicable)
6. **Consider rollback strategy** for each fix
7. **Document assumptions** made during analysis

## Output Format
Provide results in both:
- Markdown for human readability
- JSON/YAML for automated processing
- CSV for bug tracking systems import

## Special Considerations
- For monorepos: Analyze each package separately
- For microservices: Consider inter-service dependencies
- For legacy code: Balance fix risk vs benefit
- For third-party dependencies: Report upstream if needed
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
