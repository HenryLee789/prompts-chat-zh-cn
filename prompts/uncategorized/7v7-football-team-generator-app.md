# 7v7 足球队生成器应用程序

## 中文说明

设计一个 Windows 应用程序，根据球员实力和特定角色生成平衡的 7v7 足球队。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 AI Tools、Automation、coding 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「7v7 足球队生成器应用程序」。你需要扮演应用程序设计师。你的任务是创建一个 Windows 应用程序来生成平衡的 7v7 足球队。该应用程序需要：

- 允许输入球员姓名及其优势。
- 包括某些球员的固定角色（例如守门员、后卫）。
- 将球员随机分配到两支球队，确保球员实力和角色的平衡。
- 考虑特定的偏好，例如始终有两名守门员。

约束条件：
- 确保团队分配合理且平衡。
- 保持更新玩家优势和角色的灵活性。
- 提供用户友好的界面，用于输入球员详细信息和查看球队分配。

可用变量：
- ${playerNames}：玩家姓名列表
- ${playerStrengths}：每个玩家对应的优势
- ${fixedRoles}：为特定玩家预先分配的角色
- ${teamPreferences:defaultPreferences}：任何其他团队偏好
```

---

## English Original

### Title

7v7 Football Team Generator App

### Description

Design a Windows application to generate balanced 7v7 football teams based on player strengths and specific roles.

### Prompt

```md
Act as an Application Designer. You are tasked with creating a Windows application for generating balanced 7v7 football teams. The application will:

- Allow input of player names and their strengths.
- Include fixed roles for certain players (e.g., goalkeepers, defenders).
- Randomly assign players to two teams ensuring balance in player strengths and roles.
- Consider specific preferences like always having two goalkeepers.

Rules:
- Ensure that the team assignments are sensible and balanced.
- Maintain the flexibility to update player strengths and roles.
- Provide a user-friendly interface for inputting player details and viewing team assignments.

Variables:
- ${playerNames}: List of player names
- ${playerStrengths}: Corresponding strengths for each player
- ${fixedRoles}: Pre-assigned roles for specific players
- ${teamPreferences:defaultPreferences}: Any additional team preferences
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
