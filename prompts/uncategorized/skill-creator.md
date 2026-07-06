---
id: "cmkfmnaro0003ld04klts1ln9"
slug: "skill-creator"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/skill-creator"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "11dc4856674bba513a1acd787b42eac10a6bc7b4dada6148154e70ee251e038b"
upstream_updated_at: "2026-01-15T15:53:15.241Z"
---
# 技能创造者

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[skill-creator](https://prompts.chat/prompts/skill-creator)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

创建有效技能的指南。当用户想要创建新技能（或更新现有技能）以通过专业知识、工作流程或工具集成扩展 Claude 的功能时，应使用此技能。

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 creator、Agent、meta、Skill 等主题快速生成可复用结果。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

````md
---
名称：技能创造者
描述：创建有效技能的指南。当用户想要创建新技能（或更新现有技能）以通过专业知识、工作流程或工具集成扩展 Claude 的功能时，应使用此技能。
许可证：LICENSE.txt 中的完整条款
---

# 技能创造者

该技能为创建有效技能提供了指导。

## 关于技能

技能是模块化的、独立的包，通过提供
专业知识、工作流程和工具。将它们视为特定的“入职指南”
领域或任务——它们将克劳德从通用代理转变为专用代理
配备了任何模型都无法完全拥有的程序知识。

### 提供什么技能

1. 专业工作流程 - 针对特定领域的多步骤程序
2. 工具集成 - 使用特定文件格式或 API 的说明
3. 领域专业知识 - 公司特定的知识、模式、业务逻辑
4. 捆绑资源 - 用于复杂和重复任务的脚本、参考和资产

## 核心原则

### 简洁是关键

上下文窗口是一种公共物品。技能与 Claude 需要的其他所有内容共享上下文窗口：系统提示、对话历史记录、其他技能的元数据以及实际的用户请求。

**默认假设：克劳德已经非常聪明。** 仅添加克劳德尚未拥有的上下文。挑战每一条信息：“克劳德真的需要这个解释吗？”和“这一段是否证明其代币成本合理？”

比起冗长的解释，更喜欢简洁的例子。

### 设置适当的自由度

将特异性水平与任务的脆弱性和可变性相匹配：

**高自由度（基于文本的说明）**：当多种方法有效、决策取决于上下文或启发式指导方法时使用。

**中等自由度（伪代码或带参数的脚本）**：当存在首选模式、某些变化可接受或配置影响行为时使用。

**低自由度（特定脚本，很少参数）**：当操作脆弱且容易出错、一致性至关重要或必须遵循特定顺序时使用。

将克劳德视为探索一条路径：一座带有悬崖的窄桥需要特定的护栏（低自由度），而开阔的场地允许许多路线（高自由度）。

### 技能剖析

每个技能都包含必需的 SKILL.md 文件和可选的捆绑资源：

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter metadata (required)
│   │   ├── name: (required)
│   │   └── description: (required)
│   └── Markdown instructions (required)
└── Bundled Resources (optional)
    ├── scripts/          - Executable code (Python/Bash/etc.)
    ├── references/       - Documentation intended to be loaded into context as needed
    └── assets/           - Files used in output (templates, icons, fonts, etc.)
```

#### 技能.md（必填）

每个 SKILL.md 都包含：

- **Frontmatter** (YAML)：包含 `name` 和 `description` 字段。这些是克劳德阅读以确定何时使用该技能的唯一字段，因此清楚而全面地描述该技能是什么以及何时应该使用它非常重要。
- **正文**（Markdown）：使用该技能的说明和指导。仅在技能触发后加载（如果有的话）。

#### 捆绑资源（可选）

##### 脚本 (`scripts/`)

用于需要确定性可靠性或重复重写的任务的可执行代码（Python/Bash/等）。

- **何时包含**：当重复重写相同的代码或需要确定性可靠性时
- **示例**：`scripts/rotate_pdf.py` 用于 PDF 旋转任务
- **优点**：代币高效，确定性，可以在不加载到上下文的情况下执行
- **注意**：克劳德可能仍需要阅读脚本以进行修补或特定于环境的调整

##### 参考文献 (`references/`)

旨在根据需要将文档和参考材料加载到上下文中，以告知 Claude 的流程和想法。

- **何时包含**：克劳德在工作时应参考的文档
- **示例**：`references/finance.md` 用于财务模式、`references/mnda.md` 用于公司 NDA 模板、`references/policies.md` 用于公司政策、`references/api_docs.md` 用于 API 规范
- **用例**：数据库模式、API 文档、领域知识、公司政策、详细的工作流程指南
- **优点**：保持 SKILL.md 的精简，仅在 Claude 确定需要时加载
- **最佳实践**：如果文件很大（>10k 字），请在 SKILL.md 中包含 grep 搜索模式
- **避免重复**：信息应存在于 SKILL.md 或参考文件中，而不是两者中。

##### 资产 (`assets/`)

文件不打算加载到上下文中，而是在 Claude 生成的输出中使用。

- **何时包含**：当技能需要在最终输出中使用的文件时
- **示例**：`assets/logo.png` 用于品牌资产，`assets/slides.pptx` 用于 PowerPoint 模板
- **用例**：模板、图像、图标、样板代码、字体、示例文档

### 渐进式披露设计原则

技能使用三级加载系统来有效管理上下文：

1. **元数据（名称 + 描述）** - 始终在上下文中（约 100 个单词）
2. **SKILL.md body** - 技能触发时（<5k 字）
3. **捆绑资源** - 根据 Claude 的需要

将 SKILL.md 正文保持在 500 行以下，以尽量减少上下文膨胀。

## 技能创建过程

技能创建涉及以下步骤：

1.通过具体例子理解技巧
2.规划可重用的技能内容（脚本、参考文献、资产）
3.初始化技能（运行init_skill.py）
4.编辑技能（实现资源并编写SKILL.md）
5. 打包技能（运行package_skill.py）
6.根据实际使用情况进行迭代

### 第三步：初始化技能

从头开始创建新技能时，请始终运行 `init_skill.py` 脚本：

```bash
scripts/init_skill.py <skill-name> --path <output-directory>
```

### 第 4 步：编辑技能

根据您的技能需求查阅这些有用的指南：

- **多步骤流程**：有关顺序工作流程和条件逻辑，请参阅references/workflows.md
- **特定输出格式或质量标准**：有关模板和示例模式，请参阅references/output-patterns.md

### 第 5 步：打包技能

```bash
scripts/package_skill.py <path/to/skill-folder>
```

打包脚本验证并创建用于分发的 .skill 文件。
文件：参考文献/workflows.md
# 工作流程模式

## 顺序工作流程

对于复杂的任务，将操作分解为清晰、连续的步骤。向 Claude 概述 SKILL.md 开始的过程通常会很有帮助：

```markdown
Filling a PDF form involves these steps:

1. Analyze the form (run analyze_form.py)
2. Create field mapping (edit fields.json)
3. Validate mapping (run validate_fields.py)
4. Fill the form (run fill_form.py)
5. Verify output (run verify_output.py)
```

## 条件工作流程

对于具有分支逻辑的任务，引导 Claude 通过决策点：

```markdown
1. Determine the modification type:
   **Creating new content?** → Follow "Creation workflow" below
   **Editing existing content?** → Follow "Editing workflow" below

2. Creation workflow: [steps]
3. Editing workflow: [steps]
```
文件：参考文献/输出模式.md
# 输出模式

当技能需要产生一致、高质量的输出时，可以使用这些模式。

## 模板模式

提供输出格式的模板。将严格程度与您的需求相匹配。

**对于严格要求（如 API 响应或数据格式）：**

```markdown
## Report structure

ALWAYS use this exact template structure:

# [Analysis Title]

## Executive summary
[One-paragraph overview of key findings]

## Key findings
- Finding 1 with supporting data
- Finding 2 with supporting data
- Finding 3 with supporting data

## Recommendations
1. Specific actionable recommendation
2. Specific actionable recommendation
```

**对于灵活的指导（当适应有用时）：**

```markdown
## Report structure

Here is a sensible default format, but use your best judgment:

# [Analysis Title]

## Executive summary
[Overview]

## Key findings
[Adapt sections based on what you discover]

## Recommendations
[Tailor to the specific context]

Adjust sections as needed for the specific analysis type.
```

## 示例模式

对于输出质量取决于查看示例的技能，请提供输入/输出对：

```markdown
## Commit message format

Generate commit messages following these examples:

**Example 1:**
Input: Added user authentication with JWT tokens
Output:
```
feat(auth)：实现基于 JWT 的身份验证

添加登录端点和令牌验证中间件
```

**Example 2:**
Input: Fixed bug where dates displayed incorrectly in reports
Output:
```
修复（报告）：时区转换中的正确日期格式

在报告生成过程中一致使用 UTC 时间戳
```

Follow this style: type(scope): brief description, then detailed explanation.
```

与单独的描述相比，示例可以帮助克劳德更清楚地理解所需的风格和详细程度。
FILE:scripts/quick_validate.py
#!/usr/bin/env python3
”“”
技能快速验证脚本 - 最小版本
”“”

导入系统
导入操作系统
进口再
导入yaml
从 pathlib 导入路径

def validate_skill(skill_path):
    """技能的基本验证"""
    skill_path = Path(skill_path)

    # 检查SKILL.md是否存在
    skill_md = skill_path / 'SKILL.md'
    如果不是 Skill_md.exists():
        return False, "SKILL.md not found"

    # Read and validate frontmatter
    内容 = Skill_md.read_text()
    如果不是 content.startswith('---'):
        return False, "No YAML frontmatter found"

    # 提取前题
    match = re.match(r'^---\n(.*?)\n---', 内容, re.DOTALL)
    如果不匹配：
        返回 False，“无效的 frontmatter 格式”

    frontmatter_text = match.group(1)

    # 解析 YAML frontmatter
    尝试：
        frontmatter = yaml.safe_load(frontmatter_text)
        如果不是 isinstance(frontmatter, dict):
            return False,“Frontmatter 必须是 YAML 字典”
    除了 yaml.YAMLError 为 e：
        return False, f“frontmatter 中的 YAML 无效：{e}”

    # 定义允许的属性
    ALLOWED_PROPERTIES = {'名称', '描述', '许可证', '允许的工具', '元数据'}

    # 检查意外属性（不包括元数据下的嵌套键）
    unexpected_keys = set(frontmatter.keys()) - 允许的属性
    如果意外的键：
        返回假，（
            f“SKILL.md frontmatter 中出现意外的键：{', '.join(sorted(unexpected_keys))}。”
            f“允许的属性是：{'，'.join（已排序（ALLOWED_PROPERTIES））}”
        ）

    # 检查必填字段
    如果“姓名”不在 frontmatter 中：
        返回 False，“frontmatter 中缺少‘姓名’”
    如果“描述”不在 frontmatter 中：
        返回 False，“frontmatter 中缺少‘描述’”

    # 提取名称进行验证
    名称 = frontmatter.get('名称', '')
    如果不是 isinstance(name, str):
        return False, f"名称必须是字符串，得到 {type(name).__name__}"
    名称 = 名称.strip()
    如果名称：
        # 检查命名约定（连字符大小写：小写字母加连字符）
        如果不是 re.match(r'^[a-z0-9-]+$', name):
            return False, f"名称 '{name}' 应该是连字符（仅限小写字母、数字和连字符）"
        如果名称中包含 name.startswith('-') 或 name.endswith('-') 或 '--'：
            return False, f"名称 '{name}' 不能以连字符开头/结尾或包含连续的连字符"
        # 检查名称长度（每个规范最多 64 个字符）
        如果 len(名称) > 64:
            return False, f“名称太长（{len(name)} 个字符）。最多 64 个字符。”

    # 提取并验证描述
    描述 = frontmatter.get('描述', '')
    如果不是 isinstance(描述, str):
        return False, f"描述必须是字符串，得到 {type(description).__name__}"
    描述 = 描述.strip()
    如果描述：
        # 检查尖括号
        如果描述中包含“<”或描述中包含“>”：
            return False, “描述不能包含尖括号（< 或 >）”
        # 检查描述长度（每个规范最多 1024 个字符）
        如果长度（描述）> 1024：
            return False, f“描述太长（{len(description)} 个字符）。最多为 1024 个字符。”

    return True, "技能有效！"

如果 __name__ == "__main__":
    如果 len(sys.argv) != 2:
        print("用法：python Quick_validate.py <skill_directory>")
        系统退出(1)
    
    有效，消息 = validate_skill(sys.argv[1])
    打印（消息）
    sys.exit(如果有效则为0，否则为1)
文件：脚本/init_skill.py
#!/usr/bin/env python3
”“”
技能初始化器 - 从模板创建新技能

用途：
    init_skill.py <技能名称> --path <路径>

示例：
    init_skill.py my-new-skill --path 技能/公共
    init_skill.py my-api-helper --路径技能/私有
    init_skill.py 自定义技能 --path /custom/location
”“”

导入系统
从 pathlib 导入路径


技能模板 = """---
名称：{技能名称}
描述：[TODO：关于该技能的作用以及何时使用它的完整且信息丰富的解释。包括何时使用此技能 - 特定场景、文件类型或触发该技能的任务。]
---

# {技能名称}

## 概述

[TODO：用 1-2 句话解释该技能的作用]

## 资源

此技能包括演示如何组织不同类型的捆绑资源的示例资源目录：

### 脚本/
可以直接运行以执行特定操作的可执行代码（Python/Bash/等）。

###参考资料/
旨在加载上下文的文档和参考材料，以告知 Claude 的流程和想法。

###资产/
文件不打算加载到上下文中，而是在 Claude 生成的输出中使用。

---

**任何不需要的目录都可以删除。** 并非每个技能都需要所有三种类型的资源。
”“”

EXAMPLE_SCRIPT = '''#!/usr/bin/env python3
”“”
{skill_name} 的示例帮助程序脚本

这是一个可以直接执行的占位脚本。
替换为实际实现，如果不需要则删除。
”“”

def main():
    print("这是 {skill_name} 的示例脚本")
    # TODO：在此处添加实际的脚本逻辑

如果 __name__ == "__main__":
    主要()
'''

EXAMPLE_REFERENCE = """# {skill_title} 的参考文档

这是详细参考文档的占位符。
替换为实际参考内容，如果不需要则删除。
”“”

EXAMPLE_ASSET = """# 资源文件示例

该占位符表示资产文件的存储位置。
替换为实际资源文件（模板、图像、字体等），或者如果不需要则删除。
”“”


def title_case_skill_name(技能名称):
    """将连字符的技能名称转换为标题大小写以进行显示。"""
    return ' '.join(word.capitalize() for word in Skill_name.split('-'))


def init_skill(技能名称, 路径):
    """使用模板 SKILL.md 初始化一个新的技能目录。"""
    技能目录 = 路径(路径).resolve() / 技能名称

    如果 Skill_dir.exists():
        print(f"❌错误：技能目录已存在：{skill_dir}")
        返回无

    尝试：
        Skill_dir.mkdir（父母= True，exist_ok = False）
        print(f"✅ 创建技能目录：{skill_dir}")
    除了异常 e：
        print(f"❌创建目录时出错：{e}")
        返回无

    技能标题 = 标题_案例_技能名称(技能名称)
    技能内容 = SKILL_TEMPLATE.format(技能名称=技能名称, 技能标题=技能标题)

    Skill_md_path = Skill_dir / 'SKILL.md'
    尝试：
        Skill_md_path.write_text(skill_content)
        print("✅ 创建了 SKILL.md")
    除了异常 e：
        print(f"❌ 创建 SKILL.md 时出错：{e}")
        返回无

尝试：
        脚本目录 = 技能目录 / '脚本'
        script_dir.mkdir(exist_ok=True)
        example_script = script_dir / 'example.py'
        example_script.write_text(EXAMPLE_SCRIPT.format(技能名称=技能名称))
        example_script.chmod(0o755)
        print("✅ 创建脚本/example.py")

        References_dir = Skill_dir / '参考资料'
        references_dir.mkdir(exist_ok=True)
        example_reference =references_dir / 'api_reference.md'
        example_reference.write_text(EXAMPLE_REFERENCE.format(skill_title=skill_title))
        print("✅ 创建了引用/api_reference.md")

        资产目录 = 技能目录 / '资产'
        asset_dir.mkdir(exist_ok=True)
        example_asset = 资产目录 / 'example_asset.txt'
        example_asset.write_text(EXAMPLE_ASSET)
        print("✅ 创建了 asset/example_asset.txt")
    除了异常 e：
        print(f"❌创建资源目录时出错：{e}")
        返回无

    print(f"\n✅ 技能 '{skill_name}' 在 {skill_dir} 成功初始化")
    返回技能目录


def main():
    如果 len(sys.argv) < 4 或 sys.argv[2] != '--path':
        print("用法：init_skill.py <技能名称> --path <路径>")
        系统退出(1)

    技能名称 = sys.argv[1]
    路径 = sys.argv[3]

    print(f"🚀 初始化技能：{skill_name}")
    print(f"位置：{路径}")
    打印（）

    结果 = init_skill(技能名称, 路径)
    sys.exit(如果结果为0，否则为1)


如果 __name__ == "__main__":
    主要()
文件：脚本/package_skill.py
#!/usr/bin/env python3
”“”
Skill Packager - 创建技能文件夹的可分发 .skill 文件

用途：
    python utils/package_skill.py <path/to/skill-folder> [输出目录]

示例：
    python utils/package_skill.py 技能/public/my-skill
    python utils/package_skill.py 技能/public/my-skill ./dist
”“”

导入系统
导入压缩文件
从 pathlib 导入路径
从快速验证导入验证技能


def package_skill(skill_path, output_dir=None):
    """将技能文件夹打包成.skill文件。"""
    技能路径 = 路径(技能路径).resolve()

    如果不是 Skill_path.exists():
        print(f"❌错误：找不到技能文件夹：{skill_path}")
        返回无

    如果不是 Skill_path.is_dir():
        print(f"❌错误：路径不是目录：{skill_path}")
        返回无

    Skill_md = Skill_path / "SKILL.md"
    如果不是 Skill_md.exists():
        print(f"❌ 错误：在 {skill_path} 中找不到 SKILL.md")
        返回无

    print("🔍 验证技能...")
    有效，消息 = validate_skill(skill_path)
    如果无效：
        print(f"❌验证失败: {message}")
        print("请在打包前修复验证错误。")
        返回无
    print(f"✅ {消息}\n")

    技能名称 = 技能路径.名称
    如果输出目录：
        输出路径 = 路径(输出目录).resolve()
        output_path.mkdir（父母= True，exist_ok = True）
    其他：
        输出路径 = Path.cwd()

    技能文件名 = 输出路径 / f"{skill_name}.skill"

    尝试：
        将 zipfile.ZipFile(skill_filename, 'w', zipfile.ZIP_DEFLATED) 作为 zipf：
            对于 Skill_path.rglob('*') 中的 file_path：
                如果 file_path.is_file():
                    arcname = file_path.relative_to(skill_path.parent)
                    zipf.write（文件路径，弧名）
                    print(f" 添加：{arcname}")

        print(f"\n✅ 成功将技能打包到：{skill_filename}")
        返回技能文件名

    除了异常 e：
        print(f"❌ 创建 .skill 文件时出错：{e}")
        返回无

def main():
    如果 len(sys.argv) < 2:
        print("用法：python utils/package_skill.py <path/to/skill-folder> [输出目录]")
        系统退出(1)

    技能路径 = sys.argv[1]
    output_dir = sys.argv[2] 如果 len(sys.argv) > 2 否则无

    print(f"📦 打包技能：{skill_path}")
    如果输出目录：
        print(f"输出目录：{output_dir}")
    打印（）

    结果 = package_skill(skill_path, 输出目录)
    sys.exit(如果结果为0，否则为1)


如果 __name__ == "__main__":
    主要()
````

---

## English Original

### Title

Skill Creator

### Description

Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations.

### Prompt

````md
---
name: skill-creator
description: Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations.
license: Complete terms in LICENSE.txt
---

# Skill Creator

This skill provides guidance for creating effective skills.

## About Skills

Skills are modular, self-contained packages that extend Claude's capabilities by providing
specialized knowledge, workflows, and tools. Think of them as "onboarding guides" for specific
domains or tasks—they transform Claude from a general-purpose agent into a specialized agent
equipped with procedural knowledge that no model can fully possess.

### What Skills Provide

1. Specialized workflows - Multi-step procedures for specific domains
2. Tool integrations - Instructions for working with specific file formats or APIs
3. Domain expertise - Company-specific knowledge, schemas, business logic
4. Bundled resources - Scripts, references, and assets for complex and repetitive tasks

## Core Principles

### Concise is Key

The context window is a public good. Skills share the context window with everything else Claude needs: system prompt, conversation history, other Skills' metadata, and the actual user request.

**Default assumption: Claude is already very smart.** Only add context Claude doesn't already have. Challenge each piece of information: "Does Claude really need this explanation?" and "Does this paragraph justify its token cost?"

Prefer concise examples over verbose explanations.

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability:

**High freedom (text-based instructions)**: Use when multiple approaches are valid, decisions depend on context, or heuristics guide the approach.

**Medium freedom (pseudocode or scripts with parameters)**: Use when a preferred pattern exists, some variation is acceptable, or configuration affects behavior.

**Low freedom (specific scripts, few parameters)**: Use when operations are fragile and error-prone, consistency is critical, or a specific sequence must be followed.

Think of Claude as exploring a path: a narrow bridge with cliffs needs specific guardrails (low freedom), while an open field allows many routes (high freedom).

### Anatomy of a Skill

Every skill consists of a required SKILL.md file and optional bundled resources:

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter metadata (required)
│   │   ├── name: (required)
│   │   └── description: (required)
│   └── Markdown instructions (required)
└── Bundled Resources (optional)
    ├── scripts/          - Executable code (Python/Bash/etc.)
    ├── references/       - Documentation intended to be loaded into context as needed
    └── assets/           - Files used in output (templates, icons, fonts, etc.)
```

#### SKILL.md (required)

Every SKILL.md consists of:

- **Frontmatter** (YAML): Contains `name` and `description` fields. These are the only fields that Claude reads to determine when the skill gets used, thus it is very important to be clear and comprehensive in describing what the skill is, and when it should be used.
- **Body** (Markdown): Instructions and guidance for using the skill. Only loaded AFTER the skill triggers (if at all).

#### Bundled Resources (optional)

##### Scripts (`scripts/`)

Executable code (Python/Bash/etc.) for tasks that require deterministic reliability or are repeatedly rewritten.

- **When to include**: When the same code is being rewritten repeatedly or deterministic reliability is needed
- **Example**: `scripts/rotate_pdf.py` for PDF rotation tasks
- **Benefits**: Token efficient, deterministic, may be executed without loading into context
- **Note**: Scripts may still need to be read by Claude for patching or environment-specific adjustments

##### References (`references/`)

Documentation and reference material intended to be loaded as needed into context to inform Claude's process and thinking.

- **When to include**: For documentation that Claude should reference while working
- **Examples**: `references/finance.md` for financial schemas, `references/mnda.md` for company NDA template, `references/policies.md` for company policies, `references/api_docs.md` for API specifications
- **Use cases**: Database schemas, API documentation, domain knowledge, company policies, detailed workflow guides
- **Benefits**: Keeps SKILL.md lean, loaded only when Claude determines it's needed
- **Best practice**: If files are large (>10k words), include grep search patterns in SKILL.md
- **Avoid duplication**: Information should live in either SKILL.md or references files, not both.

##### Assets (`assets/`)

Files not intended to be loaded into context, but rather used within the output Claude produces.

- **When to include**: When the skill needs files that will be used in the final output
- **Examples**: `assets/logo.png` for brand assets, `assets/slides.pptx` for PowerPoint templates
- **Use cases**: Templates, images, icons, boilerplate code, fonts, sample documents

### Progressive Disclosure Design Principle

Skills use a three-level loading system to manage context efficiently:

1. **Metadata (name + description)** - Always in context (~100 words)
2. **SKILL.md body** - When skill triggers (<5k words)
3. **Bundled resources** - As needed by Claude

Keep SKILL.md body to the essentials and under 500 lines to minimize context bloat.

## Skill Creation Process

Skill creation involves these steps:

1. Understand the skill with concrete examples
2. Plan reusable skill contents (scripts, references, assets)
3. Initialize the skill (run init_skill.py)
4. Edit the skill (implement resources and write SKILL.md)
5. Package the skill (run package_skill.py)
6. Iterate based on real usage

### Step 3: Initializing the Skill

When creating a new skill from scratch, always run the `init_skill.py` script:

```bash
scripts/init_skill.py <skill-name> --path <output-directory>
```

### Step 4: Edit the Skill

Consult these helpful guides based on your skill's needs:

- **Multi-step processes**: See references/workflows.md for sequential workflows and conditional logic
- **Specific output formats or quality standards**: See references/output-patterns.md for template and example patterns

### Step 5: Packaging a Skill

```bash
scripts/package_skill.py <path/to/skill-folder>
```

The packaging script validates and creates a .skill file for distribution.
FILE:references/workflows.md
# Workflow Patterns

## Sequential Workflows

For complex tasks, break operations into clear, sequential steps. It is often helpful to give Claude an overview of the process towards the beginning of SKILL.md:

```markdown
Filling a PDF form involves these steps:

1. Analyze the form (run analyze_form.py)
2. Create field mapping (edit fields.json)
3. Validate mapping (run validate_fields.py)
4. Fill the form (run fill_form.py)
5. Verify output (run verify_output.py)
```

## Conditional Workflows

For tasks with branching logic, guide Claude through decision points:

```markdown
1. Determine the modification type:
   **Creating new content?** → Follow "Creation workflow" below
   **Editing existing content?** → Follow "Editing workflow" below

2. Creation workflow: [steps]
3. Editing workflow: [steps]
```
FILE:references/output-patterns.md
# Output Patterns

Use these patterns when skills need to produce consistent, high-quality output.

## Template Pattern

Provide templates for output format. Match the level of strictness to your needs.

**For strict requirements (like API responses or data formats):**

```markdown
## Report structure

ALWAYS use this exact template structure:

# [Analysis Title]

## Executive summary
[One-paragraph overview of key findings]

## Key findings
- Finding 1 with supporting data
- Finding 2 with supporting data
- Finding 3 with supporting data

## Recommendations
1. Specific actionable recommendation
2. Specific actionable recommendation
```

**For flexible guidance (when adaptation is useful):**

```markdown
## Report structure

Here is a sensible default format, but use your best judgment:

# [Analysis Title]

## Executive summary
[Overview]

## Key findings
[Adapt sections based on what you discover]

## Recommendations
[Tailor to the specific context]

Adjust sections as needed for the specific analysis type.
```

## Examples Pattern

For skills where output quality depends on seeing examples, provide input/output pairs:

```markdown
## Commit message format

Generate commit messages following these examples:

**Example 1:**
Input: Added user authentication with JWT tokens
Output:
```
feat(auth): implement JWT-based authentication

Add login endpoint and token validation middleware
```

**Example 2:**
Input: Fixed bug where dates displayed incorrectly in reports
Output:
```
fix(reports): correct date formatting in timezone conversion

Use UTC timestamps consistently across report generation
```

Follow this style: type(scope): brief description, then detailed explanation.
```

Examples help Claude understand the desired style and level of detail more clearly than descriptions alone.
FILE:scripts/quick_validate.py
#!/usr/bin/env python3
"""
Quick validation script for skills - minimal version
"""

import sys
import os
import re
import yaml
from pathlib import Path

def validate_skill(skill_path):
    """Basic validation of a skill"""
    skill_path = Path(skill_path)

    # Check SKILL.md exists
    skill_md = skill_path / 'SKILL.md'
    if not skill_md.exists():
        return False, "SKILL.md not found"

    # Read and validate frontmatter
    content = skill_md.read_text()
    if not content.startswith('---'):
        return False, "No YAML frontmatter found"

    # Extract frontmatter
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return False, "Invalid frontmatter format"

    frontmatter_text = match.group(1)

    # Parse YAML frontmatter
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        if not isinstance(frontmatter, dict):
            return False, "Frontmatter must be a YAML dictionary"
    except yaml.YAMLError as e:
        return False, f"Invalid YAML in frontmatter: {e}"

    # Define allowed properties
    ALLOWED_PROPERTIES = {'name', 'description', 'license', 'allowed-tools', 'metadata'}

    # Check for unexpected properties (excluding nested keys under metadata)
    unexpected_keys = set(frontmatter.keys()) - ALLOWED_PROPERTIES
    if unexpected_keys:
        return False, (
            f"Unexpected key(s) in SKILL.md frontmatter: {', '.join(sorted(unexpected_keys))}. "
            f"Allowed properties are: {', '.join(sorted(ALLOWED_PROPERTIES))}"
        )

    # Check required fields
    if 'name' not in frontmatter:
        return False, "Missing 'name' in frontmatter"
    if 'description' not in frontmatter:
        return False, "Missing 'description' in frontmatter"

    # Extract name for validation
    name = frontmatter.get('name', '')
    if not isinstance(name, str):
        return False, f"Name must be a string, got {type(name).__name__}"
    name = name.strip()
    if name:
        # Check naming convention (hyphen-case: lowercase with hyphens)
        if not re.match(r'^[a-z0-9-]+$', name):
            return False, f"Name '{name}' should be hyphen-case (lowercase letters, digits, and hyphens only)"
        if name.startswith('-') or name.endswith('-') or '--' in name:
            return False, f"Name '{name}' cannot start/end with hyphen or contain consecutive hyphens"
        # Check name length (max 64 characters per spec)
        if len(name) > 64:
            return False, f"Name is too long ({len(name)} characters). Maximum is 64 characters."

    # Extract and validate description
    description = frontmatter.get('description', '')
    if not isinstance(description, str):
        return False, f"Description must be a string, got {type(description).__name__}"
    description = description.strip()
    if description:
        # Check for angle brackets
        if '<' in description or '>' in description:
            return False, "Description cannot contain angle brackets (< or >)"
        # Check description length (max 1024 characters per spec)
        if len(description) > 1024:
            return False, f"Description is too long ({len(description)} characters). Maximum is 1024 characters."

    return True, "Skill is valid!"

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python quick_validate.py <skill_directory>")
        sys.exit(1)
    
    valid, message = validate_skill(sys.argv[1])
    print(message)
    sys.exit(0 if valid else 1)
FILE:scripts/init_skill.py
#!/usr/bin/env python3
"""
Skill Initializer - Creates a new skill from template

Usage:
    init_skill.py <skill-name> --path <path>

Examples:
    init_skill.py my-new-skill --path skills/public
    init_skill.py my-api-helper --path skills/private
    init_skill.py custom-skill --path /custom/location
"""

import sys
from pathlib import Path


SKILL_TEMPLATE = """---
name: {skill_name}
description: [TODO: Complete and informative explanation of what the skill does and when to use it. Include WHEN to use this skill - specific scenarios, file types, or tasks that trigger it.]
---

# {skill_title}

## Overview

[TODO: 1-2 sentences explaining what this skill enables]

## Resources

This skill includes example resource directories that demonstrate how to organize different types of bundled resources:

### scripts/
Executable code (Python/Bash/etc.) that can be run directly to perform specific operations.

### references/
Documentation and reference material intended to be loaded into context to inform Claude's process and thinking.

### assets/
Files not intended to be loaded into context, but rather used within the output Claude produces.

---

**Any unneeded directories can be deleted.** Not every skill requires all three types of resources.
"""

EXAMPLE_SCRIPT = '''#!/usr/bin/env python3
"""
Example helper script for {skill_name}

This is a placeholder script that can be executed directly.
Replace with actual implementation or delete if not needed.
"""

def main():
    print("This is an example script for {skill_name}")
    # TODO: Add actual script logic here

if __name__ == "__main__":
    main()
'''

EXAMPLE_REFERENCE = """# Reference Documentation for {skill_title}

This is a placeholder for detailed reference documentation.
Replace with actual reference content or delete if not needed.
"""

EXAMPLE_ASSET = """# Example Asset File

This placeholder represents where asset files would be stored.
Replace with actual asset files (templates, images, fonts, etc.) or delete if not needed.
"""


def title_case_skill_name(skill_name):
    """Convert hyphenated skill name to Title Case for display."""
    return ' '.join(word.capitalize() for word in skill_name.split('-'))


def init_skill(skill_name, path):
    """Initialize a new skill directory with template SKILL.md."""
    skill_dir = Path(path).resolve() / skill_name

    if skill_dir.exists():
        print(f"❌ Error: Skill directory already exists: {skill_dir}")
        return None

    try:
        skill_dir.mkdir(parents=True, exist_ok=False)
        print(f"✅ Created skill directory: {skill_dir}")
    except Exception as e:
        print(f"❌ Error creating directory: {e}")
        return None

    skill_title = title_case_skill_name(skill_name)
    skill_content = SKILL_TEMPLATE.format(skill_name=skill_name, skill_title=skill_title)

    skill_md_path = skill_dir / 'SKILL.md'
    try:
        skill_md_path.write_text(skill_content)
        print("✅ Created SKILL.md")
    except Exception as e:
        print(f"❌ Error creating SKILL.md: {e}")
        return None

    try:
        scripts_dir = skill_dir / 'scripts'
        scripts_dir.mkdir(exist_ok=True)
        example_script = scripts_dir / 'example.py'
        example_script.write_text(EXAMPLE_SCRIPT.format(skill_name=skill_name))
        example_script.chmod(0o755)
        print("✅ Created scripts/example.py")

        references_dir = skill_dir / 'references'
        references_dir.mkdir(exist_ok=True)
        example_reference = references_dir / 'api_reference.md'
        example_reference.write_text(EXAMPLE_REFERENCE.format(skill_title=skill_title))
        print("✅ Created references/api_reference.md")

        assets_dir = skill_dir / 'assets'
        assets_dir.mkdir(exist_ok=True)
        example_asset = assets_dir / 'example_asset.txt'
        example_asset.write_text(EXAMPLE_ASSET)
        print("✅ Created assets/example_asset.txt")
    except Exception as e:
        print(f"❌ Error creating resource directories: {e}")
        return None

    print(f"\n✅ Skill '{skill_name}' initialized successfully at {skill_dir}")
    return skill_dir


def main():
    if len(sys.argv) < 4 or sys.argv[2] != '--path':
        print("Usage: init_skill.py <skill-name> --path <path>")
        sys.exit(1)

    skill_name = sys.argv[1]
    path = sys.argv[3]

    print(f"🚀 Initializing skill: {skill_name}")
    print(f"   Location: {path}")
    print()

    result = init_skill(skill_name, path)
    sys.exit(0 if result else 1)


if __name__ == "__main__":
    main()
FILE:scripts/package_skill.py
#!/usr/bin/env python3
"""
Skill Packager - Creates a distributable .skill file of a skill folder

Usage:
    python utils/package_skill.py <path/to/skill-folder> [output-directory]

Example:
    python utils/package_skill.py skills/public/my-skill
    python utils/package_skill.py skills/public/my-skill ./dist
"""

import sys
import zipfile
from pathlib import Path
from quick_validate import validate_skill


def package_skill(skill_path, output_dir=None):
    """Package a skill folder into a .skill file."""
    skill_path = Path(skill_path).resolve()

    if not skill_path.exists():
        print(f"❌ Error: Skill folder not found: {skill_path}")
        return None

    if not skill_path.is_dir():
        print(f"❌ Error: Path is not a directory: {skill_path}")
        return None

    skill_md = skill_path / "SKILL.md"
    if not skill_md.exists():
        print(f"❌ Error: SKILL.md not found in {skill_path}")
        return None

    print("🔍 Validating skill...")
    valid, message = validate_skill(skill_path)
    if not valid:
        print(f"❌ Validation failed: {message}")
        print("   Please fix the validation errors before packaging.")
        return None
    print(f"✅ {message}\n")

    skill_name = skill_path.name
    if output_dir:
        output_path = Path(output_dir).resolve()
        output_path.mkdir(parents=True, exist_ok=True)
    else:
        output_path = Path.cwd()

    skill_filename = output_path / f"{skill_name}.skill"

    try:
        with zipfile.ZipFile(skill_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for file_path in skill_path.rglob('*'):
                if file_path.is_file():
                    arcname = file_path.relative_to(skill_path.parent)
                    zipf.write(file_path, arcname)
                    print(f"  Added: {arcname}")

        print(f"\n✅ Successfully packaged skill to: {skill_filename}")
        return skill_filename

    except Exception as e:
        print(f"❌ Error creating .skill file: {e}")
        return None


def main():
    if len(sys.argv) < 2:
        print("Usage: python utils/package_skill.py <path/to/skill-folder> [output-directory]")
        sys.exit(1)

    skill_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None

    print(f"📦 Packaging skill: {skill_path}")
    if output_dir:
        print(f"   Output directory: {output_dir}")
    print()

    result = package_skill(skill_path, output_dir)
    sys.exit(0 if result else 1)


if __name__ == "__main__":
    main()

````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [skill-creator](https://prompts.chat/prompts/skill-creator) |
| Category | Uncategorized (`uncategorized`) |
| Type | `SKILL` |
| Tags | creator, Agent, meta, Skill |
| Contributors | f |
| Updated At | 2026-01-15T15:53:15.241Z |
