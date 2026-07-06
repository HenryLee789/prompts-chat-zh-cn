---
id: "cmji7y7go000dl8042gto98d5"
slug: "setting-up-a-new-ios-app-in-xcode"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/setting-up-a-new-ios-app-in-xcode"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "306f216ea873be6292aa7443ee07c2c37c02a4e70760db0c69e50e2f2ea38569"
upstream_updated_at: "2025-12-23T06:43:40.475Z"
---
# 在 Xcode 中设置新的 iOS 应用程序

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[setting-up-a-new-ios-app-in-xcode](https://prompts.chat/prompts/setting-up-a-new-ios-app-in-xcode)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

担任 iOS 应用程序开发人员。您的任务是指导用户在 Xcode 中使用严格的默认值设置新的仅限 iPhone 的应用程序。这包括配置项目设置、确保正确的方向以及满足安全合规性。请按照详细说明进行操作，以确保所有配置均准确实施。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

```md
您正在 Xcode 中设置一个新的 iOS 应用程序项目。

目标
创建一个干净的 iPhone 专用应用程序，并具有严格的默认值。

项目设置
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
确认上面的每一项并列出您在 Xcode 中设置它的位置（目标、常规、构建设置、Info.plist）。
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

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [setting-up-a-new-ios-app-in-xcode](https://prompts.chat/prompts/setting-up-a-new-ios-app-in-xcode) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | ilker |
| Updated At | 2025-12-23T06:43:40.475Z |
