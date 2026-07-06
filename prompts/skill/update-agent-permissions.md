# 更新代理权限

## 中文说明

分析当前聊天并将只读命令添加到 Claude 和 Gemini 允许列表中。

## 使用场景

* 编写可复用的 AI skill 或工具说明
* 定义输入、流程、约束和输出格式
* 帮助智能体稳定执行专业任务
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 智能体开发者
* 工具构建者
* 高级 AI 用户

## 中文 Prompt

````md
# 任务：更新代理权限

请分析我们的整个对话并确定使用的所有特定命令。更新 Claude Code 和 Gemini CLI 的权限。

## 参考文件

- 克劳德：~/.claude/settings.json
- 双子座政策：~/.gemini/policies/tool-permissions.toml
- 双子座设置：~/.gemini/settings.json
- Gemini 信任文件夹：~/.gemini/trustedFolders.json

## 说明

1. 审核：将识别的命令与两个配置文件中当前允许的命令进行比较。
2. 过滤器：仅包含提供对资源的只读访问的命令。
3. 限制：明确排除任何能够修改、删除或破坏数据的命令。
4. 更新：仅将缺少的只读命令添加到两个配置文件中。
5. 约束：不要使用通配符。为了保证精细的安全性，每个命令都必须单独列出。显示两个类别下的命令列表：只读和写入

我们最感兴趣的是这里的只读命令，这些命令属于以下类别：读取、获取、描述、查看或类似命令。一旦我批准了该列表，请更新这两个配置文件。

## 克劳德格式

文件：~/.claude/settings.json

Claude 使用带有允许、拒绝和询问数组的 JSON 权限对象。允许格式要求：`Bash(command subcommand:*)`

在允许数组中按字母顺序插入新命令。

## 双子座格式

文件：~/.gemini/policies/tool-permissions.toml

Gemini 使用具有不同优先级规则的 TOML 策略引擎。规则类型和优先级：
- `decision = "deny"` 位于 `priority = 200` 用于破坏性操作
- `decision = "ask_user"` at `priority = 150` 用于需要确认的写入操作
- `decision = "allow"` 位于 `priority = 100` 用于只读操作

对于允许规则，请使用 `commandPrefix`（提供字边界匹配）。对于拒绝和询问规则，请使用 `commandRegex`（捕获标志变体）。新的只读命令应按类别添加到适当的现有 `[[rule]]` 块中，如果没有类别适合，则应添加到新块中。允许规则示例：
```toml
[[rule]]
toolName = "run_shell_command"
commandPrefix = ["command subcommand1", "command subcommand2"]
decision = "allow"
priority = 100
```

## 双子座目录

如果访问工作区之外的任何新目录，请将它们添加到：
- ~/.gemini/settings.json 中的 `context.includeDirectories`
- ~/.gemini/trustedFolders.json 值为 `"TRUST_FOLDER"`

## 例外情况

不建议添加以下命令：

- git分支：-D标志将删除分支
- git pull：如果合并被执行
- git checkout：更改分支可能会中断工作
- ajira issues create：防止过多创建新问题
- find：-delete 和 -exec 标志具有破坏性（使用 fd 代替）
````

---

## English Original

### Title

Update Agent Permissions

### Description

Analyse the current chat and add the read-only commands to the Claude and Gemini allow list.

### Prompt

````md
# Task: Update Agent Permissions

Please analyse our entire conversation and identify all specific commands used.

Update permissions for both Claude Code and Gemini CLI.

## Reference Files

- Claude: ~/.claude/settings.json
- Gemini policy: ~/.gemini/policies/tool-permissions.toml
- Gemini settings: ~/.gemini/settings.json
- Gemini trusted folders: ~/.gemini/trustedFolders.json

## Instructions

1. Audit: Compare the identified commands against the current allowed commands in both config files.
2. Filter: Only include commands that provide read-only access to resources.
3. Restrict: Explicitly exclude any commands capable of modifying, deleting, or destroying data.
4. Update: Add only the missing read-only commands to both config files.
5. Constraint: Do not use wildcards. Each command must be listed individually for granular security.

Show me the list of commands under two categories: Read-Only, and Write

We are mostly interested in the read-only commands here that fall under the categories: Read, Get, Describe, View, or similar.

Once I have approved the list, update both config files.

## Claude Format

File: ~/.claude/settings.json

Claude uses a JSON permissions object with allow, deny, and ask arrays.

Allow format: `Bash(command subcommand:*)`

Insert new commands in alphabetical order within the allow array.

## Gemini Format

File: ~/.gemini/policies/tool-permissions.toml

Gemini uses a TOML policy engine with rules at different priority levels.

Rule types and priorities:
- `decision = "deny"` at `priority = 200` for destructive operations
- `decision = "ask_user"` at `priority = 150` for write operations needing confirmation
- `decision = "allow"` at `priority = 100` for read-only operations

For allow rules, use `commandPrefix` (provides word-boundary matching).
For deny and ask rules, use `commandRegex` (catches flag variants).

New read-only commands should be added to the appropriate existing `[[rule]]` block by category, or a new block if no category fits.

Example allow rule:
```toml
[[rule]]
toolName = "run_shell_command"
commandPrefix = ["command subcommand1", "command subcommand2"]
decision = "allow"
priority = 100
```

## Gemini Directories

If any new directories outside the workspace were accessed, add them to:
- `context.includeDirectories` in ~/.gemini/settings.json
- ~/.gemini/trustedFolders.json with value `"TRUST_FOLDER"`

## Exceptions

Do not suggest adding the following commands:

- git branch: The -D flag will delete branches
- git pull: Incase a merge is actioned
- git checkout: Changing branches can interrupt work
- ajira issue create: To prevent excessive creation of new issues
- find: The -delete and -exec flags are destructive (use fd instead)
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
