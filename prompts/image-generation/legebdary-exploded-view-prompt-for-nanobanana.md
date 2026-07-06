# 传说中的纳米香蕉爆炸视图提示词

## 中文说明

用于让 AI 围绕「传说中的纳米香蕉爆炸视图提示词」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "name": "我的工作流程",
  “步骤”：[]
}{
  “提示详细信息”：{
    "description": "{OBJECT_NAME} 的超详细分解技术信息图，以 3/4 正面等距视图显示。该对象部分透明且打开，其关键的内部和外部组件分开并以干净的分解图布局漂浮在主体周围。显示 {OBJECT_NAME} 的所有典型主要部件：外壳/面板、结构框架、主要电子设备/板、电源系统/电池或 PSU、端口/连接器、显示器或界面元素（如果存在）、输入控件/按钮、机械模块（电机/齿轮/风扇/铰链）（如果适用）、扬声器/麦克风（如果适用）、电缆/柔性带、螺钉/支架以及 EMI/热屏蔽。使用简约的无衬线字体的细白色标注引线和编号标签。照明：柔和、均匀、具有微妙反射的高端产品渲染照明。渲染、工业设计演示、高对比度、锐利、8K、构图干净、无杂乱。",
    “样式标签”：[
      “分解图”，
      “技术信息图”，
      “照片级真实 3D CAD 渲染”，
      “工业设计演示”，
      “极简主义标签”，
      “黑暗工作室背景”
    ]
  },
  " NegativePrompt": "没有人，没有凌乱的布局，没有多余的组件，没有品牌标志，没有文字模糊，没有卡通，没有低多边形，没有水印，没有扭曲的视角，没有沉重的噪音",
  “一代提示”：{
    "纵横比": "2:3",
    "detailLevel": "超",
    “风格化”：“低-中”，
    “相机”：{
      "angle": "3/4 正面等距",
      "lens": "产品渲染视角"
    },
    “灯光”：“柔和均匀的工作室灯光，微妙的反射”，
    "background": "光滑的深灰色无缝背景"
  }
}
```

---

## English Original

### Title

Legebdary Exploded View Prompt For nanobanana

### Description



### Prompt

```md
{
  "name": "My Workflow",
  "steps": []
}{
  "promptDetails": {
    "description": "Ultra-detailed exploded technical infographic of {OBJECT_NAME}, shown in a 3/4 front isometric view. The object is partially transparent and opened, with its key internal and external components separated and floating around the main body in a clean exploded-view layout. Show all major parts typical for {OBJECT_NAME}: outer shell/panels, structural frame, primary electronics/boards, power system/battery or PSU, ports/connectors, display or interface elements if present, input controls/buttons, mechanical modules (motors/gears/fans/hinges) if applicable, speakers/microphones if applicable, cables/flex ribbons, screws/brackets, and EMI/thermal shielding. Use thin white callout leader lines and numbered labels in a minimalist sans-serif font. Background: smooth dark gray studio backdrop. Lighting: soft, even, high-end product render lighting with subtle reflections. Style: photoreal 3D CAD render, industrial design presentation, high contrast, razor-sharp, 8K, clean composition, no clutter.",
    "styleTags": [
      "Exploded View",
      "Technical Infographic",
      "Photoreal 3D CAD Render",
      "Industrial Design Presentation",
      "Minimalist Labels",
      "Dark Studio Background"
    ]
  },
  "negativePrompt": "no people, no messy layout, no extra components, no brand logos, no text blur, no cartoon, no low-poly, no watermark, no distorted perspective, no heavy noise",
  "generationHints": {
    "aspectRatio": "2:3",
    "detailLevel": "ultra",
    "stylization": "low-medium",
    "camera": {
      "angle": "3/4 front isometric",
      "lens": "product render perspective"
    },
    "lighting": "soft even studio lighting, subtle reflections",
    "background": "smooth dark gray seamless backdrop"
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
