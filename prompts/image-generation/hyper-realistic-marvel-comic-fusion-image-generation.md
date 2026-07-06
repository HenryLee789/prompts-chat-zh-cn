# 超现实漫威漫画融合图像生成

## 中文说明

用于让 AI 围绕「超现实漫威漫画融合图像生成」执行图像生成提示词设计任务。它会保留原始角色、任务目标、约束条件和输出要求，适合复制给图像生成模型，控制主体、构图、风格和画面细节。

## 使用场景

* 生成可直接用于图像模型的中文画面提示词
* 描述主体、构图、光线、风格和画质要求
* 把创意概念转化为稳定的视觉生成指令
* 围绕 AI Tools、Creative Writing、Midjourney 等主题生成结构化结果

## 适用人群

* 设计师
* AI 绘图用户
* 内容创作者

## 中文 Prompt

```md
{
  “图像生成”：{
    “要求”：{
      “面部保护”：{
        “保留原始”：正确，
        "accuracy_level": "与参考值 100% 相同",
        “详细信息”：[
          “真实的面部比例”，
          “精确的皮肤纹理”，
          “真实的眼睛形状和颜色”，
          “不化妆的自然妆容”
        ]
      },
      “姿势”：{
        “match_reference_pose”：正确，
        “描述”：“挺胸肖像，脸向前，轻微向右倾斜。”
      },
      “照明”：{
        “match_reference_lighting”：正确，
        "type": "柔和的漫射室内照明",
        "direction": "左前",
        "shadows": "柔和的阴影",
        "background_tone": "中性，略带蓝色调"
      }
    },

    “主题”：{
      “性别”：“男”，
      “年龄”：“孩子”，
      “发型”：{
        “match_reference”：正确，
        “description”：“与参考发型相同，自然适合小男孩”
      },
      "express": "中性，略带好奇",
      “服装”：{
        "top": "复仇者风格西装上衣（儿童版），精致科技质感面料",
        “accessory”：“胸前有微型复仇者徽章”
      }
    },

    “组成”：{
      "frame": "胸部肖像",
      "orientation": "正面稍微向右倾斜",
      "style": "超现实，具有真实/喜剧效果"
    },

    “特殊效果”：{
      “分割效果”：{
        "type": "不规则中心撕裂",
        "edges": "白色有角度的撕纸外观",
        “description”：“图像看起来从中间被撕裂”
      },

      “现实的一面”：{
        "background": "柔和、中性、偏蓝色的环境",
        “过滤器”：[
          “软模拟颗粒”，
          “轻复古质感”，
          “降低饱和度”，
          “薄膜的细微缺陷”
        ],
        “覆盖”：[
          “小全息 HUD 图标（钢铁侠风格）”，
          “迷你美国队长盾牌涂鸦”，
          “小雷神锤素描”，
          “程式化的蓝色科技火花”
        ]
      },

      “图解侧”：{
        "art_style": "受漫威启发的大胆漫画风格插图",
        "color_palette": "充满活力、高对比度的超级英雄调色板",
        "hair": "与现实一半的颜色相同，但风格鲜明",
        “眼睛”：“稍微夸张地强调英雄气概”，
        "background": "动态红蓝漫画爆裂图案",
        “装饰品”：{
          “元素”：[
            《赤壁钢铁侠飞翔》，
            “像素风格的美国队长”，
            “小卡通闪电”，
            “漫画风格的‘战俘！’和“嗖嗖！”文本气泡”，
            “漂浮的彩色复仇者联盟符号”
          ]
        }
      }
    },

    “审美”：{
      "overall_tone": "英勇、充满活力、略显复古",
      "lighting_consistency": "完全匹配参考",
      "skin_texture_realism": "高",
      "blending_quality": "平滑过渡，撕裂边缘清晰"
    },

    “输出”：{
      "风格": "超写实+漫威漫画融合",
      “质量”：“超高分辨率”，
      “过滤器”：[
        “微妙的模拟电影”，
        “软粒”
      ]
    }
  }
}
```

---

## English Original

### Title

Hyper-Realistic Marvel Comic Fusion Image Generation

### Description



### Prompt

```md
{
  "image_generation": {
    "requirements": {
      "face_preservation": {
        "preserve_original": true,
        "accuracy_level": "100% identical to reference",
        "details": [
          "real facial proportions",
          "exact skin texture",
          "true eye shape and color",
          "natural look without makeup"
        ]
      },
      "pose": {
        "match_reference_pose": true,
        "description": "Chest-up portrait, face forward with a gentle rightward tilt."
      },
      "lighting": {
        "match_reference_lighting": true,
        "type": "soft diffused indoor lighting",
        "direction": "front-left",
        "shadows": "gentle soft shadows",
        "background_tone": "neutral with slight bluish tint"
      }
    },

    "subject": {
      "gender": "male",
      "age": "child",
      "hairstyle": {
        "match_reference": true,
        "description": "same hairstyle as reference, adapted naturally for a young boy"
      },
      "expression": "neutral, slightly curious",
      "clothing": {
        "top": "Avengers-style suit top (child version), subtle tech-textured fabric",
        "accessory": "miniature Avengers emblem on the chest"
      }
    },

    "composition": {
      "frame": "chest-up portrait",
      "orientation": "frontal with slight rightward tilt",
      "style": "hyper-realistic with split real/comic effect"
    },

    "special_effects": {
      "split_effect": {
        "type": "irregular centered tear",
        "edges": "white angled torn-paper look",
        "description": "image looks ripped down the middle"
      },

      "realistic_side": {
        "background": "soft, neutral, bluish environment",
        "filters": [
          "soft analog grain",
          "light vintage texture",
          "reduced saturation",
          "subtle film imperfections"
        ],
        "overlays": [
          "small holographic HUD icons (Iron Man–style)",
          "mini Captain America shield doodle",
          "tiny Thor hammer sketch",
          "stylized blue tech sparks"
        ]
      },

      "illustrated_side": {
        "art_style": "bold comic-style illustration inspired by Marvel",
        "color_palette": "vibrant, high-contrast superhero palette",
        "hair": "same color as realistic half but stylized sharply",
        "eyes": "slightly exaggerated heroic emphasis",
        "background": "dynamic red-blue comic burst pattern",
        "decorations": {
          "elements": [
            "chibi Iron Man flying",
            "pixel-style Captain America",
            "small cartoon lightning bolts",
            "comic-style 'POW!' and 'WHOOSH!' text bubbles",
            "floating colorful Avengers symbols"
          ]
        }
      }
    },

    "aesthetic": {
      "overall_tone": "heroic, energetic, lightly vintage",
      "lighting_consistency": "perfectly matching the reference",
      "skin_texture_realism": "high",
      "blending_quality": "smooth transition with crisp tear edge"
    },

    "output": {
      "style": "hyper-realistic + Marvel comic fusion",
      "quality": "ultra-high-resolution",
      "filters": [
        "subtle analog film",
        "soft grain"
      ]
    }
  }
}

```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
