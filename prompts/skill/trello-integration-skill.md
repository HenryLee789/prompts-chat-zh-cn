---
id: "cmme4q2y90004l7049abloaz7"
slug: "trello-integration-skill"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/trello-integration-skill"
category: "skill"
category_name: "Agent Skill"
category_zh: "智能体技能"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "f38e2a0310f4b1bb350b057242a20a43fe2dd5cd2b953c8f63061f9b58b13749"
upstream_updated_at: "2026-03-06T00:02:12.928Z"
---
# Trello 集成技能

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[trello-integration-skill](https://prompts.chat/prompts/trello-integration-skill)  
> 分类：智能体技能（Agent Skill / `skill`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

此技能允许您与 Trello 帐户交互以自动列出面板、查看列表和创建卡片。

## 使用场景

- 用于智能体技能相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 Agent、Automation、Project Management、API 等主题快速生成可复用结果。

## 适用人群

- AI 智能体开发者
- 工具构建者
- 高级 AI 用户

## 中文 Prompt 正文

````md
---
名称： trello 集成技能
描述：此技能允许您与 Trello 帐户交互以自动列出面板、查看列表和创建卡片。
---

# Trello 集成技巧

Trello 集成技能在 AI 代理和用户的 Trello 帐户之间提供无缝连接。它使代理能够自主获取现有的面板和列表，并根据用户提示在特定面板上创建新的任务卡。

## 特点
- **获取面板**：检索用户有权访问的所有 Trello 面板的列表，包括其名称、ID 和 URL。
- **获取列表**：检索属于特定面板的所有列表（“待办事项”、“进行中”、“完成”等列）。
- **创建卡片**：自动创建新卡片，其标题和描述位于指定列表中。

---

## 设置和先决条件

要在本地使用此技能，您需要提供 Trello Developer API 凭据。

1. 在 [Trello 开发者门户（Power-Ups 管理员）](https://trello.com/app-key) 生成您的凭据。
2. 创建 API 密钥。
3. 生成秘密令牌（读/写访问）。
4. 将这些凭据添加到项目的根 `.env` 文件中：

```env
# Trello Integration
TRELLO_API_KEY=your_api_key_here
TRELLO_TOKEN=your_token_here
```

---

## 用法和架构

该技能利用位于 `.agent/skills/trello_skill/scripts/` 目录中的独立 Node.js 脚本。

### 1. 列出所有板
获取经过身份验证的用户的所有板以确定正确的目标 `boardId`。

**执行：**
```bash
node .agent/skills/trello_skill/scripts/list_boards.js
```

### 2. 在面板中列出列（列表）
获取特定板内的列表以查找确切的 `listId`（例如，检索“待办事项”列的 ID）。

**执行：**
```bash
node .agent/skills/trello_skill/scripts/list_lists.js <boardId>
```

### 3. 创建一张新卡
将新卡推送到指定列表。 

**执行：**
```bash
node .agent/skills/trello_skill/scripts/create_card.js <listId> "<Card Title>" "<Optional Description>"
```
*（始终将卡片标题和描述用双引号括起来，以防止 bash 参数分裂）。*

---

## AI 代理工作流程

当用户请求管理任务或将任务添加到 Trello 时，请自动执行以下步骤：
1. **识别目标**：如果目标 `listId` 未知，请首先运行 `list_boards.js` 来识别正确的 `boardId`，然后执行 `list_lists.js <boardId>` 来检索相应的 `listId`（例如，对于“待办事项”）。
2. **执行命令**：运行`create_card.js <listId> "Task Title" "Task Description"`脚本。
3. **返回报告**：与用户确认创建成功，并提供新创建的 Trello 卡的直接 URL。
文件：create_card.js
const 路径 = require('路径');
require('dotenv').config({ 路径: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("错误：.env 文件中缺少 TRELLO_API_KEY 或 TRELLO_TOKEN。");
    进程.退出(1);
}

const listId = process.argv[2];
const 卡名 = process.argv[3];
const cardDesc = process.argv[4] || “”；

if (!listId || !cardName) {
    控制台.错误(`Usage: node create_card.js <listId> "${card_name}" ["${card_description}"]`);
    进程.退出(1);
}

异步函数 createCard() {
    常量 url = `https://api.trello.com/1/cards?idList=${listId}&key=${API_KEY}&token=${TOKEN}`;

    尝试{
        const 响应 = 等待获取（url，{
            方法：'POST'，
            标题：{
                '接受': '应用程序/json',
                '内容类型'：'应用程序/json'
            },
            正文：JSON.stringify({
                名称：卡名，
                描述：卡描述，
                位置：'顶部'
            })
        });

如果（！response.ok）{
            const errText = 等待响应.text();
            抛出新错误（`HTTP error! status: ${response.status}, message: ${errText}`）；
        }
        const 卡=等待response.json();
        控制台.log(`Successfully created card!`);
        控制台.log(`Name: ${card.name}`);
        控制台.log(`ID: ${card.id}`);
        控制台.log(`URL: ${card.url}`);
    } 捕获（错误）{
        console.error("创建卡片失败：", error.message);
    }
}

创建卡（）；
文件：list_board.js
const 路径 = require('路径');
require('dotenv').config({ 路径: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("错误：.env 文件中缺少 TRELLO_API_KEY 或 TRELLO_TOKEN。");
    进程.退出(1);
}

异步函数 listBoards() {
    常量 url = `https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${TOKEN}&fields=name,url`;
    尝试{
        const 响应 = 等待 fetch(url);
        if (!response.ok) 抛出新错误(`HTTP error! status: ${response.status}`);
        constboards=awaitresponse.json();
        console.log("--- 你的 Trello 看板 ---");
        boards.forEach(b => console.log(`Name: ${b.name}\nID: ${b.id}\nURL: ${b.url}\n`));
    } 捕获（错误）{
        console.error("获取板失败：", error.message);
    }
}

列表板（）；
文件：list_lists.js
const 路径 = require('路径');
require('dotenv').config({ 路径: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("错误：.env 文件中缺少 TRELLO_API_KEY 或 TRELLO_TOKEN。");
    进程.退出(1);
}

const boardId = process.argv[2];
if (!boardId) {
    console.error("用法：node list_lists.js <boardId>");
    进程.退出(1);
}

异步函数 listLists() {
    常量 url = `https://api.trello.com/1/boards/${boardId}/lists?key=${API_KEY}&token=${TOKEN}&fields=name`;
    尝试{
        const 响应 = 等待 fetch(url);
        if (!response.ok) 抛出新错误(`HTTP error! status: ${response.status}`);
        const 列表=等待response.json();
        控制台.log(`--- Lists in Board ${boardId} ---`);
        列表.forEach(l => console.log(`Name: "${l.name}"\nID: ${l.id}\n`));
    } 捕获（错误）{
        console.error("获取列表失败：", error.message);
    }
}

列表列表();
````

---

## English Original

### Title

trello-integration-skill

### Description

This skill allows you to interact with Trello account to list boards, view lists, and create cards automatically.

### Prompt

````md
---
name: trello-integration-skill
description: This skill allows you to interact with Trello account to list boards, view lists, and create cards automatically.
---

# Trello Integration Skill

The Trello Integration Skill provides a seamless connection between the AI agent and the user's Trello account. It empowers the agent to autonomously fetch existing boards and lists, and create new task cards on specific boards based on user prompts.

## Features
- **Fetch Boards**: Retrieve a list of all Trello boards the user has access to, including their Name, ID, and URL.
- **Fetch Lists**: Retrieve all lists (columns like "To Do", "In Progress", "Done") belonging to a specific board.
- **Create Cards**: Automatically create new cards with titles and descriptions in designated lists.

---

##  Setup & Prerequisites

To use this skill locally, you need to provide your Trello Developer API credentials.

1. Generate your credentials at the [Trello Developer Portal (Power-Ups Admin)](https://trello.com/app-key).
2. Create an API Key.
3. Generate a Secret Token (Read/Write access).
4. Add these credentials to the project's root `.env` file:

```env
# Trello Integration
TRELLO_API_KEY=your_api_key_here
TRELLO_TOKEN=your_token_here
```

---

##  Usage & Architecture

The skill utilizes standalone Node.js scripts located in the `.agent/skills/trello_skill/scripts/` directory.

### 1. List All Boards
Fetches all boards for the authenticated user to determine the correct target `boardId`.

**Execution:**
```bash
node .agent/skills/trello_skill/scripts/list_boards.js
```

### 2. List Columns (Lists) in a Board
Fetches the lists inside a specific board to find the exact `listId` (e.g., retrieving the ID for the "To Do" column).

**Execution:**
```bash
node .agent/skills/trello_skill/scripts/list_lists.js <boardId>
```

### 3. Create a New Card
Pushes a new card to the specified list. 

**Execution:**
```bash
node .agent/skills/trello_skill/scripts/create_card.js <listId> "<Card Title>" "<Optional Description>"
```
*(Always wrap the card title and description in double quotes to prevent bash argument splitting).*

---

##  AI Agent Workflow

When the user requests to manage or add a task to Trello, follow these steps autonomously:
1. **Identify the Target**: If the target `listId` is unknown, first run `list_boards.js` to identify the correct `boardId`, then execute `list_lists.js <boardId>` to retrieve the corresponding `listId` (e.g., for "To Do").
2. **Execute Command**: Run the `create_card.js <listId> "Task Title" "Task Description"` script.
3. **Report Back**: Confirm the successful creation with the user and provide the direct URL to the newly created Trello card.
FILE:create_card.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("Error: TRELLO_API_KEY or TRELLO_TOKEN is missing from the .env file.");
    process.exit(1);
}

const listId = process.argv[2];
const cardName = process.argv[3];
const cardDesc = process.argv[4] || "";

if (!listId || !cardName) {
    console.error(`Usage: node create_card.js <listId> "${card_name}" ["${card_description}"]`);
    process.exit(1);
}

async function createCard() {
    const url = `https://api.trello.com/1/cards?idList=${listId}&key=${API_KEY}&token=${TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: cardName,
                desc: cardDesc,
                pos: 'top'
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errText}`);
        }
        const card = await response.json();
        console.log(`Successfully created card!`);
        console.log(`Name: ${card.name}`);
        console.log(`ID: ${card.id}`);
        console.log(`URL: ${card.url}`);
    } catch (error) {
        console.error("Failed to create card:", error.message);
    }
}

createCard();
FILE:list_board.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("Error: TRELLO_API_KEY or TRELLO_TOKEN is missing from the .env file.");
    process.exit(1);
}

async function listBoards() {
    const url = `https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${TOKEN}&fields=name,url`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const boards = await response.json();
        console.log("--- Your Trello Boards ---");
        boards.forEach(b => console.log(`Name: ${b.name}\nID: ${b.id}\nURL: ${b.url}\n`));
    } catch (error) {
        console.error("Failed to fetch boards:", error.message);
    }
}

listBoards();
FILE:list_lists.js
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

if (!API_KEY || !TOKEN) {
    console.error("Error: TRELLO_API_KEY or TRELLO_TOKEN is missing from the .env file.");
    process.exit(1);
}

const boardId = process.argv[2];
if (!boardId) {
    console.error("Usage: node list_lists.js <boardId>");
    process.exit(1);
}

async function listLists() {
    const url = `https://api.trello.com/1/boards/${boardId}/lists?key=${API_KEY}&token=${TOKEN}&fields=name`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const lists = await response.json();
        console.log(`--- Lists in Board ${boardId} ---`);
        lists.forEach(l => console.log(`Name: "${l.name}"\nID: ${l.id}\n`));
    } catch (error) {
        console.error("Failed to fetch lists:", error.message);
    }
}

listLists();
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [trello-integration-skill](https://prompts.chat/prompts/trello-integration-skill) |
| Category | Agent Skill (`skill`) |
| Type | `SKILL` |
| Tags | Agent, Automation, Project Management, API, Claude, skills, Skill |
| Contributors | mertogemini |
| Updated At | 2026-03-06T00:02:12.928Z |
