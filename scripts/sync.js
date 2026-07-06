#!/usr/bin/env node
/*
 * Build and update the Chinese enhanced prompts.chat mirror.
 *
 * Default flow:
 *   node scripts/sync.js --provider=google
 *
 * Supported providers:
 *   - google: public Google Translate endpoint, no API key required
 *   - ollama: local Ollama model, configured by OLLAMA_MODEL
 *   - none: generate structure with untranslated Chinese fields marked pending
 */

const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = process.cwd();
const SOURCE_REPO = "https://github.com/f/prompts.chat";
const SOURCE_JSON_URL = process.env.PROMPTS_CHAT_JSON_URL || "https://prompts.chat/prompts.json?full_content=true";
const DATA_DIR = path.join(ROOT, "data");
const PROMPTS_DIR = path.join(ROOT, "prompts");
const CACHE_PATH = path.join(DATA_DIR, "prompts.zh-cache.json");
const SOURCE_SNAPSHOT_PATH = path.join(DATA_DIR, "upstream-prompts.json");
const SYNC_STATE_PATH = path.join(DATA_DIR, "sync-state.json");
const INDEX_JSON_PATH = path.join(PROMPTS_DIR, "index.json");
const INDEX_MD_PATH = path.join(PROMPTS_DIR, "INDEX.md");
const STATUS_PATH = path.join(ROOT, "SYNC_STATUS.md");

const CATEGORY_ZH = {
  "academic-writing": "学术写作",
  "agent-workflows": "智能体工作流",
  "automation-workflows": "自动化工作流",
  automations: "自动化",
  "blog-writing": "博客写作",
  business: "商业",
  "business-planning": "商业计划",
  "business-strategy": "商业战略",
  coding: "编程",
  copywriting: "文案写作",
  "course-creation": "课程创建",
  creative: "创意",
  "data-science": "数据科学",
  design: "设计",
  devops: "DevOps",
  education: "教育",
  "email-communication": "邮件与沟通",
  "exam-preparation": "考试准备",
  "finance-budgeting": "财务与预算",
  "habits-routines": "习惯与日常流程",
  "health-wellness": "健康与身心状态",
  hr: "人力资源与招聘",
  "image-generation": "图像生成",
  "journaling-reflection": "日记与反思",
  "kids-early-learning": "儿童早期学习",
  "language-learning": "语言学习",
  "leadership-management": "领导力与管理",
  "learning-skills": "学习技能",
  "market-analysis": "市场分析",
  marketing: "营销",
  "marketing-sales": "营销与销售",
  "meeting-collaboration": "会议与协作",
  "mindset-motivation": "心态与激励",
  "mobile-development": "移动开发",
  music: "音乐",
  "note-taking": "笔记",
  productivity: "生产力",
  "research-analysis": "研究与分析",
  sales: "销售",
  "self-improvement": "自我提升",
  skill: "智能体技能",
  sponsors: "GitHub Sponsors 资料",
  "startup-entrepreneurship": "创业",
  "stem-science": "STEM 与科学",
  "teaching-instruction": "教学指导",
  "technical-writing": "技术写作",
  "tutoring-homework-help": "辅导与作业帮助",
  uncategorized: "未分类",
  vibe: "Vibe Coding",
  "video-generation": "视频生成",
  "web-development": "Web 开发",
  workflows: "工作流",
  writing: "写作",
};

const CATEGORY_AUDIENCES = {
  "academic-writing": ["学生", "研究人员", "学术作者"],
  "agent-workflows": ["AI 智能体开发者", "自动化工程师", "产品经理"],
  "automation-workflows": ["自动化工程师", "运营人员", "效率工具用户"],
  automations: ["自动化工程师", "运营人员", "效率工具用户"],
  "blog-writing": ["内容创作者", "博客作者", "运营编辑"],
  business: ["创业者", "产品经理", "业务负责人"],
  "business-planning": ["创业者", "业务负责人", "咨询顾问"],
  "business-strategy": ["业务负责人", "战略分析师", "创业者"],
  coding: ["程序员", "技术负责人", "代码学习者"],
  copywriting: ["文案策划", "内容创作者", "营销人员"],
  "course-creation": ["教师", "课程设计者", "培训负责人"],
  creative: ["创意工作者", "内容创作者", "编剧或作者"],
  "data-science": ["数据分析师", "数据科学家", "机器学习工程师"],
  design: ["设计师", "产品经理", "前端开发者"],
  devops: ["DevOps 工程师", "后端工程师", "运维人员"],
  education: ["教师", "学生", "培训人员"],
  "email-communication": ["职场人士", "销售人员", "客服人员"],
  "exam-preparation": ["学生", "教师", "考试辅导者"],
  "finance-budgeting": ["财务人员", "创业者", "个人理财用户"],
  "habits-routines": ["自我提升用户", "效率工具用户", "教练"],
  "health-wellness": ["健康管理用户", "教练", "内容创作者"],
  hr: ["HR", "招聘人员", "求职者"],
  "image-generation": ["设计师", "AI 绘图用户", "内容创作者"],
  "journaling-reflection": ["日记用户", "自我反思者", "教练"],
  "kids-early-learning": ["家长", "儿童教育者", "教师"],
  "language-learning": ["语言学习者", "教师", "翻译人员"],
  "leadership-management": ["管理者", "团队负责人", "创业者"],
  "learning-skills": ["学习者", "教师", "培训人员"],
  "market-analysis": ["市场分析师", "创业者", "产品经理"],
  marketing: ["营销人员", "品牌负责人", "内容创作者"],
  "marketing-sales": ["营销人员", "销售人员", "业务负责人"],
  "meeting-collaboration": ["团队负责人", "项目经理", "职场人士"],
  "mindset-motivation": ["教练", "自我提升用户", "内容创作者"],
  "mobile-development": ["移动开发者", "产品经理", "技术负责人"],
  music: ["音乐创作者", "内容创作者", "音频制作人"],
  "note-taking": ["学生", "研究人员", "知识管理用户"],
  productivity: ["效率工具用户", "职场人士", "项目经理"],
  "research-analysis": ["研究人员", "分析师", "产品经理"],
  sales: ["销售人员", "业务负责人", "创业者"],
  "self-improvement": ["自我提升用户", "教练", "学习者"],
  skill: ["AI 智能体开发者", "工具构建者", "高级 AI 用户"],
  sponsors: ["开源维护者", "开发者", "项目运营者"],
  "startup-entrepreneurship": ["创业者", "产品经理", "投资分析师"],
  "stem-science": ["学生", "教师", "科研人员"],
  "teaching-instruction": ["教师", "培训人员", "课程设计者"],
  "technical-writing": ["技术作者", "程序员", "文档工程师"],
  "tutoring-homework-help": ["学生", "家长", "辅导老师"],
  uncategorized: ["AI 使用者", "内容创作者", "效率工具用户"],
  vibe: ["Vibe Coding 用户", "前端开发者", "产品原型设计者"],
  "video-generation": ["视频创作者", "导演或编导", "AI 视频用户"],
  "web-development": ["Web 开发者", "前端工程师", "产品经理"],
  workflows: ["项目经理", "自动化工程师", "团队负责人"],
  writing: ["写作者", "内容创作者", "编辑"],
};

const TYPE_SCENARIOS = {
  TEXT: "用于文本生成、分析、角色扮演或对话式任务。",
  IMAGE: "用于图像生成模型的画面描述、风格控制和视觉创意生成。",
  VIDEO: "用于视频生成模型的镜头、动作、场景和叙事控制。",
  AUDIO: "用于音频、音乐、配音或声音设计生成任务。",
  STRUCTURED: "用于要求模型按 JSON、YAML 或固定结构输出的任务。",
  SKILL: "用于构建智能体技能、工具调用说明或可复用工作流。",
};

function parseArgs(argv) {
  const args = {
    provider: process.env.TRANSLATION_PROVIDER || "google",
    limit: null,
    force: false,
    concurrency: null,
    skipFetch: false,
    retryFailed: false,
    slugs: null,
    generateOnly: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--force") args.force = true;
    else if (arg === "--skip-fetch") args.skipFetch = true;
    else if (arg === "--retry-failed") args.retryFailed = true;
    else if (arg === "--generate-only") args.generateOnly = true;
    else if (arg.startsWith("--slugs=")) args.slugs = arg.split("=")[1].split(",").map((slug) => slug.trim()).filter(Boolean);
    else if (arg === "--slugs") args.slugs = argv[++i].split(",").map((slug) => slug.trim()).filter(Boolean);
    else if (arg.startsWith("--provider=")) args.provider = arg.split("=")[1];
    else if (arg === "--provider") args.provider = argv[++i];
    else if (arg.startsWith("--limit=")) args.limit = Number(arg.split("=")[1]);
    else if (arg === "--limit") args.limit = Number(argv[++i]);
    else if (arg.startsWith("--concurrency=")) args.concurrency = Number(arg.split("=")[1]);
    else if (arg === "--concurrency") args.concurrency = Number(argv[++i]);
  }

  if (!["google", "ollama", "none"].includes(args.provider)) {
    throw new Error(`Unsupported provider: ${args.provider}`);
  }

  if (!args.concurrency) {
    args.concurrency = args.provider === "google" ? 6 : 1;
  }

  return args;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

async function writeJson(file, data) {
  await ensureDir(path.dirname(file));
  const content = `${JSON.stringify(data, null, 2)}\n`;
  let lastError;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      await fs.writeFile(file, content, "utf8");
      return;
    } catch (error) {
      lastError = error;
      await sleep(250 * attempt * attempt);
    }
  }
  throw lastError;
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function sourceHash(prompt) {
  return sha256(JSON.stringify({
    title: prompt.title || "",
    description: prompt.description || "",
    content: prompt.content || "",
    type: prompt.type || "",
    structuredFormat: prompt.structuredFormat || "",
    category: prompt.category?.slug || "uncategorized",
    updatedAt: prompt.updatedAt || "",
  }));
}

function promptKey(prompt) {
  return prompt.id || prompt.slug;
}

function legacyPromptKey(prompt) {
  return prompt.slug || prompt.id;
}

function slugify(value) {
  return String(value || "untitled")
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase() || "untitled";
}

function escapeMd(value) {
  return String(value || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function fence(value, lang = "md") {
  const text = String(value || "");
  let ticks = "```";
  while (text.includes(ticks)) ticks += "`";
  return `${ticks}${lang}\n${text}\n${ticks}`;
}

function uniqueList(values) {
  return [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
}

function categoryInfo(prompt) {
  const category = prompt.category || { name: "Uncategorized", slug: "uncategorized", icon: null };
  return {
    slug: category.slug || "uncategorized",
    name: category.name || "Uncategorized",
    icon: category.icon || null,
    zh: CATEGORY_ZH[category.slug] || category.name || "未分类",
  };
}

function buildScenarios(prompt, cat) {
  const scenarios = [
    `用于${cat.zh}相关任务的 AI prompt 输入。`,
    TYPE_SCENARIOS[prompt.type] || TYPE_SCENARIOS.TEXT,
  ];

  if (prompt.tags?.length) {
    scenarios.push(`适合围绕 ${prompt.tags.slice(0, 4).map((tag) => tag.name).join("、")} 等主题快速生成可复用结果。`);
  }

  if (prompt.requiresMediaUpload) {
    scenarios.push("适合需要用户上传媒体素材后再让模型处理的多模态任务。");
  }

  return uniqueList(scenarios);
}

function buildAudiences(prompt, cat) {
  const audiences = CATEGORY_AUDIENCES[cat.slug] || CATEGORY_AUDIENCES.uncategorized;
  if (prompt.for_devs || ["coding", "web-development", "mobile-development", "devops", "data-science"].includes(cat.slug)) {
    return uniqueList([...audiences, "开发者"]);
  }
  return uniqueList(audiences);
}

function buildDescription(prompt, translatedDescription, cat) {
  const base = String(translatedDescription || "").trim();
  if (base) return base;
  return `这个提示词用于${cat.zh}场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。`;
}

function protectText(text) {
  const source = String(text || "");
  const parts = [];
  let output = source;
  const patterns = [
    /```[\s\S]*?```/g,
    /`[^`\n]+`/g,
    /\$\{[^}]+\}/g,
    /https?:\/\/[^\s<>)"]+/g,
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
  ];

  for (const pattern of patterns) {
    output = output.replace(pattern, (match) => {
      const token = `XZX${parts.length}ZXZ`;
      parts.push({ token, value: match });
      return token;
    });
  }

  return {
    text: output,
    restore(value) {
      let restored = String(value || "");
      for (const part of parts) {
        restored = restored.split(part.token).join(part.value);
      }
      return restored;
    },
  };
}

function splitForTranslation(text, maxChars = 3600) {
  const source = String(text || "");
  if (source.length <= maxChars) return [source];

  const chunks = [];
  let current = "";
  const paragraphs = source.split(/(\n{2,})/);

  for (const part of paragraphs) {
    if ((current + part).length <= maxChars) {
      current += part;
      continue;
    }

    if (current.trim()) chunks.push(current);
    current = "";

    if (part.length <= maxChars) {
      current = part;
      continue;
    }

    const lines = part.split(/(\n)/);
    for (const line of lines) {
      if ((current + line).length <= maxChars) {
        current += line;
      } else {
        if (current.trim()) chunks.push(current);
        current = line;
        while (current.length > maxChars) {
          chunks.push(current.slice(0, maxChars));
          current = current.slice(maxChars);
        }
      }
    }
  }

  if (current.trim()) chunks.push(current);
  return chunks;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(fn, label, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const wait = 800 * attempt * attempt;
      console.warn(`[retry ${attempt}/${attempts}] ${label}: ${error.message}; waiting ${wait}ms`);
      await sleep(wait);
    }
  }
  throw lastError;
}

async function translateGoogleRaw(text) {
  if (!String(text || "").trim()) return "";
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=" + encodeURIComponent(text);
  const response = await fetch(url, {
    headers: {
      "user-agent": "prompts-chat-zh-mirror/1.0",
    },
  });
  if (!response.ok) {
    throw new Error(`Google translate failed: ${response.status} ${response.statusText}`);
  }
  const payload = await response.json();
  return payload?.[0]?.map((item) => item[0]).join("") || "";
}

async function translateGoogle(text) {
  const source = String(text || "");
  if (!source.trim()) return "";
  const protectedText = protectText(source);
  const chunks = splitForTranslation(protectedText.text);
  const translated = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const result = await withRetry(() => translateGoogleRaw(chunk), `google chunk ${i + 1}/${chunks.length}`);
    translated.push(result);
    if (chunks.length > 1) await sleep(120);
  }
  return protectedText.restore(translated.join("\n\n"));
}

async function translateOllama(text) {
  const source = String(text || "");
  if (!source.trim()) return "";
  const protectedText = protectText(source);
  const chunks = splitForTranslation(protectedText.text, 6000);
  const model = process.env.OLLAMA_MODEL || "huihui-qwen3-vl-codex-32k:latest";
  const host = (process.env.OLLAMA_HOST || "http://127.0.0.1:11434").replace(/\/$/, "");
  const translated = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const response = await withRetry(async () => {
      const res = await fetch(`${host}/api/chat`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model,
          stream: false,
          options: { temperature: 0 },
          messages: [
            {
              role: "system",
              content:
                "你是专业英文到简体中文翻译器。只输出自然、准确的简体中文译文。保留变量占位符、Markdown、代码、JSON 键名和专有名词，不解释，不重复原文。",
            },
            { role: "user", content: chunk },
          ],
        }),
      });
      if (!res.ok) throw new Error(`Ollama failed: ${res.status} ${res.statusText}`);
      return res.json();
    }, `ollama chunk ${i + 1}/${chunks.length}`, 3);

    translated.push(response.message?.content || "");
  }

  return protectedText.restore(translated.join("\n\n"));
}

async function translateText(text, provider) {
  if (provider === "none") return "";
  if (provider === "ollama") return translateOllama(text);
  return translateGoogle(text);
}

async function safeTranslateText(text, provider, label) {
  try {
    return { value: await translateText(text, provider), error: null };
  } catch (error) {
    console.warn(`[translation failed] ${label}: ${error.message}`);
    return { value: "", error: error.message };
  }
}

async function fetchPrompts(skipFetch) {
  if (skipFetch) {
    const snapshot = await readJson(SOURCE_SNAPSHOT_PATH, null);
    if (!snapshot) throw new Error(`No local snapshot found at ${SOURCE_SNAPSHOT_PATH}`);
    return snapshot.prompts ? snapshot : { count: snapshot.length, prompts: snapshot };
  }

  const response = await fetch(SOURCE_JSON_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch upstream prompts: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  if (!Array.isArray(data.prompts)) {
    throw new Error("Upstream response does not contain a prompts array");
  }
  return data;
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let index = 0;

  async function run() {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current], current);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

async function translatePrompt(prompt, cache, args) {
  const hash = sourceHash(prompt);
  const key = promptKey(prompt);
  const legacyKey = legacyPromptKey(prompt);
  let cached = cache.prompts[key];
  if (!cached && legacyKey !== key && cache.prompts[legacyKey]?.sourceHash === hash) {
    cached = { ...cache.prompts[legacyKey], id: prompt.id, slug: prompt.slug };
    cache.prompts[key] = cached;
  }
  const shouldRetryCachedFailure = args.retryFailed && cached?.translationStatus !== "machine_translated";
  if (!args.force && !shouldRetryCachedFailure && cached?.sourceHash === hash && cached?.content) {
    return cached;
  }

  const cat = categoryInfo(prompt);
  const errors = [];
  const titleResult = args.provider === "none"
    ? { value: "", error: "translation disabled" }
    : await safeTranslateText(prompt.title || "", args.provider, `${key} title`);
  const descriptionResult = args.provider === "none"
    ? { value: "", error: "translation disabled" }
    : await safeTranslateText(prompt.description || "", args.provider, `${key} description`);
  const contentResult = args.provider === "none"
    ? { value: "", error: "translation disabled" }
    : await safeTranslateText(prompt.content || "", args.provider, `${key} content`);

  for (const result of [titleResult, descriptionResult, contentResult]) {
    if (result.error) errors.push(result.error);
  }

  let translationStatus = "machine_translated";
  if (args.provider === "none") translationStatus = "pending_translation";
  else if (errors.length) translationStatus = contentResult.value ? "partial_translation" : "pending_translation";

  const title = titleResult.value;
  const description = descriptionResult.value;
  const content = contentResult.value;

  const translated = {
    id: prompt.id,
    slug: prompt.slug || key,
    sourceHash: hash,
    title: title || `【待翻译】${prompt.title || key}`,
    description: buildDescription(prompt, description, cat),
    content: content || `【待翻译】\n\n${prompt.content || ""}`,
    scenarios: buildScenarios(prompt, cat),
    audiences: buildAudiences(prompt, cat),
    categoryZh: cat.zh,
    translationStatus,
    provider: args.provider,
    errors,
    translatedAt: new Date().toISOString(),
  };

  cache.prompts[key] = translated;
  return translated;
}

function promptUrl(prompt) {
  return `https://prompts.chat/prompts/${prompt.slug || prompt.id}`;
}

function contributorText(prompt) {
  const contributors = [];
  if (prompt.author?.username) contributors.push(prompt.author.username);
  if (Array.isArray(prompt.contributors)) {
    for (const contributor of prompt.contributors) {
      if (contributor?.username) contributors.push(contributor.username);
    }
  }
  return uniqueList(contributors).join(", ") || "unknown";
}

function renderPromptMarkdown(prompt, zh) {
  const cat = categoryInfo(prompt);
  const tags = (prompt.tags || []).map((tag) => tag.name).join(", ");
  const frontmatter = [
    "---",
    `id: ${JSON.stringify(prompt.id || "")}`,
    `slug: ${JSON.stringify(prompt.slug || "")}`,
    `source: ${JSON.stringify(SOURCE_REPO)}`,
    `source_url: ${JSON.stringify(promptUrl(prompt))}`,
    `category: ${JSON.stringify(cat.slug)}`,
    `category_name: ${JSON.stringify(cat.name)}`,
    `category_zh: ${JSON.stringify(cat.zh)}`,
    `type: ${JSON.stringify(prompt.type || "TEXT")}`,
    `translation_status: ${JSON.stringify(zh.translationStatus)}`,
    `translation_provider: ${JSON.stringify(zh.provider)}`,
    `source_hash: ${JSON.stringify(zh.sourceHash)}`,
    `upstream_updated_at: ${JSON.stringify(prompt.updatedAt || "")}`,
    "---",
    "",
  ].join("\n");

  return `${frontmatter}# ${zh.title}

> 来源：[prompts.chat](${SOURCE_REPO})  
> 上游页面：[${prompt.slug || prompt.id}](${promptUrl(prompt)})  
> 分类：${cat.zh}（${cat.name} / \`${cat.slug}\`）  
> 类型：\`${prompt.type || "TEXT"}\`  
> 翻译状态：\`${zh.translationStatus}\`

## 中文说明

${zh.description}

## 使用场景

${zh.scenarios.map((item) => `- ${item}`).join("\n")}

## 适用人群

${zh.audiences.map((item) => `- ${item}`).join("\n")}

## 中文 Prompt 正文

${fence(zh.content)}

---

## English Original

### Title

${prompt.title || ""}

### Description

${prompt.description || ""}

### Prompt

${fence(prompt.content || "")}

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](${SOURCE_REPO}) |
| Upstream URL | [${prompt.slug || prompt.id}](${promptUrl(prompt)}) |
| Category | ${escapeMd(cat.name)} (\`${cat.slug}\`) |
| Type | \`${prompt.type || "TEXT"}\` |
| Tags | ${escapeMd(tags || "None")} |
| Contributors | ${escapeMd(contributorText(prompt))} |
| Updated At | ${escapeMd(prompt.updatedAt || "Unknown")} |
`;
}

function renderCategoryReadme(category, prompts) {
  const rows = prompts
    .map((item) => `| [${escapeMd(item.zhTitle)}](${item.fileName}) | ${escapeMd(item.enTitle)} | ${item.type} | ${item.status} |`)
    .join("\n");

  return `# ${category.zh} / ${category.name}

本目录收录 prompts.chat 上游分类 \`${category.slug}\` 下的中文增强 prompt。每个文件均包含中文标题、中文说明、使用场景、适用人群、中文 Prompt 正文以及完整英文原文。

| 中文标题 | English Title | Type | Status |
| --- | --- | --- | --- |
${rows}
`;
}

function renderIndexMd(categories, total) {
  const lines = categories
    .map((cat) => `| [${escapeMd(cat.zh)} / ${escapeMd(cat.name)}](${cat.slug}/README.md) | \`${cat.slug}\` | ${cat.count} |`)
    .join("\n");

  return `# prompts.chat 中文增强 Prompt 索引

共收录 ${total} 条 prompt，按上游分类生成目录。每条 prompt 均保留英文原文，并增加中文说明、使用场景和适用人群。

| 分类 | Slug | 数量 |
| --- | --- | ---: |
${lines}
`;
}

function renderStatus({ prompts, previousState, currentState, categories, args }) {
  const previous = previousState.prompts || {};
  const current = currentState.prompts || {};
  const added = [];
  const changed = [];

  for (const prompt of prompts) {
    const key = promptKey(prompt);
    if (!previous[key]) added.push(prompt);
    else if (previous[key].sourceHash !== current[key].sourceHash) changed.push(prompt);
  }

  const catLines = categories
    .map((cat) => `| ${escapeMd(cat.zh)} / ${escapeMd(cat.name)} | \`${cat.slug}\` | ${cat.count} |`)
    .join("\n");

  const addedLines = added.slice(0, 100).map((prompt) => `- ${prompt.title} (\`${prompt.slug}\`)`).join("\n") || "- 无";
  const changedLines = changed.slice(0, 100).map((prompt) => `- ${prompt.title} (\`${prompt.slug}\`)`).join("\n") || "- 无";

  return `# 同步状态

生成时间：${new Date().toISOString()}

来源仓库：${SOURCE_REPO}

来源接口：${SOURCE_JSON_URL}

翻译提供方：\`${args.provider}\`

总数：${prompts.length}

## 分类统计

| 分类 | Slug | 数量 |
| --- | --- | ---: |
${catLines}

## 本次新增

${addedLines}

## 本次变更

${changedLines}

> 新增/变更列表最多显示 100 条。完整状态见 \`data/sync-state.json\` 与 \`prompts/index.json\`。
`;
}

async function cleanGeneratedPromptDirs(categories) {
  await ensureDir(PROMPTS_DIR);
  const existing = await fs.readdir(PROMPTS_DIR, { withFileTypes: true }).catch(() => []);
  const categorySlugs = new Set(categories.map((cat) => cat.slug));

  for (const entry of existing) {
    if (!entry.isDirectory()) continue;
    if (categorySlugs.has(entry.name)) {
      await fs.rm(path.join(PROMPTS_DIR, entry.name), { recursive: true, force: true });
    }
  }
}

function buildFileNameMap(prompts) {
  const pathCounts = new Map();
  for (const prompt of prompts) {
    const cat = categoryInfo(prompt);
    const base = `${cat.slug}/${slugify(prompt.slug || prompt.id)}`;
    pathCounts.set(base, (pathCounts.get(base) || 0) + 1);
  }

  const fileNames = new Map();
  for (const prompt of prompts) {
    const cat = categoryInfo(prompt);
    const baseName = slugify(prompt.slug || prompt.id);
    const base = `${cat.slug}/${baseName}`;
    const suffix = String(prompt.id || "").slice(-8);
    const fileName = pathCounts.get(base) > 1 && suffix ? `${baseName}--${suffix}.md` : `${baseName}.md`;
    fileNames.set(promptKey(prompt), fileName);
  }
  return fileNames;
}

async function main() {
  const args = parseArgs(process.argv);
  await ensureDir(DATA_DIR);
  await ensureDir(PROMPTS_DIR);

  const upstream = await fetchPrompts(args.skipFetch);
  let allPrompts = upstream.prompts.filter((prompt) => prompt && prompt.slug && prompt.content);
  allPrompts = allPrompts.sort((a, b) => {
    const ca = categoryInfo(a).slug.localeCompare(categoryInfo(b).slug);
    if (ca !== 0) return ca;
    return String(a.slug).localeCompare(String(b.slug));
  });

  let prompts = allPrompts;
  if (args.generateOnly) {
    prompts = [];
  }

  if (args.slugs?.length) {
    const selected = new Set(args.slugs);
    prompts = prompts.filter((prompt) => selected.has(prompt.slug));
  }

  if (args.retryFailed) {
    const failed = new Set(
      Object.entries((await readJson(CACHE_PATH, { prompts: {} })).prompts || {})
        .filter(([, value]) => value.translationStatus !== "machine_translated")
        .map(([slug]) => slug)
    );
    prompts = prompts.filter((prompt) => failed.has(promptKey(prompt)) || failed.has(legacyPromptKey(prompt)));
  }

  if (args.limit) prompts = prompts.slice(0, args.limit);

  await writeJson(SOURCE_SNAPSHOT_PATH, {
    source: SOURCE_REPO,
    sourceUrl: SOURCE_JSON_URL,
    fetchedAt: new Date().toISOString(),
    count: upstream.count || allPrompts.length,
    prompts: allPrompts,
  });

  const previousState = await readJson(SYNC_STATE_PATH, { prompts: {} });
  const cache = await readJson(CACHE_PATH, {
    meta: {},
    prompts: {},
  });

  cache.meta = {
    provider: args.provider,
    source: SOURCE_REPO,
    sourceUrl: SOURCE_JSON_URL,
    updatedAt: new Date().toISOString(),
  };

  let translatedCount = 0;
  await mapLimit(prompts, args.concurrency, async (prompt, index) => {
    const key = prompt.slug || prompt.id;
    const before = cache.prompts[key]?.sourceHash;
    const zh = await translatePrompt(prompt, cache, args);
    if (before !== zh.sourceHash || args.force) {
      translatedCount++;
      if (translatedCount % 5 === 0) await writeJson(CACHE_PATH, cache);
    }
    console.log(`[${index + 1}/${prompts.length}] ${zh.translationStatus}: ${key}`);
  });
  await writeJson(CACHE_PATH, cache);

  const categoryMap = new Map();
  for (const prompt of allPrompts) {
    const cat = categoryInfo(prompt);
    if (!categoryMap.has(cat.slug)) {
      categoryMap.set(cat.slug, { ...cat, count: 0, prompts: [] });
    }
    categoryMap.get(cat.slug).count++;
  }

  const categories = [...categoryMap.values()].sort((a, b) => a.slug.localeCompare(b.slug));
  const fileNameMap = buildFileNameMap(allPrompts);
  await cleanGeneratedPromptDirs(categories);

  const indexItems = [];
  const currentState = {
    source: SOURCE_REPO,
    sourceUrl: SOURCE_JSON_URL,
    generatedAt: new Date().toISOString(),
    prompts: {},
  };

  for (const prompt of allPrompts) {
    const cat = categoryInfo(prompt);
    const key = promptKey(prompt);
    const zh = cache.prompts[key] || cache.prompts[legacyPromptKey(prompt)];
    if (!zh) {
      throw new Error(`Missing translation cache for ${prompt.slug}. Run without --retry-failed/--slugs first.`);
    }
    const categoryDir = path.join(PROMPTS_DIR, cat.slug);
    await ensureDir(categoryDir);
    const fileName = fileNameMap.get(key);
    const filePath = path.join(categoryDir, fileName);
    await fs.writeFile(filePath, renderPromptMarkdown(prompt, zh), "utf8");

    const item = {
      id: prompt.id,
      slug: prompt.slug,
      file: path.relative(ROOT, filePath).replace(/\\/g, "/"),
      fileName,
      category: cat.slug,
      categoryName: cat.name,
      categoryZh: cat.zh,
      zhTitle: zh.title,
      enTitle: prompt.title || "",
      type: prompt.type || "TEXT",
      status: zh.translationStatus,
      sourceHash: zh.sourceHash,
      upstreamUpdatedAt: prompt.updatedAt || null,
    };
    indexItems.push(item);
    categoryMap.get(cat.slug).prompts.push(item);
    currentState.prompts[key] = {
      id: prompt.id,
      slug: prompt.slug,
      sourceHash: zh.sourceHash,
      file: item.file,
      upstreamUpdatedAt: prompt.updatedAt || null,
      translationStatus: zh.translationStatus,
    };
  }

  for (const category of categories) {
    category.prompts.sort((a, b) => a.slug.localeCompare(b.slug));
    await fs.writeFile(
      path.join(PROMPTS_DIR, category.slug, "README.md"),
      renderCategoryReadme(category, category.prompts),
      "utf8"
    );
  }

  await writeJson(INDEX_JSON_PATH, {
    source: SOURCE_REPO,
    sourceUrl: SOURCE_JSON_URL,
    generatedAt: new Date().toISOString(),
    count: indexItems.length,
    categories: categories.map(({ prompts: _prompts, ...cat }) => cat),
    prompts: indexItems,
  });
  await fs.writeFile(INDEX_MD_PATH, renderIndexMd(categories, indexItems.length), "utf8");
  const validCacheKeys = new Set(allPrompts.map((prompt) => promptKey(prompt)));
  cache.prompts = Object.fromEntries(Object.entries(cache.prompts).filter(([key]) => validCacheKeys.has(key)));
  await writeJson(CACHE_PATH, cache);
  await writeJson(SYNC_STATE_PATH, currentState);
  await fs.writeFile(STATUS_PATH, renderStatus({ prompts: allPrompts, previousState, currentState, categories, args }), "utf8");

  console.log(`Done. Generated ${indexItems.length} prompt files in ${PROMPTS_DIR}`);
  console.log(`Translated or refreshed ${translatedCount} prompts. Cache: ${CACHE_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
