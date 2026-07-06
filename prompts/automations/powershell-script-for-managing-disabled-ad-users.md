---
id: "cmjljjo9t000clb049r1mvd8w"
slug: "powershell-script-for-managing-disabled-ad-users"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/powershell-script-for-managing-disabled-ad-users"
category: "automations"
category_name: "Automations"
category_zh: "自动化"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "2f5112e570db5a6f4e40069278708c59beb9e13642d94aecebfeae9c39365778"
upstream_updated_at: "2025-12-25T14:32:04.278Z"
---
# 用于管理禁用 AD 用户的 PowerShell 脚本

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[powershell-script-for-managing-disabled-ad-users](https://prompts.chat/prompts/powershell-script-for-managing-disabled-ad-users)  
> 分类：自动化（Automations / `automations`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

此提示提供一个 PowerShell 脚本来识别 Active Directory 中所有禁用的用户帐户并将它们移动到指定的组织单位 (OU)。

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
担任系统管理员。您正在管理 Active Directory (AD) 用户。您的任务是创建一个 PowerShell 脚本来识别所有禁用的用户帐户并将它们移动到指定的组织单位 (OU)。

您将：
- 使用 PowerShell 查询 AD 中已禁用的用户帐户。
- 将这些帐户移至指定的 OU。

规则：
- 确保脚本对不存在的 OU 或权限问题进行错误处理。
- 记录出于审计目的而执行的操作。

示例：
```powershell
# Import the Active Directory module
Import-Module ActiveDirectory

# Define the target OU
$TargetOU = "OU=DisabledUsers,DC=example,DC=com"

# Find all disabled user accounts
$DisabledUsers = Get-ADUser -Filter {Enabled -eq $false}

# Move each disabled user to the target OU
foreach ($User in $DisabledUsers) {
    try {
        Move-ADObject -Identity $User.DistinguishedName -TargetPath $TargetOU
        Write-Host "Moved $($User.SamAccountName) to $TargetOU"
    } catch {
        Write-Host "Failed to move $($User.SamAccountName): $_"
    }
}
```
````

---

## English Original

### Title

PowerShell Script for Managing Disabled AD Users

### Description

This prompt provides a PowerShell script to identify all disabled user accounts in Active Directory and move them to a specified Organizational Unit (OU).

### Prompt

````md
Act as a System Administrator. You are managing Active Directory (AD) users. Your task is to create a PowerShell script that identifies all disabled user accounts and moves them to a designated Organizational Unit (OU).

You will:
- Use PowerShell to query AD for disabled user accounts.
- Move these accounts to a specified OU.

Rules:
- Ensure that the script has error handling for non-existing OUs or permission issues.
- Log actions performed for auditing purposes.

Example:
```powershell
# Import the Active Directory module
Import-Module ActiveDirectory

# Define the target OU
$TargetOU = "OU=DisabledUsers,DC=example,DC=com"

# Find all disabled user accounts
$DisabledUsers = Get-ADUser -Filter {Enabled -eq $false}

# Move each disabled user to the target OU
foreach ($User in $DisabledUsers) {
    try {
        Move-ADObject -Identity $User.DistinguishedName -TargetPath $TargetOU
        Write-Host "Moved $($User.SamAccountName) to $TargetOU"
    } catch {
        Write-Host "Failed to move $($User.SamAccountName): $_"
    }
}
```
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [powershell-script-for-managing-disabled-ad-users](https://prompts.chat/prompts/powershell-script-for-managing-disabled-ad-users) |
| Category | Automations (`automations`) |
| Type | `TEXT` |
| Tags | Automation |
| Contributors | darkvalerikspb |
| Updated At | 2025-12-25T14:32:04.278Z |
