# 白板图

## 中文说明

创建优雅的手绘图表。

## 使用场景

* 拆解研究问题、证据和结论
* 生成调研框架、分析维度和报告结构
* 围绕复杂主题输出可追溯的判断
* 围绕 Accessibility、Business Strategy、Business 等主题生成结构化结果

## 适用人群

* 研究人员
* 分析师
* 产品经理

## 中文 Prompt

```md
通过制造人们想要的东西来建立AI初创公司的步骤：

{
  “风格”：{
    "name": "白板草图",
    “description”：“将任何概念转化为优雅的手绘图表。干净、简约、建筑感——就像聪明人在白板上快速画出的草图。”
  },
  “核心哲学”：{
    "essence": "优雅简约——尽可能轻的触感，但仍能清晰地传达信息",
    "mindset": "建筑师或设计师用细笔解释一个想法",
    “目标”：“通过克制和细化实现清晰”
  },
  “视觉基础”：{
    “画布结构”：{
      "outer_background": "#FFFFFF",
      “卡”：{
        "size": "画布的 95-98% — 最小白边距",
        “颜色”：“#FEFEFE”，
        "corner_radius": "12-16px 微妙的圆度",
        “影子”：“无”，
        “边界”：“无”
      }
    },
    “整体美学”：{
      "feel": "轻盈、通风、知性、精致",
      "weight": "精致——一切都感觉轻薄而优雅",
      "space": "到处都有宽敞的空白"
    }
  },
  “线路工作”：{
    "ritic_principle": "薄而精致——不粗、不重、不粗",
    “质量”：{
      "weight": "细细的线条——像 0.5mm 的钢笔或细尖记号笔一样",
      "character": "建筑风格，精确但手绘",
      “consistency”：“整个厚度均匀”
    },
    “笔画风格”：{
      "lines": "细长、干净、略显不完美",
      "corners": "尖锐或略圆，绝不笨重",
      "feel": "画得很快但很熟练"
    }
  },
  “颜色调色板”：{
    “精确颜色”：{
      “卡片背景”：{
        “十六进制”：“#FEFEFE”，
        "description": "几乎白色、平坦、中性"
      },
      “主要文本”：{
        “十六进制”：“#020202”，
        "description": "文本接近黑色——清晰易读"
      },
      “线灰色”：{
        “十六进制”：“#4A4B4B”，
        "description": "所有绘制的线条、方框、形状均为深灰色——不是纯黑色"
      },
      “accent_blue”：{
        “十六进制”：“#2C68B7”，
        "description": "透明中蓝色 — 用于箭头、连接器、支架、一些标签"
      },
      “红色口音”：{
        “十六进制”：“#B34952”，
        "description": "暖珊瑚红——用于类别标签、强调文本"
      },
      “填充蓝色”：{
        “十六进制”：“#2C68B7”，
        "description": "小实心正方形/形状相同的蓝色"
      },
      “填充灰色”：{
        “十六进制”：“#4A4B4B”，
        "description": "填充网格单元为深灰色"
      }
    },
    “用法”：{
      "text": "主要文本为 #020202 黑色，类别为 #E54B54 红色",
      "lines_and_shapes": "所有轮廓均为#4A4B4B 灰色，而非黑色",
      "arrows_and_flow": "#2C68B7 蓝色——轻薄优雅",
      "fills": "蓝色或灰色的小实心方块——绝不是大的实心区域"
    }
  },
  “排版”：{
    “风格”：{
      "type": "优雅的斜体手写体",
      "weight": "轻到中等——不要粗体或重",
      "slant": "自然斜体倾斜",
      “character”：“流畅、聪明，就像建筑师的字体”
    },
    “颜色”：{
      "titles": "#020202 黑色、斜体",
      "category_labels": "#E54B54 红色",
      "annotations": "#2C68B7 蓝色或#020202 黑色"
    }
  },
  “图表元素”：{
    “盒子和矩形”：{
      "lines": "THIN #4A4B4B 灰色轮廓 — 最大重量 1-2px",
      "fill": "空/透明——切勿实心填充的大盒子",
      "corners": "略圆或尖，手绘",
      "style": "轻便、通风，而不是沉重的容器"
    },
    “网格和矩阵”：{
      "strike": "细灰色线",
      "cells": "小—可能包含小实心方块或数字",

"fills": "小方块填充蓝色或灰色以显示数据"
    },
    “箭头”：{
      "ritic": "薄、优雅、简单——而不是厚重的 PowerPoint 箭头",
      "lines": "细 #2C68B7 蓝线 — 与其他线的粗细相同",
      "heads": "小、简单、最小——只有两条短的有角度的线形成一个点",
      "style": "像用细笔手绘，而不是粗记号笔",
      “类型”：[
        “简单的细直箭头”，
        “流动的细弯曲箭头”，
        “从不：块箭头、3D 箭头、渐变箭头、粗箭头”
      ]
    },
    “括号”：{
      "style": "细手绘蓝色花括号",
      "weight": "与其他所有内容相同的细线粗细"
    },
    “点和标记”：{
      "style": "小实心圆圈或正方形",
      "size": "微小——与细线美学成比例",
      "colors": "蓝色或红色用于强调"
    }
  },
  “视觉语言”：{
    “形状词汇”：{
      "矩形": "细轮廓框 - 垂直或水平方向",
      "grids": "带有微小填充单元的小矩阵",
      "lists": "框中的简单虚线或项目符号项目",
      "flow": "从左到右连接元素的细箭头"
    },
    “组合模式”：{
      "典型_布局": "2-4 个主要元素水平排列，中间有箭头",
      "spacing": "元素之间有足够的间隙",
      "alignment": "粗略但有意的对齐",
      "hierarchy": "标题位于框上方，标签位于下方或旁边"
    },
    “比例”：{
      "line_weight_to_space": "非常开放的空间中的非常细的线条",
      "text_to_diagram": "文本是次要的，图表占主导地位",
      "fill_to_empty": "大部分是空的，填充是小口音"
    }
  },
  “优雅原则”：{
    "lightness": "一切都应该感觉像是可以飘走",
    "restraint": "用最少的量来传达想法",
    "refinement": "线条质量高于元素数量",
    "intelligence": "看来聪明人画得很快",
    "breathing": "空白与标记一样重要"
  },
  “避免”：[
    “粗、重、粗的线条”，
    “粗大的 PowerPoint 风格箭头”，
    “块箭头或 3D 箭头”，
    “大的固体填充区域”，
    “密集、混乱的布局”，
    “大胆或沉重的排版”，
    “放置阴影或渐变”，
    “企业剪贴画美学”，
    “圆形气泡形状”，
    “任何感觉‘重’的线宽”，
    “线条纯黑色（#000000）——使用#4A4B4B灰色”，
    “装饰元素”，
    “图表过于复杂”
  ]
}
```

---

## English Original

### Title

Whiteboard Diagrams

### Description

Create elegant hand drawn diagrams.

### Prompt

```md
Steps to build an AI startup by making something people want:

{
  "style": {
    "name": "Whiteboard Sketch Diagram",
    "description": "Transform any concept into an elegant hand-drawn diagram. Clean, minimal, architectural in feel—like a smart person's quick sketch on a whiteboard."
  },
  "core_philosophy": {
    "essence": "Elegant simplicity—the lightest possible touch that still communicates clearly",
    "mindset": "An architect or designer explaining an idea with a fine pen",
    "goal": "Clarity through restraint and refinement"
  },
  "visual_foundation": {
    "canvas_structure": {
      "outer_background": "#FFFFFF",
      "card": {
        "size": "95-98% of canvas—minimal white margin",
        "color": "#FEFEFE",
        "corner_radius": "12-16px subtle roundness",
        "shadow": "NONE",
        "border": "NONE"
      }
    },
    "overall_aesthetic": {
      "feel": "Light, airy, intellectual, refined",
      "weight": "Delicate—everything feels thin and elegant",
      "space": "Generous white space everywhere"
    }
  },
  "line_work": {
    "critical_principle": "THIN AND DELICATE—not bold, not heavy, not chunky",
    "quality": {
      "weight": "Fine, thin lines—like a 0.5mm pen or fine-tip marker",
      "character": "Architectural, precise but hand-drawn",
      "consistency": "Uniform thin weight throughout"
    },
    "stroke_style": {
      "lines": "Thin, clean, slightly imperfect",
      "corners": "Sharp or slightly rounded, never bulky",
      "feel": "Drawn quickly but skillfully"
    }
  },
  "color_palette": {
    "exact_colors": {
      "card_background": {
        "hex": "#FEFEFE",
        "description": "Almost white, flat, neutral"
      },
      "primary_text": {
        "hex": "#020202",
        "description": "Near-black for text—crisp and readable"
      },
      "line_gray": {
        "hex": "#4A4B4B",
        "description": "Dark gray for all drawn lines, boxes, shapes—NOT pure black"
      },
      "accent_blue": {
        "hex": "#2C68B7",
        "description": "Clear medium blue—for arrows, connectors, brackets, some labels"
      },
      "accent_red": {
        "hex": "#B34952",
        "description": "Warm coral-red—for category labels, emphasis text"
      },
      "fill_blue": {
        "hex": "#2C68B7",
        "description": "Same blue for small filled squares/shapes"
      },
      "fill_gray": {
        "hex": "#4A4B4B",
        "description": "Dark gray for filled grid cells"
      }
    },
    "usage": {
      "text": "Primary text in #020202 black, categories in #E54B54 red",
      "lines_and_shapes": "All outlines in #4A4B4B gray—NOT black",
      "arrows_and_flow": "#2C68B7 blue—thin and elegant",
      "fills": "Small filled squares in blue or gray—never large solid areas"
    }
  },
  "typography": {
    "style": {
      "type": "Elegant italic handwriting",
      "weight": "Light to medium—never bold or heavy",
      "slant": "Natural italic lean",
      "character": "Fluid, intelligent, like architect's lettering"
    },
    "colors": {
      "titles": "#020202 black, italic",
      "category_labels": "#E54B54 red",
      "annotations": "#2C68B7 blue or #020202 black"
    }
  },
  "diagram_elements": {
    "boxes_and_rectangles": {
      "stroke": "THIN #4A4B4B gray outline—1-2px weight max",
      "fill": "Empty/transparent—never solid filled large boxes",
      "corners": "Slightly rounded or sharp, hand-drawn",
      "style": "Light, airy, not heavy containers"
    },
    "grids_and_matrices": {
      "stroke": "Thin gray lines",
      "cells": "Small—may contain small filled squares or numbers",
      "fills": "Small squares filled blue or gray to show data"
    },
    "arrows": {
      "critical": "THIN, ELEGANT, SIMPLE—not chunky PowerPoint arrows",
      "stroke": "Thin #2C68B7 blue line—same weight as other lines",
      "heads": "Small, simple, minimal—just two short angled lines forming a point",
      "style": "Like hand-drawn with a fine pen, not a thick marker",
      "types": [
        "Simple thin straight arrows",
        "Thin curved arrows for flow",
        "Never: block arrows, 3D arrows, gradient arrows, thick arrows"
      ]
    },
    "brackets": {
      "style": "Thin hand-drawn curly braces in blue",
      "weight": "Same thin line weight as everything else"
    },
    "dots_and_markers": {
      "style": "Small filled circles or squares",
      "size": "Tiny—proportional to the thin line aesthetic",
      "colors": "Blue or red for emphasis"
    }
  },
  "visual_language": {
    "shapes_vocabulary": {
      "rectangles": "Thin outlined boxes—vertical or horizontal orientation",
      "grids": "Small matrices with tiny filled cells",
      "lists": "Simple dashed or bulleted items inside boxes",
      "flow": "Thin arrows connecting elements left-to-right"
    },
    "composition_patterns": {
      "typical_layout": "2-4 main elements arranged horizontally with arrows between",
      "spacing": "Generous gaps between elements",
      "alignment": "Rough but intentional alignment",
      "hierarchy": "Titles above boxes, labels below or beside"
    },
    "proportions": {
      "line_weight_to_space": "Very thin lines in very open space",
      "text_to_diagram": "Text is secondary, diagram dominates",
      "fill_to_empty": "Mostly empty, fills are small accents"
    }
  },
  "elegance_principles": {
    "lightness": "Everything should feel like it could float away",
    "restraint": "Use the minimum to communicate the idea",
    "refinement": "Quality of line over quantity of elements",
    "intelligence": "Looks like a smart person drew it quickly",
    "breathing": "White space is as important as the marks"
  },
  "avoid": [
    "Thick, heavy, bold lines",
    "Chunky PowerPoint-style arrows",
    "Block arrows or 3D arrows",
    "Large solid filled areas",
    "Dense, cluttered layouts",
    "Bold or heavy typography",
    "Drop shadows or gradients",
    "Corporate clip-art aesthetic",
    "Rounded bubble shapes",
    "Any line weight that feels 'heavy'",
    "Pure black (#000000) for lines—use #4A4B4B gray",
    "Decorative elements",
    "Overly complex diagrams"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
