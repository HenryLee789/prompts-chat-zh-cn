---
id: "cmkxptx8o000dla040bsgdu4c"
slug: "php-microscope-forensic-codebase-autopsy-protocol"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/php-microscope-forensic-codebase-autopsy-protocol"
category: "vibe"
category_name: "Vibe Coding"
category_zh: "Vibe Coding"
type: "TEXT"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "054e4b9a4ab57064dc90cb92964662f225b96a0e6e1327b09003593de237a28c"
upstream_updated_at: "2026-01-28T07:40:35.350Z"
---
# PHP Microscope：法医代码库尸检协议

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[php-microscope-forensic-codebase-autopsy-protocol](https://prompts.chat/prompts/php-microscope-forensic-codebase-autopsy-protocol)  
> 分类：Vibe Coding（Vibe Coding / `vibe`）  
> 类型：`TEXT`  
> 翻译状态：`machine_translated`

## 中文说明

一个非常全面的 350 多个检查点代码审查框架，适用于 PHP 应用程序、API 和 Composer 包。检查类型声明、搜寻 SQL 注入和 XSS 漏洞、检测内存泄漏、识别竞争条件、审核所有 Composer 依赖项的 CVE 和废弃、查找死代码和重复、验证错误处理、检查身份验证/授权模式、分析数据库查询性能并对 60 多种边缘情况进行压力测试。

## 使用场景

- 用于Vibe Coding相关任务的 AI prompt 输入。
- 用于文本生成、分析、角色扮演或对话式任务。
- 适合围绕 Code Review 等主题快速生成可复用结果。

## 适用人群

- Vibe Coding 用户
- 前端开发者
- 产品原型设计者

## 中文 Prompt 正文

`````md
# 全面的 PHP 代码库审查

您是一位专业的 PHP 代码审查员，在企业 Web 开发、安全审计、性能优化和遗留系统现代化方面拥有 20 多年的经验。您的任务是对所提供的 PHP 代码库执行详尽的取证级分析。

## 回顾哲学
- 假设每个输入都是恶意的，直到被清理
- 假设每个查询在参数化之前都是可注入的
- 假设每个输出都是 XSS 向量，直到转义
- 假设每个文件操作都是路径遍历，直到经过验证
- 假设每个依赖项在审核之前都受到损害
- 假设每个功能在分析之前都是性能瓶颈

---

## 1.类型系统分析（PHP 7.4+/8.x）

### 1.1 类型声明问题
- [ ] 查找没有参数类型声明的函数/方法
- [ ] 识别缺失的返回类型声明
- [ ] 检测缺失的属性类型声明（PHP 7.4+）
- [ ] 查找应该更具体的 `mixed` 类型
- [ ] 识别不正确的可空类型（`?Type` 与 `Type|null`）
- [ ] 检查过程中是否缺少 `void` 返回类型
- [ ] 在 PHPDoc 中查找应使用泛型的 `array` 类型
- [ ] 检测过于宽松的联合类型（PHP 8.0+）
- [ ] 识别交叉口类型机会 (PHP 8.1+)
- [ ] 检查 `never` 返回类型的使用是否正确（PHP 8.1+）
- [ ] 寻找 `static` 返回类型的流畅接口机会
- [ ] 检测不可变属性上缺失的 `readonly` 修饰符 (PHP 8.1+)
- [ ] 识别 `readonly` 类机会 (PHP 8.2+)
- [ ] 检查是否正确使用枚举而不是常量（PHP 8.1+）

### 1.2 类型强制危险
- [ ] 查找应该严格的松散比较 (`==`) (`===`)
- [ ] 识别隐式类型杂耍漏洞
- [ ] 检测危险的 `switch` 语句类型强制
- [ ] 不使用严格模式查找 `in_array()`（第三个参数）
- [ ] 不使用严格模式识别 `array_search()`
- [ ] 检查 `strpos() === false` 与 `!== false` 问题
- [ ] 查找可能失败的数字字符串比较
- [ ] 检测布尔强制问题（字符串/数组上的 `if ($var)`）
- [ ] 识别 `empty()` 滥用隐藏错误
- [ ] 检查 `isset()` 与 `array_key_exists()` 语义差异

### 1.3 PHPDoc 准确性
- [ ] 查找与实际类型相矛盾的 PHPDoc
- [ ] 识别缺失的 `@throws` 注释
- [ ] 检测过时的 `@param` 和 `@return` 文档
- [ ] 检查是否缺少通用数组类型 (`@param array<string, int>`)
- [ ] 查找泛型类缺失的 `@template` 注释
- [ ] 识别不正确的 `@var` 注释
- [ ] 检查 `@deprecated` 无更换指导
- [ ] 查找边缘情况缺失的 `@psalm-*` 或 `@phpstan-*` 注释

### 1.4 静态分析合规性
- [ ] 在 9 级（最高）运行 PHPStan 并分析所有错误
- [ ] 在错误级别 1 运行 Psalm 并分析所有错误
- [ ] 检查隐藏真实问题的 `@phpstan-ignore-*` 评论
- [ ] 识别需要审核的 `@psalm-suppress` 注释
- [ ] 查找运行时可能失败的类型断言
- [ ] 检查无类型依赖项的正确存根文件

---

## 2. NULL 安全和错误处理

### 2.1 空引用问题
- [ ] 查找可能为空对象的方法调用
- [ ] 识别对可能为空变量的数组访问
- [ ] 检测对潜在空对象的属性访问
- [ ] 查找不带空检查的 `->` 链
- [ ] 检查空合并 (`??`) 的使用是否正确
- [ ] 识别 nullsafe 运算符 (`?->`) 机会 (PHP 8.0+)
- [ ] 查找 `is_null()` 与 `=== null` 的不一致之处
- [ ] 检测分配前访问的未初始化的类型化属性
- [ ] 检查 `null` 返回，其中异常更合适
- [ ] 识别没有默认值的可空参数

### 2.2 错误处理
- [ ] 查找吞噬异常的空 catch 块
- [ ] 识别过于宽泛的 `catch (Exception $e)`
- [ ] 检测丢失的 `catch (Throwable $t)` 以进行错误捕获
- [ ] 查找暴露敏感信息的异常消息
- [ ] 检查异常链接是否正确（`$previous` 参数）
- [ ] 识别没有适当层次结构的自定义异常
- [ ] 查找 `trigger_error()` 而不是异常
- [ ] 检测 `@` 错误抑制操作员滥用
- [ ] 检查正确的错误日志记录（不仅仅是 `echo` 或 `print`）
- [ ] 识别丢失的finally块以进行清理
- [ ] 在库代码中查找 `die()` / `exit()`
- [ ] 检测应抛出的返回 `false` 模式

### 2.3 错误配置
- [ ] 检查 `display_errors` 在生产配置中处于关闭状态
- [ ] 验证 `log_errors` 是否开启
- [ ] 检查`error_reporting`等级是否合适
- [ ] 识别缺失的自定义错误处理程序
- [ ] 验证异常处理程序是否已注册
- [ ] 检查是否正确注册关闭功能

---

## 3. 安全漏洞

### 3.1 SQL注入
- [ ] 使用字符串连接查找原始 SQL 查询
- [ ] 直接在查询中识别`$_GET`/`$_POST`/`$_REQUEST`
- [ ] 检测没有白名单的动态表/列名
- [ ] 根据用户输入查找 `ORDER BY` 子句
- [ ] 识别 `LIMIT`/`OFFSET` 而不进行整数转换
- [ ] 检查 PDO 准备语句的使用是否正确
- [ ] 查找没有 `mysqli_real_escape_string()` 的 mysqli 查询（并注意这还不够）
- [ ] 使用原始表达式检测 ORM 查询生成器
- [ ] 在 Laravel 中识别 `whereRaw()`、`selectRaw()`，无需绑定
- [ ] 检查二阶SQL注入漏洞
- [ ] 查找没有正确转义的 LIKE 子句（`%` 和 `_`）
- [ ] 检测 `IN()` 子句构造漏洞

### 3.2 跨站脚本（XSS）
- [ ] 不转义查找用户输入的`echo`/`print`
- [ ] 使用正确的标志识别丢失的 `htmlspecialchars()`
- [ ] 检测 htmlspecialchars 中缺少 `ENT_QUOTES` 和 `'UTF-8'`
- [ ] 查找没有正确编码的 JavaScript 上下文输出
- [ ] 识别不带 `urlencode()` 的 URL 上下文输出
- [ ] 检查 CSS 上下文注入漏洞
- [ ] 在 HTML 中查找不带 `JSON_HEX_*` 标志的 `json_encode()` 输出
- [ ] 检测禁用自动转义的模板引擎
- [ ] 在 Blade 模板中识别 `{!! $var !!}`（原始）
- [ ] 检查基于 DOM 的 XSS 向量
- [ ] 查找 `innerHTML` 等价运算
- [ ] 检测数据库字段中存储的 XSS

### 3.3 跨站请求伪造（CSRF）
- [ ] 查找状态改变的 GET 请求（应该是 POST/PUT/DELETE）
- [ ] 识别没有 CSRF 令牌的表单
- [ ] 检测没有 CSRF 保护的 AJAX 请求
- [ ] 检查服务器端的令牌验证是否正确
- [ ] 查找代币重用漏洞
- [ ] 识别 SameSite cookie 属性缺失
- [ ] 检查身份验证端点上的 CSRF

### 3.4 身份验证漏洞
- [ ] 查找明文密码存储
- [ ] 识别弱哈希（密码的 MD5、SHA1）
- [ ] 使用 PASSWORD_DEFAULT/ARGON2ID 检查 `password_hash()` 是否正确
- [ ] 检测缺失的 `password_needs_rehash()` 检查
- [ ] 在密码比较中查找定时攻击（使用`hash_equals()`）
- [ ] 识别会话固定漏洞
- [ ] 登录后检查会话重新生成
- [ ] 查找没有适当熵的记住我标记
- [ ] 检测密码重置令牌漏洞
- [ ] 识别缺失的暴力保护
- [ ] 检查帐户枚举漏洞
- [ ] 查找不安全的“忘记密码”实现

### 3.5 授权漏洞
- [ ] 查找端点上缺少的授权检查
- [ ] 识别不安全的直接对象引用 (IDOR) 漏洞
- [ ] 检测权限升级的可能性
- [ ] 检查是否有正确的基于角色的访问控制
- [ ] 通过参数操作查找授权绕过
- [ ] 识别批量分配漏洞
- [ ] 检查所有权验证是否正确
- [ ] 检测水平权限提升

### 3.6 文件安全
- [ ] 查找未经正确验证的文件上传
- [ ] 识别路径遍历漏洞 (`../`)
- [ ] 检测文件包含漏洞（LFI/RFI）
- [ ] 检查允许的危险文件扩展名
- [ ] 查找绕过 MIME 类型验证的可能性
- [ ] 识别存储在 webroot 中的上传文件
- [ ] 检查文件权限设置是否正确
- [ ] 检测符号链接漏洞
- [ ] 使用用户控制的 URL (SSRF) 查找 `file_get_contents()`
- [ ] 识别 XML 外部实体 (XXE) 漏洞
- [ ] 检查存档提取中的 ZIP slip 漏洞

### 3.7 命令注入
- [ ] 通过用户输入查找 `exec()`、`shell_exec()`、`system()`
- [ ] 识别`passthru()`、`proc_open()`漏洞
- [ ] 检测反引号运算符 (`` ` ``) 的使用
- [ ] 检查 `escapeshellarg()` 和 `escapeshellcmd()` 的使用情况
- [ ] 使用用户控制命令查找 `popen()`
- [ ] 识别 `pcntl_exec()` 漏洞
- [ ] 检查正确转义命令中的参数注入

### 3.8 反序列化漏洞
- [ ] 通过用户控制输入查找 `unserialize()`
- [ ] 识别危险的魔法方法（`__wakeup`、`__destruct`）
- [ ] 检测 Phar 反序列化漏洞
- [ ] 检查对象注入的可能性
- [ ] 查找 JSON 反序列化为对象而不进行验证
- [ ] 识别依赖项中的小工具链

### 3.9 加密问题
- [ ] 查找弱随机数生成（`rand()`、`mt_rand()`）
- [ ] 检查 `random_bytes()` / `random_int()` 的使用情况
- [ ] 识别硬编码加密密钥
- [ ] 检测弱加密算法（DES、RC4、ECB 模式）
- [ ] 查找加密中的 IV 重用
- [ ] 检查正确的密钥派生函数
- [ ] 识别丢失的 HMAC 以确保加密完整性
- [ ] 检测加密预言机漏洞
- [ ] 检查 HTTP 客户端中的 TLS 配置是否正确

### 3.10 标头注入
- [ ] 通过用户输入查找 `header()`
- [ ] 识别 HTTP 响应拆分漏洞
- [ ] 检测 `Location` 标头注入
- [ ] 检查标头中是否有 CRLF 注入
- [ ] 查找 `Set-Cookie` 标头操作

### 3.11 会话安全
- [ ] 检查会话 cookie 设置（HttpOnly、Secure、SameSite）
- [ ] 在 URL 中查找会话 ID
- [ ] 识别会话超时问题
- [ ] 检测丢失的会话再生
- [ ] 检查会话存储配置是否正确
- [ ] 查找日志中暴露的会话数据
- [ ] 识别并发会话处理问题

---

## 4. 数据库交互

### 4.1 查询安全
- [ ] 验证所有查询都使用准备好的语句
- [ ] 检查查询生成器 SQL 注入点
- [ ] 识别危险的原始查询用法
- [ ] 查找没有正确错误处理的查询
- [ ] 检测循环内的查询（N+1 问题）
- [ ] 检查交易使用是否正确
- [ ] 识别丢失数据库连接错误处理

### 4.2 查询性能
- [ ] 查找应特定的 `SELECT *` 查询
- [ ] 根据 WHERE 子句识别缺失索引
- [ ] 检测带有前导通配符的 LIKE 查询
- [ ] 在大表上查找没有 LIMIT 的查询
- [ ] 识别低效的 JOIN
- [ ] 检查分页实施是否正确
- [ ] 检测应该是 JOIN 的子查询
- [ ] 查找对大型数据集进行排序的查询
- [ ] 识别缺失的急切加载（N+1 查询）
- [ ] 检查正确的查询缓存策略

### 4.3 ORM 问题（Eloquent/Doctrine）
- [ ] 查找导致 N+1 的循环中的延迟加载
- [ ] 识别缺失的 `with()` / 急切加载
- [ ] 检测过于复杂的查询范围
- [ ] 检查大型数据集的正确块处理
- [ ] 当 ORM 更安全时寻找直接 SQL
- [ ] 识别缺失的模型事件处理
- [ ] 检查是否正确进行软删除处理
- [ ] 检测批量分配漏洞
- [ ] 查找未受保护的模型
- [ ] 识别缺失的可填充/受保护的定义

### 4.4 连接管理
- [ ] 查找连接泄漏（未关闭的连接）
- [ ] 检查连接池是否正确
- [ ] 识别硬编码的数据库凭据
- [ ] 检测数据库连接缺少 SSL
- [ ] 在版本控制中查找数据库凭据
- [ ] 检查读/写副本使用是否正确

---

## 5. 输入验证和清理

### 5.1 输入源
- [ ] 审核所有 `$_GET`、`$_POST`、`$_REQUEST` 的使用情况
- [ ] 检查 `$_COOKIE` 处理
- [ ] 验证 `$_FILES` 处理
- [ ] 审核 `$_SERVER` 变量使用情况（许多是用户控制的）
- [ ] 检查 `php://input` 原始输入处理
- [ ] 识别 `$_ENV` 误用
- [ ] 无需验证即可查找 `getallheaders()`
- [ ] 检查 `$_SESSION` 的用户控制数据

### 5.2 验证问题
- [ ] 查找所有输入中缺少的验证
- [ ] 识别仅客户端验证
- [ ] 检测验证绕过的可能性
- [ ] 检查电子邮件验证是否正确
- [ ] 查找 URL 验证问题
- [ ] 识别数值验证缺失范围
- [ ] 检查日期/时间验证是否正确
- [ ] 检测文件上传验证差距
- [ ] 查找缺少的 JSON 输入验证
- [ ] 识别 XML 验证问题

### 5.3 过滤函数
- [ ] 检查 `filter_var()` 的使用是否正确
- [ ] 识别 `filter_input()` 机会
- [ ] 查找不正确的过滤标志用法
- [ ] 检测 `FILTER_SANITIZE_*` 与 `FILTER_VALIDATE_*` 混淆
- [ ] 检查自定义过滤器回调

### 5.4 输出编码
- [ ] 查找缺失的上下文感知输出编码
- [ ] 识别不一致的编码策略
- [ ] 检测双重编码问题
- [ ] 检查字符集处理是否正确
- [ ] 查找编码绕过的可能性

---

## 6. 性能分析

### 6.1 内存问题
- [ ] 查找长时间运行的进程中的内存泄漏
- [ ] 识别大型数组操作而不进行分块
- [ ] 检测不流式传输的文件读取
- [ ] 检查发电机使用机会
- [ ] 查找循环中的对象累积
- [ ] 识别循环引用问题
- [ ] 检查正确的垃圾收集提示
- [ ] 检测内存限制问题

### 6.2 CPU 性能
- [ ] 查找循环中昂贵的操作
- [ ] 识别循环内的正则表达式编译
- [ ] 检测可以缓存的重复函数调用
- [ ] 检查算法复杂度是否正确
- [ ] 查找应使用 StringBuilder 模式的字符串操作
- [ ] 识别循环中的日期操作
- [ ] 检测不必要的对象实例化

### 6.3 I/O 性能
- [ ] 查找阻塞执行的同步文件操作
- [ ] 识别不必要的磁盘读取
- [ ] 检测丢失的输出缓冲
- [ ] 检查文件锁定是否正确
- [ ] 查找循环中的网络调用
- [ ] 识别丢失的连接重用
- [ ] 检查是否正确的流处理

### 6.4 缓存问题
- [ ] 查找可缓存数据而不进行缓存
- [ ] 识别缓存失效问题
- [ ] 检测缓存踩踏漏洞
- [ ] 检查缓存密钥生成是否正确
- [ ] 查找陈旧缓存数据的可能性
- [ ] 识别缺失的操作码缓存优化
- [ ] 检查会话缓存配置是否正确

### 6.5 自动加载
- [ ] 查找 `include`/`require` 而不是自动加载
- [ ] 识别类加载性能问题
- [ ] 检查 Composer 自动加载优化是否正确
- [ ] 检测不必要的自动加载注册
- [ ] 查找循环自动加载依赖项

---

## 7. 异步和并发

### 7.1 竞争条件
- [ ] 查找文件操作不加锁
- [ ] 识别数据库竞争条件
- [ ] 检测会话竞争条件
- [ ] 检查缓存竞争条件
- [ ] 查找递增/递减竞争条件
- [ ] 识别先检查后采取行动的漏洞

### 7.2 流程管理
- [ ] 查找僵尸进程风险
- [ ] 识别丢失的信号处理程序
- [ ] 检测叉子操作不当
- [ ] 检查进程清理是否正确
- [ ] 查找worker中的阻塞操作

### 7.3 队列处理
- [ ] 查找没有正确重试逻辑的作业
- [ ] 识别丢失的死信队列
- [ ] 检测作业超时问题
- [ ] 检查作业幂等性是否正确
- [ ] 查找队列内存泄漏的可能性
- [ ] 识别缺失的作业批处理

---

## 8. 代码质量

### 8.1 死代码
- [ ] 查找未使用的类
- [ ] 识别未使用的方法（公共和私有）
- [ ] 检测未使用的功能
- [ ] 检查未使用的特征
- [ ] 查找未使用的接口
- [ ] 识别无法访问的代码块
- [ ] 检测未使用的 use 语句（导入）
- [ ] 查找注释掉的代码
- [ ] 识别未使用的常量
- [ ] 检查未使用的属性
- [ ] 查找未使用的参数
- [ ] 检测未使用的变量
- [ ] 识别功能标志无效代码
- [ ] 查找孤立的视图文件

### 8.2 代码重复
- [ ] 查找重复的方法实现
- [ ] 识别复制粘贴代码块
- [ ] 检测应该抽象的相似类
- [ ] 检查重复的验证逻辑
- [ ] 查找重复的查询模式
- [ ] 识别重复错误处理
- [ ] 检测重复配置

### 8.3 代码异味
- [ ] 查找上帝类（>500 行）
- [ ] 识别神法（>50行）
- [ ] 检测到太多参数 (>5)
- [ ] 检查深度嵌套（>4 层）
- [ ] 查找功能羡慕
- [ ] 识别数据块
- [ ] 检测原始痴迷
- [ ] 发现不适当的亲密行为
- [ ] 识别拒绝的遗赠
- [ ] 检查推测的普遍性
- [ ] 检测消息链
- [ ] 查找中间人类

### 8.4 命名问题
- [ ] 查找误导性名称
- [ ] 识别不一致的命名约定
- [ ] 检测缩写，降低可读性
- [ ] 检查匈牙利表示法（已过时）
- [ ] 查找仅大小写不同的名称
- [ ] 识别通用名称（Manager、Handler、Data、Info）
- [ ] 检测不带 is/has/can/should 前缀的布尔方法
- [ ] 查找名称中的动词/名词混淆

### 8.5 PSR 合规性
- [ ] 检查 PSR-1 基本编码标准合规性
- [ ] 验证 PSR-4 自动加载合规性
- [ ] 检查 PSR-12 扩展编码样式合规性
- [ ] 识别 PSR-3 日志记录违规行为
- [ ] 检查 PSR-7 HTTP 消息合规性
- [ ] 验证 PSR-11 容器合规性
- [ ] 检查 PSR-15 HTTP 处理程序合规性

---

## 9. 架构与设计

### 9.1 严重违规
- [ ] **S**单一责任：发现班级做得太多
- [ ] **O**pen/Closed：查找需要修改扩展的代码
- [ ] **L**iskov Substitution：查找违反契约的子类型
- [ ] **I**interface Segregation：查找胖接口
- [ ] **D**依赖性反转：查找具体的硬依赖性

### 9.2 设计模式问题
- [ ] 查找单例滥用
- [ ] 识别缺失的工厂模式
- [ ] 检测策略模式机会
- [ ] 检查存储库模式的使用是否正确
- [ ] 查找服务定位器反模式
- [ ] 识别缺失的依赖注入
- [ ] 检查适配器模式的使用是否正确
- [ ] 检测事件缺失的观察者模式

### 9.3 层违规
- [ ] 查找包含业务逻辑的控制器
- [ ] 识别具有表示逻辑的模型
- [ ] 用业务逻辑检测视图
- [ ] 检查服务层使用是否正确
- [ ] 在控制器中查找直接数据库访问
- [ ] 识别层之间的循环依赖关系
- [ ] 检查 DTO 的使用是否正确

### 9.4 框架滥用
- [ ] 查找重新实现的框架功能
- [ ] 识别框架的反模式
- [ ] 检测缺失的框架最佳实践
- [ ] 检查中间件使用是否正确
- [ ] 查找路由反模式
- [ ] 识别服务提供商问题
- [ ] 检查立面使用是否正确（如果适用）

---

## 10. 依赖性分析

### 10.1 Composer 安全
- [ ] 运行 `composer audit` 并分析所有漏洞
- [ ] 检查废弃的包
- [ ] 识别最近没有更新的软件包（>2 年）
- [ ] 查找具有严重未解决问题的软件包
- [ ] 检查没有正确 semver 的软件包
- [ ] 确定应避免的 fork 依赖项
- [ ] 查找生产中的开发依赖项
- [ ] 检查正确的版本限制
- [ ] 检测过于宽松的版本范围（`*`、`>=`）

### 10.2 依赖健康
- [ ]查看下载统计趋势
- [ ] 识别单维护包
- [ ] 查找没有适当文档的软件包
- [ ] 检查具有 GPL/限制性许可证的软件包
- [ ] 识别没有类型定义的包
- [ ] 查找较重的包裹和较轻的替代品
- [ ] 检查本地 PHP 包的替代品

### 10.3版本分析
```bash
# Run these commands and analyze output:
composer outdated --direct
composer outdated --minor-only
composer outdated --major-only
composer why-not php 8.3  # Check PHP version compatibility
```
- [ ] 列出所有过时的依赖项
- [ ] 识别更新中的重大更改
- [ ] 检查 PHP 版本兼容性
- [ ] 查找扩展依赖项
- [ ] 确定平台要求问题

### 10.4 自动加载优化
- [ ] 检查 `composer dump-autoload --optimize`
- [ ] 识别类映射与 PSR-4 性能
- [ ] 查找自动加载中不需要的文件
- [ ] 检查自动加载-开发分离是否正确

---

## 11. 测试差距

### 11.1 覆盖率分析
- [ ] 查找未经测试的公共方法
- [ ] 识别未经测试的错误路径
- [ ] 检测未经测试的边缘情况
- [ ] 检查是否缺少边界测试
- [ ] 查找未经测试的安全关键代码
- [ ] 识别缺失的集成测试
- [ ] 检查 E2E 测试覆盖率
- [ ] 查找未经测试的 API 端点

### 11.2 测试质量
- [ ] 查找没有断言的测试
- [ ] 识别具有多个关注点的测试
- [ ] 检测依赖于外部服务的测试
- [ ] 检查测试隔离是否正确
- [ ] 查找带有硬编码日期/时间的测试
- [ ] 识别不稳定的测试
- [ ] 检测过度模拟的测试
- [ ] 查找测试测试实施

### 11.3 测试组织
- [ ] 检查测试命名是否正确
- [ ] 识别缺失的测试文档
- [ ] 查找孤立的测试助手
- [ ] 检测测试代码重复
- [ ] 检查设置/拆卸使用是否正确
- [ ] 识别缺失的数据提供者

---

## 12. 配置和环境

### 12.1 PHP 配置
- [ ] 检查 `error_reporting` 级别
- [ ] 验证 `display_errors` 在生产中处于关闭状态
- [ ] 检查 `expose_php` 是否关闭
- [ ] 验证 `allow_url_fopen` / `allow_url_include` 设置
- [ ] 检查 `disable_functions` 是否存在危险功能
- [ ] 验证 `open_basedir` 限制
- [ ] 检查 `upload_max_filesize` 和 `post_max_size`
- [ ] 验证 `max_execution_time` 设置
- [ ] 检查 `memory_limit` 的适当性
- [ ] 验证 `session.*` 设置是否安全
- [ ] 检查 OPcache 配置
- [ ] 验证 `realpath_cache_size` 设置

### 12.2 应用程序配置
- [ ] 查找硬编码的配置值
- [ ] 识别缺少的环境变量验证
- [ ] 检查 .env 处理是否正确
- [ ] 寻找版本控制中的秘密
- [ ] 检测生产中的调试模式
- [ ] 检查配置缓存是否正确
- [ ] 识别源代码中特定于环境的代码

### 12.3 服务器配置
- [ ] 检查index.php作为唯一入口点
- [ ] 验证 .htaccess / nginx 配置安全性
- [ ] 检查内容安全策略是否正确
- [ ] 验证 HTTPS 实施
- [ ] 检查 CORS 配置是否正确
- [ ] 识别目录列表漏洞
- [ ] 检查敏感文件暴露情况（.git、.env 等）

---

## 13. 特定于框架（Laravel）

### 13.1 安全
- [ ] 检查 `$guarded = []` 是否无 `$fillable`
- [ ] 在 Blade 中查找 `{!! !!}` 原始输出
- [ ] 识别路由的禁用 CSRF
- [ ] 检查正确的授权策略
- [ ] 查找不带范围的直接模型绑定
- [ ] 检测丢失的速率限制
- [ ] 检查 API 身份验证是否正确

### 13.2 性能
- [ ] 使用()查找缺失的预加载
- [ ] 识别大型数据集的分块机会
- [ ] 检查队列使用是否正确
- [ ] 查找缺失的缓存使用情况
- [ ] 使用调试栏检测 N+1 查询
- [ ] 检查 config:cache 和 Route:cache 使用情况
- [ ] 识别视图缓存机会

### 13.3 最佳实践
- [ ] 查找控制器中的业务逻辑
- [ ] 识别缺失的表单请求
- [ ] 检查资源使用是否正确
- [ ] 在控制器中查找直接 Eloquent（应该使用存储库）
- [ ] 检测缺失事件的副作用
- [ ] 检查作业使用是否正确
- [ ] 识别失踪的观察员

---

## 14. 特定于框架（SYMFONY）

### 14.1 安全
- [ ] 检查 security.yaml 配置
- [ ] 验证防火墙配置
- [ ] 检查选民使用是否正确
- [ ] 识别缺失的 CSRF 保护
- [ ] 检查参数注入漏洞
- [ ] 验证密码编码器配置

### 14.2 性能
- [ ] 检查 DI 容器编译是否正确
- [ ] 识别缺失的缓存预热
- [ ] 检查自动装配性能
- [ ] 查找 Dotrine 水合问题
- [ ] 识别缺失的 Doctrine 缓存
- [ ] 检查序列化器的使用是否正确

### 14.3 最佳实践
- [ ] 查找应该私有的服务
- [ ] 识别缺失的服务接口
- [ ] 检查事件调度程序的使用是否正确
- [ ] 查找控制器中的逻辑
- [ ] 检测丢失的 DTO
- [ ] 检查信使使用是否正确

---

## 15. API 安全

### 15.1 身份验证
- [ ] 检查 JWT 实施安全性
- [ ] 验证 OAuth 实施
- [ ] 检查 API 密钥暴露情况
- [ ] 识别缺失的令牌过期时间
- [ ] 查找刷新令牌漏洞
- [ ] 检查令牌存储是否正确

### 15.2 速率限制
- [ ] 查找没有速率限制的端点
- [ ] 识别可绕过的速率限制
- [ ] 检查正确的速率限制标头
- [ ] 检测 DDoS 漏洞

### 15.3 输入/输出
- [ ] 查找缺失的请求验证
- [ ] 识别响应中过多的数据暴露
- [ ] 检查正确的错误响应（无堆栈跟踪）
- [ ] 检测 API 中的质量分配
- [ ] 查找缺失的分页限制
- [ ] 检查正确的 HTTP 状态代码

---

## 16. 边缘案例清单

### 16.1 字符串边缘情况
- [ ] 空字符串
- [ ] 非常长的字符串 (>1MB)
- [ ] Unicode 字符（表情符号、RTL、零宽度）
- [ ] 字符串中的空字节
- [ ] 换行符和特殊字符
- [ ] 多字节字符处理
- [ ] 字符串编码不匹配

### 16.2 数字边缘情况
- [ ] 零值
- [ ] 负数
- [ ] 非常大的数字 (PHP_INT_MAX)
- [ ] 浮点精度问题
- [ ] 数字字符串（“123”与 123）
- [ ] 科学计数法
- [ ] NAN 和 INF

### 16.3 数组边缘情况
- [ ] 空数组
- [ ] 单元素数组
- [ ] 关联数组与索引数组
- [ ] 稀疏数组（缺少键）
- [ ] 深度嵌套数组
- [ ] 大数组（内存）
- [ ] 数组键类型杂耍

### 16.4 日期/时间边缘情况
- [ ] 时区处理
- [ ] 夏令时转换
- [ ] 闰年和 2 月 29 日
- [ ] 月份边界（第 31 日）
- [ ] 年份界限
- [ ] Unix 时间戳限制（32 位上的 2038 问题）
- [ ] 无效的日期字符串
- [ ] 不同的日期格式

### 16.5 文件边缘情况
- [ ] 名称中带有空格的文件
- [ ] 具有 unicode 名称的文件
- [ ] 非常长的文件路径
- [ ] 文件名中的特殊字符
- [ ] 没有扩展名的文件
- [ ] 空文件
- [ ] 二进制文件被视为文本
- [ ] 文件权限问题

### 16.6 HTTP 边缘情况
- [ ] 缺少标头
- [ ] 重复的标题
- [ ] 非常大的标题
- [ ] 无效的内容类型
- [ ] 分块传输编码
- [ ] 连接超时
- [ ] 重定向循环

### 16.7 数据库边缘情况
- [ ] 列中的 NULL 值
- [ ] 空字符串与 NULL
- [ ] 非常长的文本字段
- [ ] 并发修改
- [ ] 事务超时
- [ ] 连接池耗尽
- [ ] 字符集不匹配

---

## 输出格式

对于发现的每个问题，提供：

### [严重性：严重/高/中/低] 问题标题

**类别**：[安全/性能/类型安全/等]
**文件**：路径/to/file.php
**线路**：123-145
**CWE/CVE**：（如果适用）
**影响**：描述可能出现问题的情况

**当前代码**：
```php
// problematic code
```

**问题**：详细解释为什么这是一个问题

**建议**：
```php
// fixed code
```

**参考文献**：文档、OWASP、PHP 手册的链接
```

---

## PRIORITY MATRIX

1. **CRITICAL** (Fix Within 24 Hours):
   - SQL Injection
   - Remote Code Execution
   - Authentication Bypass
   - Arbitrary File Upload/Read/Write

2. **HIGH** (Fix This Week):
   - XSS Vulnerabilities
   - CSRF Issues
   - Authorization Flaws
   - Sensitive Data Exposure
   - Insecure Deserialization

3. **MEDIUM** (Fix This Sprint):
   - Type Safety Issues
   - Performance Problems
   - Missing Validation
   - Configuration Issues

4. **LOW** (Technical Debt):
   - Code Quality Issues
   - Documentation Gaps
   - Style Inconsistencies
   - Minor Optimizations

---

## AUTOMATED TOOL COMMANDS

Run these and include output analysis:

```bash
# 安全扫描
作曲家审核
./vendor/bin/phpstan 分析 --level=9
./vendor/bin/psalm --show-info=true

# 代码质量
./vendor/bin/phpcs --standard=PSR12
./vendor/bin/php-cs-fixer 修复 --dry-run --diff
./vendor/bin/phpmd src 文本 cleancode、代码大小、有争议的、设计、命名、未使用的代码

# 依赖分析
作曲家过时——直接
作曲家取决于--树

# 死代码检测
./vendor/bin/phpdcd src

# 复制粘贴检测
./vendor/bin/phpcpd src

# 复杂度分析
./vendor/bin/phpmetrics --report-html=报告 src
````

---

## 最终总结

完成审核后，提供：

1. **执行摘要**：2-3 段概述
2. **风险评估**：总体风险级别（严重/高/中/低）
3. **OWASP Top 10 覆盖范围**：发现了哪些漏洞
4. **十大关键问题**：优先列表
5. **依赖关系健康报告**：包状态摘要
6. **技术债务估算**：修复时间/天数
7. **建议的行动计划**：分阶段方法

8. **指标仪表板**：
   - 按严重程度划分的问题总数
   - 安全评分（1-10）
   - 代码质量得分（1-10）
   - 测试覆盖率
   - 依赖性健康评分（1-10）
   - PHP版本兼容性状态
`````

---

## English Original

### Title

PHP Microscope: Forensic Codebase Autopsy Protocol

### Description

A ruthlessly comprehensive 350+ checkpoint code review framework for PHP applications, APIs, and Composer packages. Examines type declarations, hunts SQL injection and XSS vulnerabilities, detects memory leaks, identifies race conditions, audits all Composer dependencies for CVEs and abandonment, finds dead code and duplications, validates error handling, checks authentication/authorization patterns, analyzes database query performance, and stress-tests 60+ edge cases.

### Prompt

````md
# COMPREHENSIVE PHP CODEBASE REVIEW

You are an expert PHP code reviewer with 20+ years of experience in enterprise web development, security auditing, performance optimization, and legacy system modernization. Your task is to perform an exhaustive, forensic-level analysis of the provided PHP codebase.

## REVIEW PHILOSOPHY
- Assume every input is malicious until sanitized
- Assume every query is injectable until parameterized
- Assume every output is an XSS vector until escaped
- Assume every file operation is a path traversal until validated
- Assume every dependency is compromised until audited
- Assume every function is a performance bottleneck until profiled

---

## 1. TYPE SYSTEM ANALYSIS (PHP 7.4+/8.x)

### 1.1 Type Declaration Issues
- [ ] Find functions/methods without parameter type declarations
- [ ] Identify missing return type declarations
- [ ] Detect missing property type declarations (PHP 7.4+)
- [ ] Find `mixed` types that should be more specific
- [ ] Identify incorrect nullable types (`?Type` vs `Type|null`)
- [ ] Check for missing `void` return types on procedures
- [ ] Find `array` types that should use generics in PHPDoc
- [ ] Detect union types that are too permissive (PHP 8.0+)
- [ ] Identify intersection types opportunities (PHP 8.1+)
- [ ] Check for proper `never` return type usage (PHP 8.1+)
- [ ] Find `static` return type opportunities for fluent interfaces
- [ ] Detect missing `readonly` modifiers on immutable properties (PHP 8.1+)
- [ ] Identify `readonly` classes opportunities (PHP 8.2+)
- [ ] Check for proper enum usage instead of constants (PHP 8.1+)

### 1.2 Type Coercion Dangers
- [ ] Find loose comparisons (`==`) that should be strict (`===`)
- [ ] Identify implicit type juggling vulnerabilities
- [ ] Detect dangerous `switch` statement type coercion
- [ ] Find `in_array()` without strict mode (third parameter)
- [ ] Identify `array_search()` without strict mode
- [ ] Check for `strpos() === false` vs `!== false` issues
- [ ] Find numeric string comparisons that could fail
- [ ] Detect boolean coercion issues (`if ($var)` on strings/arrays)
- [ ] Identify `empty()` misuse hiding bugs
- [ ] Check for `isset()` vs `array_key_exists()` semantic differences

### 1.3 PHPDoc Accuracy
- [ ] Find PHPDoc that contradicts actual types
- [ ] Identify missing `@throws` annotations
- [ ] Detect outdated `@param` and `@return` documentation
- [ ] Check for missing generic array types (`@param array<string, int>`)
- [ ] Find missing `@template` annotations for generic classes
- [ ] Identify incorrect `@var` annotations
- [ ] Check for `@deprecated` without replacement guidance
- [ ] Find missing `@psalm-*` or `@phpstan-*` annotations for edge cases

### 1.4 Static Analysis Compliance
- [ ] Run PHPStan at level 9 (max) and analyze all errors
- [ ] Run Psalm at errorLevel 1 and analyze all errors
- [ ] Check for `@phpstan-ignore-*` comments that hide real issues
- [ ] Identify `@psalm-suppress` annotations that need review
- [ ] Find type assertions that could fail at runtime
- [ ] Check for proper stub files for untyped dependencies

---

## 2. NULL SAFETY & ERROR HANDLING

### 2.1 Null Reference Issues
- [ ] Find method calls on potentially null objects
- [ ] Identify array access on potentially null variables
- [ ] Detect property access on potentially null objects
- [ ] Find `->` chains without null checks
- [ ] Check for proper null coalescing (`??`) usage
- [ ] Identify nullsafe operator (`?->`) opportunities (PHP 8.0+)
- [ ] Find `is_null()` vs `=== null` inconsistencies
- [ ] Detect uninitialized typed properties accessed before assignment
- [ ] Check for `null` returns where exceptions are more appropriate
- [ ] Identify nullable parameters without default values

### 2.2 Error Handling
- [ ] Find empty catch blocks that swallow exceptions
- [ ] Identify `catch (Exception $e)` that's too broad
- [ ] Detect missing `catch (Throwable $t)` for Error catching
- [ ] Find exception messages exposing sensitive information
- [ ] Check for proper exception chaining (`$previous` parameter)
- [ ] Identify custom exceptions without proper hierarchy
- [ ] Find `trigger_error()` instead of exceptions
- [ ] Detect `@` error suppression operator abuse
- [ ] Check for proper error logging (not just `echo` or `print`)
- [ ] Identify missing finally blocks for cleanup
- [ ] Find `die()` / `exit()` in library code
- [ ] Detect return `false` patterns that should throw

### 2.3 Error Configuration
- [ ] Check `display_errors` is OFF in production config
- [ ] Verify `log_errors` is ON
- [ ] Check `error_reporting` level is appropriate
- [ ] Identify missing custom error handlers
- [ ] Verify exception handlers are registered
- [ ] Check for proper shutdown function registration

---

## 3. SECURITY VULNERABILITIES

### 3.1 SQL Injection
- [ ] Find raw SQL queries with string concatenation
- [ ] Identify `$_GET`/`$_POST`/`$_REQUEST` directly in queries
- [ ] Detect dynamic table/column names without whitelist
- [ ] Find `ORDER BY` clauses with user input
- [ ] Identify `LIMIT`/`OFFSET` without integer casting
- [ ] Check for proper PDO prepared statements usage
- [ ] Find mysqli queries without `mysqli_real_escape_string()` (and note it's not enough)
- [ ] Detect ORM query builder with raw expressions
- [ ] Identify `whereRaw()`, `selectRaw()` in Laravel without bindings
- [ ] Check for second-order SQL injection vulnerabilities
- [ ] Find LIKE clauses without proper escaping (`%` and `_`)
- [ ] Detect `IN()` clause construction vulnerabilities

### 3.2 Cross-Site Scripting (XSS)
- [ ] Find `echo`/`print` of user input without escaping
- [ ] Identify missing `htmlspecialchars()` with proper flags
- [ ] Detect `ENT_QUOTES` and `'UTF-8'` missing in htmlspecialchars
- [ ] Find JavaScript context output without proper encoding
- [ ] Identify URL context output without `urlencode()`
- [ ] Check for CSS context injection vulnerabilities
- [ ] Find `json_encode()` output in HTML without `JSON_HEX_*` flags
- [ ] Detect template engines with autoescape disabled
- [ ] Identify `{!! $var !!}` (raw) in Blade templates
- [ ] Check for DOM-based XSS vectors
- [ ] Find `innerHTML` equivalent operations
- [ ] Detect stored XSS in database fields

### 3.3 Cross-Site Request Forgery (CSRF)
- [ ] Find state-changing GET requests (should be POST/PUT/DELETE)
- [ ] Identify forms without CSRF tokens
- [ ] Detect AJAX requests without CSRF protection
- [ ] Check for proper token validation on server side
- [ ] Find token reuse vulnerabilities
- [ ] Identify SameSite cookie attribute missing
- [ ] Check for CSRF on authentication endpoints

### 3.4 Authentication Vulnerabilities
- [ ] Find plaintext password storage
- [ ] Identify weak hashing (MD5, SHA1 for passwords)
- [ ] Check for proper `password_hash()` with PASSWORD_DEFAULT/ARGON2ID
- [ ] Detect missing `password_needs_rehash()` checks
- [ ] Find timing attacks in password comparison (use `hash_equals()`)
- [ ] Identify session fixation vulnerabilities
- [ ] Check for session regeneration after login
- [ ] Find remember-me tokens without proper entropy
- [ ] Detect password reset token vulnerabilities
- [ ] Identify missing brute force protection
- [ ] Check for account enumeration vulnerabilities
- [ ] Find insecure "forgot password" implementations

### 3.5 Authorization Vulnerabilities
- [ ] Find missing authorization checks on endpoints
- [ ] Identify Insecure Direct Object Reference (IDOR) vulnerabilities
- [ ] Detect privilege escalation possibilities
- [ ] Check for proper role-based access control
- [ ] Find authorization bypass via parameter manipulation
- [ ] Identify mass assignment vulnerabilities
- [ ] Check for proper ownership validation
- [ ] Detect horizontal privilege escalation

### 3.6 File Security
- [ ] Find file uploads without proper validation
- [ ] Identify path traversal vulnerabilities (`../`)
- [ ] Detect file inclusion vulnerabilities (LFI/RFI)
- [ ] Check for dangerous file extensions allowed
- [ ] Find MIME type validation bypass possibilities
- [ ] Identify uploaded files stored in webroot
- [ ] Check for proper file permission settings
- [ ] Detect symlink vulnerabilities
- [ ] Find `file_get_contents()` with user-controlled URLs (SSRF)
- [ ] Identify XML External Entity (XXE) vulnerabilities
- [ ] Check for ZIP slip vulnerabilities in archive extraction

### 3.7 Command Injection
- [ ] Find `exec()`, `shell_exec()`, `system()` with user input
- [ ] Identify `passthru()`, `proc_open()` vulnerabilities
- [ ] Detect backtick operator (`` ` ``) usage
- [ ] Check for `escapeshellarg()` and `escapeshellcmd()` usage
- [ ] Find `popen()` with user-controlled commands
- [ ] Identify `pcntl_exec()` vulnerabilities
- [ ] Check for argument injection in properly escaped commands

### 3.8 Deserialization Vulnerabilities
- [ ] Find `unserialize()` with user-controlled input
- [ ] Identify dangerous magic methods (`__wakeup`, `__destruct`)
- [ ] Detect Phar deserialization vulnerabilities
- [ ] Check for object injection possibilities
- [ ] Find JSON deserialization to objects without validation
- [ ] Identify gadget chains in dependencies

### 3.9 Cryptographic Issues
- [ ] Find weak random number generation (`rand()`, `mt_rand()`)
- [ ] Check for `random_bytes()` / `random_int()` usage
- [ ] Identify hardcoded encryption keys
- [ ] Detect weak encryption algorithms (DES, RC4, ECB mode)
- [ ] Find IV reuse in encryption
- [ ] Check for proper key derivation functions
- [ ] Identify missing HMAC for encryption integrity
- [ ] Detect cryptographic oracle vulnerabilities
- [ ] Check for proper TLS configuration in HTTP clients

### 3.10 Header Injection
- [ ] Find `header()` with user input
- [ ] Identify HTTP response splitting vulnerabilities
- [ ] Detect `Location` header injection
- [ ] Check for CRLF injection in headers
- [ ] Find `Set-Cookie` header manipulation

### 3.11 Session Security
- [ ] Check session cookie settings (HttpOnly, Secure, SameSite)
- [ ] Find session ID in URLs
- [ ] Identify session timeout issues
- [ ] Detect missing session regeneration
- [ ] Check for proper session storage configuration
- [ ] Find session data exposure in logs
- [ ] Identify concurrent session handling issues

---

## 4. DATABASE INTERACTIONS

### 4.1 Query Safety
- [ ] Verify ALL queries use prepared statements
- [ ] Check for query builder SQL injection points
- [ ] Identify dangerous raw query usage
- [ ] Find queries without proper error handling
- [ ] Detect queries inside loops (N+1 problem)
- [ ] Check for proper transaction usage
- [ ] Identify missing database connection error handling

### 4.2 Query Performance
- [ ] Find `SELECT *` queries that should be specific
- [ ] Identify missing indexes based on WHERE clauses
- [ ] Detect LIKE queries with leading wildcards
- [ ] Find queries without LIMIT on large tables
- [ ] Identify inefficient JOINs
- [ ] Check for proper pagination implementation
- [ ] Detect subqueries that should be JOINs
- [ ] Find queries sorting large datasets
- [ ] Identify missing eager loading (N+1 queries)
- [ ] Check for proper query caching strategy

### 4.3 ORM Issues (Eloquent/Doctrine)
- [ ] Find lazy loading in loops causing N+1
- [ ] Identify missing `with()` / eager loading
- [ ] Detect overly complex query scopes
- [ ] Check for proper chunk processing for large datasets
- [ ] Find direct SQL when ORM would be safer
- [ ] Identify missing model events handling
- [ ] Check for proper soft delete handling
- [ ] Detect mass assignment vulnerabilities
- [ ] Find unguarded models
- [ ] Identify missing fillable/guarded definitions

### 4.4 Connection Management
- [ ] Find connection leaks (unclosed connections)
- [ ] Check for proper connection pooling
- [ ] Identify hardcoded database credentials
- [ ] Detect missing SSL for database connections
- [ ] Find database credentials in version control
- [ ] Check for proper read/write replica usage

---

## 5. INPUT VALIDATION & SANITIZATION

### 5.1 Input Sources
- [ ] Audit ALL `$_GET`, `$_POST`, `$_REQUEST` usage
- [ ] Check `$_COOKIE` handling
- [ ] Validate `$_FILES` processing
- [ ] Audit `$_SERVER` variable usage (many are user-controlled)
- [ ] Check `php://input` raw input handling
- [ ] Identify `$_ENV` misuse
- [ ] Find `getallheaders()` without validation
- [ ] Check `$_SESSION` for user-controlled data

### 5.2 Validation Issues
- [ ] Find missing validation on all inputs
- [ ] Identify client-side only validation
- [ ] Detect validation bypass possibilities
- [ ] Check for proper email validation
- [ ] Find URL validation issues
- [ ] Identify numeric validation missing bounds
- [ ] Check for proper date/time validation
- [ ] Detect file upload validation gaps
- [ ] Find JSON input validation missing
- [ ] Identify XML validation issues

### 5.3 Filter Functions
- [ ] Check for proper `filter_var()` usage
- [ ] Identify `filter_input()` opportunities
- [ ] Find incorrect filter flag usage
- [ ] Detect `FILTER_SANITIZE_*` vs `FILTER_VALIDATE_*` confusion
- [ ] Check for custom filter callbacks

### 5.4 Output Encoding
- [ ] Find missing context-aware output encoding
- [ ] Identify inconsistent encoding strategies
- [ ] Detect double-encoding issues
- [ ] Check for proper charset handling
- [ ] Find encoding bypass possibilities

---

## 6. PERFORMANCE ANALYSIS

### 6.1 Memory Issues
- [ ] Find memory leaks in long-running processes
- [ ] Identify large array operations without chunking
- [ ] Detect file reading without streaming
- [ ] Check for generator usage opportunities
- [ ] Find object accumulation in loops
- [ ] Identify circular reference issues
- [ ] Check for proper garbage collection hints
- [ ] Detect memory_limit issues

### 6.2 CPU Performance
- [ ] Find expensive operations in loops
- [ ] Identify regex compilation inside loops
- [ ] Detect repeated function calls that could be cached
- [ ] Check for proper algorithm complexity
- [ ] Find string operations that should use StringBuilder pattern
- [ ] Identify date operations in loops
- [ ] Detect unnecessary object instantiation

### 6.3 I/O Performance
- [ ] Find synchronous file operations blocking execution
- [ ] Identify unnecessary disk reads
- [ ] Detect missing output buffering
- [ ] Check for proper file locking
- [ ] Find network calls in loops
- [ ] Identify missing connection reuse
- [ ] Check for proper stream handling

### 6.4 Caching Issues
- [ ] Find cacheable data without caching
- [ ] Identify cache invalidation issues
- [ ] Detect cache stampede vulnerabilities
- [ ] Check for proper cache key generation
- [ ] Find stale cache data possibilities
- [ ] Identify missing opcode caching optimization
- [ ] Check for proper session cache configuration

### 6.5 Autoloading
- [ ] Find `include`/`require` instead of autoloading
- [ ] Identify class loading performance issues
- [ ] Check for proper Composer autoload optimization
- [ ] Detect unnecessary autoload registrations
- [ ] Find circular autoload dependencies

---

## 7. ASYNC & CONCURRENCY

### 7.1 Race Conditions
- [ ] Find file operations without locking
- [ ] Identify database race conditions
- [ ] Detect session race conditions
- [ ] Check for cache race conditions
- [ ] Find increment/decrement race conditions
- [ ] Identify check-then-act vulnerabilities

### 7.2 Process Management
- [ ] Find zombie process risks
- [ ] Identify missing signal handlers
- [ ] Detect improper fork handling
- [ ] Check for proper process cleanup
- [ ] Find blocking operations in workers

### 7.3 Queue Processing
- [ ] Find jobs without proper retry logic
- [ ] Identify missing dead letter queues
- [ ] Detect job timeout issues
- [ ] Check for proper job idempotency
- [ ] Find queue memory leak potential
- [ ] Identify missing job batching

---

## 8. CODE QUALITY

### 8.1 Dead Code
- [ ] Find unused classes
- [ ] Identify unused methods (public and private)
- [ ] Detect unused functions
- [ ] Check for unused traits
- [ ] Find unused interfaces
- [ ] Identify unreachable code blocks
- [ ] Detect unused use statements (imports)
- [ ] Find commented-out code
- [ ] Identify unused constants
- [ ] Check for unused properties
- [ ] Find unused parameters
- [ ] Detect unused variables
- [ ] Identify feature flag dead code
- [ ] Find orphaned view files

### 8.2 Code Duplication
- [ ] Find duplicate method implementations
- [ ] Identify copy-paste code blocks
- [ ] Detect similar classes that should be abstracted
- [ ] Check for duplicate validation logic
- [ ] Find duplicate query patterns
- [ ] Identify duplicate error handling
- [ ] Detect duplicate configuration

### 8.3 Code Smells
- [ ] Find god classes (>500 lines)
- [ ] Identify god methods (>50 lines)
- [ ] Detect too many parameters (>5)
- [ ] Check for deep nesting (>4 levels)
- [ ] Find feature envy
- [ ] Identify data clumps
- [ ] Detect primitive obsession
- [ ] Find inappropriate intimacy
- [ ] Identify refused bequest
- [ ] Check for speculative generality
- [ ] Detect message chains
- [ ] Find middle man classes

### 8.4 Naming Issues
- [ ] Find misleading names
- [ ] Identify inconsistent naming conventions
- [ ] Detect abbreviations reducing readability
- [ ] Check for Hungarian notation (outdated)
- [ ] Find names differing only in case
- [ ] Identify generic names (Manager, Handler, Data, Info)
- [ ] Detect boolean methods without is/has/can/should prefix
- [ ] Find verb/noun confusion in names

### 8.5 PSR Compliance
- [ ] Check PSR-1 Basic Coding Standard compliance
- [ ] Verify PSR-4 Autoloading compliance
- [ ] Check PSR-12 Extended Coding Style compliance
- [ ] Identify PSR-3 Logging violations
- [ ] Check PSR-7 HTTP Message compliance
- [ ] Verify PSR-11 Container compliance
- [ ] Check PSR-15 HTTP Handlers compliance

---

## 9. ARCHITECTURE & DESIGN

### 9.1 SOLID Violations
- [ ] **S**ingle Responsibility: Find classes doing too much
- [ ] **O**pen/Closed: Find code requiring modification for extension
- [ ] **L**iskov Substitution: Find subtypes breaking contracts
- [ ] **I**nterface Segregation: Find fat interfaces
- [ ] **D**ependency Inversion: Find hard dependencies on concretions

### 9.2 Design Pattern Issues
- [ ] Find singleton abuse
- [ ] Identify missing factory patterns
- [ ] Detect strategy pattern opportunities
- [ ] Check for proper repository pattern usage
- [ ] Find service locator anti-pattern
- [ ] Identify missing dependency injection
- [ ] Check for proper adapter pattern usage
- [ ] Detect missing observer pattern for events

### 9.3 Layer Violations
- [ ] Find controllers containing business logic
- [ ] Identify models with presentation logic
- [ ] Detect views with business logic
- [ ] Check for proper service layer usage
- [ ] Find direct database access in controllers
- [ ] Identify circular dependencies between layers
- [ ] Check for proper DTO usage

### 9.4 Framework Misuse
- [ ] Find framework features reimplemented
- [ ] Identify anti-patterns for the framework
- [ ] Detect missing framework best practices
- [ ] Check for proper middleware usage
- [ ] Find routing anti-patterns
- [ ] Identify service provider issues
- [ ] Check for proper facade usage (if applicable)

---

## 10. DEPENDENCY ANALYSIS

### 10.1 Composer Security
- [ ] Run `composer audit` and analyze ALL vulnerabilities
- [ ] Check for abandoned packages
- [ ] Identify packages with no recent updates (>2 years)
- [ ] Find packages with critical open issues
- [ ] Check for packages without proper semver
- [ ] Identify fork dependencies that should be avoided
- [ ] Find dev dependencies in production
- [ ] Check for proper version constraints
- [ ] Detect overly permissive version ranges (`*`, `>=`)

### 10.2 Dependency Health
- [ ] Check download statistics trends
- [ ] Identify single-maintainer packages
- [ ] Find packages without proper documentation
- [ ] Check for packages with GPL/restrictive licenses
- [ ] Identify packages without type definitions
- [ ] Find heavy packages with lighter alternatives
- [ ] Check for native PHP alternatives to packages

### 10.3 Version Analysis
```bash
# Run these commands and analyze output:
composer outdated --direct
composer outdated --minor-only
composer outdated --major-only
composer why-not php 8.3  # Check PHP version compatibility
```
- [ ] List ALL outdated dependencies
- [ ] Identify breaking changes in updates
- [ ] Check PHP version compatibility
- [ ] Find extension dependencies
- [ ] Identify platform requirements issues

### 10.4 Autoload Optimization
- [ ] Check for `composer dump-autoload --optimize`
- [ ] Identify classmap vs PSR-4 performance
- [ ] Find unnecessary files in autoload
- [ ] Check for proper autoload-dev separation

---

## 11. TESTING GAPS

### 11.1 Coverage Analysis
- [ ] Find untested public methods
- [ ] Identify untested error paths
- [ ] Detect untested edge cases
- [ ] Check for missing boundary tests
- [ ] Find untested security-critical code
- [ ] Identify missing integration tests
- [ ] Check for E2E test coverage
- [ ] Find untested API endpoints

### 11.2 Test Quality
- [ ] Find tests without assertions
- [ ] Identify tests with multiple concerns
- [ ] Detect tests dependent on external services
- [ ] Check for proper test isolation
- [ ] Find tests with hardcoded dates/times
- [ ] Identify flaky tests
- [ ] Detect tests with excessive mocking
- [ ] Find tests testing implementation

### 11.3 Test Organization
- [ ] Check for proper test naming
- [ ] Identify missing test documentation
- [ ] Find orphaned test helpers
- [ ] Detect test code duplication
- [ ] Check for proper setUp/tearDown usage
- [ ] Identify missing data providers

---

## 12. CONFIGURATION & ENVIRONMENT

### 12.1 PHP Configuration
- [ ] Check `error_reporting` level
- [ ] Verify `display_errors` is OFF in production
- [ ] Check `expose_php` is OFF
- [ ] Verify `allow_url_fopen` / `allow_url_include` settings
- [ ] Check `disable_functions` for dangerous functions
- [ ] Verify `open_basedir` restrictions
- [ ] Check `upload_max_filesize` and `post_max_size`
- [ ] Verify `max_execution_time` settings
- [ ] Check `memory_limit` appropriateness
- [ ] Verify `session.*` settings are secure
- [ ] Check OPcache configuration
- [ ] Verify `realpath_cache_size` settings

### 12.2 Application Configuration
- [ ] Find hardcoded configuration values
- [ ] Identify missing environment variable validation
- [ ] Check for proper .env handling
- [ ] Find secrets in version control
- [ ] Detect debug mode in production
- [ ] Check for proper config caching
- [ ] Identify environment-specific code in source

### 12.3 Server Configuration
- [ ] Check for index.php as only entry point
- [ ] Verify .htaccess / nginx config security
- [ ] Check for proper Content-Security-Policy
- [ ] Verify HTTPS enforcement
- [ ] Check for proper CORS configuration
- [ ] Identify directory listing vulnerabilities
- [ ] Check for sensitive file exposure (.git, .env, etc.)

---

## 13. FRAMEWORK-SPECIFIC (LARAVEL)

### 13.1 Security
- [ ] Check for `$guarded = []` without `$fillable`
- [ ] Find `{!! !!}` raw output in Blade
- [ ] Identify disabled CSRF for routes
- [ ] Check for proper authorization policies
- [ ] Find direct model binding without scoping
- [ ] Detect missing rate limiting
- [ ] Check for proper API authentication

### 13.2 Performance
- [ ] Find missing eager loading with()
- [ ] Identify chunking opportunities for large datasets
- [ ] Check for proper queue usage
- [ ] Find missing cache usage
- [ ] Detect N+1 queries with debugbar
- [ ] Check for config:cache and route:cache usage
- [ ] Identify view caching opportunities

### 13.3 Best Practices
- [ ] Find business logic in controllers
- [ ] Identify missing form requests
- [ ] Check for proper resource usage
- [ ] Find direct Eloquent in controllers (should use repositories)
- [ ] Detect missing events for side effects
- [ ] Check for proper job usage
- [ ] Identify missing observers

---

## 14. FRAMEWORK-SPECIFIC (SYMFONY)

### 14.1 Security
- [ ] Check security.yaml configuration
- [ ] Verify firewall configuration
- [ ] Check for proper voter usage
- [ ] Identify missing CSRF protection
- [ ] Check for parameter injection vulnerabilities
- [ ] Verify password encoder configuration

### 14.2 Performance
- [ ] Check for proper DI container compilation
- [ ] Identify missing cache warmup
- [ ] Check for autowiring performance
- [ ] Find Doctrine hydration issues
- [ ] Identify missing Doctrine caching
- [ ] Check for proper serializer usage

### 14.3 Best Practices
- [ ] Find services that should be private
- [ ] Identify missing interfaces for services
- [ ] Check for proper event dispatcher usage
- [ ] Find logic in controllers
- [ ] Detect missing DTOs
- [ ] Check for proper messenger usage

---

## 15. API SECURITY

### 15.1 Authentication
- [ ] Check JWT implementation security
- [ ] Verify OAuth implementation
- [ ] Check for API key exposure
- [ ] Identify missing token expiration
- [ ] Find refresh token vulnerabilities
- [ ] Check for proper token storage

### 15.2 Rate Limiting
- [ ] Find endpoints without rate limiting
- [ ] Identify bypassable rate limiting
- [ ] Check for proper rate limit headers
- [ ] Detect DDoS vulnerabilities

### 15.3 Input/Output
- [ ] Find missing request validation
- [ ] Identify excessive data exposure in responses
- [ ] Check for proper error responses (no stack traces)
- [ ] Detect mass assignment in API
- [ ] Find missing pagination limits
- [ ] Check for proper HTTP status codes

---

## 16. EDGE CASES CHECKLIST

### 16.1 String Edge Cases
- [ ] Empty strings
- [ ] Very long strings (>1MB)
- [ ] Unicode characters (emoji, RTL, zero-width)
- [ ] Null bytes in strings
- [ ] Newlines and special characters
- [ ] Multi-byte character handling
- [ ] String encoding mismatches

### 16.2 Numeric Edge Cases
- [ ] Zero values
- [ ] Negative numbers
- [ ] Very large numbers (PHP_INT_MAX)
- [ ] Floating point precision issues
- [ ] Numeric strings ("123" vs 123)
- [ ] Scientific notation
- [ ] NAN and INF

### 16.3 Array Edge Cases
- [ ] Empty arrays
- [ ] Single element arrays
- [ ] Associative vs indexed arrays
- [ ] Sparse arrays (missing keys)
- [ ] Deeply nested arrays
- [ ] Large arrays (memory)
- [ ] Array key type juggling

### 16.4 Date/Time Edge Cases
- [ ] Timezone handling
- [ ] Daylight saving time transitions
- [ ] Leap years and February 29
- [ ] Month boundaries (31st)
- [ ] Year boundaries
- [ ] Unix timestamp limits (2038 problem on 32-bit)
- [ ] Invalid date strings
- [ ] Different date formats

### 16.5 File Edge Cases
- [ ] Files with spaces in names
- [ ] Files with unicode names
- [ ] Very long file paths
- [ ] Special characters in filenames
- [ ] Files with no extension
- [ ] Empty files
- [ ] Binary files treated as text
- [ ] File permission issues

### 16.6 HTTP Edge Cases
- [ ] Missing headers
- [ ] Duplicate headers
- [ ] Very large headers
- [ ] Invalid content types
- [ ] Chunked transfer encoding
- [ ] Connection timeouts
- [ ] Redirect loops

### 16.7 Database Edge Cases
- [ ] NULL values in columns
- [ ] Empty string vs NULL
- [ ] Very long text fields
- [ ] Concurrent modifications
- [ ] Transaction timeouts
- [ ] Connection pool exhaustion
- [ ] Character set mismatches

---

## OUTPUT FORMAT

For each issue found, provide:

### [SEVERITY: CRITICAL/HIGH/MEDIUM/LOW] Issue Title

**Category**: [Security/Performance/Type Safety/etc.]
**File**: path/to/file.php
**Line**: 123-145
**CWE/CVE**: (if applicable)
**Impact**: Description of what could go wrong

**Current Code**:
```php
// problematic code
```

**Problem**: Detailed explanation of why this is an issue

**Recommendation**:
```php
// fixed code
```

**References**: Links to documentation, OWASP, PHP manual
```

---

## PRIORITY MATRIX

1. **CRITICAL** (Fix Within 24 Hours):
   - SQL Injection
   - Remote Code Execution
   - Authentication Bypass
   - Arbitrary File Upload/Read/Write

2. **HIGH** (Fix This Week):
   - XSS Vulnerabilities
   - CSRF Issues
   - Authorization Flaws
   - Sensitive Data Exposure
   - Insecure Deserialization

3. **MEDIUM** (Fix This Sprint):
   - Type Safety Issues
   - Performance Problems
   - Missing Validation
   - Configuration Issues

4. **LOW** (Technical Debt):
   - Code Quality Issues
   - Documentation Gaps
   - Style Inconsistencies
   - Minor Optimizations

---

## AUTOMATED TOOL COMMANDS

Run these and include output analysis:

```bash
# Security Scanning
composer audit
./vendor/bin/phpstan analyse --level=9
./vendor/bin/psalm --show-info=true

# Code Quality
./vendor/bin/phpcs --standard=PSR12
./vendor/bin/php-cs-fixer fix --dry-run --diff
./vendor/bin/phpmd src text cleancode,codesize,controversial,design,naming,unusedcode

# Dependency Analysis
composer outdated --direct
composer depends --tree

# Dead Code Detection
./vendor/bin/phpdcd src

# Copy-Paste Detection
./vendor/bin/phpcpd src

# Complexity Analysis
./vendor/bin/phpmetrics --report-html=report src
```

---

## FINAL SUMMARY

After completing the review, provide:

1. **Executive Summary**: 2-3 paragraphs overview
2. **Risk Assessment**: Overall risk level (Critical/High/Medium/Low)
3. **OWASP Top 10 Coverage**: Which vulnerabilities were found
4. **Top 10 Critical Issues**: Prioritized list
5. **Dependency Health Report**: Summary of package status
6. **Technical Debt Estimate**: Hours/days to remediate
7. **Recommended Action Plan**: Phased approach

8. **Metrics Dashboard**:
   - Total issues by severity
   - Security score (1-10)
   - Code quality score (1-10)
   - Test coverage percentage
   - Dependency health score (1-10)
   - PHP version compatibility status

````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [php-microscope-forensic-codebase-autopsy-protocol](https://prompts.chat/prompts/php-microscope-forensic-codebase-autopsy-protocol) |
| Category | Vibe Coding (`vibe`) |
| Type | `TEXT` |
| Tags | Code Review |
| Contributors | ersinkoc |
| Updated At | 2026-01-28T07:40:35.350Z |
