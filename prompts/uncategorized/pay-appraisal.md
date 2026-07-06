# 薪酬评估

## 中文说明

用于让 AI 围绕「薪酬评估」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「薪酬评估」。

Act as a career and compensation analyst for the UK market, specifically London.
Evaluate my potential salary and market value based on the following profile:
• 地点：英国伦敦
• 工业：石油和天然气（氧气）
• 经验：7年
• 当前职位：IT 和业务分析师
• 教育背景：计算机科学学士、MBA
当前角色的详细职责：

•	Own ServiceNow ITSM processes across Incident, Change, Problem, Request, Asset, Demand and Sprint Management, supporting SLA compliance and operational excellence.
•	Lead Major Incident Management activities by coordinating cross-functional technical teams, managing stakeholder communications and restoring business-critical services.
•	Influence Change Management governance through CAB participation, risk assessment, implementation planning and post-implementation reviews.
•	Produced Root Cause Analysis reports to identify recurring issues, improve service stability and support continuous improvement.
•	Coordinate IT service delivery for UK and Algeria operations, translating business requirements into practical technical solutions.
•	Deliver AI-powered productivity solutions using Microsoft Copilot Studio, OXYGPT, Microsoft Copilot and Lovable.
•	Deliver Power BI dashboards and automated business processes using Microsoft Power Platform to improve reporting, visibility and operational efficiency.
•	Administered ServiceNow workflows, dashboards, reporting and knowledge management to improve service delivery and user experience.
•	Managed Microsoft Entra ID, Active Directory and Microsoft Intune for identity, access and endpoint administration.
•	Own the Algeria Field employee IT lifecycle, including induction, account provisioning, timesheet profile creation, access management and offboarding in line with Oxy policies.
•	Developed and maintained SharePoint Online sites to support collaboration, document management and business process efficiency.
•	Coordinate enterprise IT infrastructure support across London and Algeria, including data centre operations, endpoint lifecycle management, workplace technology deployments and VIP support.
•	Managed Microsoft Teams Rooms, Logitech collaboration systems and Microsoft 365 services to deliver reliable hybrid workplace solutions.
•	Generated on-demand SQL Server reports and Power BI data visualisations to support business decision-making.

•	Deliver automation and reporting solutions for Africa operations, including security reporting, visa tracking, Person on Board monitoring and work permit management.
•	Contributed to enterprise network upgrades, wireless access point refresh programmes and connectivity improvements with minimal operational disruption.
•	Coordinate AV modernisation from Microsoft Surface Hub to Logitech Teams Rooms across UK and Algeria offices, improving hybrid collaboration.
•	Planned and coordinated the Lumen fibre circuit installation for the London office and data centre, improving WAN resilience and connectivity.
•	Supported the London data centre relocation, legacy infrastructure decommissioning and large-scale migration from NetApp storage to SharePoint Online using ShareGate.
• 领导企业端点生命周期管理，包括硬件更新、高性能工作站的部署和配置。
•	Own IT Service Owner responsibilities for the Algeria Business Unit, coordinating service delivery between business stakeholders, Houston headquarters, UK operations and global infrastructure teams.
•	Coordinate IT and technical training sessions for the London and Algeria teams, influencing knowledge sharing, capability development and productivity improvement.
认证：
• AWS 云从业者
• Microsoft Power 平台 (PL-200)
• CCNA（路由和交换）
• CCNA（网络安全）
• 微软认证专家
• ITIL
• Scrum 大师
• ServiceNow 管理员
• AWS 解决方案架构师（培训中）
请提供：
1. 我在伦敦的实际薪资范围（基本薪资）
2. 按角色级别细分：
o IT 业务服务分析师
3. 跨行业市场比较（石油和天然气与金融、咨询、技术）
4. 我的认证、MBA 和技术广度对薪资定位的影响
5. 合同/日薪等值并作为永久角色
6. 根据此个人资料确定我目前的薪酬是否过低、公平或高于市场水平 说明：
• 使用当前的伦敦和英国薪资基准
• 切合实际并避免通用范围
• 认识到我的角色结合了业务分析、技术支持、云、基础设施和平台管理
• 提供具有清晰要点的结构化输出
```

---

## English Original

### Title

Pay Appraisal

### Description



### Prompt

```md
Act as a career and compensation analyst for the UK market, specifically London.
Evaluate my potential salary and market value based on the following profile:
•	Location: London, UK
•	Industry: Oil and Gas (Oxy)
•	Experience: 7 years
•	Current Role: IT and Business Analyst
•	Education: BS computer Science, MBA 
Detailed Responsibilities in Current Role:

•	Own ServiceNow ITSM processes across Incident, Change, Problem, Request, Asset, Demand and Sprint Management, supporting SLA compliance and operational excellence.
•	Lead Major Incident Management activities by coordinating cross-functional technical teams, managing stakeholder communications and restoring business-critical services.
•	Influence Change Management governance through CAB participation, risk assessment, implementation planning and post-implementation reviews.
•	Produced Root Cause Analysis reports to identify recurring issues, improve service stability and support continuous improvement.
•	Coordinate IT service delivery for UK and Algeria operations, translating business requirements into practical technical solutions.
•	Deliver AI-powered productivity solutions using Microsoft Copilot Studio, OXYGPT, Microsoft Copilot and Lovable.
•	Deliver Power BI dashboards and automated business processes using Microsoft Power Platform to improve reporting, visibility and operational efficiency.
•	Administered ServiceNow workflows, dashboards, reporting and knowledge management to improve service delivery and user experience.
•	Managed Microsoft Entra ID, Active Directory and Microsoft Intune for identity, access and endpoint administration.
•	Own the Algeria Field employee IT lifecycle, including induction, account provisioning, timesheet profile creation, access management and offboarding in line with Oxy policies.
•	Developed and maintained SharePoint Online sites to support collaboration, document management and business process efficiency.
•	Coordinate enterprise IT infrastructure support across London and Algeria, including data centre operations, endpoint lifecycle management, workplace technology deployments and VIP support.
•	Managed Microsoft Teams Rooms, Logitech collaboration systems and Microsoft 365 services to deliver reliable hybrid workplace solutions.
•	Generated on-demand SQL Server reports and Power BI data visualisations to support business decision-making.

•	Deliver automation and reporting solutions for Africa operations, including security reporting, visa tracking, Person on Board monitoring and work permit management.
•	Contributed to enterprise network upgrades, wireless access point refresh programmes and connectivity improvements with minimal operational disruption.
•	Coordinate AV modernisation from Microsoft Surface Hub to Logitech Teams Rooms across UK and Algeria offices, improving hybrid collaboration.
•	Planned and coordinated the Lumen fibre circuit installation for the London office and data centre, improving WAN resilience and connectivity.
•	Supported the London data centre relocation, legacy infrastructure decommissioning and large-scale migration from NetApp storage to SharePoint Online using ShareGate.
•	Lead enterprise endpoint lifecycle management, including hardware refresh, deployment and provisioning of high-performance workstations.
•	Own IT Service Owner responsibilities for the Algeria Business Unit, coordinating service delivery between business stakeholders, Houston headquarters, UK operations and global infrastructure teams.
•	Coordinate IT and technical training sessions for the London and Algeria teams, influencing knowledge sharing, capability development and productivity improvement.
Certifications:
•	AWS Cloud Practitioner
•	Microsoft Power Platform (PL-200)
•	CCNA (Routing & Switching)
•	CCNA (Network Security)
•	Microsoft Certified Professional
•	ITIL
•	Scrum Master
•	ServiceNow Administrator
•	AWS Solution Architect (in training)
Please provide:
1.	A realistic salary range for my profile in London (base salary)
2.	Breakdown by role level:
o	IT Business service Analyst
3.	Market comparison across industries (Oil & Gas vs Finance, Consulting, Technology)
4.	Impact of my certifications, MBA, and technical breadth on salary positioning
5.	Contract/day rate equivalent and as permanent role
6.	Identify whether I am currently underpaid, fairly paid, or above market based on this profile Instructions:
•	Use current London and UK salary benchmarks
•	Be realistic and avoid generic ranges
•	Recognise that my role combines Business Analysis, Technical Support, Cloud, Infrastructure, and Platform Administration
•	Provide structured output with clear bullet points



```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
