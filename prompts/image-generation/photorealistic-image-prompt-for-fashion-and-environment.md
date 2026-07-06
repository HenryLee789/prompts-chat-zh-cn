---
id: "cmjy8dpl70001kv046ap6tbsf"
slug: "photorealistic-image-prompt-for-fashion-and-environment"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/photorealistic-image-prompt-for-fashion-and-environment"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "a5e00eb5d484881f6aaa5b31ac7135cfb6bfe629a24bdefbdeb8ba8d82f1e4e1"
upstream_updated_at: "2026-01-03T11:56:37.516Z"
---
# 时尚和环境的逼真图像提示

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[photorealistic-image-prompt-for-fashion-and-environment](https://prompts.chat/prompts/photorealistic-image-prompt-for-fashion-and-environment)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

这个提示词用于图像生成场景，可帮助用户把任务目标、角色设定和输出要求一次性说明清楚。

## 使用场景

- 用于图像生成相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。

## 适用人群

- 设计师
- AI 绘图用户
- 内容创作者

## 中文 Prompt 正文

```md
{
  “图像提示”：{
    “主题”：{
      "type": "与参考图像身份匹配的成年女性 (21+)",
      "appearance": "白皙的皮肤，长长的深色凌乱的头发，带有微妙的红色亮点，鼻子穿孔",
      "表情": "放松，直视镜头，嘴巴微张",
      "pose": "中景；双臂举起；双手穿过头发；肘部向外；自信、随意的姿势"
    },
    “服装”：{
      "clothing": "Türkiye（土耳其）国家足球队球衣",
      "details": "官方风格的土耳其国家队球衣（主场球衣外观）：深红色底色，带有微妙的同色系织物图案，干净的白色口音，圆领。右胸有白色耐克旋风，左胸有土耳其徽章（带有新月和星星的 TFF 徽章）。没有俱乐部徽章，没有俱乐部赞助商徽标，没有“渣打银行”，没有“Expedia”。面料看起来像现代性能聚酯纤维，略有纹理，运动时产生自然皱纹。",
      "accessories": "手腕上的黑色发带"
    },
    “环境”：{
      "location": "在船或游艇内，靠近窗框的位置",
      “背景”：“阳光明媚的天空下明亮的蓝色海洋；透过窗户可以看到远处的岩石海岸线和悬崖；窗框清晰可见，有助于从船内拍摄场景”
    },
    “照明”：{
      "type": "自然阳光，明亮的日光",
      “阴影”：“坚硬、逼真的太阳阴影；皮肤和球衣上清晰的高光；头发上逼真的镜面光泽；没有工作室光反射”
    },
    “相机”：{
      "capture_device": "智能手机或消费类相机",
      "framing": "中景（躯干和头部清晰可见），居中构图",
      "angle": "眼睛水平",
      "focus": "重点关注脸部和球衣细节；背景稍微柔和但可识别",
      "look": "温和自然的柔软度，不过分锐化；真实的手持感，无运动模糊"
    },
    “风格”：{
      "aesthetic": "坦率的 Instagram 影响者风格、逼真、超详细、高分辨率、8K 外观",
      "skin_rendering": "自然皮肤纹理和毛孔可见，无整形平滑，无重度修饰",
      "color": "逼真的日光颜色，没有电影般的青橙色分级，没有人工滤镜",
      “质量”：“干净、清晰、自然的摄影、逼真的织物行为和缝合”
    },
    "negative_prompt": "俱乐部徽标、利物浦队徽、耐克俱乐部球衣赞助商徽标、渣打银行文字、Expedia 文字、时尚活动工作室灯光、环形灯聚光灯、姿势过度的模特姿势、塑料皮肤、过度平滑的脸部、动漫、插图、CGI、人造背景、文本水印、拼写错误的徽标、扭曲的队徽、额外的肢体、扭曲的手、不切实际的解剖结构、极端 HDR、电影色彩分级"
  }
}
```

---

## English Original

### Title

Photorealistic Image Prompt for Fashion and Environment

### Description



### Prompt

```md
{
  "image_prompt": {
    "subject": {
      "type": "Adult woman (21+) matching the reference image identity",
      "appearance": "Fair skin, long dark messy hair with subtle red highlights, nose piercing",
      "expression": "Relaxed, looking directly at the camera, mouth slightly open",
      "pose": "Medium shot; both arms raised; hands running through hair; elbows pointing outward; confident, casual posture"
    },
    "outfit": {
      "clothing": "Türkiye (Turkish) national football team jersey",
      "details": "Official-style Türkiye national team jersey (home kit look): deep red base with subtle tonal fabric patterning, clean white accents, crew neck collar. Include a white Nike swoosh on the right chest and the Türkiye crest (TFF badge with crescent and star) on the left chest. No club crest, no club sponsor logos, no 'Standard Chartered', no 'Expedia'. Fabric looks like modern performance polyester, slightly textured, natural wrinkles from movement.",
      "accessories": "Black hair tie on wrist"
    },
    "environment": {
      "location": "Inside a boat or yacht, positioned near a window frame",
      "background": "Bright blue ocean under sunny sky; distant rocky coastline and cliffs visible through the window; the window frame is visible and helps ground the scene as shot from inside the boat"
    },
    "lighting": {
      "type": "Natural sunlight, bright daylight",
      "shadows": "Hard, realistic sun shadows; crisp highlights on skin and jersey; realistic specular sheen on hair; no studio light reflections"
    },
    "camera": {
      "capture_device": "Smartphone or consumer camera",
      "framing": "Medium shot (torso and head clearly visible), centered composition",
      "angle": "Eye-level",
      "focus": "Sharp focus on face and jersey details; background slightly softer but recognizable",
      "look": "Mild natural softness, not over-sharpened; realistic handheld feel without motion blur"
    },
    "style": {
      "aesthetic": "Candid Instagram influencer style, photorealistic, ultra-detailed, high resolution, 8K look",
      "skin_rendering": "Natural skin texture and pores visible, no plastic smoothing, no heavy retouching",
      "color": "True-to-life daylight color, no cinematic teal-orange grading, no artificial filters",
      "quality": "Clean, crisp, natural photography, realistic fabric behavior and stitching"
    },
    "negative_prompt": "club logos, Liverpool crest, Nike club kit sponsor logos, Standard Chartered text, Expedia text, fashion campaign studio lighting, ring light catchlights, over-posed model stance, plastic skin, overly smoothed face, anime, illustration, CGI, artificial background, text watermark, misspelled logos, distorted crest, extra limbs, warped hands, unrealistic anatomy, extreme HDR, cinematic color grading"
  }
}

```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [photorealistic-image-prompt-for-fashion-and-environment](https://prompts.chat/prompts/photorealistic-image-prompt-for-fashion-and-environment) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | beatstobytes |
| Updated At | 2026-01-03T11:56:37.516Z |
