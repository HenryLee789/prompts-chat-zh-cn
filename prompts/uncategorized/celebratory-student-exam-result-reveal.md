# 庆祝学生考试成绩揭晓

## 中文说明

用于让 AI 围绕「庆祝学生考试成绩揭晓」执行通用 AI 任务执行任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给视频生成模型，控制镜头、动作、节奏和场景。

## 使用场景

* 处理尚未归类的角色、分析或生成任务
* 把原始需求整理成可直接执行的 AI 指令
* 保留原 prompt 的角色、约束和输出格式
* 适合复制给视频生成模型，控制镜头、动作、节奏和场景。

## 适用人群

* AI 使用者
* 内容创作者
* 效率工具用户

## 中文 Prompt

```md
{
  “射击”：{
    “构图”：[“学生坐在课桌前的中正面镜头，将智能手机举向相机，可见绿屏显示”]，
    "lens": "35mm 镜头，具有自然视角和适度的景深",
    "camera_motion": "当学生微笑时，轻微向上倾斜并轻轻推向手机"
  },
  “主题”：{
    "description": "大学生，收到优异的考试成绩后心情愉悦、兴奋",
    “衣柜”：“休闲、轻松的家居装”
  },
  “场景”：{
    "location": "家庭学习桌",
    "time_of_day": "白天",
    “环境”：“明亮的家居环境，桌子周围有书籍和纸张，日光透过窗户”
  },
  “视觉细节”：{
    "action": "学生露出幸福的笑容，将手机举向镜头显示结果（绿屏供以后编辑），空手做手势庆祝",
    "props": "绿屏智能手机、桌面物品（笔记本、笔、笔记本电脑合上或推到一边）"
  },
  “电影摄影”：{
    “照明”：“明亮的自然光强调乐观、庆祝的心情”，
    “语气”：“快乐、自豪、积极”
  },
  “音频”：{
    "ambient": "微妙的家庭安静，可选微弱的庆祝音效（如轻柔的欢呼或拍手）",
    “对话”：[
      {
        “角色”：“学生”，
        "dialog": "是的！我做到了！",
        "voice": "年轻、热情",
        "style": "兴奋而真诚",
        “持续时间”：“2秒”，
        "emphasis": "强烈强调快乐"
      }
    ]
  },
  "color_palette": "明亮的暖色调，以手机的色度绿色为焦点",
  “设置”：{
    “transitions”：“最后快速、充满活力的淡出”
  },
  “动作序列”：[
    {
      “时间”：“0-5秒”，
      “事件”：“中景镜头显示学生坐在课桌前，检查考试成绩后笑容满面”
    },
    {
      “时间”：“5-10秒”，
      “事件”：“学生将智能手机举向摄像头，绿屏显示清晰可见”
    },
    {
      “时间”：“10-15秒”，
      “事件”：“相机在手机上轻轻推近，学生兴奋地大笑”
    },
    {
      “时间”：“15-18秒”，
      “事件”：“学生松开手，做出小小的庆祝动作，仍然举着手机”
    },
    {
      “时间”：“18-20秒”，
      “event”：“镜头在淡出之前短暂地将焦点转移到学生的笑脸上”
    }
  ]
}
```

---

## English Original

### Title

Celebratory Student Exam Result Reveal

### Description



### Prompt

```md
{
  "shot": {
    "composition": ["medium front-facing shot of student seated at desk, holding up smartphone toward camera with green screen display visible"],
    "lens": "35mm lens for natural perspective and moderate depth of field",
    "camera_motion": "slight upward tilt and gentle push-in toward phone as student smiles"
  },
  "subject": {
    "description": "university-aged student, cheerful and excited after receiving great exam results",
    "wardrobe": "casual, relaxed home outfit"
  },
  "scene": {
    "location": "home study desk",
    "time_of_day": "daytime",
    "environment": "bright home setting with books and papers around desk, daylight streaming through window"
  },
  "visual_details": {
    "action": "student beams with happiness, raises phone toward camera to display result (green screen for later editing), gestures with free hand in celebration",
    "props": "smartphone with green screen, desk items (notebook, pen, laptop closed or pushed aside)"
  },
  "cinematography": {
    "lighting": "bright natural daylight emphasizing upbeat, celebratory mood",
    "tone": "joyful, proud, positive"
  },
  "audio": {
    "ambient": "subtle household quiet, optional faint celebratory sound effect (like soft cheer or clap)",
    "dialogue": [
      {
        "character": "student",
        "dialogue": "Yes! I did it!",
        "voice": "youthful, enthusiastic",
        "style": "excited and genuine",
        "duration": "2s",
        "emphasis": "strong emphasis on joy"
      }
    ]
  },
  "color_palette": "bright warm tones with phone’s chroma green as focal point",
  "settings": {
    "transitions": "quick, energetic fade-out at end"
  },
  "action_sequence": [
    {
      "time": "0-5s",
      "event": "medium shot shows student sitting at desk, smiling broadly after checking exam results"
    },
    {
      "time": "5-10s",
      "event": "student lifts smartphone toward camera, green screen display clearly visible"
    },
    {
      "time": "10-15s",
      "event": "camera gently pushes in closer on phone as student laughs with excitement"
    },
    {
      "time": "15-18s",
      "event": "student pumps free hand in small celebratory gesture, still holding up phone"
    },
    {
      "time": "18-20s",
      "event": "camera briefly shifts focus to student’s smiling face before fade-out"
    }
  ]
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
