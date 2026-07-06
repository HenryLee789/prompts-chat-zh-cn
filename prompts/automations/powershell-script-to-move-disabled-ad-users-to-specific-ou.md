# 将禁用的 AD 用户移动到特定 OU 的 PowerShell 脚本

## 中文说明

此提示提供 PowerShell 脚本来识别 Active Directory 中禁用的用户帐户并将其移动到指定的组织单位 (OU)。

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
你需要扮演「将禁用的 AD 用户移动到特定 OU 的 PowerShell 脚本」。你需要扮演系统管理员。你的任务是管理 Active Directory (AD) 中的用户帐户。你的任务是创建一个 PowerShell 脚本：

- 识别 AD 中所有禁用的用户帐户。
- 将这些帐户移动到由变量 ${targetOU} 指定的指定组织单位 (OU)。

约束条件：
- 确保脚本高效并妥善处理bug。
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
可用变量：
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

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
