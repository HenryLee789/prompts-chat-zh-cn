---
id: "cmjljmtgf0001js049upukmeb"
slug: "powershell-script-to-move-disabled-ad-users-to-specific-ou"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/powershell-script-to-move-disabled-ad-users-to-specific-ou"
category: "automations"
category_name: "Automations"
category_zh: "自动化"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "6f284ebfff195a6b8de98b44e54954ffe73c3493ba4c2eec9db1d78ca38f90ab"
upstream_updated_at: "2025-12-25T14:34:03.778Z"
---
# 将禁用的 AD 用户移动到特定 OU 的 PowerShell 脚本

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[powershell-script-to-move-disabled-ad-users-to-specific-ou](https://prompts.chat/prompts/powershell-script-to-move-disabled-ad-users-to-specific-ou)  
> 分类：自动化（Automations / `automations`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示提供 PowerShell 脚本来识别 Active Directory 中禁用的用户帐户并将其移动到指定的组织单位 (OU)。

## 使用场景

- 用于自动化相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Automation 等主题快速生成可复用结果。

## 适用人群

- 自动化工程师
- 运营人员
- 效率工具用户

## 中文 Prompt 正文

````md
担任系统管理员。您的任务是管理 Active Directory (AD) 中的用户帐户。您的任务是创建一个 PowerShell 脚本：

- 识别 AD 中所有禁用的用户帐户。
- 将这些帐户移动到由变量 ${targetOU} 指定的指定组织单位 (OU)。

规则：
- 确保脚本高效并妥善处理错误。
- 在脚本中包含注释以解释每个部分。

PowerShell 脚本示例：
```
# Define the target OU
$targetOU = "OU=DisabledUsers,DC=yourdomain,DC=com"

# Get all disabled user accounts
$disabledUsers = Get-ADUser -Filter {Enabled -eq $false}

# Move each disabled user to the target OU
foreach ($user in $disabledUsers) {
    try {
        Move-ADObject -Identity $user.DistinguishedName -TargetPath $targetOU
        Write-Host "Moved: $($user.SamAccountName) to $targetOU"
    } catch {
        Write-Host "Failed to move $($user.SamAccountName): $_"
    }
}
```
变量：
- ${targetOU} - 将向其中移动禁用用户的目标组织单位的可分辨名称。
````

---

## English Original

### Title

PowerShell Script to Move Disabled AD Users to Specific OU

### Description

This prompt provides a PowerShell script to identify disabled user accounts in Active Directory and move them to a specified Organizational Unit (OU).

### Prompt

````md
Act as a System Administrator. You are tasked with managing user accounts in Active Directory (AD). Your task is to create a PowerShell script that:

- Identifies all disabled user accounts in the AD.
- Moves these accounts to a designated Organizational Unit (OU) specified by the variable ${targetOU}.

Rules:
- Ensure that the script is efficient and handles errors gracefully.
- Include comments in the script to explain each section.

Example PowerShell Script:
```
# Define the target OU
$targetOU = "OU=DisabledUsers,DC=yourdomain,DC=com"

# Get all disabled user accounts
$disabledUsers = Get-ADUser -Filter {Enabled -eq $false}

# Move each disabled user to the target OU
foreach ($user in $disabledUsers) {
    try {
        Move-ADObject -Identity $user.DistinguishedName -TargetPath $targetOU
        Write-Host "Moved: $($user.SamAccountName) to $targetOU"
    } catch {
        Write-Host "Failed to move $($user.SamAccountName): $_"
    }
}
```
Variables:
- ${targetOU} - The distinguished name of the target Organizational Unit where disabled users will be moved.
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [powershell-script-to-move-disabled-ad-users-to-specific-ou](https://prompts.chat/prompts/powershell-script-to-move-disabled-ad-users-to-specific-ou) |
| Category | Automations (`automations`) |
| Type | `TEXT` |
| Tags | Automation |
| Contributors | darkvalerikspb |
| Updated At | 2025-12-25T14:34:03.778Z |
