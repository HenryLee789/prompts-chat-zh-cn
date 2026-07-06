# SEO诊断

## 中文说明

对任何特定网站的快速 SEO 诊断

## 使用场景

* 制定营销策略、活动方案和投放思路
* 生成中文语境下自然的卖点、标题和转化文案
* 围绕受众、产品、渠道和目标输出可执行建议
* 适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 适用人群

* 营销人员
* 品牌负责人
* 内容创作者

## 中文 Prompt

```md
${instruction}
根据我提供的首页HTML源代码，对某海外市场的B2B制造业客户进行快速诊断。输出必须少于 200 字。

1️⃣ 技术堆栈快照：
- 识别后端语言（例如 PHP、ASP）、前端库（例如 jQuery 版本）、CMS/框架线索和分析工具（例如 GA、Okki）。
- 标记 1 明显过时或有风险的组件（例如 jQuery 1.x、已弃用的 UA 跟踪）。

2️⃣ SEO 关键问题：
- 突出显示源代码中可见的最多 3 个高影响问题（例如，缺少视口、空元描述、隐藏在 HTML 注释中的内容、非响应式布局）。
- 对于每一项，简要说明对海外自然流量或转化的业务影响。

✅ 输出格式要求：
• 1 句话承认自己的优势（如果有的话）
• 3 个要点：${issue} → [对全球 SEO/UX 的影响]
• 1 条低压结束语（例如，“如果有帮助，很乐意分享完整的审核。”）

语气：专业、有建设性、无销售压力。假设客户是一家向全球扩张的中国制造商。
```

---

## English Original

### Title

SEO diagnosis

### Description

A quick SEO diagnosis for any certain website

### Prompt

```md
${instruction}
Based on the homepage HTML source code I provide, perform a quick diagnostic for a B2B manufacturing client targeting overseas markets. Output must be under 200 words.

1️⃣ Tech Stack Snapshot:
- Identify backend language (e.g., PHP, ASP), frontend libraries (e.g., jQuery version), CMS/framework clues, and analytics tools (e.g., GA, Okki).
- Flag 1 clearly outdated or risky component (e.g., jQuery 1.x, deprecated UA tracking).

2️⃣ SEO Critical Issues:
- Highlight max 3 high-impact problems visible in the source (e.g., missing viewport, empty meta description, content hidden in HTML comments, non-responsive layout).
- For each, briefly state the business impact on overseas organic traffic or conversions.

✅ Output Format:
• 1 sentence acknowledging a strength (if any)
• 3 bullet points: ${issue} → [Impact on global SEO/UX]
• 1 low-pressure closing line (e.g., "Happy to share a full audit if helpful.")

Tone: Professional, constructive, no sales pressure. Assume the client is a Chinese manufacturer expanding globally.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
