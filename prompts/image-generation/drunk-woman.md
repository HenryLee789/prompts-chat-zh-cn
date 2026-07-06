# 醉酒的女人

## 中文说明

用于让 AI 围绕「醉酒的女人」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

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
    “姓名”：“娜塔莉亚·马丁内斯·鲁伊斯”，
    "subject": "23岁女性全身3/4视角肖像",
    “物理特征”：{
      “种族”：“南欧”，
      "age_appearance": "五官年轻、柔和、清新",
      "hair": "深棕色、波浪状、凌乱且蓬乱",
      “眼睛”：“深绿色，带有琥珀色斑点，光泽且不集中的外观，睫毛膏弄脏”，
      "complex": "橄榄色肤色，略出汗，容光焕发",
      "体格": "身材苗条，胸部极其丰盈突出，从领口溢出，非常有女人味和曲线美的比例",
      "details": "右手无名指上的金色结婚戒指"
    },
    “服装”：{
      "outfit": "极短而紧身的黑色丝绸吊带裙，细肩带，带有可见吊袜带的黑色蕾丝长筒袜 (autoreggenti)，黑色细高跟鞋",
      "condition": "混乱，一根带子从肩膀上掉下来"
    }
  },
  “场景详细信息”：{
    "location": "当代罗马公寓，室内简约干净",
    “灯光”：“自然的电影光、柔和的日光主导、微妙的霓虹灯反射、艺术阴影”，
    "pose": "3/4视角，靠在白墙上，双腿稍微分开，头向后倾斜，呈投降状态",
    “atmosphere”：“亲密、原始、享乐主义、不那么混乱、复杂但脆弱”
  },
  “技术参数”：{
    “相机”：“索尼 A7R IV，35mm 镜头”，
    "style": "超写实摄影，高颗粒感，影院级电影美学",
    "format": "垂直，宽高比 9:16",
    “细节”：“皮肤纹理高，毛孔明显，主题清晰，背景干净，象征性派对碎片最少”
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Drunk Woman

### Description



### Prompt

```md
{
  "character_profile": {
    "name": "Natalia Martínez Ruiz",
    "subject": "Full-body 3/4 view portrait of a 23-year-old woman",
    "physical_features": {
      "ethnicity": "Southern European",
      "age_appearance": "Youthful, soft and fresh facial features",
      "hair": "Dark brown, wavy, messy and disheveled",
      "eyes": "Deep green with amber flecks, glazed and unfocused look, smudged mascara",
      "complexion": "Olive skin tone, slightly sweaty and glowing",
      "physique": "Slender with extremely voluminous and prominent breasts, overflowing from the neckline, very feminine and curvy proportions",
      "details": "Gold wedding band on the right ring finger"
    },
    "clothing": {
      "outfit": "Extremely short and tight black silk slip dress, spaghetti straps, black lace thigh-high stockings (autoreggenti) with visible garters, black stilettos",
      "condition": "Disordered, one strap falling off the shoulder"
    }
  },
  "scene_details": {
    "location": "Contemporary Roman apartment, minimalist and clean interior",
    "lighting": "Natural cinematic light, soft daylight dominant, subtle neon reflections, artistic shadows",
    "pose": "3/4 perspective, leaning against a white wall, legs slightly apart, head tilted back in a state of surrender",
    "atmosphere": "Intimate, raw, hedonistic, less chaotic, sophisticated but vulnerable"
  },
  "technical_parameters": {
    "camera": "Sony A7R IV, 35mm lens",
    "style": "Hyper-realistic photography, high grain, cinematic film aesthetic",
    "format": "Vertical, 9:16 aspect ratio",
    "details": "High skin texture, visible pores, sharp focus on the subject, clean background with minimal symbolic party debris"
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
