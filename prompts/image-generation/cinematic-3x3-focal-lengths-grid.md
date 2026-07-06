# 电影级 3x3 焦距网格

## 中文说明

对于拍摄单个输入图像并将其转换为 9 个不同焦距的镜头非常有用，然后你可以将其放大以用于生成开始帧 + 结束帧视频。你的输入图像应该在你想要的场景中包含你想要的主题。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Art、ChatGPT、Nano Banana 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
<指令>
分析输入图像的整个组成。识别所有存在的关键主题（无论是一个人、一群人/情侣、一辆车还是一个特定物体）及其空间关系/交互。生成一个有凝聚力的 3x3 网格“电影接触表”，其中包含同一环境中这些主题的 9 个不同的摄像机镜头。你必须调整标准电影镜头类型以适应内容（例如，如果是一组，则将组保持在一起；如果是对象，则将整个对象框起来）：

**第 1 行（建立上下文）：**
1. **远景镜头 (ELS)：** 在广阔的环境中，拍摄对象显得很小。
2. **远景 (LS)：** 从上到下（从头到脚/轮子到屋顶）可以看到完整的主体或群体。
3. **中远景（美国/3-4）：** 从膝盖向上取景（对于人物）或 3/4 视图（对于物体）。

**第 2 行（核心覆盖范围）：**
4. **中景 (MS)：** 从腰部以上（或物体的中心）取景。专注于互动/行动。
5. **中特写 (MCU)：** 从胸部向上取景。主要主题的亲密框架。
6. **特写 (CU)：** 物体脸部或“正面”的紧密取景。

**第 3 行（细节和角度）：**
7. **极端特写 (ECU)：** 宏观细节集中于关键特征（眼睛、手、标志、纹理）。
8. **低角度拍摄（虫眼）：** 从地面仰视拍摄对象（雄伟/英勇）。
9. **高角度拍摄（鸟瞰）：** 从上方俯视拍摄对象。确保严格的一致性：所有 9 个面板上相同的人/物体、相同的衣服和相同的照明。景深应该真实地变化（特写镜头中的散景）。
</指令>

专业的 3x3 电影故事板网格包含 9 个面板。网格以全面的焦距范围展示输入图像中的特定主题/场景。
**顶行：** 广角环境镜头，全视图，3/4 剪切。
**中排：**腰部视图、胸部视图、面部/正面特写。
**底行：** 宏观细节、低角度、高角度。所有帧都具有逼真的纹理、一致的电影色彩分级以及针对所分析的特定数量的主题或对象的正确取景。
```

---

## English Original

### Title

Cinematic 3x3 Focal Lengths Grid

### Description

Useful for taking a single input image and transforming it to 9 different focal length shots that you can then upscale to use for start + end frame video generations.
Your input image should have your desired subject/s in the scene you want them in.

### Prompt

```md
<instruction>
Analyze the entire composition of the input image. Identify ALL key subjects present (whether it's a single person, a group/couple, a vehicle, or a specific object) and their spatial relationship/interaction.
Generate a cohesive 3x3 grid "Cinematic Contact Sheet" featuring 9 distinct camera shots of exactly these subjects in the same environment.
You must adapt the standard cinematic shot types to fit the content (e.g., if a group, keep the group together; if an object, frame the whole object):

**Row 1 (Establishing Context):**
1. **Extreme Long Shot (ELS):** The subject(s) are seen small within the vast environment.
2. **Long Shot (LS):** The complete subject(s) or group is visible from top to bottom (head to toe / wheels to roof).
3. **Medium Long Shot (American/3-4):** Framed from knees up (for people) or a 3/4 view (for objects).

**Row 2 (The Core Coverage):**
4. **Medium Shot (MS):** Framed from the waist up (or the central core of the object). Focus on interaction/action.
5. **Medium Close-Up (MCU):** Framed from chest up. Intimate framing of the main subject(s).
6. **Close-Up (CU):** Tight framing on the face(s) or the "front" of the object.

**Row 3 (Details & Angles):**
7. **Extreme Close-Up (ECU):** Macro detail focusing intensely on a key feature (eyes, hands, logo, texture).
8. **Low Angle Shot (Worm's Eye):** Looking up at the subject(s) from the ground (imposing/heroic).
9. **High Angle Shot (Bird's Eye):** Looking down on the subject(s) from above.

Ensure strict consistency: The same people/objects, same clothes, and same lighting across all 9 panels. The depth of field should shift realistically (bokeh in close-ups).
</instruction>

A professional 3x3 cinematic storyboard grid containing 9 panels.
The grid showcases the specific subjects/scene from the input image in a comprehensive range of focal lengths.
**Top Row:** Wide environmental shot, Full view, 3/4 cut.
**Middle Row:** Waist-up view, Chest-up view, Face/Front close-up.
**Bottom Row:** Macro detail, Low Angle, High Angle.
All frames feature photorealistic textures, consistent cinematic color grading, and correct framing for the specific number of subjects or objects analyzed.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
