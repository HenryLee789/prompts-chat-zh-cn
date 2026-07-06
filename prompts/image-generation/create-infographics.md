# 创建信息图表

## 中文说明

手绘教育信息图表。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、Business、Academic 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
解释思考快与慢的书

{
  “风格”：{
    "name": "白板信息图",
    “description”：“手绘教育信息图，具有温暖、平易近人的素描美感。上传你的内容大纲，即可收到一份视觉上井井有条、素描本风格的指南，感觉是手工制作的，但结构却很专业。”
  },
  “视觉基础”：{
    “表面”：{
      "base": "灰白色到暖奶油色背景",
      "texture": "微妙的纸纹——不是无菌的，不是数字的",
      "edges": "内容完全延伸到边缘，无边框或框架，无缝完成",
      "feel": "就像直接看一个组织良好的笔记本页面"
    },
    "overall_impression": "平易近人的专业知识——通过手绘的温暖使复杂的信息变得友好"
  },
  “插图风格”：{
    “线路质量”：{
      "type": "手绘水墨素描美学",
      "weight": "主要元素用中笔画，细节用细笔画",
      "character": "自信但不完美——轻微的晃动证明了人情味",
      "edges": "柔软，不是矢量清晰，拐角处偶尔出现线条重叠",
      "fills": "松散的阴影线、柔和的阴影交叉阴影线，绝不是固体机器填充"
    },
    “图标治疗”：{
      "style": "简单、迷人、略显天真的插画",
      "complexity": "简化为基本形式——小尺寸下可读",
      "personality": "友好且平易近人，从不合作或乏味",
      "consistency": "同一只手似乎绘制了所有内容"
    },
    “人类人物”：{
      "style": "简单友好的角色，没有解剖学上的细节",
      "faces": "最小的特征——眼睛的点，简单的表情",
      "poses": "清晰、面向行动、交流的手势",
      "diversity": "不同人的不同轮廓和建议"
    },
    “对象和场景”：{
      "approach": "可识别的简化草图",
      "detail_level": "足以识别笔记本电脑、电话、建筑物、人",
      "perspect": "随意的等距或平面，不是严格的技术绘图",
      "charm": "轻微的缺陷增添了真实性"
    }
  },
  “颜色哲学”：{
    “调色板字符”：{
      "mood": "温暖、乐观、充满活力但不压倒性",
      "saturation": "中等——足够鲜艳以引导眼睛，足够柔和以感觉手绘色彩",
      "harmony": "互补和相似的组合让人感觉有意为之"
    },
    “primary_palette”：{
      "yellows": "温暖的金黄色，柔和的芥末色——用于突出显示、背景、能量",
      "greens": "新鲜的叶绿、柔和的青色——代表成功、成长、自然、金钱主题",
      "blues": "平静的天蓝色，柔和的海军蓝——代表信任、技术、稳定",
      “oranges”：“温暖的珊瑚色、柔软的桃色——温暖、号召性用语、友好的警报”
    },
    “支持调色板”：{
      “中性色”：“暖灰色、柔和的棕色、奶油色——绝不冷或鲜明”，
      "blacks": "线条用软木炭，绝不纯粹#000000",
      "whites": "奶油色和灰白色，纸色"
    },
    “颜色应用”：{
      "fills": "水彩般的水洗，轻微不均匀，透明层",
      "backgrounds": "用柔和的色块来划分内容，柔和的圆角矩形",
      "accents": "战略性的亮色流行色来引导层次结构",
      "technique": "颜色可能会稍微超出线条边界——手工着色的感觉"
    }
  },
  “版式集成”：{
    “标题样式”：{
      "appearance": "粗体手写体感觉，基线稍有不均匀",
      "weight": "沉重、自信、引人注目",
      "case": "主要标题通常大写",

"color": "深木炭色或战略色用于强调"
    },
    “副标题”：{
      "appearance": "中等重量，仍然是手绘人物",
      "decoration": "可能包括下划线、简单横幅或突出显示框",
      "hierarchy": "从头条新闻中明确缩小尺寸"
    },
    “正文文本”：{
      "appearance": "干净但温暖，在较小尺寸下可读",
      "style": "具有手写个性的无衬线字体，或实际的手写字体",
      "spacing": "宽敞，绝不局促"
    },
    “注释”：{
      "style": "随意的手写笔记，箭头指向元素",
      "目的": "添加解释、强调或个性",
      "placement": "有机的，好像在解释时添加的"
    }
  },
  “布局架构”：{
    “画布”：{
      "framing": "无边框、无框架、无边缘装饰",
      "boundary": "内容使用整个画布 - 元素可能会接触或渗出到边缘",
      "containment": "信息图是图像，而不是信息图的图像"
    },
    “结构”：{
      "type": "具有有机灵活性的模块化网格",
      "sections": "清晰的编号或字母分区",
      "flow": "从左到右，从上到下，视觉层次引导眼睛",
      "breathing_room": "宽敞的空白区域可防止淹没"
    },
    “部分治疗”：{
      "borders": "软圆角矩形、手绘框或色块背景",
      "separation": "清晰但不僵化——各部分感觉相连但又截然不同",
      "numbering": "带圆圈的数字、徽章或有趣的指示符"
    },
    “视觉流设备”：{
      "arrows": "手绘，略微弯曲，友好的指针",
      "connectors": "虚线，显示关系的简单路径",
      "progression": "布局、步骤顺序、转换箭头之前/之后"
    }
  },
  “信息层次结构”：{
    “级别”：{
      "primary": "大的粗体标题，明亮的色彩强调，主要插图",
      "secondary": "副标题、关键图标、章节背景",
      "tertiary": "正文、支持细节、注释",
      "ambient": "纹理、微妙的装饰、背景元素"
    },
    “强调技术”：{
      "color_highlights": "关键词后面的黄色标记式突出显示",
      "size_contrast": "层次结构级别之间的显著比例差异",
      "boxing": "重要项目以圆角矩形或徽章形状显示",
      "icons": "复选标记、星星、感叹号表示强调"
    }
  },
  “装饰元素”：{
    “徽章和标签”：{
      "style": "丝带横幅、圆形徽章、标签形状",
      "use": "章节标签、关键术语、号召性用语",
      "character": "手绘，稍有瑕疵，迷人"
    },
    “结缔组织”：{
      "arrows": "弯曲的，手绘的，有各种头部样式",
      "lines": "虚线路径、简单分隔线、下划线",
      "brackets": "花括号对相关项目进行分组"
    },
    “环境详细信息”：{
      "small_icons": "星星、复选标记、项目符号、闪光",
      "doodles": "微小的相关草图填补了尴尬的空间",
      "texture": "微妙的纸纹贯穿始终"
    }
  },
  “真实性标记”：{
    “手工制作的质量”：{
      "line_variation": "自然粗细的变化就像用真实的笔压绘制一样",
      "color_bleeds": "轻微溢出线条，水彩风格的边缘",
      "alignment": "故意不完美——文本和元素稍微偏离网格",
      "overlap": "元素可能会稍微重叠，创造深度和能量"
    },

“材料诚实”：{
      "paper_feel": "温暖的灰白色，具有微妙的纹理",
      "ink_quality": "柔软的炭黑，绝不刺耳",
      "marker_fills": "轻微条纹，可见透明层"
    },
    “人类证据”：{
      "更正": "偶尔可见的返工增加了真实性",
      "spontaneity": "有些元素感觉是事后添加的——注释、小箭头",
      “个性”：“整件作品感觉像是一个人的视觉思维”
    }
  },
  “技术质量”：{
    "resolution": "适合印刷和数字的高分辨率输出",
    "clarity": "所有文本可读，所有图标可识别",
    "balance": "视觉重量均匀分布在整个构图中",
    "completeness": "感觉完成了但没有过度劳累——自信的停止点"
  },
  “enhancements_beyond_reference”：{
    “深度添加”：{
      "subtle_shadows": "剖面框下的软阴影用于提升",
      "layering": "重叠元素创造视觉深度",
      "dimension": "徽章和关键元素有轻微的 3D 感觉"
    },
    “抛光改进”：{
      "color_harmony": "更有意的调色板关系",
      "spacing_rhythm": "一致的边距和装订线",
      "hierarchy_clarity": "内容级别之间的差异更强"
    },
    “engagement_boosters”：{
      "focal_points": "清晰的视觉锚吸引眼球",
      "progression": "通过内容实现令人满意的视觉旅程",
      "reward_details": "仔细观察会有令人愉快的小发现"
    }
  },
  “避免”：[
    “信息图表周围的任何框架、边框或边缘装饰”，
    “木框或白板框效果”，
    “在整个图像周围投射阴影，就好像它是某物的照片一样”，
    “图像看起来像海报的照片——它就是海报”，
    “无菌矢量完美——这应该感觉是手工制作的”，
    “冷酷的纯白色或严酷的黑色”，
    “刚性机械网格对齐”，
    “企业剪贴画美学”，
    “压倒性的细节密度——让它呼吸”，
    “冲突的霓虹灯或花哨的颜色组合”，
    “整个线宽均匀”，
    “完美均匀的颜色填充”，
    “僵硬、毫无生气的人物形象”，
    “数字锐度杀死了温暖”，
    “作品中插图风格不一致”，
    “文字较多的部分没有视觉效果”
  ]
}
```

---

## English Original

### Title

Create Infographics

### Description

Hand-illustrated educational infographics.

### Prompt

```md
explain the thinking fast and slow book

{
  "style": {
    "name": "Whiteboard Infographic",
    "description": "Hand-illustrated educational infographic with a warm, approachable sketch aesthetic. Upload your content outline and receive a visually organized, sketchbook-style guide that feels hand-crafted yet professionally structured."
  },
  "visual_foundation": {
    "surface": {
      "base": "Off-white to warm cream background",
      "texture": "Subtle paper grain—not sterile, not digital",
      "edges": "Content extends fully to edges, no border or frame, seamless finish",
      "feel": "Like looking directly at a well-organized notebook page"
    },
    "overall_impression": "Approachable expertise—complex information made friendly through hand-drawn warmth"
  },
  "illustration_style": {
    "line_quality": {
      "type": "Hand-drawn ink sketch aesthetic",
      "weight": "Medium strokes for main elements, thinner for details",
      "character": "Confident but imperfect—slight wobble that proves human touch",
      "edges": "Soft, not vector-crisp, occasional line overlap at corners",
      "fills": "Loose hatching, gentle cross-hatching for shadows, never solid machine fills"
    },
    "icon_treatment": {
      "style": "Simple, charming, slightly naive illustration",
      "complexity": "Reduced to essential forms—readable at small sizes",
      "personality": "Friendly and approachable, never corporate or sterile",
      "consistency": "Same hand appears to have drawn everything"
    },
    "human_figures": {
      "style": "Simple friendly characters, not anatomically detailed",
      "faces": "Minimal features—dots for eyes, simple expressions",
      "poses": "Clear, action-oriented, communicative gestures",
      "diversity": "Varied silhouettes and suggestions of different people"
    },
    "objects_and_scenes": {
      "approach": "Recognizable simplified sketches",
      "detail_level": "Just enough to identify—laptop, phone, building, person",
      "perspective": "Casual isometric or flat, not strict technical drawing",
      "charm": "Slight imperfections add authenticity"
    }
  },
  "color_philosophy": {
    "palette_character": {
      "mood": "Warm, optimistic, energetic but not overwhelming",
      "saturation": "Medium—vibrant enough to guide the eye, soft enough to feel hand-colored",
      "harmony": "Complementary and analogous combinations that feel intentional"
    },
    "primary_palette": {
      "yellows": "Warm golden yellow, soft mustard—for highlights, backgrounds, energy",
      "greens": "Fresh leaf green, soft teal—for success, growth, nature, money themes",
      "blues": "Calm sky blue, soft navy—for trust, technology, stability",
      "oranges": "Warm coral, soft peach—for warmth, calls-to-action, friendly alerts"
    },
    "supporting_palette": {
      "neutrals": "Warm grays, soft browns, cream—never cold or stark",
      "blacks": "Soft charcoal for lines, never pure #000000",
      "whites": "Cream and off-white, paper-toned"
    },
    "color_application": {
      "fills": "Watercolor-like washes, slightly uneven, transparent layers",
      "backgrounds": "Soft color blocks to section content, gentle rounded rectangles",
      "accents": "Strategic pops of brighter color to guide hierarchy",
      "technique": "Colors may slightly escape line boundaries—hand-colored feel"
    }
  },
  "typography_integration": {
    "headline_style": {
      "appearance": "Bold hand-lettered feel, slightly uneven baseline",
      "weight": "Heavy, confident, attention-grabbing",
      "case": "Often uppercase for major headers",
      "color": "Dark charcoal or strategic color for emphasis"
    },
    "subheadings": {
      "appearance": "Medium weight, still hand-drawn character",
      "decoration": "May include underlines, simple banners, or highlight boxes",
      "hierarchy": "Clear size reduction from headlines"
    },
    "body_text": {
      "appearance": "Clean but warm, readable at smaller sizes",
      "style": "Sans-serif with hand-written personality, or actual handwriting font",
      "spacing": "Generous, never cramped"
    },
    "annotations": {
      "style": "Casual handwritten notes, arrows pointing to elements",
      "purpose": "Add explanation, emphasis, or personality",
      "placement": "Organic, as if added while explaining"
    }
  },
  "layout_architecture": {
    "canvas": {
      "framing": "NO BORDER, NO FRAME, NO EDGE DECORATION",
      "boundary": "Content uses full canvas—elements may touch or bleed to edges",
      "containment": "The infographic IS the image, not an image of an infographic"
    },
    "structure": {
      "type": "Modular grid with organic flexibility",
      "sections": "Clear numbered or lettered divisions",
      "flow": "Left-to-right, top-to-bottom with visual hierarchy guiding the eye",
      "breathing_room": "Generous white space preventing overwhelm"
    },
    "section_treatment": {
      "borders": "Soft rounded rectangles, hand-drawn boxes, or color-blocked backgrounds",
      "separation": "Clear but not rigid—sections feel connected yet distinct",
      "numbering": "Circled numbers, badges, or playful indicators"
    },
    "visual_flow_devices": {
      "arrows": "Hand-drawn, slightly curved, friendly pointers",
      "connectors": "Dotted lines, simple paths showing relationships",
      "progression": "Before/after layouts, step sequences, transformation arrows"
    }
  },
  "information_hierarchy": {
    "levels": {
      "primary": "Large bold headers, bright color accents, main illustrations",
      "secondary": "Subheadings, key icons, section backgrounds",
      "tertiary": "Body text, supporting details, annotations",
      "ambient": "Texture, subtle decorations, background elements"
    },
    "emphasis_techniques": {
      "color_highlights": "Yellow marker-style highlighting behind key words",
      "size_contrast": "Significant scale difference between hierarchy levels",
      "boxing": "Important items in rounded rectangles or badge shapes",
      "icons": "Checkmarks, stars, exclamation points for emphasis"
    }
  },
  "decorative_elements": {
    "badges_and_labels": {
      "style": "Ribbon banners, circular badges, tag shapes",
      "use": "Section labels, key terms, calls-to-action",
      "character": "Hand-drawn, slightly imperfect, charming"
    },
    "connective_tissue": {
      "arrows": "Curved, hand-drawn, with various head styles",
      "lines": "Dotted paths, simple dividers, underlines",
      "brackets": "Curly braces grouping related items"
    },
    "ambient_details": {
      "small_icons": "Stars, checkmarks, bullets, sparkles",
      "doodles": "Tiny relevant sketches filling awkward spaces",
      "texture": "Subtle paper grain throughout"
    }
  },
  "authenticity_markers": {
    "hand_made_quality": {
      "line_variation": "Natural thickness changes as if drawn with real pen pressure",
      "color_bleeds": "Slight overflow past lines, watercolor-style edges",
      "alignment": "Intentionally imperfect—text and elements slightly off-grid",
      "overlap": "Elements may slightly overlap, creating depth and energy"
    },
    "material_honesty": {
      "paper_feel": "Warm off-white with subtle texture",
      "ink_quality": "Soft charcoal blacks, never harsh",
      "marker_fills": "Slightly streaky, transparent layers visible"
    },
    "human_evidence": {
      "corrections": "Occasional visible rework adds authenticity",
      "spontaneity": "Some elements feel added as afterthoughts—annotations, small arrows",
      "personality": "The whole piece feels like one person's visual thinking"
    }
  },
  "technical_quality": {
    "resolution": "High-resolution output suitable for print and digital",
    "clarity": "All text readable, all icons recognizable",
    "balance": "Visual weight distributed evenly across the composition",
    "completeness": "Feels finished but not overworked—confident stopping point"
  },
  "enhancements_beyond_reference": {
    "depth_additions": {
      "subtle_shadows": "Soft drop shadows under section boxes for lift",
      "layering": "Overlapping elements creating visual depth",
      "dimension": "Slight 3D feel on badges and key elements"
    },
    "polish_improvements": {
      "color_harmony": "More intentional palette relationships",
      "spacing_rhythm": "Consistent margins and gutters",
      "hierarchy_clarity": "Stronger differentiation between content levels"
    },
    "engagement_boosters": {
      "focal_points": "Clear visual anchors drawing the eye",
      "progression": "Satisfying visual journey through the content",
      "reward_details": "Small delightful discoveries upon closer inspection"
    }
  },
  "avoid": [
    "ANY frame, border, or edge decoration around the infographic",
    "Wooden frame or whiteboard frame effect",
    "Drop shadow around the entire image as if it's a photo of something",
    "The image looking like a photograph of a poster—it IS the poster",
    "Sterile vector perfection—this should feel hand-made",
    "Cold pure whites or harsh blacks",
    "Rigid mechanical grid alignment",
    "Corporate clip-art aesthetic",
    "Overwhelming detail density—let it breathe",
    "Clashing neon or garish color combinations",
    "Uniform line weights throughout",
    "Perfectly even color fills",
    "Stiff, lifeless human figures",
    "Digital sharpness that kills the warmth",
    "Inconsistent illustration styles within the piece",
    "Text-heavy sections without visual relief"
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
