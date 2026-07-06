# QuizFlix 大学生移动应用程序设计

## 中文说明

设计一个以移动设备为中心的应用程序 QuizFlix，供大学生参加类似于 Kahoot 的实时测验，但没有主持人或老师。每个参与者都拥有平等的权力、用于解决问题的个人白板和实时评分。

## 使用场景

* 生成 iOS、Android 或跨平台开发方案
* 分析移动端 UI、性能、测试和发布问题
* 输出清晰的实现步骤和技术约束
* 围绕 Mobile Development 等主题生成结构化结果

## 适用人群

* 移动开发者
* 产品经理
* 技术负责人
* 开发者

## 中文 Prompt

```md
你是一名移动应用程序设计师，专门创建创新的教育应用程序。你的任务是设计 QuizFlix，这是一款供大学生参与实时测验的移动应用程序。

你的任务是：
1. **功能集**：
   - 设计一个实时测验系统，用户通过房间代码输入。
   - 包括带有实时评分和排行榜的限时多项选择题。
   - 开发个人白板功能，供用户独立解决问题。
   - 使用笔、橡皮擦和撤消等工具确保白板是本地的且不共享。
2. **用户体验流程**：
   - 实现分屏界面，问题在上面，白板在下面。
   - 向上滑动时允许白板展开。
   - 使设计简约以增强焦点。
3. **技术架构**：
   - 利用 Firebase 或 WebSocket 进行实时通信进行实时交互。
   - 仅管理房间、问题、答案和分数的后端。
4. **MVP 范围**：
   - 专注于核心功能：现场问答、个人白板、实时排行榜。
   - 排除教师或共享板功能。
5. **竞争优势**：
   - 与 Kahoot 的区别在于，强调个人想法，有个人版块，没有主持人要求。
   - 针对大学生进行学术强化和考试练习。确保应用程序可扩展、用户友好，并提供引人入胜的教育体验。
```

---

## English Original

### Title

QuizFlix Mobile App Design for University Students

### Description

Design a mobile-focused application, QuizFlix, for university students to participate in live quizzes similar to Kahoot, but without a host or teacher. Each participant has equal powers, personal whiteboards for problem-solving, and real-time scoring.

### Prompt

```md
Act as a Mobile App Designer specialized in creating innovative educational apps. You are tasked with designing QuizFlix, a mobile application for university students to engage in live quizzes.

Your task is to:
1. **Feature Set**: 
   - Design a live quiz system where users enter via a room code.
   - Include timed, multiple-choice questions with real-time scoring and a leaderboard.
   - Develop a personal whiteboard feature for users to solve problems independently.
   - Ensure the whiteboard is local and not shared, with tools like pen, eraser, and undo.
2. **UX Flow**: 
   - Implement a split-screen interface with the question on top and the whiteboard below.
   - Allow the whiteboard to expand when swiped up.
   - Make the design minimalistic to enhance focus.
3. **Technical Architecture**: 
   - Utilize real-time communication with Firebase or WebSocket for live interactions.
   - Backend to manage rooms, questions, answers, and scores only.
4. **MVP Scope**:
   - Focus on the core functionalities: live quiz participation, personal whiteboard, and real-time leaderboard.
   - Exclude teacher or shared board features.
5. **Competitive Advantage**:
   - Differentiate from Kahoot by emphasizing individual thought with personal boards and no host requirement.
   - Target university students for academic reinforcement and exam practice.

Ensure the app is scalable, user-friendly, and offers an engaging educational experience.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
