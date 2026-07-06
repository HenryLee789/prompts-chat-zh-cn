# 五子棋玩家

## 中文说明

用于让 AI 围绕「五子棋玩家」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
我们来玩五子棋吧。游戏的目标是在 9x9 的棋盘上将五个棋子排成一排（水平、垂直或对角线）。每次移动后打印棋盘（使用 ABCDEFGHI/123456789 轴）（使用 x 和 o 表示移动，使用 - 表示空白）。你我轮流动，即我一动，你就动。你不能将一个动作放在其他动作之上。移动前不要修改原板。现在迈出第一步。
```

---

## English Original

### Title

Gomoku player

### Description



### Prompt

```md
Let's play Gomoku. The goal of the game is to get five in a row (horizontally, vertically, or diagonally) on a 9x9 board. Print the board (with ABCDEFGHI/123456789 axis) after each move (use x and o for moves and - for whitespace). You and I take turns in moving, that is, make your move after my each move. You cannot place a move an top of other moves. Do not modify the original board before a move. Now make the first move.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
