---
id: "cmlsrqea70001lb04vz1xthza"
slug: "aaa"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/aaa"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "e44a39d19b24c88b4327806618a873f7c819a57f2eeb331424595abead6b28af"
upstream_updated_at: "2026-02-19T01:15:01.601Z"
---
# 啊啊

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[aaa](https://prompts.chat/prompts/aaa)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于未分类场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
角色：高级 Node.js 自动化工程师

目标：
使用 Node.js 构建真正的、可用于生产的帐户注册和报告自动化系统。
该系统必须执行真正的浏览器自动化和真正的网络操作。
没有模拟，没有模拟数据，没有占位符，没有伪代码。

模拟政策：
永远不要模拟任何东西。
永远不要生成假输出。
切勿使用虚拟服务。
所有逻辑都必须是可执行且有效的。

技术堆栈：
- Node.js (ES2022+)
- Playwright（首选）或 puppeteer-extra + 隐形插件
- 原生文件系统模块
- readline 或询问者
- axios（用于 API 和 Telegram）
- Express（用于仪表板 API）

系统要求：

1）输入系统
- 异步读取来自“gmailer.txt”的电子邮件
- 每行 = 一封电子邮件
- 提示用户：
  • 用户名前缀
  • 密码
  • 无头模式（真/假）
- 不得阻塞事件循环

2) 浏览器自动化
对于每封电子邮件：

- 使用可选的无头模式启动浏览器
- 使用内部列表中的随机用户代理
- 在操作之间应用随机延迟
- 每次尝试打开新的 browserContext
- 自动清除cookies
- 优雅地处理导航错误

3) 免费代理支持（无付费服务）
- 仅使用免费的公共 HTTP/HTTPS 代理
- 从 proxies.txt 加载代理
- 每个帐户轮换代理
- 如果代理失败 → 使用下一个代理重试
- 系统必须在没有代理的情况下仍然可以工作

4) 机器人避免/绕过
- 随机视口大小
- 随机打字速度
- 随机鼠标移动（如果支持）
- navigator.webdriver 屏蔽
- 仅可接受的隐身技术
- 没有非法绕过方法

5) 账户创建流程
系统必须是模块化的，以便稍后可以配置目标站点。

预期步骤：

- 导航至注册页面
- 填写电子邮件、用户名、密码
- 提交表格
- 检测成功或失败
- 提取任何确认数据（如果有）

6) 文件输出系统

关于成功：

附加到：
输出/basarili_hesaplar.txt
格式：
电子邮件:用户名:密码

仅附加用户名：
输出/kullanici_adlari.txt

仅附加密码：
输出/sifreler.txt

失败时：

附加到：
日志/error_log.txt

格式：
${timestamp} 电子邮件： X |错误：消息

7) 电报通知

可选但已实施：

如果设置了 TELEGRAM_TOKEN 和 CHAT_ID：

发送消息：

“新帐户已创建：
电子邮件：X
用户：Y
时间：Z”

8) 实时仪表板API

在端口 3000 上创建 Express 服务器。

端点：

获取/统计
返回 JSON：

{
  总计，
  成功，
  失败了，
  跑步，
  经过秒数
}

获取/日志
返回最后 100 行日志

仪表板必须实时更新。

9) 最终控制台报告

处理完所有电子邮件后：

显示控制台.表：

- 总尝试次数
- 成功
- 失败
- 成功率%
- 总持续时间（秒和分钟）

10) 错误处理

- 每个帐户尝试都包含在 try/catch 中
- 失败不得导致系统崩溃
- 继续处理剩余的电子邮件

11) 代码质量

- 完全异步/等待
- 模块化架构
- 无全局阻止
- 清晰的关注点分离

项目结构：

/项目根目录
  main.js
  gmailer.txt
  代理.txt
  /输出
  /日志
  /仪表板

输出要求：

生产：

1）完整的可运行的Node.js代码
2) 包.json
3）明确的运行指令
4）没有码头工人
5）没有付费工具
6）无模拟
7) 没有不完整的部分

重要：

如果有任何要求无法实现，
提供最接近真实功能的替代方案。

不要问问题。
不要仅生成解释。
生成完整的工作代码。
```

---

## English Original

### Title

Aaa

### Description



### Prompt

```md
ROLE: Senior Node.js Automation Engineer

GOAL:
Build a REAL, production-ready Account Registration & Reporting Automation System using Node.js.
This system MUST perform real browser automation and real network operations.
NO simulation, NO mock data, NO placeholders, NO pseudo-code.

SIMULATION POLICY:
NEVER simulate anything.
NEVER generate fake outputs.
NEVER use dummy services.
All logic must be executable and functional.

TECH STACK:
- Node.js (ES2022+)
- Playwright (preferred) OR puppeteer-extra + stealth plugin
- Native fs module
- readline OR inquirer
- axios (for API & Telegram)
- Express (for dashboard API)

SYSTEM REQUIREMENTS:

1) INPUT SYSTEM
- Asynchronously read emails from "gmailer.txt"
- Each line = one email
- Prompt user for:
  • username prefix
  • password
  • headless mode (true/false)
- Must not block event loop

2) BROWSER AUTOMATION
For EACH email:

- Launch browser with optional headless mode
- Use random User-Agent from internal list
- Apply random delays between actions
- Open NEW browserContext per attempt
- Clear cookies automatically
- Handle navigation errors gracefully

3) FREE PROXY SUPPORT (NO PAID SERVICES)
- Use ONLY free public HTTP/HTTPS proxies
- Load proxies from proxies.txt
- Rotate proxy per account
- If proxy fails → retry with next proxy
- System must still work without proxy

4) BOT AVOIDANCE / BYPASS
- Random viewport size
- Random typing speed
- Random mouse movements (if supported)
- navigator.webdriver masking
- Acceptable stealth techniques only
- NO illegal bypass methods

5) ACCOUNT CREATION FLOW
System must be modular so target site can be configured later.

Expected steps:

- Navigate to registration page
- Fill email, username, password
- Submit form
- Detect success or failure
- Extract any confirmation data if available

6) FILE OUTPUT SYSTEM

On SUCCESS:

Append to:
outputs/basarili_hesaplar.txt
FORMAT:
email:username:password

Append username only:
outputs/kullanici_adlari.txt

Append password only:
outputs/sifreler.txt

On FAILURE:

Append to:
logs/error_log.txt

FORMAT:
${timestamp} Email: X | Error: MESSAGE

7) TELEGRAM NOTIFICATION

Optional but implemented:

If TELEGRAM_TOKEN and CHAT_ID are set:

Send message:

"New Account Created:
Email: X
User: Y
Time: Z"

8) REAL-TIME DASHBOARD API

Create Express server on port 3000.

Endpoints:

GET /stats
Return JSON:

{
  total,
  success,
  failed,
  running,
  elapsedSeconds
}

GET /logs
Return last 100 log lines

Dashboard must update in real time.

9) FINAL CONSOLE REPORT

After all emails processed:

Display console.table:

- Total Attempts
- Successful
- Failed
- Success Rate %
- Total Duration (seconds & minutes)

10) ERROR HANDLING

- Every account attempt wrapped in try/catch
- Failure must NOT crash system
- Continue processing remaining emails

11) CODE QUALITY

- Fully async/await
- Modular architecture
- No global blocking
- Clean separation of concerns

PROJECT STRUCTURE:

/project-root
  main.js
  gmailer.txt
  proxies.txt
  /outputs
  /logs
  /dashboard

OUTPUT REQUIREMENTS:

Produce:

1) Complete runnable Node.js code
2) package.json
3) Clear instructions to run
4) No Docker
5) No paid tools
6) No simulation
7) No incomplete sections

IMPORTANT:

If any requirement cannot be implemented,
provide the closest REAL functional alternative.

Do NOT ask questions.
Do NOT generate explanations only.
Generate FULL WORKING CODE.
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [aaa](https://prompts.chat/prompts/aaa) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | None |
| Contributors | swift282831 |
| Updated At | 2026-02-19T01:15:01.601Z |
