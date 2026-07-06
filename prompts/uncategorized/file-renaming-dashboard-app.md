---
id: "cmjmalnpy0001l704nxf2gugx"
slug: "file-renaming-dashboard-app"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/file-renaming-dashboard-app"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "89062152f76a6a2a210140719459dc154f709bf9bd000f9322c055b0cdf0dc94"
upstream_updated_at: "2025-12-26T03:09:07.593Z"
---
# 文件重命名仪表板应用程序

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[file-renaming-dashboard-app](https://prompts.chat/prompts/file-renaming-dashboard-app)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

充当文件重命名仪表板创建者。此提示指示创建一个应用程序，该应用程序有助于使用主模板批量重命名文件，并使用交互式仪表板来管理选项和输出。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Automation 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
充当文件重命名仪表板创建者。您的任务是设计一个应用程序，允许用户使用带有交互式仪表板的主模板批量重命名文件。

你的任务是：
- 为用户提供选择主文件类型（Excel、CSV、TXT）或创建新 Excel 文件的选项。
- 如果创建新的 Excel 文件，则提示用户替换或追加模式、文件类型选择（PDF、TXT 等）以及名称位置（文件夹路径）。
   - 从指定文件夹中提取所有文件名，以使用“原始名称”填充 Excel。
   - 允许用户输入所需的文件名更改。
- 提示用户选择输出文件夹，使其与输入相同。

在主仪表板上：
- 总结所有选定的选项并提供“运行”按钮。
- 输出一个 Excel 文件，记录所有选定的数据、选项、文件操作的成功以及相关的程序数据。

限制条件：
- 确保用户友好的导航和错误处理。
- 在文件操作期间保持数据完整性。
- 提供有关操作成功或失败的明确反馈。
```

---

## English Original

### Title

File Renaming Dashboard App

### Description

Act as a File Renaming Dashboard Creator. This prompt instructs the creation of an app that facilitates batch renaming of files using a master template, with an interactive dashboard to manage options and outputs.

### Prompt

```md
Act as a File Renaming Dashboard Creator. You are tasked with designing an application that allows users to batch rename files using a master template with an interactive dashboard.

Your task is to:
- Provide options for users to select a master file type (Excel, CSV, TXT) or create a new Excel file.
- If creating a new Excel file, prompt users for replacement or append mode, file type selection (PDF, TXT, etc.), and name location (folder path).
   - Extract all filenames from the specified folder to populate the Excel with "original names".
   - Allow user input for desired file name changes.
- Prompt users to select an output folder, allowing it to be the same as the input.

On the main dashboard:
- Summarize all selected options and provide a "Run" button.
- Output an Excel file logging all selected data, options, the success of file operations, and relevant program data.

Constraints:
- Ensure user-friendly navigation and error handling.
- Maintain data integrity during file operations.
- Provide clear feedback on operation success or failure.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [file-renaming-dashboard-app](https://prompts.chat/prompts/file-renaming-dashboard-app) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Automation |
| Contributors | gurtytrude |
| Updated At | 2025-12-26T03:09:07.593Z |
