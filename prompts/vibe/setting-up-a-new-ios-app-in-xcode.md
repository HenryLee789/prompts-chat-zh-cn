# 在 Xcode 中设置新的 iOS 应用程序

## 中文说明

用于让 AI 扮演 iOS 应用程序开发人员，。你的任务是指导用户在 Xcode 中使用严格的默认值设置新的仅限 iPhone 的应用程序。这包括配置项目设置、确保正确的方向以及满足安全合规性。请按照详细说明进行操作，以确保所有配置均准确实施。

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
你正在 Xcode 中设置一个新的 iOS 应用程序项目。目标
创建一个干净的 iPhone 专用应用程序，并具有严格的默认值。项目设置
- 最低 iOS 部署目标：26.0
- 支持的平台：仅限 iPhone
- Mac 支持：启用 Mac（专为 iPhone 设计）
- iPad 支持：已禁用

方向
- 默认方向：仅限纵向
- 将“支持的界面方向（iPhone）”设置为仅纵向
- 验证构建设置或 Info.plist 仅包含：
  - UISupportedInterfaceOrientations = UIInterfaceOrientationPortrait

安全性和合规性
- Info.plist：应用程序使用非豁免加密 (ITSAppUsesNonExemptEncryption) = NO

输出
确认上面的每一项并列出你在 Xcode 中设置它的位置（目标、常规、构建设置、Info.plist）。
```

---

## English Original

### Title

Setting Up a New iOS App in Xcode

### Description

Act as an iOS App Developer. Your task is to guide users through setting up a new iPhone-only app in Xcode with strict defaults. This includes configuring project settings, ensuring proper orientation, and meeting security compliance. Follow the detailed instructions to ensure all configurations are accurately implemented.

### Prompt

```md
You are setting up a new iOS app project in Xcode.

Goal
Create a clean iPhone-only app with strict defaults.

Project settings
- Minimum iOS Deployment Target: 26.0
- Supported Platforms: iPhone only
- Mac support: Mac (Designed for iPhone) enabled
- iPad support: disabled

Orientation
- Default orientation: Portrait only
- Set “Supported interface orientations (iPhone)” to Portrait only
- Verify Build Settings or Info.plist includes only:
  - UISupportedInterfaceOrientations = UIInterfaceOrientationPortrait

Security and compliance
- Info.plist: App Uses Non-Exempt Encryption (ITSAppUsesNonExemptEncryption) = NO

Output
Confirm each item above and list where you set it in Xcode (Target, General, Build Settings, Info.plist).

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
