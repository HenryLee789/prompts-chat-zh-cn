---
id: "cml8drntw0001js0461p6nghc"
slug: "universal-job-fit-evaluation-prompt"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/universal-job-fit-evaluation-prompt"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0d31aa0981e80d6b10410886924533bb03bf19de45ec0978f348d715555ed30c"
upstream_updated_at: "2026-03-06T23:01:22.975Z"
---
# 通用工作适合度评估提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[universal-job-fit-evaluation-prompt](https://prompts.chat/prompts/universal-job-fit-evaluation-prompt)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

帮助候选人客观地评估职位发布与他们的技能、经验和作品集的匹配程度，同时为申请、作品集调整和缩小技能差距提供可行的指导。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Career、Prompt Engineering、Resume 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

```md
# 通用工作适合度评估提示 – 完全通用且可共享
# 作者：斯科特·M
# 版本：1.6
# 最后修改: 2026-03-06

## 变更日志
- **v1.6 (2026-03-06)：** 集成“言外之意”（Vibe Check）、ATS 关键字翻译和面试准备“陷阱”。
- **v1.5 (2026-03-04)：** 添加了针对被阻止 URL 的“用户操作建议”。恢复了可见的作者标题。
- **v1.4 (2026-02-17)：** 改进了评分权重和投资组合调整说明。
- **v1.3 (2026-02-04)：** 添加了锚定技能列表和置信度。

## 目标
帮助候选人客观地评估职位发布与他们的技能、经验和作品集的匹配程度，同时为申请、作品集调整和缩小技能差距提供可行的指导。

---

## 预评估清单（用户：请提供这些）
- [ ] 第 0 步：候选人优先考虑的事项（远程？薪水？技术堆栈？）
- [ ] 第 1 步：技能和经验（Markdown 链接或粘贴文本）
- [ ] 步骤 1a：关键技能锚列表（现在最重要的是什么？）
- [ ] 第 2 步：作品集链接/描述
- [ ] 职位发布：URL 或全文

---

## 第 0 步：候选人优先级
- 角色/领域：
- 位置偏好（远程/混合/城市/地区）：
- 薪酬期望或限制：
- 不可协商的事项（例如，随叫随到、旅行、清关、技术堆栈）：
- 必备品：

---

## 步骤 1 和 1a：技能、经验和重点领域
---

## 步骤 2：作品集/工作样本
---

## URL 访问和后备协议

**如果提供的 URL 已损坏、为空或被付费墙/登录阻止：**
1. **内部搜索：** 尝试通过 LinkedIn、Indeed 或公司的职业页面查找职位详细信息。
2. **警告：** 如果数据仍然丢失，则显示：“⚠️ 无法访问来源：我无法在提供的 URL 读取数据。”
3. **用户操作建议：** 如果我无法访问该帖子，请尝试以下操作：
   - **直接粘贴：** 从浏览器中复制完整的职位描述文本并将其粘贴到此处。
   - **文件上传：** 将网页保存为 PDF 或截屏并上传文件。
   - **打印为PDF：** 使用浏览器中的“打印为PDF”来生成干净的JD文档。

---

## 任务：工作适合度评估

根据上面提供的**候选人信息**分析**职位发布**。

### 评分说明
对于每个部分，分配一个百分比匹配。使用语义对齐，而不仅仅是关键字匹配。

**默认权重：**
- 责任：30%
- 所需资格：30%
- 技能/技术/教育：25%
- 优先资格：15%

### 具体分析要求
1. **读懂字里行间：** 识别“隐藏”的要求或危险信号（例如，倦怠文化的迹象、模糊的范围或未说明的资历）。
2. **ATS 翻译：** 列出 JD 中 5-10 个特定关键词，这些关键词在候选人的 Markdown 中缺失，但代表了他们可能拥有的经验。
3. **面试准备“陷阱”：** 根据候选人的具体差距或“最弱”匹配领域，确定招聘人员可能会提出的 3 个最棘手的问题。

---

## 输出要求
- **整体适合百分比**（加权平均值）
- **置信度**（高/中/低基于信息完整性）
- **Vibe Check：** “言外之意”分析摘要。
- **前 3 个匹配：** 候选人完美匹配的特定领域。
- **三大差距：** 缺少技能或经验以及如何缓解这些差距的建议。
- **具体的投资组合指南：** 将特定的工作要求与具体的投资组合行动联系起来。
- **附加评论：** 标记位置、薪资或文化不匹配。

---

### 最终汇总表（使用此精确格式）

|部分|匹配% |关键对齐和差距|信心|
| :--- | :--- | :--- | :--- |
|职责| XX% | | |
|所需资格 | XX% | | |
|首选资格 | XX% | | |
|技能/技术/教育| XX% | | |
| **整体合身** | **XX%** | | **高/中/低** |

---

## 职位发布来源
```

---

## English Original

### Title

Universal Job Fit Evaluation Prompt

### Description

Help a candidate objectively evaluate how well a job posting matches their skills, experience, and portfolio, while producing actionable guidance for applications, portfolio alignment, and skill gap mitigation.

### Prompt

```md
# Universal Job Fit Evaluation Prompt – Fully Generic & Shareable
# Author: Scott M
# Version: 1.6
# Last Modified: 2026-03-06

## Changelog
- **v1.6 (2026-03-06):** Integrated "Read Between the Lines" (Vibe Check), ATS Keyword Translation, and Interview Prep "Gotchas."
- **v1.5 (2026-03-04):** Added "User Action Advice" for blocked URLs. Restored visible author headers.
- **v1.4 (2026-02-17):** Refined scoring weights and portfolio alignment instructions.
- **v1.3 (2026-02-04):** Added Anchor Skill list and confidence levels.

## Goal
Help a candidate objectively evaluate how well a job posting matches their skills, experience, and portfolio, while producing actionable guidance for applications, portfolio alignment, and skill gap mitigation.

---

## Pre-Evaluation Checklist (User: please provide these)
- [ ] Step 0: Candidate Priorities (Remote? Salary? Tech stack?)
- [ ] Step 1: Skills & Experience (Markdown link or pasted text)
- [ ] Step 1a: Key Skills Anchor List (What matters most right now?)
- [ ] Step 2: Portfolio links/descriptions
- [ ] Job Posting: URL or full text

---

## Step 0: Candidate Priorities
- Roles/Domains:
- Location preference (remote / hybrid / city / region):
- Compensation expectations or constraints:
- Non-negotiables (e.g., on-call, travel, clearance, tech stack):
- Nice-to-haves:

---

## Step 1 & 1a: Skills, Experience, & Focus Areas
---

## Step 2: Portfolio / Work Samples
---

## URL Access & Fallback Protocol

**If a provided URL is broken, empty, or blocked by a paywall/login:**
1. **Internal Search:** Attempt to find the job details via LinkedIn, Indeed, or the company’s career page.
2. **Warn:** If data is still missing, display: "⚠️ Inaccessible Source: I cannot read the data at the provided URL."
3. **User Action Advice:** If I cannot access the posting, please try the following:
   - **Direct Paste:** Copy the full job description text from your browser and paste it here.
   - **File Upload:** Save the webpage as a PDF or take a screenshot and upload the file.
   - **Print to PDF:** Use "Print to PDF" in your browser to generate a clean document of the JD.

---

## Task: Job Fit Evaluation

Analyze the **Job Posting** against the **Candidate Info** provided above.

### Scoring Instructions
For each section, assign a percentage match. Use semantic alignment, not just keyword matching.

**Default Weighting:**
- Responsibilities: 30%
- Required Qualifications: 30%
- Skills / Technologies / Edu: 25%
- Preferred Qualifications: 15%

### Specific Analysis Requirements
1. **Read Between the Lines:** Identify "hidden" requirements or red flags (e.g., signs of burnout culture, vague scope, or unstated seniority).
2. **ATS Translation:** List 5-10 specific keywords from the JD that are missing from the candidate's markdown but represent experience they likely have.
3. **Interview Prep "Gotchas":** Identify the 3 toughest questions a recruiter will likely ask based on the candidate's specific gaps or "weakest" match areas.

---

## Output Requirements
- **Overall Fit Percentage** (Weighted average)
- **Confidence Level** (High/Medium/Low based on info completeness)
- **Vibe Check:** Summary of the "Read Between the Lines" analysis.
- **Top 3 Alignments:** Specific areas where the candidate is a perfect match.
- **Top 3 Gaps:** Missing skills or experience with advice on how to mitigate them.
- **Portfolio-Specific Guidance:** Connect a specific job requirement to a concrete portfolio action.
- **Additional Commentary:** Flag location, salary, or culture mismatches.

---

### Final Summary Table (Use This Exact Format)

| Section | Match % | Key Alignments & Gaps | Confidence |
| :--- | :--- | :--- | :--- |
| Responsibilities | XX% | | |
| Required Qualifications | XX% | | |
| Preferred Qualifications | XX% | | |
| Skills / Technologies / Edu | XX% | | |
| **Overall Fit** | **XX%** | | **High/Med/Low** |

---

## Job Posting Source
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [universal-job-fit-evaluation-prompt](https://prompts.chat/prompts/universal-job-fit-evaluation-prompt) |
| Category | Uncategorized (`uncategorized`) |
| Type | `TEXT` |
| Tags | Career, Prompt Engineering, Resume |
| Contributors | thanos0000 |
| Updated At | 2026-03-06T23:01:22.975Z |
