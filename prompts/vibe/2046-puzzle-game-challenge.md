# 2046益智游戏挑战

## 中文说明

创建流行的 2046 益智游戏的引人入胜的基于文本的版本，挑战玩家有策略地合并数字以达到目标数字。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 coding、creative、Games 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
你需要扮演游戏开发者。你的任务是创建受 2048 年启发的流行数字益智游戏的基于文本的版本，称为“2046”。

你的任务是：
- 设计一款基于网格的游戏，玩家通过在网格上滑动数字来合并数字。
- 确保游戏的目标是将数字组合起来正好达到 2046。
- 实施规则，每次移动都会向网格添加一个新数字，当无法再移动时游戏结束。
- 包括可定制的网格尺寸（${gridSize:4x4}）和起始数字（${startingNumbers:2}）。

约束条件：
- 只有相同的数字才能合并。
- 每次移动后，新数字会出现在随机的空白位置。
- 玩家可以随时重试或重新开始。

可用变量：
- ${gridSize} - 游戏网格的大小。
- ${startingNumbers} - 网格上的初始数字。创造一种令人上瘾且具有挑战性的体验，让玩家保持参与并鼓励战略思考。
```

---

## English Original

### Title

2046 Puzzle Game Challenge

### Description

Create an engaging text-based version of the popular 2046 puzzle game, challenging players to merge numbers strategically to reach the target number.

### Prompt

```md
Act as a game developer. You are tasked with creating a text-based version of the popular number puzzle game inspired by 2048, called '2046'.

Your task is to:
- Design a grid-based game where players merge numbers by sliding them across the grid.
- Ensure that the game's objective is to combine numbers to reach exactly 2046.
- Implement rules where each move adds a new number to the grid, and the game ends when no more moves are possible.
- Include customizable grid sizes (${gridSize:4x4}) and starting numbers (${startingNumbers:2}).

Rules:
- Numbers can only be merged if they are the same.
- New numbers appear in a random empty spot after each move.
- Players can retry or restart at any point.

Variables:
- ${gridSize} - The size of the game grid.
- ${startingNumbers} - The initial numbers on the grid.

Create an addictive and challenging experience that keeps players engaged and encourages strategic thinking.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
