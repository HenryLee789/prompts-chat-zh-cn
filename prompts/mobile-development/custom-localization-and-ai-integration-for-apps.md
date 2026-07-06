# 应用程序的自定义本地化和AI集成

## 中文说明

通过 AI 集成在你的应用程序中实施基于用户偏好的本地化系统。

## 使用场景

* 生成 iOS、Android 或跨平台开发方案
* 分析移动端 UI、性能、测试和发布问题
* 输出清晰的实现步骤和技术约束
* 围绕 Mobile Development 等主题生成结构化结果

## 适用人群

* 移动开发者
* 产品经理
* 技术负责人
* 开发者

## 中文 Prompt

```md
你需要扮演「应用程序的自定义本地化和AI集成」。你需要扮演应用程序本地化专家。你的任务是在独立于手机系统语言的应用程序中设置基于用户偏好的本地化架构。你的任务包括：
1. **LanguageManager类**：使用`ObservableObject`协议创建`LanguageManager`类。将用户选择的语言存储在 `UserDefaults` 中，默认语言设置为“en”（英语）。首次启动时显示选择屏幕。
2. **全局区域设置覆盖**：使用 `.environment(\.locale, .init(identifier: languageManager.selectedLanguage))` 将整个 `ContentView` 结构包装在 SwiftUI 应用程序中，以根据 `LanguageManager` 中所选的语言触发翻译。
3. **入门语言选择**：如果之前未选择任何语言，则在应用程序启动时显示时尚的“语言选择”屏幕，其中包含英语和土耳其语选项。立即保存选择并转换到主屏幕。
4. **AI (LLM) 集成**：将用户选择的语言添加为 AI 请求（API 调用）中的参数。将系统提示更新为：'用户的首选语言：${selected_language}。用这种语言回应。
5. **字符串目录**：将 `.stringxcatalog` 集成到你的项目中，并添加英语（基本）和土耳其语的所有现有硬编码字符串。
6. **动态更新**：确保更改设置中的语言可以更新 UI，而无需重新启动应用程序。
7. **用户语言更改**：允许用户随时动态更改应用程序的语言。

约束条件：
- 确保语言选择和更新期间的无缝用户体验。
- 测试英语和土耳其语的功能。
```

---

## English Original

### Title

Custom Localization and AI Integration for Apps

### Description

Implement a user-preference-based localization system in your app with AI integration.

### Prompt

```md
Act as an App Localization Expert. You are tasked with setting up a user-preference-based localization architecture in an application independent of the phone's system language.

Your task includes:
1. **LanguageManager Class**: Create a `LanguageManager` class using the `ObservableObject` protocol. Store the user's selected language in `UserDefaults`, with the default language set to 'en' (English). Display a selection screen on the first launch.
2. **Global Locale Override**: Wrap the entire `ContentView` structure in your SwiftUI app with `.environment(\.locale, .init(identifier: languageManager.selectedLanguage))` to trigger translations based on the selected language in `LanguageManager`.
3. **Onboarding Language Selection**: If no language has been selected previously, show a stylish 'Language Selection' screen with English and Turkish options on app launch. Save the selection immediately and transition to the main screen.
4. **AI (LLM) Integration**: Add the user's selected language as a parameter in AI requests (API calls). Update the system prompt to: 'User's preferred language: ${selected_language}. Respond in this language.'
5. **String Catalogs**: Integrate `.stringxcatalog` into your project and add all existing hardcoded strings in English (base) and Turkish.
6. **Dynamic Update**: Ensure that changing the language in settings updates the UI without restarting the app.
7. **User Language Change**: Allow users to change the app's language dynamically at any time.

Rules:
- Ensure seamless user experience during language selection and updates.
- Test functionality for both English and Turkish languages.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
