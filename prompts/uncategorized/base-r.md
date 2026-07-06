---
id: "cmn8v2lx10001ik04toej4wkx"
slug: "base-r"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/base-r"
category: "uncategorized"
category_name: "Uncategorized"
category_zh: "未分类"
type: "SKILL"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "779ff98e63e847d39a425fdd79e0187a3ecfba48b9dac0c23b689cbb6712322e"
upstream_updated_at: "2026-03-27T12:12:03.062Z"
---
# 碱基R

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[base-r](https://prompts.chat/prompts/base-r)  
> 分类：未分类（Uncategorized / `uncategorized`）  
> 类型：`SKILL`  
> 翻译状态：`machine_translated`

## 中文说明

提供基本 R 编程指南，涵盖数据结构、数据整理、统计建模、可视化和 I/O，仅使用标准 R 安装中包含的包

## 使用场景

- 用于未分类相关任务的 AI prompt 输入。
- 用于构建智能体技能、工具调用说明或可复用工作流。
- 适合围绕 claude-code、coding、skills、Data Analysis 等主题快速生成可复用结果。
- 适合需要用户上传媒体素材后再让模型处理的多模态任务。

## 适用人群

- AI 使用者
- 内容创作者
- 效率工具用户

## 中文 Prompt 正文

````md
---
名称：base-r
描述：仅使用标准 R 安装中包含的包，提供基本 R 编程指南，涵盖数据结构、数据整理、统计建模、可视化和 I/O
---

# 基础 R 编程技能

基础 R 编程的综合参考 — 涵盖数据结构、控制流、函数、I/O、统计计算和绘图。

## 快速参考

### 数据结构

```r
# Vectors (atomic)
x <- c(1, 2, 3)              # numeric
y <- c("a", "b", "c")        # character
z <- c(TRUE, FALSE, TRUE)    # logical

# Factor
f <- factor(c("low", "med", "high"), levels = c("low", "med", "high"), ordered = TRUE)

# Matrix
m <- matrix(1:6, nrow = 2, ncol = 3)
m[1, ]       # first row
m[, 2]       # second column

# List
lst <- list(name = "ali", scores = c(90, 85), passed = TRUE)
lst$name      # access by name
lst[[2]]      # access by position

# Data frame
df <- data.frame(
  id = 1:3,
  name = c("a", "b", "c"),
  value = c(10.5, 20.3, 30.1),
  stringsAsFactors = FALSE
)
df[df$value > 15, ]    # filter rows
df$new_col <- df$value * 2  # add column
```

### 子集化

```r
# Vectors
x[1:3]             # by position
x[c(TRUE, FALSE)]  # by logical
x[x > 5]           # by condition
x[-1]              # exclude first

# Data frames
df[1:5, ]                    # first 5 rows
df[, c("name", "value")]     # select columns
df[df$value > 10, "name"]    # filter + select
subset(df, value > 10, select = c(name, value))

# which() for index positions
idx <- which(df$value == max(df$value))
```

### 控制流程

```r
# if/else
if (x > 0) {
  "positive"
} else if (x == 0) {
  "zero"
} else {
  "negative"
}

# ifelse (vectorized)
ifelse(x > 0, "pos", "neg")

# for loop
for (i in seq_along(x)) {
  cat(i, x[i], "\n")
}

# while
while (condition) {
  # body
  if (stop_cond) break
}

# switch
switch(type,
  "a" = do_a(),
  "b" = do_b(),
  stop("Unknown type")
)
```

### 函数

```r
# Define
my_func <- function(x, y = 1, ...) {
  result <- x + y
  return(result)  # or just: result
}

# Anonymous functions
sapply(1:5, function(x) x^2)
# R 4.1+ shorthand:
sapply(1:5, \(x) x^2)

# Useful: do.call for calling with a list of args
do.call(paste, list("a", "b", sep = "-"))
```

### 申请家庭

```r
# sapply — simplify result to vector/matrix
sapply(lst, length)

# lapply — always returns list
lapply(lst, function(x) x[1])

# vapply — like sapply but with type safety
vapply(lst, length, integer(1))

# apply — over matrix margins (1=rows, 2=cols)
apply(m, 2, sum)

# tapply — apply by groups
tapply(df$value, df$group, mean)

# mapply — multivariate
mapply(function(x, y) x + y, 1:3, 4:6)

# aggregate — like tapply for data frames
aggregate(value ~ group, data = df, FUN = mean)
```

### 字符串操作

```r
paste("a", "b", sep = "-")    # "a-b"
paste0("x", 1:3)              # "x1" "x2" "x3"
sprintf("%.2f%%", 3.14159)    # "3.14%"
nchar("hello")                # 5
substr("hello", 1, 3)         # "hel"
gsub("old", "new", text)      # replace all
grep("pattern", x)            # indices of matches
grepl("pattern", x)           # logical vector
strsplit("a,b,c", ",")        # list("a","b","c")
trimws("  hi  ")              # "hi"
tolower("ABC")                # "abc"
```

### 数据输入/输出

```r
# CSV
df <- read.csv("data.csv", stringsAsFactors = FALSE)
write.csv(df, "output.csv", row.names = FALSE)

# Tab-delimited
df <- read.delim("data.tsv")

# General
df <- read.table("data.txt", header = TRUE, sep = "\t")

# RDS (single R object, preserves types)
saveRDS(obj, "data.rds")
obj <- readRDS("data.rds")

# RData (multiple objects)
save(df1, df2, file = "data.RData")
load("data.RData")

# Connections
con <- file("big.csv", "r")
chunk <- readLines(con, n = 100)
close(con)
```

### 基础绘图

```r
# Scatter
plot(x, y, main = "Title", xlab = "X", ylab = "Y",
     pch = 19, col = "steelblue", cex = 1.2)

# Line
plot(x, y, type = "l", lwd = 2, col = "red")
lines(x, y2, col = "blue", lty = 2)  # add line

# Bar
barplot(table(df$category), main = "Counts",
        col = "lightblue", las = 2)

# Histogram
hist(x, breaks = 30, col = "grey80",
     main = "Distribution", xlab = "Value")

# Box plot
boxplot(value ~ group, data = df,
        col = "lightyellow", main = "By Group")

# Multiple plots
par(mfrow = c(2, 2))  # 2x2 grid
# ... four plots ...
par(mfrow = c(1, 1))  # reset

# Save to file
png("plot.png", width = 800, height = 600)
plot(x, y)
dev.off()

# Add elements
legend("topright", legend = c("A", "B"),
       col = c("red", "blue"), lty = 1)
abline(h = 0, lty = 2, col = "grey")
text(x, y, labels = names, pos = 3, cex = 0.8)
```

### 统计

```r
# Descriptive
mean(x); median(x); sd(x); var(x)
quantile(x, probs = c(0.25, 0.5, 0.75))
summary(df)
cor(x, y)
table(df$category)  # frequency table

# Linear model
fit <- lm(y ~ x1 + x2, data = df)
summary(fit)
coef(fit)
predict(fit, newdata = new_df)
confint(fit)

# t-test
t.test(x, y)                    # two-sample
t.test(x, mu = 0)               # one-sample
t.test(before, after, paired = TRUE)

# Chi-square
chisq.test(table(df$a, df$b))

# ANOVA
fit <- aov(value ~ group, data = df)
summary(fit)
TukeyHSD(fit)

# Correlation test
cor.test(x, y, method = "pearson")
```

### 数据操作

```r
# Merge (join)
merged <- merge(df1, df2, by = "id")                  # inner
merged <- merge(df1, df2, by = "id", all = TRUE)      # full outer
merged <- merge(df1, df2, by = "id", all.x = TRUE)    # left

# Reshape
wide <- reshape(long, direction = "wide",
                idvar = "id", timevar = "time", v.names = "value")
long <- reshape(wide, direction = "long",
                varying = list(c("v1", "v2")), v.names = "value")

# Sort
df[order(df$value), ]              # ascending
df[order(-df$value), ]             # descending
df[order(df$group, -df$value), ]   # multi-column

# Remove duplicates
df[!duplicated(df), ]
df[!duplicated(df$id), ]

# Stack / combine
rbind(df1, df2)    # stack rows (same columns)
cbind(df1, df2)    # bind columns (same rows)

# Transform columns
df$log_val <- log(df$value)
df$category <- cut(df$value, breaks = c(0, 10, 20, Inf),
                   labels = c("low", "med", "high"))
```

### 环境与调试

```r
ls()                  # list objects
rm(x)                 # remove object
rm(list = ls())       # clear all
str(obj)              # structure
class(obj)            # class
typeof(obj)           # internal type
is.na(x)              # check NA
complete.cases(df)    # rows without NA
traceback()           # after error
debug(my_func)        # step through
browser()             # breakpoint in code
system.time(expr)     # timing
Sys.time()            # current time
```

## 参考文件

如需更深入的了解，请阅读 `references/` 中的参考文件：

### 函数陷阱和快速参考（摘自 R 4.5.3 参考手册）
不明显的行为、令人惊讶的默认设置和棘手的交互——只有克劳德还不知道：
- **data-wrangling.md** — 在以下情况下阅读：子集返回错误的类型，应用于数据帧会产生意外的强制，合并/拆分/cbind 行为奇怪，过滤后因子水平仍然存在，表/重复的边缘情况。
- **modeling.md** — 当以下情况阅读：公式语法令人困惑（`I()`、`*` 与 `:`、`/`）、aov 给出错误的 SS 类型、glm 默默地适合 OLS、nls 不会收敛、预测返回错误的比例、优化/优化需要调整。
- **statistics.md** — 阅读时间：假设检验给出令人惊讶的结果，需要选择正确的 p.adjust 方法，聚类参数似乎错误，分布函数命名令人困惑（`d`/`p`/`q`/`r` 前缀）。
- **visualization.md** — 阅读时间：标准设置意外重置、布局/mfrow 交互混乱、轴标签被剪裁、颜色看起来不正确、需要特殊绘图（等高线、透视、马赛克、成对）。
- **io-and-text.md** — 读取时间：read.table 默默地删除数据或错误解析列，正则表达式的行为与预期不同，sprintf 格式很棘手，write.table 输出具有不需要的行名称。
- **dates-and-system.md** — 阅读时间：日期/POSIXct 转换给出错误的日期，时区导致相差一，difftime 单位意外，需要以编程方式查找/列出/测试文件。
- **misc-utilities.md** — 阅读时间：do.call 的行为与直接调用不同，需要Reduce/Filter/Map，tryCatch 处理程序不触发，all.equal 返回不符合逻辑的字符串，时间序列函数需要设置。

## 编写优秀 R 代码的技巧

- 在生产代码中使用 `vapply()` 而不是 `sapply()` — 它强制返回类型
- 优先选择 `seq_along(x)` 而不是 `1:length(x)` — 当 `x` 为空时后者会中断
- 在 `read.csv()` / `data.frame()` 中使用 `stringsAsFactors = FALSE` （默认值在 R 4.0 中更改）
- 尽可能向量化操作而不是编写循环
- 使用 `stop()`、`warning()`、`message()` 进行错误处理 — 而不是 `print()`
- `<<-` 分配给父环境 - 谨慎且有意地使用
- `with(df, expr)` 避免到处重复 `df$`
- `Sys.setenv()` 和 `.Renviron` 用于环境变量
文件:references/misc-utilities.md
# 其他实用程序 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## 调用

- `do.call(fun, args_list)` — `args` 必须是 **列表**，即使对于单个参数也是如此。
- `quote = TRUE` 防止在调用之前对参数求值——传递表达式/符号时需要。
- `do.call` 内部 `substitute` 的行为与直接调用不同。对于这种情况，语义尚未完全定义。
- 有用的模式：`do.call(rbind, list_of_dfs)` 组合数据帧列表。

---

## 减少/过滤/映射/查找/定位

R 的函数式编程助手来自于基础——真正不明显。

- `Reduce(f, x)` 累计应用二进制函数 `f`：`Reduce("+", 1:4)` = `((1+2)+3)+4`。方向对于非交换操作很重要。
- `Reduce(f, x, accumulate = TRUE)` 返回所有中间结果 - 相当于 Python 的 `itertools.accumulate`。
- `Reduce(f, x, right = TRUE)` 从右侧折叠：`f(x1, f(x2, f(x3, x4)))`。
- `Reduce` 与 `init` 添加起始值：`Reduce(f, x, init = v)` = `f(f(f(v, x1), x2), x3)`。
- `Filter(f, x)` 保留 `f(elem)` 为 `TRUE` 的元素。与 `x[sapply(x, f)]` 不同，正确处理 `NULL`/empty。
- `Map(f, ...)` 是 `mapply(f, ..., SIMPLIFY = FALSE)` 的简单包装器 — 始终返回一个列表。
- `Find(f, x)` 返回**第一个**元素，其中 `f(elem)` 是 `TRUE`。最后是`Find(f, x, right = TRUE)`。
- `Position(f, x)` 返回第一个匹配的**索引**（与 `Find` 类似，但返回位置，而不是值）。

---

## 长度

- `lengths(x)` 返回列表的**每个元素**的长度。相当于 `sapply(x, length)` 但更快（用 C 实现）。
- 适用于任何类似列表的对象。返回整数向量。

---

## 条件（tryCatch / withCallingHandlers）

- `tryCatch` **展开**调用堆栈 - 处理程序在调用环境中运行，而不是在发生错误的位置中运行。无法恢复执行。
- `withCallingHandlers` 不会展开 - 处理程序在发出条件信号的地方运行。可以检查/记录然后让情况传播。
- `tryCatch(expr, error = function(e) e)` 返回错误条件对象。
- `tryCatch(expr, warning = function(w) {...})` 捕获**第一个**警告并退出。使用 `withCallingHandlers` + `invokeRestart("muffleWarning")` 抑制警告但继续。
- `tryCatch` `finally` 子句始终运行（如 Java try/finally）。
- `globalCallingHandlers()` 注册在会话中持续存在的处理程序（对于日志记录很有用）。
- 自定义条件：`stop(errorCondition("msg", class = "myError"))` 然后赶上 `tryCatch(..., myError = function(e) ...)`。

---

## 所有.equal

- 测试**接近相等**与公差（默认 `1.5e-8`，即 `sqrt(.Machine$double.eps)`）。
- 返回 `TRUE` 或描述差异的**字符串** — 而不是 `FALSE`。在条件语句中使用 `isTRUE(all.equal(x, y))`。
- `tolerance` 参数控制数字容差。 `scale` 用于绝对与相对比较。
- 检查属性、名称、尺寸——比 `==` 更彻底。

---

## 组合

- `combn(n, m)` 或 `combn(x, m)`：从 `x` 生成 `m` 项目的所有组合。
- 返回具有 `m` 行的 **矩阵**；每一列都是一个组合。
- `FUN` 参数将函数应用于每个组合：`combn(5, 3, sum)` 返回所有 3 元素子集的总和。
- `simplify = FALSE` 返回列表而不是矩阵。

---

## 修改列表

- `modifyList(x, val)` 将列表 `x` 中的元素替换为 `val` 中的 **name** 元素。
- 将值设置为 `NULL` **从列表中删除**该元素。
- **不**添加 `x` 中没有的新名称 — 它在内部使用 `x[names(val)] <- val`，因此 `val` 中的任何名称都会被添加或替换。

---

## 重新列出

- `unlist` 的逆：给定平面向量和骨架列表，重建嵌套结构。
- `relist(flesh, skeleton)` — `flesh` 是平面数据，`skeleton` 提供形状。
- 使用因子、矩阵和嵌套列表。

---

## txt进度条

- `txtProgressBar(min, max, style = 3)` — 样式 3 显示百分比 + 条形（最有用）。
- 使用 `setTxtProgressBar(pb, value)` 进行更新。关闭`close(pb)`。
- 风格1：旋转`|/-\`，风格2：简单进步。仅样式 3 显示百分比。

---

## 对象大小

- 返回对象使用的内存的**估计**。对于共享参考并不总是准确的。
- `format(object.size(x), units = "MB")` 用于人类可读的输出。
- 不计算环境或外部指针的大小。

---

## 安装的.packages / 更新.packages

- `installed.packages()` 可能会很慢（扫描所有包）。使用 `find.package()` 或 `requireNamespace()` 检查特定包。
- `update.packages(ask = FALSE)` 更新所有软件包而不提示。
- `lib.loc` 指定要检查/更新的库。

---

## 小插图/演示

- `vignette()` 列出所有小插图； `vignette("name", package = "pkg")` 打开特定的一个。
- `demo()` 列出所有演示； `demo("topic")` 以交互方式运行一个。
- `browseVignettes()` 在 HTML 中打开晕影浏览器。

---

## 时间序列：acf / arima / ts / stl / decompose

- `ts(data, start, frequency)`：`frequency` 是每单位时间的观测值（每月 12 个，每季度 4 个）。
- `acf` 默认 `type = "correlation"`。对 PACF 使用 `type = "partial"`。 `plot = FALSE` 抑制自动绘图。
- `arima(x, order = c(p,d,q))` 适用于 ARIMA 型号。 `seasonal = list(order = c(P,D,Q), period = S)` 用于季节性成分。
- `arima` 处理时间序列中的 `NA` 值（通过卡尔曼滤波器）。
- `stl` 需要 `s.window`（季节性窗口）— 必须指定，无默认值。 `s.window = "periodic"` 假设固定季节性。
- `decompose`：比`stl`简单，使用移动平均线。 `type = "additive"` 或 `"multiplicative"`。
- `stl` 结果分量：具有 `seasonal`、`trend`、`remainder` 列的 `$time.series` 矩阵。
文件：参考文献/data-wrangling.md
# 数据整理 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## 提取/提取.data.frame

基本 R 中的索引陷阱。

- `m[j = 2, i = 1]` 是 `m[2, 1]` 而不是 `m[1, 2]` — `[` 中的参数名称被 **忽略**，仅进行位置匹配。切勿命名索引参数。
- 因子索引：`x[f]` 使用因子 `f` 的整数代码，而不是其字符标签。使用 `x[as.character(f)]` 进行基于标签的索引。
- 没有索引的 `x[[]]` 始终是错误。 `x$name`默认进行部分匹配； `x[["name"]]` 没有（默认情况下）。
- 通过 `x[[i]] <- NULL` 或 `x$name <- NULL` 分配 `NULL` **删除**该列表元素。
- 具有单列的数据框 `[`：`df[, 1]` 返回一个 **向量**（对于列，drop=TRUE 默认值），但 `df[1, ]` 返回一个 **数据框**（对于行，drop=FALSE）。明确使用 `drop = FALSE`。
- 矩阵索引数据帧 (`df[cbind(i,j)]`) 首先强制转换为矩阵 — 避免。

---

## 子集

仅交互使用；编程不安全。

- `subset` 参数使用**非标准评估** - 列名在数据框中解析，这可以在编程使用中默默地拾取错误的变量。在函数中使用具有显式逻辑的 `[`。
- 逻辑条件中的 `NA` 被视为 `FALSE`（静默删除行）。
- 子集化后因子可能保留未使用的级别；请致电 `droplevels()`。

---

## 匹配 / %in%

- `%in%` **永远不会返回 NA** — 这使得 `if()` 条件下的安全性与 `==` 不同。
- `match()` 仅返回**第一个**匹配的位置； `table` 中的重复项将被忽略。
- 因子、原始向量和列表在匹配之前都转换为字符。
- `NaN` 匹配 `NaN` 但不匹配 `NA`； `NA` 仅与 `NA` 匹配。

---

## 申请

- 在**数据帧**上，`apply` 首先通过 `as.matrix` 强制转换为矩阵 - 混合类型变成字符。
- 返回值方向被调换：如果 FUN 返回长度为 n 的向量，则结果为暗淡的 `c(n, dim(X)[MARGIN])`。行结果变成**列**。
- 因子结果被强制转换为输出数组中的字符。
- `...` 参数不能与 `X`、`MARGIN` 或 `FUN` 共享名称（部分匹配风险）。

---

## l 申请 / sapply / vapply

- `sapply` 可以不可预测地返回向量、矩阵或列表 — 在具有显式 `FUN.VALUE` 模板的非交互式代码中使用 `vapply`。
- 直接在 `lapply` 中调用原语可能会导致调度问题；包裹在 `function(x) is.numeric(x)` 中而不是裸露的 `is.numeric` 中。
- `sapply` 与 `simplify = "array"` 可以生成更高阶的数组（不仅仅是矩阵）。

---

## 点击

- 返回一个**数组**（不是数据框）。返回值的类信息被**丢弃**（例如，Date 对象变成数字）。
- FUN 的 `...` 参数**不**分为单元格 - 它们适用于全局，因此 FUN 不应期望具有与 X 相同长度的额外参数。
- `default = NA` 填充空单元格；设置 `default = 0` 进行类似求和的运算。在 R 3.4.0 之前，这被硬编码为 `NA`。
- 使用 `array2DF()` 将结果转换为数据帧。

---

## 映射

- 参数名称是 `SIMPLIFY`（全部大写）而不是 `simplify` — 与 `sapply` 不一致。
- `MoreArgs` 必须是未矢量化的参数的**列表**。
- 将较短的参数回收为通用长度；零长度 arg 给出零长度结果。

---

## 合并

- 默认 `by` 是 `intersect(names(x), names(y))` — 如果数据框共享列名称，则可以静默合并非预期列。
- `by = 0` 或 `by = "row.names"` 合并行名称，添加“Row.names”列。
- `by = NULL`（或 `by.x`/`by.y` 长度均为 0）产生 **笛卡尔积**。
- 默认情况下，结果按 `by` 列排序 (`sort = TRUE`)。对于未排序的输出，请使用 `sort = FALSE`。
- 重复的键匹配会产生**所有组合**（每个匹配对一行）。

---

## 分割

- 如果 `f` 是因素列表，则使用交互作用；包含 `"."` 的级别可能会导致意外拆分，除非更改 `sep`。
- `drop = FALSE`（默认）将空因子水平保留为空列表元素。
- 支持公式语法：`split(df, ~ Month)`。

---

## cbind / rbind

- 数据帧上的 `cbind` 调用 `data.frame(...)`，而不是 `cbind.matrix`。混合矩阵和数据框可能会产生意想不到的结果。
- 数据帧上的 `rbind` 匹配列**按名称**，而不是位置。缺少的列得到 `NA`。
- `cbind(NULL)` 返回 `NULL` （不是矩阵）。为了保持一致性，`rbind(NULL)` 还返回 `NULL`。

---

## 表

- 默认情况下**不包括 NA** (`useNA = "no"`)。使用 `useNA = "ifany"` 或 `exclude = NULL` 来计算 NA。
- 将 `exclude` 设置为非空且非默认意味着 `useNA = "ifany"`。
- 结果始终是一个**数组**（甚至是一维），类“表”。使用 `as.data.frame(tbl)` 转换为数据帧。
- 根据 `useNA`/`exclude`，两种 NA（因子级 NA 与实际 NA）的处理方式有所不同。

---

## 重复/唯一

- `duplicated` 将**第二次及以后**出现的情况标记为 TRUE，而不是第一次。使用`fromLast = TRUE`反转。
- 对于数据框，对整行进行操作。对于列表，递归比较。
- `unique` 保留每个值的**第一次**出现。

---

## data.frame（陷阱）

- `stringsAsFactors = FALSE` 是自 R 4.0.0 以来的默认值（之前为 TRUE）。
- 原子向量回收以匹配最长的列，但前提是精确的倍数。使用 `I()` 进行保护以防止转换。
- 仅 `check.names = FALSE` 允许重复列名，但许多操作会静默删除重复列名。
- 矩阵参数将扩展到多列，除非受 `I()` 保护。

---

## 因素（陷阱）

- `as.numeric(f)` 返回**整数代码**，而不是原始值。使用 `as.numeric(levels(f))[f]` 或 `as.numeric(as.character(f))`。
- 只有 `==` 和 `!=` 在因子之间起作用；因素必须具有相同的水平集。有序因子支持 `<`、`>`。
- 因子并集水平集上的 `c()`（自 R 4.1.0 起），但早期版本转换为整数。
- 级别默认排序，但排序顺序在创建时取决于**区域设置**。

---

## 聚合

- 公式界面（`aggregate(y ~ x, data, FUN)`）默认删除`NA`组。
- 数据框方法需要 `by` 作为 **列表** （不是向量）。
- 返回以分组变量命名的列，结果列保留原始名称。
- 如果 FUN 返回多个值，则结果列是数据框中的**矩阵列**。

---

## 完整案例

- 返回一个逻辑向量：对于所有列/参数中没有** NA 的行，为 TRUE。
- 适用于多个参数（例如，`complete.cases(x, y)` 检查两者）。

---

## 订单

- 返回索引的**排列向量**，而不是排序值。使用 `x[order(x)]` 进行排序。
- 默认为升序；使用 `-x` 表示降序数字，或使用 `decreasing = TRUE`。
- 对于字符排序，取决于区域设置。使用 `method = "radix"` 进行与区域设置无关的快速排序。
- 对于大型整数/字符向量，`sort.int()` 与 `method = "radix"` 的速度要快得多。
文件：引用/日期和系统.md
# 日期和系统 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## 日期（日期类）

- `Date` 对象存储为 **自 1970 年 1 月 1 日以来的整数天数**。算术在几天内完成。
- `Sys.Date()` 返回当前日期作为 Date 对象。
- `seq.Date(from, to, by = "month")` —“月”增量可以产生不同长度的间隔。 1 月 31 日加 1 个月得到 3 月 3 日（不是 2 月 28 日）。
- `diff(dates)` 以天为单位返回 `difftime` 对象。
- `format(date, "%Y")` 表示年份，`"%m"` 表示月份，`"%d"` 表示日期，`"%A"` 表示工作日名称（取决于区域设置）。
- 1CE 之前的年份可能无法正确处理。
- `length(date_vector) <- n` 垫与 `NA`（如果延长）。

---

## 日期时间类 (POSIXct / POSIXlt)

- `POSIXct`：自 1970-01-01 UTC 以来的秒数（紧凑，数字向量）。
- `POSIXlt`：包含组件 `$sec`、`$min`、`$hour`、`$mday`、`$mon`（0-11！）、`$year`（自 1900 年起！）、`$wday`（0-6，星期日=0）的列表， `$yday` (0-365)。
- POSIXct 和日期之间的转换：`as.Date(posixct_obj)` 默认情况下使用 `tz = "UTC"` — 如果原始日期位于另一个时区，则可能会给出与预期不同的日期。
- `Sys.time()` 返回当前时区的 POSIXct。
- `strptime` 返回 POSIXlt； `as.POSIXct(strptime(...))` 获取 POSIXct。
- `difftime` 算术：减去 POSIXct 对象给出 difftime。自动选择单位（“秒”、“分钟”、“小时”、“天”、“周”）。

---

## 差异时间

- `difftime(time1, time2, units = "auto")` — 自动选择最小的合理单位。
- 显式单位：`"secs"`、`"mins"`、`"hours"`、`"days"`、`"weeks"`。没有“月”或“年”（可变长度）。
- `as.numeric(diff, units = "hours")` 提取特定单位的数值。
- `units(diff_obj) <- "hours"` 将单位更改到位。

---

## 系统时间/过程时间

- `system.time(expr)` 返回 `user`、`system` 和 `elapsed` 时间。
- `gcFirst = TRUE`（默认）：在计时之前运行垃圾收集以获得更一致的结果。
- `proc.time()` 返回自 R 启动以来的累积时间 - 取间隔差。
- `elapsed`（挂钟）可以小于 `user`（多线程 BLAS）或更多（I/O 等待）。

---

## 系统睡眠

- `Sys.sleep(seconds)` — 允许小数秒。实际睡眠时间可能更长（操作系统调度）。
- 进程在睡眠期间**屈服于操作系统（不忙等待）。

---

## 选项（关键选项）

选定的非显而易见的选项：

- `options(scipen = n)`：对固定符号的积极偏见，对科学的消极偏见。默认 0。适用于 `print`/`format`/`cat`，但不适用于 `sprintf`。
- `options(digits = n)`：打印有效数字（1-22，默认7）。仅建议。
- `options(digits.secs = n)`：时间格式中秒的最大小数位数（0-6，默认 0）。
- `options(warn = n)`：-1 = 忽略警告，0 = 收集（默认），1 = 立即，2 = 转换为错误。
- `options(error = recover)`：出现错误时进入调试器。 `options(error = NULL)` 重置为默认值。
- `options(OutDec = ",")`：更改输出中的小数点分隔符（影响 `format`、`print`，而不是 `sprintf`）。
- `options(stringsAsFactors = FALSE)`：`data.frame` 的全局默认值（从 R 4.0.0 开始就没有实际意义了，它已经是 FALSE）。
- `options(expressions = 5000)`：最大嵌套评估。增加深度递归。
- `options(max.print = 99999)`：控制 `print` 输出中的截断。
- `options(na.action = "na.omit")`：模型函数中的默认 NA 处理。
- `options(contrasts = c("contr.treatment", "contr.poly"))`：无序/有序因子的默认对比。

---

## 文件.路径/基本名称/目录名称

- `file.path("a", "b", "c.txt")` → `"a/b/c.txt"`（适合平台的分隔符）。
- `basename("/a/b/c.txt")` → `"c.txt"`。 `dirname("/a/b/c.txt")` → `"/a/b"`。
- `file.path` 不会标准化路径（无 `..` 分辨率）；为此使用 `normalizePath()` 。

---

## 列表.文件

- `list.files(pattern = "*.csv")` — `pattern` 是一个 **regex**，而不是一个 glob！使用 `glob2rx("*.csv")` 或 `"\\.csv$"`。
- `full.names = FALSE`（默认）仅返回基本名称。使用 `full.names = TRUE` 获取完整路径。
- `recursive = TRUE` 搜索子目录。
- `all.files = TRUE` 包含隐藏文件（以 `.` 开头）。

---

## 文件信息

- 返回 `size`、`isdir`、`mode`、`mtime`、`ctime`、`atime`、`uid`、`gid` 的数据帧。
- `mtime`：修改时间（POSIXct）。适用于 `file.info(f)$mtime`。
- 在某些文件系统上，`ctime` 是状态更改时间，而不是创建时间。

---

## 文件测试

- `file_test("-f", path)`：如果常规文件存在，则为 TRUE。
- `file_test("-d", path)`：如果目录存在，则为 TRUE。
- `file_test("-nt", f1, f2)`：如果 f1 比 f2 新，则为 TRUE。
- 比 `file.exists()` 更可靠地区分文件和目录。
文件：references/io-and-text.md
# I/O 和文本处理 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## read.table（陷阱）

- `sep = ""`（默认）表示**任何空格**（空格、制表符、换行符）——而不是文字空字符串。
- 默认情况下为 `comment.char = "#"` — 包含 `#` 的行将被截断。使用 `comment.char = ""` 禁用（也更快）。
- `header` 自动检测：如果第一行比后续行少一个字段（假设缺少的字段是行名称），则设置为 TRUE。
- `colClasses = "NULL"` **完全跳过**该列 - 对于速度非常有用。
- `read.csv` 默认值与 `read.table` 不同：`header = TRUE`、`sep = ","`、`fill = TRUE`、`comment.char = ""`。
- 对于大文件：指定 `colClasses` 和 `nrows` 会显着减少内存使用量。 `read.table` 对于宽数据帧（数百列）来说很慢；使用 `scan` 或 `data.table::fread` 作为矩阵。
- 自 R 4.0.0 起 `stringsAsFactors = FALSE` （之前为 TRUE）。

---

## write.table （陷阱）

- 默认情况下 `row.names = TRUE` — 生成未命名的第一列，这会混淆重新读取。对于与 Excel 兼容的 CSV，请使用 `row.names = FALSE` 或 `col.names = NA`。
- `write.csv` 修复了 `sep = ","`、`dec = "."` 并使用 `qmethod = "double"` — 无法通过 `...` 覆盖这些内容。
- `quote = TRUE`（默认）引用字符/因子列。数字列从不被引用。
- 数据框中类似矩阵的列会默默地扩展为多个列。
- 对于具有许多列（数百个以上）的数据帧来说速度较慢；每列按类别单独处理。

---

## 读取.fwf

- 读取固定宽度格式文件。 `widths` 是字段宽度的向量。
- **负宽度会跳过**那么多字符（对于忽略字段很有用）。
- `buffersize` 控制一次读取多少行；对于大文件增加。
- 分割字段后在内部使用 `read.table`。

---

## 计数字段

- 计算文件中每行的字段数 - 对于诊断读取错误很有用。
- `sep` 和 `quote` 参数与 `read.table` 的参数匹配。

---

## grep / grepl / sub / gsub （陷阱）

- 三种正则表达式模式：POSIX 扩展（默认）、`perl = TRUE`、`fixed = TRUE`。它们对于边缘情况的行为有所不同。
- **明确命名参数** — `x`/`pattern` 之后的未命名参数在位置上与 `ignore.case`、`perl` 等匹配。无声错误的常见来源。
- `sub` 仅替换 **第一个** 匹配； `gsub` 替换**所有**匹配。
- 反向引用：替换中的 `"\\1"`（R 字符串中的双反斜杠）。对于 `perl = TRUE`：`"\\U\\1"` 进行大写转换。
- `grep(value = TRUE)` 返回匹配的**元素**； `grep(value = FALSE)`（默认）返​​回**索引**。
- `grepl` 返回逻辑向量 — 首选用于过滤。
- `regexpr` 返回第一个匹配位置+长度（作为属性）； `gregexpr` 以列表形式返回所有匹配项。
- `regexec` 返回匹配+捕获组位置； `gregexec` 对所有比赛都执行此操作。
- 在 POSIX 模式下，像 `[:alpha:]` 这样的字符类必须位于 `[[:alpha:]]`（双括号）内。

---

## 字符串分割

- 返回一个**列表**（每个输入字符串一个元素），即使对于单个字符串也是如此。
- `split = ""` 或 `split = character(0)` 拆分为单个字符。
- 在字符串开头匹配：结果的第一个元素是 `""`。结束时匹配：无尾随 `""`。
- `fixed = TRUE` 更快并且避免了正则表达式解释。
- 常见错误：未命名参数默默地匹配 `fixed`、`perl` 等。

---

## 子字符串/子字符串

- `substr(x, start, stop)`：提取/替换子字符串。 1 索引，两端均包含。
- `substring(x, first, last)`：相同，但 `last` 默认为 `1000000L`（实际上是“结束”）。通过 `first`/`last` 进行矢量化。
- 分配形式：`substr(x, 1, 3) <- "abc"`就地替换（必须是相同长度的替换）。

---

## 修剪

- `which = "both"`（默认）、`"left"` 或 `"right"`。
- `whitespace = "[ \\t\\r\\n]"` — 可自定义的正则表达式，用于计算空白。

---

## nchar

- `type = "bytes"` 计算字节数； `type = "chars"`（默认）计算字符数； `type = "width"` 计算显示宽度。
- `nchar(NA)` 返回 `NA`（不是 2）。 `nchar(factor)` 适用于级别标签。
- `keepNA = TRUE`（自 R 3.3.0 起默认）；设置为 `FALSE` 将 `"NA"` 计为 2 个字符。

---

## 格式/格式C

- `format(x, digits, nsmall)`：`nsmall` 强制最小小数位数。 `big.mark = ","` 添加千位分隔符。
- `formatC(x, format = "f", digits = 2)`：C 风格格式。 `format = "e"` 为科学型，`"g"` 为通用型。
- `format` 返回字符向量；默认情况下始终右对齐 (`justify = "right"`)。

---

## 类型转换

- 将字符向量转换为适当的类型（逻辑、整数、双精度、复数、字符）。
- `as.is = TRUE`（推荐）：将字符保留为字符，而不是因子。
- 按列应用于数据框。 `tryLogical = TRUE` (R 4.3+) 转换“TRUE”/“FALSE”列。

---

## R脚本

- `commandArgs(trailingOnly = TRUE)` 获取脚本参数（不包括 R/Rscript 标志）。
- Unix 上的 `#!` 行：`/usr/bin/env Rscript` 或完整路径。
- `--vanilla` 或 `--no-init-file` 跳过 `.Rprofile` 加载。
- 退出代码：`quit(status = 1)` 表示错误退出。

---

## 捕获.输出

- 捕获 `cat`、`print` 或任何写入 stdout 的表达式的输出。
- `file = NULL`（默认）返​​回字符向量。 `file = "out.txt"` 直接写入文件。
- `type = "message"` 改为捕获 stderr。

---

## URL 编码 / URL 解码

- `URLencode(url, reserved = FALSE)` 默认情况下不编码保留字符（`/`、`?`、`&` 等）。
- 设置 `reserved = TRUE` 对 URL **组件**（查询参数值）进行编码。

---

## 全局2rx

- 将 shell glob 模式转换为正则表达式：`glob2rx("*.csv")` → `"^.*\\.csv$"`。
- 适用于 `list.files(pattern = glob2rx("data_*.RDS"))`。
文件：参考文献/建模.md
# 建模 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## 公式

符号模型规范的陷阱。

- `I()` 需要按字面意思使用算术运算符：`y ~ x + I(x^2)`。没有`I()`，`^`表示交互交叉。
- `*` = 主效应 + 交互作用：`a*b` 扩展到 `a + b + a:b`。
- `(a+b+c)^2` = 所有主效应 + 所有双向相互作用（不平方）。
- `-` 删除术语：`(a+b+c)^2 - a:b` 仅删除 `a:b` 交互。
- `/` 表示嵌套：`a/b` = `a + b %in% a` = `a + a:b`。
- 公式中的 `.` 表示“数据中的所有其他列”（在 `terms.formula` 上下文中）或“先前内容”（在 `update.formula` 中）。
- 公式对象带有用于变量查找的**环境**； `as.formula("y ~ x")` 使用 `parent.frame()`。

---

## 术语/模型.矩阵

- `model.matrix` 创建包括虚拟编码的设计矩阵。默认对比度：`contr.treatment` 表示无序因子，`contr.poly` 表示有序因子。
- `terms` 对象属性：`order`（每项交互顺序）、`intercept`、`factors` 矩阵。
- `model.matrix` 中的列名称可能会令人惊讶：例如 `factorLevelName` 串联。

---

## glm

- 默认 `family = gaussian(link = "identity")` — 没有 `family` 的 `glm()` 默默地适合 OLS（与 `lm` 相同，但速度较慢且具有基于偏差的输出）。
- 常见系列：`binomial(link = "logit")`、`poisson(link = "log")`、`Gamma(link = "inverse")`、`inverse.gaussian()`。
- `binomial` 接受响应为：0/1 向量、逻辑、因子（第二级 = 成功）或 2 列矩阵 `cbind(success, failure)`。
- `glm` 中的 `weights` 表示 **先前权重**（不是频率权重） - 对于频率权重，请使用 cbind 技巧或偏移。
- `predict.glm(type = "response")` 用于预测概率；默认 `type = "link"` 返回对数赔率（对于逻辑）或对数率（对于泊松）。
- `anova(glm_obj, test = "Chisq")` 用于基于偏差的测试； `"F"` 对于非高斯族无效。
- 准家庭（`quasibinomial`、`quasipoisson`）允许过度分散——不计算 AIC。
- 收敛：如果默认 25 次迭代不够，则为 `control = glm.control(maxit = 100)`。

---

## aov

- `aov` 是 `lm` 的包装，用于存储平衡方差分析的额外信息。对于不平衡设计，计算 I 型 SS（顺序）——项的顺序很重要。
- 对于 Type III SS，使用 `car::Anova()` 或设置与 `contr.sum`/`contr.helmert` 的对比度。
- 重复测量的错误层：`aov(y ~ A*B + Error(Subject/B))`。
- `summary.aov` 给出方差分析表； `summary.lm(aov_obj)` 给出回归式摘要。

---

## nls

- `start = list(...)` 中需要**良好的起始值**，否则收敛失败。
- 自启动型号（`SSlogis`、`SSasymp`等）自动计算起始值。
- 算法 `"port"` 允许参数范围 (`lower`/`upper`)。
- 如果数据拟合得太精确（无残留噪声），收敛检查将失败 - 使用 `control = list(scaleOffset = 1)` 或抖动数据。
- `weights` 加权 NLS 参数； `na.action` 用于缺失值处理。

---

## 步骤/添加1

- `step` 通过 AIC 进行**逐步**模型选择（默认）。 BIC 使用 `k = log(n)`。
- 方向：`direction = "both"`（默认）、`"forward"` 或 `"backward"`。
- `add1`/`drop1` 评估单项添加/删除； `step` 迭代调用这些。
- `scope` 参数定义搜索的模型上限/下限。
- `step` 就地修改模型对象 — 对于具有许多候选项的大型模型来说可能会很慢。

---

## 预测.lm / 预测.glm

- `predict.lm` 与 `interval = "confidence"` 给出 **平均** 响应的 CI； `interval = "prediction"` 给出 **新观察**（更广泛）的 PI​​。
- `newdata` 必须具有与原始公式变量匹配的列 - 因子必须具有相同的水平。
- `predict.glm` 和 `type = "response"` 给出响应尺度的预测（例如逻辑概率）； `type = "link"`（默认）给出了链接比例。
- `se.fit = TRUE` 返回标准错误；对于 `predict.glm`，无论 `type` 为何，这些都处于**链接**范围内。
- `predict.lm` 与 `type = "terms"` 返回每项的贡献。

---

## 黄土

- `span` 控制平滑度（默认 0.75）。 Span < 1 使用该比例的点； span > 1 使用调整距离的所有点。
- 最多 **4 个预测变量**。内存使用量大致为 n 的**二次方**（1000 点 ~ 10MB）。
- `degree = 0`（局部常量）是允许的，但未经充分测试 - 谨慎使用。
- 与 S 的 `loess` 不同；调节未实施。
- `normalize = TRUE`（默认）将预测变量标准化为通用比例；设置 `FALSE` 为空间坐标。

---

## Lowess 与黄土

- `lowess` 是较旧的功能；返回 `list(x, y)` — 无法预测新点。
- `loess` 是 `predict` 方法的较新公式接口。
- `lowess`参数为`f`（跨度，默认2/3）； `loess` 参数为 `span`（默认 0.75）。
- `lowess` `iter` 默认为 3（稳健迭代）； `loess` 默认 `family = "gaussian"`（无鲁棒性）。

---

## 平滑样条曲线

- 由 **GCV** 选择的默认平滑参数（广义交叉验证）。
- `cv = TRUE` 使用普通的留一 CV 代替 — 不要与重复的 x 值一起使用。
- `spar`和`lambda`控制平滑度； `df` 可以指定等效的自由度。
- 使用 `predict`、`print`、`plot` 方法返回对象。 `fit` 组件具有节点和系数。

---

## 优化

- 默认情况下**最小化**。最大化：设置 `control = list(fnscale = -1)`。
- 默认方法是 Nelder-Mead（无梯度，稳健但缓慢）。对于 1D 效果不佳 — 使用 `"Brent"` 或 `optimize()`。
- `"L-BFGS-B"` 是唯一支持框约束的方法 (`lower`/`upper`)。边界自动选择此方法并带有警告。
- `"SANN"`（模拟退火）：收敛代码**始终为0** - 它永远不会“失败”。 `maxit` = 总函数评估（默认 10000），没有其他停止标准。
- `parscale`：比例参数，因此每个单位的变化都会产生可比的客观变化。对于混合规模问题至关重要。
- `hessian = TRUE`：即使框约束处于活动状态，也会返回**无约束**问题的数值 Hessian。
- `fn` 可以返回 `NA`/`Inf`（`"L-BFGS-B"` 除外，它始终需要有限值）。初始值必须是有限的。

---

## 优化/uniroot

- `optimize`：有界区间上的一维最小化。返回 `minimum` 和 `objective`。
- `uniroot`：在 `[lower, upper]` 中查找 `f` 的根。 **要求** `f(lower)` 和 `f(upper)` 具有相反的符号。
- `uniroot` 与 `extendInt = "yes"` 可以自动延长间隔以查找符号变化 - 但可以找到实际上不跨越零的函数的伪根。
- `nlm`：牛顿型最小化器。梯度/Hessian 作为 `fn`（不寻常接口）返回值的**属性**。

---

## 图基HSD

- 需要安装 `aov` 物体（不是 `lm`）。
- 默认 `conf.level = 0.95`。返回所有成对比较的调整后的 p 值和置信区间。
- 仅对**平衡**或接近平衡的设计有意义；对于非常不平衡的数据可以是宽松的。

---

## 方差分析（对于 lm）

- `anova(model)`：顺序（I 型）SS — **术语顺序很重要**。
- `anova(model1, model2)`：比较嵌套模型的 F 测试。
- 对于 II 型或 III 型 SS，请使用 `car::Anova()`。
文件：参考文献/statistics.md
# 统计数据 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## chisq.测试

- `correct = TRUE`（默认）仅对**2x2 表**应用 Yates 连续性校正。
- `simulate.p.value = TRUE`：蒙特卡罗与 `B = 2000` 重复（最小 p ~ 0.0005）。模拟假设**固定边际**（费希尔式抽样，而不是卡方假设）。
- 为了拟合优度：传递向量，而不是矩阵。 `p` 之和必须为 1（或设置 `rescale.p = TRUE`）。
- 返回对象包括 `$expected`、`$residuals`（Pearson）和 `$stdres`（标准化）。

---

## 威尔科克斯.测试

- 对于无连接的小样本，默认情况下为 `exact = TRUE`。对于关系，使用正态近似。
- `correct = TRUE` 对法线近似应用连续性校正。
- `conf.int = TRUE` 计算 Hodges-Lehmann 估计量和置信区间（不仅仅是 p 值）。
- 配对测试：`paired = TRUE` 使用符号秩检验 (Wilcoxon)，而不是秩和 (Mann-Whitney)。

---

## 渔夫.测试

- 对于大于 2x2 的表，使用模拟 (`simulate.p.value = TRUE`) 或网络算法。
- `workspace` 控制网络算法的内存；如果在大表上出现错误，请增加。
- `or` 参数测试特定的优势比（默认 1）——仅适用于 2x2 表格。

---

## ks.测试

- 两个样本测试或针对参考分布的一个样本。
- **没有**很好地处理关系 - 警告并使用渐近逼近。
- 对于复合假设（根据数据估计的参数），p 值**保守**（太大）。将 `dgof` 或 `ks.test` 与 `exact = NULL` 结合使用以实现离散分布。

---

## p.调整

- Methods: `"holm"` (default), `"BH"` (Benjamini-Hochberg FDR), `"bonferroni"`, `"BY"`, `"hochberg"`, `"hommel"`, `"fdr"` (alias for BH), `"none"`.
- `n` 参数：假设总数（如果排除某些 p 值，则可以大于 `length(p)`）。
- 处理 `NA`：调整后的 p 值为 `NA`，其中输入为 `NA`。

---

## 成对.t.test / 成对.wilcox.test

- `p.adjust.method` 默认为 `"holm"`。更改为 `"BH"` 以进行 FDR 控制。
- `pool.sd = TRUE`（t 检验的默认值）：在所有组中使用合并 SD（假设方差相等）。
- 返回 p 值矩阵，而不是检验统计量。

---

## 夏皮罗.测试

- 样本数量必须在 3 到 5000 之间。
- 测试正常性；低 p 值 = 反对正态性的证据。

---

## k 表示

- 推荐 `nstart > 1`（例如 `nstart = 25`）：从多个随机开始运行算法，返回最佳结果。
- 默认 `iter.max = 10` — 可能太低而无法收敛。增加大型/复杂数据。
- 默认算法是“Hartigan-Wong”（通常是最好的）。非常接近的点可能会导致不收敛（使用 `ifault = 4` 发出警告）。
- 簇编号是任意的；不同平台的排序可能有所不同。
- 当指定 k 时，始终返回 k 个簇（Lloyd-Forgy 可能返回更少的簇除外）。

---

## hclust

- `method = "ward.D2"` 正确实施 Ward 准则（使用平方距离）。较旧的 `"ward.D"` 没有平方距离（保留是为了向后兼容）。
- 输入必须是 `dist` 对象。使用 `as.dist()` 转换对称矩阵。
- `plot()` 中的 `hang = -1` 将所有标签对齐在底部。

---

## 距离

- `method = "euclidean"`（默认）。其他选项：`"manhattan"`、`"maximum"`、`"canberra"`、`"binary"`、`"minkowski"`。
- 返回 `dist` 对象（仅限下三角形）。使用 `as.matrix()` 获得完整矩阵。
- `"canberra"`：分子和分母为零的项从总和中**省略**（不视为 0/0）。
- `Inf` 值：涉及 `Inf` 的欧几里得距离为 `Inf`。对于某些方法，同一 obs 中的多个 `Inf` 会给出 `NaN`。

---

## prcomp 与 princomp

- `prcomp`使用**SVD**（数值优越）； `princomp` 在协方差上使用 `eigen`（稳定性较差，N-1 与 N 缩放）。
- `prcomp`中的`scale. = TRUE`标准化变量；当变量具有非常不同的尺度时很重要。
- `princomp` 标准偏差与 `prcomp` 的差异为 `sqrt((n-1)/n)`。
- 均返回 `$rotation`（载荷）和 `$x`（分数）；组件的符号在运行之间可能有所不同。

---

## 密度

- 默认带宽：`bw = "nrd0"`（Silverman 的经验法则）。对于多模态数据，请考虑 `"SJ"` 或 `"bcv"`。
- `adjust`：带宽乘数。 `adjust = 0.5` 将带宽减半（不太平滑）。
- 默认内核：`"gaussian"`。密度范围超出数据范围（由`cut`控制，默认3个带宽）。
- `n = 512`：评估点数。增加以使绘图更平滑。
- `from`/`to`：明确限制评估范围。

---

## 分位数

- **九个** `type` 选项 (1-9)。默认 `type = 7`（R 默认，线性插值）。类型 1 = 经验 CDF 的逆（SAS 默认值）。类型4-9是连续的； 1-3是不连续的。
- 默认情况下 `na.rm = FALSE` — 如果存在任何 NA，则返回 NA。
- 默认为`names = TRUE`，添加“0%”、“25%”等名称。

---

## 发行版（所有发行版的陷阱）

所有分布函数都遵循 `d/p/q/r` 模式。常见的非显而易见点：

- **`r*()` 函数中的 `n` 参数**：如果 `length(n) > 1`，则使用 `length(n)` 作为计数，而不是 `n` 本身。所以 `rnorm(c(1,2,3))` 生成 3 个值，而不是 1+2+3。
- `log = TRUE` / `log.p = TRUE`：在对数尺度上计算尾部的数值稳定性。
- `lower.tail = FALSE` 直接给出生存函数 P(X > x)（比尾部的 1 - pnorm() 更准确）。
- **Gamma**：由 `shape` 和 `rate` 参数化（= 1/刻度）。默认`rate = 1`。同时指定 `rate` 和 `scale` 是错误的。
- **Beta**：`shape1` (alpha)、`shape2` (beta) — 无 `mean`/`sd` 参数化。
- **泊松 `dpois`**：`x` 可以是非整数（如果 `log = FALSE`，则返回 0，并警告非整数值）。
- **威布尔**：`shape` 和 `scale`（无 `rate`）。 R的参数化：`f(x) = (shape/scale)(x/scale)^(shape-1) exp(-(x/scale)^shape)`。
- **对数正态**：`meanlog` 和 `sdlog` 是 **对数** 的平均值/标准差，而不是分布本身的平均值/标准差。

---

## 相关测试

- 默认方法：`"pearson"`。还有 `"kendall"` 和 `"spearman"`。
- 返回 `$estimate`、`$p.value`、`$conf.int`（CI 仅适用于 Pearson）。
- 公式界面：`cor.test(~ x + y, data = df)` — 注意 `~` 没有 LHS。

---

## ECDF

- 返回一个**函数**（步进函数）。将其称为新值：`Fn <- ecdf(x); Fn(3.5)`。
- `plot(ecdf(x))` 给出经验 CDF 图。
- 返回的函数是右连续的，有左极限（cadlag）。

---

## 加权平均值

- 处理 `NA` 的权重：如果权重为 `NA`，则观察会被丢弃。
- 权重之和不需要为 1；它们在内部被标准化。
文件：参考文献/可视化.md
# 可视化 — 快速参考

> R 函数的不明显行为、陷阱和棘手的默认值。
> 只有克劳德还不知道的事情。

---

## 标准杆（陷阱）

- `par()` 设置是针对每个设备的。打开新设备会重置一切。
- 设置 `mfrow`/`mfcol` 会将 `cex` 重置为 1，将 `mex` 重置为 1。对于 2x2 布局，基本 `cex` 乘以 0.83；超过 3 行/列，增加 0.66。
- `mai` (inches), `mar` (lines), `pin`, `plt`, `pty` all interact. Restoring all saved parameters after device resize can produce inconsistent results — last-alphabetically wins.
- 通过 `par()` 设置 `bg` 也会设置 `new = FALSE`。通过 `par()` 设置 `fg` 也会设置 `col`。
- `xpd = NA` 剪辑到设备区域（允许在外边距中绘制）； `xpd = TRUE` 剪辑到图形区域； `xpd = FALSE`（默认）剪辑到绘图区域。
- `mgp = c(3, 1, 0)`：控制标题线（`mgp[1]`）、标签线（`mgp[2]`）、轴线（`mgp[3]`）。全部采用 `mex` 单位。
- `las`：0 = 平行于轴，1 = 水平，2 = 垂直，3 = 垂直。 **不**响应 `srt`。
- `tck = 1` 在绘图上绘制网格线。 `tcl = -0.5`（默认）给出向外的刻度。
- `usr` with log scale: contains **log10** of the coordinate limits, not the raw values.
- 只读参数：`cin`、`cra`、`csi`、`cxy`、`din`、`page`。

---

## 布局

- `layout(mat)`，其中 `mat` 是指定图形排列的整数矩阵。
- `widths`/`heights` 接受 `lcm()` 的绝对尺寸与相对尺寸的混合。
- More flexible than `mfrow`/`mfcol` but cannot be queried once set (unlike `par("mfrow")`).
- `layout.show(n)` 可视化布局以进行调试。

---

## 轴/多行文字

- `axis(side, at, labels)`: `side` 1=bottom, 2=left, 3=top, 4=right.
- 由 `par("mgp")` 控制的轴标签之间的默认间隙。如果不进行管理，标签可能会重叠。
- `mtext`：`line` 参数将文本定位在边缘线中（0 = 与图相邻，正 = 向外）。 `adj` 控制水平位置 (0-1)。
- `mtext` with `outer = TRUE` writes in the **outer** margin (set by `par(oma = ...)`).

---

## 曲线

- First argument can be an **expression** in `x` or a function: `curve(sin, 0, 2*pi)` or `curve(x^2 + 1, 0, 10)`.
- `add = TRUE` 覆盖现有绘图。默认`n = 101`评价点。
- 默认为`xname = "x"`； change if your expression uses a different variable name.

---

## 对

- `panel` 函数接收每对的 `(x, y, ...)`。 `lower.panel`, `upper.panel`, `diag.panel` for different regions.
- `gap` 控制面板之间的间距（默认为 1）。
- 公式接口：`pairs(~ var1 + var2 + var3, data = df)`。

---

## 副图

- Conditioning plots: `coplot(y ~ x | a)` or `coplot(y ~ x | a * b)` for two conditioning variables.
- `panel`功能可定制； `rows`/`columns` 控制布局。
- 默认面板绘制点；使用`panel = panel.smooth`进行黄土覆盖。

---

## matplot / matlines / matpoints

- Plots columns of one matrix against columns of another. Recycles `col`, `lty`, `pch` across columns.
- `type = "l"` by default (unlike `plot` which defaults to `"p"`).
- 用于同时绘制多个时间序列或拟合曲线。

---

## 轮廓/填充.轮廓/图像

- `contour(x, y, z)`: `z` must be a matrix with `dim = c(length(x), length(y))`.
- `filled.contour` has a non-standard layout — it creates its own plot region for the color key. **不能与 `par(mfrow)` 一起使用**。添加元素需要 `plot.axes` 参数。
- `image`：将 z 值绘制为彩色矩形。默认配色方案可能会产生误导；显式设置 `col`。
- For `image`, `x` and `y` specify **cell boundaries** or **midpoints** depending on context.

---

## 透视

- `persp(x, y, z, theta, phi)`：`theta` = 方位角，`phi` = 纬度。
- 返回用于将 3D 投影到 2D 的 **变换矩阵**（不可见） - 使用 `trans3d()` 将点/线添加到透视图。
- `shade` 和 `col` 控制表面着色。 `border = NA` 删除网格线。

---

## 线段/箭头/矩形/多边形

- 全部采用矢量化坐标；根据需要回收。
- `arrows`：`code = 1`（头在开始处）、`code = 2`（头在结束处，默认）、`code = 3`（两者）。
- `polygon`：最后一点自动连接到第一个点。填充`col`； `border` 控制轮廓。
- `rect(xleft, ybottom, xright, ytop)` — 注意参数顺序与其他系统不同。

---

## dev/dev.off/dev.copy

- `dev.new()` 打开一个新设备。 `dev.off()` 关闭当前设备（并刷新 `pdf` 等文件设备的输出）。
- **最后**打开的设备上的 `dev.off()` 恢复为空设备。
- `dev.copy(pdf, file = "plot.pdf")` 后跟 `dev.off()` 保存当前绘图。
- `dev.list()` 返回所有打开的设备； `dev.cur()` 是活跃的一款。

---

## pdf

- 必须调用 `dev.off()` 来完成文件。如果没有它，文件可能为空/损坏。
- `onefile = TRUE`（默认）：一个 PDF 中的多个页面。 `onefile = FALSE`：每页一个文件（文件名中使用 `%d` 进行编号）。
- 建议使用 `useDingbats = FALSE` 以避免某些 PDF 查看器和 pch 符号出现问题。
- 默认尺寸：7x7 英寸。 `family` 控制字体系列。

---

## png / 位图设备

- `res` 控制 DPI（默认 72）。对于发布：`res = 300` 以及相应的 `width`/`height`（以像素或英寸为单位）（与 `units = "in"`）。
- `type = "cairo"`（在带有 cairo 的系统上）提供比默认更好的抗锯齿功能。
- `bg = "transparent"` 用于透明背景（PNG 支持 Alpha）。

---

## 颜色/rgb/hcl/col2rgb

- `colors()` 返回所有 657 种命名颜色。 `col2rgb("color")` 返回 RGB 矩阵。
- `rgb(r, g, b, alpha, maxColorValue = 255)` — 注意 `maxColorValue` 默认值为 1，而不是 255。
- `hcl(h, c, l)`：感知均匀的色彩空间。色阶的首选。
- `adjustcolor(col, alpha.f = 0.5)`：添加透明度的简单方法。

---

## colorRamp / colorRampPalette

- `colorRamp` 返回将 [0,1] 映射到 RGB 矩阵的 **函数**。
- `colorRampPalette` 返回一个**函数**，采用 `n` 并返回 `n` 插值颜色。
- `space = "Lab"` 比 `"rgb"` 提供更感知均匀的插值。

---

## 调色板/记录图

- `palette()` 返回当前调色板（默认 8 种颜色）。 `palette("Set1")` 设置内置调色板。
- 图中的整数颜色索引到调色板中（带换行）。索引 0 = 背景颜色。
- `recordPlot()` / `replayPlot()`：保存和恢复完整的绘图 - 依赖于设备并且跨会话脆弱。
文件：资产/analysis_template.R
#================================================================
# 分析模板 — Base R
# 复制此文件，重命名，然后填写您的详细信息。
#================================================================
# 作者： 
# 日期： 
# 数据： 
# 目的： 
#================================================================


# ── 0. 设置 ──────────────────────────────────────────────────
# 清除环境（可选 - 如果加载到现有会话中则注释掉）
rm(列表=ls())

# 如果需要设置工作目录
# setwd(“/path/to/your/project”)

# 再现性
设置.种子(42)

# 库 — 取消注释您需要的内容
# 库(haven) # 读取.dta / .sav / .sas
#library(readxl)#读取Excel文件
#library(openxlsx)#写入Excel文件
# 库(国外) # 较旧的 Stata / SPSS 格式
# 库(调查) # 调查加权分析
# 库(lmtest) # Breusch-Pagan、Durbin-Watson 等。
# 库（三明治）# 强大的标准错误
# 图书馆(汽车) # II/III 型方差分析、VIF

# ── 1. 加载数据 ──────────────────────────────────────────────
df <- read.csv("your_data.csv", stringsAsFactors = FALSE)
# df <- readRDS("your_data.rds")
# df <- 避风港::read_dta("your_data.dta")

# 第一眼——总是运行这些
暗淡(df)
str(df)
头(df, 10)
摘要(df)


# ── 2. 数据质量检查 ────────────────────────────────────
# 缺失值
na_report <- data.frame(
  列=名称（df），
  n_miss = colSums(is.na(df)),
  pct_miss = 轮(colMeans(is.na(df)) * 100, 1),
  行.名称 = NULL
）
打印(na_report[na_report$n_miss > 0, ])

# 重复项
n_dup <- sum(重复(df))
cat(sprintf("重复行：%d\n", n_dup))

# 分类列的唯一值
cat_cols <- 名称(df)[sapply(df, 函数(x) is.character(x) | is.factor(x))]
for (cat_cols 中的 col) {
  cat(sprintf("\n%s (%d 唯一):\n", col, length(unique(df[[col]]))))
  打印（表（df[[col]]，useNA =“ifany”））
}


# ── 3. 清洁与改造 ──────────────────────────────────────
# 重命名列（示例）
# 名称(df)[名称(df) == "旧名称"] <- "新名称"

# 转换类型
# df$group <- as.factor(df$group)
# df$date <- as.Date(df$date, format = "%Y-%m-%d")

# 重新编码值（示例）
# df$gender <- ifelse(df$gender == 1, "男", "女")

# 创建新变量（示例）
# df$log_收入 <- log(df$收入 + 1)
# df$age_group <- cut(df$age,
# 中断 = c(0, 25, 45, 65, Inf),
# 标签 = c("18-25", "26-45", "46-65", "65+"))

# 过滤行（示例）
# df <- df[df$年份 >= 2010, ]
# df <- df[complete.cases(df[, c("结果", "预测变量")]), ]

# 删除未使用的因子级别
# df <- 下降级别(df)


# ── 4. 描述性统计 ──────────────────────────────
# 数值摘要
num_cols <- 名称(df)[sapply(df, is.numeric)]
圆（sapply（df [num_cols]，函数（x）c（
  n = sum(!is.na(x)),
  平均值 = 平均值（x，na.rm = TRUE），
  sd = sd(x, na.rm = TRUE),
  中位数 = 中位数(x, na.rm = TRUE),
  min = min(x, na.rm = TRUE),
  最大值 = 最大值(x, na.rm = TRUE)
)), 3)

# 交叉列表
# 表(df$group, df$category, useNA = "ifany")
# prop.table(table(df$group, df$category), margin = 1) # 行比例


# ── 5.可视化（EDA）────────────────────────────────────
par(mfrow = c(2, 2))

# 主要结果的直方图
历史记录（df$outcome_var，
     main =“结果分布”，
     xlab =“结果”，
     col =“钢蓝色”，
     边框=“白色”，
     休息时间 = 30)

# 按组划分的箱线图
箱线图（outcome_var ~ group_var，
        数据 = df,
        main =“按组划分的结果”，
        col =“浅黄色”，
        拉斯 = 2)

# 散点图
绘图（df$预测器，df$outcome_var，
     main =“预测变量与结果”，
     xlab = "预测器",
     ylab = "结果",
     个数 = 19,
     col = 调整颜色("steelblue", alpha.f = 0.5),
     cex = 0.8)
abline(lm(outcome_var ~ 预测器，数据 = df),
       col =“红色”，lwd = 2）

# 相关矩阵（仅限数字列）
cor_mat <- cor(df[num_cols], use = "complete.obs")
图像（cor_mat，
      main =“相关矩阵”，
      col = hcl.colors(20, "RdBu", rev = TRUE))

par(mfrow = c(1, 1))


# ── 6.分析────────────────────────────────────────────────

#··6a。均值比较··
t.test(outcome_var ~ group_var, 数据 = df)

#··6b。线性回归··
适合 <- lm(outcome_var ~ 预测器 1 + 预测器 2 + group_var,
          数据 = df)
总结（适合）
限制（适合）

# 检查 VIF 的多重共线性（需要汽车）
# 汽车::vif(适合)

# 稳健的标准错误（需要 lmtest + 三明治）
# lmtest::coeftest(fit, vcov =三明治::vcovHC(fit, type = "HC3"))

#··6c。方差分析··
# fit_aov <- aov(outcome_var ~ group_var, data = df)
# 摘要(fit_aov)
# TukeyHSD(fit_aov)

#··6d。逻辑回归（二元结果）··
# fit_logit <- glm(binary_outcome ~ x1 + x2,
# 数据 = df,
# 家庭 = 二项式(link = "logit"))
# 摘要（fit_logit）
# exp(coef(fit_logit)) # 优势比
# exp(confint(fit_logit)) # 或置信区间


# ── 7. 模型诊断 ──────────────────────────────────────
par(mfrow = c(2, 2))
情节（适合）
par(mfrow = c(1, 1))

# 残差正态性
夏皮罗.测试（残差（拟合））

# 同方差（需要 lmtest）
# lmtest::bptest(适合)


# ── 8. 保存输出────────────────────────────────────────────
# 清理后的数据
# write.csv(df, "data_clean.csv", row.names = FALSE)
# saveRDS(df, "data_clean.rds")

# 模型结果到文本文件
# 接收器("结果.txt")
# cat("===线性模型===\n")
# 打印（摘要（适合））
# cat("\n=== 置信区间 ===\n")
# 打印（限制（适合））
# 水槽（）

# 绘图到文件
# png("figure1_distributions.png"，宽度= 1200，高度= 900，分辨率= 150)
# par(mfrow = c(2, 2))
# # ...你的情节...
# par(mfrow = c(1, 1))
# dev.off()

#================================================================
# 模板结束
#================================================================
文件：脚本/check_data.R
# check_data.R — 任何 R 数据帧的快速数据质量报告
# 用法： source("check_data.R") 然后调用 check_data(df)
# 或者：source("check_data.R"); check_data(read.csv("yourfile.csv"))

check_data <- 函数(df, top_n_levels = 8) {
  
  if (!is.data.frame(df)) stop("输入必须是数据框。")
  
  n_row <- nrow(df)
  n_col <- ncol(df)
  
  猫(“════════════════════ ══════════════════════\n")
  cat(" 数据质量报告\n")
  猫(“════════════════════ ══════════════════════\n")
  cat(sprintf("行：%d 列：%d\n"，n_row，n_col))
  猫（“═════════════════════ ═════════════════════\n\n")
  
  # ── 1. 栏目概述 ──────────────────────
  cat("── 列概述 ────────────────────────\n")
  
  for (名称中的列(df)) {
    x <- df[[列]]
    cls <- 类(x)[1]
    n_na <- sum(is.na(x))
    pct <- 轮(n_na / n_row * 100, 1)
    n_uniq <- 长度(unique(x[!is.na(x)]))
    
    na_flag <- if (n_na == 0) "" else sprintf(" *** %d NA (%.1f%%)", n_na, pct)
    cat(sprintf(" %-20s %-12s %d 唯一%s\n",
                col、cls、n_uniq、na_flag））
  }
  
  # ── 2. NA 总结 ────────────────────────────
  cat("\n── 不适用摘要──────────────────────────────\n")
  
  na_counts <- sapply(df, function(x) sum(is.na(x)))
  cols_with_na <- na_counts[na_counts > 0]
  
  如果（长度（cols_with_na）== 0）{
    cat("没有缺失值。\n")
  } 否则{
    cat(sprintf(" 具有 NA 的列：%d，共 %d\n\n", length(cols_with_na), n_col))
    for (名称中的列(cols_with_na)) {
      bar_len <- round(cols_with_na[列] / n_row * 20)
      条<-paste0（rep（“█”，bar_len），折叠=“”）
      pct_na <- round(cols_with_na[列] / n_row * 100, 1)
      cat(sprintf(" %-20s [%-20s] %d (%.1f%%)\n",
                  col, bar, cols_with_na[col], pct_na))
    }
  }
  
  # ── 3. 数字列 ────────────────────────
  num_cols <- 名称(df)[sapply(df, is.numeric)]
  
  if (长度(num_cols) > 0) {
    cat("\n── 数字列 ────────────────────────\n")
    猫（sprintf（“％-20s％8s％8s％8s％8s％8s\n”，
                “列”、“最小值”、“平均值”、“中值”、“最大值”、“SD”））
    猫（sprintf（“％-20s％8s％8s％8s％8s％8s\n”，
                “──────”、“────”、“────”、“──────”、“────”、“──”））
    
    for (col in num_cols) {
      x <- df[[col]][!is.na(df[[col]])]
      如果（长度（x）== 0）下一个
      猫（sprintf（“％-20s％8.3g％8.3g％8.3g％8.3g％8.3g\n”，
                  上校，
                  最小值(x)、平均值(x)、中位数(x)、最大值(x)、sd(x)))
    }
  }
  
  # ── 4.因子/字符列────────────
  cat_cols <- 名称(df)[sapply(df, 函数(x) is.factor(x) | is.character(x))]
  
  如果（长度（cat_cols）> 0）{
    cat("\n── 分类列 ────────────────────\n")
    
    for (cat_cols 中的 col) {
      x <- df[[列]]
      tbl <- 排序（表（x，useNA =“否”），递减= TRUE）
      n_lv <- 长度(tbl)
      cat(sprintf("\n %s (%d 个唯一值)\n", col, n_lv))
      
      显示 <- min(top_n_levels, n_lv)
      for (i in seq_len(show)) {
        lbl <- 名称(tbl)[i]
        cnt <- tbl[i]
        pct <- 轮(cnt / n_row * 100, 1)
        cat(sprintf(" %-25s %5d (%.1f%%)\n", lbl, cnt, pct))
      }
      if (n_lv > top_n_levels) {
        cat(sprintf(" ... 还有 %d 个级别\n", n_lv - top_n_levels))
      }
    }
  }
  
  # ── 5.重复行────────────────────────
  cat("\n── 重复 ──────────────────────────────\n")
  n_dup <- sum(重复(df))
  如果（n_dup == 0）{
    cat("没有重复的行。\n")
  } 否则{
    cat(sprintf(" 找到 %d 个重复行（数据的 %.1f%%)\n",
                n_dup, n_dup / n_行 * 100))
  }
  
  猫（“\n═══════════════════ ═══════════════════════\n")
  cat(" 报告结束\n")
  猫(“════════════════════ ══════════════════════\n")

# 隐形返回以供编程使用
  不可见（列表（
    暗淡 = c(行 = n_row, 列 = n_col),
    na_counts = na_counts,
    n_dupes = n_dup
  ））
}
文件：脚本/scaffold_analysis.R
#!/usr/bin/env Rscript
#scaffold_analysis.R — 生成入门分析脚本
#
# 用法（来自终端）：
# Rscriptscaffold_analysis.R myproject
# Rscriptscaffold_analysis.Rmyprojectoutcome_vargroup_var
#
# 用法（来自 R 控制台）：
# 源（“scaffold_analysis.R”）
#scaffold_analysis(“myproject”，结果=“分数”，组=“治疗”)
#
# 输出：myproject_analysis.R（准备编辑）

脚手架_分析 <- 函数（项目名称，
                               结果=“结果”，
                               组=“组”，
                               数据文件 = NULL) {
  
  if (is.null(data_file)) data_file <- Paste0(project_name, ".csv")
  out_file <- Paste0（项目名称，“_analysis.R”）
  
  模板 <- sprintf(
'#================================================================
# 项目：%s
# 创建：%s
#================================================================

# ── 0. 图书馆 ──────────────────────────────────────────────
# 在这里添加你需要的包
# 库（ggplot2）
# .dta 文件的库(haven)
# 库(openxlsx) # 用于 Excel 输出


# ── 1. 加载数据 ──────────────────────────────────────────────
df <- read.csv("%s", stringsAsFactors = FALSE)

# 快速检查 - 始终首先执行此操作
cat("尺寸：", dim(df), "\\n")
str(df)
头(df)


# ── 2.探索/EDA ──────────────────────────────────────────
摘要(df)

# 不适用检查
na_counts <- colSums(is.na(df))
na_counts[na_counts > 0]

# 关键变量分布
hist(df$%s, main = "%s 的分布", xlab = "%s")

if ("%s" %%in%% 名称(df)) {
  表（df$%s）
  条形图（表（df$%s），
          main = "按 %s 计数",
          col =“钢蓝色”，
          拉斯 = 2)
}


# ── 3. 清洁/改造 ──────────────────────────────────────
# df <- df[complete.cases(df), ] # 删除任何 NA 的行
# df$%s <- as.factor(df$%s) # 转换为因子


# ── 4.分析────────────────────────────────────────────────

# 按组划分的描述性统计数据
Tapply(df$%s, df$%s, 平均值, na.rm = TRUE)
Tapply(df$%s, df$%s, sd, na.rm = TRUE)

# t 检验（两组）
# t.test(%s ~ %s, 数据 = df)

# 线性模型
适合 <- lm(%s ~ %s, 数据 = df)
总结（适合）
限制（适合）

# 方差分析（多组）
# fit_aov <- aov(%s ~ %s, data = df)
# 摘要(fit_aov)
# TukeyHSD(fit_aov)


# ── 5. 可视化结果 ──────────────────────────────────────
par(mfrow = c(1, 2))

# 按组划分的箱线图
箱线图(%s ~ %s,
        数据 = df,
        主要 = "%s by %s",
        xlab =“%s”，
        ylab = "%s",
        col =“浅黄色”）

# 模型诊断
plot(fit,which = 1)#残差与拟合

par(mfrow = c(1, 1))


# ── 6. 保存输出────────────────────────────────────────────
# 保存清理后的数据
# write.csv(df, "%s_clean.csv", row.names = FALSE)

# 将模型摘要保存到文本中
# 接收器("%s_results.txt")
# 总结（适合）
# 水槽（）

# 将绘图保存到文件
# png("%s_boxplot.png"，宽度= 800，高度= 600，分辨率= 150)
# 箱线图(%s ~ %s, data = df, col = "lightyellow")
# dev.off()
',
    项目名称，
    格式(Sys.Date(), "%%Y-%%m-%%d"),
    数据文件，
    # 第 2 节 — EDA
    结果，结果，结果，
    团体、团体、团体、团体、
    # 第 3 节
    团体，团体，
    # 第 4 节
    结果、组、
    结果、组、
    结果、组、
    结果、组、
    结果、组、
    结果、组、
    # 第 5 节
    结果、组、
    结果、组、
    小组、结果、
    # 第 6 节
    项目名称，项目名称，项目名称，
    结果，组
  ）
  
  writeLines（模板，out_file）
  cat(sprintf("已创建：%s\n", out_file))
  不可见（out_file）
}


# ── 从命令行运行──────────────────────────────────────
如果（！互动（））{
  args <- commandArgs(trailingOnly = TRUE)
  
  如果（长度（参数）== 0）{
    cat("用法：Rscriptscaffold_analysis.R <project_name> [outcome_var] [group_var]\n")
    cat("示例：Rscriptscaffold_analysis.Rmyproject评分处理\n")
    退出（状态 = 1）
  }
  
  项目 <- 参数[1]
  结果 <- if (length(args) >= 2) args[2] else "结果"
  组 <- if (length(args) >= 3) args[3] else "组"
  
  脚手架_分析（项目，结果=结果，组=组）
}
文件：自述文件.md
# 基础 R 技能 

GitHub: https://github.com/iremaydas/base-r-skill

用于基础 R 编程的 Claude Code 技能。

---

## 故事

我是一名政治学博士候选人，经常使用 R，但绝不会称自己为“R 人”。我需要一种用于基础 R 的 Claude Code 技能——没有 tidyverse，没有 ggplot2，只是普通的 R——但我在任何地方都找不到。

所以我自己做了一个。晚上11点。请克劳德帮助我为克劳德培养一项技能。 

如果您也是每次都用 Google 搜索 `how to drop NA rows in R` 的人，那么这个就适合您。 🫶

---

## 里面有什么

```
base-r/
├── SKILL.md                    # Main skill file
├── references/                 # Gotchas & non-obvious behaviors
│   ├── data-wrangling.md       # Subsetting traps, apply family, merge, factor quirks
│   ├── modeling.md             # Formula syntax, lm/glm/aov/nls, optim
│   ├── statistics.md           # Hypothesis tests, distributions, clustering
│   ├── visualization.md        # par, layout, devices, colors
│   ├── io-and-text.md          # read.table, grep, regex, format
│   ├── dates-and-system.md     # Date/POSIXct traps, options(), file ops
│   └── misc-utilities.md       # tryCatch, do.call, time series, utilities
├── scripts/
│   ├── check_data.R            # Quick data quality report for any data frame
│   └── scaffold_analysis.R     # Generates a starter analysis script
└── assets/
    └── analysis_template.R     # Copy-paste analysis template
```

参考文件压缩自官方 R 4.5.3 手册 — **19,518 行 → 945 行**（减少 95%）。只有那些不明显的东西得以幸存：陷阱、令人惊讶的默认设置、棘手的交互。克劳德已经熟知的事情被删掉了。

---

## 如何使用

通过指向此存储库，将此技能添加到您的 Claude Code 设置中。然后，当您处理 R 任务时，Claude 会自动加载相关参考文件。

最适合：
- 基础 R 数据操作（无 tidyverse）
- 使用 `lm`、`glm`、`aov` 进行统计建模
- 基础显卡为 `plot`、`par`、`barplot`
- 理解为什么你的 R 代码会做那些奇怪的事情

不适用于：tidyverse、ggplot2、Shiny 或 R 包开发。

---

## `check_data.R` 脚本

可能是这里最有用的独立东西。获取它并在任何数据框架上运行 `check_data(df)`，以获得维度、NA 计数、数字摘要和分类细分的格式化报告。

```r
source("scripts/check_data.R")
check_data(your_df)
```

---

## 在以下人士的帮助下构建

- 克劳德（显然）
- 官方 R 手册（全部 19,518 行）
- 轻微的挫败感和几杯咖啡

---

## 贡献

如果您发现遗漏的陷阱、错误的默认值或应该在参考文献中出现的内容，那么 PR 非常受欢迎。我也在学习。

---

*由 [@iremaydas](https://github.com/iremaydas) 制作 - 博士生，偶尔使用 R，全职 Google 员工，了解我现在可能应该知道的事情。*
````

---

## English Original

### Title

base-R

### Description

Provides base R programming guidance covering data structures, data wrangling, statistical modeling, visualization, and I/O, using only packages included in a standard R installation

### Prompt

````md
---
name: base-r
description: Provides base R programming guidance covering data structures, data wrangling, statistical modeling, visualization, and I/O, using only packages included in a standard R installation
---

# Base R Programming Skill

A comprehensive reference for base R programming — covering data structures, control flow, functions, I/O, statistical computing, and plotting.

## Quick Reference

### Data Structures

```r
# Vectors (atomic)
x <- c(1, 2, 3)              # numeric
y <- c("a", "b", "c")        # character
z <- c(TRUE, FALSE, TRUE)    # logical

# Factor
f <- factor(c("low", "med", "high"), levels = c("low", "med", "high"), ordered = TRUE)

# Matrix
m <- matrix(1:6, nrow = 2, ncol = 3)
m[1, ]       # first row
m[, 2]       # second column

# List
lst <- list(name = "ali", scores = c(90, 85), passed = TRUE)
lst$name      # access by name
lst[[2]]      # access by position

# Data frame
df <- data.frame(
  id = 1:3,
  name = c("a", "b", "c"),
  value = c(10.5, 20.3, 30.1),
  stringsAsFactors = FALSE
)
df[df$value > 15, ]    # filter rows
df$new_col <- df$value * 2  # add column
```

### Subsetting

```r
# Vectors
x[1:3]             # by position
x[c(TRUE, FALSE)]  # by logical
x[x > 5]           # by condition
x[-1]              # exclude first

# Data frames
df[1:5, ]                    # first 5 rows
df[, c("name", "value")]     # select columns
df[df$value > 10, "name"]    # filter + select
subset(df, value > 10, select = c(name, value))

# which() for index positions
idx <- which(df$value == max(df$value))
```

### Control Flow

```r
# if/else
if (x > 0) {
  "positive"
} else if (x == 0) {
  "zero"
} else {
  "negative"
}

# ifelse (vectorized)
ifelse(x > 0, "pos", "neg")

# for loop
for (i in seq_along(x)) {
  cat(i, x[i], "\n")
}

# while
while (condition) {
  # body
  if (stop_cond) break
}

# switch
switch(type,
  "a" = do_a(),
  "b" = do_b(),
  stop("Unknown type")
)
```

### Functions

```r
# Define
my_func <- function(x, y = 1, ...) {
  result <- x + y
  return(result)  # or just: result
}

# Anonymous functions
sapply(1:5, function(x) x^2)
# R 4.1+ shorthand:
sapply(1:5, \(x) x^2)

# Useful: do.call for calling with a list of args
do.call(paste, list("a", "b", sep = "-"))
```

### Apply Family

```r
# sapply — simplify result to vector/matrix
sapply(lst, length)

# lapply — always returns list
lapply(lst, function(x) x[1])

# vapply — like sapply but with type safety
vapply(lst, length, integer(1))

# apply — over matrix margins (1=rows, 2=cols)
apply(m, 2, sum)

# tapply — apply by groups
tapply(df$value, df$group, mean)

# mapply — multivariate
mapply(function(x, y) x + y, 1:3, 4:6)

# aggregate — like tapply for data frames
aggregate(value ~ group, data = df, FUN = mean)
```

### String Operations

```r
paste("a", "b", sep = "-")    # "a-b"
paste0("x", 1:3)              # "x1" "x2" "x3"
sprintf("%.2f%%", 3.14159)    # "3.14%"
nchar("hello")                # 5
substr("hello", 1, 3)         # "hel"
gsub("old", "new", text)      # replace all
grep("pattern", x)            # indices of matches
grepl("pattern", x)           # logical vector
strsplit("a,b,c", ",")        # list("a","b","c")
trimws("  hi  ")              # "hi"
tolower("ABC")                # "abc"
```

### Data I/O

```r
# CSV
df <- read.csv("data.csv", stringsAsFactors = FALSE)
write.csv(df, "output.csv", row.names = FALSE)

# Tab-delimited
df <- read.delim("data.tsv")

# General
df <- read.table("data.txt", header = TRUE, sep = "\t")

# RDS (single R object, preserves types)
saveRDS(obj, "data.rds")
obj <- readRDS("data.rds")

# RData (multiple objects)
save(df1, df2, file = "data.RData")
load("data.RData")

# Connections
con <- file("big.csv", "r")
chunk <- readLines(con, n = 100)
close(con)
```

### Base Plotting

```r
# Scatter
plot(x, y, main = "Title", xlab = "X", ylab = "Y",
     pch = 19, col = "steelblue", cex = 1.2)

# Line
plot(x, y, type = "l", lwd = 2, col = "red")
lines(x, y2, col = "blue", lty = 2)  # add line

# Bar
barplot(table(df$category), main = "Counts",
        col = "lightblue", las = 2)

# Histogram
hist(x, breaks = 30, col = "grey80",
     main = "Distribution", xlab = "Value")

# Box plot
boxplot(value ~ group, data = df,
        col = "lightyellow", main = "By Group")

# Multiple plots
par(mfrow = c(2, 2))  # 2x2 grid
# ... four plots ...
par(mfrow = c(1, 1))  # reset

# Save to file
png("plot.png", width = 800, height = 600)
plot(x, y)
dev.off()

# Add elements
legend("topright", legend = c("A", "B"),
       col = c("red", "blue"), lty = 1)
abline(h = 0, lty = 2, col = "grey")
text(x, y, labels = names, pos = 3, cex = 0.8)
```

### Statistics

```r
# Descriptive
mean(x); median(x); sd(x); var(x)
quantile(x, probs = c(0.25, 0.5, 0.75))
summary(df)
cor(x, y)
table(df$category)  # frequency table

# Linear model
fit <- lm(y ~ x1 + x2, data = df)
summary(fit)
coef(fit)
predict(fit, newdata = new_df)
confint(fit)

# t-test
t.test(x, y)                    # two-sample
t.test(x, mu = 0)               # one-sample
t.test(before, after, paired = TRUE)

# Chi-square
chisq.test(table(df$a, df$b))

# ANOVA
fit <- aov(value ~ group, data = df)
summary(fit)
TukeyHSD(fit)

# Correlation test
cor.test(x, y, method = "pearson")
```

### Data Manipulation

```r
# Merge (join)
merged <- merge(df1, df2, by = "id")                  # inner
merged <- merge(df1, df2, by = "id", all = TRUE)      # full outer
merged <- merge(df1, df2, by = "id", all.x = TRUE)    # left

# Reshape
wide <- reshape(long, direction = "wide",
                idvar = "id", timevar = "time", v.names = "value")
long <- reshape(wide, direction = "long",
                varying = list(c("v1", "v2")), v.names = "value")

# Sort
df[order(df$value), ]              # ascending
df[order(-df$value), ]             # descending
df[order(df$group, -df$value), ]   # multi-column

# Remove duplicates
df[!duplicated(df), ]
df[!duplicated(df$id), ]

# Stack / combine
rbind(df1, df2)    # stack rows (same columns)
cbind(df1, df2)    # bind columns (same rows)

# Transform columns
df$log_val <- log(df$value)
df$category <- cut(df$value, breaks = c(0, 10, 20, Inf),
                   labels = c("low", "med", "high"))
```

### Environment & Debugging

```r
ls()                  # list objects
rm(x)                 # remove object
rm(list = ls())       # clear all
str(obj)              # structure
class(obj)            # class
typeof(obj)           # internal type
is.na(x)              # check NA
complete.cases(df)    # rows without NA
traceback()           # after error
debug(my_func)        # step through
browser()             # breakpoint in code
system.time(expr)     # timing
Sys.time()            # current time
```

## Reference Files

For deeper coverage, read the reference files in `references/`:

### Function Gotchas & Quick Reference (condensed from R 4.5.3 Reference Manual)
Non-obvious behaviors, surprising defaults, and tricky interactions — only what Claude doesn't already know:
- **data-wrangling.md** — Read when: subsetting returns wrong type, apply on data frame gives unexpected coercion, merge/split/cbind behaves oddly, factor levels persist after filtering, table/duplicated edge cases.
- **modeling.md** — Read when: formula syntax is confusing (`I()`, `*` vs `:`, `/`), aov gives wrong SS type, glm silently fits OLS, nls won't converge, predict returns wrong scale, optim/optimize needs tuning.
- **statistics.md** — Read when: hypothesis test gives surprising result, need to choose correct p.adjust method, clustering parameters seem wrong, distribution function naming is confusing (`d`/`p`/`q`/`r` prefixes).
- **visualization.md** — Read when: par settings reset unexpectedly, layout/mfrow interaction is confusing, axis labels are clipped, colors don't look right, need specialty plots (contour, persp, mosaic, pairs).
- **io-and-text.md** — Read when: read.table silently drops data or misparses columns, regex behaves differently than expected, sprintf formatting is tricky, write.table output has unwanted row names.
- **dates-and-system.md** — Read when: Date/POSIXct conversion gives wrong day, time zones cause off-by-one, difftime units are unexpected, need to find/list/test files programmatically.
- **misc-utilities.md** — Read when: do.call behaves differently than direct call, need Reduce/Filter/Map, tryCatch handler doesn't fire, all.equal returns string not logical, time series functions need setup.

## Tips for Writing Good R Code

- Use `vapply()` over `sapply()` in production code — it enforces return types
- Prefer `seq_along(x)` over `1:length(x)` — the latter breaks when `x` is empty
- Use `stringsAsFactors = FALSE` in `read.csv()` / `data.frame()` (default changed in R 4.0)
- Vectorize operations instead of writing loops when possible
- Use `stop()`, `warning()`, `message()` for error handling — not `print()`
- `<<-` assigns to parent environment — use sparingly and intentionally
- `with(df, expr)` avoids repeating `df$` everywhere
- `Sys.setenv()` and `.Renviron` for environment variables
FILE:references/misc-utilities.md
# Miscellaneous Utilities — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## do.call

- `do.call(fun, args_list)` — `args` must be a **list**, even for a single argument.
- `quote = TRUE` prevents evaluation of arguments before the call — needed when passing expressions/symbols.
- Behavior of `substitute` inside `do.call` differs from direct calls. Semantics are not fully defined for this case.
- Useful pattern: `do.call(rbind, list_of_dfs)` to combine a list of data frames.

---

## Reduce / Filter / Map / Find / Position

R's functional programming helpers from base — genuinely non-obvious.

- `Reduce(f, x)` applies binary function `f` cumulatively: `Reduce("+", 1:4)` = `((1+2)+3)+4`. Direction matters for non-commutative ops.
- `Reduce(f, x, accumulate = TRUE)` returns all intermediate results — equivalent to Python's `itertools.accumulate`.
- `Reduce(f, x, right = TRUE)` folds from the right: `f(x1, f(x2, f(x3, x4)))`.
- `Reduce` with `init` adds a starting value: `Reduce(f, x, init = v)` = `f(f(f(v, x1), x2), x3)`.
- `Filter(f, x)` keeps elements where `f(elem)` is `TRUE`. Unlike `x[sapply(x, f)]`, handles `NULL`/empty correctly.
- `Map(f, ...)` is a simple wrapper for `mapply(f, ..., SIMPLIFY = FALSE)` — always returns a list.
- `Find(f, x)` returns the **first** element where `f(elem)` is `TRUE`. `Find(f, x, right = TRUE)` for last.
- `Position(f, x)` returns the **index** of the first match (like `Find` but returns position, not value).

---

## lengths

- `lengths(x)` returns the length of **each element** of a list. Equivalent to `sapply(x, length)` but faster (implemented in C).
- Works on any list-like object. Returns integer vector.

---

## conditions (tryCatch / withCallingHandlers)

- `tryCatch` **unwinds** the call stack — handler runs in the calling environment, not where the error occurred. Cannot resume execution.
- `withCallingHandlers` does NOT unwind — handler runs where the condition was signaled. Can inspect/log then let the condition propagate.
- `tryCatch(expr, error = function(e) e)` returns the error condition object.
- `tryCatch(expr, warning = function(w) {...})` catches the **first** warning and exits. Use `withCallingHandlers` + `invokeRestart("muffleWarning")` to suppress warnings but continue.
- `tryCatch` `finally` clause always runs (like Java try/finally).
- `globalCallingHandlers()` registers handlers that persist for the session (useful for logging).
- Custom conditions: `stop(errorCondition("msg", class = "myError"))` then catch with `tryCatch(..., myError = function(e) ...)`.

---

## all.equal

- Tests **near equality** with tolerance (default `1.5e-8`, i.e., `sqrt(.Machine$double.eps)`).
- Returns `TRUE` or a **character string** describing the difference — NOT `FALSE`. Use `isTRUE(all.equal(x, y))` in conditionals.
- `tolerance` argument controls numeric tolerance. `scale` for absolute vs relative comparison.
- Checks attributes, names, dimensions — more thorough than `==`.

---

## combn

- `combn(n, m)` or `combn(x, m)`: generates all combinations of `m` items from `x`.
- Returns a **matrix** with `m` rows; each column is one combination.
- `FUN` argument applies a function to each combination: `combn(5, 3, sum)` returns sums of all 3-element subsets.
- `simplify = FALSE` returns a list instead of a matrix.

---

## modifyList

- `modifyList(x, val)` replaces elements of list `x` with those in `val` by **name**.
- Setting a value to `NULL` **removes** that element from the list.
- **Does** add new names not in `x` — it uses `x[names(val)] <- val` internally, so any name in `val` gets added or replaced.

---

## relist

- Inverse of `unlist`: given a flat vector and a skeleton list, reconstructs the nested structure.
- `relist(flesh, skeleton)` — `flesh` is the flat data, `skeleton` provides the shape.
- Works with factors, matrices, and nested lists.

---

## txtProgressBar

- `txtProgressBar(min, max, style = 3)` — style 3 shows percentage + bar (most useful).
- Update with `setTxtProgressBar(pb, value)`. Close with `close(pb)`.
- Style 1: rotating `|/-\`, style 2: simple progress. Only style 3 shows percentage.

---

## object.size

- Returns an **estimate** of memory used by an object. Not always exact for shared references.
- `format(object.size(x), units = "MB")` for human-readable output.
- Does not count the size of environments or external pointers.

---

## installed.packages / update.packages

- `installed.packages()` can be slow (scans all packages). Use `find.package()` or `requireNamespace()` to check for a specific package.
- `update.packages(ask = FALSE)` updates all packages without prompting.
- `lib.loc` specifies which library to check/update.

---

## vignette / demo

- `vignette()` lists all vignettes; `vignette("name", package = "pkg")` opens a specific one.
- `demo()` lists all demos; `demo("topic")` runs one interactively.
- `browseVignettes()` opens vignette browser in HTML.

---

## Time series: acf / arima / ts / stl / decompose

- `ts(data, start, frequency)`: `frequency` is observations per unit time (12 for monthly, 4 for quarterly).
- `acf` default `type = "correlation"`. Use `type = "partial"` for PACF. `plot = FALSE` to suppress auto-plotting.
- `arima(x, order = c(p,d,q))` for ARIMA models. `seasonal = list(order = c(P,D,Q), period = S)` for seasonal component.
- `arima` handles `NA` values in the time series (via Kalman filter).
- `stl` requires `s.window` (seasonal window) — must be specified, no default. `s.window = "periodic"` assumes fixed seasonality.
- `decompose`: simpler than `stl`, uses moving averages. `type = "additive"` or `"multiplicative"`.
- `stl` result components: `$time.series` matrix with columns `seasonal`, `trend`, `remainder`.
FILE:references/data-wrangling.md
# Data Wrangling — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## Extract / Extract.data.frame

Indexing pitfalls in base R.

- `m[j = 2, i = 1]` is `m[2, 1]` not `m[1, 2]` — argument names are **ignored** in `[`, positional matching only. Never name index args.
- Factor indexing: `x[f]` uses integer codes of factor `f`, not its character labels. Use `x[as.character(f)]` for label-based indexing.
- `x[[]]` with no index is always an error. `x$name` does partial matching by default; `x[["name"]]` does not (exact by default).
- Assigning `NULL` via `x[[i]] <- NULL` or `x$name <- NULL` **deletes** that list element.
- Data frame `[` with single column: `df[, 1]` returns a **vector** (drop=TRUE default for columns), but `df[1, ]` returns a **data frame** (drop=FALSE for rows). Use `drop = FALSE` explicitly.
- Matrix indexing a data frame (`df[cbind(i,j)]`) coerces to matrix first — avoid.

---

## subset

Use interactively only; unsafe for programming.

- `subset` argument uses **non-standard evaluation** — column names are resolved in the data frame, which can silently pick up wrong variables in programmatic use. Use `[` with explicit logic in functions.
- `NA`s in the logical condition are treated as `FALSE` (rows silently dropped).
- Factors may retain unused levels after subsetting; call `droplevels()`.

---

## match / %in%

- `%in%` **never returns NA** — this makes it safe for `if()` conditions unlike `==`.
- `match()` returns position of **first** match only; duplicates in `table` are ignored.
- Factors, raw vectors, and lists are all converted to character before matching.
- `NaN` matches `NaN` but not `NA`; `NA` matches `NA` only.

---

## apply

- On a **data frame**, `apply` coerces to matrix via `as.matrix` first — mixed types become character.
- Return value orientation is transposed: if FUN returns length-n vector, result has dim `c(n, dim(X)[MARGIN])`. Row results become **columns**.
- Factor results are coerced to character in the output array.
- `...` args cannot share names with `X`, `MARGIN`, or `FUN` (partial matching risk).

---

## lapply / sapply / vapply

- `sapply` can return a vector, matrix, or list unpredictably — use `vapply` in non-interactive code with explicit `FUN.VALUE` template.
- Calling primitives directly in `lapply` can cause dispatch issues; wrap in `function(x) is.numeric(x)` rather than bare `is.numeric`.
- `sapply` with `simplify = "array"` can produce higher-rank arrays (not just matrices).

---

## tapply

- Returns an **array** (not a data frame). Class info on return values is **discarded** (e.g., Date objects become numeric).
- `...` args to FUN are **not** divided into cells — they apply globally, so FUN should not expect additional args with same length as X.
- `default = NA` fills empty cells; set `default = 0` for sum-like operations. Before R 3.4.0 this was hard-coded to `NA`.
- Use `array2DF()` to convert result to a data frame.

---

## mapply

- Argument name is `SIMPLIFY` (all caps) not `simplify` — inconsistent with `sapply`.
- `MoreArgs` must be a **list** of args not vectorized over.
- Recycles shorter args to common length; zero-length arg gives zero-length result.

---

## merge

- Default `by` is `intersect(names(x), names(y))` — can silently merge on unintended columns if data frames share column names.
- `by = 0` or `by = "row.names"` merges on row names, adding a "Row.names" column.
- `by = NULL` (or both `by.x`/`by.y` length 0) produces **Cartesian product**.
- Result is sorted on `by` columns by default (`sort = TRUE`). For unsorted output use `sort = FALSE`.
- Duplicate key matches produce **all combinations** (one row per match pair).

---

## split

- If `f` is a list of factors, interaction is used; levels containing `"."` can cause unexpected splits unless `sep` is changed.
- `drop = FALSE` (default) retains empty factor levels as empty list elements.
- Supports formula syntax: `split(df, ~ Month)`.

---

## cbind / rbind

- `cbind` on data frames calls `data.frame(...)`, not `cbind.matrix`. Mixing matrices and data frames can give unexpected results.
- `rbind` on data frames matches columns **by name**, not position. Missing columns get `NA`.
- `cbind(NULL)` returns `NULL` (not a matrix). For consistency, `rbind(NULL)` also returns `NULL`.

---

## table

- By default **excludes NA** (`useNA = "no"`). Use `useNA = "ifany"` or `exclude = NULL` to count NAs.
- Setting `exclude` non-empty and non-default implies `useNA = "ifany"`.
- Result is always an **array** (even 1D), class "table". Convert to data frame with `as.data.frame(tbl)`.
- Two kinds of NA (factor-level NA vs actual NA) are treated differently depending on `useNA`/`exclude`.

---

## duplicated / unique

- `duplicated` marks the **second and later** occurrences as TRUE, not the first. Use `fromLast = TRUE` to reverse.
- For data frames, operates on whole rows. For lists, compares recursively.
- `unique` keeps the **first** occurrence of each value.

---

## data.frame (gotchas)

- `stringsAsFactors = FALSE` is the default since R 4.0.0 (was TRUE before).
- Atomic vectors recycle to match longest column, but only if exact multiple. Protect with `I()` to prevent conversion.
- Duplicate column names allowed only with `check.names = FALSE`, but many operations will de-dup them silently.
- Matrix arguments are expanded to multiple columns unless protected by `I()`.

---

## factor (gotchas)

- `as.numeric(f)` returns **integer codes**, not original values. Use `as.numeric(levels(f))[f]` or `as.numeric(as.character(f))`.
- Only `==` and `!=` work between factors; factors must have identical level sets. Ordered factors support `<`, `>`.
- `c()` on factors unions level sets (since R 4.1.0), but earlier versions converted to integer.
- Levels are sorted by default, but sort order is **locale-dependent** at creation time.

---

## aggregate

- Formula interface (`aggregate(y ~ x, data, FUN)`) drops `NA` groups by default.
- The data frame method requires `by` as a **list** (not a vector).
- Returns columns named after the grouping variables, with result column keeping the original name.
- If FUN returns multiple values, result column is a **matrix column** inside the data frame.

---

## complete.cases

- Returns a logical vector: TRUE for rows with **no** NAs across all columns/arguments.
- Works on multiple arguments (e.g., `complete.cases(x, y)` checks both).

---

## order

- Returns a **permutation vector** of indices, not the sorted values. Use `x[order(x)]` to sort.
- Default is ascending; use `-x` for descending numeric, or `decreasing = TRUE`.
- For character sorting, depends on locale. Use `method = "radix"` for locale-independent fast sorting.
- `sort.int()` with `method = "radix"` is much faster for large integer/character vectors.
FILE:references/dates-and-system.md
# Dates and System — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## Dates (Date class)

- `Date` objects are stored as **integer days since 1970-01-01**. Arithmetic works in days.
- `Sys.Date()` returns current date as Date object.
- `seq.Date(from, to, by = "month")` — "month" increments can produce varying-length intervals. Adding 1 month to Jan 31 gives Mar 3 (not Feb 28).
- `diff(dates)` returns a `difftime` object in days.
- `format(date, "%Y")` for year, `"%m"` for month, `"%d"` for day, `"%A"` for weekday name (locale-dependent).
- Years before 1CE may not be handled correctly.
- `length(date_vector) <- n` pads with `NA`s if extended.

---

## DateTimeClasses (POSIXct / POSIXlt)

- `POSIXct`: seconds since 1970-01-01 UTC (compact, a numeric vector).
- `POSIXlt`: list with components `$sec`, `$min`, `$hour`, `$mday`, `$mon` (0-11!), `$year` (since 1900!), `$wday` (0-6, Sunday=0), `$yday` (0-365).
- Converting between POSIXct and Date: `as.Date(posixct_obj)` uses `tz = "UTC"` by default — may give different date than intended if original was in another timezone.
- `Sys.time()` returns POSIXct in current timezone.
- `strptime` returns POSIXlt; `as.POSIXct(strptime(...))` to get POSIXct.
- `difftime` arithmetic: subtracting POSIXct objects gives difftime. Units auto-selected ("secs", "mins", "hours", "days", "weeks").

---

## difftime

- `difftime(time1, time2, units = "auto")` — auto-selects smallest sensible unit.
- Explicit units: `"secs"`, `"mins"`, `"hours"`, `"days"`, `"weeks"`. No "months" or "years" (variable length).
- `as.numeric(diff, units = "hours")` to extract numeric value in specific units.
- `units(diff_obj) <- "hours"` changes the unit in place.

---

## system.time / proc.time

- `system.time(expr)` returns `user`, `system`, and `elapsed` time.
- `gcFirst = TRUE` (default): runs garbage collection before timing for more consistent results.
- `proc.time()` returns cumulative time since R started — take differences for intervals.
- `elapsed` (wall clock) can be less than `user` (multi-threaded BLAS) or more (I/O waits).

---

## Sys.sleep

- `Sys.sleep(seconds)` — allows fractional seconds. Actual sleep may be longer (OS scheduling).
- The process **yields** to the OS during sleep (does not busy-wait).

---

## options (key options)

Selected non-obvious options:

- `options(scipen = n)`: positive biases toward fixed notation, negative toward scientific. Default 0. Applies to `print`/`format`/`cat` but not `sprintf`.
- `options(digits = n)`: significant digits for printing (1-22, default 7). Suggestion only.
- `options(digits.secs = n)`: max decimal digits for seconds in time formatting (0-6, default 0).
- `options(warn = n)`: -1 = ignore warnings, 0 = collect (default), 1 = immediate, 2 = convert to errors.
- `options(error = recover)`: drop into debugger on error. `options(error = NULL)` resets to default.
- `options(OutDec = ",")`: change decimal separator in output (affects `format`, `print`, NOT `sprintf`).
- `options(stringsAsFactors = FALSE)`: global default for `data.frame` (moot since R 4.0.0 where it's already FALSE).
- `options(expressions = 5000)`: max nested evaluations. Increase for deep recursion.
- `options(max.print = 99999)`: controls truncation in `print` output.
- `options(na.action = "na.omit")`: default NA handling in model functions.
- `options(contrasts = c("contr.treatment", "contr.poly"))`: default contrasts for unordered/ordered factors.

---

## file.path / basename / dirname

- `file.path("a", "b", "c.txt")` → `"a/b/c.txt"` (platform-appropriate separator).
- `basename("/a/b/c.txt")` → `"c.txt"`. `dirname("/a/b/c.txt")` → `"/a/b"`.
- `file.path` does NOT normalize paths (no `..` resolution); use `normalizePath()` for that.

---

## list.files

- `list.files(pattern = "*.csv")` — `pattern` is a **regex**, not a glob! Use `glob2rx("*.csv")` or `"\\.csv$"`.
- `full.names = FALSE` (default) returns basenames only. Use `full.names = TRUE` for complete paths.
- `recursive = TRUE` to search subdirectories.
- `all.files = TRUE` to include hidden files (starting with `.`).

---

## file.info

- Returns data frame with `size`, `isdir`, `mode`, `mtime`, `ctime`, `atime`, `uid`, `gid`.
- `mtime`: modification time (POSIXct). Useful for `file.info(f)$mtime`.
- On some filesystems, `ctime` is status-change time, not creation time.

---

## file_test

- `file_test("-f", path)`: TRUE if regular file exists.
- `file_test("-d", path)`: TRUE if directory exists.
- `file_test("-nt", f1, f2)`: TRUE if f1 is newer than f2.
- More reliable than `file.exists()` for distinguishing files from directories.
FILE:references/io-and-text.md
# I/O and Text Processing — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## read.table (gotchas)

- `sep = ""` (default) means **any whitespace** (spaces, tabs, newlines) — not a literal empty string.
- `comment.char = "#"` by default — lines with `#` are truncated. Use `comment.char = ""` to disable (also faster).
- `header` auto-detection: set to TRUE if first row has **one fewer field** than subsequent rows (the missing field is assumed to be row names).
- `colClasses = "NULL"` **skips** that column entirely — very useful for speed.
- `read.csv` defaults differ from `read.table`: `header = TRUE`, `sep = ","`, `fill = TRUE`, `comment.char = ""`.
- For large files: specifying `colClasses` and `nrows` dramatically reduces memory usage. `read.table` is slow for wide data frames (hundreds of columns); use `scan` or `data.table::fread` for matrices.
- `stringsAsFactors = FALSE` since R 4.0.0 (was TRUE before).

---

## write.table (gotchas)

- `row.names = TRUE` by default — produces an unnamed first column that confuses re-reading. Use `row.names = FALSE` or `col.names = NA` for Excel-compatible CSV.
- `write.csv` fixes `sep = ","`, `dec = "."`, and uses `qmethod = "double"` — cannot override these via `...`.
- `quote = TRUE` (default) quotes character/factor columns. Numeric columns are never quoted.
- Matrix-like columns in data frames expand to multiple columns silently.
- Slow for data frames with many columns (hundreds+); each column processed separately by class.

---

## read.fwf

- Reads fixed-width format files. `widths` is a vector of field widths.
- **Negative widths skip** that many characters (useful for ignoring fields).
- `buffersize` controls how many lines are read at a time; increase for large files.
- Uses `read.table` internally after splitting fields.

---

## count.fields

- Counts fields per line in a file — useful for diagnosing read errors.
- `sep` and `quote` arguments match those of `read.table`.

---

## grep / grepl / sub / gsub (gotchas)

- Three regex modes: POSIX extended (default), `perl = TRUE`, `fixed = TRUE`. They behave differently for edge cases.
- **Name arguments explicitly** — unnamed args after `x`/`pattern` are matched positionally to `ignore.case`, `perl`, etc. Common source of silent bugs.
- `sub` replaces **first** match only; `gsub` replaces **all** matches.
- Backreferences: `"\\1"` in replacement (double backslash in R strings). With `perl = TRUE`: `"\\U\\1"` for uppercase conversion.
- `grep(value = TRUE)` returns matching **elements**; `grep(value = FALSE)` (default) returns **indices**.
- `grepl` returns logical vector — preferred for filtering.
- `regexpr` returns first match position + length (as attributes); `gregexpr` returns all matches as a list.
- `regexec` returns match + capture group positions; `gregexec` does this for all matches.
- Character classes like `[:alpha:]` must be inside `[[:alpha:]]` (double brackets) in POSIX mode.

---

## strsplit

- Returns a **list** (one element per input string), even for a single string.
- `split = ""` or `split = character(0)` splits into individual characters.
- Match at beginning of string: first element of result is `""`. Match at end: no trailing `""`.
- `fixed = TRUE` is faster and avoids regex interpretation.
- Common mistake: unnamed arguments silently match `fixed`, `perl`, etc.

---

## substr / substring

- `substr(x, start, stop)`: extracts/replaces substring. 1-indexed, inclusive on both ends.
- `substring(x, first, last)`: same but `last` defaults to `1000000L` (effectively "to end"). Vectorized over `first`/`last`.
- Assignment form: `substr(x, 1, 3) <- "abc"` replaces in place (must be same length replacement).

---

## trimws

- `which = "both"` (default), `"left"`, or `"right"`.
- `whitespace = "[ \\t\\r\\n]"` — customizable regex for what counts as whitespace.

---

## nchar

- `type = "bytes"` counts bytes; `type = "chars"` (default) counts characters; `type = "width"` counts display width.
- `nchar(NA)` returns `NA` (not 2). `nchar(factor)` works on the level labels.
- `keepNA = TRUE` (default since R 3.3.0); set to `FALSE` to count `"NA"` as 2 characters.

---

## format / formatC

- `format(x, digits, nsmall)`: `nsmall` forces minimum decimal places. `big.mark = ","` adds thousands separator.
- `formatC(x, format = "f", digits = 2)`: C-style formatting. `format = "e"` for scientific, `"g"` for general.
- `format` returns character vector; always right-justified by default (`justify = "right"`).

---

## type.convert

- Converts character vectors to appropriate types (logical, integer, double, complex, character).
- `as.is = TRUE` (recommended): keeps characters as character, not factor.
- Applied column-wise on data frames. `tryLogical = TRUE` (R 4.3+) converts "TRUE"/"FALSE" columns.

---

## Rscript

- `commandArgs(trailingOnly = TRUE)` gets script arguments (excluding R/Rscript flags).
- `#!` line on Unix: `/usr/bin/env Rscript` or full path.
- `--vanilla` or `--no-init-file` to skip `.Rprofile` loading.
- Exit code: `quit(status = 1)` for error exit.

---

## capture.output

- Captures output from `cat`, `print`, or any expression that writes to stdout.
- `file = NULL` (default) returns character vector. `file = "out.txt"` writes directly to file.
- `type = "message"` captures stderr instead.

---

## URLencode / URLdecode

- `URLencode(url, reserved = FALSE)` by default does NOT encode reserved chars (`/`, `?`, `&`, etc.).
- Set `reserved = TRUE` to encode a URL **component** (query parameter value).

---

## glob2rx

- Converts shell glob patterns to regex: `glob2rx("*.csv")` → `"^.*\\.csv$"`.
- Useful with `list.files(pattern = glob2rx("data_*.RDS"))`.
FILE:references/modeling.md
# Modeling — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## formula

Symbolic model specification gotchas.

- `I()` is required to use arithmetic operators literally: `y ~ x + I(x^2)`. Without `I()`, `^` means interaction crossing.
- `*` = main effects + interaction: `a*b` expands to `a + b + a:b`.
- `(a+b+c)^2` = all main effects + all 2-way interactions (not squaring).
- `-` removes terms: `(a+b+c)^2 - a:b` drops only the `a:b` interaction.
- `/` means nesting: `a/b` = `a + b %in% a` = `a + a:b`.
- `.` in formula means "all other columns in data" (in `terms.formula` context) or "previous contents" (in `update.formula`).
- Formula objects carry an **environment** used for variable lookup; `as.formula("y ~ x")` uses `parent.frame()`.

---

## terms / model.matrix

- `model.matrix` creates the design matrix including dummy coding. Default contrasts: `contr.treatment` for unordered factors, `contr.poly` for ordered.
- `terms` object attributes: `order` (interaction order per term), `intercept`, `factors` matrix.
- Column names from `model.matrix` can be surprising: e.g., `factorLevelName` concatenation.

---

## glm

- Default `family = gaussian(link = "identity")` — `glm()` with no `family` silently fits OLS (same as `lm`, but slower and with deviance-based output).
- Common families: `binomial(link = "logit")`, `poisson(link = "log")`, `Gamma(link = "inverse")`, `inverse.gaussian()`.
- `binomial` accepts response as: 0/1 vector, logical, factor (second level = success), or 2-column matrix `cbind(success, failure)`.
- `weights` in `glm` means **prior weights** (not frequency weights) — for frequency weights, use the cbind trick or offset.
- `predict.glm(type = "response")` for predicted probabilities; default `type = "link"` returns log-odds (for logistic) or log-rate (for Poisson).
- `anova(glm_obj, test = "Chisq")` for deviance-based tests; `"F"` is invalid for non-Gaussian families.
- Quasi-families (`quasibinomial`, `quasipoisson`) allow overdispersion — no AIC is computed.
- Convergence: `control = glm.control(maxit = 100)` if default 25 iterations isn't enough.

---

## aov

- `aov` is a wrapper around `lm` that stores extra info for balanced ANOVA. For unbalanced designs, Type I SS (sequential) are computed — order of terms matters.
- For Type III SS, use `car::Anova()` or set contrasts to `contr.sum`/`contr.helmert`.
- Error strata for repeated measures: `aov(y ~ A*B + Error(Subject/B))`.
- `summary.aov` gives ANOVA table; `summary.lm(aov_obj)` gives regression-style summary.

---

## nls

- Requires **good starting values** in `start = list(...)` or convergence fails.
- Self-starting models (`SSlogis`, `SSasymp`, etc.) auto-compute starting values.
- Algorithm `"port"` allows bounds on parameters (`lower`/`upper`).
- If data fits too exactly (no residual noise), convergence check fails — use `control = list(scaleOffset = 1)` or jitter data.
- `weights` argument for weighted NLS; `na.action` for missing value handling.

---

## step / add1

- `step` does **stepwise** model selection by AIC (default). Use `k = log(n)` for BIC.
- Direction: `direction = "both"` (default), `"forward"`, or `"backward"`.
- `add1`/`drop1` evaluate single-term additions/deletions; `step` calls these iteratively.
- `scope` argument defines the upper/lower model bounds for search.
- `step` modifies the model object in place — can be slow for large models with many candidate terms.

---

## predict.lm / predict.glm

- `predict.lm` with `interval = "confidence"` gives CI for **mean** response; `interval = "prediction"` gives PI for **new observation** (wider).
- `newdata` must have columns matching the original formula variables — factors must have the same levels.
- `predict.glm` with `type = "response"` gives predictions on the response scale (e.g., probabilities for logistic); `type = "link"` (default) gives on the link scale.
- `se.fit = TRUE` returns standard errors; for `predict.glm` these are on the **link** scale regardless of `type`.
- `predict.lm` with `type = "terms"` returns the contribution of each term.

---

## loess

- `span` controls smoothness (default 0.75). Span < 1 uses that proportion of points; span > 1 uses all points with adjusted distance.
- Maximum **4 predictors**. Memory usage is roughly **quadratic** in n (1000 points ~ 10MB).
- `degree = 0` (local constant) is allowed but poorly tested — use with caution.
- Not identical to S's `loess`; conditioning is not implemented.
- `normalize = TRUE` (default) standardizes predictors to common scale; set `FALSE` for spatial coords.

---

## lowess vs loess

- `lowess` is the older function; returns `list(x, y)` — cannot predict at new points.
- `loess` is the newer formula interface with `predict` method.
- `lowess` parameter is `f` (span, default 2/3); `loess` parameter is `span` (default 0.75).
- `lowess` `iter` default is 3 (robustifying iterations); `loess` default `family = "gaussian"` (no robustness).

---

## smooth.spline

- Default smoothing parameter selected by **GCV** (generalized cross-validation).
- `cv = TRUE` uses ordinary leave-one-out CV instead — do not use with duplicate x values.
- `spar` and `lambda` control smoothness; `df` can specify equivalent degrees of freedom.
- Returns object with `predict`, `print`, `plot` methods. The `fit` component has knots and coefficients.

---

## optim

- **Minimizes** by default. To maximize: set `control = list(fnscale = -1)`.
- Default method is Nelder-Mead (no gradients, robust but slow). Poor for 1D — use `"Brent"` or `optimize()`.
- `"L-BFGS-B"` is the only method supporting box constraints (`lower`/`upper`). Bounds auto-select this method with a warning.
- `"SANN"` (simulated annealing): convergence code is **always 0** — it never "fails". `maxit` = total function evals (default 10000), no other stopping criterion.
- `parscale`: scale parameters so unit change in each produces comparable objective change. Critical for mixed-scale problems.
- `hessian = TRUE`: returns numerical Hessian of the **unconstrained** problem even if box constraints are active.
- `fn` can return `NA`/`Inf` (except `"L-BFGS-B"` which requires finite values always). Initial value must be finite.

---

## optimize / uniroot

- `optimize`: 1D minimization on a bounded interval. Returns `minimum` and `objective`.
- `uniroot`: finds a root of `f` in `[lower, upper]`. **Requires** `f(lower)` and `f(upper)` to have opposite signs.
- `uniroot` with `extendInt = "yes"` can auto-extend the interval to find sign change — but can find spurious roots for functions that don't actually cross zero.
- `nlm`: Newton-type minimizer. Gradient/Hessian as **attributes** of the return value from `fn` (unusual interface).

---

## TukeyHSD

- Requires a fitted `aov` object (not `lm`).
- Default `conf.level = 0.95`. Returns adjusted p-values and confidence intervals for all pairwise comparisons.
- Only meaningful for **balanced** or near-balanced designs; can be liberal for very unbalanced data.

---

## anova (for lm)

- `anova(model)`: sequential (Type I) SS — **order of terms matters**.
- `anova(model1, model2)`: F-test comparing nested models.
- For Type II or III SS use `car::Anova()`.
FILE:references/statistics.md
# Statistics — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## chisq.test

- `correct = TRUE` (default) applies Yates continuity correction for **2x2 tables only**.
- `simulate.p.value = TRUE`: Monte Carlo with `B = 2000` replicates (min p ~ 0.0005). Simulation assumes **fixed marginals** (Fisher-style sampling, not the chi-sq assumption).
- For goodness-of-fit: pass a vector, not a matrix. `p` must sum to 1 (or set `rescale.p = TRUE`).
- Return object includes `$expected`, `$residuals` (Pearson), and `$stdres` (standardized).

---

## wilcox.test

- `exact = TRUE` by default for small samples with no ties. With ties, normal approximation used.
- `correct = TRUE` applies continuity correction to normal approximation.
- `conf.int = TRUE` computes Hodges-Lehmann estimator and confidence interval (not just the p-value).
- Paired test: `paired = TRUE` uses signed-rank test (Wilcoxon), not rank-sum (Mann-Whitney).

---

## fisher.test

- For tables larger than 2x2, uses simulation (`simulate.p.value = TRUE`) or network algorithm.
- `workspace` controls memory for the network algorithm; increase if you get errors on large tables.
- `or` argument tests a specific odds ratio (default 1) — only for 2x2 tables.

---

## ks.test

- Two-sample test or one-sample against a reference distribution.
- Does **not** handle ties well — warns and uses asymptotic approximation.
- For composite hypotheses (parameters estimated from data), p-values are **conservative** (too large). Use `dgof` or `ks.test` with `exact = NULL` for discrete distributions.

---

## p.adjust

- Methods: `"holm"` (default), `"BH"` (Benjamini-Hochberg FDR), `"bonferroni"`, `"BY"`, `"hochberg"`, `"hommel"`, `"fdr"` (alias for BH), `"none"`.
- `n` argument: total number of hypotheses (can be larger than `length(p)` if some p-values are excluded).
- Handles `NA`s: adjusted p-values are `NA` where input is `NA`.

---

## pairwise.t.test / pairwise.wilcox.test

- `p.adjust.method` defaults to `"holm"`. Change to `"BH"` for FDR control.
- `pool.sd = TRUE` (default for t-test): uses pooled SD across all groups (assumes equal variances).
- Returns a matrix of p-values, not test statistics.

---

## shapiro.test

- Sample size must be between 3 and 5000.
- Tests normality; low p-value = evidence against normality.

---

## kmeans

- `nstart > 1` recommended (e.g., `nstart = 25`): runs algorithm from multiple random starts, returns best.
- Default `iter.max = 10` — may be too low for convergence. Increase for large/complex data.
- Default algorithm is "Hartigan-Wong" (generally best). Very close points may cause non-convergence (warning with `ifault = 4`).
- Cluster numbering is arbitrary; ordering may differ across platforms.
- Always returns k clusters when k is specified (except Lloyd-Forgy may return fewer).

---

## hclust

- `method = "ward.D2"` implements Ward's criterion correctly (using squared distances). The older `"ward.D"` did not square distances (retained for back-compatibility).
- Input must be a `dist` object. Use `as.dist()` to convert a symmetric matrix.
- `hang = -1` in `plot()` aligns all labels at the bottom.

---

## dist

- `method = "euclidean"` (default). Other options: `"manhattan"`, `"maximum"`, `"canberra"`, `"binary"`, `"minkowski"`.
- Returns a `dist` object (lower triangle only). Use `as.matrix()` to get full matrix.
- `"canberra"`: terms with zero numerator and denominator are **omitted** from the sum (not treated as 0/0).
- `Inf` values: Euclidean distance involving `Inf` is `Inf`. Multiple `Inf`s in same obs give `NaN` for some methods.

---

## prcomp vs princomp

- `prcomp` uses **SVD** (numerically superior); `princomp` uses `eigen` on covariance (less stable, N-1 vs N scaling).
- `scale. = TRUE` in `prcomp` standardizes variables; important when variables have very different scales.
- `princomp` standard deviations differ from `prcomp` by factor `sqrt((n-1)/n)`.
- Both return `$rotation` (loadings) and `$x` (scores); sign of components may differ between runs.

---

## density

- Default bandwidth: `bw = "nrd0"` (Silverman's rule of thumb). For multimodal data, consider `"SJ"` or `"bcv"`.
- `adjust`: multiplicative factor on bandwidth. `adjust = 0.5` halves the bandwidth (less smooth).
- Default kernel: `"gaussian"`. Range of density extends beyond data range (controlled by `cut`, default 3 bandwidths).
- `n = 512`: number of evaluation points. Increase for smoother plotting.
- `from`/`to`: explicitly bound the evaluation range.

---

## quantile

- **Nine** `type` options (1-9). Default `type = 7` (R default, linear interpolation). Type 1 = inverse of empirical CDF (SAS default). Types 4-9 are continuous; 1-3 are discontinuous.
- `na.rm = FALSE` by default — returns NA if any NAs present.
- `names = TRUE` by default, adding "0%", "25%", etc. as names.

---

## Distributions (gotchas across all)

All distribution functions follow the `d/p/q/r` pattern. Common non-obvious points:

- **`n` argument in `r*()` functions**: if `length(n) > 1`, uses `length(n)` as the count, not `n` itself. So `rnorm(c(1,2,3))` generates 3 values, not 1+2+3.
- `log = TRUE` / `log.p = TRUE`: compute on log scale for numerical stability in tails.
- `lower.tail = FALSE` gives survival function P(X > x) directly (more accurate than 1 - pnorm() in tails).
- **Gamma**: parameterized by `shape` and `rate` (= 1/scale). Default `rate = 1`. Specifying both `rate` and `scale` is an error.
- **Beta**: `shape1` (alpha), `shape2` (beta) — no `mean`/`sd` parameterization.
- **Poisson `dpois`**: `x` can be non-integer (returns 0 with a warning for non-integer values if `log = FALSE`).
- **Weibull**: `shape` and `scale` (no `rate`). R's parameterization: `f(x) = (shape/scale)(x/scale)^(shape-1) exp(-(x/scale)^shape)`.
- **Lognormal**: `meanlog` and `sdlog` are mean/sd of the **log**, not of the distribution itself.

---

## cor.test

- Default method: `"pearson"`. Also `"kendall"` and `"spearman"`.
- Returns `$estimate`, `$p.value`, `$conf.int` (CI only for Pearson).
- Formula interface: `cor.test(~ x + y, data = df)` — note the `~` with no LHS.

---

## ecdf

- Returns a **function** (step function). Call it on new values: `Fn <- ecdf(x); Fn(3.5)`.
- `plot(ecdf(x))` gives the empirical CDF plot.
- The returned function is right-continuous with left limits (cadlag).

---

## weighted.mean

- Handles `NA` in weights: observation is dropped if weight is `NA`.
- Weights do not need to sum to 1; they are normalized internally.
FILE:references/visualization.md
# Visualization — Quick Reference

> Non-obvious behaviors, gotchas, and tricky defaults for R functions.
> Only what Claude doesn't already know.

---

## par (gotchas)

- `par()` settings are per-device. Opening a new device resets everything.
- Setting `mfrow`/`mfcol` resets `cex` to 1 and `mex` to 1. With 2x2 layout, base `cex` is multiplied by 0.83; with 3+ rows/columns, by 0.66.
- `mai` (inches), `mar` (lines), `pin`, `plt`, `pty` all interact. Restoring all saved parameters after device resize can produce inconsistent results — last-alphabetically wins.
- `bg` set via `par()` also sets `new = FALSE`. Setting `fg` via `par()` also sets `col`.
- `xpd = NA` clips to device region (allows drawing in outer margins); `xpd = TRUE` clips to figure region; `xpd = FALSE` (default) clips to plot region.
- `mgp = c(3, 1, 0)`: controls title line (`mgp[1]`), label line (`mgp[2]`), axis line (`mgp[3]`). All in `mex` units.
- `las`: 0 = parallel to axis, 1 = horizontal, 2 = perpendicular, 3 = vertical. Does **not** respond to `srt`.
- `tck = 1` draws grid lines across the plot. `tcl = -0.5` (default) gives outward ticks.
- `usr` with log scale: contains **log10** of the coordinate limits, not the raw values.
- Read-only parameters: `cin`, `cra`, `csi`, `cxy`, `din`, `page`.

---

## layout

- `layout(mat)` where `mat` is a matrix of integers specifying figure arrangement.
- `widths`/`heights` accept `lcm()` for absolute sizes mixed with relative sizes.
- More flexible than `mfrow`/`mfcol` but cannot be queried once set (unlike `par("mfrow")`).
- `layout.show(n)` visualizes the layout for debugging.

---

## axis / mtext

- `axis(side, at, labels)`: `side` 1=bottom, 2=left, 3=top, 4=right.
- Default gap between axis labels controlled by `par("mgp")`. Labels can overlap if not managed.
- `mtext`: `line` argument positions text in margin lines (0 = adjacent to plot, positive = outward). `adj` controls horizontal position (0-1).
- `mtext` with `outer = TRUE` writes in the **outer** margin (set by `par(oma = ...)`).

---

## curve

- First argument can be an **expression** in `x` or a function: `curve(sin, 0, 2*pi)` or `curve(x^2 + 1, 0, 10)`.
- `add = TRUE` to overlay on existing plot. Default `n = 101` evaluation points.
- `xname = "x"` by default; change if your expression uses a different variable name.

---

## pairs

- `panel` function receives `(x, y, ...)` for each pair. `lower.panel`, `upper.panel`, `diag.panel` for different regions.
- `gap` controls spacing between panels (default 1).
- Formula interface: `pairs(~ var1 + var2 + var3, data = df)`.

---

## coplot

- Conditioning plots: `coplot(y ~ x | a)` or `coplot(y ~ x | a * b)` for two conditioning variables.
- `panel` function can be customized; `rows`/`columns` control layout.
- Default panel draws points; use `panel = panel.smooth` for loess overlay.

---

## matplot / matlines / matpoints

- Plots columns of one matrix against columns of another. Recycles `col`, `lty`, `pch` across columns.
- `type = "l"` by default (unlike `plot` which defaults to `"p"`).
- Useful for plotting multiple time series or fitted curves simultaneously.

---

## contour / filled.contour / image

- `contour(x, y, z)`: `z` must be a matrix with `dim = c(length(x), length(y))`.
- `filled.contour` has a non-standard layout — it creates its own plot region for the color key. **Cannot use `par(mfrow)` with it**. Adding elements requires the `plot.axes` argument.
- `image`: plots z-values as colored rectangles. Default color scheme may be misleading; set `col` explicitly.
- For `image`, `x` and `y` specify **cell boundaries** or **midpoints** depending on context.

---

## persp

- `persp(x, y, z, theta, phi)`: `theta` = azimuthal angle, `phi` = colatitude.
- Returns a **transformation matrix** (invisible) for projecting 3D to 2D — use `trans3d()` to add points/lines to the perspective plot.
- `shade` and `col` control surface shading. `border = NA` removes grid lines.

---

## segments / arrows / rect / polygon

- All take vectorized coordinates; recycle as needed.
- `arrows`: `code = 1` (head at start), `code = 2` (head at end, default), `code = 3` (both).
- `polygon`: last point auto-connects to first. Fill with `col`; `border` controls outline.
- `rect(xleft, ybottom, xright, ytop)` — note argument order is not the same as other systems.

---

## dev / dev.off / dev.copy

- `dev.new()` opens a new device. `dev.off()` closes current device (and flushes output for file devices like `pdf`).
- `dev.off()` on the **last** open device reverts to null device.
- `dev.copy(pdf, file = "plot.pdf")` followed by `dev.off()` to save current plot.
- `dev.list()` returns all open devices; `dev.cur()` the active one.

---

## pdf

- Must call `dev.off()` to finalize the file. Without it, file may be empty/corrupt.
- `onefile = TRUE` (default): multiple pages in one PDF. `onefile = FALSE`: one file per page (uses `%d` in filename for numbering).
- `useDingbats = FALSE` recommended to avoid issues with certain PDF viewers and pch symbols.
- Default size: 7x7 inches. `family` controls font family.

---

## png / bitmap devices

- `res` controls DPI (default 72). For publication: `res = 300` with appropriate `width`/`height` in pixels or inches (with `units = "in"`).
- `type = "cairo"` (on systems with cairo) gives better antialiasing than default.
- `bg = "transparent"` for transparent background (PNG supports alpha).

---

## colors / rgb / hcl / col2rgb

- `colors()` returns all 657 named colors. `col2rgb("color")` returns RGB matrix.
- `rgb(r, g, b, alpha, maxColorValue = 255)` — note `maxColorValue` default is 1, not 255.
- `hcl(h, c, l)`: perceptually uniform color space. Preferred for color scales.
- `adjustcolor(col, alpha.f = 0.5)`: easy way to add transparency.

---

## colorRamp / colorRampPalette

- `colorRamp` returns a **function** mapping [0,1] to RGB matrix.
- `colorRampPalette` returns a **function** taking `n` and returning `n` interpolated colors.
- `space = "Lab"` gives more perceptually uniform interpolation than `"rgb"`.

---

## palette / recordPlot

- `palette()` returns current palette (default 8 colors). `palette("Set1")` sets a built-in palette.
- Integer colors in plots index into the palette (with wrapping). Index 0 = background color.
- `recordPlot()` / `replayPlot()`: save and restore a complete plot — device-dependent and fragile across sessions.
FILE:assets/analysis_template.R
# ============================================================
# Analysis Template — Base R
# Copy this file, rename it, and fill in your details.
# ============================================================
# Author  : 
# Date    : 
# Data    : 
# Purpose : 
# ============================================================


# ── 0. Setup ─────────────────────────────────────────────────
# Clear environment (optional — comment out if loading into existing session)
rm(list = ls())

# Set working directory if needed
# setwd("/path/to/your/project")

# Reproducibility
set.seed(42)

# Libraries — uncomment what you need
# library(haven)        # read .dta / .sav / .sas
# library(readxl)       # read Excel files
# library(openxlsx)     # write Excel files
# library(foreign)      # older Stata / SPSS formats
# library(survey)       # survey-weighted analysis
# library(lmtest)       # Breusch-Pagan, Durbin-Watson etc.
# library(sandwich)     # robust standard errors
# library(car)          # Type II/III ANOVA, VIF


# ── 1. Load Data ─────────────────────────────────────────────
df <- read.csv("your_data.csv", stringsAsFactors = FALSE)
# df <- readRDS("your_data.rds")
# df <- haven::read_dta("your_data.dta")

# First look — always run these
dim(df)
str(df)
head(df, 10)
summary(df)


# ── 2. Data Quality Check ────────────────────────────────────
# Missing values
na_report <- data.frame(
  column   = names(df),
  n_miss   = colSums(is.na(df)),
  pct_miss = round(colMeans(is.na(df)) * 100, 1),
  row.names = NULL
)
print(na_report[na_report$n_miss > 0, ])

# Duplicates
n_dup <- sum(duplicated(df))
cat(sprintf("Duplicate rows: %d\n", n_dup))

# Unique values for categorical columns
cat_cols <- names(df)[sapply(df, function(x) is.character(x) | is.factor(x))]
for (col in cat_cols) {
  cat(sprintf("\n%s (%d unique):\n", col, length(unique(df[[col]]))))
  print(table(df[[col]], useNA = "ifany"))
}


# ── 3. Clean & Transform ─────────────────────────────────────
# Rename columns (example)
# names(df)[names(df) == "old_name"] <- "new_name"

# Convert types
# df$group <- as.factor(df$group)
# df$date  <- as.Date(df$date, format = "%Y-%m-%d")

# Recode values (example)
# df$gender <- ifelse(df$gender == 1, "Male", "Female")

# Create new variables (example)
# df$log_income <- log(df$income + 1)
# df$age_group  <- cut(df$age,
#                      breaks = c(0, 25, 45, 65, Inf),
#                      labels = c("18-25", "26-45", "46-65", "65+"))

# Filter rows (example)
# df <- df[df$year >= 2010, ]
# df <- df[complete.cases(df[, c("outcome", "predictor")]), ]

# Drop unused factor levels
# df <- droplevels(df)


# ── 4. Descriptive Statistics ────────────────────────────────
# Numeric summary
num_cols <- names(df)[sapply(df, is.numeric)]
round(sapply(df[num_cols], function(x) c(
  n      = sum(!is.na(x)),
  mean   = mean(x, na.rm = TRUE),
  sd     = sd(x, na.rm = TRUE),
  median = median(x, na.rm = TRUE),
  min    = min(x, na.rm = TRUE),
  max    = max(x, na.rm = TRUE)
)), 3)

# Cross-tabulation
# table(df$group, df$category, useNA = "ifany")
# prop.table(table(df$group, df$category), margin = 1)  # row proportions


# ── 5. Visualization (EDA) ───────────────────────────────────
par(mfrow = c(2, 2))

# Histogram of main outcome
hist(df$outcome_var,
     main   = "Distribution of Outcome",
     xlab   = "Outcome",
     col    = "steelblue",
     border = "white",
     breaks = 30)

# Boxplot by group
boxplot(outcome_var ~ group_var,
        data = df,
        main = "Outcome by Group",
        col  = "lightyellow",
        las  = 2)

# Scatter plot
plot(df$predictor, df$outcome_var,
     main = "Predictor vs Outcome",
     xlab = "Predictor",
     ylab = "Outcome",
     pch  = 19,
     col  = adjustcolor("steelblue", alpha.f = 0.5),
     cex  = 0.8)
abline(lm(outcome_var ~ predictor, data = df),
       col = "red", lwd = 2)

# Correlation matrix (numeric columns only)
cor_mat <- cor(df[num_cols], use = "complete.obs")
image(cor_mat,
      main = "Correlation Matrix",
      col  = hcl.colors(20, "RdBu", rev = TRUE))

par(mfrow = c(1, 1))


# ── 6. Analysis ───────────────────────────────────────────────

# ·· 6a. Comparison of means ··
t.test(outcome_var ~ group_var, data = df)

# ·· 6b. Linear regression ··
fit <- lm(outcome_var ~ predictor1 + predictor2 + group_var,
          data = df)
summary(fit)
confint(fit)

# Check VIF for multicollinearity (requires car)
# car::vif(fit)

# Robust standard errors (requires lmtest + sandwich)
# lmtest::coeftest(fit, vcov = sandwich::vcovHC(fit, type = "HC3"))

# ·· 6c. ANOVA ··
# fit_aov <- aov(outcome_var ~ group_var, data = df)
# summary(fit_aov)
# TukeyHSD(fit_aov)

# ·· 6d. Logistic regression (binary outcome) ··
# fit_logit <- glm(binary_outcome ~ x1 + x2,
#                  data   = df,
#                  family = binomial(link = "logit"))
# summary(fit_logit)
# exp(coef(fit_logit))         # odds ratios
# exp(confint(fit_logit))      # OR confidence intervals


# ── 7. Model Diagnostics ─────────────────────────────────────
par(mfrow = c(2, 2))
plot(fit)
par(mfrow = c(1, 1))

# Residual normality
shapiro.test(residuals(fit))

# Homoscedasticity (requires lmtest)
# lmtest::bptest(fit)


# ── 8. Save Output ────────────────────────────────────────────
# Cleaned data
# write.csv(df, "data_clean.csv", row.names = FALSE)
# saveRDS(df, "data_clean.rds")

# Model results to text file
# sink("results.txt")
# cat("=== Linear Model ===\n")
# print(summary(fit))
# cat("\n=== Confidence Intervals ===\n")
# print(confint(fit))
# sink()

# Plots to file
# png("figure1_distributions.png", width = 1200, height = 900, res = 150)
# par(mfrow = c(2, 2))
# # ... your plots ...
# par(mfrow = c(1, 1))
# dev.off()

# ============================================================
# END OF TEMPLATE
# ============================================================
FILE:scripts/check_data.R
# check_data.R — Quick data quality report for any R data frame
# Usage: source("check_data.R") then call check_data(df)
# Or:    source("check_data.R"); check_data(read.csv("yourfile.csv"))

check_data <- function(df, top_n_levels = 8) {
  
  if (!is.data.frame(df)) stop("Input must be a data frame.")
  
  n_row <- nrow(df)
  n_col <- ncol(df)
  
  cat("══════════════════════════════════════════\n")
  cat("  DATA QUALITY REPORT\n")
  cat("══════════════════════════════════════════\n")
  cat(sprintf("  Rows: %d    Columns: %d\n", n_row, n_col))
  cat("══════════════════════════════════════════\n\n")
  
  # ── 1. Column overview ──────────────────────
  cat("── COLUMN OVERVIEW ────────────────────────\n")
  
  for (col in names(df)) {
    x     <- df[[col]]
    cls   <- class(x)[1]
    n_na  <- sum(is.na(x))
    pct   <- round(n_na / n_row * 100, 1)
    n_uniq <- length(unique(x[!is.na(x)]))
    
    na_flag <- if (n_na == 0) "" else sprintf("  *** %d NAs (%.1f%%)", n_na, pct)
    cat(sprintf("  %-20s  %-12s  %d unique%s\n",
                col, cls, n_uniq, na_flag))
  }
  
  # ── 2. NA summary ────────────────────────────
  cat("\n── NA SUMMARY ─────────────────────────────\n")
  
  na_counts <- sapply(df, function(x) sum(is.na(x)))
  cols_with_na <- na_counts[na_counts > 0]
  
  if (length(cols_with_na) == 0) {
    cat("  No missing values. \n")
  } else {
    cat(sprintf("  Columns with NAs: %d of %d\n\n", length(cols_with_na), n_col))
    for (col in names(cols_with_na)) {
      bar_len  <- round(cols_with_na[col] / n_row * 20)
      bar      <- paste0(rep("█", bar_len), collapse = "")
      pct_na   <- round(cols_with_na[col] / n_row * 100, 1)
      cat(sprintf("  %-20s  [%-20s]  %d (%.1f%%)\n",
                  col, bar, cols_with_na[col], pct_na))
    }
  }
  
  # ── 3. Numeric columns ───────────────────────
  num_cols <- names(df)[sapply(df, is.numeric)]
  
  if (length(num_cols) > 0) {
    cat("\n── NUMERIC COLUMNS ────────────────────────\n")
    cat(sprintf("  %-20s  %8s  %8s  %8s  %8s  %8s\n",
                "Column", "Min", "Mean", "Median", "Max", "SD"))
    cat(sprintf("  %-20s  %8s  %8s  %8s  %8s  %8s\n",
                "──────", "───", "────", "──────", "───", "──"))
    
    for (col in num_cols) {
      x  <- df[[col]][!is.na(df[[col]])]
      if (length(x) == 0) next
      cat(sprintf("  %-20s  %8.3g  %8.3g  %8.3g  %8.3g  %8.3g\n",
                  col,
                  min(x), mean(x), median(x), max(x), sd(x)))
    }
  }
  
  # ── 4. Factor / character columns ───────────
  cat_cols <- names(df)[sapply(df, function(x) is.factor(x) | is.character(x))]
  
  if (length(cat_cols) > 0) {
    cat("\n── CATEGORICAL COLUMNS ────────────────────\n")
    
    for (col in cat_cols) {
      x    <- df[[col]]
      tbl  <- sort(table(x, useNA = "no"), decreasing = TRUE)
      n_lv <- length(tbl)
      cat(sprintf("\n  %s  (%d unique values)\n", col, n_lv))
      
      show <- min(top_n_levels, n_lv)
      for (i in seq_len(show)) {
        lbl <- names(tbl)[i]
        cnt <- tbl[i]
        pct <- round(cnt / n_row * 100, 1)
        cat(sprintf("    %-25s  %5d  (%.1f%%)\n", lbl, cnt, pct))
      }
      if (n_lv > top_n_levels) {
        cat(sprintf("    ... and %d more levels\n", n_lv - top_n_levels))
      }
    }
  }
  
  # ── 5. Duplicate rows ────────────────────────
  cat("\n── DUPLICATES ─────────────────────────────\n")
  n_dup <- sum(duplicated(df))
  if (n_dup == 0) {
    cat("  No duplicate rows.\n")
  } else {
    cat(sprintf("  %d duplicate row(s) found (%.1f%% of data)\n",
                n_dup, n_dup / n_row * 100))
  }
  
  cat("\n══════════════════════════════════════════\n")
  cat("  END OF REPORT\n")
  cat("══════════════════════════════════════════\n")
  
  # Return invisibly for programmatic use
  invisible(list(
    dims       = c(rows = n_row, cols = n_col),
    na_counts  = na_counts,
    n_dupes    = n_dup
  ))
}
FILE:scripts/scaffold_analysis.R
#!/usr/bin/env Rscript
# scaffold_analysis.R — Generates a starter analysis script
#
# Usage (from terminal):
#   Rscript scaffold_analysis.R myproject
#   Rscript scaffold_analysis.R myproject outcome_var group_var
#
# Usage (from R console):
#   source("scaffold_analysis.R")
#   scaffold_analysis("myproject", outcome = "score", group = "treatment")
#
# Output: myproject_analysis.R  (ready to edit)

scaffold_analysis <- function(project_name,
                               outcome   = "outcome",
                               group     = "group",
                               data_file = NULL) {
  
  if (is.null(data_file)) data_file <- paste0(project_name, ".csv")
  out_file <- paste0(project_name, "_analysis.R")
  
  template <- sprintf(
'# ============================================================
# Project : %s
# Created : %s
# ============================================================

# ── 0. Libraries ─────────────────────────────────────────────
# Add packages you need here
# library(ggplot2)
# library(haven)     # for .dta files
# library(openxlsx)  # for Excel output


# ── 1. Load Data ─────────────────────────────────────────────
df <- read.csv("%s", stringsAsFactors = FALSE)

# Quick check — always do this first
cat("Dimensions:", dim(df), "\\n")
str(df)
head(df)


# ── 2. Explore / EDA ─────────────────────────────────────────
summary(df)

# NA check
na_counts <- colSums(is.na(df))
na_counts[na_counts > 0]

# Key variable distributions
hist(df$%s, main = "Distribution of %s", xlab = "%s")

if ("%s" %%in%% names(df)) {
  table(df$%s)
  barplot(table(df$%s),
          main = "Counts by %s",
          col  = "steelblue",
          las  = 2)
}


# ── 3. Clean / Transform ──────────────────────────────────────
# df <- df[complete.cases(df), ]        # drop rows with any NA
# df$%s <- as.factor(df$%s)            # convert to factor


# ── 4. Analysis ───────────────────────────────────────────────

# Descriptive stats by group
tapply(df$%s, df$%s, mean, na.rm = TRUE)
tapply(df$%s, df$%s, sd,   na.rm = TRUE)

# t-test (two groups)
# t.test(%s ~ %s, data = df)

# Linear model
fit <- lm(%s ~ %s, data = df)
summary(fit)
confint(fit)

# ANOVA (multiple groups)
# fit_aov <- aov(%s ~ %s, data = df)
# summary(fit_aov)
# TukeyHSD(fit_aov)


# ── 5. Visualize Results ──────────────────────────────────────
par(mfrow = c(1, 2))

# Boxplot by group
boxplot(%s ~ %s,
        data = df,
        main = "%s by %s",
        xlab = "%s",
        ylab = "%s",
        col  = "lightyellow")

# Model diagnostics
plot(fit, which = 1)  # residuals vs fitted

par(mfrow = c(1, 1))


# ── 6. Save Output ────────────────────────────────────────────
# Save cleaned data
# write.csv(df, "%s_clean.csv", row.names = FALSE)

# Save model summary to text
# sink("%s_results.txt")
# summary(fit)
# sink()

# Save plot to file
# png("%s_boxplot.png", width = 800, height = 600, res = 150)
# boxplot(%s ~ %s, data = df, col = "lightyellow")
# dev.off()
',
    project_name,
    format(Sys.Date(), "%%Y-%%m-%%d"),
    data_file,
    # Section 2 — EDA
    outcome, outcome, outcome,
    group, group, group, group,
    # Section 3
    group, group,
    # Section 4
    outcome, group,
    outcome, group,
    outcome, group,
    outcome, group,
    outcome, group,
    outcome, group,
    # Section 5
    outcome, group,
    outcome, group,
    group, outcome,
    # Section 6
    project_name, project_name, project_name,
    outcome, group
  )
  
  writeLines(template, out_file)
  cat(sprintf("Created: %s\n", out_file))
  invisible(out_file)
}


# ── Run from command line ─────────────────────────────────────
if (!interactive()) {
  args <- commandArgs(trailingOnly = TRUE)
  
  if (length(args) == 0) {
    cat("Usage: Rscript scaffold_analysis.R <project_name> [outcome_var] [group_var]\n")
    cat("Example: Rscript scaffold_analysis.R myproject score treatment\n")
    quit(status = 1)
  }
  
  project <- args[1]
  outcome <- if (length(args) >= 2) args[2] else "outcome"
  group   <- if (length(args) >= 3) args[3] else "group"
  
  scaffold_analysis(project, outcome = outcome, group = group)
}
FILE:README.md
# base-r-skill 

GitHub: https://github.com/iremaydas/base-r-skill

A Claude Code skill for base R programming.

---

## The Story

I'm a political science PhD candidate who uses R regularly but would never call myself *an R person*. I needed a Claude Code skill for base R — something without tidyverse, without ggplot2, just plain R — and I couldn't find one anywhere.

So I made one myself. At 11pm. Asking Claude to help me build a skill for Claude. 

If you're also someone who Googles `how to drop NA rows in R` every single time, this one's for you. 🫶

---

## What's Inside

```
base-r/
├── SKILL.md                    # Main skill file
├── references/                 # Gotchas & non-obvious behaviors
│   ├── data-wrangling.md       # Subsetting traps, apply family, merge, factor quirks
│   ├── modeling.md             # Formula syntax, lm/glm/aov/nls, optim
│   ├── statistics.md           # Hypothesis tests, distributions, clustering
│   ├── visualization.md        # par, layout, devices, colors
│   ├── io-and-text.md          # read.table, grep, regex, format
│   ├── dates-and-system.md     # Date/POSIXct traps, options(), file ops
│   └── misc-utilities.md       # tryCatch, do.call, time series, utilities
├── scripts/
│   ├── check_data.R            # Quick data quality report for any data frame
│   └── scaffold_analysis.R     # Generates a starter analysis script
└── assets/
    └── analysis_template.R     # Copy-paste analysis template
```

The reference files were condensed from the official R 4.5.3 manual — **19,518 lines → 945 lines** (95% reduction). Only the non-obvious stuff survived: gotchas, surprising defaults, tricky interactions. The things Claude already knows well got cut.

---

## How to Use

Add this skill to your Claude Code setup by pointing to this repo. Then Claude will automatically load the relevant reference files when you're working on R tasks.

Works best for:
- Base R data manipulation (no tidyverse)
- Statistical modeling with `lm`, `glm`, `aov`
- Base graphics with `plot`, `par`, `barplot`
- Understanding why your R code is doing that weird thing

Not for: tidyverse, ggplot2, Shiny, or R package development.

---

## The `check_data.R` Script

Probably the most useful standalone thing here. Source it and run `check_data(df)` on any data frame to get a formatted report of dimensions, NA counts, numeric summaries, and categorical breakdowns.

```r
source("scripts/check_data.R")
check_data(your_df)
```

---

## Built With Help From

- Claude (obviously)
- The official R manuals (all 19,518 lines of them)
- Mild frustration and several cups of coffee

---

## Contributing

If you spot a missing gotcha, a wrong default, or something that should be in the references — PRs are very welcome. I'm learning too.

---

*Made by [@iremaydas](https://github.com/iremaydas) — PhD candidate, occasional R user, full-time Googler of things I should probably know by now.*
````

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [base-r](https://prompts.chat/prompts/base-r) |
| Category | Uncategorized (`uncategorized`) |
| Type | `SKILL` |
| Tags | claude-code, coding, skills, Data Analysis |
| Contributors | iremaydas |
| Updated At | 2026-03-27T12:12:03.062Z |
