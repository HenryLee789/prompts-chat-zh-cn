# 技术代码库发现和入门提示词

## 中文说明

旨在指导对代码存储库进行深入技术分析以加速开发人员入门的提示。它指导AI分析整个代码库并生成结构化的 Markdown 文档，涵盖架构、技术堆栈、关键组件、执行和数据流、集成、测试、安全性和构建/部署，作为技术参考指南。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
**上下文：**
我是一名刚刚加入该项目的开发人员，我正在使用你这个AI编码助手来深入了解现有的代码库。我的目标是尽快提高生产力，并根据对当前系统的深入了解做出明智的技术决策。

**主要目标：**
分析该项目/工作区中提供的源代码，并生成**详细、清晰且结构良好的 Markdown 文档**，解释系统的架构、功能、主要流程、关键组件和技术堆栈。本文档应作为**技术入门指南**。只要有可能，通过提供**相关文件、类和函数的直接链接**以及有助于阐明概念的代码示例来提高导航性。

---

## **详细说明 - 请解决以下几点：**

### 1. **README/说明文件摘要**
- 查找 `README.md`、`LEIAME.md`、`CONTRIBUTING.md` 等文件或类似文档。
- 为新开发人员提供最相关部分的客观而详细的摘要，包括：
  - 项目概况
  - 如何在本地设置和运行系统
  - 采用的标准和惯例
  - 贡献指南（如果有）

---

### 2. **详细技术堆栈**
- 识别并列出项目中使用的完整技术堆栈：
  - 编程语言，包括可检测到的版本（例如，来自 `package.json`、`pom.xml`、`.tool-versions`、`requirements.txt`、`build.gradle` 等）。
  - 主要框架（后端、前端等——例如 Spring Boot、.NET、React、Angular、Vue、Django、Rails）。
  - 数据库：
    - 类型（SQL/NoSQL）
    - 名称（PostgreSQL、MongoDB 等）
  - 核心架构风格（例如，Monolith、微服务、无服务器、MVC、MVVM、清洁架构）。
  - 云平台（如果可通过 SDK 或配置识别 — AWS、Azure、GCP）。
  - 构建工具和包管理器（Maven、Gradle、npm、yarn、pip）。
  - 任何其他相关技术（缓存、消息代理、容器化 — Docker、Kubernetes）。
- **参考并链接演示每个项目的配置文件。**

---

### 3. **系统概述和目的**
- 清楚地描述系统的用途和用途。
- 它能解决什么问题？
- 列出核心功能。
- 如果可能，将系统与所涉及的业务领域联系起来。
- 提供主要功能的高级描述。

---

### 4. **项目结构和阅读建议**
- **入口点：**
  我应该从哪里开始探索代码？确定主要入口点（例如，`main.go`、`index.js`、`Program.cs`、`app.py`、`Application.java`）。
  **提供这些文件的直接链接。**
- **总组织：**
  解释总体文件夹和文件结构。突出显示重要的约定。
  **使用真实的文件夹和文件名示例。**
- **配置：**
  有主要的配置文件吗？ （例如，`config.yaml`、`.env`、`appsettings.json`）
  哪些配置是关键的？
  **提供链接。**
- **阅读推荐：**
  建议首先阅读的顺序或一组关键文件/模块，以快速掌握项目的核心概念。

---

### 5. **关键组件**
- 识别并描述最重要或最核心的模块、类、功能或服务。
- 解释每个组件的职责。
- 描述他们的职责和相互依赖性。
- 对于每个组件：
  - 包含代表性代码片段
  - 提供实施地点的链接
- **尽可能提供直接链接和代码示例。**

---

### 6. **执行和数据流**
- 描述最常见或关键的工作流程或业务流程（例如订单处理、用户身份验证）。
- 解释数据如何流经系统：
  - 数据保存的地方
  - 如何读取、修改和传播
- **只要有可能，用示例进行说明并链接到相关函数或类。**

#### 6.1 **数据库架构概述（如果适用）**
- 对于数据密集型应用：
  - 识别主要实体/表/集合
  - 描述他们的主要关系
  - 基于 ORM 模型、迁移或架构文件（如果可用）

---

### 7. **依赖关系和集成**
- **依赖关系：**
  列出使用的主要外部库、框架和 SDK。简单解释一下每一项的作用。
  **提供它们的配置位置或最常用位置的链接。**
- **集成：**
  识别并解释与外部服务、附加数据库、第三方 API、消息代理等的集成。沟通是如何发生的？
  **指向负责的模块/类并包含链接。**

#### 7.1 **API 文档（如果适用）**
- 如果项目公开 API：
  - 是否有 API 文档工具或标准的证据（例如 Swagger/OpenAPI、Javadoc、特定于端点的文档字符串）？
  - 在哪里可以找到此文档或如何生成它？

---

### 8. **图表**
- 生成高级图表以可视化系统架构和行为：
  - 组件图（突出显示主要模块及其交互）
  - 数据流程图（显示信息如何在系统中移动）
  - 类图（显示关键类和关系，如果适用）
  - 简化的部署图（组件运行的位置，如果可检测到）
  - 简化的基础设施/部署图（如果基础设施详细信息显而易见）
- **使用 Markdown 文件中的 Mermaid 语法创建这些图表。**
- 图表应该是**高层**；不需要大量的细节。

---

### 9. **测试**
- 有自动化测试吗？
  - 单元测试
  - 集成测试
  - 端到端（E2E）测试
- 它们位于项目的什么位置？
- 使用哪些测试框架？
- 测试通常如何执行？
- 如何在本地运行测试？
- 是否有涉及测试的 CI/CD 策略？

---

### 10. **bug 处理和日志记录**
- 应用程序通常如何处理bug？
  - 是否有标准模式（例如，全局中间件、自定义异常）？
- 使用哪个日志库？
- 是否有标准的日志格式？
- 是否与监控工具（例如 Datadog、Sentry）有明显的集成？

---

### 11. **安全注意事项**
- 代码中是否有明显的安全机制？
  - 认证
  - 授权（中间件/过滤器）
  - 输入验证
- 是否主要使用特定的安全库（例如 Spring Security、Passport.js、JWT 库）？
- 是否有值得注意的安全实践？
  - 秘密管理
  - 防御常见攻击

---

### 12. **其他相关观察（包括构建/部署）**
- 是否有与 **构建或部署** 相关的文件？
  - `Dockerfile`
  - `docker-compose.yml`
  - 构建/部署脚本
  - CI/CD 配置文件（例如 `.github/workflows/`、`.gitlab-ci.yml`）
- 这些文件表明应用程序的构建和部署方式是什么？
- 对于新开发人员来说，还有什么其他重要或特别有帮助的事情吗？
  - 评论中提到的已知技术债务
  - 不寻常的设计模式
  - 重要的编码约定
  - 性能说明

---

## **最终输出格式**
- 将完整的回复生成为**格式良好的 Markdown (`.md`) 文档**。
- 使用**清晰直接的语言**。
- 根据上面编号的部分用**标题和副标题**组织内容。
- **包括相关代码片段**（简短且具有代表性）。
- 每当提及特定代码元素时，**包含指向文件、函数、类和定义的可点击链接**。
- 使用上面编号的部分来构建文档以提高可读性。

**只要有可能：**
- 包括文件、函数和类的**可点击链接**。
- 显示**简短的、有代表性的代码片段**。
- 使用**要点或表格**作为列表。

---

### **重要**
分析必须考虑**项目中的所有文件**。阅读并理解完全执行此任务所需的**所有必要文件**并完全了解系统。

---

### **行动**
请分析我的环境/工作空间中当前可用的源代码并根据要求生成 Markdown 文档。输出文件名必须遵循以下格式要求：
`<yyyy-mm-dd-project-name-app-dev-discovery_cursor.md>`
```

---

## English Original

### Title

Technical Codebase Discovery & Onboarding Prompt

### Description

A prompt designed to guide a deep technical analysis of a code repository to accelerate developer onboarding. It instructs an AI to analyze the entire codebase and generate a structured Markdown document covering architecture, technology stack, key components, execution and data flows, integrations, testing, security, and build/deployment, serving as a technical reference guide.

### Prompt

```md
**Context:**  
I am a developer who has just joined the project and I am using you, an AI coding assistant, to gain a deep understanding of the existing codebase. My goal is to become productive as quickly as possible and to make informed technical decisions based on a solid understanding of the current system.

**Primary Objective:**  
Analyze the source code provided in this project/workspace and generate a **detailed, clear, and well-structured Markdown document** that explains the system’s architecture, features, main flows, key components, and technology stack.  
This document should serve as a **technical onboarding guide**.  
Whenever possible, improve navigability by providing **direct links to relevant files, classes, and functions**, as well as code examples that help clarify the concepts.

---

## **Detailed Instructions — Please address the following points:**

### 1. **README / Instruction Files Summary**
- Look for files such as `README.md`, `LEIAME.md`, `CONTRIBUTING.md`, or similar documentation.
- Provide an objective yet detailed summary of the most relevant sections for a new developer, including:
  - Project overview
  - How to set up and run the system locally
  - Adopted standards and conventions
  - Contribution guidelines (if available)

---

### 2. **Detailed Technology Stack**
- Identify and list the complete technology stack used in the project:
  - Programming language(s), including versions when detectable (e.g., from `package.json`, `pom.xml`, `.tool-versions`, `requirements.txt`, `build.gradle`, etc.).
  - Main frameworks (backend, frontend, etc. — e.g., Spring Boot, .NET, React, Angular, Vue, Django, Rails).
  - Database(s):
    - Type (SQL / NoSQL)
    - Name (PostgreSQL, MongoDB, etc.)
  - Core architecture style (e.g., Monolith, Microservices, Serverless, MVC, MVVM, Clean Architecture).
  - Cloud platform (if identifiable via SDKs or configuration — AWS, Azure, GCP).
  - Build tools and package managers (Maven, Gradle, npm, yarn, pip).
  - Any other relevant technologies (caching, message brokers, containerization — Docker, Kubernetes).
- **Reference and link the configuration files that demonstrate each item.**

---

### 3. **System Overview and Purpose**
- Clearly describe what the system does and who it is for.
- What problems does it solve?
- List the core functionalities.
- If possible, relate the system to the business domains involved.
- Provide a high-level description of the main features.

---

### 4. **Project Structure and Reading Recommendations**
- **Entry Point:**  
  Where should I start exploring the code? Identify the main entry points (e.g., `main.go`, `index.js`, `Program.cs`, `app.py`, `Application.java`).  
  **Provide direct links to these files.**
- **General Organization:**  
  Explain the overall folder and file structure. Highlight important conventions.  
  **Use real folder and file name examples.**
- **Configuration:**  
  Are there main configuration files? (e.g., `config.yaml`, `.env`, `appsettings.json`)  
  Which configurations are critical?  
  **Provide links.**
- **Reading Recommendation:**  
  Suggest an order or a set of key files/modules that should be read first to quickly grasp the project’s core concepts.

---

### 5. **Key Components**
- Identify and describe the most important or central modules, classes, functions, or services.
- Explain the responsibilities of each component.
- Describe their responsibilities and interdependencies.
- For each component:
  - Include a representative code snippet
  - Provide a link to where it is implemented
- **Provide direct links and code examples whenever possible.**

---

### 6. **Execution and Data Flows**
- Describe the most common or critical workflows or business processes (e.g., order processing, user authentication).
- Explain how data flows through the system:
  - Where data is persisted
  - How it is read, modified, and propagated
- **Whenever possible, illustrate with examples and link to relevant functions or classes.**

#### 6.1 **Database Schema Overview (if applicable)**
- For data-intensive applications:
  - Identify the main entities/tables/collections
  - Describe their primary relationships
  - Base this on ORM models, migrations, or schema files if available

---

### 7. **Dependencies and Integrations**
- **Dependencies:**  
  List the main external libraries, frameworks, and SDKs used.  
  Briefly explain the role of each one.  
  **Provide links to where they are configured or most commonly used.**
- **Integrations:**  
  Identify and explain integrations with external services, additional databases, third-party APIs, message brokers, etc.  
  How does communication occur?  
  **Point to the modules/classes responsible and include links.**

#### 7.1 **API Documentation (if applicable)**
- If the project exposes APIs:
  - Is there evidence of API documentation tools or standards (e.g., Swagger/OpenAPI, Javadoc, endpoint-specific docstrings)?
  - Where can this documentation be found or how can it be generated?

---

### 8. **Diagrams**
- Generate high-level diagrams to visualize the system architecture and behavior:
  - Component diagram (highlighting main modules and their interactions)
  - Data flow diagram (showing how information moves through the system)
  - Class diagram (showing key classes and relationships, if applicable)
  - Simplified deployment diagram (where components run, if detectable)
  - Simplified infrastructure/deployment diagram (if infrastructure details are apparent)
- **Create these diagrams using Mermaid syntax inside the Markdown file.**
- Diagrams should be **high-level**; extensive detailing is not required.

---

### 9. **Testing**
- Are there automated tests?
  - Unit tests
  - Integration tests
  - End-to-end (E2E) tests
- Where are they located in the project?
- Which testing framework(s) are used?
- How are tests typically executed?
- How can tests be run locally?
- Is there any CI/CD strategy involving tests?

---

### 10. **Error Handling and Logging**
- How does the application generally handle errors?
  - Is there a standard pattern (e.g., global middleware, custom exceptions)?
- Which logging library is used?
- Is there a standard logging format?
- Is there visible integration with monitoring tools (e.g., Datadog, Sentry)?

---

### 11. **Security Considerations**
- Are there evident security mechanisms in the code?
  - Authentication
  - Authorization (middleware/filters)
  - Input validation
- Are specific security libraries prominently used (e.g., Spring Security, Passport.js, JWT libraries)?
- Are there notable security practices?
  - Secrets management
  - Protection against common attacks

---

### 12. **Other Relevant Observations (Including Build/Deploy)**
- Are there files related to **build or deployment**?
  - `Dockerfile`
  - `docker-compose.yml`
  - Build/deploy scripts
  - CI/CD configuration files (e.g., `.github/workflows/`, `.gitlab-ci.yml`)
- What do these files indicate about how the application is built and deployed?
- Is there anything else crucial or particularly helpful for a new developer?
  - Known technical debt mentioned in comments
  - Unusual design patterns
  - Important coding conventions
  - Performance notes

---

## **Final Output Format**
- Generate the complete response as a **well-formatted Markdown (`.md`) document**.
- Use **clear and direct language**.
- Organize content with **titles and subtitles** according to the numbered sections above.
- **Include relevant code snippets** (short and representative).
- **Include clickable links** to files, functions, classes, and definitions whenever a specific code element is mentioned.
- Structure the document using the numbered sections above for readability.

**Whenever possible:**
- Include **clickable links** to files, functions, and classes.
- Show **short, representative code snippets**.
- Use **bullet points or tables** for lists.

---

### **IMPORTANT**
The analysis must consider **ALL files in the project**.  
Read and understand **all necessary files** required to fully execute this task and achieve a complete understanding of the system.

---

### **Action**
Please analyze the source code currently available in my environment/workspace and generate the Markdown document as requested.

The output file name must follow this format:  
`<yyyy-mm-dd-project-name-app-dev-discovery_cursor.md>`

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
