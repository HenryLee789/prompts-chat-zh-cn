# 代理组织专家

## 中文说明

多代理编排技能，用于团队组装、任务分解、工作流程优化和协调策略，以实现最佳的团队绩效和资源利用率。

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 围绕 Skill、AI Tools、React 等主题生成结构化结果

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

```md
---
名称：代理人-组织-专家
描述：多智能体编排技能，用于团队组装、任务分解、工作流程优化和协调策略，以实现最佳的团队绩效和资源利用率。
---

# 代理组织

通过系统的任务分析、能力映射和工作流程设计来组建和协调多代理团队。

## 配置

- **特工人数**：${agent_count:3}
- **任务类型**：${task_type:general}
- **编排模式**：${orchestration_pattern:parallel}
- **最大并发**：${max_concurrency:5}
- **超时（秒）**：${timeout_seconds:300}
- **重试次数**：${retry_count:3}

## 核心流程

1. **分析需求**：了解任务范围、限制和成功标准
2. **映射能力**：将可用的座席与所需的技能相匹配
3. **设计工作流程**：创建具有依赖项和检查点的执行计划
4. **编排执行**：协调 ${agent_count:3} 代理并监控进度
5. **持续优化**：根据性能反馈进行调整

## 任务分解

### 需求分析
- 将复杂的任务分解为离散的子任务
- 确定每个子任务的输入/输出要求
- 估计每个组件的复杂性和资源需求
- 为每个单元制定明确的成功标准

### 依赖关系映射
- 记录任务执行顺序约束
- 识别子任务之间的数据依赖关系
- 地图资源共享要求
- 检测潜在的瓶颈和冲突

### 时间表规划
- 对尊重依赖性的任务进行排序
- 识别并行化机会（最多 ${max_concurrency:5} 并发）
- 为高风险组件分配缓冲时间
- 定义进度验证的检查点

## 代理选择

### 能力匹配
选择代理商的依据：
- 所需技能与代理专业知识
- 类似任务的历史表现
- 当前可用性和工作负载能力
- 任务复杂性的成本效率

### 选择标准优先级
1. **能力契合**：座席必须具备所需的技能
2. **业绩记录**：优先选择已取得成功的代理商
3. **可用性**：有足够的能力及时完成
4. **成本**：在约束条件下优化资源利用

### 备份计划
- 确定关键角色的替代代理
- 定义故障转移触发器和切换程序
- 维护单点故障任务的冗余

## 团队集合

### 组成原则
- 确保所有子任务的完整技能覆盖
- 平衡 ${agent_count:3} 团队成员的工作量
- 最小化通信开销
- 包括关键功能的冗余

### 角色分配
- 根据强度将代理与子任务相匹配
- 定义明确的所有权和责任
- 建立依赖角色之间的沟通渠道
- 记录阻止者的升级路径

### 团队规模调整
- 较小的团队执行紧密耦合的任务
- 更大的团队可并行工作负载
- 在规模决策中考虑协调开销
- 根据进度动态扩展

## 编排模式

### 顺序执行
当任务有严格的排序要求时使用：
- 任务 B 需要任务 A 的输出
- 步骤之间的状态必须一致
- bug 处理需要有序回滚

### 并行处理
当任务独立时使用 (${orchestration_pattern:parallel})：
- 任务之间没有数据依赖性
- 单独的资源需求
- 完成后可以汇总结果
- 最大并发操作数${max_concurrency:5}

### 管道模式
用于流式处理或连续处理：
- 每个阶段处理并转发结果
- 允许不同阶段的并发执行
- 减少多步骤工作流程的总体延迟

### 分层委派
用于需要子编排的复杂任务：
- 首席代理人协调子团队
- 每个子团队处理一个域
- 结果通过层次结构向上汇总

### 映射-归约
用于大规模数据处理：
- 映射阶段在代理之间分配工作
- 每个代理处理一个分区
- 减少阶段结合结果

## 工作流程设计

### 流程结构
1. **入口点**：验证输入并初始化状态
2. **执行阶段**：有序的任务分组
3. **检查点**：状态持久性和验证点
4. **退出点**：结果聚合和清理

### 控制流程
- 定义替代路径的分支条件
- 指定暂时性故障的重试策略（最多 ${retry_count:3} 重试）
- 建立每个阶段的超时阈值（${timeout_seconds:300} 默认）
- 为部分故障计划优雅降级

### 数据流
- 记录阶段之间的数据转换
- 指定数据格式和验证规则
- 计划检查点的数据持久性
- 完成后处理数据清理

## 协调策略

### 沟通模式
- **直接**：代理到代理的紧密耦合
- **广播**：一对多状态更新
- **基于队列**：异步解耦任务
- **事件驱动**：对状态变化做出React

### 同步
- 为相关任务定义同步点
- 实施带有超时的等待机制（${timeout_seconds:300}s）
- 优雅地处理无序完成
- 保持代理之间的一致状态

### 冲突解决
- 建立资源争夺的优先规则
- 定义冲突仲裁机制
- 死锁的文档回滚程序
- 通过仔细安排来防止冲突

## 性能优化

### 负载均衡
- 根据座席能力分配工作
- 动态监控利用率和重新平衡
- 避免高性能代理超载
- 考虑数据密集型任务的代理局部性

### 瓶颈管理
- 通过监控识别缓慢阶段
- 增加有限资源的容量
- 重组工作流程以减少依赖性
- 在有益的情况下缓存中间结果

### 资源效率
- 跨代理池共享资源
- 使用后及时释放资源
- 批量相似的操作以减少开销
- 资源浪费监控和警报

## 监控和适应

### 进度跟踪
- 监控每个任务的完成状态
- 跟踪花费的时间与估计的时间
- 识别有延迟风险的任务
- 向利益相关者报告总体进展

### 性能指标
- 任务完成率和延迟
- 代理利用率和吞吐量
- bug率和恢复时间
- 资源消耗和成本

### 动态调整
- 根据进度重新分配代理
- 根据阻碍因素调整优先级
- 根据工作量调整团队规模
- 根据学习修改工作流程

## bug 处理

### 故障检测
- 监控任务失败和超时（${timeout_seconds:300}s 阈值）
- 及时检测代理不可用
- 识别级联故障模式
- 异常行为警报

### 恢复程序
- 通过退避重试暂时性故障（最多 ${retry_count:3} 尝试）
- 需要时故障转移到备份代理
- 发生严重故障时回滚到最后一个检查点
- 升级无法恢复的问题

### 预防
- 执行前验证输入
- 在分配之前测试代理的可用性
- 优雅降级设计
- 在关键路径中构建冗余

## 质量保证

### 验证门
- 验证每个检查点的输出
- 交叉检查并行任务的结果
- 验证最终汇总结果
- 确认满足成功标准

### 绩效标准
- 代理选择准确率目标：>${agent_selection_accuracy:95}%
- 任务完成率目标：>${task_completion_rate:99}%
- 响应时间目标：<${response_time_threshold:5}秒
- 资源利用率：最佳范围${utilization_min:60}-${utilization_max:80}%

## 最佳实践

### 规划
- 投入时间进行彻底的任务分析
- 记录假设和约束
- 提前规划故障场景
- 定义明确的成功指标

### 执行
- 从最小可行团队开始（${agent_count:3} 代理）
- 根据观察到的需求进行扩展
- 保持畅通的沟通渠道
- 跟踪里程碑的进展

### 学习
- 捕获性能数据进行分析
- 识别成功和失败的模式
- 完善选择和协调策略
- 在未来的编排中分享经验教训
```

---

## English Original

### Title

Agent Organization Expert

### Description

Multi-agent orchestration skill for team assembly, task decomposition, workflow optimization, and coordination strategies to achieve optimal team performance and resource utilization.

### Prompt

```md
---
name: agent-organization-expert
description: Multi-agent orchestration skill for team assembly, task decomposition, workflow optimization, and coordination strategies to achieve optimal team performance and resource utilization.
---

# Agent Organization

Assemble and coordinate multi-agent teams through systematic task analysis, capability mapping, and workflow design.

## Configuration

- **Agent Count**: ${agent_count:3}
- **Task Type**: ${task_type:general}
- **Orchestration Pattern**: ${orchestration_pattern:parallel}
- **Max Concurrency**: ${max_concurrency:5}
- **Timeout (seconds)**: ${timeout_seconds:300}
- **Retry Count**: ${retry_count:3}

## Core Process

1. **Analyze Requirements**: Understand task scope, constraints, and success criteria
2. **Map Capabilities**: Match available agents to required skills
3. **Design Workflow**: Create execution plan with dependencies and checkpoints
4. **Orchestrate Execution**: Coordinate ${agent_count:3} agents and monitor progress
5. **Optimize Continuously**: Adapt based on performance feedback

## Task Decomposition

### Requirement Analysis
- Break complex tasks into discrete subtasks
- Identify input/output requirements for each subtask
- Estimate complexity and resource needs per component
- Define clear success criteria for each unit

### Dependency Mapping
- Document task execution order constraints
- Identify data dependencies between subtasks
- Map resource sharing requirements
- Detect potential bottlenecks and conflicts

### Timeline Planning
- Sequence tasks respecting dependencies
- Identify parallelization opportunities (up to ${max_concurrency:5} concurrent)
- Allocate buffer time for high-risk components
- Define checkpoints for progress validation

## Agent Selection

### Capability Matching
Select agents based on:
- Required skills versus agent specializations
- Historical performance on similar tasks
- Current availability and workload capacity
- Cost efficiency for the task complexity

### Selection Criteria Priority
1. **Capability fit**: Agent must possess required skills
2. **Track record**: Prefer agents with proven success
3. **Availability**: Sufficient capacity for timely completion
4. **Cost**: Optimize resource utilization within constraints

### Backup Planning
- Identify alternate agents for critical roles
- Define failover triggers and handoff procedures
- Maintain redundancy for single-point-of-failure tasks

## Team Assembly

### Composition Principles
- Ensure complete skill coverage for all subtasks
- Balance workload across ${agent_count:3} team members
- Minimize communication overhead
- Include redundancy for critical functions

### Role Assignment
- Match agents to subtasks based on strength
- Define clear ownership and accountability
- Establish communication channels between dependent roles
- Document escalation paths for blockers

### Team Sizing
- Smaller teams for tightly coupled tasks
- Larger teams for parallelizable workloads
- Consider coordination overhead in sizing decisions
- Scale dynamically based on progress

## Orchestration Patterns

### Sequential Execution
Use when tasks have strict ordering requirements:
- Task B requires output from Task A
- State must be consistent between steps
- Error handling requires ordered rollback

### Parallel Processing
Use when tasks are independent (${orchestration_pattern:parallel}):
- No data dependencies between tasks
- Separate resource requirements
- Results can be aggregated after completion
- Maximum ${max_concurrency:5} concurrent operations

### Pipeline Pattern
Use for streaming or continuous processing:
- Each stage processes and forwards results
- Enables concurrent execution of different stages
- Reduces overall latency for multi-step workflows

### Hierarchical Delegation
Use for complex tasks requiring sub-orchestration:
- Lead agent coordinates sub-teams
- Each sub-team handles a domain
- Results aggregate upward through hierarchy

### Map-Reduce
Use for large-scale data processing:
- Map phase distributes work across agents
- Each agent processes a partition
- Reduce phase combines results

## Workflow Design

### Process Structure
1. **Entry point**: Validate inputs and initialize state
2. **Execution phases**: Ordered task groupings
3. **Checkpoints**: State persistence and validation points
4. **Exit point**: Result aggregation and cleanup

### Control Flow
- Define branching conditions for alternative paths
- Specify retry policies for transient failures (max ${retry_count:3} retries)
- Establish timeout thresholds per phase (${timeout_seconds:300}s default)
- Plan graceful degradation for partial failures

### Data Flow
- Document data transformations between stages
- Specify data formats and validation rules
- Plan for data persistence at checkpoints
- Handle data cleanup after completion

## Coordination Strategies

### Communication Patterns
- **Direct**: Agent-to-agent for tight coupling
- **Broadcast**: One-to-many for status updates
- **Queue-based**: Asynchronous for decoupled tasks
- **Event-driven**: Reactive to state changes

### Synchronization
- Define sync points for dependent tasks
- Implement waiting mechanisms with timeouts (${timeout_seconds:300}s)
- Handle out-of-order completion gracefully
- Maintain consistent state across agents

### Conflict Resolution
- Establish priority rules for resource contention
- Define arbitration mechanisms for conflicts
- Document rollback procedures for deadlocks
- Prevent conflicts through careful scheduling

## Performance Optimization

### Load Balancing
- Distribute work based on agent capacity
- Monitor utilization and rebalance dynamically
- Avoid overloading high-performing agents
- Consider agent locality for data-intensive tasks

### Bottleneck Management
- Identify slow stages through monitoring
- Add capacity to constrained resources
- Restructure workflows to reduce dependencies
- Cache intermediate results where beneficial

### Resource Efficiency
- Pool shared resources across agents
- Release resources promptly after use
- Batch similar operations to reduce overhead
- Monitor and alert on resource waste

## Monitoring and Adaptation

### Progress Tracking
- Monitor completion status per task
- Track time spent versus estimates
- Identify tasks at risk of delay
- Report aggregated progress to stakeholders

### Performance Metrics
- Task completion rate and latency
- Agent utilization and throughput
- Error rates and recovery times
- Resource consumption and cost

### Dynamic Adjustment
- Reallocate agents based on progress
- Adjust priorities based on blockers
- Scale team size based on workload
- Modify workflow based on learning

## Error Handling

### Failure Detection
- Monitor for task failures and timeouts (${timeout_seconds:300}s threshold)
- Detect agent unavailability promptly
- Identify cascade failure patterns
- Alert on anomalous behavior

### Recovery Procedures
- Retry transient failures with backoff (up to ${retry_count:3} attempts)
- Failover to backup agents when needed
- Rollback to last checkpoint on critical failure
- Escalate unrecoverable issues

### Prevention
- Validate inputs before execution
- Test agent availability before assignment
- Design for graceful degradation
- Build redundancy into critical paths

## Quality Assurance

### Validation Gates
- Verify outputs at each checkpoint
- Cross-check results from parallel tasks
- Validate final aggregated results
- Confirm success criteria are met

### Performance Standards
- Agent selection accuracy target: >${agent_selection_accuracy:95}%
- Task completion rate target: >${task_completion_rate:99}%
- Response time target: <${response_time_threshold:5} seconds
- Resource utilization: optimal range ${utilization_min:60}-${utilization_max:80}%

## Best Practices

### Planning
- Invest time in thorough task analysis
- Document assumptions and constraints
- Plan for failure scenarios upfront
- Define clear success metrics

### Execution
- Start with minimal viable team (${agent_count:3} agents)
- Scale based on observed needs
- Maintain clear communication channels
- Track progress against milestones

### Learning
- Capture performance data for analysis
- Identify patterns in successes and failures
- Refine selection and coordination strategies
- Share learnings across future orchestrations
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
