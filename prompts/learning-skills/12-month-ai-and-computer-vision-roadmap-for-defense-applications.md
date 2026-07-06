# 国防应用的 12 个月AI和计算机视觉路线图

## 中文说明

利用教育背景和顶点项目，为海军陆战队退伍军人制定详细的 12 个月路线图，专门研究AI驱动的计算机视觉系统用于国防。

## 使用场景

* 设计学习路径、练习方式和复盘方法
* 把复杂主题拆解成可学习步骤
* 生成个性化学习策略和反馈
* 围绕 AI Tools、Advanced、Computer Vision 等主题生成结构化结果

## 适用人群

* 学习者
* 教师
* 培训人员

## 中文 Prompt

```md
{
  "role": "AI和计算机视觉专家教练",
  “上下文”：{
    "educational_background": "2026 年 12 月毕业，获得计算机工程学士学位，辅修机器人技术和普通话。",
    "programming_skills": "基础 Python、C++ 和 Rust。",
    "current_course_progress": "目标检测模块 #46 的 OpenCV 课程已完成一半。",
    "math_foundation": "来自工程课程的强大数学基础。"
  },
  “活动项目”：[
    {
      “名称”：“案例集”，
      “description”：“使用网络摄像头 + Tobii 眼球追踪器进行注视估计研究，以进行情境感知预测。”
    },
    {
      “名称”：“SENITEL”，
      “描述”：“Capstone 项目将视线估计与 ROS2 集成，以控制 UGV/四轴飞行器上的万向节安装摄像头，具有基于变压器的操作员意图预测和 AR 威胁覆盖，部署在边缘硬件 (Raspberry Pi 4) 上。”
    }
  ],
  “技术堆栈”：{
    "languages": "Python（中级）、Rust（基础）、C++（基础）",
    “硬件”：“ESP32、RP2040、树莓派”，
    "current_skills": "OpenCV（学习）、PyTorch（熟悉）、基本物体跟踪",
    "target_skills": "边缘AI优化、ROS2、AR 开发、变压器架构"
  },
  “职业目标”：{
    “target_companies”：[“Anduril”，“Palantir”，“SpaceX”，“诺斯罗普·格鲁曼”]，
    "specialization": "计算机视觉用于威胁检测并最小化 1 类bug。",
    “focus_areas”：“用于军事机器人、上下文感知视觉系统、实时自主侦察的边缘AI。”
  },
  “路线图要求”：{
    "milestones": "2026 年 1 月至 2026 年 12 月的每月里程碑细分。",
    “研究论文”：[
      “注视估计和眼球追踪”，
      “用于视觉和序列预测的 Transformer 架构”，
      “边缘AI和模型优化技术”，
      “军事环境中的物体检测和威胁分类”，
      “情境感知AI系统”，
      “ROS2与计算机视觉的集成”，
      “AR叠加和人机协作”
    ],
    “课程”：[
      “高级 PyTorch 和深度学习”，
      “用于机器人应用的 ROS2”，
      “变压器架构”，
      “边缘部署（TensorRT、ONNX、模型量化）”，
      《AR开发基础》，
      “军事相关简历申请”
    ],
    “项目”：[
      “补充 CASEset 和 SENITEL 开发”，
      “构建作品集”，
      “展示边缘部署能力”，
      “表现出对国防关键要求的理解”
    ],
    “技能进度”：{
      "Python": "高级 PyTorch、OpenCV 掌握、ROS2 Python API",
      “Rust”：“边缘部署，实时系统编程”，
      "C++": "ROS2 C++节点，性能优化",
      “硬件”：“Edge TPU、Jetson Nano/Orin 集成、传感器融合”
    },
    “关键能力”：[
      “威胁检测中的误报最小化”，
      “资源受限硬件上的实时推理”，
      “上下文感知模型架构”，
      《运营商-AI组队与人为因素》，
      “多传感器融合”，
      “保护隐私的设备上AI”
    ],
    “工业_准备”：{
      "GitHub": "国防承包商审查的投资组合优化",
      "Blog": "展示专业知识的技术博客文章",
      “开源”：“与国防简历相关的贡献”，
      "Security_clearance": "准备注意事项",
      “网络”：“国防科技领域的战略”
    },
    “特殊考虑因素”：[

“由于训练和泰拳，学习时间有限”，
      “实践优先于理论”，
      “注重战场应用技巧”，
      “强调边缘部署”，
      “在战争中纳入AI的道德考虑”，
      “在项目中利用美国海军陆战队的背景”
    ]
  },
  “输出格式首选项”：{
    "weekly_time_commitments": "明确每周每项活动的时间承诺",
    "precisions": "为每个资源进行标记",
    "priority_levels": "关键/重要/有益",
    "checkpoints": "每月评估进度",
    "connections": "学习路径之间",
    "expected_outcomes": "对于每个里程碑"
  }
}
```

---

## English Original

### Title

12-Month AI and Computer Vision Roadmap for Defense Applications

### Description

Create a detailed 12-month roadmap for a Marine Corps veteran to specialize in AI-driven computer vision systems for defense, leveraging educational background and capstone projects.

### Prompt

```md
{
  "role": "AI and Computer Vision Specialist Coach",
  "context": {
    "educational_background": "Graduating December 2026 with B.S. in Computer Engineering, minor in Robotics and Mandarin Chinese.",
    "programming_skills": "Basic Python, C++, and Rust.",
    "current_course_progress": "Halfway through OpenCV course at object detection module #46.",
    "math_foundation": "Strong mathematical foundation from engineering curriculum."
  },
  "active_projects": [
    {
      "name": "CASEset",
      "description": "Gaze estimation research using webcam + Tobii eye-tracker for context-aware predictions."
    },
    {
      "name": "SENITEL",
      "description": "Capstone project integrating gaze estimation with ROS2 to control gimbal-mounted cameras on UGVs/quadcopters, featuring transformer-based operator intent prediction and AR threat overlays, deployed on edge hardware (Raspberry Pi 4)."
    }
  ],
  "technical_stack": {
    "languages": "Python (intermediate), Rust (basic), C++ (basic)",
    "hardware": "ESP32, RP2040, Raspberry Pi",
    "current_skills": "OpenCV (learning), PyTorch (familiar), basic object tracking",
    "target_skills": "Edge AI optimization, ROS2, AR development, transformer architectures"
  },
  "career_objectives": {
    "target_companies": ["Anduril", "Palantir", "SpaceX", "Northrop Grumman"],
    "specialization": "Computer vision for threat detection with Type 1 error minimization.",
    "focus_areas": "Edge AI for military robotics, context-aware vision systems, real-time autonomous reconnaissance."
  },
  "roadmap_requirements": {
    "milestones": "Monthly milestone breakdown for January 2026 - December 2026.",
    "research_papers": [
      "Gaze estimation and eye-tracking",
      "Transformer architectures for vision and sequence prediction",
      "Edge AI and model optimization techniques",
      "Object detection and threat classification in military contexts",
      "Context-aware AI systems",
      "ROS2 integration with computer vision",
      "AR overlays and human-machine teaming"
    ],
    "courses": [
      "Advanced PyTorch and deep learning",
      "ROS2 for robotics applications",
      "Transformer architectures",
      "Edge deployment (TensorRT, ONNX, model quantization)",
      "AR development basics",
      "Military-relevant CV applications"
    ],
    "projects": [
      "Complement CASEset and SENITEL development",
      "Build portfolio pieces",
      "Demonstrate edge deployment capabilities",
      "Show understanding of defense-critical requirements"
    ],
    "skills_progression": {
      "Python": "Advanced PyTorch, OpenCV mastery, ROS2 Python API",
      "Rust": "Edge deployment, real-time systems programming",
      "C++": "ROS2 C++ nodes, performance optimization",
      "Hardware": "Edge TPU, Jetson Nano/Orin integration, sensor fusion"
    },
    "key_competencies": [
      "False positive minimization in threat detection",
      "Real-time inference on resource-constrained hardware",
      "Context-aware model architectures",
      "Operator-AI teaming and human factors",
      "Multi-sensor fusion",
      "Privacy-preserving on-device AI"
    ],
    "industry_preparation": {
      "GitHub": "Portfolio optimization for defense contractor review",
      "Blog": "Technical blog posts demonstrating expertise",
      "Open-source": "Contributions relevant to defense CV",
      "Security_clearance": "Preparation considerations",
      "Networking": "Strategies for defense tech sector"
    },
    "special_considerations": [
      "Limited study time due to training and Muay Thai",
      "Prioritize practical implementation over theory",
      "Focus on battlefield application skills",
      "Emphasize edge deployment",
      "Include ethics considerations for AI in warfare",
      "Leverage USMC background in projects"
    ]
  },
  "output_format_preferences": {
    "weekly_time_commitments": "Clear weekly time commitments for each activity",
    "prerequisites": "Marked for each resource",
    "priority_levels": "Critical/important/beneficial",
    "checkpoints": "Assess progress monthly",
    "connections": "Between learning paths",
    "expected_outcomes": "For each milestone"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
