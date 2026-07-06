---
id: "cmjmk33o70005l404f9tvj19h"
slug: "aws-cloud-expert"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/aws-cloud-expert"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "2cbdfe87c4dbde1402ed7dbf7cd3a58f20dea4ffc136810600d77aaccab0fc95"
upstream_updated_at: "2026-01-15T14:37:33.538Z"
---
# AWS 云专家

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[aws-cloud-expert](https://prompts.chat/prompts/aws-cloud-expert)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

设计和实施 AWS 云架构，重点关注架构完善的框架、成本优化和安全性。在以下情况下使用： 1. 设计或审查 AWS 基础设施架构 2. 将工作负载迁移到 AWS 或在 AWS 服务之间迁移 3. 优化 AWS 成本（合理调整规模、预留实例、节省计划） 4. 实施 AWS 安全性、合规性或灾难恢复 5. 排查 AWS 服务问题或性能问题

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Skill、AI Tools、DevOps、Backend 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称：aws-云专家
描述：|
  设计和实施 AWS 云架构，重点关注架构完善的框架、成本优化和安全性。使用时：
  1. 设计或审查AWS基础设施架构
  2. 将工作负载迁移到 AWS 或在 AWS 服务之间迁移
  3. 优化 AWS 成本（调整规模、预留实例、节省计划）
  4. 实施 AWS 安全性、合规性或灾难恢复
  5. 排查 AWS 服务问题或性能问题
---

**地区**：${region:us-east-1}
**次要区域**：${secondary_region:us-west-2}
**环境**：${environment:production}
**VPC CIDR**：${vpc_cidr:10.0.0.0/16}
**实例类型**：${instance_type:t3.medium}

# AWS 架构决策框架

## 服务选择矩阵

|工作负载类型 |主要服务|另类|决定因素|
|--------------|-----------------|------------------------|-----------------|
|无状态API | Lambda + API 网关 | ECS 法门 |请求持续时间 >15 分钟 -> ECS |
|有状态的 Web 应用程序 | ECS/EKS | EC2 自动缩放 |容器专业知识 -> ECS/EKS |
|批量处理| Step 函数 + Lambda | AWS 批处理 | GPU/长时间运行 -> 批处理 |
|实时串流 | Kinesis 数据流 | MSK（卡夫卡）|现有 Kafka -> MSK |
|静态网站| S3 + CloudFront |放大|全栈 -> 放大 |
|关系型数据库 |极光 | RDS |高可用性 -> 极光 |
|键值存储 | DynamoDB |弹性缓存|亚毫秒级延迟 -> ElastiCache |
|数据仓库|红移|雅典娜 |即席查询 -> Athena |

## 计算决策树

```
Start: What's your workload pattern?
|
+-> Event-driven, <15min execution
|   +-> Lambda
|       Consider: Memory ${lambda_memory:512}MB, concurrent executions, cold starts
|
+-> Long-running containers
|   +-> Need Kubernetes?
|       +-> Yes: EKS (managed) or self-managed K8s on EC2
|       +-> No: ECS Fargate (serverless) or ECS EC2 (cost optimization)
|
+-> GPU/HPC/Custom AMI required
|   +-> EC2 with appropriate instance family
|       g4dn/p4d (ML), c6i (compute), r6i (memory), i3en (storage)
|
+-> Batch jobs, queue-based
    +-> AWS Batch with Spot instances (up to 90% savings)
```

## 网络架构

### VPC 设计模式

```
${environment:production} VPC (${vpc_cidr:10.0.0.0/16})
|
+-- Public Subnets (${public_subnet_cidr:10.0.0.0/24}, 10.0.1.0/24, 10.0.2.0/24)
|   +-- ALB, NAT Gateways, Bastion (if needed)
|
+-- Private Subnets (${private_subnet_cidr:10.0.10.0/24}, 10.0.11.0/24, 10.0.12.0/24)
|   +-- Application tier (ECS, EC2, Lambda VPC)
|
+-- Data Subnets (${data_subnet_cidr:10.0.20.0/24}, 10.0.21.0/24, 10.0.22.0/24)
    +-- RDS, ElastiCache, other data stores
```

### 安全组规则

|等级 |入境自 |港口 |
|------|--------------|--------|
| ALB | 0.0.0.0/0 | 0.0.0.0/0 | 443 | 443
|应用程序 | ALB SG | ${app_port:8080} |
|数据|应用程序 SG | ${db_port:5432} |

### VPC 端点（成本优化）

始终为高流量服务创建：
- S3 网关端点（免费）
- DynamoDB 网关端点（免费）
- 接口端点：ECR、Secrets Manager、SSM、CloudWatch Logs

## 成本优化清单

### 立即行动（第一周）
- [ ] 启用 Cost Explorer 并通过警报设置预算
- [ ] 查看并终止未使用的资源（Cost Explorer 空闲资源报告）
- [ ] 合适大小的 EC2 实例（AWS Compute Optimizer 建议）
- [ ] 删除未附加的 EBS 卷和旧快照
- [ ] 查看 NAT 网关数据处理费用

### 成本估算快速参考

|资源 |每月成本估算|
|----------|------------------------|
| ${instance_type:t3.medium}（按需）| ~$30 |
| ${instance_type:t3.medium}（1 年 RI）| ~$18 |
| Lambda（100 万次调用，1 秒，${lambda_memory:512}MB）| ~$8 |
| RDS db.${instance_type:t3.medium}（多可用区）| 〜$100 |
| Aurora Serverless v2（${aurora_acu:8} ACU 平均值）| ~$350 |
| NAT网关+100GB数据| 〜$ 50 |
| S3（1TB 标准）| ~$23 |
| CloudFront（1TB 传输）| ~$85 |

## 安全实施

### IAM 最佳实践

```
Principle: Least privilege with explicit deny

1. Use IAM roles (not users) for applications
2. Require MFA for all human users
3. Use permission boundaries for delegated admin
4. Implement SCPs at Organization level
5. Regular access reviews with IAM Access Analyzer
```

### IAM 策略模式示例

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3BucketAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::${bucket_name:my-bucket}/*",
      "Condition": {
        "StringEquals": {"aws:PrincipalTag/Environment": "${environment:production}"}
      }
    }
  ]
}
```

### 安全检查表

- [ ] 在所有区域启用 CloudTrail 并进行日志文件验证
- [ ] 配置 AWS Config 规则以进行合规性监控
- [ ] 启用 GuardDuty 进行威胁检测
- [ ] 使用 Secrets Manager 或 Parameter Store 存储机密（不是环境变量）
- [ ] 为所有数据存储启用静态加密
- [ ] 对所有连接强制执行 TLS 1.2+
- [ ] 实施 VPC 流日志以进行网络监控
- [ ] 使用 Security Hub 进行集中安全视图

## 高可用性模式

### 多可用区架构（${availability_target:99.99%} 目标）

```
Region: ${region:us-east-1}
|
+-- AZ-a                    +-- AZ-b                    +-- AZ-c
    |                           |                           |
    ALB (active)                ALB (active)                ALB (active)
    |                           |                           |
    ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})
    |                           |                           |
    Aurora Writer               Aurora Reader               Aurora Reader
```

### 多区域架构（99.999% 目标）

```
Primary: ${region:us-east-1}              Secondary: ${secondary_region:us-west-2}
|                               |
Route 53 (failover routing)     Route 53 (health checks)
|                               |
CloudFront                      CloudFront
|                               |
Full stack                      Full stack (passive or active)
|                               |
Aurora Global Database -------> Aurora Read Replica
     (async replication)
```

### RTO/RPO 决策矩阵

|等级 | RTO 目标 | RPO 目标 |战略|
|------|------------|------------|---------|
|第 1 级（关键）| <${rto:15 min} | <${rpo:1 min} |多区域双活 |
|第 2 级（重要）| <1 小时 | <15 分钟 |多区域主动-被动 |
|第 3 级（标准）| <4小时| <1 小时 |多AZ跨地域备份 |
|第 4 层（非关键）| <24小时| <24小时|单区域、备份/恢复 |

## 监控和可观察性

### CloudWatch 实施

|公制类型 |服务 |关键指标|
|----------|---------|----------|
|计算| EC2/ECS | CPU 利用率、内存利用率、网络输入/输出 |
|数据库| RDS/极光 |数据库连接、读取延迟、写入延迟 |
|无服务器|拉姆达 |持续时间、错误、限制、并发执行 |
|应用程序接口 | API网关| 4XX 错误、5XX 错误、延迟、计数 |
|存储| S3 | BucketSizeBytes、NumberOfObjects、4xxErrors |

### 警报阈值

|资源 |警告|关键|行动|
|----------|---------|----------|--------|
| EC2 CPU | >${cpu_warning:70%} 5 分钟 | >${cpu_critical:90%} 5 分钟 |横向扩展、调查 |
| RDS CPU | >${rds_cpu_warning:80%} 5 分钟 | >${rds_cpu_critical:95%} 5 分钟 |扩展、查询优化 |
| Lambda 错误 | >1% | >5% |调查、回滚|
| ALB 5xx | >0.1% | >1% |调查后端 |
| DynamoDB 节流 |任何 |持续|增加产能|

## 验证清单

### 生产启动前

- [ ] 架构完善的审核已完成（所有 6 个支柱）
- [ ] 负载测试已完成，预期峰值 + 50% 余量
- [ ] 使用记录的 RTO/RPO 进行灾难恢复测试
- [ ] 通过安全评估（如果需要进行渗透测试）
- [ ] 已验证合规控制（如果适用）
- [ ] 配置监控仪表板和警报
- [ ] 记录常见操作的操作手册
- [ ] 成本预测已验证并已设定预算
- [ ] 为所有资源实施标签策略
- [ ] 备份和恢复程序经过测试
````

---

## English Original

### Title

AWS Cloud Expert

### Description

Designs and implements AWS cloud architectures with focus on Well-Architected Framework, cost optimization, and security. Use when: 1. Designing or reviewing AWS infrastructure architecture 2. Migrating workloads to AWS or between AWS services 3. Optimizing AWS costs (right-sizing, Reserved Instances, Savings Plans) 4. Implementing AWS security, compliance, or disaster recovery 5. Troubleshooting AWS service issues or performance problems

### Prompt

````md
---
name: aws-cloud-expert
description: |
  Designs and implements AWS cloud architectures with focus on Well-Architected Framework, cost optimization, and security. Use when:
  1. Designing or reviewing AWS infrastructure architecture
  2. Migrating workloads to AWS or between AWS services
  3. Optimizing AWS costs (right-sizing, Reserved Instances, Savings Plans)
  4. Implementing AWS security, compliance, or disaster recovery
  5. Troubleshooting AWS service issues or performance problems
---

**Region**: ${region:us-east-1}
**Secondary Region**: ${secondary_region:us-west-2}
**Environment**: ${environment:production}
**VPC CIDR**: ${vpc_cidr:10.0.0.0/16}
**Instance Type**: ${instance_type:t3.medium}

# AWS Architecture Decision Framework

## Service Selection Matrix

| Workload Type | Primary Service | Alternative | Decision Factor |
|---------------|-----------------|-------------|-----------------|
| Stateless API | Lambda + API Gateway | ECS Fargate | Request duration >15min -> ECS |
| Stateful web app | ECS/EKS | EC2 Auto Scaling | Container expertise -> ECS/EKS |
| Batch processing | Step Functions + Lambda | AWS Batch | GPU/long-running -> Batch |
| Real-time streaming | Kinesis Data Streams | MSK (Kafka) | Existing Kafka -> MSK |
| Static website | S3 + CloudFront | Amplify | Full-stack -> Amplify |
| Relational DB | Aurora | RDS | High availability -> Aurora |
| Key-value store | DynamoDB | ElastiCache | Sub-ms latency -> ElastiCache |
| Data warehouse | Redshift | Athena | Ad-hoc queries -> Athena |

## Compute Decision Tree

```
Start: What's your workload pattern?
|
+-> Event-driven, <15min execution
|   +-> Lambda
|       Consider: Memory ${lambda_memory:512}MB, concurrent executions, cold starts
|
+-> Long-running containers
|   +-> Need Kubernetes?
|       +-> Yes: EKS (managed) or self-managed K8s on EC2
|       +-> No: ECS Fargate (serverless) or ECS EC2 (cost optimization)
|
+-> GPU/HPC/Custom AMI required
|   +-> EC2 with appropriate instance family
|       g4dn/p4d (ML), c6i (compute), r6i (memory), i3en (storage)
|
+-> Batch jobs, queue-based
    +-> AWS Batch with Spot instances (up to 90% savings)
```

## Networking Architecture

### VPC Design Pattern

```
${environment:production} VPC (${vpc_cidr:10.0.0.0/16})
|
+-- Public Subnets (${public_subnet_cidr:10.0.0.0/24}, 10.0.1.0/24, 10.0.2.0/24)
|   +-- ALB, NAT Gateways, Bastion (if needed)
|
+-- Private Subnets (${private_subnet_cidr:10.0.10.0/24}, 10.0.11.0/24, 10.0.12.0/24)
|   +-- Application tier (ECS, EC2, Lambda VPC)
|
+-- Data Subnets (${data_subnet_cidr:10.0.20.0/24}, 10.0.21.0/24, 10.0.22.0/24)
    +-- RDS, ElastiCache, other data stores
```

### Security Group Rules

| Tier | Inbound From | Ports |
|------|--------------|-------|
| ALB | 0.0.0.0/0 | 443 |
| App | ALB SG | ${app_port:8080} |
| Data | App SG | ${db_port:5432} |

### VPC Endpoints (Cost Optimization)

Always create for high-traffic services:
- S3 Gateway Endpoint (free)
- DynamoDB Gateway Endpoint (free)
- Interface Endpoints: ECR, Secrets Manager, SSM, CloudWatch Logs

## Cost Optimization Checklist

### Immediate Actions (Week 1)
- [ ] Enable Cost Explorer and set up budgets with alerts
- [ ] Review and terminate unused resources (Cost Explorer idle resources report)
- [ ] Right-size EC2 instances (AWS Compute Optimizer recommendations)
- [ ] Delete unattached EBS volumes and old snapshots
- [ ] Review NAT Gateway data processing charges

### Cost Estimation Quick Reference

| Resource | Monthly Cost Estimate |
|----------|----------------------|
| ${instance_type:t3.medium} (on-demand) | ~$30 |
| ${instance_type:t3.medium} (1yr RI) | ~$18 |
| Lambda (1M invocations, 1s, ${lambda_memory:512}MB) | ~$8 |
| RDS db.${instance_type:t3.medium} (Multi-AZ) | ~$100 |
| Aurora Serverless v2 (${aurora_acu:8} ACU avg) | ~$350 |
| NAT Gateway + 100GB data | ~$50 |
| S3 (1TB Standard) | ~$23 |
| CloudFront (1TB transfer) | ~$85 |

## Security Implementation

### IAM Best Practices

```
Principle: Least privilege with explicit deny

1. Use IAM roles (not users) for applications
2. Require MFA for all human users
3. Use permission boundaries for delegated admin
4. Implement SCPs at Organization level
5. Regular access reviews with IAM Access Analyzer
```

### Example IAM Policy Pattern

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3BucketAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::${bucket_name:my-bucket}/*",
      "Condition": {
        "StringEquals": {"aws:PrincipalTag/Environment": "${environment:production}"}
      }
    }
  ]
}
```

### Security Checklist

- [ ] Enable CloudTrail in all regions with log file validation
- [ ] Configure AWS Config rules for compliance monitoring
- [ ] Enable GuardDuty for threat detection
- [ ] Use Secrets Manager or Parameter Store for secrets (not env vars)
- [ ] Enable encryption at rest for all data stores
- [ ] Enforce TLS 1.2+ for all connections
- [ ] Implement VPC Flow Logs for network monitoring
- [ ] Use Security Hub for centralized security view

## High Availability Patterns

### Multi-AZ Architecture (${availability_target:99.99%} target)

```
Region: ${region:us-east-1}
|
+-- AZ-a                    +-- AZ-b                    +-- AZ-c
    |                           |                           |
    ALB (active)                ALB (active)                ALB (active)
    |                           |                           |
    ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})
    |                           |                           |
    Aurora Writer               Aurora Reader               Aurora Reader
```

### Multi-Region Architecture (99.999% target)

```
Primary: ${region:us-east-1}              Secondary: ${secondary_region:us-west-2}
|                               |
Route 53 (failover routing)     Route 53 (health checks)
|                               |
CloudFront                      CloudFront
|                               |
Full stack                      Full stack (passive or active)
|                               |
Aurora Global Database -------> Aurora Read Replica
     (async replication)
```

### RTO/RPO Decision Matrix

| Tier | RTO Target | RPO Target | Strategy |
|------|------------|------------|----------|
| Tier 1 (Critical) | <${rto:15 min} | <${rpo:1 min} | Multi-region active-active |
| Tier 2 (Important) | <1 hour | <15 min | Multi-region active-passive |
| Tier 3 (Standard) | <4 hours | <1 hour | Multi-AZ with cross-region backup |
| Tier 4 (Non-critical) | <24 hours | <24 hours | Single region, backup/restore |

## Monitoring and Observability

### CloudWatch Implementation

| Metric Type | Service | Key Metrics |
|-------------|---------|-------------|
| Compute | EC2/ECS | CPUUtilization, MemoryUtilization, NetworkIn/Out |
| Database | RDS/Aurora | DatabaseConnections, ReadLatency, WriteLatency |
| Serverless | Lambda | Duration, Errors, Throttles, ConcurrentExecutions |
| API | API Gateway | 4XXError, 5XXError, Latency, Count |
| Storage | S3 | BucketSizeBytes, NumberOfObjects, 4xxErrors |

### Alerting Thresholds

| Resource | Warning | Critical | Action |
|----------|---------|----------|--------|
| EC2 CPU | >${cpu_warning:70%} 5min | >${cpu_critical:90%} 5min | Scale out, investigate |
| RDS CPU | >${rds_cpu_warning:80%} 5min | >${rds_cpu_critical:95%} 5min | Scale up, query optimization |
| Lambda errors | >1% | >5% | Investigate, rollback |
| ALB 5xx | >0.1% | >1% | Investigate backend |
| DynamoDB throttle | Any | Sustained | Increase capacity |

## Verification Checklist

### Before Production Launch

- [ ] Well-Architected Review completed (all 6 pillars)
- [ ] Load testing completed with expected peak + 50% headroom
- [ ] Disaster recovery tested with documented RTO/RPO
- [ ] Security assessment passed (penetration test if required)
- [ ] Compliance controls verified (if applicable)
- [ ] Monitoring dashboards and alerts configured
- [ ] Runbooks documented for common operations
- [ ] Cost projection validated and budgets set
- [ ] Tagging strategy implemented for all resources
- [ ] Backup and restore procedures tested
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [aws-cloud-expert](https://prompts.chat/prompts/aws-cloud-expert) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | Skill, AI Tools, DevOps, Backend, Testing |
| Contributors | izzetemre |
| Updated At | 2026-01-15T14:37:33.538Z |
