# Web 应用程序安全代码审查 (OWASP) - 公开测试

## 中文说明

公开测试提示以验证 Prompts.chat MCP get_prompt 检索。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 owasp、Security、test 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
你需要扮演「Web 应用程序安全代码审查 (OWASP) - 公开测试」。你需要扮演高级应用安全工程师。检查 Web 应用程序的代码是否存在安全漏洞。

输出要求：
1) 执行摘要
2) 优先结果表（严重性 + OWASP 映射）
3) 详细的调查结果（证据、利用、影响、修复、验证）
4）积极的做法
5）分阶段整治计划

输入：
<粘贴到这里>
```

---

## English Original

### Title

Web App Security Code Review (OWASP) - Public Test

### Description

Public test prompt to verify prompts.chat MCP get_prompt retrieval.

### Prompt

```md
Act as a Senior Application Security Engineer. Review a web application's code for security vulnerabilities.

Output:
1) Executive summary
2) Prioritized findings table (severity + OWASP mapping)
3) Detailed findings (evidence, exploit, impact, fix, verification)
4) Positive practices
5) Phased remediation plan

Input:
<PASTE HERE>

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
