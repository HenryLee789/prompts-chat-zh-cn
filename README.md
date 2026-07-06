# prompts.chat 中文增强镜像

这是一个面向中文读者的 **prompts.chat 中文增强镜像 + 可持续维护版本**。

本仓库基于上游项目 [f/prompts.chat](https://github.com/f/prompts.chat) 构建，保留原始项目文件、英文 prompt 数据和英文说明，同时生成便于阅读、学习和持续同步的中文增强 prompt 目录。

> 本项目基于 prompts.chat 翻译与整理，仅用于学习与研究。  
> 原项目：https://github.com/f/prompts.chat

## 项目用途

- 学习 prompts.chat 中的高质量 prompt 写法
- 用简体中文阅读、检索和复用 prompt
- 对照英文原文理解原 prompt 的角色、约束和输出结构
- 按上游分类持续同步新增或修改内容
- 为后续人工校对、二次整理和本地知识库导入提供稳定结构

## 当前内容

- 上游 prompt：2006 条
- 中文增强 prompt 文件：2006 个
- 分类目录：53 个
- 翻译状态：全部已生成中文正文，并保留英文原文对照
- 上游英文说明：[`README_EN.md`](README_EN.md)
- 中文 prompt 索引：[`prompts/INDEX.md`](prompts/INDEX.md)
- 机器可读索引：[`prompts/index.json`](prompts/index.json)
- 同步状态：[`SYNC_STATUS.md`](SYNC_STATUS.md)

## 目录结构

```text
.
├── README.md                 # 中文增强说明
├── README_EN.md              # 上游英文 README 原文
├── PROMPTS.md                # 上游英文 prompt 汇总
├── prompts.csv               # 上游英文 CSV 数据
├── prompts/                  # 中文增强 prompt 目录
│   ├── INDEX.md
│   ├── index.json
│   ├── writing/
│   ├── coding/
│   ├── business/
│   ├── marketing/
│   └── ...
├── data/
│   ├── upstream-prompts.json # 上游 API 快照
│   ├── prompts.zh-cache.json # 中文翻译缓存
│   └── sync-state.json       # 同步状态与内容哈希
└── scripts/
    └── sync.js               # 同步、差异检测、翻译与生成脚本
```

上游当前版本的 prompt 数据来自官方接口 `https://prompts.chat/prompts.json?full_content=true`，其中包含真实分类、slug、正文、类型、标签和更新时间。本仓库据此生成 `prompts/<category>/<slug>.md` 形式的中文阅读目录。

当上游出现重复 slug 时，本仓库会自动在文件名中追加短 id，例如：

```text
prompts/coding/code-review-specialist--bxwt0mke.md
```

这样可以保证每条上游 prompt 都独立保留，不合并、不覆盖。

## 每条 Prompt 的格式

每个中文增强文件都包含：

- 中文标题
- 中文说明
- 使用场景说明
- 适用人群
- 中文 Prompt 正文
- 英文原文标题
- 英文原文说明
- 英文原文 Prompt 正文
- 来源、分类、类型、标签、贡献者和上游更新时间

示例结构：

```md
# 中文标题

## 中文说明

## 使用场景

## 适用人群

## 中文 Prompt 正文

---

## English Original
```

## 使用方法

### 阅读中文 prompt

从 [`prompts/INDEX.md`](prompts/INDEX.md) 进入分类索引，然后打开对应分类目录。

常用分类示例：

- [`prompts/writing`](prompts/writing)
- [`prompts/coding`](prompts/coding)
- [`prompts/business`](prompts/business)
- [`prompts/marketing`](prompts/marketing)
- [`prompts/image-generation`](prompts/image-generation)
- [`prompts/web-development`](prompts/web-development)

### 查找 prompt

可以直接搜索中文或英文关键词：

```bash
rg "代码审查" prompts
rg "Code Review" prompts
```

### 复制使用

打开任意 prompt 文件，优先复制 `## 中文 Prompt 正文` 下的内容。如果需要确认原始约束，查看同文件中的 `## English Original`。

## 分类说明

分类来自 prompts.chat 上游数据，而不是本仓库自行合并。当前包括：

- 写作、博客写作、学术写作、技术写作、文案写作
- 编程、Web 开发、移动开发、DevOps、数据科学
- 商业、商业计划、商业战略、市场分析、营销、销售
- 教育、考试准备、教学指导、语言学习、学习技能
- 图像生成、视频生成、音乐、设计、创意
- 自动化、工作流、智能体技能、研究分析、生产力
- 以及未分类内容

完整分类和数量见 [`prompts/INDEX.md`](prompts/INDEX.md)。

## 持续同步流程

同步脚本位于 [`scripts/sync.js`](scripts/sync.js)。

推荐流程：

```bash
node scripts/sync.js --provider=google --concurrency=4
```

脚本会执行：

1. 拉取上游最新 prompt 数据
2. 生成 `data/upstream-prompts.json` 快照
3. 对比 `data/sync-state.json` 中的内容哈希
4. 复用已有 `data/prompts.zh-cache.json` 翻译缓存
5. 只翻译新增或发生变化的 prompt
6. 重新生成 `prompts/` 中文增强目录
7. 更新 `prompts/index.json`、`prompts/INDEX.md` 和 `SYNC_STATUS.md`

### 翻译提供方

```bash
# 默认：公开机器翻译接口
node scripts/sync.js --provider=google

# 本地 Ollama
set OLLAMA_MODEL=huihui-qwen3-vl-codex-32k:latest
node scripts/sync.js --provider=ollama

# 只根据缓存重新生成文件，不触发翻译
node scripts/sync.js --generate-only --provider=none

# 只重试失败项
node scripts/sync.js --retry-failed --provider=google
```

### 未来更新流程

1. 拉取 upstream 最新内容
2. 运行同步脚本
3. 自动 diff 新增和修改项
4. 自动翻译新增或变更的 prompt
5. 生成中文版本更新
6. 人工抽样校对关键 prompt
7. 提交更新

## 翻译标准

本仓库遵循以下翻译原则：

- 不机械直译，优先保证中文自然可读
- 不改变原 prompt 的角色、约束、变量和输出结构
- 编程类 prompt 保留技术术语、变量、代码块和格式约束
- 营销类 prompt 适度中文化表达，但不改写原目标
- AI 角色类 prompt 保持专业、清晰、可执行
- 英文原文完整保留，方便核对

## 维护说明

- 不删除上游 prompt
- 不合并上游分类
- 不覆盖重复 slug 对应的不同 prompt
- 中文增强内容与英文原文放在同一个文件中，便于审阅
- 翻译缓存按上游 prompt id 和内容哈希维护，支持增量同步

## 来源声明

本项目基于 prompts.chat 翻译与整理，仅用于学习与研究。  
原项目：https://github.com/f/prompts.chat

原项目版权、许可证和贡献规则请参考上游仓库及本仓库保留的许可证文件。
