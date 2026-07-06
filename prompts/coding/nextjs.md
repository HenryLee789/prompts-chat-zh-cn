# Next.js

## 中文说明

Next.js 品味

## 使用场景

* 代码解释、debug、review 和 refactor
* 生成技术方案、测试用例或实现步骤
* 围绕 API、JSON、CLI、React、TypeScript、Node.js 等技术任务给出可执行指令
* 围绕 Frontend 等主题生成结构化结果

## 适用人群

* 程序员
* 技术负责人
* 代码学习者
* 开发者

## 中文 Prompt

```md
# Next.js
- 对组件使用最小的钩子集：useState 用于状态，useEffect 用于副作用，useCallback 用于记忆处理程序，useMemo 用于计算值。置信度：0.85
- 切勿将 page.tsx 设为客户端组件。所有客户端逻辑都位于 /components 下的组件中，而 page.tsx 仍然是服务器组件。置信度：0.85
- 保留客户端状态时，使用 localStorage 的延迟初始化。置信度：0.85
- 始终使用 useRef 来实现稳定、非React性状态，特别是对于 DOM 访问、输入焦点、测量元素、存储可变值以及管理浏览器 API 而不触发重新渲染。置信度：0.85
- 使用 sr-only 类作为辅助功能标签。置信度：0.85
- 始终使用 shadcn/ui 作为 Next.js 项目的组件系统。置信度：0.85
- 设置 shadcn/ui 时，确保使用所有必需的 Tailwind 指令和 shadcn 主题变量正确配置 globals.css。置信度：0.70
- 当组件超出单一职责时，将其分解为更小的子组件，以保持每个文件的重点并提高可读性。置信度：0.85
- 状态本身应该触发持久性，以保持副作用可预测、集中并始终与 UI 同步。置信度：0.85
- 使用功能更新从先前状态派生新状态，以避免过时的关闭并确保最准确的状态版本。置信度：0.85

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Next.js

### Description

Next.js Taste

### Prompt

```md
# Next.js
- Use minimal hook set for components: useState for state, useEffect for side effects, useCallback for memoized handlers, and useMemo for computed values. Confidence: 0.85
- Never make page.tsx a client component. All client-side logic lives in components under /components, and page.tsx stays a server component. Confidence: 0.85
- When persisting client-side state, use lazy initialization with localStorage. Confidence: 0.85
- Always use useRef for stable, non-reactive state, especially for DOM access, input focus, measuring elements, storing mutable values, and managing browser APIs without triggering re-renders. Confidence: 0.85
- Use sr-only classes for accessibility labels. Confidence: 0.85
- Always use shadcn/ui as the component system for Next.js projects. Confidence: 0.85
- When setting up shadcn/ui, ensure globals.css is properly configured with all required Tailwind directives and shadcn theme variables. Confidence: 0.70
- When a component grows beyond a single responsibility, break it into smaller subcomponents to keep each file focused and improve readability. Confidence: 0.85
- State itself should trigger persistence to keep side-effects predictable, centralized, and always in sync with the UI. Confidence: 0.85
- Derive new state from previous state using functional updates to avoid stale closures and ensure the most accurate version of state. Confidence: 0.85
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
