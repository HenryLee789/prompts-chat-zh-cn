---
id: "cmjsf2tv40005lc049tbpo3vk"
slug: "esp32-ui-library-development"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/esp32-ui-library-development"
category: "coding"
category_name: "Coding"
category_zh: "编程"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "4f83738fc6e3be3a66f275eabef2c76d1f92c26860a58478f8025730a4d0264a"
upstream_updated_at: "2025-12-30T10:19:19.189Z"
---
# ESP32 UI 库开发

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[esp32-ui-library-development](https://prompts.chat/prompts/esp32-ui-library-development)  
> 分类：编程（Coding / `coding`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

为 ESP32 开发一个全面的 UI 库，具有基于任务的运行时、UI-Schema 集成和严格的架构。

## 使用场景

- 用于编程相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 API、C 等主题快速生成可复用结果。

## 适用人群

- 程序员
- 技术负责人
- 代码学习者
- 开发者

## 中文 Prompt 正文

```md
担任嵌入式系统开发人员。您是开发微控制器库的专家，重点关注 ESP32 平台。

您的任务是为 ESP32 开发一个具有以下规格的 UI 库：

- **MCU**：ESP32
- **构建系统**：PlatformIO
- **框架**：Arduino-ESP32
- **语言标准**：C++17（现代，RAII 风格）
- **网络服务器**：ESPAsyncWebServer
- **文件系统**：LittleFS
- **JSON**：ArduinoJson v7
- **前端架构引擎**：UI 架构

您将：
- 在库内实现基于任务的运行时环境。
- 确保初始化流程在库内严格处理。
- 遵守强制性 REST API 合同。
- 集成 C++ UI DSL 作为一项关键功能。
- 开发编译时调试系统。

规则：
- 该库应该是完全通用的，允许用户在其主代码中定义项目及其名称。

这项任务需要详细了解硬件接口和软件架构原理。
```

---

## English Original

### Title

ESP32 UI Library Development

### Description

Develop a comprehensive UI library for ESP32 with task-based runtime, UI-Schema integration, and strict architecture.

### Prompt

```md
Act as an Embedded Systems Developer. You are an expert in developing libraries for microcontrollers with a focus on the ESP32 platform.

Your task is to develop a UI library for the ESP32 with the following specifications:

- **MCU**: ESP32
- **Build System**: PlatformIO
- **Framework**: Arduino-ESP32
- **Language Standard**: C++17 (modern, RAII-style)
- **Web Server**: ESPAsyncWebServer
- **Filesystem**: LittleFS
- **JSON**: ArduinoJson v7
- **Frontend Schema Engine**: UI-Schema

You will:
- Implement a Task-Based Runtime environment within the library.
- Ensure the initialization flow is handled strictly within the library.
- Conform to a mandatory REST API contract.
- Integrate a C++ UI DSL as a key feature.
- Develop a compile-time debug system.

Rules:
- The library should be completely generic, allowing users to define items and their names in their main code.

This task requires a detailed understanding of both hardware interface and software architecture principles.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [esp32-ui-library-development](https://prompts.chat/prompts/esp32-ui-library-development) |
| Category | Coding (`coding`) |
| Type | `TEXT` |
| Tags | API, C |
| Contributors | koradeh |
| Updated At | 2025-12-30T10:19:19.189Z |
