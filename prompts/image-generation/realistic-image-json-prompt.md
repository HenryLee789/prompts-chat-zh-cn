# 逼真的图像 JSON 提示词

## 中文说明

用于生成逼真图像的基于 JSON 的提示。该提示允许用户指定各种参数和约束，以使用AI技术创建详细且逼真的图像。对于希望通过高质量视觉效果增强其项目的艺术家、设计师和开发人员来说，它是理想的选择。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 image-generation、image-prompt 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “元指令”：{
    "image_category": "电影场景",
    "core_prompt": "从昏暗的铁匠铺内拍摄的电影镜头，向外望向半开的卷帘门。一位中年师傅和他年轻的徒弟正在一张铺着报纸的废木桌上吃着传统的土耳其早餐。早晨的阳光透过 80% 打开的百叶窗射入，形成美丽的镜头光晕，照亮了空气中的灰尘颗粒。师傅在说话，徒弟带着礼貌的好奇心听着。",
    “negative_prompt”：“干净的原始衣服，一尘不染的环境，现代家具，柔软的未加工的手，凌乱的食物，曝光过度，完全打开的快门，人造工作室照明，卡通，3D渲染”
  },
  “叙述和目的”：{
    "story_or_concept": "这是指导和传统的时刻。在工业现场辛苦工作一天之前，学徒在安静的清晨早餐中恭敬地聆听师傅的讲话。",
    "mood_and_vibe": "真实、温暖、尊重、原始、勤奋、宁静的早晨。"
  },
  “主题”：[
    {
      “存在”：“主要”，
      “类型”：“人类”，
      "description": "中年铁匠师傅。",
      “动态属性”：{
        “如果人类”：{
          "role_and_demgraphics": "中年男性，留着胡茬，戴着老花镜，胸前挂着颈带。",
          "emotion_and_expression": "经验丰富，冷静，说话权威而热情。",
          "action_and_wardrobe": "穿着稍微脏兮兮的机械工作服。手上没有污垢，但看起来很磨损、长满老茧、饱经风霜。坐着吃早餐。"
        }
      }
    },
    {
      “存在”：“主要”，
      “类型”：“人类”，
      "description": "年轻铁匠学徒。",
      “动态属性”：{
        “如果人类”：{
          "role_and_demgraphics": "年轻男性，外表谦逊。",
          "emotion_and_expression": "好奇、礼貌、尊重、积极倾听。",
          "action_and_wardrobe": "穿着略显脏乱的机械工作服。双手干净，但有体力劳动的痕迹。坐在桌边，微微倾身聚精会神地听着。"
        }
      }
    }
  ],
  “环境和世界建筑”：{
    "setting_type": "室内",
    "location_details": "工业区一家简陋的机械师和铁匠铺内。金属卷帘门打开了 80%，露出外面明亮的早晨。",
    "time_of_day_and_weather": "清晨，日出，外面天气晴朗。",
    “道具和支持元素”：[
      “用废木料制成的矮咖啡桌”，
      “报纸像桌布一样铺开”，
      “含有西红柿、黑橄榄、白羊奶酪和黄瓜的镀铬板”，
      “中间有一个金属锅，里面装着‘menemen’（土耳其西红柿炒鸡蛋）”，
      “锅底下的定制三脚架由焊接废铁片制成”，
      “金属刨花有机地散落在车间地板上”
    ]
  },
  “相机和镜头”：{
    "shot_scale": "medium_shot",
    "camera_angle": "eye_level",
    "lens_focal_length": "35mm",
    "depth_of_field": "浅景深，主体和早餐桌清晰聚焦，背景和外部轻微模糊。"
  },
  “照明和气氛”：{
    "lighting_source": "自然",
    "lighting_quality": "high_contrast",
    "atmospheric_effects": "早晨的阳光射入黑暗的商店，照亮空气中的灰尘颗粒，来自太阳的柔和的镜头眩光。"
  },
  “构图和布局”：{

"framing_rule": "rule_of_thirds",
    “功能空间”：“无”
  },
  “post_processing_and_medium”：{
    "medium": "数码摄影",
    "color_grading": "电影色彩分级，内部温暖的泥土色调与外部明亮的晨光形成鲜明对比，微妙的青色和橙色色调。",
    "texture_and_grain": "微妙的胶片颗粒，手、木材和金属上的高度详细的纹理。"
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Realistic İmage JSON Prompt

### Description

A JSON-based prompt for generating realistic images. This prompt allows users to specify various parameters and constraints to create detailed and lifelike images using AI technologies. It is ideal for artists, designers, and developers looking to enhance their projects with high-quality visuals.

### Prompt

```md
{
  "meta_instruction": {
    "image_category": "cinematic_scene",
    "core_prompt": "A cinematic shot taken from inside a dimly lit blacksmith shop looking outwards towards a partially open rolling shutter. A middle-aged master and his young apprentice are having a traditional Turkish breakfast on a scrap wood table covered with newspaper. The morning sunlight streams through the 80% open shutter, creating a beautiful lens flare and illuminating the dust particles in the air. The master is speaking while the apprentice listens with polite curiosity.",
    "negative_prompt": "clean pristine clothes, spotless environment, modern furniture, soft unworked hands, messy food, overexposed, fully open shutter, artificial studio lighting, cartoonish, 3d render"
  },
  "narrative_and_purpose": {
    "story_or_concept": "A moment of mentorship and tradition. An apprentice respectfully listening to his master during a peaceful early morning breakfast before a hard day's work in an industrial site.",
    "mood_and_vibe": "Authentic, warm, respectful, raw, industrious, serene morning."
  },
  "subjects": [
    {
      "presence": "primary",
      "type": "human",
      "description": "Middle-aged blacksmith master.",
      "dynamic_attributes": {
        "if_human": {
          "role_and_demographics": "Middle-aged male, stubble beard, wearing reading glasses resting on his chest with a neck strap.",
          "emotion_and_expression": "Experienced, calm, speaking with authority and warmth.",
          "action_and_wardrobe": "Wearing slightly dirty mechanic overalls. Hands are clean from dirt but look deeply worn, calloused, and weathered. Sitting and eating breakfast."
        }
      }
    },
    {
      "presence": "primary",
      "type": "human",
      "description": "Young blacksmith apprentice.",
      "dynamic_attributes": {
        "if_human": {
          "role_and_demographics": "Young male, humble appearance.",
          "emotion_and_expression": "Curious, polite, respectful, actively listening.",
          "action_and_wardrobe": "Wearing slightly dirty mechanic overalls. Hands are clean but show signs of manual labor. Sitting at the table, leaning in slightly to listen attentively."
        }
      }
    }
  ],
  "environment_and_worldbuilding": {
    "setting_type": "indoor",
    "location_details": "Inside a gritty mechanic and blacksmith shop in an industrial zone. A metal rolling shutter door is 80% open, revealing the bright morning outside.",
    "time_of_day_and_weather": "Early morning, sunrise, clear weather outside.",
    "props_and_supporting_elements": [
      "Low coffee table made from scrap wood",
      "Newspaper spread as a tablecloth",
      "Chrome plates containing tomatoes, black olives, white feta cheese, and cucumbers",
      "A metal pan of 'menemen' (Turkish scrambled eggs with tomatoes) in the center",
      "A custom trivet under the pan made from welded scrap iron pieces",
      "Metal shavings scattered organically on the shop floor"
    ]
  },
  "camera_and_lens": {
    "shot_scale": "medium_shot",
    "camera_angle": "eye_level",
    "lens_focal_length": "35mm",
    "depth_of_field": "Shallow depth of field, sharp focus on the subjects and the breakfast table, background and outside lightly blurred."
  },
  "lighting_and_atmosphere": {
    "lighting_source": "natural",
    "lighting_quality": "high_contrast",
    "atmospheric_effects": "Morning sun rays streaming into the dark shop, illuminated airborne dust particles, gentle lens flare from the sun."
  },
  "composition_and_layout": {
    "framing_rule": "rule_of_thirds",
    "functional_space": "none"
  },
  "post_processing_and_medium": {
    "medium": "digital_photography",
    "color_grading": "Cinematic color grading, warm earthy tones inside contrasting with the bright morning light outside, subtle teal and orange hues.",
    "texture_and_grain": "Subtle film grain, highly detailed textures on hands, wood, and metal."
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
