# 逼真的业余手机照片与 WhatsApp 聊天

## 中文说明

用于让 AI 围绕「逼真的业余手机照片与 WhatsApp 聊天」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
创建一张真实的、拍摄质量不佳的业余照片，展示物理智能手机的屏幕上显示 WhatsApp 聊天内容。手机应该用一只手垂直握住，有明显的黑色边框/外壳、温暖昏暗的室内灯光、轻微倾斜、模糊、颗粒、眩光、反射、焦点不均匀和不完美的取景。它看起来一定像手机屏幕的真实世界照片，而不是干净的屏幕截图。在手机屏幕上，以土耳其语显示 iPhone 风格的 WhatsApp 对话，联系人姓名为 ${receiver_name}，并附加一张小个人资料照片（如果未提供，则使用默认的 Whatsapp 个人资料图标）。聊天主题：
${talk_subject}

根据上述主题自然生成 WhatsApp 对话。联系人的消息应使用 ${language_name:Turkish} 语言和 ${talk_style}（例如，损坏的 ${language_name:Turkish}，有拼写错误和尴尬的措辞。我的消息应该是正确的 ${language_name:Turkish}，没有拼写错误）。使用逼真的白色传入气泡、绿色传出气泡、时间戳、蓝色复选标记以及底部的 WhatsApp 输入栏。保持屏幕可读但稍微模糊，就像拍照不佳的手机屏幕一样。
```

---

## English Original

### Title

Realistic Amateur Phone Photo with WhatsApp Chat

### Description



### Prompt

```md
Create a realistic, poorly taken amateur photo of a physical smartphone showing a WhatsApp chat on its screen.

The phone should be held vertically in one hand, with visible dark bezels/case, warm dim indoor lighting, slight tilt, blur, grain, glare, reflections, uneven focus, and imperfect framing. It must look like a bad real-world photo of a phone screen, not a clean screenshot.

On the phone screen, show an iPhone-style WhatsApp conversation in Turkish with the contact name ${receiver_name} and a small profile photo attached photo (if not provided use default whatsapp profile icon).

Chat subject:
${talk_subject}

Generate the WhatsApp dialogue naturally based on the subject above. The contact’s messages should be in ${language_name:Turkish} language and ${talk_style} (e.g. broken ${language_name:Turkish} with typos and awkward wording. My messages should be correct ${language_name:Turkish} with no typos). Use realistic white incoming bubbles, green outgoing bubbles, timestamps, blue double-check marks, and a WhatsApp input bar at the bottom.

Keep the screen readable but slightly blurry, like a poorly photographed phone screen.
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
