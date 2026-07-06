# 伊斯坦布尔旅游杂志

## 中文说明

用于让 AI 围绕「伊斯坦布尔旅游杂志」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 Travel、Art、Creative Writing 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  "title": "伊斯坦布尔旅游杂志",
  "artwork_style": "充满活力、孩子般的蜡笔风格垂直 (9:16) 插图",
  "background": "柔和、温暖的浅色调（例如淡黄色）",
  "color_palette": "明亮的红色、蓝色、绿色和其他欢快的颜色",
  "atmosphere": "舒适、有趣的旅行氛围",
  “主场景”：{
    "title": "蜿蜒曲折的旅行路线",
    "style": "连接多个位置的箭头和虚线",
    “行程”：{
      “城市”：“伊斯坦布尔”，
      "duration": "7天行程",
      “停止”：[
        {
          “日”：1，
          "景点": "圣索菲亚大教堂和蓝色清真寺",
          "description": "探索巨大、色彩缤纷的清真寺，它们看起来就像童话故事中的城堡！"
        },
        {
          “日”：2，
          "景点": "托普卡普皇宫",
          "description": "参观苏丹的故居，一座巨大的宫殿，里面珠宝闪闪发光！"
        },
        {
          “日”：3，
          "景点": "大巴扎和香料巴扎",
          "description": "迷失在一个巨大的迷宫般的商店里，灯光闪闪，气味芬芳！"
        },
        {
          “日”：4，
          “景点”：“博斯普鲁斯海峡游轮”，
          “description”：“乘坐大船航行于欧洲和亚洲两大洲之间！”
        },
        {
          “日”：5，
          “景点”：“加拉达塔”，
          "description": "爬上一座超高塔，从空中俯瞰伊斯坦布尔的一切！"
        },
        {
          “日”：6，
          "吸引力": "王子群岛",
          "description": "在没有汽车的岛上乘坐马车！"
        },
        {
          “日”：7，
          “景点”：“土耳其软糖和果仁蜜饼”，
          "description": "回家之前吃到美味又粘又甜的土耳其糖果。真是太好了！"
        }
      ]
    }
  },
  “周围元素”：{
    “字符”：[
      {
        "description": "一个孩子拿着 simit（美味的土耳其百吉饼）"
      },
      {
        "description": "一个背着背包、戴着土耳其毡帽的小冒险家"
      }
    ],
    “地标”：[
      “可爱的圆形圣索菲亚大教堂，有一张笑脸”，
      “一座高大多彩的加拉达塔”，
      “一座看起来友好的博斯普鲁斯海峡大桥”
    ],
    “招牌”：[
      “不要在大巴扎迷路！”,
      “前方有海鸥！”,
      “美味的土耳其软糖就这样！”
    ],
    “短语”：[
      “伊斯坦布尔旅行记忆解锁！”,
      “伊斯坦布尔美食冒险！”,
      “接下来去哪里？”
    ],
    “食物图标”：[
      “卡通土耳其冰淇淋甜筒（dondurma）”，
      “一块微笑的果仁蜜饼”，
      “一盘色彩缤纷的土耳其软糖（lokum）”
    ],
    “感叹号”：[
      “我不知道伊斯坦布尔这么有趣！”,
      “我还想再坐一次渡轮呢！”
    ]
  },
  “整体风格”：{
    "art_style": "蜡笔/儿童手绘旅行日记风格",
    "palette": "明亮、温暖、多彩的调色板",
    "composition": "舒适但充实而活泼的构图",
    "emphasis": "探索的乐趣",
    "font": "可爱的手写字体",
    “feeling”：“一个小孩子的有趣的旅行日记条目”
  }
}
```

---

## English Original

### Title

Istanbul Travel Journal

### Description



### Prompt

```md
{
  "title": "Istanbul Travel Journal",
  "artwork_style": "vibrant, child-like crayon-style vertical (9:16) illustration",
  "background": "soft, warm light-toned (e.g., pale yellow)",
  "color_palette": "bright reds, blues, greens, and other cheerful colors",
  "atmosphere": "cozy, playful travel atmosphere",
  "main_scene": {
    "title": "Winding, Zigzagging Travel Route",
    "style": "arrows and dotted lines connecting multiple locations",
    "itinerary": {
      "city": "Istanbul",
      "duration": "7-Day Trip",
      "stops": [
        {
          "day": 1,
          "attraction": "Hagia Sophia & Blue Mosque",
          "description": "Exploring giant, colorful mosques that look like castles from a fairytale!"
        },
        {
          "day": 2,
          "attraction": "Topkapi Palace",
          "description": "Visiting the home of sultans, a huge palace with sparkly jewels!"
        },
        {
          "day": 3,
          "attraction": "Grand Bazaar & Spice Bazaar",
          "description": "Getting lost in a giant maze of shops with sparkly lamps and sweet smells!"
        },
        {
          "day": 4,
          "attraction": "Bosphorus Cruise",
          "description": "Sailing on a big boat between two continents, Europe and Asia!"
        },
        {
          "day": 5,
          "attraction": "Galata Tower",
          "description": "Climbing a super tall tower to see all of Istanbul from the sky!"
        },
        {
          "day": 6,
          "attraction": "Princes' Islands",
          "description": "Riding in a horse-drawn carriage on an island with no cars!"
        },
        {
          "day": 7,
          "attraction": "Turkish Delight & Baklava",
          "description": "Eating yummy, sticky, and sweet Turkish candies before we go home. What a treat!"
        }
      ]
    }
  },
  "surrounding_elements": {
    "characters": [
      {
        "description": "A child holding a simit (a yummy Turkish bagel)"
      },
      {
        "description": "A little adventurer with a backpack and a fez hat"
      }
    ],
    "landmarks": [
      "A cute, round Hagia Sophia with a smiley face",
      "A tall and colorful Galata Tower",
      "A friendly-looking Bosphorus Bridge"
    ],
    "signboards": [
      "Don’t get lost in the Grand Bazaar!",
      "Seagulls ahead!",
      "Yummy Turkish Delight this way!"
    ],
    "phrases": [
      "Istanbul travel memories unlocked!",
      "Istanbul food adventure!",
      "Where to next?"
    ],
    "food_icons": [
      "A cartoonish Turkish ice cream cone (dondurma)",
      "A smiling piece of baklava",
      "A colorful plate of Turkish delight (lokum)"
    ],
    "exclamations": [
      "I didn’t know Istanbul was so fun!",
      "I want to ride the ferry again!"
    ]
  },
  "overall_style": {
    "art_style": "Crayon / children’s hand-drawn travel diary style",
    "palette": "Bright, warm, colorful palette",
    "composition": "Cozy but full and lively composition",
    "emphasis": "The joy of exploring",
    "font": "Cute handwritten font",
    "feeling": "A young child’s fun travel-journal entry"
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
