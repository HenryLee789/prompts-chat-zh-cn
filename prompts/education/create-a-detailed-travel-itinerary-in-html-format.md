---
id: "cmjgtsjhr0001l204ykffrvs2"
slug: "create-a-detailed-travel-itinerary-in-html-format"
source: "https://github.com/f/prompts.chat"
source_url: "https://prompts.chat/prompts/create-a-detailed-travel-itinerary-in-html-format"
category: "education"
category_name: "Education"
category_zh: "教育"
type: "IMAGE"
translation_status: "machine_translated"
translation_provider: "google"
source_hash: "0e32beb68f59ce32286bbd7bc8580cf35b04887f9bc1bea368cea6c3c2624371"
upstream_updated_at: "2025-12-22T07:19:38.535Z"
---
# 创建 HTML 格式的详细旅行行程

> 来源：[prompts.chat](https://github.com/f/prompts.chat)  
> 上游页面：[create-a-detailed-travel-itinerary-in-html-format](https://prompts.chat/prompts/create-a-detailed-travel-itinerary-in-html-format)  
> 分类：教育（Education / `education`）  
> 类型：`IMAGE`  
> 翻译状态：`machine_translated`

## 中文说明

生成从南京到长春的综合旅行行程，涵盖航班、住宿、每日行程、景点和餐饮，以 HTML 形式呈现。

## 使用场景

- 用于教育相关任务的 AI prompt 输入。
- 用于图像生成模型的画面描述、风格控制和视觉创意生成。
- 适合围绕 Travel、HTML、Planning 等主题快速生成可复用结果。

## 适用人群

- 教师
- 学生
- 培训人员

## 中文 Prompt 正文

```md
<!DOCTYPE html>
<html>
<头>
    <title>行程：南京至长春</title>
    <风格>
        正文 { 字体系列：Arial、无衬线字体； }
        .行程{ 边距：20px; }
        .day { 边距底部：20px; }
        .header { 字体大小：24px;字体粗细：粗体； }
        .sub-header { 字体大小：18px;字体粗细：粗体； }
    </风格>
</头>
<正文>
    <div class="行程">
        <div class="header">行程：南京至长春</div>
        <div class="sub-header">日期：${startDate} 至 ${endDate}</div>
        <div class="sub-header">预算：${budget}人民币</div>

        <div 类=“日”>
            <div class="sub-header">第一天：抵达长春</div>
            <p><strong>航班：</strong> ${flightDetails}</p>
            <p><strong>酒店：</strong> ${hotelName} - 位于市中心，舒适且价格实惠</p>
            <p><strong>天气：</strong> ${weatherForecast}</p>
            <p><strong>包装提示：</strong> ${packingRecommendations}</p>
        </div>

        <div 类=“日”>
            <div class="sub-header">第 2 天：探索长春</div>
            <p><strong>景点：</strong>${attraction1}（门票：${ticketPrice1}，开园时间：${openTime1}）</p>
            <p><strong>午餐：</strong>在 ${restaurant1} 品尝当地美食</p>
            <p><strong>下午：</strong>参观${attraction2}（门票：${ticketPrice2}，开放时间：${openTime2}）</p>
            <p><strong>晚餐：</strong>在 ${restaurant2} 享用餐点</p>
            <p><strong>交通：</strong>${transportDetails}</p>
        </div>

        <!-- 在第 3 天、第 4 天等重复类似的块 -->
        
        <div 类=“日”>
            <div class="sub-header">第 5 天：出发</div>
            <p><strong>回程航班：</strong> ${returnFlightDetails}</p>
        </div>

    </div>
</正文>
</html>
```

---

## English Original

### Title

Create a detailed travel itinerary in HTML format

### Description

Generate a comprehensive travel itinerary from Nanjing to Changchun, covering flights, accommodation, daily itineraries, attractions, and dining, presented in HTML.

### Prompt

```md
<!DOCTYPE html>
<html>
<head>
    <title>Travel Itinerary: Nanjing to Changchun</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .itinerary { margin: 20px; }
        .day { margin-bottom: 20px; }
        .header { font-size: 24px; font-weight: bold; }
        .sub-header { font-size: 18px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="itinerary">
        <div class="header">Travel Itinerary: Nanjing to Changchun</div>
        <div class="sub-header">Dates: ${startDate} to ${endDate}</div>
        <div class="sub-header">Budget: ${budget} RMB</div>

        <div class="day">
            <div class="sub-header">Day 1: Arrival in Changchun</div>
            <p><strong>Flight:</strong> ${flightDetails}</p>
            <p><strong>Hotel:</strong> ${hotelName} - Located in city center, comfortable and affordable</p>
            <p><strong>Weather:</strong> ${weatherForecast}</p>
            <p><strong>Packing Tips:</strong> ${packingRecommendations}</p>
        </div>

        <div class="day">
            <div class="sub-header">Day 2: Exploring Changchun</div>
            <p><strong>Attractions:</strong> ${attraction1} (Ticket: ${ticketPrice1}, Open: ${openTime1})</p>
            <p><strong>Lunch:</strong> Try local cuisine at ${restaurant1}</p>
            <p><strong>Afternoon:</strong> Visit ${attraction2} (Ticket: ${ticketPrice2}, Open: ${openTime2})</p>
            <p><strong>Dinner:</strong> Enjoy a meal at ${restaurant2}</p>
            <p><strong>Transportation:</strong> ${transportDetails}</p>
        </div>

        <!-- Repeat similar blocks for Day 3, Day 4, etc. -->
        
        <div class="day">
            <div class="sub-header">Day 5: Departure</div>
            <p><strong>Return Flight:</strong> ${returnFlightDetails}</p>
        </div>

    </div>
</body>
</html>
```

### Metadata

| Field | Value |
| --- | --- |
| Source | [prompts.chat](https://github.com/f/prompts.chat) |
| Upstream URL | [create-a-detailed-travel-itinerary-in-html-format](https://prompts.chat/prompts/create-a-detailed-travel-itinerary-in-html-format) |
| Category | Education (`education`) |
| Type | `IMAGE` |
| Tags | Travel, HTML, Planning |
| Contributors | flyp1028 |
| Updated At | 2025-12-22T07:19:38.535Z |
