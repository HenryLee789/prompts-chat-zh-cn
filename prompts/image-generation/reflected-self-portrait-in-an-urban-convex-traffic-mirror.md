---
id: "cmjpttki30001lj04kr0bquyb"
slug: "reflected-self-portrait-in-an-urban-convex-traffic-mirror"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/reflected-self-portrait-in-an-urban-convex-traffic-mirror"
category: "image-generation"
category_name: "Image Generation"
category_zh: "图像生成"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "30ebcae72c550fc510aa61633c8cb4cb57b454b5e78c5b65ab1232b3e7c553c9"
upstream_updated_at: "2026-01-03T00:06:53.818Z"
---
# 城市凸面交通镜中倒映的自画像

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[reflected-self-portrait-in-an-urban-convex-traffic-mirror](https://prompts.chat/prompts/reflected-self-portrait-in-an-urban-convex-traffic-mirror)  
> 分类：图像生成（Image Generation / `image-generation`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

一个穿着深色外套和栗色围巾的人用智能手机在大型橙框交通镜内捕捉自己的倒影。扭曲的广角视图展示了一条阴沉的城市街道，两旁排列着历史建筑，镜子上方有一个显眼的红色路标。

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
  “图像分析”：{
    “环境”：{
      “类型”：“户外”，
      "setting": "城市街景",
      “天气”：“阴天/多云”
    },
    “技术规格”：{
      "camera_lens": "广角（可能是智能手机后置摄像头）",
      "camera_angle": "低角度，向上看交通镜和路牌",
      “focus”：“清晰地聚焦在凸面镜和直接前景上，由于宽镜头和镜子曲率而产生轻微失真”
    },
    “照明”：[
      {
        “源id”：1，
        "type": "自然环境光（阴天）",
        "angle": "头顶/扩散",
        “颜色”：“冷白色/灰色”，
        “强度”：“中等”，
        "effect_on_objects": "创建具有柔和、未定义阴影的平面照明；建筑物正面的对比度最小；在凸面镜的上曲线上产生眩光。"
      }
    ],
    “人”：[
      {
        "id": "person_1_摄影师",
        "location": "凸面镜反射内可见",
        "identity_status": "匿名（手机遮挡脸部）",
        “方向”：{
          "body_direction": "面向前方（朝向镜子）",
          "face_direction": "面向前方（朝向镜子/手机）"
        },
        "emotional_state": "无法确定（脸部被遮挡）",
        “姿势”：{
          "general_definition": "直立",
          "feet_position": "不可见（在反射中裁剪）",
          "hand_position": "抬起至面部水平，手持智能手机拍照",
          "visibility_extent": "在反射中从大腿中部/膝盖到头部可见"
        },
        “头详细信息”：{
          “头发”：{
            "color": "深色（黑色或深棕色）",
            "style": "长、宽松",
            "shape": "落在肩膀上"
          },
          "ears": "被头发覆盖",
          “脸部特征”：{
            "forehead": "被手机/头发遮挡",
            "eyes": "被手机遮挡",
            "nose": "被手机遮挡",
            "mouth": "被电话遮挡",
            "chin": "手机下方部分可见，肤色白皙"
          },
          "facial_hair": "无"
        },
        “身体详细信息”：{
          "body_type": "平均/苗条（由于衣服厚重，难以确定）",
          "skin_tone": "浅色/白皙（在手/脸上可见）",
          "neck": "用围巾遮住",
          "shoulders": "被外套覆盖，放松",
          “胸部”：{
            "ratio_to_body": "无法确定（被厚外套覆盖）",
            “测量”：“无法确定”，
            "bra_status": "无法确定",
            "nipple_visibility": "不可见",
            "size_appearance": "由于冬季服装的原因无法确定"
          },
          “腹部”：{
            "ratio_to_body": "被外套隐藏",
            "ratio_to_chest": "无法确定",
            "ratio_to_hips": "无法确定"
          },
          “臀部”：{
            "ratio_to_body": "被外套隐藏",
            "measurement_estimate": "无法确定"
          },
          “腿”：{
            "visibility": "部分可见（大腿上部）",
            "clothing": "深色裤子/紧身衣"
          }
        },
        “服装”：{
          "upper_body": "深色（黑色或海军蓝）大衣，松散包裹的栗色/深红色围巾",
          "lower_body": "深色长裤或紧身裤（部分可见）",
          "light_interaction": "织物吸收光线，呈现哑光效果",
          "accessories": "智能手机（手持）",

"footwear": "不可见"
        }
      },
      {
        “id”：“person_2_pedestrian”，
        "location": "凸面镜反射内部可见（背景）",
        "identity_status": "匿名（转身）",
        “方向”：{
          "body_direction": "远离摄像机",
          "face_direction": "向前（远离相机）"
        },
        “姿势”：{
          "general_definition": "步行",
          "visibility_extent": "全身在远处可见"
        },
        “服装”：{
          "upper_body": "深色外套",
          "lower_body": "深色裤子"
        }
      }
    ],
    “对象”：[
      {
        "name": "凸面交通镜",
        "目的": "交通安全/盲角可见性",
        "contribution_to_scene": "充当自画像反射的焦点和框架",
        "proportions": "占据中心前景",
        "color": "橙色（边缘）、反光银（表面）",
        "location": "图像中心"
      },
      {
        "name": "路牌",
        "目的": "导航/位置标识符",
        "text_content": "MAKLIK（部分可见）",
        "color": "红色背景白色文字",
        "location": "固定在镜子上方的杆子上"
      },
      {
        "name": "公寓楼（左）",
        “用途”：“住宅/商业”，
        "proportions": "大型多层结构",
        "color": "灰白色立面",
        "features": "带有白色栏杆的阳台，侧面有高大的金属烟囱/通风管",
        "location": "左侧前景"
      },
      {
        "name": "木结构建筑（背景左）",
        “目的”：“住宅/历史”，
        “颜色”：“褪色的红色/粉色”，
        "location": "在镜子后面的背景中可见",
        “特色”：“传统建筑，木质壁板”
      },
      {
        "name": "白色建筑（倒影）",
        “目的”：“公共/机构”，
        “颜色”：“奶油色/白色”，
        "location": "镜子中的倒影",
        "features": "拱形窗户，历史风格"
      },
      {
        "name": "树木/植被",
        “目的”：“环境”，
        "color": "深绿色/棕色（秋季）",
        "location": "右侧和背景"
      }
    ],
    "negative_prompt": "明亮的阳光、蓝天、直射闪光、裸露、夏季服装、高对比度、工作室灯光、微距镜头、详细的面部视图、清晰的文本、现代玻璃摩天大楼、噪音、颗粒、水印"
  }
}
```

---

## English Original

### Title

Reflected Self-Portrait in an Urban Convex Traffic Mirror

### Description

A person wearing a dark coat and maroon scarf captures their reflection using a smartphone inside a large, orange-rimmed traffic mirror. The distorted wide-angle view showcases an overcast city street lined with historic buildings and a prominent red street sign above the mirror.

### Prompt

```md
{
  "image_analysis": {
    "environment": {
      "type": "Outdoor",
      "setting": "Urban street scene",
      "weather": "Overcast/Cloudy"
    },
    "technical_specs": {
      "camera_lens": "Wide-angle (likely smartphone rear camera)",
      "camera_angle": "Low angle, looking upwards towards a traffic mirror and street sign",
      "focus": "Sharp focus on the convex mirror and the immediate foreground, slight distortion due to wide lens and mirror curvature"
    },
    "lighting": [
      {
        "source_id": 1,
        "type": "Natural Ambient Light (Overcast Sky)",
        "angle": "Overhead/Diffused",
        "color": "Cool White / Greyish",
        "intensity": "Moderate",
        "effect_on_objects": "Creates flat lighting with soft, undefined shadows; minimal contrast on building facades; creates a glare on the upper curve of the convex mirror."
      }
    ],
    "people": [
      {
        "id": "person_1_photographer",
        "location": "Visible inside the reflection of the convex mirror",
        "identity_status": "Anonymized (Face obscured by phone)",
        "orientation": {
          "body_direction": "Facing forward (towards the mirror)",
          "face_direction": "Facing forward (towards the mirror/phone)"
        },
        "emotional_state": "Indeterminable (Face obscured)",
        "posture": {
          "general_definition": "Standing upright",
          "feet_position": "Not visible (cropped in reflection)",
          "hand_position": "Raised to face level, holding a smartphone to take the photo",
          "visibility_extent": "Visible from mid-thigh/knees up to head in the reflection"
        },
        "head_details": {
          "hair": {
            "color": "Dark (Black or Dark Brown)",
            "style": "Long, loose",
            "shape": "Falls over shoulders"
          },
          "ears": "Covered by hair",
          "face_features": {
            "forehead": "Obscured by phone/hair",
            "eyes": "Obscured by phone",
            "nose": "Obscured by phone",
            "mouth": "Obscured by phone",
            "chin": "Partially visible below phone, fair skin tone"
          },
          "facial_hair": "None"
        },
        "body_details": {
          "body_type": "Average/Slender (hard to determine due to heavy clothing)",
          "skin_tone": "Light/Fair (visible on hands/face)",
          "neck": "Covered by scarf",
          "shoulders": "covered by coat, relaxed",
          "chest": {
            "ratio_to_body": "Indeterminable (covered by thick coat)",
            "measurements": "Indeterminable",
            "bra_status": "Indeterminable",
            "nipple_visibility": "Not visible",
            "size_appearance": "Indeterminable due to winter clothing"
          },
          "abdomen": {
            "ratio_to_body": "Concealed by coat",
            "ratio_to_chest": "Indeterminable",
            "ratio_to_hips": "Indeterminable"
          },
          "hips": {
            "ratio_to_body": "Concealed by coat",
            "measurement_estimation": "Indeterminable"
          },
          "legs": {
            "visibility": "Partially visible (upper thighs)",
            "clothing": "Dark trousers/tights"
          }
        },
        "clothing": {
          "upper_body": "Dark (black or navy) overcoat, maroon/dark red scarf wrapped loosely",
          "lower_body": "Dark trousers or leggings (partially visible)",
          "light_interaction": "Fabric absorbs light, appearing matte",
          "accessories": "Smartphone (held in hands)",
          "footwear": "Not visible"
        }
      },
      {
        "id": "person_2_pedestrian",
        "location": "Visible inside the reflection of the convex mirror (background)",
        "identity_status": "Anonymized (Back turned)",
        "orientation": {
          "body_direction": "Walking away from the camera",
          "face_direction": "Forward (away from camera)"
        },
        "posture": {
          "general_definition": "Walking",
          "visibility_extent": "Full body visible in distance"
        },
        "clothing": {
          "upper_body": "Dark coat",
          "lower_body": "Dark trousers"
        }
      }
    ],
    "objects": [
      {
        "name": "Convex Traffic Mirror",
        "purpose": "Traffic safety/Visibility for blind corners",
        "contribution_to_scene": "Acts as the focal point and frame for the self-portrait reflection",
        "proportions": "Dominates the center foreground",
        "color": "Orange (rim), Reflective silver (surface)",
        "location": "Center of the image"
      },
      {
        "name": "Street Sign",
        "purpose": "Navigation/Location identifier",
        "text_content": "MAKLIK (Partial visibility)",
        "color": "Red background with white text",
        "location": "Attached to the pole above the mirror"
      },
      {
        "name": "Apartment Building (Left)",
        "purpose": "Residential/Commercial",
        "proportions": "Large, multi-story structure",
        "color": "Grey and white facade",
        "features": "Balconies with white railings, tall metal chimney/vent pipe attached to side",
        "location": "Left side foreground"
      },
      {
        "name": "Wooden Building (Background Left)",
        "purpose": "Residential/Historic",
        "color": "Faded Red/Pink",
        "location": "Visible in the background behind the mirror",
        "features": "Traditional architecture, wooden siding"
      },
      {
        "name": "White Building (In Reflection)",
        "purpose": "Public/Institutional",
        "color": "Cream/White",
        "location": "Reflected in the mirror",
        "features": "Arched windows, historic style"
      },
      {
        "name": "Trees/Vegetation",
        "purpose": "Environment",
        "color": "Dark Green/Brownish (Autumnal)",
        "location": "Right side and background"
      }
    ],
    "negative_prompt": "bright sunshine, blue sky, direct flash, nudity, summer clothing, high contrast, studio lighting, macro lens, detailed face view, clear text, modern glass skyscraper, noise, grain, watermark"
  }
}
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [reflected-self-portrait-in-an-urban-convex-traffic-mirror](https://prompts.chat/prompts/reflected-self-portrait-in-an-urban-convex-traffic-mirror) |
| Category | Image Generation (`image-generation`) |
| Type | `IMAGE` |
| Tags | None |
| Contributors | hasangariban |
| Updated At | 2026-01-03T00:06:53.818Z |
