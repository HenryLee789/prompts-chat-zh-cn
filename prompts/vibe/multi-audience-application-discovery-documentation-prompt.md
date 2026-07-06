# 多受众应用程序发现和文档提示词

## 中文说明

旨在分析代码库并生成为高管、技术、产品和业务受众量身定制的全面 Markdown 文档的提示。它指导AI提取高级系统用途、架构、关键组件、工作流程、产品功能、业务领域和限制，生成适合技术和非技术利益相关者的入门和发现文档。

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
# **提示代码分析和系统文档生成**

你是代码分析和系统文档方面的专家。你的任务是分析此项目/工作区中提供的源代码，并生成全面的 Markdown 文档，作为多个受众（执行人员、技术人员、业务人员和产品人员）的入门指南。

## **说明**

分析提供的源代码并提取以下信息，将其组织成结构良好的 Markdown 文档：

---

## **1.高管层观点：执行摘要**

### **应用目的**
- 该系统的主要目标是什么？
- 它旨在高水平解决什么问题？

### **它是如何工作的（高级）**
- 以简洁且易于非技术受众理解的方式描述整个系统流程。
- 系统执行的主要步骤或流程是什么？

### **高级业务规则**
- 识别并描述代码中实现的主要业务规则。
- 系统遵循的基本业务策略、约束或逻辑是什么？

### **主要优点**
- 该系统为组织或其用户带来的主要好处是什么？

---

## **2.技术层面的观点：技术概述**

### **系统架构**
- 基于代码分析描述整个系统架构。
- 它是否遵循特定的模式（例如单体、微服务等）？
- 确定的主要组件或模块是什么？

### **使用的技术（技术堆栈）**
- 列出项目中使用的所有编程语言、框架、库、数据库和其他技术。

### **主要技术流程**
- 详细说明系统内的主要数据和执行流程。
- 不同的组件如何相互作用？

### **关键组件**
- 识别并描述最重要的系统组件，解释它们在架构中的角色和职责。

### **代码复杂性（观察）**
- 根据你的分析，提供有关代码复杂性的一般观察（例如，结构良好、模块化、表面复杂性较高的区域）。

### **图表**
- 生成高级图表以可视化系统架构和行为：
  - 组件图（重点关注主要模块及其交互）
  - 数据流程图（显示信息如何在系统中移动）
  - 类图（呈现关键类及其关系，如果适用）
  - 简化的部署图（显示组件运行的位置，如果可检测到）
  - 简化的基础设施/部署图（如果基础设施详细信息显而易见）
- **在 Markdown 文件中使用 Mermaid 语法创建上面的图表。图表应该保持高层次，而不是过于详细。**

---

## **3。产品视图：产品摘要**

### **系统的作用（详细）**
- 详细描述系统的主要功能。
- 用户可以执行哪些任务或操作？

### **系统适用于谁（用户/客户）**
- 确定系统的主要目标受众。
- 从中受益的最终用户或客户是谁？

### **它解决的问题（需要解决）**
- 系统帮助用户或组织解决哪些具体问题？
- 它满足什么需求？

### **用例/用户旅程（高级）**
- 系统的主要用例是什么？
- 用户如何与系统交互以实现他们的目标？

### **核心功能**
- 清晰简洁地列出最重要的系统功能。

### **业务领域**
- 确定系统涵盖的主要业务领域（例如销售、库存、财务）。

---

## **Analysis Limitations**

- 代码分析过程中遇到的主要限制是什么？
- 简要描述是什么限制了你对代码的理解。
- 提供减少或消除这些限制的建议。

---

## **文件指南**

### **文档格式**
- 文档必须采用 Markdown 格式，每个部分都有清晰的标题和副标题。
- 使用列表、表格和其他 Markdown 元素来提高可读性和理解性。

### **Additional Instructions**
- 专注于提供相关的高级信息，避免过多的实施细节，除非对理解至关重要。
- 使用适合多种受众的清晰、简洁且易于理解的语言。
- 根据代码分析尽可能具体。
- 将完整的回复生成为**格式良好的 Markdown (`.md`) 文档**。
- 使用**清晰直接的语言**。
- 根据上述部分使用**标题和副标题**。

### **文档标题**
**应用程序的执行和业务分析 - “<应用程序名称>”**

### **文件摘要**
本文档是对<system-name>系统源代码分析的结果，涵盖以下几个方面：

- **执行级视图：** 应用程序的目的、高级操作、主要业务规则和主要优势的摘要。
- **技术级视图：** 有关系统架构、使用的技术、主要流程、关键组件和图表（组件、数据流、类和部署）的详细信息。
- **产品视图：** 系统功能、目标用户、解决的问题、主要用例、特性和业务领域的详细描述。
- **分析限制：** 确定关键分析限制以及克服这些限制的建议。该分析基于可用的源代码文件。

---

## **重要**
分析必须考虑**所有项目文件**。阅读并理解执行任务所需的**所有必要文件**，并全面了解系统。

---

## **行动**
请分析我的环境/工作空间中当前可用的源代码并生成所请求的 Markdown 文档。输出文件名必须遵循以下格式要求：
`<yyyy-mm-dd-project-name-app-discovery_cursor.md>`
```

---

## English Original

### Title

Multi-Audience Application Discovery & Documentation Prompt

### Description

A prompt designed to analyze a codebase and generate comprehensive Markdown documentation tailored for executive, technical, product, and business audiences. It guides an AI to extract high-level system purpose, architecture, key components, workflows, product features, business domains, and limitations, producing an onboarding and discovery document suitable for both technical and non-technical stakeholders.

### Prompt

```md
# **Prompt for Code Analysis and System Documentation Generation**

You are a specialist in code analysis and system documentation. Your task is to analyze the source code provided in this project/workspace and generate a comprehensive Markdown document that serves as an onboarding guide for multiple audiences (executive, technical, business, and product).

## **Instructions**

Analyze the provided source code and extract the following information, organizing it into a well-structured Markdown document:

---

## **1. Executive-Level View: Executive Summary**

### **Application Purpose**
- What is the main objective of this system?
- What problem does it aim to solve at a high level?

### **How It Works (High-Level)**
- Describe the overall system flow in a concise and accessible way for a non-technical audience.
- What are the main steps or processes the system performs?

### **High-Level Business Rules**
- Identify and describe the main business rules implemented in the code.
- What are the fundamental business policies, constraints, or logic that the system follows?

### **Key Benefits**
- What are the main benefits this system delivers to the organization or its users?

---

## **2. Technical-Level View: Technology Overview**

### **System Architecture**
- Describe the overall system architecture based on code analysis.
- Does it follow a specific pattern (e.g., Monolithic, Microservices, etc.)?
- What are the main components or modules identified?

### **Technologies Used (Technology Stack)**
- List all programming languages, frameworks, libraries, databases, and other technologies used in the project.

### **Main Technical Flows**
- Detail the main data and execution flows within the system.
- How do the different components interact with each other?

### **Key Components**
- Identify and describe the most important system components, explaining their role and responsibility within the architecture.

### **Code Complexity (Observations)**
- Based on your analysis, provide general observations about code complexity (e.g., well-structured, modularized, areas of higher apparent complexity).

### **Diagrams**
- Generate high-level diagrams to visualize the system architecture and behavior:
  - Component diagram (focusing on major modules and their interactions)
  - Data flow diagram (showing how information moves through the system)
  - Class diagram (presenting key classes and their relationships, if applicable)
  - Simplified deployment diagram (showing where components run, if detectable)
  - Simplified infrastructure/deployment diagram (if infrastructure details are apparent)
- **Create the diagrams above using Mermaid syntax within the Markdown file. Diagrams should remain high-level and not overly detailed.**

---

## **3. Product View: Product Summary**

### **What the System Does (Detailed)**
- Describe the system’s main functionalities in detail.
- What tasks or actions can users perform?

### **Who the System Is For (Users / Customers)**
- Identify the primary target audience of the system.
- Who are the end users or customers who benefit from it?

### **Problems It Solves (Needs Addressed)**
- What specific problems does the system help solve for users or the organization?
- What needs does it address?

### **Use Cases / User Journeys (High-Level)**
- What are the main use cases of the system?
- How do users interact with the system to achieve their goals?

### **Core Features**
- List the most important system features clearly and concisely.

### **Business Domains**
- Identify the main business domains covered by the system (e.g., sales, inventory, finance).

---

## **Analysis Limitations**

- What were the main limitations encountered during the code analysis?
- Briefly describe what constrained your understanding of the code.
- Provide suggestions to reduce or eliminate these limitations.

---

## **Document Guidelines**

### **Document Format**
- The document must be formatted in Markdown, with clear titles and subtitles for each section.
- Use lists, tables, and other Markdown elements to improve readability and comprehension.

### **Additional Instructions**
- Focus on delivering relevant, high-level information, avoiding excessive implementation details unless critical for understanding.
- Use clear, concise, and accessible language suitable for multiple audiences.
- Be as specific as possible based on the code analysis.
- Generate the complete response as a **well-formatted Markdown (`.md`) document**.
- Use **clear and direct language**.
- Use **headings and subheadings** according to the sections above.

### **Document Title**
**Executive and Business Analysis of the Application – "<application-name>"**

### **Document Summary**
This document is the result of the source code analysis of the <system-name> system and covers the following areas:

- **Executive-Level View:** Summary of the application’s purpose, high-level operation, main business rules, and key benefits.
- **Technical-Level View:** Details about system architecture, technologies used, main flows, key components, and diagrams (components, data flow, classes, and deployment).
- **Product View:** Detailed description of system functionality, target users, problems addressed, main use cases, features, and business domains.
- **Analysis Limitations:** Identification of key analysis constraints and suggestions to overcome them.

The analysis was based on the available source code files.

---

## **IMPORTANT**
The analysis must consider **ALL project files**.  
Read and understand **all necessary files** required to perform the task and achieve a complete understanding of the system.

---

## **Action**
Please analyze the source code currently available in my environment/workspace and generate the requested Markdown document.

The output file name must follow this format:  
`<yyyy-mm-dd-project-name-app-discovery_cursor.md>`

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
