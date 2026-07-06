# 被遗弃的妻子

## 中文说明

用于让 AI 围绕「被遗弃的妻子」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
  “角色个人资料”：{
    “姓名”：“娜塔莉亚”，
    "subject": "全身 3/4 视角肖像捕捉深刻的情感转变时刻",
    “物理特征”：{
      “种族”：“南欧”，
      "age_appearance": "年轻的面容现在带有复杂、疲倦的表情",
      “头发”：“深棕色，波浪状，巧妙地凌乱，仿佛是由激情、时间和思想造成的”，
      “眼睛”：“深绿色，带有琥珀色斑点，凝视着中距离——忧郁、清澈和顺从的混合体”，
      “肤色”：“橄榄色皮肤，带有微妙的水润光泽”，
      "bodyque": "身材修长，女性化轮廓明显，自然优雅",
      “details”：“她右手无名指上的一枚简单的金色结婚戒指，捕捉着光芒”
    },
    “服装”：{
      "outfit": "一件时尚的黑色丝绸吊带裙，一条细肩带精致地从肩膀上垂下来，黑色长筒袜",
      "condition": "优雅地混乱，表明之前的亲密时刻现在已经过去了"
    }
  },
  “场景详细信息”：{
    "location": "罗马的极简主义、阳光明媚的公寓。干净的线条，纯白的墙壁。",
    "lighting": "自然的、电影般的晨光流入。突出皮肤和织物的纹理，创造出长长的、戏剧性的阴影。感觉既暴露又宁静。",
    "pose": "向后靠在墙上，身体呈优雅的 3/4 反向姿势。一只手轻轻放在锁骨上，另一只手松松地垂着。一种安静的善后和内省的姿势。",
    “氛围”：“诗意的宁静、亲密的脆弱、充满记忆的明显的沉默。复杂、原始且充满人性。故事就在她的表情和她周围的空间中。”
  },
  “技术参数”：{
    "camera": "带 50mm f/1.2 镜头的索尼 A7R IV",
    "style": "超现实主义美术摄影。电影般，具有柔和的胶片颗粒。灵感来自佩特拉·柯林斯 (Petra Collins) 或南·戈尔丁 (Nan Goldin) 等摄影师令人回味的静止感。",
    "format": "垂直（9:16），非常适合讲述故事的肖像",
    “细节”：“对眼睛和表情的敏锐关注。对皮肤、丝绸和墙壁的纹理强调。背景干净，近乎朴素，承载着情感的重量。没有明显的碎片，只有生活的微妙证据。”
  },
  "artistic_intent"：“捕捉一次重要邂逅后私人时刻的无声叙述。重点是情感景观：脆弱、转瞬即逝的美丽、安静的力量以及亲密后深刻的自我意识的混合。这是内心转折点的肖像。”
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Abandoned Wife

### Description



### Prompt

```md
{
  "character_profile": {
    "name": "Natalia",
    "subject": "Full-body 3/4 view portrait capturing a moment of profound emotional transition",
    "physical_features": {
      "ethnicity": "Southern European",
      "age_appearance": "Youthful features now marked by a complex, weary expression",
      "hair": "Dark brown, wavy, artfully disheveled as if by passion, time, and thought",
      "eyes": "Deep green with amber flecks, gazing into the middle distance — a mix of melancholy, clarity, and resignation",
      "complexion": "Olive skin with a subtle, dewy sheen",
      "physique": "Slender with a pronounced feminine silhouette, shown with natural elegance",
      "details": "A simple gold wedding band on her right ring finger, catching the light"
    },
    "clothing": {
      "outfit": "A sleek black silk slip dress, one thin strap delicately fallen off the shoulder, black thigh-high stockings",
      "condition": "Elegantly disordered, suggesting a prior moment of intimacy now passed"
    }
  },
  "scene_details": {
    "location": "Minimalist, sunlit apartment in Rome. Clean lines, a stark white wall.",
    "lighting": "Natural, cinematic morning light streaming in. Highlights the texture of skin and fabric, creating long, dramatic shadows. Feels both exposing and serene.",
    "pose": "Leaning back against the wall, body in a graceful 3/4 contrapposto. One hand rests lightly on her collarbone, the other hangs loosely. A posture of quiet aftermath and introspection.",
    "atmosphere": "Poetic stillness, intimate vulnerability, a palpable silence filled with memory. Sophisticated, raw, and deeply human. The story is in her expression and the space around her."
  },
  "technical_parameters": {
    "camera": "Sony A7R IV with 50mm f/1.2 lens",
    "style": "Hyper-realistic fine art photography. Cinematic, with a soft film grain. Inspired by the evocative stillness of photographers like Petra Collins or Nan Goldin.",
    "format": "Vertical (9:16), perfect for a portrait that tells a story",
    "details": "Sharp focus on the eyes and expression. Textural emphasis on skin, silk, and the wall. Background is clean, almost austere, holding the emotional weight. No explicit debris, only the subtle evidence of a life lived."
  },
  "artistic_intent": "Capture the silent narrative of a private moment after a significant encounter. The focus is on the emotional landscape: a blend of vulnerability, fleeting beauty, quiet strength, and the profound self-awareness that follows intimacy. It's a portrait of an inner turning point."
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
