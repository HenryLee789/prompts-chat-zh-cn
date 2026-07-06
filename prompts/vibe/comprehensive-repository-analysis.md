---
id: "cmj9z33mi0001xt0qp39jin1b"
slug: "comprehensive-repository-analysis"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/comprehensive-repository-analysis"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "69f28e6b2eab4c1f9f8111f8924fda2ea4a5f560dfbe5e384b593ca07b5c36ac"
upstream_updated_at: "2026-01-08T19:51:10.448Z"
---
# 全面的存储库分析

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[comprehensive-repository-analysis](https://prompts.chat/prompts/comprehensive-repository-analysis)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于Vibe Coding场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Agent、Debugging、Code Review 等主题快速生成可复用结果。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
{
  “任务”：“综合存储库分析”，
  “目标”：“对整个代码库进行详尽的分析，以识别、确定优先级、修复和记录所有技术堆栈中的所有可验证的错误、安全漏洞和关键问题”，
  “分析阶段”：[
    {
      “阶段”：1，
      "name": "存储库发现和映射",
      “步骤”：[
        {
          “步骤”：“1.1”，
          "title": "架构与结构分析",
          “行动”：[
            “映射完整的目录结构（src/、lib/、tests/、docs/、config/、scripts/、build/、deploy/）”，
            “识别正在使用的所有技术堆栈和框架”，
            “解析依赖清单（package.json、requirements.txt、go.mod、pom.xml、Gemfile、Cargo.toml、composer.json）”，
            “文档入口点、主要执行路径和模块边界”，
            “分析构建系统（Webpack、Gradle、Maven、Make、CMake）”，
            “查看 CI/CD 配置（GitHub Actions、GitLab CI、Jenkins、CircleCI）”，
            “检查现有文档（自述文件、贡献、API 规范、架构图）”
          ]
        },
        {
          “步骤”：“1.2”，
          "title": "开发环境盘点",
          “行动”：[
            “确定测试框架（Jest、Mocha、pytest、PHPUnit、Go test、JUnit、RSpec、xUnit）”，
            “查看 linter/formatter 配置（ESLint、Prettier、Black、Flake8、RuboCop、golangci-lint、Checkstyle）”，
            “扫描内联问题标记（TODO、FIXME、HACK、XXX、BUG、NOTE）”，
            “分析 git 历史记录以查找有问题的模式和最近的修补程序”，
            “提取现有的测试覆盖率报告和指标”，
            “识别已在使用的代码分析工具（SonarQube、CodeClimate 等）”
          ]
        }
      ]
    },
    {
      “阶段”：2，
      "name": "系统性错误发现",
      “错误类别”：[
        {
          “类别”：“关键”，
          “严重性”：“P0”，
          “类型”：[
            “SQL注入漏洞”，
            “跨站脚本（XSS）缺陷”，
            “跨站请求伪造（CSRF）漏洞”，
            “身份验证/授权绕过”，
            “远程代码执行（RCE）风险”，
            “数据损坏或永久数据丢失”，
            “系统崩溃、死锁或无限循环”，
            “内存泄漏和资源耗尽”，
            “不安全的加密实现”，
            “硬编码的秘密或凭证”
          ]
        },
        {
          “类别”：“功能性”，
          “严重性”：“P1-P2”，
          “类型”：[
            “逻辑错误（不正确的条件、错误的计算、相差一的错误）”，
            “状态管理问题（竞争条件、陈旧状态、不当突变）”，
            “API 合约或请求/响应映射不正确”，
            “输入验证缺失或不足”，
            “破坏业务逻辑或违反工作流程”，
            “数据转换或序列化不正确”，
            “类型不匹配或不安全的类型强制”，
            “不正确的异常处理或错误传播”
          ]
        },
        {
          “类别”：“集成”，
          “严重性”：“P2”，
          “类型”：[
            “外部 API 使用不正确或端点过时”，
            “数据库查询错误、SQL语法问题或N+1问题”，
            “消息队列处理失败（RabbitMQ、Kafka、SQS）”，

"文件系统操作错误（权限、路径遍历）",
            “网络通信问题（超时、重试、连接池）”，
            “缓存不一致或失效问题”，
            “第三方库误用或版本不兼容”
          ]
        },
        {
          “类别”：“EDGE_CASES”，
          “严重性”：“P2-P3”，
          “类型”：[
            “空/未定义/零/无指针取消引用”，
            “空数组/列表/集合处理”，
            “零或负值边缘情况”，
            “边界条件（最大/最小整数，字符串长度限制）”，
            “缺少错误处理或吞噬异常”，
            “超时和重试逻辑失败”，
            “没有适当锁定的并发访问问题”，
            “数值运算中的上溢/下溢”
          ]
        },
        {
          “类别”：“代码质量”，
          “严重性”：“P3-P4”，
          “类型”：[
            “已弃用的 API 使用”，
            “死代码或无法访问的代码路径”，
            “循环依赖”，
            “性能瓶颈（低效算法、冗余操作）”，
            “类型注释缺失或不正确”，
            “不一致的错误处理模式”，
            “资源泄漏（文件句柄、数据库连接、网络套接字）”，
            “记录不当（敏感数据暴露、上下文不足）”
          ]
        }
      ],
      “discovery_methods”：[
        “使用特定于语言的工具进行静态代码分析”，
        “常见反模式和代码异味的模式匹配”，
        “依赖漏洞扫描（npm审计、pip审计、bundle审计、cargo审计）”，
        “控制流和数据流分析”，
        “死代码检测”，
        “根据最佳实践进行配置验证”，
        “文档到实施的交叉验证”，
        “以安全为中心的代码审查”
      ]
    },
    {
      “阶段”：3，
      "name": "错误文档和优先级",
      “bug_report_schema”：{
        "bug_id": "顺序标识符（BUG-001、BUG-002 等）",
        “严重性”：{
          “类型”：“枚举”，
          “价值观”：[
            “关键”，
            “高”，
            “中”，
            “低”
          ],
          "description": "错误严重级别"
        },
        “类别”：{
          “类型”：“枚举”，
          “价值观”：[
            “安全”，
            “功能性”，
            “性能”，
            “整合”，
            “代码质量”
          ],
          "description": "Bug 分类"
        },
        “位置”：{
          “文件”：[
            “受影响的文件路径及其行号的数组”
          ],
          "component": "模块/服务/功能名称",
          "function": "具体函数或方法名称"
        },
        “描述”：{
          "current_behavior": "出了什么问题或错误",
          "expected_behavior": "应该发生什么",
          "root_cause": "损坏原因的技术解释"
        },
        “影响评估”：{
          "user_impact": "对最终用户的影响（数据丢失、安全暴露、用户体验下降）",
          "system_impact": "对系统的影响（性能、稳定性、可扩展性）",
          "business_impact": "对业务的影响（合规、收入、声誉、法律）"
        },
        “复制”：{
          “步骤”：[
            “重现的分步说明”
          ],

"test_data": "需要的样本数据或条件",
          "actual_result": "重现时会发生什么",
          "expected_result": "应该发生什么"
        },
        “验证”：{
          "code_snippet": "显示错误的演示代码",
          "test_case": "由于此错误而失败的测试",
          "logs_or_metrics": "来自日志或监控的证据"
        },
        “依赖项”：{
          “相关错误”：[
            “相关 BUG-ID 数组”
          ],
          “阻塞问题”：[
            “必须首先修复的一系列错误”
          ],
          “被阻止”：[
            “阻碍修复的外部因素”
          ]
        },
        “元数据”：{
          "discovered_date": "ISO 8601 时间戳",
          "discovered_by": "使用的工具或方法",
          "cve_id": "如果适用，CVE 标识符",
          "cwe_id": "如果适用，CWE 标识符"
        }
      },
      “优先级矩阵”：{
        “标准”：[
          {
            “因素”：“严重性”，
            “重量”：0.4，
            “规模”：“关键= 100，高= 70，中= 40，低= 10”
          },
          {
            “因素”：“用户影响”，
            “重量”：0.3，
            "scale": "所有用户=100，许多=70，一些=40，少数=10"
          },
          {
            “因素”：“修复复杂性”，
            “重量”：0.15，
            "scale": "简单 = 100，中等 = 60，复杂 = 20"
          },
          {
            “因素”：“回归风险”，
            “重量”：0.15，
            "scale": "低=100，中=60，高=20"
          }
        ],
        "公式": "priority_score = Σ(factor_value × Weight)"
      }
    },
    {
      “阶段”：4，
      "name": "修复实施",
      “修复工作流程”：[
        {
          “步骤”：1、
          "action": "创建独立的修复分支",
          “命名”：“修复/BUG-{id}-{简短描述}”
        },
        {
          “步骤”：2，
          "action": "首先编写失败的测试",
          “rationale”：“测试驱动开发确保修复是可验证的”
        },
        {
          “步骤”：3，
          "action": "实施最小的、集中的修复",
          "principle": "正确解决问题的最小改变"
        },
        {
          “步骤”：4，
          "action": "验证测试现在通过",
          "validation": "运行特定测试和相关测试套件"
        },
        {
          “步骤”：5，
          "action": "运行完整的回归测试套件",
          "validation": "确保现有功能不会中断"
        },
        {
          “步骤”：6，
          "action": "更新文档",
          "scope": "API 文档、内联注释、变更日志"
        }
      ],
      “修复原则”：[
        “MINIMAL_CHANGE：进行正确解决问题的最小更改”，
        “NO_SCOPE_CREEP：避免不相关的重构或功能添加”，
        “BACKWARDS_COMPATIBLE：保留现有的 API 合约，除非 bug 本身正在破坏”，
        “FOLLOW_CONVENTIONS：遵守项目现有的代码风格和模式”，
        “DEFENSIVE_PROGRAMMING：添加防护以防止将来出现类似错误”，
        "EXPLICIT_OVER_IMPLICIT: 通过代码结构和注释使意图清晰",
        “FAIL_FAST：尽早验证输入并失败并显示明确的错误消息”
      ],
      “代码审查清单”：[
        “修复解决根本原因，而不仅仅是症状”，
        “所有边缘情况都得到妥善处理”，
        “错误消息清晰、可操作，并且不会泄露敏感信息”，

“性能影响是可以接受的（O(n) 就足够了，但没有 O(n²)）”，
        “彻底考虑安全影响”，
        “没有新的编译器警告或 linting 错误”，
        “测试涵盖了更改”，
        “文档已更新且准确”，
        “重大变更已明确标记且合理”，
        “依赖项是最新且安全的”
      ]
    },
    {
      “阶段”：5，
      "name": "测试与验证",
      “测试要求”：{
        “mandatory_tests_per_fix”：[
          {
            “类型”：“单元测试”，
            "description": "针对特定错误修复的隔离测试",
            "coverage": "必须覆盖损坏的确切代码路径"
          },
          {
            “类型”：“集成测试”，
            "description": "测试bug是否涉及多个组件",
            "coverage": "受影响系统的端到端流量"
          },
          {
            “类型”：“回归测试”，
            "description": "确保修复不会破坏现有功能",
            "coverage": "所有相关功能和代码路径"
          },
          {
            “类型”：“edge_case_tests”，
            "description": "涵盖边界条件和极端情况",
            "coverage": "空值、空输入、限制、错误条件"
          }
        ]
      },
      “测试结构模板”：{
        "description": "与语言无关的测试结构",
        “模板”：[
          "描述('BUG-{ID}: {描述}', () => {",
          " test('重现原始错误', () => {",
          “ // 该测试证明了该错误的存在”,
          " // 应该在修复之前失败，之后通过",
          “}）；”，
          "",
          " test('验证修复是否解决了问题', () => {",
          " // 此测试证明修复后行为正确",
          “}）；”，
          "",
          " test('处理边缘情况：{case}', () => {",
          " // 相关场景的附加覆盖范围",
          “}）；”，
          “}）；”
        ]
      },
      “验证步骤”：[
        {
          "step": "运行完整的测试套件",
          “命令”：{
            "javascript": "npm 测试",
            “python”：“pytest”，
            "go": "去测试./...",
            "java": "mvn 测试",
            "ruby": "bundle exec rspec",
            "rust": "货物测试",
            “php”：“phpunit”
          }
        },
        {
          "step": "测量代码覆盖率",
          “工具”：[
            “伊斯坦布尔/纽约”，
            “覆盖范围.py”，
            “贾可可”，
            “简单冠状病毒”，
            “篷布”
          ]
        },
        {
          "step": "运行静态分析",
          “工具”：[
            “ESLint”，
            “皮林特”，
            “golangci-lint”，
            “斑点虫”，
            “剪辑”
          ]
        },
        {
          "step": "性能基准测试",
          "condition": "如果修复影响热路径或关键操作"
        },
        {
          "step": "安全扫描",
          “工具”：[
            “斯尼克”，
            “OWASP 依赖性检查”，
            “琐事”，
            “强盗”
          ]
        }
      ]
    },
    {
      “阶段”：6，
      "name": "文档和报告",
      “修复文档要求”：[
        “更新内联代码注释，解释修复及其必要性”，
        “如果行为发生变化，请修改 API 文档”，
        “使用错误修复条目更新 CHANGELOG.md”，
        “创建或更新故障排除指南”，

“记录延迟/未解决问题的任何解决方法”，
        “如果修复需要用户操作，请添加迁移注释”
      ],
      “执行摘要模板”：{
        "title": "错误修复报告 - {repository_name}",
        “元数据”：{
          "date": "ISO 8601 日期",
          "analyzer": "工具/人名",
          "repository": "完整的存储库路径",
          "commit_hash": "Git 提交 SHA",
          "duration": "分析持续时间（以小时为单位）"
        },
        “概述”：{
          "total_bugs_found": "整数",
          "total_bugs_fixed": "整数",
          "bugs_deferred": "整数",
          "test_coverage_before": "百分比",
          "test_coverage_after": "百分比",
          "files_analyzed": "整数",
          "lines_of_code": "整数"
        },
        “关键调查结果”：[
          “发现的前 3-5 个最严重的错误及其修复”
        ],
        “按类别修复摘要”：{
          “安全”：“计数”，
          “功能”：“计数”，
          “性能”：“计数”，
          “积分”：“计数”，
          “code_quality”：“计数”
        },
        “详细修复表”：{
          “列”：[
            “BUG-ID”，
            “文件”，
            “线”，
            “类别”，
            “严重性”，
            “描述”，
            “状态”，
            “已添加测试”
          ],
          "format": "Markdown 表格或 CSV"
        },
        “风险评估”：{
          “剩余高优先级”：[
            “未解决的关键问题列表”
          ],
          “推荐的下一步”：[
            “优先行动项目”
          ],
          “技术债务”：[
            “已确定的技术债务摘要”
          ],
          “重大变化”：[
            “任何向后不兼容的修复”
          ]
        },
        “测试结果”：{
          "test_command": "用于运行测试的确切命令",
          "tests_passed": "Y 中的 X",
          "tests_failed": "统计原因",
          "tests_added": "计数",
          "coverage_delta": "+X% 或 -X%"
        }
      },
      “可交付成果清单”：[
        “所有错误均以标准化格式记录”，
        “以最小范围实施修复”，
        “测试套件已更新并通过”，
        “文档已更新（代码、API、用户指南）”，
        “代码审查已完成并获得批准”，
        “性能影响已评估且可接受”，
        “针对安全相关修复进行的安全审查”，
        “部署说明和回滚计划已准备好”，
        “更新日志已更新面向用户的更改”，
        “已向利益相关者通报关键修复”
      ]
    },
    {
      “阶段”：7，
      "name": "持续改进",
      “模式分析”：{
        “目标”：[
          “识别代码库中重复出现的错误模式”，
          “检测导致错误的架构问题”，
          “寻找测试策略中的差距”，
          “突出显示存在技术债务的领域”
        ],
        “输出”：[
          “常见错误模式报告”，
          “预防措施建议”，
          “工装改进建议”，
          《架构重构建议》
        ]
      },
      “监控建议”：{
        “metrics_to_track”：[
          “随着时间的推移，错误发现率”，
          “按严重程度解决问题的时间”，
          “回归率（重新引入错误）”，
          “测试覆盖率”，
          “容易出现错误的区域中的代码搅动”，
          “依赖漏洞计数”
        ],
        “警报规则”：[

“依赖项中的严重安全漏洞”，
          “测试套件失败”，
          “代码覆盖率低于阈值”，
          “关键操作的性能下降”
        ],
        “日志记录改进”：[
          “在缺少的地方添加结构化日志记录”，
          “包括用于请求跟踪的相关 ID”，
          “记录与安全相关的事件”，
          “确保错误日志包括堆栈跟踪和上下文”
        ]
      }
    }
  ],
  “约束和最佳实践”：[
    “永远不要为了简单或方便而牺牲安全性”，
    “维护所有变更的完整审计跟踪”，
    “如果修复更改公共 API，则遵循语义版本控制”，
    “测试外部服务时尊重速率限制”，
    “使用功能标志进行高风险或逐步推出修复”，
    “记录分析过程中所做的所有假设”，
    “考虑每个修复的回滚策略”，
    “尽可能选择向后兼容的修复程序”，
    “避免在没有正当理由的情况下引入新的依赖项”，
    “适用时在多种环境中进行测试”
  ],
  “输出格式”：[
    {
      “格式”：“降价”，
      “目的”：“人类可读的文档和报告”，
      "filename_pattern": "bug_report_{日期}.md"
    },
    {
      “格式”：“json”，
      “目的”：“机器可读的自动化处理”，
      "filename_pattern": "bug_data_{日期}.json",
      "schema": "遵循阶段 3 中定义的 bug_report_schema"
    },
    {
      “格式”：“csv”，
      "目的": "导入错误跟踪系统（Jira、GitHub 问题）",
      "filename_pattern": "bugs_{日期}.csv",
      “列”：[
        “BUG-ID”，
        “严重性”，
        “类别”，
        “文件”，
        “线”，
        “描述”，
        「状态」
      ]
    },
    {
      “格式”：“yaml”，
      "目的": "用于 CI/CD 集成的配置友好格式",
      “filename_pattern”：“bug_config_{日期}.yaml”
    }
  ],
  “特殊考虑因素”：{
    "monorepos": "通过跨包依赖跟踪单独分析每个包/工作空间",
    "microservices": "考虑服务间契约、API 兼容性和分布式跟踪",
    "legacy_code": "平衡修复风险与收益；优先考虑高影响、低风险的修复",
    "third_party_dependencies": "报告上游漏洞；如果无法维护，请考虑替代方案",
    "high_traffic_systems": "考虑修复部署策略（蓝绿、金丝雀）",
    "regulated_industries": "确保满足合规性要求（HIPAA、PCI-DSS、SOC2、GDPR）",
    "open_source_projects": "遵循贡献指南；在进行重大更改之前与维护人员接触"
  },
  “成功标准”：{
    “定量”：[
      “所有严重和高严重性错误均已解决”，
      “测试覆盖率至少提高了 X%”，
      “依赖项零安全漏洞”，
      “所有测试均通过”，
      “代码质量指标得到改善（圈复杂度、可维护性指数）”
    ],
    “定性”：[
      “代码库更易于维护”，
      “文档清晰且全面”，
      “团队可以自信地部署修复”，
      “未来的错误预防机制已到位”，
      “开发速度提高”
    ]
  }
}
```

---

## English Original

### Title

Comprehensive repository analysis

### Description



### Prompt

```md
{
  "task": "comprehensive_repository_analysis",
  "objective": "Conduct exhaustive analysis of entire codebase to identify, prioritize, fix, and document ALL verifiable bugs, security vulnerabilities, and critical issues across any technology stack",
  "analysis_phases": [
    {
      "phase": 1,
      "name": "Repository Discovery & Mapping",
      "steps": [
        {
          "step": "1.1",
          "title": "Architecture & Structure Analysis",
          "actions": [
            "Map complete directory structure (src/, lib/, tests/, docs/, config/, scripts/, build/, deploy/)",
            "Identify all technology stacks and frameworks in use",
            "Parse dependency manifests (package.json, requirements.txt, go.mod, pom.xml, Gemfile, Cargo.toml, composer.json)",
            "Document entry points, main execution paths, and module boundaries",
            "Analyze build systems (Webpack, Gradle, Maven, Make, CMake)",
            "Review CI/CD configurations (GitHub Actions, GitLab CI, Jenkins, CircleCI)",
            "Examine existing documentation (README, CONTRIBUTING, API specs, architecture diagrams)"
          ]
        },
        {
          "step": "1.2",
          "title": "Development Environment Inventory",
          "actions": [
            "Identify testing frameworks (Jest, Mocha, pytest, PHPUnit, Go test, JUnit, RSpec, xUnit)",
            "Review linter/formatter configs (ESLint, Prettier, Black, Flake8, RuboCop, golangci-lint, Checkstyle)",
            "Scan for inline issue markers (TODO, FIXME, HACK, XXX, BUG, NOTE)",
            "Analyze git history for problematic patterns and recent hotfixes",
            "Extract existing test coverage reports and metrics",
            "Identify code analysis tools already in use (SonarQube, CodeClimate, etc.)"
          ]
        }
      ]
    },
    {
      "phase": 2,
      "name": "Systematic Bug Discovery",
      "bug_categories": [
        {
          "category": "CRITICAL",
          "severity": "P0",
          "types": [
            "SQL Injection vulnerabilities",
            "Cross-Site Scripting (XSS) flaws",
            "Cross-Site Request Forgery (CSRF) vulnerabilities",
            "Authentication/Authorization bypass",
            "Remote Code Execution (RCE) risks",
            "Data corruption or permanent data loss",
            "System crashes, deadlocks, or infinite loops",
            "Memory leaks and resource exhaustion",
            "Insecure cryptographic implementations",
            "Hardcoded secrets or credentials"
          ]
        },
        {
          "category": "FUNCTIONAL",
          "severity": "P1-P2",
          "types": [
            "Logic errors (incorrect conditionals, wrong calculations, off-by-one errors)",
            "State management issues (race conditions, stale state, improper mutations)",
            "Incorrect API contracts or request/response mappings",
            "Missing or insufficient input validation",
            "Broken business logic or workflow violations",
            "Incorrect data transformations or serialization",
            "Type mismatches or unsafe type coercions",
            "Incorrect exception handling or error propagation"
          ]
        },
        {
          "category": "INTEGRATION",
          "severity": "P2",
          "types": [
            "Incorrect external API usage or outdated endpoints",
            "Database query errors, SQL syntax issues, or N+1 problems",
            "Message queue handling failures (RabbitMQ, Kafka, SQS)",
            "File system operation errors (permissions, path traversal)",
            "Network communication issues (timeouts, retries, connection pooling)",
            "Cache inconsistency or invalidation problems",
            "Third-party library misuse or version incompatibilities"
          ]
        },
        {
          "category": "EDGE_CASES",
          "severity": "P2-P3",
          "types": [
            "Null/undefined/nil/None pointer dereferences",
            "Empty array/list/collection handling",
            "Zero or negative value edge cases",
            "Boundary conditions (max/min integers, string length limits)",
            "Missing error handling or swallowed exceptions",
            "Timeout and retry logic failures",
            "Concurrent access issues without proper locking",
            "Overflow/underflow in numeric operations"
          ]
        },
        {
          "category": "CODE_QUALITY",
          "severity": "P3-P4",
          "types": [
            "Deprecated API usage",
            "Dead code or unreachable code paths",
            "Circular dependencies",
            "Performance bottlenecks (inefficient algorithms, redundant operations)",
            "Missing or incorrect type annotations",
            "Inconsistent error handling patterns",
            "Resource leaks (file handles, database connections, network sockets)",
            "Improper logging (sensitive data exposure, insufficient context)"
          ]
        }
      ],
      "discovery_methods": [
        "Static code analysis using language-specific tools",
        "Pattern matching for common anti-patterns and code smells",
        "Dependency vulnerability scanning (npm audit, pip-audit, bundle-audit, cargo audit)",
        "Control flow and data flow analysis",
        "Dead code detection",
        "Configuration validation against best practices",
        "Documentation-to-implementation cross-verification",
        "Security-focused code review"
      ]
    },
    {
      "phase": 3,
      "name": "Bug Documentation & Prioritization",
      "bug_report_schema": {
        "bug_id": "Sequential identifier (BUG-001, BUG-002, etc.)",
        "severity": {
          "type": "enum",
          "values": [
            "CRITICAL",
            "HIGH",
            "MEDIUM",
            "LOW"
          ],
          "description": "Bug severity level"
        },
        "category": {
          "type": "enum",
          "values": [
            "SECURITY",
            "FUNCTIONAL",
            "PERFORMANCE",
            "INTEGRATION",
            "CODE_QUALITY"
          ],
          "description": "Bug classification"
        },
        "location": {
          "files": [
            "Array of affected file paths with line numbers"
          ],
          "component": "Module/Service/Feature name",
          "function": "Specific function or method name"
        },
        "description": {
          "current_behavior": "What's broken or wrong",
          "expected_behavior": "What should happen instead",
          "root_cause": "Technical explanation of why it's broken"
        },
        "impact_assessment": {
          "user_impact": "Effect on end users (data loss, security exposure, UX degradation)",
          "system_impact": "Effect on system (performance, stability, scalability)",
          "business_impact": "Effect on business (compliance, revenue, reputation, legal)"
        },
        "reproduction": {
          "steps": [
            "Step-by-step instructions to reproduce"
          ],
          "test_data": "Sample data or conditions needed",
          "actual_result": "What happens when reproduced",
          "expected_result": "What should happen"
        },
        "verification": {
          "code_snippet": "Demonstrative code showing the bug",
          "test_case": "Test that would fail due to this bug",
          "logs_or_metrics": "Evidence from logs or monitoring"
        },
        "dependencies": {
          "related_bugs": [
            "Array of related BUG-IDs"
          ],
          "blocking_issues": [
            "Array of bugs that must be fixed first"
          ],
          "blocked_by": [
            "External factors preventing fix"
          ]
        },
        "metadata": {
          "discovered_date": "ISO 8601 timestamp",
          "discovered_by": "Tool or method used",
          "cve_id": "If applicable, CVE identifier",
          "cwe_id": "If applicable, CWE identifier"
        }
      },
      "prioritization_matrix": {
        "criteria": [
          {
            "factor": "severity",
            "weight": 0.4,
            "scale": "CRITICAL=100, HIGH=70, MEDIUM=40, LOW=10"
          },
          {
            "factor": "user_impact",
            "weight": 0.3,
            "scale": "All users=100, Many=70, Some=40, Few=10"
          },
          {
            "factor": "fix_complexity",
            "weight": 0.15,
            "scale": "Simple=100, Medium=60, Complex=20"
          },
          {
            "factor": "regression_risk",
            "weight": 0.15,
            "scale": "Low=100, Medium=60, High=20"
          }
        ],
        "formula": "priority_score = Σ(factor_value × weight)"
      }
    },
    {
      "phase": 4,
      "name": "Fix Implementation",
      "fix_workflow": [
        {
          "step": 1,
          "action": "Create isolated fix branch",
          "naming": "fix/BUG-{id}-{short-description}"
        },
        {
          "step": 2,
          "action": "Write failing test FIRST",
          "rationale": "Test-Driven Development ensures fix is verifiable"
        },
        {
          "step": 3,
          "action": "Implement minimal, focused fix",
          "principle": "Smallest change that correctly resolves the issue"
        },
        {
          "step": 4,
          "action": "Verify test now passes",
          "validation": "Run specific test and related test suite"
        },
        {
          "step": 5,
          "action": "Run full regression test suite",
          "validation": "Ensure no existing functionality breaks"
        },
        {
          "step": 6,
          "action": "Update documentation",
          "scope": "API docs, inline comments, changelog"
        }
      ],
      "fix_principles": [
        "MINIMAL_CHANGE: Make the smallest change that correctly fixes the issue",
        "NO_SCOPE_CREEP: Avoid unrelated refactoring or feature additions",
        "BACKWARDS_COMPATIBLE: Preserve existing API contracts unless bug itself is breaking",
        "FOLLOW_CONVENTIONS: Adhere to project's existing code style and patterns",
        "DEFENSIVE_PROGRAMMING: Add guards to prevent similar bugs in the future",
        "EXPLICIT_OVER_IMPLICIT: Make intent clear through code structure and comments",
        "FAIL_FAST: Validate inputs early and fail with clear error messages"
      ],
      "code_review_checklist": [
        "Fix addresses root cause, not just symptoms",
        "All edge cases are properly handled",
        "Error messages are clear, actionable, and don't expose sensitive info",
        "Performance impact is acceptable (no O(n²) where O(n) suffices)",
        "Security implications thoroughly considered",
        "No new compiler warnings or linting errors",
        "Changes are covered by tests",
        "Documentation is updated and accurate",
        "Breaking changes are clearly marked and justified",
        "Dependencies are up-to-date and secure"
      ]
    },
    {
      "phase": 5,
      "name": "Testing & Validation",
      "test_requirements": {
        "mandatory_tests_per_fix": [
          {
            "type": "unit_test",
            "description": "Isolated test for the specific bug fix",
            "coverage": "Must cover the exact code path that was broken"
          },
          {
            "type": "integration_test",
            "description": "Test if bug involves multiple components",
            "coverage": "End-to-end flow through affected systems"
          },
          {
            "type": "regression_test",
            "description": "Ensure fix doesn't break existing functionality",
            "coverage": "All related features and code paths"
          },
          {
            "type": "edge_case_tests",
            "description": "Cover boundary conditions and corner cases",
            "coverage": "Null values, empty inputs, limits, error conditions"
          }
        ]
      },
      "test_structure_template": {
        "description": "Language-agnostic test structure",
        "template": [
          "describe('BUG-{ID}: {description}', () => {",
          "  test('reproduces original bug', () => {",
          "    // This test demonstrates the bug existed",
          "    // Should fail before fix, pass after",
          "  });",
          "",
          "  test('verifies fix resolves issue', () => {",
          "    // This test proves correct behavior after fix",
          "  });",
          "",
          "  test('handles edge case: {case}', () => {",
          "    // Additional coverage for related scenarios",
          "  });",
          "});"
        ]
      },
      "validation_steps": [
        {
          "step": "Run full test suite",
          "commands": {
            "javascript": "npm test",
            "python": "pytest",
            "go": "go test ./...",
            "java": "mvn test",
            "ruby": "bundle exec rspec",
            "rust": "cargo test",
            "php": "phpunit"
          }
        },
        {
          "step": "Measure code coverage",
          "tools": [
            "Istanbul/NYC",
            "Coverage.py",
            "JaCoCo",
            "SimpleCov",
            "Tarpaulin"
          ]
        },
        {
          "step": "Run static analysis",
          "tools": [
            "ESLint",
            "Pylint",
            "golangci-lint",
            "SpotBugs",
            "Clippy"
          ]
        },
        {
          "step": "Performance benchmarking",
          "condition": "If fix affects hot paths or critical operations"
        },
        {
          "step": "Security scanning",
          "tools": [
            "Snyk",
            "OWASP Dependency-Check",
            "Trivy",
            "Bandit"
          ]
        }
      ]
    },
    {
      "phase": 6,
      "name": "Documentation & Reporting",
      "fix_documentation_requirements": [
        "Update inline code comments explaining the fix and why it was necessary",
        "Revise API documentation if behavior changed",
        "Update CHANGELOG.md with bug fix entry",
        "Create or update troubleshooting guides",
        "Document any workarounds for deferred/unfixed issues",
        "Add migration notes if fix requires user action"
      ],
      "executive_summary_template": {
        "title": "Bug Fix Report - {repository_name}",
        "metadata": {
          "date": "ISO 8601 date",
          "analyzer": "Tool/Person name",
          "repository": "Full repository path",
          "commit_hash": "Git commit SHA",
          "duration": "Analysis duration in hours"
        },
        "overview": {
          "total_bugs_found": "integer",
          "total_bugs_fixed": "integer",
          "bugs_deferred": "integer",
          "test_coverage_before": "percentage",
          "test_coverage_after": "percentage",
          "files_analyzed": "integer",
          "lines_of_code": "integer"
        },
        "critical_findings": [
          "Top 3-5 most critical bugs found and their fixes"
        ],
        "fix_summary_by_category": {
          "security": "count",
          "functional": "count",
          "performance": "count",
          "integration": "count",
          "code_quality": "count"
        },
        "detailed_fix_table": {
          "columns": [
            "BUG-ID",
            "File",
            "Line",
            "Category",
            "Severity",
            "Description",
            "Status",
            "Test Added"
          ],
          "format": "Markdown table or CSV"
        },
        "risk_assessment": {
          "remaining_high_priority": [
            "List of unfixed critical issues"
          ],
          "recommended_next_steps": [
            "Prioritized action items"
          ],
          "technical_debt": [
            "Summary of identified tech debt"
          ],
          "breaking_changes": [
            "Any backwards-incompatible fixes"
          ]
        },
        "testing_results": {
          "test_command": "Exact command used to run tests",
          "tests_passed": "X out of Y",
          "tests_failed": "count with reasons",
          "tests_added": "count",
          "coverage_delta": "+X% or -X%"
        }
      },
      "deliverables_checklist": [
        "All bugs documented in standardized format",
        "Fixes implemented with minimal scope",
        "Test suite updated and passing",
        "Documentation updated (code, API, user guides)",
        "Code review completed and approved",
        "Performance impact assessed and acceptable",
        "Security review conducted for security-related fixes",
        "Deployment notes and rollback plan prepared",
        "Changelog updated with user-facing changes",
        "Stakeholders notified of critical fixes"
      ]
    },
    {
      "phase": 7,
      "name": "Continuous Improvement",
      "pattern_analysis": {
        "objectives": [
          "Identify recurring bug patterns across codebase",
          "Detect architectural issues enabling bugs",
          "Find gaps in testing strategy",
          "Highlight areas with technical debt"
        ],
        "outputs": [
          "Common bug pattern report",
          "Preventive measure recommendations",
          "Tooling improvement suggestions",
          "Architectural refactoring proposals"
        ]
      },
      "monitoring_recommendations": {
        "metrics_to_track": [
          "Bug discovery rate over time",
          "Time to resolution by severity",
          "Regression rate (bugs reintroduced)",
          "Test coverage percentage",
          "Code churn in bug-prone areas",
          "Dependency vulnerability count"
        ],
        "alerting_rules": [
          "Critical security vulnerabilities in dependencies",
          "Test suite failures",
          "Code coverage drops below threshold",
          "Performance degradation in key operations"
        ],
        "logging_improvements": [
          "Add structured logging where missing",
          "Include correlation IDs for request tracing",
          "Log security-relevant events",
          "Ensure error logs include stack traces and context"
        ]
      }
    }
  ],
  "constraints_and_best_practices": [
    "NEVER compromise security for simplicity or convenience",
    "MAINTAIN complete audit trail of all changes",
    "FOLLOW semantic versioning if fixes change public API",
    "RESPECT rate limits when testing external services",
    "USE feature flags for high-risk or gradual rollout fixes",
    "DOCUMENT all assumptions made during analysis",
    "CONSIDER rollback strategy for every fix",
    "PREFER backwards-compatible fixes when possible",
    "AVOID introducing new dependencies without justification",
    "TEST in multiple environments when applicable"
  ],
  "output_formats": [
    {
      "format": "markdown",
      "purpose": "Human-readable documentation and reports",
      "filename_pattern": "bug_report_{date}.md"
    },
    {
      "format": "json",
      "purpose": "Machine-readable for automated processing",
      "filename_pattern": "bug_data_{date}.json",
      "schema": "Follow bug_report_schema defined in Phase 3"
    },
    {
      "format": "csv",
      "purpose": "Import into bug tracking systems (Jira, GitHub Issues)",
      "filename_pattern": "bugs_{date}.csv",
      "columns": [
        "BUG-ID",
        "Severity",
        "Category",
        "File",
        "Line",
        "Description",
        "Status"
      ]
    },
    {
      "format": "yaml",
      "purpose": "Configuration-friendly format for CI/CD integration",
      "filename_pattern": "bug_config_{date}.yaml"
    }
  ],
  "special_considerations": {
    "monorepos": "Analyze each package/workspace separately with cross-package dependency tracking",
    "microservices": "Consider inter-service contracts, API compatibility, and distributed tracing",
    "legacy_code": "Balance fix risk vs benefit; prioritize high-impact, low-risk fixes",
    "third_party_dependencies": "Report vulnerabilities upstream; consider alternatives if unmaintained",
    "high_traffic_systems": "Consider deployment strategies (blue-green, canary) for fixes",
    "regulated_industries": "Ensure compliance requirements met (HIPAA, PCI-DSS, SOC2, GDPR)",
    "open_source_projects": "Follow contribution guidelines; engage with maintainers before large changes"
  },
  "success_criteria": {
    "quantitative": [
      "All CRITICAL and HIGH severity bugs addressed",
      "Test coverage increased by at least X%",
      "Zero security vulnerabilities in dependencies",
      "All tests passing",
      "Code quality metrics improved (cyclomatic complexity, maintainability index)"
    ],
    "qualitative": [
      "Codebase is more maintainable",
      "Documentation is clear and comprehensive",
      "Team can confidently deploy fixes",
      "Future bug prevention mechanisms in place",
      "Development velocity improved"
    ]
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [comprehensive-repository-analysis](https://prompts.chat/prompts/comprehensive-repository-analysis) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | Agent, Debugging, Code Review |
| Contributors | hocestnonsatis, ersinkoc |
| Updated At | 2026-01-08T19:51:10.448Z |
