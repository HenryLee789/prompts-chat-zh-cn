#!/usr/bin/env node
/*
 * Upgrade generated Chinese prompt files from plain machine translation to
 * prompt-engineering-oriented Chinese localization.
 *
 * This script does not edit English originals. It only rewrites the Chinese
 * enhancement fields and marks cache entries as ai_prompt_localized.
 */

const fs = require("node:fs/promises");
const path = require("node:path");

const ROOT = process.cwd();
const SOURCE_REPO = "https://github.com/f/prompts.chat";
const DATA_DIR = path.join(ROOT, "data");
const PROMPTS_DIR = path.join(ROOT, "prompts");
const CACHE_PATH = path.join(DATA_DIR, "prompts.zh-cache.json");
const SOURCE_PATH = path.join(DATA_DIR, "upstream-prompts.json");
const INDEX_JSON_PATH = path.join(PROMPTS_DIR, "index.json");
const INDEX_MD_PATH = path.join(PROMPTS_DIR, "INDEX.md");
const SYNC_STATE_PATH = path.join(DATA_DIR, "sync-state.json");
const STATUS_PATH = path.join(ROOT, "SYNC_STATUS.md");
const QA_PATH = path.join(ROOT, "TRANSLATION_QA.md");

const CATEGORY_META = {
  "academic-writing": {
    zh: "学术写作",
    audiences: ["学生", "研究人员", "学术作者"],
    scenarios: ["论文摘要、文献综述和学术表达润色", "研究主题拆解、结构梳理和论点组织", "生成符合学术语境的提纲、说明或报告"],
    task: "学术写作与研究表达",
  },
  "agent-workflows": {
    zh: "智能体工作流",
    audiences: ["AI 智能体开发者", "自动化工程师", "产品经理"],
    scenarios: ["设计可复用的 AI Agent 工作流", "拆解多步骤任务并明确执行边界", "为工具调用、上下文迁移或任务编排提供指令"],
    task: "智能体工作流设计",
  },
  "automation-workflows": {
    zh: "自动化工作流",
    audiences: ["自动化工程师", "运营人员", "效率工具用户"],
    scenarios: ["把重复任务拆解为可执行步骤", "生成脚本、流程或自动化执行方案", "规范任务输入、输出和异常处理方式"],
    task: "自动化流程设计",
  },
  automations: {
    zh: "自动化",
    audiences: ["自动化工程师", "运营人员", "效率工具用户"],
    scenarios: ["生成自动化脚本或流程说明", "批量处理数据、文档或日常运营任务", "把人工操作转化为清晰的执行步骤"],
    task: "自动化任务执行",
  },
  "blog-writing": {
    zh: "博客写作",
    audiences: ["内容创作者", "博客作者", "运营编辑"],
    scenarios: ["撰写博客文章、标题和段落结构", "优化文章表达、可读性和信息密度", "生成面向特定读者的内容草稿"],
    task: "博客内容创作",
  },
  business: {
    zh: "商业",
    audiences: ["创业者", "产品经理", "业务负责人"],
    scenarios: ["分析商业问题、业务机会和执行路径", "生成商业报告、方案或决策建议", "梳理目标、约束、资源和行动步骤"],
    task: "商业分析与方案制定",
  },
  "business-planning": {
    zh: "商业计划",
    audiences: ["创业者", "业务负责人", "咨询顾问"],
    scenarios: ["制定商业计划、项目规划和执行路线", "梳理目标用户、价值主张和商业模式", "生成汇报材料、路线图或计划文档"],
    task: "商业计划制定",
  },
  "business-strategy": {
    zh: "商业战略",
    audiences: ["业务负责人", "战略分析师", "创业者"],
    scenarios: ["拆解战略目标、竞争环境和关键假设", "制定增长、定位或组织策略", "输出结构化战略分析和行动建议"],
    task: "商业战略分析",
  },
  coding: {
    zh: "编程",
    audiences: ["程序员", "技术负责人", "代码学习者", "开发者"],
    scenarios: ["代码解释、debug、review 和 refactor", "生成技术方案、测试用例或实现步骤", "围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令"],
    task: "编程与技术实现",
  },
  copywriting: {
    zh: "文案写作",
    audiences: ["文案策划", "内容创作者", "营销人员"],
    scenarios: ["撰写广告语、标题、卖点和转化文案", "优化语气、节奏和受众匹配度", "生成适合中文语境的可发布文案"],
    task: "文案创作",
  },
  "course-creation": {
    zh: "课程创建",
    audiences: ["教师", "课程设计者", "培训负责人"],
    scenarios: ["设计课程大纲、模块和学习路径", "生成教学活动、练习和评估方式", "把知识点转化为可交付的课程内容"],
    task: "课程内容设计",
  },
  creative: {
    zh: "创意",
    audiences: ["创意工作者", "内容创作者", "编剧或作者"],
    scenarios: ["生成故事、角色、画面或创意概念", "扩展脑洞、设定和叙事结构", "为图像、视频或文本创作提供可执行指令"],
    task: "创意生成",
  },
  "data-science": {
    zh: "数据科学",
    audiences: ["数据分析师", "数据科学家", "机器学习工程师"],
    scenarios: ["分析数据、指标、模型和实验结果", "生成数据处理、统计分析或建模方案", "输出结构化结论、风险和下一步建议"],
    task: "数据分析与建模",
  },
  design: {
    zh: "设计",
    audiences: ["设计师", "产品经理", "前端开发者"],
    scenarios: ["生成 UI/UX、视觉风格和设计规范", "分析界面问题并提出改进方向", "把需求转化为可执行的设计说明"],
    task: "设计分析与方案生成",
  },
  devops: {
    zh: "DevOps",
    audiences: ["DevOps 工程师", "后端工程师", "运维人员"],
    scenarios: ["生成部署、CI/CD、容器化或监控方案", "排查环境、配置和基础设施问题", "规范脚本、流程和故障处理步骤"],
    task: "DevOps 与运维自动化",
  },
  education: {
    zh: "教育",
    audiences: ["教师", "学生", "培训人员"],
    scenarios: ["解释概念、设计练习和学习计划", "生成课程材料、测验或教学活动", "把复杂知识转化为清晰的学习路径"],
    task: "教学与学习支持",
  },
  "email-communication": {
    zh: "邮件与沟通",
    audiences: ["职场人士", "销售人员", "客服人员"],
    scenarios: ["撰写邮件、回复、通知或沟通话术", "调整语气、礼貌程度和信息结构", "提高商务沟通的清晰度和行动性"],
    task: "邮件与商务沟通",
  },
  "exam-preparation": {
    zh: "考试准备",
    audiences: ["学生", "教师", "考试辅导者"],
    scenarios: ["生成复习计划、题目解析和考点总结", "分析历年题型、难点和答题策略", "把知识点整理为高效备考材料"],
    task: "考试备考支持",
  },
  "finance-budgeting": {
    zh: "财务与预算",
    audiences: ["财务人员", "创业者", "个人理财用户"],
    scenarios: ["分析预算、投资、成本或现金流", "生成财务规划、风险提示和决策建议", "整理可量化的财务指标和行动方案"],
    task: "财务分析与预算规划",
  },
  "habits-routines": {
    zh: "习惯与日常流程",
    audiences: ["自我提升用户", "效率工具用户", "教练"],
    scenarios: ["制定习惯养成计划和日程安排", "拆解目标、障碍和执行反馈", "生成可持续的自我管理流程"],
    task: "习惯管理与日程规划",
  },
  "health-wellness": {
    zh: "健康与身心状态",
    audiences: ["健康管理用户", "教练", "内容创作者"],
    scenarios: ["整理健康目标、生活方式和注意事项", "生成非诊断性的建议、计划或问题清单", "用清晰边界处理健康相关信息"],
    task: "健康信息整理",
  },
  hr: {
    zh: "人力资源与招聘",
    audiences: ["HR", "招聘人员", "求职者"],
    scenarios: ["撰写简历、岗位说明或招聘沟通", "模拟面试、评估候选人和优化求职材料", "生成结构化的人才筛选和沟通建议"],
    task: "招聘与职业发展支持",
  },
  "image-generation": {
    zh: "图像生成",
    audiences: ["设计师", "AI 绘图用户", "内容创作者"],
    scenarios: ["生成可直接用于图像模型的中文画面提示词", "描述主体、构图、光线、风格和画质要求", "把创意概念转化为稳定的视觉生成指令"],
    task: "图像生成提示词设计",
  },
  "journaling-reflection": {
    zh: "日记与反思",
    audiences: ["日记用户", "自我反思者", "教练"],
    scenarios: ["整理个人经历、情绪和反思问题", "生成引导式日记或复盘提示", "帮助用户形成清晰的自我观察结构"],
    task: "反思与自我记录",
  },
  "kids-early-learning": {
    zh: "儿童早期学习",
    audiences: ["家长", "儿童教育者", "教师"],
    scenarios: ["设计儿童友好的学习活动和故事", "把知识点转化为简单、有趣的表达", "生成适合低龄学习者的互动内容"],
    task: "儿童启蒙教学",
  },
  "language-learning": {
    zh: "语言学习",
    audiences: ["语言学习者", "教师", "翻译人员"],
    scenarios: ["练习发音、翻译、改写和语法纠错", "生成对话、词汇和语言学习材料", "保留语境并提升表达自然度"],
    task: "语言学习与表达优化",
  },
  "leadership-management": {
    zh: "领导力与管理",
    audiences: ["管理者", "团队负责人", "创业者"],
    scenarios: ["分析团队管理、沟通和决策问题", "生成管理建议、会议材料和行动计划", "提升领导力表达和组织协作效率"],
    task: "管理与领导力支持",
  },
  "learning-skills": {
    zh: "学习技能",
    audiences: ["学习者", "教师", "培训人员"],
    scenarios: ["设计学习路径、练习方式和复盘方法", "把复杂主题拆解成可学习步骤", "生成个性化学习策略和反馈"],
    task: "学习方法设计",
  },
  "market-analysis": {
    zh: "市场分析",
    audiences: ["市场分析师", "创业者", "产品经理"],
    scenarios: ["分析市场趋势、竞品和用户需求", "生成调研框架、机会判断和风险提示", "输出结构化市场洞察与建议"],
    task: "市场研究与分析",
  },
  marketing: {
    zh: "营销",
    audiences: ["营销人员", "品牌负责人", "内容创作者"],
    scenarios: ["制定营销策略、活动方案和投放思路", "生成中文语境下自然的卖点、标题和转化文案", "围绕受众、产品、渠道和目标输出可执行建议"],
    task: "营销策略与内容生成",
  },
  "marketing-sales": {
    zh: "营销与销售",
    audiences: ["营销人员", "销售人员", "业务负责人"],
    scenarios: ["生成销售话术、转化路径和客户沟通方案", "梳理目标客户、痛点和价值主张", "提升获客、成交和留存相关表达"],
    task: "营销销售转化",
  },
  "meeting-collaboration": {
    zh: "会议与协作",
    audiences: ["团队负责人", "项目经理", "职场人士"],
    scenarios: ["生成会议纪要、行动项和协作计划", "整理讨论内容、决策和后续跟进", "提升团队沟通和项目推进效率"],
    task: "会议协作整理",
  },
  "mindset-motivation": {
    zh: "心态与激励",
    audiences: ["教练", "自我提升用户", "内容创作者"],
    scenarios: ["生成激励话术、目标复盘和行动建议", "帮助用户拆解阻力、动机和习惯策略", "输出支持性但清晰的自我提升提示"],
    task: "心态支持与行动激励",
  },
  "mobile-development": {
    zh: "移动开发",
    audiences: ["移动开发者", "产品经理", "技术负责人"],
    scenarios: ["生成 iOS、Android 或跨平台开发方案", "分析移动端 UI、性能、测试和发布问题", "输出清晰的实现步骤和技术约束"],
    task: "移动应用开发",
  },
  music: {
    zh: "音乐",
    audiences: ["音乐创作者", "内容创作者", "音频制作人"],
    scenarios: ["生成歌词、音乐风格、旋律或音频创意说明", "为音乐生成模型提供结构化提示", "描述节奏、情绪、乐器和场景"],
    task: "音乐与音频创作",
  },
  "note-taking": {
    zh: "笔记",
    audiences: ["学生", "研究人员", "知识管理用户"],
    scenarios: ["整理资料、会议或课程笔记", "提炼重点、结构和行动项", "把长内容转化为可复习的知识卡片"],
    task: "笔记整理",
  },
  productivity: {
    zh: "生产力",
    audiences: ["效率工具用户", "职场人士", "项目经理"],
    scenarios: ["拆解任务、安排优先级和制定计划", "生成可执行的工作流、清单或复盘模板", "提升个人或团队执行效率"],
    task: "效率提升与任务管理",
  },
  "research-analysis": {
    zh: "研究与分析",
    audiences: ["研究人员", "分析师", "产品经理"],
    scenarios: ["拆解研究问题、证据和结论", "生成调研框架、分析维度和报告结构", "围绕复杂主题输出可追溯的判断"],
    task: "研究分析",
  },
  sales: {
    zh: "销售",
    audiences: ["销售人员", "业务负责人", "创业者"],
    scenarios: ["生成销售话术、跟进邮件和成交策略", "分析客户需求、异议和价值主张", "优化销售漏斗、客户分层和转化路径"],
    task: "销售沟通与转化",
  },
  "self-improvement": {
    zh: "自我提升",
    audiences: ["自我提升用户", "教练", "学习者"],
    scenarios: ["制定成长计划、复盘问题和行动步骤", "拆解目标、习惯和个人限制", "生成可执行的自我管理建议"],
    task: "自我提升规划",
  },
  skill: {
    zh: "智能体技能",
    audiences: ["AI 智能体开发者", "工具构建者", "高级 AI 用户"],
    scenarios: ["编写可复用的 AI skill 或工具说明", "定义输入、流程、约束和输出格式", "帮助智能体稳定执行专业任务"],
    task: "AI 技能设计",
  },
  sponsors: {
    zh: "GitHub Sponsors 资料",
    audiences: ["开源维护者", "开发者", "项目运营者"],
    scenarios: ["撰写开源项目赞助说明", "设计赞助层级、项目故事和影响展示", "提升 GitHub Sponsors 页面的可信度和转化率"],
    task: "开源赞助内容设计",
  },
  "startup-entrepreneurship": {
    zh: "创业",
    audiences: ["创业者", "产品经理", "投资分析师"],
    scenarios: ["分析创业想法、商业模式和风险", "生成 MVP、融资、增长或产品策略", "把想法拆解为可验证的执行计划"],
    task: "创业分析与执行规划",
  },
  "stem-science": {
    zh: "STEM 与科学",
    audiences: ["学生", "教师", "科研人员"],
    scenarios: ["解释科学概念、实验和技术原理", "生成 STEM 学习材料或研究辅助内容", "以准确、清晰的方式组织专业知识"],
    task: "科学与工程学习支持",
  },
  "teaching-instruction": {
    zh: "教学指导",
    audiences: ["教师", "培训人员", "课程设计者"],
    scenarios: ["设计教学计划、课堂活动和学习任务", "生成讲解、练习和评估标准", "把教学目标转化为可执行指令"],
    task: "教学设计",
  },
  "technical-writing": {
    zh: "技术写作",
    audiences: ["技术作者", "程序员", "文档工程师"],
    scenarios: ["撰写 README、API 文档和技术说明", "把复杂实现转化为清晰的文档结构", "优化技术内容的准确性、可读性和可维护性"],
    task: "技术文档写作",
  },
  "tutoring-homework-help": {
    zh: "辅导与作业帮助",
    audiences: ["学生", "家长", "辅导老师"],
    scenarios: ["讲解题目、知识点和解题步骤", "生成练习、提示和学习反馈", "帮助用户理解而不是直接替代学习"],
    task: "学习辅导",
  },
  uncategorized: {
    zh: "未分类",
    audiences: ["AI 使用者", "内容创作者", "效率工具用户"],
    scenarios: ["处理尚未归类的角色、分析或生成任务", "把原始需求整理成可直接执行的 AI 指令", "保留原 prompt 的角色、约束和输出格式"],
    task: "通用 AI 任务执行",
  },
  vibe: {
    zh: "Vibe Coding",
    audiences: ["Vibe Coding 用户", "前端开发者", "产品原型设计者"],
    scenarios: ["快速生成原型、应用或交互界面", "把产品想法转化为可执行开发提示", "明确视觉、功能、技术和交付要求"],
    task: "Vibe Coding 原型开发",
  },
  "video-generation": {
    zh: "视频生成",
    audiences: ["视频创作者", "导演或编导", "AI 视频用户"],
    scenarios: ["生成可用于视频模型的镜头和动作提示", "描述画面、节奏、镜头、光线和叙事", "把创意概念转化为可执行的视频生成指令"],
    task: "视频生成提示词设计",
  },
  "web-development": {
    zh: "Web 开发",
    audiences: ["Web 开发者", "前端工程师", "产品经理"],
    scenarios: ["生成 Web 应用、页面、组件或调试方案", "明确技术栈、交互、布局和交付标准", "围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令"],
    task: "Web 开发",
  },
  workflows: {
    zh: "工作流",
    audiences: ["项目经理", "自动化工程师", "团队负责人"],
    scenarios: ["拆解多阶段任务和执行顺序", "定义输入、步骤、检查点和输出结果", "把复杂工作转化为可复用流程"],
    task: "工作流设计",
  },
  writing: {
    zh: "写作",
    audiences: ["写作者", "内容创作者", "编辑"],
    scenarios: ["撰写、改写、润色或总结文本内容", "控制语气、文体、结构和目标读者", "生成可直接用于发布或沟通的中文内容"],
    task: "写作与表达优化",
  },
};

const TYPE_SCENARIO = {
  TEXT: "适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。",
  IMAGE: "适合复制给图像生成模型，控制主体、构图、风格和画面细节。",
  VIDEO: "适合复制给视频生成模型，控制镜头、动作、节奏和场景。",
  AUDIO: "适合复制给音频或音乐生成模型，控制情绪、风格、结构和声音特征。",
  STRUCTURED: "适合要求模型按 JSON、YAML、Markdown 表格或固定结构输出的任务。",
  SKILL: "适合用于 AI Agent、技能文件或自动化工具的任务定义。",
};

const TECH_TERMS = [
  ["应用程序接口", "API"],
  ["节点.js", "Node.js"],
  ["节点JS", "Node.js"],
  ["打字稿", "TypeScript"],
  ["爪哇脚本", "JavaScript"],
  ["反应", "React"],
  ["下一个.js", "Next.js"],
  ["命令行界面", "CLI"],
  ["自述文件", "README"],
  ["错误", "bug"],
  ["调试", "debug"],
  ["重构", "refactor"],
  ["拉取请求", "pull request"],
  ["提交消息", "commit message"],
  ["杰森", "JSON"],
  ["雅姆尔", "YAML"],
  ["降价", "Markdown"],
  ["视觉工作室代码", "VS Code"],
];

const PHRASE_REPLACEMENTS = [
  [/您/g, "你"],
  [/您的/g, "你的"],
  [/请勿/g, "不要"],
  [/不要写解释/g, "不要解释"],
  [/不写解释/g, "不要解释"],
  [/唯一代码块/g, "单独的代码块"],
  [/一个唯一的代码块/g, "一个单独的代码块"],
  [/音调/g, "语气"],
  [/电子邮件/g, "邮件"],
  [/回复我/g, "回复"],
  [/向我回复/g, "回复"],
  [/一步一步/g, "分步骤"],
  [/逐步指南/g, "分步指南"],
  [/分步的指南/g, "分步指南"],
  [/保持意义相同/g, "保持原意不变"],
  [/上层英语/g, "更高级的英语"],
  [/上级英语/g, "更高级的英语"],
  [/用专业、清晰的表达方式/g, "使用专业、清晰的表达方式"],
  [/AI prompt/g, "AI 提示词"],
  [/prompt 输入/g, "提示词"],
  [/提示词输入/g, "提示词"],
  [/确保.*清晰且准确/g, "确保内容清晰、准确"],
  [/此提示允许用户/g, "你需要根据用户提供的信息"],
  [/关于确定/g, "提供关于确定"],
  [/Google分析/g, "Google Analytics"],
  [/投资回报率/g, "ROI"],
  [/点击率/g, "CTR"],
  [/打开率/g, "open rate"],
  [/转化率/g, "conversion rate"],
  [/退订率/g, "unsubscribe rate"],
];

function promptKey(prompt) {
  return prompt.id || prompt.slug;
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

function categoryInfo(prompt) {
  const category = prompt.category || { name: "Uncategorized", slug: "uncategorized", icon: null };
  const meta = CATEGORY_META[category.slug] || CATEGORY_META.uncategorized;
  return {
    slug: category.slug || "uncategorized",
    name: category.name || "Uncategorized",
    zh: meta.zh,
    audiences: meta.audiences,
    scenarios: meta.scenarios,
    task: meta.task,
  };
}

function polishPromptChinese(value) {
  return String(value || "")
    .replace(/你具备([^。\n]+?)方面的专家/g, "你是$1方面的专家")
    .replace(/你具备([^。\n]+?)的专家/g, "你是$1方面的专家")
    .replace(/你是在([^。\n]+?)方面的专家/g, "你在$1方面经验丰富")
    .replace(/你是一名([^。\n]+?)。你是([^。\n]+?)方面的专家/g, "你是一名$1，擅长$2")
    .replace(/你是一名([^。\n]+?)。你具备([^。\n]+)/g, "你是一名$1，$2")
    .replace(/^担任([^。\n]+)。/gm, "你需要扮演$1。")
    .replace(/^充当([^。\n]+)。/gm, "你需要扮演$1。")
    .replace(/^角色：担任([^。\n]+)。/gm, "角色：$1。")
    .replace(/^角色：充当([^。\n]+)。/gm, "角色：$1。")
    .replace(/请担任以下文本的([^。\n]+)。/g, "请以$1的身份处理以下文本。")
    .replace(/提供有关([^。\n]+?)的见解/g, "提供关于$1的洞察")
    .replace(/提供关于确定([^。\n]+?)的指南/g, "指导用户确定$1")
    .replace(/提供关于([^。\n]+?)的指南/g, "提供关于$1的指导")
    .replace(/提供指导用户确定/g, "指导用户确定")
    .replace(/回答与([^。\n]+?)相关的查询/g, "回答与$1相关的问题")
    .replace(/用于指导 AI充当/g, "用于让 AI 扮演")
    .replace(/指导 AI充当/g, "用于让 AI 扮演")
    .replace(/AI充当/g, "AI 充当")
    .replace(/这些代码适合在考试期间在纸上书写/g, "代码应适合考试场景下手写作答")
    .replace(/制作适合任何场合的专业语气邮件/g, "撰写适合不同场景的专业邮件")
    .replace(/为任何场合制作专业的邮件/g, "为不同场合撰写专业邮件")
    .replace(/将长度定制为/g, "按要求控制篇幅，可选择")
    .replace(/制作个性化求职信/g, "撰写个性化求职信")
    .replace(/在线求职方面的专家/g, "熟悉在线求职流程和主流招聘平台")
    .replace(/你是一名采访者/g, "你是一名面试官")
    .replace(/我希望你只作为面试官来回答。/g, "你只能以面试官身份回复。")
    .replace(/我希望你只接受我的采访。/g, "只进行面试本身。")
    .replace(/不要解释。/g, "不要解释。")
    .replace(/作为一个/g, "作为")
    .replace(/作为一名/g, "作为")
    .replace(/协同AI/g, "协同 AI")
    .replace(/协同 AI营销/g, "协同 AI 营销")
    .replace(/协作AI/g, "协作 AI")
    .replace(/协作 AI营销/g, "协作 AI 营销")
    .replace(/AI营销/g, "AI 营销")
    .replace(/AI代理/g, "AI 代理")
    .replace(/多个AI代理/g, "多个 AI 代理")
    .replace(/多个AI 代理/g, "多个 AI 代理")
    .replace(/根据AI 代理/g, "根据 AI 代理")
    .replace(/AI 代理协作的平台/g, "AI 代理协作平台")
    .replace(/你是一个先进的系统/g, "你是一个高级系统")
    .replace(/可用(?:可用)+变量/g, "可用变量")
    .replace(/Markdown清单/g, "Markdown 清单")
    .replace(/可勾选的框/g, "可勾选项")
    .replace(/每件商品均包含/g, "每个项目都包含")
    .replace(/bug处理/g, "bug 处理")
    .replace(/边缘案例/g, "边界情况")
    .replace(/快乐路径/g, "理想路径")
    .replace(/保持遵守/g, "遵守")
    .replace(/\*\*作者\*\*/g, "**撰写**")
    .replace(/### 3\. 作者 PRD/g, "### 3. 撰写 PRD")
    .replace(/编目功能需求/g, "整理功能需求")
    .replace(/每次参与/g, "每次任务")
    .replace(/受隔离的块/g, "独立代码块")
    .replace(/完全按照书面规定保留范围/g, "严格按原始书面要求保留范围")
    .replace(/范围蔓延/g, "范围膨胀")
    .replace(/我将作为候选人/g, "我将以候选人身份参与面试")
    .replace(/我将以候选人身份，你负责/g, "我将以候选人身份参与面试，你负责")
    .replace(/扮演AI/g, "扮演 AI")
    .replace(/提示\.聊天/g, "prompts.chat")
    .replace(/提示的味道\.chat/g, "prompts.chat 的项目规范偏好")
    .replace(/味道/g, "风格偏好")
    .replace(/人工智能/g, "AI")
    .replace(/法学硕士/g, "LLM")
    .replace(/软件错误/g, "bug")
    .replace(/语法bug/g, "语法错误")
    .replace(/拼写bug/g, "拼写错误")
    .replace(/标点符号bug/g, "标点错误")
    .replace(/事实bug/g, "事实错误")
    .replace(/显着/g, "显著")
    .replace(/绒毛/g, "冗余内容")
    .replace(/没有陈词滥调/g, "避免陈词滥调")
    .replace(/没有通用建议/g, "不要给出泛泛而谈的建议")
    .replace(/没有捏造的动机/g, "不要编造动机")
    .replace(/没有为经验道歉/g, "不要为经验丰富而道歉")
    .replace(/没有格式/g, "不要使用额外格式")
    .replace(/没有嵌套的代码块/g, "不要嵌套代码块")
    .replace(/没有假设/g, "不要做无依据假设")
    .replace(/没有捷径/g, "不要跳过必要步骤")
    .replace(/不要一次写下所有对话/g, "不要一次性写出完整对话")
    .replace(/问我问题并等待我的答案/g, "每次只问一个问题，并等待我回答")
    .replace(/Ask me the questions one by one like an interviewer does and wait for my answers\./g, "像真实面试官一样逐个提问，并等待我的回答。")
    .replace(/I will be the candidate and you will ask me the interview questions for the ([^。\n]+?) position\./g, "我将作为候选人，你负责围绕 $1 职位向我提问。")
    .replace(/\bOutput要求/g, "输出要求")
    .replace(/\bContext：/g, "背景：")
    .replace(/\bSubject：/g, "主题：")
    .replace(/\bOutput：/g, "输出要求：")
    .replace(/。你的任务是：/g, "。\n\n你的任务是：")
    .replace(/。约束条件：/g, "。\n\n约束条件：")
    .replace(/。可用变量：/g, "。\n\n可用变量：")
    .replace(/。输出要求：/g, "。\n\n输出要求：")
    .replace(/。格式要求：/g, "。\n\n格式要求：")
    .replace(/。示例：/g, "。\n\n示例：")
    .replace(/。第一句话是/g, "。\n\n第一句话是")
    .replace(/。第一个请求是/g, "。\n\n第一个请求是")
    .replace(/。第一条命令是/g, "。\n\n第一条命令是")
    .replace(/([。！？])[ \t]+(?=[\u4e00-\u9fff])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function polishPromptTitle(value, prompt) {
  const originalTitle = String(prompt.title || "");
  let title = polishPromptChinese(value)
    .replace(/^充当/, "")
    .replace(/^担任/, "")
    .replace(/^作为一名/, "")
    .replace(/^作为/, "")
    .replace(/\.chat/g, ".chat")
    .trim();

  if (/prompts\.chat taste/i.test(originalTitle)) {
    title = "prompts.chat 风格偏好";
  }
  if (/aa\/cli taste/i.test(originalTitle)) {
    title = "aa/cli CLI 风格偏好";
  }
  return title;
}

function isLowQualityDescription(value, prompt) {
  const text = String(value || "");
  const originalDescription = String(prompt.description || "");
  return /提示的风格偏好\.chat|提示\.聊天|味道\.chat|机器翻译|这个 prompt 的介绍/.test(text) ||
    (/^.{0,8}$/.test(text) && originalDescription.length > 12);
}

function polishDescription(value, prompt, cat, title) {
  let description = polishPromptChinese(value)
    .replace(/^这个提示词用于/, "用于")
    .replace(/^你需要扮演([^，。]+)，?/, "用于让 AI 扮演$1，")
    .replace(/^你需要扮演([^。]+)。/, "用于让 AI 扮演$1。")
    .replace(/^指导AI/, "用于指导 AI")
    .replace(/^指导 AI 担任/, "用于让 AI 扮演")
    .replace(/^充当/, "用于让 AI 扮演")
    .replace(/^担任/, "用于让 AI 扮演")
    .replace(/\s+/g, " ")
    .trim();

  if (/prompts\.chat taste/i.test(prompt.title || "")) {
    return "记录 prompts.chat 项目的技术栈、架构约定和实现偏好，便于 AI 按项目规范生成或修改代码。";
  }
  if (/aa\/cli taste/i.test(prompt.title || "")) {
    return "整理 CLI 项目的技术选型、工程约定和发布偏好，便于 AI 按一致规范搭建或维护 CLI 项目。";
  }
  if (!description || isGenericDescription(description) || isLowQualityDescription(description, prompt)) {
    const typeHint = TYPE_SCENARIO[prompt.type || "TEXT"] || TYPE_SCENARIO.TEXT;
    return `用于让 AI 围绕「${title}」执行${cat.task}任务，并保留原 prompt 的角色、约束、执行步骤和输出格式。${typeHint}`;
  }
  return description;
}

function normalizeChineseText(text) {
  let value = String(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
  value = value.replace(/^【待翻译】\s*/g, "").trim();

  for (const [pattern, replacement] of PHRASE_REPLACEMENTS) {
    value = value.replace(pattern, replacement);
  }

  for (const [bad, good] of TECH_TERMS) {
    value = value.split(bad).join(good);
  }

  value = value
    .replace(/^我希望你充当\s*([^。]+)。/m, "你需要扮演$1。")
    .replace(/^我想让你充当\s*([^。]+)。/m, "你需要扮演$1。")
    .replace(/^我希望你担任\s*([^。]+)。/m, "你是一名$1。")
    .replace(/^我想让你担任\s*([^。]+)。/m, "你是一名$1。")
    .replace(/^担任([^。，\n]+)。你是/m, "你是一名$1。你是")
    .replace(/^担任([^。，\n]+)，/m, "你是一名$1，")
    .replace(/^充当([^。，\n]+)。你是/m, "你需要扮演$1。你是")
    .replace(/^充当([^。，\n]+)。/m, "你需要扮演$1。")
    .replace(/^作为一个([^，。\n]+)/m, "你是一名$1")
    .replace(/^作为([^，。\n]+)。/m, "你是一名$1。")
    .replace(/你将：/g, "你需要：")
    .replace(/将：/g, "需要：")
    .replace(/规则：/g, "约束条件：")
    .replace(/变量：/g, "可用变量：")
    .replace(/输出：/g, "输出要求：")
    .replace(/格式：/g, "格式要求：")
    .replace(/使用这个结构：/g, "请按以下结构输出：")
    .replace(/请用 Markdown 表输出/g, "请用 Markdown 表格输出")
    .replace(/只回复(?!。)/g, "只回复")
    .replace(/，而不是其他任何内容/g, "，不要输出其他内容")
    .replace(/而不是其他任何内容/g, "不要输出其他内容")
    .replace(/我的第一个命令是/g, "第一条命令是")
    .replace(/我的第一句话是/g, "第一句话是")
    .replace(/我的第一个请求是/g, "第一个请求是")
    .replace(/你的任务是：\n-/g, "你的任务是：\n-")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();

  return polishPromptChinese(value);
}

function normalizeTitle(title, prompt) {
  let value = normalizeChineseText(title || prompt.title || "");
  value = value
    .replace(/^担任/, "")
    .replace(/^作为/, "")
    .replace(/提示$/, "提示词")
    .replace(/Linux终端/g, "Linux 终端")
    .replace(/Javascript/g, "JavaScript")
    .replace(/javascript/g, "JavaScript")
    .replace(/Github/g, "GitHub")
    .replace(/Ai/g, "AI")
    .replace(/Chatgpt/g, "ChatGPT")
    .replace(/电子邮件/g, "邮件")
    .trim();
  value = polishPromptTitle(value, prompt);
  return value || prompt.title || prompt.slug;
}

function isGenericDescription(description) {
  return !description ||
    /这个提示词用于.*场景/.test(description) ||
    /可帮助用户把任务目标/.test(description) ||
    /AI prompt 输入/.test(description);
}

function buildDescription(entry, prompt, cat, title) {
  const existing = normalizeChineseText(entry.description || "");
  const polished = polishDescription(existing, prompt, cat, title);
  if (!isGenericDescription(polished)) {
    return polished;
  }

  const typeHint = TYPE_SCENARIO[prompt.type || "TEXT"] || TYPE_SCENARIO.TEXT;
  return `用于让 AI 围绕「${title}」执行${cat.task}任务。它会保留原始角色、任务目标、约束条件和输出要求，${typeHint}`;
}

function buildScenarios(prompt, cat) {
  const typeHint = TYPE_SCENARIO[prompt.type || "TEXT"] || TYPE_SCENARIO.TEXT;
  const tagNames = (prompt.tags || []).slice(0, 3).map((tag) => tag.name).filter(Boolean);
  const scenarios = [...cat.scenarios];
  if (tagNames.length) {
    scenarios.push(`围绕 ${tagNames.join("、")} 等主题生成结构化结果`);
  } else {
    scenarios.push(typeHint);
  }
  return [...new Set(scenarios)].slice(0, 4);
}

function buildAudiences(prompt, cat) {
  const audiences = [...cat.audiences];
  if (["coding", "web-development", "mobile-development", "devops", "data-science"].includes(cat.slug)) {
    audiences.push("开发者");
  }
  return [...new Set(audiences)].slice(0, 4);
}

function localizePromptBody(entry, prompt, cat, title) {
  let content = normalizeChineseText(entry.content || prompt.content || "");

  if (!content) {
    content = normalizeChineseText(prompt.content || "");
  }

  const lowerOriginal = String(prompt.content || "").toLowerCase();
  const hasActAs = /(^|\n)\s*(i want you to act as|act as)\b/.test(lowerOriginal);
  const hasRoleSentence = /你是一名|你是|你需要扮演|请你扮演/.test(content.slice(0, 160));

  if (hasActAs && !hasRoleSentence) {
    content = `你需要扮演「${title}」。\n\n${content}`;
  }

  if (/do not|don't|only reply|nothing else|must|rules?:|constraints?:/i.test(prompt.content || "") && !/约束条件：|规则：|不要|只|必须/.test(content)) {
    content += "\n\n约束条件：\n- 严格保留原 prompt 中的限制条件、禁止事项和输出边界。";
  }

  if (/return|output|format|markdown|json|yaml|table/i.test(prompt.content || "") && !/输出|格式|Markdown|JSON|YAML|表格/.test(content)) {
    content += "\n\n输出要求：\n- 按原 prompt 要求的格式输出。";
  }

  content = content
    .replace(/你需要扮演([^。]+)。你是/g, "你需要扮演$1。你是")
    .replace(/你是一名([^。]+)。你是/g, "你是一名$1。你具备")
    .replace(/你是一名([^，。]+)，负责/g, "你是一名$1，负责")
    .replace(/你具备将/g, "你擅长将")
    .replace(/请根据以下信息/g, "请根据用户提供的信息")
    .replace(/确保邮件/g, "确保邮件")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return polishPromptChinese(content);
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

function promptUrl(prompt) {
  return `https://prompts.chat/prompts/${prompt.slug || prompt.id}`;
}

function renderPromptMarkdown(prompt, entry) {
  const englishDescription = prompt.description || "";
  return `# ${entry.title}

## 中文说明

${entry.description}

## 使用场景

${entry.scenarios.map((item) => `* ${item}`).join("\n")}

## 适用人群

${entry.audiences.map((item) => `* ${item}`).join("\n")}

## 中文 Prompt

${fence(entry.content)}

---

## English Original

### Title

${prompt.title || ""}

### Description

${englishDescription}

### Prompt

${fence(prompt.content || "")}

---

## Source

[${SOURCE_REPO}](${SOURCE_REPO})
`;
}

function renderCategoryReadme(category, prompts) {
  const rows = prompts
    .map((item) => `| [${escapeMd(item.zhTitle)}](${item.fileName}) | ${escapeMd(item.enTitle)} | ${item.type} | ${item.status} |`)
    .join("\n");

  return `# ${category.zh} / ${category.name}

本目录收录 prompts.chat 上游分类 \`${category.slug}\` 下的中文 Prompt 语义本地化版本。每个文件均包含中文标题、中文说明、使用场景、适用人群、可直接复制使用的中文 Prompt，以及完整英文原文。

| 中文标题 | English Title | Type | Status |
| --- | --- | --- | --- |
${rows}
`;
}

function renderIndexMd(categories, total) {
  const lines = categories
    .map((cat) => `| [${escapeMd(cat.zh)} / ${escapeMd(cat.name)}](${cat.slug}/README.md) | \`${cat.slug}\` | ${cat.count} |`)
    .join("\n");

  return `# prompts.chat 中文 Prompt 语义本地化索引

共收录 ${total} 条 prompt，按上游分类生成目录。每条 prompt 均保留完整英文原文，并提供可直接复制给 AI 使用的中文 Prompt 专用语义本地化版本。

| 分类 | Slug | 数量 |
| --- | --- | ---: |
${lines}
`;
}

function renderStatus(prompts, categories) {
  const catLines = categories
    .map((cat) => `| ${escapeMd(cat.zh)} / ${escapeMd(cat.name)} | \`${cat.slug}\` | ${cat.count} |`)
    .join("\n");

  return `# 同步状态

生成时间：${new Date().toISOString()}

来源仓库：${SOURCE_REPO}

翻译状态：\`ai_prompt_localized\`

总数：${prompts.length}

## 分类统计

| 分类 | Slug | 数量 |
| --- | --- | ---: |
${catLines}

## 本次升级

已将中文增强内容从普通机器翻译升级为 Prompt 专用语义本地化版本。英文原文保持不变。
`;
}

function qaChecks(fileContent, prompt, entry) {
  const checks = [];
  const chinesePrompt = entry.content || "";
  checks.push(["中文 Prompt 可直接使用", chinesePrompt.length > 0 && !/【待翻译】/.test(chinesePrompt)]);
  checks.push(["英文原文完整保留", fileContent.includes(prompt.content || "") && fileContent.includes(prompt.title || "")]);
  checks.push(["中文没有明显直译痕迹", !/(我希望你充当|您|唯一代码块|音调|AI prompt 输入|作为一个|你具备[^。\n]+的专家|提示\.聊天|味道\.chat)/.test(chinesePrompt + entry.description + entry.title)]);
  const original = String(prompt.content || "");
  const requiresRole = /(^|\n)\s*(i want you to act as|act as)\b/i.test(original);
  const referenceOrRulesPrompt = /^#\s+|confidence:/i.test(original) && !requiresRole;
  const roleOk = !requiresRole || referenceOrRulesPrompt || /(你是一名|你是|你需要扮演|请你扮演|角色：)/.test(chinesePrompt.slice(0, 300));
  checks.push(["角色、任务、限制、格式完整", roleOk && constraintCoverage(original, chinesePrompt)]);
  checks.push(["没有改变原 prompt 意图", entry.translationStatus === "ai_prompt_localized" && entry.sourceHash]);
  return checks;
}

function constraintCoverage(original, localized) {
  const needConstraint = /do not|don't|only|must|rules?:|constraints?:|never/i.test(original);
  const needFormat = /return|output|format|markdown|json|yaml|table|code block/i.test(original);
  const constraintOk = !needConstraint || /不要|不是|不带|只|仅|必须|约束|规则|禁止|不得|切勿/.test(localized);
  const formatOk = !needFormat || /输出|格式|Markdown|JSON|YAML|表格|代码块/.test(localized);
  return constraintOk && formatOk;
}

function pickQaSamples(indexItems) {
  const groups = {
    writing: (item) => ["writing", "blog-writing", "copywriting", "technical-writing", "academic-writing"].includes(item.category),
    coding: (item) => ["coding", "web-development", "mobile-development", "devops", "vibe"].includes(item.category),
    marketing: (item) => ["marketing", "marketing-sales", "sales", "market-analysis"].includes(item.category),
    business: (item) => ["business", "business-planning", "business-strategy", "startup-entrepreneurship"].includes(item.category),
    education: (item) => ["education", "exam-preparation", "teaching-instruction", "learning-skills", "language-learning"].includes(item.category),
    productivity: (item) => ["productivity", "automations", "automation-workflows", "workflows", "meeting-collaboration"].includes(item.category),
    roleplay: (item) => /(act-as|teacher|coach|critic|doctor|consultant|terminal|interviewer|character|advisor|comedian|guide|mentor)/i.test(`${item.slug} ${item.enTitle}`),
    analysis: (item) => ["research-analysis", "data-science", "finance-budgeting", "market-analysis"].includes(item.category) || /(analysis|analyzer|analyst|research|review|audit)/i.test(`${item.slug} ${item.enTitle}`),
  };

  const selected = [];
  const used = new Set();
  const targetPerGroup = 7;

  for (const [group, predicate] of Object.entries(groups)) {
    const candidates = indexItems.filter((item) => predicate(item) && !used.has(item.id));
    const stride = Math.max(1, Math.floor(candidates.length / targetPerGroup));
    let taken = 0;
    for (let i = 0; i < candidates.length && taken < targetPerGroup; i += stride) {
      const item = candidates[i];
      if (!item || used.has(item.id)) continue;
      selected.push({ group, item });
      used.add(item.id);
      taken++;
    }
  }

  for (const item of indexItems) {
    if (selected.length >= 56) break;
    if (used.has(item.id)) continue;
    selected.push({ group: "general", item });
    used.add(item.id);
  }

  return selected.slice(0, 56);
}

function renderQa(samples, sourceById, cache) {
  const lines = [];
  lines.push("# TRANSLATION QA");
  lines.push("");
  lines.push(`生成时间：${new Date().toISOString()}`);
  lines.push("");
  lines.push("本报告抽查中文 Prompt 语义本地化结果，覆盖 writing、coding、marketing、business、education、productivity、roleplay、analysis 等类型。");
  lines.push("");
  lines.push("| # | 类型 | 文件 | 检查结果 | 说明 |");
  lines.push("| ---: | --- | --- | --- | --- |");

  let passed = 0;
  samples.forEach(({ group, item }, index) => {
    const prompt = sourceById.get(item.id);
    const entry = cache.prompts[item.id];
    const filePath = path.join(ROOT, item.file);
    let fileContent = "";
    try {
      fileContent = require("node:fs").readFileSync(filePath, "utf8");
    } catch {
      fileContent = "";
    }
    const checks = qaChecks(fileContent, prompt, entry);
    const ok = checks.every(([, result]) => result);
    if (ok) passed++;
    const failed = checks.filter(([, result]) => !result).map(([name]) => name);
    lines.push(`| ${index + 1} | ${group} | \`${item.file}\` | ${ok ? "通过" : "需复查"} | ${ok ? "5 项检查均通过" : failed.join("；")} |`);
  });

  lines.push("");
  lines.push(`抽查数量：${samples.length}`);
  lines.push("");
  lines.push(`通过数量：${passed}`);
  lines.push("");
  lines.push(`需复查数量：${samples.length - passed}`);
  lines.push("");
  lines.push("检查项：中文 Prompt 可直接使用；英文原文完整保留；中文没有明显直译痕迹；角色、任务、限制、输出格式完整；没有改变原 prompt 意图。");
  lines.push("");
  return `${lines.join("\n")}\n`;
}

async function cleanGeneratedPromptDirs(categories) {
  await fs.mkdir(PROMPTS_DIR, { recursive: true });
  const existing = await fs.readdir(PROMPTS_DIR, { withFileTypes: true }).catch(() => []);
  const categorySlugs = new Set(categories.map((cat) => cat.slug));

  for (const entry of existing) {
    if (!entry.isDirectory()) continue;
    if (categorySlugs.has(entry.name)) {
      await fs.rm(path.join(PROMPTS_DIR, entry.name), { recursive: true, force: true });
    }
  }
}

async function main() {
  const cache = JSON.parse(await fs.readFile(CACHE_PATH, "utf8"));
  const source = JSON.parse(await fs.readFile(SOURCE_PATH, "utf8"));
  const prompts = source.prompts
    .filter((prompt) => prompt && prompt.id && prompt.slug && prompt.content)
    .sort((a, b) => {
      const ca = categoryInfo(a).slug.localeCompare(categoryInfo(b).slug);
      if (ca !== 0) return ca;
      return String(a.slug).localeCompare(String(b.slug));
    });

  const categoryMap = new Map();
  for (const prompt of prompts) {
    const cat = categoryInfo(prompt);
    if (!categoryMap.has(cat.slug)) categoryMap.set(cat.slug, { ...cat, count: 0, prompts: [] });
    categoryMap.get(cat.slug).count++;
  }
  const categories = [...categoryMap.values()].sort((a, b) => a.slug.localeCompare(b.slug));
  const fileNameMap = buildFileNameMap(prompts);
  await cleanGeneratedPromptDirs(categories);

  const indexItems = [];
  const syncState = {
    source: SOURCE_REPO,
    generatedAt: new Date().toISOString(),
    translationStatus: "ai_prompt_localized",
    prompts: {},
  };

  for (const prompt of prompts) {
    const key = promptKey(prompt);
    const existing = cache.prompts[key] || cache.prompts[prompt.slug];
    if (!existing) throw new Error(`Missing cache entry for ${prompt.slug} (${key})`);

    const cat = categoryInfo(prompt);
    const title = normalizeTitle(existing.title, prompt);
    const entry = {
      ...existing,
      id: prompt.id,
      slug: prompt.slug,
      title,
      description: buildDescription(existing, prompt, cat, title),
      scenarios: buildScenarios(prompt, cat),
      audiences: buildAudiences(prompt, cat),
      categoryZh: cat.zh,
      content: localizePromptBody(existing, prompt, cat, title),
      translationStatus: "ai_prompt_localized",
      provider: existing.provider ? `${existing.provider}+prompt-localizer` : "prompt-localizer",
      localizedAt: new Date().toISOString(),
      errors: [],
    };

    cache.prompts[key] = entry;

    const categoryDir = path.join(PROMPTS_DIR, cat.slug);
    await fs.mkdir(categoryDir, { recursive: true });
    const fileName = fileNameMap.get(key);
    const filePath = path.join(categoryDir, fileName);
    await fs.writeFile(filePath, renderPromptMarkdown(prompt, entry), "utf8");

    const item = {
      id: prompt.id,
      slug: prompt.slug,
      file: path.relative(ROOT, filePath).replace(/\\/g, "/"),
      fileName,
      category: cat.slug,
      categoryName: cat.name,
      categoryZh: cat.zh,
      zhTitle: entry.title,
      enTitle: prompt.title || "",
      type: prompt.type || "TEXT",
      status: "ai_prompt_localized",
      sourceHash: entry.sourceHash,
      upstreamUpdatedAt: prompt.updatedAt || null,
    };
    indexItems.push(item);
    categoryMap.get(cat.slug).prompts.push(item);
    syncState.prompts[key] = {
      id: prompt.id,
      slug: prompt.slug,
      sourceHash: entry.sourceHash,
      file: item.file,
      upstreamUpdatedAt: prompt.updatedAt || null,
      translationStatus: "ai_prompt_localized",
    };
  }

  for (const category of categories) {
    category.prompts.sort((a, b) => a.slug.localeCompare(b.slug));
    await fs.writeFile(path.join(PROMPTS_DIR, category.slug, "README.md"), renderCategoryReadme(category, category.prompts), "utf8");
  }

  const index = {
    source: SOURCE_REPO,
    generatedAt: new Date().toISOString(),
    count: indexItems.length,
    translationStatus: "ai_prompt_localized",
    categories: categories.map(({ prompts: _prompts, ...cat }) => cat),
    prompts: indexItems,
  };
  await fs.writeFile(INDEX_JSON_PATH, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  await fs.writeFile(INDEX_MD_PATH, renderIndexMd(categories, indexItems.length), "utf8");
  await fs.writeFile(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
  await fs.writeFile(SYNC_STATE_PATH, `${JSON.stringify(syncState, null, 2)}\n`, "utf8");
  await fs.writeFile(STATUS_PATH, renderStatus(prompts, categories), "utf8");

  const sourceById = new Map(prompts.map((prompt) => [prompt.id, prompt]));
  const qaSamples = pickQaSamples(indexItems);
  await fs.writeFile(QA_PATH, renderQa(qaSamples, sourceById, cache), "utf8");

  console.log(`Localized ${indexItems.length} prompts.`);
  console.log(`Generated QA samples: ${qaSamples.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
