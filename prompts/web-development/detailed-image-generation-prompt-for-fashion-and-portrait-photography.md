# 时尚和人像摄影的详细图像生成提示词

## 中文说明

用于生成详细的时尚和肖像摄影图像的综合指南，突出显示主题人口统计、服装细节、配饰、姿势和照明条件等特定属性。

## 使用场景

* 生成 Web 应用、页面、组件或调试方案
* 明确技术栈、交互、布局和交付标准
* 围绕 React、Next.js、TypeScript、API 和部署等任务输出可执行指令
* 围绕 Art 等主题生成结构化结果

## 适用人群

* Web 开发者
* 前端工程师
* 产品经理
* 开发者

## 中文 Prompt

```md
{
  “图像生成提示”：{
    “主题”：{
      “人口统计”：“年轻女子”，
      “头发”：{
        "color": "草莓金发/金色金发",
        "style": "长、大量、分层、略显凌乱的波浪",
        "parting": "中间部分"
      },
      “脸”：{
        "makeup": "带翼的黑色眼线、睫毛膏、轮廓分明的眉毛、鼻子和脸颊上的荧光笔、光泽的粉红色嘴唇",
        “表情”：“中性到轻微撅嘴，专注于镜面反射”
      },
      “体格”：“苗条、健康、棕褐色肤色”
    },
    “服装”：{
      “外套”：{
        "item": "人造毛皮夹克",
        "color": "深红色/红色混合色调",
        “texture”：“毛茸茸的、毛绒的、蓬松的”
      },
      “顶部”：{
        "item": "紧身胸衣",
        "style": "无肩带、紧身胸衣式、短款",
        "material": "深红色缎子或略带光泽的织物",
        “fit”：“紧身、结构化的紧身胸衣”
      },
      “底部”：{
        “商品”：“牛仔裤”，
        "color": "浅蓝色水洗",
        "fit": "低层、紧身",
        "details": "可见缝线，前袋"
      }
    },
    “配件”：{
      “珠宝”：[
        “带小吊坠的细金链项链”，
        “右手无名指上的金戒指”
      ],
      “腰带”：{
        “材质”：“黑色皮革”，
        "buckle": "矩形金色/金属框架"
      },
      “技术”：{
        "item": "智能手机（iPhone 风格）",
        "case_color": "黑色",
        "holding_style": "用右手垂直握住脸前"
      },
      “美丽细节”：{
        “指甲”：“短，漆成鲜红色”
      }
    },
    “姿势和框架”：{
      "type": "镜子自拍",
      "posture": "站立，臀部轻微倾斜（contrapposto），中腹部暴露",
      "framing": "大腿向上拍摄，纵向"
    },
    “设置和照明”：{
      "location": "室内（可能是卧室或走廊）",
      “背景元素”：{
        “左”：“带百叶窗的深色窗户，瞥见床/家具上有白色杂乱”，
        "right": "白色门框/门框，素墙"
      },
      “照明”：{
        “quality”：“温暖、定向的人造光”，
        "source": "来自右侧",
        "shadows": "在躯干和背景的左侧投射阴影"
      }
    }
  }
}
```

---

## English Original

### Title

Detailed Image Generation Prompt for Fashion and Portrait Photography

### Description

A comprehensive guide for generating detailed fashion and portrait photography images, highlighting specific attributes such as subject demographics, apparel details, accessories, pose, and lighting conditions.

### Prompt

```md
{
  "image_generation_prompt": {
    "subject": {
      "demographics": "Young woman",
      "hair": {
        "color": "Strawberry blonde / Golden blonde",
        "style": "Long, voluminous, layered, slightly messy waves",
        "parting": "Middle part"
      },
      "face": {
        "makeup": "Winged black eyeliner, mascara, defined eyebrows, highlighter on nose and cheeks, glossy pink lips",
        "expression": "Neutral to slight pout, focused on mirror reflection"
      },
      "physique": "Slender, fit, tan skin tone"
    },
    "apparel": {
      "outerwear": {
        "item": "Faux fur jacket",
        "color": "Crimson/red mixed tones",
        "texture": "Shaggy, plush, voluminous"
      },
      "top": {
        "item": "Corset top",
        "style": "Strapless, bustier-style, cropped",
        "material": "Crimson satin or slightly shiny fabric",
        "fit": "Tight, structured bodice"
      },
      "bottoms": {
        "item": "Jeans",
        "color": "Light blue wash",
        "fit": "Low-rise, tight fit",
        "details": "Visible stitching, front pockets"
      }
    },
    "accessories": {
      "jewelry": [
        "Thin gold chain necklace with small pendant",
        "Gold ring on right ring finger"
      ],
      "belt": {
        "material": "Black leather",
        "buckle": "Rectangular gold/metallic frame"
      },
      "tech": {
        "item": "Smartphone (iPhone style)",
        "case_color": "Black",
        "holding_style": "Held vertically in front of face with right hand"
      },
      "beauty_details": {
        "nails": "Short, painted bright red"
      }
    },
    "pose_and_framing": {
      "type": "Mirror selfie",
      "posture": "Standing, slight hip tilt (contrapposto), midriff exposed",
      "framing": "Thigh-up shot, portrait orientation"
    },
    "setting_and_lighting": {
      "location": "Indoors (likely a bedroom or hallway)",
      "background_elements": {
        "left": "Dark window with blinds, glimpse of bed/furniture with white clutter",
        "right": "White door frame/jamb, plain wall"
      },
      "lighting": {
        "quality": "Warm, directional artificial light",
        "source": "Coming from the right side",
        "shadows": "Casts shadows on the left side of the torso and background"
      }
    }
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
