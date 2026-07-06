# commit message准备

## 中文说明

用于让 AI 围绕「commit message准备」执行编程与技术实现任务。它会保留原始角色、任务目标、约束条件和输出要求，适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 围绕 Git 等主题生成结构化结果

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

````md
# AI 语言模型的 Git 提交指南

## 核心原则

1. **遵循常规提交** (https://www.conventionalcommits.org/)
2. **简洁、准确** - 没有华丽的语言、最高级或不必要的形容词
3. **关注更改内容，而不是其工作原理** - 描述更改，而不是实施细节
4. **每次提交一个逻辑更改** - 将相关但独立的更改拆分为单独的提交
5. **以祈使语气写作** - “添加功能”而不是“添加功能”或“添加功能”
6. **始终包含正文** - 切勿使用仅主题提交

## commit message结构

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型（必填）

- `feat`：新功能
- `fix`：bug修复
- `refactor`：代码更改既不修复bug也不添加功能
- `perf`：性能改进
- `style`：代码样式更改（格式、缺少分号等）
- `test`：添加或更新测试
- `docs`：文档更改
- `build`：构建系统或外部依赖项（npm、gradle、Xcode、SPM）
- `ci`：CI/CD 管道更改
- `chore`：日常任务（gitignore、配置文件、维护）
- `revert`：恢复先前的提交

### 范围（可选但推荐）

表示变化区域：`auth`、`ui`、`api`、`db`、`i18n`、`analytics`等。

### 主题（必填）

- **最多 50 个字符**
- **第一个字母小写**（除非它是专有名词）
- **末尾没有句号**
- **祈使语气**：“添加”而不是“添加”或“添加”
- **具体**：“添加邮件验证”而不是“添加验证”

### 正文（必填）

- **始终包含正文** - 至少 1 句话
- **解释发生了什么变化以及原因** - 提供背景信息
- **72 个字符换行**
- **用空行与主题分开**
- **使用项目符号进行多项更改**（使用 `-` 或 `*`）
- **参考问题编号**（如果适用）
- **在相关时提及特定的类/函数/文件**

### 页脚（可选）

- **重大变更**：`BREAKING CHANGE: <description>`
- **问题参考**：`Closes #123`、`Fixes #456`
- **合著者**：`Co-Authored-By: Name <email>`

## 禁用单词和短语

**永远不要使用这些词**（它们含糊、主观或夸大）：

❌ 全面
❌ 坚固耐用
❌增强型
❌ 改进（除非你指定改进了哪些指标）
❌ 优化（除非你指定改进了哪些指标）
❌更好
❌ 太棒了
❌ 太棒了
❌ 太棒了
❌ 功能强大
❌ 无缝
❌ 优雅
❌干净
❌ 现代
❌ 高级

## 好与坏的例子

### ❌ 不好（没有身体）
```
feat(auth): add email/password login
```

**问题：**
- 无正文
- 没有解释实际实施的内容

### ❌不好（模糊的身体）
```
feat: Add awesome new login feature

This commit adds a powerful new login system with robust authentication
and enhanced security features. The implementation is clean and modern.
```

**问题：**
- 主观形容词（真棒、强大、稳健、增强、干净、现代）
- 没有具体说明添加了什么
- 身体描述的是质量，而不是功能

### ✅ 好
```
feat(auth): add email/password login with Firebase

Implement login flow using Firebase Authentication. Users can now sign in
with email and password. Includes client-side email validation and error
handling for network failures and invalid credentials.
```

**为什么它好：**
- 提到的具体技术（Firebase）
- 明确范围（授权）
- 正文描述了添加的功能
- 解释bug 处理涵盖的内容

---

### ❌ 不好（没有身体）
```
fix(auth): prevent login button double-tap
```

**问题：**
- 没有正文解释修复问题

### ✅ 好
```
fix(auth): prevent login button double-tap

Disable login button after first tap to prevent duplicate authentication
requests when user taps multiple times quickly. Button re-enables after
authentication completes or fails.
```

**为什么它好：**
- 祈使语气
- 具体问题描述
- 正文解释了问题和解决方法

---

### ❌ 不好
```
refactor(auth): extract helper functions

Make code better and more maintainable by extracting functions.
```

**问题：**
- 主观（更好，可维护）
- 没有具体说明哪些功能

### ✅ 好
```
refactor(auth): extract helper functions to static struct methods

Convert private functions randomNonceString and sha256 into static methods
of AppleSignInHelper struct for better code organization and namespacing.
```

**为什么它好：**
- 具体变更描述
- 提及确切的函数名称
- 正文解释推理和新结构

---

### ❌ 不好
```
feat(i18n): add localization
```

**问题：**
- 没有身体
- 太模糊了

### ✅ 好
```
feat(i18n): add English and Turkish translations for login screen

Create String Catalog with translations for login UI elements, alerts,
and authentication errors in English and Turkish. Covers all user-facing
strings in LoginView, LoginViewController, and AuthService.
```

**为什么它好：**
- 提到的特定语言
- 清晰的范围（i18n）
- 正文列出了翻译的内容和文件

---

## 多文件提交指南

### 何时拆分提交

在以下情况下将更改拆分为单独的提交：

1. **不同的逻辑关注点**
   - ✅ 提交 1：添加功能
   - ✅ 提交 2：添加功能测试

2. **范围不同**
   - ✅ 提交 1：`feat(ui): add button component`
   - ✅ 提交 2：`feat(api): add endpoint for button action`

3. **不同类型**
   - ✅ 提交 1：`feat(auth): add login form`
   - ✅ 提交 2：`refactor(auth): extract validation logic`

### 何时合并提交

在以下情况下将更改合并到一次提交中：

1. **紧密耦合的变更**
   - ✅ 在同一组件中添加函数及其用法

2. **原子变化**
   - ✅ 跨多个文件refactor函数名称

3. **彼此决裂**
   - ✅ 将接口及其实现添加在一起

## 文件级提交策略

### 示例：登录视图更改

如果LoginView有2个独立的变化：

**更改1：**refactor堆栈视图结构
**变更2：** 添加加载指示器

**分为 2 次提交：**

```
refactor(ui): extract content stack view as property in login view

Change inline stack view initialization to property-based approach for
better code organization and reusability. Moves stack view definition
from setupUI method to lazy property.
```

```
feat(ui): add loading state with activity indicator to login view

Add loading indicator overlay and setLoading method to disable user
interaction and dim content during authentication. Content alpha reduces
to 0.5 when loading.
```

## 本地化特定指南

### ✅ 好
```
feat(i18n): add English and Turkish translations

Create String Catalog (Localizable.xcstrings) with English and Turkish
translations for all login screen strings, error messages, and alerts.
```

```
build(i18n): add Turkish localization support

Add Turkish language to project localizations and enable String Catalog
generation (SWIFT_EMIT_LOC_STRINGS) in build settings for Debug and
Release configurations.
```

```
feat(i18n): localize login view UI elements

Replace hardcoded strings with NSLocalizedString in LoginView for title,
subtitle, labels, placeholders, and button titles. All user-facing text
now supports localization.
```

### ❌ 不好
```
feat: Add comprehensive multi-language support

Add awesome localization system to the app.
```

```
feat: Add translations
```

## 重大变更

引入重大变更时：

```
feat(api): change authentication response structure

Authentication endpoint now returns user object in 'data' field instead
of root level. This allows for additional metadata in the response.

BREAKING CHANGE: Update all API consumers to access response.data.user
instead of response.user.

Migration guide:
- Before: const user = response.user
- After: const user = response.data.user
```

## 提交订单

准备多个提交时，请按逻辑顺序排列它们：

1. **首先依赖**：使用前添加库/配置
2. **基础先于功能**：模型先于视图
3. **Build before source**：在代码更改之前构建配置
4. **实用程序在消费者之前**：助手在使用它们的组件之前

### 订单示例：

```
1. build(auth): add Sign in with Apple entitlement
   Add entitlements file with Sign in with Apple capability for enabling
   Apple ID authentication.

2. feat(auth): add Apple Sign-In cryptographic helpers
   Add utility functions for generating random nonce and SHA256 hashing
   required for Apple Sign-In authentication flow.

3. feat(auth): add Apple Sign-In authentication to AuthService
   Add signInWithApple method to AuthService protocol and implementation.
   Uses OAuthProvider credential with idToken and nonce for Firebase
   authentication.

4. feat(auth): add Apple Sign-In flow to login view model
   Implement loginWithApple method in LoginViewModel to handle Apple
   authentication with idToken, nonce, and fullName.

5. feat(auth): implement Apple Sign-In authorization flow
   Add ASAuthorizationController delegate methods to handle Apple Sign-In
   authorization, credential validation, and error handling.
```

## 特殊情况

### 配置文件

```
chore: ignore GoogleService-Info.plist from version control

Add GoogleService-Info.plist to .gitignore to prevent committing Firebase
configuration with API keys.
```

```
build: update iOS deployment target to 15.0

Change minimum iOS version from 14.0 to 15.0 to support async/await syntax
in authentication flows.
```

```
ci: add GitHub Actions workflow for testing

Add workflow to run unit tests on pull requests. Runs on macOS latest
with Xcode 15.
```

### 文档

```
docs: add API authentication guide

Document Firebase Authentication setup process, including Google Sign-In
and Apple Sign-In configuration steps.
```

```
docs: update README with installation steps

Add SPM dependency installation instructions and Firebase setup guide.
```

### refactor

```
refactor(auth): convert helper functions to static struct methods

Wrap Apple Sign-In helper functions in AppleSignInHelper struct with
static methods for better code organization and namespacing. Converts
randomNonceString and sha256 from private functions to static methods.
```

```
refactor(ui): extract email validation to separate method

Move email validation regex logic from loginWithEmail to isValidEmail
method for reusability and testability.
```

### 性能

**具体说明改进之处：**

❌`perf: optimize login`

✅
```
perf(auth): reduce login request time from 2s to 500ms

Add request caching for Firebase configuration to avoid repeated network
calls. Configuration is now cached after first retrieval.
```

## 正文要求

**正文的最低要求：**

1. **至少1-2个完整的句子**
2. **描述具体更改了什么**
3. **解释为什么需要改变（当不明显时）**
4. **在相关时提及受影响的组件/文件**
5. **包括主题中不明显的技术细节**

### 良好的身体示例：

```
Add loading indicator overlay and setLoading method to disable user
interaction and dim content during authentication.
```

```
Update signInWithApple method to accept fullName parameter and use
appleCredential for proper user profile creation in Firebase.
```

```
Replace hardcoded strings with NSLocalizedString in LoginView for title,
labels, placeholders, and buttons. All UI text now supports English and
Turkish translations.
```

### 身体不好的例子：

❌`Add feature.`（太模糊了）
❌`Updated files.`（不解释什么）
❌`Bug fix.`（没有解释是哪个bug）
❌ `Refactoring.`（不解释refactor了什么）

## AI 模型模板

当 AI 模型被要求创建提交时：

```
1. Read git diff to understand ALL changes
2. Group changes by logical concern
3. Order commits by dependency
4. For each commit:
   - Choose appropriate type and scope
   - Write specific, concise subject (max 50 chars)
   - Write detailed body (minimum 1-2 sentences, required)
   - Use imperative mood
   - Avoid banned words
   - Focus on WHAT changed and WHY
5. Output format:
   ## Commit [N]

   **Title:**
   ```
   类型（范围）：主题
   ```

   **Description:**
   ```
   正文解释发生了什么变化以及原因。提及具体
   受影响的组件、类或方法。提供上下文。
   ```

   **Files to add:**
   ```bash
   git 添加路径/到/文件
   ```
```

## 最终清单

在建议提交之前，请验证：

- [ ] 类型正确（功能/修复/refactor/等）
- [ ] 范围具体且有意义
- [ ] 主语是祈使语气
- [ ] 主题≤50 个字符
- [ ] **存在正文（必需）**
- [ ] **正文至少有 1-2 个完整的句子**
- [ ] 正文解释了什么和为什么
- [ ] 未使用禁用词
- [ ] 没有主观形容词
- [ ] 具体改变了什么
- [ ] 提及受影响的组件/文件
- [ ] 每次提交一个逻辑更改
- [ ] 文件正确分组

---

## commit message示例（完整）

```
feat(auth): add email validation to login form

Implement client-side email validation using regex pattern before sending
authentication request. Validates format matches standard email pattern
(user@domain.ext) and displays error message for invalid inputs. Prevents
unnecessary Firebase API calls for malformed emails.
```

**这有什么好处：**
- 明确的类型和范围
- 具体主题
- 正文解释了验证的作用
- 正文解释了为什么需要它
- 提及好处（防止 API 调用）
- 没有违禁词
- 贯穿始终的命令语气

---

**记住：** 良好的commit message应该允许人们在不查看差异的情况下理解更改。具体、简洁、客观，并始终包含有意义的正文。
````

---

## English Original

### Title

Commit Message Preparation

### Description



### Prompt

````md
# Git Commit Guidelines for AI Language Models

## Core Principles

1. **Follow Conventional Commits** (https://www.conventionalcommits.org/)
2. **Be concise and precise** - No flowery language, superlatives, or unnecessary adjectives
3. **Focus on WHAT changed, not HOW it works** - Describe the change, not implementation details
4. **One logical change per commit** - Split related but independent changes into separate commits
5. **Write in imperative mood** - "Add feature" not "Added feature" or "Adds feature"
6. **Always include body text** - Never use subject-only commits

## Commit Message Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type (Required)

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `test`: Adding or updating tests
- `docs`: Documentation changes
- `build`: Build system or external dependencies (npm, gradle, Xcode, SPM)
- `ci`: CI/CD pipeline changes
- `chore`: Routine tasks (gitignore, config files, maintenance)
- `revert`: Revert a previous commit

### Scope (Optional but Recommended)

Indicates the area of change: `auth`, `ui`, `api`, `db`, `i18n`, `analytics`, etc.

### Subject (Required)

- **Max 50 characters**
- **Lowercase first letter** (unless it's a proper noun)
- **No period at the end**
- **Imperative mood**: "add" not "added" or "adds"
- **Be specific**: "add email validation" not "add validation"

### Body (Required)

- **Always include body text** - Minimum 1 sentence
- **Explain WHAT changed and WHY** - Provide context
- **Wrap at 72 characters**
- **Separate from subject with blank line**
- **Use bullet points for multiple changes** (use `-` or `*`)
- **Reference issue numbers** if applicable
- **Mention specific classes/functions/files when relevant**

### Footer (Optional)

- **Breaking changes**: `BREAKING CHANGE: <description>`
- **Issue references**: `Closes #123`, `Fixes #456`
- **Co-authors**: `Co-Authored-By: Name <email>`

## Banned Words & Phrases

**NEVER use these words** (they're vague, subjective, or exaggerated):

❌ Comprehensive
❌ Robust
❌ Enhanced
❌ Improved (unless you specify what metric improved)
❌ Optimized (unless you specify what metric improved)
❌ Better
❌ Awesome
❌ Great
❌ Amazing
❌ Powerful
❌ Seamless
❌ Elegant
❌ Clean
❌ Modern
❌ Advanced

## Good vs Bad Examples

### ❌ BAD (No body)
```
feat(auth): add email/password login
```

**Problems:**
- No body text
- Doesn't explain what was actually implemented

### ❌ BAD (Vague body)
```
feat: Add awesome new login feature

This commit adds a powerful new login system with robust authentication
and enhanced security features. The implementation is clean and modern.
```

**Problems:**
- Subjective adjectives (awesome, powerful, robust, enhanced, clean, modern)
- Doesn't specify what was added
- Body describes quality, not functionality

### ✅ GOOD
```
feat(auth): add email/password login with Firebase

Implement login flow using Firebase Authentication. Users can now sign in
with email and password. Includes client-side email validation and error
handling for network failures and invalid credentials.
```

**Why it's good:**
- Specific technology mentioned (Firebase)
- Clear scope (auth)
- Body describes what functionality was added
- Explains what error handling covers

---

### ❌ BAD (No body)
```
fix(auth): prevent login button double-tap
```

**Problems:**
- No body text explaining the fix

### ✅ GOOD
```
fix(auth): prevent login button double-tap

Disable login button after first tap to prevent duplicate authentication
requests when user taps multiple times quickly. Button re-enables after
authentication completes or fails.
```

**Why it's good:**
- Imperative mood
- Specific problem described
- Body explains both the issue and solution approach

---

### ❌ BAD
```
refactor(auth): extract helper functions

Make code better and more maintainable by extracting functions.
```

**Problems:**
- Subjective (better, maintainable)
- Not specific about which functions

### ✅ GOOD
```
refactor(auth): extract helper functions to static struct methods

Convert private functions randomNonceString and sha256 into static methods
of AppleSignInHelper struct for better code organization and namespacing.
```

**Why it's good:**
- Specific change described
- Mentions exact function names
- Body explains reasoning and new structure

---

### ❌ BAD
```
feat(i18n): add localization
```

**Problems:**
- No body
- Too vague

### ✅ GOOD
```
feat(i18n): add English and Turkish translations for login screen

Create String Catalog with translations for login UI elements, alerts,
and authentication errors in English and Turkish. Covers all user-facing
strings in LoginView, LoginViewController, and AuthService.
```

**Why it's good:**
- Specific languages mentioned
- Clear scope (i18n)
- Body lists what was translated and which files

---

## Multi-File Commit Guidelines

### When to Split Commits

Split changes into separate commits when:

1. **Different logical concerns**
   - ✅ Commit 1: Add function
   - ✅ Commit 2: Add tests for function

2. **Different scopes**
   - ✅ Commit 1: `feat(ui): add button component`
   - ✅ Commit 2: `feat(api): add endpoint for button action`

3. **Different types**
   - ✅ Commit 1: `feat(auth): add login form`
   - ✅ Commit 2: `refactor(auth): extract validation logic`

### When to Combine Commits

Combine changes in one commit when:

1. **Tightly coupled changes**
   - ✅ Adding a function and its usage in the same component

2. **Atomic change**
   - ✅ Refactoring function name across multiple files

3. **Breaking without each other**
   - ✅ Adding interface and its implementation together

## File-Level Commit Strategy

### Example: LoginView Changes

If LoginView has 2 independent changes:

**Change 1:** Refactor stack view structure
**Change 2:** Add loading indicator

**Split into 2 commits:**

```
refactor(ui): extract content stack view as property in login view

Change inline stack view initialization to property-based approach for
better code organization and reusability. Moves stack view definition
from setupUI method to lazy property.
```

```
feat(ui): add loading state with activity indicator to login view

Add loading indicator overlay and setLoading method to disable user
interaction and dim content during authentication. Content alpha reduces
to 0.5 when loading.
```

## Localization-Specific Guidelines

### ✅ GOOD
```
feat(i18n): add English and Turkish translations

Create String Catalog (Localizable.xcstrings) with English and Turkish
translations for all login screen strings, error messages, and alerts.
```

```
build(i18n): add Turkish localization support

Add Turkish language to project localizations and enable String Catalog
generation (SWIFT_EMIT_LOC_STRINGS) in build settings for Debug and
Release configurations.
```

```
feat(i18n): localize login view UI elements

Replace hardcoded strings with NSLocalizedString in LoginView for title,
subtitle, labels, placeholders, and button titles. All user-facing text
now supports localization.
```

### ❌ BAD
```
feat: Add comprehensive multi-language support

Add awesome localization system to the app.
```

```
feat: Add translations
```

## Breaking Changes

When introducing breaking changes:

```
feat(api): change authentication response structure

Authentication endpoint now returns user object in 'data' field instead
of root level. This allows for additional metadata in the response.

BREAKING CHANGE: Update all API consumers to access response.data.user
instead of response.user.

Migration guide:
- Before: const user = response.user
- After: const user = response.data.user
```

## Commit Ordering

When preparing multiple commits, order them logically:

1. **Dependencies first**: Add libraries/configs before usage
2. **Foundation before features**: Models before views
3. **Build before source**: Build configs before code changes
4. **Utilities before consumers**: Helpers before components that use them

### Example Order:

```
1. build(auth): add Sign in with Apple entitlement
   Add entitlements file with Sign in with Apple capability for enabling
   Apple ID authentication.

2. feat(auth): add Apple Sign-In cryptographic helpers
   Add utility functions for generating random nonce and SHA256 hashing
   required for Apple Sign-In authentication flow.

3. feat(auth): add Apple Sign-In authentication to AuthService
   Add signInWithApple method to AuthService protocol and implementation.
   Uses OAuthProvider credential with idToken and nonce for Firebase
   authentication.

4. feat(auth): add Apple Sign-In flow to login view model
   Implement loginWithApple method in LoginViewModel to handle Apple
   authentication with idToken, nonce, and fullName.

5. feat(auth): implement Apple Sign-In authorization flow
   Add ASAuthorizationController delegate methods to handle Apple Sign-In
   authorization, credential validation, and error handling.
```

## Special Cases

### Configuration Files

```
chore: ignore GoogleService-Info.plist from version control

Add GoogleService-Info.plist to .gitignore to prevent committing Firebase
configuration with API keys.
```

```
build: update iOS deployment target to 15.0

Change minimum iOS version from 14.0 to 15.0 to support async/await syntax
in authentication flows.
```

```
ci: add GitHub Actions workflow for testing

Add workflow to run unit tests on pull requests. Runs on macOS latest
with Xcode 15.
```

### Documentation

```
docs: add API authentication guide

Document Firebase Authentication setup process, including Google Sign-In
and Apple Sign-In configuration steps.
```

```
docs: update README with installation steps

Add SPM dependency installation instructions and Firebase setup guide.
```

### Refactoring

```
refactor(auth): convert helper functions to static struct methods

Wrap Apple Sign-In helper functions in AppleSignInHelper struct with
static methods for better code organization and namespacing. Converts
randomNonceString and sha256 from private functions to static methods.
```

```
refactor(ui): extract email validation to separate method

Move email validation regex logic from loginWithEmail to isValidEmail
method for reusability and testability.
```

### Performance

**Specify the improvement:**

❌ `perf: optimize login`

✅
```
perf(auth): reduce login request time from 2s to 500ms

Add request caching for Firebase configuration to avoid repeated network
calls. Configuration is now cached after first retrieval.
```

## Body Text Requirements

**Minimum requirements for body text:**

1. **At least 1-2 complete sentences**
2. **Describe WHAT was changed specifically**
3. **Explain WHY the change was needed (when not obvious)**
4. **Mention affected components/files when relevant**
5. **Include technical details that aren't obvious from subject**

### Good Body Examples:

```
Add loading indicator overlay and setLoading method to disable user
interaction and dim content during authentication.
```

```
Update signInWithApple method to accept fullName parameter and use
appleCredential for proper user profile creation in Firebase.
```

```
Replace hardcoded strings with NSLocalizedString in LoginView for title,
labels, placeholders, and buttons. All UI text now supports English and
Turkish translations.
```

### Bad Body Examples:

❌ `Add feature.` (too vague)
❌ `Updated files.` (doesn't explain what)
❌ `Bug fix.` (doesn't explain which bug)
❌ `Refactoring.` (doesn't explain what was refactored)

## Template for AI Models

When an AI model is asked to create commits:

```
1. Read git diff to understand ALL changes
2. Group changes by logical concern
3. Order commits by dependency
4. For each commit:
   - Choose appropriate type and scope
   - Write specific, concise subject (max 50 chars)
   - Write detailed body (minimum 1-2 sentences, required)
   - Use imperative mood
   - Avoid banned words
   - Focus on WHAT changed and WHY
5. Output format:
   ## Commit [N]

   **Title:**
   ```
   type(scope): subject
   ```

   **Description:**
   ```
   Body text explaining what changed and why. Mention specific
   components, classes, or methods affected. Provide context.
   ```

   **Files to add:**
   ```bash
   git add path/to/file
   ```
```

## Final Checklist

Before suggesting a commit, verify:

- [ ] Type is correct (feat/fix/refactor/etc.)
- [ ] Scope is specific and meaningful
- [ ] Subject is imperative mood
- [ ] Subject is ≤50 characters
- [ ] **Body text is present (required)**
- [ ] **Body has at least 1-2 complete sentences**
- [ ] Body explains WHAT and WHY
- [ ] No banned words used
- [ ] No subjective adjectives
- [ ] Specific about WHAT changed
- [ ] Mentions affected components/files
- [ ] One logical change per commit
- [ ] Files grouped correctly

---

## Example Commit Message (Complete)

```
feat(auth): add email validation to login form

Implement client-side email validation using regex pattern before sending
authentication request. Validates format matches standard email pattern
(user@domain.ext) and displays error message for invalid inputs. Prevents
unnecessary Firebase API calls for malformed emails.
```

**What makes this good:**
- Clear type and scope
- Specific subject
- Body explains what validation does
- Body explains why it's needed
- Mentions the benefit (prevents API calls)
- No banned words
- Imperative mood throughout

---

**Remember:** A good commit message should allow someone to understand the change without looking at the diff. Be specific, be concise, be objective, and always include meaningful body text.

````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
