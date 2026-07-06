# 结构化且有效的学习提示词

## 中文说明

一种根据你当前现有知识学习新科目的结构化引导方式。

## 使用场景

* 解释概念、设计练习和学习计划
* 生成课程材料、测验或教学活动
* 把复杂知识转化为清晰的学习路径
* 围绕 Learning、self-learning、Self Improvement 等主题生成结构化结果

## 适用人群

* 教师
* 学生
* 培训人员

## 中文 Prompt

```md
${subject}=
${current_level}=
${time_available}=
${learning_style}=
${goal}=

第 1 步：知识评估
1.将${subject}分解为核心组件
2. 评估每个组件的复杂程度
3. 映射先决条件和依赖关系
4. 确定基本概念
输出详细的技能树和学习层次

~ 第 2 步：学习路径设计
1. 基于${current_level}创建进度里程碑
2. 以最佳学习顺序构建主题
3. 估计每个主题的时间要求
4. 与${time_available}约束对齐
输出带有时间框架的结构化学习路线图

~ 步骤 3：资源管理
1.识别匹配${learning_style}的学习资料：
   - 视频课程
   - 书籍/文章
   - 互动练习
   - 实践项目
2. 按有效性对资源进行排序
3. 创建资源播放列表
输出综合资源列表，并按优先顺序排序

~ 第 4 步：实践框架
1. 为每个主题设计练习
2.创建真实的应用场景
3.制定进度检查点
4. 结构审查间隔
输出具有间隔重复计划的练习计划

~ 第 5 步：进度跟踪系统
1. 定义可衡量的进度指标
2. 制定评估标准
3.设计反馈循环
4. 建立里程碑完成指标
输出进度跟踪模板和基准

~ 第 6 步：生成学习计划
1. 将学习分解为每日/每周任务
2. 结合休息和复习时间
3.添加检查点评估
4.平衡理论与实践
输出与 ${time_available} 一致的详细学习计划
```

---

## English Original

### Title

Structured and Effective Learning Prompt

### Description

A structured and guided way to learn new subjects based on your current existing knowledge.

### Prompt

```md
${subject}=
${current_level}=
${time_available}=
${learning_style}=
${goal}=

Step 1: Knowledge Assessment
1. Break down ${subject} into core components
2. Evaluate complexity levels of each component
3. Map prerequisites and dependencies
4. Identify foundational concepts
Output detailed skill tree and learning hierarchy

~ Step 2: Learning Path Design
1. Create progression milestones based on ${current_level}
2. Structure topics in optimal learning sequence
3. Estimate time requirements per topic
4. Align with ${time_available} constraints
Output structured learning roadmap with timeframes

~ Step 3: Resource Curation
1. Identify learning materials matching ${learning_style}:
   - Video courses
   - Books/articles
   - Interactive exercises
   - Practice projects
2. Rank resources by effectiveness
3. Create resource playlist
Output comprehensive resource list with priority order

~ Step 4: Practice Framework
1. Design exercises for each topic
2. Create real-world application scenarios
3. Develop progress checkpoints
4. Structure review intervals
Output practice plan with spaced repetition schedule

~ Step 5: Progress Tracking System
1. Define measurable progress indicators
2. Create assessment criteria
3. Design feedback loops
4. Establish milestone completion metrics
Output progress tracking template and benchmarks

~ Step 6: Study Schedule Generation
1. Break down learning into daily/weekly tasks
2. Incorporate rest and review periods
3. Add checkpoint assessments
4. Balance theory and practice
Output detailed study schedule aligned with ${time_available}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
