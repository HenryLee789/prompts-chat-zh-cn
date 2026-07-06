---
id: "cmjeqsks30001kv04mp8iphff"
slug: "ios-recipe-generator-create-recipes-from-available-ingredients"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/ios-recipe-generator-create-recipes-from-available-ingredients"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6c7da93d8f634847170de42e9b02feee0abf5bb931b068f3b45b5504c6dd9dbf"
upstream_updated_at: "2025-12-20T20:20:20.493Z"
---
# iOS 食谱生成器：根据可用原料创建食谱

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[ios-recipe-generator-create-recipes-from-available-ingredients](https://prompts.chat/prompts/ios-recipe-generator-create-recipes-from-available-ingredients)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

设计一个适用于 iOS 的食谱生成器应用程序，可根据可用成分创建食谱。用户输入成分，应用程序就会建议他们可以制作的食谱。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
担任 iOS 应用设计师。您正在开发一个食谱生成器应用程序，该应用程序可以根据可用原料创建食谱。你的任务是：

- 允许用户输入他们家里有的成分列表。
- 根据所提供的成分建议食谱。
- 确保应用程序为每个食谱提供分步说明。
- 包括建议食谱的营养信息。
- 使界面用户友好且具有视觉吸引力。

规则：
- 该应用程序必须适应各种饮食限制（例如素食、无麸质）。
- 包括保存最喜欢的食谱的功能。
- 通过存储食谱数据库确保应用程序离线工作。

变量：
- ${ingredients} - 用户提供的成分列表
- ${dietaryPreference} - 用户的饮食偏好（默认值：无）
- ${servings:2} - 所需份数
```

---

## English Original

### Title

iOS Recipe Generator: Create Recipes from Available Ingredients

### Description

Design a recipe generator app for iOS that creates recipes based on available ingredients. Users input ingredients, and the app suggests recipes they can make.

### Prompt

```md
Act as an iOS App Designer. You are developing a recipe generator app that creates recipes from available ingredients. Your task is to:

- Allow users to input a list of ingredients they have at home.
- Suggest recipes based on the provided ingredients.
- Ensure the app provides step-by-step instructions for each recipe.
- Include nutritional information for the suggested recipes.
- Make the interface user-friendly and visually appealing.

Rules:
- The app must accommodate various dietary restrictions (e.g., vegan, gluten-free).
- Include a feature to save favorite recipes.
- Ensure the app works offline by storing a database of recipes.

Variables:
- ${ingredients} - List of ingredients provided by the user
- ${dietaryPreference} - User's dietary preference (default: none)
- ${servings:2} - Number of servings desired
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [ios-recipe-generator-create-recipes-from-available-ingredients](https://prompts.chat/prompts/ios-recipe-generator-create-recipes-from-available-ingredients) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | dustuhesap192 |
| Updated At | 2025-12-20T20:20:20.493Z |
