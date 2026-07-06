# 国家建筑立体模型

## 中文说明

用于让 AI 围绕「国家建筑立体模型」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
“创建一个等距微型 3D 立体模型，代表 ${country_name} 到 ${famous_structure} 的标志性建筑。使用 45° 自上而下视图。应用干净柔软的纹理和逼真的 PBR 材质。灯光给人一种平衡、自然的感觉。凸起的底座包括附近的街道、景观特征以及与结构相关的文化细节。添加具有丰富面部细节的小型风格化当地人和游客。背景保持纯色 ${background_color}。顶部中心文本以粗体显示 ${country_name}。第二行显示 ${structure_name}。在下面放置一个最小的架构图标。文本颜色会根据对比度进行调整。”
```

---

## English Original

### Title

National Architecture Dioramas

### Description



### Prompt

```md
“Create an isometric miniature 3D diorama representing the iconic architecture of ${country_name} through ${famous_structure}. Use a 45° top-down view.

Apply clean soft textures and realistic PBR materials.
Lighting feels balanced and natural. The raised base includes nearby streets, landscape features, and cultural details linked to the structure. Add tiny stylized locals and visitors with heavy facial details.

Background stays solid ${background_color}. Top center text shows ${country_name} in bold. Second line shows ${structure_name}. Place a minimal architecture icon below. Text color adjusts for contrast.”
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
