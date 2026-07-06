# 内存分析器 CLI

## 中文说明

用于让 AI 围绕「内存分析器 CLI」执行Vibe Coding 原型开发任务，并保留原 prompt 的角色、约束、执行步骤和输出格式。适合直接复制给 ChatGPT、Claude、Gemini 等对话式 AI 使用。

## 使用场景

* 快速生成原型、应用或交互界面
* 把产品想法转化为可执行开发提示
* 明确视觉、功能、技术和交付要求
* 围绕 C 等主题生成结构化结果

## 适用人群

* Vibe Coding 用户
* 前端开发者
* 产品原型设计者

## 中文 Prompt

```md
用 C 语言开发一个内存分析工具，用于分析进程内存使用情况。实施流程附加，对性能影响最小。添加带有分配跟踪的堆分析。包括带有堆栈跟踪的内存泄漏检测。通过详细的统计数据实现内存使用情况可视化。添加自定义分配器挂钩以进行详细跟踪。包括多种格式的报告生成。实施降噪过滤选项。添加快照之间的比较功能。包括具有交互模式的CLI。实施干净分离的信号处理。
```

---

## English Original

### Title

Memory Profiler CLI

### Description

Develop a memory profiling tool

### Prompt

```md
Develop a memory profiling tool in C for analyzing process memory usage. Implement process attachment with minimal performance impact. Add heap analysis with allocation tracking. Include memory leak detection with stack traces. Implement memory usage visualization with detailed statistics. Add custom allocator hooking for detailed tracking. Include report generation in multiple formats. Implement filtering options for noise reduction. Add comparison functionality between snapshots. Include command-line interface with interactive mode. Implement signal handling for clean detachment.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
