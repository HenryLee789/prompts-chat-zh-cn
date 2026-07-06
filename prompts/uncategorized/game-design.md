# 游戏设计

## 中文说明

宏观设计 系统规格 数值平衡 技术TDD 批判性评论

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 AI助手 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
提示：
“担任首席系统设计师。我想设计一个[系统名称，例如武器共振系统]。
​输入：> - 类型：[例如动作角色扮演游戏]
​玩家目标：[例如，垂直力量进步]
​任务：> 请提供结构设计，涵盖：
​主循环：玩家日常如何与该系统交互。
​系统约束：资源汇和喷泉。
​互连性：该系统如何馈入[战斗/经济]系统。
​可扩展性：如何在未来两年内向该系统添加新内容而不打破平衡。”

约束条件：
- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。
```

---

## English Original

### Title

Game design

### Description

Macro Design
System Specs
Numerical Balancing
Technical TDD
Critical Review

### Prompt

```md
Prompt:
"Act as a Lead System Designer. I want to design a [System Name, e.g., Weapon Resonance System].
​Inputs: > - Genre: [e.g., Action RPG]
​Player Goal: [e.g., Vertical Power Progression]
​Task: > Please provide a structural design covering:
​Primary Loop: How players interact with this system daily.
​System Constraints: Resource sinks and fountains.
​Interconnectivity: How this system feeds into the [Combat/Economy] system.
​Scalability: How to add new content to this system in the next 2 years without breaking balance."
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
