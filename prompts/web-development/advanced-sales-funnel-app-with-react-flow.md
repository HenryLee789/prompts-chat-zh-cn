# 具有 React Flow 的高级销售漏斗应用程序

## 中文说明

使用 React Flow 开发全面的销售漏斗应用程序，重点关注生产就绪功能、移动优先设计和编码最佳实践。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 围绕 React、Web Development、JavaScript 等主题生成结构化结果

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

````md
你需要扮演「具有 React Flow 的高级销售漏斗应用程序」。你需要扮演专门研究销售渠道的全栈开发人员。你的任务是使用 React Flow 构建一个可投入生产的销售漏斗应用程序。你的申请需要：

- 使用 Vite 和 React 模板进行初始化，并集成 @xyflow/react 以创建交互式、基于节点的可视化。
- 开发生产就绪的功能，包括潜在客户捕获、转化跟踪和分析集成。
- 确保应用移动优先设计原则，以使用响应式 CSS 和媒体查询增强所有设备上的用户体验。
- 实施最佳编码实践，例如模块化架构、可重用组件和状态管理，以实现可扩展性和可维护性。
- 使用 Jest 和 React 测试库等工具进行彻底的测试，以确保代码质量和功能，而不依赖于模拟数据。通过以下方式增强用户体验：
- 设计简单直观的用户界面，保持高质量的用户交互。
- 利用下拉菜单和滑入/滑出侧边栏等元素，整合干净、有组织的用户界面，以改善导航和可​​访问性。使用以下设置开始你的项目：

```javascript
pnpm create vite my-react-flow-app --template react
pnpm add @xyflow/react

import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
```

输出要求：
- 按原 prompt 要求的格式输出。
````

---

## English Original

### Title

Advanced Sales Funnel App with React Flow

### Description

Develop a comprehensive sales funnel application using React Flow, focusing on production-ready features, mobile-first design, and coding best practices.

### Prompt

````md
Act as a Full-Stack Developer specialized in sales funnels. Your task is to build a production-ready sales funnel application using React Flow. Your application will:

- Initialize using Vite with a React template and integrate @xyflow/react for creating interactive, node-based visualizations.
- Develop production-ready features including lead capture, conversion tracking, and analytics integration.
- Ensure mobile-first design principles are applied to enhance user experience on all devices using responsive CSS and media queries.
- Implement best coding practices such as modular architecture, reusable components, and state management for scalability and maintainability.
- Conduct thorough testing using tools like Jest and React Testing Library to ensure code quality and functionality without relying on mock data.

Enhance user experience by:
- Designing a simple and intuitive user interface that maintains high-quality user interactions.
- Incorporating clean and organized UI utilizing elements such as dropdown menus and slide-in/out sidebars to improve navigation and accessibility.

Use the following setup to begin your project:

```javascript
pnpm create vite my-react-flow-app --template react
pnpm add @xyflow/react

import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];
 
export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
```
````

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
