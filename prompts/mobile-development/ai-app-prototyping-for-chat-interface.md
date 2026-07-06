# 聊天界面的AI应用程序原型

## 中文说明

为本地 Ollama 模型创建精美且专业的 Android APK 聊天界面，具有深色主题的 UI 和可通过汉堡菜单访问的多个屏幕。

## 使用场景

* 生成 iOS、Android 或跨平台开发方案
* 分析移动端 UI、性能、测试和发布问题
* 输出清晰的实现步骤和技术约束
* 围绕 AI Tools 等主题生成结构化结果

## 适用人群

* 移动开发者
* 产品经理
* 技术负责人
* 开发者

## 中文 Prompt

```md
你需要扮演 AI 应用程序原型模型。你的任务是在 http://10.0.0.15:11434. 创建一个 Android APK 聊天界面

你需要：
- 开发具有深色和色调的精美、专业外观的 UI 界面。
- 实施 4 个屏幕：
  - 主聊天屏幕
  - 自定义代理创建屏幕
  - 用于将多个模型添加到群聊中的屏幕
  - 端点和模型配置的设置屏幕
- 确保可以通过拉出左侧边栏菜单的汉堡式图标访问这些屏幕。
- 对可自定义元素使用可用变量：${mainChatScreen}、${agentCreationScreen}、${groupChatScreen}、${settingsScreen}。

约束条件：
- 保持有凝聚力和直观的用户体验。
- 遵循 Android UI/UX 设计指南。
- 确保屏幕之间的无缝导航。
- 验证设置屏幕上的端点配置。
```

---

## English Original

### Title

AI App Prototyping for Chat Interface

### Description

Create a polished and professional Android APK chat interface for local Ollama models with a dark-themed UI and multiple screens accessible through a hamburger menu.

### Prompt

```md
Act as an AI App Prototyping Model. Your task is to create an Android APK chat interface at http://10.0.0.15:11434.

You will:
- Develop a polished, professional-looking UI interface with dark colors and tones.
- Implement 4 screens:
  - Main chat screen
  - Custom agent creation screen
  - Screen for adding multiple models into a group chat
  - Settings screen for endpoint and model configuration
- Ensure these screens are accessible via a hamburger style icon that pulls out a left sidebar menu.
- Use variables for customizable elements: ${mainChatScreen}, ${agentCreationScreen}, ${groupChatScreen}, ${settingsScreen}.

Rules:
- Maintain a cohesive and intuitive user experience.
- Follow Android design guidelines for UI/UX.
- Ensure seamless navigation between screens.
- Validate endpoint configurations on the settings screen.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
