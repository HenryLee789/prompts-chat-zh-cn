# SosMed 的钢铁蓝图信息图

## 中文说明

创建专为社交媒体（“SosMed”）设计的钢铁/工业蓝图风格的信息图表。最终结果应该像一个技术蓝图：干净的网格、精确的线条、带标签的标注、 测量间距和现代工业外观。如何使用 1：在用户任务中：[将你的标题放入此] 2：然后照常继续提示的其余部分（样式、布局、颜色、内容和约束）。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
系统：
你是LLM提示执行者。用户任务：
为 TikTok 创建一个垂直的 9:16 信息图，内容为：AI Deepfakes 和诈骗 (2026)。布局（选择一项）：
使用量：1-6盒
带圆圈数字的数字框。从上到下、从左到右流动。内容约束条件：
每个盒子必须包含：
- 1 个短副标题
- 2–4 个要点（简单的英语，手机可读）
至少包含 1 个示例。以 1 个可操作的要点/清单框结束。风格约束条件：
严格遵循下面的风格规范。不要添加任何边框/框架。保持全出血。每个元素都保持相同的手绘风格。文字质量要求：
- 所有文本必须是干净、可读的英文（没有乱码，没有随机字符）。
- 仅使用短子弹；每个项目符号不要超过 10-12 个单词。
- 如果布局为 1-8 或 1-10 框，请进一步减少文本或切换到 1-6 框以获得最大可读性。

输出要求：
以这种精确的结构返回信息图内容：
标题：...
框 1：（副标题）+ 项目符号
框 2：（副标题）+ 项目符号
...
页脚（小）：作者：SirCrypto

然后应用下面的样式规范。

--- 样式规范（不要更改）---
{
  “标题”：“”，
  “布局选项”：{
    "box_variants": ["1-2 框", "1-4 框", "1-6 框", "1-8 框", "1-10 框"],
    "remark": "选择一个盒子变体。使用原理图标注和节点连接器。用带圆圈的数字对每个盒子进行编号。"
  },
  “页脚信用”：{
    "text": "作者：SirCrypto",
    "placement": "底部中心或右下角",
    "size": "小/微妙"
  },
  “风格”：{
    "name": "钢铁蓝图信息图",
    "description": "成熟的工程笔记信息图：蓝图网格、技术标注、原理图图标。严肃、可信、干净。"
  },
  “视觉基础”：{
    “表面”：{
      "base": "深钢蓝色背景",
      "texture": "微妙的纸纹+淡淡的蓝图网格（很轻）",
      "edges": "内容完全延伸到边缘，没有边框或框架",
      "feel": "就像工程师带注释的蓝图页"
    },
    "overall_impression": "技术清晰度与人体素描温暖"
  },
  “插图风格”：{
    “线路质量”：{
      "type": "手绘技术水墨素描美学",
      "weight": "中等笔画用于框和图标，细笔画用于网格和标注",
      "character": "绘图笔的真实感——轻微的摆动，一致的意图",
      "edges": "柔软，不是矢量脆",
      "fills": "最小化孵化；避免严重阴影"
    },
    “图标治疗”：{
      "style": "最小的技术图标",
      "complexity": "基本形式——小尺寸可读",
      "个性": "专业、严谨、不贪玩",
      "consistency": "始终采用相同的手绘风格"
    },
    “人类人物”：{
      "style": "可选，仅限最小轮廓",
      "faces": "没有详细的面部特征"
    },
    “对象和场景”：{
      "approach": "原理图对象：芯片、摄像头、波形、锁、网络节点",
      "detail_level": "足以识别；避免混乱",
      "perspective": "平面技术/简单等距"
    }
  },
  “颜色哲学”：{
    “调色板字符”：{
      "mood": "专业、值得信赖、技术",
      “饱和度”：“低到中”，
      "harmony": "带有克制口音的单色蓝色"
    },
    “primary_palette”：{
      "blues": "钢蓝色、海军蓝",
      "cyans": "关键术语和连接器的软青色突出显示",
      "ambers": "警告和风险标签的静音琥珀色"
    },
    “支持调色板”：{
      "neutrals": "冷暖平衡灰色",
      "blacks": "柔和的木炭线条，永不纯粹#000000",
      "whites": "灰白色墨水以提高可读性"
    },
    “颜色应用”：{
      "fills": "剖面框后面的浅色半透明块",
      "backgrounds": "蓝图网格仍然微弱且次要",
      "accents": "青色下划线和琥珀色警告标签，限制使用",
      "technique": "保持克制，‘工程笔记’的感觉”
    }
  },
  “版式集成”：{
    “标题样式”：{
      "appearance": "粗体技术手写标题",
      “weight”：“沉重、结构化”，
      "case": "首选大写",
      “颜色”：“灰白色墨水”
    },
    “副标题”：{
      "appearance": "紧凑的技术标签",
      "decoration": "括号、标注标签、细下划线"
    },
    “正文文本”：{
      "appearance": "干净的压缩无衬线字体",
      "spacing": "电话可读；没有狭窄的线条"
    },
    “注释”：{
      "style": "带有箭头和注释气泡的工程标注",
      "目的": "定义术语并显示原因→结果"
    }
  },
  “布局架构”：{
    “画布”：{
      "framing": "无边框，无框架",

"boundary": "全出血垂直 9:16",
      "containment": "信息图就是图像"
    },
    “结构”：{
      "type": "蓝图网格对齐+模块化框",
      "sections": "清除编号框（圆圈数字）",
      "flow": "从上到下的管道，行内从左到右",
      "breathing_room": "清洁排水沟；避免密集的集群"
    },
    “部分治疗”：{
      "borders": "薄技术圆角矩形或尖角框",
      "separation": "清晰的间距和标注连接器",
      "numbering": "小圆圈数字蓝图样式"
    },
    “视觉流设备”：{
      "arrows": "直标注箭头",
      "connectors": "虚线电路路径和节点线",
      "progression": "输入→过程→输出"
    }
  },
  “信息层次结构”：{
    “级别”：{
      "primary": "大标题+中心示意图锚图",
      "secondary": "副标题+图标+标签",
      "tertiary": "项目符号+简短注释"
    },
    “强调技术”：{
      "color_highlights": "关键词后面有青色下划线",
      "boxing": "标签框中的定义",
      "icons": "风险三角警告，行动复选标记"
    }
  },
  “装饰元素”：{
    “徽章和标签”：{
      "style": "蓝图标签，类似测量的标签",
      "use": "定义、风险、步骤"
    },
    “结缔组织”：{
      "arrows": "起草箭头",
      "lines": "网格线、虚线路径",
      "brackets": "花括号将相关点分组"
    },
    “环境详细信息”：{
      "small_icons": "微小的节点，校准标记（非常小）",
      "texture": "蓝图网格淡淡而微妙"
    }
  },
  “真实性标记”：{
    “手工制作的质量”：{
      "line_variation": "自然厚度变化",
      "alignment": "稍微不完美的微对准",
      "overlap": "可接受少量重叠"
    }
  },
  “技术质量”：{
    "resolution": "电话和打印的高分辨率",
    "clarity": "文字可读，图表清晰",
    "balance": "视觉权重均匀分布",
    "completeness": "完成、干净、专业"
  },
  “内容指导”：{
    "explan": "像技术解释者一样写作。定义概念，展示一个简单的机制（它是如何工作的），突出常见的误解，然后给出一个实用的清单。将每个框保留为副标题，并添加 2-4 个项目符号，以方便手机阅读。",
    “写作规则”：[
      “每盒：1 个标签 + 2–4 个子弹”，
      “更喜欢原因→结果语言”，
      “至少包括一个‘如何发现它’或‘如何降低风险’部分”，
      “避免炒作；保持精确且可操作”
    ]
  },
  “避免”：[
    “任何框架、边框或边缘装饰”，
    “可爱或幼稚的角色”，
    “霓虹灯网络超载”，
    “布线/线路过于密集”，
    “难以阅读的小文字”，
    “无菌载体完美”
  ]
}
```

---

## English Original

### Title

Steel Blueprint Infographic For SosMed

### Description

Create a steel/industrial blueprint-style infographic designed for social media (“SosMed”).
The final result should feel like a technical blueprint: clean grid, precise lines, labeled callouts,
measured spacing, and a modern industrial look.

How to use
1: In the USER TASK: [ PUT YOU TITTLE INTO THIS ]
2: Then continue with the rest of the prompt as usual (style, layout, colors, content, and constraints).

### Prompt

```md
SYSTEM:
You are an LLM prompt executor.

USER TASK:
Create a vertical 9:16 infographic for TikTok about: AI Deepfakes & Scams (2026).

LAYOUT (choose ONE):
Use: 1-6 box
Number boxes with circled numbers. Flow top-to-bottom, left-to-right.

CONTENT RULES:
Each box must include:
- 1 short subheading
- 2–4 bullet points (plain English, phone-readable)
Include at least 1 example.
End with 1 actionable takeaway/checklist box.

STYLE RULES:
Follow the STYLE SPEC below exactly. Do not add any border/frame. Keep full-bleed. Keep the same hand-drawn style for every element.

TEXT QUALITY REQUIREMENTS:
- All text must be clean, readable English (no gibberish, no random characters).
- Use short bullets only; do not exceed 10–12 words per bullet.
- If layout is 1-8 or 1-10 box, reduce text even more or switch to 1-6 box for maximum readability.

OUTPUT REQUIREMENT:
Return the infographic content in this exact structure:
TITLE: ...
BOX 1: (Subheading) + bullets
BOX 2: (Subheading) + bullets
...
FOOTER (small): By SirCrypto

Then apply the style spec below.

--- STYLE SPEC (DO NOT CHANGE) ---
{
  "title": "",
  "layout_options": {
    "box_variants": ["1-2 box", "1-4 box", "1-6 box", "1-8 box", "1-10 box"],
    "remark": "Choose ONE box variant. Use schematic callouts and node connectors. Number each box with circled numbers."
  },
  "footer_credit": {
    "text": "By SirCrypto",
    "placement": "Bottom center or bottom right",
    "size": "Small/subtle"
  },
  "style": {
    "name": "Steel Blueprint Infographic",
    "description": "Mature engineering-notes infographic: blueprint grid, technical callouts, schematic icons. Serious, credible, and clean."
  },
  "visual_foundation": {
    "surface": {
      "base": "Deep steel blue background",
      "texture": "Subtle paper grain + faint blueprint grid (very light)",
      "edges": "Content extends fully to edges, no border or frame",
      "feel": "Like an engineer’s annotated blueprint page"
    },
    "overall_impression": "Technical clarity with human sketch warmth"
  },
  "illustration_style": {
    "line_quality": {
      "type": "Hand-drawn technical ink sketch aesthetic",
      "weight": "Medium strokes for boxes and icons, thin strokes for grid and callouts",
      "character": "Drafting-pen realism—slight wobble, consistent intent",
      "edges": "Soft, not vector-crisp",
      "fills": "Minimal hatching; avoid heavy shading"
    },
    "icon_treatment": {
      "style": "Minimal technical icons",
      "complexity": "Essential forms—readable at small sizes",
      "personality": "Professional, precise, not playful",
      "consistency": "Same hand-drawn style throughout"
    },
    "human_figures": {
      "style": "Optional, minimal silhouette only",
      "faces": "No detailed facial features"
    },
    "objects_and_scenes": {
      "approach": "Schematic objects: chip, camera, waveform, lock, network nodes",
      "detail_level": "Enough to identify; avoid clutter",
      "perspective": "Flat technical / simple isometric"
    }
  },
  "color_philosophy": {
    "palette_character": {
      "mood": "Professional, trustworthy, technical",
      "saturation": "Low-to-medium",
      "harmony": "Monochrome blues with restrained accents"
    },
    "primary_palette": {
      "blues": "Steel blue, navy",
      "cyans": "Soft cyan highlights for key terms and connectors",
      "ambers": "Muted amber for warnings and risk tags"
    },
    "supporting_palette": {
      "neutrals": "Cool-warm balanced grays",
      "blacks": "Soft charcoal lines, never pure #000000",
      "whites": "Off-white ink for readability"
    },
    "color_application": {
      "fills": "Light translucent blocks behind section boxes",
      "backgrounds": "Blueprint grid remains faint and secondary",
      "accents": "Cyan underlines and amber warning tags, limited use",
      "technique": "Keep restrained, ‘engineering notes’ feel"
    }
  },
  "typography_integration": {
    "headline_style": {
      "appearance": "Bold technical hand-lettered title",
      "weight": "Heavy, structured",
      "case": "Uppercase preferred",
      "color": "Off-white ink"
    },
    "subheadings": {
      "appearance": "Compact technical labels",
      "decoration": "Brackets, callout tags, thin underlines"
    },
    "body_text": {
      "appearance": "Clean condensed sans-serif",
      "spacing": "Phone-readable; no cramped lines"
    },
    "annotations": {
      "style": "Engineering callouts with arrows and note bubbles",
      "purpose": "Define terms and show cause→effect"
    }
  },
  "layout_architecture": {
    "canvas": {
      "framing": "NO BORDER, NO FRAME",
      "boundary": "Full-bleed vertical 9:16",
      "containment": "The infographic IS the image"
    },
    "structure": {
      "type": "Blueprint grid alignment + modular boxes",
      "sections": "Clear numbered boxes (circled numbers)",
      "flow": "Top-to-bottom pipeline, left-to-right within rows",
      "breathing_room": "Clean gutters; avoid dense clusters"
    },
    "section_treatment": {
      "borders": "Thin technical rounded rectangles or sharp-corner boxes",
      "separation": "Clear spacing and callout connectors",
      "numbering": "Small circled numbers blueprint style"
    },
    "visual_flow_devices": {
      "arrows": "Straight callout arrows",
      "connectors": "Dotted circuit paths and node lines",
      "progression": "Input → Process → Output"
    }
  },
  "information_hierarchy": {
    "levels": {
      "primary": "Large title + central schematic anchor illustration",
      "secondary": "Subheads + icons + tag labels",
      "tertiary": "Bullets + short annotations"
    },
    "emphasis_techniques": {
      "color_highlights": "Cyan underline behind key words",
      "boxing": "Definitions in tag boxes",
      "icons": "Warning triangle for risks, checkmarks for actions"
    }
  },
  "decorative_elements": {
    "badges_and_labels": {
      "style": "Blueprint tags, measurement-like labels",
      "use": "Definitions, risks, steps"
    },
    "connective_tissue": {
      "arrows": "Drafting arrows",
      "lines": "Grid lines, dotted paths",
      "brackets": "Curly braces grouping related points"
    },
    "ambient_details": {
      "small_icons": "Tiny nodes, calibration marks (very minimal)",
      "texture": "Blueprint grid faint and subtle"
    }
  },
  "authenticity_markers": {
    "hand_made_quality": {
      "line_variation": "Natural thickness changes",
      "alignment": "Slightly imperfect micro-alignment",
      "overlap": "Minor overlaps acceptable"
    }
  },
  "technical_quality": {
    "resolution": "High-resolution for phone and print",
    "clarity": "Text readable, diagrams clear",
    "balance": "Even distribution of visual weight",
    "completeness": "Finished, clean, professional"
  },
  "content_guidance": {
    "explanation": "Write like a technical explainer. Define the concept, show a simple mechanism (how it works), highlight common misconceptions, then give a practical checklist. Keep each box to a subheading plus 2–4 bullets for phone readability.",
    "writing_rules": [
      "Each box: 1 label + 2–4 bullets",
      "Prefer cause→effect language",
      "Include at least one 'How to spot it' or 'How to reduce risk' section",
      "Avoid hype; keep it precise and actionable"
    ]
  },
  "avoid": [
    "ANY frame, border, or edge decoration",
    "Cute or childish characters",
    "Neon cyber overload",
    "Overly dense wiring/lines",
    "Tiny unreadable text",
    "Sterile vector perfection"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
