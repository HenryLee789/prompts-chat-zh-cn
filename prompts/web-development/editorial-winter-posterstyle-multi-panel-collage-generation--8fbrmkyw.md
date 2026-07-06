# 社论冬季海报风格多面板拼贴生成

## 中文说明

使用严格的参考图像生成图像拼贴，遵循详细的服装、场景和美学规范。

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
  “元协议”：{
    “参考遵守”：{
      "instruction": "使用提供的男性脸部照片作为严格的参考图像。",
      "tolerance": "零偏差",
      "parameters": "100% 准确地保留准确的男性面部比例、皮肤纹理、表情、年龄和身份。",
      "stylization_constraint": "不得以任何方式美化、女性化或改变面部特征。"
    },
    "format_style": "编辑冬季海报风格的多面板拼贴",
    "aesthetic_quality": "自发的 iPhone 摄影（坦诚、舒适、真实）",
    "global_textures": "柔软的降雪，微妙的模拟颗粒，轻微的手持缺陷"
  },
  “一致的元素”：{
    “主题衣柜”：{
      "outerwear": "黑色剪裁羊毛大衣",
      "top": "厚针织毛衣（深色中性色调）",
      "bottom": "经典面料长裤",
      "footwear": "冬季皮靴",
      "style_notes": "阳刚、优雅、低调的冬季风格"
    },
    “主设备”：{
      “型号”：“iPhone 17 Pro Max”，
      “颜色”：“银色”，
      "usage": "主体在相关帧中持有"
    },
    “颜色调色板”：[
      “温暖的琥珀”，
      “炭黑”，
      “深棕色”，
      “柔和的冬季灰色”
    ]
  },
  “布局配置”：{
    “panel_1_top_left”：{
      "scene_type": "黄昏时在冬季街道上拍摄的反光商店橱窗",
      "lighting_and_atmosphere": "路灯、微弱的节日灯光、冷空气凝结、外套面料上的温暖亮点",
      "subject_action": "拿着手机部分遮住脸部",
      "optical_effects": "路过的行人呈现出模糊的轮廓、分层反射、自然玻璃变形",
      “心情”：“安静、内省、都市阳刚”
    },
    “panel_2_top_right”：{
      "scene_type": "巴黎咖啡馆外观肖像",
      "location_detail": "巴黎街头咖啡馆的户外餐桌",
      "camera_angle": "近距离、略低的角度展现男性魅力",
      "subject_pose": "自信地坐着，放松的姿势，一只手臂放在桌子上",
      "action": "拿着威士忌酒杯喝一口",
      "wardrobe_visibility": "黑色外套打开，针织毛衣和布料长裤清晰可见",
      "motion_dynamics": "小雪飘落，背景行人轻轻运动模糊",
      "lens_characteristics": "自然的手持视角，具有微妙的深度压缩"
    },
    “panel_3_bottom_right”：{
      "scene_type": "在城市人行道上亲密的头顶自拍",
      “lighting”：“温暖的街道照明对比寒冷的夜晚空气”，
      “道具”：{
        "held_item": "外卖咖啡杯",
        "accessories": "有线耳机可见"
      },
      "texture_focus": "细致的羊毛大衣纹理、针织毛衣纤维、细微的皮肤纹理",
      “心情”：“孤独、反思的冬夜能量”
    }
  },
  “图形覆盖”：{
    "element": "Minimal Spotify 风格的迷你播放器",
    "content": "飞行 - 诅咒",
    "style": "扁平、干净的用户界面，没有阴影",
    "position": "巧妙地漂浮在拼贴画的中心"
  }
}

输出要求：
- 按原 prompt 要求的格式输出。
```

---

## English Original

### Title

Editorial Winter Poster–Style Multi-Panel Collage Generation

### Description

Generate an image collage using a strict reference image, adhering to detailed wardrobe, scene, and aesthetic specifications.

### Prompt

```md
{
  "meta_protocols": {
    "reference_adherence": {
      "instruction": "Use the provided male face photo as a strict reference_image.",
      "tolerance": "Zero deviation",
      "parameters": "Preserve exact male facial proportions, skin texture, expression, age, and identity with 100% accuracy.",
      "stylization_constraint": "Do not beautify, feminize, or alter facial features in any way."
    },
    "format_style": "Editorial winter poster–style multi-panel collage",
    "aesthetic_quality": "Spontaneous iPhone photography (candid, cozy, realistic)",
    "global_textures": "Soft snowfall, subtle analog grain, slight handheld imperfections"
  },
  "consistent_elements": {
    "subject_wardrobe": {
      "outerwear": "Black tailored wool overcoat",
      "top": "Thick knit sweater (dark neutral tone)",
      "bottom": "Classic fabric trousers",
      "footwear": "Winter leather boots",
      "style_notes": "Masculine, elegant, understated winter style"
    },
    "primary_device": {
      "model": "iPhone 17 Pro Max",
      "color": "Silver",
      "usage": "Held by subject in relevant frames"
    },
    "color_palette": [
      "Warm ambers",
      "Charcoal blacks",
      "Deep browns",
      "Muted winter greys"
    ]
  },
  "layout_configuration": {
    "panel_1_top_left": {
      "scene_type": "Reflective shop-window shot on a winter street at dusk",
      "lighting_and_atmosphere": "Street lamps, faint holiday lights, cold air condensation, warm highlights on coat fabric",
      "subject_action": "Holding phone partially covering face",
      "optical_effects": "Passing pedestrians as blurred silhouettes, layered reflections, natural glass distortion",
      "mood": "Quiet, introspective, urban masculinity"
    },
    "panel_2_top_right": {
      "scene_type": "Parisian café exterior portrait",
      "location_detail": "Outdoor table at a Paris street café",
      "camera_angle": "Close, slightly low angle for masculine presence",
      "subject_pose": "Seated confidently, relaxed posture, one arm resting on the table",
      "action": "Holding a whiskey glass mid-sip",
      "wardrobe_visibility": "Black coat open, knit sweater and fabric trousers clearly visible",
      "motion_dynamics": "Light snow falling, background pedestrians softly motion-blurred",
      "lens_characteristics": "Natural handheld perspective with subtle depth compression"
    },
    "panel_3_bottom_right": {
      "scene_type": "Intimate overhead selfie on a city sidewalk",
      "lighting": "Warm street lighting contrasting cold night air",
      "props": {
        "held_item": "Takeaway coffee cup",
        "accessories": "Wired earphones visible"
      },
      "texture_focus": "Detailed wool coat texture, knit sweater fibers, subtle skin grain",
      "mood": "Lonely, reflective winter night energy"
    }
  },
  "graphic_overlay": {
    "element": "Minimal Spotify–style mini player",
    "content": "Flying - Anathema",
    "style": "Flat, clean UI, no shadows",
    "position": "Floating subtly across the center of the collage"
  }
}
```

---

## Source

[https://github.com/f/prompts.chat](https://github.com/f/prompts.chat)
