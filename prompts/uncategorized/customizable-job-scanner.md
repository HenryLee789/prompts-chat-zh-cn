# 可定制的作业扫描仪

## 中文说明

查找指定窗口内发布的 80% 以上匹配的[工作部门]角色（默认：过去 14 天）

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 围绕 Prompt Engineering 等主题生成结构化结果

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
# 可定制的作业扫描仪 - AI 优化
**作者：** 斯科特 M
**版本：** 2.0
**目标：** 使用跨主要招聘网站和公司招聘网站的实时网络搜索，显示在指定窗口（默认：过去 14 天）内发布的 80% 以上匹配的[工作部门]职位。
**受众：** 求职板（LinkedIn、Indeed 等）、公司职业页面
**支持的AI：** Claude、ChatGPT、Perplexity、Grok等。

## 变更日志
- **版本 1.0（初始版本）：**
  将原始的网络安全特定提示转换为通用模板。添加了行业、技能、公司等占位符。删除了 Dropbox 文件获取。
- **版本 1.1：**
  添加了“如何有效更新和自定义”部分以及维护提示。引入了用于跟踪更改的更改日志部分。在标题中添加了版本字段。
- **版本 1.2：**
  将变更日志和如何更新部分移至顶部，以便于查看/维护。较小的标头清理。
- **版本 1.3：**
  添加了“工作类型”小节来过滤全职/兼职/实习。扩展了“位置”，包括现场/混合/远程选项、家庭位置、半径和搬迁首选项。更新了提示以涵盖这些新的自定义。
- **版本 1.4：**
  添加了“发布窗口”参数以实现灵活的搜索新近度（例如，最近 7/14/30 天）。更新了目标标题和参考它的提示。
- **版本 1.5：**
  在输出表中添加了“发布日期”列，以获得更好的近期可见性。相应更新了输出格式和提示。
- **版本 1.6：**
  添加了可选的“最低工资阈值”过滤器，以排除列出工资的低薪职位。更新了薪资处理的输出格式注释和提示。
- **版本 1.7：**
  将提示标题重命名为“可自定义作业扫描仪”，以获得更广泛/通用的吸引力。没有其他功能变化。
- **版本 1.8：**
  在顶部添加了可选的“恢复自动解压模式”，以进行惰性/快速设置。AI从提供的简历文本中提取技能/经验。更新了使用提示。
- **版本 1.9（之前的稳定版本）：**
  - 在末尾添加了可选的“如果不匹配，建议调整”说明。
  - 添加了“扇区中的通用标签”后备列表以进行精简提取。
  - 使输出表可以选择按发布日期降序排序。
  - 在恢复自动提取模式下：AI必须在显示结果之前报告提取的关键事实和任何添加的标签。
- **版本 2.0（当前修订版本）：**
  - 添加了明确的实时搜索指令（“充当实时职位聚合器...使用当前的网络浏览/搜索功能”）以防止出现幻觉或过时的职位列表。
  - 增强的评分系统：为逐字/接近精确的 ATS 关键字匹配、可量化的对齐和最近发布的内容（<7 天）添加奖励。
  - 扩展了“其他来源”，包括 Google Jobs、FlexJobs（远程）、BuiltIn、AngelList、We Work Remotely、Remote.co。
  - 改进的输出表：添加了位置类型、ATS 关键字重叠和简短的“为什么强匹配？”列理由（85% 以上的匹配）。
  - 热门匹配 (90%+) 部分现在使用粗体/突出显示的行以实现更好的视觉区分。
  - 扩展了不匹配的建议，并提供了更多可操作的升级（例如，包括相邻的头衔、暂时允许合同角色、删除薪资过滤器）。
  - 进行了少量的措辞清理，以提高各个部分的清晰度、流畅度和一致性。
  - 增强了顶部指令块以强制执行实时搜索和正确的排序（先提取→然后搜索）。

## 顶部指令（运行提示时将其放在最开头）
“充当我专门的实时求职侦察员，具有当前的网络浏览和搜索访问权限。第一：【如果使用简历自动提取模式：从粘贴的简历文本中提取并总结我的技能、经验、成就和技术堆栈。在显示任何作业结果之前报告提取摘要，包括置信度（专家/强/推断）。]
然后：仅执行实时、当前的搜索（没有内部/培训数据或过时的知识）。提取符合我的参数的最新帖子如下。严格使用评分系统。优先考虑 ATS 关键字对齐、新近度和我的自定义标签/技能。”

## 恢复自动解压模式（可选 - 用于惰性/快速设置）
如果跳过手册技能参考：
- 将你的完整简历文本粘贴到此处：
  [在此处粘贴简历文本]
- 保留上面的顶部指令并启用提取部分。
AI 将输出类似以下内容：
》简历提取摘要：
- 经验：12 年以上网络安全/DevOps/[部门]经验
- 主要成就：引导 X 迁移（Y 端点），将 Z 减少 A%
- 顶级技能（有信心）：CrowdStrike（专家）、Terraform（强）、Python（专家）...
- 添加建议标签：SIEM、KQL、Kubernetes、CI/CD
使用这些继续搜索。”

## 如何有效地更新和定制
- 时间紧迫时使用恢复自动解压；在信任结果之前验证摘要。
- 每 3-6 个月或在重大项目之后刷新技能参考/标签。
- 在标签中使用职位发布/简历中的准确短语，以便 ATS 对齐。
- 跨AI测试；如果结果太少→降低阈值，扩展窗口，添加相邻的标题/标签。
- 对于新行业：首先通过 LinkedIn/Indeed/Google Jobs 研究热门关键词。

## 技能参考
（手动替换或让AI从简历中自动填充）
**专业概述**
- [多年经验、关键角色/公司]
- [重大项目/成果数字]

**顶级技能**
- [技能]（专家/强）：[工具/技术]
- ...

**技术栈**
- [类别]：[工具/示例]
- ...

## 扇区中的常用标签（后备）
如果提取很薄，请在此处添加相关内容（除非核心，否则为 1 分）。

示例：
- 网络安全：Splunk、SIEM、KQL、Sentinel、CrowdStrike、零信任、威胁搜寻、漏洞管理、ISO 27001、PCI DSS、AWS 安全、Azure Sentinel
- DevOps/云：Kubernetes、Docker、Terraform、CI/CD、Jenkins、Git、AWS、Azure、Ansible、Prometheus
- 软件工程：Python、Java、JavaScript、React、Node.js、SQL、REST API、敏捷、微服务
【切换时添加所在板块常用标签】

## 职位搜索参数
搜索[工作部门，例如网络安全工程师、高级 DevOps 工程师]职位发布在最后一个[发布窗口]。

### 发帖窗口
[过去 14 天]（默认）/过去 7 天/过去 30 天/自 YYYY-MM-DD 起

### 最低工资门槛
[例如$130,000 或 $120K — 仅过滤明确列出薪资的职位；设置 N/A 禁用]

### 优先公司（如果结果很少，请直接查看职业页面）
- [公司 1]（[职业页面 URL]）
- [公司 2]（[职业页面 URL]）
- ...

### 其他来源
LinkedIn、Indeed、Google Jobs、Glassdoor、ZipRecruiter、Dice、FlexJobs（远程）、BuiltIn、AngelList、我们远程工作、Remote.co、公司招聘网站

### 工作类型
必须包括：全职、永久
排除：兼职、实习、合同、临时工、咨询、C2H、承包商

### 地点
必须匹配以下之一：
- 100%远程
- 混合（部分远程）
- 仅在康涅狄格州东哈特福德 [50 英里] 范围内（包括哈特福德、曼彻斯特、格拉斯顿伯里等）的情况下在现场
是否愿意搬迁：[是/否；如果是 → 美国任何地方/仅限东北部/等]

### 要包含的角色类型
[例如安全工程师、高级安全工程师、网络安全分析师、信息安全工程师、云安全工程师]

### 排除标题为
经理、董事、负责人、校长、领导（除非明确要求）

## 评分系统
将职位描述与技能参考 + 常用标签中的我的标签进行匹配：
- 核心/高价值标签：每个2分
- 标准标签：每个 1 分
奖金：
逐字/近乎精确的关键字匹配 +1–2 分（ATS 信号强）
+1 分用于可量化的一致性（例如“管理大型环境”与我的“120K 端点”）
最近发布的内容 +1 分（<7 天）

匹配率=（总匹配点数/最大可能点数）×100
仅显示 ≥80% 的职位

## 输出格式
表：
|职位名称 |匹配% |公司 |发布日期 |位置类型 |薪资| ATS 重叠 |网址 |为什么强匹配？ |

- **发布日期：** 如果有则准确（YYYY-MM-DD 或“2026 年 1 月 10 日发布”）；否则“大约 X 天前”或 N/A
- **薪资：** 仅在明确列出时；否则不适用（无估计）
- **位置类型：** 远程/混合/现场
- **ATS 重叠：** 例如“9/14 个热门标签匹配”或“关键词重叠度高”
- **为什么是强匹配？：** 2–3 个要点亮点（仅适用于 85% 以上的匹配）

按发布日期降序（最近的在前）对表进行排序，然后按匹配百分比降序排序。删除重复项（相同标题+公司）。将 90% 以上的匹配项放在顶部的单独部分中，称为 **热门匹配项 (90%+)**，并以粗体行或清晰突出显示。如果没有强匹配：
“在当前窗口中没有找到强匹配项。”
然后提出调整建议：
- 将发布窗口延长至 30 天？
- 将门槛降低至 75%？
- 添加常见扇区标签（例如 Splunk、Kubernetes、Python）？
- 扩大位置/包括更多混合选项？
- 包括相邻的职位头衔（例如云工程师、系统工程师）？
- 暂时允许合同角色？
- 删除/降低最低工资门槛？
- 手动检查优先公司职业页面是否有未索引的帖子？
```

---

## English Original

### Title

Customizable Job Scanner

### Description

Find 80%+ matching [job sector] roles posted within the specified window (default: last 14 days)

### Prompt

```md
# Customizable Job Scanner - AI Optimized
**Author:** Scott M  
**Version:** 2.0  
**Goal:** Surface 80%+ matching [job sector] roles posted within the specified window (default: last 14 days), using real-time web searches across major job boards and company career sites.  
**Audience:** Job boards (LinkedIn, Indeed, etc.), company career pages  
**Supported AI:** Claude, ChatGPT, Perplexity, Grok, etc.

## Changelog
- **Version 1.0 (Initial Release):**  
  Converted original cybersecurity-specific prompt to a generic template. Added placeholders for sector, skills, companies, etc. Removed Dropbox file fetch.
- **Version 1.1:**  
  Added "How to Update and Customize Effectively" section with tips for maintenance. Introduced Changelog section for tracking changes. Added Version field in header.
- **Version 1.2:**  
  Moved Changelog and How to Update sections to top for easier visibility/maintenance. Minor header cleanup.
- **Version 1.3:**  
  Added "Job Types" subsection to filter full-time/part-time/internship. Expanded "Location" to include onsite/hybrid/remote options, home location, radius, and relocation preferences. Updated tips to cover these new customizations.
- **Version 1.4:**  
  Added "Posting Window" parameter for flexible search recency (e.g., last 7/14/30 days). Updated goal header and tips to reference it.
- **Version 1.5:**  
  Added "Posted Date" column to the output table for better recency visibility. Updated Output format and tips accordingly.
- **Version 1.6:**  
  Added optional "Minimum Salary Threshold" filter to exclude lower-paid roles where salary is listed. Updated Output format notes and tips for salary handling.
- **Version 1.7:**  
  Renamed prompt title to "Customizable Job Scanner" for broader/generic appeal. No other functional changes.
- **Version 1.8:**  
  Added optional "Resume Auto-Extract Mode" at top for lazy/fast setup. AI extracts skills/experience from provided resume text. Updated tips on usage.
- **Version 1.9 (Previous stable release):**  
  - Added optional "If no matches, suggest adjustments" instruction at end.  
  - Added "Common Tags in Sector" fallback list for thin extraction.  
  - Made output table optionally sortable by Posted Date descending.  
  - In Resume Auto-Extract Mode: AI must report extracted key facts and any added tags before showing results.
- **Version 2.0 (Current revised version):**  
  - Added explicit real-time search instruction ("Act as a real-time job aggregator... use current web browsing/search capabilities") to prevent hallucinated or outdated job listings.  
  - Enhanced scoring system: added bonuses for verbatim/near-exact ATS keyword matches, quantifiable alignment, and very recent postings (<7 days).  
  - Expanded "Additional sources" to include Google Jobs, FlexJobs (remote), BuiltIn, AngelList, We Work Remotely, Remote.co.  
  - Improved output table: added columns for Location Type, ATS Keyword Overlap, and brief "Why Strong Match?" rationale (for 85%+ matches).  
  - Top Matches (90%+) section now uses bolded/highlighted rows for better visual distinction.  
  - Expanded no-matches suggestions with more actionable escalations (e.g., include adjacent titles, temporarily allow contract roles, remove salary filter).  
  - Minor wording cleanups for clarity, flow, and consistency across sections.  
  - Strengthened Top Instruction block to enforce live searches and proper sequencing (extract first → then search).

## Top Instruction (Place this at the very beginning when you run the prompt)
"Act as my dedicated real-time job scout with current web browsing and search access.  
First: [If using Resume Auto-Extract Mode: extract and summarize my skills, experience, achievements, and technical stack from the pasted resume text. Report the extraction summary including confidence levels (Expert/Strong/Inferred) before showing any job results.]  
Then: Perform live, current searches only (no internal/training data or outdated knowledge). Pull the freshest postings matching my parameters below. Use the scoring system strictly. Prioritize ATS keyword alignment, recency, and my custom tags/skills."

## Resume Auto-Extract Mode (Optional - For Lazy/Fast Setup)
If skipping manual Skills Reference:  
- Paste your full resume text here:  
  [PASTE RESUME TEXT HERE]  
- Keep the Top Instruction above with the extraction part enabled.  
The AI will output something like:  
"Resume Extraction Summary:  
- Experience: 12+ years in cybersecurity / DevOps / [sector]  
- Key achievements: Led X migration (Y endpoints), reduced Z by A%  
- Top skills (with confidence): CrowdStrike (Expert), Terraform (Strong), Python (Expert), ...  
- Suggested tags added: SIEM, KQL, Kubernetes, CI/CD  
Proceeding with search using these."

## How to Update and Customize Effectively
- Use Resume Auto-Extract when short on time; verify the summary before trusting results.  
- Refresh Skills Reference / tags every 3–6 months or after major projects.  
- Use exact phrases from job postings / your resume in tags for ATS alignment.  
- Test across AIs; if too few results → lower threshold, extend window, add adjacent titles/tags.  
- For new sectors: research top keywords via LinkedIn/Indeed/Google Jobs first.

## Skills Reference
(Replace manually or let AI auto-populate from resume)  
**Professional Overview**  
- [Years of experience, key roles/companies]  
- [Major projects/achievements with numbers]  

**Top Skills**  
- [Skill] (Expert/Strong): [tools/technologies]  
- ...  

**Technical Stack**  
- [Category]: [tools/examples]  
- ...

## Common Tags in Sector (Fallback)
If extraction is thin, add relevant ones here (1 point unless core). Examples:  
- Cybersecurity: Splunk, SIEM, KQL, Sentinel, CrowdStrike, Zero Trust, Threat Hunting, Vulnerability Management, ISO 27001, PCI DSS, AWS Security, Azure Sentinel  
- DevOps/Cloud: Kubernetes, Docker, Terraform, CI/CD, Jenkins, Git, AWS, Azure, Ansible, Prometheus  
- Software Engineering: Python, Java, JavaScript, React, Node.js, SQL, REST API, Agile, Microservices  
[Add your sector’s common tags when switching]

## Job Search Parameters
Search for [job sector e.g. Cybersecurity Engineer, Senior DevOps Engineer] jobs posted in the last [Posting Window].

### Posting Window
[last 14 days] (default) / last 7 days / last 30 days / since YYYY-MM-DD

### Minimum Salary Threshold
[e.g. $130,000 or $120K — only filters jobs where salary is explicitly listed; set N/A to disable]

### Priority Companies (check career pages directly if few results)
- [Company 1] ([career page URL])  
- [Company 2] ([career page URL])  
- ...

### Additional Sources
LinkedIn, Indeed, Google Jobs, Glassdoor, ZipRecruiter, Dice, FlexJobs (remote), BuiltIn, AngelList, We Work Remotely, Remote.co, company career sites

### Job Types
Must include: full-time, permanent  
Exclude: part-time, internship, contract, temp, consulting, C2H, contractor

### Location
Must match one of:  
- 100% remote  
- Hybrid (partial remote)  
- Onsite only if within [50 miles] of East Hartford, CT (includes Hartford, Manchester, Glastonbury, etc.)  
Open to relocation: [Yes/No; if Yes → anywhere in US / Northeast only / etc.]

### Role Types to Include
[e.g. Security Engineer, Senior Security Engineer, Cybersecurity Analyst, InfoSec Engineer, Cloud Security Engineer]

### Exclude Titles With
manager, director, head of, principal, lead (unless explicitly wanted)

## Scoring System
Match job descriptions against my tags from Skills Reference + Common Tags:  
- Core/high-value tags: 2 points each  
- Standard tags: 1 point each  
Bonuses:  
+1–2 pts for verbatim / near-exact keyword matches (strong ATS signal)  
+1 pt for quantifiable alignment (e.g. “manage large environments” vs my “120K endpoints”)  
+1 pt for very recent posting (<7 days)  

Match % = (total matched points / max possible points) × 100  
Show only jobs ≥80%

## Output Format
Table:  
| Job Title | Match % | Company | Posted Date | Location Type | Salary | ATS Overlap | URL | Why Strong Match? |

- **Posted Date:** Exact if available (YYYY-MM-DD or "Posted Jan 10, 2026"); otherwise "Approx. X days ago" or N/A  
- **Salary:** Only if explicitly listed; N/A otherwise (no estimates)  
- **Location Type:** Remote / Hybrid / Onsite  
- **ATS Overlap:** e.g. "9/14 top tags matched" or "Strong keyword overlap"  
- **Why Strong Match?:** 2–3 bullet highlights (only for 85%+ matches)  

Sort table by Posted Date descending (most recent first), then Match % descending.  
Remove duplicates (same title + company).  

Put 90%+ matches in a separate section at top called **Top Matches (90%+)** with bolded rows or clear highlighting.

If no strong matches:  
"No strong matches found in the current window."  
Then suggest adjustments:  
- Extend Posting Window to 30 days?  
- Lower threshold to 75%?  
- Add common sector tags (e.g. Splunk, Kubernetes, Python)?  
- Broaden location / include more hybrid options?  
- Include adjacent role titles (e.g. Cloud Engineer, Systems Engineer)?  
- Temporarily allow contract roles?  
- Remove/lower Minimum Salary Threshold?  
- Manually check priority company career pages for unindexed postings?
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
