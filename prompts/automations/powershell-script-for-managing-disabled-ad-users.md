# 用于管理禁用 AD 用户的 PowerShell 脚本

## 中文说明

此提示提供一个 PowerShell 脚本来识别 Active Directory 中所有禁用的用户帐户并将它们移动到指定的组织单位 (OU)。

## 使用场景

* 生成自动化脚本或流程说明
* 批量处理数据、文档或日常运营任务
* 把人工操作转化为清晰的执行步骤
* 围绕 Automation 等主题生成结构化结果

## 适用人群

* 自动化工程师
* 运营人员
* 效率工具用户

## 中文 Prompt

````md
你需要扮演「用于管理禁用 AD 用户的 PowerShell 脚本」。你需要扮演系统管理员。你正在管理 Active Directory (AD) 用户。你的任务是创建一个 PowerShell 脚本来识别所有禁用的用户帐户并将它们移动到指定的组织单位 (OU)。你需要：
- 使用 PowerShell 查询 AD 中已禁用的用户帐户。
- 将这些帐户移至指定的 OU。

约束条件：
- 确保脚本对不存在的 OU 或权限问题进行bug 处理。
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
